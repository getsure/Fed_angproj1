import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredefinedPipesComponent } from './predefined-pipes.component';

describe('PredefinedPipesComponent', () => {
  let component: PredefinedPipesComponent;
  let fixture: ComponentFixture<PredefinedPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PredefinedPipesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PredefinedPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
