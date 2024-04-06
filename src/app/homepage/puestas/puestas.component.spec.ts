import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuestasComponent } from './puestas.component';

describe('PuestasComponent', () => {
  let component: PuestasComponent;
  let fixture: ComponentFixture<PuestasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PuestasComponent]
    });
    fixture = TestBed.createComponent(PuestasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
