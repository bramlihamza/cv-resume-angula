// experience.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

interface Experience {
  company: string;
  position: string;
  period: string;
  mission?: string;
  tasks: string[];
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
      imports: [CommonModule]
  
})
export class ExperienceComponent implements OnInit {
  loading = true;

  experiences: any  = [{}] ;
   
  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.dataService.getExperiences().subscribe({
      next: (data) => {
        this.experiences = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des informations personnelles', error);
        this.loading = false;
      }
    });
  }
}




