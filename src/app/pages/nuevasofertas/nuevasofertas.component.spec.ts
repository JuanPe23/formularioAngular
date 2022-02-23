import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevasofertasComponent } from './nuevasofertas.component';

describe('NuevasofertasComponent', () => {
  let component: NuevasofertasComponent;
  let fixture: ComponentFixture<NuevasofertasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NuevasofertasComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevasofertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
