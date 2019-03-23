import { Subject } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { InjectionToken, Inject, Injectable, Optional, NgModule, SkipSelf } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var BASE_PATH = new InjectionToken('basePath');
/** @type {?} */
var COLLECTION_FORMATS = {
    'csv': ',',
    'tsv': '   ',
    'ssv': ' ',
    'pipes': '|'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxViaCepConfiguration = /** @class */ (function () {
    function NgxViaCepConfiguration(configurationParameters) {
        if (configurationParameters === void 0) { configurationParameters = {}; }
        this.apiKeys = configurationParameters.apiKeys;
        this.username = configurationParameters.username;
        this.password = configurationParameters.password;
        this.accessToken = configurationParameters.accessToken;
        this.basePath = configurationParameters.basePath;
        this.withCredentials = configurationParameters.withCredentials;
    }
    /**
     * Select the correct content-type to use for a request.
     * Uses {@link Configuration#isJsonMime} to determine the correct content-type.
     * If no content type is found return the first found type if the contentTypes is not empty
     * @param contentTypes - the array of content types that are available for selection
     * @returns the selected content-type or <code>undefined</code> if no selection could be made.
     */
    /**
     * Select the correct content-type to use for a request.
     * Uses {\@link Configuration#isJsonMime} to determine the correct content-type.
     * If no content type is found return the first found type if the contentTypes is not empty
     * @param {?} contentTypes - the array of content types that are available for selection
     * @return {?} the selected content-type or <code>undefined</code> if no selection could be made.
     */
    NgxViaCepConfiguration.prototype.selectHeaderContentType = /**
     * Select the correct content-type to use for a request.
     * Uses {\@link Configuration#isJsonMime} to determine the correct content-type.
     * If no content type is found return the first found type if the contentTypes is not empty
     * @param {?} contentTypes - the array of content types that are available for selection
     * @return {?} the selected content-type or <code>undefined</code> if no selection could be made.
     */
    function (contentTypes) {
        var _this = this;
        if (contentTypes.length == 0) {
            return undefined;
        }
        /** @type {?} */
        var type = contentTypes.find((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return _this.isJsonMime(x); }));
        if (type === undefined) {
            return contentTypes[0];
        }
        return type;
    };
    /**
     * Select the correct accept content-type to use for a request.
     * Uses {@link Configuration#isJsonMime} to determine the correct accept content-type.
     * If no content type is found return the first found type if the contentTypes is not empty
     * @param accepts - the array of content types that are available for selection.
     * @returns the selected content-type or <code>undefined</code> if no selection could be made.
     */
    /**
     * Select the correct accept content-type to use for a request.
     * Uses {\@link Configuration#isJsonMime} to determine the correct accept content-type.
     * If no content type is found return the first found type if the contentTypes is not empty
     * @param {?} accepts - the array of content types that are available for selection.
     * @return {?} the selected content-type or <code>undefined</code> if no selection could be made.
     */
    NgxViaCepConfiguration.prototype.selectHeaderAccept = /**
     * Select the correct accept content-type to use for a request.
     * Uses {\@link Configuration#isJsonMime} to determine the correct accept content-type.
     * If no content type is found return the first found type if the contentTypes is not empty
     * @param {?} accepts - the array of content types that are available for selection.
     * @return {?} the selected content-type or <code>undefined</code> if no selection could be made.
     */
    function (accepts) {
        var _this = this;
        if (accepts.length == 0) {
            return undefined;
        }
        /** @type {?} */
        var type = accepts.find((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return _this.isJsonMime(x); }));
        if (type === undefined) {
            return accepts[0];
        }
        return type;
    };
    /**
     * Check if the given MIME is a JSON MIME.
     * JSON MIME examples:
     *   application/json
     *   application/json; charset=UTF8
     *   APPLICATION/JSON
     *   application/vnd.company+json
     * @param mime - MIME (Multipurpose Internet Mail Extensions)
     * @return True if the given MIME is JSON, false otherwise.
     */
    /**
     * Check if the given MIME is a JSON MIME.
     * JSON MIME examples:
     *   application/json
     *   application/json; charset=UTF8
     *   APPLICATION/JSON
     *   application/vnd.company+json
     * @param {?} mime - MIME (Multipurpose Internet Mail Extensions)
     * @return {?} True if the given MIME is JSON, false otherwise.
     */
    NgxViaCepConfiguration.prototype.isJsonMime = /**
     * Check if the given MIME is a JSON MIME.
     * JSON MIME examples:
     *   application/json
     *   application/json; charset=UTF8
     *   APPLICATION/JSON
     *   application/vnd.company+json
     * @param {?} mime - MIME (Multipurpose Internet Mail Extensions)
     * @return {?} True if the given MIME is JSON, false otherwise.
     */
    function (mime) {
        /** @type {?} */
        var jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
        return mime != null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
    };
    return NgxViaCepConfiguration;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxViaCepModule = /** @class */ (function () {
    function NgxViaCepModule(parentModule, http) {
        if (parentModule) {
            throw new Error('NgxViaCepModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
                'See also https://github.com/angular/angular/issues/20575');
        }
    }
    /**
     * @param {?} configurationFactory
     * @return {?}
     */
    NgxViaCepModule.forRoot = /**
     * @param {?} configurationFactory
     * @return {?}
     */
    function (configurationFactory) {
        return {
            ngModule: NgxViaCepModule,
            providers: [
                { provide: NgxViaCepConfiguration, useFactory: configurationFactory }
            ]
        };
    };
    NgxViaCepModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [],
                    imports: [],
                    exports: [],
                    providers: [NgxViaCepService]
                },] }
    ];
    /** @nocollapse */
    NgxViaCepModule.ctorParameters = function () { return [
        { type: NgxViaCepModule, decorators: [{ type: Optional }, { type: SkipSelf }] },
        { type: HttpClient, decorators: [{ type: Optional }] }
    ]; };
    return NgxViaCepModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { BASE_PATH, COLLECTION_FORMATS, NgxViaCepConfiguration, NgxViaCepService, NgxViaCepModule };

//# sourceMappingURL=ksakira10-ngx-via-cep.js.map