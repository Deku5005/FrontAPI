import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faUserCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar-contributeurs',
  standalone: true,
    imports: [
        FaIconComponent,RouterLink    ],
  templateUrl: './navbar-contributeurs.html',
  styleUrl: './navbar-contributeurs.css'
})
export class NavbarContributeurs {

  protected readonly faUserCircle = faUserCircle;
  
}
