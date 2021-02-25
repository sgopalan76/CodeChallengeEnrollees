import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrolleesDetailsComponent } from './enrollees-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('EnrolleesDetailsComponent', () => {
  let component: EnrolleesDetailsComponent;
  let fixture: ComponentFixture<EnrolleesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EnrolleesDetailsComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, FormsModule, ReactiveFormsModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrolleesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should call getEnrollee and return []', fakeAsync (() => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.debugElement.componentInstance;
    const appService = fixture.debugElement.injector.get(EnrolleeService);
    const stub = spyOn(appService,'getEnrollee').and.callFake(() => {
        return of([]).pipe(delay(300));
    })
    expect(component.getEnrollee).toEqual([]);

  }))*/

  it('should create the app', () => { // 4
    fixture = TestBed.createComponent(EnrolleesDetailsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeDefined();
  });

});
