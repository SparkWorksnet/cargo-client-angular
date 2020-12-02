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
import {SleepDataEntryDTO} from "./sleepDataEntryDTO";
import {SleepSummaryDTO} from "./sleepSummaryDTO";

export interface SleepLevelsDTO {
    data?: Array<SleepDataEntryDTO>;
    shortData?: Array<SleepDataEntryDTO>;
    summary?: SleepSummaryDTO
}
