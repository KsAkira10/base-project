/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { NgxViaCepConfiguration } from './ngx-via-cep.configuration';
import { NgxViaCepService } from './ngx-via-cep.service';
export class NgxViaCepModule {
    /**
     * @param {?} parentModule
     * @param {?} http
     */
    constructor(parentModule, http) {
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
    static forRoot(configurationFactory) {
        return {
            ngModule: NgxViaCepModule,
            providers: [
                { provide: NgxViaCepConfiguration, useFactory: configurationFactory }
            ]
        };
    }
}
NgxViaCepModule.decorators = [
    { type: NgModule, args: [{
                declarations: [],
                imports: [],
                exports: [],
                providers: [NgxViaCepService]
            },] }
];
/** @nocollapse */
NgxViaCepModule.ctorParameters = () => [
    { type: NgxViaCepModule, decorators: [{ type: Optional }, { type: SkipSelf }] },
    { type: HttpClient, decorators: [{ type: Optional }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXZpYS1jZXAubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGtzYWtpcmExMC9uZ3gtdmlhLWNlcC8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtdmlhLWNlcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQXVCLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBUXpELE1BQU0sT0FBTyxlQUFlOzs7OztJQVkxQixZQUMwQixZQUE2QixFQUN6QyxJQUFnQjtRQUU1QixJQUFJLFlBQVksRUFBRTtZQUNoQixNQUFNLElBQUksS0FBSyxDQUNiLHdFQUF3RSxDQUN6RSxDQUFDO1NBQ0g7UUFDRCxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsTUFBTSxJQUFJLEtBQUssQ0FDYiwrREFBK0Q7Z0JBQzdELDBEQUEwRCxDQUM3RCxDQUFDO1NBQ0g7SUFDSCxDQUFDOzs7OztJQTFCTSxNQUFNLENBQUMsT0FBTyxDQUNuQixvQkFBa0Q7UUFFbEQsT0FBTztZQUNMLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFNBQVMsRUFBRTtnQkFDVCxFQUFFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxVQUFVLEVBQUUsb0JBQW9CLEVBQUU7YUFDdEU7U0FDRixDQUFDO0lBQ0osQ0FBQzs7O1lBaEJGLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsRUFBRTtnQkFDaEIsT0FBTyxFQUFFLEVBQUU7Z0JBQ1gsT0FBTyxFQUFFLEVBQUU7Z0JBQ1gsU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7YUFDOUI7Ozs7WUFjeUMsZUFBZSx1QkFBcEQsUUFBUSxZQUFJLFFBQVE7WUF4QmhCLFVBQVUsdUJBeUJkLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd4VmlhQ2VwQ29uZmlndXJhdGlvbiB9IGZyb20gJy4vbmd4LXZpYS1jZXAuY29uZmlndXJhdGlvbic7XG5pbXBvcnQgeyBOZ3hWaWFDZXBTZXJ2aWNlIH0gZnJvbSAnLi9uZ3gtdmlhLWNlcC5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXSxcbiAgaW1wb3J0czogW10sXG4gIGV4cG9ydHM6IFtdLFxuICBwcm92aWRlcnM6IFtOZ3hWaWFDZXBTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hWaWFDZXBNb2R1bGUge1xuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoXG4gICAgY29uZmlndXJhdGlvbkZhY3Rvcnk6ICgpID0+IE5neFZpYUNlcENvbmZpZ3VyYXRpb25cbiAgKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOZ3hWaWFDZXBNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiBOZ3hWaWFDZXBDb25maWd1cmF0aW9uLCB1c2VGYWN0b3J5OiBjb25maWd1cmF0aW9uRmFjdG9yeSB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogTmd4VmlhQ2VwTW9kdWxlLFxuICAgIEBPcHRpb25hbCgpIGh0dHA6IEh0dHBDbGllbnRcbiAgKSB7XG4gICAgaWYgKHBhcmVudE1vZHVsZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnTmd4VmlhQ2VwTW9kdWxlIGlzIGFscmVhZHkgbG9hZGVkLiBJbXBvcnQgaW4geW91ciBiYXNlIEFwcE1vZHVsZSBvbmx5LidcbiAgICAgICk7XG4gICAgfVxuICAgIGlmICghaHR0cCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnWW91IG5lZWQgdG8gaW1wb3J0IHRoZSBIdHRwQ2xpZW50TW9kdWxlIGluIHlvdXIgQXBwTW9kdWxlISBcXG4nICtcbiAgICAgICAgICAnU2VlIGFsc28gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMjA1NzUnXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuIl19