import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { FullComponent } from './layouts/full/full.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { AppComponent } from './app.component';
import { VideoComponent } from './video/video/video.component';
import { VideoUploadComponent } from './video/video/video-upload/video-upload.component';
import { ImageUploadComponent } from './images/image-upload/image-upload.component';

export const Approutes: Routes = [
  {
    path: 'image-upload', // Define a route for the login page
    component: ImageUploadComponent,
  },
  {
    path: 'video-upload', // Define a route for the login page
    component: VideoUploadComponent,
  },
  {
    path: 'video', // Define a route for the login page
    component: VideoComponent,
  },
  {
    path: 'student', // Define a route for the login page
    component: AddStudentComponent,
  },
  {
    path: 'login', // Define a route for the login page
    component: LoginComponent,
  },
  {
    path: 'registration', // Define a route for the login page
    component: RegistrationComponent,
  },
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'about',
        loadChildren: () =>
          import('./about/about.module').then((m) => m.AboutModule),
      },
      {
        path: 'component',
        loadChildren: () =>
          import('./component/component.module').then(
            (m) => m.ComponentsModule
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/starter',
  },
];
