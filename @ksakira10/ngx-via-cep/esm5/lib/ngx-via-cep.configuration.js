/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function NgxViaCepConfigurationParameters() { }
if (false) {
    /** @type {?|undefined} */
    NgxViaCepConfigurationParameters.prototype.apiKeys;
    /** @type {?|undefined} */
    NgxViaCepConfigurationParameters.prototype.username;
    /** @type {?|undefined} */
    NgxViaCepConfigurationParameters.prototype.password;
    /** @type {?|undefined} */
    NgxViaCepConfigurationParameters.prototype.accessToken;
    /** @type {?|undefined} */
    NgxViaCepConfigurationParameters.prototype.basePath;
    /** @type {?|undefined} */
    NgxViaCepConfigurationParameters.prototype.withCredentials;
}
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
export { NgxViaCepConfiguration };
if (false) {
    /** @type {?} */
    NgxViaCepConfiguration.prototype.apiKeys;
    /** @type {?} */
    NgxViaCepConfiguration.prototype.username;
    /** @type {?} */
    NgxViaCepConfiguration.prototype.password;
    /** @type {?} */
    NgxViaCepConfiguration.prototype.accessToken;
    /** @type {?} */
    NgxViaCepConfiguration.prototype.basePath;
    /** @type {?} */
    NgxViaCepConfiguration.prototype.withCredentials;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXZpYS1jZXAuY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Brc2FraXJhMTAvbmd4LXZpYS1jZXAvIiwic291cmNlcyI6WyJsaWIvbmd4LXZpYS1jZXAuY29uZmlndXJhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsc0RBT0M7OztJQU5DLG1EQUFvQzs7SUFDcEMsb0RBQWtCOztJQUNsQixvREFBa0I7O0lBQ2xCLHVEQUFzQzs7SUFDdEMsb0RBQWtCOztJQUNsQiwyREFBMEI7O0FBRzVCO0lBUUUsZ0NBQVksdUJBQThEO1FBQTlELHdDQUFBLEVBQUEsNEJBQThEO1FBQ3RFLElBQUksQ0FBQyxPQUFPLEdBQUcsdUJBQXVCLENBQUMsT0FBTyxDQUFDO1FBQy9DLElBQUksQ0FBQyxRQUFRLEdBQUcsdUJBQXVCLENBQUMsUUFBUSxDQUFDO1FBQ2pELElBQUksQ0FBQyxRQUFRLEdBQUcsdUJBQXVCLENBQUMsUUFBUSxDQUFDO1FBQ2pELElBQUksQ0FBQyxXQUFXLEdBQUcsdUJBQXVCLENBQUMsV0FBVyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxRQUFRLEdBQUcsdUJBQXVCLENBQUMsUUFBUSxDQUFDO1FBQ2pELElBQUksQ0FBQyxlQUFlLEdBQUcsdUJBQXVCLENBQUMsZUFBZSxDQUFDO0lBQ25FLENBQUM7SUFFRDs7Ozs7O09BTUc7Ozs7Ozs7O0lBQ0ksd0RBQXVCOzs7Ozs7O0lBQTlCLFVBQWdDLFlBQXNCO1FBQXRELGlCQVVDO1FBVEcsSUFBSSxZQUFZLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUMxQixPQUFPLFNBQVMsQ0FBQztTQUNwQjs7WUFFRyxJQUFJLEdBQUcsWUFBWSxDQUFDLElBQUk7Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQWxCLENBQWtCLEVBQUM7UUFDckQsSUFBSSxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQ3BCLE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzFCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVEOzs7Ozs7T0FNRzs7Ozs7Ozs7SUFDSSxtREFBa0I7Ozs7Ozs7SUFBekIsVUFBMEIsT0FBaUI7UUFBM0MsaUJBVUM7UUFURyxJQUFJLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ3JCLE9BQU8sU0FBUyxDQUFDO1NBQ3BCOztZQUVHLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSTs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBbEIsQ0FBa0IsRUFBQztRQUNoRCxJQUFJLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDcEIsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDckI7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQ7Ozs7Ozs7OztPQVNHOzs7Ozs7Ozs7OztJQUNJLDJDQUFVOzs7Ozs7Ozs7O0lBQWpCLFVBQWtCLElBQVk7O1lBQ3BCLFFBQVEsR0FBVyxJQUFJLE1BQU0sQ0FBQywrREFBK0QsRUFBRSxHQUFHLENBQUM7UUFDekcsT0FBTyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssNkJBQTZCLENBQUMsQ0FBQztJQUN6RyxDQUFDO0lBQ0gsNkJBQUM7QUFBRCxDQUFDLEFBckVELElBcUVDOzs7O0lBcEVDLHlDQUFvQzs7SUFDcEMsMENBQWtCOztJQUNsQiwwQ0FBa0I7O0lBQ2xCLDZDQUFzQzs7SUFDdEMsMENBQWtCOztJQUNsQixpREFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIE5neFZpYUNlcENvbmZpZ3VyYXRpb25QYXJhbWV0ZXJzIHtcbiAgYXBpS2V5cz86IHtbIGtleTogc3RyaW5nIF06IHN0cmluZ307XG4gIHVzZXJuYW1lPzogc3RyaW5nO1xuICBwYXNzd29yZD86IHN0cmluZztcbiAgYWNjZXNzVG9rZW4/OiBzdHJpbmcgfCAoKCkgPT4gc3RyaW5nKTtcbiAgYmFzZVBhdGg/OiBzdHJpbmc7XG4gIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBOZ3hWaWFDZXBDb25maWd1cmF0aW9uIHtcbiAgYXBpS2V5cz86IHtbIGtleTogc3RyaW5nIF06IHN0cmluZ307XG4gIHVzZXJuYW1lPzogc3RyaW5nO1xuICBwYXNzd29yZD86IHN0cmluZztcbiAgYWNjZXNzVG9rZW4/OiBzdHJpbmcgfCAoKCkgPT4gc3RyaW5nKTtcbiAgYmFzZVBhdGg/OiBzdHJpbmc7XG4gIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoY29uZmlndXJhdGlvblBhcmFtZXRlcnM6IE5neFZpYUNlcENvbmZpZ3VyYXRpb25QYXJhbWV0ZXJzID0ge30pIHtcbiAgICAgIHRoaXMuYXBpS2V5cyA9IGNvbmZpZ3VyYXRpb25QYXJhbWV0ZXJzLmFwaUtleXM7XG4gICAgICB0aGlzLnVzZXJuYW1lID0gY29uZmlndXJhdGlvblBhcmFtZXRlcnMudXNlcm5hbWU7XG4gICAgICB0aGlzLnBhc3N3b3JkID0gY29uZmlndXJhdGlvblBhcmFtZXRlcnMucGFzc3dvcmQ7XG4gICAgICB0aGlzLmFjY2Vzc1Rva2VuID0gY29uZmlndXJhdGlvblBhcmFtZXRlcnMuYWNjZXNzVG9rZW47XG4gICAgICB0aGlzLmJhc2VQYXRoID0gY29uZmlndXJhdGlvblBhcmFtZXRlcnMuYmFzZVBhdGg7XG4gICAgICB0aGlzLndpdGhDcmVkZW50aWFscyA9IGNvbmZpZ3VyYXRpb25QYXJhbWV0ZXJzLndpdGhDcmVkZW50aWFscztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWxlY3QgdGhlIGNvcnJlY3QgY29udGVudC10eXBlIHRvIHVzZSBmb3IgYSByZXF1ZXN0LlxuICAgKiBVc2VzIHtAbGluayBDb25maWd1cmF0aW9uI2lzSnNvbk1pbWV9IHRvIGRldGVybWluZSB0aGUgY29ycmVjdCBjb250ZW50LXR5cGUuXG4gICAqIElmIG5vIGNvbnRlbnQgdHlwZSBpcyBmb3VuZCByZXR1cm4gdGhlIGZpcnN0IGZvdW5kIHR5cGUgaWYgdGhlIGNvbnRlbnRUeXBlcyBpcyBub3QgZW1wdHlcbiAgICogQHBhcmFtIGNvbnRlbnRUeXBlcyAtIHRoZSBhcnJheSBvZiBjb250ZW50IHR5cGVzIHRoYXQgYXJlIGF2YWlsYWJsZSBmb3Igc2VsZWN0aW9uXG4gICAqIEByZXR1cm5zIHRoZSBzZWxlY3RlZCBjb250ZW50LXR5cGUgb3IgPGNvZGU+dW5kZWZpbmVkPC9jb2RlPiBpZiBubyBzZWxlY3Rpb24gY291bGQgYmUgbWFkZS5cbiAgICovXG4gIHB1YmxpYyBzZWxlY3RIZWFkZXJDb250ZW50VHlwZSAoY29udGVudFR5cGVzOiBzdHJpbmdbXSk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICBpZiAoY29udGVudFR5cGVzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgbGV0IHR5cGUgPSBjb250ZW50VHlwZXMuZmluZCh4ID0+IHRoaXMuaXNKc29uTWltZSh4KSk7XG4gICAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRlbnRUeXBlc1swXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbGVjdCB0aGUgY29ycmVjdCBhY2NlcHQgY29udGVudC10eXBlIHRvIHVzZSBmb3IgYSByZXF1ZXN0LlxuICAgKiBVc2VzIHtAbGluayBDb25maWd1cmF0aW9uI2lzSnNvbk1pbWV9IHRvIGRldGVybWluZSB0aGUgY29ycmVjdCBhY2NlcHQgY29udGVudC10eXBlLlxuICAgKiBJZiBubyBjb250ZW50IHR5cGUgaXMgZm91bmQgcmV0dXJuIHRoZSBmaXJzdCBmb3VuZCB0eXBlIGlmIHRoZSBjb250ZW50VHlwZXMgaXMgbm90IGVtcHR5XG4gICAqIEBwYXJhbSBhY2NlcHRzIC0gdGhlIGFycmF5IG9mIGNvbnRlbnQgdHlwZXMgdGhhdCBhcmUgYXZhaWxhYmxlIGZvciBzZWxlY3Rpb24uXG4gICAqIEByZXR1cm5zIHRoZSBzZWxlY3RlZCBjb250ZW50LXR5cGUgb3IgPGNvZGU+dW5kZWZpbmVkPC9jb2RlPiBpZiBubyBzZWxlY3Rpb24gY291bGQgYmUgbWFkZS5cbiAgICovXG4gIHB1YmxpYyBzZWxlY3RIZWFkZXJBY2NlcHQoYWNjZXB0czogc3RyaW5nW10pOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgaWYgKGFjY2VwdHMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICBsZXQgdHlwZSA9IGFjY2VwdHMuZmluZCh4ID0+IHRoaXMuaXNKc29uTWltZSh4KSk7XG4gICAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuIGFjY2VwdHNbMF07XG4gICAgICB9XG4gICAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGUgZ2l2ZW4gTUlNRSBpcyBhIEpTT04gTUlNRS5cbiAgICogSlNPTiBNSU1FIGV4YW1wbGVzOlxuICAgKiAgIGFwcGxpY2F0aW9uL2pzb25cbiAgICogICBhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURjhcbiAgICogICBBUFBMSUNBVElPTi9KU09OXG4gICAqICAgYXBwbGljYXRpb24vdm5kLmNvbXBhbnkranNvblxuICAgKiBAcGFyYW0gbWltZSAtIE1JTUUgKE11bHRpcHVycG9zZSBJbnRlcm5ldCBNYWlsIEV4dGVuc2lvbnMpXG4gICAqIEByZXR1cm4gVHJ1ZSBpZiB0aGUgZ2l2ZW4gTUlNRSBpcyBKU09OLCBmYWxzZSBvdGhlcndpc2UuXG4gICAqL1xuICBwdWJsaWMgaXNKc29uTWltZShtaW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgIGNvbnN0IGpzb25NaW1lOiBSZWdFeHAgPSBuZXcgUmVnRXhwKCdeKGFwcGxpY2F0aW9uXFwvanNvbnxbXjsvIFxcdF0rXFwvW147LyBcXHRdK1srXWpzb24pWyBcXHRdKig7LiopPyQnLCAnaScpO1xuICAgICAgcmV0dXJuIG1pbWUgIT0gbnVsbCAmJiAoanNvbk1pbWUudGVzdChtaW1lKSB8fCBtaW1lLnRvTG93ZXJDYXNlKCkgPT09ICdhcHBsaWNhdGlvbi9qc29uLXBhdGNoK2pzb24nKTtcbiAgfVxufVxuIl19