"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_public_login_login_module_ts"],{

/***/ 2805:
/*!************************************************************!*\
  !*** ./src/app/pages/public/login/login-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 2437);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 8893:
/*!****************************************************!*\
  !*** ./src/app/pages/public/login/login.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 2805);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 2437);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 8699);








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule.forChild()
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 2437:
/*!**************************************************!*\
  !*** ./src/app/pages/public/login/login.page.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.html?ngResource */ 9769);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 4831);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user/user.service */ 9709);
/* harmony import */ var src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/language/language.service */ 3469);









let LoginPage = class LoginPage {
  constructor(toastCtrl, alertController, router, loadingController, userService, languageService) {
    this.toastCtrl = toastCtrl;
    this.alertController = alertController;
    this.router = router;
    this.loadingController = loadingController;
    this.userService = userService;
    this.languageService = languageService;
    this.user = null;
    this.showUsernameValidationMessage = false;
    this.showPasswordValidationMessage = false;
  }

  ngAfterViewInit() {
    this.userName = "admin"; //"";

    this.password = "password"; //"";
  }

  ionViewWillEnter() {}

  validate() {
    var result = true;

    if (this.userName == null || this.userName == '') {
      this.showUsernameValidationMessage = true;
      result = false;
    }

    if (this.password == null || this.password == '') {
      this.showPasswordValidationMessage = true;
      result = false;
    }

    return result;
  }

  ngOnInit() {
    var _this = this;

    return (0,C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.resetRequired = false;
    })();
  }

  presentLoading(loading) {
    return (0,C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield loading.present();
    })();
  }

  goToRegister() {
    let navigationExtras = {
      queryParams: {
        ts: new Date().getTime()
      }
    };
    this.router.navigate(['/register'], navigationExtras);
  }

  goToHome() {
    let navigationExtras = {
      queryParams: {
        ts: new Date().getTime()
      }
    };
    this.router.navigate(['/home'], navigationExtras);
  } //Click Events


  forgotPasswordLinkClicked() {
    let navigationExtras = {
      queryParams: {
        ts: new Date().getTime()
      }
    };
    this.router.navigate(['/forgot-password'], navigationExtras);
  }

  forgotUserLinkClicked() {
    let navigationExtras = {
      queryParams: {
        ts: new Date().getTime()
      }
    };
    this.router.navigate(['/forgot-username'], navigationExtras);
  }

  loginButtonClicked() {
    var _this2 = this;

    return (0,C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.backendValidation = false;

      if (_this2.validate()) {
        _this2.loading = yield _this2.loadingController.create({
          message: _this2.languageService.translate('LOGIN.SIGN_IN_PROGRESS_MESSAGE'),
          duration: 10000
        });

        _this2.loading.present();

        _this2.userService.login(_this2.userName, _this2.password, /*#__PURE__*/(0,C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          _this2.backendValidation = true;

          _this2.loading.dismiss();

          let navigationExtras = {
            queryParams: {
              ts: new Date().getTime()
            }
          };

          _this2.router.navigate(['/home'], navigationExtras);
        }), failure => {
          _this2.loading.dismiss();

          _this2.backendValidation = false;

          switch (failure) {
            case "INVALID_CREDENTAILS":
              _this2.resetRequired = false;

              _this2.presentAlert(_this2.languageService.translate('LOGIN.INVALID_CREDENTIALS_ERROR_TITLE'), _this2.languageService.translate('LOGIN.ERROR_INVALID_CREDENTIALS_MESSAGE'));

              break;

            case "INACTIVE_USER":
              _this2.resetRequired = false;

              _this2.presentAlert(_this2.languageService.translate('LOGIN.INACTIVE_ACCOUNT_ERROR_TITLE'), _this2.languageService.translate('LOGIN.ERROR_INACTIVE_ACCOUNT_MESSAGE'));

              break;

            case "SUSPENDED_USER":
              _this2.resetRequired = false;

              _this2.presentAlert(_this2.languageService.translate('LOGIN.SUSPENDED_ACCOUNT_ERROR_TITLE'), _this2.languageService.translate('LOGIN.ERROR_SUSPENDED_ACCOUNT_MESSAGE'));

              break;

            case "RESET_REQUIRED":
              _this2.resetRequired = true;

              _this2.presentAlert(_this2.languageService.translate('LOGIN.PASSWORD_RESET_REQUIRED_ERROR_TITLE'), _this2.languageService.translate('LOGIN.PASSWORD_RESET_REQUIRED_ACCOUNT_MESSAGE'));

              break;
          }
        });
      } else {}
    })();
  }

  signupLinkClicked() {
    let navigationExtras = {
      queryParams: {
        ts: new Date().getTime()
      }
    };
    this.router.navigate(['/register'], navigationExtras);
  }

  languageLinkClicked() {
    this.languageService.presentLanguageSelctionMenu(() => {});
  } //Alerts


  presentAlert(headerTitle = this.languageService.translate('LOGIN.ERROR_ALERT_TITLE'), message = this.languageService.translate('LOGIN.ERROR_INVALID_CREDENTIALS_MESSAGE')) {
    var _this3 = this;

    return (0,C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this3.alertController.create({
        cssClass: 'my-custom-class',
        header: headerTitle,
        subHeader: "",
        message: message,
        buttons: [{
          text: _this3.languageService.translate('BUTTONS.OK'),
          handler: () => {
            if (_this3.resetRequired) {
              _this3.userService.lastRoute = "login";
              let navigationExtras = {
                queryParams: {
                  ts: new Date().getTime()
                }
              };

              _this3.router.navigate(['reset-password'], navigationExtras);
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

LoginPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController
}, {
  type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService
}, {
  type: src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_4__.LanguageService
}];

LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-login',
  template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], LoginPage);


/***/ }),

/***/ 4831:
/*!***************************************************************!*\
  !*** ./src/app/pages/public/login/login.page.scss?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = ":host ion-content {\n  --background: url(\"/assets/bg20.JPG\") 0 0/100% 100% no-repeat ;\n  background-size: cover;\n}\n\nion-item, ion-button, ion-icon {\n  color: black;\n}\n\nbutton {\n  background: transparent;\n  color: black;\n}\n\n.forgotLinks {\n  margin-top: 20px;\n}\n\n.signin {\n  margin-top: 60px;\n}\n\n.app-logo {\n  width: 60px;\n  height: 60px;\n  display: block;\n  margin-top: 30px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.paz {\n  position: relative;\n  z-index: 10;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-left {\n  text-align: left;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.left {\n  float: left;\n  text-align: left;\n  padding-right: 10px;\n}\n\n.right {\n  float: right;\n  text-align: right;\n  padding-left: 10px;\n}\n\n.language-button {\n  position: fixed;\n  left: 0;\n  bottom: 10px;\n  right: 0;\n}\n\n.credentials-field {\n  border-radius: 5px;\n  color: black;\n}\n\n.credentials-area {\n  margin-top: 30px;\n}\n\n.sign-up-area {\n  margin-top: 50px;\n}\n\n.sign-up-text {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLDhEQUFBO0VBS0Esc0JBQUE7QUFGUjs7QUFTQTtFQUNJLFlBQUE7QUFOSjs7QUFVQTtFQUVJLHVCQUFBO0VBQ0EsWUFBQTtBQVJKOztBQVVBO0VBRUksZ0JBQUE7QUFSSjs7QUFXQTtFQUVJLGdCQUFBO0FBVEo7O0FBV0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFSSjs7QUFVQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQVBKOztBQVNBO0VBQ0ksa0JBQUE7QUFOSjs7QUFRQTtFQUNJLGdCQUFBO0FBTEo7O0FBT0E7RUFDSSxpQkFBQTtBQUpKOztBQU1BO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFISjs7QUFLQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBRko7O0FBSUE7RUFDSSxlQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0FBREo7O0FBR0E7RUFFSSxrQkFBQTtFQUNBLFlBQUE7QUFESjs7QUFHQTtFQUlJLGdCQUFBO0FBSEo7O0FBS0E7RUFDSSxnQkFBQTtBQUZKOztBQU1BO0VBRUksWUFBQTtBQUpKIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGlvbi1jb250ZW50IHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvYmcyMC5KUEdcIikgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQgOyBcclxuICAgICAgICAvL2JhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmlvbi1pdGVtLCBpb24tYnV0dG9uLCBpb24taWNvbntcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIFxyXG4gICBcclxufVxyXG5idXR0b25cclxue1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLmZvcmdvdExpbmtzXHJcbntcclxuICAgIG1hcmdpbi10b3A6MjBweCA7XHJcblxyXG59XHJcbi5zaWduaW5cclxue1xyXG4gICAgbWFyZ2luLXRvcDo2MHB4IDtcclxufVxyXG4uYXBwLWxvZ297XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcbi5wYXoge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTA7XHJcbn1cclxuLnRleHQtY2VudGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi50ZXh0LWxlZnR7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi50ZXh0LXJpZ2h0e1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLmxlZnQge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG4ucmlnaHQge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuLmxhbmd1YWdlLWJ1dHRvbntcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDEwcHg7XHJcbiAgICByaWdodDogMDtcclxufVxyXG4uY3JlZGVudGlhbHMtZmllbGRcclxue1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5jcmVkZW50aWFscy1hcmVhXHJcbntcclxuICAvLyAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG5cclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuLnNpZ24tdXAtYXJlYXtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgIC8vIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxuXHJcbn1cclxuLnNpZ24tdXAtdGV4dFxyXG57XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBcclxufSJdfQ== */";

/***/ }),

/***/ 9769:
/*!***************************************************************!*\
  !*** ./src/app/pages/public/login/login.page.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "<ion-content padding class=\"animated fadeIn login auth-page\">\r\n  <div class=\"theme-bg\"></div>\r\n  <div class=\"auth-content\">\r\n\r\n    <!-- Logo -->\r\n    <div padding-horizontal text-center class=\"animated fadeInDown\">\r\n      <div class=\"app-logo center\">\r\n        <img src=\"/assets/icon/org-logo.png\">\r\n      </div>\r\n      <h4 no-margin class=\"text-center\">\r\n        <ion-text color=\"dark\" class=\"ion-text-justify\">\r\n         {{'APP_TITLE' | translate}}\r\n        </ion-text>\r\n      </h4>\r\n      <h5 no-margin class=\"text-center\">\r\n        <ion-text color=\"dark\" class=\"ion-text-justify\">\r\n          {{'APP_SUB_TITLE' | translate}}\r\n        </ion-text>\r\n      </h5>\r\n<!--\r\n      <h6 no-margin class=\"text-center\">\r\n        <ion-text color=\"dark\" class=\"ion-text-justify\">\r\n          {{'APP_DESCRIPTION' | translate}}\r\n        </ion-text>\r\n      </h6> -->\r\n    </div>\r\n\r\n    <!-- Login form -->\r\n\r\n      <ion-item id=\"UserProfile\" class=\"toolbar-backgorund credentials-area\">\r\n        <ion-icon name=\"person\" slot=\"start\"></ion-icon>\r\n        <ion-input class=\"credentials-field\" name=\"Email\" placeholder=\" {{'GENERAL.USERNAME_FIELD' | translate}}\"  [(ngModel)]=\"userName\"></ion-input>\r\n        <ion-icon name=\"\" slot=\"end\"></ion-icon>\r\n      </ion-item>\r\n      <ion-label *ngIf=\"showUsernameValidationMessage\" color=\"danger\">\r\n        {{'LOGIN.EMAIL_VALIDATION_MESSAGE' | translate}}\r\n      </ion-label>\r\n      <ion-item id=\"UserProfile\" class=\"toolbar-backgorund\">\r\n        <ion-icon name=\"key\" slot=\"start\"></ion-icon>\r\n        <ion-input type=\"password\"  name=\"Password\" placeholder=\"{{'GENERAL.PASSWORD_FIELD' | translate}}\" [(ngModel)]=\"password\" ></ion-input>\r\n\r\n      </ion-item>\r\n      <ion-label *ngIf=\"showPasswordValidationMessage\" color=\"danger\">\r\n        {{'LOGIN.PASSWORD_VALIDATION_MESSAGE' | translate}}\r\n      </ion-label>\r\n\r\n    <div class=\"forgotLinks\">\r\n      <span class=\"left\">\r\n    <button  (click)=\"forgotPasswordLinkClicked()\">{{'FORGOT_PASSWORD_PAGE.TITLE' | translate}}</button>\r\n\r\n      </span>\r\n      <span class=\"right\">\r\n        <button  (click)=\"forgotUserLinkClicked()\">{{'FORGOT_USER_NAME_PAGE.TITLE' | translate}}</button>\r\n\r\n      </span>\r\n\r\n  </div>\r\n    <div>\r\n      <ion-button class=\"signin\" expand=\"full\" shape=\"round\" color=\"dark\" (click)=\"loginButtonClicked()\"  tappable>\r\n        {{'LOGIN.SIGN_IN_TEXT' | translate}}\r\n      </ion-button>\r\n    </div>\r\n\r\n    <!-- Other links -->\r\n    <div class=\"text-center sign-up-area\">\r\n      <span (click)=\"signupLinkClicked()\" class=\"paz\" tappable>\r\n        <ion-text class=\"sign-up-text\">\r\n          {{'LOGIN.SIGN_UP_FIRST_TEXT' | translate}}  <strong> {{'LOGIN.SIGN_UP_SECOND_TEXT' | translate}} </strong>\r\n        </ion-text>\r\n      </span>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n\r\n\r\n  <div class=\"text-center language-button\">\r\n    <span (click)=\"languageLinkClicked()\" class=\"paz\" tappable>\r\n      <ion-text color=\"dark\">\r\n        {{'GENERAL.LANGUAGE' | translate}}\r\n      </ion-text>\r\n    </span>\r\n  </div>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_public_login_login_module_ts.js.map