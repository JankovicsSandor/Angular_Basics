
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { IssueService } from '@store';
import {  BoardModel, Issue } from '@ui-view';

@Component({
  selector: 'app-board-item',
  templateUrl: './board-item.component.html',
  styleUrls: ['./board-item.component.scss']
})
export class BoardItemComponent implements OnInit {

  @Input() boardItem: BoardModel = new BoardModel();

  constructor(private issueService:IssueService) { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<Issue[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      this.issueService.updateIssuePosition(event.previousContainer.data[event.previousIndex],Number(event.container.id))
    }
  }

}
