import { TestBed } from '@angular/core/testing';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';

import { ApiRequestOptions, ApiService } from './api.service';
import { HttpHeaders } from '@angular/common/http';

const API_ERROR_STUB: Record<string, any> & {
    message: string;
    error: any;
} = {
    error: 'Error: Api Error',
    message: 'API_ERROR',
};

const API_ERROR_RESPONSE_STUB = { status: 400, statusText: 'Bad Request' };
const API_OPTIONS_STUB: Partial<ApiRequestOptions> = {
    headers: {
        'Content-Type': 'application/json',
        Cookie: 'super-secret-cookie',
    },
};

describe('ApiService', () => {
    let service: ApiService;
    let httpTestingController: HttpTestingController;
    const URL = 'api/path';

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
        });
        service = TestBed.inject(ApiService);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    describe('INIT', () => {
        it('should be created', () => {
            expect(service).toBeTruthy();
        });
    });

    describe('METHOD: get', () => {
        it('should return get response', () => {
            service.get(URL).subscribe((data) => expect(data).toBeNull());
            const req = httpTestingController.expectOne(URL);
            expect(req.request.method).toEqual('GET');

            req.flush(null);
        });

        it('should return error if get request fails', () => {
            service.get(URL).subscribe({
                next: (data) => expect(true).toEqual(false),
                error: (data) => expect(data.error).toEqual(API_ERROR_STUB),
            });
            const req = httpTestingController.expectOne(URL);
            req.flush(API_ERROR_STUB, API_ERROR_RESPONSE_STUB);
        });

        //TODO: improve test and add test for getApiRequestOptions
        it('should add options to get request if any passed', () => {
            service
                .get(URL, API_OPTIONS_STUB)
                .subscribe((data) => expect(data).toBeNull());
            const req = httpTestingController.expectOne(URL);
            const cookie = req.request.headers.get('Cookie');
            const contentType = req.request.headers.get('Content-Type');
            expect(cookie).toEqual(API_OPTIONS_STUB.headers!['Cookie']);
            expect(contentType).toEqual(
                API_OPTIONS_STUB.headers!['Content-Type']
            );
        });
    });

    describe('METHOD: post', () => {
        it('should return post response', () => {
            service.post(URL).subscribe((data) => expect(data).toBeNull());
            const req = httpTestingController.expectOne(URL);
            expect(req.request.method).toEqual('POST');

            req.flush(null);
        });

        it('should return post error', () => {
            service.post(URL).subscribe({
                next: (data) => expect(true).toEqual(false),
                error: (data) => expect(data.error).toEqual(API_ERROR_STUB),
            });
            const req = httpTestingController.expectOne(URL);
            req.flush(API_ERROR_STUB, API_ERROR_RESPONSE_STUB);
        });
    });

    describe('METHOD: put', () => {
        it('should return put response', () => {
            service.put(URL, {}).subscribe((data) => expect(data).toBeNull());
            const req = httpTestingController.expectOne(URL);
            expect(req.request.method).toEqual('PUT');

            req.flush(null);
        });

        it('should return put error', () => {
            service.put(URL, {}).subscribe({
                next: (data) => expect(true).toEqual(false),
                error: (data) => expect(data.error).toEqual(API_ERROR_STUB),
            });
            const req = httpTestingController.expectOne(URL);

            req.flush(API_ERROR_STUB, API_ERROR_RESPONSE_STUB);
        });
    });

    describe('METHOD: patch', () => {
        it('should return patch response', () => {
            service.patch(URL, {}).subscribe((data) => expect(data).toBeNull());
            const req = httpTestingController.expectOne(URL);
            expect(req.request.method).toEqual('PATCH');

            req.flush(null);
        });

        it('should return patch error', () => {
            service.patch(URL, {}).subscribe({
                next: (data) => expect(true).toEqual(false),
                error: (data) => expect(data.error).toEqual(API_ERROR_STUB),
            });
            const req = httpTestingController.expectOne(URL);

            req.flush(API_ERROR_STUB, API_ERROR_RESPONSE_STUB);
        });
    });

    describe('METHOD: delete', () => {
        it('should return delete response', () => {
            service.delete(URL).subscribe((data) => expect(data).toBeNull());
            const req = httpTestingController.expectOne(URL);
            expect(req.request.method).toEqual('DELETE');

            req.flush(null);
        });

        it('should return delete error', () => {
            service.delete(URL).subscribe({
                next: (data) => expect(true).toEqual(false),
                error: (data) => expect(data.error).toEqual(API_ERROR_STUB),
            });
            const req = httpTestingController.expectOne(URL);
            req.flush(API_ERROR_STUB, API_ERROR_RESPONSE_STUB);
        });
    });
});
