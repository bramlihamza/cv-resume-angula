import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { DataService } from '../../data.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    // Animation pour les éléments du menu
    trigger('menuItemAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
    // Animation pour les liens sociaux
    trigger('socialLinkAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.5)' }),
        animate('300ms 500ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ]),
    // Animation pour la surbrillance active
    trigger('activeHighlight', [
      state('active', style({
        backgroundColor: '#1a237e',
        color: 'white',
        transform: 'scale(1.05)'
      })),
      state('inactive', style({
        backgroundColor: 'transparent',
        color: 'inherit',
        transform: 'scale(1)'
      })),
      transition('inactive => active', animate('200ms ease-in')),
      transition('active => inactive', animate('200ms ease-out'))
    ])
  ],


  // If you're using standalone components
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class SidebarComponent {

  menuItems: any[] = [];
  socialLinks: any[] = [];
  loading = true;

  constructor(private router: Router,private dataService: DataService) {}
  

  ngOnInit(): void {


    this.dataService.getMenuItem().subscribe({
      next: (data) => {
        this.menuItems = data.menu;
        this.socialLinks = data.socialLinks;
        this.loading = false;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des informations personnelles', error);
        this.loading = false;
      }
    });
  }

   


// components/sidebar/sidebar.component.ts
isActive(route: string): boolean {
  return this.router.url === '/' + route || this.router.url === route;
}

getActiveState(route: string): string {
  return this.isActive(route) ? 'active' : 'inactive';
}


}

