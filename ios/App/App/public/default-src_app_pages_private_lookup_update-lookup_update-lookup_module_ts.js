"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_private_lookup_update-lookup_update-lookup_module_ts"],{

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

/***/ 3263:
/*!************************************************************************************!*\
  !*** ./src/app/pages/private/lookup/update-lookup/update-lookup-routing.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateLookupPageRoutingModule": () => (/* binding */ UpdateLookupPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _update_lookup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-lookup.page */ 4985);




const routes = [
    {
        path: '',
        component: _update_lookup_page__WEBPACK_IMPORTED_MODULE_0__.UpdateLookupPage
    }
];
let UpdateLookupPageRoutingModule = class UpdateLookupPageRoutingModule {
};
UpdateLookupPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UpdateLookupPageRoutingModule);



/***/ }),

/***/ 4106:
/*!****************************************************************************!*\
  !*** ./src/app/pages/private/lookup/update-lookup/update-lookup.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateLookupPageModule": () => (/* binding */ UpdateLookupPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _update_lookup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-lookup-routing.module */ 3263);
/* harmony import */ var _update_lookup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-lookup.page */ 4985);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 8699);








let UpdateLookupPageModule = class UpdateLookupPageModule {
};
UpdateLookupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _update_lookup_routing_module__WEBPACK_IMPORTED_MODULE_0__.UpdateLookupPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule
        ],
        declarations: [_update_lookup_page__WEBPACK_IMPORTED_MODULE_1__.UpdateLookupPage]
    })
], UpdateLookupPageModule);



/***/ }),

/***/ 4985:
/*!**************************************************************************!*\
  !*** ./src/app/pages/private/lookup/update-lookup/update-lookup.page.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateLookupPage": () => (/* binding */ UpdateLookupPage)
/* harmony export */ });
/* harmony import */ var C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _update_lookup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-lookup.page.html?ngResource */ 5856);
/* harmony import */ var _update_lookup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update-lookup.page.scss?ngResource */ 5531);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_models_ScheduleSearch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/ScheduleSearch */ 7381);
/* harmony import */ var src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/language/language.service */ 3469);
/* harmony import */ var src_app_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/loader/loader.service */ 9744);
/* harmony import */ var src_app_services_vehicle_vehicle_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/vehicle/vehicle.service */ 4093);




/* eslint-disable max-len */








let UpdateLookupPage = class UpdateLookupPage {
  constructor(loadingCtrl, vehicleService, alertController, languageService, router, loaderService) {
    this.loadingCtrl = loadingCtrl;
    this.vehicleService = vehicleService;
    this.alertController = alertController;
    this.languageService = languageService;
    this.router = router;
    this.loaderService = loaderService;
    this.showRegistrationValidationMessage = false;

    if (this.vehicleService.selectedSchduleSearch != null && this.vehicleService.selectedSchduleSearch !== undefined) {
      this.scheduleSearch = this.vehicleService.selectedSchduleSearch;
    } else {
      this.scheduleSearch = new src_app_models_ScheduleSearch__WEBPACK_IMPORTED_MODULE_3__.ScheduleSearch(JSON.parse('{}'));
    }
  }

  ngOnInit() {}

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
      this.UpdateScheduleSearch(success => {
        this.goToScheduleSearchList();
      }, failure => {
        this.presentAlert(this.languageService.translate('CREATE_LOOKUP_PAGE.SAVE_FAILED'), this.languageService.translate('CREATE_LOOKUP_PAGE.SAVE_FAILED_MESSAGE'));
      });
      this.showRegistrationValidationMessage = false;
    }
  }

  UpdateScheduleSearch(succes, failure) {
    this.loaderService.customLoader('Saving Schedule Search...', 10000);
    this.vehicleService.UpdateScheduleSearch(this.scheduleSearch, results => {
      this.goToScheduleSearchList();
      this.loaderService.dismissLoader();
    }, error => {
      this.loaderService.dismissLoader();
    });
  }

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

  foundChanged(ev) {
    this.scheduleSearch.Found = ev.detail.checked;
  }

};

UpdateLookupPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController
}, {
  type: src_app_services_vehicle_vehicle_service__WEBPACK_IMPORTED_MODULE_6__.VehicleService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController
}, {
  type: src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_4__.LanguageService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
}, {
  type: src_app_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__.LoaderService
}];

UpdateLookupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-update-lookup',
  template: _update_lookup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_update_lookup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], UpdateLookupPage);


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

/***/ 5531:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/private/lookup/update-lookup/update-lookup.page.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = ":host ion-content {\n  --background: url(\"/assets/bg20.JPG\") 0 0/100% 100% no-repeat;\n  background-size: cover;\n  background-color: aliceblue;\n}\n\n.toolbar-backgorund {\n  background-color: aliceblue;\n}\n\n.user-profile-pic {\n  width: 60px;\n  height: 60px;\n  display: block;\n  margin-top: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: aliceblue;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  background-color: aliceblue;\n  color: black;\n}\n\nion-select {\n  max-width: 100% !important;\n  width: 100% !important;\n  padding-left: 0 !important;\n}\n\nion-item.selected {\n  background-color: aliceblue;\n  color: black;\n}\n\nion-card {\n  color: rgb(44, 29, 29);\n  background-color: aliceblue;\n  padding: 0px;\n  margin: 0px;\n  border-radius: 10px;\n}\n\nion-card-content {\n  background-color: aliceblue;\n  color: rgb(19, 13, 13);\n}\n\n.user-results {\n  background-color: aliceblue;\n}\n\n.user-results-list-header {\n  background-color: aliceblue;\n}\n\n.user-result-cell {\n  background-color: aquamarine;\n  margin-top: 10px;\n}\n\n.list-image {\n  font-size: 50px;\n  color: rgb(31, 7, 7);\n}\n\n.user-icon {\n  font-size: 50px;\n  color: rgb(31, 7, 7);\n}\n\n.value {\n  font-size: larger;\n  font-weight: 600;\n}\n\n.text-center {\n  text-align: center;\n  align-items: center;\n}\n\n.bottom-area {\n  position: fixed;\n  left: 0;\n  bottom: 0px;\n  right: 0;\n  background-color: gray;\n  height: 45px;\n  margin-bottom: 0px;\n}\n\n.bottom-button {\n  border-width: 1px;\n  border-color: #3e2c2c;\n  color: white;\n  font-size: larger;\n  font-weight: 800;\n  border-style: solid;\n  width: 50%;\n  margin: auto;\n  margin-top: 5px;\n}\n\n.custom-card {\n  height: 300px;\n}\n\n.field-list {\n  padding-left: 10px;\n}\n\nion-toggle {\n  height: 10px;\n  width: 65px;\n  padding: 12px;\n  --background: #ddd;\n  --background-checked: #ddd;\n  --handle-background: #eb7769;\n  --handle-background-checked: #95c34e;\n  --handle-width: 25px;\n  --handle-height: 27px;\n  --handle-max-height: auto;\n  --handle-spacing: 6px;\n  --handle-border-radius: 4px;\n  --handle-box-shadow: none;\n  /* Required for iOS handle to overflow the height of the track */\n  overflow: visible;\n  contain: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZS1sb29rdXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0ksNkRBQUE7RUFHQSxzQkFBQTtFQUNBLDJCQUFBO0FBQU47O0FBS0E7RUFFRSwyQkFBQTtBQUhGOztBQVFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUFMRjs7QUFRQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBRUEsWUFBQTtBQU5GOztBQVNBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0FBTkE7O0FBU0E7RUFDRSwyQkFBQTtFQUVBLFlBQUE7QUFQRjs7QUFVQTtFQUNFLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBUEY7O0FBVUE7RUFDRSwyQkFBQTtFQUVBLHNCQUFBO0FBUkY7O0FBV0E7RUFFRSwyQkFBQTtBQVRGOztBQVlBO0VBQ0UsMkJBQUE7QUFURjs7QUFZQTtFQUNFLDRCQUFBO0VBQ0EsZ0JBQUE7QUFURjs7QUFZQTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtBQVRGOztBQVlBO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0FBVEY7O0FBWUE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBVEY7O0FBWUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBVEY7O0FBWUE7RUFDRSxlQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFURjs7QUFXQTtFQUVFLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBVEY7O0FBV0E7RUFFRSxhQUFBO0FBVEY7O0FBV0E7RUFFRSxrQkFBQTtBQVRGOztBQWFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFFQSxhQUFBO0VBRUEsa0JBQUE7RUFDQSwwQkFBQTtFQUVBLDRCQUFBO0VBQ0Esb0NBQUE7RUFFQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUVBLDJCQUFBO0VBQ0EseUJBQUE7RUFFQSxnRUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQWhCRiIsImZpbGUiOiJ1cGRhdGUtbG9va3VwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBpb24tY29udGVudCB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9iZzIwLkpQR1wiKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcclxuICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxuXHJcbiAgfVxyXG59XHJcblxyXG4udG9vbGJhci1iYWNrZ29ydW5kIHtcclxuICAvLy0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0taW9uLWNvbG9yLWRhcmspLCB2YXIoLS1pb24tY29sb3ItZGFyaykpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxuXHJcbiAvLyBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi51c2VyLXByb2ZpbGUtcGljIHtcclxuICB3aWR0aDogNjBweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG59XHJcblxyXG5pb24tbm90ZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcblxyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuaW9uLXNlbGVjdCB7XHJcbm1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG53aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG5wYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWl0ZW0uc2VsZWN0ZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxuXHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgY29sb3I6IHJnYig0NCwgMjksIDI5KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbmlvbi1jYXJkLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxuXHJcbiAgY29sb3I6IHJnYigxOSwgMTMsIDEzKTtcclxufVxyXG5cclxuLnVzZXItcmVzdWx0cyB7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxufVxyXG5cclxuLnVzZXItcmVzdWx0cy1saXN0LWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG59XHJcblxyXG4udXNlci1yZXN1bHQtY2VsbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4ubGlzdC1pbWFnZSB7XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG4gIGNvbG9yOiByZ2IoMzEsIDcsIDcpO1xyXG59XHJcblxyXG4udXNlci1pY29uIHtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbiAgY29sb3I6IHJnYigzMSwgNywgNyk7XHJcbn1cclxuXHJcbi52YWx1ZSB7XHJcbiAgZm9udC1zaXplOiBsYXJnZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLnRleHQtY2VudGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmJvdHRvbS1hcmVhe1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMHB4O1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgaGVpZ2h0OiA0NXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG4uYm90dG9tLWJ1dHRvblxyXG57XHJcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgYm9yZGVyLWNvbG9yOiAjM2UyYzJjO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IGxhcmdlcjtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbi5jdXN0b20tY2FyZFxyXG57XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxufVxyXG4uZmllbGQtbGlzdFxyXG57XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG5cclxuaW9uLXRvZ2dsZSB7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG4gIHdpZHRoOiA2NXB4O1xyXG5cclxuICBwYWRkaW5nOiAxMnB4O1xyXG5cclxuICAtLWJhY2tncm91bmQ6ICNkZGQ7XHJcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNkZGQ7XHJcblxyXG4gIC0taGFuZGxlLWJhY2tncm91bmQ6ICNlYjc3Njk7XHJcbiAgLS1oYW5kbGUtYmFja2dyb3VuZC1jaGVja2VkOiAjOTVjMzRlO1xyXG5cclxuICAtLWhhbmRsZS13aWR0aDogMjVweDtcclxuICAtLWhhbmRsZS1oZWlnaHQ6IDI3cHg7XHJcbiAgLS1oYW5kbGUtbWF4LWhlaWdodDogYXV0bztcclxuICAtLWhhbmRsZS1zcGFjaW5nOiA2cHg7XHJcblxyXG4gIC0taGFuZGxlLWJvcmRlci1yYWRpdXM6IDRweDtcclxuICAtLWhhbmRsZS1ib3gtc2hhZG93OiBub25lO1xyXG5cclxuICAvKiBSZXF1aXJlZCBmb3IgaU9TIGhhbmRsZSB0byBvdmVyZmxvdyB0aGUgaGVpZ2h0IG9mIHRoZSB0cmFjayAqL1xyXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gIGNvbnRhaW46IG5vbmU7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 5856:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/private/lookup/update-lookup/update-lookup.page.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <ion-card>\r\n    <ion-card-header class=\"text-center\">\r\n      <ion-item>\r\n        <ion-icon name='car-outline' slot=\"start\"></ion-icon>\r\n        {{'USER.BASIC_DETAILS' | translate}}\r\n      </ion-item>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-list>\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"5\">{{'PARCEL.REGISTRATION_NUMBER' | translate}} </ion-col>\r\n              <ion-col size=\"7\">\r\n                <ion-input autocomplete=\"nope\"\r\n                class=\"value\" [(ngModel)]=\"scheduleSearch.VehicleRegistrationNumber\" placeholder=\" {{'PARCEL.REGISTRATION_NUMBER' | translate}}\">\r\n                </ion-input>\r\n              </ion-col>\r\n              <ion-label size=\"12\" *ngIf=\"showRegistrationValidationMessage\" color=\"danger\">\r\n                &nbsp;&nbsp;&nbsp;&nbsp;{{'CREATE_LOOKUP_PAGE.VALIDATION_MESSAGE' | translate}}\r\n              </ion-label>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"5\">{{'PARCEL.ENGINE_NUMNER' | translate}} </ion-col>\r\n              <ion-col size=\"7\">\r\n                <ion-input autocomplete=\"nope\"\r\n                class=\"value\" [(ngModel)]=\"scheduleSearch.VehicleEngineNumber\" placeholder=\" {{'PARCEL.ENGINE_NUMNER' | translate}}\">\r\n                </ion-input>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"5\">{{'PARCEL.CHASSIS_NUMBER' | translate}} </ion-col>\r\n              <ion-col size=\"7\">\r\n                <ion-input autocomplete=\"nope\"\r\n                class=\"value\" [(ngModel)]=\"scheduleSearch.VehicleChassisNumber\" placeholder=\" {{'PARCEL.CHASSIS_NUMBER' | translate}}\">\r\n                </ion-input>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"12\">{{'PARCEL.COMMENTS' | translate}} </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"12\">\r\n                <ion-input autocomplete=\"nope\"\r\n                class=\"value\" [(ngModel)]=\"scheduleSearch.Comments\" placeholder=\" {{'PARCEL.COMMENTS' | translate}}\">\r\n                </ion-input>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"8\">{{'PARCEL.FOUND' | translate}} </ion-col>\r\n              <ion-col size=\"4\">\r\n                <ion-toggle [checked]=\"scheduleSearch.Found\" (ionChange)=\"foundChanged($event)\"></ion-toggle>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-button expand=\"block\" (click)=\"goToScheduleSearchList()\" >\r\n    <ion-icon slot=\"start\" name=\"close\"></ion-icon>\r\n    {{'BUTTONS.CANCEL' | translate}}\r\n  </ion-button>\r\n  <ion-button expand=\"block\" (click)=\"SaveButtonClicked()\" >\r\n    <ion-icon slot=\"start\" name=\"save\"></ion-icon>\r\n    {{'BUTTONS.SAVE' | translate}}\r\n</ion-button>\r\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_private_lookup_update-lookup_update-lookup_module_ts.js.map