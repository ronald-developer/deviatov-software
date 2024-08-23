import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../core/components/components.module';
import { ScrollContentDirective } from '../shared/directives/scroll-content.directive';


@NgModule({
	declarations: [HomeComponent],
	imports: [
		CommonModule,
		ComponentsModule,
		PagesRoutingModule,
		ScrollContentDirective
	]
})
export class PagesModule { }
