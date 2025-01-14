import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  notificationsCount = 10;

  updatedNotificationsCount(count: number) {
    this.notificationsCount = count
  }
}
