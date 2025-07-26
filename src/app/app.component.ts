import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpellList } from './spell-list/spell-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SpellList],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Arcana UI';
}
