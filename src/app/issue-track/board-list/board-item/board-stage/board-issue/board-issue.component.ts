import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Issue } from '@ui-view';

@Component({
  selector: 'app-board-issue',
  templateUrl: './board-issue.component.html',
  styleUrls: ['./board-issue.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class BoardIssueComponent implements OnInit {

  @Input() issue:Issue=new Issue();
  constructor() { }

  ngOnInit(): void {
  }

}
