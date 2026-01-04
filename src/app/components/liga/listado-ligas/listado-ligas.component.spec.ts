import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoLigasComponent } from './listado-ligas.component';

describe('ListadoLigasComponent', () => {
  let component: ListadoLigasComponent;
  let fixture: ComponentFixture<ListadoLigasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoLigasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoLigasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
