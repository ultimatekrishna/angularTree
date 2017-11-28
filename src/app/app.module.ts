import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { ContainerBasicComponent } from './container-basic/container-basic.component';
import { HeaderComponent } from './header/header.component';
import { ResourceNotFoundComponent } from './resource-not-found/resource-not-found.component';
import { TreeComponent } from './tree/tree.component';
import { MenuComponent } from './menu/menu.component';


const appRoutes: Routes = [
  {
    path: '404',
    component: ResourceNotFoundComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'tree',
    component: TreeComponent,
    data: { title: 'Heroes List' }
  },
  { path: '**', component: ResourceNotFoundComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    ContainerBasicComponent,
    HeaderComponent,
    ResourceNotFoundComponent,
    TreeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule, NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
