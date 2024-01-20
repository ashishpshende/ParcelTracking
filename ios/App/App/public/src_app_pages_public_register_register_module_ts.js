"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_public_register_register_module_ts"],{

/***/ 6269:
/*!******************************************************************!*\
  !*** ./src/app/pages/public/register/register-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageRoutingModule": () => (/* binding */ RegisterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page */ 1952);




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ 7744:
/*!**********************************************************!*\
  !*** ./src/app/pages/public/register/register.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageModule": () => (/* binding */ RegisterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/shared/shared.module */ 1511);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register-routing.module */ 6269);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.page */ 1952);









let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _register_routing_module__WEBPACK_IMPORTED_MODULE_1__.RegisterPageRoutingModule,
            _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forChild()
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_2__.RegisterPage]
    })
], RegisterPageModule);



/***/ }),

/***/ 1952:
/*!********************************************************!*\
  !*** ./src/app/pages/public/register/register.page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPage": () => (/* binding */ RegisterPage)
/* harmony export */ });
/* harmony import */ var C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page.html?ngResource */ 6859);
/* harmony import */ var _register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.page.scss?ngResource */ 6835);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/user */ 5783);
/* harmony import */ var src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/language/language.service */ 3469);
/* harmony import */ var src_app_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/loader/loader.service */ 9744);
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user/user.service */ 9709);











let RegisterPage = class RegisterPage {
  constructor(loadingCtrl, userService, alertController, languageService, router, loaderService) {
    this.loadingCtrl = loadingCtrl;
    this.userService = userService;
    this.alertController = alertController;
    this.languageService = languageService;
    this.router = router;
    this.loaderService = loaderService;
    this.genders = [];
    this.roles = [];
    this.statuses = [];
    this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_3__.User(JSON.parse("{}"));
    this.genders = this.userService.genders;
    this.roles = this.userService.roles;
    this.statuses = this.userService.statuses;
    this.user.Role = "User";
    this.user.Status = "InActive"; //For testing

    this.user.FirstName = "";
    this.user.LastName = "";
    this.user.Email = "";
    this.user.PhoneNumber = "";
    this.user.UserName = "";
    this.user.Gender = "";
  }

  ionViewWillEnter() {}

  goToLogin() {
    this.router.navigate(['/login']);
  }

  ngOnInit() {}

  ngAfterViewInit() {}

  SaveUser(succes, failure) {
    this.loaderService.customLoader("Saving User...", 10000);
    this.user.Password = "password";
    this.user.ResetRequired = true;
    this.userService.SaveUser(this.user, results => {
      this.loaderService.dismissLoader();
      succes(this.user);
    }, error => {
      this.loaderService.dismissLoader();
      failure();
    });
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
            this.user = success;
            this.GotoLogin();
          }, failure => {
            this.presentAlert(this.languageService.translate("SIGN_UP.REGISTRATION_FAILED"), this.languageService.translate("SIGN_UP.REGISTRATION_FAILED_MESSAGE"));
          });
        });
      });
    } else {
      this.presentAlert(this.languageService.translate("SIGN_UP.EMPTY_DETAILS"), this.languageService.translate("SIGN_UP.EMPTY_DETAILS_MESSAGE"));
    }
  }

  CancelButtonClicked() {
    this.GotoLogin();
  }

  GotoLogin() {
    let navigationExtras = {
      queryParams: {
        ts: new Date().getMilliseconds()
      }
    };
    this.router.navigate(["login"], navigationExtras);
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

RegisterPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController
}, {
  type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_6__.UserService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController
}, {
  type: src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_4__.LanguageService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
}, {
  type: src_app_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__.LoaderService
}];

RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-register',
  template: _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], RegisterPage);


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

/***/ 6835:
/*!*********************************************************************!*\
  !*** ./src/app/pages/public/register/register.page.scss?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = ":host ion-content {\n  --background: url(\"/assets/bg20.JPG\") 0 0/100% 100% no-repeat ;\n  background-size: cover;\n  color: black;\n  --overflow: hidden;\n}\n:host ion-card, :host ion-item, :host ion-icon, :host ion-list, :host ion-card-header, :host ion-list-header, :host ion-card-content, :host on-label {\n  align-items: center;\n  justify-content: center;\n  background: none;\n  color: black;\n}\n.toolbar-backgorund {\n  --background: linear-gradient(180deg, var(--ion-color-dark), var(--ion-color-medium-contrast));\n  color: black;\n}\n.bottom-area {\n  position: fixed;\n  left: 0;\n  bottom: 0px;\n  right: 0;\n  background-color: gray;\n  height: 45px;\n  margin-bottom: 0px;\n}\n.bottom-button {\n  border-width: 1px;\n  border-color: #3e2c2c;\n  color: white;\n  font-size: larger;\n  font-weight: 800;\n  border-style: solid;\n  width: 50%;\n  margin: auto;\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNLLDhEQUFBO0VBSUQsc0JBQUE7RUFDRCxZQUFBO0VBQ0Esa0JBQUE7QUFETDtBQUdFO0VBRUksbUJBQUE7RUFBcUIsdUJBQUE7RUFDckIsZ0JBQUE7RUFDQSxZQUFBO0FBRE47QUFJQTtFQUNFLDhGQUFBO0VBQ0EsWUFBQTtBQURGO0FBS0E7RUFDRSxlQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFGRjtBQUlBO0VBRUUsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFGRiIsImZpbGUiOiJyZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgaW9uLWNvbnRlbnQge1xyXG4gICAgICAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2JnMjAuSlBHXCIpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0IDsgXHJcbiAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgIGNvbG9yOiBibGFjaztcclxuICAgICAtLW92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIGlvbi1jYXJkLGlvbi1pdGVtLGlvbi1pY29uLGlvbi1saXN0LCBpb24tY2FyZC1oZWFkZXIsIGlvbi1saXN0LWhlYWRlcixpb24tY2FyZC1jb250ZW50LG9uLWxhYmVsXHJcbiAge1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYmFja2dyb3VuZDpub25lOyAgIFxyXG4gICAgICBjb2xvcjogYmxhY2s7IFxyXG4gIH1cclxufVxyXG4udG9vbGJhci1iYWNrZ29ydW5kICB7XHJcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1pb24tY29sb3ItZGFyayksIHZhcigtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QpKTtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcblxyXG4uYm90dG9tLWFyZWF7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwcHg7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5ib3R0b20tYnV0dG9uXHJcbntcclxuICBib3JkZXItd2lkdGg6IDFweDtcclxuICBib3JkZXItY29sb3I6ICMzZTJjMmM7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICB3aWR0aDogNTAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 6859:
/*!*********************************************************************!*\
  !*** ./src/app/pages/public/register/register.page.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar id=\"TitleToolbar\" class=\"text-center\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{'LOGIN.REGISTER_PAGE_TITLE' | translate}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-card>\r\n    <ion-card-header class=\"text-center\">\r\n      <ion-item>\r\n        <ion-icon name='people-circle-outline' slot=\"start\"></ion-icon>\r\n        {{'USER.BASIC_DETAILS' | translate}}\r\n      </ion-item>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-list>\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"12\">{{'BASE_MODEL.NAME' | translate}} </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"6\">\r\n                <ion-input  autocomplete=\"nope\"\r\n                 class=\"value\" [(ngModel)]=\"user.FirstName\" placeholder=\" {{'USER.FIRST_NAME' | translate}}\">\r\n                </ion-input>\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <ion-input   autocomplete=\"nope\"\r\n                class=\"value\" [(ngModel)]=\"user.LastName\" placeholder=\" {{'USER.LAST_NAME' | translate}}\">\r\n                </ion-input>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">{{'USER.GENDER' | translate}} </ion-col>\r\n              <ion-col class=\"value\" size=\"auto\">\r\n                <ion-select multiple=\"false\" cancelText=\"Cancel\" okText=\"Select\" [(ngModel)]=\"user.Gender\"\r\n                  placeholder=\" {{'USER.GENDER' | translate}}\">\r\n                  <ion-select-option *ngFor=\"let gender of genders\" value=\"{{ gender }}\">\r\n                    {{ gender }}\r\n                  </ion-select-option>\r\n                </ion-select>\r\n              </ion-col>\r\n            </ion-row>\r\n            <!-- <ion-row>\r\n              <ion-col size=\"2\"></ion-col>\r\n\r\n            </ion-row> -->\r\n          </ion-grid>\r\n        </ion-item>\r\n\r\n      </ion-list>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <ion-card>\r\n    <ion-card-header class=\"text-center\">\r\n      <ion-item>\r\n        <ion-icon name='settings-outline' slot=\"start\"></ion-icon>\r\n\r\n        {{'USER.CONTACT_DETAILS' | translate}}\r\n      </ion-item>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-list>\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col>{{'USER.EMAIL' | translate}} </ion-col>\r\n              <ion-col class=\"value\" size=\"6\">\r\n                <ion-input   autocomplete=\"nope\" [(ngModel)]=\"user.Email\" placeholder=\" {{'USER.EMAIL' | translate}}\">\r\n                </ion-input>\r\n              </ion-col>\r\n            </ion-row>\r\n            <!-- <ion-row>\r\n\r\n            </ion-row> -->\r\n          </ion-grid>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col>{{'USER.PHONE_NUMBER' | translate}} </ion-col>\r\n              <ion-col class=\"value\" size=\"6\">\r\n                <ion-input  type=\"number\" pattern=\"[0-9]\" \r\n                maxlength=\"10\"\r\n                 autocomplete=\"nope\" [(ngModel)]=\"user.PhoneNumber\" \r\n                 placeholder=\" {{'USER.PHONE_NUMBER' | translate}}\">\r\n                </ion-input>\r\n              </ion-col>\r\n            </ion-row>\r\n            <!-- <ion-row>\r\n              <ion-col size=\"6\"></ion-col>\r\n\r\n            </ion-row> -->\r\n          </ion-grid>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-item>\r\n        <ion-icon name='options-outline' slot=\"start\"></ion-icon>\r\n        {{'USER.ACCOUNT_DETAILS' | translate}}\r\n      </ion-item>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-list>\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col>{{'USER.USER_NAME' | translate}} </ion-col>\r\n              <ion-col size=\"6\">\r\n                <ion-input   autocomplete=\"nope\" class=\"value\" [(ngModel)]=\"user.UserName\" placeholder=\" {{'USER.USER_NAME' | translate}}\">\r\n                </ion-input>\r\n              </ion-col>\r\n            </ion-row>         \r\n          </ion-grid>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n<ion-footer>\r\n \r\n   \r\n    <ion-button style=\"width: 48%;\" (click)=\"CancelButtonClicked()\" >\r\n      {{'BUTTONS.CANCEL' | translate}}\r\n    </ion-button>\r\n    <ion-button style=\"width: 48%;\" (click)=\"SaveButtonClicked()\" >\r\n      {{'BUTTONS.SAVE' | translate}}\r\n    </ion-button>\r\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_public_register_register_module_ts.js.map