import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-spellbook',
  templateUrl: './spellbook.component.html',
  styleUrls: ['./spellbook.component.css']
})
export class SpellbookComponent implements OnInit {
  spells: any[] = [];
  errorMessage: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('https://web-production-42823.up.railway.app/spellbook')
    .subscribe({
      next: (data) => {
        this.spells = data;
      },
      error: (error) => {
        this.errorMessage = 'Failed to load spells';
        console.error('Error fetching spells:', error);
      },
      complete: () => {
        console.log('Data fetching complete');
      }
    });
  
  }
}
