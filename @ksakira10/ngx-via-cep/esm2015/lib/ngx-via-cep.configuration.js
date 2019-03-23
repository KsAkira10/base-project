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
export class NgxViaCepConfiguration {
    /**
     * @param {?=} configurationParameters
     */
    constructor(configurationParameters = {}) {
        this.apiKeys = configurationParameters.apiKeys;
        this.username = configurationParameters.username;
        this.password = configurationParameters.password;
        this.accessToken = configurationParameters.accessToken;
        this.basePath = configurationParameters.basePath;
        this.withCredentials = configurationParameters.withCredentials;
    }
    /**
     * Select the correct content-type to use for a request.
     * Uses {\@link Configuration#isJsonMime} to determine the correct content-type.
     * If no content type is found return the first found type if the contentTypes is not empty
     * @param {?} contentTypes - the array of content types that are available for selection
     * @return {?} the selected content-type or <code>undefined</code> if no selection could be made.
     */
    selectHeaderContentType(contentTypes) {
        if (contentTypes.length == 0) {
            return undefined;
        }
        /** @type {?} */
        let type = contentTypes.find((/**
         * @param {?} x
         * @return {?}
         */
        x => this.isJsonMime(x)));
        if (type === undefined) {
            return contentTypes[0];
        }
        return type;
    }
    /**
     * Select the correct accept content-type to use for a request.
     * Uses {\@link Configuration#isJsonMime} to determine the correct accept content-type.
     * If no content type is found return the first found type if the contentTypes is not empty
     * @param {?} accepts - the array of content types that are available for selection.
     * @return {?} the selected content-type or <code>undefined</code> if no selection could be made.
     */
    selectHeaderAccept(accepts) {
        if (accepts.length == 0) {
            return undefined;
        }
        /** @type {?} */
        let type = accepts.find((/**
         * @param {?} x
         * @return {?}
         */
        x => this.isJsonMime(x)));
        if (type === undefined) {
            return accepts[0];
        }
        return type;
    }
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
    isJsonMime(mime) {
        /** @type {?} */
        const jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
        return mime != null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXZpYS1jZXAuY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Brc2FraXJhMTAvbmd4LXZpYS1jZXAvIiwic291cmNlcyI6WyJsaWIvbmd4LXZpYS1jZXAuY29uZmlndXJhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsc0RBT0M7OztJQU5DLG1EQUFvQzs7SUFDcEMsb0RBQWtCOztJQUNsQixvREFBa0I7O0lBQ2xCLHVEQUFzQzs7SUFDdEMsb0RBQWtCOztJQUNsQiwyREFBMEI7O0FBRzVCLE1BQU0sT0FBTyxzQkFBc0I7Ozs7SUFRakMsWUFBWSwwQkFBNEQsRUFBRTtRQUN0RSxJQUFJLENBQUMsT0FBTyxHQUFHLHVCQUF1QixDQUFDLE9BQU8sQ0FBQztRQUMvQyxJQUFJLENBQUMsUUFBUSxHQUFHLHVCQUF1QixDQUFDLFFBQVEsQ0FBQztRQUNqRCxJQUFJLENBQUMsUUFBUSxHQUFHLHVCQUF1QixDQUFDLFFBQVEsQ0FBQztRQUNqRCxJQUFJLENBQUMsV0FBVyxHQUFHLHVCQUF1QixDQUFDLFdBQVcsQ0FBQztRQUN2RCxJQUFJLENBQUMsUUFBUSxHQUFHLHVCQUF1QixDQUFDLFFBQVEsQ0FBQztRQUNqRCxJQUFJLENBQUMsZUFBZSxHQUFHLHVCQUF1QixDQUFDLGVBQWUsQ0FBQztJQUNuRSxDQUFDOzs7Ozs7OztJQVNNLHVCQUF1QixDQUFFLFlBQXNCO1FBQ2xELElBQUksWUFBWSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDMUIsT0FBTyxTQUFTLENBQUM7U0FDcEI7O1lBRUcsSUFBSSxHQUFHLFlBQVksQ0FBQyxJQUFJOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFDO1FBQ3JELElBQUksSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUNwQixPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMxQjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7Ozs7Ozs7O0lBU00sa0JBQWtCLENBQUMsT0FBaUI7UUFDdkMsSUFBSSxPQUFPLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUNyQixPQUFPLFNBQVMsQ0FBQztTQUNwQjs7WUFFRyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUk7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUM7UUFDaEQsSUFBSSxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQ3BCLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3JCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQzs7Ozs7Ozs7Ozs7SUFZTSxVQUFVLENBQUMsSUFBWTs7Y0FDcEIsUUFBUSxHQUFXLElBQUksTUFBTSxDQUFDLCtEQUErRCxFQUFFLEdBQUcsQ0FBQztRQUN6RyxPQUFPLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyw2QkFBNkIsQ0FBQyxDQUFDO0lBQ3pHLENBQUM7Q0FDRjs7O0lBcEVDLHlDQUFvQzs7SUFDcEMsMENBQWtCOztJQUNsQiwwQ0FBa0I7O0lBQ2xCLDZDQUFzQzs7SUFDdEMsMENBQWtCOztJQUNsQixpREFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIE5neFZpYUNlcENvbmZpZ3VyYXRpb25QYXJhbWV0ZXJzIHtcbiAgYXBpS2V5cz86IHtbIGtleTogc3RyaW5nIF06IHN0cmluZ307XG4gIHVzZXJuYW1lPzogc3RyaW5nO1xuICBwYXNzd29yZD86IHN0cmluZztcbiAgYWNjZXNzVG9rZW4/OiBzdHJpbmcgfCAoKCkgPT4gc3RyaW5nKTtcbiAgYmFzZVBhdGg/OiBzdHJpbmc7XG4gIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBOZ3hWaWFDZXBDb25maWd1cmF0aW9uIHtcbiAgYXBpS2V5cz86IHtbIGtleTogc3RyaW5nIF06IHN0cmluZ307XG4gIHVzZXJuYW1lPzogc3RyaW5nO1xuICBwYXNzd29yZD86IHN0cmluZztcbiAgYWNjZXNzVG9rZW4/OiBzdHJpbmcgfCAoKCkgPT4gc3RyaW5nKTtcbiAgYmFzZVBhdGg/OiBzdHJpbmc7XG4gIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoY29uZmlndXJhdGlvblBhcmFtZXRlcnM6IE5neFZpYUNlcENvbmZpZ3VyYXRpb25QYXJhbWV0ZXJzID0ge30pIHtcbiAgICAgIHRoaXMuYXBpS2V5cyA9IGNvbmZpZ3VyYXRpb25QYXJhbWV0ZXJzLmFwaUtleXM7XG4gICAgICB0aGlzLnVzZXJuYW1lID0gY29uZmlndXJhdGlvblBhcmFtZXRlcnMudXNlcm5hbWU7XG4gICAgICB0aGlzLnBhc3N3b3JkID0gY29uZmlndXJhdGlvblBhcmFtZXRlcnMucGFzc3dvcmQ7XG4gICAgICB0aGlzLmFjY2Vzc1Rva2VuID0gY29uZmlndXJhdGlvblBhcmFtZXRlcnMuYWNjZXNzVG9rZW47XG4gICAgICB0aGlzLmJhc2VQYXRoID0gY29uZmlndXJhdGlvblBhcmFtZXRlcnMuYmFzZVBhdGg7XG4gICAgICB0aGlzLndpdGhDcmVkZW50aWFscyA9IGNvbmZpZ3VyYXRpb25QYXJhbWV0ZXJzLndpdGhDcmVkZW50aWFscztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWxlY3QgdGhlIGNvcnJlY3QgY29udGVudC10eXBlIHRvIHVzZSBmb3IgYSByZXF1ZXN0LlxuICAgKiBVc2VzIHtAbGluayBDb25maWd1cmF0aW9uI2lzSnNvbk1pbWV9IHRvIGRldGVybWluZSB0aGUgY29ycmVjdCBjb250ZW50LXR5cGUuXG4gICAqIElmIG5vIGNvbnRlbnQgdHlwZSBpcyBmb3VuZCByZXR1cm4gdGhlIGZpcnN0IGZvdW5kIHR5cGUgaWYgdGhlIGNvbnRlbnRUeXBlcyBpcyBub3QgZW1wdHlcbiAgICogQHBhcmFtIGNvbnRlbnRUeXBlcyAtIHRoZSBhcnJheSBvZiBjb250ZW50IHR5cGVzIHRoYXQgYXJlIGF2YWlsYWJsZSBmb3Igc2VsZWN0aW9uXG4gICAqIEByZXR1cm5zIHRoZSBzZWxlY3RlZCBjb250ZW50LXR5cGUgb3IgPGNvZGU+dW5kZWZpbmVkPC9jb2RlPiBpZiBubyBzZWxlY3Rpb24gY291bGQgYmUgbWFkZS5cbiAgICovXG4gIHB1YmxpYyBzZWxlY3RIZWFkZXJDb250ZW50VHlwZSAoY29udGVudFR5cGVzOiBzdHJpbmdbXSk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICBpZiAoY29udGVudFR5cGVzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgbGV0IHR5cGUgPSBjb250ZW50VHlwZXMuZmluZCh4ID0+IHRoaXMuaXNKc29uTWltZSh4KSk7XG4gICAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRlbnRUeXBlc1swXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbGVjdCB0aGUgY29ycmVjdCBhY2NlcHQgY29udGVudC10eXBlIHRvIHVzZSBmb3IgYSByZXF1ZXN0LlxuICAgKiBVc2VzIHtAbGluayBDb25maWd1cmF0aW9uI2lzSnNvbk1pbWV9IHRvIGRldGVybWluZSB0aGUgY29ycmVjdCBhY2NlcHQgY29udGVudC10eXBlLlxuICAgKiBJZiBubyBjb250ZW50IHR5cGUgaXMgZm91bmQgcmV0dXJuIHRoZSBmaXJzdCBmb3VuZCB0eXBlIGlmIHRoZSBjb250ZW50VHlwZXMgaXMgbm90IGVtcHR5XG4gICAqIEBwYXJhbSBhY2NlcHRzIC0gdGhlIGFycmF5IG9mIGNvbnRlbnQgdHlwZXMgdGhhdCBhcmUgYXZhaWxhYmxlIGZvciBzZWxlY3Rpb24uXG4gICAqIEByZXR1cm5zIHRoZSBzZWxlY3RlZCBjb250ZW50LXR5cGUgb3IgPGNvZGU+dW5kZWZpbmVkPC9jb2RlPiBpZiBubyBzZWxlY3Rpb24gY291bGQgYmUgbWFkZS5cbiAgICovXG4gIHB1YmxpYyBzZWxlY3RIZWFkZXJBY2NlcHQoYWNjZXB0czogc3RyaW5nW10pOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgaWYgKGFjY2VwdHMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICBsZXQgdHlwZSA9IGFjY2VwdHMuZmluZCh4ID0+IHRoaXMuaXNKc29uTWltZSh4KSk7XG4gICAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuIGFjY2VwdHNbMF07XG4gICAgICB9XG4gICAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGUgZ2l2ZW4gTUlNRSBpcyBhIEpTT04gTUlNRS5cbiAgICogSlNPTiBNSU1FIGV4YW1wbGVzOlxuICAgKiAgIGFwcGxpY2F0aW9uL2pzb25cbiAgICogICBhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURjhcbiAgICogICBBUFBMSUNBVElPTi9KU09OXG4gICAqICAgYXBwbGljYXRpb24vdm5kLmNvbXBhbnkranNvblxuICAgKiBAcGFyYW0gbWltZSAtIE1JTUUgKE11bHRpcHVycG9zZSBJbnRlcm5ldCBNYWlsIEV4dGVuc2lvbnMpXG4gICAqIEByZXR1cm4gVHJ1ZSBpZiB0aGUgZ2l2ZW4gTUlNRSBpcyBKU09OLCBmYWxzZSBvdGhlcndpc2UuXG4gICAqL1xuICBwdWJsaWMgaXNKc29uTWltZShtaW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgIGNvbnN0IGpzb25NaW1lOiBSZWdFeHAgPSBuZXcgUmVnRXhwKCdeKGFwcGxpY2F0aW9uXFwvanNvbnxbXjsvIFxcdF0rXFwvW147LyBcXHRdK1srXWpzb24pWyBcXHRdKig7LiopPyQnLCAnaScpO1xuICAgICAgcmV0dXJuIG1pbWUgIT0gbnVsbCAmJiAoanNvbk1pbWUudGVzdChtaW1lKSB8fCBtaW1lLnRvTG93ZXJDYXNlKCkgPT09ICdhcHBsaWNhdGlvbi9qc29uLXBhdGNoK2pzb24nKTtcbiAgfVxufVxuIl19