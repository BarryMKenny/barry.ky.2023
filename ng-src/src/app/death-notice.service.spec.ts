import { TestBed } from '@angular/core/testing';

import { DeathNoticeService } from './death-notice.service';

describe('DeathNoticeService', () => {
  let service: DeathNoticeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeathNoticeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
