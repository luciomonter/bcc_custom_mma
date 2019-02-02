webpackJsonp([3],{

/***/ 1784:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonAxificationsListPageModule", function() { return AddonAxificationsListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_components_module__ = __webpack_require__(1906);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__list__ = __webpack_require__(1908);
// (C) Copyright 2015 Martin Dougiamas
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AddonAxificationsListPageModule = /** @class */ (function () {
    function AddonAxificationsListPageModule() {
    }
    AddonAxificationsListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__list__["a" /* AddonAxificationsListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__["a" /* CorePipesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_7__list__["a" /* AddonAxificationsListPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_6__components_components_module__["a" /* AddonAxificationsComponentsModule */],
            ],
        })
    ], AddonAxificationsListPageModule);
    return AddonAxificationsListPageModule;
}());

//# sourceMappingURL=list.module.js.map

/***/ }),

/***/ 1906:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonAxificationsComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_actions__ = __webpack_require__(1907);
// (C) Copyright 2015 Martin Dougiamas
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AddonAxificationsComponentsModule = /** @class */ (function () {
    function AddonAxificationsComponentsModule() {
    }
    AddonAxificationsComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__actions_actions__["a" /* AddonAxificationsActionsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
            ],
            providers: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__actions_actions__["a" /* AddonAxificationsActionsComponent */]
            ],
        })
    ], AddonAxificationsComponentsModule);
    return AddonAxificationsComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 1907:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonAxificationsActionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_contentlinks_providers_delegate__ = __webpack_require__(33);
// (C) Copyright 2015 Martin Dougiamas
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Component that displays the actions for a axification.
 */
var AddonAxificationsActionsComponent = /** @class */ (function () {
    function AddonAxificationsActionsComponent(contentLinksDelegate) {
        this.contentLinksDelegate = contentLinksDelegate;
        this.actions = [];
    }
    /**
     * Component being initialized.
     */
    AddonAxificationsActionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contentLinksDelegate.getActionsFor(this.contextUrl, this.courseId).then(function (actions) {
            _this.actions = actions;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], AddonAxificationsActionsComponent.prototype, "contextUrl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], AddonAxificationsActionsComponent.prototype, "courseId", void 0);
    AddonAxificationsActionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'addon-axifications-actions',template:/*ion-inline-start:"C:\wamp\www\BCC_mobapp\bcc_custom_mma\src\addon\axifications\components\actions\addon-axifications-actions.html"*/'<ion-row *ngIf="actions && actions.length > 0" justify-content-around>\n\n    <ion-col *ngFor="let action of actions">\n\n        <button ion-button icon-left clear small block (click)="action.action()">\n\n            <ion-icon name="{{action.icon}}"></ion-icon>\n\n            {{ action.message | translate }}\n\n        </button>\n\n    </ion-col>\n\n</ion-row>\n\n'/*ion-inline-end:"C:\wamp\www\BCC_mobapp\bcc_custom_mma\src\addon\axifications\components\actions\addon-axifications-actions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_contentlinks_providers_delegate__["a" /* CoreContentLinksDelegate */]])
    ], AddonAxificationsActionsComponent);
    return AddonAxificationsActionsComponent;
}());

//# sourceMappingURL=actions.js.map

/***/ }),

/***/ 1908:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonAxificationsListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_axifications__ = __webpack_require__(942);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__(938);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__);
// (C) Copyright 2015 Martin Dougiamas
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/// Lucio for different WS



/**
 * Page that displays the list of axifications.
 */
var AddonAxificationsListPage = /** @class */ (function () {
    function AddonAxificationsListPage(navParams, _http, sitesProvider, axificationsProvider) {
        this._http = _http;
        this.sitesProvider = sitesProvider;
        this.axificationsProvider = axificationsProvider;
        this.hideUntil = false;
        this.axifications = [];
        this.axificationsLoaded = false;
        this.canLoadMore = false;
        this.canMarkAllAxificationsAsRead = false;
        this.loadingMarkAllAxificationsAsRead = false;
        this.readCount = 0;
        this.unreadCount = 0;
    }
    /**
     * View loaded.
     */
    AddonAxificationsListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var site = this.sitesProvider.getCurrentSite();
        // Get username and fullname.  
        var userId = site.getUserId();
        var fullName = site.getInfo().fullname;
        var userName = site.getInfo().username;
        var siteUrl = site.getURL();
        /// BCC PROD:  
        var AUTH_USER_KEY_wsToken = "6c7eb64adb7bbcadbedf13dbdd85ae99";
        /// BCC SVIL:
        var isItSvil = siteUrl.indexOf("svilmdlaxapp");
        if (isItSvil != -1) {
            AUTH_USER_KEY_wsToken = "8c98e14eef68957f1aacb7451388b4e2";
        }
        /// BCC TEST:
        var isItTest = siteUrl.indexOf("test");
        if (isItTest != -1) {
            AUTH_USER_KEY_wsToken = "eb15b5da943a5546296e027bee29f1b1";
        }
        var wantsURL = siteUrl + "/local/axperformance/splash.php";
        var functionOnWS = 'auth_userkey_request_login_url';
        //var responseFromWs = this.getMyLoginUrl(userName,wantsURL,AUTH_USER_KEY_wsToken,siteUrl,functionOnWS);
        this.getMyLoginUrl(userName, wantsURL, AUTH_USER_KEY_wsToken, siteUrl, functionOnWS)
            .subscribe(function (resp) {
            _this.safeLoginUrl = resp.loginurl + '&wantsurl=' + encodeURI(wantsURL);
            _this.hideUntil = true;
        });
        /// binding to bottom menu
        /*
        jQuery("a.tab-button").click(function() {
            console.log("change TAB");
            
            if( !(jQuery("ion-header.header").is(':visible') )){
                jQuery("ion-header.header").show('slide', { direction: "up" }, 500, function() {
                    $("div.scroll-content").css("margin-top","51px");
                });
            }
            
            
        });
        */
    };
    AddonAxificationsListPage.prototype.getMyLoginUrl = function (usernameToLogin, wantsUrl, wsToken, moodleDomain, functionNameOnWS) {
        var serverUrl = moodleDomain + '/webservice/rest/server.php' + '?wstoken=' + wsToken + '&wsfunction=' + functionNameOnWS + '&moodlewsrestformat=json';
        // console.log( "ax jQuery ready1!" );
        var userToWs = { user: { username: usernameToLogin } };
        return this._http.post(serverUrl, userToWs, {
            headers: new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["d" /* HttpHeaders */]()
                .set('Content-Type', 'application/x-www-form-urlencoded')
        })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["catchError"])(this.handleError) // then handle the error
        );
        /*
        /// INTERNAL APP APPROACH
        var site = this.sitesProvider.getCurrentSite()
        const preSets = {
            getFromCache: false,
            wstoken:wsToken,
            saveToCache: false
        };
        var siteResponse = site.read(functionNameOnWS, userToWs, preSets);
        */
        /*
        /// JQUERY APPROACH
        var wantsUrltoAdd = '&wantsurl=' + encodeURI(wantsUrl);
        var bindToApp = this;
        jQuery.post( serverUrl, "user[username]="+usernameToLogin)
          .done(function( data ) {
            //alert( "Data Loaded: " + data );
            console.log(data.loginurl);
            loginUrl = data.loginurl + wantsUrltoAdd;
            bindToApp.afterDirectLoginUrlObtained(loginUrl);
        });
        */
    };
    AddonAxificationsListPage.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(__WEBPACK_IMPORTED_MODULE_5_rxjs__["throwError"])('Something bad happened; please try again later.');
    };
    /*
    afterDirectLoginUrlObtained(loginUrl): void {
        // console.log("goo:: " + loginUrl);
        //this.currentLoginUrl = loginUrl;
        
        
        //jQuery("#embeded_iframe").attr("src",loginUrl);
        
        
    }
    */
    /**
     * Refresh axifications.
     *
     * @param {any} [refresher] Refresher.
     */
    AddonAxificationsListPage.prototype.refreshAxifications = function (refresher) {
        // console.log("refreshAxifications");
    };
    /**
     * Page destroyed.
     */
    AddonAxificationsListPage.prototype.ngOnDestroy = function () {
        /*
        this.cronObserver && this.cronObserver.off();
        this.pushObserver && this.pushObserver.unsubscribe();
        */
    };
    AddonAxificationsListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-axifications-list',template:/*ion-inline-start:"C:\wamp\www\BCC_mobapp\bcc_custom_mma\src\addon\axifications\pages\list\list.html"*/'﻿	<div class="core-loading-container" *ngIf="!hideUntil">\n\n		<span class="core-loading-spinner spinner-ax-valutazione">\n\n			<ion-spinner></ion-spinner>\n\n		</span>\n\n	</div>	 \n\n    <core-iframe id="embeded_iframe" class="core-iframe iframe" scrolling="yes"  [src]="safeLoginUrl" *ngIf="hideUntil"></core-iframe>\n\n\n\n	\n\n'/*ion-inline-end:"C:\wamp\www\BCC_mobapp\bcc_custom_mma\src\addon\axifications\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_sites__["a" /* CoreSitesProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_sites__["a" /* CoreSitesProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_axifications__["a" /* AddonAxificationsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_axifications__["a" /* AddonAxificationsProvider */]) === "function" && _d || Object])
    ], AddonAxificationsListPage);
    return AddonAxificationsListPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=list.js.map

/***/ })

});
//# sourceMappingURL=3.js.map