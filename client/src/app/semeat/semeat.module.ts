import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class SemeatModule {
  static forRoot() {
    return {
      ngModule: SemeatModule,
      providers: []
    };
  }
 }
