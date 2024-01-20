"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_private_home_dashboard_dashboard_module_ts"],{

/***/ 2328:
/*!**************************************************************************!*\
  !*** ./src/app/pages/private/home/dashboard/dashboard-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageRoutingModule": () => (/* binding */ DashboardPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.page */ 8970);




const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_0__.DashboardPage
    }
];
let DashboardPageRoutingModule = class DashboardPageRoutingModule {
};
DashboardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DashboardPageRoutingModule);



/***/ }),

/***/ 8449:
/*!******************************************************************!*\
  !*** ./src/app/pages/private/home/dashboard/dashboard.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageModule": () => (/* binding */ DashboardPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-routing.module */ 2328);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page */ 8970);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 8699);








let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule.forChild()
        ],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.DashboardPage]
    })
], DashboardPageModule);



/***/ }),

/***/ 8970:
/*!****************************************************************!*\
  !*** ./src/app/pages/private/home/dashboard/dashboard.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPage": () => (/* binding */ DashboardPage)
/* harmony export */ });
/* harmony import */ var C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _dashboard_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page.html?ngResource */ 699);
/* harmony import */ var _dashboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.page.scss?ngResource */ 4713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/user */ 5783);
/* harmony import */ var src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/language/language.service */ 3469);
/* harmony import */ var src_app_services_localStorage_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/localStorage/local-storage.service */ 8565);
/* harmony import */ var src_app_services_notifiication_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/notifiication/notification.service */ 4522);
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/user/user.service */ 9709);




/* eslint-disable max-len */









let DashboardPage = class DashboardPage {
  constructor(userService, router, languageService, localStorageService, loadingController, alertController, notificationService) {
    this.userService = userService;
    this.router = router;
    this.languageService = languageService;
    this.localStorageService = localStorageService;
    this.loadingController = loadingController;
    this.alertController = alertController;
    this.notificationService = notificationService;
    this.loggedInUser = new src_app_models_user__WEBPACK_IMPORTED_MODULE_3__.User(JSON.parse('{}'));
    this.router.events.forEach(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__.NavigationEnd) {
        this.serveBasedOnUserRole();
      }
    });
  }

  serveBasedOnUserRole() {
    //Role wise changes
    this.loggedInUser = this.localStorageService.StoredPreference.LoggedInUser;
  } //Page Life Cycle


  ngAfterViewInit() {
    this.initializeLoader();
    this.loggedInUser = this.localStorageService.StoredPreference.LoggedInUser;
    this.serveBasedOnUserRole();
    this.userService.isSessionValid(results => {
      this.loading?.dismiss();
    }, errors => {
      this.loading?.dismiss();

      switch (errors) {
        case 'EMAIL_UPDATED':
          this.presentAlert(this.languageService.translate('SESSION.EMAIL_UPDATED_ERROR_TITLE'), this.languageService.translate('SESSION.EMAIL_UPDATED_MESSAGE'));
          break;

        case 'INACTIVE_USER':
          this.presentAlert(this.languageService.translate('SESSION.INACTIVE_ACCOUNT_ERROR_TITLE'), this.languageService.translate('SESSION.ERROR_INACTIVE_ACCOUNT_MESSAGE'));
          break;

        case 'SUSPENDED_USER':
          this.presentAlert(this.languageService.translate('SESSION.SUSPENDED_ACCOUNT_ERROR_TITLE'), this.languageService.translate('SESSION.ERROR_SUSPENDED_ACCOUNT_MESSAGE'));
          break;

        case 'USER_NOT_FOUND':
          this.presentAlert(this.languageService.translate('SESSION.USER_NOT_FOUND_ERROR_TITLE'), this.languageService.translate('SESSION.USER_NOT_FOUND_MESSAGE'));
          break;

        case 'SOMETHING_WENT_WRONG1':
          this.presentAlert(this.languageService.translate('SESSION.SOMETHING_WENT_WRONG_ERROR_TITLE'), this.languageService.translate('SESSION.SOMETHING_WENT_WRONG_MESSAGE'));
          break;

        default:
          this.loading?.dismiss();
          this.logout();
          break;
      }
    });
  }

  ngOnInit() {
    this.loggedInUser = this.localStorageService.StoredPreference.LoggedInUser;
  } //Click Events


  SearchTileClicked() {
    this.router.navigate(['/home/search-vehicle']);
  }

  AddVehicleTileClicked() {
    this.router.navigate(['/home/create-vehicle']);
  }

  UsersTileClicked() {
    this.router.navigate(['/home/user-list']);
  }

  SettingsTileClicked() {
    this.router.navigate(['/home/settings']);
  }

  ScheduledSearchTileClicked() {
    this.router.navigate(['/home/lookup-list']);
  }

  logout() {
    this.router.navigate(['login']);
  }

  VisualizationTileClicked() {
    this.router.navigate(['/home/visualization']);
  }

  NotificationsTileClicked() {
    this.notificationService.generateNotification();
  } //Alerts


  presentAlert(headerTitle = this.languageService.translate('LOGIN.ERROR_ALERT_TITLE'), message = this.languageService.translate('LOGIN.ERROR_INVALID_CREDENTIALS_MESSAGE')) {
    var _this = this;

    return (0,C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        cssClass: 'my-custom-class',
        header: headerTitle,
        subHeader: '',
        message: message,
        buttons: [{
          text: _this.languageService.translate('BUTTONS.OK'),
          role: 'confirm',
          handler: () => {//this.logout();
          }
        }]
      });
      yield alert.present();
      const {
        role
      } = yield alert.onDidDismiss();
    })();
  } //Loaders


  initializeLoader() {
    var _this2 = this;

    return (0,C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.loading = yield _this2.loadingController.create({
        message: _this2.languageService.translate('SESSION.VALIDATING_MESSAGE'),
        duration: 5000
      });

      _this2.loading.present();
    })();
  }

};

DashboardPage.ctorParameters = () => [{
  type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_7__.UserService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
}, {
  type: src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_4__.LanguageService
}, {
  type: src_app_services_localStorage_local_storage_service__WEBPACK_IMPORTED_MODULE_5__.LocalStorageService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController
}, {
  type: src_app_services_notifiication_notification_service__WEBPACK_IMPORTED_MODULE_6__.NotificationService
}];

DashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-dashboard',
  template: _dashboard_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_dashboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], DashboardPage);


/***/ }),

/***/ 4522:
/*!****************************************************************!*\
  !*** ./src/app/services/notifiication/notification.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationService": () => (/* binding */ NotificationService)
/* harmony export */ });
/* harmony import */ var C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _capacitor_local_notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/local-notifications */ 5568);





let NotificationService = class NotificationService {
  constructor(router) {
    this.router = router;
  }

  ngOnInit() {
    return (0,C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_local_notifications__WEBPACK_IMPORTED_MODULE_1__.LocalNotifications.requestPermissions();
    })();
  }

  generateNotification() {
    var _this = this;

    return (0,C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const notfi = yield _capacitor_local_notifications__WEBPACK_IMPORTED_MODULE_1__.LocalNotifications.schedule({
        notifications: [{
          title: 'Search Results Available',
          body: 'Click here for details...',
          id: 1,
          //schedule:{ at: new Date( Date.now()+1000*2) },
          sound: 'sound.wav',
          smallIcon: 'ic_stat_org_logo',
          actionTypeId: '',
          extra: {
            data: 'Results matching with the scheduled search'
          }
        }]
      });
      console.log('scheduled notifications: ' + notfi);
      _capacitor_local_notifications__WEBPACK_IMPORTED_MODULE_1__.LocalNotifications.addListener('localNotificationActionPerformed', notificationAction => {
        _this.router.navigate(['/home/lookup-list']);
      });
    })();
  }

};

NotificationService.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
}];

NotificationService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
  providedIn: 'root'
})], NotificationService);


/***/ }),

/***/ 5099:
/*!****************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Capacitor": () => (/* binding */ Capacitor),
/* harmony export */   "CapacitorCookies": () => (/* binding */ CapacitorCookies),
/* harmony export */   "CapacitorException": () => (/* binding */ CapacitorException),
/* harmony export */   "CapacitorHttp": () => (/* binding */ CapacitorHttp),
/* harmony export */   "CapacitorPlatforms": () => (/* binding */ CapacitorPlatforms),
/* harmony export */   "ExceptionCode": () => (/* binding */ ExceptionCode),
/* harmony export */   "Plugins": () => (/* binding */ Plugins),
/* harmony export */   "WebPlugin": () => (/* binding */ WebPlugin),
/* harmony export */   "WebView": () => (/* binding */ WebView),
/* harmony export */   "addPlatform": () => (/* binding */ addPlatform),
/* harmony export */   "registerPlugin": () => (/* binding */ registerPlugin),
/* harmony export */   "registerWebPlugin": () => (/* binding */ registerWebPlugin),
/* harmony export */   "setPlatform": () => (/* binding */ setPlatform)
/* harmony export */ });
/* harmony import */ var C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);


/*! Capacitor: https://capacitorjs.com/ - MIT License */
const createCapacitorPlatforms = win => {
  const defaultPlatformMap = new Map();
  defaultPlatformMap.set('web', {
    name: 'web'
  });
  const capPlatforms = win.CapacitorPlatforms || {
    currentPlatform: {
      name: 'web'
    },
    platforms: defaultPlatformMap
  };

  const addPlatform = (name, platform) => {
    capPlatforms.platforms.set(name, platform);
  };

  const setPlatform = name => {
    if (capPlatforms.platforms.has(name)) {
      capPlatforms.currentPlatform = capPlatforms.platforms.get(name);
    }
  };

  capPlatforms.addPlatform = addPlatform;
  capPlatforms.setPlatform = setPlatform;
  return capPlatforms;
};

const initPlatforms = win => win.CapacitorPlatforms = createCapacitorPlatforms(win);
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */


const CapacitorPlatforms = /*#__PURE__*/initPlatforms(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */

const addPlatform = CapacitorPlatforms.addPlatform;
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */

const setPlatform = CapacitorPlatforms.setPlatform;

const legacyRegisterWebPlugin = (cap, webPlugin) => {
  var _a;

  const config = webPlugin.config;
  const Plugins = cap.Plugins;

  if (!config || !config.name) {
    // TODO: add link to upgrade guide
    throw new Error(`Capacitor WebPlugin is using the deprecated "registerWebPlugin()" function, but without the config. Please use "registerPlugin()" instead to register this web plugin."`);
  } // TODO: add link to upgrade guide


  console.warn(`Capacitor plugin "${config.name}" is using the deprecated "registerWebPlugin()" function`);

  if (!Plugins[config.name] || ((_a = config === null || config === void 0 ? void 0 : config.platforms) === null || _a === void 0 ? void 0 : _a.includes(cap.getPlatform()))) {
    // Add the web plugin into the plugins registry if there already isn't
    // an existing one. If it doesn't already exist, that means
    // there's no existing native implementation for it.
    // - OR -
    // If we already have a plugin registered (meaning it was defined in the native layer),
    // then we should only overwrite it if the corresponding web plugin activates on
    // a certain platform. For example: Geolocation uses the WebPlugin on Android but not iOS
    Plugins[config.name] = webPlugin;
  }
};

var ExceptionCode;

(function (ExceptionCode) {
  /**
   * API is not implemented.
   *
   * This usually means the API can't be used because it is not implemented for
   * the current platform.
   */
  ExceptionCode["Unimplemented"] = "UNIMPLEMENTED";
  /**
   * API is not available.
   *
   * This means the API can't be used right now because:
   *   - it is currently missing a prerequisite, such as network connectivity
   *   - it requires a particular platform or browser version
   */

  ExceptionCode["Unavailable"] = "UNAVAILABLE";
})(ExceptionCode || (ExceptionCode = {}));

class CapacitorException extends Error {
  constructor(message, code, data) {
    super(message);
    this.message = message;
    this.code = code;
    this.data = data;
  }

}

const getPlatformId = win => {
  var _a, _b;

  if (win === null || win === void 0 ? void 0 : win.androidBridge) {
    return 'android';
  } else if ((_b = (_a = win === null || win === void 0 ? void 0 : win.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers) === null || _b === void 0 ? void 0 : _b.bridge) {
    return 'ios';
  } else {
    return 'web';
  }
};

const createCapacitor = win => {
  var _a, _b, _c, _d, _e;

  const capCustomPlatform = win.CapacitorCustomPlatform || null;
  const cap = win.Capacitor || {};
  const Plugins = cap.Plugins = cap.Plugins || {};
  /**
   * @deprecated Use `capCustomPlatform` instead, default functions like registerPlugin will function with the new object.
   */

  const capPlatforms = win.CapacitorPlatforms;

  const defaultGetPlatform = () => {
    return capCustomPlatform !== null ? capCustomPlatform.name : getPlatformId(win);
  };

  const getPlatform = ((_a = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _a === void 0 ? void 0 : _a.getPlatform) || defaultGetPlatform;

  const defaultIsNativePlatform = () => getPlatform() !== 'web';

  const isNativePlatform = ((_b = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _b === void 0 ? void 0 : _b.isNativePlatform) || defaultIsNativePlatform;

  const defaultIsPluginAvailable = pluginName => {
    const plugin = registeredPlugins.get(pluginName);

    if (plugin === null || plugin === void 0 ? void 0 : plugin.platforms.has(getPlatform())) {
      // JS implementation available for the current platform.
      return true;
    }

    if (getPluginHeader(pluginName)) {
      // Native implementation available.
      return true;
    }

    return false;
  };

  const isPluginAvailable = ((_c = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _c === void 0 ? void 0 : _c.isPluginAvailable) || defaultIsPluginAvailable;

  const defaultGetPluginHeader = pluginName => {
    var _a;

    return (_a = cap.PluginHeaders) === null || _a === void 0 ? void 0 : _a.find(h => h.name === pluginName);
  };

  const getPluginHeader = ((_d = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _d === void 0 ? void 0 : _d.getPluginHeader) || defaultGetPluginHeader;

  const handleError = err => win.console.error(err);

  const pluginMethodNoop = (_target, prop, pluginName) => {
    return Promise.reject(`${pluginName} does not have an implementation of "${prop}".`);
  };

  const registeredPlugins = new Map();

  const defaultRegisterPlugin = (pluginName, jsImplementations = {}) => {
    const registeredPlugin = registeredPlugins.get(pluginName);

    if (registeredPlugin) {
      console.warn(`Capacitor plugin "${pluginName}" already registered. Cannot register plugins twice.`);
      return registeredPlugin.proxy;
    }

    const platform = getPlatform();
    const pluginHeader = getPluginHeader(pluginName);
    let jsImplementation;

    const loadPluginImplementation = /*#__PURE__*/function () {
      var _ref = (0,C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (!jsImplementation && platform in jsImplementations) {
          jsImplementation = typeof jsImplementations[platform] === 'function' ? jsImplementation = yield jsImplementations[platform]() : jsImplementation = jsImplementations[platform];
        } else if (capCustomPlatform !== null && !jsImplementation && 'web' in jsImplementations) {
          jsImplementation = typeof jsImplementations['web'] === 'function' ? jsImplementation = yield jsImplementations['web']() : jsImplementation = jsImplementations['web'];
        }

        return jsImplementation;
      });

      return function loadPluginImplementation() {
        return _ref.apply(this, arguments);
      };
    }();

    const createPluginMethod = (impl, prop) => {
      var _a, _b;

      if (pluginHeader) {
        const methodHeader = pluginHeader === null || pluginHeader === void 0 ? void 0 : pluginHeader.methods.find(m => prop === m.name);

        if (methodHeader) {
          if (methodHeader.rtype === 'promise') {
            return options => cap.nativePromise(pluginName, prop.toString(), options);
          } else {
            return (options, callback) => cap.nativeCallback(pluginName, prop.toString(), options, callback);
          }
        } else if (impl) {
          return (_a = impl[prop]) === null || _a === void 0 ? void 0 : _a.bind(impl);
        }
      } else if (impl) {
        return (_b = impl[prop]) === null || _b === void 0 ? void 0 : _b.bind(impl);
      } else {
        throw new CapacitorException(`"${pluginName}" plugin is not implemented on ${platform}`, ExceptionCode.Unimplemented);
      }
    };

    const createPluginMethodWrapper = prop => {
      let remove;

      const wrapper = (...args) => {
        const p = loadPluginImplementation().then(impl => {
          const fn = createPluginMethod(impl, prop);

          if (fn) {
            const p = fn(...args);
            remove = p === null || p === void 0 ? void 0 : p.remove;
            return p;
          } else {
            throw new CapacitorException(`"${pluginName}.${prop}()" is not implemented on ${platform}`, ExceptionCode.Unimplemented);
          }
        });

        if (prop === 'addListener') {
          p.remove = /*#__PURE__*/(0,C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            return remove();
          });
        }

        return p;
      }; // Some flair ✨


      wrapper.toString = () => `${prop.toString()}() { [capacitor code] }`;

      Object.defineProperty(wrapper, 'name', {
        value: prop,
        writable: false,
        configurable: false
      });
      return wrapper;
    };

    const addListener = createPluginMethodWrapper('addListener');
    const removeListener = createPluginMethodWrapper('removeListener');

    const addListenerNative = (eventName, callback) => {
      const call = addListener({
        eventName
      }, callback);

      const remove = /*#__PURE__*/function () {
        var _ref3 = (0,C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          const callbackId = yield call;
          removeListener({
            eventName,
            callbackId
          }, callback);
        });

        return function remove() {
          return _ref3.apply(this, arguments);
        };
      }();

      const p = new Promise(resolve => call.then(() => resolve({
        remove
      })));
      p.remove = /*#__PURE__*/(0,C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        console.warn(`Using addListener() without 'await' is deprecated.`);
        yield remove();
      });
      return p;
    };

    const proxy = new Proxy({}, {
      get(_, prop) {
        switch (prop) {
          // https://github.com/facebook/react/issues/20030
          case '$$typeof':
            return undefined;

          case 'toJSON':
            return () => ({});

          case 'addListener':
            return pluginHeader ? addListenerNative : addListener;

          case 'removeListener':
            return removeListener;

          default:
            return createPluginMethodWrapper(prop);
        }
      }

    });
    Plugins[pluginName] = proxy;
    registeredPlugins.set(pluginName, {
      name: pluginName,
      proxy,
      platforms: new Set([...Object.keys(jsImplementations), ...(pluginHeader ? [platform] : [])])
    });
    return proxy;
  };

  const registerPlugin = ((_e = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _e === void 0 ? void 0 : _e.registerPlugin) || defaultRegisterPlugin; // Add in convertFileSrc for web, it will already be available in native context

  if (!cap.convertFileSrc) {
    cap.convertFileSrc = filePath => filePath;
  }

  cap.getPlatform = getPlatform;
  cap.handleError = handleError;
  cap.isNativePlatform = isNativePlatform;
  cap.isPluginAvailable = isPluginAvailable;
  cap.pluginMethodNoop = pluginMethodNoop;
  cap.registerPlugin = registerPlugin;
  cap.Exception = CapacitorException;
  cap.DEBUG = !!cap.DEBUG;
  cap.isLoggingEnabled = !!cap.isLoggingEnabled; // Deprecated props

  cap.platform = cap.getPlatform();
  cap.isNative = cap.isNativePlatform();
  return cap;
};

const initCapacitorGlobal = win => win.Capacitor = createCapacitor(win);

const Capacitor = /*#__PURE__*/initCapacitorGlobal(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
const registerPlugin = Capacitor.registerPlugin;
/**
 * @deprecated Provided for backwards compatibility for Capacitor v2 plugins.
 * Capacitor v3 plugins should import the plugin directly. This "Plugins"
 * export is deprecated in v3, and will be removed in v4.
 */

const Plugins = Capacitor.Plugins;
/**
 * Provided for backwards compatibility. Use the registerPlugin() API
 * instead, and provide the web plugin as the "web" implmenetation.
 * For example
 *
 * export const Example = registerPlugin('Example', {
 *   web: () => import('./web').then(m => new m.Example())
 * })
 *
 * @deprecated Deprecated in v3, will be removed from v4.
 */

const registerWebPlugin = plugin => legacyRegisterWebPlugin(Capacitor, plugin);
/**
 * Base class web plugins should extend.
 */


class WebPlugin {
  constructor(config) {
    this.listeners = {};
    this.windowListeners = {};

    if (config) {
      // TODO: add link to upgrade guide
      console.warn(`Capacitor WebPlugin "${config.name}" config object was deprecated in v3 and will be removed in v4.`);
      this.config = config;
    }
  }

  addListener(eventName, listenerFunc) {
    var _this = this;

    const listeners = this.listeners[eventName];

    if (!listeners) {
      this.listeners[eventName] = [];
    }

    this.listeners[eventName].push(listenerFunc); // If we haven't added a window listener for this event and it requires one,
    // go ahead and add it

    const windowListener = this.windowListeners[eventName];

    if (windowListener && !windowListener.registered) {
      this.addWindowListener(windowListener);
    }

    const remove = /*#__PURE__*/function () {
      var _ref5 = (0,C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        return _this.removeListener(eventName, listenerFunc);
      });

      return function remove() {
        return _ref5.apply(this, arguments);
      };
    }();

    const p = Promise.resolve({
      remove
    });
    Object.defineProperty(p, 'remove', {
      value: function () {
        var _ref6 = (0,C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          console.warn(`Using addListener() without 'await' is deprecated.`);
          yield remove();
        });

        return function value() {
          return _ref6.apply(this, arguments);
        };
      }()
    });
    return p;
  }

  removeAllListeners() {
    var _this2 = this;

    return (0,C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.listeners = {};

      for (const listener in _this2.windowListeners) {
        _this2.removeWindowListener(_this2.windowListeners[listener]);
      }

      _this2.windowListeners = {};
    })();
  }

  notifyListeners(eventName, data) {
    const listeners = this.listeners[eventName];

    if (listeners) {
      listeners.forEach(listener => listener(data));
    }
  }

  hasListeners(eventName) {
    return !!this.listeners[eventName].length;
  }

  registerWindowListener(windowEventName, pluginEventName) {
    this.windowListeners[pluginEventName] = {
      registered: false,
      windowEventName,
      pluginEventName,
      handler: event => {
        this.notifyListeners(pluginEventName, event);
      }
    };
  }

  unimplemented(msg = 'not implemented') {
    return new Capacitor.Exception(msg, ExceptionCode.Unimplemented);
  }

  unavailable(msg = 'not available') {
    return new Capacitor.Exception(msg, ExceptionCode.Unavailable);
  }

  removeListener(eventName, listenerFunc) {
    var _this3 = this;

    return (0,C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const listeners = _this3.listeners[eventName];

      if (!listeners) {
        return;
      }

      const index = listeners.indexOf(listenerFunc);

      _this3.listeners[eventName].splice(index, 1); // If there are no more listeners for this type of event,
      // remove the window listener


      if (!_this3.listeners[eventName].length) {
        _this3.removeWindowListener(_this3.windowListeners[eventName]);
      }
    })();
  }

  addWindowListener(handle) {
    window.addEventListener(handle.windowEventName, handle.handler);
    handle.registered = true;
  }

  removeWindowListener(handle) {
    if (!handle) {
      return;
    }

    window.removeEventListener(handle.windowEventName, handle.handler);
    handle.registered = false;
  }

}

const WebView = /*#__PURE__*/registerPlugin('WebView');
/******** END WEB VIEW PLUGIN ********/

/******** COOKIES PLUGIN ********/

/**
 * Safely web encode a string value (inspired by js-cookie)
 * @param str The string value to encode
 */

const encode = str => encodeURIComponent(str).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
/**
 * Safely web decode a string value (inspired by js-cookie)
 * @param str The string value to decode
 */


const decode = str => str.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);

class CapacitorCookiesPluginWeb extends WebPlugin {
  getCookies() {
    return (0,C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const cookies = document.cookie;
      const cookieMap = {};
      cookies.split(';').forEach(cookie => {
        if (cookie.length <= 0) return; // Replace first "=" with CAP_COOKIE to prevent splitting on additional "="

        let [key, value] = cookie.replace(/=/, 'CAP_COOKIE').split('CAP_COOKIE');
        key = decode(key).trim();
        value = decode(value).trim();
        cookieMap[key] = value;
      });
      return cookieMap;
    })();
  }

  setCookie(options) {
    return (0,C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Safely Encoded Key/Value
        const encodedKey = encode(options.key);
        const encodedValue = encode(options.value); // Clean & sanitize options

        const expires = `; expires=${(options.expires || '').replace('expires=', '')}`; // Default is "; expires="

        const path = (options.path || '/').replace('path=', ''); // Default is "path=/"

        const domain = options.url != null && options.url.length > 0 ? `domain=${options.url}` : '';
        document.cookie = `${encodedKey}=${encodedValue || ''}${expires}; path=${path}; ${domain};`;
      } catch (error) {
        return Promise.reject(error);
      }
    })();
  }

  deleteCookie(options) {
    return (0,C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        document.cookie = `${options.key}=; Max-Age=0`;
      } catch (error) {
        return Promise.reject(error);
      }
    })();
  }

  clearCookies() {
    return (0,C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const cookies = document.cookie.split(';') || [];

        for (const cookie of cookies) {
          document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`);
        }
      } catch (error) {
        return Promise.reject(error);
      }
    })();
  }

  clearAllCookies() {
    var _this4 = this;

    return (0,C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this4.clearCookies();
      } catch (error) {
        return Promise.reject(error);
      }
    })();
  }

}

const CapacitorCookies = registerPlugin('CapacitorCookies', {
  web: () => new CapacitorCookiesPluginWeb()
}); // UTILITY FUNCTIONS

/**
 * Read in a Blob value and return it as a base64 string
 * @param blob The blob value to convert to a base64 string
 */

const readBlobAsBase64 = /*#__PURE__*/function () {
  var _ref7 = (0,C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        const base64String = reader.result; // remove prefix "data:application/pdf;base64,"

        resolve(base64String.indexOf(',') >= 0 ? base64String.split(',')[1] : base64String);
      };

      reader.onerror = error => reject(error);

      reader.readAsDataURL(blob);
    });
  });

  return function readBlobAsBase64(_x) {
    return _ref7.apply(this, arguments);
  };
}();
/**
 * Normalize an HttpHeaders map by lowercasing all of the values
 * @param headers The HttpHeaders object to normalize
 */


const normalizeHttpHeaders = (headers = {}) => {
  const originalKeys = Object.keys(headers);
  const loweredKeys = Object.keys(headers).map(k => k.toLocaleLowerCase());
  const normalized = loweredKeys.reduce((acc, key, index) => {
    acc[key] = headers[originalKeys[index]];
    return acc;
  }, {});
  return normalized;
};
/**
 * Builds a string of url parameters that
 * @param params A map of url parameters
 * @param shouldEncode true if you should encodeURIComponent() the values (true by default)
 */


const buildUrlParams = (params, shouldEncode = true) => {
  if (!params) return null;
  const output = Object.entries(params).reduce((accumulator, entry) => {
    const [key, value] = entry;
    let encodedValue;
    let item;

    if (Array.isArray(value)) {
      item = '';
      value.forEach(str => {
        encodedValue = shouldEncode ? encodeURIComponent(str) : str;
        item += `${key}=${encodedValue}&`;
      }); // last character will always be "&" so slice it off

      item.slice(0, -1);
    } else {
      encodedValue = shouldEncode ? encodeURIComponent(value) : value;
      item = `${key}=${encodedValue}`;
    }

    return `${accumulator}&${item}`;
  }, ''); // Remove initial "&" from the reduce

  return output.substr(1);
};
/**
 * Build the RequestInit object based on the options passed into the initial request
 * @param options The Http plugin options
 * @param extra Any extra RequestInit values
 */


const buildRequestInit = (options, extra = {}) => {
  const output = Object.assign({
    method: options.method || 'GET',
    headers: options.headers
  }, extra); // Get the content-type

  const headers = normalizeHttpHeaders(options.headers);
  const type = headers['content-type'] || ''; // If body is already a string, then pass it through as-is.

  if (typeof options.data === 'string') {
    output.body = options.data;
  } // Build request initializers based off of content-type
  else if (type.includes('application/x-www-form-urlencoded')) {
    const params = new URLSearchParams();

    for (const [key, value] of Object.entries(options.data || {})) {
      params.set(key, value);
    }

    output.body = params.toString();
  } else if (type.includes('multipart/form-data')) {
    const form = new FormData();

    if (options.data instanceof FormData) {
      options.data.forEach((value, key) => {
        form.append(key, value);
      });
    } else {
      for (const key of Object.keys(options.data)) {
        form.append(key, options.data[key]);
      }
    }

    output.body = form;
    const headers = new Headers(output.headers);
    headers.delete('content-type'); // content-type will be set by `window.fetch` to includy boundary

    output.headers = headers;
  } else if (type.includes('application/json') || typeof options.data === 'object') {
    output.body = JSON.stringify(options.data);
  }

  return output;
}; // WEB IMPLEMENTATION


class CapacitorHttpPluginWeb extends WebPlugin {
  /**
   * Perform an Http request given a set of options
   * @param options Options to build the HTTP request
   */
  request(options) {
    return (0,C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const requestInit = buildRequestInit(options, options.webFetchExtra);
      const urlParams = buildUrlParams(options.params, options.shouldEncodeUrlParams);
      const url = urlParams ? `${options.url}?${urlParams}` : options.url;
      const response = yield fetch(url, requestInit);
      const contentType = response.headers.get('content-type') || ''; // Default to 'text' responseType so no parsing happens

      let {
        responseType = 'text'
      } = response.ok ? options : {}; // If the response content-type is json, force the response to be json

      if (contentType.includes('application/json')) {
        responseType = 'json';
      }

      let data;
      let blob;

      switch (responseType) {
        case 'arraybuffer':
        case 'blob':
          blob = yield response.blob();
          data = yield readBlobAsBase64(blob);
          break;

        case 'json':
          data = yield response.json();
          break;

        case 'document':
        case 'text':
        default:
          data = yield response.text();
      } // Convert fetch headers to Capacitor HttpHeaders


      const headers = {};
      response.headers.forEach((value, key) => {
        headers[key] = value;
      });
      return {
        data,
        headers,
        status: response.status,
        url: response.url
      };
    })();
  }
  /**
   * Perform an Http GET request given a set of options
   * @param options Options to build the HTTP request
   */


  get(options) {
    var _this5 = this;

    return (0,C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this5.request(Object.assign(Object.assign({}, options), {
        method: 'GET'
      }));
    })();
  }
  /**
   * Perform an Http POST request given a set of options
   * @param options Options to build the HTTP request
   */


  post(options) {
    var _this6 = this;

    return (0,C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this6.request(Object.assign(Object.assign({}, options), {
        method: 'POST'
      }));
    })();
  }
  /**
   * Perform an Http PUT request given a set of options
   * @param options Options to build the HTTP request
   */


  put(options) {
    var _this7 = this;

    return (0,C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this7.request(Object.assign(Object.assign({}, options), {
        method: 'PUT'
      }));
    })();
  }
  /**
   * Perform an Http PATCH request given a set of options
   * @param options Options to build the HTTP request
   */


  patch(options) {
    var _this8 = this;

    return (0,C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this8.request(Object.assign(Object.assign({}, options), {
        method: 'PATCH'
      }));
    })();
  }
  /**
   * Perform an Http DELETE request given a set of options
   * @param options Options to build the HTTP request
   */


  delete(options) {
    var _this9 = this;

    return (0,C_CodeBase_capacitor_vehiclesearch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this9.request(Object.assign(Object.assign({}, options), {
        method: 'DELETE'
      }));
    })();
  }

}

const CapacitorHttp = registerPlugin('CapacitorHttp', {
  web: () => new CapacitorHttpPluginWeb()
});
/******** END HTTP PLUGIN ********/



/***/ }),

/***/ 6398:
/*!*****************************************************************************!*\
  !*** ./node_modules/@capacitor/local-notifications/dist/esm/definitions.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Weekday": () => (/* binding */ Weekday)
/* harmony export */ });
/// <reference types="@capacitor/cli" />

/**
 * Day of the week. Used for scheduling notifications on a particular weekday.
 */
var Weekday;

(function (Weekday) {
  Weekday[Weekday["Sunday"] = 1] = "Sunday";
  Weekday[Weekday["Monday"] = 2] = "Monday";
  Weekday[Weekday["Tuesday"] = 3] = "Tuesday";
  Weekday[Weekday["Wednesday"] = 4] = "Wednesday";
  Weekday[Weekday["Thursday"] = 5] = "Thursday";
  Weekday[Weekday["Friday"] = 6] = "Friday";
  Weekday[Weekday["Saturday"] = 7] = "Saturday";
})(Weekday || (Weekday = {}));

/***/ }),

/***/ 5568:
/*!***********************************************************************!*\
  !*** ./node_modules/@capacitor/local-notifications/dist/esm/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalNotifications": () => (/* binding */ LocalNotifications),
/* harmony export */   "Weekday": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.Weekday)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 5099);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 6398);

const LocalNotifications = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('LocalNotifications', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_local-notifications_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 7671)).then(m => new m.LocalNotificationsWeb())
});



/***/ }),

/***/ 4713:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/private/home/dashboard/dashboard.page.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = ":host ion-content {\n  --background: url(\"/assets/bg20.JPG\") 0 0/100% 100% no-repeat ;\n  background-color: blueviolet;\n  background-size: cover;\n}\n\n.toolbar-backgorund {\n  background-color: azure;\n  color: rgb(253, 253, 253);\n}\n\n.user-profile-pic {\n  width: 60px;\n  height: 60px;\n  display: block;\n  margin-top: 20px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n  --background: none;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n  background: none;\n  color: white;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: white;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: white;\n}\n\nion-menu.md ion-item {\n  background: none;\n}\n\nion-menu.md ion-item ion-icon {\n  color: white;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n  color: white;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\np {\n  color: white;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: white;\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: white;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: white;\n}\n\nion-item.selected {\n  color: white;\n}\n\nion-card {\n  color: rgb(44, 29, 29);\n  background-color: aquamarine;\n  padding: 0px;\n  margin: 0px;\n  border-radius: 10px;\n}\n\nion-card-content {\n  color: rgb(19, 13, 13);\n}\n\nbutton {\n  background: none;\n  color: white;\n  text-decoration: underline;\n}\n\n.profile-name {\n  font-size: 18px;\n  color: lightcyan;\n}\n\n.profile-user-name {\n  font-size: 12px;\n  color: #9ad2d2;\n}\n\n.profile-user-email {\n  font-size: 12px;\n  color: #9ad2d2;\n}\n\n.menu-tile {\n  background-color: rgb(217, 245, 235);\n  align-items: center;\n  text-align: center;\n}\n\n.menu-tile-image {\n  font-size: 50px;\n  color: rgb(31, 7, 7);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDSSw4REFBQTtFQUNBLDRCQUFBO0VBR0Esc0JBQUE7QUFBTjs7QUFHRTtFQUVFLHVCQUFBO0VBQ0EseUJBQUE7QUFESjs7QUFHRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdFO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUlFO0VBQ0UsbUJBQUE7QUFESjs7QUFJRTs7RUFFRSxrQkFBQTtBQURKOztBQUlFO0VBQ0UsMkRBQUE7QUFESjs7QUFJRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0FBRko7O0FBS0U7RUFDRSxlQUFBO0VBRUEsbUJBQUE7RUFFQSxZQUFBO0VBRUEsZ0JBQUE7QUFMSjs7QUFRRTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUxKOztBQVFFO0VBQ0Usc0RBQUE7QUFMSjs7QUFRRTtFQUNFLFlBQUE7QUFMSjs7QUFRRTtFQUVFLGdCQUFBO0FBTko7O0FBUUU7RUFDRSxZQUFBO0FBTEo7O0FBUUU7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUFMSjs7QUFRRTtFQUNFLHNCQUFBO0FBTEo7O0FBUUU7RUFDRSxtQkFBQTtBQUxKOztBQVFFO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQUxKOztBQVFFO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBTEo7O0FBUUU7RUFDRSxZQUFBO0FBTEo7O0FBUUU7RUFDRSxZQUFBO0FBTEo7O0FBUUU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQUxKOztBQVFFO0VBQ0Usa0JBQUE7QUFMSjs7QUFTRTs7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0FBTko7O0FBU0U7RUFDRSxrQkFBQTtBQU5KOztBQVNFO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBRUEsWUFBQTtBQVBKOztBQVVFO0VBQ0UsWUFBQTtBQVBKOztBQVNFO0VBQ0Usc0JBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFOSjs7QUFRRTtFQUNFLHNCQUFBO0FBTEo7O0FBT0U7RUFFRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtBQUxKOztBQU9FO0VBRUUsZUFBQTtFQUNBLGdCQUFBO0FBTEo7O0FBUUU7RUFFRSxlQUFBO0VBQ0EsY0FBQTtBQU5KOztBQVNFO0VBRUUsZUFBQTtFQUNBLGNBQUE7QUFQSjs7QUFTQTtFQUVJLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQVBKOztBQVNBO0VBRUksZUFBQTtFQUNBLG9CQUFBO0FBUEoiLCJmaWxlIjoiZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBpb24tY29udGVudCB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9iZzIwLkpQR1wiKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdCA7IFxyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xyXG4gICAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9XHJcbn1cclxuICAudG9vbGJhci1iYWNrZ29ydW5kICB7XHJcbiAgICAvLy0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0taW9uLWNvbG9yLWRhcmspLCB2YXIoLS1pb24tY29sb3ItZGFyaykpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XHJcbiAgICBjb2xvcjogcmdiKDI1MywgMjUzLCAyNTMpO1xyXG4gIH1cclxuICAudXNlci1wcm9maWxlLXBpY3tcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1tZW51Lm1kIGlvbi1jb250ZW50IHtcclxuICAgIC0tcGFkZGluZy1zdGFydDogOHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogOHB4O1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMjBweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICAtLWJhY2tncm91bmQ6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1tZW51Lm1kIGlvbi1saXN0IHtcclxuICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgIFxyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5tZCBpb24tbm90ZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXHJcbiAgaW9uLW1lbnUubWQgaW9uLW5vdGUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IGlvbi1saXN0LWhlYWRlciB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIFxyXG4gICAgbWluLWhlaWdodDogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLW1lbnUubWQgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICBcclxuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbiAgXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgXHJcbiAgICBtaW4taGVpZ2h0OiAyNnB4O1xyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5tZCBpb24taXRlbSB7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNCk7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIFxyXG4gIH1cclxuICBpb24tbWVudS5tZCBpb24taXRlbVxyXG4gIHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgfVxyXG4gIGlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1pY29uIHtcclxuICAgIGNvbG9yOiB3aGl0ZVxyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5tZCBpb24taXRlbSBpb24tbGFiZWwge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLW1lbnUuaW9zIGlvbi1jb250ZW50IHtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1tZW51LmlvcyBpb24tbGlzdCB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDAgMCAwO1xyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5pb3MgaW9uLW5vdGUge1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5pb3MgaW9uLWl0ZW0ge1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMTZweDtcclxuICAgIC0tbWluLWhlaWdodDogNTBweDtcclxuICB9XHJcbiAgXHJcbiAgcCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1tZW51LmlvcyBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1tZW51LmlvcyBpb24taXRlbSBpb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1tZW51LmlvcyBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIH1cclxuICBcclxuICBcclxuICBpb24tbWVudS5pb3MgaW9uLWxpc3QtaGVhZGVyLFxyXG4gIGlvbi1tZW51LmlvcyBpb24tbm90ZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5pb3MgaW9uLW5vdGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIH1cclxuICBcclxuICBpb24tbm90ZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1pdGVtLnNlbGVjdGVkIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgaW9uLWNhcmR7XHJcbiAgICBjb2xvcjogcmdiKDQ0LCAyOSwgMjkpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcbiAgaW9uLWNhcmQtY29udGVudHtcclxuICAgIGNvbG9yOiByZ2IoMTksIDEzLCAxMyk7XHJcbiAgfVxyXG4gIGJ1dHRvblxyXG4gIHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmUgO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgfVxyXG4gIC5wcm9maWxlLW5hbWVcclxuICB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogbGlnaHRjeWFuO1xyXG4gICBcclxuICB9XHJcbiAgLnByb2ZpbGUtdXNlci1uYW1lXHJcbiAge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICM5YWQyZDI7XHJcbiAgIFxyXG4gIH1cclxuICAucHJvZmlsZS11c2VyLWVtYWlsXHJcbiAge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICM5YWQyZDI7IFxyXG4gIH1cclxuLm1lbnUtdGlsZVxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE3LCAyNDUsIDIzNSk7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5tZW51LXRpbGUtaW1hZ2Vcclxue1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgY29sb3I6IHJnYigzMSwgNywgNyk7XHJcbn0iXX0= */";

/***/ }),

/***/ 699:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/private/home/dashboard/dashboard.page.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n\r\n\r\n    <ion-grid>\r\n        <ion-row>\r\n            <ion-col *ngIf=\"(loggedInUser.Role ==='Admin' || loggedInUser.Role ==='SuperAdmin')\" (click)=\"SearchTileClicked()\">\r\n                <ion-card  class=\"menu-tile\">\r\n                    <ion-card-header>\r\n                        <ion-icon  class=\"menu-tile-image\" name=\"search-sharp\"></ion-icon>\r\n                    </ion-card-header>\r\n                    <ion-card-content>\r\n                        {{'DASHBOARD.SEARCH_PARCEL' | translate}}\r\n                    </ion-card-content>\r\n                </ion-card>\r\n            </ion-col>\r\n            <ion-col (click)=\"AddVehicleTileClicked()\">\r\n                <ion-card class=\"menu-tile\">\r\n                    <ion-card-header>\r\n                        <ion-icon class=\"menu-tile-image\" name=\"add-sharp\"></ion-icon>\r\n                    </ion-card-header>\r\n                    <ion-card-content>\r\n                        {{'DASHBOARD.ADD_PARCEL' | translate}}\r\n                    </ion-card-content>\r\n                </ion-card>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n            <ion-col *ngIf=\"loggedInUser.Role==='SuperAdmin'\" (click)=\"UsersTileClicked()\">\r\n                <ion-card class=\"menu-tile\">\r\n                    <ion-card-header>\r\n                        <ion-icon class=\"menu-tile-image\" name=\"person-outline\"></ion-icon>\r\n                    </ion-card-header>\r\n                    <ion-card-content>\r\n                        {{'DASHBOARD.USERS' | translate}}\r\n                    </ion-card-content>\r\n                </ion-card>\r\n            </ion-col>\r\n            <ion-col *ngIf=\"(loggedInUser.Role ==='Admin' || loggedInUser.Role ==='SuperAdmin')\" (click)=\"ScheduledSearchTileClicked()\">\r\n                <ion-card class=\"menu-tile\">\r\n                    <ion-card-header>\r\n                        <ion-icon  class=\"menu-tile-image\" name=\"search-circle-outline\"></ion-icon>\r\n                    </ion-card-header>\r\n                    <ion-card-content>\r\n                        {{'DASHBOARD.LOOKUP' | translate}}\r\n                    </ion-card-content>\r\n                </ion-card>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col (click)=\"SettingsTileClicked()\">\r\n            <ion-card class=\"menu-tile\">\r\n                <ion-card-header>\r\n                    <ion-icon  class=\"menu-tile-image\" name=\"cog-sharp\"></ion-icon>\r\n                </ion-card-header>\r\n                <ion-card-content>\r\n                    {{'DASHBOARD.SETTINGS' | translate}}\r\n                </ion-card-content>\r\n            </ion-card>\r\n          </ion-col>\r\n          <ion-col *ngIf=\"(loggedInUser.Role ==='Admin' || loggedInUser.Role ==='SuperAdmin')\" (click)=\"VisualizationTileClicked()\">\r\n              <ion-card class=\"menu-tile\">\r\n                  <ion-card-header>\r\n                      <ion-icon class=\"menu-tile-image\" name=\"pie-chart-outline\"></ion-icon>\r\n                  </ion-card-header>\r\n                  <ion-card-content>\r\n                    {{'DASHBOARD.VISUALIZATION' | translate}}\r\n                  </ion-card-content>\r\n              </ion-card>\r\n          </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col (click)=\"NotificationsTileClicked()\">\r\n          <ion-card class=\"menu-tile\">\r\n              <ion-card-header>\r\n                  <ion-icon  class=\"menu-tile-image\" name=\"notifications-outline\"></ion-icon>\r\n              </ion-card-header>\r\n              <ion-card-content>\r\n                  Notifications\r\n              </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n\r\n    </ion-row>\r\n    </ion-grid>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_private_home_dashboard_dashboard_module_ts.js.map