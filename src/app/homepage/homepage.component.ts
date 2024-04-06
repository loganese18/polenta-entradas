import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css', './homepage-responsive.css'],
})
export class HomepageComponent {
  @ViewChild('scroll') scrollRef!: ElementRef;

  scrollToElement(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    console.log('anda');
  }

  @HostListener('window:scroll')
  windowScroll() {
    const scroll = this.scrollRef.nativeElement as HTMLElement;
    const scrollPosition =
      document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollPosition > 200) {
      scroll.style.display = 'block';
    } else {
      scroll.style.display = 'none';
    }
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
