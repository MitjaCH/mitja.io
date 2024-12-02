import { Component, ChangeDetectorRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  sidebarVisible: boolean = false;

  private cdr = inject(ChangeDetectorRef);

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
    console.log(this.sidebarVisible ? 'Sidebar is visible' : 'Sidebar is not visible');
    this.cdr.detectChanges();
  }

  openSidebar() {
    this.sidebarVisible = true;
    console.log('Sidebar is visible');
    this.cdr.detectChanges();
  }

  closeSidebar() { 
    this.sidebarVisible = false;
    console.log('Sidebar is not visible');
    this.cdr.detectChanges();
  }
}
