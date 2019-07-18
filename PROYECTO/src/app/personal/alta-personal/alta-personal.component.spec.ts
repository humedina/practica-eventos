import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaPersonalComponent } from './alta-personal.component';

describe('AltaPersonalComponent', () => {
  let component: AltaPersonalComponent;
  let fixture: ComponentFixture<AltaPersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaPersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
