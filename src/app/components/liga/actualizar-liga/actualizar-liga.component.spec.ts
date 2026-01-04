import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarLigaComponent } from './actualizar-liga.component';

describe('ActualizarLigaComponent', () => {
  let component: ActualizarLigaComponent;
  let fixture: ComponentFixture<ActualizarLigaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizarLigaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarLigaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
