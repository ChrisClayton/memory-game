import { Component, OnInit } from '@angular/core';
import {MemoryService} from "../memory/memory.service";

@Component({
  selector: 'game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {

  constructor(private memory: MemoryService) { }

  ngOnInit() {
  }

}
