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
 
import { Component } from '@angular/core';
import { IonicPage, NavParams, Platform } from 'ionic-angular';
import { CoreSitesProvider } from '@providers/sites';
import { AddonAxificationsProvider } from '../../providers/axifications';

/// Lucio for different WS
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


/**
 * Page that displays the list of axifications.
 */
@IonicPage({ segment: 'addon-axifications-list' })
@Component({
    selector: 'page-addon-axifications-list',
    templateUrl: 'list.html'
})
export class AddonAxificationsListPage {
	hideUntil = false;
    axifications = [];
    axificationsLoaded = false;
    canLoadMore = false;
    canMarkAllAxificationsAsRead = false;
    loadingMarkAllAxificationsAsRead = false;
	safeLoginUrl: string;

    protected readCount = 0;
    protected unreadCount = 0;

    constructor(
			navParams: NavParams, 
			private _http: HttpClient,
            private sitesProvider: CoreSitesProvider,			
			private axificationsProvider: AddonAxificationsProvider,
			private platform: Platform) 
	{
			
    }
  
    /** 
     * View loaded.
     */  
    ionViewDidLoad(): void { 

		var site = this.sitesProvider.getCurrentSite()

		// Get username and fullname.  
		var userId =  site.getUserId();
		var fullName = site.getInfo().fullname;
		var userName = site.getInfo().username;
		var siteUrl = site.getURL();
		
		/// Hide system bar status space for android devices:
		if (!(this.platform.is('ios'))) {
			var styleforAndroid = $('<style>#embeded_iframe { position: inherit; }</style>');
			$('html > head').append(styleforAndroid);
		}
 		
		/// BCC PROD:   
		var AUTH_USER_KEY_wsToken = "6c7eb64adb7bbcadbedf13dbdd85ae99"; 
		/// BCC SVIL:
		var isItSvil = siteUrl.indexOf("svilmdlaxapp");
		if(isItSvil != -1){ AUTH_USER_KEY_wsToken = "8c98e14eef68957f1aacb7451388b4e2"; }
		/// BCC TEST:
		var isItTest = siteUrl.indexOf("test");
		if(isItTest != -1){ AUTH_USER_KEY_wsToken = "eb15b5da943a5546296e027bee29f1b1"; }

		var wantsURL = siteUrl + "/local/axperformance/splash.php";
		var functionOnWS = 'auth_userkey_request_login_url';
		
		//var responseFromWs = this.getMyLoginUrl(userName,wantsURL,AUTH_USER_KEY_wsToken,siteUrl,functionOnWS);
		
		this.getMyLoginUrl(userName,wantsURL,AUTH_USER_KEY_wsToken,siteUrl,functionOnWS)
        .subscribe(resp => {
			this.safeLoginUrl = resp.loginurl + '&wantsurl=' + encodeURI(wantsURL);
			this.hideUntil = true; 
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
		
    }

	getMyLoginUrl(usernameToLogin,wantsUrl,wsToken,moodleDomain,functionNameOnWS): void {
		var serverUrl = moodleDomain + '/webservice/rest/server.php' + '?wstoken=' + wsToken + '&wsfunction=' + functionNameOnWS + '&moodlewsrestformat=json';
		
		// console.log( "ax jQuery ready1!" );
		const userToWs = {	user:{username:usernameToLogin} }
		
		return this._http.post(serverUrl,
            userToWs,
				{
				  headers: new HttpHeaders()
					.set('Content-Type', 'application/x-www-form-urlencoded')
				}
			)
        .pipe(
			catchError(this.handleError) // then handle the error
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
		
	}	
	
	
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }


  
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
    refreshAxifications(refresher?: any): void {
	
		// console.log("refreshAxifications");
		

		
    }



    /**
     * Page destroyed.
     */
    ngOnDestroy(): void {
		/*
        this.cronObserver && this.cronObserver.off();
        this.pushObserver && this.pushObserver.unsubscribe();
		*/
    }
}