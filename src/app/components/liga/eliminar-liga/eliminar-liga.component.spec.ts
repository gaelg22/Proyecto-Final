import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarLigaComponent } from './eliminar-liga.component';

describe('EliminarLigaComponent', () => {
  let component: EliminarLigaComponent;
  let fixture: ComponentFixture<EliminarLigaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarLigaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarLigaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
