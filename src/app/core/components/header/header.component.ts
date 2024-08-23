import { Component, OnInit } from '@angular/core';
import { interval, map } from 'rxjs';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
	currentText: string = 'Small Businesses';
	texts = ['Small Businesses', 'Startups', 'Enterprise'];
	ngOnInit(): void {
		interval(3000)
			.pipe(
				map((index) => this.texts[index % this.texts.length]) // Loop through texts
			)
			.subscribe((text) => {
				this.currentText = text;
			});
	}

}
