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
 * Wrapper object for latest Data query responses
 */
export interface QueryLatestResourceDataResultDTOAPIModel { 
    /**
     * Holder object mapping the requested criteria with the response data
     */
    results?: { [key: string]: SingleResourceMeasurementAPIModel; };
}
