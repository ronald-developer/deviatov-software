import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy } from '@angular/core';
import { ImageSliderItem } from './image-slider-model';
import { Subject, interval, map, switchMap, takeUntil, tap, timer } from 'rxjs';

@Component({
	selector: 'app-image-slider',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './image-slider.component.html',
	styleUrl: './image-slider.component.scss'
})
export class ImageSliderComponent implements OnDestroy {
	@Input() sliderItems: ImageSliderItem[] = [];
	currentIndex = 0;
	private navBtnClicked$ = new Subject<void>();
	private stopTimer$ = new Subject<void>();
	private restartTimer$ = new Subject<void>();

	ngOnInit(): void {
		// Initial automatic "next" button click every 3 seconds
		interval(3000)
			.pipe(
				takeUntil(this.stopTimer$),
				tap(() => this.autoNext())
			)
			.subscribe();

		// Restart the timer if the user does not click the button for 10 seconds
		this.restartTimer$
			.pipe(
				switchMap(() => timer(5000)), // Wait for 10 seconds
				tap(() => this.startAutoNext()) // Restart the timer
			)
			.subscribe();

		// Handle manual button click
		this.navBtnClicked$.pipe(tap(() => this.onManualClick())).subscribe();
	}

	ngOnDestroy(): void {
		this.stopTimer$.next();
		this.stopTimer$.complete();
		this.restartTimer$.complete();
		this.navBtnClicked$.complete();
	}


	onManualClick(): void {
		console.log('Manual button click detected');
		this.stopAutoNext();
		this.restartTimer$.next(); // Trigger restart timer after 10 seconds of inactivity
	}

	private startAutoNext(): void {
		console.log('Starting auto next');
		interval(3000)
			.pipe(
				takeUntil(this.stopTimer$),
				tap(() => this.autoNext())
			)
			.subscribe();
	}

	private stopAutoNext(): void {
		console.log('Stopping auto next');
		this.stopTimer$.next();
	}

	prevImage() {
		if (this.currentIndex > 0) {
			this.currentIndex--;
		} else {
			this.currentIndex = this.sliderItems.length - 1; // Loop to the last image
		}
		this.onManualClick();

		this.navBtnClicked$.next();
	}

	autoNext() {
		this.nextImage(true);
	}

	nextImage(autoNext: boolean = false): void {
		if (this.currentIndex < this.sliderItems.length - 1) {
			this.currentIndex++;
		} else {
			this.currentIndex = 0; // Loop to the first image
		}
		if (!autoNext) {
			this.onManualClick();
			this.navBtnClicked$.next();
		}
	}
}
