import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IssueTrackRoutingModule } from './issue-track-routing.module';
import { IssueTrackComponent } from './issue-track.component';
import { BoardListComponent } from './board-list/board-list.component';
import { BoardItemComponent } from './board-list/board-item/board-item.component';
import { BoardStageComponent } from './board-list/board-item/board-stage/board-stage.component';
import { BoardIssueComponent } from './board-list/board-item/board-stage/board-issue/board-issue.component';
import { MatCardModule } from "@angular/material/card"
import { MatButtonModule } from "@angular/material/button"
import {DragDropModule} from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    IssueTrackComponent,
    BoardListComponent,
    BoardItemComponent,
    BoardStageComponent,
    BoardIssueComponent
  ],
  imports: [
    CommonModule,
    IssueTrackRoutingModule,
    MatCardModule,
    MatButtonModule,
    DragDropModule
  ]
})
export class IssueTrackModule { }
