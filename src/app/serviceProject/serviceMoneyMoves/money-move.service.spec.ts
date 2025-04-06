import { TestBed } from '@angular/core/testing';

import { MoneyMoveService } from './money-move.service';

describe('MoneyMoveService', () => {
  let service: MoneyMoveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoneyMoveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
