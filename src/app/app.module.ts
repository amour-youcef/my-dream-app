import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonPreCompComponent } from './mon-pre-comp/mon-pre-comp.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { AppareilComponent } from './openclassroom/appareil/appareil.component';


@NgModule({
  declarations: [AppComponent, MonPreCompComponent, PostCreateComponent, AppareilComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
