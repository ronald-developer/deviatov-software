import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { OnElementLoadedDirective } from '../shared/directives/on-element-loaded.directive';


@NgModule({
	declarations: [HomeComponent],
	imports: [
		CommonModule,
		ComponentsModule,
		PagesRoutingModule,
		OnElementLoadedDirective
	]
})
export class PagesModule { }
