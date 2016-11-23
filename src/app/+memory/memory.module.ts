import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';

import { MemoryComponent } from './memory.component';
import { MemoryService } from './memory/memory.service';
import { CardService } from './card/card.service';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { CardComponent } from './card/card.component';
import { HtmlSanitizerPipe } from "./shared/html-sanitizer.pipe";
import { ResultComponent } from './result/result.component';
import { GameStateComponent } from './game-state/game-state.component';

@NgModule({
  declarations: [
    MemoryComponent,
    HomeComponent,
    AboutComponent,
    GameBoardComponent,
    CardComponent,
    HtmlSanitizerPipe,
    ResultComponent,
    GameStateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forChild([
      {path: 'memory', component: MemoryComponent, children: [
        {path: 'home', component: HomeComponent},
        {path: 'about', component: AboutComponent}
      ]},
    ])
  ],
  providers: [MemoryService, CardService],
  bootstrap: [MemoryComponent]
})
export class MemoryModule { }
