import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppRootComponent } from './components/app-root/app.root';
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
import { InstagramComponent } from './components/svg/instagram/instagram.component';

@NgModule({
  declarations: [
    AppRootComponent,
    ToolbarComponent,
    AboutMeComponent,
    WorkHistoryComponent,
    ContactMeComponent,
    FooterComponent,
    GithubComponent,
    LinkedinComponent,
    TwitterComponent,
    PersonalInterestsComponent,
    InstagramComponent
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
  bootstrap: [AppRootComponent]
})
export class AppModule { }
