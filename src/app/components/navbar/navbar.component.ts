import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  menu_icon: string = 'bi bi-list';
  menuVisible: boolean = false;

  openMenu() {
    this.menuVisible =! this.menuVisible;
    this.menu_icon = this.menuVisible ? 'bi bi-x' : 'bi bi-list';
  }

  closeMenu() {
    this.menuVisible = false;
    this.menu_icon = 'bi bi-list';
  }
}
