import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { DetailsComponent } from './details/details.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import { ProjectsComponent } from './projects/projects.component';
import { NewsLetterComponent } from './news-letter/news-letter.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
	declarations: [
		NavComponent,
		HeaderComponent,
		ContactUsComponent,
		SolutionsComponent,
		DetailsComponent,
		ExpertiseComponent,
		ProjectsComponent,
		NewsLetterComponent,
		FooterComponent
	],
	imports: [
		CommonModule
	],
	exports: [
		NavComponent,
		HeaderComponent,
		ContactUsComponent,
		SolutionsComponent,
		DetailsComponent,
		ExpertiseComponent,
		ProjectsComponent,
		NewsLetterComponent,
		FooterComponent
	]
})
export class ComponentsModule { }
