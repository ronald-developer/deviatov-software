import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { ExpertiseModel } from '../models/expertise-model';

@Injectable({
	providedIn: 'root'
})
export class ExpertiseDataService {

	constructor(private http: HttpClient) { }

	getData(): Observable<ExpertiseModel> {
		return this.http.get<ExpertiseModel>('./assets/json/expertise-data.json').pipe(take(1));
	}
}
