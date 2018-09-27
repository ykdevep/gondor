import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '@app/core/services/auth.service';
import { Observable, Subscription } from 'rxjs';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Test } from '@app/core/model/test.model';
import { MatSnackBar } from '@angular/material';
import { TestData } from '@app/core/model/testData.model';


const testDataQuery = gql`
  query testData($where: TestDataWhereInput!, $first: Int) {
    testDatas (where: $where, first: $first)  {
      id
      type
      createdBy {
        firstname
      }
      initAt
      finalAt
      exerciseDatas {
        hit
        fault
        omit
        error
        point
      }
    }
  }
`;

@Component({
  selector: 'app-dashboard',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, OnDestroy {

  isAdmin: Observable<boolean>;
  isSpecialist: Observable<boolean>;
  isStudent: Observable<boolean>;

  testData: TestData[];
  testDataQuerySubcription: Subscription;

  constructor(
    private authService: AuthService,
    private apollo: Apollo,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.isAdmin = this.authService.isAdmin();
    this.isSpecialist = this.authService.isSpecialist();
    this.isStudent = this.authService.isStudent();

    this.isStudent.subscribe(flag => {
      if (flag) {

        this.testDataQuerySubcription = this.apollo
        .watchQuery<any>({
          query: testDataQuery,
          variables: {
            where: {
              'type': 'INITIAL',
              'createdBy': {
                'id': this.authService.getUser().id
              }
            },
            first: 1
          }
        })
        .valueChanges.subscribe(
          ({ data, loading }) => {
            if (!loading) {
              if (data.testDatas.length > 0) {
                this.testData = data.testDatas[0];
              }
            }
          },
          (error) => {
            this.snackBar.open(error.message, 'X', {
              duration: 3000
            });
          }
        );
        }
    });
  }

  ngOnDestroy(): void {
    if (this.testDataQuerySubcription) {
      this.testDataQuerySubcription.unsubscribe();
    }
  }

}
