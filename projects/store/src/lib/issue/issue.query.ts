import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Issue } from '@ui-view';
import { Observable } from 'rxjs';
import { IssueStore, IssueState } from './issue.store';

@Injectable()
export class IssueQuery extends QueryEntity<IssueState> {

  constructor(protected store: IssueStore) {
    super(store);
  }

  getAllIssue():Observable<Issue[]>{
    return this.selectAll();
  }

}
