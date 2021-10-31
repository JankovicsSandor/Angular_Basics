import { Issue } from "../store/issue";

export class BoardStageIssueModel{
  stageId:number;
  stageName: string;
  vipLimit:number;
  issues:Issue[];

  /**
   *
   */
  constructor(stageId:number=-1,stageName:string="",vipLimit:number=16,issues=<Issue[]>[]) {
    this.stageId=stageId;
    this.stageName=stageName;
    this.vipLimit=vipLimit
    this.issues=issues;
  }
}
