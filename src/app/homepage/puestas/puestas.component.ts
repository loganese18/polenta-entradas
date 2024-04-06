import { AfterViewInit, Component, HostListener } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types/swiper-options';

@Component({
  selector: 'app-puestas',
  templateUrl: './puestas.component.html',
  styleUrls: ['./puestas.component.css', './puestas-responsive.css'],
})
export class PuestasComponent implements AfterViewInit {

  private mySwiper: Swiper | undefined;

  swiperParams: SwiperOptions = {
    autoplay: false,
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    watchOverflow: false,
    lazyPreloadPrevNext: 2,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    modules: [Navigation, Pagination],
  };

  ngAfterViewInit(): void {
    this.checkScreenWidth();
    this.initSwiper();
    console.log('Inicialización de Swiper');
  }

  initSwiper() {
    this.mySwiper = new Swiper('.swiper', this.swiperParams);
  }

  puestas_mobile: string[] = [
    './assets/puestas-mobile/mobile-puesta1.png',
    './assets/puestas-mobile/mobile-puesta2.png',
    './assets/puestas-mobile/mobile-puesta3.png',
    './assets/puestas-mobile/mobile-puesta4.png',
    './assets/puestas-mobile/mobile-puesta5.png',
    './assets/puestas-mobile/mobile-puesta6.png',
    './assets/puestas-mobile/mobile-puesta7.png',
    './assets/puestas-mobile/mobile-puesta8.png',
    './assets/puestas-mobile/mobile-puesta9.png',
    './assets/puestas-mobile/mobile-puesta10.png',
    './assets/puestas-mobile/mobile-puesta11.png',
  ];
  puestas_desktop: string[] = [
    './assets/puestas-desktop/desktop-puesta1.png',
    './assets/puestas-desktop/desktop-puesta2.png',
    './assets/puestas-desktop/desktop-puesta3.png',
    './assets/puestas-desktop/desktop-puesta4.png',
    './assets/puestas-desktop/desktop-puesta5.png',
    './assets/puestas-desktop/desktop-puesta6.png',
    './assets/puestas-desktop/desktop-puesta7.png',
    './assets/puestas-desktop/desktop-puesta8.png',
  ];

  isMobileScreen = true;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (this.mySwiper) {
      this.mySwiper.update();
      this.mySwiper.updateSize();
      this.mySwiper.updateProgress();
    }
    this.checkScreenWidth();
  }

  checkScreenWidth() {
    if (window.innerWidth > 650) {
      this.isMobileScreen = false;
    } else {
      this.isMobileScreen = true;
    }
  }
}
