import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEnrolleesComponent } from './update-enrollees.component';

describe('UpdateEnrolleesComponent', () => {
  let component: UpdateEnrolleesComponent;
  let fixture: ComponentFixture<UpdateEnrolleesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateEnrolleesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEnrolleesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Update Enrollee'`, () => {
    fixture = TestBed.createComponent(UpdateEnrolleesComponent);
    const app = fixture.debugElement.componentInstance;
    console.log('app title '+app.title)
    expect(app.title).toEqual('Update Enrollee');
  });

  it('should create the app', () => { // 4
    fixture = TestBed.createComponent(UpdateEnrolleesComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeDefined();
  });*/
});
