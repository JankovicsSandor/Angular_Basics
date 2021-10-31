import { BoardStage } from "./board-stage";

export class Board{
  id:number;
  name:string;
  stages:BoardStage[];

  /**
   *
   */
  constructor() {
    this.id=-1;
    this.name="",
    this.stages= new Array<BoardStage>();
  }
}
