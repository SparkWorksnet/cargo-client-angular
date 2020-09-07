# Cargo Client

[![Build Status](https://travis-ci.org/SparkWorksnet/cargo-client-angular.svg?branch=master)](https://travis-ci.org/SparkWorksnet/cargo-client-angular)

This library acts as a client for SparkWorks [CaRGO](https://api.sparkworks.net).
The library is designed to be used inside an Angular application.

## install

    $ npm install -g sparkworks-cargo-client
    
## usage
To use the library simply add in your `tsconfig.json` the following setting:

      {
          "compilerOptions": {
            ...
          },
          "include": [
            "./src",
            "./node_modules/sparkworks-cargo-client/"
          ]
      }

 
### importing in angular

To use the library import it in your Angular service/module using the following in `app.module.ts`

        import {DataService as HistoryService, PhenomenonDTO, PhenomenonService, ResourceDTO, ResourceService} from 'sparkworks-cargo-client';
        import {ApiModule, Configuration} from 'sparkworks-cargo-client';
        
        @NgModule({
          declarations: [
            ...
          ],
          imports: [
            ApiModule,
          ],
          providers: [
            OAuthGuard,
            LoggedInGuard,
            {
              provide: Configuration,
              useFactory: (oauthService: OAuthService) => new Configuration({
                basePath: environment.sparkworksapiurl,
                accessToken: oauthService.getAccessToken()
              }),
              deps: [OAuthService],
              multi: false 
            },
            MessagingService,
            CookieService
          ],
          ...
        })
 
