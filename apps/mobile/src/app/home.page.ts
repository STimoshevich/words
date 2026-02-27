import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { IonButton, IonText } from '@ionic/angular/standalone';

const GRID_SIZE_X = 8;
const GRID_SIZE_Y = 8;

@Component({
  standalone: true,
  imports: [NgFor, IonText, IonButton],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.less']
})
export class HomePage {
  protected readonly gridSizeX = GRID_SIZE_X;
  protected readonly gridSizeY = GRID_SIZE_Y;
  protected readonly cells = Array.from({ length: GRID_SIZE_X * GRID_SIZE_Y });
}
