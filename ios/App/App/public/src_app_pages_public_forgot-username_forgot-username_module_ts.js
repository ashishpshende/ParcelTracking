"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_public_forgot-username_forgot-username_module_ts"],{

/***/ 7705:
/*!********************************************************************************!*\
  !*** ./src/app/pages/public/forgot-username/forgot-username-routing.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotUsernamePageRoutingModule": () => (/* binding */ ForgotUsernamePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _forgot_username_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-username.page */ 3306);




const routes = [
    {
        path: '',
        component: _forgot_username_page__WEBPACK_IMPORTED_MODULE_0__.ForgotUsernamePage
    }
];
let ForgotUsernamePageRoutingModule = class ForgotUsernamePageRoutingModule {
};
ForgotUsernamePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ForgotUsernamePageRoutingModule);



/***/ }),

/***/ 2923:
/*!************************************************************************!*\
  !*** ./src/app/pages/public/forgot-username/forgot-username.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotUsernamePageModule": () => (/* binding */ ForgotUsernamePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _forgot_username_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-username-routing.module */ 7705);
/* harmony import */ var _forgot_username_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-username.page */ 3306);








let ForgotUsernamePageModule = class ForgotUsernamePageModule {
};
ForgotUsernamePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _forgot_username_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForgotUsernamePageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule.forChild()
        ],
        declarations: [_forgot_username_page__WEBPACK_IMPORTED_MODULE_1__.ForgotUsernamePage]
    })
], ForgotUsernamePageModule);



/***/ }),

/***/ 3306:
/*!**********************************************************************!*\
  !*** ./src/app/pages/public/forgot-username/forgot-username.page.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotUsernamePage": () => (/* binding */ ForgotUsernamePage)
/* harmony export */ });
/* harmony import */ var C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _forgot_username_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-username.page.html?ngResource */ 4215);
/* harmony import */ var _forgot_username_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgot-username.page.scss?ngResource */ 581);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/user */ 5783);
/* harmony import */ var src_app_services_helpers_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/helpers/helper-service */ 8598);
/* harmony import */ var src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/language/language.service */ 3469);
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user/user.service */ 9709);




/* eslint-disable max-len */








let ForgotUsernamePage = class ForgotUsernamePage {
  constructor(router, alertController, loadingController, userService, languageService, loadingCtrl) {
    this.router = router;
    this.alertController = alertController;
    this.loadingController = loadingController;
    this.userService = userService;
    this.languageService = languageService;
    this.loadingCtrl = loadingCtrl;
    this.userEmailValidationMessage = "";
    this.userEmail = "";
    this.enableRequestButton = false;
    this.allowClose = false;
    this.localUser = new src_app_models_user__WEBPACK_IMPORTED_MODULE_3__.User(JSON.parse("{}"));
    this.userEmail = "";
  }

  ionViewWillEnter() {}

  ngOnInit() {}

  emailTextChanged() {
    var result = this.enableRequestButton = src_app_services_helpers_helper_service__WEBPACK_IMPORTED_MODULE_4__.HelperService.validateEmail(this.userEmail);

    if (this.userEmail.length > 0 && !result) {
      this.userEmailValidationMessage = this.languageService.translate('FORGOT_USER_NAME_PAGE.EMAIL_SYNTAX_VALIDATING_MESSAGE');
    } else {
      this.userEmailValidationMessage = "";
    }

    return result;
  }

  RequestUserNameButtonClicked() {
    var _this = this;

    return (0,C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loader = yield _this.loadingCtrl.create({
        message: _this.languageService.translate('FORGOT_USER_NAME_PAGE.VALIDATING_MESSAGE'),
        duration: 3000
      });
      loader.present();

      _this.userService.getUserByEmail(_this.userEmail, /*#__PURE__*/function () {
        var _ref = (0,C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
          if (response == null || response === undefined || response.results.length === 0) {
            loader.dismiss();

            _this.presentAlert(_this.languageService.translate('FORGOT_USER_NAME_PAGE.EMAIL_NOT_SENT_TITLE'), _this.languageService.translate('FORGOT_USER_NAME_PAGE.INVALID_DETAILS_MESSAGE'));
          } else {
            loader.dismiss();
            _this.localUser = response.result[0];

            _this.sendEmail();
          }
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }(), failure => {
        _this.presentAlert('FORGOT_USER_NAME_PAGE.EMAIL_NOT_SENT_TITLE', 'FORGOT_USER_NAME_PAGE.VALIDATION_FAILED_MESSAGE');
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

  sendEmail() {
    var _this2 = this;

    return (0,C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.loading = yield _this2.loadingController.create({
        message: _this2.languageService.translate('FORGOT_USER_NAME_PAGE.EMAIL_SENDING_MESSAGE'),
        duration: 2000
      });

      _this2.loading.present();

      _this2.userService.sendForgotUserEmail(_this2.localUser.FirstName + ' ' + _this2.localUser.LastName, _this2.localUser.Email, _this2.localUser.UserName, /*#__PURE__*/function () {
        var _ref2 = (0,C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
          switch (response) {
            case 'sent':
              _this2.presentAlert(_this2.languageService.translate('FORGOT_USER_NAME_PAGE.EMAIL_SENT_TITLE'), _this2.languageService.translate('FORGOT_USER_NAME_PAGE.EMAIL_SENT_MESSAGE'));

              break;

            default:
              _this2.presentAlert(_this2.languageService.translate('FORGOT_USER_NAME_PAGE.EMAIL_NOT_SENT_TITLE'), _this2.languageService.translate('FORGOT_USER_NAME_PAGE.EMAIL_EXHAUSTED'));

              break;
          }

          _this2.allowClose = true;
        });

        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }(), failure => {
        _this2.allowClose = false;

        _this2.presentAlert(_this2.languageService.translate("FORGOT_USER_NAME_PAGE.VALIDATION_FAILED_MESSAGE"), _this2.languageService.translate("FORGOT_USER_NAME_PAGE.VALIDATION_FAILED_MESSAGE"));
      });
    })();
  } // // //


  goToLogin() {
    this.router.navigate(['/']);
  } //Alerts


  presentAlert(headerTitle = this.languageService.translate('FORGOT_USER_NAME_PAGE.VALIDATION_FAILED_TITLE'), message = this.languageService.translate('LOGIN.ERROR_INVALID_CREDENTIALS_MESSAGE')) {
    var _this3 = this;

    return (0,C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this3.alertController.create({
        cssClass: 'my-custom-class',
        header: headerTitle,
        subHeader: "",
        message: message,
        buttons: [{
          text: _this3.languageService.translate('BUTTONS.OK'),
          handler: data => {
            if (_this3.allowClose) {
              let navigationExtras = {
                queryParams: {
                  ts: new Date().getMilliseconds()
                }
              };

              _this3.router.navigate(['/login'], navigationExtras);
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

ForgotUsernamePage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController
}, {
  type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_6__.UserService
}, {
  type: src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_5__.LanguageService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController
}];

ForgotUsernamePage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-forgot-username',
  template: _forgot_username_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_forgot_username_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ForgotUsernamePage);


/***/ }),

/***/ 581:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/public/forgot-username/forgot-username.page.scss?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = ":host ion-content {\n  --background: url(\"/assets/bg20.JPG\") 0 0/100% 100% no-repeat ;\n  background-color: transparent;\n  background-size: cover;\n}\n\n#TitleToolbar {\n  color: black;\n}\n\nion-item, ion-button, ion-icon {\n  color: black;\n}\n\nbutton {\n  background: transparent;\n  color: black;\n}\n\n.forgotLinks {\n  margin-top: 10px;\n}\n\n.signin {\n  margin-top: 50px;\n}\n\n.app-logo {\n  width: 60px;\n  height: 60px;\n  display: block;\n  margin-top: 20px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.paz {\n  position: relative;\n  z-index: 10;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-left {\n  text-align: left;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.left {\n  float: left;\n  text-align: left;\n  padding-right: 10px;\n}\n\n.right {\n  float: right;\n  text-align: right;\n  padding-left: 10px;\n}\n\n.language-button {\n  position: fixed;\n  left: 0;\n  bottom: 10px;\n  right: 0;\n}\n\n.email-text-field {\n  background-color: transparent;\n  color: black !important;\n}\n\n.sign-up-button {\n  border-radius: 5px;\n  background-color: darkslateblue;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdC11c2VybmFtZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSyw4REFBQTtFQUNELDZCQUFBO0VBR0Esc0JBQUE7QUFBUjs7QUFLQztFQUVHLFlBQUE7QUFISjs7QUFPRTtFQUNFLFlBQUE7QUFKSjs7QUFPRTtFQUVFLHVCQUFBO0VBQ0EsWUFBQTtBQUxKOztBQU9FO0VBRUUsZ0JBQUE7QUFMSjs7QUFRRTtFQUVFLGdCQUFBO0FBTko7O0FBUUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFMSjs7QUFPRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQUpKOztBQU1FO0VBQ0Usa0JBQUE7QUFISjs7QUFLRTtFQUNFLGdCQUFBO0FBRko7O0FBSUU7RUFDRSxpQkFBQTtBQURKOztBQUdFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFFRTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBQ0U7RUFDRSxlQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0FBRUo7O0FBQUU7RUFFRSw2QkFBQTtFQUNBLHVCQUFBO0FBRUo7O0FBQUU7RUFFRSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsWUFBQTtBQUVKIiwiZmlsZSI6ImZvcmdvdC11c2VybmFtZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBpb24tY29udGVudCB7XHJcbiAgICAgICAgIC0tYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9iZzIwLkpQR1wiKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdCA7IFxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgXHJcbiAjVGl0bGVUb29sYmFyICB7XHJcbiAgLy8tLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLWlvbi1jb2xvci1kYXJrKSwgdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdCkpO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbiAgXHJcbiAgXHJcbiAgaW9uLWl0ZW0sIGlvbi1idXR0b24sIGlvbi1pY29ue1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICBcclxuICB9XHJcbiAgYnV0dG9uXHJcbiAge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIC5mb3Jnb3RMaW5rc1xyXG4gIHtcclxuICAgIG1hcmdpbi10b3A6MTBweCA7XHJcbiAgXHJcbiAgfVxyXG4gIC5zaWduaW5cclxuICB7XHJcbiAgICBtYXJnaW4tdG9wOjUwcHggO1xyXG4gIH1cclxuICAuYXBwLWxvZ297XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIH1cclxuICAucGF6IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gIH1cclxuICAudGV4dC1jZW50ZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC50ZXh0LWxlZnR7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuICAudGV4dC1yaWdodHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxuICAubGVmdCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuICAucmlnaHQge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG4gIC5sYW5ndWFnZS1idXR0b257XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAxMHB4O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG4gIC5lbWFpbC10ZXh0LWZpZWxkXHJcbiAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnNpZ24tdXAtYnV0dG9uXHJcbiAge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NsYXRlYmx1ZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9Il19 */";

/***/ }),

/***/ 4215:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/public/forgot-username/forgot-username.page.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar id=\"TitleToolbar\" class=\"text-center\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{'FORGOT_USER_NAME_PAGE.PAGE_TITLE' | translate}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content padding class=\"login auth-page\">\r\n\r\n  <div padding-horizontal text-center class=\"animated fadeInDown\">\r\n    <div class=\"app-logo center\">\r\n      <img src=\"/assets/icon/org-logo.png\">\r\n    </div>\r\n    <h4 no-margin class=\"text-center\">\r\n      <ion-text color=\"dark\" class=\"ion-text-justify\">\r\n       {{'APP_TITLE' | translate}}\r\n      </ion-text>\r\n    </h4>\r\n    <h5 no-margin class=\"text-center\">\r\n      <ion-text color=\"dark\" class=\"ion-text-justify\">\r\n        {{'APP_SUB_TITLE' | translate}}\r\n      </ion-text>\r\n    </h5>\r\n\r\n    <!-- <h6 no-margin class=\"text-center\">\r\n      <ion-text color=\"dark\" class=\"ion-text-justify\">\r\n        {{'APP_DESCRIPTION' | translate}}\r\n      </ion-text>\r\n    </h6> -->\r\n  </div>\r\n\r\n  <div class=\"auth-content\">\r\n\r\n    <!-- Register form -->\r\n\r\n      <ion-item id=\"UserProfile\" class=\"toolbar-backgorund\">\r\n        <ion-icon name=\"mail\" slot=\"start\"></ion-icon>\r\n        <ion-input class=\"email-text-field\"\r\n        (ionChange)=\"emailTextChanged()\"\r\n        [(ngModel)]=\"userEmail\"\r\n        placeholder=\" {{'GENERAL.EMAIL_FIELD' | translate}}\" ></ion-input>\r\n        <ion-icon name=\"\" slot=\"end\"></ion-icon>\r\n      </ion-item>\r\n      <p ion-text class=\"text08 \">\r\n        <ion-text color=\"error\">\r\n          {{userEmailValidationMessage}}\r\n        </ion-text>\r\n      </p>\r\n\r\n\r\n    <div margin-top>\r\n      <ion-button   size=\"medium\" expand=\"full\" shape=\"round\"  color=\"dark\"\r\n       (click)=\"RequestUserNameButtonClicked()\" [disabled]=\"!enableRequestButton\">\r\n        {{'FORGOT_USER_NAME_PAGE.REQUEST_USERNAME_BUTTON_TITLE' | translate}}\r\n      </ion-button>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"text-center\">\r\n    <span (click)=\"goToLogin()\" class=\"paz\" tappable>\r\n      <ion-text color=\"light\">\r\n        {{'BUTTONS.CLOSE' | translate}}\r\n      </ion-text>\r\n    </span>\r\n  </div>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_public_forgot-username_forgot-username_module_ts.js.map