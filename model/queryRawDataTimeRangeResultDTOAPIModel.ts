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
import { SingleResourceMeasurementAPIModel } from './singleResourceMeasurementAPIModel';

/**
 * Raw Data query response
 */
export interface QueryRawDataTimeRangeResultDTOAPIModel { 
    /**
     * The UNIX timestamp of the start date for filtering
     */
    from: number;
    /**
     * The Resource's Phenomenon UUID
     */
    phenomenonUuid?: string;
    /**
     * The UUID of the Resource
     */
    resourceUuid?: string;
    /**
     * The requested raw data
     */
    results?: Array<SingleResourceMeasurementAPIModel>;
    /**
     * The UNIX timestamp of the end date for filtering
     */
    to: number;
    /**
     * The Resource's Unit UUID
     */
    unitUuid?: string;
}