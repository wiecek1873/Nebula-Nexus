import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { ServerStatusComponent } from './components/server-status/server-status.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpPageComponent,
    ServerStatusComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'sign-up', component: SignUpPageComponent },
      { path: '**', redirectTo: 'sign-up' }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
