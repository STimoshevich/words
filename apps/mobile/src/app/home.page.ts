import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { IonButton, IonText } from '@ionic/angular/standalone';

@Component({
  standalone: true,
  imports: [NgFor, IonText, IonButton],
  template: `
    <section class="game-screen">
      <header class="game-header">
        <ion-text>
          <h2>Платформа для игры в слова</h2>
          <p>Ниже базовая сетка (3/4 экрана) для будущей игровой логики.</p>
        </ion-text>
      </header>

      <div class="word-grid-platform" aria-label="Игровая сетка">
        <div class="grid-cell" *ngFor="let cell of cells; let i = index" [attr.data-index]="i"></div>
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

      .word-grid-platform {
        width: 100%;
        min-height: 0;
        border: 2px solid var(--ion-color-primary);
        border-radius: 12px;
        padding: 8px;
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        gap: 6px;
        background: rgba(56, 128, 255, 0.06);
      }

      .grid-cell {
        aspect-ratio: 1;
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
  protected readonly cells = Array.from({ length: 64 });
}
