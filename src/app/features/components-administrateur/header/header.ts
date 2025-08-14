import { Component } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router'; // Changé de RouterOutlet à RouterLink

@Component({
  selector: 'app-header',
  imports: [
    FaIconComponent,
    RouterLink 
  ],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  protected readonly faUserCircle = faUserCircle;
}