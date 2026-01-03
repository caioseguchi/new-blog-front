import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component/home.component';
import { LoginComponent } from './pages/login.component/login.component';
import { RegisterComponents } from './pages/register.components/register.components';
import { BlogComponent } from './pages/blog.component/blog.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponents,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
];
