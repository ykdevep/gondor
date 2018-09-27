import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { trigger, style, state, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-semeat-a3',
  template: `
    <div class="container" fxLayout="row" fxLayout.xs="column" fxLayoutAlign="center center">
      <div fxFlex="90%" fxFlex.xs="98%" fxFlex.gt-sm="90%">

        <h3 mat-h3>Detección Visual</h3>

        <span>
          Presione los botones cuya figura sea igual a la figura resaltada,
          se mostrará por 3 segundos, para realizar el ejercicio dispondrá de 60 segundos.
          <button mat-mini-fab color="accent" [disabled]="flagStart" (click)="start()"><mat-icon>alarm</mat-icon></button>
        </span>

        <div class="question" [@state]="state" [hidden]="flagQuestion"><mat-icon>{{question.value}}</mat-icon></div>

        <br />

        <form [formGroup]="exerciseForm" #f="ngForm" (ngSubmit)="saveForm()">

          <input formControlName="flagFormControl" type="hidden">

          <div class="buttons" [@state]="state" [hidden]="!flagStart || !flagQuestion">
            <mat-grid-list cols="6" rowHeight="6:2">
              <mat-grid-tile *ngFor="let icon of icons">
                <button hideButton mat-raised-button type="button" [disabled]="!flagQuestion || flagFinish" (click)="validQuestion(icon)">
                    <mat-icon>{{icon}}</mat-icon>
                </button>
              </mat-grid-tile>
            </mat-grid-list>
            <br />
            <div class="button" [hidden]="!exerciseForm.valid && !flagFinish">
              <button mat-raised-button color="accent" [disabled]="!exerciseForm.valid"
                  type="submit" aria-label="done">
                <mat-icon>done</mat-icon>
                <span>Hecho</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>

  `,
  styles: [    `
      .full-width {
        width: 100%;
      }
      .half-width {
        width: 100%;
      }
      .hide {
        display: none!important;
      }
      .question > mat-icon {
        font-size: 35px;
        height: 35px;
        width: 35px;
      }
    `
  ],
  animations: [
    trigger('state', [
      state('inactive', style({transform: 'translateX(0) scale(0.9)'})),
      state('active',   style({transform: 'translateX(0) scale(1.0)'})),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out')),
      transition('void => inactive', [
        style({transform: 'translateX(-100%) scale(1)'}),
        animate(100)
      ]),
      transition('inactive => void', [
        animate(100, style({transform: 'translateX(100%) scale(1)'}))
      ]),
      transition('void => active', [
        style({transform: 'translateX(0) scale(0)'}),
        animate(200)
      ]),
      transition('active => void', [
        animate(200, style({transform: 'translateX(0) scale(0)'}))
      ])
    ]
  )]
})
export class SemeatA3Component implements OnInit {
  exerciseForm: FormGroup;
  @Output() save = new EventEmitter();
  initAt: Date;

  flagStart = false;
  flagFinish = false;
  flagQuestion = true;

  state = 'active';

  hit = 0;
  point = 0;
  fault = 0;
  omit = 4;

  exercise: any;
  create: any[] = [];

  icons: string [] = [
    'account_box',
    'person',
    'account_circle',
    'account_box',
    'android',
    'face',
    'grade',
    'record_voice_over',
    'account_box',
    'sentiment_very_dissatisfied',
    'android',
    'sentiment_very_satisfied',
    'supervisor_account',
    'people_outline',
    'people',
    'sentiment_dissatisfied',
    'android',
    'person',
    'face',
    'sentiment_neutral',
    'account_box',
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
  }

  start(): void {
    this.flagStart = true;
    this.flagQuestion = false;
    this.state = (this.state !== 'active') ? 'active' : 'inactive';
    setTimeout(() => {
      this.flagQuestion = true;
      this.state = (this.state !== 'active') ? 'active' : 'inactive';
      this.exerciseForm.setValue({flagFormControl: 'true'});
    }, 3000);

    setTimeout(() => {
      this.flagFinish = true;
    }, 60000);
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
