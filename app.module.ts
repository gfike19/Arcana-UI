import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from '../arcana-ui/src/app/app.component';
import { SpellbookComponent } from '../arcana-ui/src/app/spellbook/spellbook.component';

@NgModule({
  declarations: [
    SpellbookComponent
  ],
  imports: [
    AppComponent,
    BrowserModule,
    HttpClientModule
  ],
  providers: []
})
export class AppModule { }

