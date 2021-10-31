import { Injectable } from '@angular/core';
import { BoardQuery, IssueQuery } from '@store';
import { BoardModel, BoardStageIssueModel } from '@ui-view';
import { combineLatest, ReplaySubject } from 'rxjs';
import {map} from "rxjs/operators"

@Injectable()
export class BoardIssueDbViewService {
  boardList: ReplaySubject<BoardModel[]>= new ReplaySubject();

  constructor(private boardQuery: BoardQuery, private issueQuery: IssueQuery) {

    combineLatest([this.boardQuery.getAllBoard(),this.issueQuery.getAllIssue()]).pipe(map(([allBoard,allIssue])=>{
      let returnList:BoardModel[]=[];

      allBoard.forEach(board => {
        let actualBoard=new BoardModel(board.id,board.name);
        board.stages.forEach(boardStage => {
          let machingIssues=allIssue.filter(issue=>issue.statusId==boardStage.id && issue.boardId==board.id);
          actualBoard.stages.push(new BoardStageIssueModel(boardStage.id,boardStage.name,boardStage.vipLimit,machingIssues));
        });
      });
      return returnList;
    })).subscribe(this.boardList);
  }
}
