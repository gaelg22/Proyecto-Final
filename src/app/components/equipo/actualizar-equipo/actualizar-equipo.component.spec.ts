import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarEquipoComponent } from './actualizar-equipo.component';

describe('ActualizarEquipoComponent', () => {
  let component: ActualizarEquipoComponent;
  let fixture: ComponentFixture<ActualizarEquipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizarEquipoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
