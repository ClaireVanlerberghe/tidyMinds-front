import { TestBed } from '@angular/core/testing';

import { TimerDialogService } from './timer-dialog.service';

describe('TimerDialogService', () => {
  let service: TimerDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimerDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
