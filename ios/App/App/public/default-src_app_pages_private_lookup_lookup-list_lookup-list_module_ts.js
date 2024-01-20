"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_private_lookup_lookup-list_lookup-list_module_ts"],{

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

/***/ 3832:
/*!********************************************************************************!*\
  !*** ./src/app/pages/private/lookup/lookup-list/lookup-list-routing.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LookupListPageRoutingModule": () => (/* binding */ LookupListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _lookup_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lookup-list.page */ 4347);




const routes = [
    {
        path: '',
        component: _lookup_list_page__WEBPACK_IMPORTED_MODULE_0__.LookupListPage
    }
];
let LookupListPageRoutingModule = class LookupListPageRoutingModule {
};
LookupListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LookupListPageRoutingModule);



/***/ }),

/***/ 7966:
/*!************************************************************************!*\
  !*** ./src/app/pages/private/lookup/lookup-list/lookup-list.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LookupListPageModule": () => (/* binding */ LookupListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _lookup_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lookup-list-routing.module */ 3832);
/* harmony import */ var _lookup_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lookup-list.page */ 4347);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 8699);








let LookupListPageModule = class LookupListPageModule {
};
LookupListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _lookup_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.LookupListPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule
        ],
        declarations: [_lookup_list_page__WEBPACK_IMPORTED_MODULE_1__.LookupListPage]
    })
], LookupListPageModule);



/***/ }),

/***/ 4347:
/*!**********************************************************************!*\
  !*** ./src/app/pages/private/lookup/lookup-list/lookup-list.page.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LookupListPage": () => (/* binding */ LookupListPage)
/* harmony export */ });
/* harmony import */ var C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _lookup_list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lookup-list.page.html?ngResource */ 7988);
/* harmony import */ var _lookup_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lookup-list.page.scss?ngResource */ 8480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/loader/loader.service */ 9744);
/* harmony import */ var src_app_services_localStorage_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/localStorage/local-storage.service */ 8565);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_vehicle_vehicle_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/vehicle/vehicle.service */ 4093);
/* harmony import */ var src_app_models_ScheduleSearch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/ScheduleSearch */ 7381);
/* harmony import */ var src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/language/language.service */ 3469);




/* eslint-disable max-len */

/* eslint-disable prefer-arrow/prefer-arrow-functions */









let LookupListPage = class LookupListPage {
  constructor(vehicleService, loaderService, router, localStorageService, languageService, alertController) {
    this.vehicleService = vehicleService;
    this.loaderService = loaderService;
    this.router = router;
    this.localStorageService = localStorageService;
    this.languageService = languageService;
    this.alertController = alertController;
    this.skip = 0;
    this.totalRecords = -1;
    this.totalPages = -1;
    this.countPerPage = 10;
    this.limit = this.countPerPage;
    this.currentPage = 1;
    this.showPagination = false;
    this.editUserIcon = '';
    this.searchToggle = false;
    this.searchText = '';
    this.allowNext = false;
    this.allowPrev = false;
    this.allowFirst = false;
    this.allowLast = false;
    this.message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
    this.scheduleSearch = new Array();
    this.router.events.forEach(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__.NavigationEnd) {}
    });
  }

  ngOnInit() {
    this.loggedInUser = this.localStorageService.StoredPreference.LoggedInUser;
    this.loadScheduleSearch();
  }

  DeleteSSearch(succes, failure) {
    this.loaderService.customLoader('Saving Schedule Search...', 10000);
    this.vehicleService.deleteScheduleSearch(this.selectedScheduleSearch, results => {
      this.loadScheduleSearch();
      this.loaderService.dismissLoader();
    }, error => {
      this.loaderService.dismissLoader();
    });
  } //Data loaders


  loadScheduleSearch() {
    var _this = this;

    this.loaderService.customLoader('Loading Schedule Search...', 50000); //if (this.searchText !== '') {

    this.vehicleService.listBykeyword(this.searchText, this.skip, this.limit, /*#__PURE__*/function () {
      var _ref = (0,C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (results) {
        _this.handleResponse(results);

        _this.loaderService.dismissLoader();
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }(), error => {
      this.loaderService.dismissLoader();
    });
  }

  deleteSchduleSearch(sSearch) {
    this.selectedScheduleSearch = sSearch;
    this.presentAlert(this.languageService.translate('LOOKUP_LIST_PAGE.DELETE_TITLE'), this.languageService.translate('LOOKUP_LIST_PAGE.DELETE_SCHEDULE_SEARCH_MESSAGE'));
  }

  editScheduleSearch(sSearch) {
    this.vehicleService.selectedSchduleSearch = sSearch;
    const navigationExtras = {
      queryParams: {
        rowIndex: sSearch.rowIndex,
        ts: new Date().getMilliseconds()
      }
    };
    this.router.navigate(['home/update-lookup'], navigationExtras);
  }

  presentAlert(headerTitle = this.languageService.translate('LOGIN.ERROR_ALERT_TITLE'), message = this.languageService.translate('LOGIN.ERROR_INVALID_CREDENTIALS_MESSAGE')) {
    var _this2 = this;

    return (0,C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this2.alertController.create({
        cssClass: 'my-custom-class',
        header: headerTitle,
        subHeader: '',
        message: message,
        buttons: [{
          text: _this2.languageService.translate('BUTTONS.YES'),
          role: 'confirm',
          handler: () => {
            _this2.deleteScheduleSearch();
          }
        }, {
          text: _this2.languageService.translate('BUTTONS.NO'),
          role: 'confirm',
          handler: () => {}
        }]
      });
      yield alert.present();
      const {
        role
      } = yield alert.onDidDismiss();
    })();
  }

  deleteScheduleSearch() {
    this.loaderService.customLoader('Deleting Schedule Search...', 10000);
    this.vehicleService.deleteScheduleSearch(this.selectedScheduleSearch, results => {
      this.loadScheduleSearch();
      this.loaderService.dismissLoader();
    }, error => {
      this.loaderService.dismissLoader();
    });
  }

  handleResponse(response) {
    this.scheduleSearch = new Array();

    if (response.results.length > 10) {
      this.showPagination = true;
    }

    response.results.forEach(element => {
      let vehi = new src_app_models_ScheduleSearch__WEBPACK_IMPORTED_MODULE_6__.ScheduleSearch(element);
      this.scheduleSearch.push(vehi);
    });
    this.pages = new Array();

    if (response.totalRecords < 10) {
      this.allowFirst = false;
      this.allowPrev = false;
      this.allowLast = false;
      this.allowNext = false;
      this.currentPage = 1;
      this.pages.push(1);
    } else {
      this.totalPages = Math.ceil(response.totalRecords / 10);

      if (this.totalPages > 5) {
        if (this.currentPage == this.totalPages) {
          this.allowFirst = true;
          this.allowPrev = true;
          this.allowLast = false;
          this.allowNext = false;
          this.pages.push(this.currentPage - 2);
          this.pages.push(this.currentPage - 1);
          this.pages.push(this.currentPage);
        } else if (this.currentPage == 1) {
          this.allowFirst = false;
          this.allowPrev = false;
          this.allowLast = true;
          this.allowNext = true;
          this.pages.push(this.currentPage);
          this.pages.push(this.currentPage + 1);
          this.pages.push(this.currentPage + 2);
        } else {
          this.allowFirst = true;
          this.allowPrev = true;
          this.allowLast = true;
          this.allowNext = true;
          this.pages.push(this.currentPage - 1);
          this.pages.push(this.currentPage);
          this.pages.push(this.currentPage + 1);
        }
      } else {
        for (let index = 1; index <= this.totalPages; index++) {
          this.pages.push(index);
        }
      }
    }
  }

  handleRefresh(ev) {
    this.loadScheduleSearch();
    ev.target.complete();
  } //Search


  ClearTextButtonClicked() {
    this.searchText = '';
    this.skip = 0;
    this.currentPage = 1;
    this.loadScheduleSearch();
  }

  SearchToggleButtonClicked() {
    this.searchToggle = !this.searchToggle;
  }

  FilterButtonClicked() {}

  SearchTextButtonClicked() {
    this.skip = 0;
    this.currentPage = 1;
    if (this.searchText !== '') this.loadScheduleSearch();
  } //Event Handlers


  userSelected(selectedUser) {// this.vehicleService.selectedUser = selectedUser;
    // let navigationExtras: NavigationExtras = {
    //   queryParams: {
    //     rowIndex: selectedUser.rowIndex,
    //     ts: new Date().getMilliseconds()
    //   }
    // };
    // this.router.navigate(['home/user-details'], navigationExtras);
  }

  EditButtonClicked(selectedSchduleSearch) {
    const navigationExtras = {
      queryParams: {
        rowIndex: selectedSchduleSearch.rowIndex,
        ts: new Date().getMilliseconds()
      }
    };
    this.router.navigate(['home/update-user'], navigationExtras);
  }

  GetIcon(found) {
    if (found) {
      return '/assets/icon/greendot.png';
    }

    return '/assets/icon/reddot.png';
  } //Click Events


  AddVehicleButtonClicked() {
    const navigationExtras = {
      queryParams: {
        ts: new Date().getMilliseconds()
      }
    };
    this.router.navigate(['home/create-lookup'], navigationExtras);
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event) {
    const ev = event;

    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  } //Pagination


  FirstClicked() {
    this.currentPage = 1;
    this.limit = this.countPerPage;
    this.skip = this.countPerPage * (this.currentPage - 1);
    this.loadScheduleSearch();
  }

  PrevClicked() {
    this.currentPage--;
    this.limit = this.countPerPage;
    this.skip = this.countPerPage * (this.currentPage - 1);
    this.loadScheduleSearch();
  }

  NextClicked() {
    this.currentPage++;
    this.limit = this.countPerPage;
    this.skip = this.countPerPage * (this.currentPage - 1);
    this.loadScheduleSearch();
  }

  LastClicked() {
    this.currentPage = this.totalPages;
    this.limit = this.countPerPage;
    this.skip = this.countPerPage * (this.currentPage - 1);
    this.loadScheduleSearch();
  }

  PageClicked(page) {
    this.currentPage = page;
    this.limit = this.countPerPage;
    this.skip = this.countPerPage * (this.currentPage - 1);
    this.loadScheduleSearch();
  }

};

LookupListPage.ctorParameters = () => [{
  type: src_app_services_vehicle_vehicle_service__WEBPACK_IMPORTED_MODULE_5__.VehicleService
}, {
  type: src_app_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_3__.LoaderService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
}, {
  type: src_app_services_localStorage_local_storage_service__WEBPACK_IMPORTED_MODULE_4__.LocalStorageService
}, {
  type: src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_7__.LanguageService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController
}];

LookupListPage.propDecorators = {
  modal: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonModal]
  }]
};
LookupListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-lookup-list',
  template: _lookup_list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_lookup_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], LookupListPage);


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

/***/ 8480:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/private/lookup/lookup-list/lookup-list.page.scss?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = ":host ion-content {\n  --background: url(\"/assets/bg20.JPG\") 0 0/100% 100% no-repeat;\n  background-size: cover;\n}\n\n.toolbar-backgorund {\n  color: black;\n}\n\n.filter-search-buttons {\n  text-align: center;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: black;\n}\n\nion-item.selected {\n  color: black;\n}\n\nion-card {\n  color: rgb(44, 29, 29);\n  background-color: aquamarine;\n  padding: 0px;\n  margin: 0px;\n  border-radius: 10px;\n}\n\nion-card-content {\n  color: rgb(19, 13, 13);\n}\n\n.user-results {\n  background: transparent;\n}\n\n.schedule-search-results-list-header {\n  background-color: rgb(61, 167, 167);\n}\n\n.user-result-cell {\n  margin-top: 10px;\n  border-bottom-width: 1px;\n  border-bottom-color: black;\n  border-bottom-style: groove;\n}\n\n.list-image {\n  font-size: 50px;\n  color: black;\n}\n\n.status-icon {\n  width: 20px;\n  height: 20px;\n}\n\n.search-icon {\n  width: 25px;\n  height: 25px;\n}\n\n.search-text {\n  font-size: x-large;\n  color: gray;\n}\n\n.search-text-field {\n  font-size: larger;\n  color: gray;\n}\n\n.pagination-area {\n  position: fixed;\n  left: 0;\n  bottom: 0px;\n  right: 0;\n  background-color: gray;\n  height: 45px;\n  margin-bottom: 0px;\n}\n\n.pagination-button {\n  border-width: 1px;\n  border-color: #3e2c2c;\n  color: white;\n  font-size: larger;\n  font-weight: 800;\n  border-style: solid;\n  text-align: center;\n}\n\n.selected {\n  background-color: #e9c0c0;\n  color: #645858;\n}\n\n.open-space {\n  margin-bottom: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvb2t1cC1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLDZEQUFBO0VBR0Esc0JBQUE7QUFBSjs7QUFJQTtFQUVFLFlBQUE7QUFGRjs7QUFLQTtFQUNFLGtCQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFFQSxZQUFBO0FBSEY7O0FBTUE7RUFDRSxZQUFBO0FBSEY7O0FBTUE7RUFDRSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUhGOztBQU1BO0VBQ0Usc0JBQUE7QUFIRjs7QUFNQTtFQUNFLHVCQUFBO0FBSEY7O0FBTUE7RUFDRSxtQ0FBQTtBQUhGOztBQU1BO0VBQ0UsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7QUFIRjs7QUFNQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBSEY7O0FBTUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUhGOztBQU9BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFKRjs7QUFNQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQUhGOztBQUtBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0FBRkY7O0FBSUE7RUFDRSxlQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFJQTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFHQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQUFGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRiIsImZpbGUiOiJsb29rdXAtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2JnMjAuSlBHXCIpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9XHJcbn1cclxuXHJcbi50b29sYmFyLWJhY2tnb3J1bmQge1xyXG4gIC8vLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1pb24tY29sb3ItZGFyayksIHZhcigtLWlvbi1jb2xvci1kYXJrKSk7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uZmlsdGVyLXNlYXJjaC1idXR0b25zIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlvbi1ub3RlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG5cclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbmlvbi1pdGVtLnNlbGVjdGVkIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICBjb2xvcjogcmdiKDQ0LCAyOSwgMjkpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbmlvbi1jYXJkLWNvbnRlbnQge1xyXG4gIGNvbG9yOiByZ2IoMTksIDEzLCAxMyk7XHJcbn1cclxuXHJcbi51c2VyLXJlc3VsdHMge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uc2NoZWR1bGUtc2VhcmNoLXJlc3VsdHMtbGlzdC1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2MSwgMTY3LCAxNjcpO1xyXG59XHJcblxyXG4udXNlci1yZXN1bHQtY2VsbCB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogYmxhY2s7XHJcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogZ3Jvb3ZlO1xyXG59XHJcblxyXG4ubGlzdC1pbWFnZSB7XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnN0YXR1cy1pY29uIHtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcblxyXG59XHJcblxyXG4uc2VhcmNoLWljb24ge1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGhlaWdodDogMjVweDtcclxufVxyXG4uc2VhcmNoLXRleHQge1xyXG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICBjb2xvcjogZ3JheTtcclxufVxyXG4uc2VhcmNoLXRleHQtZmllbGQge1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gIGNvbG9yOmdyYXk7XHJcbn1cclxuLnBhZ2luYXRpb24tYXJlYSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwcHg7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbi1idXR0b24ge1xyXG4gIGJvcmRlci13aWR0aDogMXB4O1xyXG4gIGJvcmRlci1jb2xvcjogIzNlMmMyYztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiBsYXJnZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uc2VsZWN0ZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWMwYzA7XHJcbiAgY29sb3I6ICM2NDU4NTg7XHJcbn1cclxuLm9wZW4tc3BhY2Uge1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 7988:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/private/lookup/lookup-list/lookup-list.page.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <ion-refresher slot=\"fixed\" [pullFactor]=\"0.5\" [pullMin]=\"100\" [pullMax]=\"200\" (ionRefresh)=\"handleRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  <ion-list class=\"user-results\">\r\n    <ion-item>\r\n      <ion-thumbnail slot=\"start\" (click)=\"AddVehicleButtonClicked()\">\r\n        <img alt=\"Add User\" src=\"/assets/icon/scedulesearchadd.png\" />\r\n      </ion-thumbnail>\r\n      <ion-thumbnail slot=\"end\" (click)=\"SearchToggleButtonClicked()\">\r\n        <img alt=\"Search User\" src=\"/assets/icon/schedulesearch.png\" />\r\n      </ion-thumbnail>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"searchToggle\">\r\n      <ion-input slot=\"start\" type=\"search\" class=\"search-text-field\"  [(ngModel)]=\"searchText\" autocomplete=\"nope\" placeholder=\" {{'SCHEDULED_SEARCH_PAGE.SEARCH_KEY' | translate}}\"></ion-input>\r\n      <img slot=\"end\" *ngIf=\"searchText.length!==0\" class=\"search-icon\" src=\"/assets/icon/ClearIcon.png\" (click)=\"ClearTextButtonClicked()\">\r\n      <img slot=\"end\" class=\"search-icon\" src=\"/assets/icon/SearchAction.png\" (click)=\"SearchTextButtonClicked()\">\r\n    </ion-item>\r\n    <ion-list-header class=\"schedule-search-results-list-header\"> Showing Results skipping {{skip}} records </ion-list-header>\r\n\r\n    <ion-item class=\"user-result-cell\" *ngFor=\"let sSearch of scheduleSearch\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"9\">\r\n            <ion-label (click)=\"userSelected(sSearch)\">\r\n              <h3 style=\"font-weight: bold\">{{sSearch.VehicleRegistrationNumber}}</h3>\r\n              <h5 *ngIf=\"sSearch.VehicleChassisNumber.length > 0\">C. No: {{sSearch.VehicleChassisNumber}}</h5>\r\n              <h5 *ngIf=\"sSearch.VehicleEngineNumber.length > 0\">E. No: {{sSearch.VehicleEngineNumber}}</h5>\r\n            </ion-label>\r\n          </ion-col>\r\n            <ion-col size=\"1\">\r\n              <ion-icon name=\"create-sharp\" (click)=\"editScheduleSearch(sSearch)\"></ion-icon>\r\n            </ion-col>\r\n            <ion-col size=\"1\">\r\n              <ion-icon name=\"trash-sharp\" (click)=\"deleteSchduleSearch(sSearch)\"></ion-icon>\r\n            </ion-col>\r\n            <ion-col size=\"1\">\r\n              <img class=\"status-icon\" [src]=\"GetIcon(sSearch.Found)\">\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-label class=\"ion-text-wrap\" size=\"12\">\r\n            <h5 *ngIf=\"sSearch.Comments.length > 0\">{{sSearch.Comments}}</h5>\r\n          </ion-label>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-item>\r\n  </ion-list>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col class=\"open-space\">\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n<ion-footer>\r\n  <div  class=\"text-center pagination-area\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col *ngIf=\"allowFirst\" class=\"pagination-button\" (click)=\"FirstClicked()\">\r\n          <<\r\n        </ion-col>\r\n        <ion-col *ngIf=\"allowPrev\" class=\"pagination-button\" (click)=\"PrevClicked()\">\r\n          <\r\n        </ion-col>\r\n        <ion-col *ngFor=\"let page of pages\" class=\"pagination-button\">\r\n          <ion-button  [disabled]=\"page===currentPage \"  (click)=\"PageClicked(page)\">\r\n            {{page}}\r\n          </ion-button>\r\n\r\n        </ion-col>\r\n        <ion-col  *ngIf=\"allowNext\" class=\"pagination-button\" (click)=\"NextClicked()\">\r\n          >\r\n        </ion-col>\r\n        <ion-col  *ngIf=\"allowLast\" class=\"pagination-button\" (click)=\"LastClicked()\">\r\n          >>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</ion-footer>\r\n\r\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_private_lookup_lookup-list_lookup-list_module_ts.js.map