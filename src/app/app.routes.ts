// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { TechnicalSkillsComponent } from './components/technical-skills/technical-skills.component';

export const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent , data: { animation: 'ProfilePage' }},
  { path: 'education', component: EducationComponent , data: { animation: 'ExperiencePage' }},
  { path: 'experience', component: ExperienceComponent , data: { animation: 'EducationPage' } },
  { path: 'skills', component: TechnicalSkillsComponent , data: { animation: 'SkillsPage' }  },
  { path: '**', redirectTo: 'profile' } // Wildcard route for 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }