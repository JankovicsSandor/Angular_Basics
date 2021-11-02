import { Component, OnInit } from '@angular/core';
import { BoardIssueDbViewService } from '@bussiness-logic';
import { BoardService, IssueService } from '@store';
import { BoardModel, Issue } from '@ui-view';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.scss']
})
export class BoardListComponent implements OnInit {
  boardList$: ReplaySubject<BoardModel[]>= new ReplaySubject();

  constructor(private boardService:BoardIssueDbViewService,private issueService:IssueService) {
    this.boardService.getBoardList$().subscribe(this.boardList$);

  }
  ngOnInit(): void {

  }

  addNewIssueToBoard(board:BoardModel){
    let starterStatusId=board.stages[0].id;
    let newIssue=new Issue(Math.floor(Math.random() * 100),"Jira is down","Hello",board.id,starterStatusId);
    this.issueService.addNewIssue(newIssue);
  }
}
