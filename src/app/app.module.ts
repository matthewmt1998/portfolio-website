import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppRoot } from './components/app-root/app.root';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { AboutMeComponent } from './components/about-me/about-me.component';

@NgModule({
  declarations: [
    AppRoot,
    ToolbarComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppRoot]
})
export class AppModule { }
