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
export interface ResourceUpdateDTO {
    controls?: string;
    phenomenonUuid?: string;
    type?: ResourceUpdateDTO.TypeEnum;
    unitUuid?: string;
    userFriendlyName?: string;
}
export declare namespace ResourceUpdateDTO {
    type TypeEnum = 'Actuator' | 'Sensor' | 'Undefined';
    const TypeEnum: {
        Actuator: import("./resourceDTO").ResourceDTO.TypeEnum;
        Sensor: import("./resourceDTO").ResourceDTO.TypeEnum;
        Undefined: import("./resourceDTO").ResourceDTO.TypeEnum;
    };
}