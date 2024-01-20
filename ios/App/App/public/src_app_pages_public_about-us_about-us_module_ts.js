"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_public_about-us_about-us_module_ts"],{

/***/ 8163:
/*!******************************************************************!*\
  !*** ./src/app/pages/public/about-us/about-us-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutUsPageRoutingModule": () => (/* binding */ AboutUsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _about_us_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-us.page */ 4999);




const routes = [
    {
        path: '',
        component: _about_us_page__WEBPACK_IMPORTED_MODULE_0__.AboutUsPage
    }
];
let AboutUsPageRoutingModule = class AboutUsPageRoutingModule {
};
AboutUsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AboutUsPageRoutingModule);



/***/ }),

/***/ 6830:
/*!**********************************************************!*\
  !*** ./src/app/pages/public/about-us/about-us.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutUsPageModule": () => (/* binding */ AboutUsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/shared/shared.module */ 1511);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _about_us_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-us-routing.module */ 8163);
/* harmony import */ var _about_us_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-us.page */ 4999);









let AboutUsPageModule = class AboutUsPageModule {
};
AboutUsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _about_us_routing_module__WEBPACK_IMPORTED_MODULE_1__.AboutUsPageRoutingModule,
            _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forChild()
        ],
        declarations: [_about_us_page__WEBPACK_IMPORTED_MODULE_2__.AboutUsPage]
    })
], AboutUsPageModule);



/***/ }),

/***/ 4999:
/*!********************************************************!*\
  !*** ./src/app/pages/public/about-us/about-us.page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutUsPage": () => (/* binding */ AboutUsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _about_us_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-us.page.html?ngResource */ 1814);
/* harmony import */ var _about_us_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-us.page.scss?ngResource */ 7037);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let AboutUsPage = class AboutUsPage {
    constructor() { }
    ngOnInit() {
    }
};
AboutUsPage.ctorParameters = () => [];
AboutUsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-about-us',
        template: _about_us_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_about_us_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AboutUsPage);



/***/ }),

/***/ 7037:
/*!*********************************************************************!*\
  !*** ./src/app/pages/public/about-us/about-us.page.scss?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = ":host ion-content {\n  --background: url(\"/assets/bg20.JPG\") 0 0/100% 100% no-repeat ;\n  background-color: white;\n  background-size: cover;\n}\n:host #TitleToolbar {\n  background-color: white;\n  --background: linear-gradient(180deg, var(--ion-color-light), var(--ion-color-medium-contrast));\n  color: black;\n}\nion-col {\n  padding: 0px;\n  margin: 0px;\n}\nion-card, ion-card-header, ion-card-content {\n  color: black;\n  align-items: center;\n  justify-content: center;\n  background: none;\n  margin: 2px;\n  margin-bottom: 10px;\n  padding: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LXVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNLLDhEQUFBO0VBQ0QsdUJBQUE7RUFHQSxzQkFBQTtBQUFOO0FBSUU7RUFDRSx1QkFBQTtFQUNBLCtGQUFBO0VBQ0EsWUFBQTtBQUZKO0FBS0E7RUFFRSxZQUFBO0VBQ0EsV0FBQTtBQUhGO0FBTUE7RUFFRSxZQUFBO0VBQ0EsbUJBQUE7RUFBcUIsdUJBQUE7RUFDckIsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBSEYiLCJmaWxlIjoiYWJvdXQtdXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGlvbi1jb250ZW50IHtcclxuICAgICAgIC0tYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9iZzIwLkpQR1wiKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdCA7IFxyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gICNUaXRsZVRvb2xiYXIgIHsgICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSwgdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdCkpO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxufVxyXG5pb24tY29sXHJcbntcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbmlvbi1jYXJkLCBpb24tY2FyZC1oZWFkZXIsIGlvbi1jYXJkLWNvbnRlbnRcclxue1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOm5vbmU7XHJcbiAgbWFyZ2luOiAycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbiAiXX0= */";

/***/ }),

/***/ 1814:
/*!*********************************************************************!*\
  !*** ./src/app/pages/public/about-us/about-us.page.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "\r\n<ion-header>\r\n  <ion-toolbar id=\"TitleToolbar\" class=\"text-center\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{'ABOUT_US.PAGE_TITLE' | translate}}</ion-title>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-img src=\"assets/icon/companylogo.png\"></ion-img>\r\n    </ion-card-header>\r\n  </ion-card>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_public_about-us_about-us_module_ts.js.map