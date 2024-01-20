"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_private_UAM_user-details_user-details_module_ts"],{

/***/ 8782:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/private/UAM/user-details/user-details-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserDetailsPageRoutingModule": () => (/* binding */ UserDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _user_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-details.page */ 4183);




const routes = [
    {
        path: '',
        component: _user_details_page__WEBPACK_IMPORTED_MODULE_0__.UserDetailsPage
    }
];
let UserDetailsPageRoutingModule = class UserDetailsPageRoutingModule {
};
UserDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UserDetailsPageRoutingModule);



/***/ }),

/***/ 3426:
/*!***********************************************************************!*\
  !*** ./src/app/pages/private/UAM/user-details/user-details.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserDetailsPageModule": () => (/* binding */ UserDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _user_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-details-routing.module */ 8782);
/* harmony import */ var _user_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-details.page */ 4183);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 8699);








let UserDetailsPageModule = class UserDetailsPageModule {
};
UserDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _user_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserDetailsPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule.forChild()
        ],
        declarations: [_user_details_page__WEBPACK_IMPORTED_MODULE_1__.UserDetailsPage]
    })
], UserDetailsPageModule);



/***/ }),

/***/ 4183:
/*!*********************************************************************!*\
  !*** ./src/app/pages/private/UAM/user-details/user-details.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserDetailsPage": () => (/* binding */ UserDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _user_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-details.page.html?ngResource */ 9364);
/* harmony import */ var _user_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-details.page.scss?ngResource */ 1761);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/user */ 5783);
/* harmony import */ var src_app_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/loader/loader.service */ 9744);
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user/user.service */ 9709);








let UserDetailsPage = class UserDetailsPage {
    constructor(userService, activatedRoute, router, loaderService) {
        this.userService = userService;
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
        this.activatedRoute.queryParams.subscribe(params => {
            var rowIndex = Number.parseInt(params["rowIndex"]);
            this.loadUserDetails(rowIndex);
        });
    }
    loadUserDetails(rowIndex) {
        this.loaderService.customLoader("Loading User Details...", 10000);
        this.userService.readByIndex(rowIndex, resp => {
            this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_2__.User(resp.result[0]);
            this.user.Icon = "person-sharp";
            //this.userService.selectedUser.clear();
            this.loaderService.dismissLoader();
        }, error => {
            this.loaderService.dismissLoader();
        });
    }
    goToUserList() {
        this.userService.selectedUser = this.user;
        let navigationExtras = {
            queryParams: {
                ts: new Date().getMilliseconds()
            }
        };
        this.router.navigate(["home/user-list"], navigationExtras);
    }
    EditButtonClicked() {
        this.userService.selectedUser = this.user;
        let navigationExtras = {
            queryParams: {
                rowIndex: this.userService.selectedUser.rowIndex,
                ts: new Date().getMilliseconds()
            }
        };
        this.router.navigate(["home/update-user"], navigationExtras);
    }
};
UserDetailsPage.ctorParameters = () => [
    { type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_3__.LoaderService }
];
UserDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-user-details',
        template: _user_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_user_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UserDetailsPage);



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

/***/ 1761:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/private/UAM/user-details/user-details.page.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = ":host ion-content {\n  --background: url(\"/assets/bg20.JPG\") 0 0/100% 100% no-repeat;\n  background-size: cover;\n  background-color: aliceblue;\n}\n\n.toolbar-backgorund {\n  background-color: aliceblue;\n  color: black;\n}\n\n.user-profile-pic {\n  width: 60px;\n  height: 60px;\n  display: block;\n  margin-top: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: aliceblue;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  background-color: aliceblue;\n  color: black;\n}\n\nion-item.selected {\n  background-color: aliceblue;\n  color: black;\n}\n\nion-card {\n  color: rgb(44, 29, 29);\n  background-color: aliceblue;\n  padding: 0px;\n  margin: 0px;\n  border-radius: 10px;\n}\n\nion-card-content {\n  background-color: aliceblue;\n  color: rgb(19, 13, 13);\n}\n\n.user-results {\n  background-color: aliceblue;\n}\n\n.user-results-list-header {\n  background-color: aliceblue;\n}\n\n.user-result-cell {\n  background-color: aquamarine;\n  margin-top: 10px;\n}\n\n.list-image {\n  font-size: 50px;\n  color: rgb(31, 7, 7);\n}\n\n.user-icon {\n  font-size: 50px;\n  color: rgb(31, 7, 7);\n}\n\n.value {\n  font-size: larger;\n  font-weight: 600;\n}\n\n.text-center {\n  text-align: center;\n  align-items: center;\n}\n\n.bottom-area {\n  position: fixed;\n  left: 0;\n  bottom: 0px;\n  right: 0;\n  background-color: gray;\n  height: 45px;\n  margin-bottom: 0px;\n}\n\n.bottom-button {\n  border-width: 1px;\n  border-color: #3e2c2c;\n  color: white;\n  font-size: larger;\n  font-weight: 800;\n  border-style: solid;\n  width: 50%;\n  margin: auto;\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSw2REFBQTtFQUdBLHNCQUFBO0VBQ0EsMkJBQUE7QUFBUjs7QUFLQTtFQUVJLDJCQUFBO0VBRUEsWUFBQTtBQUpKOztBQU9BO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUFKSjs7QUFPQTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBRUEsWUFBQTtBQUxKOztBQVFBO0VBQ0ksMkJBQUE7RUFFQSxZQUFBO0FBTko7O0FBU0E7RUFDSSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQU5KOztBQVNBO0VBQ0ksMkJBQUE7RUFFQSxzQkFBQTtBQVBKOztBQVVBO0VBRUksMkJBQUE7QUFSSjs7QUFXQTtFQUNJLDJCQUFBO0FBUko7O0FBV0E7RUFDSSw0QkFBQTtFQUNBLGdCQUFBO0FBUko7O0FBV0E7RUFDSSxlQUFBO0VBQ0Esb0JBQUE7QUFSSjs7QUFXQTtFQUNJLGVBQUE7RUFDQSxvQkFBQTtBQVJKOztBQVdBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQVJKOztBQVdBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQVJKOztBQVdBO0VBQ0ksZUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBUko7O0FBVUU7RUFFRSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQVJKIiwiZmlsZSI6InVzZXItZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBpb24tY29udGVudCB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2JnMjAuSlBHXCIpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG4gICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG4udG9vbGJhci1iYWNrZ29ydW5kIHtcclxuICAgIC8vLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1pb24tY29sb3ItZGFyayksIHZhcigtLWlvbi1jb2xvci1kYXJrKSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcblxyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4udXNlci1wcm9maWxlLXBpYyB7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG59XHJcblxyXG5pb24tbm90ZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcblxyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5pb24taXRlbS5zZWxlY3RlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcblxyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgICBjb2xvcjogcmdiKDQ0LCAyOSwgMjkpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG5pb24tY2FyZC1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxuXHJcbiAgICBjb2xvcjogcmdiKDE5LCAxMywgMTMpO1xyXG59XHJcblxyXG4udXNlci1yZXN1bHRzIHtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcbn1cclxuXHJcbi51c2VyLXJlc3VsdHMtbGlzdC1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG59XHJcblxyXG4udXNlci1yZXN1bHQtY2VsbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmxpc3QtaW1hZ2Uge1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgY29sb3I6IHJnYigzMSwgNywgNyk7XHJcbn1cclxuXHJcbi51c2VyLWljb24ge1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgY29sb3I6IHJnYigzMSwgNywgNyk7XHJcbn1cclxuXHJcbi52YWx1ZSB7XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi50ZXh0LWNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYm90dG9tLWFyZWF7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgfVxyXG4gIC5ib3R0b20tYnV0dG9uXHJcbiAge1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICBib3JkZXItY29sb3I6ICMzZTJjMmM7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICB9Il19 */";

/***/ }),

/***/ 9364:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/private/UAM/user-details/user-details.page.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n\r\n\r\n  <ion-card>\r\n    <ion-card-header class=\"text-center\">\r\n      <ion-icon class=\"user-icon\" [name]=\"user.Icon\"></ion-icon>\r\n    </ion-card-header>\r\n  </ion-card>\r\n  <ion-card>\r\n    <ion-card-header class=\"text-center\">\r\n      <ion-item>\r\n        <ion-icon name='people-circle-outline' slot=\"start\"></ion-icon>\r\n\r\n        {{'USER.BASIC_DETAILS' | translate}}\r\n      </ion-item>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-list>\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">{{'BASE_MODEL.NAME' | translate}} </ion-col>\r\n              <ion-col class=\"value\" size=\"6\"> {{user.FirstName}} {{user.LastName}}</ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">{{'USER.GENDER' | translate}} </ion-col>\r\n              <ion-col class=\"value\" size=\"6\"> {{user.Gender}}</ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n\r\n      </ion-list>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <ion-card>\r\n    <ion-card-header class=\"text-center\">\r\n      <ion-item>\r\n        <ion-icon name='settings-outline' slot=\"start\"></ion-icon>\r\n\r\n        {{'USER.CONTACT_DETAILS' | translate}}\r\n      </ion-item>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-list>\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">{{'USER.EMAIL' | translate}} </ion-col>\r\n              <ion-col class=\"value\"> {{user.Email}}</ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">{{'USER.PHONE_NUMBER' | translate}} </ion-col>\r\n              <ion-col class=\"value\" size=\"6\"> {{user.PhoneNumber}}</ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-item>\r\n        <ion-icon name='options-outline' slot=\"start\"></ion-icon>\r\n        {{'USER.ACCOUNT_DETAILS' | translate}}\r\n      </ion-item>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-list>\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">{{'USER.USER_NAME' | translate}} </ion-col>\r\n              <ion-col class=\"value\" size=\"6\"> {{user.UserName}} </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">{{'USER.ROLE' | translate}} </ion-col>\r\n              <ion-col class=\"value\" size=\"6\"> {{user.Role}} </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">{{'BASE_MODEL.STATUS' | translate}} </ion-col>\r\n              <ion-col class=\"value\" size=\"6\"> {{user.Status}} </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-item>\r\n        <ion-icon name='calendar-outline' slot=\"start\"></ion-icon>\r\n        {{'BASE_MODEL.AUDIT_DETAILS' | translate}}\r\n      </ion-item>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-list>\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">{{'BASE_MODEL.CREATED_ON' | translate}} </ion-col>\r\n              <ion-col class=\"value\" size=\"6\"> {{user.CreatedOn}} </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">{{'BASE_MODEL.UPDATED_ON' | translate}} </ion-col>\r\n              <ion-col class=\"value\" size=\"6\"> {{user.UpdatedOn}} </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n\r\n</ion-content>\r\n<ion-footer>\r\n\r\n\r\n  <ion-button expand=\"block\" (click)=\"goToUserList()\" >\r\n    <ion-icon slot=\"start\" name=\"close\"></ion-icon>\r\n    {{'BUTTONS.CANCEL' | translate}}\r\n  </ion-button>\r\n  <ion-button expand=\"block\" (click)=\"EditButtonClicked()\" >\r\n    <ion-icon slot=\"start\" name=\"create\"></ion-icon>\r\n    {{'BUTTONS.EDIT' | translate}}\r\n  </ion-button>\r\n</ion-footer>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_private_UAM_user-details_user-details_module_ts.js.map