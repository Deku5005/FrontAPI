import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotificationsComponent } from './notifications';
import { Location } from '@angular/common';
import { faTimes, faBell, faCircle, faEye } from '@fortawesome/free-solid-svg-icons';

describe('NotificationsComponent', () => {
  let component: NotificationsComponent;
  let fixture: ComponentFixture<NotificationsComponent>;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationsComponent],
      providers: [
        { provide: Location, useValue: { back: jasmine.createSpy('back') } }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(NotificationsComponent);
    component = fixture.componentInstance;
    location = TestBed.inject(Location);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display notifications', () => {
    expect(component.notifications.length).toBeGreaterThan(0);
  });

it('should mark notification as read when clicked', () => {
  const unreadNotification = component.notifications.find(n => n.unread);
  if (unreadNotification) {
    component.markAsRead(unreadNotification.id);
    expect(unreadNotification.unread).toBeFalse();
  }
});

it('should display correct unread count', () => {
  const count = component.getUnreadCount();
  expect(count).toBe(1); // Selon vos données de test
});

});
