import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routing';
import { DemoModule } from './demo/demo.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, DemoModule, RouterModule.forRoot(APP_ROUTES)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
