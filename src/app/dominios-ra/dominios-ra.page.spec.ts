import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DominiosRaPage } from './dominios-ra.page';

describe('DominiosRaPage', () => {
  let component: DominiosRaPage;
  let fixture: ComponentFixture<DominiosRaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DominiosRaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
