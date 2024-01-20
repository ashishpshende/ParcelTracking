"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_private_UAM_update-user_update-user_module_ts"],{

/***/ 3399:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/private/UAM/update-user/update-user-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateUserPageRoutingModule": () => (/* binding */ UpdateUserPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _update_user_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-user.page */ 1447);




const routes = [
    {
        path: '',
        component: _update_user_page__WEBPACK_IMPORTED_MODULE_0__.UpdateUserPage
    }
];
let UpdateUserPageRoutingModule = class UpdateUserPageRoutingModule {
};
UpdateUserPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UpdateUserPageRoutingModule);



/***/ }),

/***/ 1123:
/*!*********************************************************************!*\
  !*** ./src/app/pages/private/UAM/update-user/update-user.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateUserPageModule": () => (/* binding */ UpdateUserPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _update_user_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-user-routing.module */ 3399);
/* harmony import */ var _update_user_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-user.page */ 1447);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var src_app_shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared/shared.module */ 1511);









let UpdateUserPageModule = class UpdateUserPageModule {
};
UpdateUserPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _update_user_routing_module__WEBPACK_IMPORTED_MODULE_0__.UpdateUserPageRoutingModule,
            src_app_shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forChild()
        ],
        declarations: [_update_user_page__WEBPACK_IMPORTED_MODULE_1__.UpdateUserPage]
    })
], UpdateUserPageModule);



/***/ }),

/***/ 1447:
/*!*******************************************************************!*\
  !*** ./src/app/pages/private/UAM/update-user/update-user.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateUserPage": () => (/* binding */ UpdateUserPage)
/* harmony export */ });
/* harmony import */ var C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _update_user_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-user.page.html?ngResource */ 2933);
/* harmony import */ var _update_user_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update-user.page.scss?ngResource */ 2112);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/user */ 5783);
/* harmony import */ var src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/language/language.service */ 3469);
/* harmony import */ var src_app_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/loader/loader.service */ 9744);
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user/user.service */ 9709);




/* eslint-disable eqeqeq */

/* eslint-disable @typescript-eslint/quotes */









let UpdateUserPage = class UpdateUserPage {
  constructor(loadingCtrl, userService, activatedRoute, alertController, languageService, router, loaderService) {
    this.loadingCtrl = loadingCtrl;
    this.userService = userService;
    this.activatedRoute = activatedRoute;
    this.alertController = alertController;
    this.languageService = languageService;
    this.router = router;
    this.loaderService = loaderService;
    this.genders = [];
    this.roles = [];
    this.statuses = [];
    this.genders = ['Male', "Female", "Others"];
    this.roles = ["SuperAdmin", "Admin", "User"];
    this.statuses = ["Active", "InActive", "Suspended"];

    if (this.userService.selectedUser != null && this.userService.selectedUser != undefined) {
      this.user = this.userService.selectedUser;
    } else {
      this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_3__.User(JSON.parse("{}"));
    }
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      var rowIndex = Number.parseInt(params["rowIndex"]);
      this.loadUserDetails(rowIndex);
    });
  }

  loadUserDetails(rowIndex) {
    this.loaderService.customLoader("Loading User Details...", 10000);
    this.userService.readByIndex(rowIndex, resp => {
      this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_3__.User(resp.result[0]);
      this.user.Icon = "person-sharp"; //this.userService.selectedUser.clear();

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

  UpdateButtonClicked() {
    if (this.Validate()) {
      this.checkEmailExistance(existinguser => {
        this.presentAlert(this.languageService.translate("SIGN_UP.ALREADY_REGISTERED"), this.languageService.translate("SIGN_UP.USER_WITH_EMAIL_ALREADY_EXISTS"));
      }, absent => {
        this.checkUserNameExistance(existinguser => {
          this.presentAlert(this.languageService.translate("SIGN_UP.ALREADY_REGISTERED"), this.languageService.translate("SIGN_UP.USER_WITH_USERNAME_ALREADY_EXISTS"));
        }, absent => {
          this.UpdateUser(success => {
            this.goToUserList();
          }, failure => {
            this.presentAlert(this.languageService.translate("SIGN_UP.REGISTRATION_FAILED"), this.languageService.translate("SIGN_UP.REGISTRATION_FAILED_MESSAGE"));
          });
        });
      });
    } else {
      this.presentAlert(this.languageService.translate("SIGN_UP.EMPTY_DETAILS"), this.languageService.translate("SIGN_UP.EMPTY_DETAILS_MESSAGE"));
    }
  }

  checkEmailExistance(present, absent) {
    this.loaderService.customLoader("Checking for Email...", 10000);
    this.userService.readByEmail(this.user.Email, results => {
      this.loaderService.dismissLoader();
      var occurance = 0;

      if (results.length > 0) {
        results.forEach(user => {
          if (this.user.Email.toLowerCase() === user.Email.toLowerCase() && this.user.rowIndex !== user.rowIndex) {
            occurance++;
          }
        });

        if (occurance > 0) {
          present(new src_app_models_user__WEBPACK_IMPORTED_MODULE_3__.User(results[0]));
        } else {
          absent();
        }
      } else {
        absent();
      }
    }, error => {
      this.loaderService.dismissLoader();
      absent();
    });
  }

  checkUserNameExistance(present, absent) {
    this.loaderService.customLoader("Checking for User Name...", 10000);
    this.userService.readByUserName(this.user.UserName, results => {
      this.loaderService.dismissLoader();
      var occurance = 0;

      if (results.length > 0) {
        results.forEach(user => {
          if (this.user.UserName === user.UserName && this.user.rowIndex !== user.rowIndex) {
            occurance++;
          }
        });

        if (occurance > 0) {
          present(new src_app_models_user__WEBPACK_IMPORTED_MODULE_3__.User(results[0]));
        } else {
          absent();
        }
      } else {
        absent();
      }
    }, error => {
      this.loaderService.dismissLoader();
      absent();
    });
  }

  UpdateUser(succes, failure) {
    this.loaderService.customLoader("Saving User...", 10000);
    this.user.UpdatedOn = (0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.formatDate)(new Date(), 'dd-MM-yyyy hh:mm:ss', 'en-US', '+0530');
    this.userService.UpdateUser(this.user, results => {
      this.loaderService.dismissLoader();
      this.goToUserList();
    }, error => {
      this.loaderService.dismissLoader();
    });
  }

  Validate() {
    if (this.user.FirstName == null || this.user.FirstName == undefined || this.user.FirstName == "") {
      return false;
    }

    if (this.user.LastName == null || this.user.LastName == undefined || this.user.LastName == "") {
      return false;
    }

    if (this.user.Gender == null || this.user.Gender == undefined || this.user.Gender == "") {
      return false;
    }

    if (this.user.Email == null || this.user.Email == undefined || this.user.Email == "") {
      return false;
    }

    if (this.user.PhoneNumber == null || this.user.PhoneNumber == undefined || this.user.PhoneNumber == "") {
      return false;
    }

    if (this.user.UserName == null || this.user.UserName == undefined || this.user.UserName == "") {
      return false;
    }

    return true;
  } //Alerts


  presentAlert(headerTitle = this.languageService.translate('SIGN_UP.TITLE'), message = this.languageService.translate('SIGN_UP.REGISTRATION_FAILED')) {
    var _this = this;

    return (0,C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        cssClass: 'app-alert-class',
        header: headerTitle,
        subHeader: "",
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

UpdateUserPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController
}, {
  type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_6__.UserService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
}, {
  type: src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_4__.LanguageService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
}, {
  type: src_app_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__.LoaderService
}];

UpdateUserPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-update-user',
  template: _update_user_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_update_user_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], UpdateUserPage);


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

/***/ 2112:
/*!********************************************************************************!*\
  !*** ./src/app/pages/private/UAM/update-user/update-user.page.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = ":host ion-content {\n  --background: url(\"/assets/bg20.JPG\") 0 0/100% 100% no-repeat;\n  background-size: cover;\n  background-color: aliceblue;\n}\n\n.toolbar-backgorund {\n  background-color: aliceblue;\n  color: black;\n}\n\n.user-profile-pic {\n  width: 60px;\n  height: 60px;\n  display: block;\n  margin-top: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: aliceblue;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  background-color: aliceblue;\n  color: black;\n}\n\nion-item.selected {\n  background-color: aliceblue;\n  color: black;\n}\n\nion-card {\n  color: rgb(44, 29, 29);\n  background-color: aliceblue;\n  padding: 0px;\n  margin: 0px;\n  border-radius: 10px;\n}\n\nion-card-content {\n  background-color: aliceblue;\n  color: rgb(19, 13, 13);\n}\n\nion-select {\n  max-width: 100% !important;\n  width: 100% !important;\n  padding-left: 0 !important;\n}\n\nion-text {\n  --padding-top: 0;\n  --padding-start: 0;\n}\n\n.user-results {\n  background-color: aliceblue;\n}\n\n.user-results-list-header {\n  background-color: aliceblue;\n}\n\n.user-result-cell {\n  background-color: aquamarine;\n  margin-top: 10px;\n}\n\n.list-image {\n  font-size: 50px;\n  color: rgb(31, 7, 7);\n}\n\n.user-icon {\n  font-size: 50px;\n  color: rgb(31, 7, 7);\n}\n\n.value {\n  font-size: larger;\n  font-weight: 600;\n}\n\n.text-center {\n  text-align: center;\n  align-items: center;\n}\n\n.bottom-area {\n  position: fixed;\n  left: 0;\n  bottom: 0px;\n  right: 0;\n  background-color: gray;\n  height: 45px;\n  margin-bottom: 0px;\n}\n\n.bottom-button {\n  border-width: 1px;\n  border-color: #3e2c2c;\n  color: white;\n  font-size: larger;\n  font-weight: 800;\n  border-style: solid;\n  width: 50%;\n  margin: auto;\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZS11c2VyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLDZEQUFBO0VBR0Esc0JBQUE7RUFDQSwyQkFBQTtBQUFSOztBQUtBO0VBRUksMkJBQUE7RUFFQSxZQUFBO0FBSko7O0FBT0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQUpKOztBQVFBO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFFQSxZQUFBO0FBTko7O0FBU0E7RUFDSSwyQkFBQTtFQUVBLFlBQUE7QUFQSjs7QUFVQTtFQUNJLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBUEo7O0FBVUE7RUFDSSwyQkFBQTtFQUVBLHNCQUFBO0FBUko7O0FBV0E7RUFDRSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7QUFSRjs7QUFXQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFSRjs7QUFXQTtFQUVJLDJCQUFBO0FBVEo7O0FBWUE7RUFDSSwyQkFBQTtBQVRKOztBQVlBO0VBQ0ksNEJBQUE7RUFDQSxnQkFBQTtBQVRKOztBQVlBO0VBQ0ksZUFBQTtFQUNBLG9CQUFBO0FBVEo7O0FBWUE7RUFDSSxlQUFBO0VBQ0Esb0JBQUE7QUFUSjs7QUFZQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUFUSjs7QUFZQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUFUSjs7QUFZQTtFQUNJLGVBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQVRKOztBQVdFO0VBRUUsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFUSiIsImZpbGUiOiJ1cGRhdGUtdXNlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBpb24tY29udGVudCB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2JnMjAuSlBHXCIpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG4gICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG4udG9vbGJhci1iYWNrZ29ydW5kIHtcclxuICAgIC8vLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1pb24tY29sb3ItZGFyayksIHZhcigtLWlvbi1jb2xvci1kYXJrKSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcblxyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4udXNlci1wcm9maWxlLXBpYyB7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG5cclxufVxyXG5cclxuaW9uLW5vdGUge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG5cclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuaW9uLWl0ZW0uc2VsZWN0ZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG5cclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgY29sb3I6IHJnYig0NCwgMjksIDI5KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcblxyXG4gICAgY29sb3I6IHJnYigxOSwgMTMsIDEzKTtcclxufVxyXG5cclxuaW9uLXNlbGVjdCB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLXRleHQge1xyXG4gIC0tcGFkZGluZy10b3A6IDA7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG59XHJcblxyXG4udXNlci1yZXN1bHRzIHtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcbn1cclxuXHJcbi51c2VyLXJlc3VsdHMtbGlzdC1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG59XHJcblxyXG4udXNlci1yZXN1bHQtY2VsbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmxpc3QtaW1hZ2Uge1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgY29sb3I6IHJnYigzMSwgNywgNyk7XHJcbn1cclxuXHJcbi51c2VyLWljb24ge1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgY29sb3I6IHJnYigzMSwgNywgNyk7XHJcbn1cclxuXHJcbi52YWx1ZSB7XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi50ZXh0LWNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYm90dG9tLWFyZWF7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgfVxyXG4gIC5ib3R0b20tYnV0dG9uXHJcbiAge1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICBib3JkZXItY29sb3I6ICMzZTJjMmM7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICB9XHJcbiJdfQ== */";

/***/ }),

/***/ 2933:
/*!********************************************************************************!*\
  !*** ./src/app/pages/private/UAM/update-user/update-user.page.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n\r\n\r\n  <ion-card>\r\n    <ion-card-header class=\"text-center\">\r\n      <ion-icon class=\"user-icon\" [name]=\"user.Icon\"></ion-icon>\r\n    </ion-card-header>\r\n  </ion-card>\r\n  <ion-card>\r\n    <ion-card-header class=\"text-center\">\r\n      <ion-item>\r\n        <ion-icon name='people-circle-outline' slot=\"start\"></ion-icon>\r\n\r\n        {{'USER.BASIC_DETAILS' | translate}}\r\n      </ion-item>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-list>\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"12\">{{'BASE_MODEL.NAME' | translate}} </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"6\">\r\n                <ion-input class=\"value\"  [(ngModel)]=\"user.FirstName\" placeholder=\" {{'USER.FIRST_NAME' | translate}}\">\r\n                </ion-input>\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <ion-input class=\"value\"  [(ngModel)]=\"user.LastName\" placeholder=\" {{'USER.LAST_NAME' | translate}}\">\r\n                </ion-input>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">{{'USER.GENDER' | translate}} </ion-col>\r\n              <ion-col class=\"value\" size=\"auto\">\r\n                <ion-select multiple=\"false\" cancelText=\"Cancel\" okText=\"Select\" [(ngModel)]=\"user.Gender\"\r\n                  placeholder=\" {{'USER.GENDER' | translate}}\">\r\n                  <ion-select-option *ngFor=\"let gender of genders\" value=\"{{ gender }}\">\r\n                    {{ gender }}\r\n                  </ion-select-option>\r\n                </ion-select>\r\n              </ion-col>\r\n            </ion-row>\r\n            <!-- <ion-row>\r\n              <ion-col size=\"2\"></ion-col>\r\n\r\n            </ion-row> -->\r\n          </ion-grid>\r\n        </ion-item>\r\n\r\n      </ion-list>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <ion-card>\r\n    <ion-card-header class=\"text-center\">\r\n      <ion-item>\r\n        <ion-icon name='settings-outline' slot=\"start\"></ion-icon>\r\n\r\n        {{'USER.CONTACT_DETAILS' | translate}}\r\n      </ion-item>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-list>\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col>{{'USER.EMAIL' | translate}} </ion-col>\r\n              <ion-col class=\"value\" size=\"6\">\r\n                <ion-input [(ngModel)]=\"user.Email\" placeholder=\" {{'USER.EMAIL' | translate}}\">\r\n                </ion-input>\r\n              </ion-col>\r\n            </ion-row>\r\n            <!-- <ion-row>\r\n\r\n            </ion-row> -->\r\n          </ion-grid>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col>{{'USER.PHONE_NUMBER' | translate}} </ion-col>\r\n              <ion-col class=\"value\" size=\"6\">\r\n                <ion-input [(ngModel)]=\"user.PhoneNumber\" placeholder=\" {{'USER.PHONE_NUMBER' | translate}}\">\r\n                </ion-input>\r\n              </ion-col>\r\n            </ion-row>\r\n            <!-- <ion-row>\r\n              <ion-col size=\"6\"></ion-col>\r\n\r\n            </ion-row> -->\r\n          </ion-grid>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-item>\r\n        <ion-icon name='options-outline' slot=\"start\"></ion-icon>\r\n        {{'USER.ACCOUNT_DETAILS' | translate}}\r\n      </ion-item>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-list>\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col>{{'USER.USER_NAME' | translate}} </ion-col>\r\n              <ion-col size=\"6\">\r\n                <ion-input class=\"value\" [(ngModel)]=\"user.UserName\" placeholder=\" {{'USER.USER_NAME' | translate}}\"></ion-input>\r\n              </ion-col>\r\n\r\n            </ion-row>\r\n            <!-- <ion-row>\r\n              <ion-col size=\"6\"></ion-col>\r\n\r\n            </ion-row> -->\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col>{{'USER.ROLE' | translate}} </ion-col>\r\n              <ion-col size=\"6\">\r\n                <ion-select class=\"value\" multiple=\"false\" cancelText=\"Cancel\" okText=\"Select\" [(ngModel)]=\"user.Role\"\r\n                  placeholder=\" {{'USER.ROLE' | translate}}\">\r\n                  <ion-select-option *ngFor=\"let role of roles\" value=\"{{ role }}\">\r\n                    {{ role }}\r\n                  </ion-select-option>\r\n                </ion-select>\r\n              </ion-col>\r\n            </ion-row>\r\n            <!-- <ion-row>\r\n\r\n            </ion-row> -->\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col>{{'BASE_MODEL.STATUS' | translate}} </ion-col>\r\n              <ion-col size=\"6\">\r\n                <ion-select class=\"value\" multiple=\"false\" cancelText=\"Cancel\" okText=\"Select\" [(ngModel)]=\"user.Status\"\r\n                  placeholder=\" {{'BASE_MODEL.STATUS' | translate}}\">\r\n                  <ion-select-option *ngFor=\"let status of statuses\" value=\"{{ status }}\">\r\n                    {{ status }}\r\n                  </ion-select-option>\r\n                </ion-select>\r\n              </ion-col>\r\n            </ion-row>\r\n            <!-- <ion-row>\r\n\r\n            </ion-row> -->\r\n\r\n          </ion-grid>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <ion-card>\r\n    <ion-card-header class=\"text-center\">\r\n      <ion-item>\r\n        <ion-icon></ion-icon>\r\n      </ion-item>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-button expand=\"block\" (click)=\"goToUserList()\" >\r\n    <ion-icon slot=\"start\" name=\"close\"></ion-icon>\r\n    {{'BUTTONS.CANCEL' | translate}}\r\n  </ion-button>\r\n  <ion-button expand=\"block\" (click)=\"UpdateButtonClicked()\" >\r\n    <ion-icon slot=\"start\" name=\"save\"></ion-icon>\r\n    {{'BUTTONS.SAVE' | translate}}\r\n  </ion-button>\r\n</ion-footer>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_private_UAM_update-user_update-user_module_ts.js.map