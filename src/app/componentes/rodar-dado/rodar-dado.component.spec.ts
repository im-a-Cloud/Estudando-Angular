import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RodarDadoComponent } from './rodar-dado.component';

describe('RodarDadoComponent', () => {
  let component: RodarDadoComponent;
  let fixture: ComponentFixture<RodarDadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RodarDadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RodarDadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
