import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HijosDaanaPage } from './hijos-daana.page';

describe('HijosDaanaPage', () => {
  let component: HijosDaanaPage;
  let fixture: ComponentFixture<HijosDaanaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HijosDaanaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
