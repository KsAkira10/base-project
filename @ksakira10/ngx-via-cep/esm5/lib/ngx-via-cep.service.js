/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { Subject } from 'rxjs';
import { NgxViaCepConfiguration } from './ngx-via-cep.configuration';
import { BASE_PATH } from './ngx-via-cep.variables';
var NgxViaCepService = /** @class */ (function () {
    function NgxViaCepService(http, basePath, configuration) {
        var _this = this;
        this.http = http;
        this.basePath = 'https://viacep.com.br/ws';
        this.defaultHeaders = new HttpHeaders();
        this.configuration = new NgxViaCepConfiguration();
        this.urlFetchByCEP = (/**
         * @param {?} cep
         * @return {?}
         */
        function (cep) {
            return _this.basePath + "/" + cep + "/json/";
        });
        this.urlFetchByAddressSP = (/**
         * @param {?} address
         * @param {?=} state
         * @param {?=} city
         * @return {?}
         */
        function (address, state, city) {
            if (state === void 0) { state = 'SP'; }
            if (city === void 0) { city = 'São Paulo'; }
            return _this.basePath + "/" + encodeURIComponent(state) + "/" + encodeURIComponent(city) + "/" + encodeURIComponent(address) + "/json/";
        });
        this.fetchByCEP = (/**
         * @param {?} cep
         * @return {?}
         */
        function (cep) {
            /** @type {?} */
            var subject = new Subject();
            cep = cep.replace(/[!@#$%^&*a-zA-Z.-]/gi, '');
            if (/\d{8}/.test(cep)) {
                return _this.http.get(_this.urlFetchByCEP(cep));
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
        function (address) {
            return _this.http.get(_this.urlFetchByAddressSP(address));
        });
        this.fetchByAddress = (/**
         * @param {?} state
         * @param {?} city
         * @param {?} address
         * @return {?}
         */
        function (state, city, address) {
            return _this.http.get(_this.urlFetchByAddressSP(address, state, city));
        });
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    NgxViaCepService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    NgxViaCepService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: String, decorators: [{ type: Optional }, { type: Inject, args: [BASE_PATH,] }] },
        { type: NgxViaCepConfiguration, decorators: [{ type: Optional }] }
    ]; };
    return NgxViaCepService;
}());
export { NgxViaCepService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXZpYS1jZXAuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Brc2FraXJhMTAvbmd4LXZpYS1jZXAvIiwic291cmNlcyI6WyJsaWIvbmd4LXZpYS1jZXAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFVBQVUsRUFDVixpQkFBaUIsRUFDakIsV0FBVyxFQUNaLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXBEO0lBZ0JFLDBCQUNZLElBQWdCLEVBQ0ssUUFBZ0IsRUFDbkMsYUFBcUM7UUFIbkQsaUJBWUM7UUFYVyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBZmxCLGFBQVEsR0FBRywwQkFBMEIsQ0FBQztRQUN6QyxtQkFBYyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7UUFDbkMsa0JBQWEsR0FBRyxJQUFJLHNCQUFzQixFQUFFLENBQUM7UUFDbkMsa0JBQWE7Ozs7UUFBRyxVQUFDLEdBQVc7WUFDM0MsT0FBRyxLQUFJLENBQUMsUUFBUSxTQUFJLEdBQUcsV0FBUTtRQUEvQixDQUErQixFQUFDO1FBQ2pCLHdCQUFtQjs7Ozs7O1FBQUcsVUFDckMsT0FBZSxFQUNmLEtBQW9CLEVBQ3BCLElBQTBCO1lBRDFCLHNCQUFBLEVBQUEsWUFBb0I7WUFDcEIscUJBQUEsRUFBQSxrQkFBMEI7WUFFMUIsT0FBRyxLQUFJLENBQUMsUUFBUSxTQUFJLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxTQUFJLGtCQUFrQixDQUNqRSxJQUFJLENBQ0wsU0FBSSxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsV0FBUTtRQUZ4QyxDQUV3QyxFQUFDO1FBZ0JwQyxlQUFVOzs7O1FBQUcsVUFBQyxHQUFXOztnQkFDeEIsT0FBTyxHQUFHLElBQUksT0FBTyxFQUFxQjtZQUNoRCxHQUFHLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUU5QyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3JCLE9BQU8sS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQy9DO1lBRUQsT0FBTyxDQUFDLEtBQUssQ0FDWCxJQUFJLGlCQUFpQixDQUFDO2dCQUNwQixNQUFNLEVBQUUsR0FBRztnQkFDWCxVQUFVLEVBQUUscUJBQXFCO2dCQUNqQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRTthQUN2RCxDQUFDLENBQ0gsQ0FBQztZQUNGLE9BQU8sT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ2hDLENBQUMsRUFBQztRQUVLLDJCQUFzQjs7OztRQUFHLFVBQUMsT0FBZTtZQUM5QyxPQUFPLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzFELENBQUMsRUFBQztRQUVLLG1CQUFjOzs7Ozs7UUFBRyxVQUN0QixLQUFhLEVBQ2IsSUFBWSxFQUNaLE9BQWU7WUFFZixPQUFPLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDdkUsQ0FBQyxFQUFDO1FBckNBLElBQUksUUFBUSxFQUFFO1lBQ1osSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7U0FDMUI7UUFDRCxJQUFJLGFBQWEsRUFBRTtZQUNqQixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztZQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsSUFBSSxhQUFhLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDckU7SUFDSCxDQUFDOztnQkE1QkYsVUFBVTs7OztnQkFUVCxVQUFVOzZDQTJCUCxRQUFRLFlBQUksTUFBTSxTQUFDLFNBQVM7Z0JBckJ4QixzQkFBc0IsdUJBc0IxQixRQUFROztJQXdDYix1QkFBQztDQUFBLEFBM0RELElBMkRDO1NBMURZLGdCQUFnQjs7Ozs7O0lBQzNCLG9DQUFnRDs7SUFDaEQsMENBQTBDOztJQUMxQyx5Q0FBb0Q7Ozs7O0lBQ3BELHlDQUNrQzs7Ozs7SUFDbEMsK0NBTzJDOztJQWdCM0Msc0NBZ0JFOztJQUVGLGtEQUVFOztJQUVGLDBDQU1FOzs7OztJQXpDQSxnQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBIdHRwQ2xpZW50LFxuICBIdHRwRXJyb3JSZXNwb25zZSxcbiAgSHR0cEhlYWRlcnNcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTmd4VmlhQ2VwQ29uZmlndXJhdGlvbiB9IGZyb20gJy4vbmd4LXZpYS1jZXAuY29uZmlndXJhdGlvbic7XG5pbXBvcnQgeyBCQVNFX1BBVEggfSBmcm9tICcuL25neC12aWEtY2VwLnZhcmlhYmxlcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOZ3hWaWFDZXBTZXJ2aWNlIHtcbiAgcHJvdGVjdGVkIGJhc2VQYXRoID0gJ2h0dHBzOi8vdmlhY2VwLmNvbS5ici93cyc7XG4gIHB1YmxpYyBkZWZhdWx0SGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpO1xuICBwdWJsaWMgY29uZmlndXJhdGlvbiA9IG5ldyBOZ3hWaWFDZXBDb25maWd1cmF0aW9uKCk7XG4gIHByaXZhdGUgcmVhZG9ubHkgdXJsRmV0Y2hCeUNFUCA9IChjZXA6IHN0cmluZykgPT5cbiAgICBgJHt0aGlzLmJhc2VQYXRofS8ke2NlcH0vanNvbi9gO1xuICBwcml2YXRlIHJlYWRvbmx5IHVybEZldGNoQnlBZGRyZXNzU1AgPSAoXG4gICAgYWRkcmVzczogc3RyaW5nLFxuICAgIHN0YXRlOiBzdHJpbmcgPSAnU1AnLFxuICAgIGNpdHk6IHN0cmluZyA9ICdTw6NvIFBhdWxvJ1xuICApID0+XG4gICAgYCR7dGhpcy5iYXNlUGF0aH0vJHtlbmNvZGVVUklDb21wb25lbnQoc3RhdGUpfS8ke2VuY29kZVVSSUNvbXBvbmVudChcbiAgICAgIGNpdHlcbiAgICApfS8ke2VuY29kZVVSSUNvbXBvbmVudChhZGRyZXNzKX0vanNvbi9gO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50LFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoQkFTRV9QQVRIKSBiYXNlUGF0aDogc3RyaW5nLFxuICAgIEBPcHRpb25hbCgpIGNvbmZpZ3VyYXRpb246IE5neFZpYUNlcENvbmZpZ3VyYXRpb25cbiAgKSB7XG4gICAgaWYgKGJhc2VQYXRoKSB7XG4gICAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGg7XG4gICAgfVxuICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xuICAgICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoIHx8IGNvbmZpZ3VyYXRpb24uYmFzZVBhdGggfHwgdGhpcy5iYXNlUGF0aDtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZmV0Y2hCeUNFUCA9IChjZXA6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiA9PiB7XG4gICAgY29uc3Qgc3ViamVjdCA9IG5ldyBTdWJqZWN0PEh0dHBFcnJvclJlc3BvbnNlPigpO1xuICAgIGNlcCA9IGNlcC5yZXBsYWNlKC9bIUAjJCVeJiphLXpBLVouLV0vZ2ksICcnKTtcblxuICAgIGlmICgvXFxkezh9Ly50ZXN0KGNlcCkpIHtcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMudXJsRmV0Y2hCeUNFUChjZXApKTtcbiAgICB9XG5cbiAgICBzdWJqZWN0LmVycm9yKFxuICAgICAgbmV3IEh0dHBFcnJvclJlc3BvbnNlKHtcbiAgICAgICAgc3RhdHVzOiA0MTIsXG4gICAgICAgIHN0YXR1c1RleHQ6ICdQcmVjb25kaXRpb24gZmFpbGVkJyxcbiAgICAgICAgZXJyb3I6IHsgY29kZTogMSwgbWVzc2FnZTogJ2xlbmd0aCBtdXN0IGJlIGVxdWFscyA4JyB9XG4gICAgICB9KVxuICAgICk7XG4gICAgcmV0dXJuIHN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gIH07XG5cbiAgcHVibGljIGZldGNoQnlBZGRyZXNzU2FvUGF1bG8gPSAoYWRkcmVzczogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+ID0+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnVybEZldGNoQnlBZGRyZXNzU1AoYWRkcmVzcykpO1xuICB9O1xuXG4gIHB1YmxpYyBmZXRjaEJ5QWRkcmVzcyA9IChcbiAgICBzdGF0ZTogc3RyaW5nLFxuICAgIGNpdHk6IHN0cmluZyxcbiAgICBhZGRyZXNzOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxhbnk+ID0+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnVybEZldGNoQnlBZGRyZXNzU1AoYWRkcmVzcywgc3RhdGUsIGNpdHkpKTtcbiAgfTtcbn1cbiJdfQ==