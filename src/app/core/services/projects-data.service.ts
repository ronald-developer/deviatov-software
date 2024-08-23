import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { ProjectModel } from '../models/projects-model';

@Injectable({
	providedIn: 'root'
})
export class ProjectsDataService {

	constructor(private http: HttpClient) { }

	getData(): Observable<ProjectModel> {
		return this.http.get<ProjectModel>('./assets/json/projects-data.json').pipe(take(1));
	}
}
