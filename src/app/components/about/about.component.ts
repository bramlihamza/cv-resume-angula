// profile.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
        imports: [CommonModule]
  
})
export class AboutComponent implements OnInit {
  profile: any = {};
  loading = true;
  
 

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.dataService.getPersonalInfo().subscribe({
      next: (data) => {
        this.profile = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des informations personnelles', error);
        this.loading = false;
      }
    });
  }

}
