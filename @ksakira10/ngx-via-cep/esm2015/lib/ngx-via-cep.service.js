/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { Subject } from 'rxjs';
import { NgxViaCepConfiguration } from './ngx-via-cep.configuration';
import { BASE_PATH } from './ngx-via-cep.variables';
export class NgxViaCepService {
    /**
     * @param {?} http
     * @param {?} basePath
     * @param {?} configuration
     */
    constructor(http, basePath, configuration) {
        this.http = http;
        this.basePath = 'https://viacep.com.br/ws';
        this.defaultHeaders = new HttpHeaders();
        this.configuration = new NgxViaCepConfiguration();
        this.urlFetchByCEP = (/**
         * @param {?} cep
         * @return {?}
         */
        (cep) => `${this.basePath}/${cep}/json/`);
        this.urlFetchByAddressSP = (/**
         * @param {?} address
         * @param {?=} state
         * @param {?=} city
         * @return {?}
         */
        (address, state = 'SP', city = 'São Paulo') => `${this.basePath}/${encodeURIComponent(state)}/${encodeURIComponent(city)}/${encodeURIComponent(address)}/json/`);
        this.fetchByCEP = (/**
         * @param {?} cep
         * @return {?}
         */
        (cep) => {
            /** @type {?} */
            const subject = new Subject();
            cep = cep.replace(/[!@#$%^&*a-zA-Z.-]/gi, '');
            if (/\d{8}/.test(cep)) {
                return this.http.get(this.urlFetchByCEP(cep));
            }
            subject.error(new HttpErrorResponse({
                status: 412,
                statusText: 'Precondition failed',
                error: { code: 1, message: 'length must be equals 8' }
            }));
            return subject.asObservable();
        });
        this.fetchByAddressSaoPaulo = (/**
         * @param {?} address
         * @return {?}
         */
        (address) => {
            return this.http.get(this.urlFetchByAddressSP(address));
        });
        this.fetchByAddress = (/**
         * @param {?} state
         * @param {?} city
         * @param {?} address
         * @return {?}
         */
        (state, city, address) => {
            return this.http.get(this.urlFetchByAddressSP(address, state, city));
        });
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
}
NgxViaCepService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NgxViaCepService.ctorParameters = () => [
    { type: HttpClient },
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [BASE_PATH,] }] },
    { type: NgxViaCepConfiguration, decorators: [{ type: Optional }] }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    NgxViaCepService.prototype.basePath;
    /** @type {?} */
    NgxViaCepService.prototype.defaultHeaders;
    /** @type {?} */
    NgxViaCepService.prototype.configuration;
    /**
     * @type {?}
     * @private
     */
    NgxViaCepService.prototype.urlFetchByCEP;
    /**
     * @type {?}
     * @private
     */
    NgxViaCepService.prototype.urlFetchByAddressSP;
    /** @type {?} */
    NgxViaCepService.prototype.fetchByCEP;
    /** @type {?} */
    NgxViaCepService.prototype.fetchByAddressSaoPaulo;
    /** @type {?} */
    NgxViaCepService.prototype.fetchByAddress;
    /**
     * @type {?}
     * @protected
     */
    NgxViaCepService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXZpYS1jZXAuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Brc2FraXJhMTAvbmd4LXZpYS1jZXAvIiwic291cmNlcyI6WyJsaWIvbmd4LXZpYS1jZXAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFVBQVUsRUFDVixpQkFBaUIsRUFDakIsV0FBVyxFQUNaLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBR3BELE1BQU0sT0FBTyxnQkFBZ0I7Ozs7OztJQWUzQixZQUNZLElBQWdCLEVBQ0ssUUFBZ0IsRUFDbkMsYUFBcUM7UUFGdkMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQWZsQixhQUFRLEdBQUcsMEJBQTBCLENBQUM7UUFDekMsbUJBQWMsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1FBQ25DLGtCQUFhLEdBQUcsSUFBSSxzQkFBc0IsRUFBRSxDQUFDO1FBQ25DLGtCQUFhOzs7O1FBQUcsQ0FBQyxHQUFXLEVBQUUsRUFBRSxDQUMvQyxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUksR0FBRyxRQUFRLEVBQUM7UUFDakIsd0JBQW1COzs7Ozs7UUFBRyxDQUNyQyxPQUFlLEVBQ2YsUUFBZ0IsSUFBSSxFQUNwQixPQUFlLFdBQVcsRUFDMUIsRUFBRSxDQUNGLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxrQkFBa0IsQ0FDakUsSUFBSSxDQUNMLElBQUksa0JBQWtCLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBQztRQWdCcEMsZUFBVTs7OztRQUFHLENBQUMsR0FBVyxFQUFtQixFQUFFOztrQkFDN0MsT0FBTyxHQUFHLElBQUksT0FBTyxFQUFxQjtZQUNoRCxHQUFHLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUU5QyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3JCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQy9DO1lBRUQsT0FBTyxDQUFDLEtBQUssQ0FDWCxJQUFJLGlCQUFpQixDQUFDO2dCQUNwQixNQUFNLEVBQUUsR0FBRztnQkFDWCxVQUFVLEVBQUUscUJBQXFCO2dCQUNqQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRTthQUN2RCxDQUFDLENBQ0gsQ0FBQztZQUNGLE9BQU8sT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ2hDLENBQUMsRUFBQztRQUVLLDJCQUFzQjs7OztRQUFHLENBQUMsT0FBZSxFQUFtQixFQUFFO1lBQ25FLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDMUQsQ0FBQyxFQUFDO1FBRUssbUJBQWM7Ozs7OztRQUFHLENBQ3RCLEtBQWEsRUFDYixJQUFZLEVBQ1osT0FBZSxFQUNFLEVBQUU7WUFDbkIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3ZFLENBQUMsRUFBQztRQXJDQSxJQUFJLFFBQVEsRUFBRTtZQUNaLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1NBQzFCO1FBQ0QsSUFBSSxhQUFhLEVBQUU7WUFDakIsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7WUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLElBQUksYUFBYSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQ3JFO0lBQ0gsQ0FBQzs7O1lBNUJGLFVBQVU7Ozs7WUFUVCxVQUFVO3lDQTJCUCxRQUFRLFlBQUksTUFBTSxTQUFDLFNBQVM7WUFyQnhCLHNCQUFzQix1QkFzQjFCLFFBQVE7Ozs7Ozs7SUFqQlgsb0NBQWdEOztJQUNoRCwwQ0FBMEM7O0lBQzFDLHlDQUFvRDs7Ozs7SUFDcEQseUNBQ2tDOzs7OztJQUNsQywrQ0FPMkM7O0lBZ0IzQyxzQ0FnQkU7O0lBRUYsa0RBRUU7O0lBRUYsMENBTUU7Ozs7O0lBekNBLGdDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEh0dHBDbGllbnQsXG4gIEh0dHBFcnJvclJlc3BvbnNlLFxuICBIdHRwSGVhZGVyc1xufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBOZ3hWaWFDZXBDb25maWd1cmF0aW9uIH0gZnJvbSAnLi9uZ3gtdmlhLWNlcC5jb25maWd1cmF0aW9uJztcbmltcG9ydCB7IEJBU0VfUEFUSCB9IGZyb20gJy4vbmd4LXZpYS1jZXAudmFyaWFibGVzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5neFZpYUNlcFNlcnZpY2Uge1xuICBwcm90ZWN0ZWQgYmFzZVBhdGggPSAnaHR0cHM6Ly92aWFjZXAuY29tLmJyL3dzJztcbiAgcHVibGljIGRlZmF1bHRIZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCk7XG4gIHB1YmxpYyBjb25maWd1cmF0aW9uID0gbmV3IE5neFZpYUNlcENvbmZpZ3VyYXRpb24oKTtcbiAgcHJpdmF0ZSByZWFkb25seSB1cmxGZXRjaEJ5Q0VQID0gKGNlcDogc3RyaW5nKSA9PlxuICAgIGAke3RoaXMuYmFzZVBhdGh9LyR7Y2VwfS9qc29uL2A7XG4gIHByaXZhdGUgcmVhZG9ubHkgdXJsRmV0Y2hCeUFkZHJlc3NTUCA9IChcbiAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgc3RhdGU6IHN0cmluZyA9ICdTUCcsXG4gICAgY2l0eTogc3RyaW5nID0gJ1PDo28gUGF1bG8nXG4gICkgPT5cbiAgICBgJHt0aGlzLmJhc2VQYXRofS8ke2VuY29kZVVSSUNvbXBvbmVudChzdGF0ZSl9LyR7ZW5jb2RlVVJJQ29tcG9uZW50KFxuICAgICAgY2l0eVxuICAgICl9LyR7ZW5jb2RlVVJJQ29tcG9uZW50KGFkZHJlc3MpfS9qc29uL2A7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChCQVNFX1BBVEgpIGJhc2VQYXRoOiBzdHJpbmcsXG4gICAgQE9wdGlvbmFsKCkgY29uZmlndXJhdGlvbjogTmd4VmlhQ2VwQ29uZmlndXJhdGlvblxuICApIHtcbiAgICBpZiAoYmFzZVBhdGgpIHtcbiAgICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aDtcbiAgICB9XG4gICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb247XG4gICAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGggfHwgY29uZmlndXJhdGlvbi5iYXNlUGF0aCB8fCB0aGlzLmJhc2VQYXRoO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBmZXRjaEJ5Q0VQID0gKGNlcDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+ID0+IHtcbiAgICBjb25zdCBzdWJqZWN0ID0gbmV3IFN1YmplY3Q8SHR0cEVycm9yUmVzcG9uc2U+KCk7XG4gICAgY2VwID0gY2VwLnJlcGxhY2UoL1shQCMkJV4mKmEtekEtWi4tXS9naSwgJycpO1xuXG4gICAgaWYgKC9cXGR7OH0vLnRlc3QoY2VwKSkge1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy51cmxGZXRjaEJ5Q0VQKGNlcCkpO1xuICAgIH1cblxuICAgIHN1YmplY3QuZXJyb3IoXG4gICAgICBuZXcgSHR0cEVycm9yUmVzcG9uc2Uoe1xuICAgICAgICBzdGF0dXM6IDQxMixcbiAgICAgICAgc3RhdHVzVGV4dDogJ1ByZWNvbmRpdGlvbiBmYWlsZWQnLFxuICAgICAgICBlcnJvcjogeyBjb2RlOiAxLCBtZXNzYWdlOiAnbGVuZ3RoIG11c3QgYmUgZXF1YWxzIDgnIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgICByZXR1cm4gc3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgfTtcblxuICBwdWJsaWMgZmV0Y2hCeUFkZHJlc3NTYW9QYXVsbyA9IChhZGRyZXNzOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4gPT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMudXJsRmV0Y2hCeUFkZHJlc3NTUChhZGRyZXNzKSk7XG4gIH07XG5cbiAgcHVibGljIGZldGNoQnlBZGRyZXNzID0gKFxuICAgIHN0YXRlOiBzdHJpbmcsXG4gICAgY2l0eTogc3RyaW5nLFxuICAgIGFkZHJlc3M6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPGFueT4gPT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMudXJsRmV0Y2hCeUFkZHJlc3NTUChhZGRyZXNzLCBzdGF0ZSwgY2l0eSkpO1xuICB9O1xufVxuIl19