import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }


  getPersonalInfo(): Observable<any> {
    return this.http.get('assets/data/personal-info.json');
  }

  getExperiences(): Observable<any[]> {
    return this.http.get<any[]>('assets/data/experiences.json');
  }

  getEducation(): Observable<any[]> {
    return this.http.get<any[]>('assets/data/education.json');
  }

  getSkills(): Observable<any[]> {
    return this.http.get<any[]>('assets/data/technical-skills.json');
  }

  getProjects(): Observable<any[]> {
    return this.http.get<any[]>('assets/data/projects.json');
  }

  getMenuItem(): Observable<any> {
    return this.http.get('assets/data/sidebar-json.json');
  }
}
