import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faTimes, faBell, faCircle, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './notifications.html',
  styleUrls: ['./notifications.css']
})
export class NotificationsComponent {

  isOpen = true;
  // Icônes
  faTimes = faTimes;
  faEye = faEye;
  faBell = faBell;
  faCircle = faCircle;

  // Notifications de démo
  notifications = [
    {
      id: 1,
      title: 'Nouveau message',
      content: 'Vous avez reçu un message de Ibrahim Bah',
      time: '2 min',
      unread: true,
      type: 'message'
    },
    {
      id: 2,
      title: 'Projet mis à jour',
      content: 'Le projet "Dashboard" a été modifié',
      time: '15 min',
      unread: false,
      type: 'project'
    },

  ];

  constructor(private router: Router, private location: Location) {}

   goBack(): void {
    this.location.back();
   }

  markAsRead(id: number): void {
    const notif = this.notifications.find(n => n.id === id);
    if (notif) notif.unread = false;
  }

  getUnreadCount(): number {
    return this.notifications.filter(n => n.unread).length;
  }
}
