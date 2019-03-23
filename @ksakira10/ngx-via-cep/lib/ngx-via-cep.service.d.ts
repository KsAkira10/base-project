import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgxViaCepConfiguration } from './ngx-via-cep.configuration';
export declare class NgxViaCepService {
    protected http: HttpClient;
    protected basePath: string;
    defaultHeaders: HttpHeaders;
    configuration: NgxViaCepConfiguration;
    private readonly urlFetchByCEP;
    private readonly urlFetchByAddressSP;
    constructor(http: HttpClient, basePath: string, configuration: NgxViaCepConfiguration);
    fetchByCEP: (cep: string) => Observable<any>;
    fetchByAddressSaoPaulo: (address: string) => Observable<any>;
    fetchByAddress: (state: string, city: string, address: string) => Observable<any>;
}
