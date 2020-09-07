/**
 * SparkWorks Core API
 * Management Service for the SparkWorks Processing Engine
 *
 * OpenAPI spec version: v2.0
 * Contact: info@sparkworks.net
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { UnitConversionCreateDTO } from '../model/unitConversionCreateDTO';
import { UnitConversionDTO } from '../model/unitConversionDTO';
import { UnitConversionQueryDTO } from '../model/unitConversionQueryDTO';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable({
  providedIn: 'root'
})
export class UnitConversionService {

    protected basePath = 'https://api.sparkworks.net';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Create a Unit Conversion
     * A Spark Works Accounts authenticated user is able to create a Unit Conversion. 
     * @param unitConversionCreateDTO Unit Conversion Create API Model
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createUnitConversion(unitConversionCreateDTO: UnitConversionCreateDTO, observe?: 'body', reportProgress?: boolean): Observable<UnitConversionDTO>;
    public createUnitConversion(unitConversionCreateDTO: UnitConversionCreateDTO, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UnitConversionDTO>>;
    public createUnitConversion(unitConversionCreateDTO: UnitConversionCreateDTO, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UnitConversionDTO>>;
    public createUnitConversion(unitConversionCreateDTO: UnitConversionCreateDTO, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (unitConversionCreateDTO === null || unitConversionCreateDTO === undefined) {
            throw new Error('Required parameter unitConversionCreateDTO was null or undefined when calling createUnitConversion.');
        }

        let headers = this.defaultHeaders;

        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<UnitConversionDTO>(`${this.basePath}/v2/conversion`,
            unitConversionCreateDTO,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Delete a Unit Conversion by its UUID
     * A Spark Works Accounts authenticated user is able to delete a Unit Conversion by its UUID.
     * @param uuid The Unit Conversion UUID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteUnitConversion(uuid: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteUnitConversion(uuid: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteUnitConversion(uuid: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteUnitConversion(uuid: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (uuid === null || uuid === undefined) {
            throw new Error('Required parameter uuid was null or undefined when calling deleteUnitConversion.');
        }

        let headers = this.defaultHeaders;

        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.delete<any>(`${this.basePath}/v2/conversion/${encodeURIComponent(String(uuid))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieve a collection of Unit Conversions
     * A Spark Works Accounts authenticated user is able to retrieve all of the Platform Unit Conversions. 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllUnitConversions(observe?: 'body', reportProgress?: boolean): Observable<Array<UnitConversionDTO>>;
    public getAllUnitConversions(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<UnitConversionDTO>>>;
    public getAllUnitConversions(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<UnitConversionDTO>>>;
    public getAllUnitConversions(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<UnitConversionDTO>>(`${this.basePath}/v2/conversion`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieve a Unit Conversion by its UUID
     * A Spark Works Accounts authenticated user is able to retrieve a Unit Conversion.
     * @param uuid The Unit Conversion UUID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getUnitConversionByUuid(uuid: string, observe?: 'body', reportProgress?: boolean): Observable<UnitConversionDTO>;
    public getUnitConversionByUuid(uuid: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UnitConversionDTO>>;
    public getUnitConversionByUuid(uuid: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UnitConversionDTO>>;
    public getUnitConversionByUuid(uuid: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (uuid === null || uuid === undefined) {
            throw new Error('Required parameter uuid was null or undefined when calling getUnitConversionByUuid.');
        }

        let headers = this.defaultHeaders;

        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<UnitConversionDTO>(`${this.basePath}/v2/conversion/${encodeURIComponent(String(uuid))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieve a List of Unit Conversions by a query
     * A Spark Works Accounts authenticated user is able to retrieve a List of Unit Conversion.
     * @param unitConversionQueryDTO Unit Conversion Query API Model
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public queryUnitConversions(unitConversionQueryDTO: UnitConversionQueryDTO, observe?: 'body', reportProgress?: boolean): Observable<Array<UnitConversionDTO>>;
    public queryUnitConversions(unitConversionQueryDTO: UnitConversionQueryDTO, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<UnitConversionDTO>>>;
    public queryUnitConversions(unitConversionQueryDTO: UnitConversionQueryDTO, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<UnitConversionDTO>>>;
    public queryUnitConversions(unitConversionQueryDTO: UnitConversionQueryDTO, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (unitConversionQueryDTO === null || unitConversionQueryDTO === undefined) {
            throw new Error('Required parameter unitConversionQueryDTO was null or undefined when calling queryUnitConversions.');
        }

        let headers = this.defaultHeaders;

        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<Array<UnitConversionDTO>>(`${this.basePath}/v2/conversion/query`,
            unitConversionQueryDTO,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
