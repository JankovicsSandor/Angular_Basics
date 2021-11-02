import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardStageComponent } from './board-stage.component';

describe('BoardStageComponent', () => {
  let component: BoardStageComponent;
  let fixture: ComponentFixture<BoardStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
