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
import {SleepDataDTO} from "./sleepDataDTO";

export interface SleepDataResponseDTO {
    id?: string;
    user?: string;
    localTime?: Date;
    startTime?: Date;
    dateOfSleep?: string;
    data?: SleepDataDTO;
}