"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_private_lookup_create-lookup_create-lookup_module_ts"],{

/***/ 7381:
/*!******************************************!*\
  !*** ./src/app/models/ScheduleSearch.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScheduleSearch": () => (/* binding */ ScheduleSearch)
/* harmony export */ });
/* harmony import */ var _BaseModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseModel */ 6198);
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable quote-props */
/* eslint-disable @typescript-eslint/naming-convention */

class ScheduleSearch extends _BaseModel__WEBPACK_IMPORTED_MODULE_0__.BaseModel {
    constructor(requestJSON) {
        super(requestJSON);
        this.Found = false;
        this.rowIndex = requestJSON['rowIndex'];
        this.Timestamp = requestJSON['Timestamp'];
        this.VehicleRegistrationNumber = requestJSON['VehicleRegistrationNumber'];
        this.VehicleEngineNumber = requestJSON['VehicleEngineNumber'];
        this.VehicleChassisNumber = requestJSON['VehicleChassisNumber'];
        this.Comments = requestJSON['Comments'];
        if (requestJSON['Found'] === '1') {
            this.Found = true;
        }
    }
    clear() {
        this.rowIndex = -1;
        this.Timestamp = '';
        this.VehicleRegistrationNumber = '';
        this.VehicleEngineNumber = '';
        this.VehicleChassisNumber = '';
        this.Comments = '';
        this.Found = false;
    }
    toJSON() {
        return {
            'Vehicle Registration Number': this.VehicleRegistrationNumber === '' ? '-' : this.VehicleRegistrationNumber,
            'Vehicle Engine Number': this.VehicleEngineNumber === '' ? '-' : this.VehicleEngineNumber,
            'Vehicle Chassis Number': this.VehicleChassisNumber === '' ? '-' : this.VehicleChassisNumber,
            'Comments': this.Comments === '' ? '-' : this.Comments,
            'Found': 0
        };
    }
    toUpdateJSON() {
        return {
            'Vehicle Registration Number': this.VehicleRegistrationNumber === '' ? '-' : this.VehicleRegistrationNumber,
            'Vehicle Engine Number': this.VehicleEngineNumber === '' ? '-' : this.VehicleEngineNumber,
            'Vehicle Chassis Number': this.VehicleChassisNumber === '' ? '-' : this.VehicleChassisNumber,
            'Comments': this.Comments === '' ? '-' : this.Comments,
            'Found': this.Found ? 1 : 0,
            'rowIndex': this.rowIndex !== undefined ? this.rowIndex : -1
        };
    }
}


/***/ }),

/***/ 2876:
/*!************************************************************************************!*\
  !*** ./src/app/pages/private/lookup/create-lookup/create-lookup-routing.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateLookupPageRoutingModule": () => (/* binding */ CreateLookupPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _create_lookup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-lookup.page */ 6945);




const routes = [
    {
        path: '',
        component: _create_lookup_page__WEBPACK_IMPORTED_MODULE_0__.CreateLookupPage
    }
];
let CreateLookupPageRoutingModule = class CreateLookupPageRoutingModule {
};
CreateLookupPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CreateLookupPageRoutingModule);



/***/ }),

/***/ 5179:
/*!****************************************************************************!*\
  !*** ./src/app/pages/private/lookup/create-lookup/create-lookup.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateLookupPageModule": () => (/* binding */ CreateLookupPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _create_lookup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-lookup-routing.module */ 2876);
/* harmony import */ var _create_lookup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-lookup.page */ 6945);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 8699);








let CreateLookupPageModule = class CreateLookupPageModule {
};
CreateLookupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _create_lookup_routing_module__WEBPACK_IMPORTED_MODULE_0__.CreateLookupPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule
        ],
        declarations: [_create_lookup_page__WEBPACK_IMPORTED_MODULE_1__.CreateLookupPage]
    })
], CreateLookupPageModule);



/***/ }),

/***/ 6945:
/*!**************************************************************************!*\
  !*** ./src/app/pages/private/lookup/create-lookup/create-lookup.page.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateLookupPage": () => (/* binding */ CreateLookupPage)
/* harmony export */ });
/* harmony import */ var C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _create_lookup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-lookup.page.html?ngResource */ 2371);
/* harmony import */ var _create_lookup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-lookup.page.scss?ngResource */ 4554);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/language/language.service */ 3469);
/* harmony import */ var src_app_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/loader/loader.service */ 9744);
/* harmony import */ var src_app_services_vehicle_vehicle_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/vehicle/vehicle.service */ 4093);
/* harmony import */ var src_app_models_ScheduleSearch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/ScheduleSearch */ 7381);




/* eslint-disable prefer-const */

/* eslint-disable @typescript-eslint/naming-convention */

/* eslint-disable max-len */









let CreateLookupPage = class CreateLookupPage {
  constructor(loadingCtrl, vehicleService, alertController, languageService, router, loaderService) {
    this.loadingCtrl = loadingCtrl;
    this.vehicleService = vehicleService;
    this.alertController = alertController;
    this.languageService = languageService;
    this.router = router;
    this.loaderService = loaderService;
    this.enableSave = false;
    this.emailValidationMessage = '';
    this.phoneNumberValidationMessage = '';
    this.genders = [];
    this.roles = [];
    this.statuses = [];
    this.showRegistrationValidationMessage = false;
    this.scheduleSearch = new src_app_models_ScheduleSearch__WEBPACK_IMPORTED_MODULE_6__.ScheduleSearch(JSON.parse('{}'));
    this.scheduleSearch.VehicleRegistrationNumber = '';
    this.scheduleSearch.VehicleChassisNumber = '';
    this.scheduleSearch.VehicleEngineNumber = '';
    this.scheduleSearch.Found = false;
  }

  ngOnInit() {
    this.enableSave = false;
  }

  ionViewWillEnter() {}

  SaveScheduleSearch(succes, failure) {
    this.loaderService.customLoader('Saving Schedule Search...', 10000);
    this.scheduleSearch.CreatedOn = (0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.formatDate)(new Date(), 'dd-MM-yyyy hh:mm:ss', 'en-US', '+0530');
    this.scheduleSearch.UpdatedOn = (0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.formatDate)(new Date(), 'dd-MM-yyyy hh:mm:ss', 'en-US', '+0530');
    this.vehicleService.SaveScheduleSearch(this.scheduleSearch, results => {
      this.goToScheduleSearchList();
      this.loaderService.dismissLoader();
    }, error => {
      this.loaderService.dismissLoader();
    });
  }

  goToScheduleSearchList() {
    let navigationExtras = {
      queryParams: {
        ts: new Date().getMilliseconds()
      }
    };
    this.router.navigate(['home/lookup-list'], navigationExtras);
  }

  SaveButtonClicked() {
    if (this.scheduleSearch.VehicleRegistrationNumber == null || this.scheduleSearch.VehicleRegistrationNumber === '') {
      this.showRegistrationValidationMessage = true;
    } else {
      this.SaveScheduleSearch(success => {
        this.goToScheduleSearchList();
      }, failure => {
        this.presentAlert(this.languageService.translate('CREATE_LOOKUP_PAGE.SAVE_FAILED'), this.languageService.translate('CREATE_LOOKUP_PAGE.SAVE_FAILED_MESSAGE'));
      });
      this.showRegistrationValidationMessage = false;
    }
  } //Alerts


  presentAlert(headerTitle = this.languageService.translate('SIGN_UP.TITLE'), message = this.languageService.translate('SIGN_UP.REGISTRATION_FAILED')) {
    var _this = this;

    return (0,C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        cssClass: 'app-alert-class',
        header: headerTitle,
        subHeader: '',
        message: message,
        buttons: [_this.languageService.translate('BUTTONS.OK')]
      });
      yield alert.present();
      const {
        role
      } = yield alert.onDidDismiss();
    })();
  }

};

CreateLookupPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController
}, {
  type: src_app_services_vehicle_vehicle_service__WEBPACK_IMPORTED_MODULE_5__.VehicleService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
}, {
  type: src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
}, {
  type: src_app_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_4__.LoaderService
}];

CreateLookupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-create-lookup',
  template: _create_lookup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_create_lookup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], CreateLookupPage);


/***/ }),

/***/ 9744:
/*!***************************************************!*\
  !*** ./src/app/services/loader/loader.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderService": () => (/* binding */ LoaderService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ 3819);



let LoaderService = class LoaderService {
    constructor(loadingController) {
        this.loadingController = loadingController;
    }
    // Simple loader
    simpleLoader() {
        this.loadingController.create({
            message: 'Loading...'
        }).then((response) => {
            response.present();
        });
    }
    // Dismiss loader
    dismissLoader() {
        this.loadingController.dismiss().then((response) => {
            console.log('Loader closed!', response);
        }).catch((err) => {
            console.log('Error occured : ', err);
        });
    }
    autoLoader(message, time) {
        this.loadingController.create({
            message: message,
            duration: time
        }).then((response) => {
            response.present();
            response.onDidDismiss().then((response) => {
                console.log('Loader dismissed', response);
            });
        });
    }
    // Custom style + hide on tap loader
    customLoader(message, time) {
        this.loadingController.create({
            message: message,
            duration: time,
            cssClass: 'loader-css-class',
            backdropDismiss: true
        }).then((res) => {
            res.present();
        });
    }
};
LoaderService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_0__.LoadingController }
];
LoaderService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], LoaderService);



/***/ }),

/***/ 4554:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/private/lookup/create-lookup/create-lookup.page.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = ":host ion-content {\n  --background: url(\"/assets/bg20.JPG\") 0 0/100% 100% no-repeat;\n  background-size: cover;\n  background-color: aliceblue;\n}\n\n.toolbar-backgorund {\n  background-color: aliceblue;\n}\n\n.user-profile-pic {\n  width: 60px;\n  height: 60px;\n  display: block;\n  margin-top: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: aliceblue;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  background-color: aliceblue;\n  color: black;\n}\n\nion-select {\n  max-width: 100% !important;\n  width: 100% !important;\n  padding-left: 0 !important;\n}\n\nion-item.selected {\n  background-color: aliceblue;\n  color: black;\n}\n\nion-card {\n  color: rgb(44, 29, 29);\n  background-color: aliceblue;\n  padding: 0px;\n  margin: 0px;\n  border-radius: 10px;\n}\n\nion-card-content {\n  background-color: aliceblue;\n  color: rgb(19, 13, 13);\n}\n\n.user-results {\n  background-color: aliceblue;\n}\n\n.user-results-list-header {\n  background-color: aliceblue;\n}\n\n.user-result-cell {\n  background-color: aquamarine;\n  margin-top: 10px;\n}\n\n.list-image {\n  font-size: 50px;\n  color: rgb(31, 7, 7);\n}\n\n.user-icon {\n  font-size: 50px;\n  color: rgb(31, 7, 7);\n}\n\n.value {\n  font-size: larger;\n  font-weight: 600;\n}\n\n.text-center {\n  text-align: center;\n  align-items: center;\n}\n\n.bottom-area {\n  position: fixed;\n  left: 0;\n  bottom: 0px;\n  right: 0;\n  background-color: gray;\n  height: 45px;\n  margin-bottom: 0px;\n}\n\n.bottom-button {\n  border-width: 1px;\n  border-color: #3e2c2c;\n  color: white;\n  font-size: larger;\n  font-weight: 800;\n  border-style: solid;\n  width: 50%;\n  margin: auto;\n  margin-top: 5px;\n}\n\n.custom-card {\n  height: 300px;\n}\n\n.field-list {\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1sb29rdXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0ksNkRBQUE7RUFHQSxzQkFBQTtFQUNBLDJCQUFBO0FBQU47O0FBS0E7RUFFRSwyQkFBQTtBQUhGOztBQVFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUFMRjs7QUFRQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBRUEsWUFBQTtBQU5GOztBQVNBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0FBTkE7O0FBU0E7RUFDRSwyQkFBQTtFQUVBLFlBQUE7QUFQRjs7QUFVQTtFQUNFLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBUEY7O0FBVUE7RUFDRSwyQkFBQTtFQUVBLHNCQUFBO0FBUkY7O0FBV0E7RUFFRSwyQkFBQTtBQVRGOztBQVlBO0VBQ0UsMkJBQUE7QUFURjs7QUFZQTtFQUNFLDRCQUFBO0VBQ0EsZ0JBQUE7QUFURjs7QUFZQTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtBQVRGOztBQVlBO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0FBVEY7O0FBWUE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBVEY7O0FBWUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBVEY7O0FBWUE7RUFDRSxlQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFURjs7QUFXQTtFQUVFLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBVEY7O0FBV0E7RUFFRSxhQUFBO0FBVEY7O0FBV0E7RUFFRSxrQkFBQTtBQVRGIiwiZmlsZSI6ImNyZWF0ZS1sb29rdXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGlvbi1jb250ZW50IHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2JnMjAuSlBHXCIpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG4gICAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG5cclxuICB9XHJcbn1cclxuXHJcbi50b29sYmFyLWJhY2tnb3J1bmQge1xyXG4gIC8vLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1pb24tY29sb3ItZGFyayksIHZhcigtLWlvbi1jb2xvci1kYXJrKSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG5cclxuIC8vIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnVzZXItcHJvZmlsZS1waWMge1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcbn1cclxuXHJcbmlvbi1ub3RlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxuXHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5pb24tc2VsZWN0IHtcclxubWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbndpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbnBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24taXRlbS5zZWxlY3RlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG5cclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICBjb2xvcjogcmdiKDQ0LCAyOSwgMjkpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuaW9uLWNhcmQtY29udGVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG5cclxuICBjb2xvcjogcmdiKDE5LCAxMywgMTMpO1xyXG59XHJcblxyXG4udXNlci1yZXN1bHRzIHtcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG59XHJcblxyXG4udXNlci1yZXN1bHRzLWxpc3QtaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcbn1cclxuXHJcbi51c2VyLXJlc3VsdC1jZWxsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5saXN0LWltYWdlIHtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbiAgY29sb3I6IHJnYigzMSwgNywgNyk7XHJcbn1cclxuXHJcbi51c2VyLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogNTBweDtcclxuICBjb2xvcjogcmdiKDMxLCA3LCA3KTtcclxufVxyXG5cclxuLnZhbHVlIHtcclxuICBmb250LXNpemU6IGxhcmdlcjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4udGV4dC1jZW50ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYm90dG9tLWFyZWF7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwcHg7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5ib3R0b20tYnV0dG9uXHJcbntcclxuICBib3JkZXItd2lkdGg6IDFweDtcclxuICBib3JkZXItY29sb3I6ICMzZTJjMmM7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICB3aWR0aDogNTAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLmN1c3RvbS1jYXJkXHJcbntcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG59XHJcbi5maWVsZC1saXN0XHJcbntcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 2371:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/private/lookup/create-lookup/create-lookup.page.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <ion-card>\r\n    <ion-card-header class=\"text-center\">\r\n      <ion-item>\r\n        <ion-icon name='car-outline' slot=\"start\"></ion-icon>\r\n        {{'USER.BASIC_DETAILS' | translate}}\r\n      </ion-item>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-list>\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"12\">{{'PARCEL.REGISTRATION_NUMBER' | translate}} </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"12\">\r\n                <ion-input   autocomplete=\"nope\"\r\n                class=\"value\" [(ngModel)]=\"scheduleSearch.VehicleRegistrationNumber\" placeholder=\" {{'PARCEL.REGISTRATION_NUMBER' | translate}}\">\r\n                </ion-input>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-label size=\"12\" *ngIf=\"showRegistrationValidationMessage\" color=\"danger\">\r\n              &nbsp;&nbsp;&nbsp;&nbsp;{{'CREATE_LOOKUP_PAGE.VALIDATION_MESSAGE' | translate}}\r\n            </ion-label>\r\n            <ion-row>\r\n              <ion-col size=\"12\">{{'PARCEL.ENGINE_NUMNER' | translate}} </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"12\">\r\n                <ion-input   autocomplete=\"nope\"\r\n                class=\"value\" [(ngModel)]=\"scheduleSearch.VehicleEngineNumber\" placeholder=\" {{'PARCEL.ENGINE_NUMNER' | translate}}\">\r\n                </ion-input>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"12\">{{'PARCEL.CHASSIS_NUMBER' | translate}} </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"12\">\r\n                <ion-input   autocomplete=\"nope\"\r\n                class=\"value\" [(ngModel)]=\"scheduleSearch.VehicleChassisNumber\" placeholder=\" {{'PARCEL.CHASSIS_NUMBER' | translate}}\">\r\n                </ion-input>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"12\">{{'PARCEL.COMMENTS' | translate}} </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"12\">\r\n                <ion-input   autocomplete=\"nope\"\r\n                class=\"value\" [(ngModel)]=\"scheduleSearch.Comments\" placeholder=\" {{'PARCEL.COMMENTS' | translate}}\">\r\n                </ion-input>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-button expand=\"block\" (click)=\"goToScheduleSearchList()\" >\r\n    <ion-icon slot=\"start\" name=\"close\"></ion-icon>\r\n    {{'BUTTONS.CANCEL' | translate}}\r\n  </ion-button>\r\n  <ion-button expand=\"block\" (click)=\"SaveButtonClicked()\" >\r\n    <ion-icon slot=\"start\" name=\"save\"></ion-icon>\r\n    {{'BUTTONS.SAVE' | translate}}\r\n</ion-button>\r\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_private_lookup_create-lookup_create-lookup_module_ts.js.map