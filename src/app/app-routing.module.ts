import { FullscreenOverlayContainer } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { ChatComponent } from './chat/chat.component';
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
  path: 'admin',
  component: AdminPageComponent
},
{
  path: 'home',
  component: HomeComponent,
  canActivate: [HomeGuard],
  children: [
    {
      path: '',
      redirectTo: 'movies',
      pathMatch: 'full'
    },
    {
      path: 'admin',
      component: AdminPageComponent
    },
    {
      path: 'weather',
      component: WeatherComponent
    }, {
      path: 'movies',
      component: MoviespageComponent
    },{
      path: 'chat',
      component: ChatComponent
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
