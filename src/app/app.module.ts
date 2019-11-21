import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonPreCompComponent } from './mon-pre-comp/mon-pre-comp.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { AppareilComponent } from './openclassroom/appareil/appareil.component';
import {AppareilService} from './services/appareil.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component'
import { Routes, RouterModule } from '@angular/router';
import {AuthService} from './services/auth.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuard } from './services/auth-guard.service';
import { TestComponent } from './test/test.component';

const appRoutes: Routes = [
  { path: 'appareils', canActivate: [AuthGuard], component: AppareilViewComponent },
  { path: 'appareils/:id', canActivate: [AuthGuard], component: SingleAppareilComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: AppareilViewComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [AppComponent, MonPreCompComponent, PostCreateComponent, AppareilComponent, AuthComponent, AppareilViewComponent, SingleAppareilComponent, FourOhFourComponent, TestComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [AppareilService],
  bootstrap: [AppComponent]
})
export class AppModule {}
