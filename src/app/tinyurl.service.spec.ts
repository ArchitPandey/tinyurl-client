import { TestBed } from '@angular/core/testing';

import { TinyurlService } from './tinyurl.service';

describe('TinyurlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TinyurlService = TestBed.get(TinyurlService);
    expect(service).toBeTruthy();
  });
});
