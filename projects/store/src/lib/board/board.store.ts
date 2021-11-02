import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { BoardStage } from '@ui-view';
import { Board } from 'projects/ui-view/src/lib/store/board';

export interface BoardState extends EntityState<Board> { }

@Injectable()
@StoreConfig({ name: 'board' })
export class BoardStore extends EntityStore<BoardState> {
  constructor() {
    super();
  }
}
