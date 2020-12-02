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

import {PublishDataListDTO, ResourceDTO} from '../..';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import {PSCreateResourceDTO} from "../..";


@Injectable({
  providedIn: 'root'
})
export class ParticipatorySensingService {

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
     * Create a Participatory Sensing Resource with an autogenerated uri
     * Provides means to create a participatory sensing resource and setup its properties in one call, with an autogenerated uri for it
     * @param resourceDTO Resource to be created and used for participatory sensing.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createPsResource(resourceDTO: PSCreateResourceDTO, observe?: 'body', reportProgress?: boolean): Observable<ResourceDTO>;
    public createPsResource(resourceDTO: PSCreateResourceDTO, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResourceDTO>>;
    public createPsResource(resourceDTO: PSCreateResourceDTO, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResourceDTO>>;
    public createPsResource(resourceDTO: PSCreateResourceDTO, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (resourceDTO === null || resourceDTO === undefined) {
            throw new Error('Required parameter resourceDTO was null or undefined when calling createPsResource.');
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

        return this.httpClient.post<ResourceDTO>(`${this.basePath}/v2/ps/resource`,
            resourceDTO,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Delete a Participatory Sensing Resource
     * Provides means to delete a participatory sensing resource
     * @param uuid The Participatory Sensing Resource UUID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deletePsResource(uuid: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deletePsResource(uuid: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deletePsResource(uuid: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deletePsResource(uuid: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (uuid === null || uuid === undefined) {
            throw new Error('Required parameter uuid was null or undefined when calling deletePsResource.');
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

        return this.httpClient.delete<any>(`${this.basePath}/v2/ps/resource/${encodeURIComponent(String(uuid))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Publish data to a Participatory Sensing Resource.
     * Provides means to publish data to a participatory sensing resource.
     * @param publishDataListDTO List of PublishDataDTO to be published to a participatory sensing resource.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public publishPsData(publishDataListDTO: PublishDataListDTO, observe?: 'body', reportProgress?: boolean): Observable<PublishDataListDTO>;
    public publishPsData(publishDataListDTO: PublishDataListDTO, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PublishDataListDTO>>;
    public publishPsData(publishDataListDTO: PublishDataListDTO, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PublishDataListDTO>>;
    public publishPsData(publishDataListDTO: PublishDataListDTO, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (publishDataListDTO === null || publishDataListDTO === undefined) {
            throw new Error('Required parameter publishDataListDTO was null or undefined when calling publishPsData.');
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

        return this.httpClient.post<PublishDataListDTO>(`${this.basePath}/v2/ps/data`,
            publishDataListDTO,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
