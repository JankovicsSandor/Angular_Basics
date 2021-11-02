import { IssueStore } from './issue.store';
import { Injectable } from '@angular/core';
import { Issue } from '@ui-view';

@Injectable()
export class IssueService {

  updateIssuePosition(issue: Issue, newStatusId: number) {
    this.issueStore.update(issue.id, { statusId: newStatusId });
  }

  constructor(private issueStore: IssueStore) { }

  addNewIssue(newIssue: Issue) {
    this.issueStore.add(newIssue);
  }
}
