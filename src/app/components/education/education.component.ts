// education.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

interface Education {
  institution: string;
  degree: string;
  period: string;
  details?: string[];
}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
   imports: [CommonModule]
})
export class EducationComponent implements OnInit {
  educations: any  = [{}] ;
  loading = true;



  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getEducation().subscribe({
      next: (data) => {
        this.educations= data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des informations personnelles', error);
        this.loading = false;
      }
    });
  }
}