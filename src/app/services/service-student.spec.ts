import { TestBed } from '@angular/core/testing';

import { ServiceStudent } from './service-student';

describe('ServiceStudent', () => {
  let service: ServiceStudent;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceStudent);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
