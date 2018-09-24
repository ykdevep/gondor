import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SemeatA0Component } from './semeat-a0/semeat-a0.component';
import { SemeatA1Component } from './semeat-a1/semeat-a1.component';
import { SemeatA2Component } from './semeat-a2/semeat-a2.component';
import { SemeatA3Component } from './semeat-a3/semeat-a3.component';
import { SemeatA4Component } from './semeat-a4/semeat-a4.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [SemeatA0Component, SemeatA1Component, SemeatA2Component, SemeatA3Component, SemeatA4Component],
  declarations: [SemeatA0Component, SemeatA1Component, SemeatA2Component, SemeatA3Component, SemeatA4Component]
})
export class SemeatModule {
  static forRoot() {
    return {
      ngModule: SemeatModule,
      providers: []
    };
  }
 }
