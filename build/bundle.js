/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _HomePage = __webpack_require__(3);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _NotFoundPage = __webpack_require__(16);

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({}, _HomePage2.default, {
  path: "/",
  exact: true
}), _extends({}, _NotFoundPage2.default)];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FILTER_TYPE = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.loadData = loadData;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(5);

var _reactRedux = __webpack_require__(4);

var _index = __webpack_require__(6);

var _Filtercard = __webpack_require__(13);

var _Filtercard2 = _interopRequireDefault(_Filtercard);

var _LaunchCard = __webpack_require__(15);

var _LaunchCard2 = _interopRequireDefault(_LaunchCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FILTER_TYPE = exports.FILTER_TYPE = Object.freeze({
  LAUNCH_YEAR: "launch_year",
  SUCCESS_LAUNCH: "launch_success",
  SUCCESS_LAND: "land_success"
});

var FILTERS = {
  launch_year: null,
  launch_success: null,
  land_success: null
};

var HomePage = function HomePage(props) {
  var _useState = (0, _react.useState)(FILTERS),
      _useState2 = _slicedToArray(_useState, 2),
      activeFilter = _useState2[0],
      setActiveFilter = _useState2[1];

  var dispatch = (0, _reactRedux.useDispatch)();
  var launches = (0, _reactRedux.useSelector)(function (state) {
    return state.launches;
  });

  (0, _react.useEffect)(function () {
    var query = new URLSearchParams(props.location.search);
    var queryParams = query.toString();
    var activeFilter = {};
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = query.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var param = _step.value;

        activeFilter[param[0]] = param[1];
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    setActiveFilter(activeFilter);
    getLaunchData(queryParams);
  }, []);

  var handleFilterUpdate = function handleFilterUpdate(val, filterType) {
    var currentUrlParams = new URLSearchParams();

    var activeFilterClone = _extends({}, activeFilter);

    if (activeFilterClone[filterType] && activeFilterClone[filterType] === val) {
      delete activeFilterClone[filterType];
      setActiveFilter(activeFilterClone);
    } else {
      activeFilterClone = _extends({}, activeFilterClone, _defineProperty({}, filterType, val));
      setActiveFilter(activeFilterClone);
    }

    Object.keys(activeFilterClone).forEach(function (key) {
      currentUrlParams.set(key, activeFilterClone[key]);
    });

    var queryParams = window.location.pathname + "?" + currentUrlParams.toString();

    props.history.push(queryParams);
    getLaunchData(queryParams);
  };

  var getLaunchData = function getLaunchData(queryParams) {
    dispatch((0, _index.fetchLaunches)(queryParams));
  };

  var renderLaunches = function renderLaunches() {
    if (!launches || launches.length <= 0) return _react2.default.createElement(
      "h1",
      { className: "noLaunchData" },
      "No Data Available."
    );

    return launches.map(function (launch, index) {
      return _react2.default.createElement(_LaunchCard2.default, { key: index, launch: launch });
    });
  };

  var head = function head() {
    return _react2.default.createElement(
      _reactHelmet.Helmet,
      null,
      _react2.default.createElement(
        "title",
        null,
        "Space X Launch Program"
      ),
      _react2.default.createElement("meta", { property: "og:title", content: "Space X Launch Program" }),
      _react2.default.createElement("meta", {
        property: "og:description",
        content: "Display Space X Launch Program"
      }),
      _react2.default.createElement("meta", { property: "og:type", content: "website" }),
      _react2.default.createElement("meta", { name: "copyright", content: "Nikhil Kumar" }),
      _react2.default.createElement("meta", { name: "author", content: "Nikhil Kumar" }),
      _react2.default.createElement("meta", { name: "description", content: "Display Space X Launch Program" })
    );
  };

  return _react2.default.createElement(
    "div",
    null,
    head(),
    _react2.default.createElement(
      "div",
      { className: "outer--container" },
      _react2.default.createElement(
        "h1",
        null,
        "Space X Launch Program"
      ),
      _react2.default.createElement(
        "div",
        { className: "inner--container" },
        _react2.default.createElement(
          "div",
          { className: "filterCol" },
          _react2.default.createElement(_Filtercard2.default, {
            activeFilter: activeFilter,
            updateFilter: handleFilterUpdate
          })
        ),
        _react2.default.createElement(
          "div",
          { className: "resultCol" },
          renderLaunches()
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "footer" },
        _react2.default.createElement(
          "h5",
          null,
          "Developed by: Nikhil Kumar"
        )
      )
    )
  );
};

function loadData(store, queryParams) {
  return store.dispatch((0, _index.fetchLaunches)(queryParams));
}

exports.default = {
  loadData: loadData,
  component: HomePage
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchLaunches = exports.FETCH_LAUNCHES = undefined;

var _axios = __webpack_require__(12);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var FETCH_LAUNCHES = exports.FETCH_LAUNCHES = "fetch_launches";

var fetchLaunches = exports.fetchLaunches = function fetchLaunches(queryParams) {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
      var url, queryParamsMod, res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              url = "https://api.spaceXdata.com/v3/launches?limit=100";
              queryParamsMod = queryParams.replace("/", "").replace("?", "");


              if (queryParamsMod && queryParamsMod.trim().length >= 0) {
                url += "&" + queryParamsMod;
              }

              _context.next = 5;
              return _axios2.default.get(url);

            case 5:
              res = _context.sent;


              dispatch({
                type: FETCH_LAUNCHES,
                payload: res
              });

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(14);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(_ref) {
  var text = _ref.text,
      active = _ref.active,
      onClick = _ref.onClick;

  var className = ["btn"];
  active && className.push("btn--active");

  return _react2.default.createElement(
    "button",
    { className: className.join(" "), onClick: onClick },
    text
  );
};

Button.propTypes = {
  text: _propTypes2.default.string.isRequired,
  active: _propTypes2.default.bool,
  onClick: _propTypes2.default.func.isRequired
};

exports.default = Button;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(10);

var _express = __webpack_require__(11);

var _express2 = _interopRequireDefault(_express);

var _reactRouterConfig = __webpack_require__(1);

var _Routes = __webpack_require__(2);

var _Routes2 = _interopRequireDefault(_Routes);

var _createStore = __webpack_require__(20);

var _createStore2 = _interopRequireDefault(_createStore);

var _renderer = __webpack_require__(17);

var _renderer2 = _interopRequireDefault(_renderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.static("public"));

app.get("*", function (req, res) {
  var store = (0, _createStore2.default)();
  var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {
    var route = _ref.route;

    return route.loadData ? route.loadData(store, req.originalUrl) : null;
  }).map(function (promise) {
    if (promise) {
      return new Promise(function (resolve, reject) {
        promise.then(resolve).catch(resolve);
      });
    }
  });

  Promise.all(promises).then(function () {
    var context = {};
    var content = (0, _renderer2.default)(req, store, context);

    if (context.notFound) {
      res.status(404);
    }
    res.send(content);
  });
});

app.listen(process.env.PORT || 3000, function () {
  console.log("listening to port 3000");
});

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _HomePage = __webpack_require__(3);

var _Button = __webpack_require__(7);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LAUNCH_YEAR = ["2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"];

var FilterCard = function FilterCard(_ref) {
  var updateFilter = _ref.updateFilter,
      activeFilter = _ref.activeFilter;

  var renderFilterSection = function renderFilterSection(title, filterType, filterArray, _onClick) {
    return _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        "label",
        { className: "filterCard--title" },
        title
      ),
      _react2.default.createElement(
        "div",
        { className: "filterCard--filterRow" },
        filterArray.map(function (filter, index) {
          return _react2.default.createElement(_Button2.default, {
            key: index,
            text: filter,
            active: filter === filterType,
            onClick: function onClick() {
              _onClick(filter);
            }
          });
        })
      )
    );
  };

  return _react2.default.createElement(
    "div",
    { className: "filterCard" },
    _react2.default.createElement(
      "h3",
      { className: "filterCard--header" },
      "Filters"
    ),
    renderFilterSection("Launch Year", activeFilter[_HomePage.FILTER_TYPE.LAUNCH_YEAR], LAUNCH_YEAR, function (val) {
      return updateFilter(val, _HomePage.FILTER_TYPE.LAUNCH_YEAR);
    }),
    renderFilterSection("Successful Launch", activeFilter[_HomePage.FILTER_TYPE.SUCCESS_LAUNCH], ["true", "false"], function (val) {
      return updateFilter(val, _HomePage.FILTER_TYPE.SUCCESS_LAUNCH);
    }),
    renderFilterSection("Successful Landing", activeFilter[_HomePage.FILTER_TYPE.SUCCESS_LAND], ["true", "false"], function (val) {
      return updateFilter(val, _HomePage.FILTER_TYPE.SUCCESS_LAND);
    })
  );
};

exports.default = FilterCard;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LaunchCard = function LaunchCard(_ref) {
  var launch = _ref.launch;

  var renderRow = function renderRow(key, value) {
    return _react2.default.createElement(
      "div",
      { className: "launchCard--row" },
      _react2.default.createElement(
        "h6",
        null,
        key,
        ": "
      ),
      _react2.default.createElement(
        "label",
        { className: "launchCard--row_value" },
        " ",
        value
      )
    );
  };

  var NoData = function NoData() {
    return _react2.default.createElement(
      "label",
      { className: "noDataLabel" },
      "No Data Available"
    );
  };

  var getLandSuccess = function getLandSuccess() {
    var core = launch.rocket.first_stage.cores.find(function (core) {
      return typeof core.land_success === "boolean";
    });

    if (!core) return "No Data Available";
    if (core.land_success) return "Yes";else return "No";
  };

  return _react2.default.createElement(
    "div",
    { className: "launchCard" },
    _react2.default.createElement("img", {
      src: "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
      alt: "Launch Image",
      className: "launchImg"
    }),
    _react2.default.createElement(
      "h6",
      { className: "launchCard--title" },
      launch.mission_name,
      " #",
      launch.flight_number
    ),
    _react2.default.createElement(
      "div",
      { className: "launchCard--section" },
      _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "h6",
          { className: "launchCard--missionId" },
          "Mission Ids:"
        ),
        launch.mission_id && launch.mission_id.length > 0 ? _react2.default.createElement(
          "ul",
          null,
          launch.mission_id.map(function (ids) {
            return _react2.default.createElement(
              "li",
              null,
              ids
            );
          })
        ) : _react2.default.createElement(NoData, null)
      ),
      renderRow("Launch Year", launch.launch_year),
      renderRow("Successful Launch", launch.launch_success === true ? "Yes" : launch.launch_success === false ? "No" : "No Data Available"),
      renderRow("Successful Landing", getLandSuccess())
    )
  );
};

exports.default = LaunchCard;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFoundPage = function NotFoundPage(_ref) {
  var _ref$staticContext = _ref.staticContext,
      staticContext = _ref$staticContext === undefined ? {} : _ref$staticContext;

  staticContext.notFound = true;
  return _react2.default.createElement(
    "h1",
    null,
    "Oops, page not found"
  );
};

exports.default = { component: NotFoundPage };

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(18);

var _reactHelmet = __webpack_require__(5);

var _reactRedux = __webpack_require__(4);

var _reactRouterConfig = __webpack_require__(1);

var _reactRouterDom = __webpack_require__(19);

var _Routes = __webpack_require__(2);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store, context) {
  var content = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: req.path, context: context },
      _react2.default.createElement(
        "div",
        null,
        (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
      )
    )
  ));

  var helmet = _reactHelmet.Helmet.renderStatic();

  return "\n    <!DOCTYPE html>\n    <html lang=\"en\">\n      <head>\n      <meta content=\"width=device-width, initial-scale=1\" name=\"viewport\" />\n      " + helmet.title.toString() + "\n      " + helmet.meta.toString() + "\n        <script>\n            window.__PRELOADED_STATE__ = " + JSON.stringify(store.getState()).replace(/</g, "\\u003c") + "\n        </script>\n        <link rel=\"stylesheet\" type=\"text/css\" href=\"style.css\">\n      </head>\n      <body>\n        <div id=\"root\">" + content + "</div>\n        <script src=\"bundle.js\"></script>\n      </body>\n    </html>\n    ";
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(8);

var _reduxThunk = __webpack_require__(21);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(22);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default));
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(8);

var _launchReducer = __webpack_require__(23);

var _launchReducer2 = _interopRequireDefault(_launchReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  launches: _launchReducer2.default
});

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(6);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _index.FETCH_LAUNCHES:
      return action.payload.data;
    default:
      return state;
  }
};

/***/ })
/******/ ]);