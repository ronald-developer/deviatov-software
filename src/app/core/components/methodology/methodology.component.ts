import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MethodologyModel } from '../../models/methodology-model';
import { MethodologyDataService } from '../../services/methodology-data.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-methodology',
	templateUrl: './methodology.component.html',
	styleUrl: './methodology.component.scss'
})
export class MethodologyComponent implements OnInit {
	customOptions: OwlOptions = {
		loop: false,
		mouseDrag: false,
		touchDrag: false,
		pullDrag: false,
		dots: false,
		navSpeed: 700,
		navText: ['', ''],
		responsive: {
			400: {
				items: 1
			},
			740: {
				items: 2
			},
			940: {
				items: 3
			}
		},
		nav: true
	}

	data$!: Observable<MethodologyModel>;

	constructor(private dataService: MethodologyDataService) {
	}

	ngOnInit(): void {
		this.data$ = this.dataService.getData();
	}
}
