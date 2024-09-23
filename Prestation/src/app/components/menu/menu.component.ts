import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  isOpen = false;
  menu = "invisible";

  toggleMenu() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
    this.menu = "invisible"
    }else{
      this.menu = "visible"
    }
  }

  closeMenu() {
    this.isOpen = false;
  }
}
