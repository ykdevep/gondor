import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExerciseData } from '@app/core/model/exerciseData.model';

@Component({
  selector: 'app-semeat-a1',
  template: `
    <div class="container" fxLayout="row" fxLayout.xs="column" fxLayoutAlign="center center">
      <div fxFlex="60%" fxFlex.xs="98%" fxFlex.gt-sm="80%">

        <form [formGroup]="exerciseForm" #f="ngForm" (ngSubmit)="saveForm()">

          <mat-form-field class="full-width">
              <mat-select placeholder="¿Qué día es?" formControlName="day">
                  <mat-option *ngFor="let day of days" [value]="day.value">{{day.name}}</mat-option>
              </mat-select>
          </mat-form-field>

          <mat-form-field class="full-width">
              <mat-select placeholder="¿Qué mes es?" formControlName="month">
                  <mat-option *ngFor="let month of months" [value]="month.value">{{month.name}}</mat-option>
              </mat-select>
          </mat-form-field>

          <mat-form-field class="full-width">
              <input type="number" required matInput placeholder="¿Qué año es (2018)?" formControlName="year">
          </mat-form-field>

          <mat-form-field class="full-width">
              <input type="text" required matInput placeholder="¿En qué ciudad estás?" formControlName="city">
          </mat-form-field>

          <mat-form-field class="full-width">
              <input type="text" required matInput placeholder="¿En qué lugar estás?" formControlName="place">
          </mat-form-field>

          <mat-form-field class="full-width">
              <input type="number" required matInput placeholder="¿Cuántos años tiene usted?" formControlName="age">
          </mat-form-field>

          <div class="button-action">
            <button mat-raised-button color="accent" type="submit" [disabled]="!exerciseForm.valid" aria-label="add">
              <mat-icon>done</mat-icon>
              <span>Hecho</span>
            </button>
          </div>
        </form>
      </div>
    </div>

  `,
  styles: [`
    .full-width {
      width: 100%;
    }
  `]
})
export class SemeatA1Component implements OnInit {

  days: any[] = [
    {
      name: 'Domingo',
      value: 0,
    },
    {
      name: 'Lunes',
      value: 1,
    },
    {
      name: 'Martes',
      value: 2,
    },
    {
      name: 'Miércoles',
      value: 3,
    },
    {
      name: 'Jueves',
      value: 4,
    },
    {
      name: 'Viernes',
      value: 5,
    },
    {
      name: 'Sábado',
      value: 6,
    }
  ];

  months: any[] = [
    {
      name: 'Enero',
      value: 0,
    },
    {
      name: 'Febrero',
      value: 1,
    },
    {
      name: 'Marzo',
      value: 2,
    },
    {
      name: 'Abril',
      value: 3,
    },
    {
      name: 'Mayo',
      value: 4,
    },
    {
      name: 'Junio',
      value: 5,
    },
    {
      name: 'Julio',
      value: 6,
    },
    {
      name: 'Agosto',
      value: 7,
    },
    {
      name: 'Septiembre',
      value: 8,
    },
    {
      name: 'Octubre',
      value: 9,
    },
    {
      name: 'Noviembre',
      value: 10,
    },
    {
      name: 'Diciembre',
      value: 11
    },
  ];

  exerciseForm: FormGroup;
  exerciseList: ExerciseData[];

  @Output() save = new EventEmitter();
  @Input() age = 0;

  initAt: Date;

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.exerciseForm = this.formBuilder.group({
      day: ['', Validators.required],
      month: ['', Validators.required],
      year: ['', Validators.required],
      city: ['', Validators.required],
      place: ['', Validators.required],
      age: ['', Validators.required]
    });

    this.initAt = new Date();
  }

  saveForm(): void {
    if (this.exerciseForm.valid) {
      this.exerciseList = [
        {
          question: '¿Qué día es?',
          response: this.days[this.exerciseForm.value.day].name,
          initAt: this.initAt,
          finalAt: new Date(),
          hit: (Number)(new Date().getDay() === this.exerciseForm.value.day)
        },
        {
          question: '¿Qué mes es?',
          response: this.months[this.exerciseForm.value.month].name,
          initAt: this.initAt,
          finalAt: new Date(),
          hit: (Number)(new Date().getMonth() === this.exerciseForm.value.month)
        },
        {
          question: '¿Qué año es?',
          response: this.exerciseForm.value.year,
          initAt: this.initAt,
          finalAt: new Date(),
          hit: (Number)(new Date().getFullYear() === this.exerciseForm.value.year)
        },
        {
          question: '¿En qué ciudad estás?',
          response: this.exerciseForm.value.city,
          initAt: this.initAt,
          finalAt: new Date(),
        },
        {
          question: '¿En qué lugar estás?',
          response: this.exerciseForm.value.place,
          initAt: this.initAt,
          finalAt: new Date(),
        },
        {
          question: '¿Cuántos años tiene usted?',
          response: this.exerciseForm.value.age,
          initAt: this.initAt,
          finalAt: new Date(),
          hit: (Number)(this.age === this.exerciseForm.value.age)
        }
      ];
      this.exerciseForm.disable();
    }
    this.save.emit(this.exerciseList);
  }

}
