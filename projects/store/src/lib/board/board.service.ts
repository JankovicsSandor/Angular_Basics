import { Injectable } from '@angular/core';
import { BoardStore } from './board.store';

@Injectable()
export class BoardService {

  constructor(private boardStore:BoardStore) { }
}
