import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtaskslistComponent } from './viewtaskslist.component';

describe('ViewtaskslistComponent', () => {
  let component: ViewtaskslistComponent;
  let fixture: ComponentFixture<ViewtaskslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewtaskslistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewtaskslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
