import { Injectable } from '@angular/core';
import { Board } from '@ui-view';
import { BoardStore } from './board.store';

@Injectable()
export class BoardService {

  constructor(private boardStore:BoardStore) { }

  addNewBoard(newBoard:Board){
    this.boardStore.add(newBoard)
  }
}
