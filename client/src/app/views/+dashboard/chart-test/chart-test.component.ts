import { Component, ElementRef, ViewChild, Input, AfterViewInit, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { TestData } from '@app/core/model/testData.model';

@Component({
  selector: 'app-chart-test',
  template: `
    <div class="container" fxLayout="row" fxLayout.xs="column" fxLayoutAlign="center center">
      <div class="item" fxFlex="80%" fxFlex.xs="100%" fxFlex.gt-sm="80%">
        <mat-card class="card">
          <mat-card-header >
            <h2 class="mat-h2">{{testData.createdBy.firstname}}</h2>
          </mat-card-header>
          <mat-card-content>
            <canvas #chart></canvas>
          </mat-card-content>
          <mat-card-actions>
          </mat-card-actions>
        </mat-card>
      </div>
    </div>
  `,
  styles: []
})
export class ChartTestComponent implements OnInit, AfterViewInit {

  @ViewChild('chart') Chart: ElementRef;
  @Input() testData: TestData;

  error = 0;
  omit = 0;
  fault = 0;
  point = 0;
  hit = 0;

  constructor() { }

  ngOnInit() {

    this.error = this.testData.exerciseDatas.map(p => p.error).reduce((prev, value) => prev + value, 0);
    this.omit = this.testData.exerciseDatas.map(p => p.omit).reduce((prev, value) => prev + value, 0);
    this.fault = this.testData.exerciseDatas.map(p => p.fault).reduce((prev, value) => prev + value, 0);
    this.hit = this.testData.exerciseDatas.map(p => p.hit).reduce((prev, value) => prev + value, 0);
    this.point = this.testData.exerciseDatas.map(p => p.point).reduce((prev, value) => prev + value, 0);
  }

  ngAfterViewInit(): void {
    const ctx = this.Chart.nativeElement.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Errores', 'Omiciones', 'Equivocaciones', 'Aciertos', 'Puntos'],
        datasets: [
          {
            label: 'Métricas',
            backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f', '#e8c3b9'],
            data: [this.error, this.omit, this.fault, this.hit, this.point, 0]
          }
        ]
      },
      options: {
        legend: { display: true },
        title: {
          display: true,
          text: 'Cuestionario Inicial'
        }
      }
    });
  }

}
