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
import { HttpClient, HttpHeaders, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegistryRecordDTO } from '../model/registryRecordDTO';
import { Configuration } from '../configuration';
export declare class RegistryService {
    protected httpClient: HttpClient;
    protected basePath: string;
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    constructor(httpClient: HttpClient, basePath: string, configuration: Configuration);
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm;
    /**
     * Query the Registry Service to retrieve a collection of Resources records with their last read value and timestamp by their UUID
     * A Spark Works Accounts authenticated common user is able to retrieve all of the Platform Resource info that has permissions on. An administrator is able to query all of the platform Resources
     * @param body uuids
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    queryRegistry(body: Array<string>, observe?: 'body', reportProgress?: boolean): Observable<Array<RegistryRecordDTO>>;
    queryRegistry(body: Array<string>, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<RegistryRecordDTO>>>;
    queryRegistry(body: Array<string>, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<RegistryRecordDTO>>>;
}
