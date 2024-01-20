(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_authGuard_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/authGuard/auth-guard.service */ 5666);

/* eslint-disable max-len */



const routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_user_user_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_public_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/public/login/login.module */ 8893)).then(m => m.LoginPageModule)
    },
    {
        path: 'home',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_user_user_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_private_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/private/home/home.module */ 701)).then(m => m.HomePageModule),
        canActivate: [_services_authGuard_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService],
    },
    {
        path: 'about-us',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_public_about-us_about-us_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/public/about-us/about-us.module */ 6830)).then(m => m.AboutUsPageModule),
    },
    {
        path: 'privacy-policy',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_public_privacy-policy_privacy-policy_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/public/privacy-policy/privacy-policy.module */ 4876)).then(m => m.PrivacyPolicyPageModule)
    },
    {
        path: 'forgot-password',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_user_user_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_public_forgot-password_forgot-password_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/public/forgot-password/forgot-password.module */ 9061)).then(m => m.ForgotPasswordPageModule)
    },
    {
        path: 'forgot-username',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_user_user_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_public_forgot-username_forgot-username_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/public/forgot-username/forgot-username.module */ 2923)).then(m => m.ForgotUsernamePageModule)
    },
    {
        path: 'register',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_user_user_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_public_register_register_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/public/register/register.module */ 7744)).then(m => m.RegisterPageModule)
    },
    {
        path: 'view-user-profile',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_user_user_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_private_UAM_view-user-profile_view-user-profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/private/UAM/view-user-profile/view-user-profile.module */ 545)).then(m => m.ViewUserProfilePageModule)
    },
    {
        path: 'update-user-profile',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_user_user_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_private_UAM_update-user-profile_update-user-profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/private/UAM/update-user-profile/update-user-profile.module */ 9656)).then(m => m.UpdateUserProfilePageModule)
    },
    {
        path: 'reset-password',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_user_user_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_public_reset-password_reset-password_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/public/reset-password/reset-password.module */ 4761)).then(m => m.ResetPasswordPageModule)
    },
    {
        path: 'lookup-list',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_vehicle_vehicle_service_ts"), __webpack_require__.e("default-src_app_pages_private_lookup_lookup-list_lookup-list_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_services_security_security_service_ts-_70be0")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/private/lookup/lookup-list/lookup-list.module */ 7966)).then(m => m.LookupListPageModule)
    },
    {
        path: 'create-lookup',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_vehicle_vehicle_service_ts"), __webpack_require__.e("default-src_app_pages_private_lookup_create-lookup_create-lookup_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_services_security_security_service_ts-_70be1")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/private/lookup/create-lookup/create-lookup.module */ 5179)).then(m => m.CreateLookupPageModule)
    },
    {
        path: 'update-lookup',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_vehicle_vehicle_service_ts"), __webpack_require__.e("default-src_app_pages_private_lookup_update-lookup_update-lookup_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_services_security_security_service_ts-_70be2")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/private/lookup/update-lookup/update-lookup.module */ 4106)).then(m => m.UpdateLookupPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
        providers: [_services_authGuard_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _services_Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/Authentication/authentication.service */ 6793);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ 190);
/* harmony import */ var _services_localStorage_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/localStorage/local-storage.service */ 8565);
/* harmony import */ var _services_platformService_platform_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/platformService/platform.service */ 3661);












let AppComponent = class AppComponent {
  constructor(platform, router, authenticationService, storage, localStorageService, platFormService, translate) {
    this.platform = platform;
    this.router = router;
    this.authenticationService = authenticationService;
    this.storage = storage;
    this.localStorageService = localStorageService;
    this.platFormService = platFormService;
    this.translate = translate;
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  ngOnInit() {
    var _this = this;

    return (0,C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.storage.create();

      _this.initializeApp();
    })();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.localStorageService.LoadStoredPreference(succsee => {
        console.log("App Initilization: ", this.localStorageService.StoredPreference);

        if (this.localStorageService.StoredPreference.LoggedInStatus) {
          this.router.navigate(["/home/dashboard"]);
        } else {
          this.router.navigate(["/login"]);
        }
      });
    });
  }

};

AppComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
}, {
  type: _services_Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService
}, {
  type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__.Storage
}, {
  type: _services_localStorage_local_storage_service__WEBPACK_IMPORTED_MODULE_5__.LocalStorageService
}, {
  type: _services_platformService_platform_service__WEBPACK_IMPORTED_MODULE_6__.PlatformService
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService
}];

AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AppComponent);


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ 9128);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/http-loader */ 8319);
/* harmony import */ var ng_event_bus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-event-bus */ 2735);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 190);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-apexcharts */ 3239);













// import { Network } from '@awesome-cordova-plugins/network/ngx';

function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_10__.NgApexchartsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateLoader,
                    useFactory: (createTranslateLoader),
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient]
                }
            }),],
        exports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule],
        providers: [_ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__.NativeStorage, _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage,
            ng_event_bus__WEBPACK_IMPORTED_MODULE_12__.NgEventBus, { provide: _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicRouteStrategy }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 6198:
/*!*************************************!*\
  !*** ./src/app/models/BaseModel.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseModel": () => (/* binding */ BaseModel)
/* harmony export */ });
// import { HelperService } from 'src/app/helpers/helper-service.ts';
class BaseModel {
    constructor(requestJSON) {
        this.Name = (requestJSON["Name"] != null && requestJSON["Name"] != undefined) ? requestJSON["Name"] : "";
        this.Description = (requestJSON["Description"] != null && requestJSON["Description"] != undefined) ? requestJSON["Description"] : "";
        this.CreatedOn = (requestJSON["CreatedOn"] != null && requestJSON["CreatedOn"] != undefined) ? requestJSON["CreatedOn"] : "";
        this.UpdatedOn = (requestJSON["UpdatedOn"] != null && requestJSON["UpdatedOn"] != undefined) ? requestJSON["UpdatedOn"] : "";
        this.CreatedBy = (requestJSON["CreatedBy"] != null && requestJSON["CreatedBy"] != undefined) ? new BaseModel(requestJSON["CreatedBy"]) : null;
        this.UpdatedBy = (requestJSON["UpdatedBy"] != null && requestJSON["UpdatedBy"] != undefined) ? new BaseModel(requestJSON["UpdatedBy"]) : null;
        this.rowIndex = requestJSON["rowIndex"];
    }
    static getDefaultObject() {
        var defaultObject = new BaseModel(JSON);
        return defaultObject;
    }
}


/***/ }),

/***/ 5566:
/*!********************************************!*\
  !*** ./src/app/models/storedPreference.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoredPreference": () => (/* binding */ StoredPreference)
/* harmony export */ });
class StoredPreference {
    constructor(requestJSON) {
    }
}


/***/ }),

/***/ 5783:
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": () => (/* binding */ User)
/* harmony export */ });
/* harmony import */ var _BaseModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseModel */ 6198);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


class User extends _BaseModel__WEBPACK_IMPORTED_MODULE_0__.BaseModel {
    constructor(requestJSON) {
        super(requestJSON);
        this.FirstName = requestJSON["FirstName"];
        this.LastName = requestJSON["LastName"];
        this.UserName = requestJSON["UserName"];
        this.Email = requestJSON["Email"];
        this.Gender = requestJSON["Gender"];
        this.DateOfBirth = requestJSON["dateofbirth"];
        this.Role = requestJSON["Role"];
        this.PhoneNumber = requestJSON["PhoneNumber"];
        this.Status = requestJSON["Status"];
        this.StatusIcon = "/assets/icon/" + this.Status + ".png";
        this.Icon = "/assets/icon/" + this.Role + ".png";
        if (requestJSON["ResetRequired"] == "1") {
            this.ResetRequired = true;
        }
    }
    clear() {
        this.FirstName = "";
        this.LastName = "";
        this.UserName = "";
        this.Email = "";
        this.Gender = "";
        this.DateOfBirth = "";
        this.Role = "";
        this.PhoneNumber = "";
        this.Status = "";
        this.StatusIcon = "/assets/icon/" + this.Status + ".png";
    }
    ToCredentialsJSON() {
        this.UpdatedOn = (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.formatDate)(new Date(), 'dd-MM-yyyy hh:mm:ss', 'en-US', '+0530');
        return {
            "UserName": this.UserName,
            "Email": this.Email,
            "ResetRequired": true,
            "UpdatedOn": this.UpdatedOn
        };
    }
    ToProfileJSON() {
        return {
            "UserName": this.UserName,
            "Password": this.Password,
            "Email": this.Email,
            "PhoneNumber": this.PhoneNumber,
            "FirstName": this.FirstName,
            "LastName": this.LastName,
            "Gender": this.Gender,
            "rowIndex": this.rowIndex
        };
    }
}


/***/ }),

/***/ 6793:
/*!*******************************************************************!*\
  !*** ./src/app/services/Authentication/authentication.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationService": () => (/* binding */ AuthenticationService)
/* harmony export */ });
/* harmony import */ var C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _network_network_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../network/network.service */ 1947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _localStorage_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../localStorage/local-storage.service */ 8565);
/* harmony import */ var src_assets_constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/assets/constants/constants */ 5689);









const AUTH_TOKEN_KEY = 'Authorization';
const USER_LOGIN_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + '/sheets/Users?where={"UserName":"USER_NAME","Password":"PASSWORD"}';
let AuthenticationService = class AuthenticationService {
  constructor(localStorage, platform, networkService) {
    var _this = this;

    this.localStorage = localStorage;
    this.platform = platform;
    this.networkService = networkService;
    this.authenticationState = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(false);

    this.getAuthenticationStatus = /*#__PURE__*/function () {
      var _ref = (0,C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (status) {
        _this.localStorage.getItem(src_assets_constants_constants__WEBPACK_IMPORTED_MODULE_4__.KeywordConstants.LOGGED_IN_STATUS).then(res => {
          console.log("AuthenticationStatus: ", res);
          status(res);
        });
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    this.platform.ready().then(() => {
      this.checkToken();
    });
  }

  login(success) {
    this.localStorage.setItem(src_assets_constants_constants__WEBPACK_IMPORTED_MODULE_4__.KeywordConstants.LOGGED_IN_STATUS, true).then(res => {
      this.authenticationState.next(true);
      this.authenticationStatus = true;
      success();
    });
  }

  logout(success) {
    this.localStorage.setItem(src_assets_constants_constants__WEBPACK_IMPORTED_MODULE_4__.KeywordConstants.LOGGED_IN_STATUS, false).then(res => {
      this.authenticationState.next(false);
      this.authenticationStatus = false;
      this.localStorage.clear();
      success();
    });
  }

  isAuthenticated(success, failure) {
    this.localStorage.getItem(src_assets_constants_constants__WEBPACK_IMPORTED_MODULE_4__.KeywordConstants.LOGGED_IN_STATUS).then(res => {
      if (res != null && res != undefined) {
        this.authenticationState.next(true);
        this.authenticationStatus = true;
        success(true);
      } else {
        this.authenticationState.next(false);
        this.authenticationStatus = false;
        failure(false);
      }
    });
    return this.authenticationState.value;
  }

  checkToken() {
    this.isAuthenticated(result => {
      this.authenticationStatus = result;
    }, error => {
      this.authenticationStatus = false;
    });
  }

};

AuthenticationService.ctorParameters = () => [{
  type: _localStorage_local_storage_service__WEBPACK_IMPORTED_MODULE_3__.LocalStorageService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform
}, {
  type: _network_network_service__WEBPACK_IMPORTED_MODULE_1__.NetworkService
}];

AuthenticationService = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
  providedIn: 'root'
})], AuthenticationService);


/***/ }),

/***/ 5666:
/*!**********************************************************!*\
  !*** ./src/app/services/authGuard/auth-guard.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuardService": () => (/* binding */ AuthGuardService)
/* harmony export */ });
/* harmony import */ var C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _localStorage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../localStorage/local-storage.service */ 8565);





let AuthGuardService = class AuthGuardService {
  constructor(localStorageService, router) {
    this.localStorageService = localStorageService;
    this.router = router;
  }

  canActivate(route, state) {
    var _this = this;

    return (0,C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("canActivate: Route: ", state.url); //'candidates'

      if (_this.localStorageService != null) {
        if (!_this.localStorageService.StoredPreference.LoggedInStatus) {
          _this.router.navigate(['/login']);

          return false;
        }
      }
    })();
  }

  canActivateChild(childRoute, state) {
    console.log("canActivateChild: Route: ", state.url); //'candidates'
  }

};

AuthGuardService.ctorParameters = () => [{
  type: _localStorage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
}];

AuthGuardService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
  providedIn: 'root'
})], AuthGuardService);


/***/ }),

/***/ 8565:
/*!****************************************************************!*\
  !*** ./src/app/services/localStorage/local-storage.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalStorageService": () => (/* binding */ LocalStorageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ 9128);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/storage */ 190);
/* harmony import */ var src_app_models_storedPreference__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/storedPreference */ 5566);
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/user */ 5783);
/* harmony import */ var src_assets_constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/assets/constants/constants */ 5689);
/* harmony import */ var _platformService_platform_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../platformService/platform.service */ 3661);









let LocalStorageService = class LocalStorageService {
    constructor(platformService, nativeStorage, storage, platform) {
        this.platformService = platformService;
        this.nativeStorage = nativeStorage;
        this.storage = storage;
        this.platform = platform;
        this.StoredPreference = new src_app_models_storedPreference__WEBPACK_IMPORTED_MODULE_2__.StoredPreference(JSON.parse("{}"));
    }
    LoadStoredPreference(success) {
        this.getItem(src_assets_constants_constants__WEBPACK_IMPORTED_MODULE_4__.KeywordConstants.SELECTED_APP_LANGUAGE).then(selected_Language => {
            if (selected_Language == null) {
                this.getItem(src_assets_constants_constants__WEBPACK_IMPORTED_MODULE_4__.KeywordConstants.DEFAULT_APP_LANGUAGE).then(default_Language => {
                    this.StoredPreference.SelectedLanguage = default_Language;
                });
            }
            else {
                this.StoredPreference.SelectedLanguage = selected_Language;
            }
        });
        this.getItem(src_assets_constants_constants__WEBPACK_IMPORTED_MODULE_4__.KeywordConstants.LOGGED_IN_STATUS).then(loggedIn => {
            if (loggedIn != null) {
                this.StoredPreference.LoggedInStatus = loggedIn;
                if (loggedIn) {
                    //load User Object
                    this.getItem(src_assets_constants_constants__WEBPACK_IMPORTED_MODULE_4__.KeywordConstants.USER_OBJECT).then(userInfo => {
                        this.StoredPreference.LoggedInUser = new src_app_models_user__WEBPACK_IMPORTED_MODULE_3__.User(userInfo);
                        this.StoredPreference.LoggedInUserRowIndex = this.StoredPreference.LoggedInUser.rowIndex;
                        this.StoredPreference.LoggedInUserName = this.StoredPreference.LoggedInUser.UserName;
                        this.StoredPreference.LoggedInUserEmail = this.StoredPreference.LoggedInUser.Email;
                        success();
                    });
                }
                else {
                    this.CreateAndAssigneEmptyUser();
                    success();
                }
            }
            else {
                this.StoredPreference.LoggedInStatus = false;
                this.CreateAndAssigneEmptyUser();
                success();
            }
        });
    }
    CreateAndAssigneEmptyUser() {
        this.StoredPreference.LoggedInUser = new src_app_models_user__WEBPACK_IMPORTED_MODULE_3__.User(JSON.parse("{}"));
        this.StoredPreference.LoggedInUserRowIndex = -1;
        this.StoredPreference.LoggedInUserEmail = "";
        this.StoredPreference.LoggedInUserName = "";
    }
    SaveStoredPreference() {
    }
    setItem(key, value) {
        if (this.platformService.currentPlatform === 'native') {
            return this.nativeStorage.setItem(key, value);
        }
        else {
            return this.storage.set(key, value);
        }
    }
    getItem(key) {
        if (this.platformService.currentPlatform === 'native') {
            return this.nativeStorage.getItem(key);
        }
        else {
            return this.storage.get(key);
        }
    }
    clear() {
        if (this.platformService.currentPlatform === 'native') {
            this.nativeStorage.clear().then(() => {
                console.log('Local Storage Cleared');
            });
        }
        else {
            this.storage.clear().then(() => {
                console.log('Local Storage Cleared');
            });
        }
    }
};
LocalStorageService.ctorParameters = () => [
    { type: _platformService_platform_service__WEBPACK_IMPORTED_MODULE_5__.PlatformService },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_0__.NativeStorage },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_1__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform }
];
LocalStorageService = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
        providedIn: 'root'
    })
], LocalStorageService);



/***/ }),

/***/ 1947:
/*!*****************************************************!*\
  !*** ./src/app/services/network/network.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkService": () => (/* binding */ NetworkService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-block-ui */ 7247);
/* harmony import */ var src_assets_constants_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/assets/constants/constants */ 5689);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* eslint-disable max-len */







let NetworkService = class NetworkService {
    constructor(alertController, httpClient) {
        this.alertController = alertController;
        this.httpClient = httpClient;
        this.token = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_KEY;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
        this.headers.set("Source", "IONIC");
        this.headers.set(src_assets_constants_constants__WEBPACK_IMPORTED_MODULE_1__.KeywordConstants.AUTH_TOKEN_KEY, 'Bearer ' + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.READ_ONLY_API_KEY);
        this.headers.set("X-Spreadsheet-Id", src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.SpreadsheetId);
    }
    get(url, success, failure) {
        this.blockFormInstanceUI.start();
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set(src_assets_constants_constants__WEBPACK_IMPORTED_MODULE_1__.KeywordConstants.AUTH_TOKEN_KEY, 'Bearer ' + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.READ_ONLY_API_KEY); // create header object
        headers = headers.append(src_assets_constants_constants__WEBPACK_IMPORTED_MODULE_1__.KeywordConstants.SPREADSHEET_ID_KEY, src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.SpreadsheetId); // add a new header, creating a new object
        headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded;application/json');
        this.httpClient.get(url, { headers }).subscribe(data => {
            success(data);
        }, error => {
            failure('Log the error here: ', error);
        });
    }
    post(url, data, success, failure) {
        this.blockFormInstanceUI.start();
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set(src_assets_constants_constants__WEBPACK_IMPORTED_MODULE_1__.KeywordConstants.AUTH_TOKEN_KEY, 'Bearer ' + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_KEY);
        if (url.indexOf("sheets/Users") > -1) {
            headers = headers.append(src_assets_constants_constants__WEBPACK_IMPORTED_MODULE_1__.KeywordConstants.SPREADSHEET_ID_KEY, src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.SpreadSheetIdUser);
        }
        else {
            headers = headers.append(src_assets_constants_constants__WEBPACK_IMPORTED_MODULE_1__.KeywordConstants.SPREADSHEET_ID_KEY, src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.SpreadsheetId);
        }
        headers = headers.append('Content-Type', 'application/json');
        this.httpClient.post(url, data, { headers }).subscribe(response => {
            success(response);
        }, error => {
            failure('Log the error here: ', error);
        });
    }
    postFormData(url, data, success, failure) {
        this.blockFormInstanceUI.start();
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set(src_assets_constants_constants__WEBPACK_IMPORTED_MODULE_1__.KeywordConstants.AUTH_TOKEN_KEY, 'Bearer ' + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_KEY);
        if (url.indexOf("sheets/Users") > -1) {
            headers = headers.append(src_assets_constants_constants__WEBPACK_IMPORTED_MODULE_1__.KeywordConstants.SPREADSHEET_ID_KEY, src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.SpreadSheetIdUser);
        }
        else {
            headers = headers.append(src_assets_constants_constants__WEBPACK_IMPORTED_MODULE_1__.KeywordConstants.SPREADSHEET_ID_KEY, src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.SpreadsheetId);
        }
        this.httpClient.post(url, data, { headers: headers }).subscribe(response => {
            success(response);
        }, error => {
            failure('Log the error here: ', error);
        });
    }
    patch(url, data, success, failure) {
        this.blockFormInstanceUI.start();
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set(src_assets_constants_constants__WEBPACK_IMPORTED_MODULE_1__.KeywordConstants.AUTH_TOKEN_KEY, 'Bearer ' + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_KEY); // create header object
        if (url.indexOf("sheets/Users") > -1) {
            headers = headers.append(src_assets_constants_constants__WEBPACK_IMPORTED_MODULE_1__.KeywordConstants.SPREADSHEET_ID_KEY, src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.SpreadSheetIdUser);
        }
        else {
            headers = headers.append(src_assets_constants_constants__WEBPACK_IMPORTED_MODULE_1__.KeywordConstants.SPREADSHEET_ID_KEY, src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.SpreadsheetId);
        }
        headers = headers.append("Content-Type", "application/json;");
        this.httpClient.patch(url, data, { headers: headers }).subscribe(response => {
            success(response);
        }, error => {
            failure('Log the error here: ', error);
        });
    }
    delete(url, data, success, failure) {
        this.blockFormInstanceUI.start();
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set(src_assets_constants_constants__WEBPACK_IMPORTED_MODULE_1__.KeywordConstants.AUTH_TOKEN_KEY, 'Bearer ' + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_KEY); // create header object
        if (url.indexOf("sheets/Users") > -1) {
            headers = headers.append(src_assets_constants_constants__WEBPACK_IMPORTED_MODULE_1__.KeywordConstants.SPREADSHEET_ID_KEY, src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.SpreadSheetIdUser);
        }
        else {
            headers = headers.append(src_assets_constants_constants__WEBPACK_IMPORTED_MODULE_1__.KeywordConstants.SPREADSHEET_ID_KEY, src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.SpreadsheetId);
        }
        headers = headers.append('Content-Type', 'application/json');
        this.httpClient.delete(url, { headers: headers }).subscribe(response => {
            success(response);
        }, error => {
            failure('Log the error here: ', error);
        });
    }
    put(url, data, success, failure) {
        this.blockFormInstanceUI.start();
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set(src_assets_constants_constants__WEBPACK_IMPORTED_MODULE_1__.KeywordConstants.AUTH_TOKEN_KEY, 'Bearer ' + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_KEY); // create header object
        if (url.indexOf("sheets/Users") > -1) {
            headers = headers.append(src_assets_constants_constants__WEBPACK_IMPORTED_MODULE_1__.KeywordConstants.SPREADSHEET_ID_KEY, src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.SpreadSheetIdUser); // add a new header, creating a new object
        }
        else {
            headers = headers.append(src_assets_constants_constants__WEBPACK_IMPORTED_MODULE_1__.KeywordConstants.SPREADSHEET_ID_KEY, src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.SpreadsheetId); // add a new header, creating a new object
        }
        headers = headers.append('Content-Type', 'application/json');
        this.httpClient.put(url, data, { headers }).subscribe(response => {
            success(response);
        }, error => {
            failure('Log the error here: ', error);
        });
    }
};
NetworkService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,ng_block_ui__WEBPACK_IMPORTED_MODULE_5__.BlockUI)("CreateFormInstance")
], NetworkService.prototype, "blockFormInstanceUI", void 0);
NetworkService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    })
], NetworkService);



/***/ }),

/***/ 3661:
/*!**************************************************************!*\
  !*** ./src/app/services/platformService/platform.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlatformService": () => (/* binding */ PlatformService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ 3819);



let PlatformService = class PlatformService {
    constructor(platform) {
        this.platform = platform;
        this.setCurrentPlatform();
    }
    get currentPlatform() {
        return this._currentPlatform;
    }
    isNative() {
        return this._currentPlatform === 'native';
    }
    isBrowser() {
        return this._currentPlatform === 'browser';
    }
    setCurrentPlatform() {
        // Are we on mobile platform? Yes if platform is ios or android, but not desktop or mobileweb, no otherwise
        if (this.platform.is('ios')
            || this.platform.is('android')
                && !(this.platform.is('desktop') || this.platform.is('mobileweb'))) {
            this._currentPlatform = 'native';
        }
        else {
            this._currentPlatform = 'browser';
        }
    }
};
PlatformService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_0__.Platform }
];
PlatformService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], PlatformService);



/***/ }),

/***/ 5689:
/*!*******************************************!*\
  !*** ./src/assets/constants/constants.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeywordConstants": () => (/* binding */ KeywordConstants)
/* harmony export */ });
class KeywordConstants {
}
KeywordConstants.AUTH_TOKEN_KEY = 'Authorization';
KeywordConstants.SPREADSHEET_ID_KEY = "X-Spreadsheet-Id";
KeywordConstants.LOGGED_IN_STATUS = 'SIGN_IN_STATUS';
KeywordConstants.USER_NAME = 'USER_NAME';
KeywordConstants.USER_PASSWORD = 'USER_PASSWORD';
KeywordConstants.USER_OBJECT = 'USER_OBJECT';
KeywordConstants.USER_EMAIL = 'USER_EMAIL';
KeywordConstants.USER_ROW_INDEX = 'ROW_INDEX';
//APP Language
KeywordConstants.LOCALIZATION_ENABLED = "LOCALIZATION_ENABLED";
KeywordConstants.SELECTED_APP_LANGUAGE = "SELECTED_APP_LANGUAGE";
KeywordConstants.DEFAULT_APP_LANGUAGE = "DEFAULT_APP_LANGUAGE";


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    appScriptApiURL: "https://script.google.com/macros/s/AKfycbyNal0n0oXvAvpoqFQafh8fqW0PWvRks3MMXzKc-nwdWJgvG1Tp9a6zsw2Lz6Ra6C-Q/exec",
    apiURL: "https://api.sheetson.com/v2",
    SpreadsheetId: "1_bmjuSdIIplZFoxC-KBo07K-pN2JdFjCVbZ8xBOT6Vs",
    API_KEY: "a12CggCXY2xz4uLUCDf1pvhz11tPCUnQIKkSuoiwgvUoNaYCqNRLxkrIFUk",
    READ_ONLY_API_KEY: "Zrki4QKE-xByViSw9QKU29aE4fjpbPajNZbp9wohRMVC7XcQAQSzZXioMETwNQ",
    SpreadSheetIdUser: "1cev1MvnzvRq25WrMlBbAfcbNUDnhVKdVUzHum5s2lNU",
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 6057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		7950,
		"default-node_modules_ionic_core_dist_esm_parse-9a48ce79_js-node_modules_ionic_core_dist_esm_t-36d8fd",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"default-node_modules_ionic_core_dist_esm_parse-9a48ce79_js-node_modules_ionic_core_dist_esm_t-36d8fd",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 9259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\r\n  \r\n<ion-router-outlet></ion-router-outlet>\r\n</ion-app>\r\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map