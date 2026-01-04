import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarPartidoComponent } from './eliminar-partido.component';

describe('EliminarPartidoComponent', () => {
  let component: EliminarPartidoComponent;
  let fixture: ComponentFixture<EliminarPartidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarPartidoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarPartidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
