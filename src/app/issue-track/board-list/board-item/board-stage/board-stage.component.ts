import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { BoardStageIssueModel, Issue } from '@ui-view';

@Component({
  selector: 'app-board-stage',
  templateUrl: './board-stage.component.html',
  styleUrls: ['./board-stage.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class BoardStageComponent implements OnInit {

  @Input() stage:BoardStageIssueModel=new BoardStageIssueModel()
  constructor() { }

  ngOnInit(): void {
  }

}
