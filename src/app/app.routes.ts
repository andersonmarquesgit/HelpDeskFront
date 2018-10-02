import { HomeComponent } from './components/home/home.component';
import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from './components/security/login/login.component';
import { ModuleWithProviders } from '../../node_modules/@angular/core';

export const ROUTES: Routes = [
    { path : '', component: HomeComponent},
    { path : 'login', component: LoginComponent}
]

export const routes: ModuleWithProviders = RouterModule.forRoot(ROUTES);