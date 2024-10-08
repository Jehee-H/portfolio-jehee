import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProgrammingComponent } from './programming/programming.component';
import { WebsitesComponent } from './websites/websites.component';

const appRoutes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'websites', component: WebsitesComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProgrammingComponent,
    WebsitesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
