import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SemeatA0Component } from './semeat-a0/semeat-a0.component';
import { SemeatA1Component } from './semeat-a1/semeat-a1.component';
import { SharedModule } from '@app/shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [SemeatA0Component, SemeatA1Component],
  declarations: [SemeatA0Component, SemeatA1Component]
})
export class SemeatModule {
  static forRoot() {
    return {
      ngModule: SemeatModule,
      providers: []
    };
  }
 }
