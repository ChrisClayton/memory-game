/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GameStateComponent } from './game-state.component';

describe('GameStateComponent', () => {
  let component: GameStateComponent;
  let fixture: ComponentFixture<GameStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
