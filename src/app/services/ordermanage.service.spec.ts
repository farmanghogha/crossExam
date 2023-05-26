import { TestBed } from '@angular/core/testing';

import { OrdermanageService } from './ordermanage.service';

describe('OrdermanageService', () => {
  let service: OrdermanageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdermanageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
