import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppRoot } from './components/app-root/app.root';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { WorkHistoryComponent } from './components/work-history/work-history.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { FooterComponent } from './components/footer/footer.component';
import { GithubComponent } from './components/svg/github/github.component';
import { LinkedinComponent } from './components/svg/linkedin/linkedin.component';
import { TwitterComponent } from './components/svg/twitter/twitter.component';
import { PersonalInterestsComponent } from './components/personal-interests/personal-interests.component';

@NgModule({
  declarations: [
    AppRoot,
    ToolbarComponent,
    AboutMeComponent,
    WorkHistoryComponent,
    ContactMeComponent,
    FooterComponent,
    GithubComponent,
    LinkedinComponent,
    TwitterComponent,
    PersonalInterestsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppRoot]
})
export class AppModule { }
