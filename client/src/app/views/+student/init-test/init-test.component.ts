import { Component, OnInit, OnDestroy } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Subscription, Observable } from 'rxjs';
import { Test } from '@app/core/model/test.model';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@app/core/services/auth.service';
import { User } from '@app/core/model/user.model';
import { TestData } from '@app/core/model/testData.model';


const initTestQuery = gql`
  query test($id: String!) {
    test(id: $id) {
      id
      type
      description
      enable
      sections {
        id
        name
        description
        exercises {
          id
          code
          description
        }
      }
    }
  }
`;

const createTestData = gql`
  mutation createTestData($data: TestDataCreateInput!) {
    createTestData(data: $data) {
      id
    }
  }
`;

@Component({
  selector: 'app-init-test',
  templateUrl: './init-test.component.html',
  styles: [`
    .grid-container {
      padding: 0 10px 0 10px;
    }

    .list {
      list-style: none;
    }

    .mat-toolbar-row, .mat-toolbar-single-row {
      white-space: normal;
    }

    .button-action {
      display: flex;
      flex-direction: row;
    }
  `]
})
export class InitTestComponent implements OnInit, OnDestroy {

  test: Test;
  testId: string;
  loading = false;

  testQuerySubscription: Subscription;

  currentUser: Observable<User>;
  today: Date;
  age: number;
  name: string;
  testData: TestData;

  multiple: boolean[][] = [];
  steps: boolean[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar,
    private apollo: Apollo,
    private router: Router,
    private authService: AuthService
  ) {
    this.today = new Date();
   }

  ngOnInit() {
    this.testId = this.activatedRoute.snapshot.params['id'];
    this.loading = true;

    this.currentUser = this.authService.getAsyncUser();

    this.currentUser.subscribe(user => {
      if (user) {
        this.age = Math.round((new Date().getTime() - new Date(user.birthdate).getTime()) / (60000 * 60 * 24 * 365.25));
        this.name = user.firstname;

        this.testData = {
          createdBy: user,
          initAt: this.today,
          finalAt: new Date(),
          type: 'INITIAL',
          exerciseDatas: []
        };
      }
    });

    this.testQuerySubscription = this.apollo
      .watchQuery<any>({
        query: initTestQuery,
        variables: {
          id: this.testId
        }
      })
      .valueChanges.subscribe(
        ({ data, loading }) => {
          if (!loading) {
            this.test = data.test;
            this.steps = new Array<boolean>(this.test.sections.length);
            for (let i = 0; i < this.test.sections.length; i++) {
              this.multiple.push([]);
              for (let g = 0; g < this.test.sections[i].exercises.length; g++) {
                this.multiple[i][g] = false;
              }
            }
            console.log(this.multiple);
            this.loading = false;
          }
        },
        error => {
          this.loading = false;
          this.snackBar.open(error, 'X', { duration: 3000 });
        }
      );
  }

  ngOnDestroy(): void {
    this.testQuerySubscription.unsubscribe();
    this.testData = null;
  }

  saveTest(): void {

    console.log(this.testData);

    if (this.testData) {

      this.apollo.mutate({
        mutation: createTestData,
        variables: {
          data: {
            type: this.testData.type,
            initAt: this.today,
            finalAt: new Date(),
            createdBy: {
              connect: {
                id: this.testData.createdBy.id
              }
            },
            exerciseDatas: {
              create: this.testData.exerciseDatas
            }
          }
        }
      }).subscribe(( {data} ) => {
        this.loading = false;

        if (data) {
          this.snackBar.open(`Cuestionario guardado correctamente`, 'X', {duration: 3000});
          this.router.navigate(['dashboard']);
        }
      }, (error) => {
        this.loading = false;
        this.snackBar.open(error, 'X', {duration: 3000});
      });
    } else {
      this.snackBar.open('Error al guardar cuestionario...', 'X', {duration: 3000});
    }
  }

  saveExercise($datas, i, g, count) {

    this.testData.exerciseDatas.push($datas);
    this.multiple[i][g] = true;
    let flag = false;

    for (let h = 0; h < count; h++) {
      if (!this.multiple[i][h]) {
        flag = false;
        break;
      }
      flag = true;
    }

    if (flag) {
      this.steps[i] = true;
    }

    console.log(this.multiple);
  }
}
