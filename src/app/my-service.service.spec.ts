import { TestBed } from '@angular/core/testing';

import { MyserviceService } from './my-service.service';

describe('MyServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyserviceService = TestBed.get(MyserviceService);
    expect(service).toBeTruthy();
  });
});
