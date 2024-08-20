import { Component } from '@angular/core';
import { ScrollToContentService } from '../../shared/services/scroll-to-content.service';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html'
})
export class NavComponent {
	constructor(public scrollToContentService: ScrollToContentService) { }

	public scrollToContent(key: string): void {
		this.scrollToContentService.scrollToElement(key);
	}
}
