import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ImageSliderComponent } from '../../shared/components/image-slider/image-slider.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MethodologyComponent } from './methodology/methodology.component';
import { NavComponent } from './nav/nav.component';
import { NewsLetterComponent } from './news-letter/news-letter.component';
import { ProjectsComponent } from './projects/projects.component';
import { IndustriesComponent } from './industries/industries.component';

@NgModule({
	declarations: [
		NavComponent,
		HeaderComponent,
		ContactUsComponent,
		ExpertiseComponent,
		ProjectsComponent,
		NewsLetterComponent,
		FooterComponent,
		MethodologyComponent,
		IndustriesComponent
	],
	imports: [
		CommonModule,
		ImageSliderComponent,
		CarouselModule
	],
	exports: [
		NavComponent,
		HeaderComponent,
		ContactUsComponent,
		ExpertiseComponent,
		ProjectsComponent,
		NewsLetterComponent,
		FooterComponent,
		MethodologyComponent,
		IndustriesComponent
	]
})
export class ComponentsModule { }
