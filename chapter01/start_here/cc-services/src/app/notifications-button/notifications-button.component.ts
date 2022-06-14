import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NotificationsService } from '../services/notifications.service';

@Component({
  selector: 'app-notifications-button',
  templateUrl: './notifications-button.component.html',
  styleUrls: ['./notifications-button.component.scss']
})
export class NotificationsButtonComponent implements OnInit {
  notificationCount$: Observable<number>;

  constructor(private notificationsService: NotificationsService) { }

  ngOnInit(): void {
    this.notificationCount$ = this.notificationsService.count$
  }

}
