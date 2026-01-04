import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarLigaComponent } from './agregar-liga.component';

describe('AgregarLigaComponent', () => {
  let component: AgregarLigaComponent;
  let fixture: ComponentFixture<AgregarLigaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarLigaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarLigaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
