import { Component } from '@angular/core';
import { SpellList } from './spell-list/spell-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SpellList],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Arcana UI';
}
