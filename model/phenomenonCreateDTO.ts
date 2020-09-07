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


export interface PhenomenonCreateDTO { 
    aggregationMethod?: PhenomenonCreateDTO.AggregationMethodEnum;
    name?: string;
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
