import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertController } from '@ionic/angular';


// Service
import { EventService } from '../services/event/event.service';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.page.html',
  styleUrls: ['./event-create.page.scss'],
})
export class EventCreatePage implements OnInit {


  

  constructor(
    private router: Router, 
    private eventService: EventService,
    public alertController: AlertController,
  ) {}

  ngOnInit() {}

  eventName: string = "The Name";
  eventDesc: string = "The Event Description";
  eventPrice: number = 0;
  eventCost: number = 0;
  eventDate: String = new Date().toISOString();

  // Create Event
  createEvent(
    eventName: string,
    eventDesc: string,
    eventDateObject: any,
    eventPrice: number = this.eventPrice,
    eventCost: number
  ): void {
    if (eventDateObject === undefined) {
      return;
    } else if (
      eventDateObject.year === undefined ||
      eventDateObject.month === undefined ||
      eventDateObject.day === undefined
    ) {
      return;
    }
    const eventDate: Date = new Date(
      eventDateObject.year.value,
      eventDateObject.month.value - 1,
      eventDateObject.day.value
    );
    this.eventService
      .createEvent(this.eventName, this.eventDesc, eventDate, this.eventPrice, this.eventCost)

      .then(() => {
        //this.router.navigateByUrl('');

        /* Alert */
    
this.presentAlert();
 
       /* Alert */

      });
  }


  async presentAlert() {
    const alert = await this.alertController.create({
      header: this.eventName,
      subHeader: 'Subtitle',
      cssClass: 'custom-alert',
      message: 'event has been successfully submitted.',
      buttons: [
        {
          text: 'OK',
          role: 'cancel',
          handler: () => {
            this.router.navigateByUrl('');
          }
        }
        ]
    });

    await alert.present();
  }




}

