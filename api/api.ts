export * from './command.service';
import { CommandService } from './command.service';
export * from './data.service';
import { DataService } from './data.service';
export * from './gateway.service';
import { GatewayService } from './gateway.service';
export * from './group.service';
import { GroupService } from './group.service';
export * from './participatorySensing.service';
import { ParticipatorySensingService } from './participatorySensing.service';
export * from './phenomenon.service';
import { PhenomenonService } from './phenomenon.service';
export * from './registry.service';
import { RegistryService } from './registry.service';
export * from './resource.service';
import { ResourceService } from './resource.service';
export * from './smartWork.service';
import { SmartWorkService } from './smartWork.service';
export * from './unit.service';
import { UnitService } from './unit.service';
export * from './unitConversion.service';
import { UnitConversionService } from './unitConversion.service';
export const APIS = [CommandService, DataService, GatewayService, GroupService, ParticipatorySensingService, PhenomenonService, RegistryService, ResourceService, SmartWorkService, UnitService, UnitConversionService];
