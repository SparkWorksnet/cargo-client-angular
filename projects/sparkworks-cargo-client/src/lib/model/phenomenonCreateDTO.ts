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

/**
 * The Phenomenon Query
 */
export interface PhenomenonCreateDTO { 
    name: string;
    aggregationMethod?: PhenomenonCreateDTO.AggregationMethodEnum;
}
export namespace PhenomenonCreateDTO {
    export type AggregationMethodEnum = 'min' | 'max' | 'average' | 'total';
    export const AggregationMethodEnum = {
        Min: 'min' as AggregationMethodEnum,
        Max: 'max' as AggregationMethodEnum,
        Average: 'average' as AggregationMethodEnum,
        Total: 'total' as AggregationMethodEnum
    };
}