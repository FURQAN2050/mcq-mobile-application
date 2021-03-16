import { TestBed } from '@angular/core/testing';

import { ApiSupportingServicesService } from './api-supporting-services.service';

describe('ApiSupportingServicesService', () => {
  let service: ApiSupportingServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiSupportingServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
