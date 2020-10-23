import {Provider, Type} from "@angular/core";

export * from './api/api';
export * from './model/models';
export * from './variables';
export * from './configuration';
export * from './api.module';

declare module "@angular/core" {
    interface ModuleWithProviders<T = any> {
        ngModule: Type<T>;
        providers?: Provider[];
    }
}
