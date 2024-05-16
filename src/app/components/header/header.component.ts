import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements AfterViewInit {
  ngAfterViewInit() {
    const imgElement = document.querySelector('.img-thaina');

    if (imgElement) {
      imgElement.classList.add('rotate');

      setTimeout(() => {
        imgElement.classList.remove('rotate');
      }, 4800);
    }
  }
}
