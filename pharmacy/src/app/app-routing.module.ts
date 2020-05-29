import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserInfoComponent} from './components/user-info/user-info.component';
import {PharmasyOnMapComponent} from './components/pharmasy-on-map/pharmasy-on-map.component';
import {SharesComponent} from './components/shares/shares.component';
import {RecomendDaoctorComponent} from './components/recomend-daoctor/recomend-daoctor.component';
import {ShopComponent} from './components/shop/shop.component';
import {CartComponent} from './components/cart/cart.component';
import {MainComponent} from './components/main/main.component';
import {SignInComponent} from './components/sign-in/sign-in.component';
import {SingleTowarComponent} from './components/single-towar/single-towar.component';


const routes: Routes = [
  {path: 'user', component: UserInfoComponent},
  {path: 'user/:id', component: UserInfoComponent},
  {path: 'user/:id/home', component: MainComponent},
  {path: 'user/:id/products', component: ShopComponent},
  {path: 'user/:id/products/:productId', component: SingleTowarComponent},
  {path: 'shop/:productId', component: SingleTowarComponent},
  {path: 'map', component: PharmasyOnMapComponent},
  {path: 'shares', component: SharesComponent},
  {path: 'know', component: RecomendDaoctorComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'towar', component: SingleTowarComponent},
  {path: 'cart', component: CartComponent},
  {path: '', component: MainComponent},
  {path: 'singIn', component: SignInComponent}
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
