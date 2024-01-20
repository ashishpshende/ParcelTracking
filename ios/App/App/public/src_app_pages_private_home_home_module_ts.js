"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_private_home_home_module_ts"],{

/***/ 7219:
/*!***********************************************************!*\
  !*** ./src/app/pages/private/home/home-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_authGuard_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/authGuard/auth-guard.service */ 5666);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 5186);

/* eslint-disable max-len */




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage,
        canActivate: [src_app_services_authGuard_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService],
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_private_home_dashboard_dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/dashboard.module */ 8449)).then(m => m.DashboardPageModule),
                canActivate: [src_app_services_authGuard_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService],
            },
            {
                path: 'search-vehicle',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_vehicle_vehicle_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_private_Vehicles_search-vehicle_search-vehicle_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../Vehicles/search-vehicle/search-vehicle.module */ 8567)).then(m => m.SearchVehiclePageModule),
                canActivate: [src_app_services_authGuard_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService],
            },
            {
                path: 'user-list',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_private_UAM_user-list_user-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../UAM/user-list/user-list.module */ 2794)).then(m => m.UserListPageModule),
                canActivate: [src_app_services_authGuard_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService],
            },
            {
                path: 'visualization',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_vehicle_vehicle_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_private_visualization_visualization_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../visualization/visualization.module */ 44)).then(m => m.VisualizationPageModule),
                canActivate: [src_app_services_authGuard_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService],
            },
            {
                path: 'create-user',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_private_UAM_create-user_create-user_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../UAM/create-user/create-user.module */ 5517)).then(m => m.CreateUserPageModule)
            },
            {
                path: 'update-user',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_private_UAM_update-user_update-user_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../UAM/update-user/update-user.module */ 1123)).then(m => m.UpdateUserPageModule),
                canActivate: [src_app_services_authGuard_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService],
            },
            {
                path: 'user-details',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_private_UAM_user-details_user-details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../UAM/user-details/user-details.module */ 3426)).then(m => m.UserDetailsPageModule),
                canActivate: [src_app_services_authGuard_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService],
            },
            {
                path: 'vehicle-list',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_vehicle_vehicle_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_private_Vehicles_vehicle-list_vehicle-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../Vehicles/vehicle-list/vehicle-list.module */ 5750)).then(m => m.VehicleListPageModule),
                canActivate: [src_app_services_authGuard_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService],
            },
            {
                path: 'lookup-list',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_vehicle_vehicle_service_ts"), __webpack_require__.e("default-src_app_pages_private_lookup_lookup-list_lookup-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../lookup/lookup-list/lookup-list.module */ 7966)).then(m => m.LookupListPageModule),
                canActivate: [src_app_services_authGuard_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService],
            },
            {
                path: 'create-lookup',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_vehicle_vehicle_service_ts"), __webpack_require__.e("default-src_app_pages_private_lookup_create-lookup_create-lookup_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../lookup/create-lookup/create-lookup.module */ 5179)).then(m => m.CreateLookupPageModule),
                canActivate: [src_app_services_authGuard_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService],
            },
            {
                path: 'update-lookup',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_vehicle_vehicle_service_ts"), __webpack_require__.e("default-src_app_pages_private_lookup_update-lookup_update-lookup_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../lookup/update-lookup/update-lookup.module */ 4106)).then(m => m.UpdateLookupPageModule),
                canActivate: [src_app_services_authGuard_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService],
            },
            {
                path: 'search-results-vehicle-list',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_vehicle_vehicle_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_private_Vehicles_search-results-vehicle-list_search-results-vehicle-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../Vehicles/search-results-vehicle-list/search-results-vehicle-list.module */ 5860)).then(m => m.SearchResultsVehicleListPageModule),
                canActivate: [src_app_services_authGuard_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService],
            },
            {
                path: 'create-vehicle',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_private_Vehicles_create-vehicle_create-vehicle_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../Vehicles/create-vehicle/create-vehicle.module */ 5941)).then(m => m.CreateVehiclePageModule),
                canActivate: [src_app_services_authGuard_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService],
            },
            {
                path: 'update-vehicle',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_vehicle_vehicle_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_private_Vehicles_update-vehicle_update-vehicle_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../Vehicles/update-vehicle/update-vehicle.module */ 3078)).then(m => m.UpdateVehiclePageModule),
                canActivate: [src_app_services_authGuard_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService],
            },
            {
                path: 'vehicle-details',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_vehicle_vehicle_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_private_Vehicles_vehicle-details_vehicle-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../Vehicles/vehicle-details/vehicle-details.module */ 5323)).then(m => m.VehicleDetailsPageModule),
                canActivate: [src_app_services_authGuard_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService],
            },
            {
                path: 'settings',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_vehicle_vehicle_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_private_settings_settings_settings_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../settings/settings/settings.module */ 4180)).then(m => m.SettingsPageModule),
                canActivate: [src_app_services_authGuard_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService],
            }
        ]
    },
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 701:
/*!***************************************************!*\
  !*** ./src/app/pages/private/home/home.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 7219);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 5186);








let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule.forChild()
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 5186:
/*!*************************************************!*\
  !*** ./src/app/pages/private/home/home.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.html?ngResource */ 5789);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 3754);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user/user.service */ 9709);
/* harmony import */ var _services_language_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/language/language.service */ 3469);
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/user */ 5783);
/* harmony import */ var _resources_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../resources/routes */ 9517);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var ng_event_bus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-event-bus */ 2735);
/* harmony import */ var src_app_services_localStorage_local_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/localStorage/local-storage.service */ 8565);
/* harmony import */ var src_app_services_Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/Authentication/authentication.service */ 6793);




/* eslint-disable max-len */












let HomePage = class HomePage {
  constructor(router, authenticationService, alertController, translateService, localStorageService, userService, languageService, eventBus) {
    this.router = router;
    this.authenticationService = authenticationService;
    this.alertController = alertController;
    this.translateService = translateService;
    this.localStorageService = localStorageService;
    this.userService = userService;
    this.languageService = languageService;
    this.eventBus = eventBus;
    this.loggedInUser = new src_app_models_user__WEBPACK_IMPORTED_MODULE_5__.User(JSON.parse("{}"));
    this.routes = new _resources_routes__WEBPACK_IMPORTED_MODULE_6__.Routes();
    this.userFullName = "";
    this.userName = "";
    this.userEmail = "";
    this.avatarIcon = '/assets/img/user/default-male.png';
    this.appPages = [{
      identifier: 'dashboard',
      title: this.translateService.instant('HOME_PAGE.PAGE_TITLE'),
      url: '/home/dashboard',
      icon: 'home-sharp'
    }];
    this.labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
    this.loggedInUser = new src_app_models_user__WEBPACK_IMPORTED_MODULE_5__.User(JSON.parse("{}"));
    this.router.events.subscribe(state => {
      if (state["url"] != null && state["url"] != undefined) {
        var states = state["url"].split('/');
        var key = this.routes.routes[states[states.length - 1].split('?')[0]];
        if (key == undefined || key == null) key = 'HOME_PAGE.PAGE_TITLE';
        this.currentPageTitle = this.translateService.instant(key);
      }
    });
    this.router.events.forEach(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_9__.NavigationEnd) {
        this.serveBasedOnUserRole();
      }
    });
  } //Page Life Cycle


  ngOnInit() {}

  ngAfterViewInit() {
    this.loadLocalUser();
  }

  loadLocalUser() {
    this.loggedInUser = this.localStorageService.StoredPreference.LoggedInUser;
    this.userFullName = this.loggedInUser.FirstName + " " + this.loggedInUser.LastName;
    this.userName = this.loggedInUser.UserName;
    this.userEmail = this.loggedInUser.Email;
    this.avatarIcon = this.loggedInUser.Gender === 'Male' ? '/assets/img/user/default-male.png' : '/assets/img/user/default-female.png';
  }

  menuButtonClicked() {
    this.serveBasedOnUserRole();
  }

  serveBasedOnUserRole() {
    this.loadLocalUser();
    this.appPages = [{
      identifier: 'dashboard',
      title: this.translateService.instant('HOME_PAGE.PAGE_TITLE'),
      url: '/home/dashboard',
      icon: 'home-sharp'
    }];

    if (this.loggedInUser.Role === 'SuperAdmin') {
      this.appPages.push({
        identifier: 'vehicle',
        title: this.translateService.instant('PARCELS_PAGE.PAGE_TITLE'),
        url: '/home/vehicle-list',
        icon: 'car-sharp'
      });
      this.appPages.push({
        identifier: 'user',
        title: this.translateService.instant('USERS_PAGE.PAGE_TITLE'),
        url: '/home/user-list',
        icon: 'person-sharp'
      });
      this.appPages.push({
        identifier: 'createvehicle',
        title: this.translateService.instant('DASHBOARD.ADD_PARCEL'),
        url: '/home/create-vehicle',
        icon: 'add-sharp'
      });
      this.appPages.push({
        identifier: 'visualization',
        title: this.translateService.instant('REPORTS.PAGE_TITLE'),
        url: '/home/visualization',
        icon: 'pie-chart-outline'
      });
      this.appPages.push({
        identifier: 'schedulesearch',
        title: this.translateService.instant('SCHEDULED_SEARCH_PAGE.PAGE_TITLE'),
        url: '/home/lookup-list',
        icon: 'search-circle-outline'
      });
    }

    if (this.loggedInUser.Role === 'Admin') {
      this.appPages.push({
        identifier: 'vehicle',
        title: this.translateService.instant('PARCELS_PAGE.PAGE_TITLE'),
        url: '/home/vehicle-list',
        icon: 'car-sharp'
      });
      this.appPages.push({
        identifier: 'createvehicle',
        title: this.translateService.instant('DASHBOARD.ADD_PARCEL'),
        url: '/home/create-vehicle',
        icon: 'add-sharp'
      });
      this.appPages.push({
        identifier: 'schedulesearch',
        title: this.translateService.instant('SCHEDULED_SEARCH_PAGE.PAGE_TITLE'),
        url: '/home/lookup-list',
        icon: 'search-circle-outline'
      });
    }

    if (this.loggedInUser.Role === 'User') {
      this.appPages.push({
        identifier: 'createvehicle',
        title: this.translateService.instant('DASHBOARD.ADD_PARCEL'),
        url: '/home/create-vehicle',
        icon: 'add-sharp'
      });
    }
  } //Event Handlers


  MenuItemClicked(title, link) {
    this.translateService.get(title, response => {
      this.currentPageTitle = response;
    });
    let navigationExtras = {
      queryParams: {
        ts: new Date().getMilliseconds()
      }
    };
    this.router.navigate([link], navigationExtras);
  }

  LogoutMenuItemClicked() {
    var _this = this;

    return (0,C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        cssClass: 'language-alert-class',
        header: _this.languageService.translate("BUTTONS.LOGOUT"),
        message: _this.languageService.translate("MESSAGES.LOGOUT_CONFIRM_MESSAGE"),
        buttons: [{
          text: _this.languageService.translate("BUTTONS.CANCEL"),
          role: 'cancel',
          cssClass: 'secondary',
          handler: result => {}
        }, {
          cssClass: 'primary',
          text: _this.languageService.translate("BUTTONS.LOGOUT"),
          handler: result => {
            _this.userService.logout(success => {
              _this.router.navigate(['login']);
            });
          }
        }]
      });
      yield alert.present();
    })();
  }

  ShareMenuItemClicked() {
    var _this2 = this;

    return (0,C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this2.alertController.create({
        cssClass: 'language-alert-class',
        header: _this2.languageService.translate("BUTTONS.SHARE"),
        message: _this2.languageService.translate("MESSAGES.SHARE_CONFIRM_MESSAGE"),
        buttons: [{
          text: _this2.languageService.translate("BUTTONS.CANCEL"),
          role: 'cancel',
          cssClass: 'secondary',
          handler: result => {}
        }, {
          cssClass: 'primary',
          text: _this2.languageService.translate("BUTTONS.OK"),
          handler: result => {}
        }]
      });
      yield alert.present();
    })();
  }

  SettingMenuItemClicked() {
    let navigationExtras = {
      queryParams: {
        ts: new Date().getMilliseconds()
      }
    };
    this.router.navigate(['/home/settings'], navigationExtras);
  }

  PrivacyPolicyLinkClicked() {
    this.router.navigate(['/privacy-policy']);
  }

  AboutUsLinkClicked() {
    this.router.navigate(['/about-us']);
  }

  userProfileClicked() {
    const navigationExtras = {
      queryParams: {
        ts: new Date().getMilliseconds()
      }
    };
    this.router.navigate(['view-user-profile'], navigationExtras);
  }

};

HomePage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
}, {
  type: src_app_services_Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_8__.AuthenticationService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService
}, {
  type: src_app_services_localStorage_local_storage_service__WEBPACK_IMPORTED_MODULE_7__.LocalStorageService
}, {
  type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService
}, {
  type: _services_language_language_service__WEBPACK_IMPORTED_MODULE_4__.LanguageService
}, {
  type: ng_event_bus__WEBPACK_IMPORTED_MODULE_12__.NgEventBus
}];

HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: 'app-home',
  template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], HomePage);


/***/ }),

/***/ 9517:
/*!*********************************!*\
  !*** ./src/resources/routes.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Routes": () => (/* binding */ Routes)
/* harmony export */ });
class Routes {
    constructor() {
        this.routes = {};
        this.routes =
            {
                "dashboard": "HOME_PAGE.PAGE_TITLE",
                "REPORTS": "DASHBOARD.VISUALIZATION",
                "create-user": "USER_CREATE.PAGE_TITLE",
                "create-vehicle": "PARCEL_CREATE.PAGE_TITLE",
                "vehicle-list": "PARCELS_PAGE.PAGE_TITLE",
                "search-vehicle": "APP_TITLE",
                "user-list": "USERS_PAGE.PAGE_TITLE",
                "settings": "SETTINGS_PAGE.PAGE_TITLE",
                "lookup-list": "SCHEDULED_SEARCH_PAGE.PAGE_TITLE",
                "create-lookup": "CREATE_LOOKUP_PAGE.PAGE_TITLE",
            };
    }
}


/***/ }),

/***/ 3754:
/*!**************************************************************!*\
  !*** ./src/app/pages/private/home/home.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = ":host ion-menu {\n  --background: url(\"/assets/bg20.JPG\") 0 0/100% 100% no-repeat ;\n  background-color: azure;\n  background-size: cover;\n}\n\n.toolbar-backgorund {\n  background-color: aliceblue;\n}\n\n.user-profile-pic {\n  width: 60px;\n  height: 60px;\n  display: block;\n  margin-top: 20px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n  --background: none;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n  background: none;\n  color: rgb(14, 0, 0);\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: rgb(8, 0, 0);\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: rgb(8, 0, 0);\n}\n\nion-menu.md ion-item {\n  background: none;\n}\n\nion-menu.md ion-item ion-icon {\n  color: rgb(5, 0, 0);\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n  color: rgb(8, 0, 0);\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\np {\n  color: black;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: black;\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: black;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: black;\n}\n\nion-item.selected {\n  color: black;\n}\n\nion-card {\n  color: black;\n  padding: 0px;\n  margin: 0px;\n  border-radius: 0px;\n}\n\nion-card-content {\n  --background: linear-gradient(180deg, var(--ion-color-dark), var(--ion-color-medium-contrast));\n  color: black;\n}\n\nbutton {\n  background: none;\n  color: black;\n  text-decoration: underline;\n}\n\n.profile-name {\n  font-size: 18px;\n  color: black;\n}\n\n.profile-user-name {\n  font-size: 12px;\n  color: black;\n}\n\n.profile-user-email {\n  font-size: 12px;\n  color: darkgray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0UsOERBQUE7RUFDQSx1QkFBQTtFQUdBLHNCQUFBO0FBQU47O0FBS0U7RUFHQywyQkFBQTtBQUpIOztBQU1FO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBSEo7O0FBTUU7RUFFRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBSko7O0FBT0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQUpKOztBQVFFO0VBQ0UsbUJBQUE7QUFMSjs7QUFRRTs7RUFFRSxrQkFBQTtBQUxKOztBQVFFO0VBQ0UsMkRBQUE7QUFMSjs7QUFRRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0FBTko7O0FBU0U7RUFDRSxlQUFBO0VBRUEsbUJBQUE7RUFFQSxtQkFBQTtFQUVBLGdCQUFBO0FBVEo7O0FBWUU7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFUSjs7QUFZRTtFQUNFLHNEQUFBO0FBVEo7O0FBWUU7RUFDRSxtQkFBQTtBQVRKOztBQVlFO0VBRUUsZ0JBQUE7QUFWSjs7QUFZRTtFQUNFLG1CQUFBO0FBVEo7O0FBWUU7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBVEo7O0FBWUU7RUFDRSxzQkFBQTtBQVRKOztBQVlFO0VBQ0UsbUJBQUE7QUFUSjs7QUFZRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUFUSjs7QUFZRTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQVRKOztBQVlFO0VBQ0UsWUFBQTtBQVRKOztBQVlFO0VBQ0UsWUFBQTtBQVRKOztBQVlFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUFUSjs7QUFZRTtFQUNFLGtCQUFBO0FBVEo7O0FBYUU7O0VBRUUsa0JBQUE7RUFDQSxtQkFBQTtBQVZKOztBQWFFO0VBQ0Usa0JBQUE7QUFWSjs7QUFhRTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUVBLFlBQUE7QUFYSjs7QUFjRTtFQUNFLFlBQUE7QUFYSjs7QUFhRTtFQUVFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBWEo7O0FBYUU7RUFDRSw4RkFBQTtFQUNBLFlBQUE7QUFWSjs7QUFZRTtFQUVFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FBVko7O0FBWUU7RUFFRSxlQUFBO0VBQ0EsWUFBQTtBQVZKOztBQWFFO0VBRUUsZUFBQTtFQUNBLFlBQUE7QUFYSjs7QUFjRTtFQUVFLGVBQUE7RUFDQSxlQUFBO0FBWkoiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBpb24tbWVudSAge1xyXG4gICAgICAtLWJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvYmcyMC5KUEdcIikgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQgO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcclxuICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB9XHJcblxyXG5cclxuICB9XHJcbiAgLnRvb2xiYXItYmFja2dvcnVuZCAge1xyXG4gIC8vICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLWlvbi1jb2xvci1kYXJrKSwgdmFyKC0taW9uLWNvbG9yLWRhcmspKTtcclxuICAgLy8gY29sb3I6IHJnYigyNTMsIDI1MywgMjUzKTtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG4gIH1cclxuICAudXNlci1wcm9maWxlLXBpY3tcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICBpb24tbWVudS5tZCBpb24tY29udGVudCB7XHJcbiAgICAvL2JhY2tncm91bmQtY29sb3I6IGxpZ2h0c2FsbW9uO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA4cHg7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgIC0tYmFja2dyb3VuZDogbm9uZTtcclxuICB9XHJcblxyXG4gIGlvbi1tZW51Lm1kIGlvbi1saXN0IHtcclxuICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBjb2xvcjogcmdiKDE0LCAwLCAwKTtcclxuXHJcbiAgfVxyXG5cclxuICBpb24tbWVudS5tZCBpb24tbm90ZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIH1cclxuXHJcbiAgaW9uLW1lbnUubWQgaW9uLWxpc3QtaGVhZGVyLFxyXG4gIGlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICB9XHJcblxyXG4gIGlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3Qge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgI2Q3ZDhkYSk7XHJcbiAgfVxyXG5cclxuICBpb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IGlvbi1saXN0LWhlYWRlciB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG5cclxuICAgIG1pbi1oZWlnaHQ6IDIwcHg7XHJcbiAgfVxyXG5cclxuICBpb24tbWVudS5tZCBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG5cclxuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcblxyXG4gICAgY29sb3I6IHJnYig4LCAwLCAwKTtcclxuXHJcbiAgICBtaW4taGVpZ2h0OiAyNnB4O1xyXG4gIH1cclxuXHJcbiAgaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB9XHJcblxyXG4gIGlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIHtcclxuICAgIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE0KTtcclxuICB9XHJcblxyXG4gIGlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcclxuICAgIGNvbG9yOiByZ2IoOCwgMCwgMCk7XHJcblxyXG4gIH1cclxuICBpb24tbWVudS5tZCBpb24taXRlbVxyXG4gIHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgfVxyXG4gIGlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1pY29uIHtcclxuICAgIGNvbG9yOiByZ2IoNSwgMCwgMClcclxuICB9XHJcblxyXG4gIGlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1sYWJlbCB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6IHJnYig4LCAwLCAwKTtcclxuICB9XHJcblxyXG4gIGlvbi1tZW51LmlvcyBpb24tY29udGVudCB7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgaW9uLW1lbnUuaW9zIGlvbi1saXN0IHtcclxuICAgIHBhZGRpbmc6IDIwcHggMCAwIDA7XHJcbiAgfVxyXG5cclxuICBpb24tbWVudS5pb3MgaW9uLW5vdGUge1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgaW9uLW1lbnUuaW9zIGlvbi1pdGVtIHtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTZweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDE2cHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcblxyXG4gIGlvbi1tZW51LmlvcyBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG5cclxuICBpb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuXHJcbiAgaW9uLW1lbnUuaW9zIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgfVxyXG5cclxuXHJcbiAgaW9uLW1lbnUuaW9zIGlvbi1saXN0LWhlYWRlcixcclxuICBpb24tbWVudS5pb3MgaW9uLW5vdGUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcclxuICB9XHJcblxyXG4gIGlvbi1tZW51LmlvcyBpb24tbm90ZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgfVxyXG5cclxuICBpb24tbm90ZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcblxyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuXHJcbiAgaW9uLWl0ZW0uc2VsZWN0ZWQge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICBpb24tY2FyZHtcclxuICAgIC8vLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1pb24tY29sb3ItZGFyayksIHZhcigtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QpKTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gIH1cclxuICBpb24tY2FyZC1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1pb24tY29sb3ItZGFyayksIHZhcigtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QpKTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgYnV0dG9uXHJcbiAge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZSA7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICB9XHJcbiAgLnByb2ZpbGUtbmFtZVxyXG4gIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuXHJcbiAgfVxyXG4gIC5wcm9maWxlLXVzZXItbmFtZVxyXG4gIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuXHJcbiAgfVxyXG4gIC5wcm9maWxlLXVzZXItZW1haWxcclxuICB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogZGFya2dyYXk7XHJcbiAgfVxyXG4iXX0= */";

/***/ }),

/***/ 5789:
/*!**************************************************************!*\
  !*** ./src/app/pages/private/home/home.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n\r\n  <div id=\"pieChart \">\r\n    </div>\r\n  <ion-toolbar class=\"toolbar-backgorund\">\r\n    <ion-buttons id=\"content\" slot=\"start\">\r\n      <ion-menu-button menuId=\"first\" (click)=\"menuButtonClicked()\" class=\"button\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"text-center\">\r\n      {{currentPageTitle}}\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-menu type=\"overlay\" contentId=\"content\" slot=\"start\" menuId=\"first\">\r\n  <ion-header>\r\n    <ion-toolbar (click)=\"userProfileClicked()\" class=\"toolbar-backgorund\">\r\n        <ion-item>\r\n          <ion-avatar slot=\"start\">\r\n            <img src={{this.avatarIcon}}/>\r\n          </ion-avatar>\r\n          <ion-label>\r\n            <h3 class=\"profile-name\">{{this.userFullName}}</h3>\r\n            <p class=\"profile-user-name\">@{{this.userName}}</p>\r\n            <p class=\"profile-user-email\"><ion-icon name=\"mail\"></ion-icon>{{this.userEmail}}</p>\r\n          </ion-label>\r\n        </ion-item>\r\n  </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content>\r\n    <ion-list>\r\n      <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages\">\r\n        <ion-item [id]=\"'p.identifier'\" [routerDirection]=\"'root'\" (click)=\"MenuItemClicked(p.title,p.url)\">\r\n          <ion-icon slot=\"start\" [name]=\"p.icon\"></ion-icon>\r\n          <ion-label>\r\n          {{p.title}}\r\n          </ion-label>\r\n        </ion-item>\r\n        <!-- <ion-item *ngIf=\"loggedInUser.Role ==='SuperAdmin'\" [routerDirection]=\"'root'\" (click)=\"MenuItemClicked('Users','/home/user-list')\">\r\n          <ion-icon slot=\"start\" name=\"person-sharp\"></ion-icon>\r\n          <ion-label>\r\n          {{'USERS_PAGE.PAGE_TITLE' | translate}}\r\n          </ion-label>\r\n        </ion-item> -->\r\n      </ion-menu-toggle>\r\n    </ion-list>\r\n  </ion-content>\r\n  <ion-list>\r\n    <ion-menu-toggle auto-hide=\"false\" >\r\n      <ion-item [routerDirection]=\"'root'\" class=\"cursor-pointer\" (click)=\"SettingMenuItemClicked()\">\r\n        <ion-icon  slot=\"start\" name=\"cog-outline\"></ion-icon>\r\n        <ion-label>{{'SETTINGS_PAGE.PAGE_TITLE' | translate}}</ion-label>\r\n      </ion-item>\r\n    </ion-menu-toggle>\r\n  <ion-menu-toggle auto-hide=\"false\" >\r\n    <ion-item [routerDirection]=\"'root'\" class=\"cursor-pointer\" (click)=\"LogoutMenuItemClicked()\">\r\n      <ion-icon slot=\"start\" name=\"log-out\"></ion-icon>\r\n      <ion-label>{{'LOGIN.SIGN_OUT_TEXT' | translate }}</ion-label>\r\n    </ion-item>\r\n  </ion-menu-toggle>\r\n</ion-list>\r\n<ion-card>\r\n  <ion-card-content>\r\n    <button ion-button (click)=\"PrivacyPolicyLinkClicked()\">{{'PRIVACY_POLICY.TITLE' | translate}}</button>\r\n    <button ion-button (click)=\"AboutUsLinkClicked()\">{{'ABOUT_US.TITLE' | translate}}</button>\r\n  </ion-card-content>\r\n  </ion-card>\r\n</ion-menu>\r\n\r\n<ion-content>\r\n  <ion-router-outlet> </ion-router-outlet>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_private_home_home_module_ts.js.map