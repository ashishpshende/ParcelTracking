"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_private_UAM_view-user-profile_view-user-profile_module_ts"],{

/***/ 5930:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/private/UAM/view-user-profile/view-user-profile-routing.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewUserProfilePageRoutingModule": () => (/* binding */ ViewUserProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _view_user_profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-user-profile.page */ 9456);




const routes = [
    {
        path: '',
        component: _view_user_profile_page__WEBPACK_IMPORTED_MODULE_0__.ViewUserProfilePage
    }
];
let ViewUserProfilePageRoutingModule = class ViewUserProfilePageRoutingModule {
};
ViewUserProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ViewUserProfilePageRoutingModule);



/***/ }),

/***/ 545:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/private/UAM/view-user-profile/view-user-profile.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewUserProfilePageModule": () => (/* binding */ ViewUserProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _view_user_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-user-profile-routing.module */ 5930);
/* harmony import */ var _view_user_profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-user-profile.page */ 9456);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var src_app_shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared/shared.module */ 1511);









let ViewUserProfilePageModule = class ViewUserProfilePageModule {
};
ViewUserProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _view_user_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ViewUserProfilePageRoutingModule,
            src_app_shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forChild()
        ],
        declarations: [_view_user_profile_page__WEBPACK_IMPORTED_MODULE_1__.ViewUserProfilePage]
    })
], ViewUserProfilePageModule);



/***/ }),

/***/ 9456:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/private/UAM/view-user-profile/view-user-profile.page.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewUserProfilePage": () => (/* binding */ ViewUserProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _view_user_profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-user-profile.page.html?ngResource */ 2820);
/* harmony import */ var _view_user_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-user-profile.page.scss?ngResource */ 4645);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/user */ 5783);
/* harmony import */ var src_app_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/loader/loader.service */ 9744);
/* harmony import */ var src_app_services_localStorage_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/localStorage/local-storage.service */ 8565);
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user/user.service */ 9709);









let ViewUserProfilePage = class ViewUserProfilePage {
    constructor(userService, localStorageService, activatedRoute, router, loaderService) {
        this.userService = userService;
        this.localStorageService = localStorageService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.loaderService = loaderService;
        if (this.userService.selectedUser != null && this.userService.selectedUser != undefined) {
            this.user = this.userService.selectedUser;
        }
        else {
            this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_2__.User(JSON.parse("{}"));
        }
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.user = this.localStorageService.StoredPreference.LoggedInUser;
    }
    gotoResetPassword() {
        this.userService.selectedUser = this.user;
        this.userService.lastRoute = "view-user-profile";
        let navigationExtras = {
            queryParams: {
                email: this.user.Email,
                ts: new Date().getTime()
            }
        };
        this.router.navigate(["reset-password"], navigationExtras);
    }
    goToHome() {
        this.userService.selectedUser = this.user;
        let navigationExtras = {
            queryParams: {
                ts: new Date().getTime()
            }
        };
        this.router.navigate(["home"], navigationExtras);
    }
    EditButtonClicked() {
        this.userService.selectedUser = this.user;
        let navigationExtras = {
            queryParams: {
                ts: new Date().getTime()
            }
        };
        this.router.navigate(["update-user-profile"], navigationExtras);
    }
};
ViewUserProfilePage.ctorParameters = () => [
    { type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService },
    { type: src_app_services_localStorage_local_storage_service__WEBPACK_IMPORTED_MODULE_4__.LocalStorageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_3__.LoaderService }
];
ViewUserProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-view-user-profile',
        template: _view_user_profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_view_user_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ViewUserProfilePage);



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

/***/ 4645:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/private/UAM/view-user-profile/view-user-profile.page.scss?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = ":host ion-content {\n  --background: url(\"/assets/bg20.JPG\") 0 0/100% 100% no-repeat;\n  background-size: cover;\n  background-color: aliceblue;\n}\n\n.toolbar-backgorund {\n  background-color: aliceblue;\n  color: black;\n}\n\n.user-profile-pic {\n  width: 60px;\n  height: 60px;\n  display: block;\n  margin-top: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: aliceblue;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  background-color: aliceblue;\n  color: black;\n}\n\nion-item.selected {\n  background-color: aliceblue;\n  color: black;\n}\n\nion-card {\n  color: rgb(44, 29, 29);\n  background-color: aliceblue;\n  padding: 0px;\n  margin: 0px;\n  border-radius: 10px;\n}\n\nion-card-content {\n  background-color: aliceblue;\n  color: rgb(19, 13, 13);\n}\n\n.user-results {\n  background-color: aliceblue;\n}\n\n.user-results-list-header {\n  background-color: aliceblue;\n}\n\n.user-result-cell {\n  background-color: aquamarine;\n  margin-top: 10px;\n}\n\n.list-image {\n  font-size: 50px;\n  color: rgb(31, 7, 7);\n}\n\n.user-icon {\n  font-size: 50px;\n  color: rgb(31, 7, 7);\n}\n\n.value {\n  font-size: larger;\n  font-weight: 600;\n}\n\n.text-center {\n  text-align: center;\n  align-items: center;\n}\n\n.bottom-area {\n  position: fixed;\n  left: 0;\n  bottom: 0px;\n  right: 0;\n  background-color: gray;\n  height: 45px;\n  margin-bottom: 0px;\n}\n\n.bottom-button {\n  border-width: 1px;\n  border-color: #3e2c2c;\n  color: white;\n  font-size: larger;\n  font-weight: 800;\n  border-style: solid;\n  width: 50%;\n  margin: auto;\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctdXNlci1wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLDZEQUFBO0VBR0Esc0JBQUE7RUFDQSwyQkFBQTtBQUFSOztBQUtBO0VBRUksMkJBQUE7RUFFQSxZQUFBO0FBSko7O0FBT0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQUpKOztBQU9BO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFFQSxZQUFBO0FBTEo7O0FBUUE7RUFDSSwyQkFBQTtFQUVBLFlBQUE7QUFOSjs7QUFTQTtFQUNJLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBTko7O0FBU0E7RUFDSSwyQkFBQTtFQUVBLHNCQUFBO0FBUEo7O0FBVUE7RUFFSSwyQkFBQTtBQVJKOztBQVdBO0VBQ0ksMkJBQUE7QUFSSjs7QUFXQTtFQUNJLDRCQUFBO0VBQ0EsZ0JBQUE7QUFSSjs7QUFXQTtFQUNJLGVBQUE7RUFDQSxvQkFBQTtBQVJKOztBQVdBO0VBQ0ksZUFBQTtFQUNBLG9CQUFBO0FBUko7O0FBV0E7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FBUko7O0FBV0E7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FBUko7O0FBV0E7RUFDSSxlQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFSSjs7QUFVRTtFQUVFLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBUkoiLCJmaWxlIjoidmlldy11c2VyLXByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgaW9uLWNvbnRlbnQge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9iZzIwLkpQR1wiKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcclxuICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuLnRvb2xiYXItYmFja2dvcnVuZCB7XHJcbiAgICAvLy0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0taW9uLWNvbG9yLWRhcmspLCB2YXIoLS1pb24tY29sb3ItZGFyaykpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG5cclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnVzZXItcHJvZmlsZS1waWMge1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxufVxyXG5cclxuaW9uLW5vdGUge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG5cclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuaW9uLWl0ZW0uc2VsZWN0ZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG5cclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgY29sb3I6IHJnYig0NCwgMjksIDI5KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcblxyXG4gICAgY29sb3I6IHJnYigxOSwgMTMsIDEzKTtcclxufVxyXG5cclxuLnVzZXItcmVzdWx0cyB7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG59XHJcblxyXG4udXNlci1yZXN1bHRzLWxpc3QtaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxufVxyXG5cclxuLnVzZXItcmVzdWx0LWNlbGwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5saXN0LWltYWdlIHtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIGNvbG9yOiByZ2IoMzEsIDcsIDcpO1xyXG59XHJcblxyXG4udXNlci1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIGNvbG9yOiByZ2IoMzEsIDcsIDcpO1xyXG59XHJcblxyXG4udmFsdWUge1xyXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4udGV4dC1jZW50ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmJvdHRvbS1hcmVhe1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gIH1cclxuICAuYm90dG9tLWJ1dHRvblxyXG4gIHtcclxuICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjM2UyYzJjO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgfSJdfQ== */";

/***/ }),

/***/ 2820:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/private/UAM/view-user-profile/view-user-profile.page.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = "\r\n<ion-header>\r\n  <ion-toolbar id=\"TitleToolbar\" class=\"text-center\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{'USER_PROFILE.PAGE_TITLE' | translate}}</ion-title>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-card>\r\n    <ion-card-header class=\"text-center\">\r\n      <ion-icon class=\"user-icon\" [name]=\"user.Icon\"></ion-icon>\r\n    </ion-card-header>\r\n  </ion-card>\r\n  <ion-card>\r\n    <ion-card-header class=\"text-center\">\r\n      <ion-item>\r\n        <ion-icon name='people-circle-outline' slot=\"start\"></ion-icon>\r\n\r\n        {{'USER.BASIC_DETAILS' | translate}}\r\n      </ion-item>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-list>\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">{{'BASE_MODEL.NAME' | translate}} </ion-col>\r\n              <ion-col class=\"value\" size=\"6\"> {{user.FirstName}} {{user.LastName}}</ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">{{'USER.GENDER' | translate}} </ion-col>\r\n              <ion-col class=\"value\" size=\"6\"> {{user.Gender}}</ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n\r\n      </ion-list>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <ion-card>\r\n    <ion-card-header class=\"text-center\">\r\n      <ion-item>\r\n        <ion-icon name='settings-outline' slot=\"start\"></ion-icon>\r\n\r\n        {{'USER.CONTACT_DETAILS' | translate}}\r\n      </ion-item>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-list>\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">{{'USER.EMAIL' | translate}} </ion-col>\r\n              <ion-col class=\"value\"> {{user.Email}}</ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">{{'USER.PHONE_NUMBER' | translate}} </ion-col>\r\n              <ion-col class=\"value\" size=\"6\"> {{user.PhoneNumber}}</ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-button expand=\"block\" (click)=\"gotoResetPassword()\">\r\n    <ion-icon slot=\"start\" name=\"refresh-circle\"></ion-icon>\r\n    {{'RESET_PASSWORD.TITLE' | translate}}\r\n  </ion-button>\r\n \r\n  <ion-button expand=\"block\" (click)=\"EditButtonClicked()\">\r\n    <ion-icon slot=\"start\" name=\"create\"></ion-icon>\r\n    {{'BUTTONS.EDIT' | translate}}\r\n  </ion-button>\r\n  <ion-button expand=\"block\" (click)=\"goToHome()\">\r\n    <ion-icon slot=\"start\" name=\"close\"></ion-icon>\r\n    {{'BUTTONS.CANCEL' | translate}}\r\n  </ion-button>\r\n</ion-footer>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_private_UAM_view-user-profile_view-user-profile_module_ts.js.map