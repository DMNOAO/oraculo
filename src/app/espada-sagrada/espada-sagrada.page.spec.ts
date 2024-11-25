import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EspadaSagradaPage } from './espada-sagrada.page';

describe('EspadaSagradaPage', () => {
  let component: EspadaSagradaPage;
  let fixture: ComponentFixture<EspadaSagradaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EspadaSagradaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
