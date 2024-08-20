import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ScrollToContentService } from '../../shared/services/scroll-to-content.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html'
})
export class HomeComponent {
	@ViewChild('#headerSection', { read: ElementRef }) headerSection!: ElementRef;
	@ViewChild('#solutionsSection', { read: ElementRef }) solutionsSection!: ElementRef;
	constructor(public scrollToContentService: ScrollToContentService) { }



}
