import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectModel } from '../../models/projects-model';
import { ProjectsDataService } from '../../services/projects-data.service';

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html'
})
export class ProjectsComponent {
	constructor(public dataService: ProjectsDataService) { }

	data$!: Observable<ProjectModel>;

	ngOnInit(): void {
		this.data$ = this.dataService.getData();
	}
}
