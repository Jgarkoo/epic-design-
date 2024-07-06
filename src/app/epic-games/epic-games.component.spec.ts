import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpicGamesComponent } from './epic-games.component';

describe('EpicGamesComponent', () => {
  let component: EpicGamesComponent;
  let fixture: ComponentFixture<EpicGamesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EpicGamesComponent]
    });
    fixture = TestBed.createComponent(EpicGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
