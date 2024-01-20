"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_services_security_security_service_ts-_70be0"],{

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



/***/ })

}]);
//# sourceMappingURL=src_app_services_security_security_service_ts-_70be0.js.map