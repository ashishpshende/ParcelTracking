"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_public_forgot-password_forgot-password_module_ts"],{

/***/ 3922:
/*!********************************************************************************!*\
  !*** ./src/app/pages/public/forgot-password/forgot-password-routing.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordPageRoutingModule": () => (/* binding */ ForgotPasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password.page */ 8347);




const routes = [
    {
        path: '',
        component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_0__.ForgotPasswordPage
    }
];
let ForgotPasswordPageRoutingModule = class ForgotPasswordPageRoutingModule {
};
ForgotPasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ForgotPasswordPageRoutingModule);



/***/ }),

/***/ 9061:
/*!************************************************************************!*\
  !*** ./src/app/pages/public/forgot-password/forgot-password.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordPageModule": () => (/* binding */ ForgotPasswordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/shared/shared.module */ 1511);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-password-routing.module */ 3922);
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgot-password.page */ 8347);









let ForgotPasswordPageModule = class ForgotPasswordPageModule {
};
ForgotPasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_1__.ForgotPasswordPageRoutingModule,
            _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forChild()
        ],
        declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_2__.ForgotPasswordPage]
    })
], ForgotPasswordPageModule);



/***/ }),

/***/ 8347:
/*!**********************************************************************!*\
  !*** ./src/app/pages/public/forgot-password/forgot-password.page.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordPage": () => (/* binding */ ForgotPasswordPage)
/* harmony export */ });
/* harmony import */ var C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _forgot_password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-password.page.html?ngResource */ 4805);
/* harmony import */ var _forgot_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgot-password.page.scss?ngResource */ 1403);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/user */ 5783);
/* harmony import */ var src_app_services_helpers_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/helpers/helper-service */ 8598);
/* harmony import */ var src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/language/language.service */ 3469);
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user/user.service */ 9709);




/* eslint-disable max-len */







let ForgotPasswordPage = class ForgotPasswordPage {
  constructor(alertController, loadingController, userService, languageService, navCtrl, loadingCtrl) {
    this.alertController = alertController;
    this.loadingController = loadingController;
    this.userService = userService;
    this.languageService = languageService;
    this.navCtrl = navCtrl;
    this.loadingCtrl = loadingCtrl;
    this.userEmailValidationMessage = "";
    this.userNameValidationMessage = "";
    this.userEmail = "";
    this.userName = "";
    this.enableRequestButton = false;
    this.allowClose = false;
    this.localUser = new src_app_models_user__WEBPACK_IMPORTED_MODULE_3__.User(JSON.parse("{}"));
    this.userEmail = "";
    this.userName = "";
  }

  ionViewWillEnter() {}

  ngOnInit() {}

  userNameTextChanged() {
    this.validate();
  }

  emailTextChanged() {
    this.validate();
  }

  validate() {
    if (this.validateEmail() && this.validateUsername()) {
      this.enableRequestButton = true;
      return true;
    } else {
      this.enableRequestButton = false;
      return false;
    }
  }

  validateUsername() {
    if (this.userName == null || this.userName == undefined || this.userName.length == 0) {
      this.userNameValidationMessage = this.languageService.translate('FORGOT_PASSWORD_PAGE.USER_NAME_SYNTAX_VALIDATING_MESSAGE');
      return false;
    } else {
      this.userNameValidationMessage = "";
      return true;
    }

    return true;
  }

  validateEmail() {
    var result = src_app_services_helpers_helper_service__WEBPACK_IMPORTED_MODULE_4__.HelperService.validateEmail(this.userEmail);

    if (this.userEmail.length > 0 && !result) {
      this.userEmailValidationMessage = this.languageService.translate('FORGOT_PASSWORD_PAGE.EMAIL_SYNTAX_VALIDATING_MESSAGE');
    } else {
      this.userEmailValidationMessage = "";
    }

    return result;
  }

  RequestPasswordButtonClicked() {
    var _this = this;

    return (0,C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loader = yield _this.loadingCtrl.create({
        message: _this.languageService.translate('FORGOT_PASSWORD_PAGE.VALIDATING_MESSAGE'),
        duration: 3000
      });
      loader.present();

      _this.userService.getUserByUserNameEmail(_this.userName, _this.userEmail, /*#__PURE__*/function () {
        var _ref = (0,C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
          if (response === null || response === undefined || response.results.length === 0) {
            loader.dismiss();

            _this.presentAlert(_this.languageService.translate('FORGOT_PASSWORD_PAGE.EMAIL_NOT_SENT_TITLE'), _this.languageService.translate('FORGOT_PASSWORD_PAGE.INVALID_DETAILS_MESSAGE'));
          } else {
            loader.dismiss();
            _this.localUser = response.result[0];
            yield _this.updateUserCredentials();
          }
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }(), failure => {
        _this.presentAlert('FORGOT_PASSWORD_PAGE.EMAIL_NOT_SENT_TITLE', 'FORGOT_PASSWORD_PAGE.VALIDATION_FAILED_MESSAGE');
      }); // loader.onWillDismiss().then(() => {
      //   let navigationExtras: NavigationExtras = {
      //     queryParams: {
      //       ts: new Date().getMilliseconds()
      //     }
      //   };
      //   this.navCtrl.navigateRoot('/login',navigationExtras);
      // });

    })();
  }

  updateUserCredentials() {
    var _this2 = this;

    return (0,C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loader = yield _this2.loadingCtrl.create({
        message: _this2.languageService.translate('FORGOT_PASSWORD_PAGE.GENERATING_TEMP_PASSWORD'),
        duration: 3000
      });
      loader.present();
      _this2.localUser.Password = src_app_services_helpers_helper_service__WEBPACK_IMPORTED_MODULE_4__.HelperService.generateTempPassowrd();

      _this2.userService.UpdateUserCredentials(_this2.localUser, /*#__PURE__*/function () {
        var _ref2 = (0,C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
          if (response === null || response === undefined) {
            loader.dismiss();

            _this2.presentAlert(_this2.languageService.translate('FORGOT_PASSWORD_PAGE.EMAIL_NOT_SENT_TITLE'), _this2.languageService.translate('FORGOT_PASSWORD_PAGE.INVALID_DETAILS_MESSAGE'));
          } else {
            loader.dismiss();

            _this2.sendEmail();
          }
        });

        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }(), failure => {
        _this2.presentAlert(_this2.languageService.translate('FORGOT_PASSWORD_PAGE.EMAIL_NOT_SENT_TITLE'), _this2.languageService.translate('FORGOT_PASSWORD_PAGE.VALIDATION_FAILED_MESSAGE'));
      });
    })();
  }

  sendEmail() {
    var _this3 = this;

    return (0,C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.loading = yield _this3.loadingController.create({
        message: _this3.languageService.translate('FORGOT_PASSWORD_PAGE.EMAIL_SENDING_MESSAGE'),
        duration: 2000
      });

      _this3.loading.present();

      _this3.userService.sendForgotPasswordEmail(_this3.localUser.FirstName + ' ' + _this3.localUser.LastName, _this3.localUser.UserName, _this3.localUser.Email, _this3.localUser.Password, /*#__PURE__*/function () {
        var _ref3 = (0,C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
          switch (response) {
            case 'sent':
              _this3.presentAlert(_this3.languageService.translate('FORGOT_PASSWORD_PAGE.EMAIL_SENT_TITLE'), _this3.languageService.translate('FORGOT_PASSWORD_PAGE.EMAIL_SENT_MESSAGE'));

              break;

            default:
              _this3.presentAlert(_this3.languageService.translate('FORGOT_PASSWORD_PAGE.EMAIL_NOT_SENT_TITLE'), _this3.languageService.translate('FORGOT_PASSWORD_PAGE.EMAIL_EXHAUSTED'));

              break;
          }

          _this3.allowClose = true;
        });

        return function (_x3) {
          return _ref3.apply(this, arguments);
        };
      }(), failure => {
        _this3.allowClose = false;

        _this3.presentAlert(_this3.languageService.translate('FORGOT_PASSWORD_PAGE.VALIDATION_FAILED_MESSAGE'), _this3.languageService.translate('FORGOT_PASSWORD_PAGE.VALIDATION_FAILED_MESSAGE'));
      });
    })();
  } // // //


  goToLogin() {
    this.navCtrl.navigateRoot('/');
  } //Alerts


  presentAlert(headerTitle = this.languageService.translate('FORGOT_PASSWORD_PAGE.VALIDATION_FAILED_TITLE'), message = this.languageService.translate('LOGIN.ERROR_INVALID_CREDENTIALS_MESSAGE')) {
    var _this4 = this;

    return (0,C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this4.alertController.create({
        cssClass: 'my-custom-class',
        header: headerTitle,
        subHeader: "",
        message: message,
        buttons: [{
          text: _this4.languageService.translate('BUTTONS.OK'),
          handler: data => {
            if (_this4.allowClose) {
              let navigationExtras = {
                queryParams: {
                  ts: new Date().getMilliseconds()
                }
              };

              _this4.navCtrl.navigateRoot('/login', navigationExtras);
            }
          }
        }]
      });
      yield alert.present();
      const {
        role
      } = yield alert.onDidDismiss();
    })();
  }

};

ForgotPasswordPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController
}, {
  type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_6__.UserService
}, {
  type: src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_5__.LanguageService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController
}];

ForgotPasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-forgot-password',
  template: _forgot_password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_forgot_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ForgotPasswordPage);


/***/ }),

/***/ 1403:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/public/forgot-password/forgot-password.page.scss?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = ":host ion-content {\n  --background: url(\"/assets/bg20.JPG\") 0 0/100% 100% no-repeat ;\n  background-size: cover;\n}\n\n#TitleToolbar {\n  color: black;\n}\n\nion-item, ion-button, ion-icon {\n  color: black;\n  margin-top: 20px;\n}\n\nbutton {\n  color: black;\n}\n\n.forgotLinks {\n  margin-top: 10px;\n}\n\n.signin {\n  margin-top: 50px;\n}\n\n.app-logo {\n  width: 60px;\n  height: 60px;\n  display: block;\n  margin-top: 20px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.paz {\n  position: relative;\n  z-index: 10;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-left {\n  text-align: left;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.left {\n  float: left;\n  text-align: left;\n  padding-right: 10px;\n}\n\n.right {\n  float: right;\n  text-align: right;\n  padding-left: 10px;\n}\n\n.language-button {\n  position: fixed;\n  left: 0;\n  bottom: 10px;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSyw4REFBQTtFQUlELHNCQUFBO0FBRFI7O0FBTUM7RUFFRyxZQUFBO0FBSko7O0FBUUU7RUFDRSxZQUFBO0VBQ0QsZ0JBQUE7QUFMSDs7QUFPRTtFQUVFLFlBQUE7QUFMSjs7QUFPRTtFQUVFLGdCQUFBO0FBTEo7O0FBUUU7RUFFRSxnQkFBQTtBQU5KOztBQVFFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBTEo7O0FBT0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFKSjs7QUFNRTtFQUNFLGtCQUFBO0FBSEo7O0FBS0U7RUFDRSxnQkFBQTtBQUZKOztBQUlFO0VBQ0UsaUJBQUE7QUFESjs7QUFHRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBRUU7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNFO0VBQ0UsZUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtBQUVKIiwiZmlsZSI6ImZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBpb24tY29udGVudCB7XHJcbiAgICAgICAgIC0tYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9iZzIwLkpQR1wiKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdCA7IFxyXG4gICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG4gICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgXHJcbiAjVGl0bGVUb29sYmFyICB7XHJcbiAgLy8tLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLWlvbi1jb2xvci1kYXJrKSwgdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdCkpO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbiAgXHJcbiAgXHJcbiAgaW9uLWl0ZW0sIGlvbi1idXR0b24sIGlvbi1pY29ue1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuICBidXR0b25cclxuICB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIC5mb3Jnb3RMaW5rc1xyXG4gIHtcclxuICAgIG1hcmdpbi10b3A6MTBweCA7XHJcbiAgXHJcbiAgfVxyXG4gIC5zaWduaW5cclxuICB7XHJcbiAgICBtYXJnaW4tdG9wOjUwcHggO1xyXG4gIH1cclxuICAuYXBwLWxvZ297XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIH1cclxuICAucGF6IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gIH1cclxuICAudGV4dC1jZW50ZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC50ZXh0LWxlZnR7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuICAudGV4dC1yaWdodHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxuICAubGVmdCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuICAucmlnaHQge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG4gIC5sYW5ndWFnZS1idXR0b257XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAxMHB4O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfSJdfQ== */";

/***/ }),

/***/ 4805:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/public/forgot-password/forgot-password.page.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar id=\"TitleToolbar\" class=\"text-center\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{'FORGOT_PASSWORD_PAGE.PAGE_TITLE' | translate}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content padding class=\"login auth-page\">\r\n\r\n  <div padding-horizontal text-center class=\"animated fadeInDown\">\r\n    <div class=\"app-logo center\">\r\n      <img src=\"/assets/icon/org-logo.png\">\r\n    </div>\r\n    <h4 no-margin class=\"text-center\">\r\n      <ion-text color=\"dark\" class=\"ion-text-justify\">\r\n       {{'APP_TITLE' | translate}}\r\n      </ion-text>\r\n    </h4>\r\n    <h5 no-margin class=\"text-center\">\r\n      <ion-text color=\"dark\" class=\"ion-text-justify\">\r\n        {{'APP_SUB_TITLE' | translate}}\r\n      </ion-text>\r\n    </h5>\r\n\r\n    <!-- <h6 no-margin class=\"text-center\">\r\n      <ion-text color=\"dark\" class=\"ion-text-justify\">\r\n        {{'APP_DESCRIPTION' | translate}}\r\n      </ion-text>\r\n    </h6> -->\r\n  </div>\r\n\r\n  <div class=\"auth-content\">\r\n      <ion-item id=\"UserProfile\">\r\n        <ion-icon name=\"mail\" slot=\"start\"></ion-icon>\r\n        <ion-input  name=\"Email\"\r\n        (ionChange)=\"emailTextChanged()\"\r\n        [(ngModel)]=\"userEmail\"\r\n        placeholder=\" {{'GENERAL.EMAIL_FIELD' | translate}}\" ></ion-input>\r\n        <ion-icon name=\"\" slot=\"end\"></ion-icon>\r\n      </ion-item>\r\n      <p ion-text class=\"text08 \">\r\n        <ion-text color=\"error\">\r\n          {{userEmailValidationMessage}}\r\n        </ion-text>\r\n      </p>\r\n      <ion-item id=\"UserProfile\">\r\n        <ion-icon name=\"person\" slot=\"start\"></ion-icon>\r\n        <ion-input\r\n        (ionChange)=\"userNameTextChanged()\"\r\n        [(ngModel)]=\"userName\"   name=\"Email\" placeholder=\" {{'GENERAL.USERNAME_FIELD' | translate}}\" ></ion-input>\r\n        <ion-icon name=\"\" slot=\"end\"></ion-icon>\r\n      </ion-item>\r\n\r\n\r\n    <div margin-top>\r\n      <ion-button   size=\"medium\" expand=\"full\" shape=\"round\"  color=\"dark\"\r\n      (click)=\"RequestPasswordButtonClicked()\" [disabled]=\"!enableRequestButton\">\r\n        {{'FORGOT_PASSWORD_PAGE.REQUEST_PASSWORDE_BUTTON_TITLE' | translate}}\r\n      </ion-button>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"text-center language-button\">\r\n    <span (click)=\"goToLogin()\" class=\"paz\">\r\n      <ion-text color=\"dark\">\r\n        {{'BUTTONS.CLOSE' | translate}}\r\n      </ion-text>\r\n    </span>\r\n  </div>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_public_forgot-password_forgot-password_module_ts.js.map