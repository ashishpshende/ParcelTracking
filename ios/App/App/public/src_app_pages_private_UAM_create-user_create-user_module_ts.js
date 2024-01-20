"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_private_UAM_create-user_create-user_module_ts"],{

/***/ 2321:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/private/UAM/create-user/create-user-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateUserPageRoutingModule": () => (/* binding */ CreateUserPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _create_user_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-user.page */ 9489);




const routes = [
    {
        path: '',
        component: _create_user_page__WEBPACK_IMPORTED_MODULE_0__.CreateUserPage
    }
];
let CreateUserPageRoutingModule = class CreateUserPageRoutingModule {
};
CreateUserPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CreateUserPageRoutingModule);



/***/ }),

/***/ 5517:
/*!*********************************************************************!*\
  !*** ./src/app/pages/private/UAM/create-user/create-user.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateUserPageModule": () => (/* binding */ CreateUserPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _create_user_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-user-routing.module */ 2321);
/* harmony import */ var _create_user_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-user.page */ 9489);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 8699);








let CreateUserPageModule = class CreateUserPageModule {
};
CreateUserPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _create_user_routing_module__WEBPACK_IMPORTED_MODULE_0__.CreateUserPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule.forChild()
        ],
        declarations: [_create_user_page__WEBPACK_IMPORTED_MODULE_1__.CreateUserPage]
    })
], CreateUserPageModule);



/***/ }),

/***/ 9489:
/*!*******************************************************************!*\
  !*** ./src/app/pages/private/UAM/create-user/create-user.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateUserPage": () => (/* binding */ CreateUserPage)
/* harmony export */ });
/* harmony import */ var C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _create_user_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-user.page.html?ngResource */ 8506);
/* harmony import */ var _create_user_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-user.page.scss?ngResource */ 4386);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/user */ 5783);
/* harmony import */ var src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/language/language.service */ 3469);
/* harmony import */ var src_app_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/loader/loader.service */ 9744);
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user/user.service */ 9709);
/* harmony import */ var src_app_services_helpers_helper_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/helpers/helper-service */ 8598);













let CreateUserPage = class CreateUserPage {
  constructor(loadingCtrl, userService, alertController, languageService, router, loaderService) {
    this.loadingCtrl = loadingCtrl;
    this.userService = userService;
    this.alertController = alertController;
    this.languageService = languageService;
    this.router = router;
    this.loaderService = loaderService;
    this.enableSave = false;
    this.emailValidationMessage = "";
    this.phoneNumberValidationMessage = "";
    this.genders = [];
    this.roles = [];
    this.statuses = [];
    this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_3__.User(JSON.parse("{}"));
    this.genders = this.userService.genders;
    this.roles = this.userService.roles;
    this.statuses = this.userService.statuses;
    this.user.Role = "User";
    this.user.FirstName = "";
    this.user.LastName = "";
    this.user.Email = "";
    this.user.PhoneNumber = "";
    this.user.UserName = "";
    this.user.Gender = "";
    this.user.Status = "Active";
  }

  ngOnInit() {
    this.enableSave = false;
  }

  ngAfterViewInit() {}

  emailTextChanged() {
    this.validate();
  }

  phoneNumberTextChanged() {
    this.validate();
  }

  validate() {
    if (src_app_services_helpers_helper_service__WEBPACK_IMPORTED_MODULE_7__.HelperService.validateEmail(this.user.Email) && src_app_services_helpers_helper_service__WEBPACK_IMPORTED_MODULE_7__.HelperService.validateMobileNumber(this.user.PhoneNumber)) {
      this.enableSave = true;
      this.emailValidationMessage = "";
      this.phoneNumberValidationMessage = "";
      return true;
    } else {
      this.enableSave = false;

      if (src_app_services_helpers_helper_service__WEBPACK_IMPORTED_MODULE_7__.HelperService.validateEmail(this.user.Email)) {
        this.emailValidationMessage = "";
      } else {
        this.emailValidationMessage = this.languageService.translate("USER_PROFILE.EMAIL_SYNTAX_VALIDATING_MESSAGE");
        return false;
      }

      if (src_app_services_helpers_helper_service__WEBPACK_IMPORTED_MODULE_7__.HelperService.validateMobileNumber(this.user.PhoneNumber)) {
        this.phoneNumberValidationMessage = "";
      } else {
        this.phoneNumberValidationMessage = this.languageService.translate("USER_PROFILE.PHONE_SYNTAX_VALIDATING_MESSAGE");
        return false;
      }
    }
  }

  ionViewWillEnter() {}

  SaveUser(succes, failure) {
    this.loaderService.customLoader("Saving User...", 10000);
    this.user.Password = "password";
    this.user.CreatedOn = (0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.formatDate)(new Date(), 'dd-MM-yyyy hh:mm:ss', 'en-US', '+0530');
    this.user.UpdatedOn = (0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.formatDate)(new Date(), 'dd-MM-yyyy hh:mm:ss', 'en-US', '+0530');
    this.user.ResetRequired = true;
    this.userService.SaveUser(this.user, results => {
      this.goToUserList();
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
    this.router.navigate(['home/user-list'], navigationExtras);
  }

  checkEmailExistance(present, absent) {
    this.loaderService.customLoader("Checking for Email...", 10000);
    this.userService.readByEmail(this.user.Email, results => {
      this.loaderService.dismissLoader();

      if (results.length != 0) {
        present(new src_app_models_user__WEBPACK_IMPORTED_MODULE_3__.User(results[0]));
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

      if (results.length != 0) {
        present(new src_app_models_user__WEBPACK_IMPORTED_MODULE_3__.User(results[0]));
      } else {
        absent();
      }
    }, error => {
      this.loaderService.dismissLoader();
      absent();
    });
  }

  SaveButtonClicked() {
    if (this.userService.Validate(this.user)) {
      this.checkEmailExistance(existinguser => {
        this.presentAlert(this.languageService.translate("SIGN_UP.ALREADY_REGISTERED"), this.languageService.translate("SIGN_UP.USER_WITH_EMAIL_ALREADY_EXISTS"));
      }, absent => {
        this.checkUserNameExistance(existinguser => {
          this.presentAlert(this.languageService.translate("SIGN_UP.ALREADY_REGISTERED"), this.languageService.translate("SIGN_UP.USER_WITH_USERNAME_ALREADY_EXISTS"));
        }, absent => {
          this.SaveUser(success => {
            this.goToUserList();
          }, failure => {
            this.presentAlert(this.languageService.translate("SIGN_UP.REGISTRATION_FAILED"), this.languageService.translate("SIGN_UP.REGISTRATION_FAILED_MESSAGE"));
          });
        });
      });
    } else {
      this.presentAlert(this.languageService.translate("SIGN_UP.EMPTY_DETAILS"), this.languageService.translate("SIGN_UP.EMPTY_DETAILS_MESSAGE"));
    }
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

CreateUserPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController
}, {
  type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_6__.UserService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController
}, {
  type: src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_4__.LanguageService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
}, {
  type: src_app_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__.LoaderService
}];

CreateUserPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: 'app-create-user',
  template: _create_user_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_create_user_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], CreateUserPage);


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

/***/ 4386:
/*!********************************************************************************!*\
  !*** ./src/app/pages/private/UAM/create-user/create-user.page.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = ":host ion-content {\n  --background: url(\"/assets/bg20.JPG\") 0 0/100% 100% no-repeat;\n  background-size: cover;\n  background-color: aliceblue;\n}\n\n.toolbar-backgorund {\n  background-color: aliceblue;\n}\n\n.user-profile-pic {\n  width: 60px;\n  height: 60px;\n  display: block;\n  margin-top: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: aliceblue;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  background-color: aliceblue;\n  color: black;\n}\n\nion-select {\n  max-width: 100% !important;\n  width: 100% !important;\n  padding-left: 0 !important;\n}\n\nion-item.selected {\n  background-color: aliceblue;\n  color: black;\n}\n\nion-card {\n  color: rgb(44, 29, 29);\n  background-color: aliceblue;\n  padding: 0px;\n  margin: 0px;\n  border-radius: 10px;\n}\n\nion-card-content {\n  background-color: aliceblue;\n  color: rgb(19, 13, 13);\n}\n\n.user-results {\n  background-color: aliceblue;\n}\n\n.user-results-list-header {\n  background-color: aliceblue;\n}\n\n.user-result-cell {\n  background-color: aquamarine;\n  margin-top: 10px;\n}\n\n.list-image {\n  font-size: 50px;\n  color: rgb(31, 7, 7);\n}\n\n.user-icon {\n  font-size: 50px;\n  color: rgb(31, 7, 7);\n}\n\n.value {\n  font-size: larger;\n  font-weight: 600;\n}\n\n.text-center {\n  text-align: center;\n  align-items: center;\n}\n\n.bottom-area {\n  position: fixed;\n  left: 0;\n  bottom: 0px;\n  right: 0;\n  background-color: gray;\n  height: 45px;\n  margin-bottom: 0px;\n}\n\n.bottom-button {\n  border-width: 1px;\n  border-color: #3e2c2c;\n  color: white;\n  font-size: larger;\n  font-weight: 800;\n  border-style: solid;\n  width: 50%;\n  margin: auto;\n  margin-top: 5px;\n}\n\n.custom-card {\n  height: 300px;\n}\n\n.field-list {\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS11c2VyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLDZEQUFBO0VBR0Esc0JBQUE7RUFDQSwyQkFBQTtBQUFSOztBQUtBO0VBRUksMkJBQUE7QUFISjs7QUFRQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FBTEo7O0FBUUE7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUVBLFlBQUE7QUFOSjs7QUFTQTtFQUNFLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtBQU5GOztBQVNBO0VBQ0ksMkJBQUE7RUFFQSxZQUFBO0FBUEo7O0FBVUE7RUFDSSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQVBKOztBQVVBO0VBQ0ksMkJBQUE7RUFFQSxzQkFBQTtBQVJKOztBQVdBO0VBRUksMkJBQUE7QUFUSjs7QUFZQTtFQUNJLDJCQUFBO0FBVEo7O0FBWUE7RUFDSSw0QkFBQTtFQUNBLGdCQUFBO0FBVEo7O0FBWUE7RUFDSSxlQUFBO0VBQ0Esb0JBQUE7QUFUSjs7QUFZQTtFQUNJLGVBQUE7RUFDQSxvQkFBQTtBQVRKOztBQVlBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQVRKOztBQVlBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQVRKOztBQVlBO0VBQ0ksZUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBVEo7O0FBV0U7RUFFRSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQVRKOztBQVdFO0VBRUUsYUFBQTtBQVRKOztBQVdFO0VBRUUsa0JBQUE7QUFUSiIsImZpbGUiOiJjcmVhdGUtdXNlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBpb24tY29udGVudCB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2JnMjAuSlBHXCIpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG4gICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG4udG9vbGJhci1iYWNrZ29ydW5kIHtcclxuICAgIC8vLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1pb24tY29sb3ItZGFyayksIHZhcigtLWlvbi1jb2xvci1kYXJrKSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcblxyXG4gICAvLyBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi51c2VyLXByb2ZpbGUtcGljIHtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcbn1cclxuXHJcbmlvbi1ub3RlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxuXHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbmlvbi1zZWxlY3Qge1xyXG4gIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1pdGVtLnNlbGVjdGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxuXHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICAgIGNvbG9yOiByZ2IoNDQsIDI5LCAyOSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbmlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG5cclxuICAgIGNvbG9yOiByZ2IoMTksIDEzLCAxMyk7XHJcbn1cclxuXHJcbi51c2VyLXJlc3VsdHMge1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxufVxyXG5cclxuLnVzZXItcmVzdWx0cy1saXN0LWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcbn1cclxuXHJcbi51c2VyLXJlc3VsdC1jZWxsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4ubGlzdC1pbWFnZSB7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBjb2xvcjogcmdiKDMxLCA3LCA3KTtcclxufVxyXG5cclxuLnVzZXItaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBjb2xvcjogcmdiKDMxLCA3LCA3KTtcclxufVxyXG5cclxuLnZhbHVlIHtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLnRleHQtY2VudGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ib3R0b20tYXJlYXtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICB9XHJcbiAgLmJvdHRvbS1idXR0b25cclxuICB7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgIGJvcmRlci1jb2xvcjogIzNlMmMyYztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIH1cclxuICAuY3VzdG9tLWNhcmRcclxuICB7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gIH1cclxuICAuZmllbGQtbGlzdFxyXG4gIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICB9XHJcbiJdfQ== */";

/***/ }),

/***/ 8506:
/*!********************************************************************************!*\
  !*** ./src/app/pages/private/UAM/create-user/create-user.page.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <ion-card>\r\n    <ion-card-header class=\"text-center\">\r\n      <ion-item>\r\n        <ion-icon name='people-circle-outline' slot=\"start\"></ion-icon>\r\n        {{'USER.BASIC_DETAILS' | translate}}\r\n      </ion-item>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-list>\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"12\">{{'BASE_MODEL.NAME' | translate}} </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"6\">\r\n                <ion-input  autocomplete=\"nope\"\r\n                 class=\"value\" [(ngModel)]=\"user.FirstName\" placeholder=\" {{'USER.FIRST_NAME' | translate}}\">\r\n                </ion-input>\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <ion-input   autocomplete=\"nope\"\r\n                class=\"value\" [(ngModel)]=\"user.LastName\" placeholder=\" {{'USER.LAST_NAME' | translate}}\">\r\n                </ion-input>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">{{'USER.GENDER' | translate}} </ion-col>\r\n              <ion-col class=\"value\">\r\n                <ion-select multiple=\"false\" cancelText=\"Cancel\" okText=\"Select\" [(ngModel)]=\"user.Gender\"\r\n                  placeholder=\" {{'USER.GENDER' | translate}}\">\r\n                  <ion-select-option *ngFor=\"let gender of genders\" value=\"{{ gender }}\">\r\n                    {{ gender }}\r\n                  </ion-select-option>\r\n                </ion-select>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <ion-card>\r\n    <ion-card-header class=\"text-center\">\r\n      <ion-item>\r\n        <ion-icon name='settings-outline' slot=\"start\"></ion-icon>\r\n        {{'USER.CONTACT_DETAILS' | translate}}\r\n      </ion-item>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-list>\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col>{{'USER.EMAIL' | translate}} </ion-col>\r\n              <ion-col class=\"value\" size=\"6\">\r\n                <ion-input   autocomplete=\"nope\" [(ngModel)]=\"user.Email\" placeholder=\" {{'USER.EMAIL' | translate}}\">\r\n                </ion-input>\r\n              </ion-col>\r\n            </ion-row>\r\n            <!-- <ion-row>\r\n  \r\n            </ion-row> -->\r\n          </ion-grid>\r\n        </ion-item>\r\n  \r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col>{{'USER.PHONE_NUMBER' | translate}} </ion-col>\r\n              <ion-col class=\"value\" size=\"6\">\r\n                <ion-input   autocomplete=\"nope\" [(ngModel)]=\"user.PhoneNumber\" placeholder=\" {{'USER.PHONE_NUMBER' | translate}}\">\r\n                </ion-input>\r\n              </ion-col>\r\n            </ion-row>\r\n            <!-- <ion-row>\r\n              <ion-col size=\"6\"></ion-col>\r\n  \r\n            </ion-row> -->\r\n          </ion-grid>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-item>\r\n        <ion-icon name='options-outline' slot=\"start\"></ion-icon>\r\n        {{'USER.ACCOUNT_DETAILS' | translate}}\r\n      </ion-item>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-list>\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col>{{'USER.USER_NAME' | translate}} </ion-col>\r\n              <ion-col size=\"6\">\r\n                <ion-input   autocomplete=\"nope\" class=\"value\" [(ngModel)]=\"user.UserName\" placeholder=\" {{'USER.USER_NAME' | translate}}\">\r\n                </ion-input>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-button expand=\"block\" (click)=\"goToUserList()\" >\r\n    <ion-icon slot=\"start\" name=\"close\"></ion-icon>\r\n    {{'BUTTONS.CANCEL' | translate}}\r\n  </ion-button>\r\n  <ion-button expand=\"block\" (click)=\"SaveButtonClicked()\" >\r\n    <ion-icon slot=\"start\" name=\"save\"></ion-icon>\r\n    {{'BUTTONS.SAVE' | translate}}\r\n</ion-button>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_private_UAM_create-user_create-user_module_ts.js.map