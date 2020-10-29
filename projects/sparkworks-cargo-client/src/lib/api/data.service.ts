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

import { PublishDataListDTOAPIModel } from '../model/publishDataListDTOAPIModel';
import { QueryLatestResourceDataDTOAPIModel } from '../model/queryLatestResourceDataDTOAPIModel';
import { QueryLatestResourceDataResultDTOAPIModel } from '../model/queryLatestResourceDataResultDTOAPIModel';
import { QueryRawDataTimeRangeDTOAPIModel } from '../model/queryRawDataTimeRangeDTOAPIModel';
import { QueryRawDataTimeRangeResultDTOAPIModel } from '../model/queryRawDataTimeRangeResultDTOAPIModel';
import { QueryResourceDataCriteriaDTOAPIModel } from '../model/queryResourceDataCriteriaDTOAPIModel';
import { QueryTimeRangeResourceDataDTOAPIModel } from '../model/queryTimeRangeResourceDataDTOAPIModel';
import { QueryTimeRangeResourceDataResultDTOAPIModel } from '../model/queryTimeRangeResourceDataResultDTOAPIModel';
import { ResourceLatestValuesResponseAPIModel } from '../model/resourceLatestValuesResponseAPIModel';
import { TheResourceSummaryDataAPIModel } from '../model/theResourceSummaryDataAPIModel';
import { TypicalHourlyDataDTO } from '../model/typicalHourlyDataDTO';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable({
  providedIn: 'root'
})
export class DataService {

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
     * Retrieve latest values and analytics for a single Resource
     * Retrieve the latest values received for a single Resource. The response contains the latest value received for the Resource, the timestamp of the measurement as well as the analytics calculated for this measurement for the last 5minute, hour, day and month interval.
     * @param uuid The UUID of the Resource
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getLatestByUuid(uuid: string, observe?: 'body', reportProgress?: boolean): Observable<ResourceLatestValuesResponseAPIModel>;
    public getLatestByUuid(uuid: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResourceLatestValuesResponseAPIModel>>;
    public getLatestByUuid(uuid: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResourceLatestValuesResponseAPIModel>>;
    public getLatestByUuid(uuid: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (uuid === null || uuid === undefined) {
            throw new Error('Required parameter uuid was null or undefined when calling getLatestByUuid.');
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

        return this.httpClient.get<ResourceLatestValuesResponseAPIModel>(`${this.basePath}/v2/resource/${encodeURIComponent(String(uuid))}/latest`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieve the data summary for a single Resource
     * Retrieve a summary of the latest analytics calculated for a single Resource. The summary contains the latest calculated analytics for the Resource for the past 48 5minute, hour, day and month intervals.
     * @param uuid The UUID of the Resource
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getSummaryByUuid(uuid: string, observe?: 'body', reportProgress?: boolean): Observable<TheResourceSummaryDataAPIModel>;
    public getSummaryByUuid(uuid: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TheResourceSummaryDataAPIModel>>;
    public getSummaryByUuid(uuid: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TheResourceSummaryDataAPIModel>>;
    public getSummaryByUuid(uuid: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (uuid === null || uuid === undefined) {
            throw new Error('Required parameter uuid was null or undefined when calling getSummaryByUuid.');
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

        return this.httpClient.get<TheResourceSummaryDataAPIModel>(`${this.basePath}/v2/resource/${encodeURIComponent(String(uuid))}/summary`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Publish data to a single or multiple Resources
     * Publish data to a single or multiple Resources. Send data for processing for one or more Resources that you have permission to update.
     * @param publishDataListDTO Data to be published
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public publishData(publishDataListDTO?: PublishDataListDTOAPIModel, observe?: 'body', reportProgress?: boolean): Observable<PublishDataListDTOAPIModel>;
    public publishData(publishDataListDTO?: PublishDataListDTOAPIModel, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PublishDataListDTOAPIModel>>;
    public publishData(publishDataListDTO?: PublishDataListDTOAPIModel, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PublishDataListDTOAPIModel>>;
    public publishData(publishDataListDTO?: PublishDataListDTOAPIModel, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


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

        return this.httpClient.post<PublishDataListDTOAPIModel>(`${this.basePath}/v2/resource/data/publish`,
            publishDataListDTO,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieve the latest values received for multiple Resources
     * Retrieve the latest values received for multiple Resources. The response contains the latest value received for the Resource and the timestamp of the measurement. For more information on how to define the criteria check the method parameters.
     * @param queryLatestResourceDataDTO Data query criteria
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public queryLatest(queryLatestResourceDataDTO: QueryLatestResourceDataDTOAPIModel, observe?: 'body', reportProgress?: boolean): Observable<QueryLatestResourceDataResultDTOAPIModel>;
    public queryLatest(queryLatestResourceDataDTO: QueryLatestResourceDataDTOAPIModel, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<QueryLatestResourceDataResultDTOAPIModel>>;
    public queryLatest(queryLatestResourceDataDTO: QueryLatestResourceDataDTOAPIModel, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<QueryLatestResourceDataResultDTOAPIModel>>;
    public queryLatest(queryLatestResourceDataDTO: QueryLatestResourceDataDTOAPIModel, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (queryLatestResourceDataDTO === null || queryLatestResourceDataDTO === undefined) {
            throw new Error('Required parameter queryLatestResourceDataDTO was null or undefined when calling queryLatest.');
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

        return this.httpClient.post<QueryLatestResourceDataResultDTOAPIModel>(`${this.basePath}/v2/resource/query/latest`,
            queryLatestResourceDataDTO,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieve the data summaries of multiple Resources
     * Retrieve the data summaries received of multiple Resources. The response contains the summary with calculated analytics for each Resource for the past 48 5minute, hour, day and month intervals. A single summary is returned for each Resource
     * @param queryResourceDataCriteriaDTO Data query criteria
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public querySummary(queryResourceDataCriteriaDTO: QueryResourceDataCriteriaDTOAPIModel, observe?: 'body', reportProgress?: boolean): Observable<TheResourceSummaryDataAPIModel>;
    public querySummary(queryResourceDataCriteriaDTO: QueryResourceDataCriteriaDTOAPIModel, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TheResourceSummaryDataAPIModel>>;
    public querySummary(queryResourceDataCriteriaDTO: QueryResourceDataCriteriaDTOAPIModel, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TheResourceSummaryDataAPIModel>>;
    public querySummary(queryResourceDataCriteriaDTO: QueryResourceDataCriteriaDTOAPIModel, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (queryResourceDataCriteriaDTO === null || queryResourceDataCriteriaDTO === undefined) {
            throw new Error('Required parameter queryResourceDataCriteriaDTO was null or undefined when calling querySummary.');
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

        return this.httpClient.post<TheResourceSummaryDataAPIModel>(`${this.basePath}/v2/resource/query/summary`,
            queryResourceDataCriteriaDTO,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieve analytics for a single Resource
     * Retrieve analytics for a single Resource on multiple intervals and granularities. The response contains the latest calculated analytics for the Resource based on the query criteria provided with the request. For more information on how to define the criteria check the method parameters.
     * @param queryTimeRangeResourceDataDTO Timerange criteria
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public queryTimeRange(queryTimeRangeResourceDataDTO: QueryTimeRangeResourceDataDTOAPIModel, observe?: 'body', reportProgress?: boolean): Observable<QueryTimeRangeResourceDataResultDTOAPIModel>;
    public queryTimeRange(queryTimeRangeResourceDataDTO: QueryTimeRangeResourceDataDTOAPIModel, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<QueryTimeRangeResourceDataResultDTOAPIModel>>;
    public queryTimeRange(queryTimeRangeResourceDataDTO: QueryTimeRangeResourceDataDTOAPIModel, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<QueryTimeRangeResourceDataResultDTOAPIModel>>;
    public queryTimeRange(queryTimeRangeResourceDataDTO: QueryTimeRangeResourceDataDTOAPIModel, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (queryTimeRangeResourceDataDTO === null || queryTimeRangeResourceDataDTO === undefined) {
            throw new Error('Required parameter queryTimeRangeResourceDataDTO was null or undefined when calling queryTimeRange.');
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

        return this.httpClient.post<QueryTimeRangeResourceDataResultDTOAPIModel>(`${this.basePath}/v2/resource/query/timerange`,
            queryTimeRangeResourceDataDTO,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieve the raw data received for a single Resource
     * Retrieve the raw data received for a single Resource over a specified time interval. This method retrieves from the raw data storage and depending on the amount of data that need to be accessed may take longer time to respond. If your get a response timeout you may need to limit the requested time range.
     * @param queryRawDataTimeRangeDTO Raw Data Timerange Criteria
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public queryTimeRangeRaw(queryRawDataTimeRangeDTO: QueryRawDataTimeRangeDTOAPIModel, observe?: 'body', reportProgress?: boolean): Observable<QueryRawDataTimeRangeResultDTOAPIModel>;
    public queryTimeRangeRaw(queryRawDataTimeRangeDTO: QueryRawDataTimeRangeDTOAPIModel, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<QueryRawDataTimeRangeResultDTOAPIModel>>;
    public queryTimeRangeRaw(queryRawDataTimeRangeDTO: QueryRawDataTimeRangeDTOAPIModel, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<QueryRawDataTimeRangeResultDTOAPIModel>>;
    public queryTimeRangeRaw(queryRawDataTimeRangeDTO: QueryRawDataTimeRangeDTOAPIModel, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (queryRawDataTimeRangeDTO === null || queryRawDataTimeRangeDTO === undefined) {
            throw new Error('Required parameter queryRawDataTimeRangeDTO was null or undefined when calling queryTimeRangeRaw.');
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

        return this.httpClient.post<QueryRawDataTimeRangeResultDTOAPIModel>(`${this.basePath}/v2/resource/query/raw/timerange`,
            queryRawDataTimeRangeDTO,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieve a Resource&#39;s typical hourly data by UUID.
     * A Spark Works Accounts authenticated common user is able to get a Resource&#39;s typical hourly data that has permission on.An administrator is able to get the typical hourly data of any Resource.
     * @param uuid The UUID of the Resource
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public typicalHourlyData(uuid: string, observe?: 'body', reportProgress?: boolean): Observable<TypicalHourlyDataDTO>;
    public typicalHourlyData(uuid: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TypicalHourlyDataDTO>>;
    public typicalHourlyData(uuid: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TypicalHourlyDataDTO>>;
    public typicalHourlyData(uuid: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (uuid === null || uuid === undefined) {
            throw new Error('Required parameter uuid was null or undefined when calling typicalHourlyData.');
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

        return this.httpClient.get<TypicalHourlyDataDTO>(`${this.basePath}/v2/resource/${encodeURIComponent(String(uuid))}/thd`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}