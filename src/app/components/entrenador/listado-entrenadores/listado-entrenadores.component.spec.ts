import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoEntrenadoresComponent } from './listado-entrenadores.component';

describe('ListadoEntrenadoresComponent', () => {
  let component: ListadoEntrenadoresComponent;
  let fixture: ComponentFixture<ListadoEntrenadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoEntrenadoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoEntrenadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
