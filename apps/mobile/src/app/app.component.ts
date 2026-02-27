import { Component } from '@angular/core';
import { IonApp, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IonApp, IonHeader, IonToolbar, IonTitle, IonContent, RouterOutlet],
  template: `
    <ion-app>
      <ion-header>
        <ion-toolbar>
          <ion-title>Words Mobile</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content class="ion-padding">
        <router-outlet></router-outlet>
      </ion-content>
    </ion-app>
  `
})
export class AppComponent {}
