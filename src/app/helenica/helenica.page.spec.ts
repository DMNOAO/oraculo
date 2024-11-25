import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HelenicaPage } from './helenica.page';

describe('HelenicaPage', () => {
  let component: HelenicaPage;
  let fixture: ComponentFixture<HelenicaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HelenicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
