import { Component, OnInit } from '@angular/core';

import {MemoryService} from "../memory/memory.service";

@Component({
  selector: 'game-state',
  templateUrl: './game-state.component.html',
  styleUrls: ['./game-state.component.css']
})
export class GameStateComponent implements OnInit {

  constructor(private memory: MemoryService) { }

  ngOnInit() {
  }

}
