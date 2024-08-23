import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { FooterModel } from '../models/footer-model';

@Injectable({
	providedIn: 'root'
})
export class FooterDataService {

	constructor(private http: HttpClient) { }

	getData(): Observable<FooterModel> {
		return this.http.get<FooterModel>('./assets/json/footer-data.json').pipe(take(1));
	}
}
