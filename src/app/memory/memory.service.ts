import { Injectable } from '@angular/core';

@Injectable()
export class MemoryService {
    moves: number;
    isOver: boolean = false;

  constructor() {
      this.newGame();
  }
  newGame() {
      this.isOver = false;
      this.moves = 0;

      //TODO
  }

}
