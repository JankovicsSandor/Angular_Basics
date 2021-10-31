import { IssueStore } from './issue/issue.store';
import { IssueService } from './issue/issue.service';
import { IssueQuery } from './issue/issue.query';
import { BoardStore } from './board/board.store';
import { BoardService } from './board/board.service';
import { BoardQuery } from './board/board.query';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  providers: [BoardQuery,BoardService,BoardStore,IssueQuery,IssueService,IssueStore],
  imports: [
    CommonModule
  ]
})
export class StoreModule { }
