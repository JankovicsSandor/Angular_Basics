export class Issue{
  id:number;
  summary:string;
  description:string;
  boardId:number;
  statusId:number;

  /**
   *
   */
  constructor() {
    this.id=-1;
    this.summary="",
    this.description="",
    this.boardId=-1;
    this.statusId=-1;
  }
}
