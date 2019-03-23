import { HttpClient } from '@angular/common/http';
import { ModuleWithProviders } from '@angular/core';
import { NgxViaCepConfiguration } from './ngx-via-cep.configuration';
export declare class NgxViaCepModule {
    static forRoot(configurationFactory: () => NgxViaCepConfiguration): ModuleWithProviders;
    constructor(parentModule: NgxViaCepModule, http: HttpClient);
}
