import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParenteDataComponent } from './parente-data.component';

describe('ParenteDataComponent', () => {
  let component: ParenteDataComponent;
  let fixture: ComponentFixture<ParenteDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParenteDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParenteDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
