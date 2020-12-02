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

export interface PhenomenonUpdateDTO { 
    name?: string;
    aggregationMethod?: PhenomenonUpdateDTO.AggregationMethodEnum;
}
export namespace PhenomenonUpdateDTO {
    export type AggregationMethodEnum = 'min' | 'max' | 'average' | 'total';
    export const AggregationMethodEnum = {
        Min: 'min' as AggregationMethodEnum,
        Max: 'max' as AggregationMethodEnum,
        Average: 'average' as AggregationMethodEnum,
        Total: 'total' as AggregationMethodEnum
    };
}