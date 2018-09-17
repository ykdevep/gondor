import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';

import { IndexComponent } from './index/index.component';
import { RoleGuard } from '@app/core/guard/role.guard';
import { CountEntityComponent } from './count-entity/count-entity.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    data: {title: 'Escritorio', expectedRole: 'Administrador'},
    canActivate: [RoleGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [IndexComponent, CountEntityComponent]
})
export class DashboardModule { }
