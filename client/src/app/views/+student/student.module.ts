import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared/shared.module';

import { RoleGuard } from '@app/core/guard/role.guard';
import { InitTestComponent } from './init-test/init-test.component';
import { SemeatModule } from '@app/semeat/semeat.module';


const routes: Routes = [
  {
    path: 'init-test',
    component: InitTestComponent,
    data: {title: 'Cuestionario Inicial', expectedRole: 'Estudiante'},
    canActivate: [RoleGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    SemeatModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InitTestComponent]
})
export class StudentModule { }
