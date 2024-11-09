import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicTypingComponent } from './dynamic-typing.component';

describe('DynamicTypingComponent', () => {
  let component: DynamicTypingComponent;
  let fixture: ComponentFixture<DynamicTypingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicTypingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicTypingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
