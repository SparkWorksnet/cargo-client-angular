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
import { CommandAPIModel } from '../model/commandAPIModel';
import { Configuration } from '../configuration';
export declare class CommandService {
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
     * Send a command to a SparkWorks Actuator Resource
     * A Spark Works Accounts authorized user is able to send a command to a Spark Works Actuator Resource by its unique identifier. An administrator is able to send a command to any Actuator Resource of the platform
     * @param body commandDto
     * @param uuid The unique identifier of the Actuator Resource
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    sendCommand(body: CommandAPIModel, uuid: string, observe?: 'body', reportProgress?: boolean): Observable<CommandAPIModel>;
    sendCommand(body: CommandAPIModel, uuid: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CommandAPIModel>>;
    sendCommand(body: CommandAPIModel, uuid: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CommandAPIModel>>;
}
