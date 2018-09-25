import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHeroDetailComponent } from './card-hero-detail.component';
import { expect } from 'chai';

describe('TopicTeacherComponent', () => {
  let component: CardHeroDetailComponent;
  let fixture: ComponentFixture<CardHeroDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardHeroDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).to.be.true;
  });
});
