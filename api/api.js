"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
exports.__esModule = true;
__export(require("./command.service"));
var command_service_1 = require("./command.service");
__export(require("./data.service"));
var data_service_1 = require("./data.service");
__export(require("./gateway.service"));
var gateway_service_1 = require("./gateway.service");
__export(require("./group.service"));
var group_service_1 = require("./group.service");
__export(require("./participatorySensing.service"));
var participatorySensing_service_1 = require("./participatorySensing.service");
__export(require("./phenomenon.service"));
var phenomenon_service_1 = require("./phenomenon.service");
__export(require("./registry.service"));
var registry_service_1 = require("./registry.service");
__export(require("./resource.service"));
var resource_service_1 = require("./resource.service");
__export(require("./smartWork.service"));
var smartWork_service_1 = require("./smartWork.service");
__export(require("./unit.service"));
var unit_service_1 = require("./unit.service");
__export(require("./unitConversion.service"));
var unitConversion_service_1 = require("./unitConversion.service");
exports.APIS = [command_service_1.CommandService, data_service_1.DataService, gateway_service_1.GatewayService, group_service_1.GroupService, participatorySensing_service_1.ParticipatorySensingService, phenomenon_service_1.PhenomenonService, registry_service_1.RegistryService, resource_service_1.ResourceService, smartWork_service_1.SmartWorkService, unit_service_1.UnitService, unitConversion_service_1.UnitConversionService];
