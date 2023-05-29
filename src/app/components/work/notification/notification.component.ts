import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent {
  notifications = [
    {
      id: 1,
      email: 'Errandhelper.com',
      time: '3 days ago',
      message:
        'My JobMag is your favourite job website in Kenya. We make job search simple as we provide you with all jobs in Kenya in an easy and timely manner. Click on each specialization or job field to view jobs in each.',
    },
    {
      id: 2,
      email: 'Errandhelper.com',
      time: '3 days ago',
      message:
        'My JobMag is your favourite job website in Kenya. We make job search simple as we provide you with all jobs in Kenya in an easy and timely manner. Click on each specialization or job field to view jobs in each.',
    },
    {
      id: 3,
      email: 'Errandhelper.com',
      time: '3 days ago',
      message:
        'My JobMag is your favourite job website in Kenya. We make job search simple as we provide you with all jobs in Kenya in an easy and timely manner. Click on each specialization or job field to view jobs in each.',
    },
  ];

  errands = [
    {
      id: 1,
      email: 'Errandhelper.com',
      time: '3 days ago',
      review:
        'My JobMag is your favourite job website in Kenya. We make job search simple as we provide you with all jobs in Kenya in an easy and timely manner. Click on each specialization or job field to view jobs in each.',
    },
    {
      id: 2,
      email: 'Errandhelper.com',
      time: '3 days ago',
      review:
        'My JobMag is your favourite job website in Kenya. We make job search simple as we provide you with all jobs in Kenya in an easy and timely manner. Click on each specialization or job field to view jobs in each.',
    },

  ];

  submit() {
    throw new Error('Method not implemented.');
  }
}
