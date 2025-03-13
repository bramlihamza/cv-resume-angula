import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { TechnicalSkillsComponent } from './components/technical-skills/technical-skills.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule, Meta, Title } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
import { HttpClientModule } from '@angular/common/http'; // Vérifiez cette importation


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    EducationComponent,
    ExperienceComponent,
    TechnicalSkillsComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    CommonModule, // Add this module
    NgbModule,
    HttpClientModule ,// Ajoutez cette ligne
    AppRoutingModule, // Add the routing module here
    RouterModule
  ],
  providers: [ Meta,
    Title ],
  bootstrap: [AppComponent]
})
export class AppModule { }
