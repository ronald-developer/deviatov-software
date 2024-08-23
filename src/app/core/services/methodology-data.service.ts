import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { MethodologyModel } from '../models/methodology-model';

@Injectable({
	providedIn: 'root'
})
export class MethodologyDataService {

	constructor(private http: HttpClient) { }

	getData(): Observable<MethodologyModel> {
		return this.http.get<MethodologyModel>('./assets/json/methodology-data.json').pipe(take(1));
	}
}
