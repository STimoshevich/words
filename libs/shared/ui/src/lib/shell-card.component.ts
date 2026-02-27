import { Component, input } from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'words-shell-card',
  standalone: true,
  imports: [IonCard, IonCardHeader, IonCardTitle, IonCardContent],
  template: `
    <ion-card>
      <ion-card-header>
        <ion-card-title>{{ title() }}</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        <ng-content></ng-content>
      </ion-card-content>
    </ion-card>
  `
})
export class ShellCardComponent {
  readonly title = input.required<string>();
}
