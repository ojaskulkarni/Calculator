import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CalcComponent } from './calc/calc.component';

const routes: Routes = [
  { path: 'calc', component: CalcComponent },
  // { path: 'calc', component: CalcComponent },
  // { path: 'home/:id', component: CalcComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
