import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaCardComponent } from './noticia-card.component';

describe('NoticiaCardComponent', () => {
  let component: NoticiaCardComponent;
  let fixture: ComponentFixture<NoticiaCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoticiaCardComponent]
    });
    fixture = TestBed.createComponent(NoticiaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
