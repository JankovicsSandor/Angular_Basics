import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Board } from '@ui-view';
import { Observable } from 'rxjs';
import { BoardStore, BoardState } from './board.store';

@Injectable()
export class BoardQuery extends QueryEntity<BoardState> {

  constructor(protected store: BoardStore) {
    super(store);
  }

  getAllBoard():Observable<Board[]>{
    return this.selectAll();
  }

}
