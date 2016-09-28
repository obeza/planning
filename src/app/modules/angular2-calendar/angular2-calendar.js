(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("moment"), require("@angular/core"), require("@angular/common"), require("calendar-utils"), require("rxjs/Subject"), require("@angular/platform-browser"));
	else if(typeof define === 'function' && define.amd)
		define(["moment", "@angular/core", "@angular/common", "calendar-utils", "rxjs/Subject", "@angular/platform-browser"], factory);
	else if(typeof exports === 'object')
		exports["angular2Calendar"] = factory(require("moment"), require("@angular/core"), require("@angular/common"), require("calendar-utils"), require("rxjs/Subject"), require("@angular/platform-browser"));
	else
		root["angular2Calendar"] = factory(root["moment"], root["ng"]["core"], root["ng"]["common"], root["calendarUtils"], root["rx"]["Subject"], root["ng"]["platformBrowser"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_28__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(1));
	__export(__webpack_require__(2));
	__export(__webpack_require__(4));
	__export(__webpack_require__(5));
	__export(__webpack_require__(6));


/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	var CalendarEventTitle = (function () {
	    function CalendarEventTitle() {
	    }
	    CalendarEventTitle.prototype.month = function (event) {
	        return event.title;
	    };
	    CalendarEventTitle.prototype.monthTooltip = function (event) {
	        return event.title;
	    };
	    CalendarEventTitle.prototype.week = function (event) {
	        return event.title;
	    };
	    CalendarEventTitle.prototype.weekTooltip = function (event) {
	        return event.title;
	    };
	    CalendarEventTitle.prototype.day = function (event) {
	        return event.title;
	    };
	    return CalendarEventTitle;
	}());
	exports.CalendarEventTitle = CalendarEventTitle;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var moment = __webpack_require__(3);
	var CalendarMomentDateFormatter = (function () {
	    function CalendarMomentDateFormatter() {
	    }
	    CalendarMomentDateFormatter.prototype.monthViewColumnHeader = function (_a) {
	        var date = _a.date, locale = _a.locale;
	        return moment(date).locale('fr').format('dddd');
	    };
	    CalendarMomentDateFormatter.prototype.monthViewDayNumber = function (_a) {
	        var date = _a.date, locale = _a.locale;
	        return moment(date).locale('fr').format('D');
	    };
	    CalendarMomentDateFormatter.prototype.monthViewTitle = function (_a) {
	        var date = _a.date, locale = _a.locale;
	        return moment(date).locale(locale).format('MMMM YYYY');
	    };
	    CalendarMomentDateFormatter.prototype.weekViewColumnHeader = function (_a) {
	        var date = _a.date, locale = _a.locale;
	        return moment(date).locale(locale).format('dddd');
	    };
	    CalendarMomentDateFormatter.prototype.weekViewColumnSubHeader = function (_a) {
	        var date = _a.date, locale = _a.locale;
	        return moment(date).locale(locale).format('D MMM');
	    };
	    CalendarMomentDateFormatter.prototype.weekViewTitle = function (_a) {
	        var date = _a.date, locale = _a.locale;
	        return moment(date).locale(locale).format('[Week] W [of] YYYY');
	    };
	    CalendarMomentDateFormatter.prototype.dayViewHour = function (_a) {
	        var date = _a.date, locale = _a.locale;
	        return moment(date).locale(locale).format('ha');
	    };
	    CalendarMomentDateFormatter.prototype.dayViewTitle = function (_a) {
	        var date = _a.date, locale = _a.locale;
	        return moment(date).locale(locale).format('dddd, D MMMM, YYYY');
	    };
	    return CalendarMomentDateFormatter;
	}());
	exports.CalendarMomentDateFormatter = CalendarMomentDateFormatter;


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	// TODO - move this into its own module that people can re-use
	var getWeekNumber = function (date) {
	    // source: https://weeknumber.net/how-to/javascript
	    var dateClone = new Date(date.getTime());
	    dateClone.setHours(0, 0, 0, 0);
	    dateClone.setDate(dateClone.getDate() + 3 - (dateClone.getDay() + 6) % 7);
	    var week1 = new Date(dateClone.getFullYear(), 0, 4);
	    return 1 + Math.round(((dateClone.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
	};
	var CalendarNativeDateFormatter = (function () {
	    function CalendarNativeDateFormatter() {
	    }
	    CalendarNativeDateFormatter.prototype.monthViewColumnHeader = function (_a) {
	        var date = _a.date, locale = _a.locale;
	        return new Intl.DateTimeFormat('fr', { weekday: 'long' }).format(date);
	    };
	    CalendarNativeDateFormatter.prototype.monthViewDayNumber = function (_a) {
	        var date = _a.date, locale = _a.locale;
	        return new Intl.DateTimeFormat(locale, { day: 'numeric' }).format(date);
	    };
	    CalendarNativeDateFormatter.prototype.monthViewTitle = function (_a) {
	        var date = _a.date, locale = _a.locale;
	        return new Intl.DateTimeFormat(locale, { year: 'numeric', month: 'long' }).format(date);
	    };
	    CalendarNativeDateFormatter.prototype.weekViewColumnHeader = function (_a) {
	        var date = _a.date, locale = _a.locale;
	        return new Intl.DateTimeFormat(locale, { weekday: 'long' }).format(date);
	    };
	    CalendarNativeDateFormatter.prototype.weekViewColumnSubHeader = function (_a) {
	        var date = _a.date, locale = _a.locale;
	        return new Intl.DateTimeFormat(locale, {
	            day: 'numeric',
	            month: 'short'
	        }).format(date);
	    };
	    CalendarNativeDateFormatter.prototype.weekViewTitle = function (_a) {
	        var date = _a.date, locale = _a.locale;
	        var year = new Intl.DateTimeFormat(locale, { year: 'numeric' }).format(date);
	        var weekNumber = getWeekNumber(date);
	        return "Week " + weekNumber + " of " + year;
	    };
	    CalendarNativeDateFormatter.prototype.dayViewHour = function (_a) {
	        var date = _a.date, locale = _a.locale;
	        return new Intl.DateTimeFormat(locale, { hour: 'numeric' }).format(date);
	    };
	    CalendarNativeDateFormatter.prototype.dayViewTitle = function (_a) {
	        var date = _a.date, locale = _a.locale;
	        return new Intl.DateTimeFormat(locale, {
	            day: 'numeric',
	            month: 'long',
	            year: 'numeric',
	            weekday: 'long'
	        }).format(date);
	    };
	    return CalendarNativeDateFormatter;
	}());
	exports.CalendarNativeDateFormatter = CalendarNativeDateFormatter;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var calendarNativeDateFormatter_provider_1 = __webpack_require__(4);
	var CalendarDateFormatter = (function (_super) {
	    __extends(CalendarDateFormatter, _super);
	    function CalendarDateFormatter() {
	        _super.apply(this, arguments);
	    }
	    return CalendarDateFormatter;
	}(calendarNativeDateFormatter_provider_1.CalendarNativeDateFormatter));
	exports.CalendarDateFormatter = CalendarDateFormatter;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	__webpack_require__(7);
	var core_1 = __webpack_require__(11);
	var common_1 = __webpack_require__(12);
	var calendarDayView_component_1 = __webpack_require__(13);
	var calendarWeekView_component_1 = __webpack_require__(16);
	var calendarMonthView_component_1 = __webpack_require__(17);
	var calendarEventActions_component_1 = __webpack_require__(18);
	var calendarEventTitle_component_1 = __webpack_require__(19);
	var calendarMonthCell_component_1 = __webpack_require__(20);
	var calendarOpenDayEvents_component_1 = __webpack_require__(21);
	var calendarWeekViewHeader_component_1 = __webpack_require__(22);
	var calendarWeekViewEvent_component_1 = __webpack_require__(23);
	var calendarAllDayEvent_component_1 = __webpack_require__(24);
	var calendarDayViewHourSegment_component_1 = __webpack_require__(25);
	var calendarDayViewEvent_component_1 = __webpack_require__(26);
	var calendarTooltip_directive_1 = __webpack_require__(27);
	var calendarDate_pipe_1 = __webpack_require__(30);
	var calendarEventTitle_pipe_1 = __webpack_require__(31);
	var CalendarModule = (function () {
	    function CalendarModule() {
	    }
	    CalendarModule = __decorate([
	        core_1.NgModule({
	            declarations: [
	                calendarDayView_component_1.CalendarDayView,
	                calendarWeekView_component_1.CalendarWeekView,
	                calendarMonthView_component_1.CalendarMonthView,
	                calendarEventActions_component_1.CalendarEventActions,
	                calendarEventTitle_component_1.CalendarEventTitle,
	                calendarMonthCell_component_1.CalendarMonthCell,
	                calendarOpenDayEvents_component_1.CalendarOpenDayEvents,
	                calendarWeekViewHeader_component_1.CalendarWeekViewHeader,
	                calendarWeekViewEvent_component_1.CalendarWeekViewEvent,
	                calendarAllDayEvent_component_1.CalendarAllDayEvent,
	                calendarDayViewHourSegment_component_1.CalendarDayViewHourSegment,
	                calendarDayViewEvent_component_1.CalendarDayViewEvent,
	                calendarTooltip_directive_1.CalendarTooltipWindow,
	                calendarTooltip_directive_1.CalendarTooltip,
	                calendarDate_pipe_1.CalendarDate,
	                calendarEventTitle_pipe_1.CalendarEventTitle
	            ],
	            imports: [common_1.CommonModule],
	            exports: [calendarDayView_component_1.CalendarDayView, calendarWeekView_component_1.CalendarWeekView, calendarMonthView_component_1.CalendarMonthView, calendarDate_pipe_1.CalendarDate],
	            entryComponents: [calendarTooltip_directive_1.CalendarTooltipWindow]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], CalendarModule);
	    return CalendarModule;
	}());
	exports.CalendarModule = CalendarModule;


/***/ },
/* 7 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(11);
	var calendar_utils_1 = __webpack_require__(14);
	var Subject_1 = __webpack_require__(15);
	var SEGMENT_HEIGHT = 30;
	var CalendarDayView = (function () {
	    function CalendarDayView(cdr, locale) {
	        this.cdr = cdr;
	        /**
	         * An array of events to display on view
	         */
	        this.events = [];
	        /**
	         * The number of segments in an hour. Must be <= 6
	         */
	        this.hourSegments = 2;
	        /**
	         * The day start hours in 24 hour time. Must be 0-23
	         */
	        this.dayStartHour = 0;
	        /**
	         * The day start minutes. Must be 0-59
	         */
	        this.dayStartMinute = 0;
	        /**
	         * The day end hours in 24 hour time. Must be 0-23
	         */
	        this.dayEndHour = 23;
	        /**
	         * The day end minutes. Must be 0-59
	         */
	        this.dayEndMinute = 59;
	        /**
	         * The width in pixels of each event on the view
	         */
	        this.eventWidth = 150;
	        /**
	         * Called when an event title is clicked
	         */
	        this.eventClicked = new core_1.EventEmitter();
	        /**
	         * Called when an hour segment is clicked
	         */
	        this.hourSegmentClicked = new core_1.EventEmitter();
	        this.hours = [];
	        this.width = 0;
	        this.locale = locale;
	    }
	    CalendarDayView.prototype.ngOnInit = function () {
	        var _this = this;
	        if (this.refresh) {
	            this.refreshSubscription = this.refresh.subscribe(function () {
	                _this.refreshAll();
	                _this.cdr.markForCheck();
	            });
	        }
	    };
	    CalendarDayView.prototype.ngOnDestroy = function () {
	        if (this.refreshSubscription) {
	            this.refreshSubscription.unsubscribe();
	        }
	    };
	    CalendarDayView.prototype.ngOnChanges = function (changes) {
	        if (changes.viewDate ||
	            changes.dayStartHour ||
	            changes.dayStartMinute ||
	            changes.dayEndHour ||
	            changes.dayEndMinute) {
	            this.refreshHourGrid();
	        }
	        if (changes.viewDate ||
	            changes.events ||
	            changes.dayStartHour ||
	            changes.dayStartMinute ||
	            changes.dayEndHour ||
	            changes.dayEndMinute ||
	            changes.eventWidth) {
	            this.refreshView();
	        }
	    };
	    CalendarDayView.prototype.refreshHourGrid = function () {
	        var _this = this;
	        this.hours = calendar_utils_1.getDayViewHourGrid({
	            viewDate: this.viewDate,
	            hourSegments: this.hourSegments,
	            dayStart: {
	                hour: this.dayStartHour,
	                minute: this.dayStartMinute
	            },
	            dayEnd: {
	                hour: this.dayEndHour,
	                minute: this.dayEndMinute
	            }
	        });
	        if (this.hourSegmentModifier) {
	            this.hours.forEach(function (hour) {
	                hour.segments.forEach(function (segment) { return _this.hourSegmentModifier(segment); });
	            });
	        }
	    };
	    CalendarDayView.prototype.refreshView = function () {
	        this.view = calendar_utils_1.getDayView({
	            events: this.events,
	            viewDate: this.viewDate,
	            hourSegments: this.hourSegments,
	            dayStart: {
	                hour: this.dayStartHour,
	                minute: this.dayStartMinute
	            },
	            dayEnd: {
	                hour: this.dayEndHour,
	                minute: this.dayEndMinute
	            },
	            eventWidth: this.eventWidth,
	            segmentHeight: SEGMENT_HEIGHT
	        });
	    };
	    CalendarDayView.prototype.refreshAll = function () {
	        this.refreshHourGrid();
	        this.refreshView();
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Date)
	    ], CalendarDayView.prototype, "viewDate", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Array)
	    ], CalendarDayView.prototype, "events", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], CalendarDayView.prototype, "hourSegments", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], CalendarDayView.prototype, "dayStartHour", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], CalendarDayView.prototype, "dayStartMinute", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], CalendarDayView.prototype, "dayEndHour", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], CalendarDayView.prototype, "dayEndMinute", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], CalendarDayView.prototype, "eventWidth", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Subject_1.Subject)
	    ], CalendarDayView.prototype, "refresh", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], CalendarDayView.prototype, "locale", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Function)
	    ], CalendarDayView.prototype, "hourSegmentModifier", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], CalendarDayView.prototype, "eventClicked", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], CalendarDayView.prototype, "hourSegmentClicked", void 0);
	    CalendarDayView = __decorate([
	        core_1.Component({
	            selector: 'mwl-calendar-day-view',
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	            template: "\n    <div class=\"cal-day-view\">\n      <mwl-calendar-all-day-event\n        *ngFor=\"let event of view.allDayEvents\"\n        [event]=\"event\"\n        (eventClicked)=\"eventClicked.emit({event: event})\">\n      </mwl-calendar-all-day-event>\n      <div class=\"cal-hour-rows\">\n        <div class=\"cal-events\">\n          <mwl-calendar-day-view-event\n            *ngFor=\"let dayEvent of view?.events\"\n            [dayEvent]=\"dayEvent\"\n            (eventClicked)=\"eventClicked.emit({event: dayEvent.event})\">\n          </mwl-calendar-day-view-event>\n        </div>\n        <div class=\"cal-hour\" *ngFor=\"let hour of hours\" [style.minWidth.px]=\"view?.width + 70\">\n          <mwl-calendar-day-view-hour-segment\n            *ngFor=\"let segment of hour.segments\"\n            [segment]=\"segment\"\n            [locale]=\"locale\"\n            (click)=\"hourSegmentClicked.emit({date: segment.date.toDate()})\">\n          </mwl-calendar-day-view-hour-segment>\n        </div>\n      </div>\n    </div>\n  "
	        }),
	        __param(1, core_1.Inject(core_1.LOCALE_ID)), 
	        __metadata('design:paramtypes', [core_1.ChangeDetectorRef, String])
	    ], CalendarDayView);
	    return CalendarDayView;
	}());
	exports.CalendarDayView = CalendarDayView;


/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(11);
	var Subject_1 = __webpack_require__(15);
	var calendar_utils_1 = __webpack_require__(14);
	var CalendarWeekView = (function () {
	    function CalendarWeekView(cdr, locale) {
	        this.cdr = cdr;
	        /**
	         * An array of events to display on view
	         */
	        this.events = [];
	        /**
	         * The placement of the event tooltip
	         */
	        this.tooltipPlacement = 'bottom';
	        /**
	         * Called when a header week day is clicked
	         */
	        this.dayClicked = new core_1.EventEmitter();
	        /**
	         * Called when the event title is clicked
	         */
	        this.eventClicked = new core_1.EventEmitter();
	        this.eventRows = [];
	        this.locale = locale;
	    }
	    CalendarWeekView.prototype.ngOnInit = function () {
	        var _this = this;
	        if (this.refresh) {
	            this.refreshSubscription = this.refresh.subscribe(function () {
	                _this.refreshAll();
	                _this.cdr.markForCheck();
	            });
	        }
	    };
	    CalendarWeekView.prototype.ngOnChanges = function (changes) {
	        if (changes.viewDate) {
	            this.refreshHeader();
	        }
	        if (changes.events || changes.viewDate) {
	            this.refreshBody();
	        }
	    };
	    CalendarWeekView.prototype.ngOnDestroy = function () {
	        if (this.refreshSubscription) {
	            this.refreshSubscription.unsubscribe();
	        }
	    };
	    CalendarWeekView.prototype.refreshHeader = function () {
	        this.days = calendar_utils_1.getWeekViewHeader({
	            viewDate: this.viewDate
	        });
	    };
	    CalendarWeekView.prototype.refreshBody = function () {
	        this.eventRows = calendar_utils_1.getWeekView({
	            events: this.events,
	            viewDate: this.viewDate
	        });
	    };
	    CalendarWeekView.prototype.refreshAll = function () {
	        this.refreshHeader();
	        this.refreshBody();
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Date)
	    ], CalendarWeekView.prototype, "viewDate", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Array)
	    ], CalendarWeekView.prototype, "events", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Subject_1.Subject)
	    ], CalendarWeekView.prototype, "refresh", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], CalendarWeekView.prototype, "locale", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], CalendarWeekView.prototype, "tooltipPlacement", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], CalendarWeekView.prototype, "dayClicked", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], CalendarWeekView.prototype, "eventClicked", void 0);
	    CalendarWeekView = __decorate([
	        core_1.Component({
	            selector: 'mwl-calendar-week-view',
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	            template: "\n    <div class=\"cal-week-view\">\n      <div class=\"cal-day-headers\">\n        <mwl-calendar-week-view-header\n          *ngFor=\"let day of days\"\n          [day]=\"day\"\n          [locale]=\"locale\"\n          (click)=\"dayClicked.emit({date: day.date.toDate()})\">\n        </mwl-calendar-week-view-header>\n      </div>\n      <div *ngFor=\"let eventRow of eventRows\">\n        <div\n          class=\"cal-event-container\"\n          *ngFor=\"let weekEvent of eventRow.row\"\n          [style.width]=\"((100 / 7) * weekEvent.span) + '%'\"\n          [style.marginLeft]=\"((100 / 7) * weekEvent.offset) + '%'\">\n          <mwl-calendar-week-view-event\n            [weekEvent]=\"weekEvent\"\n            [tooltipPlacement]=\"tooltipPlacement\"\n            (eventClicked)=\"eventClicked.emit({event: weekEvent.event})\">\n          </mwl-calendar-week-view-event>\n        </div>\n      </div>\n    </div>\n  "
	        }),
	        __param(1, core_1.Inject(core_1.LOCALE_ID)), 
	        __metadata('design:paramtypes', [core_1.ChangeDetectorRef, String])
	    ], CalendarWeekView);
	    return CalendarWeekView;
	}());
	exports.CalendarWeekView = CalendarWeekView;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(11);
	var moment = __webpack_require__(3);
	var calendar_utils_1 = __webpack_require__(14);
	var Subject_1 = __webpack_require__(15);
	var CalendarMonthView = (function () {
	    function CalendarMonthView(cdr, locale) {
	        this.cdr = cdr;
	        /**
	         * An array of events to display on view
	         */
	        this.events = [];
	        /**
	         * Whether the events list for the day of the `viewDate` option is visible or not
	         */
	        this.activeDayIsOpen = false;
	        /**
	         * The placement of the event tooltip
	         */
	        this.tooltipPlacement = 'top';
	        /**
	         * Called when the day cell is clicked
	         */
	        this.dayClicked = new core_1.EventEmitter();
	        /**
	         * Called when the event title is clicked
	         */
	        this.eventClicked = new core_1.EventEmitter();
	        this.locale = 'fr';
	    }
	    CalendarMonthView.prototype.ngOnInit = function () {
	        var _this = this;
	        if (this.refresh) {
	            this.refreshSubscription = this.refresh.subscribe(function () {
	                _this.refreshAll();
	                _this.cdr.markForCheck();
	            });
	        }
	    };
	    CalendarMonthView.prototype.ngOnChanges = function (changes) {
	        if (changes.viewDate) {
	            this.refreshHeader();
	        }
	        if (changes.viewDate || changes.events) {
	            this.refreshBody();
	        }
	        if (changes.activeDayIsOpen || changes.viewDate || changes.events) {
	            this.checkActiveDayIsOpen();
	        }
	    };
	    CalendarMonthView.prototype.ngOnDestroy = function () {
	        if (this.refreshSubscription) {
	            this.refreshSubscription.unsubscribe();
	        }
	    };
	    CalendarMonthView.prototype.refreshHeader = function () {
	        this.columnHeaders = calendar_utils_1.getWeekViewHeader({
	            viewDate: this.viewDate
	        });
	    };
	    CalendarMonthView.prototype.refreshBody = function () {
	        var _this = this;
	        this.view = calendar_utils_1.getMonthView({
	            events: this.events,
	            viewDate: this.viewDate
	        });
	        if (this.dayModifier) {
	            this.view.days.forEach(function (day) { return _this.dayModifier(day); });
	        }
	    };
	    CalendarMonthView.prototype.checkActiveDayIsOpen = function () {
	        var _this = this;
	        if (this.activeDayIsOpen === true) {
	            this.openDay = this.view.days.find(function (day) { return day.date.isSame(moment(_this.viewDate).startOf('day')); });
	            var index = this.view.days.indexOf(this.openDay);
	            this.openRowIndex = Math.floor(index / 7) * 7;
	        }
	        else {
	            this.openRowIndex = null;
	            this.openDay = null;
	        }
	    };
	    CalendarMonthView.prototype.refreshAll = function () {
	        this.refreshHeader();
	        this.refreshBody();
	        this.checkActiveDayIsOpen();
	    };
	    CalendarMonthView.prototype.toggleDayHighlight = function (event, isHighlighted) {
	        this.view.days.forEach(function (day) {
	            if (isHighlighted && day.events.indexOf(event) > -1) {
	                day.backgroundColor = event.color.secondary;
	            }
	            else {
	                delete day.backgroundColor;
	            }
	        });
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Date)
	    ], CalendarMonthView.prototype, "viewDate", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Array)
	    ], CalendarMonthView.prototype, "events", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], CalendarMonthView.prototype, "activeDayIsOpen", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Function)
	    ], CalendarMonthView.prototype, "dayModifier", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Subject_1.Subject)
	    ], CalendarMonthView.prototype, "refresh", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], CalendarMonthView.prototype, "locale", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], CalendarMonthView.prototype, "tooltipPlacement", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], CalendarMonthView.prototype, "dayClicked", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], CalendarMonthView.prototype, "eventClicked", void 0);
	    CalendarMonthView = __decorate([
	        core_1.Component({
	            selector: 'mwl-calendar-month-view',
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	            template: "\n    <div class=\"cal-month-view\">\n      <div class=\"cal-cell-row cal-header\">\n        <div class=\"cal-cell\" *ngFor=\"let header of columnHeaders\">\n          {{ header.date | calendarDate:'monthViewColumnHeader':'fr' }}\n        </div>\n      </div>\n      <div class=\"cal-days\">\n        <div *ngFor=\"let rowIndex of view.rowOffsets\">\n          <div class=\"cal-cell-row\">\n            <mwl-calendar-month-cell\n              *ngFor=\"let day of view.days | slice : rowIndex : rowIndex + 7\"\n              [day]=\"day\"\n              [openDay]=\"openDay\"\n              [locale]=\"'fr-FR'\"\n              [tooltipPlacement]=\"tooltipPlacement\"\n              (click)=\"dayClicked.emit({day: day})\"\n              (highlightDay)=\"toggleDayHighlight($event.event, true)\"\n              (unhighlightDay)=\"toggleDayHighlight($event.event, false)\">\n            </mwl-calendar-month-cell>\n          </div>\n          <mwl-calendar-open-day-events\n            [isOpen]=\"openRowIndex === rowIndex\"\n            [events]=\"openDay?.events\"\n            (eventClicked)=\"eventClicked.emit({event: $event.event})\">\n          </mwl-calendar-open-day-events>\n        </div>\n      </div>\n    </div>\n  "
	        }),
	        __param(1, core_1.Inject(core_1.LOCALE_ID)), 
	        __metadata('design:paramtypes', [core_1.ChangeDetectorRef, String])
	    ], CalendarMonthView);
	    return CalendarMonthView;
	}());
	exports.CalendarMonthView = CalendarMonthView;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(11);
	var CalendarEventActions = (function () {
	    function CalendarEventActions() {
	    }
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], CalendarEventActions.prototype, "event", void 0);
	    CalendarEventActions = __decorate([
	        core_1.Component({
	            selector: 'mwl-calendar-event-actions',
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	            template: "\n    <span *ngIf=\"event.actions\" class=\"cal-event-actions\">\n      <a\n        class=\"cal-event-action\"\n        href=\"javascript:;\"\n        *ngFor=\"let action of event.actions\"\n        (click)=\"action.onClick({event: event})\"\n        [ngClass]=\"action.cssClass\"\n        [innerHtml]=\"action.label\">\n      </a>\n    </span>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], CalendarEventActions);
	    return CalendarEventActions;
	}());
	exports.CalendarEventActions = CalendarEventActions;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(11);
	var CalendarEventTitle = (function () {

	    function CalendarEventTitle() {
	    }
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], CalendarEventTitle.prototype, "event", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], CalendarEventTitle.prototype, "view", void 0);
	    CalendarEventTitle = __decorate([
	        core_1.Component({
	            selector: 'mwl-calendar-event-title',
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	            template: "\n    <div\n      class=\"cal-event-title\"\n [innerHTML]=\"event.title + event.dateHumain\">\n    </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], CalendarEventTitle);
	    return CalendarEventTitle;
	}());
	exports.CalendarEventTitle = CalendarEventTitle;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(11);
	var CalendarMonthCell = (function () {
	    function CalendarMonthCell() {
	        this.highlightDay = new core_1.EventEmitter();
	        this.unhighlightDay = new core_1.EventEmitter();
	    }
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], CalendarMonthCell.prototype, "day", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], CalendarMonthCell.prototype, "openDay", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], CalendarMonthCell.prototype, "locale", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], CalendarMonthCell.prototype, "tooltipPlacement", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], CalendarMonthCell.prototype, "highlightDay", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], CalendarMonthCell.prototype, "unhighlightDay", void 0);
	    CalendarMonthCell = __decorate([
	        core_1.Component({
	            selector: 'mwl-calendar-month-cell',
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	            template: "\n    <div class=\"cal-cell-top\">\n         </div>\n  <span\n        class=\"cal-event\"\n        *ngFor=\"let event of day.events\"\n        [style.backgroundColor]=\"event.color.primary\"\n        [ngClass]=\"event?.cssClass\"\n        (mouseenter)=\"highlightDay.emit({event: event})\"\n        (mouseleave)=\"unhighlightDay.emit({event: event})\"\n        [mwlCalendarTooltip]=\"event | calendarEventTitle:'monthTooltip'\"\n        [tooltipPlacement]=\"tooltipPlacement\">\n      </span>\n  <span class=\"cal-day-number\">{{ day.date | calendarDate:'monthViewDayNumber':locale }}</span>\n ",
	            host: {
	                '[class]': '"cal-cell cal-day-cell " + day?.cssClass',
	                '[class.cal-past]': 'day.isPast',
	                '[class.cal-today]': 'day.isToday',
	                '[class.cal-future]': 'day.isFuture',
	                '[class.cal-weekend]': 'day.isWeekend',
	                '[class.cal-in-month]': 'day.inMonth',
	                '[class.cal-out-month]': '!day.inMonth',
	                '[class.cal-has-events]': 'day.events.length > 0',
	                '[class.cal-open]': 'day === openDay',
	                '[style.backgroundColor]': 'day.backgroundColor'
	            }
	        }), 
	        __metadata('design:paramtypes', [])
	    ], CalendarMonthCell);
	    return CalendarMonthCell;
	}());
	exports.CalendarMonthCell = CalendarMonthCell;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(11);
	var CalendarOpenDayEvents = (function () {
	    function CalendarOpenDayEvents() {
	        this.isOpen = false;
	        this.eventClicked = new core_1.EventEmitter();
	    }
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], CalendarOpenDayEvents.prototype, "isOpen", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Array)
	    ], CalendarOpenDayEvents.prototype, "events", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], CalendarOpenDayEvents.prototype, "eventClicked", void 0);
	    CalendarOpenDayEvents = __decorate([
	        core_1.Component({
	            selector: 'mwl-calendar-open-day-events',
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	            template: "\n    <div class=\"cal-open-day-events\" [@collapse] *ngIf=\"isOpen\">\n      <div\n        *ngFor=\"let event of events\"\n        [ngClass]=\"event?.cssClass\">\n        <span class=\"cal-event\" [style.backgroundColor]=\"event.color.primary\"></span>\n        <mwl-calendar-event-title\n          [event]=\"event\"\n          view=\"month\"\n          (click)=\"eventClicked.emit({event: event})\">\n        </mwl-calendar-event-title>\n        <mwl-calendar-event-actions [event]=\"event\"></mwl-calendar-event-actions>\n      </div>\n    </div>\n  ",
	            animations: [
	                core_1.trigger('collapse', [
	                    core_1.transition('void => *', [
	                        core_1.style({ height: 0 }),
	                        core_1.animate('150ms linear', core_1.style({ height: '*' }))
	                    ]),
	                    core_1.transition('* => void', [
	                        core_1.style({ height: '*' }),
	                        core_1.animate('150ms linear', core_1.style({ height: 0 }))
	                    ])
	                ])
	            ]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], CalendarOpenDayEvents);
	    return CalendarOpenDayEvents;
	}());
	exports.CalendarOpenDayEvents = CalendarOpenDayEvents;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(11);
	var CalendarWeekViewHeader = (function () {
	    function CalendarWeekViewHeader() {
	    }
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], CalendarWeekViewHeader.prototype, "day", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], CalendarWeekViewHeader.prototype, "locale", void 0);
	    CalendarWeekViewHeader = __decorate([
	        core_1.Component({
	            selector: 'mwl-calendar-week-view-header',
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	            template: "\n    <b>{{ day.date | calendarDate:'weekViewColumnHeader':locale }}</b><br>\n    <span>{{ day.date | calendarDate:'weekViewColumnSubHeader':locale }}</span>\n  ",
	            host: {
	                '[class]': '"cal-header"',
	                '[class.cal-past]': 'day.isPast',
	                '[class.cal-today]': 'day.isToday',
	                '[class.cal-future]': 'day.isFuture',
	                '[class.cal-weekend]': 'day.isWeekend'
	            }
	        }), 
	        __metadata('design:paramtypes', [])
	    ], CalendarWeekViewHeader);
	    return CalendarWeekViewHeader;
	}());
	exports.CalendarWeekViewHeader = CalendarWeekViewHeader;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(11);
	var CalendarWeekViewEvent = (function () {
	    function CalendarWeekViewEvent() {
	        this.eventClicked = new core_1.EventEmitter();
	    }
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], CalendarWeekViewEvent.prototype, "weekEvent", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], CalendarWeekViewEvent.prototype, "tooltipPlacement", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], CalendarWeekViewEvent.prototype, "eventClicked", void 0);
	    CalendarWeekViewEvent = __decorate([
	        core_1.Component({
	            selector: 'mwl-calendar-week-view-event',
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	            template: "\n    <div\n      class=\"cal-event\"\n      [class.cal-starts-within-week]=\"!weekEvent.startsBeforeWeek\"\n      [class.cal-ends-within-week]=\"!weekEvent.endsAfterWeek\"\n      [style.backgroundColor]=\"weekEvent.event.color.secondary\"\n      [ngClass]=\"weekEvent.event?.cssClass\"\n      [mwlCalendarTooltip]=\"weekEvent.event | calendarEventTitle:'weekTooltip'\"\n      [tooltipPlacement]=\"tooltipPlacement\">\n      <mwl-calendar-event-title\n        [event]=\"weekEvent.event\"\n        view=\"week\"\n        (click)=\"eventClicked.emit()\">\n      </mwl-calendar-event-title>\n    </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], CalendarWeekViewEvent);
	    return CalendarWeekViewEvent;
	}());
	exports.CalendarWeekViewEvent = CalendarWeekViewEvent;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(11);
	var CalendarAllDayEvent = (function () {
	    function CalendarAllDayEvent() {
	        this.eventClicked = new core_1.EventEmitter();
	    }
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], CalendarAllDayEvent.prototype, "event", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], CalendarAllDayEvent.prototype, "eventClicked", void 0);
	    CalendarAllDayEvent = __decorate([
	        core_1.Component({
	            selector: 'mwl-calendar-all-day-event',
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	            template: "\n    <div\n      class=\"cal-all-day-event\"\n      [style.backgroundColor]=\"event.color.secondary\"\n      [style.borderColor]=\"event.color.primary\">\n      <mwl-calendar-event-title\n        [event]=\"event\"\n        view=\"day\"\n        (click)=\"eventClicked.emit()\">\n      </mwl-calendar-event-title>\n      <mwl-calendar-event-actions [event]=\"event\"></mwl-calendar-event-actions>\n    </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], CalendarAllDayEvent);
	    return CalendarAllDayEvent;
	}());
	exports.CalendarAllDayEvent = CalendarAllDayEvent;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(11);
	var CalendarDayViewHourSegment = (function () {
	    function CalendarDayViewHourSegment() {
	    }
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], CalendarDayViewHourSegment.prototype, "segment", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], CalendarDayViewHourSegment.prototype, "locale", void 0);
	    CalendarDayViewHourSegment = __decorate([
	        core_1.Component({
	            selector: 'mwl-calendar-day-view-hour-segment',
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	            template: "\n    <div class=\"cal-hour-segment\" [ngClass]=\"segment.cssClass\">\n      <div [hidden]=\"!segment.isStart\" class=\"cal-time\">\n        {{ segment.date | calendarDate:'dayViewHour':locale }}\n      </div>\n      &nbsp;\n    </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], CalendarDayViewHourSegment);
	    return CalendarDayViewHourSegment;
	}());
	exports.CalendarDayViewHourSegment = CalendarDayViewHourSegment;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(11);
	var CalendarDayViewEvent = (function () {
	    function CalendarDayViewEvent() {
	        this.eventClicked = new core_1.EventEmitter();
	    }
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], CalendarDayViewEvent.prototype, "dayEvent", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], CalendarDayViewEvent.prototype, "eventClicked", void 0);
	    CalendarDayViewEvent = __decorate([
	        core_1.Component({
	            selector: 'mwl-calendar-day-view-event',
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	            template: "\n    <div\n      class=\"cal-event\"\n      [style.marginTop.px]=\"dayEvent.top\"\n      [style.marginLeft.px]=\"dayEvent.left + 70\"\n      [style.height.px]=\"dayEvent.height\"\n      [style.width.px]=\"dayEvent.width - 1\"\n      [style.backgroundColor]=\"dayEvent.event.color.secondary\"\n      [style.borderColor]=\"dayEvent.event.color.primary\"\n      [class.cal-starts-within-day]=\"!dayEvent.startsBeforeDay\"\n      [class.cal-ends-within-day]=\"!dayEvent.endsAfterDay\"\n      [ngClass]=\"dayEvent.event.cssClass\">\n      <mwl-calendar-event-title\n        [event]=\"dayEvent.event\"\n        view=\"day\"\n        (click)=\"eventClicked.emit()\">\n      </mwl-calendar-event-title>\n      <mwl-calendar-event-actions [event]=\"dayEvent.event\"></mwl-calendar-event-actions>\n    </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], CalendarDayViewEvent);
	    return CalendarDayViewEvent;
	}());
	exports.CalendarDayViewEvent = CalendarDayViewEvent;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(11);
	var platform_browser_1 = __webpack_require__(28);
	var positioning_1 = __webpack_require__(29);
	var CalendarTooltipWindow = (function () {
	    function CalendarTooltipWindow() {
	    }
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], CalendarTooltipWindow.prototype, "contents", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], CalendarTooltipWindow.prototype, "placement", void 0);
	    CalendarTooltipWindow = __decorate([
	        core_1.Component({
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	            styles: ["\n    .cal-tooltip {\n      position: absolute;\n      z-index: 1070;\n      display: block;\n      font-style: normal;\n      font-weight: normal;\n      letter-spacing: normal;\n      line-break: auto;\n      line-height: 1.5;\n      text-align: start;\n      text-decoration: none;\n      text-shadow: none;\n      text-transform: none;\n      white-space: normal;\n      word-break: normal;\n      word-spacing: normal;\n      font-size: 11px;\n      word-wrap: break-word;\n      opacity: 0.9;\n    }\n\n    .cal-tooltip.cal-tooltip-top {\n      padding: 5px 0;\n      margin-top: -3px;\n    }\n\n    .cal-tooltip.cal-tooltip-top .cal-tooltip-arrow {\n      bottom: 0;\n      left: 50%;\n      margin-left: -5px;\n      border-width: 5px 5px 0;\n      border-top-color: #000;\n    }\n\n    .cal-tooltip.cal-tooltip-right {\n      padding: 0 5px;\n      margin-left: 3px;\n    }\n\n    .cal-tooltip.cal-tooltip-right .cal-tooltip-arrow {\n      top: 50%;\n      left: 0;\n      margin-top: -5px;\n      border-width: 5px 5px 5px 0;\n      border-right-color: #000;\n    }\n\n    .cal-tooltip.cal-tooltip-bottom {\n      padding: 5px 0;\n      margin-top: 3px;\n    }\n\n    .cal-tooltip.cal-tooltip-bottom .cal-tooltip-arrow {\n      top: 0;\n      left: 50%;\n      margin-left: -5px;\n      border-width: 0 5px 5px;\n      border-bottom-color: #000;\n    }\n\n    .cal-tooltip.cal-tooltip-left {\n      padding: 0 5px;\n      margin-left: -3px;\n    }\n\n    .cal-tooltip.cal-tooltip-left .cal-tooltip-arrow {\n      top: 50%;\n      right: 0;\n      margin-top: -5px;\n      border-width: 5px 0 5px 5px;\n      border-left-color: #000;\n    }\n\n    .cal-tooltip-inner {\n      max-width: 200px;\n      padding: 3px 8px;\n      color: #fff;\n      text-align: center;\n      background-color: #000;\n      border-radius: 0.25rem;\n    }\n\n    .cal-tooltip-arrow {\n      position: absolute;\n      width: 0;\n      height: 0;\n      border-color: transparent;\n      border-style: solid;\n    }\n  "],
	            template: "\n    <div class=\"cal-tooltip\" [ngClass]=\"'cal-tooltip-' + placement\">\n      <div class=\"cal-tooltip-arrow\"></div>\n      <div class=\"cal-tooltip-inner\" [innerHtml]=\"contents\"></div>\n    </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], CalendarTooltipWindow);
	    return CalendarTooltipWindow;
	}());
	exports.CalendarTooltipWindow = CalendarTooltipWindow;
	var CalendarTooltip = (function () {
	    function CalendarTooltip(elementRef, renderer, injector, componentFactoryResolver, viewContainerRef, document //tslint:disable-line
	        ) {
	        this.elementRef = elementRef;
	        this.renderer = renderer;
	        this.injector = injector;
	        this.viewContainerRef = viewContainerRef;
	        this.document = document;
	        this.placement = 'top';
	        this.positioning = new positioning_1.Positioning();
	        this.tooltipFactory = componentFactoryResolver.resolveComponentFactory(CalendarTooltipWindow);
	    }
	    CalendarTooltip.prototype.ngAfterViewChecked = function () {
	        this.positionPopover();
	    };
	    CalendarTooltip.prototype.ngOnDestroy = function () {
	        this.hide();
	    };
	    CalendarTooltip.prototype.show = function () {
	        if (!this.tooltipRef && this.contents) {
	            this.tooltipRef = this.viewContainerRef.createComponent(this.tooltipFactory, 0, this.injector, []);
	            this.tooltipRef.instance.contents = this.contents;
	            this.tooltipRef.instance.placement = this.placement;
	            this.renderer.invokeElementMethod(this.document.body, 'appendChild', [this.tooltipRef.location.nativeElement]);
	        }
	    };
	    CalendarTooltip.prototype.hide = function () {
	        if (this.tooltipRef) {
	            this.viewContainerRef.remove(this.viewContainerRef.indexOf(this.tooltipRef.hostView));
	            this.tooltipRef = null;
	        }
	    };
	    CalendarTooltip.prototype.onMouseOver = function () {
	        this.show();
	    };
	    CalendarTooltip.prototype.onMouseOut = function () {
	        this.hide();
	    };
	    CalendarTooltip.prototype.positionPopover = function () {
	        if (this.tooltipRef) {
	            var targetPosition = this.positioning.positionElements(this.elementRef.nativeElement, this.tooltipRef.location.nativeElement.children[0], this.placement, true);
	            var targetStyle = this.tooltipRef.location.nativeElement.children[0].style;
	            targetStyle.top = targetPosition.top + "px";
	            targetStyle.left = targetPosition.left + "px";
	        }
	    };
	    __decorate([
	        core_1.Input('mwlCalendarTooltip'), 
	        __metadata('design:type', String)
	    ], CalendarTooltip.prototype, "contents", void 0);
	    __decorate([
	        core_1.Input('tooltipPlacement'), 
	        __metadata('design:type', String)
	    ], CalendarTooltip.prototype, "placement", void 0);
	    __decorate([
	        core_1.HostListener('mouseenter'), 
	        __metadata('design:type', Function), 
	        __metadata('design:paramtypes', []), 
	        __metadata('design:returntype', void 0)
	    ], CalendarTooltip.prototype, "onMouseOver", null);
	    __decorate([
	        core_1.HostListener('mouseleave'), 
	        __metadata('design:type', Function), 
	        __metadata('design:paramtypes', []), 
	        __metadata('design:returntype', void 0)
	    ], CalendarTooltip.prototype, "onMouseOut", null);
	    CalendarTooltip = __decorate([
	        core_1.Directive({
	            selector: '[mwlCalendarTooltip]'
	        }),
	        __param(5, core_1.Inject(platform_browser_1.DOCUMENT)), 
	        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, core_1.Injector, core_1.ComponentFactoryResolver, core_1.ViewContainerRef, Object])
	    ], CalendarTooltip);
	    return CalendarTooltip;
	}());
	exports.CalendarTooltip = CalendarTooltip;


/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_28__;

/***/ },
/* 29 */
/***/ function(module, exports) {

	"use strict";
	// previous version:
	// https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js
	var Positioning = (function () {
	    function Positioning() {
	    }
	    Positioning.prototype.getStyle = function (element, prop) { return window.getComputedStyle(element)[prop]; };
	    Positioning.prototype.isStaticPositioned = function (element) {
	        return (this.getStyle(element, 'position') || 'static') === 'static';
	    };
	    Positioning.prototype.offsetParent = function (element) {
	        var offsetParentEl = element.offsetParent || document.documentElement;
	        while (offsetParentEl && offsetParentEl !== document.documentElement && this.isStaticPositioned(offsetParentEl)) {
	            offsetParentEl = offsetParentEl.offsetParent;
	        }
	        return offsetParentEl || document.documentElement;
	    };
	    Positioning.prototype.position = function (element, round) {
	        if (round === void 0) { round = true; }
	        var elPosition;
	        var parentOffset = { width: 0, height: 0, top: 0, bottom: 0, left: 0, right: 0 };
	        if (this.getStyle(element, 'position') === 'fixed') {
	            elPosition = element.getBoundingClientRect();
	        }
	        else {
	            var offsetParentEl = this.offsetParent(element);
	            elPosition = this.offset(element, false);
	            if (offsetParentEl !== document.documentElement) {
	                parentOffset = this.offset(offsetParentEl, false);
	            }
	            parentOffset.top += offsetParentEl.clientTop;
	            parentOffset.left += offsetParentEl.clientLeft;
	        }
	        elPosition.top -= parentOffset.top;
	        elPosition.bottom -= parentOffset.top;
	        elPosition.left -= parentOffset.left;
	        elPosition.right -= parentOffset.left;
	        if (round) {
	            elPosition.top = Math.round(elPosition.top);
	            elPosition.bottom = Math.round(elPosition.bottom);
	            elPosition.left = Math.round(elPosition.left);
	            elPosition.right = Math.round(elPosition.right);
	        }
	        return elPosition;
	    };
	    Positioning.prototype.offset = function (element, round) {
	        if (round === void 0) { round = true; }
	        var elBcr = element.getBoundingClientRect();
	        var viewportOffset = {
	            top: window.pageYOffset - document.documentElement.clientTop,
	            left: window.pageXOffset - document.documentElement.clientLeft
	        };
	        var elOffset = {
	            height: elBcr.height || element.offsetHeight,
	            width: elBcr.width || element.offsetWidth,
	            top: elBcr.top + viewportOffset.top,
	            bottom: elBcr.bottom + viewportOffset.top,
	            left: elBcr.left + viewportOffset.left,
	            right: elBcr.right + viewportOffset.left
	        };
	        if (round) {
	            elOffset.height = Math.round(elOffset.height);
	            elOffset.width = Math.round(elOffset.width);
	            elOffset.top = Math.round(elOffset.top);
	            elOffset.bottom = Math.round(elOffset.bottom);
	            elOffset.left = Math.round(elOffset.left);
	            elOffset.right = Math.round(elOffset.right);
	        }
	        return elOffset;
	    };
	    Positioning.prototype.positionElements = function (hostElement, targetElement, placement, appendToBody) {
	        var hostElPosition = appendToBody ? this.offset(hostElement, false) : this.position(hostElement, false);
	        var shiftWidth = {
	            left: hostElPosition.left,
	            center: hostElPosition.left + hostElPosition.width / 2 - targetElement.offsetWidth / 2,
	            right: hostElPosition.left + hostElPosition.width
	        };
	        var shiftHeight = {
	            top: hostElPosition.top,
	            center: hostElPosition.top + hostElPosition.height / 2 - targetElement.offsetHeight / 2,
	            bottom: hostElPosition.top + hostElPosition.height
	        };
	        var targetElBCR = targetElement.getBoundingClientRect();
	        var placementPrimary = placement.split('-')[0] || 'top';
	        var placementSecondary = placement.split('-')[1] || 'center';
	        var targetElPosition = {
	            height: targetElBCR.height || targetElement.offsetHeight,
	            width: targetElBCR.width || targetElement.offsetWidth,
	            top: 0,
	            bottom: targetElBCR.height || targetElement.offsetHeight,
	            left: 0,
	            right: targetElBCR.width || targetElement.offsetWidth
	        };
	        switch (placementPrimary) {
	            case 'top':
	                targetElPosition.top = hostElPosition.top - targetElement.offsetHeight;
	                targetElPosition.bottom += hostElPosition.top - targetElement.offsetHeight;
	                targetElPosition.left = shiftWidth[placementSecondary];
	                targetElPosition.right += shiftWidth[placementSecondary];
	                break;
	            case 'bottom':
	                targetElPosition.top = shiftHeight[placementPrimary];
	                targetElPosition.bottom += shiftHeight[placementPrimary];
	                targetElPosition.left = shiftWidth[placementSecondary];
	                targetElPosition.right += shiftWidth[placementSecondary];
	                break;
	            case 'left':
	                targetElPosition.top = shiftHeight[placementSecondary];
	                targetElPosition.bottom += shiftHeight[placementSecondary];
	                targetElPosition.left = hostElPosition.left - targetElement.offsetWidth;
	                targetElPosition.right += hostElPosition.left - targetElement.offsetWidth;
	                break;
	            case 'right':
	                targetElPosition.top = shiftHeight[placementSecondary];
	                targetElPosition.bottom += shiftHeight[placementSecondary];
	                targetElPosition.left = shiftWidth[placementPrimary];
	                targetElPosition.right += shiftWidth[placementPrimary];
	                break;
	        }
	        targetElPosition.top = Math.round(targetElPosition.top);
	        targetElPosition.bottom = Math.round(targetElPosition.bottom);
	        targetElPosition.left = Math.round(targetElPosition.left);
	        targetElPosition.right = Math.round(targetElPosition.right);
	        return targetElPosition;
	    };
	    return Positioning;
	}());
	exports.Positioning = Positioning;
	



/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(11);
	var moment = __webpack_require__(3);
	var calendarDateFormatter_provider_1 = __webpack_require__(5);
	var CalendarDate = (function () {
	    function CalendarDate(dateFormatter, locale) {
	        this.dateFormatter = dateFormatter;
	        this.locale = locale;
	    }
	    CalendarDate.prototype.transform = function (date, method, locale) {
	        if (locale === void 0) { locale = this.locale; }
	        date = moment(date).toDate();
	        return this.dateFormatter[method]({ date: date, locale: locale });
	    };
	    CalendarDate = __decorate([
	        core_1.Pipe({
	            name: 'calendarDate'
	        }),
	        __param(1, core_1.Inject(core_1.LOCALE_ID)), 
	        __metadata('design:paramtypes', [calendarDateFormatter_provider_1.CalendarDateFormatter, String])
	    ], CalendarDate);
	    return CalendarDate;
	}());
	exports.CalendarDate = CalendarDate;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(11);
	var calendarEventTitle_provider_1 = __webpack_require__(1);
	var CalendarEventTitle = (function () {
	    function CalendarEventTitle(calendarEventTitle) {
	        this.calendarEventTitle = calendarEventTitle;
	    }
	    CalendarEventTitle.prototype.transform = function (event, titleType) {
	        return this.calendarEventTitle[titleType](event);
	    };
	    CalendarEventTitle = __decorate([
	        core_1.Pipe({
	            name: 'calendarEventTitle'
	        }), 
	        __metadata('design:paramtypes', [calendarEventTitle_provider_1.CalendarEventTitle])
	    ], CalendarEventTitle);
	    return CalendarEventTitle;
	}());
	exports.CalendarEventTitle = CalendarEventTitle;


/***/ }
/******/ ])
});
;
//# sourceMappingURL=angular2-calendar.js.map