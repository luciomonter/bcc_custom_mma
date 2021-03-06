﻿// (C) Copyright 2015 Martin Dougiamas
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { NgModule } from '@angular/core';
import { AddonAxificationsProvider } from './providers/axifications';
import { AddonAxificationsMainMenuHandler } from './providers/mainmenu-handler';
import { CoreContentLinksHelperProvider } from '@core/contentlinks/providers/helper';
import { CoreMainMenuDelegate } from '@core/mainmenu/providers/delegate';

// List of providers (without handlers).
export const ADDON_AXIFICATIONS_PROVIDERS: any[] = [
    AddonAxificationsProvider
];

@NgModule({
    declarations: [
    ],
    imports: [
    ],
    providers: [
        AddonAxificationsProvider,
        AddonAxificationsMainMenuHandler,
    ]
})
export class AddonAxificationsModule {
			
    constructor(mainMenuDelegate: CoreMainMenuDelegate, 
			mainMenuHandler: AddonAxificationsMainMenuHandler,
			linkHelper: CoreContentLinksHelperProvider, 
            axificationsProvider: AddonAxificationsProvider) 			
			
		{
			mainMenuDelegate.registerHandler(mainMenuHandler);

        const axificationClicked = (axification: any): void => {
		
			linkHelper.goInSite(undefined, 'AddonAxificationsListPage', undefined, axification.site);

        };

        
    }
}
