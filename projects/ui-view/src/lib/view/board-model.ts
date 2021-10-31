import { BoardStageIssueModel } from "./board-stage-issue-model";

export class BoardModel {
  id: number;
  boardName: string;
  stages: BoardStageIssueModel[]

  /**
   *
   */
  constructor(boardId: number = -1, boardName: string = "") {
    this.id = boardId;
    this.boardName = boardName;
    this.stages = [];
  }
}
