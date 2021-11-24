import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { UserComponent } from '../user/user.component';
import { NavBar } from '../nav-bar/nav-bar.component';
import { AppComponent } from './app.component';
import { ShortenUrlComponent } from './components/shorten-url/shorten-url.component';
import {NgTinyUrlModule} from 'ng-tiny-url';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NavBar,
    ShortenUrlComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgTinyUrlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
