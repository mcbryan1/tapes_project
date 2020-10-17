import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingPageComponent} from '../app/components/landing-page/landing-page.component'
import {PricingComponent} from '../app/components/pricing/pricing.component'
import {ApiComponent} from '../app/components/api/api.component'

const routes: Routes = [
{path:"", component:LandingPageComponent },
{path:"pricing", component:PricingComponent },
{path:"api", component:ApiComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
