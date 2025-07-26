import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-spell-list',
  imports: [CommonModule],
  templateUrl: './spell-list.html',
  styles: ``
})

export class SpellList implements OnInit {
  spells: any[] | null = null;
  private http = inject(HttpClient);

  ngOnInit() {
    this.http.get<any[]>('https://web-develop-e516.up.railway.app/spellbook')
      .subscribe(data => this.spells = data);
  }}