export class BoardStage{
  id:number;
  name:string;
  vipLimit:number;


  /**
   *
   */
  constructor(id:number=-1,name:string="",vipLimit=16) {
    this.id=id;
    this.name=name,
    this.vipLimit=vipLimit;
  }
}
