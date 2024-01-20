"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_public_privacy-policy_privacy-policy_module_ts"],{

/***/ 2732:
/*!******************************************************************************!*\
  !*** ./src/app/pages/public/privacy-policy/privacy-policy-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivacyPolicyPageRoutingModule": () => (/* binding */ PrivacyPolicyPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _privacy_policy_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./privacy-policy.page */ 549);




const routes = [
    {
        path: '',
        component: _privacy_policy_page__WEBPACK_IMPORTED_MODULE_0__.PrivacyPolicyPage
    }
];
let PrivacyPolicyPageRoutingModule = class PrivacyPolicyPageRoutingModule {
};
PrivacyPolicyPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PrivacyPolicyPageRoutingModule);



/***/ }),

/***/ 4876:
/*!**********************************************************************!*\
  !*** ./src/app/pages/public/privacy-policy/privacy-policy.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivacyPolicyPageModule": () => (/* binding */ PrivacyPolicyPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _privacy_policy_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./privacy-policy-routing.module */ 2732);
/* harmony import */ var _privacy_policy_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./privacy-policy.page */ 549);








let PrivacyPolicyPageModule = class PrivacyPolicyPageModule {
};
PrivacyPolicyPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _privacy_policy_routing_module__WEBPACK_IMPORTED_MODULE_0__.PrivacyPolicyPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule.forChild()
        ],
        declarations: [_privacy_policy_page__WEBPACK_IMPORTED_MODULE_1__.PrivacyPolicyPage]
    })
], PrivacyPolicyPageModule);



/***/ }),

/***/ 549:
/*!********************************************************************!*\
  !*** ./src/app/pages/public/privacy-policy/privacy-policy.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivacyPolicyPage": () => (/* binding */ PrivacyPolicyPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _privacy_policy_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./privacy-policy.page.html?ngResource */ 5721);
/* harmony import */ var _privacy_policy_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./privacy-policy.page.scss?ngResource */ 7767);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);






let PrivacyPolicyPage = class PrivacyPolicyPage {
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
PrivacyPolicyPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.Platform },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
PrivacyPolicyPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-privacy-policy',
        template: _privacy_policy_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_privacy_policy_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PrivacyPolicyPage);



/***/ }),

/***/ 7767:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/public/privacy-policy/privacy-policy.page.scss?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "body {\n  z-index: 102;\n  color: whitesmoke;\n  display: block !important;\n  padding: 10px;\n}\n\ndiv {\n  z-index: 102;\n  color: whitesmoke;\n}\n\nh1 {\n  z-index: 102;\n  color: whitesmoke;\n}\n\niframe {\n  overflow-y: hidden;\n  overflow-x: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaXZhY3ktcG9saWN5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLFlBQUE7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQUFKOztBQUdBO0VBRUUsWUFBQTtFQUNFLGlCQUFBO0FBREo7O0FBSUE7RUFFRSxZQUFBO0VBQ0UsaUJBQUE7QUFGSjs7QUFLQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUFGRiIsImZpbGUiOiJwcml2YWN5LXBvbGljeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5XHJcbntcclxuICB6LWluZGV4OiAxMDI7XHJcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG5cclxuZGl2XHJcbntcclxuICB6LWluZGV4OiAxMDI7XHJcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG5cclxuaDFcclxue1xyXG4gIHotaW5kZXg6IDEwMjtcclxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG59XHJcblxyXG5pZnJhbWUge1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 5721:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/public/privacy-policy/privacy-policy.page.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "\r\n\r\n<ion-content>\r\n\r\n  <iframe src=\"https://techglobe.in/privacy-policy-2/\"\r\n  [width]=\"screenWidth\"\r\n  [height]=\"screenHeight\"\r\n  frameborder=\"0\"\r\n  marginheight=\"0\"\r\n  marginwidth=\"0\"\r\n  class=\"ion-padding\">Loading…</iframe>\r\n\r\n\r\n  <!-- <ion-card class=\"under-costruction-card\">\r\n    <ion-card-header class=\"under-costruction-card-header\">\r\n      <ion-icon name=\"construct-sharp\" class=\"under-costruction-card-icon\"></ion-icon>\r\n    </ion-card-header>\r\n    <ion-card-content class=\"under-costruction-card-content\">\r\n       {{'MESSAGES.UNDER_CONSTRUCTION_TITLE' | translate}}\r\n        <p>\r\n            {{'MESSAGES.UNDER_CONSTRUCTION_MESSAGE' | translate}}\r\n          </p>\r\n    </ion-card-content>\r\n  </ion-card> -->\r\n</ion-content>\r\n<ion-footer [translucent]=\"true\">\r\n  <ion-button  expand=\"block\" (click)=\"CancelButtonClicked()\">\r\n    <ion-icon slot=\"start\" name=\"close\"></ion-icon>\r\n    {{'BUTTONS.CANCEL' | translate}}\r\n  </ion-button>\r\n</ion-footer>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_public_privacy-policy_privacy-policy_module_ts.js.map