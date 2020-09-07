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


/**
 * Resource and unit of measurement criteria
 */
export interface QueryResourceDataCriteriaDTOAPIModel { 
    /**
     * The Resource system name.
     */
    resourceURI?: string;
    /**
     * The UUID of the Resource
     */
    resourceUuid?: string;
    /**
     * The target Unit of Measurement
     */
    targetUom?: string;
}
