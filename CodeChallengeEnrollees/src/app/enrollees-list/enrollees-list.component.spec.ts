import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrolleesListComponent } from './enrollees-list.component';

describe('EnrolleesListComponent', () => {
  let component: EnrolleesListComponent;
  let fixture: ComponentFixture<EnrolleesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrolleesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrolleesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should create the app', () => { // 4
    fixture = TestBed.createComponent(EnrolleesListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeDefined();
  });*/

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
