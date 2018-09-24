import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '@app/core/services/auth.service';
import { Observable, Subscription } from 'rxjs';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Test } from '@app/core/model/test.model';
import { MatSnackBar } from '@angular/material';


const initTestQuery = gql`
  query test($where: TestWhereInput!) {
    tests (where: $where)  {
      id
      description
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

  initTestData: Test[];
  testQuerySubcription: Subscription;

  constructor(
    private authService: AuthService,
    private apollo: Apollo,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.isAdmin = this.authService.isAdmin();
    this.isSpecialist = this.authService.isSpecialist();
    this.isStudent = this.authService.isStudent();

    this.testQuerySubcription = this.apollo
      .watchQuery<any>({
        query: initTestQuery,
        variables: {
          where: {
            'type': 'INITIAL',
            'enable': true
          }
        }
      })
      .valueChanges.subscribe(
        ({ data, loading }) => {
          if (!loading) {
            this.initTestData = data.tests;
          }
        },
        (error) => {
          this.snackBar.open(error.message, 'X', {
            duration: 3000
          });
        }
      );
  }

  ngOnDestroy(): void {
    this.testQuerySubcription.unsubscribe();
  }

}
