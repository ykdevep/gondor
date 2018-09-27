import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-semeat-a4',
  template: `
    <div class="container" fxLayout="row" fxLayout.xs="column" fxLayoutAlign="center center">
      <div fxFlex="90%" fxFlex.xs="98%" fxFlex.gt-sm="90%">

        <h3 mat-h3>20-3</h3>

        <span>
          A 27 restále 3, y repita el proceso con el resultado, después de 5 iteraciones, terminar. Ejemplo respuesta: 24-21-18-15-12
        </span>

        <form [formGroup]="exerciseForm" #f="ngForm" (ngSubmit)="saveForm()">

          <mat-form-field class="full-width">
            <input matInput required type="text" placeholder="20-3" formControlName="response">
          </mat-form-field>

          <br />
          <button mat-raised-button color="accent" [disabled]="!exerciseForm.valid"
              type="submit" aria-label="done">
            <mat-icon>done</mat-icon>
            <span>Hecho</span>
          </button>
        </form>
      </div>
    </div>

  `,
  styles: [`
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
export class SemeatA4Component implements OnInit {
  exerciseForm: FormGroup;
  @Output() save = new EventEmitter();
  initAt: Date;

  hit = 0;
  point = 0;
  fault = 0;
  omit = 5;

  exercise: any;

  constructor(private formBuilder: FormBuilder) {
    this.initAt = new Date();
  }

  ngOnInit() {
    this.exerciseForm = this.formBuilder.group({
      response: ['', Validators.required]
    });

  }

  saveForm(): void {
    if (this.exerciseForm.valid) {

      const response = this.exerciseForm.value.response;
      const numbers = response.split('-');

      let i = 1;

      for (const number of numbers) {
        if ((20 - (3 * i)).toString() === number) {
          this.hit += 1;
          this.point += 1;
          this.omit -= 1;
        } else {
          this.fault += 1;
        }

        if (i > 5) {
          break;
        }
        i++;
      }

      this.exercise = {
        result: {
          create: {
            question: '20-3',
            response: response,
          }
        },
        initAt: this.initAt,
        finalAt: new Date(),
        hit: this.hit,
        error: this.fault + this.omit,
        fault: this.fault,
        omit: this.omit,
        point: this.hit
      };

      this.exerciseForm.disable();
      this.save.emit(this.exercise);
    }
  }
}
