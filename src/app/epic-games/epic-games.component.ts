import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-epic-games',
  templateUrl: './epic-games.component.html',
  styleUrls: ['./epic-games.component.scss']
})
export class EpicGamesComponent implements OnInit, OnDestroy{

  images: string[] = [
    'assets/image/images.jpg',
    'assets/image/images.jpg',
    'assets/image/images.jpg',
    'assets/image/images.jpg',
    'assets/image/images.jpg',
    'assets/image/images.jpg',
    'assets/image/images.jpg',
    'assets/image/images.jpg',
    'assets/image/images.jpg',
    'assets/image/images.jpg',
    'assets/image/images.jpg',
    'assets/image/images.jpg'
    
  ];

  imgs: string[] = [
    'assets/image/internet_615292.png',
    'assets/image/images.jpg',
    'assets/image/internet_615292.png',
    'assets/image/images.jpg',
    'assets/image/internet_615292.png',
    'assets/image/images.jpg',
  ];
  
  interval: any;
  currentIndex: number = 0;

  currentSlideIndex: number = 0;
  currenTslideIndex: number = 0;

  
  ngOnDestroy() {
    clearInterval(this.interval);
  }
  ngOnInit() {
    this.startAutoScroll();
  }


  nextSlide(): void {
    if (this.currentSlideIndex < this.images.length - 1) {
      this.currentSlideIndex++;
    }
  }

  prevSlide(): void {
    if (this.currentSlideIndex > 0) {
      this.currentSlideIndex--;
    }
  }

  nexTslide(): void {
    if (this.currenTslideIndex < this.images.length - 1) {
      this.currenTslideIndex++;
    }
  }

  preVslide(): void {
    if (this.currenTslideIndex > 0) {
      this.currenTslideIndex--;
    }
  }

  startAutoScroll() {
    this.interval = setInterval(() => {
      this.nextSlidee();
    }, 5000); 
  }

  nextSlidee() {
    this.currentIndex = (this.currentIndex + 1) % this.imgs.length;
  }

  prevSlidee() {
    this.currentIndex = (this.currentIndex - 1 + this.imgs.length) % this.imgs.length;
  }

  

}
