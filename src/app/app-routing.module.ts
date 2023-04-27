import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConditionComponent } from './condition/condition.component';

const routes: Routes = [{
  path:'condition',component:ConditionComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
