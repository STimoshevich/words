import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { IonButton, IonText } from '@ionic/angular/standalone';

const GRID_SIZE_X = 8;
const GRID_SIZE_Y = 8;

@Component({
  standalone: true,
  imports: [NgFor, IonText, IonButton],
  template: `
    <section class="game-screen">
      <header class="game-header">
        <ion-text>
          <h2>Платформа для игры в слова</h2>
          <p>Адаптивная сетка {{ gridSizeX }}x{{ gridSizeY }}. Размеры вынесены в константы.</p>
        </ion-text>
      </header>

      <div class="grid-stage">
        <div
          class="word-grid-platform"
          aria-label="Игровая сетка"
          [style.grid-template-columns]="'repeat(' + gridSizeX + ', minmax(0, 1fr))'"
          [style.grid-template-rows]="'repeat(' + gridSizeY + ', minmax(0, 1fr))'"
          [style.aspect-ratio]="gridSizeX + ' / ' + gridSizeY"
        >
          <div class="grid-cell" *ngFor="let cell of cells; let i = index" [attr.data-index]="i"></div>
        </div>
      </div>

      <footer class="controls-zone">
        <ion-button expand="block" fill="outline" disabled>Кнопки управления (заглушка)</ion-button>
      </footer>
    </section>
  `,
  styles: [
    `
      :host {
        display: block;
        height: 100%;
      }

      .game-screen {
        height: 100%;
        display: grid;
        grid-template-rows: auto minmax(0, 3fr) minmax(72px, 1fr);
        gap: 12px;
      }

      .game-header h2 {
        margin: 0;
        font-size: 1.15rem;
      }

      .game-header p {
        margin: 6px 0 0;
        color: var(--ion-color-medium, #666);
      }

      .grid-stage {
        min-height: 0;
        display: grid;
        place-items: center;
      }

      .word-grid-platform {
        width: 100%;
        height: 100%;
        max-height: 100%;
        border: 2px solid var(--ion-color-primary);
        border-radius: 12px;
        padding: 8px;
        display: grid;
        gap: 6px;
        background: rgba(56, 128, 255, 0.06);
      }

      .grid-cell {
        border-radius: 6px;
        border: 1px dashed rgba(56, 128, 255, 0.55);
        background: rgba(255, 255, 255, 0.8);
      }

      .controls-zone {
        display: flex;
        align-items: stretch;
      }
    `
  ]
})
export class HomePage {
  protected readonly gridSizeX = GRID_SIZE_X;
  protected readonly gridSizeY = GRID_SIZE_Y;
  protected readonly cells = Array.from({ length: GRID_SIZE_X * GRID_SIZE_Y });
}
