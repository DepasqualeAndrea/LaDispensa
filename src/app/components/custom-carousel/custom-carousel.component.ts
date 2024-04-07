import { Component, ElementRef, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-custom-carousel',
  templateUrl: './custom-carousel.component.html',
  styleUrls: ['./custom-carousel.component.scss']
})
export class CustomCarouselComponent implements OnInit {
  items = [
    { content: 'Item 1', active: false },
    { content: 'Item 2', active: false },
    { content: 'Item 3', active: false }
  ];

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {}

  ngAfterViewInit() {
    const owlElement = $(this.elementRef.nativeElement).find('.custom-carousel');
    (owlElement as any).owlCarousel({
      autoWidth: true,
      loop: true
    });

    // Gestione del clic sugli elementi
    owlElement.on('click', '.item', (event) => {
      const clickedItem = event.currentTarget;
      const index = $(clickedItem).index();

      // Aggiorna lo stato degli elementi
      this.items.forEach((item, i) => {
        if (i === index) {
          item.active = !item.active; // Toggle attivo/inattivo
        } else {
          item.active = false; // Disattiva gli altri elementi
        }
      });

      // Forza l'aggiornamento del carousel
      (owlElement as any).trigger('refresh.owl.carousel');
    });
  }

  // Metodo per gestire il clic sugli elementi
  toggleActive(item: { active: boolean; }) {
    item.active = !item.active;
  }
}
