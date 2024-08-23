import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { ScrollToContentService } from '../services/scroll-to-content.service';

@Directive({
	selector: '[scrollContent]',
	standalone: true
})
export class ScrollContentDirective implements AfterViewInit {
	@Input('scrollContent') elementId!: string;
	constructor(private el: ElementRef, private scrollToContentService: ScrollToContentService) { }
	ngAfterViewInit(): void {
		this.scrollToContentService.registerElements(this.elementId, this.el);
	}
}
