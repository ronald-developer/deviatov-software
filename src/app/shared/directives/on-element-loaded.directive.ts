import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { ScrollToContentService } from '../services/scroll-to-content.service';

@Directive({
	selector: '[appOnElementLoaded]',
	standalone: true
})
export class OnElementLoadedDirective implements AfterViewInit {
	@Input('appOnElementLoaded') elementId!: string;
	constructor(private el: ElementRef, private scrollToContentService: ScrollToContentService) { }
	ngAfterViewInit(): void {
		this.scrollToContentService.registerElements(this.elementId, this.el);
	}
}
