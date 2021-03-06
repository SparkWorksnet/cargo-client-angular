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
import { GatewayCreateDTO } from '../model/gatewayCreateDTO';
import { GatewayDTO } from '../model/gatewayDTO';
import { GatewayQueryDTO } from '../model/gatewayQueryDTO';
import { ResourceDTO } from '../model/resourceDTO';
import { Configuration } from '../configuration';
export declare class GatewayService {
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
     * Count Gateways
     * A Spark Works Accounts authenticated common user is able to retrieve the number of Gateways that has permissions on. An administrator is able to retrieve the number of all Gateways.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    countGateways(observe?: 'body', reportProgress?: boolean): Observable<number>;
    countGateways(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<number>>;
    countGateways(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<number>>;
    /**
     * Create a new Gateway
     * A Spark Works authenticated user is able to request a new Gateway creation
     * @param body Gateway Creation API Model
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    createGateway(body: GatewayCreateDTO, observe?: 'body', reportProgress?: boolean): Observable<GatewayDTO>;
    createGateway(body: GatewayCreateDTO, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GatewayDTO>>;
    createGateway(body: GatewayCreateDTO, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GatewayDTO>>;
    /**
     * Delete Gateway by its UUID
     * A Spark Works Accounts authenticated common user is able to remove a Spark Works Gateway that has permissions on by its unique identifier. An administrator is able to remove any Gateway of the platform
     * @param uuid The Gateway UUID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    deleteGateway(uuid: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    deleteGateway(uuid: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    deleteGateway(uuid: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    /**
     * Retrieve a collection of Gateways
     * A Spark Works Accounts authenticated common user is able to retrieve all of the Platform Gateways that has permissions on. An administrator is able to query all of the platform Gateways
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    getAllGateways(observe?: 'body', reportProgress?: boolean): Observable<Array<GatewayDTO>>;
    getAllGateways(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<GatewayDTO>>>;
    getAllGateways(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<GatewayDTO>>>;
    /**
     * Retrieve a Gateway by its UUID
     * A Spark Works Accounts authenticated common user is able to retrieve a Gateway that has permissions on by its UUID. An administrator is able to get any Gateway by its UUID.
     * @param uuid The Gateway UUID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    getGatewayByUuid(uuid: string, observe?: 'body', reportProgress?: boolean): Observable<GatewayDTO>;
    getGatewayByUuid(uuid: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GatewayDTO>>;
    getGatewayByUuid(uuid: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GatewayDTO>>;
    /**
     * Get the Resources of a Gateway by the Gateway UUID
     * A Spark Works Accounts authenticated common user is able to retrieve the Resources of Gateway that has permissions on by its UUID. An administrator is able to retrieve the Resources of any Gateway.
     * @param uuid The Gateway UUID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    getGatewayResources(uuid: string, observe?: 'body', reportProgress?: boolean): Observable<Array<ResourceDTO>>;
    getGatewayResources(uuid: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<ResourceDTO>>>;
    getGatewayResources(uuid: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<ResourceDTO>>>;
    /**
     * Retrieve a Gateway by a query
     * A Spark Works Accounts authenticated common user is able to retrieve a Gateway that has permissions on by a query object. An administrator is able to get any Gateway by a query object.
     * @param body The Gateway Query
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    queryGateways(body: GatewayQueryDTO, observe?: 'body', reportProgress?: boolean): Observable<GatewayDTO>;
    queryGateways(body: GatewayQueryDTO, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GatewayDTO>>;
    queryGateways(body: GatewayQueryDTO, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GatewayDTO>>;
}
