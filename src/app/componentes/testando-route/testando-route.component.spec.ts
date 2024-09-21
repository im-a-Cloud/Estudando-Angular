import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestandoRouteComponent } from './testando-route.component';

describe('TestandoRouteComponent', () => {
  let component: TestandoRouteComponent;
  let fixture: ComponentFixture<TestandoRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestandoRouteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestandoRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
