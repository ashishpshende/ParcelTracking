"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_private_settings_settings_settings_module_ts"],{

/***/ 4433:
/*!****************************************************************************!*\
  !*** ./src/app/pages/private/settings/settings/settings-routing.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageRoutingModule": () => (/* binding */ SettingsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.page */ 6666);




const routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_0__.SettingsPage
    }
];
let SettingsPageRoutingModule = class SettingsPageRoutingModule {
};
SettingsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SettingsPageRoutingModule);



/***/ }),

/***/ 4180:
/*!********************************************************************!*\
  !*** ./src/app/pages/private/settings/settings/settings.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageModule": () => (/* binding */ SettingsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-routing.module */ 4433);
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.page */ 6666);








let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettingsPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule.forChild()
        ],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_1__.SettingsPage]
    })
], SettingsPageModule);



/***/ }),

/***/ 6666:
/*!******************************************************************!*\
  !*** ./src/app/pages/private/settings/settings/settings.page.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPage": () => (/* binding */ SettingsPage)
/* harmony export */ });
/* harmony import */ var C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _settings_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.page.html?ngResource */ 4878);
/* harmony import */ var _settings_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.page.scss?ngResource */ 4752);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/language/language.service */ 3469);
/* harmony import */ var src_app_services_localStorage_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/localStorage/local-storage.service */ 8565);
/* harmony import */ var src_app_services_vehicle_vehicle_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/vehicle/vehicle.service */ 4093);
/* harmony import */ var src_app_services_visualization_visualization_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/visualization/visualization.service */ 8097);
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/user */ 5783);












let SettingsPage = class SettingsPage {
  constructor(router, loadingController, vehicleService, visualizationService, localStorageService, languageService) {
    this.router = router;
    this.loadingController = loadingController;
    this.vehicleService = vehicleService;
    this.visualizationService = visualizationService;
    this.localStorageService = localStorageService;
    this.languageService = languageService;
    this.languageSelected = 'en';
    this.languageSelectedLabel = 'English';
    this.loggedInUser = new src_app_models_user__WEBPACK_IMPORTED_MODULE_7__.User(JSON.parse('{}'));
    this.router.events.forEach(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__.NavigationEnd) {
        this.serveBasedOnUserRole();
      }
    });
  }

  serveBasedOnUserRole() {
    //Role wise changes
    this.loggedInUser = this.localStorageService.StoredPreference.LoggedInUser;
  }

  loadLocalizationDetails() {
    this.languageSelected = this.localStorageService.StoredPreference.SelectedLanguage;
    this.updateSelectedLanguageLabel();
  }

  ngAfterViewInit() {
    this.loadLocalizationDetails();
    this.loggedInUser = this.localStorageService.StoredPreference.LoggedInUser;
  }

  ngOnInit() {
    this.loggedInUser = this.localStorageService.StoredPreference.LoggedInUser;
  }

  languageChangeButtonClicked() {
    this.languageService.presentLanguageSelctionMenu(changed => {
      this.initializeLoader('SETTINGS_PAGE.CHANGING_LANGUAGE_MESSAGE');
      setTimeout(() => {
        this.updateSelectedLanguageLabel();
      }, 3000);
    });
  }

  reloadMetaDataButtonClicked() {
    this.resetMetaData();
    this.initializeLoader('SETTINGS_PAGE.REFRESHMETADATA_MESSAGE');
    setTimeout(() => {
      this.vehicleService.LoadMetaData(resp => {
        resp.forEach(row => {
          switch (row.Type) {
            case 'District':
              if (row.Name.toLowerCase() === 'thane') {
                this.vehicleService.PoliceStationList.push(row.Value);
              }

              break;

            case 'VehicleType':
              this.vehicleService.vehicleTypes.push(row.Value);
              break;

            case 'VehicleCategory':
              this.vehicleService.vehicleCategories.push(row.Value);
              break;

            case 'VehicleCompany':
              this.vehicleService.AllCompanies.push(row.Value);

              if (row.Name.toLowerCase() === 'two wheeler') {
                this.vehicleService.TwoWheelerVehicleCompanies.push(row.Value);
              }

              if (row.Name.toLowerCase() === 'three wheeler') {
                this.vehicleService.ThreeWheelerVehicleCompanies.push(row.Value);
              }

              if (row.Name.toLowerCase() === 'four wheeler') {
                this.vehicleService.FourWheelerVehicleCompanies.push(row.Value);
              }

              if (row.Name.toLowerCase() === 'bus') {
                this.vehicleService.BusVehicleCompanies.push(row.Value);
              }

              if (row.Name.toLowerCase() === 'truck') {
                this.vehicleService.TruckVehicleCompanies.push(row.Value);
              }

              break;

            case 'Visualization':
              this.visualizationService.showBy.push(row.Value);
              break;
          }
        });
      }, error => {
        console.log('Error occured while reloading metadata');
      });
    }, 2000);
  }

  resetMetaData() {
    this.vehicleService.PoliceStationList = new Array();
    this.vehicleService.vehicleTypes = new Array();
    this.vehicleService.vehicleCategories = new Array();
    this.vehicleService.AllCompanies = new Array();
    this.vehicleService.TwoWheelerVehicleCompanies = new Array();
    this.vehicleService.ThreeWheelerVehicleCompanies = new Array();
    this.vehicleService.FourWheelerVehicleCompanies = new Array();
    this.vehicleService.BusVehicleCompanies = new Array();
    this.vehicleService.TruckVehicleCompanies = new Array();
    this.visualizationService.showBy = new Array();
  }

  updateSelectedLanguageLabel() {
    this.languageSelected = this.localStorageService.StoredPreference.SelectedLanguage;
    this.languageService.getLanguageList().forEach(lang => {
      if (lang["value"] === this.languageSelected) this.languageSelectedLabel = lang["label"];
    });
  } //Loaders


  initializeLoader(message) {
    var _this = this;

    return (0,C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.loading = yield _this.loadingController.create({
        message: _this.languageService.translate(message),
        duration: 4000
      });

      _this.loading.present();
    })();
  }

};

SettingsPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController
}, {
  type: src_app_services_vehicle_vehicle_service__WEBPACK_IMPORTED_MODULE_5__.VehicleService
}, {
  type: src_app_services_visualization_visualization_service__WEBPACK_IMPORTED_MODULE_6__.VisualizationService
}, {
  type: src_app_services_localStorage_local_storage_service__WEBPACK_IMPORTED_MODULE_4__.LocalStorageService
}, {
  type: src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService
}];

SettingsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-settings',
  template: _settings_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_settings_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], SettingsPage);


/***/ }),

/***/ 4752:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/private/settings/settings/settings.page.scss?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = ":host ion-content {\n  --background: url(\"/assets/bg20.JPG\") 0 0/100% 100% no-repeat ;\n  background-size: cover;\n  color: black;\n  --overflow: hidden;\n}\n:host ion-card, :host ion-item, :host ion-icon, :host ion-list, :host ion-card-header, :host ion-list-header, :host ion-card-content, :host on-label {\n  align-items: center;\n  justify-content: center;\n  background: none;\n  color: black;\n}\n.toolbar-backgorund {\n  --background: linear-gradient(180deg, var(--ion-color-dark), var(--ion-color-medium-contrast));\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNLLDhEQUFBO0VBSUQsc0JBQUE7RUFDRCxZQUFBO0VBQ0Esa0JBQUE7QUFEUDtBQUdJO0VBRUksbUJBQUE7RUFBcUIsdUJBQUE7RUFDckIsZ0JBQUE7RUFDQSxZQUFBO0FBRFI7QUFJQTtFQUNJLDhGQUFBO0VBQ0EsWUFBQTtBQURKIiwiZmlsZSI6InNldHRpbmdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGlvbi1jb250ZW50IHtcclxuICAgICAgICAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2JnMjAuSlBHXCIpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0IDsgXHJcbiAgICAgICAvL2JhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAtLW92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgICBpb24tY2FyZCxpb24taXRlbSxpb24taWNvbixpb24tbGlzdCwgaW9uLWNhcmQtaGVhZGVyLCBpb24tbGlzdC1oZWFkZXIsaW9uLWNhcmQtY29udGVudCxvbi1sYWJlbFxyXG4gICAge1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQ6bm9uZTsgICBcclxuICAgICAgICBjb2xvcjogYmxhY2s7IFxyXG4gICAgfVxyXG59XHJcbi50b29sYmFyLWJhY2tnb3J1bmQgIHtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0taW9uLWNvbG9yLWRhcmspLCB2YXIoLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0KSk7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfSJdfQ== */";

/***/ }),

/***/ 4878:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/private/settings/settings/settings.page.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "\r\n<ion-content>\r\n\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-item>\r\n        <ion-icon name='options-outline' slot=\"start\"></ion-icon>\r\n        {{'SETTINGS_PAGE.PREFERENCE' | translate}}\r\n      </ion-item>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-list>\r\n        <ion-item>\r\n          <ion-icon name='language' slot=\"start\"></ion-icon>\r\n          {{'SETTINGS_PAGE.LANGUAGE' | translate}}\r\n          <ion-label slot=\"end\" > {{languageSelectedLabel}}</ion-label>\r\n          <ion-button slot=\"end\"  (click)=\"languageChangeButtonClicked()\" ><ion-icon name='pencil' slot=\"icon-only\"></ion-icon> </ion-button>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"(loggedInUser.Role ==='Admin' || loggedInUser.Role ==='SuperAdmin')\">\r\n          <ion-icon name='reload-outline' slot=\"start\"></ion-icon>\r\n          {{'SETTINGS_PAGE.REFRESHMETADATA' | translate}}\r\n          <ion-button slot=\"end\"  (click)=\"reloadMetaDataButtonClicked()\" ><ion-icon name='play-circle-outline' slot=\"icon-only\"></ion-icon> </ion-button>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_private_settings_settings_settings_module_ts.js.map