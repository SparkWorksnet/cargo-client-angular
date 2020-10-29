import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { CommandService } from './api/command.service';
import { DataService } from './api/data.service';
import { GatewayService } from './api/gateway.service';
import { GroupService } from './api/group.service';
import { ParticipatorySensingService } from './api/participatorySensing.service';
import { PhenomenonService } from './api/phenomenon.service';
import { RegistryService } from './api/registry.service';
import { ResourceService } from './api/resource.service';
import { SmartWorkService } from './api/smartWork.service';
import { UnitService } from './api/unit.service';
import { UnitConversionService } from './api/unitConversion.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    CommandService,
    DataService,
    GatewayService,
    GroupService,
    ParticipatorySensingService,
    PhenomenonService,
    RegistryService,
    ResourceService,
    SmartWorkService,
    UnitService,
    UnitConversionService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders<ApiModule> {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
