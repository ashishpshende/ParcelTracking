"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_services_user_user_service_ts"],{

/***/ 4015:
/*!*****************************************************************!*\
  !*** ./src/app/services/Authorization/authorization.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthorizationService": () => (/* binding */ AuthorizationService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/user */ 5783);
/* harmony import */ var _network_network_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../network/network.service */ 1947);
/* harmony import */ var src_app_services_helpers_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/helpers/helper-service */ 8598);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 2340);






const USER_DETAIL_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apiURL + '/users/info';
let AuthorizationService = class AuthorizationService {
    constructor(networkService) {
        this.networkService = networkService;
        console.log("AuthorizationService Initialized.");
        this.loggedInUser = this.getStoredUser();
    }
    storeUser(user) {
        localStorage.setItem("USER_NAME", user.Name.toString());
        if (user.Account != null && user.Account != undefined) {
            localStorage.setItem("ACCOUNT_NAME", user.Account.Name.toString());
        }
    }
    getStoredUser() {
        var user;
        if (localStorage.getItem("USER_ID") != null) {
            user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_0__.User(src_app_services_helpers_helper_service__WEBPACK_IMPORTED_MODULE_2__.HelperService.EmptyJSON());
            user.Name = localStorage.getItem("USER_NAME");
            this.loggedInUser = user;
        }
        return user;
    }
};
AuthorizationService.ctorParameters = () => [
    { type: _network_network_service__WEBPACK_IMPORTED_MODULE_1__.NetworkService }
];
AuthorizationService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], AuthorizationService);



/***/ }),

/***/ 8598:
/*!****************************************************!*\
  !*** ./src/app/services/helpers/helper-service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelperService": () => (/* binding */ HelperService)
/* harmony export */ });
// import * as moment from "moment-timezone";
class HelperService {
    static EmptyJSON() {
        return JSON.parse("{}");
    }
    getUUID() {
        return 'xxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    static getLocalDate(date, format) {
        // var localZone = moment.tz.guess();
        // if (format) {
        //   if (moment(date).isValid()) {
        //     return moment.utc(date).tz(localZone).format(format);
        //   }
        // }
        // else {
        //   if (moment(date).isValid()) {
        //     return moment.utc(date).tz(localZone);
        //   }
        // }
        return date;
    }
    static currencyToSymbol(currencyName) {
        switch (currencyName) {
            case "USD":
                return '$';
                break;
            case "SGD":
                return 'S$';
                break;
            case "INR":
                return '₹';
                break;
            case "AUD":
                return '$';
                break;
            case "BRL":
                return 'R$';
                break;
            case "CAD":
                return '$';
                break;
            case "CHF":
                return '₣';
                break;
            case "EUR":
                return '€';
                break;
            case "HKD":
                return '$';
                break;
            case "IDR":
                return 'Rp';
                break;
            case "IQD":
                return 'ع.د	';
                break;
            case "JPY":
                return '¥';
                break;
            case "KWD":
                return 'د.ك';
                break;
            case "LKR":
                return 'Rs';
                break;
            case "MXN":
                return '$';
                break;
            case "NZD":
                return '$';
                break;
            case "RUB":
                return 'р.';
                break;
            case "SEK":
                return 'kr';
                break;
            case "XAF":
                return '₣';
                break;
            case "ZWL":
                return '$';
                break;
            case "ZAR":
                return 'R';
                break;
            default:
                return '$';
                break;
        }
    }
    static getPasswordStrength(password) {
        if (password.length < 8)
            return -1;
        var strength = 0;
        var smallChars = false, capitalChars = false, numbers = false, specialChars = false;
        if (password.match(/[a-z]+/)) {
            smallChars = true;
        }
        if (password.match(/[A-Z]+/)) {
            capitalChars = true;
        }
        if (password.match(/[0-9]+/)) {
            numbers = true;
        }
        if (password.match(/[$@#&!]+/)) {
            specialChars = true;
        }
        if (smallChars)
            strength += 0.33;
        if (capitalChars)
            strength += 0.33;
        if (numbers)
            strength += 0.34;
        // if (specialChars)
        //   strength += 0.25
        return strength;
    }
    static validateEmail(email) {
        if (email == null || email == "")
            return false;
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (reg.test(email) == false) {
            return false;
        }
        return true;
    }
    static validateMobileNumber(mobileNumber) {
        if (mobileNumber == null || mobileNumber == "")
            return false;
        var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (mobileNumber.match(phoneno)) {
            return true;
        }
        else {
            return false;
        }
        return true;
    }
    static generateTempPassowrd() {
        var result = "password";
        var number = Math.random();
        number = Math.floor(1000 + Math.random() * 99999);
        result = result + number.toString();
        return result;
    }
}


/***/ }),

/***/ 8713:
/*!*******************************************************!*\
  !*** ./src/app/services/security/security.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SecurityService": () => (/* binding */ SecurityService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


let SecurityService = class SecurityService {
    constructor() { }
    hash(inputText) {
        var result = "";
        for (let index = 0; index < inputText.length; index++) {
            const element = inputText[index];
            result += (element.charCodeAt(0).toString(16) + "-");
        }
        result = results.substring(0, results.length - 1);
        return result;
    }
};
SecurityService.ctorParameters = () => [];
SecurityService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], SecurityService);



/***/ }),

/***/ 9481:
/*!***********************************************************!*\
  !*** ./src/app/services/shared-service/shared.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedService": () => (/* binding */ SharedService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


let SharedService = class SharedService {
    constructor() {
        this.currencySymbol = '$';
    }
};
SharedService.ctorParameters = () => [];
SharedService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], SharedService);



/***/ }),

/***/ 9709:
/*!***********************************************!*\
  !*** ./src/app/services/user/user.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService),
/* harmony export */   "UserURLs": () => (/* binding */ UserURLs)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/user */ 5783);
/* harmony import */ var _network_network_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../network/network.service */ 1947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _shared_service_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared-service/shared.service */ 9481);
/* harmony import */ var _Authorization_authorization_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Authorization/authorization.service */ 4015);
/* harmony import */ var _localStorage_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../localStorage/local-storage.service */ 8565);
/* harmony import */ var src_assets_constants_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/assets/constants/constants */ 5689);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _security_security_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../security/security.service */ 8713);
/* harmony import */ var ng_event_bus__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-event-bus */ 2735);
/* harmony import */ var _Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Authentication/authentication.service */ 6793);

/* eslint-disable no-var */
/* eslint-disable max-len */













const AUTH_TOKEN_KEY = 'Authorization';
class UserURLs {
}
UserURLs.USER_LOGIN_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + '/sheets/Users?where={"UserName":"USER_NAME","Password":"PASSWORD"}';
UserURLs.LIST = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + '/sheets/Users?keys=id,UserName,Email,PhoneNumber,FirstName,LastNamae,Role,Status,CreatedAt,rowIndex&skip={SKIP}&limit={LIMIT}&timestamp=' + new Date().getTime();
UserURLs.SEARCH = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + '/sheets/Users?keys=id,UserName,Email,PhoneNumber,FirstName,LastNamae,Role,Status,CreatedAt,rowIndex&where={{SEARCH}}&timestamp=' + new Date().getTime();
UserURLs.READ = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + '/sheets/Users/{ROW_INDEX}?keys=id,UserName,Email,PhoneNumber,FirstName,LastNamae,Role,Status,CreatedAt,rowIndex&where={"User Registration Number":"{REG_NO}"}&timestamp=' + new Date().getTime();
UserURLs.UPDATE = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + '/sheets/Users/{ROW_INDEX}?timestamp=' + new Date().getTime();
UserURLs.SAVE = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + '/sheets/Users?timestamp=' + new Date().getTime();
UserURLs.DELETE = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + '/sheets/Users/{ROW_INDEX}?timestamp=' + new Date().getTime();
UserURLs.READ_BY_USER_NAME = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + '/sheets/Users?keys=UserName,rowIndex&where={"UserName":"USER_NAME" }&timestamp=' + new Date().getTime();
UserURLs.READ_BY_EMAIL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + '/sheets/Users?keys=Email,rowIndex&where={"Email": "EMAIL"}&timestamp=' + new Date().getTime();
UserURLs.RESET_PASSWORD = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiURL + '/sheets/Users/{ROW_INDEX}?timestamp=' + new Date().getTime();
UserURLs.FORGOT_PASSWORD_SEND_EMAIL_APP_SCRIPT = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.appScriptApiURL + '?email={EMAIL}&username={USER_NAME}&body={PASSWORD}&name={USER_FULL_NAME}';
UserURLs.FORGOT_USERNAME_SEND_EMAIL_APP_SCRIPT = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.appScriptApiURL + '?email={EMAIL}&body={USER_NAME}&name={USER_FULL_NAME}';
UserURLs.USER_BY_EMAIL_N_USER_NAME_URL_APP_SCRIPT = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.appScriptApiURL + '?sheetid=' + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.SpreadSheetIdUser + '&sheetname=Users&filter={"Email":"EMAIL","UserName":"USER_NAME"}&skip=0&limit=10&match=exact';
UserURLs.USER_BY_EMAIL_URL_APP_SCRIPT = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.appScriptApiURL + '?sheetid=' + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.SpreadSheetIdUser + '&sheetname=Users&filter={"Email":"EMAIL"}&skip=0&limit=10&match=exact';
UserURLs.USER_CHECK_URL_APP_SCRIPT = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.appScriptApiURL + '?sheetid=' + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.SpreadSheetIdUser + '&sheetname=Users&filter={"Email":"EMAIL","Password":"PASSWORD"}&skip=0&limit=10&match=exact';
UserURLs.USER_LOGIN_URL_APP_SCRIPT = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.appScriptApiURL + '?sheetid=' + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.SpreadSheetIdUser + '&sheetname=Users&filter={"UserName":"USER_NAME","Password":"PASSWORD"}&skip=0&limit=10&match=exact';
UserURLs.LIST_APP_SCRIPT = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.appScriptApiURL + '?sheetid=' + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.SpreadSheetIdUser + '&sheetname=Users&skip={SKIP}&limit={LIMIT}&timestamp=' + new Date().getTime();
UserURLs.LIST_APP_SCRIPT_BY_NAME = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.appScriptApiURL + '?sheetid=' + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.SpreadSheetIdUser + '&sheetname=Users&condition=or&filter={"UserName":"USER_NAME","Email":"USER_NAME","FirstName":"USER_NAME","LastName":"USER_NAME"}&skip={SKIP}&limit={LIMIT}&timestamp=' + new Date().getTime();
UserURLs.READ_APP_SCRIPT = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.appScriptApiURL + '?sheetid=' + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.SpreadSheetIdUser + '&sheetname=Users&rowIndex={ROW_INDEX}&timestamp=' + new Date().getTime();
UserURLs.READ_BY_EMAIL_APP_SCRIPT = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.appScriptApiURL + '?sheetid=' + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.SpreadSheetIdUser + '&sheetname=Users&match=exact&filter={"Email": "EMAIL"}&timestamp=' + new Date().getTime();
UserURLs.READ_BY_USER_NAME_APP_SCRIPT = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.appScriptApiURL + '?sheetid=' + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.SpreadSheetIdUser + '&sheetname=Users&match=exact&filter={"UserName":"USER_NAME"}&timestamp=' + new Date().getTime();
let UserService = class UserService {
    constructor(eventBus, securityService, authenticationService, authorizationService, networkService, sharedService, localStorageService) {
        this.eventBus = eventBus;
        this.securityService = securityService;
        this.authenticationService = authenticationService;
        this.authorizationService = authorizationService;
        this.networkService = networkService;
        this.sharedService = sharedService;
        this.localStorageService = localStorageService;
        this.genders = [];
        this.roles = [];
        this.statuses = [];
        this.authenticationState = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject(false);
        this.sampleuser = {
            "Id": 0,
            "Name": "OOps, Unable to fetch User Name",
            "Account": {
                "Id": 0,
                "Name": "OOps, Unable to fetch Compnay Name",
            }
        };
        this.genders = ['Male', "Female", "Others"];
        this.roles = ["SuperAdmin", "Admin", "User"];
        this.statuses = ["Active", "InActive", "Suspended"];
    }
    isSessionValid(success, failure) {
        if (this.localStorageService.StoredPreference.LoggedInStatus) {
            this.loggedInUser = this.localStorageService.StoredPreference.LoggedInUser;
            this.readByIndex(this.loggedInUser.rowIndex, serverUser => {
                switch (serverUser.Status) {
                    case "Active":
                        this.loggedInUser = serverUser;
                        if (this.loggedInUser.Email == serverUser.Email)
                            success(this.loggedInUser);
                        else
                            this.logout(success => { failure("EMAIL_UPDATED"); });
                        break;
                    case "Inactive":
                    case "InActive":
                        this.logout(success => { failure("INACTIVE_USER"); });
                        break;
                    case "Suspended":
                        this.logout(success => { failure("SUSPENDED_USER"); });
                        break;
                    case "ResetRequired":
                        this.logout(success => { failure("RESET_REQUIRED"); });
                        break;
                }
            }, error => {
                failure("USER_NOT_FOUND");
            });
        }
        else {
            failure("SOMETHING_WENT_WRONG");
        }
    }
    getUseDetails(success, failure) {
        if (this.localStorageService.StoredPreference.LoggedInStatus === true) {
            this.loggedInUser = this.localStorageService.StoredPreference.LoggedInUser;
            this.readByIndex(this.loggedInUser.rowIndex, serverUser => {
                switch (serverUser.Status) {
                    case "Active":
                        this.loggedInUser = serverUser;
                        if (this.loggedInUser.Email == serverUser.Email)
                            success(this.loggedInUser);
                        else
                            this.logout(success => { failure("EMAIL_UPDATED"); });
                        break;
                    case "Inactive":
                    case "InActive":
                        this.logout(success => { failure("INACTIVE_USER"); });
                        break;
                    case "Suspended":
                        this.logout(success => { failure("SUSPENDED_USER"); });
                        break;
                }
            }, error => {
                failure("USER_NOT_FOUND");
            });
        }
        else {
            failure("SOMETHING_WENT_WRONG");
        }
    }
    logout(success) {
        this.authenticationService.logout(authenticationSuccess => {
            if (this.loggedInUser != null)
                this.loggedInUser.FirstName = '';
            this.loggedInUser.LastName = '';
            this.loggedInUser.UserName = '';
            this.loggedInUser.Email = '';
            this.loggedInUser.Gender = '';
            this.loggedInUser.DateOfBirth = '';
            this.loggedInUser.Role = '';
            this.loggedInUser.PhoneNumber = '';
            this.loggedInUser.Status = '';
            this.loggedInUser.StatusIcon = '';
            success();
        });
    }
    login(userName, password, success, failure) {
        this.loggedInUser = new src_app_models_user__WEBPACK_IMPORTED_MODULE_0__.User(JSON.parse("{}"));
        this.networkService.get(UserURLs.USER_LOGIN_URL_APP_SCRIPT.replace('USER_NAME', userName).replace("PASSWORD", this.securityService.hash(password)), response => {
            if (response.results.length != 0) {
                this.loggedInUser = new src_app_models_user__WEBPACK_IMPORTED_MODULE_0__.User(response.result[0]);
                switch (this.loggedInUser.Status) {
                    case "Active":
                        if (this.loggedInUser.ResetRequired == true) {
                            failure("RESET_REQUIRED");
                        }
                        else {
                            this.authenticationService.login(authenticationSuccess => {
                                this.setLocalUser(this.loggedInUser);
                                success();
                            });
                        }
                        break;
                    case "Inactive":
                    case "InActive":
                        failure("INACTIVE_USER");
                        break;
                    case "Suspended":
                        failure("SUSPENDED_USER");
                        break;
                }
            }
            else {
                failure("INVALID_CREDENTAILS");
            }
        }, error => {
            console.log(`Error:${error}`);
            failure("INVALID_CREDENTAILS");
        });
    }
    checkUser(email, password, success, failure) {
        this.loggedInUser = new src_app_models_user__WEBPACK_IMPORTED_MODULE_0__.User(JSON.parse("{}"));
        this.networkService.get(UserURLs.USER_CHECK_URL_APP_SCRIPT.replace('EMAIL', email).replace("PASSWORD", this.securityService.hash(password)), response => {
            if (response.results.length != 0) {
                var user = response.result[0];
                switch (user.Status) {
                    case "Active":
                        success(user);
                        break;
                    case "Inactive":
                    case "InActive":
                        failure("INACTIVE_USER");
                        break;
                    case "Suspended":
                        failure("SUSPENDED_USER");
                        break;
                }
            }
            else {
                failure("INVALID_CREDENTAILS");
            }
        }, error => {
            console.log(`Error:${error}`);
            failure("INVALID_CREDENTAILS");
        });
    }
    Validate(user) {
        if (user.FirstName == null || user.FirstName == undefined || user.FirstName == "") {
            return false;
        }
        if (user.LastName == null || user.LastName == undefined || user.LastName == "") {
            return false;
        }
        if (user.Gender == null || user.Gender == undefined || user.Gender == "") {
            return false;
        }
        if (user.Email == null || user.Email == undefined || user.Email == "") {
            return false;
        }
        if (user.PhoneNumber == null || user.PhoneNumber == undefined || user.PhoneNumber == "") {
            return false;
        }
        if (user.UserName == null || user.UserName == undefined || user.UserName == "") {
            return false;
        }
        return true;
    }
    list(skip = 0, limit = 10, success, failure) {
        this.networkService.get(UserURLs.LIST_APP_SCRIPT.replace('{SKIP}', skip.toString()).replace("{LIMIT}", limit.toString()), response => {
            success(response);
        }, error => {
            console.log("Error:" + error);
            failure();
        });
    }
    listBykeyword(searchKeyword, skip = 0, limit = 10, success, failure) {
        this.networkService.get(UserURLs.LIST_APP_SCRIPT_BY_NAME.replace('{SKIP}', skip.toString()).replace("{LIMIT}", limit.toString()).replaceAll("USER_NAME", searchKeyword), response => {
            success(response);
        }, error => {
            console.log("Error:" + error);
            failure();
        });
    }
    search(reg_no, success, failure) {
        this.networkService.get(UserURLs.SEARCH.replace('{REG_NO}', reg_no), response => {
            success(response);
        }, error => {
            console.log("Error:" + error);
            failure();
        });
    }
    read(reg_no, success, failure) {
        this.networkService.get(UserURLs.SEARCH.replace('{REG_NO}', reg_no), response => {
            success(response.results);
        }, error => {
            console.log("Error:" + error);
            failure();
        });
    }
    readByIndex(rowIndex, success, failure) {
        this.networkService.get(UserURLs.READ_APP_SCRIPT.replace('{ROW_INDEX}', rowIndex.toString()), response => {
            success(response);
        }, error => {
            console.log("Error:" + error);
            failure();
        });
    }
    readByEmail(email, success, failure) {
        this.networkService.get(UserURLs.READ_BY_EMAIL_APP_SCRIPT.replace('EMAIL', email), response => {
            success(response.result);
        }, error => {
            console.log("Error:" + error);
            failure();
        });
    }
    readByUserName(userName, success, failure) {
        this.networkService.get(UserURLs.READ_BY_USER_NAME_APP_SCRIPT.replace('USER_NAME', userName), response => {
            success(response.result);
        }, error => {
            console.log("Error:" + error);
            failure();
        });
    }
    SaveUser(user, success, failure) {
        user.CreatedOn = (0,_angular_common__WEBPACK_IMPORTED_MODULE_10__.formatDate)(new Date(), 'dd-MM-yyyy hh:mm:ss', 'en-US', '+0530');
        user.UpdatedOn = (0,_angular_common__WEBPACK_IMPORTED_MODULE_10__.formatDate)(new Date(), 'dd-MM-yyyy hh:mm:ss', 'en-US', '+0530');
        this.networkService.post(UserURLs.SAVE, this.ToJSON(user), response => {
            user.rowIndex = response.rowIndex;
            success(user);
        }, error => {
            console.log("Error:" + error);
            failure();
        });
    }
    UpdateUser(user, success, failure) {
        user.CreatedOn = (0,_angular_common__WEBPACK_IMPORTED_MODULE_10__.formatDate)(new Date(), 'dd-MM-yyyy hh:mm:ss', 'en-US', '+0530');
        this.networkService.put(UserURLs.UPDATE.replace('{ROW_INDEX}', user.rowIndex.toString()), this.ToUpdateJSON(user), response => {
            success(response);
        }, error => {
            console.log("Error:" + error);
            failure();
        });
    }
    UpdateUserCredentials(user, success, failure) {
        user.CreatedOn = (0,_angular_common__WEBPACK_IMPORTED_MODULE_10__.formatDate)(new Date(), 'dd-MM-yyyy hh:mm:ss', 'en-US', '+0530');
        this.networkService.put(UserURLs.UPDATE.replace('{ROW_INDEX}', user.rowIndex.toString()), this.ToCredentialsJSON(user), response => {
            success(response);
        }, error => {
            console.log("Error:" + error);
            failure();
        });
    }
    ResetPassword(rowIndex, newPassword, success, failure) {
        var requestParams = {
            "UpdatedOn": (0,_angular_common__WEBPACK_IMPORTED_MODULE_10__.formatDate)(new Date(), 'dd-MM-yyyy hh:mm:ss', 'en-US', '+0530'),
            "Password": this.securityService.hash(newPassword),
            "ResetRequired": 0
        };
        this.networkService.put(UserURLs.RESET_PASSWORD.replace('{ROW_INDEX}', rowIndex.toString()), requestParams, response => {
            success(response);
        }, error => {
            console.log("Error:" + error);
            failure();
        });
    }
    DeleteUser(user, success, failure) {
        this.networkService.delete(UserURLs.DELETE.replace('{ROW_INDEX}', user.rowIndex.toString()), this.ToJSON(user), response => {
            success(response);
        }, error => {
            console.log("Error:" + error);
            failure();
        });
    }
    //Profile
    UpdateUserProfile(user, success, failure) {
        user.CreatedOn = (0,_angular_common__WEBPACK_IMPORTED_MODULE_10__.formatDate)(new Date(), 'dd-MM-yyyy hh:mm:ss', 'en-US', '+0530');
        //user.Password = this.securityService.hash(user.Password);
        this.networkService.put(UserURLs.UPDATE.replace('{ROW_INDEX}', user.rowIndex.toString()), this.ToUpdateJSON(user), response => {
            console.log("UpdateUserProfile", response);
            this.setLocalUser(response);
            success(response);
        }, error => {
            console.log("Error:" + error);
            failure();
        });
    }
    setLocalUser(userObject) {
        this.authorizationService.loggedInUser = userObject;
        if (userObject.Role) {
            this.localStorageService.StoredPreference.LoggedInUser = userObject;
        }
        else {
            this.localStorageService.StoredPreference.LoggedInUser.FirstName = userObject.FirstName;
            this.localStorageService.StoredPreference.LoggedInUser.LastName = userObject.LastName;
            this.localStorageService.StoredPreference.LoggedInUser.UserName = userObject.UserName;
            this.localStorageService.StoredPreference.LoggedInUser.Gender = userObject.Gender;
            this.localStorageService.StoredPreference.LoggedInUser.PhoneNumber = userObject.PhoneNumber;
            this.localStorageService.StoredPreference.LoggedInUser.Email = userObject.Email;
        }
        this.localStorageService.StoredPreference.LoggedInStatus = true;
        this.localStorageService.StoredPreference.LoggedInUserEmail = userObject.Email;
        this.localStorageService.StoredPreference.LoggedInUserName = userObject.UserName;
        this.localStorageService.StoredPreference.LoggedInUserRowIndex = userObject.rowIndex;
        this.localStorageService.setItem(src_assets_constants_constants__WEBPACK_IMPORTED_MODULE_6__.KeywordConstants.USER_OBJECT, userObject);
        this.localStorageService.setItem(src_assets_constants_constants__WEBPACK_IMPORTED_MODULE_6__.KeywordConstants.USER_EMAIL, userObject.Email);
        this.localStorageService.setItem(src_assets_constants_constants__WEBPACK_IMPORTED_MODULE_6__.KeywordConstants.USER_NAME, userObject.UserName);
        this.localStorageService.setItem(src_assets_constants_constants__WEBPACK_IMPORTED_MODULE_6__.KeywordConstants.USER_ROW_INDEX, userObject.rowIndex);
        this.localStorageService.setItem(src_assets_constants_constants__WEBPACK_IMPORTED_MODULE_6__.KeywordConstants.DEFAULT_APP_LANGUAGE, 'en');
    }
    ToJSON(user) {
        if (user.rowIndex != null && user.rowIndex != undefined && user.rowIndex != 0)
            return {
                "UserName": user.UserName,
                "Password": this.securityService.hash(user.Password),
                "Email": user.Email,
                "PhoneNumber": user.PhoneNumber,
                "FirstName": user.FirstName,
                "LastName": user.LastName,
                "Gender": user.Gender,
                "Role": user.Role,
                "Status": user.Status,
                "rowIndex": user.rowIndex,
                "CreatedOn": user.CreatedOn,
                "UpdatedOn": user.UpdatedOn,
                "ResetRequired": user.ResetRequired ? 1 : 0
            };
        else
            return {
                "UserName": user.UserName,
                "Password": this.securityService.hash(user.Password),
                "Email": user.Email,
                "PhoneNumber": user.PhoneNumber,
                "FirstName": user.FirstName,
                "LastName": user.LastName,
                "Gender": user.Gender,
                "Role": user.Role,
                "Status": user.Status,
                "CreatedOn": user.CreatedOn,
                "UpdatedOn": user.UpdatedOn,
                "ResetRequired": user.ResetRequired ? 1 : 0
            };
    }
    getUserByUserNameEmail(userName, email, success, failure) {
        this.networkService.get(UserURLs.USER_BY_EMAIL_N_USER_NAME_URL_APP_SCRIPT.replace('USER_NAME', userName).replace('EMAIL', email).replace('USER_NAME', userName), response => {
            success(response);
        }, error => {
            console.log('Error:' + error);
            failure();
        });
    }
    getUserByEmail(email, success, failure) {
        this.networkService.get(UserURLs.USER_BY_EMAIL_URL_APP_SCRIPT.replace('EMAIL', email), response => {
            success(response);
        }, error => {
            console.log('Error:' + error);
            failure();
        });
    }
    sendForgotPasswordEmail(userFullName, userName, email, password, success, failure) {
        this.networkService.get(UserURLs.FORGOT_PASSWORD_SEND_EMAIL_APP_SCRIPT.replace('{USER_NAME}', userName).replace('{EMAIL}', email).replace('{PASSWORD}', password).replace('{USER_FULL_NAME}', userFullName), response => {
            success(response);
        }, error => {
            console.log('Error:' + error);
            failure();
        });
    }
    sendForgotUserEmail(userFullName, email, userName, success, failure) {
        var url = UserURLs.FORGOT_USERNAME_SEND_EMAIL_APP_SCRIPT.replace('{USER_NAME}', userName).replace('{EMAIL}', email).replace('{USER_FULL_NAME}', userFullName);
        this.networkService.get(url, response => {
            success(response);
        }, error => {
            console.log('Error:' + error);
            failure();
        });
    }
    ToUpdateJSON(user) {
        return {
            "UserName": user.UserName,
            "Email": user.Email,
            "PhoneNumber": user.PhoneNumber,
            "FirstName": user.FirstName,
            "LastName": user.LastName,
            "Gender": user.Gender,
            "Role": user.Role,
            "Status": user.Status,
            "UpdatedOn": user.UpdatedOn
        };
    }
    ToProfileJSON(user) {
        return {
            "UserName": user.UserName,
            "Password": this.securityService.hash(user.Password),
            "Email": user.Email,
            "PhoneNumber": user.PhoneNumber,
            "FirstName": user.FirstName,
            "LastName": user.LastName,
            "Gender": user.Gender,
            "rowIndex": user.rowIndex
        };
    }
    ToCredentialsJSON(user) {
        user.UpdatedOn = (0,_angular_common__WEBPACK_IMPORTED_MODULE_10__.formatDate)(new Date(), 'dd-MM-yyyy hh:mm:ss', 'en-US', '+0530');
        return {
            "UserName": user.UserName,
            "Email": user.Email,
            "Password": this.securityService.hash(user.Password),
            "ResetRequired": 1,
            "UpdatedOn": user.UpdatedOn
        };
    }
};
UserService.ctorParameters = () => [
    { type: ng_event_bus__WEBPACK_IMPORTED_MODULE_11__.NgEventBus },
    { type: _security_security_service__WEBPACK_IMPORTED_MODULE_7__.SecurityService },
    { type: _Authentication_authentication_service__WEBPACK_IMPORTED_MODULE_8__.AuthenticationService },
    { type: _Authorization_authorization_service__WEBPACK_IMPORTED_MODULE_4__.AuthorizationService },
    { type: _network_network_service__WEBPACK_IMPORTED_MODULE_1__.NetworkService },
    { type: _shared_service_shared_service__WEBPACK_IMPORTED_MODULE_3__.SharedService },
    { type: _localStorage_local_storage_service__WEBPACK_IMPORTED_MODULE_5__.LocalStorageService }
];
UserService = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Injectable)({
        providedIn: 'root'
    })
], UserService);



/***/ })

}]);
//# sourceMappingURL=default-src_app_services_user_user_service_ts.js.map