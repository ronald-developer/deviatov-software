import { Component } from '@angular/core';
import { ExpertiseDataService } from '../../services/expertise-data.service';
import { ExpertiseModel } from '../../models/expertise-model';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-expertise',
	templateUrl: './expertise.component.html'
})
export class ExpertiseComponent {
	constructor(private dataService: ExpertiseDataService) { }

	data$!: Observable<ExpertiseModel>;

	ngOnInit(): void {
		this.data$ = this.dataService.getData();
	}
}
