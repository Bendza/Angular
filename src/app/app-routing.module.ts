import { FullscreenOverlayContainer } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeGuard } from './home.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovieComponent } from './movie/movie.component';
import { MoviespageComponent } from './moviespage/moviespage.component';
import { RegisterComponent } from './register/register.component';
import { MovieService } from './services/movie.service';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent
},
{
  path: 'register',
  component: RegisterComponent
},
{
  path: 'home',
  component: HomeComponent,
  canActivate: [HomeGuard],
  children:[
    {
      path:'',
      redirectTo:'movies',
      pathMatch:'full'

    },
    {
    path:'weather',
    component:WeatherComponent
  },{
    path:'movies',
    component:MoviespageComponent
  }]
},
{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
