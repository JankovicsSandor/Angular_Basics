import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IssueTrackComponent } from './issue-track.component';

const routes: Routes = [{ path: '', component: IssueTrackComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IssueTrackRoutingModule { }
