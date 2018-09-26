import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-semeat-a5',
  template: `
    <div class="container" fxLayout="row" fxLayout.xs="column" fxLayoutAlign="center center">
      <div fxFlex="90%" fxFlex.xs="98%" fxFlex.gt-sm="90%">

        <h3 mat-h3>Detección Visual</h3>

        <span>
           Marque las palabras que se mostraran por 5 segundos.
          <button mat-mini-fab color="accent" [disabled]="flagStart" (click)="start()"><mat-icon>alarm</mat-icon></button>
        </span>

        <h2 mat-h2 [hidden]="flagQuestion">{{question.toString()}}</h2>

        <form [formGroup]="exerciseForm" #f="ngForm" (ngSubmit)="saveForm()">

          <div class="questions" [hidden]="!flagQuestion || !flagStart">
            <mat-list>
              <mat-list-item *ngFor="let word of data" class="word">
                <mat-checkbox formControlName="word" (change)="onChange(word, $event)">{{word.name}}</mat-checkbox>
              </mat-list-item>
            </mat-list>
          </div>

          <br />
          <div class="button" [hidden]="!exerciseForm.valid || !flagQuestion || !flagStart || flagFinish">
            <button mat-raised-button color="accent" [disabled]="!exerciseForm.valid"
                type="submit" aria-label="done">
              <span>Evaluar</span>
              <mat-icon>trending_flat</mat-icon>
            </button>
          </div>
        </form>

        <div class="button" [hidden]="!flagFinish">
          <button mat-raised-button color="accent" [disabled]="!exerciseForm.valid"
            type="button" (click)="saveExercise()" aria-label="done">
            <mat-icon>done</mat-icon>
            <span>Guardar</span>
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
      .hide {
        display: none!important;
      }
      .word {
        width: 20%;
        float: left;
      }
    `
  ]
})
export class SemeatA5Component implements OnInit {
  exerciseForm: FormGroup;
  @Output() save = new EventEmitter();
  initAt: Date;

  flagStart = false;
  flagFinish = false;
  flagNext = false;
  flagQuestion = true;

  hit = 0;
  point = 0;
  fault = 0;
  omit = 18;

  index = 1;
  question: string[];

  exercise: any;
  create: any[] = [];

  words: any[] = [
    {
      name: 'gato',
      value: 1,
    },
    {
      name: 'pera',
      value: 1,
    },
    {
      name: 'mano',
      value: 1,
    },
    {
      name: 'fresa',
      value: 1,
    },
    {
      name: 'vaca',
      value: 1,
    },
    {
      name: 'codo',
      value: 1,
    },
    {
      name: 'perro',
      value: 2,
    },
    {
      name: 'naranja',
      value: 2,
    },
    {
      name: 'boca',
      value: 2,
    },
    {
      name: 'mango',
      value: 2,
    },
    {
      name: 'pierna',
      value: 2,
    },
    {
      name: 'abeja',
      value: 2,
    },
    {
      name: 'caballo',
      value: 3,
    },
    {
      name: 'manzana',
      value: 3,
    },
    {
      name: 'ojo',
      value: 3,
    },
    {
      name: 'cebolla',
      value: 3,
    },
    {
      name: 'paloma',
      value: 3,
    },
    {
      name: 'árbol',
      value: 3,
    },
  ];

  data: any[];

  response: any[] = [];

  constructor(private formBuilder: FormBuilder) {
    this.initAt = new Date();
  }

  ngOnInit() {
    this.exerciseForm = this.formBuilder.group({
      word: ['', Validators.required],
    });

    this.question = this.words
                          .filter(p => p.value === this.index)
                          .map(p => p.name);

    this.data = this.words.sort();
  }

  onChange(word: any, $event) {
    if ($event.checked) {
      if (this.words.filter(p => (p.value === this.index && p.name === word.name)).length > 0) {
        this.hit += 1;
        this.point += 1;
        this.omit -= 1;
      } else {
        this.fault += 1;
      }
      this.response.push(word.name);
    } else {
      if (this.words.filter(p => (p.value === this.index && p.name === word.name)).length > 0) {
        this.hit -= 1;
        this.point -= 1;
        this.omit += 1;
      } else {
        this.fault -= 1;
      }
      this.response = this.response.filter(w => w !== word.name);
    }
  }

  start(): void {
    this.flagStart = true;
    this.flagQuestion = false;
    setTimeout(() => {
      this.flagQuestion = true;
    }, 5000);
  }

  saveForm(): void {
    if (this.exerciseForm.valid) {

      this.create.push({
        question: this.question,
        response: this.response
      });

      this.index++;

      if (this.index > 3) {
        this.flagFinish = true;
      } else {
        this.response = [];
        this.question = this.words
                    .filter(p => p.value === this.index)
                    .map(p => p.name);
        this.flagQuestion = false;
        setTimeout(() => {
          this.flagQuestion = true;
        }, 5000);

        this.exerciseForm.reset();
      }
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

    this.exerciseForm.reset();
    this.exerciseForm.disable();
    this.save.emit(this.exercise);
  }

}

