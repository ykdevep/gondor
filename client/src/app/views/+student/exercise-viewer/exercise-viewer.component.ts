import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { MatSnackBar } from '@angular/material';
import { Exercise } from '@app/core/model/exercise.model';
import gql from 'graphql-tag';
import { Subscription, Observable } from 'rxjs';
import { User } from '@app/core/model/user.model';
import { AuthService } from '@app/core/services/auth.service';


const exerciseQuery = gql`
  query exercise($id: String!) {
    exercise(id: $id) {
      code
      point
      level
      description
    }
  }
`;

const createExeciseData = gql`
  mutation createExerciseData($data: ExerciseDataCreateInput!) {
    createExerciseData(data: $data) {
      id
    }
  }
`;

@Component({
  selector: 'app-exercise-viewer',
  template: `
    <div class="loading">
      <mat-progress-bar *ngIf="loading" color="warn"></mat-progress-bar>
    </div>
    <br />
    <div fxLayout="row" fxLayoutAlign="center center">
      <div class="item" fxFlex="98%">
        <div class="mat-elevation-z8 info loading-shade" *ngIf="!exercise && !loading">
          <h1 class="mat-h1">El ejercicio con id {{idExercise}} no existe</h1>
        </div>
      </div>
    </div>
    <div *ngIf="exercise" class="grid-container">
      <mat-toolbar color="accent" style="top: 60px; position: sticky; z-index: 100;">
        <h2>Nivel de Atención ({{exercise.level}})</h2>
      </mat-toolbar>
      <div class="container mat-elevation-z8" fxLayout="row" fxLayout.xs="column" fxLayoutAlign="center center">
        <div class="item" fxFlex="90%" fxFlex.xs="98%" fxFlex.md="96%">
          <mat-card>
            <mat-card-title>
              <mat-toolbar>
                <span>{{exercise.description}}</span>
                <span class="spacer"></span>
                <div [ngSwitch]="dificulty" matTooltip="Nivel de dificultad">

                  <div *ngSwitchCase="'basic'">
                    <mat-icon color="accent">start</mat-icon>
                  </div>

                  <div *ngSwitchCase="'half'">
                    <mat-icon color="primary">start</mat-icon>
                    <mat-icon color="primary">start</mat-icon>
                  </div>

                  <div *ngSwitchCase="'advanced'">
                    <mat-icon>start</mat-icon>
                    <mat-icon>start</mat-icon>
                    <mat-icon>start</mat-icon>
                  </div>
                </div>
              </mat-toolbar>
            </mat-card-title>
            <mat-card-content>

              <div [ngSwitch]="exercise?.code">
                <app-semeat-a1 *ngSwitchCase="'A1'" [user]="user" [point]="exercise?.point" (save)="saveExercise($event)"></app-semeat-a1>
                <app-semeat-a2 *ngSwitchCase="'A2'" [user]="user" [point]="exercise?.point" (save)="saveExercise($event)"></app-semeat-a2>
                <app-semeat-a3 *ngSwitchCase="'A3'" [user]="user" [point]="exercise?.point" (save)="saveExercise($event)"></app-semeat-a3>
                <app-semeat-a4 *ngSwitchCase="'A4'" [user]="user" [point]="exercise?.point" (save)="saveExercise($event)"></app-semeat-a4>
                <app-semeat-a5 *ngSwitchCase="'A5'" [user]="user" [point]="exercise?.point" (save)="saveExercise($event)"></app-semeat-a5>

                <div *ngSwitchDefault>
                  <h4 class="mat-h4">No se encuentra el ejercicio</h4>
                </div>
              </div>

              <br />
              <br />
              <br />
              <br />

              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />


              <br />
              <br />
              <br />
              <br />

              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />


              <br />
              <br />
              <br />
              <br />

              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />


            </mat-card-content>
            <mat-card-actions>
              <button color="accent" mat-raised-button routerLink="/dashboard"><mat-icon>dashboard</mat-icon> Escritorio</button>
            </mat-card-actions>
          </mat-card>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ExerciseViewerComponent implements OnInit, OnDestroy {

  dificulty: string;
  idExercise: string;
  loading = false;

  currentUser: Observable<User>;
  user: User;

  exercise: Exercise;
  exerciseQuerySubscription: Subscription;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar,
    private apollo: Apollo,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.currentUser = this.authService.getAsyncUser();

    this.currentUser.subscribe(user => {
      if (user) {
        this.user = user;
      }
    });
    this.dificulty =  this.activatedRoute.snapshot.params['dificulty'];
    this.idExercise =  this.activatedRoute.snapshot.params['id'];

    this.loading = true;

    this.exerciseQuerySubscription = this.apollo
        .watchQuery<any>({
          query: exerciseQuery,
          variables: {
            'id': this.idExercise
          }
        })
        .valueChanges.subscribe(
          ({ data, loading }) => {
            this.loading = loading;
            if (!loading) {
              this.exercise = data.exercise;
            }
          },
          (error) => {
            this.loading = false;
            this.snackBar.open(error.graphQLErrors[0].message, 'X', {
              duration: 3000
            });
          }
        );
  }

  ngOnDestroy(): void {
    this.exerciseQuerySubscription.unsubscribe();
  }

  saveExercise($datas) {
    if ($datas) {
      this.apollo.mutate({
        mutation: createExeciseData,
        variables: {
          data: $datas
        }
      }).subscribe(( {data} ) => {
        this.loading = false;

        if (data) {
          this.snackBar.open(`Ejercicio guardado correctamente`, 'X', {duration: 3000});
          this.router.navigate(['dashboard']);
        }
      }, (error) => {
        this.loading = false;
        this.snackBar.open(error, 'X', {duration: 3000});
      });
    } else {
      this.snackBar.open('Error al guardar ejercicio...', 'X', {duration: 3000});
    }
  }

}
