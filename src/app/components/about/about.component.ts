// profile.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { HttpClient } from '@angular/common/http';
import { SeoService } from '../../seo.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
        imports: [CommonModule]
  
})
export class AboutComponent implements OnInit {
  profile: any = {};
  loading = true;
  
 

  constructor(private dataService: DataService,    private seoService: SeoService) { }

  ngOnInit(): void {

    

    this.dataService.getPersonalInfo().subscribe({
      next: (data) => {
        this.profile = data;
        this.loading = false;

        this.seoService.updateMetaTags({
          title: `${this.profile.name} - ${this.profile.title}`,
          description: this.profile.about,
          image: 'https://hamza.bramli.dev/assets/images/profile.jpg',
          url: 'https://hamza.bramli.dev.app/profile',
          keywords: `${this.profile.name}, développeur, ${this.profile.title}, cv, portfolio,devops`
        });

      },
      error: (error) => {
        console.error('Erreur lors du chargement des informations personnelles', error);
        this.loading = false;
      }
    });
  }

  

}
