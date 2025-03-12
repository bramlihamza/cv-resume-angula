// skills.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

interface SkillCategory {
  category: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  templateUrl: './technical-skills.component.html',
  styleUrls: ['./technical-skills.component.scss'],
        imports: [CommonModule]
  
})
export class TechnicalSkillsComponent implements OnInit {
  loading = true;
  skillCategories: any  = [{}] ;
  

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.dataService.getSkills().subscribe({
      next: (data) => {
        this.skillCategories = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des informations personnelles', error);
        this.loading = false;
      }
    });
  }

  
  }
