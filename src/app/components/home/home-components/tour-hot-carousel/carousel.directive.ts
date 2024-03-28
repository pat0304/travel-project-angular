import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCarousel]',
})
export class CarouselDirective {
  ngOnInit(): void {
    let slide: number = 4;
    let items = document.querySelectorAll('.carousel .carousel-item');

    items.forEach((e) => {
      let next: Element | null = e.nextElementSibling;
      for (let i = 0; i < slide; i++) {
        if (!next) {
          next = items[0];
        }
        let cloneChild = next.cloneNode(true);
        e.appendChild(cloneChild.childNodes[0]);
        next = next.nextElementSibling;
      }
    });
  }
}
