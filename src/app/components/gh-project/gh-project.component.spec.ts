import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhProjectComponent } from './gh-project.component';

describe('GhProjectComponent', () => {
  let component: GhProjectComponent;
  let fixture: ComponentFixture<GhProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GhProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GhProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
