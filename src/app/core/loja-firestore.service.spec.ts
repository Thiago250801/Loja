import { TestBed } from '@angular/core/testing';

import { LojaFirestoreService } from './loja-firestore.service';

describe('LojaFirestoreService', () => {
  let service: LojaFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LojaFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
