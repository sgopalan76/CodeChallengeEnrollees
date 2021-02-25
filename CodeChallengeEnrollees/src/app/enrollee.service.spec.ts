import { TestBed, inject, async } from '@angular/core/testing';

import { EnrolleeService } from './enrollee.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('EnrolleeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
    }).compileComponents();
  });

  it('should be created', async(inject([HttpTestingController, EnrolleeService],
    (httpClient: HttpTestingController, apiService: EnrolleeService) => {
    const service: EnrolleeService = TestBed.get(EnrolleeService);
    expect(service).toBeTruthy();
  })));
});
