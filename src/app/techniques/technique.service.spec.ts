import { TestBed } from '@angular/core/testing';

import { TechniqueService } from './technique.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { ErrorHandlingService } from '../error-handling.service';
import { Technique } from './technique';

import grillTech from '../auth/grill-tech';

//const testUrl = 'https://o7qz9dt15c.execute-api.us-east-1.amazonaws.com/Production/techniques';

fdescribe('TechniqueService', () => {
  let httpTestingController: HttpTestingController;
  let techniqueService: TechniqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TechniqueService, ErrorHandlingService],
    });

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
        next: (techniques) =>
          expect(techniques).toEqual(
            expectedTechniques,
            'should return grill techniques'
          ),
        error: fail,
      });

      const req = httpTestingController.expectOne(
        `${techniqueService.apiGatewayUrl}/techniques`
      );
      expect(req.request.method).toEqual('POST');

      req.flush(expectedTechniques);
    });

    it('should be OK returning no techniques', () => {
      techniqueService.getTechniques('grill-tech').subscribe({
        next: (techniques) =>
          expect(techniques.length).toEqual(
            0,
            'should have empty heroes array'
          ),
        error: fail,
      });

      const req = httpTestingController.expectOne(
        `${techniqueService.apiGatewayUrl}/techniques`
      );
      req.flush([]); // Respond with no heroes
    });

    // This service reports the error but finds a way to let the app keep going.
    it('should turn 404 into an empty heroes result', () => {
      techniqueService.getTechniques('grill-tech').subscribe({
        next: (techniques) =>
          expect(techniques.length).toEqual(
            0,
            'should return empty heroes array'
          ),
        error: fail,
      });

      const req = httpTestingController.expectOne(
        `${techniqueService.apiGatewayUrl}/techniques`
      );

      // respond with a 404 and the error message in the body
      const msg = 'deliberate 404 error';
      req.flush(msg, { status: 404, statusText: 'Not Found' });
    });
  });
});
