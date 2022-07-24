import { TestBed } from '@angular/core/testing';

import { TechniqueService } from './technique.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { HttpClient } from '@angular/common/http';
import { ErrorHandlingService } from '../error-handling.service';
import { Technique } from './technique';

import grillTech from '../auth/grill-tech';

const testUrl = 'https://o7qz9dt15c.execute-api.us-east-1.amazonaws.com/Production/techniques';

fdescribe('TechniqueService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let techniqueService: TechniqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TechniqueService, ErrorHandlingService]
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    techniqueService = TestBed.inject(TechniqueService);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  describe('#getTechniques', () => {
    let expectedTechniques: Technique[];

    beforeEach(() => {
      techniqueService = TestBed.inject(TechniqueService);
      expectedTechniques = grillTech;
    });

    it('can test getTechniques post request', () => {
      techniqueService.getTechniques('grill-tech').subscribe({
        next: techniques => expect(techniques).toEqual(expectedTechniques, 'should return grill techniques'),
        error: fail,
      });

      const req = httpTestingController.expectOne('https://o7qz9dt15c.execute-api.us-east-1.amazonaws.com/Production/techniques');
      expect(req.request.method).toEqual('POST');

      req.flush(expectedTechniques);
    });
  });

});
