"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_private_UAM_update-user-profile_update-user-profile_module_ts"],{

/***/ 9321:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/private/UAM/update-user-profile/update-user-profile-routing.module.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateUserProfilePageRoutingModule": () => (/* binding */ UpdateUserProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _update_user_profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-user-profile.page */ 8642);




const routes = [
    {
        path: '',
        component: _update_user_profile_page__WEBPACK_IMPORTED_MODULE_0__.UpdateUserProfilePage
    }
];
let UpdateUserProfilePageRoutingModule = class UpdateUserProfilePageRoutingModule {
};
UpdateUserProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UpdateUserProfilePageRoutingModule);



/***/ }),

/***/ 9656:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/private/UAM/update-user-profile/update-user-profile.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateUserProfilePageModule": () => (/* binding */ UpdateUserProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _update_user_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-user-profile-routing.module */ 9321);
/* harmony import */ var _update_user_profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-user-profile.page */ 8642);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var src_app_shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared/shared.module */ 1511);









let UpdateUserProfilePageModule = class UpdateUserProfilePageModule {
};
UpdateUserProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _update_user_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.UpdateUserProfilePageRoutingModule,
            src_app_shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forChild()
        ],
        declarations: [_update_user_profile_page__WEBPACK_IMPORTED_MODULE_1__.UpdateUserProfilePage]
    })
], UpdateUserProfilePageModule);



/***/ }),

/***/ 8642:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/private/UAM/update-user-profile/update-user-profile.page.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateUserProfilePage": () => (/* binding */ UpdateUserProfilePage)
/* harmony export */ });
/* harmony import */ var C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _update_user_profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-user-profile.page.html?ngResource */ 9200);
/* harmony import */ var _update_user_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update-user-profile.page.scss?ngResource */ 742);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/user */ 5783);
/* harmony import */ var src_app_services_helpers_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/helpers/helper-service */ 8598);
/* harmony import */ var src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/language/language.service */ 3469);
/* harmony import */ var src_app_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/loader/loader.service */ 9744);
/* harmony import */ var src_app_services_localStorage_local_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/localStorage/local-storage.service */ 8565);
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/user/user.service */ 9709);














let UpdateUserProfilePage = class UpdateUserProfilePage {
  constructor(navCtrl, localStorageService, loadingCtrl, userService, alertController, languageService, router, loaderService) {
    this.navCtrl = navCtrl;
    this.localStorageService = localStorageService;
    this.loadingCtrl = loadingCtrl;
    this.userService = userService;
    this.alertController = alertController;
    this.languageService = languageService;
    this.router = router;
    this.loaderService = loaderService;
    this.enableSave = false;
    this.genders = [];
    this.roles = [];
    this.statuses = [];
    this.emailValidationMessage = "";
    this.phoneNumberValidationMessage = "";
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
    this.user = this.localStorageService.StoredPreference.LoggedInUser;
  }

  CancelUpdate() {
    this.userService.selectedUser = this.user;
    let navigationExtras = {
      queryParams: {
        ts: new Date().getMilliseconds()
      }
    };
    this.router.navigate(["view-user-profile"], navigationExtras);
  }

  GoToHomePage() {
    this.userService.selectedUser = this.user;
    let navigationExtras = {
      queryParams: {
        ts: new Date().getMilliseconds()
      }
    };
    this.router.navigate(["home", "dashboard"], navigationExtras);
  }

  emailTextChanged() {
    this.validate();
  }

  phoneNumberTextChanged() {
    this.validate();
  }

  validate() {
    if (src_app_services_helpers_helper_service__WEBPACK_IMPORTED_MODULE_4__.HelperService.validateEmail(this.user.Email) && src_app_services_helpers_helper_service__WEBPACK_IMPORTED_MODULE_4__.HelperService.validateMobileNumber(this.user.PhoneNumber)) {
      this.enableSave = true;
      this.emailValidationMessage = "";
      this.phoneNumberValidationMessage = "";
      return true;
    } else {
      this.enableSave = false;

      if (src_app_services_helpers_helper_service__WEBPACK_IMPORTED_MODULE_4__.HelperService.validateEmail(this.user.Email)) {
        this.emailValidationMessage = "";
      } else {
        this.emailValidationMessage = this.languageService.translate("USER_PROFILE.EMAIL_SYNTAX_VALIDATING_MESSAGE");
        return false;
      }

      if (src_app_services_helpers_helper_service__WEBPACK_IMPORTED_MODULE_4__.HelperService.validateMobileNumber(this.user.PhoneNumber)) {
        this.phoneNumberValidationMessage = "";
      } else {
        this.phoneNumberValidationMessage = this.languageService.translate("USER_PROFILE.PHONE_SYNTAX_VALIDATING_MESSAGE");
        return false;
      }
    }
  }

  UpdateButtonClicked() {
    if (this.userService.Validate(this.user)) {
      this.checkEmailExistance(() => {
        this.presentAlert(this.languageService.translate("SIGN_UP.ALREADY_REGISTERED"), this.languageService.translate("SIGN_UP.USER_WITH_EMAIL_ALREADY_EXISTS"));
      }, () => {
        this.checkUserNameExistance(() => {
          this.presentAlert(this.languageService.translate("SIGN_UP.ALREADY_REGISTERED"), this.languageService.translate("SIGN_UP.USER_WITH_USERNAME_ALREADY_EXISTS"));
        }, () => {
          this.UpdateUser(() => {}, () => {
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

      if (results.length > 1) {
        present(new src_app_models_user__WEBPACK_IMPORTED_MODULE_3__.User(results[0]));
      } else {
        absent();
      }
    }, () => {
      this.loaderService.dismissLoader();
      absent();
    });
  }

  checkUserNameExistance(present, absent) {
    this.loaderService.customLoader("Checking for User Name...", 10000);
    this.userService.readByUserName(this.user.UserName, results => {
      this.loaderService.dismissLoader();
      var occurance = 0;

      if (results.length > 1) {
        results.forEach(user => {
          if (this.user.UserName === user.UserName) {
            occurance++;
          }
        });

        if (occurance > 1) {
          present(new src_app_models_user__WEBPACK_IMPORTED_MODULE_3__.User(results[0]));
        } else {
          absent();
        }
      } else {
        absent();
      }
    }, () => {
      this.loaderService.dismissLoader();
      absent();
    });
  }

  UpdateUser(succes, failure) {
    this.loaderService.customLoader("Saving User...", 10000);
    this.user.UpdatedOn = (0,_angular_common__WEBPACK_IMPORTED_MODULE_9__.formatDate)(new Date(), 'dd-MM-yyyy hh:mm:ss', 'en-US', '+0530');
    this.userService.UpdateUserProfile(this.user, () => {
      this.loaderService.dismissLoader();
      this.GoToHomePage();
    }, () => {
      this.loaderService.dismissLoader();
    });
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

UpdateUserProfilePage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.NavController
}, {
  type: src_app_services_localStorage_local_storage_service__WEBPACK_IMPORTED_MODULE_7__.LocalStorageService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.LoadingController
}, {
  type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_8__.UserService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController
}, {
  type: src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_5__.LanguageService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
}, {
  type: src_app_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_6__.LoaderService
}];

UpdateUserProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: 'app-update-user-profile',
  template: _update_user_profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_update_user_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], UpdateUserProfilePage);


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

/***/ 742:
/*!************************************************************************************************!*\
  !*** ./src/app/pages/private/UAM/update-user-profile/update-user-profile.page.scss?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = ":host ion-content {\n  --background: url(\"/assets/bg20.JPG\") 0 0/100% 100% no-repeat;\n  background-size: cover;\n  background-color: aliceblue;\n}\n\n.toolbar-backgorund {\n  background-color: aliceblue;\n  color: black;\n}\n\n.user-profile-pic {\n  width: 60px;\n  height: 60px;\n  display: block;\n  margin-top: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: aliceblue;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  background-color: aliceblue;\n  color: black;\n}\n\nion-item.selected {\n  background-color: aliceblue;\n  color: black;\n}\n\nion-select {\n  max-width: 100% !important;\n  width: 100% !important;\n  padding-left: 0 !important;\n}\n\nion-card {\n  color: rgb(44, 29, 29);\n  background-color: aliceblue;\n  padding: 0px;\n  margin: 0px;\n  border-radius: 10px;\n}\n\nion-card-content {\n  background-color: aliceblue;\n  color: rgb(19, 13, 13);\n}\n\n.user-results {\n  background-color: aliceblue;\n}\n\n.user-results-list-header {\n  background-color: aliceblue;\n}\n\n.user-result-cell {\n  background-color: aquamarine;\n  margin-top: 10px;\n}\n\n.list-image {\n  font-size: 50px;\n  color: rgb(31, 7, 7);\n}\n\n.user-icon {\n  font-size: 50px;\n  color: rgb(31, 7, 7);\n}\n\n.value {\n  font-size: larger;\n  font-weight: 600;\n}\n\n.text-center {\n  text-align: center;\n  align-items: center;\n}\n\n.bottom-area {\n  position: fixed;\n  left: 0;\n  bottom: 0px;\n  right: 0;\n  background-color: gray;\n  height: 45px;\n  margin-bottom: 0px;\n}\n\n.bottom-button {\n  border-width: 1px;\n  border-color: #3e2c2c;\n  color: white;\n  font-size: larger;\n  font-weight: 800;\n  border-style: solid;\n  width: 50%;\n  margin: auto;\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZS11c2VyLXByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksNkRBQUE7RUFHQSxzQkFBQTtFQUNBLDJCQUFBO0FBQVI7O0FBS0E7RUFFSSwyQkFBQTtFQUVBLFlBQUE7QUFKSjs7QUFPQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FBSko7O0FBT0E7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUVBLFlBQUE7QUFMSjs7QUFRQTtFQUNJLDJCQUFBO0VBRUEsWUFBQTtBQU5KOztBQVNBO0VBQ0UsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0FBTkY7O0FBU0E7RUFDSSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQU5KOztBQVNBO0VBQ0ksMkJBQUE7RUFFQSxzQkFBQTtBQVBKOztBQVVBO0VBRUksMkJBQUE7QUFSSjs7QUFXQTtFQUNJLDJCQUFBO0FBUko7O0FBV0E7RUFDSSw0QkFBQTtFQUNBLGdCQUFBO0FBUko7O0FBV0E7RUFDSSxlQUFBO0VBQ0Esb0JBQUE7QUFSSjs7QUFXQTtFQUNJLGVBQUE7RUFDQSxvQkFBQTtBQVJKOztBQVdBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQVJKOztBQVdBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQVJKOztBQVdBO0VBQ0ksZUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBUko7O0FBVUU7RUFFRSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQVJKIiwiZmlsZSI6InVwZGF0ZS11c2VyLXByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgaW9uLWNvbnRlbnQge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9iZzIwLkpQR1wiKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcclxuICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuLnRvb2xiYXItYmFja2dvcnVuZCB7XHJcbiAgICAvLy0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0taW9uLWNvbG9yLWRhcmspLCB2YXIoLS1pb24tY29sb3ItZGFyaykpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG5cclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnVzZXItcHJvZmlsZS1waWMge1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxufVxyXG5cclxuaW9uLW5vdGUge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG5cclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuaW9uLWl0ZW0uc2VsZWN0ZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG5cclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuaW9uLXNlbGVjdCB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgY29sb3I6IHJnYig0NCwgMjksIDI5KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcblxyXG4gICAgY29sb3I6IHJnYigxOSwgMTMsIDEzKTtcclxufVxyXG5cclxuLnVzZXItcmVzdWx0cyB7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG59XHJcblxyXG4udXNlci1yZXN1bHRzLWxpc3QtaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxufVxyXG5cclxuLnVzZXItcmVzdWx0LWNlbGwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5saXN0LWltYWdlIHtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIGNvbG9yOiByZ2IoMzEsIDcsIDcpO1xyXG59XHJcblxyXG4udXNlci1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIGNvbG9yOiByZ2IoMzEsIDcsIDcpO1xyXG59XHJcblxyXG4udmFsdWUge1xyXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4udGV4dC1jZW50ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmJvdHRvbS1hcmVhe1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gIH1cclxuICAuYm90dG9tLWJ1dHRvblxyXG4gIHtcclxuICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjM2UyYzJjO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgfVxyXG4iXX0= */";

/***/ }),

/***/ 9200:
/*!************************************************************************************************!*\
  !*** ./src/app/pages/private/UAM/update-user-profile/update-user-profile.page.html?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = "\r\n<ion-header>\r\n  <ion-toolbar id=\"TitleToolbar\" class=\"text-center\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{'USER_PROFILE.PAGE_TITLE' | translate}}</ion-title>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-card>\r\n    <ion-card-header class=\"text-center\">\r\n      <ion-icon class=\"user-icon\" [name]=\"user.Icon\"></ion-icon>\r\n    </ion-card-header>\r\n  </ion-card>\r\n  <ion-card>\r\n    <ion-card-header class=\"text-center\">\r\n      <ion-item>\r\n        <ion-icon name='people-circle-outline' slot=\"start\"></ion-icon>\r\n        {{'USER.BASIC_DETAILS' | translate}}\r\n      </ion-item>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-list>\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"12\">{{'BASE_MODEL.NAME' | translate}} </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"6\">\r\n                <ion-input class=\"value\" [(ngModel)]=\"user.FirstName\" placeholder=\" {{'USER.FIRST_NAME' | translate}}\">\r\n                </ion-input>\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <ion-input class=\"value\" [(ngModel)]=\"user.LastName\" placeholder=\" {{'USER.LAST_NAME' | translate}}\">\r\n                </ion-input>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">{{'USER.GENDER' | translate}} </ion-col>\r\n              <ion-col class=\"value\" size=\"auto\">\r\n                <ion-select multiple=\"false\" cancelText=\"Cancel\" okText=\"Select\" [(ngModel)]=\"user.Gender\"\r\n                  placeholder=\" {{'USER.GENDER' | translate}}\">\r\n                  <ion-select-option *ngFor=\"let gender of genders\" value=\"{{ gender }}\">\r\n                    {{ gender }}\r\n                  </ion-select-option>\r\n                </ion-select>\r\n              </ion-col>\r\n            </ion-row>\r\n\r\n          </ion-grid>\r\n        </ion-item>\r\n\r\n      </ion-list>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <ion-card>\r\n    <ion-card-header class=\"text-center\">\r\n      <ion-item>\r\n        <ion-icon name='settings-outline' slot=\"start\"></ion-icon>\r\n\r\n        {{'USER.CONTACT_DETAILS' | translate}}\r\n      </ion-item>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-list>\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col>{{'USER.EMAIL' | translate}} </ion-col>\r\n              <ion-col class=\"value\" size=\"6\">\r\n                <ion-input [(ngModel)]=\"user.Email\"   (ionChange)=\"emailTextChanged()\"  placeholder=\" {{'USER.EMAIL' | translate}}\">\r\n                </ion-input>\r\n\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-label  color=\"danger\">\r\n              {{emailValidationMessage}}\r\n            </ion-label>\r\n          </ion-grid>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col>{{'USER.PHONE_NUMBER' | translate}} </ion-col>\r\n              <ion-col class=\"value\" size=\"6\">\r\n                <ion-input [(ngModel)]=\"user.PhoneNumber\" (ionChange)=\"phoneNumberTextChanged()\"   placeholder=\" {{'USER.PHONE_NUMBER' | translate}}\">\r\n                </ion-input>\r\n\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-label color=\"danger\">\r\n              {{phoneNumberValidationMessage}}\r\n            </ion-label>\r\n          </ion-grid>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-button expand=\"block\" (click)=\"CancelUpdate()\">\r\n    <ion-icon slot=\"start\" name=\"close\"></ion-icon>\r\n    {{'BUTTONS.CANCEL' | translate}}\r\n  </ion-button>\r\n  <ion-button [disabled]=\"!enableSave\" expand=\"block\" (click)=\"UpdateButtonClicked()\">\r\n    <ion-icon slot=\"start\" name=\"save\"></ion-icon>\r\n    {{'BUTTONS.SAVE' | translate}}\r\n  </ion-button>\r\n</ion-footer>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_private_UAM_update-user-profile_update-user-profile_module_ts.js.map