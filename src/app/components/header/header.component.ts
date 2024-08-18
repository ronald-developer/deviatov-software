import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html'
})
export class HeaderComponent {
	constructor(public sanitizer: DomSanitizer) { }
	svgUrl!: SafeUrl;
	ngOnInit(): void {
		const svgPath = "assets/images/vertical-decoration-left.svg";
		this.svgUrl = this.sanitizer.bypassSecurityTrustUrl(svgPath);
	}
}
