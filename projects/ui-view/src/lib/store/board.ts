import { BoardStage } from "./board-stage";

export class Board{
  id:number;
  name:string;
  stages:BoardStage[];

  /**
   *
   */
  constructor(id:number=-1,name:string="",stages:BoardStage[]=[]) {
    this.id=id;
    this.name=name,
    this.stages= stages;
  }
}
