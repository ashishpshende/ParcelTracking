"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_private_Vehicles_search-vehicle_search-vehicle_module_ts"],{

/***/ 333:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/private/Vehicles/search-vehicle/search-vehicle-routing.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchVehiclePageRoutingModule": () => (/* binding */ SearchVehiclePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _SEARCH_PARCEL_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-vehicle.page */ 8094);




const routes = [
    {
        path: '',
        component: _SEARCH_PARCEL_page__WEBPACK_IMPORTED_MODULE_0__.SearchVehiclePage
    }
];
let SearchVehiclePageRoutingModule = class SearchVehiclePageRoutingModule {
};
SearchVehiclePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SearchVehiclePageRoutingModule);



/***/ }),

/***/ 8567:
/*!********************************************************************************!*\
  !*** ./src/app/pages/private/Vehicles/search-vehicle/search-vehicle.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchVehiclePageModule": () => (/* binding */ SearchVehiclePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _SEARCH_PARCEL_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-vehicle-routing.module */ 333);
/* harmony import */ var _SEARCH_PARCEL_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-vehicle.page */ 8094);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 8699);








let SearchVehiclePageModule = class SearchVehiclePageModule {
};
SearchVehiclePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _SEARCH_PARCEL_routing_module__WEBPACK_IMPORTED_MODULE_0__.SearchVehiclePageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule.forChild()
        ],
        declarations: [_SEARCH_PARCEL_page__WEBPACK_IMPORTED_MODULE_1__.SearchVehiclePage]
    })
], SearchVehiclePageModule);



/***/ }),

/***/ 8094:
/*!******************************************************************************!*\
  !*** ./src/app/pages/private/Vehicles/search-vehicle/search-vehicle.page.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchVehiclePage": () => (/* binding */ SearchVehiclePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _SEARCH_PARCEL_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-vehicle.page.html?ngResource */ 7851);
/* harmony import */ var _SEARCH_PARCEL_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-vehicle.page.scss?ngResource */ 6237);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_models_SearchFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/SearchFilter */ 3249);
/* harmony import */ var src_app_services_vehicle_vehicle_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/vehicle/vehicle.service */ 4093);
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/user */ 5783);
/* harmony import */ var src_app_services_localStorage_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/localStorage/local-storage.service */ 8565);









let SearchVehiclePage = class SearchVehiclePage {
    constructor(router, vehicleService, localStorageService) {
        this.router = router;
        this.vehicleService = vehicleService;
        this.localStorageService = localStorageService;
        this.ValidateFlag = false;
        this.enableFilter = false;
        this.showRegistrationValidationMessage = false;
        this.showEditButton = false;
        this.showEditButton = false;
        this.vehicleCompanies = ["Select Vehicle Type"];
        this.loggedInUser = new src_app_models_user__WEBPACK_IMPORTED_MODULE_4__.User(JSON.parse("{}"));
        this.searchFilter = new src_app_models_SearchFilter__WEBPACK_IMPORTED_MODULE_2__.SearchFilter(JSON.parse("{}"));
    }
    vehicleTypeChanged() {
        switch (this.searchFilter.Vehicle_Type) {
            case "Two Wheeler":
                this.vehicleCompanies = this.vehicleService.TwoWheelerVehicleCompanies;
                break;
            case "Three Wheeler":
                this.vehicleCompanies = this.vehicleService.ThreeWheelerVehicleCompanies;
                break;
            case "Four Wheeler":
                this.vehicleCompanies = this.vehicleService.FourWheelerVehicleCompanies;
                break;
            case "Bus":
                this.vehicleCompanies = this.vehicleService.BusVehicleCompanies;
                break;
            case "Truck":
                this.vehicleCompanies = this.vehicleService.TruckVehicleCompanies;
                break;
            case "Other":
                this.vehicleCompanies = ["Other"];
                break;
            default:
                this.vehicleCompanies = this.vehicleService.AllCompanies;
                break;
        }
    }
    ngAfterViewInit() {
        this.vehicleTypes = this.vehicleService.vehicleTypes;
        this.vehicleCategories = this.vehicleService.vehicleCategories;
        this.PoliceStationList = this.vehicleService.PoliceStationList;
        this.loggedInUser = this.localStorageService.StoredPreference.LoggedInUser;
        this.showEditButton = this.loggedInUser.Role !== 'User' ? true : false;
        if (this.vehicleService.searchFilter != null && this.vehicleService.searchFilter != undefined)
            this.searchFilter = this.vehicleService.searchFilter;
        else
            this.searchFilter = new src_app_models_SearchFilter__WEBPACK_IMPORTED_MODULE_2__.SearchFilter(JSON.parse("{}"));
        this.resetFilter();
    }
    ngOnInit() {
        if (this.vehicleService.searchFilter != null && this.vehicleService.searchFilter != undefined)
            this.searchFilter = this.vehicleService.searchFilter;
        else
            this.searchFilter = new src_app_models_SearchFilter__WEBPACK_IMPORTED_MODULE_2__.SearchFilter(JSON.parse("{}"));
    }
    vehicleCompanyChanged() {
    }
    vehicleCategoryChanged() {
    }
    PoliceStationChanged() {
    }
    validate() {
        if (this.enableFilter) {
            this.searchFilter.type = "SearchByFilter";
            if (this.searchFilter.Registration_Number != null || this.searchFilter.Registration_Number != '') {
                return true;
            }
            if (this.searchFilter.Vehicle_Type != null || this.searchFilter.Vehicle_Type != '') {
                return true;
            }
            if (this.searchFilter.Category != null || this.searchFilter.Category != '') {
                return true;
            }
            if (this.searchFilter.Engine_Number != null || this.searchFilter.Engine_Number != '') {
                return true;
            }
            if (this.searchFilter.Company != null || this.searchFilter.Company != '') {
                return true;
            }
            if (this.searchFilter.Make != null || this.searchFilter.Make != '') {
                return true;
            }
            if (this.searchFilter.Model != null || this.searchFilter.Model != '') {
                return true;
            }
            if (this.searchFilter.Color != null || this.searchFilter.Color != '') {
                return true;
            }
            if (this.searchFilter.Investigation_Officer_Name != null || this.searchFilter.Investigation_Officer_Name != '') {
                return true;
            }
            if (this.searchFilter.Comments != null || this.searchFilter.Comments != '') {
                return true;
            }
            if (this.searchFilter.Name_Of_Police_Station != null || this.searchFilter.Name_Of_Police_Station != '') {
                return true;
            }
            if (this.searchFilter.Vehicle_owner_complainant != null || this.searchFilter.Vehicle_owner_complainant != '') {
                return true;
            }
            return false;
        }
        else {
            this.searchFilter.type = "SearchByRegNo";
            if (this.searchFilter.Registration_Number == null || this.searchFilter.Registration_Number == '') {
                this.showRegistrationValidationMessage = true;
                return false;
            }
            else {
                this.showRegistrationValidationMessage = false;
                return true;
            }
        }
    }
    SearchButtonClicked() {
        this.ValidateFlag = true;
        this.searchFilter.skip = 0;
        if (this.validate()) {
            this.vehicleService.searchFilter = this.searchFilter;
            this.router.navigate(["home/search-results-vehicle-list"]);
        }
    }
    enableFilterButtonClicked() {
        this.showRegistrationValidationMessage = false;
        this.enableFilter = !this.enableFilter;
        this.resetFilter();
    }
    resetFilter() {
        this.searchFilter.Registration_Number = '';
        this.searchFilter.Vehicle_Type = '';
        this.searchFilter.Category = '';
        this.searchFilter.Engine_Number = '';
        this.searchFilter.Company = '';
        this.searchFilter.Make = '';
        this.searchFilter.Model = '';
        this.searchFilter.Color = '';
        this.searchFilter.Investigation_Officer_Name = '';
        this.searchFilter.ChassisNumber = '';
        this.searchFilter.Comments = '';
        this.searchFilter.Vehicle_owner_complainant = '';
        this.searchFilter.Investigation_Officer_Number = '';
        this.searchFilter.Name_Of_Police_Station = '';
    }
};
SearchVehiclePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_vehicle_vehicle_service__WEBPACK_IMPORTED_MODULE_3__.VehicleService },
    { type: src_app_services_localStorage_local_storage_service__WEBPACK_IMPORTED_MODULE_5__.LocalStorageService }
];
SearchVehiclePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-search-vehicle',
        template: _SEARCH_PARCEL_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_SEARCH_PARCEL_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SearchVehiclePage);



/***/ }),

/***/ 6237:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/private/Vehicles/search-vehicle/search-vehicle.page.scss?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = ":host ion-content {\n  --background: url(\"/assets/bg20.JPG\") 0 0/100% 100% no-repeat ;\n  background-size: cover;\n  background-color: aliceblue;\n}\n\n.toolbar-backgorund {\n  background-color: aliceblue;\n  color: black;\n}\n\n.app-logo {\n  width: 60px;\n  height: 60px;\n  display: block;\n  margin-top: 30px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.search-button {\n  margin-top: 20px;\n}\n\n.search-button-field {\n  text-align: center;\n}\n\n.search-text {\n  color: black;\n}\n\n.validation-message {\n  color: red;\n  padding-left: 20 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC12ZWhpY2xlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNLLDhEQUFBO0VBR0Qsc0JBQUE7RUFDQSwyQkFBQTtBQUFSOztBQUlJO0VBRUUsMkJBQUE7RUFFQSxZQUFBO0FBSE47O0FBS0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFGSjs7QUFJQTtFQUVJLGtCQUFBO0FBRko7O0FBSUE7RUFFSSxnQkFBQTtBQUZKOztBQUlBO0VBRUksa0JBQUE7QUFGSjs7QUFLQTtFQUVJLFlBQUE7QUFISjs7QUFLQTtFQUVJLFVBQUE7RUFDQSwyQkFBQTtBQUhKIiwiZmlsZSI6InNlYXJjaC12ZWhpY2xlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGlvbi1jb250ZW50IHtcclxuICAgICAgICAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2JnMjAuSlBHXCIpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0IDtcclxuICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG5cclxuICAgICAgfVxyXG4gIH1cclxuICAgIC50b29sYmFyLWJhY2tnb3J1bmQgIHtcclxuICAgICAgLy8tLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLWlvbi1jb2xvci1kYXJrKSwgdmFyKC0taW9uLWNvbG9yLWRhcmspKTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG5cclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG4uYXBwLWxvZ297XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcbi50ZXh0LWNlbnRlclxyXG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnNlYXJjaC1idXR0b25cclxue1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4uc2VhcmNoLWJ1dHRvbi1maWVsZFxyXG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG59XHJcbi5zZWFyY2gtdGV4dFxyXG57XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLnZhbGlkYXRpb24tbWVzc2FnZVxyXG57XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMCAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 7851:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/private/Vehicles/search-vehicle/search-vehicle.page.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <div *ngIf=\"!enableFilter\" padding-horizontal text-center class=\"animated fadeInDown\">\r\n    <div class=\"app-logo center\">\r\n      <img src=\"/assets/icon/org-logo.png\">\r\n    </div>\r\n    <h4 no-margin class=\"text-center\">\r\n      <ion-text class=\"search-text\" class=\"ion-text-justify\">\r\n        {{'PARCELS_SEARCH_PAGE.TITLE' | translate}}\r\n      </ion-text>\r\n    </h4>\r\n    <ion-item class=\"search-text-field\">\r\n      <ion-input [(ngModel)]=\"searchFilter.Registration_Number\" placeholder=\" {{'GENERAL.SEARCH_FIELD' | translate}}\">\r\n      </ion-input>\r\n    </ion-item>\r\n    <ion-label *ngIf=\"showRegistrationValidationMessage\" color=\"danger\">\r\n      &nbsp;&nbsp;&nbsp;&nbsp;{{'PARCEL.REGISTRATION_NUMBER' | translate}}\r\n    </ion-label>\r\n    <ion-button expand=\"block\" (click)=\"SearchButtonClicked()\" tappable>\r\n      <ion-icon slot=\"start\" name=\"search\"></ion-icon>\r\n      {{'PARCELS_SEARCH_PAGE.TITLE' | translate}}\r\n    </ion-button>\r\n  </div>\r\n\r\n\r\n  <div *ngIf=\"enableFilter\" padding-horizontal text-center class=\"animated fadeInDown\">\r\n    <div class=\"app-logo center\">\r\n      <img src=\"/assets/icon/org-logo.png\">\r\n    </div>\r\n    <h4 no-margin class=\"text-center\">\r\n      <ion-text class=\"search-text\" class=\"ion-text-justify\">\r\n        {{'PARCELS_SEARCH_PAGE.SEARCH_BY_FILTER_TITLE' | translate}}\r\n      </ion-text>\r\n    </h4>\r\n    <ion-list class=\"search-text-field-list\">\r\n      <ion-item class=\"search-text-field\">\r\n        <ion-input class=\"search-text\"  [(ngModel)]=\"searchFilter.Registration_Number\"\r\n          placeholder=\" {{'PARCEL.REGISTRATION_NUMBER' | translate}}\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <!-- <ion-input [(ngModel)]=\"searchFilter.Vehicle_Type\" placeholder=\" {{'PARCEL.PARCEL_TYPE' | translate}}\">\r\n        </ion-input> -->\r\n\r\n        <ion-item>\r\n          <ion-select  (ionChange)=\"vehicleTypeChanged()\" multiple=\"false\" cancelText=\"Cancel\" okText=\"Select\"  [(ngModel)]=\"searchFilter.Vehicle_Type\"  placeholder=\" {{'PARCEL.PARCEL_TYPE' | translate}}\">\r\n            <ion-select-option *ngFor=\"let vehicleType of vehicleTypes\"\r\n            value=\"{{ vehicleType }}\">\r\n              {{ vehicleType }}\r\n              </ion-select-option>\r\n          </ion-select>\r\n\r\n\r\n        </ion-item>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-input  [(ngModel)]=\"searchFilter.Engine_Number\" placeholder=\" {{'PARCEL.ENGINE_NUMNER' | translate}}\">\r\n        </ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-input [(ngModel)]=\"searchFilter.ChassisNumber\" placeholder=\" {{'PARCEL.CHASSIS_NUMBER' | translate}}\">\r\n        </ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-select  (ionChange)=\"vehicleCompanyChanged()\" multiple=\"false\" cancelText=\"Cancel\" okText=\"Select\"  [(ngModel)]=\"searchFilter.Company\"  placeholder=\" {{'PARCEL.COMPANY' | translate}}\">\r\n          <ion-select-option *ngFor=\"let vehicleCompany of vehicleCompanies\"\r\n          value=\"{{ vehicleCompany }}\">\r\n            {{ vehicleCompany }}\r\n            </ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-input [(ngModel)]=\"searchFilter.Make\" placeholder=\" {{'PARCEL.MAKE' | translate}}\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-input [(ngModel)]=\"searchFilter.Model\" placeholder=\" {{'PARCEL.MODEL' | translate}}\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-input [(ngModel)]=\"searchFilter.Color\" placeholder=\" {{'PARCEL.COLOR' | translate}}\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-select  (ionChange)=\"vehicleCategoryChanged()\" multiple=\"false\" cancelText=\"Cancel\" okText=\"Select\"  [(ngModel)]=\"searchFilter.Category\"  placeholder=\" {{'PARCEL.CATEGORY' | translate}}\">\r\n          <ion-select-option *ngFor=\"let Category of vehicleCategories\"\r\n          value=\"{{ Category }}\">\r\n            {{ Category }}\r\n            </ion-select-option>\r\n          </ion-select>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-input [(ngModel)]=\"searchFilter.Investigation_Officer_Name\"\r\n          placeholder=\" {{'PARCEL.INVESTIGATION_OFFICER_NAME' | translate}}\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-input [(ngModel)]=\"searchFilter.Investigation_Officer_Number\"\r\n          placeholder=\" {{'PARCEL.INVESTIGATION_OFFICER_NUMBER' | translate}}\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>     \r\n          <ion-select  (ionChange)=\"PoliceStationChanged()\" multiple=\"false\" cancelText=\"Cancel\" okText=\"Select\"  [(ngModel)]=\"searchFilter.Name_Of_Police_Station\"  placeholder=\" {{'PARCEL.POLICE_STATION_DETAILS' | translate}}\">\r\n            <ion-select-option *ngFor=\"let PoliceStation of PoliceStationList\"\r\n            value=\"{{ PoliceStation }}\">\r\n              {{ PoliceStation }}\r\n              </ion-select-option>\r\n            </ion-select>\r\n\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-input [(ngModel)]=\"searchFilter.Comments\" placeholder=\" {{'PARCEL.COMMENTS' | translate}}\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-input [(ngModel)]=\"searchFilter.Vehicle_owner_complainant\" placeholder=\" {{'PARCEL.COMPLAINENT' | translate}}\"></ion-input>\r\n      </ion-item>\r\n    </ion-list>\r\n    <ion-button class=\"search-button\" expand=\"full\" (click)=\"SearchButtonClicked()\" tappable>\r\n      {{'PARCELS_SEARCH_PAGE.TITLE' | translate}}\r\n    </ion-button>\r\n  </div>\r\n  <ion-item >\r\n    {{'PARCELS_SEARCH_PAGE.SEARCH_BY_FILTER_TITLE' | translate}}\r\n    <ion-toggle slot=\"end\" [checked]=\"enableFilter\" (ionChange)=\"enableFilterButtonClicked()\"></ion-toggle>\r\n  </ion-item>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_private_Vehicles_search-vehicle_search-vehicle_module_ts.js.map