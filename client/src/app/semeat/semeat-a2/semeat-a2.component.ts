import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-semeat-a2',
  template: `
    <div class="container" fxLayout="row" fxLayout.xs="column" fxLayoutAlign="center center">
      <div fxFlex="90%" fxFlex.xs="98%" fxFlex.gt-sm="90%">

        <h3 mat-h3>Dígitos en regresión</h3>

        <span>Se mostrarán varias series de números, repíta cada serie en orden regresivo.
         Por ejemplo, si se muestra 6-9 usted escribe 9-6.
         <button mat-icon-button color="accent" [disabled]="flagStart" (click)="start()"><mat-icon>alarm</mat-icon></button>
        </span>

        <h2 mat-h2 [hidden]="flagQuestion">{{question}}</h2>

        <form [formGroup]="exerciseForm" #f="ngForm" (ngSubmit)="saveForm()">

          <div class="item" [hidden]="!flagQuestion || !flagStart">
            <mat-form-field class="half-width">
              <input matInput type="text" placeholder="Introduce la serie en orden regresivo" formControlName="response">
            </mat-form-field>
            <div class="button">
              <button mat-raised-button color="accent" type="submit" aria-label="done">
                <span>Evaluar</span>
                <mat-icon>trending_flat</mat-icon>
              </button>
            </div>
          </div>
        </form>
        <div class="button" [hidden]="flagFinish">
          <button mat-raised-button color="accent" [disabled]="!exerciseForm.valid"
              (click)="saveExercise()" type="button" aria-label="done">
            <mat-icon>done</mat-icon>
            <span>Hecho</span>
          </button>
        </div>
      </div>
    </div>

  `,
  styles: [
    `
      .full-width {
        width: 100%;
      }
      .half-width {
        width: 100%;
      }
    `
  ]
})
export class SemeatA2Component implements OnInit {
  exerciseForm: FormGroup;
  @Output()save = new EventEmitter();
  initAt: Date;

  question: string;

  flagStart = false;
  flagFinish = true;
  flagQuestion = true;

  series = 0;
  count = 0;
  hit = 0;
  point = 0;
  fault = 0;
  omit = 0;

  exercise: any;
  create: any[] = [];

  data: any = [
    [
      {
        question: '2-4',
        response: '4-2'
      },
      {
        question: '3-9-5',
        response: '5-9-3'
      },
      {
        question: '1-3-6-9',
        response: '9-6-3-1'
      },
      {
        question: '3-8-1-5-9',
        response: '9-5-1-8-3'
      },
      {
        question: '2-4-8-9-1-6',
        response: '6-1-9-8-4-2'
      }
    ],
    [
      {
        question: '3-9',
        response: '9-3'
      },
      {
        question: '1-9-0',
        response: '0-9-1'
      },
      {
        question: '2-5-7-9',
        response: '9-7-5-2'
      },
      {
        question: '1-7-0-2-4',
        response: '4-2-0-7-1'
      },
      {
        question: '9-4-2-8-7-1',
        response: '1-7-8-2-4-9'
      }
    ]
  ];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.exerciseForm = this.formBuilder.group({
      response: ['']
    });
  }

  start(): void {
    this.flagStart = true;
    this.flagQuestion = false;
    this.initAt = new Date();

    this.question = this.data[this.series][this.count].question;

    setTimeout(() => {
      this.flagQuestion = true;
    }, (this.count + 2) * 1000);
  }

  saveForm(): void {
    if (this.exerciseForm.valid) {
      let response = this.exerciseForm.value.response;

      if (response === this.data[this.series][this.count].response) {
        this.count += 1;
        this.hit += 1;
        this.point += 1;

      } else {
        if (!response) {
          this.omit += 1;
          response = '';
        } else {
          this.fault += 1;
        }
        this.series += 1;
      }

      this.create.push({
        question: this.question,
        response: response
      });

      if (this.series > 1 || this.count >= 5) {
        this.flagQuestion = false;
        this.question = 'Se ha terminado';
        this.flagFinish = false;
      } else {
        this.question = this.data[this.series][this.count].question;
        this.flagQuestion = false;

        setTimeout(() => {
          this.flagQuestion = true;
        }, (this.count + 2) * 1000);
      }
      this.exerciseForm.reset();
    }
  }

  saveExercise(): void {
    this.exercise = {
      result: {
        create: this.create
      },
      initAt: this.initAt,
      finalAt: new Date(),
      hit: this.hit,
      error: this.fault + this.omit,
      fault: this.fault,
      omit: this.omit,
      point: this.point
    };

    this.exerciseForm.disable();
    this.save.emit(this.exercise);
  }
}
