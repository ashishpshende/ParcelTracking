"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_private_Vehicles_create-vehicle_create-vehicle_module_ts"],{

/***/ 916:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/private/Vehicles/create-vehicle/create-vehicle-routing.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateVehiclePageRoutingModule": () => (/* binding */ CreateVehiclePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _create_vehicle_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-vehicle.page */ 9565);




const routes = [
    {
        path: '',
        component: _create_vehicle_page__WEBPACK_IMPORTED_MODULE_0__.CreateVehiclePage
    }
];
let CreateVehiclePageRoutingModule = class CreateVehiclePageRoutingModule {
};
CreateVehiclePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CreateVehiclePageRoutingModule);



/***/ }),

/***/ 5941:
/*!********************************************************************************!*\
  !*** ./src/app/pages/private/Vehicles/create-vehicle/create-vehicle.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateVehiclePageModule": () => (/* binding */ CreateVehiclePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _create_vehicle_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-vehicle-routing.module */ 916);
/* harmony import */ var _create_vehicle_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-vehicle.page */ 9565);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 8699);








let CreateVehiclePageModule = class CreateVehiclePageModule {
};
CreateVehiclePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _create_vehicle_routing_module__WEBPACK_IMPORTED_MODULE_0__.CreateVehiclePageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule.forChild()
        ],
        declarations: [_create_vehicle_page__WEBPACK_IMPORTED_MODULE_1__.CreateVehiclePage]
    })
], CreateVehiclePageModule);



/***/ }),

/***/ 9565:
/*!******************************************************************************!*\
  !*** ./src/app/pages/private/Vehicles/create-vehicle/create-vehicle.page.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateVehiclePage": () => (/* binding */ CreateVehiclePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _create_vehicle_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-vehicle.page.html?ngResource */ 9417);
/* harmony import */ var _create_vehicle_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-vehicle.page.scss?ngResource */ 7650);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);






let CreateVehiclePage = class CreateVehiclePage {
    constructor(platform, router) {
        this.router = router;
        this.screenHeight = platform.height();
        this.screenWidth = platform.width();
    }
    ngOnInit() {
    }
    CancelButtonClicked() {
        this.router.navigate(["home/dashboard"]);
    }
};
CreateVehiclePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.Platform },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
CreateVehiclePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-create-vehicle',
        template: _create_vehicle_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_create_vehicle_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CreateVehiclePage);



/***/ }),

/***/ 7650:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/private/Vehicles/create-vehicle/create-vehicle.page.scss?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = "ion-select {\n  max-width: 100% !important;\n  width: 100% !important;\n  padding-left: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS12ZWhpY2xlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtBQUNGIiwiZmlsZSI6ImNyZWF0ZS12ZWhpY2xlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zZWxlY3Qge1xyXG4gIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 9417:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/private/Vehicles/create-vehicle/create-vehicle.page.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = "\r\n\r\n<ion-content>\r\n\r\n  <iframe src=\"https://docs.google.com/forms/d/e/1FAIpQLSfHi_T0RBhCww4OVlCmuEIn2EB5IY-TsQ7g9vuEA_RyIDjVEg/viewform?embedded=true\"\r\n  [width]=\"screenWidth\"\r\n  [height]=\"screenHeight\"\r\n  frameborder=\"0\"\r\n  marginheight=\"0\"\r\n  marginwidth=\"0\">Loading…</iframe>\r\n\r\n\r\n  <!-- <ion-card class=\"under-costruction-card\">\r\n    <ion-card-header class=\"under-costruction-card-header\">\r\n      <ion-icon name=\"construct-sharp\" class=\"under-costruction-card-icon\"></ion-icon>\r\n    </ion-card-header>\r\n    <ion-card-content class=\"under-costruction-card-content\">\r\n       {{'MESSAGES.UNDER_CONSTRUCTION_TITLE' | translate}}\r\n        <p>\r\n            {{'MESSAGES.UNDER_CONSTRUCTION_MESSAGE' | translate}}\r\n          </p>\r\n    </ion-card-content>\r\n  </ion-card> -->\r\n</ion-content>\r\n<ion-footer [translucent]=\"true\">\r\n  <ion-button  expand=\"block\" (click)=\"CancelButtonClicked()\">\r\n    <ion-icon slot=\"start\" name=\"close\"></ion-icon>\r\n    {{'BUTTONS.CANCEL' | translate}}\r\n  </ion-button>\r\n</ion-footer>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_private_Vehicles_create-vehicle_create-vehicle_module_ts.js.map