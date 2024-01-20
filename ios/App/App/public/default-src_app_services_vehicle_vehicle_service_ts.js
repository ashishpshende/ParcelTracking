"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_services_vehicle_vehicle_service_ts"],{

/***/ 4093:
/*!*****************************************************!*\
  !*** ./src/app/services/vehicle/vehicle.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VehicleService": () => (/* binding */ VehicleService),
/* harmony export */   "VehicleURLs": () => (/* binding */ VehicleURLs)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _network_network_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../network/network.service */ 1947);
/* harmony import */ var _security_security_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../security/security.service */ 8713);

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable max-len */




class VehicleURLs {
}
VehicleURLs.LIST = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + '/sheets/Vehicles?skip={SKIP}&limit={LIMIT}&timestamp=' + new Date().getTime();
VehicleURLs.SEARCH = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + '/sheets/Vehicles?where={"Vehicle Registration Number":"{REG_NO}"}&skip={SKIP}&limit={LIMIT}&timestamp=' + new Date().getTime();
VehicleURLs.SEARCH_BY_FILTER = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + '/sheets/Vehicles?where={{SEARCH}}&skip={SKIP}&limit={LIMIT}&timestamp=' + new Date().getTime();
VehicleURLs.READ = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + '/sheets/Vehicles?where={"Vehicle Registration Number":"{REG_NO}"}&skip={SKIP}&limit={LIMIT}&timestamp=' + new Date().getTime();
VehicleURLs.UPDATE = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + '/sheets/Vehicles/{ROW_INDEX}?timestamp=' + new Date().getTime();
VehicleURLs.INSERT = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + '/sheets/Vehicles/{ROW_INDEX}?timestamp=' + new Date().getTime();
VehicleURLs.READ_BY_INDEX = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + '/sheets/Vehicles/{INDEX}?timestamp=' + new Date().getTime();
VehicleURLs.SAVE_SCHEDULE_SEARCH = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + '/sheets/Lookup?timestamp=' + new Date().getTime();
VehicleURLs.DELETE_UPDATE_SCHEDULE_SEARCH = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + '/sheets/Lookup/{ROW_INDEX}?timestamp=' + new Date().getTime();
VehicleURLs.READ_APP_SCRIPT = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.appScriptApiURL + '?sheetid=' + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.SpreadsheetId + '&sheetname=Vehicles&filter={"Vehicle Registration Number":"{REG_NO}"}&skip={SKIP}&limit={LIMIT}&timestamp=' + new Date().getTime();
VehicleURLs.SEARCH_BY_FILTER_APP_SCRIPT = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.appScriptApiURL + '?sheetid=' + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.SpreadsheetId + '&sheetname=Vehicles&filter={{SEARCH}}&skip={SKIP}&limit={LIMIT}&timestamp=' + new Date().getTime();
VehicleURLs.READ_BY_INDEX_APP_SCRIPT = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.appScriptApiURL + '?sheetid=' + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.SpreadsheetId + '&sheetname=Vehicles&rowIndex={INDEX}?timestamp=' + new Date().getTime();
VehicleURLs.LIST_APP_SCRIPT = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.appScriptApiURL + '?sheetid=' + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.SpreadsheetId + '&sheetname=Vehicles&skip={SKIP}&limit={LIMIT}&timestamp=' + new Date().getTime();
VehicleURLs.LOAD_METADATA_APP_SCRIPT = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.appScriptApiURL + '?sheetid=' + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.SpreadSheetIdUser + '&sheetname=MetaData';
VehicleURLs.LIST_APP_SCRIPT_BY_KEY = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.appScriptApiURL + '?sheetid=' + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.SpreadsheetId + '&sheetname=Lookup&condition=or&filter={"VehicleRegistrationNumber":"{SEARCH_KEY}","VehicleEngineNumber":"{SEARCH_KEY}","VehicleChassisNumber":"{SEARCH_KEY}","Comments":"{SEARCH_KEY}"}&skip={SKIP}&limit={LIMIT}&timestamp=' + new Date().getTime();
VehicleURLs.LIST_APP_SCRIPT_WITHOUT_KEY = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.appScriptApiURL + '?sheetid=' + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.SpreadsheetId + '&sheetname=Lookup&skip={SKIP}&limit={LIMIT}&timestamp=' + new Date().getTime();
let VehicleService = class VehicleService {
    constructor(securityService, networkService) {
        this.securityService = securityService;
        this.networkService = networkService;
        this.vehicleTypes = new Array();
        this.vehicleCategories = new Array();
        this.AllCompanies = new Array();
        this.TheftDay = new Array();
        this.TwoWheelerVehicleCompanies = new Array();
        this.ThreeWheelerVehicleCompanies = new Array();
        this.FourWheelerVehicleCompanies = new Array();
        this.BusVehicleCompanies = new Array();
        this.TruckVehicleCompanies = new Array();
        this.source = '';
        this.PoliceStationList = new Array();
        this.LoadMetaData(resp => {
            resp.forEach(row => {
                switch (row.Type) {
                    case 'Theft':
                        this.TheftDay.push(row.Value);
                        break;
                    case 'District':
                        if (row.Name.toLowerCase() === 'thane') {
                            this.PoliceStationList.push(row.Value);
                        }
                        break;
                    case 'VehicleType':
                        this.vehicleTypes.push(row.Value);
                        break;
                    case 'VehicleCategory':
                        this.vehicleCategories.push(row.Value);
                        break;
                    case 'VehicleCompany':
                        this.AllCompanies.push(row.Value);
                        if (row.Name.toLowerCase() === 'two wheeler') {
                            this.TwoWheelerVehicleCompanies.push(row.Value);
                        }
                        if (row.Name.toLowerCase() === 'three wheeler') {
                            this.ThreeWheelerVehicleCompanies.push(row.Value);
                        }
                        if (row.Name.toLowerCase() === 'four wheeler') {
                            this.FourWheelerVehicleCompanies.push(row.Value);
                        }
                        if (row.Name.toLowerCase() === 'bus') {
                            this.BusVehicleCompanies.push(row.Value);
                        }
                        if (row.Name.toLowerCase() === 'truck') {
                            this.TruckVehicleCompanies.push(row.Value);
                        }
                        break;
                }
            });
        }, error => {
        });
    }
    LoadMetaData(success, failure) {
        this.networkService.get(VehicleURLs.LOAD_METADATA_APP_SCRIPT, response => {
            success(response);
        }, error => {
            console.log('Error:' + error);
            failure();
        });
    }
    list(skip = 0, limit = 10, success, failure) {
        this.networkService.get(VehicleURLs.LIST_APP_SCRIPT.replace('{SKIP}', skip.toString()).replace('{LIMIT}', limit.toString()), response => {
            success(response);
        }, error => {
            console.log('Error:' + error);
            failure();
        });
    }
    GetIcon(vehicleType) {
        switch (vehicleType) {
            case 'Two Wheeler':
                return '/assets/icon/two-wheeler.png';
                break;
            case 'Three Wheeler':
                return '/assets/icon/three-wheeler.png';
                break;
            case 'Four Wheeler':
                return '/assets/icon/four-wheeler.png';
                break;
            case 'Bus':
                return '/assets/icon/bus.png';
                break;
            case 'Truck':
                return '/assets/icon/truck.png';
                break;
            default:
                return '/assets/icon/four-wheeler.png';
                break;
        }
    }
    search(success, failure) {
        this.networkService.get(VehicleURLs.SEARCH.replace('{SKIP}', this.searchFilter.skip.toString()).replace('{LIMIT}', this.searchFilter.limit.toString()).replace('{REG_NO}', this.searchFilter.Registration_Number.toString()), response => {
            success(response);
        }, error => {
            console.log('Error:' + error);
            failure();
        });
    }
    searchByFilter(success, failure) {
        this.networkService.get(VehicleURLs.SEARCH_BY_FILTER_APP_SCRIPT.replace('{SKIP}', this.searchFilter.skip.toString()).replace('{LIMIT}', this.searchFilter.limit.toString()).replace('{SEARCH}', this.searchFilter.ToSearchParam()), response => {
            success(response);
        }, error => {
            console.log('Error:' + error);
            failure();
        });
    }
    read(reg_no, success, failure) {
        this.networkService.get(VehicleURLs.READ_APP_SCRIPT.replace('{REG_NO}', reg_no), response => {
            success(response);
        }, error => {
            console.log('Error:' + error);
            failure();
        });
    }
    readByIndex(index, success, failure) {
        this.networkService.get(VehicleURLs.READ_BY_INDEX_APP_SCRIPT.replace('{INDEX}', index.toString()), response => {
            success(response);
        }, error => {
            console.log('Error:' + error);
            failure();
        });
    }
    Update(vehicle, success, failure) {
        this.networkService.put(VehicleURLs.UPDATE.replace('{ROW_INDEX}', vehicle.rowIndex.toString()), vehicle.toJSON(), response => {
            success(response);
        }, error => {
            console.log('Error:' + error);
            failure();
        });
    }
    SaveScheduleSearch(scheduleSearch, success, failure) {
        this.networkService.post(VehicleURLs.SAVE_SCHEDULE_SEARCH, scheduleSearch.toJSON(), response => {
            success(response);
        }, error => {
            console.log('Error:' + error);
            failure();
        });
    }
    UpdateScheduleSearch(scheduleSearch, success, failure) {
        this.networkService.put(VehicleURLs.DELETE_UPDATE_SCHEDULE_SEARCH.replaceAll('{ROW_INDEX}', scheduleSearch.rowIndex.toString()), scheduleSearch.toUpdateJSON(), response => {
            success(response);
        }, error => {
            console.log('Error:' + error);
            failure();
        });
    }
    deleteScheduleSearch(selectedScheduleSearch, success, failure) {
        this.networkService.delete(VehicleURLs.DELETE_UPDATE_SCHEDULE_SEARCH.replaceAll('{ROW_INDEX}', selectedScheduleSearch.rowIndex.toString()), selectedScheduleSearch, response => {
            success(response);
        }, error => {
            console.log('Error:' + error);
            failure();
        });
    }
    listBykeyword(searchKeyword, skip = 0, limit = 10, success, failure) {
        if (searchKeyword.length > 0) {
            this.networkService.get(VehicleURLs.LIST_APP_SCRIPT_BY_KEY.replace('{SKIP}', skip.toString()).replace('{LIMIT}', limit.toString()).replaceAll('{SEARCH_KEY}', searchKeyword), response => {
                success(response);
            }, error => {
                console.log('Error:' + error);
                failure();
            });
        }
        else {
            this.networkService.get(VehicleURLs.LIST_APP_SCRIPT_WITHOUT_KEY.replace('{SKIP}', skip.toString()).replace('{LIMIT}', limit.toString()), response => {
                success(response);
            }, error => {
                console.log('Error:' + error);
                failure();
            });
        }
    }
};
VehicleService.ctorParameters = () => [
    { type: _security_security_service__WEBPACK_IMPORTED_MODULE_2__.SecurityService },
    { type: _network_network_service__WEBPACK_IMPORTED_MODULE_1__.NetworkService }
];
VehicleService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], VehicleService);



/***/ })

}]);
//# sourceMappingURL=default-src_app_services_vehicle_vehicle_service_ts.js.map