import { Component } from '@angular/core';
import { TypewriterService } from '../../../shared/services/typewriter.service';
import { map } from 'rxjs';

@Component({
	selector: 'app-industries',
	templateUrl: './industries.component.html',
	styleUrl: './industries.component.scss'
})
export class IndustriesComponent {
	titles = ['Tobacco', 'Agriculture/Farming', 'Food Processing', 'Food Processing', 'Retail', 'Accounting', 'ERP', 'Medicine'];

	constructor(private typewriterService: TypewriterService) { }

	typedText$ = this.typewriterService
		.getTypewriterEffect(this.titles)
		.pipe(map((text) => text));
}
