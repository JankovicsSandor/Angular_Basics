import { TestBed } from '@angular/core/testing';

import { BoardIssueDbViewService } from './board-issue-db-view.service';

describe('BoardIssueDbViewService', () => {
  let service: BoardIssueDbViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoardIssueDbViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
