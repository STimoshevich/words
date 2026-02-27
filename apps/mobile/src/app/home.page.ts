import { Component } from '@angular/core';
import { IonText } from '@ionic/angular/standalone';

@Component({
  standalone: true,
  imports: [IonText],
  template: `
    <ion-text>
      <h2>Базовая мобильная архитектура готова</h2>
      <p>Дальше можно наращивать модули домена и feature-экраны.</p>
    </ion-text>
  `
})
export class HomePage {}
