import { Component, input } from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'words-shell-card',
  standalone: true,
  imports: [IonCard, IonCardHeader, IonCardTitle, IonCardContent],
  templateUrl: './shell-card.component.html',
  styleUrls: ['./shell-card.component.less']
})
export class ShellCardComponent {
  readonly title = input.required<string>();
}
