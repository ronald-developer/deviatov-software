import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FooterModel } from '../../models/footer-model';
import { FooterDataService } from '../../services/footer-data.service';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html'
})
export class FooterComponent {
	data$!: Observable<FooterModel>;

	constructor(private dataService: FooterDataService) {
	}

	ngOnInit(): void {
		this.data$ = this.dataService.getData();
	}
}
