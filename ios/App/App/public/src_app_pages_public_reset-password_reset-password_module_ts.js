"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_public_reset-password_reset-password_module_ts"],{

/***/ 9534:
/*!******************************************************************************!*\
  !*** ./src/app/pages/public/reset-password/reset-password-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordPageRoutingModule": () => (/* binding */ ResetPasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _reset_password_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset-password.page */ 7821);




const routes = [
    {
        path: '',
        component: _reset_password_page__WEBPACK_IMPORTED_MODULE_0__.ResetPasswordPage
    }
];
let ResetPasswordPageRoutingModule = class ResetPasswordPageRoutingModule {
};
ResetPasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ResetPasswordPageRoutingModule);



/***/ }),

/***/ 4761:
/*!**********************************************************************!*\
  !*** ./src/app/pages/public/reset-password/reset-password.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordPageModule": () => (/* binding */ ResetPasswordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _reset_password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset-password-routing.module */ 9534);
/* harmony import */ var _reset_password_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset-password.page */ 7821);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var src_app_shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared/shared.module */ 1511);









let ResetPasswordPageModule = class ResetPasswordPageModule {
};
ResetPasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            src_app_shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forChild(),
            _reset_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.ResetPasswordPageRoutingModule
        ],
        declarations: [_reset_password_page__WEBPACK_IMPORTED_MODULE_1__.ResetPasswordPage]
    })
], ResetPasswordPageModule);



/***/ }),

/***/ 7821:
/*!********************************************************************!*\
  !*** ./src/app/pages/public/reset-password/reset-password.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordPage": () => (/* binding */ ResetPasswordPage)
/* harmony export */ });
/* harmony import */ var C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _reset_password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset-password.page.html?ngResource */ 4757);
/* harmony import */ var _reset_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reset-password.page.scss?ngResource */ 4144);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_helpers_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/helpers/helper-service */ 8598);
/* harmony import */ var src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/language/language.service */ 3469);
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user/user.service */ 9709);




/* eslint-disable max-len */







let ResetPasswordPage = class ResetPasswordPage {
  constructor(router, activatedRoute, languageService, loadingController, userService, alertController) {
    this.router = router;
    this.activatedRoute = activatedRoute;
    this.languageService = languageService;
    this.loadingController = loadingController;
    this.userService = userService;
    this.alertController = alertController;
    this.passwordResetStatus = false;
    this.showPasswordStrengthMessage = true;
    this.passwordStrength = 0;
  }

  ngAfterViewInit() {
    this.email = ''; //"ashishhende@gmail.com";

    this.oldPassword = ''; //"password";

    this.newPassword = ''; //"Password1";

    this.confirmPassword = ''; //"Password1";

    this.activatedRoute.queryParams.subscribe(params => {
      this.email = params['email'];
    });
  }

  newPasswordTextChanged() {
    if (this.newPassword.length == 0) {
      this.showNewPasswordValidationMessage = false;
      this.showPasswordStrengthMessage = true;
      return;
    } else {
      this.showPasswordStrengthMessage = false;
    }

    this.passwordStrength = src_app_services_helpers_helper_service__WEBPACK_IMPORTED_MODULE_3__.HelperService.getPasswordStrength(this.newPassword);

    if (this.passwordStrength == -1) {
      this.showNewPasswordValidationMessage = true;
      this.newPasswordValidationMessage = this.languageService.translate('RESET_PASSWORD.PASSWORD_LENGTH_MESSAGE').replace('{MIN_PASSWORD_STRENGTH}', '8');
    } else {
      if (this.passwordStrength < 1) {
        this.showNewPasswordValidationMessage = true;
        this.newPasswordValidationMessage = this.languageService.translate('RESET_PASSWORD.NEW_PASSWORD_STRENGTH_MESSAGE');
      } else {
        this.showNewPasswordValidationMessage = false;
      }
    }

    console.log(this.passwordStrength);
  }

  ngOnInit() {
    return (0,C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  }

  validate() {
    var isValid = true;

    if (this.oldPassword == '') {
      this.showOldPasswordValidationMessage = true;
      this.oldPasswordValidationMessage = this.languageService.translate('RESET_PASSWORD.EMPTY_DETAILS_ERROR_TITLE');
      isValid = false;
    }

    if (this.newPassword == '') {
      this.showNewPasswordValidationMessage = true;
      this.newPasswordValidationMessage = this.languageService.translate('RESET_PASSWORD.EMPTY_DETAILS_ERROR_TITLE');
      isValid = false;
    }

    if (this.confirmPassword == '') {
      this.showConfirmPasswordValidationMessage = true;
      this.confirmPasswordValidationMessage = this.languageService.translate('RESET_PASSWORD.EMPTY_DETAILS_ERROR_TITLE');
      isValid = false;
    }

    if (this.oldPassword === this.newPassword) {
      this.showConfirmPasswordValidationMessage = true;
      this.confirmPasswordValidationMessage = this.languageService.translate('RESET_PASSWORD.CONFIRM_NEW_PASSWORD_MESSAGE');
      isValid = false;
    }

    if (this.confirmPassword !== this.newPassword) {
      this.showConfirmPasswordValidationMessage = true;
      this.confirmPasswordValidationMessage = this.languageService.translate('RESET_PASSWORD.PASSWORD_NOT_MATCHING_ERROR_MESSAGE');
      isValid = false;
    }

    return isValid;
  }

  languageLinkClicked() {
    this.languageService.presentLanguageSelctionMenu(changed => {});
  }

  cancelButtonClicked() {
    let navigationExtras = {
      queryParams: {
        ts: new Date().getTime()
      }
    };
    this.router.navigate([this.userService.lastRoute], navigationExtras);
  }

  resetButtonClicked() {
    var _this = this;

    return (0,C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.confirmPasswordValidationMessage = '';

      if (_this.validate()) {
        _this.loading = yield _this.loadingController.create({
          message: _this.languageService.translate('RESET_PASSWORD.PROGRESS_MESSAGE'),
          duration: 10000
        });

        _this.loading.present();

        _this.userService.checkUser(_this.email, _this.oldPassword, response => {
          _this.userService.ResetPassword(response.rowIndex, _this.newPassword, response => {
            _this.loading.dismiss();

            _this.passwordResetStatus = true;

            _this.presentAlert(_this.languageService.translate('RESET_PASSWORD.SUCCESS'), _this.languageService.translate('RESET_PASSWORD.SUCCESS_MESSAGE'));
          }, failure => {
            _this.loading.dismiss();

            _this.presentAlert(_this.languageService.translate('RESET_PASSWORD.FAILED'), _this.languageService.translate('RESET_PASSWORD.FAILED_MESSAGE'));
          });
        }, failure => {
          _this.loading.dismiss();

          switch (failure) {
            case 'INVALID_CREDENTAILS':
              _this.presentAlert(_this.languageService.translate('RESET_PASSWORD.INVALID_CREDENTIALS_ERROR_TITLE'), _this.languageService.translate('RESET_PASSWORD.ERROR_INVALID_CREDENTIALS_MESSAGE'));

              break;

            case 'INACTIVE_USER':
              _this.presentAlert(_this.languageService.translate('RESET_PASSWORD.INACTIVE_ACCOUNT_ERROR_TITLE'), _this.languageService.translate('RESET_PASSWORD.ERROR_INACTIVE_ACCOUNT_MESSAGE'));

              break;

            case 'SUSPENDED_USER':
              _this.presentAlert(_this.languageService.translate('RESET_PASSWORD.SUSPENDED_ACCOUNT_ERROR_TITLE'), _this.languageService.translate('RESET_PASSWORD.ERROR_SUSPENDED_ACCOUNT_MESSAGE'));

              break;

            case 'RESET_REQUIRED':
              _this.presentAlert(_this.languageService.translate('RESET_PASSWORD.PASSWORD_RESET_REQUIRED_ERROR_TITLE'), _this.languageService.translate('RESET_PASSWORD.PASSWORD_RESET_REQUIRED_ACCOUNT_MESSAGE'));

              break;
          }
        });
      }
    })();
  }

  presentLoading(loading) {
    return (0,C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield loading.present();
    })();
  } //Alerts


  presentAlert(headerTitle = this.languageService.translate('RESET_PASSWORD.FAILED'), message = this.languageService.translate('RESET_PASSWORD.FAILED_MESSAGE')) {
    var _this2 = this;

    return (0,C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this2.alertController.create({
        cssClass: 'my-custom-class',
        header: headerTitle,
        subHeader: '',
        message: message,
        buttons: [{
          text: _this2.languageService.translate('BUTTONS.OK'),
          handler: data => {
            if (_this2.passwordResetStatus) {
              let navigationExtras = {
                queryParams: {
                  ts: new Date().getTime()
                }
              };

              _this2.router.navigate(['/login'], navigationExtras);
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

ResetPasswordPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
}, {
  type: src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_4__.LanguageService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController
}, {
  type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController
}];

ResetPasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-reset-password',
  template: _reset_password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_reset_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ResetPasswordPage);


/***/ }),

/***/ 4144:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/public/reset-password/reset-password.page.scss?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = ":host ion-content {\n  --background: url(\"/assets/bg20.JPG\") 0 0/100% 100% no-repeat ;\n  background-size: cover;\n}\n\nion-item, ion-button, ion-icon {\n  color: black;\n}\n\nbutton {\n  background: transparent;\n  color: black;\n}\n\n.forgotLinks {\n  margin-top: 20px;\n}\n\n.signin {\n  margin-top: 60px;\n}\n\n.app-logo {\n  width: 60px;\n  height: 60px;\n  display: block;\n  margin-top: 30px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.paz {\n  position: relative;\n  z-index: 10;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-left {\n  text-align: left;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.left {\n  float: left;\n  text-align: left;\n  padding-right: 10px;\n}\n\n.right {\n  float: right;\n  text-align: right;\n  padding-left: 10px;\n}\n\n.language-button {\n  position: fixed;\n  left: 0;\n  bottom: 10px;\n  right: 0;\n}\n\n.credentials-field {\n  border-radius: 5px;\n  color: black;\n}\n\n.credentials-area {\n  margin-top: 30px;\n}\n\n.sign-up-area {\n  margin-top: 50px;\n}\n\n.sign-up-text {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2V0LXBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNJLDhEQUFBO0VBS0Esc0JBQUE7QUFGTjs7QUFTQTtFQUNFLFlBQUE7QUFORjs7QUFVQTtFQUVFLHVCQUFBO0VBQ0EsWUFBQTtBQVJGOztBQVVBO0VBRUUsZ0JBQUE7QUFSRjs7QUFXQTtFQUVFLGdCQUFBO0FBVEY7O0FBV0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFSRjs7QUFVQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQVBGOztBQVNBO0VBQ0Usa0JBQUE7QUFORjs7QUFRQTtFQUNFLGdCQUFBO0FBTEY7O0FBT0E7RUFDRSxpQkFBQTtBQUpGOztBQU1BO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFLQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBRkY7O0FBSUE7RUFDRSxlQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0FBREY7O0FBR0E7RUFFRSxrQkFBQTtFQUNBLFlBQUE7QUFERjs7QUFHQTtFQUlFLGdCQUFBO0FBSEY7O0FBS0E7RUFDRSxnQkFBQTtBQUZGOztBQU1BO0VBRUUsWUFBQTtBQUpGIiwiZmlsZSI6InJlc2V0LXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBpb24tY29udGVudCB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9iZzIwLkpQR1wiKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdCA7IFxyXG4gICAgICAvL2JhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgIFxyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuaW9uLWl0ZW0sIGlvbi1idXR0b24sIGlvbi1pY29ue1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBcclxuIFxyXG59XHJcbmJ1dHRvblxyXG57XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5mb3Jnb3RMaW5rc1xyXG57XHJcbiAgbWFyZ2luLXRvcDoyMHB4IDtcclxuXHJcbn1cclxuLnNpZ25pblxyXG57XHJcbiAgbWFyZ2luLXRvcDo2MHB4IDtcclxufVxyXG4uYXBwLWxvZ297XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcbi5wYXoge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxMDtcclxufVxyXG4udGV4dC1jZW50ZXJ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi50ZXh0LWxlZnR7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4udGV4dC1yaWdodHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4ubGVmdCB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcbi5yaWdodCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG4ubGFuZ3VhZ2UtYnV0dG9ue1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMTBweDtcclxuICByaWdodDogMDtcclxufVxyXG4uY3JlZGVudGlhbHMtZmllbGRcclxue1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLmNyZWRlbnRpYWxzLWFyZWFcclxue1xyXG4vLyAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG5cclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcbi5zaWduLXVwLWFyZWF7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuIC8vIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxuXHJcbn1cclxuLnNpZ24tdXAtdGV4dFxyXG57XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIFxyXG59Il19 */";

/***/ }),

/***/ 4757:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/public/reset-password/reset-password.page.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content padding class=\"animated fadeIn login auth-page\">\r\n  <div class=\"theme-bg\"></div>\r\n  <div class=\"auth-content\">\r\n    <!-- Logo -->\r\n    <div padding-horizontal text-center class=\"animated fadeInDown\">\r\n      <div class=\"app-logo center\">\r\n        <img src=\"/assets/icon/org-logo.png\">\r\n      </div>\r\n      <h4 no-margin class=\"text-center\">\r\n        <ion-text color=\"dark\" class=\"ion-text-justify\">\r\n          {{'APP_TITLE' | translate}}\r\n        </ion-text>\r\n      </h4>\r\n      <h5 no-margin class=\"text-center\">\r\n        <ion-text color=\"dark\" class=\"ion-text-justify\">\r\n          {{'APP_SUB_TITLE' | translate}}\r\n        </ion-text>\r\n      </h5>\r\n    </div>\r\n\r\n    <ion-item id=\"UserProfile\" class=\"toolbar-backgorund credentials-area\">\r\n      <ion-icon name=\"person\" slot=\"start\"></ion-icon>\r\n      <ion-input class=\"credentials-field\" name=\"Email\" placeholder=\" {{'GENERAL.EMAIL_FIELD' | translate}}\"\r\n        [(ngModel)]=\"email\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item id=\"UserProfile\" class=\"toolbar-backgorund credentials-area\">\r\n      <ion-icon name=\"key\" slot=\"start\"></ion-icon>\r\n      <ion-input type=\"password\" name=\"Password\" placeholder=\" {{'RESET_PASSWORD.OLD_PASSWORD' | translate}}\"\r\n        [(ngModel)]=\"oldPassword\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-label *ngIf=\"showOldPasswordValidationMessage\" color=\"danger\">\r\n      {{oldPasswordValidationMessage}}\r\n    </ion-label>\r\n\r\n    <ion-item id=\"UserProfile\" class=\"toolbar-backgorund\">\r\n      <ion-icon name=\"checkmark-circle-outline\" slot=\"start\"></ion-icon>\r\n      <ion-input type=\"password\" name=\"Password\" placeholder=\"{{'RESET_PASSWORD.NEW_PASSWORD' | translate}}\"\r\n        [(ngModel)]=\"newPassword\" (ionChange)=\"newPasswordTextChanged()\" autocapitalize=\"sentences\" autocomplete=\"off\">\r\n      </ion-input>\r\n    </ion-item>\r\n    <ion-progress-bar value=\"{{passwordStrength}}\"></ion-progress-bar>\r\n    <ion-label *ngIf=\"showNewPasswordValidationMessage\" color=\"danger\">\r\n      {{newPasswordValidationMessage}}\r\n    </ion-label>\r\n\r\n    <ion-item *ngIf=\"showPasswordStrengthMessage\">\r\n      <ion-label slot=\"start\" color=\"info\"> {{'RESET_PASSWORD.PASSWORD_STRENGTH_MESSAGE' | translate}} </ion-label>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"showPasswordStrengthMessage\">\r\n      <ion-label slot=\"\" color=\"info\"> {{'RESET_PASSWORD.PASSWORD_STRENGTH_LENGTH_CONTRAINT_MESSAGE' | translate}}\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"showPasswordStrengthMessage\">\r\n      <ion-label slot=\"\" color=\"info\"> {{'RESET_PASSWORD.PASSWORD_STRENGTH_LOWERCASE_CONTRAINT_MESSAGE' | translate}}\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"showPasswordStrengthMessage\">\r\n      <ion-label slot=\"\" color=\"info\"> {{'RESET_PASSWORD.PASSWORD_STRENGTH_UPPERCASE_CONTRAINT_MESSAGE' | translate}}\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"showPasswordStrengthMessage\">\r\n      <ion-label slot=\"\" color=\"info\"> {{'RESET_PASSWORD.PASSWORD_STRENGTH_NUMBER_CONTRAINT_MESSAGE' | translate}}\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item id=\"UserProfile\" class=\"toolbar-backgorund\">\r\n      <ion-icon name=\"checkmark-done-circle-outline\" slot=\"start\"></ion-icon>\r\n      <ion-input type=\"password\" name=\"Password\" placeholder=\"{{'RESET_PASSWORD.CONFIRM_NEW_PASSWORD' | translate}}\"\r\n        [(ngModel)]=\"confirmPassword\"></ion-input>\r\n    </ion-item>\r\n    <ion-label *ngIf=\"showConfirmPasswordValidationMessage\" color=\"danger\">\r\n      {{confirmPasswordValidationMessage}}\r\n    </ion-label>\r\n\r\n    <div>\r\n      <ion-button class=\"signin\" expand=\"full\" color=\"dark\" (click)=\"resetButtonClicked()\" tappable>\r\n        {{'RESET_PASSWORD.BUTTON_TITLE' | translate}}\r\n      </ion-button>\r\n      <ion-button class=\"signin\" expand=\"full\" color=\"dark\" (click)=\"cancelButtonClicked()\" tappable>\r\n        {{'BUTTONS.CANCEL' | translate}}\r\n      </ion-button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"text-center language-button\">\r\n    <span (click)=\"languageLinkClicked()\" class=\"paz\" tappable>\r\n      <ion-text color=\"dark\">\r\n        {{'GENERAL.LANGUAGE' | translate}}\r\n      </ion-text>\r\n    </span>\r\n  </div>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_public_reset-password_reset-password_module_ts.js.map