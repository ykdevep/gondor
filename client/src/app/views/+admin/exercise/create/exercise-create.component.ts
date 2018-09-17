import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Apollo } from 'apollo-angular';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import gql from 'graphql-tag';


const createExercise = gql`
  mutation createExercise($data: ExerciseCreateInput!) {
    createExercise(data: $data) {
      code
      description
    }
  }
`;

@Component({
  selector: 'app-exercise-create',
  template: `
    <div class="container">
      <div class="loading">
        <mat-progress-bar *ngIf="loading" color="warn"></mat-progress-bar>
      </div>
    </div>
    <br />
    <div class="container" fxLayout="row" fxLayoutAlign="center center">
      <div class="item" fxFlex="50%" fxFlex.xs="98%" fxFlex.md="70%">

        <div class="mat-elevation-z8">
          <form [formGroup]="createExerciseForm" #f="ngForm" (ngSubmit)="onCreateExercise()" class="form">
            <mat-card class="exercise-card">
              <mat-card-header>
                <mat-card-title>
                  <h1>Crear Ejercicio</h1>
                </mat-card-title>
              </mat-card-header>

              <mat-card-content>

                <mat-form-field class="full-width">
                  <input matInput required type="text" placeholder="Código (A1, A2, A3...)" formControlName="code">
                </mat-form-field>

                <mat-form-field class="full-width">
                  <input matInput type="text" placeholder="Descripción" formControlName="description">
                </mat-form-field>

              </mat-card-content>
              <mat-card-actions>
                <button mat-raised-button color="primary" type="submit" [disabled]="!createExerciseForm.valid" aria-label="createExercise">
                  <mat-icon>add</mat-icon>
                  <span>Ejercicio</span>
                </button>

                <button mat-raised-button color="accent" routerLink="/admin/exercise"
                   routerLinkActive type="button" aria-label="exercisesList">
                  <mat-icon>list</mat-icon>
                  <span>Listado de ejercicios</span>
                </button>
              </mat-card-actions>
            </mat-card>
          </form>
        </div>
      </div>
    </div>

  `,
  styles: [`
    .full-width {
      width: 100%;
    }
  `]
})
export class ExerciseCreateComponent implements OnInit {

  createExerciseForm: FormGroup;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private apollo: Apollo
  ) { }

  ngOnInit() {

    this.createExerciseForm = this.formBuilder.group({
      code: ['', Validators.required],
      description: ['']
    });
  }

  onCreateExercise(): void {

    this.loading = true;

    if (this.createExerciseForm.valid) {

      this.createExerciseForm.disable();
      this.apollo.mutate({
        mutation: createExercise,
        variables: {
          data: {
            'code': this.createExerciseForm.value.code,
            'description': this.createExerciseForm.value.description,
          }
        }
      }).subscribe(( {data} ) => {
        this.loading = false;
        this.createExerciseForm.enable();

        if (data) {
          this.snackBar.open(`Ejercicio ${data.createExercise.code} creado correctamente`, 'X', {duration: 3000});
          this.router.navigate(['admin', 'exercise']);
        }
      }, (error) => {
        this.loading = false;
        this.createExerciseForm.enable();
        this.snackBar.open(error, 'X', {duration: 3000});
      });

    } else {
      console.log('Form not valid');
    }
  }
}
