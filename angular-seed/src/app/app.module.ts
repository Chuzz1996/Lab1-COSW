import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoService } from './services/todo.service';
import { FormGroup, FormBuilder } from '@angular/forms';


import { AppComponent } from './app.component';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { TaskListPageComponent } from './pages/task-list-page/task-list-page.component';
import { TaskEditPageComponent } from './pages/task-edit-page/task-edit-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AppConfiguration } from './common/config/app-configuration.service';
import { INITIAL_CONFIG } from './common/config/initial-config';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { APIService } from './common/api.service';
import { UsersService } from './services/users.service';

const ROUTES = [
  { path: '', component: HomePageComponent },
  { path: 'tasks', component: TaskListPageComponent },
  { path: 'edit', component: TaskEditPageComponent },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
 declarations: [
   AppComponent,
   HomePageComponent,
   TaskListPageComponent,
   TaskEditPageComponent,
   PageNotFoundComponent
 ],
 imports: [
   BrowserModule,
   NgbModule.forRoot(),
   RouterModule.forRoot(ROUTES),
   ReactiveFormsModule
 ],
 providers: [
     {
       provide: INITIAL_CONFIG,
       useValue: {
         apiURL: 'http://localhost:8080'
       }
     },
     HttpModule,
     TodoService,
     AppConfiguration,
     APIService,
   ],
 bootstrap: [AppComponent]
})
export class AppModule { }