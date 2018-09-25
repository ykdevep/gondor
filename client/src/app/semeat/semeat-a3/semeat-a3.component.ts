import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-semeat-a3',
  template: `
    <div class="container" fxLayout="row" fxLayout.xs="column" fxLayoutAlign="center center">
      <div fxFlex="90%" fxFlex.xs="98%" fxFlex.gt-sm="90%">

        <h3 mat-h3>Detección Visual</h3>

        <span>
          Presione los botones cuya figura sea igual a la figura resaltada,
          se mostrará por 3 segundos, para realizar el ejercicio dispondrá de 60 segundos.
          <button mat-icon-button color="accent" [disabled]="flagStart" (click)="start()"><mat-icon>alarm</mat-icon></button>
        </span>

        <h2 mat-h2 [hidden]="flagQuestion"><mat-icon>{{question.value}}</mat-icon></h2>

        <form [formGroup]="exerciseForm" #f="ngForm" (ngSubmit)="saveForm()">

          <input formControlName="flagFormControl" type="hidden">

          <div class="buttons" [hidden]="!flagStart">
            <mat-grid-list cols="6" rowHeight="6:2">
              <mat-grid-tile *ngFor="let ico of data">
                <button hideButton mat-raised-button type="button" [disabled]="!flagQuestion || flagFinish" (click)="validQuestion(ico)">
                    <mat-icon>{{ico}}</mat-icon>
                </button>
              </mat-grid-tile>
            </mat-grid-list>
          </div>
          <br />
          <div class="button" [hidden]="!exerciseForm.valid && !flagFinish">
            <button mat-raised-button color="accent" [disabled]="!exerciseForm.valid"
                type="submit" aria-label="done">
              <mat-icon>done</mat-icon>
              <span>Hecho</span>
            </button>
          </div>
        </form>
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
      .hide {
        display: none!important;
      }
    `
  ]
})
export class SemeatA3Component implements OnInit {
  exerciseForm: FormGroup;
  @Output() save = new EventEmitter();
  initAt: Date;

  flagStart = false;
  flagFinish = false;
  flagQuestion = true;

  hit = 0;
  point = 0;
  fault = 0;
  omit = 0;

  exercise: any;
  create: any[] = [];

  icons: string [] = [
    'account_box',
    'person',
    'account_circle',
    'android',
    'face',
    'grade',
    'record_voice_over',
    'supervisor_account',
    'people_outline',
    'people',
    'sentiment_dissatisfied',
    'sentiment_neutral',
    'sentiment_satisfied',
    'sentiment_very_dissatisfied',
    'sentiment_very_satisfied',
  ];

  question: any = {
    name: 'account_box',
    value: 'account_box',
  };

  data: string[] = [];

  constructor(private formBuilder: FormBuilder) {
    this.initAt = new Date();
  }

  ngOnInit() {
    this.exerciseForm = this.formBuilder.group({
      flagFormControl: ['', Validators.required]
    });

    const q = this.icons[Math.round(Math.random() * (this.icons.length - 1))];

    this.question = {
      name: q,
      value: q,
    };

    for (let i = 0; i < this.icons.length * 4; i++) {

      const question = this.icons[Math.round(Math.random() * (this.icons.length - 1))];
      this.data.push(question);

      if (question === this.question.name) {
        this.omit += 1;
      }

    }
  }

  start(): void {
    this.flagStart = true;
    this.flagQuestion = false;
    setTimeout(() => {
      this.flagQuestion = true;
      this.exerciseForm.setValue({flagFormControl: 'true'});
    }, 3000);

    setTimeout(() => {
      this.flagFinish = true;
    }, 6000);
  }

  saveForm(): void {
    if (this.exerciseForm.valid) {

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
        point: this.hit
      };

      this.flagFinish = true;

      this.exerciseForm.disable();
      this.save.emit(this.exercise);
    }
  }

  validQuestion(value: string): void {
    if (this.question.value === value) {
      this.hit += 1;
      this.omit -= 1;
    } else {
      this.fault += 1;
    }
    this.create.push({
      question: this.question.value,
      response: value
    });
  }
}

