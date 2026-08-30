import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Voorpagina } from './voorpagina';

describe('Voorpagina', () => {
  let component: Voorpagina;
  let fixture: ComponentFixture<Voorpagina>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Voorpagina],
    }).compileComponents();

    fixture = TestBed.createComponent(Voorpagina);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
