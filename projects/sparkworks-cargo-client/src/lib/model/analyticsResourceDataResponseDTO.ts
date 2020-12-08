/**
 * SparkWorks Core (CaRGO) API
 * Access Interface for the SparkWorks IoT Data Analytics Platform
 *
 * OpenAPI spec version: 1.0.0
 * Contact: info@sparkworks.net
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import {ResourceDataDTO} from "./resourceDataDTO";

/**
 * Resource Analytics data response
 */
export interface AnalyticsResourceDataResponseDTO {
    /**
     * The average value of the included data
     */
    average?: number;
    /**
     * The summary value of the included data
     */
    summary?: number;
    /**
     * Array of ResourceDataDTO API Model
     */
    data?: Array<ResourceDataDTO>;
}