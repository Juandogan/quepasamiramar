import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotacortaComponent } from './notacorta.component';

describe('NotacortaComponent', () => {
  let component: NotacortaComponent;
  let fixture: ComponentFixture<NotacortaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotacortaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotacortaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
