import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SwitchComponent } from './switch/switch.component';

const routes: Routes = [{
  path: '',
  component: SwitchComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
