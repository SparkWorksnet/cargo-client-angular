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


export interface ResourceDTO { 
    controls?: string;
    createdBy?: string;
    createdDate?: Date;
    deleted?: boolean;
    gatewaySystemName?: string;
    groupUuid?: string;
    lastModifiedBy?: string;
    lastModifiedDate?: Date;
    phenomenonUuid?: string;
    systemName?: string;
    type?: ResourceDTO.TypeEnum;
    unitUuid?: string;
    userFriendlyName?: string;
    uuid?: string;
}
export namespace ResourceDTO {
    export type TypeEnum = 'Actuator' | 'Sensor' | 'Undefined';
    export const TypeEnum = {
        Actuator: 'Actuator' as TypeEnum,
        Sensor: 'Sensor' as TypeEnum,
        Undefined: 'Undefined' as TypeEnum
    };
}
