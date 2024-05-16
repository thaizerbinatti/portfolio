import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  fullText: string = 'Thainá Zerbinatti />';
  displayedText: string = '';
  typingSpeed: number = 150;

  constructor() { }

  ngOnInit(): void {
    this.startTypingEffect();
  }

  startTypingEffect(): void {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < this.fullText.length) {
        this.displayedText += this.fullText.charAt(currentIndex);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, this.typingSpeed);
  }
}

