import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingPageComponent} from '../app/components/landing-page/landing-page.component'
import {ContactComponent} from '../app/components/contact/contact.component'
import {ApiComponent} from '../app/components/api/api.component'
import { FourzerofourComponent } from './components/fourzerofour/fourzerofour.component';

const routes: Routes = [
{path:"", component:LandingPageComponent },
{path:"contact", component:ContactComponent },
{path:"api", component:ApiComponent },
{path:"**", component:FourzerofourComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
