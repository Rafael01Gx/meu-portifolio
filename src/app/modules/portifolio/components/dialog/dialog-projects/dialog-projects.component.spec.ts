import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogProjectsComponent } from './dialog-projects.component';

describe('DialogPrjectsComponent', () => {
  let component: DialogProjectsComponent;
  let fixture: ComponentFixture<DialogProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogProjectsComponent,]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
