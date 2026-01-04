import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPartidosComponent } from './listado-partidos.component';

describe('ListadoPartidosComponent', () => {
  let component: ListadoPartidosComponent;
  let fixture: ComponentFixture<ListadoPartidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoPartidosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoPartidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
