import { ElementRef, Injectable } from "@angular/core";
@Injectable({ providedIn: 'root' })
export class ScrollToContentService {
	private elementReferences: { [key: string]: ElementRef } = {};
	public registerElements(key: string, element: ElementRef): void {
		this.elementReferences[key] = element;
	}

	public scrollToElement(key: string) {
		this.elementReferences[key].nativeElement.scrollIntoView({ behavior: 'smooth' });
	}
}

