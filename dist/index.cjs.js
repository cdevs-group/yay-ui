'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styled = require('styled-components');
var styledSystem = require('styled-system');
var React = require('react');
var get = require('lodash/get');
var polished = require('polished');
var reactRouterDom = require('react-router-dom');
var debounce = require('lodash/debounce');
var reactDom = require('react-dom');
var reactPopper = require('react-popper');
var reactFlipToolkit = require('react-flip-toolkit');
var reactTransitionGroup = require('react-transition-group');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () {
                        return e[k];
                    }
                });
            }
        });
    }
    n['default'] = e;
    return Object.freeze(n);
}

var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var React__namespace = /*#__PURE__*/_interopNamespace(React);
var get__default = /*#__PURE__*/_interopDefaultLegacy(get);
var debounce__default = /*#__PURE__*/_interopDefaultLegacy(debounce);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || from);
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var Box = styled__default['default'].div(templateObject_1$2i || (templateObject_1$2i = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), styledSystem.background, styledSystem.border, styledSystem.layout, styledSystem.position, styledSystem.space);
var templateObject_1$2i;

var Flex = styled__default['default'](Box)(templateObject_1$2h || (templateObject_1$2h = __makeTemplateObject(["\n  display: flex;\n  ", "\n"], ["\n  display: flex;\n  ", "\n"])), styledSystem.flexbox);
var templateObject_1$2h;

var getThemeValue = function (path, fallback) {
    return function (theme) {
        return get__default['default'](theme, path, fallback);
    };
};

var rotate = styled.keyframes(templateObject_1$2g || (templateObject_1$2g = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var spinStyle = styled.css(templateObject_2$1O || (templateObject_2$1O = __makeTemplateObject(["\n  & path {\n    animation: ", " 1.5s ease-in-out infinite;\n    transform-origin: center center;\n  }\n"], ["\n  & path {\n    animation: ", " 1.5s ease-in-out infinite;\n    transform-origin: center center;\n  }\n"])), rotate);
var Svg = styled__default['default'].svg(templateObject_3$1s || (templateObject_3$1s = __makeTemplateObject(["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"], ["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme, color = _a.color;
    return getThemeValue("colors." + color, color)(theme);
}, function (_a) {
    var spin = _a.spin;
    return spin && spinStyle;
}, styledSystem.space);
Svg.defaultProps = {
    color: "text",
    width: "20px",
    xmlns: "http://www.w3.org/2000/svg",
    spin: false,
};
var templateObject_1$2g, templateObject_2$1O, templateObject_3$1s;

var Icon$S = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ width: "42px", viewBox: "0 0 42 42" }, props),
        React__default['default'].createElement("rect", { x: "6", y: "6", width: "30", height: "30", rx: "7", fill: props.fill || "#4BE43E" }),
        React__default['default'].createElement("g", { filter: props.fill || "url(#filter0_d)" },
            React__default['default'].createElement("path", { d: "M21 16V26", stroke: "white", strokeWidth: "2", strokeLinecap: "round" }),
            React__default['default'].createElement("path", { d: "M26 21L16 21", stroke: "white", strokeWidth: "2", strokeLinecap: "round" })),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("filter", { id: "filter0_d", x: "11", y: "13", width: "20", height: "20", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default['default'].createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default['default'].createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React__default['default'].createElement("feOffset", { dy: "2" }),
                React__default['default'].createElement("feGaussianBlur", { stdDeviation: "2" }),
                React__default['default'].createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React__default['default'].createElement("linearGradient", { id: "paint0_linear", x1: "21", y1: "1.2", x2: "21", y2: "36", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#4CEE3E" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#47DA3B" }))),
        " "));
};

var Icon$R = function (props) {
    return (React__default['default'].createElement("svg", __assign({ width: 42, height: 42, viewBox: "0 0 42 42", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React__default['default'].createElement("rect", { x: 6, y: 6, width: 30, height: 30, rx: 7, fill: props.fill || "rgb(58,58,64)" }),
        React__default['default'].createElement("g", { filter: "url(#prefix__filter0_dCloseIcon)", stroke: "#fff", strokeWidth: 2, strokeLinecap: "round" },
            React__default['default'].createElement("path", { d: "M17.465 17.465l7.07 7.07M24.537 17.465l-7.071 7.07" })),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("filter", { id: "prefix__filter0_dCloseIcon", x: 12.465, y: 14.464, width: 17.073, height: 17.071, filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default['default'].createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
                React__default['default'].createElement("feColorMatrix", { in: "SourceAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React__default['default'].createElement("feOffset", { dy: 2 }),
                React__default['default'].createElement("feGaussianBlur", { stdDeviation: 2 }),
                React__default['default'].createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React__default['default'].createElement("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default['default'].createElement("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })))));
};

var Icon$Q = function (props) {
    return (React__default['default'].createElement("svg", { width: "42", height: "38", viewBox: "0 0 42 38", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React__default['default'].createElement("g", { filter: "url(#filter0_d)" },
            React__default['default'].createElement("path", { d: "M17.5352 15.4644L24.6062 22.5354", stroke: "white", strokeWidth: "2", strokeLinecap: "round" }),
            React__default['default'].createElement("path", { d: "M24.6074 15.4644L17.5364 22.5354", stroke: "white", strokeWidth: "2", strokeLinecap: "round" })),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("filter", { id: "filter0_d", x: "12.5352", y: "12.4644", width: "17.073", height: "17.0711", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default['default'].createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default['default'].createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React__default['default'].createElement("feOffset", { dy: "2" }),
                React__default['default'].createElement("feGaussianBlur", { stdDeviation: "2" }),
                React__default['default'].createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })))));
};

var Icon$P = function () {
    return (React__default['default'].createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React__default['default'].createElement("path", { d: "M4.46484 4.46484L11.5359 11.5359", stroke: "white", strokeWidth: "2", strokeLinecap: "round" }),
        React__default['default'].createElement("path", { d: "M11.5371 4.46484L4.46604 11.5359", stroke: "white", strokeWidth: "2", strokeLinecap: "round" })));
};

var Icon$O = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" })));
};

var Icon$N = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("g", { filter: "url(#filter7837483784)" },
            React__default['default'].createElement("path", { d: "M11.5858 14.6568L5.92893 8.99998M5.92893 8.99998L11.5858 3.34312M5.92893 8.99998H20.0711", stroke: props.fill || "white", strokeWidth: "2", strokeLinecap: "round" })),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("filter", { id: "filter7837483784", x: "0.515625", y: "0.34314", width: "24.5563", height: "21.3137", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default['default'].createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default['default'].createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React__default['default'].createElement("feOffset", { dy: "2" }),
                React__default['default'].createElement("feGaussianBlur", { stdDeviation: "2" }),
                React__default['default'].createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })))));
};

var Icon$M = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ width: "29", height: "29", viewBox: "0 0 29 29" }, props),
        React__default['default'].createElement("rect", { width: "28.0333", height: "29", rx: "7", fill: props.fill || "url(#paint7447834)" }),
        React__default['default'].createElement("path", { d: "M14.1042 6.76672L8.94336 11.6768L10.8579 13.4983L14.1042 10.4097L17.3506 13.4983L19.2651 11.6768L14.1042 6.76672Z", fill: "white" }),
        React__default['default'].createElement("path", { d: "M14.1028 23.3718L19.2637 18.4617L17.3492 16.6402L14.1028 19.7289L10.8564 16.6402L8.94192 18.4617L14.1028 23.3718Z", fill: "white" }),
        React__default['default'].createElement("rect", { x: "12.1797", y: "15.0173", width: "2.71084", height: "2.71084", transform: "rotate(-45 12.1797 15.0173)", fill: "white" }),
        React__default['default'].createElement("rect", { x: "18.5605", y: "15.0173", width: "2.71084", height: "2.71084", transform: "rotate(-45 18.5605 15.0173)", fill: "white" }),
        React__default['default'].createElement("rect", { x: "5.80078", y: "15.0173", width: "2.71084", height: "2.71084", transform: "rotate(-45 5.80078 15.0173)", fill: "white" }),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("linearGradient", { id: "paint7447834", x1: "14.0167", y1: "-6.76667", x2: "14.0167", y2: "34.3167", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#FFC700" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#FF8A00" })))));
};

var Icon$L = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ width: "50", height: "50", viewBox: "0 0 50 50" }, props),
        React__default['default'].createElement("rect", { width: "50", height: "50", rx: "12", fill: props.fill || "white", fillOpacity: "0.15" }),
        React__default['default'].createElement("mask", { id: "path-2-inside-1", fill: "white" },
            React__default['default'].createElement("rect", { x: "14", y: "24", width: "6", height: "12", rx: "1" })),
        React__default['default'].createElement("rect", { x: "14", y: "24", width: "6", height: "12", rx: "1", stroke: "#F3F3F3", strokeWidth: "4", mask: "url(#path-2-inside-1)" }),
        React__default['default'].createElement("mask", { id: "path-3-inside-2", fill: "white" },
            React__default['default'].createElement("rect", { x: "22", y: "14", width: "6", height: "22", rx: "1" })),
        React__default['default'].createElement("rect", { x: "22", y: "14", width: "6", height: "22", rx: "1", stroke: "#F3F3F3", strokeWidth: "4", mask: "url(#path-3-inside-2)" }),
        React__default['default'].createElement("mask", { id: "path-4-inside-3", fill: "white" },
            React__default['default'].createElement("rect", { x: "30", y: "19", width: "6", height: "17", rx: "1" })),
        React__default['default'].createElement("rect", { x: "30", y: "19", width: "6", height: "17", rx: "1", stroke: "#F3F3F3", strokeWidth: "4", mask: "url(#path-4-inside-3)" })));
};

var Icon$K = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ width: "50", height: "50", viewBox: "0 0 50 50" }, props),
        React__default['default'].createElement("rect", { width: "50", height: "50", rx: "12", fill: props.fill || "white", fillOpacity: "0.15" }),
        React__default['default'].createElement("g", { filter: "url(#fil44444)" },
            React__default['default'].createElement("path", { d: "M16 25.5C16 30.7467 20.2533 35 25.5 35C30.7467 35 35 30.7467 35 25.5C35 20.2533 30.7467 16 25.5 16C23.4503 16 21.5521 16.6492 20 17.7531", stroke: "#F3F3F3", fill: "none", strokeWidth: "2", strokeLinecap: "round" })),
        React__default['default'].createElement("g", { filter: "url(#filter1_d)" },
            React__default['default'].createElement("path", { d: "M23 27.5L25 24.5H29", stroke: "#F3F3F3", strokeWidth: "2", strokeLinecap: "round" })),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("filter", { id: "fil44444", x: "3", y: "4", width: "37", height: "37", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default['default'].createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default['default'].createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React__default['default'].createElement("feOffset", { dx: "-4", dy: "-3" }),
                React__default['default'].createElement("feGaussianBlur", { stdDeviation: "4" }),
                React__default['default'].createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React__default['default'].createElement("filter", { id: "filter1_d", x: "10", y: "12.5", width: "24.0001", height: "21.0001", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default['default'].createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default['default'].createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React__default['default'].createElement("feOffset", { dx: "-4", dy: "-3" }),
                React__default['default'].createElement("feGaussianBlur", { stdDeviation: "4" }),
                React__default['default'].createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })))));
};

var Icon$J = function (props) {
    return (React__default['default'].createElement(Svg, { width: "18", height: "18", viewBox: "0 0 18 18" },
        React__default['default'].createElement("path", __assign({ d: "M7.58579 14.6571L1.92893 9.00022M1.92893 9.00022L7.58579 3.34337M1.92893 9.00022L16.0711 9.00022", stroke: "url(#paint0_linearzaq)", strokeWidth: "2", strokeLinecap: "round" }, props)),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("linearGradient", { id: "paint0_linearzaq", x1: "4.33309", y1: "13.6671", x2: "12.5355", y2: "5.46469", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#4CEE3E" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#47DA3B" })))));
};

var Icon$I = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M15 1H4C2.9 1 2 1.9 2 3V16C2 16.55 2.45 17 3 17C3.55 17 4 16.55 4 16V4C4 3.45 4.45 3 5 3H15C15.55 3 16 2.55 16 2C16 1.45 15.55 1 15 1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM18 21H9C8.45 21 8 20.55 8 20V8C8 7.45 8.45 7 9 7H18C18.55 7 19 7.45 19 8V20C19 20.55 18.55 21 18 21Z" })));
};

var Icon$H = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ width: "42px", viewBox: "0 0 42 42" }, props),
        React__default['default'].createElement("rect", { x: "6", y: "6", width: "30", height: "30", rx: "7", fill: props.fill || "#4BE43E" }),
        React__default['default'].createElement("g", { filter: "url(#filter0_d111)" },
            React__default['default'].createElement("circle", { fill: props.fill || "rgba(0,0,0,0)", cx: "20.5", cy: "20.5", r: "4.6", stroke: props.color || "white", strokeWidth: "1.8" }),
            React__default['default'].createElement("path", { d: "M24 24L26 26", stroke: props.color || "white", strokeWidth: "1.8", strokeLinecap: "round" })),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("filter", { id: "filter0_d111", x: "11", y: "13", width: "19.8996", height: "19.9001", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default['default'].createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default['default'].createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React__default['default'].createElement("feOffset", { dy: "2" }),
                React__default['default'].createElement("feGaussianBlur", { stdDeviation: "2" }),
                React__default['default'].createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React__default['default'].createElement("linearGradient", { id: "paint0_linear111", x1: "21", y1: "1.2", x2: "21", y2: "36", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#4CEE3E" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#47DA3B" })))));
};

var Icon$G = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ width: "12", height: "12", viewBox: "0 0 12 12", fill: "none" }, props),
        React__default['default'].createElement("path", { opacity: "0.78", fillRule: "evenodd", clipRule: "evenodd", d: "M9.2 5.5C9.2 7.54345 7.54345 9.2 5.5 9.2C3.45655 9.2 1.8 7.54345 1.8 5.5C1.8 3.45655 3.45655 1.8 5.5 1.8C7.54345 1.8 9.2 3.45655 9.2 5.5ZM8.70057 9.97336C7.79896 10.6196 6.69391 11 5.5 11C2.46243 11 0 8.53757 0 5.5C0 2.46243 2.46243 0 5.5 0C8.53757 0 11 2.46243 11 5.5C11 6.69391 10.6196 7.79896 9.97336 8.70057L11.6364 10.3636C11.9879 10.7151 11.9879 11.2849 11.6364 11.6364C11.2849 11.9879 10.7151 11.9879 10.3636 11.6364L8.70057 9.97336Z" })));
};

var Icon$F = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ width: "42px", viewBox: "0 0 42 42" }, props),
        React__default['default'].createElement("rect", { x: "6", y: "6", width: "30", height: "30", rx: "7", fill: props.fill || "rgb(58,58,64)" }),
        React__default['default'].createElement("g", null,
            React__default['default'].createElement("path", { d: "M16 18H27", stroke: "white", strokeWidth: "1.8", strokeLinecap: "round" })),
        React__default['default'].createElement("g", { filter: "url(#filter1_d)" },
            React__default['default'].createElement("path", { d: "M18 22L25 22", stroke: "white", strokeWidth: "1.8", strokeLinecap: "round" })),
        React__default['default'].createElement("g", { filter: "url(#filter2_d)" },
            React__default['default'].createElement("path", { d: "M19 26H24", stroke: "white", strokeWidth: "1.8", strokeLinecap: "round" })),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("filter", { id: "filter0_d", x: "11.0996", y: "15.1", width: "20.8", height: "9.8", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default['default'].createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default['default'].createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React__default['default'].createElement("feOffset", { dy: "2" }),
                React__default['default'].createElement("feGaussianBlur", { stdDeviation: "2" }),
                React__default['default'].createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React__default['default'].createElement("filter", { id: "filter1_d", x: "13.0996", y: "19.1001", width: "16.8", height: "9.8", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default['default'].createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default['default'].createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React__default['default'].createElement("feOffset", { dy: "2" }),
                React__default['default'].createElement("feGaussianBlur", { stdDeviation: "2" }),
                React__default['default'].createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React__default['default'].createElement("filter", { id: "filter2_d", x: "14.0996", y: "23.1001", width: "14.8", height: "9.8", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default['default'].createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default['default'].createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React__default['default'].createElement("feOffset", { dy: "2" }),
                React__default['default'].createElement("feGaussianBlur", { stdDeviation: "2" }),
                React__default['default'].createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React__default['default'].createElement("linearGradient", { id: "paint0_linear", x1: "21", y1: "1.2", x2: "21", y2: "36", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#4CEE3E" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#47DA3B" })))));
};

var Icon$E = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ width: "42px", viewBox: "0 0 42 42" }, props),
        React__default['default'].createElement("rect", { fill: props.fill || "#4BE43E", x: "6", y: "6", width: "30", height: "30", rx: "7" }),
        React__default['default'].createElement("g", { filter: "url(#filter0_d)" },
            React__default['default'].createElement("mask", { id: "path-2-inside-1234", fill: "white" },
                React__default['default'].createElement("rect", { x: "15", y: "15", width: "6", height: "6", rx: "1" })),
            React__default['default'].createElement("rect", { fill: props.fill || "rgba(0,0,0,0)", x: "15", y: "15", width: "6", height: "6", rx: "1", stroke: "white", strokeWidth: "3.2", mask: "url(#path-2-inside-1234)" })),
        React__default['default'].createElement("g", { filter: "url(#filter12121_d)" },
            React__default['default'].createElement("mask", { id: "path-3-inside-23562", fill: "white" },
                React__default['default'].createElement("rect", { x: "22", y: "15", width: "6", height: "6", rx: "1" })),
            React__default['default'].createElement("rect", { fill: props.fill || "rgba(0,0,0,0)", x: "22", y: "15", width: "6", height: "6", rx: "1", stroke: "white", strokeWidth: "3.2", mask: "url(#path-3-inside-23562)" })),
        React__default['default'].createElement("g", { filter: "url(#filter2_d)" },
            React__default['default'].createElement("rect", { fill: props.fill || "rgba(0,0,0,0)", x: "22.8", y: "22.8", width: "4.4", height: "4.4", rx: "2.2", stroke: "white", strokeWidth: "1.6" })),
        React__default['default'].createElement("g", { filter: "url(#filter333_d)" },
            React__default['default'].createElement("mask", { id: "path-5-inside-32", fill: "white" },
                React__default['default'].createElement("rect", { x: "15", y: "22", width: "6", height: "6", rx: "1" })),
            React__default['default'].createElement("rect", { fill: props.fill || "rgba(0,0,0,0)", x: "15", y: "22", width: "6", height: "6", rx: "1", stroke: "white", strokeWidth: "3.2", mask: "url(#path-5-inside-32)" })),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("filter", { id: "filter0_d", x: "11", y: "13", width: "14", height: "14", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default['default'].createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default['default'].createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React__default['default'].createElement("feOffset", { dy: "2" }),
                React__default['default'].createElement("feGaussianBlur", { stdDeviation: "2" }),
                React__default['default'].createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React__default['default'].createElement("filter", { id: "filter12121_d", x: "18", y: "13", width: "14", height: "14", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default['default'].createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default['default'].createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React__default['default'].createElement("feOffset", { dy: "2" }),
                React__default['default'].createElement("feGaussianBlur", { stdDeviation: "2" }),
                React__default['default'].createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React__default['default'].createElement("filter", { id: "filter2_d", x: "18", y: "20", width: "14", height: "14", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default['default'].createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default['default'].createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React__default['default'].createElement("feOffset", { dy: "2" }),
                React__default['default'].createElement("feGaussianBlur", { stdDeviation: "2" }),
                React__default['default'].createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React__default['default'].createElement("filter", { id: "filter333_d", x: "11", y: "20", width: "14", height: "14", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default['default'].createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default['default'].createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React__default['default'].createElement("feOffset", { dy: "2" }),
                React__default['default'].createElement("feGaussianBlur", { stdDeviation: "2" }),
                React__default['default'].createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React__default['default'].createElement("linearGradient", { id: "paint0_linear", x1: "21", y1: "1.2", x2: "21", y2: "36", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#4CEE3E" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#47DA3B" })))));
};

var Icon$D = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ width: "42px", viewBox: "0 0 42 42" }, props),
        React__default['default'].createElement("rect", { x: "6", y: "6", width: "30", height: "30", rx: "7", fill: props.fill || "#4BE43E" }),
        React__default['default'].createElement("g", { filter: props.fill || "url(#filter0_d)" },
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M25.1163 23.9792C23.3638 23.7881 22 22.3033 22 20.5C22 18.6969 23.3634 17.2123 25.1155 17.0209C23.9439 16.3642 22.6032 16 21.205 16L20.7955 16C17.7282 16 14.9377 17.7528 13.6016 20.5002C14.9377 23.2476 17.7282 25.0005 20.7955 25.0005H21.205C22.6035 25.0005 23.9445 24.6361 25.1163 23.9792ZM11.5899 20.0862C11.5288 20.2206 11.4999 20.3615 11.5 20.5001C11.4999 20.6388 11.5287 20.7798 11.5899 20.9143L11.6918 21.1385C13.3145 24.7085 16.874 27.0005 20.7955 27.0005H21.205C25.1265 27.0005 28.686 24.7085 30.3087 21.1385L30.4106 20.9143C30.4717 20.7798 30.5006 20.6389 30.5005 20.5002C30.5006 20.3616 30.4717 20.2207 30.4106 20.0862L30.3087 19.862C28.686 16.292 25.1265 14 21.205 14H20.7955C16.874 14 13.3145 16.292 11.6918 19.862L11.5899 20.0862Z", fill: "white" })),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("filter", { id: "filter0_d", x: "7.5", y: "12", width: "27.0005", height: "21.0005", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default['default'].createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default['default'].createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React__default['default'].createElement("feOffset", { dy: "2" }),
                React__default['default'].createElement("feGaussianBlur", { stdDeviation: "2" }),
                React__default['default'].createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React__default['default'].createElement("linearGradient", { id: "paint0_linear", x1: "21", y1: "1.2", x2: "21", y2: "36", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#4CEE3E" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#47DA3B" })))));
};

var Icon$C = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ width: "42px", viewBox: "0 0 42 42" }, props),
        React__default['default'].createElement("rect", { x: "6", y: "6", width: "30", height: "30", rx: "7", fill: props.fill || "#4BE43E" }),
        React__default['default'].createElement("g", { filter: "url(#filter110_d112)" },
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.0864 19.5899C12.5892 19.3613 13.1821 19.5837 13.4106 20.0864L13.5125 20.3107C14.8107 23.1666 17.6583 25.0002 20.7955 25.0002H21.205C24.3422 25.0002 27.1898 23.1666 28.488 20.3107L28.5899 20.0864C28.8184 19.5837 29.4113 19.3613 29.914 19.5899C30.4168 19.8184 30.6391 20.4113 30.4106 20.914L30.3087 21.1383C28.686 24.7082 25.1265 27.0002 21.205 27.0002H20.7955C16.874 27.0002 13.3145 24.7082 11.6918 21.1383L11.5899 20.914C11.3613 20.4113 11.5837 19.8184 12.0864 19.5899Z", fill: "white" })),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("filter", { id: "filter110_d112", x: "7.5", y: "17.5", width: "27.0005", height: "15.5002", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default['default'].createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default['default'].createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React__default['default'].createElement("feOffset", { dy: "2" }),
                React__default['default'].createElement("feGaussianBlur", { stdDeviation: "2" }),
                React__default['default'].createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React__default['default'].createElement("linearGradient", { id: "paint0_linear112", x1: "21", y1: "1.2", x2: "21", y2: "36", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#4CEE3E" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#47DA3B" })))));
};

var Icon$B = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ width: "42px", viewBox: "0 0 42 42" }, props),
        React__default['default'].createElement("rect", { x: "6", y: "6", width: "30", height: "30", rx: "7", fill: props.fill || "rgb(58,58,64)" }),
        React__default['default'].createElement("g", { filter: "url(#filter0_d)" },
            React__default['default'].createElement("path", { d: "M19 16H27M27 16V24M27 16L17 26", stroke: "white", strokeWidth: "2", strokeLinecap: "round" })),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("filter", { id: "filter0_d", x: "12", y: "13", width: "20", height: "20", filterUnits: "userSpaceOnUse" },
                React__default['default'].createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default['default'].createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React__default['default'].createElement("feOffset", { dy: "2" }),
                React__default['default'].createElement("feGaussianBlur", { stdDeviation: "2" }),
                React__default['default'].createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React__default['default'].createElement("linearGradient", { id: "paint0_linear", x1: "21", y1: "1.2", x2: "21", y2: "36", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#4CEE3E" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#47DA3B" }))),
        " "));
};

var Icon$A = function (props) {
    return (React__default['default'].createElement("svg", __assign({ width: "7", height: "10", viewBox: "0 0 7 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React__default['default'].createElement("path", { d: "M1 9L5 5L1 1", stroke: "#A3A3A3", strokeWidth: "1.8" })));
};

var Icon$z = function (props) {
    return (React__default['default'].createElement("svg", __assign({ width: "29", height: "82", viewBox: "0 0 20 82", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React__default['default'].createElement("path", { d: "M3.33975 75.2265L12.9199 81.6133C13.809 82.206 15 81.5686 15 80.5V2.33333C15 0.823494 13.391 -0.141886 12.0588 0.568627L4.76471 4.45882C1.83193 6.02297 0 9.07619 0 12.4V68.9861C0 71.4938 1.25326 73.8355 3.33975 75.2265Z", fill: props.fill || "#2E2E35" })));
};

var Icon$y = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ width: "42px", viewBox: "0 0 42  42" }, props),
        React__default['default'].createElement("rect", { x: "6", y: "6", width: "30", height: "30", rx: "7", fill: props.fill || "rgb(58,58,64)" }),
        React__default['default'].createElement("g", { filter: "url(#filter0_d65345)" },
            React__default['default'].createElement("path", { fill: props.fill || "rgba(0,0,0,0)", d: "M26.3958 17.9206L26.3959 17.9204C26.5706 17.7463 26.6685 17.5097 26.6679 17.2631L26.3958 17.9206ZM26.3958 17.9206L18.7389 25.5774M26.3958 17.9206L18.7389 25.5774M18.7389 25.5774L16.7621 26.2376L17.42 24.2638L25.0797 16.6071C25.0797 16.6071 25.0797 16.6071 25.0797 16.607C25.4436 16.244 26.0329 16.2446 26.396 16.6084C26.5694 16.7822 26.6672 17.0175 26.6679 17.263L18.7389 25.5774ZM15.5906 28.0001C15.6541 28 15.7171 27.9898 15.7774 27.9699L15.0304 27.2224C14.9273 27.532 15.0947 27.8667 15.4043 27.9698C15.4644 27.9898 15.5273 28 15.5906 28.0001ZM25.7382 14.85C25.0978 14.8482 24.4834 15.1028 24.032 15.5571C24.0319 15.5571 24.0319 15.5572 24.0318 15.5573L16.2486 23.3398L16.2482 23.3402C16.1674 23.4216 16.1065 23.5206 16.07 23.6293L16.07 23.6295L14.8881 27.175L14.8881 27.175C14.7588 27.5632 14.9687 27.9828 15.357 28.1121L25.7382 14.85Z", stroke: "white", strokeWidth: "0.3" })),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("filter", { id: "filter0_d65345", x: "10.7002", y: "12.7", width: "21.6001", height: "21.6001", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default['default'].createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default['default'].createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React__default['default'].createElement("feOffset", { dy: "2" }),
                React__default['default'].createElement("feGaussianBlur", { stdDeviation: "2" }),
                React__default['default'].createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })))));
};

var Icon$x = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ width: "42px", viewBox: "0 0 42 42" }, props),
        React__default['default'].createElement("rect", { x: "6", y: "6", width: "30", height: "30", rx: "7", fill: props.fill || "rgb(58,58,64)" }),
        React__default['default'].createElement("g", { filter: "url(#filter134231)" },
            React__default['default'].createElement("path", { d: "M16 17H27", stroke: "white", strokeWidth: "1.8", strokeLinecap: "round" })),
        React__default['default'].createElement("g", { filter: "url(#filter1_d)" },
            React__default['default'].createElement("path", { d: "M16 21L27 21", stroke: "white", strokeWidth: "1.8", strokeLinecap: "round" })),
        React__default['default'].createElement("g", { filter: "url(#filter56543)" },
            React__default['default'].createElement("path", { d: "M16 25L27 25", stroke: "white", strokeWidth: "1.8", strokeLinecap: "round" })),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("filter", { id: "filter134231", x: "11.0996", y: "14.1", width: "20.8", height: "9.8", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default['default'].createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default['default'].createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React__default['default'].createElement("feOffset", { dy: "2" }),
                React__default['default'].createElement("feGaussianBlur", { stdDeviation: "2" }),
                React__default['default'].createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React__default['default'].createElement("filter", { id: "filter1_d", x: "11.0996", y: "18.1", width: "20.8", height: "9.8", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default['default'].createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default['default'].createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React__default['default'].createElement("feOffset", { dy: "2" }),
                React__default['default'].createElement("feGaussianBlur", { stdDeviation: "2" }),
                React__default['default'].createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React__default['default'].createElement("filter", { id: "filter56543", x: "11.0996", y: "22.1001", width: "20.8", height: "9.8", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default['default'].createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default['default'].createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React__default['default'].createElement("feOffset", { dy: "2" }),
                React__default['default'].createElement("feGaussianBlur", { stdDeviation: "2" }),
                React__default['default'].createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })))));
};

var Icon$w = function (props) {
    return (React__default['default'].createElement("svg", { width: "42", height: "42", viewBox: "0 0 42 42", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React__default['default'].createElement("rect", { x: "6", y: "6", width: "30", height: "30", rx: "7", fill: props.fill || "#4BE43E" }),
        React__default['default'].createElement("g", null,
            React__default['default'].createElement("path", { d: "M15 20L20 25L27 16", stroke: "white", strokeWidth: "2", strokeLinecap: "round" })),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("filter", { id: "filter0_d", x: "10", y: "13", width: "22", height: "19.5082", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default['default'].createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default['default'].createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React__default['default'].createElement("feOffset", { dy: "2" }),
                React__default['default'].createElement("feGaussianBlur", { stdDeviation: "2" }),
                React__default['default'].createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.604167 0 0 0 0 0.29 0 0 0 0 0 0 0 0 0.25 0" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React__default['default'].createElement("linearGradient", { id: "paint0_linear", x1: "21", y1: "6", x2: "21", y2: "36", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#FFEA2C" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#FFB72C" })))));
};

var Icon$v = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ width: "30", height: "30", viewBox: "0 0 30 30", color: "none" }, props),
        React__default['default'].createElement("rect", { width: "30", height: "30", rx: "7", fill: props.fill || "white", fillOpacity: "0.15" }),
        React__default['default'].createElement("path", { d: "M13.3102 8.0011C13.4534 8.0011 13.5934 8.04357 13.7125 8.12313C13.8316 8.20269 13.9244 8.31578 13.9792 8.44808C14.034 8.58039 14.0483 8.72598 14.0204 8.86644C13.9925 9.0069 13.9235 9.13591 13.8222 9.23718C13.7209 9.33844 13.5919 9.4074 13.4514 9.43534C13.311 9.46328 13.1654 9.44894 13.0331 9.39414C12.9007 9.33933 12.7876 9.24653 12.7081 9.12745C12.6285 9.00838 12.586 8.86839 12.586 8.72518C12.586 8.53314 12.6623 8.34897 12.7981 8.21318C12.9339 8.07739 13.1181 8.0011 13.3102 8.0011ZM8.24121 13.0696C8.24121 13.2129 8.28368 13.3529 8.36325 13.4719C8.44282 13.591 8.55591 13.6838 8.68823 13.7386C8.82055 13.7934 8.96615 13.8078 9.10662 13.7798C9.24709 13.7519 9.37612 13.6829 9.47739 13.5816C9.57866 13.4804 9.64763 13.3514 9.67557 13.2109C9.70351 13.0705 9.68917 12.9249 9.63436 12.7926C9.57956 12.6602 9.48674 12.5472 9.36766 12.4676C9.24857 12.388 9.10857 12.3456 8.96535 12.3456C8.7733 12.3456 8.58911 12.4219 8.45331 12.5576C8.3175 12.6934 8.24121 12.8776 8.24121 13.0696ZM9.84035 10.3242C9.84035 10.4674 9.88282 10.6074 9.96239 10.7265C10.042 10.8455 10.1551 10.9383 10.2874 10.9931C10.4197 11.0479 10.5653 11.0623 10.7058 11.0343C10.8462 11.0064 10.9753 10.9374 11.0765 10.8362C11.1778 10.7349 11.2468 10.6059 11.2747 10.4654C11.3026 10.325 11.2883 10.1794 11.2335 10.0471C11.1787 9.91478 11.0859 9.8017 10.9668 9.72213C10.8477 9.64257 10.7077 9.60011 10.5645 9.60011C10.3724 9.60011 10.1882 9.67639 10.0524 9.81218C9.91664 9.94797 9.84035 10.1321 9.84035 10.3242Z", fill: "white" }),
        React__default['default'].createElement("g", { filter: "url(#filter5674)" },
            React__default['default'].createElement("path", { d: "M16.6237 9C19.1545 9.75321 21 12.0977 21 14.8731C21 18.2569 18.2569 21 14.8731 21C12.0977 21 9.75321 19.1545 9 16.6237", stroke: "white", strokeWidth: "1.8", strokeLinecap: "round" })),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("filter", { id: "filter5674", x: "4.09961", y: "6.09973", width: "21.8002", height: "21.8002", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default['default'].createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default['default'].createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React__default['default'].createElement("feOffset", { dy: "2" }),
                React__default['default'].createElement("feGaussianBlur", { stdDeviation: "2" }),
                React__default['default'].createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })))));
};

var Icon$u = function (props) {
    return (React__default['default'].createElement("svg", { viewBox: "0 0 26 24", width: "26", height: "24", fill: "none" },
        React__default['default'].createElement("g", { filter: "url(#filter989823)" },
            React__default['default'].createElement("path", { d: "M13 15.5L15 12.5H19", stroke: props.stroke || "#F3F3F3", strokeWidth: "2", strokeLinecap: "round" })),
        React__default['default'].createElement("circle", { cx: "15.5", cy: "13.5", r: "9.5", stroke: props.stroke || "#F3F3F3", strokeWidth: "2" }),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("filter", { id: "filter989823", x: "0", y: "0.5", width: "24.0001", height: "21.0001", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default['default'].createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default['default'].createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React__default['default'].createElement("feOffset", { dx: "-4", dy: "-3" }),
                React__default['default'].createElement("feGaussianBlur", { stdDeviation: "4" }),
                React__default['default'].createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })))));
};

var Icon$t = function (props) {
    return (React__default['default'].createElement("svg", { width: "22", height: "22", viewBox: "0 0 20 22", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React__default['default'].createElement("path", { d: "M8 13.1683V7.83167C8 7.0405 8.87525 6.56266 9.54076 6.99049L13.6915 9.65882C14.3038 10.0525 14.3038 10.9475 13.6915 11.3412L9.54076 14.0095C8.87525 14.4373 8 13.9595 8 13.1683Z", fill: props.fill || "#4BE43E" }),
        React__default['default'].createElement("circle", { cx: "10.5", cy: "10.5", r: "9.5", stroke: props.stroke || "#4BE43E", strokeWidth: "2" })));
};

var Icon$s = function (props) {
    return (React__default['default'].createElement("svg", { width: "55", height: "55", viewBox: "0 0 55 55", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React__default['default'].createElement("circle", { cx: "27.5", cy: "27.5", r: "25", fill: props.fill || "#1C1C22", stroke: props.fill || "#26262D", strokeWidth: "5" }),
        React__default['default'].createElement("g", null,
            React__default['default'].createElement("path", { d: "M32.7284 28.4855L27.0715 34.1424M27.0715 34.1424L21.4147 28.4855M27.0715 34.1424V20.0002", stroke: "white", strokeWidth: "2", strokeLinecap: "round" })),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("filter", { id: "filter0_d", x: "14.5859", y: "16.5859", width: "24.9706", height: "24.9706", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default['default'].createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default['default'].createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React__default['default'].createElement("feOffset", { dy: "2" }),
                React__default['default'].createElement("feGaussianBlur", { stdDeviation: "2" }),
                React__default['default'].createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })))));
};

var Icon$r = function (props) {
    return (React__default['default'].createElement("svg", { width: "19", height: "22", viewBox: "0 0 19 19", fill: "#fff", xmlns: "http://www.w3.org/2000/svg" },
        React__default['default'].createElement("g", { filter: "url(#filter0_d12)" },
            React__default['default'].createElement("path", { d: "M14.1601 9.77351L9.64417 14.2894M9.64417 14.2894L5.12825 9.77351M9.64417 14.2894L9.64417 2.99964", stroke: props.color, strokeWidth: "1.5", strokeLinecap: "round" })),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("filter", { id: "filter0_d12", x: "0.378906", y: "0.25", width: "18.5318", height: "21.1004", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default['default'].createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default['default'].createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React__default['default'].createElement("feOffset", { dy: "2" }),
                React__default['default'].createElement("feGaussianBlur", { stdDeviation: "2" }),
                React__default['default'].createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React__default['default'].createElement("linearGradient", { id: "paint0_linear", x1: "13.3698", y1: "12.3702", x2: "6.82172", y2: "5.82208", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#4CEE3E" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#47DA3B" })))));
};

var Icon$q = function (props) {
    return (React__default['default'].createElement("svg", __assign({ width: "42px", viewBox: "0 0 42 42" }, props),
        React__default['default'].createElement("rect", { x: "36", y: "36", width: "30", height: "30", rx: "7", transform: "rotate(180 36 36)", fill: "white", fillOpacity: "0.15" }),
        React__default['default'].createElement("path", { d: "M22 25L18 21L22 17", stroke: "white", strokeWidth: "2" })));
};

var Icon$p = function (props) {
    return (React__default['default'].createElement("svg", __assign({ width: "42px", viewBox: "0 0 42 42" }, props),
        React__default['default'].createElement("rect", { x: "36", y: "36", width: "30", height: "30", rx: "7", transform: "rotate(180 36 36)", fill: "white", fillOpacity: "0.15" }),
        React__default['default'].createElement("path", { d: "M20 25L16 21L20 17", stroke: "white", strokeWidth: "2" }),
        React__default['default'].createElement("path", { d: "M26 25L22 21L26 17", stroke: "white", strokeWidth: "2" })));
};

var Icon$o = function (props) {
    return (React__default['default'].createElement("svg", __assign({ width: "46", height: "46", viewBox: "0 0 46 46", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React__default['default'].createElement("rect", { x: "0.5", y: "0.5", width: "45", height: "45", rx: "9.5", fill: props.fill || "#4BE43E", stroke: props.fill || "url(#paint0_linear)" }),
        React__default['default'].createElement("g", { filter: props.fill || "url(#filter0_d)" },
            React__default['default'].createElement("path", { d: "M24.35 16L32 23.5M32 23.5L24.35 31M32 23.5H15", stroke: props.stroke || "white", strokeWidth: "2" })),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("filter", { id: "filter0_d", x: "11", y: "15.2859", width: "26.4284", height: "24.4281", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default['default'].createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default['default'].createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React__default['default'].createElement("feOffset", { dy: "4" }),
                React__default['default'].createElement("feGaussianBlur", { stdDeviation: "2" }),
                React__default['default'].createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.195672 0 0 0 0 0.779167 0 0 0 0 0.146094 0 0 0 1 0" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React__default['default'].createElement("linearGradient", { id: "paint0_linear", x1: "23", y1: "0", x2: "23", y2: "46", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#8EFF85", stopOpacity: "0" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#A5FF9D" })))));
};

var Icon$n = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ width: "42px", viewBox: "0 0 42 42" }, props),
        React__default['default'].createElement("rect", { x: "6", y: "6", width: "30", height: "30", rx: "7", fill: props.fill || "#4BE43E" }),
        React__default['default'].createElement("g", { filter: props.fill || "url(#filter0_d)" },
            React__default['default'].createElement("path", { d: "M19 16H27M27 16V24M27 16L17 26", stroke: props.stroke || "white", strokeWidth: "2", strokeLinecap: "round" })),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("filter", { id: "filter0_d", x: "12", y: "13", width: "20", height: "20", filterUnits: "userSpaceOnUse" },
                React__default['default'].createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default['default'].createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React__default['default'].createElement("feOffset", { dy: "2" }),
                React__default['default'].createElement("feGaussianBlur", { stdDeviation: "2" }),
                React__default['default'].createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React__default['default'].createElement("linearGradient", { id: "paint0_linear", x1: "21", y1: "1.2", x2: "21", y2: "36", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#4CEE3E" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#47DA3B" }))),
        " "));
};

var Icon$m = function (props) {
    return (React__default['default'].createElement("svg", { width: "42", height: "42", viewBox: "0 0 42 42", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React__default['default'].createElement("rect", { x: "6", y: "6", width: "30", height: "30", rx: "7", fill: props.fill || "white", fillOpacity: "0.15" }),
        React__default['default'].createElement("g", { filter: "url(#filter00)" },
            React__default['default'].createElement("rect", { x: "14", y: "14", width: "6", height: "6", rx: "1", fill: "#F3F3F3" })),
        React__default['default'].createElement("g", { filter: "url(#filter11)" },
            React__default['default'].createElement("rect", { x: "22", y: "14", width: "6", height: "6", rx: "1", fill: "#F3F3F3" })),
        React__default['default'].createElement("g", { filter: "url(#filter22)" },
            React__default['default'].createElement("rect", { x: "14", y: "22", width: "6", height: "6", rx: "1", fill: "#F3F3F3" })),
        React__default['default'].createElement("g", { filter: "url(#filter3_d)" },
            React__default['default'].createElement("rect", { x: "22", y: "22", width: "6", height: "6", rx: "1", fill: "#F3F3F3" })),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("filter", { id: "filter00", x: "10", y: "12", width: "14", height: "14", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default['default'].createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default['default'].createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React__default['default'].createElement("feOffset", { dy: "2" }),
                React__default['default'].createElement("feGaussianBlur", { stdDeviation: "2" }),
                React__default['default'].createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React__default['default'].createElement("filter", { id: "filter11", x: "18", y: "12", width: "14", height: "14", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default['default'].createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default['default'].createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React__default['default'].createElement("feOffset", { dy: "2" }),
                React__default['default'].createElement("feGaussianBlur", { stdDeviation: "2" }),
                React__default['default'].createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React__default['default'].createElement("filter", { id: "filter22", x: "10", y: "20", width: "14", height: "14", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default['default'].createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default['default'].createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React__default['default'].createElement("feOffset", { dy: "2" }),
                React__default['default'].createElement("feGaussianBlur", { stdDeviation: "2" }),
                React__default['default'].createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React__default['default'].createElement("filter", { id: "filter3_d", x: "18", y: "20", width: "14", height: "14", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default['default'].createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default['default'].createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React__default['default'].createElement("feOffset", { dy: "2" }),
                React__default['default'].createElement("feGaussianBlur", { stdDeviation: "2" }),
                React__default['default'].createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })))));
};

var Icon$l = function (props) {
    return (React__default['default'].createElement("svg", __assign({ width: "10", height: "7", viewBox: "0 0 10 7", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React__default['default'].createElement("path", { d: "M1 1L5 5L9 1", stroke: props.stroke || "#fff", strokeWidth: "1.8" })));
};

var Icon$k = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z" })));
};

var Icon$j = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ width: "88", height: "78", viewBox: "0 0 88 78", fill: "none" }, props),
        React__default['default'].createElement("g", { filter: "url(#filter0_dplaying)" },
            React__default['default'].createElement("path", { d: "M65 61.2967L37.473 72.3874L37.1864 72.5032C33.866 73.8751 30.0576 72.3087 28.6802 69.0002L12.4995 30.1851C11.1205 26.8781 12.6948 23.0851 16.0152 21.7132L40.7207 11.4975C44.0426 10.1241 47.8511 11.692 49.2285 14.9974L51.1854 19.1762L62.676 43.7046L65 61.2967Z", fill: "#C0C0C0" })),
        React__default['default'].createElement("path", { d: "M65 60.9621L37.6792 72L36.5966 71.6745C33.1811 70.6455 31.2465 67.0471 32.2769 63.6345L44.3733 23.5899C45.2899 20.5552 48.2425 18.6907 51.2889 19.0424L62.6934 43.4539L65 60.9621Z", fill: "black", fillOpacity: "0.12" }),
        React__default['default'].createElement("path", { d: "M87.7203 32.0767L75.4893 72.38C74.4475 75.8129 70.8027 77.7574 67.3492 76.7217L45.913 70.2932L41.6478 69.0134C38.1929 67.9779 36.2382 64.3564 37.2801 60.9218L49.5111 20.62C50.5529 17.1871 54.1961 15.2426 57.6496 16.2783L83.3524 23.9866C83.5872 24.0577 83.8158 24.1397 84.0366 24.2354C87.0578 25.5154 88.6906 28.8772 87.7203 32.0767Z", fill: "white" }),
        React__default['default'].createElement("g", { filter: "url(#filter1_iplaying)" },
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M72.6292 43.2513L65.1785 46.802L69.8907 53.9568C67.3913 56.2529 63.7967 57.2413 60.2886 56.2579C54.8978 54.7468 51.7527 49.1517 53.2638 43.7609C54.775 38.3701 60.3701 35.225 65.7609 36.7362C69.1093 37.6748 71.5913 40.1891 72.6292 43.2513Z", fill: "#EFEFEF" })),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("filter", { id: "filter0_dplaying", x: "0", y: "0", width: "69", height: "78", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default['default'].createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default['default'].createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React__default['default'].createElement("feOffset", { dx: "-4", dy: "-3" }),
                React__default['default'].createElement("feGaussianBlur", { stdDeviation: "4" }),
                React__default['default'].createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React__default['default'].createElement("filter", { id: "filter1_iplaying", x: "50.5273", y: "34", width: "23.5377", height: "26.5859", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default['default'].createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }),
                React__default['default'].createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React__default['default'].createElement("feOffset", { dy: "2" }),
                React__default['default'].createElement("feGaussianBlur", { stdDeviation: "2" }),
                React__default['default'].createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: "-1", k3: "1" }),
                React__default['default'].createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in2: "shape", result: "effect1_innerShadow" })))));
};

var Icon$i = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ width: "42px", height: "42", viewBox: "0 0 42 42", fill: "#F45555" }, props),
        React__default['default'].createElement("rect", { x: "6", y: "6", width: "30", height: "30", rx: "7", fill: "url(#paint0_linear)" }),
        React__default['default'].createElement("g", { filter: "url(#filter0_d)" },
            React__default['default'].createElement("path", { d: "M17.5352 17.4648L24.6062 24.5359", stroke: "white", strokeWidth: "2", strokeLinecap: "round" }),
            React__default['default'].createElement("path", { d: "M24.6074 17.4648L17.5364 24.5359", stroke: "white", strokeWidth: "2", strokeLinecap: "round" })),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("filter", { id: "filter0_d", x: "12.1211", y: "14.0508", width: "17.9014", height: "17.8995", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default['default'].createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default['default'].createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React__default['default'].createElement("feOffset", { dy: "2" }),
                React__default['default'].createElement("feGaussianBlur", { stdDeviation: "2" }),
                React__default['default'].createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React__default['default'].createElement("linearGradient", { id: "paint0_linear", x1: "21", y1: "6", x2: "21", y2: "36", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#FF6161" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#F45555" })))));
};

var Icon$h = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ width: "30", height: "30", viewBox: "0 0 30 30" }, props),
        React__default['default'].createElement("rect", { width: "30", height: "30", rx: "7", fill: "white", fillOpacity: "0.15" }),
        React__default['default'].createElement("path", { d: "M9.74707 7.00047H13.2111C13.4011 7.00053 13.584 7.07271 13.7229 7.20244C13.8617 7.33217 13.9461 7.50977 13.9591 7.69935C13.972 7.88893 13.9126 8.07636 13.7926 8.22377C13.6727 8.37117 13.5013 8.46757 13.3131 8.49347L13.2111 8.50047H9.74707C9.17694 8.5004 8.62805 8.71676 8.21132 9.10584C7.79458 9.49491 7.54109 10.0277 7.50207 10.5965L7.49707 10.7505V20.2505C7.497 20.8206 7.71337 21.3695 8.10244 21.7862C8.49151 22.203 9.02428 22.4564 9.59307 22.4955L9.74707 22.5005H19.2471C19.8172 22.5005 20.3661 22.2842 20.7828 21.8951C21.1996 21.506 21.453 20.9733 21.4921 20.4045L21.4971 20.2505V19.7525C21.4954 19.5612 21.5669 19.3765 21.6969 19.2362C21.8269 19.0959 22.0056 19.0105 22.1965 18.9976C22.3873 18.9847 22.5759 19.0452 22.7236 19.1668C22.8713 19.2883 22.967 19.4617 22.9911 19.6515L22.9971 19.7525V20.2505C22.9972 21.2105 22.6291 22.1339 21.9686 22.8307C21.3082 23.5274 20.4057 23.9443 19.4471 23.9955L19.2471 24.0005H9.74707C8.78707 24.0006 7.8636 23.6325 7.16688 22.972C6.47017 22.3116 6.05327 21.4091 6.00207 20.4505L5.99707 20.2505V10.7505C5.99698 9.79047 6.36507 8.867 7.02551 8.17028C7.68595 7.47356 8.58844 7.05667 9.54707 7.00547L9.74707 7.00047H13.2111H9.74707ZM17.5001 9.52047V6.75047C17.5 6.61251 17.538 6.47721 17.6098 6.35943C17.6816 6.24166 17.7846 6.14599 17.9073 6.08293C18.03 6.01987 18.1677 5.99188 18.3053 6.00203C18.4428 6.01218 18.575 6.06009 18.6871 6.14047L18.7691 6.20947L24.7631 11.9595C25.0431 12.2275 25.0691 12.6595 24.8401 12.9565L24.7631 13.0415L18.7691 18.7935C18.6696 18.889 18.5457 18.9553 18.411 18.9851C18.2763 19.0148 18.136 19.0068 18.0055 18.9619C17.8751 18.917 17.7595 18.8371 17.6716 18.7308C17.5836 18.6245 17.5267 18.496 17.5071 18.3595L17.5001 18.2525V15.5275L17.1561 15.5575C14.7561 15.8075 12.4561 16.8875 10.2421 18.8175C9.72207 19.2705 8.91907 18.8425 9.00507 18.1595C9.66907 12.8395 12.4511 9.90747 17.2001 9.53947L17.5001 9.51947V6.75047V9.52047ZM19.0001 8.50947V10.2505C19.0001 10.4494 18.9211 10.6401 18.7804 10.7808C18.6397 10.9214 18.449 11.0005 18.2501 11.0005C14.3761 11.0005 11.9761 12.6765 10.9381 16.1575L10.8591 16.4365L11.2111 16.1995C13.4501 14.7375 15.7981 14.0005 18.2511 14.0005C18.4323 14.0005 18.6074 14.0661 18.744 14.1852C18.8806 14.3044 18.9694 14.4689 18.9941 14.6485L19.0011 14.7505V16.4935L23.1601 12.5005L19.0001 8.50947Z", fill: "white" })));
};

var Icon$g = function (props) {
    return (React__default['default'].createElement("svg", __assign({ width: "15", height: "12", viewBox: "0 0 15 12", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React__default['default'].createElement("path", { d: "M1.375 4.5L5.96875 9.09375L13.625 1.4375", stroke: "#4BE43E", strokeWidth: "2.8" })));
};

var Icon$f = function (props) {
    return (React__default['default'].createElement("svg", __assign({ width: "18", height: "15", viewBox: "0 0 18 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React__default['default'].createElement("path", { d: "M6.75342 9.4124L6.46872 13.3997C6.87605 13.3997 7.05247 13.2255 7.26403 13.0163L9.17377 11.199L13.1309 14.0845C13.8567 14.4873 14.368 14.2752 14.5638 13.4197L17.1613 1.3006L17.162 1.29989C17.3922 0.231647 16.774 -0.186082 16.0669 0.0759806L0.79902 5.89634C-0.242982 6.29907 -0.227205 6.87746 0.621887 7.13952L4.52527 8.34844L13.5921 2.69946C14.0188 2.41812 14.4067 2.57378 14.0876 2.85513L6.75342 9.4124Z", fill: "#F9F8F8" })));
};

var Icon$e = function (props) {
    return (React__default['default'].createElement("svg", __assign({ width: "19", height: "19", viewBox: "0 0 19 19", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React__default['default'].createElement("path", { d: "M16.6627 5.94446C16.627 5.13488 16.4961 4.5783 16.3085 4.09602C16.115 3.58408 15.8173 3.12575 15.4273 2.74473C15.0462 2.35779 14.5847 2.05712 14.0786 1.86667C13.5935 1.67913 13.0397 1.54821 12.2299 1.51251C11.4142 1.4738 11.1552 1.46484 9.08611 1.46484C7.01706 1.46484 6.75808 1.4738 5.94532 1.50949C5.13558 1.54519 4.57889 1.67622 4.09663 1.86365C3.58449 2.05712 3.12607 2.35477 2.74498 2.74473C2.35796 3.12575 2.05735 3.58711 1.86675 4.09311C1.67917 4.5783 1.54822 5.13186 1.51252 5.94144C1.4738 6.75707 1.46484 7.016 1.46484 9.08466C1.46484 11.1533 1.4738 11.4123 1.5095 12.2249C1.5452 13.0344 1.67626 13.591 1.86384 14.0733C2.05735 14.5852 2.35796 15.0436 2.74498 15.4246C3.12607 15.8115 3.58751 16.1122 4.09361 16.3027C4.57889 16.4902 5.13256 16.6211 5.94241 16.6568C6.75505 16.6926 7.01415 16.7015 9.08321 16.7015C11.1523 16.7015 11.4112 16.6926 12.224 16.6568C13.0337 16.6211 13.5904 16.4902 14.0727 16.3027C15.0969 15.9068 15.9066 15.0972 16.3026 14.0733C16.49 13.5881 16.6211 13.0344 16.6568 12.2249C16.6925 11.4123 16.7015 11.1533 16.7015 9.08466C16.7015 7.016 16.6984 6.75707 16.6627 5.94446ZM15.2904 12.1653C15.2576 12.9095 15.1326 13.3113 15.0284 13.5792C14.7723 14.2429 14.2454 14.7698 13.5815 15.0258C13.3135 15.13 12.9087 15.255 12.1674 15.2876C11.3636 15.3234 11.1225 15.3323 9.08914 15.3323C7.05578 15.3323 6.81169 15.3234 6.01079 15.2876C5.26652 15.255 4.86462 15.13 4.59669 15.0258C4.2663 14.9037 3.96557 14.7102 3.72148 14.4572C3.46843 14.2102 3.27492 13.9125 3.15281 13.5822C3.04862 13.3143 2.9236 12.9095 2.89092 12.1684C2.85511 11.3647 2.84627 11.1236 2.84627 9.09059C2.84627 7.05762 2.85511 6.81358 2.89092 6.01295C2.9236 5.26882 3.04862 4.867 3.15281 4.59911C3.27492 4.26868 3.46843 3.96812 3.7245 3.72395C3.9715 3.47095 4.26921 3.27748 4.59971 3.15551C4.86765 3.05134 5.27257 2.92635 6.01381 2.89356C6.81762 2.85786 7.05881 2.84891 9.09205 2.84891C11.1284 2.84891 11.3695 2.85786 12.1704 2.89356C12.9147 2.92635 13.3166 3.05134 13.5845 3.15551C13.9149 3.27748 14.2156 3.47095 14.4597 3.72395C14.7128 3.97103 14.9063 4.26868 15.0284 4.59911C15.1326 4.867 15.2576 5.27173 15.2904 6.01295C15.3261 6.8166 15.335 7.05762 15.335 9.09059C15.335 11.1236 15.3261 11.3617 15.2904 12.1653Z", fill: "#F9F8F8" }),
        React__default['default'].createElement("path", { d: "M9.0831 5.24023C6.96155 5.24023 5.24023 6.96144 5.24023 9.0831C5.24023 11.2048 6.96155 12.926 9.0831 12.926C11.2048 12.926 12.926 11.2048 12.926 9.0831C12.926 6.96144 11.2048 5.24023 9.0831 5.24023ZM9.0831 11.5759C7.70675 11.5759 6.59033 10.4596 6.59033 9.0831C6.59033 7.70663 7.70675 6.59033 9.0831 6.59033C10.4596 6.59033 11.5759 7.70663 11.5759 9.0831C11.5759 10.4596 10.4596 11.5759 9.0831 11.5759Z", fill: "#F9F8F8" }),
        React__default['default'].createElement("path", { d: "M14.0048 5.03855C14.0048 5.52255 13.6124 5.91499 13.1283 5.91499C12.6444 5.91499 12.252 5.52255 12.252 5.03855C12.252 4.55444 12.6444 4.16211 13.1283 4.16211C13.6124 4.16211 14.0048 4.55444 14.0048 5.03855Z", fill: "#F9F8F8" })));
};

var Icon$d = function (props) {
    return (React__default['default'].createElement("svg", __assign({ width: "22", height: "23", viewBox: "0 0 18 18", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React__default['default'].createElement("path", { d: "M16.5 5.18025C15.9378 5.42578 15.3423 5.58678 14.733 5.658C15.3726 5.28243 15.8535 4.68683 16.086 3.9825C15.48 4.33525 14.8191 4.5837 14.1307 4.7175C13.8409 4.41391 13.4923 4.17254 13.1061 4.00813C12.7199 3.84373 12.3042 3.75972 11.8845 3.76125C10.185 3.76125 8.80725 5.11875 8.80725 6.79125C8.80725 7.02825 8.83425 7.26 8.88675 7.48125C7.66768 7.42327 6.47409 7.11181 5.38213 6.56673C4.29016 6.02165 3.32382 5.25494 2.54475 4.3155C2.27162 4.7763 2.12806 5.30234 2.12925 5.838C2.12925 6.89025 2.67225 7.818 3.49725 8.36025C3.00936 8.3445 2.53202 8.21424 2.10375 7.98V8.0175C2.10375 9.486 3.165 10.7108 4.57125 10.9898C4.30696 11.0599 4.03469 11.0954 3.76125 11.0955C3.5625 11.0955 3.36975 11.0768 3.1815 11.0393C3.38256 11.6452 3.76733 12.1735 4.28236 12.5508C4.7974 12.928 5.41713 13.1355 6.0555 13.1445C4.96055 13.9879 3.61636 14.4435 2.23425 14.4398C1.98525 14.4398 1.74075 14.4248 1.5 14.3978C2.91094 15.2908 4.54694 15.7637 6.21675 15.7613C11.877 15.7613 14.9715 11.1435 14.9715 7.13925L14.961 6.747C15.5646 6.32225 16.0861 5.79139 16.5 5.18025Z", fill: "white" })));
};

var Icon$c = function (props) {
    return (React__default['default'].createElement("svg", __assign({ width: "10", height: "10", viewBox: "0 0 10 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React__default['default'].createElement("path", __assign({ d: "M1 9H9M9 9V1M9 9L1 1", stroke: "#4BE43E", strokeWidth: "1.8", strokeLinecap: "round" }, props))));
};

var Icon$b = function (props) {
    return (React__default['default'].createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React__default['default'].createElement("path", { d: "M8 4V16C8 16.5304 8.21071 17.0391 8.58579 17.4142C8.96086 17.7893 9.46957 18 10 18H18C18.5304 18 19.0391 17.7893 19.4142 17.4142C19.7893 17.0391 20 16.5304 20 16V7.242C20 6.97556 19.9467 6.71181 19.8433 6.46624C19.7399 6.22068 19.5885 5.99824 19.398 5.812L16.083 2.57C15.7094 2.20466 15.2076 2.00007 14.685 2H10C9.46957 2 8.96086 2.21071 8.58579 2.58579C8.21071 2.96086 8 3.46957 8 4V4Z", stroke: "#4BE43E", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default['default'].createElement("path", { d: "M16 18V20C16 20.5304 15.7893 21.0391 15.4142 21.4142C15.0391 21.7893 14.5304 22 14 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V9C4 8.46957 4.21071 7.96086 4.58579 7.58579C4.96086 7.21071 5.46957 7 6 7H8", stroke: "#4BE43E", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })));
};

var Icon$a = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ width: "29", height: "34", viewBox: "0 0 29 34" }, props),
        React__default['default'].createElement("path", { d: "M14.2619 31.264C22.1385 31.264 28.5238 24.8788 28.5238 17.0021C28.5238 9.1255 22.1385 2.74023 14.2619 2.74023C6.38527 2.74023 0 9.1255 0 17.0021C0 24.8788 6.38527 31.264 14.2619 31.264Z", fill: "white" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.60636 23.4634H9.95204C10.5458 23.4634 10.8427 23.4634 11.1101 23.3839C11.4012 23.2973 11.6675 23.1428 11.8871 22.9332C12.0888 22.7407 12.2361 22.4831 12.5305 21.9679L16.9109 14.3049C17.2011 13.7972 17.3463 13.5432 17.41 13.2755C17.4792 12.984 17.4791 12.6804 17.4096 12.3889C17.3457 12.1212 17.2003 11.8675 16.9097 11.3601V11.36H16.9096L15.2202 8.41028C14.8205 7.71237 14.6206 7.36341 14.3668 7.23379C14.0926 7.09372 13.7676 7.09396 13.4936 7.23443C13.24 7.36443 13.0406 7.71367 12.6419 8.41216L5.31668 21.2451L5.31654 21.2454H5.31653C4.92364 21.9337 4.72719 22.2778 4.74308 22.5601C4.76026 22.8652 4.92219 23.1437 5.17891 23.3097C5.41645 23.4634 5.81309 23.4634 6.60636 23.4634ZM18.0094 23.4632H21.8884C22.69 23.4632 23.0909 23.4632 23.3292 23.308C23.5868 23.1404 23.7481 22.8594 23.7631 22.5526C23.7769 22.2688 23.5747 21.923 23.1703 21.2314L21.2276 17.9095L21.2275 17.9093C20.8289 17.2276 20.6295 16.8867 20.3775 16.7593C20.1052 16.6216 19.7834 16.6218 19.5112 16.7599C19.2594 16.8877 19.0605 17.229 18.6628 17.9113L16.7265 21.2333C16.3236 21.9244 16.1222 22.27 16.1363 22.5536C16.1515 22.8602 16.313 23.1408 16.5705 23.3082C16.8087 23.4632 17.209 23.4632 18.0094 23.4632Z", fill: "#181B1D" })));
};

var Icon$9 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ width: "47", height: "26", viewBox: "0 0 37 26" }, props),
        React__default['default'].createElement("g", { filter: "url(#filter0_d11122211)" },
            React__default['default'].createElement("path", { d: "M16.7284 9.65805L11.0715 4.0012M11.0715 4.0012L5.41466 9.65805M11.0715 4.0012V18.1433", stroke: "white", strokeWidth: "2", strokeLinecap: "round" })),
        React__default['default'].createElement("g", { filter: "url(#filter1_d9090909090)" },
            React__default['default'].createElement("path", { d: "M20.4142 12.4884L26.0711 18.1453M26.0711 18.1453L31.7279 12.4884M26.0711 18.1453V4.00315", stroke: "white", strokeWidth: "2", strokeLinecap: "round" })),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("filter", { id: "filter0_d11122211", x: "0.414062", y: "0.587891", width: "21.3137", height: "24.5563", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default['default'].createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default['default'].createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React__default['default'].createElement("feOffset", { dy: "2" }),
                React__default['default'].createElement("feGaussianBlur", { stdDeviation: "2" }),
                React__default['default'].createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React__default['default'].createElement("filter", { id: "filter1_d9090909090", x: "15.4141", y: "1.00391", width: "21.3137", height: "24.5563", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default['default'].createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default['default'].createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React__default['default'].createElement("feOffset", { dy: "2" }),
                React__default['default'].createElement("feGaussianBlur", { stdDeviation: "2" }),
                React__default['default'].createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default['default'].createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })))));
};

var Icon$8 = function (props) {
    return (React__default['default'].createElement("svg", __assign({ width: "22px", viewBox: "0 0 22 22" }, props),
        React__default['default'].createElement("path", { d: "M12.4703 5.25911C12.1859 5.55367 11.7248 5.55367 11.4404 5.25911C11.156 4.96454 11.156 4.48695 11.4404 4.19238L12.4835 3.11212C14.1188 1.41836 16.7702 1.41836 18.4056 3.11212C20.0409 4.80588 20.0409 7.552 18.4056 9.24577L14.2859 13.5127C12.6505 15.2064 9.99905 15.2064 8.3637 13.5127C8.07929 13.2181 8.07929 12.7405 8.3637 12.4459C8.6481 12.1513 9.10919 12.1513 9.3936 12.4459C10.4601 13.5505 12.1893 13.5505 13.2559 12.4459L17.3757 8.17901C18.4422 7.07441 18.4422 5.28346 17.3757 4.17884C16.3091 3.07422 14.5799 3.07422 13.5134 4.17884L12.4703 5.25911Z", fill: "white" }),
        React__default['default'].createElement("path", { d: "M9.20078 16.6489C9.48519 16.3543 9.94635 16.3543 10.2308 16.6489C10.5152 16.9434 10.5152 17.421 10.2308 17.7156L9.18773 18.7958C7.55236 20.4896 4.90093 20.4896 3.26558 18.7958C1.63022 17.1021 1.63022 14.3559 3.26558 12.6622L7.38533 8.39534C9.02068 6.70155 11.6721 6.70156 13.3075 8.39534C13.5919 8.6899 13.5919 9.16746 13.3075 9.46202C13.0231 9.75659 12.5619 9.75659 12.2775 9.46202C11.211 8.35739 9.48177 8.35739 8.41523 9.46202L4.29551 13.7289C3.22898 14.8336 3.22898 16.6245 4.29551 17.7292C5.36205 18.8337 7.09125 18.8337 8.15775 17.7292L9.20078 16.6489Z", fill: "white" })));
};

var Icon$7 = function (props) {
    return (React__default['default'].createElement("svg", __assign({ width: "29", height: "29", viewBox: "0 0 29 29", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React__default['default'].createElement("rect", { width: "29", height: "29", rx: "7", fill: "url(#paint0_linear)" }),
        React__default['default'].createElement("rect", { width: "29", height: "28", fill: "url(#pattern0)" }),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("pattern", { id: "pattern0", patternContentUnits: "objectBoundingBox", width: "1", height: "1" },
                React__default['default'].createElement("use", { href: "#image0", transform: "translate(-0.448276 -0.0467986) scale(0.00167169)" })),
            React__default['default'].createElement("linearGradient", { id: "paint0_linear", x1: "14.5", y1: "-4.64", x2: "14.5", y2: "29", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#4CEE3E" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#3FBF35" })),
            React__default['default'].createElement("image", { id: "image0", width: "1052", height: "611", href: "data:image/png;base64,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" }))));
};

var Icon$6 = function (props) {
    return (React__default['default'].createElement("svg", { width: "24", height: "25", viewBox: "0 0 24 25", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React__default['default'].createElement("path", { d: "M16.0005 17.0096V10.9996C16.0005 10.4496 15.5505 9.99956 15.0005 9.99956C14.4505 9.99956 14.0005 10.4496 14.0005 10.9996V17.0096H12.2105C11.7605 17.0096 11.5405 17.5496 11.8605 17.8596L14.6505 20.6396C14.8505 20.8296 15.1605 20.8296 15.3605 20.6396L18.1505 17.8596C18.4705 17.5496 18.2405 17.0096 17.8005 17.0096H16.0005ZM8.65052 3.34956L5.86052 6.13956C5.54052 6.44956 5.76052 6.98956 6.21052 6.98956H8.00052V12.9996C8.00052 13.5496 8.45052 13.9996 9.00052 13.9996C9.55052 13.9996 10.0005 13.5496 10.0005 12.9996V6.98956H11.7905C12.2405 6.98956 12.4605 6.44956 12.1405 6.13956L9.35052 3.34956C9.25693 3.25818 9.13132 3.20703 9.00052 3.20703C8.86972 3.20703 8.74411 3.25818 8.65052 3.34956Z", fill: "white" })));
};

var Icon$5 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ width: "24", height: "24", viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z", fill: "#4BE43E" }),
        React__default['default'].createElement("path", { d: "M6.25 7.72H11.25V9.22H6.25V7.72ZM13 15.75H18V17.25H13V15.75ZM13 13.25H18V14.75H13V13.25ZM8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8V18ZM14.09 10.95L15.5 9.54L16.91 10.95L17.97 9.89L16.56 8.47L17.97 7.06L16.91 6L15.5 7.41L14.09 6L13.03 7.06L14.44 8.47L13.03 9.89L14.09 10.95Z", fill: "#4BE43E" })));
};

var Icon$4 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" })));
};

var Icon$3 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M18 13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" })));
};

var Icon$2 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z" })));
};

var Icon$1 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.5523 0.447715 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.5523 18 24 17.5523 24 17V16.43ZM16.24 13.65C15.07 13.13 13.63 12.75 12 12.75C10.37 12.75 8.93 13.14 7.76 13.65C6.68 14.13 6 15.21 6 16.39V17C6 17.5523 6.44772 18 7 18H17C17.5523 18 18 17.5523 18 17V16.39C18 15.21 17.32 14.13 16.24 13.65ZM8.07 16C8.16 15.77 8.2 15.61 8.98 15.31C9.95 14.93 10.97 14.75 12 14.75C13.03 14.75 14.05 14.93 15.02 15.31C15.79 15.61 15.83 15.77 15.93 16H8.07ZM12 8C12.55 8 13 8.45 13 9C13 9.55 12.55 10 12 10C11.45 10 11 9.55 11 9C11 8.45 11.45 8 12 8ZM12 6C10.34 6 9 7.34 9 9C9 10.66 10.34 12 12 12C13.66 12 15 10.66 15 9C15 7.34 13.66 6 12 6Z" })));
};

var scales$5 = {
    MD: "md",
    SM: "sm",
    XS: "xs",
};
var variants$2 = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    TERTIARY: "tertiary",
    TEXT: "text",
    DANGER: "danger",
    SUBTLE: "subtle",
    SUCCESS: "success",
    GREEN: "green",
    PINK: "pink",
    OPTION: "option",
    YELLOW: "yellow",
    GRAY: "gray",
    WHITE: "white",
};

var _a$4, _b$1;
var scaleVariants$1 = (_a$4 = {},
    _a$4[scales$5.MD] = {
        height: "50px",
        padding: "0 24px",
        fontSize: "15px",
        lineHeight: "20px",
    },
    _a$4[scales$5.SM] = {
        height: "32px",
        padding: "0 16px",
        fontSize: "13px",
        lineHeight: "16px",
        borderRadius: "7px",
    },
    _a$4[scales$5.XS] = {
        height: "20px",
        fontSize: "12px",
        padding: "0 8px",
    },
    _a$4);
var styleVariants$1 = (_b$1 = {},
    _b$1[variants$2.PRIMARY] = {
        backgroundColor: "primary",
        color: "white",
    },
    _b$1[variants$2.SECONDARY] = {
        backgroundColor: "transparent",
        border: "1px solid #4BE43E",
        boxShadow: "none",
        borderRadius: 10,
        color: "#4BE43E",
        ":disabled": {
            backgroundColor: "transparent",
        },
    },
    _b$1[variants$2.TERTIARY] = {
        backgroundColor: "tertiary",
        boxShadow: "none",
        color: "primary",
    },
    _b$1[variants$2.SUBTLE] = {
        backgroundColor: "textSubtle",
        color: "white",
    },
    _b$1[variants$2.DANGER] = {
        backgroundColor: "failure",
        color: "white",
    },
    _b$1[variants$2.SUCCESS] = {
        backgroundColor: "success",
        color: "white",
    },
    _b$1[variants$2.TEXT] = {
        backgroundColor: "transparent",
        color: "primary",
        boxShadow: "none",
    },
    _b$1[variants$2.GREEN] = {
        background: "linear-gradient(180deg, #4CEE3E -16%, #47DA3B 100%)",
        color: "#fff",
        boxShadow: "none",
    },
    _b$1[variants$2.PINK] = {
        backgroundColor: "#FF6161",
        color: "#fff",
        boxShadow: "none",
    },
    _b$1[variants$2.OPTION] = {
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        color: "#fff",
        boxShadow: "none",
    },
    _b$1[variants$2.YELLOW] = {
        background: " linear-gradient(180deg, #FFB001 -16%, #FFA201 100%)",
        color: "#fff",
        boxShadow: "none",
    },
    _b$1[variants$2.GRAY] = {
        background: "linear-gradient(180deg, #8A92B2 0%, #62688F 100%)",
        color: "#fff",
        boxShadow: "none",
    },
    _b$1[variants$2.WHITE] = {
        background: "#fff",
        color: "#4BE43E",
        boxShadow: "none",
    },
    _b$1);

var getDisabledStyles = function (_a) {
    var isLoading = _a.isLoading, theme = _a.theme;
    if (isLoading === true) {
        return "\n      &:disabled,\n      &.pancake-button--disabled {\n        cursor: not-allowed;\n      }\n    ";
    }
    return "\n    &:disabled,\n    &.pancake-button--disabled {\n      box-shadow: none;\n      opacity:.2;\n      color: " + theme.colors.text + ";\n      cursor: not-allowed;\n    }\n  ";
};
var getOpacity = function (_a) {
    var _b = _a.$isLoading, $isLoading = _b === void 0 ? false : _b;
    return $isLoading ? ".5" : "1";
};
var StyledButton$5 = styled__default['default'].button(templateObject_1$2f || (templateObject_1$2f = __makeTemplateObject(["\n  align-items: center;\n  border: 0;\n  border-radius: 12px;\n  box-shadow: 0px -1px 0px 0px rgba(14, 14, 44, 0.4) inset;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  letter-spacing: 0.03em;\n  line-height: 1;\n  opacity: ", ";\n  outline: 0;\n  transition: 0.2s;\n  &.withGreenBorder {\n    display: flex;\n    width: 100%;\n    border: 1.5px solid ", ";\n    background: linear-gradient(180deg, rgba(76, 238, 62, 0.15) -16%, rgba(71, 218, 59, 0.15) 100%);\n    color: ", ";\n    text-shadow: ", ";\n  }\n  &.withRedBorder {\n    border: 1.5px solid #ff6161;\n    background: none;\n    color: ", ";\n    text-shadow: ", ";\n  }\n  &:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {\n    box-shadow: ", ";\n  }\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  align-items: center;\n  border: 0;\n  border-radius: 12px;\n  box-shadow: 0px -1px 0px 0px rgba(14, 14, 44, 0.4) inset;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  letter-spacing: 0.03em;\n  line-height: 1;\n  opacity: ", ";\n  outline: 0;\n  transition: 0.2s;\n  &.withGreenBorder {\n    display: flex;\n    width: 100%;\n    border: 1.5px solid ", ";\n    background: linear-gradient(180deg, rgba(76, 238, 62, 0.15) -16%, rgba(71, 218, 59, 0.15) 100%);\n    color: ", ";\n    text-shadow: ", ";\n  }\n  &.withRedBorder {\n    border: 1.5px solid #ff6161;\n    background: none;\n    color: ", ";\n    text-shadow: ", ";\n  }\n  &:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {\n    box-shadow: ", ";\n  }\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), getOpacity, function (_a) {
    var theme = _a.theme;
    return theme.colors.greenText;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.greenText;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow5;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.greenText;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow5;
}, function (_a) {
    var variant = _a.variant;
    return variant === "green"
        ? "0px 0px 29px #2CB021"
        : variant === "pink"
            ? "0px 0px 20px rgba(255, 97, 97, 0.38)"
            : "none";
}, getDisabledStyles, styledSystem.variant({
    prop: "scale",
    variants: scaleVariants$1,
}), styledSystem.variant({
    variants: styleVariants$1,
}), styledSystem.layout, styledSystem.space, styledSystem.typography);
var templateObject_1$2f;

var Button$9 = function (props) {
    var startIcon = props.startIcon, endIcon = props.endIcon; props.external; var className = props.className, isLoading = props.isLoading, disabled = props.disabled, children = props.children, rest = __rest(props, ["startIcon", "endIcon", "external", "className", "isLoading", "disabled", "children"]);
    var isDisabled = isLoading || disabled;
    var classNames = className ? [className] : [];
    if (isLoading) {
        classNames.push("pancake-button--loading");
    }
    if (isDisabled && !isLoading) {
        classNames.push("pancake-button--disabled");
    }
    return (React__default['default'].createElement(StyledButton$5, __assign({ "$isLoading": isLoading, className: classNames.join(" "), disabled: isDisabled }, rest),
        React__default['default'].createElement(React__default['default'].Fragment, null,
            React.isValidElement(startIcon) &&
                React.cloneElement(startIcon, {
                    mr: "0.5rem",
                }),
            children,
            props.spin ? React__default['default'].createElement(Icon$v, { spin: true, fill: "rgba(0,0,0,0)" }) : null,
            React.isValidElement(endIcon) &&
                React.cloneElement(endIcon, {
                    ml: "0.5rem",
                }))));
};
Button$9.defaultProps = {
    isLoading: false,
    external: false,
    variant: variants$2.PRIMARY,
    scale: scales$5.MD,
    disabled: false,
};

var IconButton = styled__default['default'](Button$9)(templateObject_1$2e || (templateObject_1$2e = __makeTemplateObject(["\n  padding: 0;\n  width: ", ";\n"], ["\n  padding: 0;\n  width: ", ";\n"])), function (_a) {
    var scale = _a.scale;
    return (scale === "sm" ? "32px" : "48px");
});
var templateObject_1$2e;

var getColor$3 = function (_a) {
    var color = _a.color, theme = _a.theme;
    return getThemeValue("colors." + color, color)(theme);
};
function MyTimer$3(_a) {
    var expiryTimestamp = _a.expiryTimestamp, color = _a.color, disabled = _a.disabled;
    var hours = Math.floor(expiryTimestamp / 3600);
    var minutes = Math.floor((expiryTimestamp - hours * 3600) / 60);
    var seconds = expiryTimestamp - hours * 3600 - minutes * 60;
    var handleDigit = function (value) {
        var leftDigit = value >= 10 ? value.toString()[0] : "0";
        var rightDigit = value >= 10 ? value.toString()[1] : value.toString();
        return { leftDigit: leftDigit, rightDigit: rightDigit };
    };
    var timeArray = [hours, minutes, seconds];
    return (React__default['default'].createElement(Wrap$x, null,
        React__default['default'].createElement(Block$c, { color: color, disabled: disabled }, timeArray.map(function (item, i) { return (React__default['default'].createElement(React__default['default'].Fragment, { key: "item-" + i },
            handleDigit(item).leftDigit,
            handleDigit(item).rightDigit,
            i === 2 ? null : React__default['default'].createElement(Dots$1, null, ":"))); }))));
}
[React__default['default'].createElement(Icon$v, { spin: true, fill: "none" }), React__default['default'].createElement(Icon$v, { spin: true, fill: "none" }), React__default['default'].createElement(Icon$v, { spin: true, fill: "none" })];
var Timer$2 = function (_a) {
    var time = _a.time, color = _a.color; _a.isLoad; var disabled = _a.disabled;
    return (React__default['default'].createElement("div", null,
        React__default['default'].createElement(MyTimer$3, { expiryTimestamp: time || 0, color: color || "text", disabled: disabled })));
};
var Wrap$x = styled__default['default'].div(templateObject_1$2d || (templateObject_1$2d = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n"], ["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n"])));
var Block$c = styled__default['default'].div(templateObject_2$1N || (templateObject_2$1N = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 186px;\n  height: 50px;\n  padding: 0 20px;\n  background: ", ";\n  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 12px;\n  color: ", ";\n  font-weight: 500;\n  font-size: 15px;\n  letter-spacing: 0.05em;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 186px;\n  height: 50px;\n  padding: 0 20px;\n  background: ", ";\n  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 12px;\n  color: ", ";\n  font-weight: 500;\n  font-size: 15px;\n  letter-spacing: 0.05em;\n"])), function (_a) {
    var theme = _a.theme;
    return polished.transparentize(0.75, theme.colors.invertedContrast);
}, function (_a) {
    var theme = _a.theme, disabled = _a.disabled;
    return (disabled ? polished.transparentize(0.5, theme.colors.text) : getColor$3);
});
var Dots$1 = styled__default['default'].div(templateObject_3$1r || (templateObject_3$1r = __makeTemplateObject(["\n  margin: 0 12px;\n  color: ", ";\n"], ["\n  margin: 0 12px;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
var templateObject_1$2d, templateObject_2$1N, templateObject_3$1r;

var BG_IMG = "c57e1f5529884760.png";

var Metamask = "data:image/png;base64,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";

var TrustWallet = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAeCAYAAAAy2w7YAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOuSURBVHgBzZZdbBRVFMfPuTOl23YXipBStfqgaKJUHzDwYHywiYkmxESL3Qc1RnxRi1uqtsboQ60JRpMGV7spiaKxMb5su8VgNMGopAYICQGWB0hIeOgDH2n5XDo7s8zOvYcz27szpZSyZSHhn+zcO/eee373nHtmdgDuVSUydkvX704bLFJYsSURdmWsLon4NS+KINCO2mj084EXcaqS5bcEEQO6/7A3eC58gUjPzJk+QwTJOkHDA+2xqYpAnWmr2VS0smiiEJIawcS1AvEpBr3E0w+EZLjEwGME+NwsPx4B/M3Oxnn+qKfkJRMMh6OWg/HY8QDUmc6tFqZxkI0a4eah5RXh9iVWceu3bzfmEmP2OwDqE3bxOCwkpXpTHUsHhN8XBqyfF4J4lQEHuLNZRuRDQx3R3uSm5ZeRQ0ptbPhpUkafFAJe4PldbG3NC0Kx3m/MElQKl2FaYlAg7AcPTp2FukMjcXRutlmek9z86//6+vaY59asazVqzQfR8+6TgD9w6iKE5AYgRFHwk1+Cgvw/1R4bhUWqv7/N4yarf7A5nUuBYUQEcVb87fuXq860XV5gglkHd0BomDV+qxCLAaihITZdNpCgauGOiEp+lOeGEXlFmStPc6gRqFI9u6mh7FsYNSEII0ZQMYSqHqqUYxVWlvtcoHYAMsm1QzOMQpUicJvCO+NCAFqWzfoRKW3WAlUKpRE8k4hwOgDNlCae0aBHoEoZgpaX+0TeZADSIyf0Hu6HKqVQPFH2CjW1Yeq0JnS7qmeMmqAKISn9lqeLK2JLJq4HIR7WvWWudFZDFSKENaUWxIn+NizMAdG+wFCoDrhNfTg6zRAsnTO/6/aWxwNQqj16lP/ETs7sBF57fg+ZcBsqIn6mfZCUxl83gPQOftHdltYL1mBHmgxYhD4Yzb3Jzev6dvf2eN34vKBILJpkWnaGiu81CWs8sbPwKNxC3TupMTFmfceFPQwz4VwBNLfAdUHMUdcu+2Hlyn8Y9Jgecvj8hgvkbt2xccWp2bZ9ROL8iPUumtjHzlfpYalQvT/UvvTHBUG+ev+kZsfJf8+zYVEQXOTLtpydT/76VnM+kclv4GfvK66wp2fZHOEcbfLPe67PBb+CtmTy6/iVkeSzezb0BRMIeIR7r4ZjNMVjn07Kid9G4q3ufL4q+q7j/L+hiL5EXbazlnNaYZst6r/5+RWcXshHxR+QnempZsOo7+GIPvLXcRT/kcSPh+LRLNwNdWfyaxOj+ZfhXtU1k1hmPhDWXrwAAAAASUVORK5CYII=";

var MathWallet = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAATCAYAAAD4f6+NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMnSURBVHgB7ZVfSFNRHMfv3eYm1ZCZDSwoCywMoYdWMIJqajrRCPsjJoZJEFgUIkYQvgwrQtiDYb1FKf1Bn+YwnDoxhqzyIYJegsjsr9hDkJDpmrt9TtwrS2/brbfAH/z4nfO9v3N+39/vd865krQi/5nIRh1DoVCuLMvtqDWRSDR5vd6pVP6Dg4PnMeX4d5eWlj6QDIrFqKPJZGrB1IkxQd5hLvzJNxKJrJubm+tQp7tRw4RMRh2pymdtDKHJVL7z8/MxzIw6nZb+QlK2bGBgIM9sNt9h6ITQWYvFkoVNMP+KdkPsYywWO15RUfFW+A8NDTVjmsH7sH6sJx6PP8FeY74d7SgrK7ueKmbKCkGgHLMPLaBljSUlJQHOQ5D5FXSjoihum812JGlJG7oB/MzCwoIJ/1sklAehSnQLeklKIynPEJtFyVBhKBPkUTAYXCVwsB7I7mH4BQ1p/vhECOrFTlKJ1+FweO3s7OzTzMxMcQFywW9LaUS3ZcPDw+foTBGELpLpd6wdEvlUqYtNTXyrysjImCHYG+wavreDj0Wj0U632+3i+0sIh9lqF3iXqAxrc4qLi1/Q1ibGLvZt0bupuhVikxY2ES15TqY+lWQT8yxw0coG2lGn4ifAj4EX+Xw+cT7GCZovyPzKWJZrafNJhp/wk8XTgbWQxEOw+0tj654h2Dey6DKLO5NI3sR8QN9TrVYN51CLKy3epxoNg8ArURl12qbh+ChU7xTaSkK6T8Fiy0ZGRjZBpJ6N/FTlm4ZTgTBYDiQqnU7n9MTEhGy329eTYQB8HN/Tmi+VqcL4CXiDdvh5HFeLvcCvgh9kTT1te6b5870GTIFcz7IKQWYbRtyCbA0LBAJ2gu5luIO+F7pcrh/V1dUxzk2uwNCjv2UnywcwmwlySMyTEqtECyFauMS/AaxWt0JC1B4ryRgVKoDsVjLuW4IfxneK7B5rWG9vb7bD4fCAj4EvPojiPbNarftJ6q7H44mni7lM+G95KHOnZEBGR0ctkLvX39+/04g/5OrUFuqK7qGm5KJtBWRsltIIh9pGlnncvFWSAaFKYm+HtCL/KD8B1wF1hV4sChMAAAAASUVORK5CYII=";

var TokenPocket = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGvSURBVHgB7ZRNS0JBFIbfGS8lUbRpEZSClrVq16JltAv31SL6CUW7dv2E+hFqbQOhXUbRok1gECGKFATtxPyotO6cRu3q9ePqTBltfOHe+TpnnnPmnrnAQH0QU7LafAhCiNXGBNncZZ8xIdtnCLrG0exZbxgRQzjr7WTEY9ld8SZ2oCLGrkAfW4jMp51hocwCuHHbyd9IFvGZeIUCCbWsKQ/Bgzj2X9pXOfqq+vGOgVMIGynPH8Ka5IWL7/UHxuy15VBnRGtYjhl6MOq4UQ+D6vwEpgKTejDW1lGUtBfmuDUyGvMj70Dpvr4hYx4Z/WizM0FbLsrY0A6KFKIyrGA1IuXSb1MSkZk5a/DDAumWIWu0hJB9RQ/GVL4ZWcA0suJQH0atHYbuxUIp+VrBaSCnD2Ot0LaBpaLc8gBGeQkR/2ProgFlWf+9Jt4+OE/IqhUg8wn5lziii46VpAHrkAnxC4R951BU72PUvce/gtH300S1stQ4GOgWCGtxEyWtvJVCo2k3XONGlWbe5dZR5IXaQiEODTnDyLyR7+FK13TLTNxDlUtdBvedYJuVMNB/6Qu9r4QNjf96IQAAAABJRU5ErkJggg==";

var WalletConnect = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAARCAYAAAAhUad0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK6SURBVHgBlVVNSFRRFD7n3jdTyEDWImjbItu1aNPMm2IySCiKwJAiUCtsFENoahOUjgW1KDMwbd7YHy4isYUhLaUpciaDsl27VrkJKpGI9P2czlN05r15d2Y8cHnvfud733fvuT8PoUrsNahuM9gnAKEDCBIqHgFME8FYoVMbq6aJlZK6YcYBxAOW3AO1BsE3h5yTha7wnIoiVIl4xrxGgO82ZOgGwk4hxGfdsK+rKUGGhplmw76A1BuH4IWQ8jvY8ENosMW2zAYeezMiNJaL45X3STngx7UgUwfEDnRXaa1PNMsmqUJ3KB9An+Y2EjWWdgvSJgGpoagDkSB95ZrqhvWMH22ENBSe11K5frSgWhChPmo/4fG2c6XS+aTsr8iPPaTtfmzfsHVMxY9naZdSyzAP+7EEV8InYA7wzBajGasVagg9Y/Yyn6IVNouHP2Id17PWYtyw024f9xv2DQeo+DHZp2Y6N42rBHiT9bmlW6cDcRlDyjKyWQuTnvJr3SqC94WD5CkFoRzjWbQpDNOlhisS3HfxIH4sa7Wz4XjR0OVTTDi2bObXuSIIYSY+ihrWuQDDoGMELu43ZsMOJBj1EBG/aGHZJApdOB8Ki0YXKBm+xrfG45hh96gMeaN+LTdeXTN91DrPhlkoPZIIuX+/RCJ3FhfWj0xi8He9WRd5xdkDHi2AHLeDpQYO4GAhKVM8qLtcrsvgjdfcjnoGhPDWWpbNHy/iz1X/kojfXtjqbItMMHgIFEGIQ/kLsmetr2ftWzztq6D8gD5Yy1rTbA8uwvqkfZEYpogZoikgJ1GugDdnkrLXj/KP4R7nLpX7wct8p2zhHJXiZRd+rhv/OPV4hFmTPsM7QYZuzCRDKT463mMjYIr+yla/4YoSVIhYxnrOF/npmq40l2/YfbzGvOlgYgnkmU9JNIN4/wGjLRusiMlpqgAAAABJRU5ErkJggg==";

var BinanceWallet = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAcCAYAAAB2+A+pAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAM3SURBVHgB7ZZNaBNBFMffTGqb7qRN2lpKQbStghdRET1LizVtQbDiZxE8CN4EBUFslRY1ih940bM3D4qiLTbJxo9cPHhQD1qVgqWtB7XUZDehSWlN9jnTsMnutkk2KXjyfwh5k/++3755b2cDUKZmhlkTvoM1UKYolCElyLY5q+FzLCI9LBdeMliR3a2EwjAiNACQ3liE+cqBk1LM0QDbSh0wAggbzL/gU3dD8gjZCX/s5rINFttLKbzKVLqSSoPbAotKHQ54nR+aVRiTaw7U9apqEV/xHotKeU+XQRHwMb/taYu9nUiL9+30nBaDiu3l22KCUgI367zJQ4gV7cvhYuD4tI80S2WDKSX3rJUKaO3exHnxvc4bm1yCA/lmhcer1ZMFcxf60UHxICHwVY9RQ58O1SXg6XSlgE/kuDjg7py/C6VIDUo7lBFnqx4rAU9LLMS+xEPshtHHB+64EnC2ZH38+VZDbCoWki6b8snSqZ9+V2NBaDTI+lSZRTl86tfzqjZ9HcPgMvtcA9yHPOmkET77bG2N0acEXEMZH/tkhZPcnbmOcsQD0LefQERLQ0d9d+KjFUoJXs2t4BTV0l213QvjpkqDzMdz9BuWxubTpKO5Z24WwNhjhA5L3MAB+4zJxh5BJV/rAJNIi4YVJp8S9nh4Jq/Zh5uqHdp6PcqC3NrcaSQwmk3HB8nTlfQZL91yGBYrHNBnHDgxSJ6exG2jr65dVdOpqv25accUID3h8SbfQz4pMrujyNKgaS3IzojTS4/nXrImJSS9UUOScSuX2hAPVG3W44i/fp0adI3z4TwGpUqRXVeWBiTEfosDJZ8vKtfcEr6YLP0wwvk5sOKxTItABwngxUwGaOBH51vF79pt9YlBoqCdy9hIM1JHWBll20XM24Ilg3katzkEJ6nAJ8ZtF5Vaphc0IM40JW2FMhd9O4mec9NZy1UR/tmnIe3UK83dGygpxD2NXckPsBqwUOyFNIgaGSrmswu1DRaKy+yaBnABCkAX06ldTT0LEzbS2f/PVetN9HPz9XxQUaldaElgHU4oDpmh+N3u9q5aoufimeUHzbTxZfJPxF9/l2b8VRvhv2zqL9fsb+jPHrVMAAAAAElFTkSuQmCC";

var SafepackWallet = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAYAAAAVibZIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI2SURBVHgBtZW/ixNREMcnm4UQkRgVzs6TQwtttFIQ1Cs8/AEq+BeoIFf5A0QLKxsbESzksPIXgo2FWAgKyt3ZyBWKIBaHB4mih4WiEUzij+z6GX2bzD13N6dyX/jw3sx7M7tvdvIikqM4jgfgDIxDGybgGFTz4gopibYw7INZKMI5f0+r1dpcLpePM/0MNwqFwiM/SQlGYAw+xj1dhJPG/pZMGo3GJoYXZq0OV2EnhGGn05kuFouD0l8j8Bb2VCqVWW9N4w84noVkXmEWv4Ie5S5ch8M2kmPOMFxwJ8x4tlRDFDnjMewisGFKI/PQG1gDT2CdOgL7ljbh34i4NsP7xA5kAbQgSUMzr1LDYWPXvb0bWE/6esr4F7u45V0PLdWMU9Ruty95fdpVs9n0+9SqFkRR9MevSlUqlSLJEL+m3LbQljrNWHG2HuFIxt5r0ivJO+P/DmeN/WFOFK8+ZI4x5h1/m7c3Of5r8RTg/OIWb8u/KXYPmXR5pm1LLZP/U1LnAU1ac8Z6WOptjKS/9GZbybjV2TOa9JYzlph5X7muqcN+OCW9u/mO1kKbvpbSb/qhTmR9KPp7FN9quGx7FAYDLoNP7Nkr5kKYj4IgeMlwHw451w84SL5Xvz4Uk+cMG6VX326sn4w32QHjTB/CkHPri20nz8ScIByaUO/D85Ihkt1kuAfDxv0A1hI/KXkieBXspm5HbU3hqbGndE9afJjm5Kl1Bv0zWyS//zFH3ZLWUUt1Je/NfgJIntVigmdBzQAAAABJRU5ErkJggg==";

var BNB2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAeCAYAAADQBxWhAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAR3SURBVHgBlVfNilxVEP7qOokTkzidCLpR7AnuhHRHJCIRnXajrsQnSLtUF8k8wfS8gDNZuslMcOMuiGhAJDMhoKswd0giCkoG3ChqpsEfoklupc6p81Pndk8gp7l9z299Vd+pqnMuwRTeQAcNzkh1CEZXe8mNmFmxTaHK+vYCzBh8fy2vGo9hmQbYsRJ0/jc4LRNWpdoxUlDW20pQCdoufrkfHOM+L9PbXr5O56+9date0wKDdRG3FCAujW8RUI4ZRoRBegsXiC8JjRVtSWenVNlISBozHqlwAmXPPYnF/2J+RnqXxPROa2a2KAFzFlLMo2C5fSfLIisUFO9gls/M4D76ZmdLerilRFupuDDO49iOgILYgNIatWFI/IXXw7AZPc+gs6lTSzBg9pMMOCuoaxR6Eirf0YRF8e3rrO0mAoiA2D/bBV7dAA50FaBBViTO9/3yZ2UGjCmgnAU1wUoFU41n5wXwMvDUAvD6FnC4l+e25TSU2wa8kj3FBHC0MoJHYGfZKQF8oquW7RP/OyUWH+67OZyEgzJwlG8MqVSgfSYs1IWOUgcQAe+OM/CbYvFzp6nYmliHpVeTSaU02CeApf2RZ66ngiPgeBu4dAz46RxSeWlNgIctxqDyLHtNdKSCRs5WxvqTfbXIld83gSsD4P9dYOss8P1yBvaOhUxpQ1n55C+MGd2DGBpcBvbBYNmtdeA/ofPpBaA+q31HRJHdGrgxyjTelPr+jjLi2HAjHIKZkLyc+LNWIo3x5gAHl7VvQyz7ZyfP6Q6BV4TOm2Ll9VGO0/1HZBtk3w8+r2t2twXUp78igVWJhsLl5e/keQV2z8m1PD7XV0BXXlxS6+O6EytyRvWCV18sYjM7kgNt2Oyj8eDv3lfr3OPqcdFtoe162Mcb8v51Mwu/tqiUO8+++p7srYttMj6jChB/Spw4j7mQw/tQV/v+FuBD88Cz7wI/rOrYM28Av20q+LGhAv3yOfD4nLJzu0Y6DFDSO5OTNSbLXzs6eLRPWLiowpyjbAcLXemNgONLWv9WGPn5AnCnDvqbSDBnc1Wku+TWsLFL6PSzJzuAlz/WDHTcALri5thsFkMwHgIhZIjX7Hn2kIP6hSHw2lpuu7092svtelkfy+MeMonP74ViFyHQ3CO8s6EU2+LAtkZmKWmoTJfLVenOVFKdTgtfJ/wpe/XVQLLROMu4Kvt4bVRS2kzx2hw6pAnfxymnjJHDCK19Fgv+EOAvB+rRVwTwx/XpJ1TDk3k4hcwnuCU2dCdYSMxOuUG4l8s+Lv9m2kIaDRcrzt6awkbn1ZX8rxcZqaXVxA0iUnZn3DpJ0ljriONyu8A18Ypcrg+ItSxvDhoTT7GaTMMwkJzGJBUH63NumBNZa+QKWuFERYvu9o3FdI4Ce1jN1hrLAAXnMedwuI+6n3VMks+LD7BTeZ0/EoqZF2VwnJwmnakoPbu4B025S2VqKd2rGh77q+eH5rMisbgiDrVPLt8sd2H37PnxZLtsmouCwrxKPppYDLqHc57RUB4ADALNWnJ73UMAAAAASUVORK5CYII=";

var Winner = "data:image/png;base64,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";

var WINNER2 = "81b61168ca96adcf.png";

var AccountIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUESURBVHgBrVfNbxw1FP/ZO/udD1KEWioBqZKmoQUpoUAPXJIjLVLChQMgISSOSIg/AakHVCFxQIIDh/JxQ0iEU0/QIFS+Ll0hVAWSoEWoVUnSZrfZzX7NjHn2jGc9npkG0Vra9dh+H7/3/Oz3zJDSZqenF3whXmOcL0CISdxbqwkhatR//cfm5oq9yGKKZ2cnhetepM+FiIANSUgQ/k/TMoTv15nnLa7V6/UEgJPHj895Qlymzwdwn1qk2ABOXw3B2OL6+notAhBaftVWzgKGAwVzGgv8dw9JENx156UnuJrwvFTLs8RJRZZVCeUSJEN8C6M10iUc56L6npmaWiairyyChHItUBggzLU06/W83Rt6Fjk4X7IZhQVGM/pSyAHKNdCYvHDdBilPGmdCzCHD2nAQm/fjFmRarhWmbYHmpd+CQ/2cbYVmZMYYacqk8HDOVCoOAKjoAqZJbgrORGvN28BsGRF9hjyz8SylmVYbgpPAWOyE2IalnQqe5npjwhCOSFjqvktyxIMxmteAkDTISQiqMhw9/6AMUXh3fHhNH+0fu5h4aUT6S9G0r3TR/LKNiZerKJ0uYvezPTiHHYw/X4G764GPcLS+7SD/iIPCMQe8yJQttz5qorfhxj1gA/BbPv55dxd8lKNMwpsrbXR/6yvK0pN5tH/o4M6lNjgBPfTGGMqnCqg8UyJQHWx/0ETpZIHufIHW9x0FovxEEc6RnFI+uOkljik33aWbR4Q7HzbBywxjZFWOLMofddD9tY/mF22INlB+ugjRE+jXBxhfqsBvC/Q2B2j/1EX1TAnF6TxGniuDlYDbn7eU5X5LxE5JBCBxsVDfudpHt9bH2NkKJl4dBa8wbF9oRvs4vlxV9A0JqC9Qniuq8e2P99TWPfTmOEbPltH/y8Xepf2sKzn0gPzg4W4Y8Lbeb6q9G3uhQopayoWy5R92UDqVR4tiYf+XHjyybOKVEaXEoy2UMZF/1EGOtvHmO7swjYyldxgxMIzUIYLBdVd5Qrb2lV5EI/ecOQyFxxwcOX8InNxcfqpIcRHw7X3TASsw9G8MMPjbTdQU5gnhGknWjcUL4Q3XH14yY+fKtOc+bry9g+tv7WDrvSa8Wx5Gz1WHivrJS8p2v/KAuTPRLWYg9kmQv0ekThBA5dMFFGfyAX0hcKC/L5RHxl+skneKIXI5j0Ri0veIhuRAHwsTpc56gNr7/OEc1QyhXNrXrQuNgD4fCs0xipcGHDotGJDwjlBHsjJfhJafdbMyKkBFLHmY3gjHlWcL6P3pwt32kOVK0zrdKmeK2P+5l6CL8T8+MyPSkkpWk+WXLxlDN6bVfcgAZM/Lnvu+HyWQu2VF8wbTNWAaaGYmqqxUbBQ2MhvWdfCZqdQe68ARwSBaE8a3CYYZINMMCtdqMoxXFZOwLNIeSbHODKgoqs16AOm1gtk443K+Jv8/DRANlUoRzCrFYsCgSyqWXnZZnmEp9YOUQqMVNXNievoyjNeQqThiEjJD+8iikbEUUyLBWrWh2UOw+u+b68eCXOA4r1PXsIWrSpgEq1+a8rCX67FY0fGSUh2FfYN5g0X5oQCsra3Vc/RcSgNhWmpaHDolmrtbdWy1htSl34dRMrpGbzXyxDxx1U1FdrSnvQnsgjRSa9DyAMwqoyfZtfBdqHjSIJ6Ymlqip/kysc8hfDdk3WS2xWZQiiAO6vQqXvUZ+2RjY+M7m+dfyVDtXfJvT4gAAAAASUVORK5CYII=";

var ComingSoonIcon = "84fff8c4a2a6fbf1.png";

var GhostsIcon = "data:image/png;base64,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";

var OneGhost = "data:image/png;base64,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";

var Coin98 = "data:image/png;base64,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";

var Gift = "2f57cf93166c1de2.png";

var Gift2 = "data:image/png;base64,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";

var Gift3 = "data:image/png;base64,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";

var CONTROLLER = "data:image/png;base64,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";

var AVATAR_PLAYER = "data:image/png;base64,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";

var AVATAR_PLAYER_2 = "data:image/png;base64,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";

var UNIT = "data:image/png;base64,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";

var YAY_TOKEN_GREEN = "data:image/png;base64,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";

var WrapOpacity$1 = styled__default['default'].div(templateObject_1$2c || (templateObject_1$2c = __makeTemplateObject(["\n  width: 308px;\n  opacity: ", ";\n  transition: 0.3s;\n  margin: 0 auto;\n  &:hover {\n    opacity: 1;\n    transition: 0.3s;\n  }\n  ", " {\n    width: 335px;\n  }\n"], ["\n  width: 308px;\n  opacity: ", ";\n  transition: 0.3s;\n  margin: 0 auto;\n  &:hover {\n    opacity: 1;\n    transition: 0.3s;\n  }\n  ", " {\n    width: 335px;\n  }\n"])), function (_a) {
    var live = _a.live;
    return (live ? "1" : "0.5");
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Wrap$w = styled__default['default'].div(templateObject_2$1M || (templateObject_2$1M = __makeTemplateObject(["\n  width: 278px;\n  margin: 0 auto;\n  ", " {\n    width: 308px;\n  }\n"], ["\n  width: 278px;\n  margin: 0 auto;\n  ", " {\n    width: 308px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var TopContent$4 = styled__default['default'].div(templateObject_3$1q || (templateObject_3$1q = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-left: -11px;\n  margin-right: -11px;\n  ", " {\n    margin-left: 0;\n    margin-right: 0;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-left: -11px;\n  margin-right: -11px;\n  ", " {\n    margin-left: 0;\n    margin-right: 0;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var LeftContent$3 = styled__default['default'].div(templateObject_4$17 || (templateObject_4$17 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 50px;\n  height: 50px;\n  background: ", ";\n  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 12px;\n  font-weight: 500;\n  font-size: 9px;\n  color: ", ";\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 50px;\n  height: 50px;\n  background: ", ";\n  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 12px;\n  font-weight: 500;\n  font-size: 9px;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return polished.transparentize(0.75, theme.colors.invertedContrast);
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
var RightContent$4 = styled__default['default'](LeftContent$3)(templateObject_5$M || (templateObject_5$M = __makeTemplateObject(["\n  font-size: 11px;\n"], ["\n  font-size: 11px;\n"])));
var Content$5 = styled__default['default'].div(templateObject_6$C || (templateObject_6$C = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 28px;\n  background: ", ";\n  border-radius: 15px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 28px;\n  background: ", ";\n  border-radius: 15px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.bgCard;
});
var UpContent$1 = styled__default['default'].div(templateObject_7$l || (templateObject_7$l = __makeTemplateObject(["\n  display: ", ";\n  justify-content: ", ";\n  text-align: center;\n  align-items: center;\n  max-height: 50px;\n  height: 100%;\n  width: 100%;\n  padding: 18px 20px 13px;\n  background: ", ";\n  border-top-left-radius: 12px;\n  border-top-right-radius: 12px;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  font-weight: 500;\n  font-size: 15px;\n  line-height: 19px;\n  color: ", ";\n"], ["\n  display: ", ";\n  justify-content: ", ";\n  text-align: center;\n  align-items: center;\n  max-height: 50px;\n  height: 100%;\n  width: 100%;\n  padding: 18px 20px 13px;\n  background: ", ";\n  border-top-left-radius: 12px;\n  border-top-right-radius: 12px;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  font-weight: 500;\n  font-size: 15px;\n  line-height: 19px;\n  color: ", ";\n"])), function (_a) {
    var showUp = _a.showUp;
    return (showUp ? "none" : "flex");
}, function (_a) {
    var displayNone = _a.displayNone;
    return (displayNone ? "center" : "space-between");
}, function (_a) {
    var theme = _a.theme, negative = _a.negative, colorNone = _a.colorNone;
    return negative ? theme.colors.cardBg : colorNone ? "none" : theme.colors.greenText;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
var UpContentWin$1 = styled__default['default'].div(templateObject_8$h || (templateObject_8$h = __makeTemplateObject(["\n  position: relative;\n  display: ", ";\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n"], ["\n  position: relative;\n  display: ", ";\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n"])), function (_a) {
    var show = _a.show;
    return (show ? "flex" : "none");
});
var ButtonBnb$1 = styled__default['default'].div(templateObject_9$d || (templateObject_9$d = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n  & button {\n    border-top-left-radius: 12px;\n    border-top-right-radius: 12px;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n"], ["\n  position: relative;\n  width: 100%;\n  & button {\n    border-top-left-radius: 12px;\n    border-top-right-radius: 12px;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n"])));
var WinnerImg$1 = styled__default['default'].div(templateObject_10$9 || (templateObject_10$9 = __makeTemplateObject(["\n  position: absolute;\n  top: -64px;\n  right: -37px;\n  pointer-events: none;\n  z-index: 3;\n"], ["\n  position: absolute;\n  top: -64px;\n  right: -37px;\n  pointer-events: none;\n  z-index: 3;\n"])));
var RightText$3 = styled__default['default'].div(templateObject_11$8 || (templateObject_11$8 = __makeTemplateObject(["\n  display: ", ";\n  align-items: center;\n  & div.payout {\n    margin-right: 9px;\n    font-weight: normal;\n    color: ", ";\n  }\n"], ["\n  display: ", ";\n  align-items: center;\n  & div.payout {\n    margin-right: 9px;\n    font-weight: normal;\n    color: ", ";\n  }\n"])), function (_a) {
    var displayNone = _a.displayNone;
    return (displayNone ? "none" : "flex");
}, function (_a) {
    var theme = _a.theme;
    return polished.transparentize(0.2, theme.colors.text);
});
var IconComplete$3 = styled__default['default'].div(templateObject_12$7 || (templateObject_12$7 = __makeTemplateObject(["\n  display: ", ";\n  margin-left: 7px;\n"], ["\n  display: ", ";\n  margin-left: 7px;\n"])), function (_a) {
    var showIcon = _a.showIcon;
    return (showIcon ? "flex" : "none");
});
var IconCompleteDown$1 = styled__default['default'].div(templateObject_13$5 || (templateObject_13$5 = __makeTemplateObject(["\n  display: ", ";\n  margin-left: 7px;\n"], ["\n  display: ", ";\n  margin-left: 7px;\n"])), function (_a) {
    var showIcon = _a.showIcon;
    return (showIcon ? "flex" : "none");
});
var MainBlock$3 = styled__default['default'].div(templateObject_14$4 || (templateObject_14$4 = __makeTemplateObject(["\n  position: relative;\n  z-index: 2;\n  padding: 23px 35px 25px 32px;\n  width: 308px;\n  height: 193px;\n  background: #26262d;\n  border: 2px solid\n    ", ";\n  box-sizing: border-box;\n  box-shadow: 0px 4px 22px rgba(0, 0, 0, 0.31);\n  border-radius: 15px;\n  ", " {\n    width: 335px;\n  }\n"], ["\n  position: relative;\n  z-index: 2;\n  padding: 23px 35px 25px 32px;\n  width: 308px;\n  height: 193px;\n  background: #26262d;\n  border: 2px solid\n    ", ";\n  box-sizing: border-box;\n  box-shadow: 0px 4px 22px rgba(0, 0, 0, 0.31);\n  border-radius: 15px;\n  ", " {\n    width: 335px;\n  }\n"])), function (_a) {
    var theme = _a.theme, negative = _a.negative, colorNone = _a.colorNone;
    return (negative ? theme.colors.redBg : colorNone ? "none" : theme.colors.greenText);
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var DownContent$1 = styled__default['default'].div(templateObject_15$3 || (templateObject_15$3 = __makeTemplateObject(["\n  display: flex;\n  justify-content: ", ";\n  max-height: 50px;\n  height: 100%;\n  width: 100%;\n  padding: 13px 20px 18px;\n  background: ", ";\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-left-radius: 12px;\n  border-bottom-right-radius: 12px;\n  font-weight: 500;\n  font-size: 15px;\n  line-height: 19px;\n  color: ", ";\n"], ["\n  display: flex;\n  justify-content: ", ";\n  max-height: 50px;\n  height: 100%;\n  width: 100%;\n  padding: 13px 20px 18px;\n  background: ", ";\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-left-radius: 12px;\n  border-bottom-right-radius: 12px;\n  font-weight: 500;\n  font-size: 15px;\n  line-height: 19px;\n  color: ", ";\n"])), function (_a) {
    var displayNone = _a.displayNone;
    return (displayNone ? "center" : "space-between");
}, function (_a) {
    var theme = _a.theme, negative = _a.negative;
    return (negative ? theme.colors.redBg : theme.colors.bgCard);
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
var Vector = styled__default['default'].p(templateObject_16$3 || (templateObject_16$3 = __makeTemplateObject(["\n  font-size: 15px;\n  line-height: 19px;\n  text-align: center;\n  letter-spacing: 0.05em;\n  color: ", ";\n  opacity: ", ";\n"], ["\n  font-size: 15px;\n  line-height: 19px;\n  text-align: center;\n  letter-spacing: 0.05em;\n  color: ", ";\n  opacity: ", ";\n"])), function (_a) {
    var theme = _a.theme, loader = _a.loader;
    return (loader ? theme.colors.greyText2 : theme.colors.text);
}, function (_a) {
    var hide = _a.hide;
    return (hide ? "0" : "1");
});
var StyledCard = function (_a) {
    var children = _a.children, leftContent = _a.leftContent, rightContent = _a.rightContent, payoutUp = _a.payoutUp, payoutDown = _a.payoutDown, negative = _a.negative, showBtnWinnings = _a.showBtnWinnings, hasEnteredUp = _a.hasEnteredUp, hasEnteredDown = _a.hasEnteredDown, live = _a.live, displayNone = _a.displayNone, colorNone = _a.colorNone, time = _a.time, btnWinnings = _a.btnWinnings, hide = _a.hide, disabledTimer = _a.disabledTimer, texts = _a.texts, loader = _a.loader;
    return (React__default['default'].createElement(WrapOpacity$1, { live: live },
        React__default['default'].createElement(Wrap$w, null,
            React__default['default'].createElement(TopContent$4, null,
                React__default['default'].createElement(LeftContent$3, null, leftContent),
                React__default['default'].createElement(Timer$2, { time: time, color: "#fff", disabled: disabledTimer }),
                React__default['default'].createElement(RightContent$4, null, rightContent)),
            React__default['default'].createElement(Content$5, null,
                React__default['default'].createElement(UpContent$1, { negative: negative, showUp: showBtnWinnings, colorNone: colorNone, displayNone: displayNone },
                    React__default['default'].createElement(Vector, { hide: hide, loader: loader }, (texts === null || texts === void 0 ? void 0 : texts.up) || "UP"),
                    React__default['default'].createElement(RightText$3, { displayNone: displayNone },
                        React__default['default'].createElement("div", { className: "payout" }, (texts === null || texts === void 0 ? void 0 : texts.payout) || "Payout"),
                        React__default['default'].createElement("div", null, payoutUp),
                        React__default['default'].createElement(IconComplete$3, { className: "completeIcon", showIcon: hasEnteredUp },
                            React__default['default'].createElement(Icon$w, { fill: "#FFB72C" })))),
                React__default['default'].createElement(UpContentWin$1, { show: showBtnWinnings },
                    React__default['default'].createElement(ButtonBnb$1, null, btnWinnings),
                    React__default['default'].createElement(WinnerImg$1, null,
                        React__default['default'].createElement("img", { src: Winner }))),
                React__default['default'].createElement(MainBlock$3, { negative: negative, colorNone: colorNone }, children),
                React__default['default'].createElement(DownContent$1, { negative: negative, displayNone: displayNone },
                    React__default['default'].createElement(Vector, { hide: hide, loader: loader, style: { opacity: hide ? "0" : "1" } }, (texts === null || texts === void 0 ? void 0 : texts.down) || "DOWN"),
                    React__default['default'].createElement(RightText$3, { displayNone: displayNone },
                        React__default['default'].createElement("div", { className: "payout" }, (texts === null || texts === void 0 ? void 0 : texts.payout) || "Payout"),
                        React__default['default'].createElement("div", null, payoutDown),
                        React__default['default'].createElement(IconCompleteDown$1, { className: "completeIcon", showIcon: hasEnteredDown },
                            React__default['default'].createElement(Icon$w, { fill: "#FFB72C" }))))))));
};
var templateObject_1$2c, templateObject_2$1M, templateObject_3$1q, templateObject_4$17, templateObject_5$M, templateObject_6$C, templateObject_7$l, templateObject_8$h, templateObject_9$d, templateObject_10$9, templateObject_11$8, templateObject_12$7, templateObject_13$5, templateObject_14$4, templateObject_15$3, templateObject_16$3;

var Card$5 = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return React__default['default'].createElement(StyledCard, __assign({}, props), children);
};

var Wrap$v = styled__default['default'].div(templateObject_1$2b || (templateObject_1$2b = __makeTemplateObject(["\n  font-weight: 500;\n  color: ", ";\n"], ["\n  font-weight: 500;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
var Closed$3 = styled__default['default'].div(templateObject_2$1L || (templateObject_2$1L = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  & div.closed {\n    font-size: 13px;\n    line-height: 16px;\n    letter-spacing: 1px;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  & div.closed {\n    font-size: 13px;\n    line-height: 16px;\n    letter-spacing: 1px;\n  }\n"])));
var ClosedCount$1 = styled__default['default'].div(templateObject_3$1p || (templateObject_3$1p = __makeTemplateObject(["\n  font-size: 17px;\n  line-height: 22px;\n  letter-spacing: 0.5px;\n  color: ", ";\n"], ["\n  font-size: 17px;\n  line-height: 22px;\n  letter-spacing: 0.5px;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme, negative = _a.negative;
    return (negative ? theme.colors.redBg : theme.colors.greenText);
});
var Line$a = styled__default['default'].div(templateObject_4$16 || (templateObject_4$16 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 13px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 13px;\n"])));
var Arrow$4 = styled__default['default'].div(templateObject_5$L || (templateObject_5$L = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  background: ", ";\n  border-radius: 7px;\n  transform: ", ";\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  background: ", ";\n  border-radius: 7px;\n  transform: ", ";\n"])), function (_a) {
    var theme = _a.theme, negative = _a.negative;
    return negative ? polished.transparentize(0.75, theme.colors.redBg) : theme.colors.gradients.greenGradient;
}, function (_a) {
    var negative = _a.negative;
    return (!negative ? "scale(1,-1)" : "none");
});
var LinePrice$1 = styled__default['default'].div(templateObject_6$B || (templateObject_6$B = __makeTemplateObject(["\n  padding: 8px 10px;\n  border-radius: 7px;\n  background: ", ";\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 16px;\n  letter-spacing: 0.05em;\n  color: ", ";\n"], ["\n  padding: 8px 10px;\n  border-radius: 7px;\n  background: ", ";\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 16px;\n  letter-spacing: 0.05em;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme, negative = _a.negative;
    return negative ? polished.transparentize(0.75, theme.colors.redBg) : theme.colors.gradients.greenGradient;
}, function (_a) {
    var theme = _a.theme, negative = _a.negative;
    return (negative ? theme.colors.redBg : theme.colors.greenText);
});
var Info$1 = styled__default['default'].div(templateObject_7$k || (templateObject_7$k = __makeTemplateObject(["\n  margin-top: 35px;\n"], ["\n  margin-top: 35px;\n"])));
var LockedPrice$1 = styled__default['default'].div(templateObject_8$g || (templateObject_8$g = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 13px;\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 16px;\n  letter-spacing: 0.05em;\n  & div {\n    font-weight: 500;\n    font-size: 15px;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 13px;\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 16px;\n  letter-spacing: 0.05em;\n  & div {\n    font-weight: 500;\n    font-size: 15px;\n  }\n"])));
var Prize$1 = styled__default['default'].div(templateObject_9$c || (templateObject_9$c = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 16px;\n  & div {\n    font-size: 15px;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 16px;\n  & div {\n    font-size: 15px;\n  }\n"])));
var ExpiredCardNA = function (_a) {
    var negative = _a.negative, closedCount = _a.closedCount, linePrice = _a.linePrice, lockedPrice = _a.lockedPrice, prize = _a.prize, texts = _a.texts;
    return (React__default['default'].createElement(Wrap$v, null,
        React__default['default'].createElement(Closed$3, null,
            React__default['default'].createElement("div", { className: "closed" }, (texts === null || texts === void 0 ? void 0 : texts.closed) || "Closed Price"),
            React__default['default'].createElement(ClosedCount$1, { negative: negative },
                " ",
                closedCount)),
        React__default['default'].createElement(Line$a, null,
            React__default['default'].createElement(Arrow$4, { negative: negative },
                React__default['default'].createElement(Icon$r, { color: negative ? "#FF6161" : "#4AE43D" })),
            React__default['default'].createElement(LinePrice$1, { negative: negative }, linePrice)),
        React__default['default'].createElement(Info$1, null,
            React__default['default'].createElement(LockedPrice$1, null,
                (texts === null || texts === void 0 ? void 0 : texts.locked) || "Locked Price ADA",
                ": ",
                React__default['default'].createElement("div", null,
                    " ",
                    lockedPrice)),
            React__default['default'].createElement(Prize$1, null,
                (texts === null || texts === void 0 ? void 0 : texts.prize) || "Prize Pool",
                ": ",
                React__default['default'].createElement("div", null,
                    prize,
                    " ")))));
};
var templateObject_1$2b, templateObject_2$1L, templateObject_3$1p, templateObject_4$16, templateObject_5$L, templateObject_6$B, templateObject_7$k, templateObject_8$g, templateObject_9$c;

var Wrap$u = styled__default['default'].div(templateObject_1$2a || (templateObject_1$2a = __makeTemplateObject(["\n  font-weight: 500;\n  color: ", ";\n"], ["\n  font-weight: 500;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
var Closed$2 = styled__default['default'].div(templateObject_2$1K || (templateObject_2$1K = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  & div.closed {\n    font-size: 13px;\n    line-height: 16px;\n    letter-spacing: 1px;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  & div.closed {\n    font-size: 13px;\n    line-height: 16px;\n    letter-spacing: 1px;\n  }\n"])));
var ClosedCount = styled__default['default'].div(templateObject_3$1o || (templateObject_3$1o = __makeTemplateObject(["\n  font-size: 17px;\n  line-height: 22px;\n  letter-spacing: 0.5px;\n  color: ", ";\n"], ["\n  font-size: 17px;\n  line-height: 22px;\n  letter-spacing: 0.5px;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme, negative = _a.negative;
    return (negative ? theme.colors.redBg : theme.colors.greenText);
});
var Line$9 = styled__default['default'].div(templateObject_4$15 || (templateObject_4$15 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 13px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 13px;\n"])));
var Arrow$3 = styled__default['default'].div(templateObject_5$K || (templateObject_5$K = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  background: ", ";\n  border-radius: 7px;\n  transform: ", ";\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  background: ", ";\n  border-radius: 7px;\n  transform: ", ";\n"])), function (_a) {
    var theme = _a.theme, negative = _a.negative;
    return negative ? polished.transparentize(0.75, theme.colors.redBg) : theme.colors.gradients.greenGradient;
}, function (_a) {
    var negative = _a.negative;
    return (!negative ? "scale(1,-1)" : "none");
});
var LinePrice = styled__default['default'].div(templateObject_6$A || (templateObject_6$A = __makeTemplateObject(["\n  padding: 8px 10px;\n  border-radius: 7px;\n  background: ", ";\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 16px;\n  letter-spacing: 0.05em;\n  color: ", ";\n"], ["\n  padding: 8px 10px;\n  border-radius: 7px;\n  background: ", ";\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 16px;\n  letter-spacing: 0.05em;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme, negative = _a.negative;
    return negative ? polished.transparentize(0.75, theme.colors.redBg) : theme.colors.gradients.greenGradient;
}, function (_a) {
    var theme = _a.theme, negative = _a.negative;
    return (negative ? theme.colors.redBg : theme.colors.greenText);
});
var Info = styled__default['default'].div(templateObject_7$j || (templateObject_7$j = __makeTemplateObject(["\n  margin-top: 35px;\n"], ["\n  margin-top: 35px;\n"])));
var LockedPrice = styled__default['default'].div(templateObject_8$f || (templateObject_8$f = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 13px;\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 16px;\n  letter-spacing: 0.05em;\n  & div {\n    font-weight: 500;\n    font-size: 15px;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 13px;\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 16px;\n  letter-spacing: 0.05em;\n  & div {\n    font-weight: 500;\n    font-size: 15px;\n  }\n"])));
var Prize = styled__default['default'].div(templateObject_9$b || (templateObject_9$b = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 16px;\n  & div {\n    font-size: 15px;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 16px;\n  & div {\n    font-size: 15px;\n  }\n"])));
var LiveCard = function (_a) {
    var texts = _a.texts, negative = _a.negative, closedCount = _a.closedCount, linePrice = _a.linePrice, lockedPrice = _a.lockedPrice, prize = _a.prize;
    return (React__default['default'].createElement(Wrap$u, null,
        React__default['default'].createElement(Closed$2, null,
            React__default['default'].createElement("div", { className: "closed" }, (texts === null || texts === void 0 ? void 0 : texts.last) || "LAST PRICE"),
            React__default['default'].createElement(ClosedCount, { negative: negative }, closedCount)),
        React__default['default'].createElement(Line$9, null,
            React__default['default'].createElement(Arrow$3, { negative: negative },
                React__default['default'].createElement(Icon$r, { color: negative ? "#FF6161" : "#4AE43D" })),
            React__default['default'].createElement(LinePrice, { negative: negative }, linePrice)),
        React__default['default'].createElement(Info, null,
            React__default['default'].createElement(LockedPrice, null,
                (texts === null || texts === void 0 ? void 0 : texts.locked) || "Locked Price ADA",
                ": ",
                React__default['default'].createElement("div", null, lockedPrice)),
            React__default['default'].createElement(Prize, null,
                (texts === null || texts === void 0 ? void 0 : texts.prize) || "Prize Pool",
                ": ",
                React__default['default'].createElement("div", null, prize)))));
};
var templateObject_1$2a, templateObject_2$1K, templateObject_3$1o, templateObject_4$15, templateObject_5$K, templateObject_6$A, templateObject_7$j, templateObject_8$f, templateObject_9$b;

var orangeAnimation$1 = styled.keyframes(templateObject_1$29 || (templateObject_1$29 = __makeTemplateObject(["\n  0%, 100% { transform: translate(0, 0); }\n  25% { transform: translate(0, -20px); }\n  50% { transform: translate(20px, 0); }\n  75% { transform: translate(-20px, 0); }\n"], ["\n  0%, 100% { transform: translate(0, 0); }\n  25% { transform: translate(0, -20px); }\n  50% { transform: translate(20px, 0); }\n  75% { transform: translate(-20px, 0); }\n"])));
var redAnimation$1 = styled.keyframes(templateObject_2$1J || (templateObject_2$1J = __makeTemplateObject(["\n  0%, 100% { transform: translate(0, 0); }\n  25% { transform: translate(0, 20px); }\n  50% { transform: translate(-20px, 0); }\n  75% { transform: translate(20px, 0); }\n"], ["\n  0%, 100% { transform: translate(0, 0); }\n  25% { transform: translate(0, 20px); }\n  50% { transform: translate(-20px, 0); }\n  75% { transform: translate(20px, 0); }\n"])));
var greenAnimation$1 = styled.keyframes(templateObject_3$1n || (templateObject_3$1n = __makeTemplateObject(["\n  0%, 100% { transform: translate(0, 0); }\n  25% { transform: translate(20px, 0px); }\n  50% { transform: translate(0, 20px); }\n  75% { transform: translate(0, -20px); }\n"], ["\n  0%, 100% { transform: translate(0, 0); }\n  25% { transform: translate(20px, 0px); }\n  50% { transform: translate(0, 20px); }\n  75% { transform: translate(0, -20px); }\n"])));
var yellowAnimation$1 = styled.keyframes(templateObject_4$14 || (templateObject_4$14 = __makeTemplateObject(["\n  0%, 100% { transform: translate(0, 0); }\n  25% { transform: translate(-20px, 0); }\n  50% { transform: translate(0, -20px); }\n  75% { transform: translate(0, 20px); }\n"], ["\n  0%, 100% { transform: translate(0, 0); }\n  25% { transform: translate(-20px, 0); }\n  50% { transform: translate(0, -20px); }\n  75% { transform: translate(0, 20px); }\n"])));
var Wrap$t = styled__default['default'].div(templateObject_5$J || (templateObject_5$J = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-weight: 500;\n  color: ", ";\n  height: 100%;\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-weight: 500;\n  color: ", ";\n  height: 100%;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
var Content$4 = styled__default['default'].div(templateObject_6$z || (templateObject_6$z = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n"])));
var Loader$2 = styled__default['default'].div(templateObject_7$i || (templateObject_7$i = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 50px;\n  flex-grow: 1;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 50px;\n  flex-grow: 1;\n"])));
var OrangeCircle$1 = styled__default['default'].div(templateObject_8$e || (templateObject_8$e = __makeTemplateObject(["\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  animation: ", " 2s linear infinite;\n  border-radius: 50%;\n  background: ", ";\n"], ["\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  animation: ", " 2s linear infinite;\n  border-radius: 50%;\n  background: ", ";\n"])), orangeAnimation$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.orangeBg;
});
var GreenCircle$1 = styled__default['default'].div(templateObject_9$a || (templateObject_9$a = __makeTemplateObject(["\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  animation: ", " 2s linear infinite;\n  border-radius: 50%;\n  background: ", ";\n"], ["\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  animation: ", " 2s linear infinite;\n  border-radius: 50%;\n  background: ", ";\n"])), greenAnimation$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.greenBg;
});
var RedCircle$1 = styled__default['default'].div(templateObject_10$8 || (templateObject_10$8 = __makeTemplateObject(["\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  animation: ", " 2s linear infinite;\n  border-radius: 50%;\n  background: ", ";\n"], ["\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  animation: ", " 2s linear infinite;\n  border-radius: 50%;\n  background: ", ";\n"])), redAnimation$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.redBg;
});
var YellowCircle$1 = styled__default['default'].div(templateObject_11$7 || (templateObject_11$7 = __makeTemplateObject(["\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  animation: ", " 2s linear infinite;\n  border-radius: 50%;\n  background: ", ";\n"], ["\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  animation: ", " 2s linear infinite;\n  border-radius: 50%;\n  background: ", ";\n"])), yellowAnimation$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.yellowBg;
});
var BottomText$1 = styled__default['default'].div(templateObject_12$6 || (templateObject_12$6 = __makeTemplateObject(["\n  margin-top: auto;\n  text-align: center;\n  font-weight: normal;\n  font-size: 11px;\n  line-height: 14px;\n  color: ", ";\n  letter-spacing: 0.05em;\n"], ["\n  margin-top: auto;\n  text-align: center;\n  font-weight: normal;\n  font-size: 11px;\n  line-height: 14px;\n  color: ", ";\n  letter-spacing: 0.05em;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.greyText;
});
var LoaderCard = function (_a) {
    var textTooltip = _a.textTooltip;
    return (React__default['default'].createElement(Wrap$t, null,
        React__default['default'].createElement(Content$4, null,
            React__default['default'].createElement(Loader$2, null,
                React__default['default'].createElement(OrangeCircle$1, null),
                React__default['default'].createElement(GreenCircle$1, null),
                React__default['default'].createElement(RedCircle$1, null),
                React__default['default'].createElement(YellowCircle$1, null)),
            textTooltip && React__default['default'].createElement(BottomText$1, null, textTooltip))));
};
var templateObject_1$29, templateObject_2$1J, templateObject_3$1n, templateObject_4$14, templateObject_5$J, templateObject_6$z, templateObject_7$i, templateObject_8$e, templateObject_9$a, templateObject_10$8, templateObject_11$7, templateObject_12$6;

var getExternalLinkProps = function () { return ({
    target: "_blank",
    rel: "noreferrer noopener",
}); };

var sizes = {
    XS: "xs",
    SM: "sm",
    MD: "md",
    LG: "lg",
    XL: "xl",
    XXL: "xxl",
};

var _a$3;
var style$1 = (_a$3 = {},
    _a$3[sizes.XS] = {
        fontSize: "11px",
        fontSizeLg: "14px",
    },
    _a$3[sizes.SM] = {
        fontSize: "13px",
        fontSizeLg: "16px",
    },
    _a$3[sizes.MD] = {
        fontSize: "15px",
        fontSizeLg: "19px",
    },
    _a$3[sizes.LG] = {
        fontSize: "21px",
        fontSizeLg: "27px",
    },
    _a$3[sizes.XL] = {
        fontSize: "24px",
        fontSizeLg: "30px",
    },
    _a$3);
var getColor$2 = function (_a) {
    var color = _a.color, theme = _a.theme;
    return getThemeValue("colors." + color, color)(theme);
};
var getFontSize = function (_a) {
    var fontSize = _a.fontSize, small = _a.small;
    return small ? "14px" : fontSize || "16px";
};
var Text = styled__default['default'].div(templateObject_1$28 || (templateObject_1$28 = __makeTemplateObject(["\n  font-size: ", ";\n  line-height: ", ";\n  /* color:", "; */\n  color: ", ";\n  /* font-size: ", "; */\n  ", "\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n"], ["\n  font-size: ", ";\n  line-height: ", ";\n  /* color:", "; */\n  color: ", ";\n  /* font-size: ", "; */\n  ", "\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n"])), function (_a) {
    var size = _a.size;
    return style$1[size || sizes.MD].fontSize;
}, function (_a) {
    var size = _a.size;
    return style$1[size || sizes.MD].fontSizeLg;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, getColor$2, getFontSize, function (_a) {
    var textTransform = _a.textTransform;
    return textTransform && "text-transform: " + textTransform + ";";
}, function (_a) {
    var bold = _a.bold;
    return (bold ? 700 : 500) || 500;
}, styledSystem.space, styledSystem.typography);
Text.defaultProps = {
    color: "text",
    small: false,
};
var templateObject_1$28;

var StyledLink$1 = styled__default['default'](Text)(templateObject_1$27 || (templateObject_1$27 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n  & svg {\n    fill: ", ";\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n  & svg {\n    fill: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.green;
});
var Link$2 = function (_a) {
    var external = _a.external, props = __rest(_a, ["external"]);
    var internalProps = external ? getExternalLinkProps() : {};
    return React__default['default'].createElement(StyledLink$1, __assign({ as: "a", bold: true }, internalProps, props));
};
Link$2.defaultProps = {
    color: "green",
};
var templateObject_1$27;

var LinkExternal = function (_a) {
    var children = _a.children, icon = _a.icon, props = __rest(_a, ["children", "icon"]);
    return (React__default['default'].createElement(Link$2, __assign({ external: true }, props),
        children,
        icon || React__default['default'].createElement(Icon$O, { ml: "4px" })));
};

var GHOST$1 = "data:image/png;base64,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";

var GhostCard = function (_a) {
    var href = _a.href, children = _a.children, text = _a.text;
    return (React__default['default'].createElement(Wrap$s, null,
        React__default['default'].createElement(Image$2, null,
            React__default['default'].createElement("img", { src: GHOST$1, alt: "some img" })),
        children,
        React__default['default'].createElement(LinkExternal, { color: "#47DA3B", small: true, href: href }, text || "Learn More")));
};
var Wrap$s = styled__default['default'].div(templateObject_1$26 || (templateObject_1$26 = __makeTemplateObject(["\n  padding: 5px 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: column;\n"], ["\n  padding: 5px 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: column;\n"])));
var Image$2 = styled__default['default'].div(templateObject_2$1I || (templateObject_2$1I = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));
var templateObject_1$26, templateObject_2$1I;

var BetPosition;
(function (BetPosition) {
    BetPosition["BULL"] = "Bull";
    BetPosition["BEAR"] = "Bear";
    BetPosition["HOUSE"] = "House";
})(BetPosition || (BetPosition = {}));
var PredictionStatus;
(function (PredictionStatus) {
    PredictionStatus["INITIAL"] = "initial";
    PredictionStatus["LIVE"] = "live";
    PredictionStatus["PAUSED"] = "paused";
    PredictionStatus["ERROR"] = "error";
})(PredictionStatus || (PredictionStatus = {}));

var ButtonsBlock = function (_a) {
    var _b;
    var texts = _a.texts, pool = _a.pool, hasEnteredUp = _a.hasEnteredUp, hasEnteredDown = _a.hasEnteredDown, handleSetPosition = _a.handleSetPosition, disabledButton = _a.disabledButton;
    return (React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement(PrizeBlock$1, null,
            React__default['default'].createElement("p", null, ((_b = texts === null || texts === void 0 ? void 0 : texts.prize) === null || _b === void 0 ? void 0 : _b.toUpperCase()) || "PRIZE POOL"),
            React__default['default'].createElement("p", null, pool)),
        React__default['default'].createElement(Buttons$5, null,
            React__default['default'].createElement(ButtonWrap$2, { style: { marginBottom: 14 }, className: hasEnteredDown ? "unCoise" : "" },
                React__default['default'].createElement(Button$9, { width: "100%", variant: "green", onClick: function () { return handleSetPosition(BetPosition.BULL); }, disabled: disabledButton }, (texts === null || texts === void 0 ? void 0 : texts.enterUp) || "Enter UP"),
                React__default['default'].createElement(IconComplete$2, { className: "completeIcon", hasEntered: hasEnteredUp },
                    React__default['default'].createElement(Icon$w, { fill: "#FFB72C" }))),
            React__default['default'].createElement(ButtonWrap$2, { className: hasEnteredUp ? "unCoise" : "" },
                React__default['default'].createElement(Button$9, { width: "100%", variant: "pink", onClick: function () { return handleSetPosition(BetPosition.BEAR); }, disabled: disabledButton }, (texts === null || texts === void 0 ? void 0 : texts.enterDown) || "Enter DOWN"),
                React__default['default'].createElement(IconComplete$2, { className: "completeIcon", hasEntered: hasEnteredDown },
                    React__default['default'].createElement(Icon$w, { fill: "#FFB72C" }))))));
};
var Buttons$5 = styled__default['default'].div(templateObject_1$25 || (templateObject_1$25 = __makeTemplateObject(["\n  position: relative;\n  &.unChoiced {\n    opacity: 0.25;\n  }\n"], ["\n  position: relative;\n  &.unChoiced {\n    opacity: 0.25;\n  }\n"])));
var PrizeBlock$1 = styled__default['default'].div(templateObject_2$1H || (templateObject_2$1H = __makeTemplateObject(["\n  padding: 23px 18px 18px;\n  display: flex;\n  justify-content: space-between;\n  font-weight: 500;\n  font-size: 17px;\n  line-height: 22px;\n  letter-spacing: 0.5px;\n  color: ", ";\n"], ["\n  padding: 23px 18px 18px;\n  display: flex;\n  justify-content: space-between;\n  font-weight: 500;\n  font-size: 17px;\n  line-height: 22px;\n  letter-spacing: 0.5px;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
var ButtonWrap$2 = styled__default['default'].div(templateObject_3$1m || (templateObject_3$1m = __makeTemplateObject(["\n  position: relative;\n  &.unCoise {\n    opacity: 0.25;\n  }\n"], ["\n  position: relative;\n  &.unCoise {\n    opacity: 0.25;\n  }\n"])));
var IconComplete$2 = styled__default['default'].div(templateObject_4$13 || (templateObject_4$13 = __makeTemplateObject(["\n  display: ", ";\n  margin-left: 7px;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 19px;\n"], ["\n  display: ", ";\n  margin-left: 7px;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 19px;\n"])), function (_a) {
    var hasEntered = _a.hasEntered;
    return (hasEntered ? "flex" : "none");
});
var templateObject_1$25, templateObject_2$1H, templateObject_3$1m, templateObject_4$13;

var Front$1 = styled__default['default'].div(templateObject_1$24 || (templateObject_1$24 = __makeTemplateObject(["\n  height: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  position: absolute;\n  top: 0;\n  width: 100%;\n"], ["\n  height: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  position: absolute;\n  top: 0;\n  width: 100%;\n"])));
var Back$1 = styled__default['default'](Front$1)(templateObject_2$1G || (templateObject_2$1G = __makeTemplateObject(["\n  transform: rotateY(180deg) translateX(50%);\n"], ["\n  transform: rotateY(180deg) translateX(50%);\n"])));
var Inner$2 = styled__default['default'].div(templateObject_3$1l || (templateObject_3$1l = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  height: 100%;\n  position: relative;\n  transform: rotateY(", "deg);\n  transform-style: preserve-3d;\n  transition: transform 600ms;\n  border-radius: 15px;\n  box-sizing: border-box;\n\n  ", " {\n    z-index: ", ";\n    backface-visibility: hidden;\n    transition: 0;\n    width: 278px;\n    ", " {\n      width: 308px;\n    }\n  }\n\n  ", " {\n    z-index: ", ";\n    padding: 18px 15px 20px;\n    transition: 0;\n    background: ", ";\n    border-radius: 15px;\n    height: 100%;\n    width: 100%;\n  }\n"], ["\n  display: flex;\n  justify-content: center;\n  height: 100%;\n  position: relative;\n  transform: rotateY(", "deg);\n  transform-style: preserve-3d;\n  transition: transform 600ms;\n  border-radius: 15px;\n  box-sizing: border-box;\n\n  ", " {\n    z-index: ", ";\n    backface-visibility: hidden;\n    transition: 0;\n    width: 278px;\n    ", " {\n      width: 308px;\n    }\n  }\n\n  ", " {\n    z-index: ", ";\n    padding: 18px 15px 20px;\n    transition: 0;\n    background: ", ";\n    border-radius: 15px;\n    height: 100%;\n    width: 100%;\n  }\n"])), function (_a) {
    var isFlipped = _a.isFlipped;
    return (isFlipped ? 180 : 0);
}, Front$1, function (_a) {
    var isFlipped = _a.isFlipped;
    return (isFlipped ? 5 : 10);
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, Back$1, function (_a) {
    var isFlipped = _a.isFlipped;
    return (isFlipped ? 10 : 5);
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.cardBg;
});
var StyledCardFlip$1 = styled__default['default'].div(templateObject_4$12 || (templateObject_4$12 = __makeTemplateObject(["\n  perspective: 1000px;\n  height: 371px;\n  width: 335px;\n  border-radius: 15px;\n"], ["\n  perspective: 1000px;\n  height: 371px;\n  width: 335px;\n  border-radius: 15px;\n"])));
var getComponents$1 = function (children) {
    if (children.length !== 2) {
        throw new Error("CardFlip: Two children are required");
    }
    return children;
};
var CardFlip = function (_a) {
    var isFlipped = _a.isFlipped, children = _a.children;
    var _b = getComponents$1(children), front = _b[0], back = _b[1];
    return (React__default['default'].createElement(StyledCardFlip$1, null,
        React__default['default'].createElement(Inner$2, { isFlipped: isFlipped },
            React__default['default'].createElement(Front$1, null, front),
            React__default['default'].createElement(Back$1, null, back))));
};
var templateObject_1$24, templateObject_2$1G, templateObject_3$1l, templateObject_4$12;

var scales$4 = {
    SM: "sm",
    MD: "md",
    LG: "lg",
};

var getHeight = function (_a) {
    var _b = _a.scale, scale = _b === void 0 ? scales$4.MD : _b;
    switch (scale) {
        case scales$4.SM:
            return "32px";
        case scales$4.LG:
            return "48px";
        case scales$4.MD:
        default:
            return "40px";
    }
};
var Input$1 = styled__default['default'].input(templateObject_1$23 || (templateObject_1$23 = __makeTemplateObject(["\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  /* height: ", "; */\n  outline: 0;\n  padding: 0;\n  background: none;\n  border: none;\n  width: 100%;\n  font-weight: 500;\n  font-size: 17px;\n  line-height: 22px;\n  letter-spacing: 0.5px;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    color: ", ";\n    cursor: not-allowed;\n  }\n"], ["\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  /* height: ", "; */\n  outline: 0;\n  padding: 0;\n  background: none;\n  border: none;\n  width: 100%;\n  font-weight: 500;\n  font-size: 17px;\n  line-height: 22px;\n  letter-spacing: 0.5px;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    color: ", ";\n    cursor: not-allowed;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, getHeight, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
});
Input$1.defaultProps = {
    scale: scales$4.MD,
    isSuccess: false,
    isWarning: false,
};
var templateObject_1$23;

var BalanceInput = function (_a) {
    var value = _a.value, _b = _a.placeholder, placeholder = _b === void 0 ? "0.0" : _b, onUserInput = _a.onUserInput, inputProps = _a.inputProps, _c = _a.isWarning, isWarning = _c === void 0 ? false : _c, _d = _a.decimals, decimals = _d === void 0 ? 18 : _d, texts = _a.texts, handleButtonToMax = _a.handleButtonToMax, icon = _a.icon, disabled = _a.disabled, props = __rest(_a, ["value", "placeholder", "onUserInput", "inputProps", "isWarning", "decimals", "texts", "handleButtonToMax", "icon", "disabled"]);
    var handleOnChange = function (e) {
        if (e.currentTarget.validity.valid) {
            onUserInput(e.currentTarget.value.replace(/,/g, "."));
        }
    };
    return (React__default['default'].createElement(InputWrap$2, __assign({ disabled: disabled }, props),
        React__default['default'].createElement(LeftBlock, null,
            React__default['default'].createElement(TitleInput, null, (texts === null || texts === void 0 ? void 0 : texts.commit) || "Commit"),
            React__default['default'].createElement(Input$1, __assign({ className: isWarning ? "warning" : "", pattern: "^[0-9]*[.,]?[0-9]{0," + decimals + "}$", inputMode: "decimal", min: "0", value: value, onChange: handleOnChange, placeholder: placeholder }, inputProps))),
        React__default['default'].createElement(RightBlock, null,
            handleButtonToMax ? (React__default['default'].createElement(ButtonToMax, { as: "button", onClick: handleButtonToMax }, "MAX")) : null,
            React__default['default'].createElement(InputIcon, null,
                icon || React__default['default'].createElement(Icon$M, null),
                (texts === null || texts === void 0 ? void 0 : texts.currency) || "BNB"))));
};
var InputWrap$2 = styled__default['default'].div(templateObject_1$22 || (templateObject_1$22 = __makeTemplateObject(["\n  opacity: ", ";\n  pointer-events: ", ";\n  position: relative;\n  padding: 17px 20px 20px 20px;\n  background: ", ";\n  box-shadow: ", ";\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  ", "\n"], ["\n  opacity: ", ";\n  pointer-events: ", ";\n  position: relative;\n  padding: 17px 20px 20px 20px;\n  background: ", ";\n  box-shadow: ", ";\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  ", "\n"])), function (_a) {
    var disabled = _a.disabled;
    return (disabled ? 0.5 : 1);
}, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? "none" : "auto");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.buttonBg;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow4;
}, styledSystem.space);
var TitleInput = styled__default['default'].div(templateObject_2$1F || (templateObject_2$1F = __makeTemplateObject(["\n  margin-bottom: 15px;\n  font-size: 15px;\n  line-height: 19px;\n  letter-spacing: 0.5px;\n  color: ", ";\n"], ["\n  margin-bottom: 15px;\n  font-size: 15px;\n  line-height: 19px;\n  letter-spacing: 0.5px;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.greyText;
});
var InputIcon = styled__default['default'].div(templateObject_3$1k || (templateObject_3$1k = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding: 7px 15px;\n  background: ", ";\n  border-radius: 12px;\n  font-size: 11px;\n  line-height: 14px;\n  letter-spacing: 0.5px;\n  color: ", ";\n  & svg {\n    margin-bottom: 7px;\n  }\n  & div {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 29px;\n    height: 29px;\n    border-radius: 7px;\n    background: ", ";\n    margin-bottom: 7px;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding: 7px 15px;\n  background: ", ";\n  border-radius: 12px;\n  font-size: 11px;\n  line-height: 14px;\n  letter-spacing: 0.5px;\n  color: ", ";\n  & svg {\n    margin-bottom: 7px;\n  }\n  & div {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 29px;\n    height: 29px;\n    border-radius: 7px;\n    background: ", ";\n    margin-bottom: 7px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.bgOpacitY3;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.blueGradient;
});
var ButtonToMax = styled__default['default'](Text)(templateObject_4$11 || (templateObject_4$11 = __makeTemplateObject(["\n  padding: 0;\n  margin-right: 20px;\n  margin-top: 20px;\n  transform: translateY(-50%);\n  border: none;\n  background: none;\n  text-decoration: underline;\n  cursor: pointer;\n  transition: 0.3s;\n  color: ", ";\n  &:hover {\n    color: ", ";\n    transition: 0.3s;\n  }\n"], ["\n  padding: 0;\n  margin-right: 20px;\n  margin-top: 20px;\n  transform: translateY(-50%);\n  border: none;\n  background: none;\n  text-decoration: underline;\n  cursor: pointer;\n  transition: 0.3s;\n  color: ", ";\n  &:hover {\n    color: ", ";\n    transition: 0.3s;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textGray;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
var RightBlock = styled__default['default'].div(templateObject_5$I || (templateObject_5$I = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n"])));
var LeftBlock = styled__default['default'].div(templateObject_6$y || (templateObject_6$y = __makeTemplateObject([""], [""])));
var templateObject_1$22, templateObject_2$1F, templateObject_3$1k, templateObject_4$11, templateObject_5$I, templateObject_6$y;

function ArrowIcon$1(props) {
    return (React__namespace.createElement("svg", __assign({ width: 26, height: 26, viewBox: "0 0 26 26", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React__namespace.createElement("g", { filter: "url(#prefix__filter0_dArrowIcon)" },
            React__namespace.createElement("path", { d: "M14.485 5.272l5.656 5.657m0 0l-5.656 5.657m5.656-5.657H6", stroke: "#fff", strokeWidth: 2, strokeLinecap: "round" })),
        React__namespace.createElement("defs", null,
            React__namespace.createElement("filter", { id: "prefix__filter0_dArrowIcon", x: 0.586, y: 0.444, width: 24.971, height: 24.971, filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__namespace.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
                React__namespace.createElement("feColorMatrix", { in: "SourceAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React__namespace.createElement("feOffset", { dy: 2 }),
                React__namespace.createElement("feGaussianBlur", { stdDeviation: 2 }),
                React__namespace.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" }),
                React__namespace.createElement("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__namespace.createElement("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })))));
}

var TabsBlock$2 = styled__default['default'].div(templateObject_1$21 || (templateObject_1$21 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 30px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 30px;\n"])));
var Tab$7 = styled__default['default'].button(templateObject_2$1E || (templateObject_2$1E = __makeTemplateObject(["\n  padding: 7px;\n  width: 50px;\n  border: none;\n  background: ", ";\n  border-radius: 7px;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 16px;\n  color: ", ";\n  transition: 0.3s;\n  cursor: pointer;\n  border: 1px solid transparent;\n  &.active {\n    border: 1px solid #47da3b;\n    transition: 0.3s;\n  }\n"], ["\n  padding: 7px;\n  width: 50px;\n  border: none;\n  background: ", ";\n  border-radius: 7px;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 16px;\n  color: ", ";\n  transition: 0.3s;\n  cursor: pointer;\n  border: 1px solid transparent;\n  &.active {\n    border: 1px solid #47da3b;\n    transition: 0.3s;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return polished.transparentize(0.85, theme.colors.text);
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
var tabsList = [10, 25, 50, 75];
var TabsCard = function (_a) {
    var handlePercentChange = _a.handlePercentChange, disabledTab = _a.disabledTab;
    return (React__default['default'].createElement(TabsBlock$2, null,
        tabsList.map(function (percentShortcut) {
            var handleClick = function () {
                handlePercentChange(percentShortcut);
            };
            return (React__default['default'].createElement(Tab$7, { key: percentShortcut, onClick: handleClick, disabled: disabledTab }, percentShortcut + "%"));
        }),
        React__default['default'].createElement(Tab$7, { onClick: function () { return handlePercentChange(100); }, disabled: disabledTab }, "Max")));
};
var templateObject_1$21, templateObject_2$1E;

var SetPositionCard = function (_a) {
    var onBack = _a.onBack, children = _a.children, inputValue = _a.inputValue, onUserInput = _a.onUserInput, showFieldWarning = _a.showFieldWarning, inputProps = _a.inputProps, handlePercentChange = _a.handlePercentChange, disabledTab = _a.disabledTab, texts = _a.texts, inputTexts = _a.inputTexts, iconBalanceInput = _a.iconBalanceInput;
    return (React__default['default'].createElement(Wrap$r, null,
        React__default['default'].createElement(ButtonBack$1, { onClick: onBack },
            React__default['default'].createElement(ArrowIcon$1, null)),
        React__default['default'].createElement(Title$e, null, texts || "Set Position"),
        React__default['default'].createElement(BalanceInput, { texts: inputTexts, value: inputValue, onUserInput: onUserInput, isWarning: showFieldWarning, inputProps: inputProps, icon: iconBalanceInput }),
        React__default['default'].createElement(TabsBlock$1, null,
            React__default['default'].createElement(TabsCard, { handlePercentChange: handlePercentChange, disabledTab: disabledTab })),
        children));
};
var Wrap$r = styled__default['default'].div(templateObject_1$20 || (templateObject_1$20 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var ButtonBack$1 = styled__default['default'].button(templateObject_2$1D || (templateObject_2$1D = __makeTemplateObject(["\n  height: 30px;\n  width: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  right: 0;\n  border: none;\n  background: none;\n  transform: rotateY(180deg);\n  background: ", ";\n  border-radius: 7px;\n  cursor: pointer;\n"], ["\n  height: 30px;\n  width: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  right: 0;\n  border: none;\n  background: none;\n  transform: rotateY(180deg);\n  background: ", ";\n  border-radius: 7px;\n  cursor: pointer;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.whiteRgba;
});
var Title$e = styled__default['default'].div(templateObject_3$1j || (templateObject_3$1j = __makeTemplateObject(["\n  margin-bottom: 22px;\n  font-weight: 500;\n  font-size: 21px;\n  line-height: 27px;\n  letter-spacing: 0.5px;\n  color: ", ";\n"], ["\n  margin-bottom: 22px;\n  font-weight: 500;\n  font-size: 21px;\n  line-height: 27px;\n  letter-spacing: 0.5px;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
var TabsBlock$1 = styled__default['default'].div(templateObject_4$10 || (templateObject_4$10 = __makeTemplateObject(["\n  margin-top: 35px;\n  margin-bottom: 16px;\n"], ["\n  margin-top: 35px;\n  margin-bottom: 16px;\n"])));
var templateObject_1$20, templateObject_2$1D, templateObject_3$1j, templateObject_4$10;

var TopContent$3 = function (_a) {
    var children = _a.children, rightContent = _a.rightContent, texts = _a.texts;
    return (React__default['default'].createElement(Wrap$q, null,
        React__default['default'].createElement(LeftContent$2, null, texts || "NEXT"),
        children,
        React__default['default'].createElement(RightContent$3, null, rightContent)));
};
var Wrap$q = styled__default['default'].div(templateObject_1$1$ || (templateObject_1$1$ = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-left: -11px;\n  margin-right: -11px;\n  ", " {\n    margin-left: 0;\n    margin-right: 0;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-left: -11px;\n  margin-right: -11px;\n  ", " {\n    margin-left: 0;\n    margin-right: 0;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var LeftContent$2 = styled__default['default'].div(templateObject_2$1C || (templateObject_2$1C = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 50px;\n  height: 50px;\n  background: ", ";\n  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 12px;\n  font-weight: 500;\n  font-size: 9px;\n  color: ", ";\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 50px;\n  height: 50px;\n  background: ", ";\n  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 12px;\n  font-weight: 500;\n  font-size: 9px;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return polished.transparentize(0.75, theme.colors.invertedContrast);
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
var RightContent$3 = styled__default['default'](LeftContent$2)(templateObject_3$1i || (templateObject_3$1i = __makeTemplateObject(["\n  font-size: 11px;\n"], ["\n  font-size: 11px;\n"])));
var templateObject_1$1$, templateObject_2$1C, templateObject_3$1i;

var ValueRow = function (_a) {
    var vector = _a.vector, value = _a.value, texts = _a.texts;
    return (React__default['default'].createElement(ValueRowBlock, { vector: vector },
        (texts === null || texts === void 0 ? void 0 : texts.vectorText) || vector,
        React__default['default'].createElement("div", null,
            React__default['default'].createElement("span", null, (texts === null || texts === void 0 ? void 0 : texts.payout) || "Payout"),
            value)));
};
var ValueRowBlock = styled__default['default'].div(templateObject_1$1_ || (templateObject_1$1_ = __makeTemplateObject(["\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  letter-spacing: 0.05em;\n  color: ", ";\n  text-shadow: ", ";\n  font-weight: 500;\n  font-size: 15px;\n  line-height: 19px;\n  & span {\n    margin-right: 10px;\n    font-weight: normal;\n    color: ", ";\n  }\n\n  max-height: 50px;\n  height: 100%;\n  padding: ", ";\n  background: ", ";\n  border-radius: ", ";\n  color: ", ";\n"], ["\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  letter-spacing: 0.05em;\n  color: ", ";\n  text-shadow: ", ";\n  font-weight: 500;\n  font-size: 15px;\n  line-height: 19px;\n  & span {\n    margin-right: 10px;\n    font-weight: normal;\n    color: ", ";\n  }\n\n  max-height: 50px;\n  height: 100%;\n  padding: ", ";\n  background: ", ";\n  border-radius: ", ";\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textShadow;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textGray;
}, function (_a) {
    var vector = _a.vector;
    return (vector === "DOWN" || vector === "ETH" ? "13px 20px 18px" : "18px 20px 13px");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.bgCard;
}, function (_a) {
    var vector = _a.vector;
    return (vector === "DOWN" || vector === "ETH" ? "0 0 12px 12px" : "12px 12px 0 0");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
var templateObject_1$1_;

var getColor$1 = function (_a) {
    var color = _a.color, theme = _a.theme;
    return getThemeValue("colors." + color, color)(theme);
};
function MyTimer$2(_a) {
    var expiryTimestamp = _a.expiryTimestamp, color = _a.color, avax = _a.avax;
    var hours = Math.floor(expiryTimestamp / 3600);
    var minutes = Math.floor((expiryTimestamp - hours * 3600) / 60);
    var seconds = expiryTimestamp - hours * 3600 - minutes * 60;
    var handleDigit = function (value) {
        var leftDigit = value >= 10 ? value.toString()[0] : "0";
        var rightDigit = value >= 10 ? value.toString()[1] : value.toString();
        return { leftDigit: leftDigit, rightDigit: rightDigit };
    };
    var timeArray = [hours, minutes, seconds];
    return (React__default['default'].createElement(Wrap$p, null,
        React__default['default'].createElement(Block$b, { avax: avax, color: color }, timeArray.map(function (item, i) { return (React__default['default'].createElement(React__default['default'].Fragment, { key: "item-" + i },
            React__default['default'].createElement(Item, { avax: avax },
                handleDigit(item).leftDigit,
                handleDigit(item).rightDigit,
                " "),
            i === 2 ? null : React__default['default'].createElement(Dots, null, ":"))); }))));
}
var LoadIcons$1 = [React__default['default'].createElement(Icon$v, { spin: true, fill: "none" }), React__default['default'].createElement(Icon$v, { spin: true, fill: "none" }), React__default['default'].createElement(Icon$v, { spin: true, fill: "none" })];
var LoadingTimer$1 = function (_a) {
    var avax = _a.avax;
    return (React__default['default'].createElement(Wrap$p, null,
        React__default['default'].createElement(Block$b, { avax: avax }, LoadIcons$1.map(function (item, i) { return (React__default['default'].createElement(React__default['default'].Fragment, { key: "item-" + i },
            React__default['default'].createElement(Item, { avax: avax }, item),
            i === 2 ? null : React__default['default'].createElement(Dots, null, ":"))); }))));
};
var TimerNotSolid = function (_a) {
    var time = _a.time, color = _a.color, isLoad = _a.isLoad, avax = _a.avax;
    return (React__default['default'].createElement("div", null, (time || time === 0) && !isLoad ? (React__default['default'].createElement(MyTimer$2, { avax: avax, expiryTimestamp: time, color: color || "text" })) : (React__default['default'].createElement(LoadingTimer$1, { avax: avax }))));
};
var Wrap$p = styled__default['default'].div(templateObject_1$1Z || (templateObject_1$1Z = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n"], ["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n"])));
var Block$b = styled__default['default'].div(templateObject_2$1B || (templateObject_2$1B = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: ", ";\n  height: 50px;\n  border-radius: 12px;\n  color: ", ";\n  font-weight: 500;\n  font-size: 15px;\n  letter-spacing: 0.05em;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: ", ";\n  height: 50px;\n  border-radius: 12px;\n  color: ", ";\n  font-weight: 500;\n  font-size: 15px;\n  letter-spacing: 0.05em;\n"])), function (_a) {
    var avax = _a.avax;
    return (avax ? "auto" : "186px");
}, getColor$1);
var Item = styled__default['default'].div(templateObject_3$1h || (templateObject_3$1h = __makeTemplateObject(["\n  background: ", ";\n  box-shadow: ", ";\n  height: ", ";\n  margin: ", ";\n  width: ", ";\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: ", ";\n"], ["\n  background: ", ";\n  box-shadow: ", ";\n  height: ", ";\n  margin: ", ";\n  width: ", ";\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: ", ";\n"])), function (_a) {
    var avax = _a.avax, theme = _a.theme;
    return (avax ? "none" : polished.transparentize(0.75, theme.colors.invertedContrast));
}, function (_a) {
    var avax = _a.avax, theme = _a.theme;
    return (avax ? "none" : theme.colors.boxShadow10);
}, function (_a) {
    var avax = _a.avax;
    return (avax ? "auto" : "50px");
}, function (_a) {
    var avax = _a.avax;
    return (avax ? "0 5px" : "0");
}, function (_a) {
    var avax = _a.avax;
    return (avax ? "15px" : "50px");
}, function (_a) {
    var avax = _a.avax;
    return (avax ? "11px" : "15px");
});
var Dots = styled__default['default'].div(templateObject_4$$ || (templateObject_4$$ = __makeTemplateObject(["\n  margin: 0 6px;\n  color: ", ";\n"], ["\n  margin: 0 6px;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
var templateObject_1$1Z, templateObject_2$1B, templateObject_3$1h, templateObject_4$$;

var getColor = function (_a) {
    var color = _a.color, theme = _a.theme;
    return getThemeValue("colors." + color, color)(theme);
};
function MyTimer$1(_a) {
    var expiryTimestamp = _a.expiryTimestamp, color = _a.color, texts = _a.texts;
    var days = Math.floor(expiryTimestamp / 86400);
    var hours = Math.floor(expiryTimestamp / 3600);
    var minutes = Math.floor((expiryTimestamp - hours * 3600) / 60);
    var seconds = expiryTimestamp - hours * 3600 - minutes * 60;
    var handleDigit = function (value) {
        var leftDigit = value >= 10 ? value.toString()[0] : "0";
        var rightDigit = value >= 10 ? value.toString()[1] : value.toString();
        return { leftDigit: leftDigit, rightDigit: rightDigit };
    };
    var timeArray = [days, hours, minutes, seconds];
    var timeTextArray = [texts.days, texts.hours, texts.minutes, texts.seconds];
    return (React__default['default'].createElement(Wrap$o, { color: color }, timeArray.map(function (item, i) { return (React__default['default'].createElement(React__default['default'].Fragment, { key: "item-" + i },
        handleDigit(item).leftDigit,
        handleDigit(item).rightDigit,
        timeTextArray[i],
        " ")); })));
}
var TimerSimple = function (_a) {
    var time = _a.time, color = _a.color, texts = _a.texts;
    return (React__default['default'].createElement("div", null,
        React__default['default'].createElement(MyTimer$1, { expiryTimestamp: time || 0, color: color || "text", texts: texts })));
};
var Wrap$o = styled__default['default'].div(templateObject_1$1Y || (templateObject_1$1Y = __makeTemplateObject(["\n  height: 32px;\n  color: ", ";\n  font-weight: normal;\n  font-size: 24px;\n  line-height: 32px;\n  letter-spacing: -0.02em;\n  white-space: nowrap;\n"], ["\n  height: 32px;\n  color: ", ";\n  font-weight: normal;\n  font-size: 24px;\n  line-height: 32px;\n  letter-spacing: -0.02em;\n  white-space: nowrap;\n"])), getColor);
var templateObject_1$1Y;

var CardNext$1 = function (_a) {
    var roundEpoch = _a.roundEpoch, time = _a.time, payoutWin = _a.payoutWin, payoutLose = _a.payoutLose, pool = _a.pool, hasEnteredUp = _a.hasEnteredUp, hasEnteredDown = _a.hasEnteredDown, handleSetPosition = _a.handleSetPosition, disabledButton = _a.disabledButton, disabledTimer = _a.disabledTimer, texts = _a.texts;
    return (React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement(TopContent$3, { rightContent: roundEpoch },
            React__default['default'].createElement(Timer$2, { color: "white", time: time, disabled: disabledTimer })),
        React__default['default'].createElement(WrapContent$1, null,
            React__default['default'].createElement(ValueRow, { texts: { payout: texts === null || texts === void 0 ? void 0 : texts.payout, vectorText: texts === null || texts === void 0 ? void 0 : texts.up }, vector: "UP", value: payoutWin }),
            React__default['default'].createElement(ButtonsBlockWrap$2, null,
                React__default['default'].createElement(ButtonsBlock, { pool: pool, hasEnteredUp: hasEnteredUp, hasEnteredDown: hasEnteredDown, handleSetPosition: handleSetPosition, disabledButton: disabledButton, texts: texts })),
            React__default['default'].createElement(ValueRow, { texts: { payout: texts === null || texts === void 0 ? void 0 : texts.payout, vectorText: texts === null || texts === void 0 ? void 0 : texts.down }, vector: "DOWN", value: payoutLose }))));
};
var WrapContent$1 = styled__default['default'].div(templateObject_1$1X || (templateObject_1$1X = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-radius: 15px;\n  background: ", ";\n  margin-top: 28px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-radius: 15px;\n  background: ", ";\n  margin-top: 28px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.bgCard;
});
var ButtonsBlockWrap$2 = styled__default['default'].div(templateObject_2$1A || (templateObject_2$1A = __makeTemplateObject(["\n  height: 193px;\n  width: 308px;\n  padding-bottom: 17px;\n  background: ", ";\n  position: relative;\n  z-index: 2;\n  padding: 0 13px;\n  box-sizing: border-box;\n  box-shadow: ", ";\n  border-radius: 15px;\n  ", " {\n    width: 335px;\n  }\n"], ["\n  height: 193px;\n  width: 308px;\n  padding-bottom: 17px;\n  background: ", ";\n  position: relative;\n  z-index: 2;\n  padding: 0 13px;\n  box-sizing: border-box;\n  box-shadow: ", ";\n  border-radius: 15px;\n  ", " {\n    width: 335px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.bgGray;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.cardShadow;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var templateObject_1$1X, templateObject_2$1A;

var variants$1 = {
    COLLECTION: "collection",
    SUCCESS: "success",
    WINNING: "winning",
    INFO: "info",
    ERROR: "error",
};

var StyledAlert$1 = styled__default['default'].div(templateObject_1$1W || (templateObject_1$1W = __makeTemplateObject(["\n  display: flex;\n  align-items: baseline;\n  width: fit-content;\n  position: relative;\n  z-index: 5;\n  transition: 0.3s ease;\n  padding: 15px 90px 15px 23px;\n  background: ", ";\n  box-shadow: inset ", ";\n  border-radius: 12px;\n  color: ", ";\n"], ["\n  display: flex;\n  align-items: baseline;\n  width: fit-content;\n  position: relative;\n  z-index: 5;\n  transition: 0.3s ease;\n  padding: 15px 90px 15px 23px;\n  background: ", ";\n  box-shadow: inset ", ";\n  border-radius: 12px;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.buttonBg;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textShadow;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
var getIcon = function (variant) {
    if (variant === void 0) { variant = variants$1.COLLECTION; }
    switch (variant) {
        case variants$1.COLLECTION:
            return React__default['default'].createElement(Icon$v, { spin: true });
        case variants$1.WINNING:
            return React__default['default'].createElement(Icon$R, null);
        case variants$1.SUCCESS:
            return React__default['default'].createElement(Icon$w, { fill: "#47DA3B" });
        case variants$1.INFO:
            return React__default['default'].createElement(React__default['default'].Fragment, null);
        case variants$1.ERROR:
            return React__default['default'].createElement(Icon$i, null);
        default:
            return React__default['default'].createElement(React__default['default'].Fragment, null);
    }
};
var Button$8 = styled__default['default'].button(templateObject_2$1z || (templateObject_2$1z = __makeTemplateObject(["\n  position: absolute;\n  padding: 0;\n  background: none;\n  border: none;\n  top: 4px;\n  right: 4px;\n  cursor: pointer;\n  &:disabled {\n    cursor: default;\n  }\n"], ["\n  position: absolute;\n  padding: 0;\n  background: none;\n  border: none;\n  top: 4px;\n  right: 4px;\n  cursor: pointer;\n  &:disabled {\n    cursor: default;\n  }\n"])));
var Row$5 = styled__default['default'].div(templateObject_3$1g || (templateObject_3$1g = __makeTemplateObject(["\n  display: flex;\n  align-items: baseline;\n  flex-wrap: wrap;\n"], ["\n  display: flex;\n  align-items: baseline;\n  flex-wrap: wrap;\n"])));
var SetButton = function (_a) {
    var variant = _a.variant, onClick = _a.onClick;
    var Icon = getIcon(variant);
    return (React__default['default'].createElement(Button$8, { disabled: variant !== "winning", onClick: onClick }, Icon));
};
var Alert = function (_a) {
    var title = _a.title, children = _a.children, variant = _a.variant, onClick = _a.onClick;
    return (React__default['default'].createElement(StyledAlert$1, null,
        React__default['default'].createElement(Row$5, null,
            title && (React__default['default'].createElement(Text, { fontWeight: 600, marginRight: "5px" }, title)),
            React__default['default'].createElement("div", null, children)),
        React__default['default'].createElement(SetButton, { variant: variant, onClick: onClick })));
};
var templateObject_1$1W, templateObject_2$1z, templateObject_3$1g;

var StyledAlert = styled__default['default'].div(templateObject_1$1V || (templateObject_1$1V = __makeTemplateObject(["\n  width: 100%;\n  max-width: 367px;\n  position: relative;\n  z-index: 5;\n  transition: 0.3s ease;\n  padding: 15px 60px 25px 23px;\n  color: ", ";\n  background: ", ";\n  overflow: hidden;\n  border-radius: 12px;\n  //&:after{\n  //  position: absolute;\n  //  top: 0;\n  //  left: 0;\n  //  width: 100%;\n  //  height: 100%;\n  //  display: block;\n  //  content:'';\n  //  border-radius: 12px;\n  //  filter: blur(10px);\n  //  -webkit-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  //  z-index: -1;\n  //}\n"], ["\n  width: 100%;\n  max-width: 367px;\n  position: relative;\n  z-index: 5;\n  transition: 0.3s ease;\n  padding: 15px 60px 25px 23px;\n  color: ", ";\n  background: ", ";\n  overflow: hidden;\n  border-radius: 12px;\n  //&:after{\n  //  position: absolute;\n  //  top: 0;\n  //  left: 0;\n  //  width: 100%;\n  //  height: 100%;\n  //  display: block;\n  //  content:'';\n  //  border-radius: 12px;\n  //  filter: blur(10px);\n  //  -webkit-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  //  z-index: -1;\n  //}\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.bgOpacitY3;
});
var ButtonClose$3 = styled__default['default'](Button$9)(templateObject_2$1y || (templateObject_2$1y = __makeTemplateObject(["\n  position: absolute;\n  padding: 0;\n  background: none;\n  border: none;\n  top: 4px;\n  right: 4px;\n  cursor: pointer;\n  box-shadow: none;\n  &:disabled {\n    cursor: default;\n  }\n"], ["\n  position: absolute;\n  padding: 0;\n  background: none;\n  border: none;\n  top: 4px;\n  right: 4px;\n  cursor: pointer;\n  box-shadow: none;\n  &:disabled {\n    cursor: default;\n  }\n"])));
var ButtonNext = styled__default['default'](Button$9)(templateObject_3$1f || (templateObject_3$1f = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  margin-top: 10px;\n  padding: 0;\n  border: none;\n  box-shadow: none;\n  background: none;\n  color: ", ";\n  font-size: 14px;\n  line-height: 18px;\n  cursor: pointer;\n  & svg {\n    transform: rotate(180deg);\n    margin-left: 10px;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  margin-top: 10px;\n  padding: 0;\n  border: none;\n  box-shadow: none;\n  background: none;\n  color: ", ";\n  font-size: 14px;\n  line-height: 18px;\n  cursor: pointer;\n  & svg {\n    transform: rotate(180deg);\n    margin-left: 10px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.green;
});
var AlertBlur = function (_a) {
    var handleClose = _a.handleClose, buttonText = _a.buttonText, title = _a.title, children = _a.children; _a.variant; var onClick = _a.onClick;
    return (React__default['default'].createElement(StyledAlert, null,
        React__default['default'].createElement("div", null,
            React__default['default'].createElement(Flex, { justifyContent: "space-between" },
                React__default['default'].createElement(Text, { fontWeight: 600, mb: "7px" }, title),
                React__default['default'].createElement(ButtonClose$3, { onClick: handleClose },
                    React__default['default'].createElement(Icon$R, { fill: "none" }))),
            React__default['default'].createElement("div", null, children),
            React__default['default'].createElement(ButtonNext, { height: "auto", onClick: onClick },
                buttonText,
                React__default['default'].createElement(Icon$J, { color: "#4BE43E" })))));
};
var templateObject_1$1V, templateObject_2$1y, templateObject_3$1f;

var observerOptions = {
    root: null,
    rootMargin: "200px",
    threshold: 0,
};

var Wrapper$m = styled__default['default'].div(templateObject_1$1U || (templateObject_1$1U = __makeTemplateObject(["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"], ["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"])), function (_a) {
    var height = _a.height, responsive = _a.responsive;
    return (responsive ? 0 : height);
}, function (_a) {
    var width = _a.width;
    return width;
}, function (_a) {
    var height = _a.height;
    return height;
}, function (_a) {
    var width = _a.width, height = _a.height, responsive = _a.responsive;
    return (responsive ? (height / width) * 100 : 0);
}, styledSystem.space);
var templateObject_1$1U;

var BackgroundImage = function (_a) {
    var src = _a.src, otherProps = __rest(_a, ["src"]);
    var imgRef = React.useRef(null);
    React.useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    img.style.backgroundImage = "url(\"" + src + "\")";
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return React__default['default'].createElement(Wrapper$m, __assign({ ref: imgRef }, otherProps));
};

var StyledImage = styled__default['default'].img(templateObject_1$1T || (templateObject_1$1T = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"])));
var Placeholder = styled__default['default'].div(templateObject_2$1x || (templateObject_2$1x = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"])));
var Image$1 = function (_a) {
    var src = _a.src, alt = _a.alt, otherProps = __rest(_a, ["src", "alt"]);
    var imgRef = React.useRef(null);
    var _b = React.useState(false), isLoaded = _b[0], setIsLoaded = _b[1];
    React.useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    setIsLoaded(true);
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return (React__default['default'].createElement(Wrapper$m, __assign({ ref: imgRef }, otherProps), isLoaded ? React__default['default'].createElement(StyledImage, { src: src, alt: alt }) : React__default['default'].createElement(Placeholder, null)));
};
var templateObject_1$1T, templateObject_2$1x;

var setColor = function (param) {
    switch (param.bg) {
        case "red":
            return "linear-gradient(180deg, #FF8383 0%, #EF5D5D 100%);";
        case "blue":
            return "linear-gradient(180deg, #95D0FF 0%, #78C2FD 100%);";
        case "green":
            return "linear-gradient(180deg, #BDFF00 0%, #95CA00 100%);";
        case "purple":
            return "linear-gradient(180deg, #CA61FB 0%, #B255DE 100%);";
        case "purple2":
            return "#9361FF";
        case "pink":
            return "#ECC2DD;";
        default:
            return "linear-gradient(180deg, #FF8383 0%, #EF5D5D 100%);";
    }
};
var CardProduct = function (_a) {
    var title = _a.title, img = _a.img, bg = _a.bg; _a.backgroundImage; var closed = _a.closed, href = _a.href, externalLink = _a.externalLink, isNotLink = _a.isNotLink, small = _a.small, propsWrapperCard = _a.propsWrapperCard, props = __rest(_a, ["title", "img", "bg", "backgroundImage", "closed", "href", "externalLink", "isNotLink", "small", "propsWrapperCard"]);
    if (isNotLink)
        return (React__default['default'].createElement(CardWrap$1, __assign({ small: small, closed: closed, bg: bg }, propsWrapperCard),
            React__default['default'].createElement(CardTitle, { small: small, size: "lg" }, title),
            React__default['default'].createElement(Img$2, __assign({ src: img, alt: "some img" }, props))));
    if (externalLink) {
        return (React__default['default'].createElement("a", { href: href || "" },
            React__default['default'].createElement(CardWrap$1, __assign({ small: small, closed: closed, bg: bg }, propsWrapperCard),
                React__default['default'].createElement(CardTitle, { small: small, size: "lg" }, title),
                React__default['default'].createElement(Img$2, __assign({ src: img, alt: "some img" }, props)))));
    }
    return (React__default['default'].createElement(reactRouterDom.NavLink, { to: href || "" },
        React__default['default'].createElement(CardWrap$1, __assign({ small: small, closed: closed, bg: bg }, propsWrapperCard),
            React__default['default'].createElement(CardTitle, { small: small, size: "lg" }, title),
            React__default['default'].createElement(Img$2, __assign({ src: img, alt: "some img" }, props)))));
};
var CardWrap$1 = styled__default['default'].div(templateObject_1$1S || (templateObject_1$1S = __makeTemplateObject(["\n  position: relative;\n  padding: ", ";\n  height: ", ";\n  width: 100%;\n  background: ", ";\n  border-radius: 15px;\n  opacity: ", ";\n  box-sizing: border-box;\n  cursor: ", ";\n  border: 2px solid transparent;\n  transition: 0.3s;\n  ", ";\n  &:hover {\n    border: 2px solid ", ";\n    box-shadow: ", ";\n    transition: 0.3s;\n  }\n  &:nth-child(5) {\n    display: none;\n  }\n  & img {\n    display: ", ";\n  }\n  ", " {\n    height: 30vw;\n    width: 100%;\n    &:nth-child(5) {\n      display: grid;\n    }\n  }\n  ", " {\n    height: 18vw;\n    width: 100%;\n  }\n  ", " {\n    max-width: 220px;\n    height: 220px;\n  }\n"], ["\n  position: relative;\n  padding: ", ";\n  height: ", ";\n  width: 100%;\n  background: ", ";\n  border-radius: 15px;\n  opacity: ", ";\n  box-sizing: border-box;\n  cursor: ", ";\n  border: 2px solid transparent;\n  transition: 0.3s;\n  ", ";\n  &:hover {\n    border: 2px solid ", ";\n    box-shadow: ", ";\n    transition: 0.3s;\n  }\n  &:nth-child(5) {\n    display: none;\n  }\n  & img {\n    display: ", ";\n  }\n  ", " {\n    height: 30vw;\n    width: 100%;\n    &:nth-child(5) {\n      display: grid;\n    }\n  }\n  ", " {\n    height: 18vw;\n    width: 100%;\n  }\n  ", " {\n    max-width: 220px;\n    height: 220px;\n  }\n"])), function (_a) {
    var small = _a.small;
    return (small ? "10px 15px" : "14px 24px");
}, function (_a) {
    var small = _a.small;
    return (small ? "118px !important" : "43vw");
}, function (_a) {
    var backgroundImage = _a.backgroundImage;
    return (backgroundImage ? "url(" + backgroundImage + ")" : setColor);
}, function (props) { return (props.closed ? 0.3 : 1); }, function (_a) {
    var closed = _a.closed;
    return (closed ? "default" : "pointer");
}, styledSystem.background, function (_a) {
    var theme = _a.theme, closed = _a.closed;
    return (closed ? "transparent" : theme.colors.green);
}, function (_a) {
    var theme = _a.theme, closed = _a.closed;
    return (closed ? "" : theme.colors.boxShadow6);
}, function (_a) {
    var backgroundImage = _a.backgroundImage;
    return (backgroundImage ? "none" : "block");
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xl;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xxl;
});
var Img$2 = styled__default['default'].img(templateObject_2$1w || (templateObject_2$1w = __makeTemplateObject(["\n  position: absolute;\n  bottom: ", ";\n  right: ", ";\n  left: ", ";\n  top: ", ";\n  max-width: ", ";\n"], ["\n  position: absolute;\n  bottom: ", ";\n  right: ", ";\n  left: ", ";\n  top: ", ";\n  max-width: ", ";\n"])), function (_a) {
    var bottom = _a.bottom;
    return bottom || 0;
}, function (_a) {
    var right = _a.right;
    return right || 0;
}, function (_a) {
    var left = _a.left;
    return left || "auto";
}, function (_a) {
    var top = _a.top;
    return top || "auto";
}, function (_a) {
    var maxWidth = _a.maxWidth;
    return maxWidth || "100%";
});
var CardTitle = styled__default['default'](Text)(templateObject_3$1e || (templateObject_3$1e = __makeTemplateObject(["\n  font-size: ", ";\n  letter-spacing: 0.02em;\n  text-shadow: ", ";\n  ", " {\n    font-size: 19px;\n  }\n"], ["\n  font-size: ", ";\n  letter-spacing: 0.02em;\n  text-shadow: ", ";\n  ", " {\n    font-size: 19px;\n  }\n"])), function (_a) {
    var small = _a.small;
    return (small ? "11px !important" : "15px");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textShadow2;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xl;
});
var templateObject_1$1S, templateObject_2$1w, templateObject_3$1e;

var ROCKET = "db1a76399105883d.png";

var MAJONG = "a2a6e7469307b667.png";

var COINS = "41c377a79b0c9f1b.png";

var CHESS = "e529146445a6e6ff.png";

var BALANCE = "6dd90f1628bb1be2.png";

var DOODLE = "6e089338c82aef92.png";

var data = [
    { name: "BTC vs ETH", img: BALANCE, color: "pink" },
    { name: "UP or Down", img: COINS, color: "green" },
    { name: "Coming soon", img: CHESS, color: "purple" },
    { name: "Coming soon", img: ROCKET, color: "blue" },
    { name: "Coming soon", img: MAJONG, color: "red" },
];
var CardsProducts = function () {
    return (React__default['default'].createElement(Cards$1, null,
        React__default['default'].createElement(CardProduct, { title: data[0].name, bg: data[0].color, img: data[0].img, href: "/games/btc-vs-eth" }),
        React__default['default'].createElement(CardProduct, { title: data[1].name, bg: data[1].color, img: data[1].img, href: "/games/up-or-down" }),
        React__default['default'].createElement(CardProduct, { title: data[2].name, closed: true, bg: data[2].color, img: data[2].img }),
        React__default['default'].createElement(CardProduct, { title: data[3].name, closed: true, bg: data[3].color, img: data[3].img, left: "20px" }),
        React__default['default'].createElement(CardProduct, { title: data[4].name, closed: true, bg: data[4].color, img: data[4].img }),
        React__default['default'].createElement(CardProduct, { title: data[4].name, propsWrapperCard: { backgroundSize: "cover", backgroundImage: DOODLE } })));
};
var Cards$1 = styled__default['default'].div(templateObject_1$1R || (templateObject_1$1R = __makeTemplateObject(["\n  grid-gap: 8px;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  ", " {\n    gap: 15px;\n    grid-template-columns: repeat(3, 1fr);\n  }\n  ", " {\n    grid-gap: 15px;\n    grid-template-columns: repeat(5, 1fr);\n  }\n"], ["\n  grid-gap: 8px;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  ", " {\n    gap: 15px;\n    grid-template-columns: repeat(3, 1fr);\n  }\n  ", " {\n    grid-gap: 15px;\n    grid-template-columns: repeat(5, 1fr);\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xl;
});
CardsProducts.defaultProps = {};
var templateObject_1$1R;

var CoinIcon = function (props) {
    return (React__namespace.createElement("svg", __assign({ width: 119, height: 90, viewBox: "0 0 119 90", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React__namespace.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.532 36.223v15.863c2.104 2.438 5.092 4.978 8.906 7.544 9.297 6.252 22.395 11.906 36.88 15.92 14.487 4.013 28.627 5.906 39.816 5.33 11.189-.576 18.088-3.553 19.425-8.382l2.119-7.645c-3.773 1.196-8.395 2.029-14.053 2.32-12.366.637-27.778-1.396-43.4-5.724-15.62-4.328-29.881-10.517-40.156-17.426-3.955-2.661-7.084-5.272-9.537-7.8zM1.532 65.631a75.291 75.291 0 002.625 1.846c10.274 6.91 24.536 13.099 40.157 17.427 6.32 1.751 12.606 3.127 18.67 4.101H16.532c-8.285 0-15-6.715-15-15v-8.374zM99.3 89.005h2.271l.194-.697a42.09 42.09 0 01-2.465.697z", fill: "#2E2E35" }),
        React__namespace.createElement("path", { d: "M54.231 51.18C24.28 42.882 2.242 28.061 5.008 18.077c2.766-9.984 29.29-11.35 59.24-3.05 29.952 8.298 51.99 23.119 49.224 33.102-2.766 9.984-29.29 11.35-59.24 3.051z", fill: "#2E2E35" })));
};

function DualshockIcon(props) {
    return (React__namespace.createElement("svg", __assign({ width: 125, height: 89, viewBox: "0 0 125 89", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React__namespace.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M124.085 31.048V73.17c0 8.285-6.716 15-15 15H79.287l-1.812-6.223-30.794-12.267-11.982 7.01c-7.623 4.46-16.936 4.22-24.304-.626C-.112 69.15-3.144 55.1 3.562 44.432L25.527 9.486c5.2-8.273 15.546-11.66 24.602-8.052l12.753 5.08a3.888 3.888 0 012.012 1.821l4.808 9.27 26.862 10.699 9.864-3.424a3.887 3.887 0 012.714.06l12.752 5.08a20.29 20.29 0 012.191 1.028zM44.442 42.37l5.234 2.085a3.888 3.888 0 002.878-7.225l-5.234-2.085 2.085-5.234a3.889 3.889 0 00-7.225-2.878l-2.085 5.235-5.233-2.085a3.889 3.889 0 00-2.878 7.224l5.233 2.085-2.084 5.234a3.888 3.888 0 007.224 2.878l2.085-5.234zm46.066 14.164c-3.014 7.567.69 16.175 8.257 19.188 7.566 3.015 16.174-.689 19.188-8.256 3.014-7.566-.69-16.174-8.256-19.188-7.567-3.014-16.175.69-19.189 8.256z", fill: "#2E2E35" })));
}

var Arrow$2 = function (_a) {
    var center = _a.center;
    return (React__default['default'].createElement(ArrowWrap, { center: center },
        React__default['default'].createElement(ArrowIcon$1, null)));
};
var ArrowWrap = styled__default['default'].div(templateObject_1$1Q || (templateObject_1$1Q = __makeTemplateObject(["\n  width: 45px;\n  height: 45px;\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: ", ";\n  left: ", ";\n  transform: ", ";\n  background: ", ";\n  box-shadow: ", ";\n  border: 5px solid ", ";\n  border-radius: 50px;\n"], ["\n  width: 45px;\n  height: 45px;\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: ", ";\n  left: ", ";\n  transform: ", ";\n  background: ", ";\n  box-shadow: ", ";\n  border: 5px solid ", ";\n  border-radius: 50px;\n"])), function (props) { return (props.center ? "50%" : "auto"); }, function (props) { return (props.center ? "50%" : "auto"); }, function (props) { return (props.center ? "translate(-50%, -50%)" : "translate(0, 0)"); }, function (_a) {
    var theme = _a.theme;
    return theme.colors.greenGradient;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow2;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.bgGray;
});
var templateObject_1$1Q;

var GHOST = "data:image/png;base64,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";

var CardBalance = function (_a) {
    var right = _a.right, children = _a.children, texts = _a.texts, account = _a.account;
    return (React__default['default'].createElement(CardWrap, { right: right },
        account ? (React__default['default'].createElement(CardHeader, { size: "xl" }, texts.title)) : (React__default['default'].createElement(Ghost, null,
            React__default['default'].createElement("img", { alt: "", src: GHOST }))),
        React__default['default'].createElement(CardText, null, account ? texts.text : texts.connect),
        children));
};
var CardWrap = styled__default['default'].div(templateObject_1$1P || (templateObject_1$1P = __makeTemplateObject(["\n  position: relative;\n  margin-bottom: 18px;\n  padding: 25px;\n  background-color: ", ";\n  box-shadow: ", ";\n  border-radius: 15px;\n  z-index: 1;\n  & svg {\n    position: absolute;\n    left: ", ";\n    right: ", ";\n    bottom: 0;\n  }\n  ", " {\n    margin-bottom: 0px;\n  }\n"], ["\n  position: relative;\n  margin-bottom: 18px;\n  padding: 25px;\n  background-color: ", ";\n  box-shadow: ", ";\n  border-radius: 15px;\n  z-index: 1;\n  & svg {\n    position: absolute;\n    left: ", ";\n    right: ", ";\n    bottom: 0;\n  }\n  ", " {\n    margin-bottom: 0px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.bgGray;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow2;
}, function (props) { return (props.right ? "auto" : "0"); }, function (props) { return (props.right ? "0" : "auto"); }, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var CardHeader = styled__default['default'](Text)(templateObject_2$1v || (templateObject_2$1v = __makeTemplateObject(["\n  text-align: center;\n  letter-spacing: 0.05em;\n  margin-bottom: 14px;\n"], ["\n  text-align: center;\n  letter-spacing: 0.05em;\n  margin-bottom: 14px;\n"])));
var CardText = styled__default['default'](Text)(templateObject_3$1d || (templateObject_3$1d = __makeTemplateObject(["\n  text-align: center;\n  letter-spacing: 0.05em;\n  color: ", ";\n"], ["\n  text-align: center;\n  letter-spacing: 0.05em;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textGray;
});
var Ghost = styled__default['default'].div(templateObject_4$_ || (templateObject_4$_ = __makeTemplateObject(["\n  text-align: center;\n"], ["\n  text-align: center;\n"])));
var templateObject_1$1P, templateObject_2$1v, templateObject_3$1d, templateObject_4$_;

var CardsBalance = function (_a) {
    var texts = _a.texts, account = _a.account;
    return (React__default['default'].createElement(Cards, null,
        React__default['default'].createElement(CardBalance, { texts: {
                title: (texts === null || texts === void 0 ? void 0 : texts.title1) || "2`000 YAY",
                text: (texts === null || texts === void 0 ? void 0 : texts.text1) || "Ready to harvest",
                connect: (texts === null || texts === void 0 ? void 0 : texts.connect) || "Сonnect wallet",
            }, account: account },
            React__default['default'].createElement(CoinIconBalance, null,
                React__default['default'].createElement(CoinIcon, null))),
        React__default['default'].createElement(CardBalance, { right: true, texts: {
                title: (texts === null || texts === void 0 ? void 0 : texts.title2) || "3`000 YAY",
                text: (texts === null || texts === void 0 ? void 0 : texts.text2) || "Your Balance",
                connect: (texts === null || texts === void 0 ? void 0 : texts.connect) || "Сonnect wallet",
            }, account: account },
            React__default['default'].createElement(DualShockBalance, null,
                React__default['default'].createElement(DualshockIcon, null))),
        React__default['default'].createElement(ArrowIcon, null,
            React__default['default'].createElement(Arrow$2, { center: true }))));
};
var Cards = styled__default['default'].div(templateObject_1$1O || (templateObject_1$1O = __makeTemplateObject(["\n  display: flex;\n  position: relative;\n  flex-direction: column;\n  ", " {\n    position: relative;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 0 16px;\n  }\n"], ["\n  display: flex;\n  position: relative;\n  flex-direction: column;\n  ", " {\n    position: relative;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 0 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var CoinIconBalance = styled__default['default'].div(templateObject_2$1u || (templateObject_2$1u = __makeTemplateObject(["\n  position: absolute;\n  left: 0%;\n  bottom: 0;\n  z-index: -1;\n"], ["\n  position: absolute;\n  left: 0%;\n  bottom: 0;\n  z-index: -1;\n"])));
var DualShockBalance = styled__default['default'].div(templateObject_3$1c || (templateObject_3$1c = __makeTemplateObject(["\n  position: absolute;\n  right: 0%;\n  bottom: 0;\n  z-index: -1;\n"], ["\n  position: absolute;\n  right: 0%;\n  bottom: 0;\n  z-index: -1;\n"])));
var ArrowIcon = styled__default['default'].div(templateObject_4$Z || (templateObject_4$Z = __makeTemplateObject(["\n  position: absolute;\n  z-index: 2;\n  transform: rotate(90deg) translate(-50%, -50%);\n  top: calc(50% - 12px);\n  left: 50%;\n  & svg {\n    margin-top: 4px;\n  }\n  ", " {\n    transform: rotate(0deg);\n    top: 50%;\n    right: 50%;\n  }\n"], ["\n  position: absolute;\n  z-index: 2;\n  transform: rotate(90deg) translate(-50%, -50%);\n  top: calc(50% - 12px);\n  left: 50%;\n  & svg {\n    margin-top: 4px;\n  }\n  ", " {\n    transform: rotate(0deg);\n    top: 50%;\n    right: 50%;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
CardsBalance.defaultProps = {};
var templateObject_1$1O, templateObject_2$1u, templateObject_3$1c, templateObject_4$Z;

var BaseLayoutBlock = styled__default['default'].div(templateObject_1$1N || (templateObject_1$1N = __makeTemplateObject(["\n  width: 100%;\n  min-height: 100vh;\n  padding-top: 59px;\n  background: ", ", ", ";\n  ", " {\n    padding-top: 80px;\n  }\n"], ["\n  width: 100%;\n  min-height: 100vh;\n  padding-top: 59px;\n  background: ", ", ", ";\n  ", " {\n    padding-top: 80px;\n  }\n"])), function (_a) {
    var src = _a.src;
    return "url(" + src + ") no-repeat center top / cover";
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var BaseLayout = function (_a) {
    var src = _a.src, children = _a.children;
    return React__default['default'].createElement(BaseLayoutBlock, { src: src }, children);
};
var templateObject_1$1N;

var InputSearch = function (_a) {
    var height = _a.height, placeholder = _a.placeholder, value = _a.value, onChange = _a.onChange, iconLess = _a.iconLess, width = _a.width, name = _a.name;
    var _b = React.useState(false), focus = _b[0], setFocus = _b[1];
    return (React__default['default'].createElement(InputBlock$1, { height: height, width: width },
        React__default['default'].createElement(InputItem, { width: width, value: value, onChange: onChange, onFocus: function () { return setFocus(true); }, onBlur: function () { return setFocus(false); }, placeholder: placeholder, name: name }),
        React__default['default'].createElement(Button$7, { iconLess: iconLess },
            React__default['default'].createElement(Icon$G, { color: focus ? "green" : "text" }))));
};
InputSearch.defaultProps = {
    placeholder: "Seacrh",
};
var InputBlock$1 = styled__default['default'].div(templateObject_1$1M || (templateObject_1$1M = __makeTemplateObject(["\n  position: relative;\n  width: ", ";\n  height: ", ";\n"], ["\n  position: relative;\n  width: ", ";\n  height: ", ";\n"])), function (_a) {
    var width = _a.width;
    return (width ? width : "fit-content");
}, function (_a) {
    var height = _a.height;
    return (height ? height : "auto");
});
var InputItem = styled__default['default'].input(templateObject_2$1t || (templateObject_2$1t = __makeTemplateObject(["\n  width: ", ";\n  height: 100%;\n  position: relative;\n  display: block;\n  padding: 16px 25px;\n  background: rgb(20, 20, 25);\n  box-shadow: ", ";\n  border-radius: 12px;\n  border: none;\n  font-size: 15px;\n  line-height: 19px;\n  letter-spacing: 0.5px;\n  font-weight: normal;\n  color: ", ";\n  text-shadow: 0px 3px 4px rgba(0, 0, 0, 0.15);\n  outline: none;\n  border: 1px solid transparent;\n  &::placeholder {\n    opacity: 0.5;\n  }\n  &:focus {\n    border: 1px solid #4cee3e;\n    &::placeholder {\n      opacity: 0;\n    }\n  }\n"], ["\n  width: ", ";\n  height: 100%;\n  position: relative;\n  display: block;\n  padding: 16px 25px;\n  background: rgb(20, 20, 25);\n  box-shadow: ", ";\n  border-radius: 12px;\n  border: none;\n  font-size: 15px;\n  line-height: 19px;\n  letter-spacing: 0.5px;\n  font-weight: normal;\n  color: ", ";\n  text-shadow: 0px 3px 4px rgba(0, 0, 0, 0.15);\n  outline: none;\n  border: 1px solid transparent;\n  &::placeholder {\n    opacity: 0.5;\n  }\n  &:focus {\n    border: 1px solid #4cee3e;\n    &::placeholder {\n      opacity: 0;\n    }\n  }\n"])), function (_a) {
    var width = _a.width;
    return (width ? width : "fit-content");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
var Button$7 = styled__default['default'].button(templateObject_3$1b || (templateObject_3$1b = __makeTemplateObject(["\n  display: ", ";\n  padding: 0;\n  border: none;\n  background: none;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 21px;\n"], ["\n  display: ", ";\n  padding: 0;\n  border: none;\n  background: none;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 21px;\n"])), function (_a) {
    var iconLess = _a.iconLess;
    return (iconLess ? "none" : "block");
});
var templateObject_1$1M, templateObject_2$1t, templateObject_3$1b;

var scales$3 = {
    SM: "sm",
    MD: "md",
};

var scaleKeyValues = {
    sm: {
        handleHeight: "16px",
        handleWidth: "16px",
        handleLeft: "2px",
        handleTop: "2px",
        checkedLeft: "calc(100% - 18px)",
        toggleHeight: "20px",
        toggleWidth: "36px",
    },
    md: {
        handleHeight: "32px",
        handleWidth: "32px",
        handleLeft: "4px",
        handleTop: "4px",
        checkedLeft: "calc(100% - 36px)",
        toggleHeight: "40px",
        toggleWidth: "72px",
    },
};
var getScale$1 = function (property) {
    return function (_a) {
        var _b = _a.scale, scale = _b === void 0 ? scales$3.MD : _b;
        return scaleKeyValues[scale][property];
    };
};
var Handle = styled__default['default'].div(templateObject_1$1L || (templateObject_1$1L = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: ", ";\n  left: ", ";\n  position: absolute;\n  top: ", ";\n  transition: left 200ms ease-in;\n  width: ", ";\n  z-index: 1;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: ", ";\n  left: ", ";\n  position: absolute;\n  top: ", ";\n  transition: left 200ms ease-in;\n  width: ", ";\n  z-index: 1;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.background;
}, getScale$1("handleHeight"), getScale$1("handleLeft"), getScale$1("handleTop"), getScale$1("handleWidth"));
var Input = styled__default['default'].input(templateObject_2$1s || (templateObject_2$1s = __makeTemplateObject(["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: ", ";\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"], ["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: ", ";\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"])), Handle, getScale$1("checkedLeft"), Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
var StyledToggle = styled__default['default'].div(templateObject_3$1a || (templateObject_3$1a = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: ", ";\n  position: relative;\n  transition: background-color 200ms;\n  width: ", ";\n"], ["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: ", ";\n  position: relative;\n  transition: background-color 200ms;\n  width: ", ";\n"])), function (_a) {
    var theme = _a.theme, checked = _a.checked;
    return theme.colors[checked ? "success" : "input"];
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, getScale$1("toggleHeight"), getScale$1("toggleWidth"));
var templateObject_1$1L, templateObject_2$1s, templateObject_3$1a;

var Toggle = function (_a) {
    var checked = _a.checked, _b = _a.scale, scale = _b === void 0 ? scales$3.MD : _b, props = __rest(_a, ["checked", "scale"]);
    var isChecked = !!checked;
    return (React__default['default'].createElement(StyledToggle, { checked: isChecked, scale: scale },
        React__default['default'].createElement(Input, __assign({ checked: checked, scale: scale }, props, { type: "checkbox" })),
        React__default['default'].createElement(Handle, { scale: scale })));
};
Toggle.defaultProps = {
    scale: scales$3.MD,
};

var SwapButton = function (_a) {
    var onClick = _a.onClick;
    return (React__default['default'].createElement(ButtonWrap$1, { onClick: onClick },
        React__default['default'].createElement(Icon$9, null)));
};
var ButtonWrap$1 = styled__default['default'].button(templateObject_1$1K || (templateObject_1$1K = __makeTemplateObject(["\n  width: 55px;\n  height: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  box-sizing: border-box;\n  border: none;\n  background: ", ";\n  border: 5px solid ", ";\n  cursor: pointer;\n"], ["\n  width: 55px;\n  height: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  box-sizing: border-box;\n  border: none;\n  background: ", ";\n  border: 5px solid ", ";\n  cursor: pointer;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.buttonBg3;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.cardBg;
});
var templateObject_1$1K;

var Loader$1 = function () {
    var loader1 = styled.keyframes(templateObject_1$1J || (templateObject_1$1J = __makeTemplateObject(["\n    0%   { transform: rotate(0deg); }\n    25%   { transform: rotate(90deg); }\n    50%   { transform: rotate(180deg); }\n\t  75% { transform: rotate(270deg); }\n    100% { transform: rotate(360deg); }\n  "], ["\n    0%   { transform: rotate(0deg); }\n    25%   { transform: rotate(90deg); }\n    50%   { transform: rotate(180deg); }\n\t  75% { transform: rotate(270deg); }\n    100% { transform: rotate(360deg); }\n  "])));
    var loaderdot1 = styled.keyframes(templateObject_2$1r || (templateObject_2$1r = __makeTemplateObject(["\n    0% { transform: translate3d(0, 0, 0); }\n    50%  { transform: translate3d(6px, 0, 0); }\n    100% { transform: translate3d(0, 0, 0); }\n  "], ["\n    0% { transform: translate3d(0, 0, 0); }\n    50%  { transform: translate3d(6px, 0, 0); }\n    100% { transform: translate3d(0, 0, 0); }\n  "])));
    var loaderdot2 = styled.keyframes(templateObject_3$19 || (templateObject_3$19 = __makeTemplateObject(["\n    0%   { transform: translate3d(0, 0, 0); }\n    50%  { transform: translate3d(-6px, 0, 0); }\n    100% { transform: translate3d(0, 0, 0); }\n  "], ["\n    0%   { transform: translate3d(0, 0, 0); }\n    50%  { transform: translate3d(-6px, 0, 0); }\n    100% { transform: translate3d(0, 0, 0); }\n  "])));
    var loaderdot3 = styled.keyframes(templateObject_4$Y || (templateObject_4$Y = __makeTemplateObject(["\n    0%   { transform: translate3d(0, 0, 0); }\n    50%  { transform: translate3d(0, 6px, 0); }\n    100% { transform: translate3d(0, 0, 0); }\n "], ["\n    0%   { transform: translate3d(0, 0, 0); }\n    50%  { transform: translate3d(0, 6px, 0); }\n    100% { transform: translate3d(0, 0, 0); }\n "])));
    var loaderdot4 = styled.keyframes(templateObject_5$H || (templateObject_5$H = __makeTemplateObject(["\n    0%   { transform: translate3d(0, 0, 0); }\n    50%  { transform: translate3d(0, -6px, 0); }\n    100% { transform: translate3d(0, 0, 0); }\n  "], ["\n    0%   { transform: translate3d(0, 0, 0); }\n    50%  { transform: translate3d(0, -6px, 0); }\n    100% { transform: translate3d(0, 0, 0); }\n  "])));
    var LoaderBlock = styled__default['default'].div(templateObject_6$x || (templateObject_6$x = __makeTemplateObject(["\n    height: 70px;\n    width: 70px;\n    animation: ", " 3s linear 0s infinite normal;\n    &:before {\n      content: \"\";\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      right: auto;\n      margin: auto;\n      width: 22px;\n      height: 22px;\n      background: #ff9525;\n      border-radius: 50%;\n      animation: ", " 1s ease-out infinite;\n    }\n    &:after {\n      content: \"\";\n      display: block;\n      position: absolute;\n      top: 0;\n      left: auto;\n      bottom: 0;\n      right: 0;\n      margin: auto;\n      width: 22px;\n      height: 22px;\n      background: #69e35f;\n      border-radius: 50%;\n      animation: ", " 1s ease-out infinite;\n    }\n    & span {\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      right: 0;\n      margin: auto;\n      height: 70px;\n      width: 70px;\n      &::before {\n        content: \"\";\n        display: block;\n        position: absolute;\n        top: 0;\n        left: 0;\n        bottom: auto;\n        right: 0;\n        margin: auto;\n        width: 22px;\n        height: 22px;\n        background: #ff6161;\n        border-radius: 50%;\n        animation: ", " 1s ease-out infinite;\n      }\n      &::after {\n        content: \"\";\n        display: block;\n        position: absolute;\n        top: auto;\n        left: 0;\n        bottom: 0;\n        right: 0;\n        margin: auto;\n        width: 22px;\n        height: 22px;\n        background: #eccb57;\n        border-radius: 50%;\n        animation: ", " 1s ease-out infinite;\n      }\n    }\n  "], ["\n    height: 70px;\n    width: 70px;\n    animation: ", " 3s linear 0s infinite normal;\n    &:before {\n      content: \"\";\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      right: auto;\n      margin: auto;\n      width: 22px;\n      height: 22px;\n      background: #ff9525;\n      border-radius: 50%;\n      animation: ", " 1s ease-out infinite;\n    }\n    &:after {\n      content: \"\";\n      display: block;\n      position: absolute;\n      top: 0;\n      left: auto;\n      bottom: 0;\n      right: 0;\n      margin: auto;\n      width: 22px;\n      height: 22px;\n      background: #69e35f;\n      border-radius: 50%;\n      animation: ", " 1s ease-out infinite;\n    }\n    & span {\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      right: 0;\n      margin: auto;\n      height: 70px;\n      width: 70px;\n      &::before {\n        content: \"\";\n        display: block;\n        position: absolute;\n        top: 0;\n        left: 0;\n        bottom: auto;\n        right: 0;\n        margin: auto;\n        width: 22px;\n        height: 22px;\n        background: #ff6161;\n        border-radius: 50%;\n        animation: ", " 1s ease-out infinite;\n      }\n      &::after {\n        content: \"\";\n        display: block;\n        position: absolute;\n        top: auto;\n        left: 0;\n        bottom: 0;\n        right: 0;\n        margin: auto;\n        width: 22px;\n        height: 22px;\n        background: #eccb57;\n        border-radius: 50%;\n        animation: ", " 1s ease-out infinite;\n      }\n    }\n  "])), loader1, loaderdot1, loaderdot2, loaderdot3, loaderdot4);
    return (React__default['default'].createElement(LoaderBlock, null,
        React__default['default'].createElement("span", null)));
};
var templateObject_1$1J, templateObject_2$1r, templateObject_3$19, templateObject_4$Y, templateObject_5$H, templateObject_6$x;

var BottomContent$1 = styled__default['default'].div(templateObject_1$1I || (templateObject_1$1I = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n"], ["\n  display: flex;\n  justify-content: space-between;\n"])));
var CenterBlock = styled__default['default'].div(templateObject_2$1q || (templateObject_2$1q = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 186px;\n  padding: 17px;\n  background: ", ";\n  border-radius: 12px;\n"], ["\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 186px;\n  padding: 17px;\n  background: ", ";\n  border-radius: 12px;\n"])), function (_a) {
    var theme = _a.theme;
    return polished.transparentize(0.85, theme.colors.text);
});
var ArrowLeft = styled__default['default'].button(templateObject_3$18 || (templateObject_3$18 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n"])));
var ArrowRight = styled__default['default'].button(templateObject_4$X || (templateObject_4$X = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: none;\n  border: none;\n  cursor: pointer;\n  transform: scale(-1, 1);\n  padding: 0;\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: none;\n  border: none;\n  cursor: pointer;\n  transform: scale(-1, 1);\n  padding: 0;\n"])));
var Center = styled__default['default'].button(templateObject_5$G || (templateObject_5$G = __makeTemplateObject(["\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  top: -20px;\n  background: none;\n  border: none;\n  width: 76px;\n  height: 76px;\n  cursor: pointer;\n  & svg {\n    margin-left: -10px;\n  }\n"], ["\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  top: -20px;\n  background: none;\n  border: none;\n  width: 76px;\n  height: 76px;\n  cursor: pointer;\n  & svg {\n    margin-left: -10px;\n  }\n"])));
var ArrowSlider = function (_a) {
    var clsNameLeft = _a.clsNameLeft, clsNameRight = _a.clsNameRight, handlePrevSlide = _a.handlePrevSlide, handleNextSlide = _a.handleNextSlide, handleSlideToLive = _a.handleSlideToLive;
    return (React__default['default'].createElement(BottomContent$1, null,
        React__default['default'].createElement(CenterBlock, null,
            React__default['default'].createElement(ArrowLeft, { className: clsNameLeft || "", onClick: handlePrevSlide },
                React__default['default'].createElement(Icon$J, { stroke: "#47DA3B" })),
            React__default['default'].createElement(Center, { onClick: handleSlideToLive },
                React__default['default'].createElement(Icon$j, null)),
            React__default['default'].createElement(ArrowRight, { className: clsNameRight || "", onClick: handleNextSlide },
                React__default['default'].createElement(Icon$J, { stroke: "#47DA3B" })))));
};
var templateObject_1$1I, templateObject_2$1q, templateObject_3$18, templateObject_4$X, templateObject_5$G;

var TitleBlock = function (_a) {
    var src = _a.src, title = _a.title, subtitle = _a.subtitle, margin = _a.margin, children = _a.children, childrenVisibleModile = _a.childrenVisibleModile;
    return (React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement(Block$a, null,
            React__default['default'].createElement(Img$1, { margin: margin },
                React__default['default'].createElement("img", { src: src, alt: "" })),
            React__default['default'].createElement("div", null,
                React__default['default'].createElement(Title$d, null, title),
                React__default['default'].createElement(Subtitle, null, subtitle),
                React__default['default'].createElement(Timer$1, null, children))),
        React__default['default'].createElement(VisibleTimer, { childrenVisibleModile: childrenVisibleModile }, children)));
};
var Block$a = styled__default['default'].div(templateObject_1$1H || (templateObject_1$1H = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n"], ["\n  display: flex;\n  align-items: center;\n"])));
var Img$1 = styled__default['default'].div(templateObject_2$1p || (templateObject_2$1p = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 70px;\n  height: 70px;\n  margin-right: 25px;\n  border-radius: 50%;\n  flex: none;\n  ", " {\n    width: 120px;\n    height: 120px;\n    margin-right: 30px;\n  }\n  ", " {\n    width: 170px;\n    height: 170px;\n    margin-right: 50px;\n  }\n  &::before {\n    content: \"\";\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    display: block;\n    width: calc(100% + 8px);\n    height: calc(100% + 8px);\n    background: ", ";\n    border-radius: inherit;\n    opacity: 0.15;\n    transform: translate(-50%, -50%);\n    ", " {\n      width: calc(100% + 16px);\n      height: calc(100% + 16px);\n    }\n  }\n  & img {\n    margin: ", ";\n    max-width: 100%;\n    ", " {\n      max-width: none;\n    }\n  }\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 70px;\n  height: 70px;\n  margin-right: 25px;\n  border-radius: 50%;\n  flex: none;\n  ", " {\n    width: 120px;\n    height: 120px;\n    margin-right: 30px;\n  }\n  ", " {\n    width: 170px;\n    height: 170px;\n    margin-right: 50px;\n  }\n  &::before {\n    content: \"\";\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    display: block;\n    width: calc(100% + 8px);\n    height: calc(100% + 8px);\n    background: ", ";\n    border-radius: inherit;\n    opacity: 0.15;\n    transform: translate(-50%, -50%);\n    ", " {\n      width: calc(100% + 16px);\n      height: calc(100% + 16px);\n    }\n  }\n  & img {\n    margin: ", ";\n    max-width: 100%;\n    ", " {\n      max-width: none;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xl;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.greenGradient2;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xl;
}, function (_a) {
    var margin = _a.margin;
    return margin || 0;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xl;
});
var Title$d = styled__default['default'].h3(templateObject_3$17 || (templateObject_3$17 = __makeTemplateObject(["\n  display: block;\n  margin-bottom: 7px;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 23px;\n  letter-spacing: 0.03em;\n  color: ", ";\n  ", " {\n    font-size: 24px;\n    line-height: 29px;\n    margin-bottom: 10px;\n  }\n  ", " {\n    font-size: 31px;\n    line-height: 39px;\n  }\n"], ["\n  display: block;\n  margin-bottom: 7px;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 23px;\n  letter-spacing: 0.03em;\n  color: ", ";\n  ", " {\n    font-size: 24px;\n    line-height: 29px;\n    margin-bottom: 10px;\n  }\n  ", " {\n    font-size: 31px;\n    line-height: 39px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xl;
});
var Subtitle = styled__default['default'].span(templateObject_4$W || (templateObject_4$W = __makeTemplateObject(["\n  display: block;\n  margin-bottom: 13px;\n  font-size: 11px;\n  line-height: 13px;\n  letter-spacing: 0.05em;\n  color: ", ";\n  ", " {\n    font-size: 13px;\n    line-height: 16px;\n  }\n  ", " {\n    font-size: 15px;\n    line-height: 19px;\n    margin-bottom: 26px;\n  }\n"], ["\n  display: block;\n  margin-bottom: 13px;\n  font-size: 11px;\n  line-height: 13px;\n  letter-spacing: 0.05em;\n  color: ", ";\n  ", " {\n    font-size: 13px;\n    line-height: 16px;\n  }\n  ", " {\n    font-size: 15px;\n    line-height: 19px;\n    margin-bottom: 26px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textGray;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xl;
});
var Timer$1 = styled__default['default'].div(templateObject_5$F || (templateObject_5$F = __makeTemplateObject(["\n  display: none;\n  ", " {\n    display: block;\n  }\n"], ["\n  display: none;\n  ", " {\n    display: block;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var VisibleTimer = styled__default['default'].div(templateObject_6$w || (templateObject_6$w = __makeTemplateObject(["\n  display: ", ";\n  margin-top: 30px;\n  ", " {\n    display: none;\n  }\n"], ["\n  display: ", ";\n  margin-top: 30px;\n  ", " {\n    display: none;\n  }\n"])), function (_a) {
    var childrenVisibleModile = _a.childrenVisibleModile;
    return (childrenVisibleModile ? "block" : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var templateObject_1$1H, templateObject_2$1p, templateObject_3$17, templateObject_4$W, templateObject_5$F, templateObject_6$w;

var Wrap$n = styled__default['default'].div(templateObject_1$1G || (templateObject_1$1G = __makeTemplateObject(["\n  position: relative;\n  padding: 0 55px;\n  width: 404px;\n  height: 335px;\n  background: ", ";\n  border-radius: 15px;\n  color: ", ";\n  text-align: center;\n  letter-spacing: 0.5px;\n"], ["\n  position: relative;\n  padding: 0 55px;\n  width: 404px;\n  height: 335px;\n  background: ", ";\n  border-radius: 15px;\n  color: ", ";\n  text-align: center;\n  letter-spacing: 0.5px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.bgGray;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
var SoonImg$1 = styled__default['default'].div(templateObject_2$1o || (templateObject_2$1o = __makeTemplateObject(["\n  position: absolute;\n  top: -23%;\n  left: -5%;\n"], ["\n  position: absolute;\n  top: -23%;\n  left: -5%;\n"])));
var TextBottom$1 = styled__default['default'](Text)(templateObject_3$16 || (templateObject_3$16 = __makeTemplateObject(["\n  margin-bottom: 26px;\n  padding-top: 220px;\n  line-height: 16px;\n"], ["\n  margin-bottom: 26px;\n  padding-top: 220px;\n  line-height: 16px;\n"])));
var BackLink$1 = styled__default['default'].div(templateObject_4$V || (templateObject_4$V = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  cursor: pointer;\n"], ["\n  display: flex;\n  justify-content: center;\n  cursor: pointer;\n"])));
var ComingSoon = function (_a) {
    var href = _a.href, text = _a.text, backText = _a.backText, img = _a.img;
    return (React__default['default'].createElement(Wrap$n, null,
        React__default['default'].createElement(SoonImg$1, null,
            React__default['default'].createElement("img", { src: img || ComingSoonIcon })),
        React__default['default'].createElement(TextBottom$1, { size: "sm" }, text),
        React__default['default'].createElement(BackLink$1, null,
            React__default['default'].createElement(Link$2, { color: "#47DA3B", href: href }, backText))));
};
var templateObject_1$1G, templateObject_2$1o, templateObject_3$16, templateObject_4$V;

var Wrap$m = styled__default['default'].div(templateObject_1$1F || (templateObject_1$1F = __makeTemplateObject(["\n  position: relative;\n  padding: 26px 20px;\n  max-width: 404px;\n  background: ", ";\n  border-radius: 15px;\n  color: ", ";\n  text-align: center;\n  letter-spacing: 0.5px;\n"], ["\n  position: relative;\n  padding: 26px 20px;\n  max-width: 404px;\n  background: ", ";\n  border-radius: 15px;\n  color: ", ";\n  text-align: center;\n  letter-spacing: 0.5px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.bgGray;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
var SoonImg = styled__default['default'].div(templateObject_2$1n || (templateObject_2$1n = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  margin: ", ";\n"], ["\n  display: flex;\n  justify-content: center;\n  margin: ", ";\n"])), function (_a) {
    var margin = _a.margin;
    return margin || "-120px auto -20px";
});
var TextBottom = styled__default['default'](Text)(templateObject_3$15 || (templateObject_3$15 = __makeTemplateObject(["\n  margin-bottom: 26px;\n  line-height: 16px;\n"], ["\n  margin-bottom: 26px;\n  line-height: 16px;\n"])));
var BackLink = styled__default['default'].div(templateObject_4$U || (templateObject_4$U = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  cursor: pointer;\n"], ["\n  display: flex;\n  justify-content: center;\n  cursor: pointer;\n"])));
var ComingSoonWithButton = function (_a) {
    var margin = _a.margin, text = _a.text, buttonText = _a.buttonText, img = _a.img, handleClick = _a.handleClick;
    return (React__default['default'].createElement(Wrap$m, null,
        React__default['default'].createElement(SoonImg, { margin: margin },
            React__default['default'].createElement("img", { src: img || ComingSoonIcon })),
        React__default['default'].createElement(TextBottom, { size: "sm" }, text),
        React__default['default'].createElement(BackLink, null,
            React__default['default'].createElement(Button$9, { variant: "green", onClick: handleClick, width: "100%" }, buttonText))));
};
var templateObject_1$1F, templateObject_2$1n, templateObject_3$15, templateObject_4$U;

var BTC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGCSURBVHgB3VWxSgQxEJ3swmKhoH+giIXViT/gipXNcfoFh62N/oCIhYWdtaDgD3gKit0Jgo0IgrVeaSXrlQvuxjcwkRhu9/biFnIPHplMkpdJZrJLNLbQWk+Dm1QXRLANToLdPM8T9lEdgNA2BNHomMl2lmV7sBvimydfcJQQ7KO9AZss7hI4Ih9g4TIEngeJOhvEZTqBI8r33AWf0G2I+0UptQ7OMNHvmPnYIK4sjskRhJcg8mh8sD/AW/CTiTlXP4uD4IGqAsJTpiqkSszxF8Q3C/bEn8gpd2lUoDr2LfEz9E9YsODuDwdpKCo+Bdd68muyUncQu4S/H4ZhE21LhvjK5vjaqCqcq9lwN4f/y4ynabrorg/KxDlKy15xhjk3oelEUfROo0CiS6wEKvGvWYnl13tAPsDiazuxaN+sZCYQ3iEfSFIvCl5o708fMwi8WmK5RN9CtKdil4oHQyK/B49RYqvglrgn8DLPZfM21QEruR3Y4bCPls8Gsa7rp/Gv8Q2YmuvGZ/W2bgAAAABJRU5ErkJggg==";

var ETH = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG3SURBVHgBrZQ9T8JAGMcfShkI0BfTuJGUj6CjiSSsrn4GEzXRQTcdfJsdnQkufgJdwVVj3EyYaGLCVnrhnQKp/yNUG+AqhP6TS+/u6fO75+557oiW0HA43HFdd4ui0mg0qrVarTJFIUR3geY1m02v0+kc0jrq9XomYMwHotmO42hhPlKYMR6PX+OjBqY2ZFm+CvOJiQw4tz3P854D0f45xWKFTCZToRUjfBAZsNCNyLYQOB6Pz+FkBsbUbreDv+SR9aNFvnNb5onAOb0DaGDbExj6ZFkWYZ5UVaVUKkWSJDHYcrqus9AIeSKQVWMwGPBznMB88bFt21Sv16nRaGgA3s36y7MT/X7/Cx8HTSeBOBglxLBta9Y2F2EymXzDytuIrCQCYuuPyHLONE3rXyDkptPpF0VRbhOJRB7jXyeUyyvmCtlstmgYRgWRftAyQoST6waHIs82tnZSrVYP0N9E/4nfGmT9jFYRgGUORfvGAqcAXQLkcBiHivyEN2VaPp/oatOxb7KwQAHlYtGqwht4PI3Sfxy8bre7T+sI0FIAeE/rConQ+AMLWA1FrVAUwvntMsZyy/z7A4BWK/1ZLaE5AAAAAElFTkSuQmCC";

var WIN$1 = "data:image/png;base64,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";

var WrapOpacity = styled__default['default'].div(templateObject_1$1E || (templateObject_1$1E = __makeTemplateObject(["\n  width: 308px;\n  opacity: ", ";\n  transition: 0.3s;\n  margin: 0 auto;\n  &:hover {\n    opacity: 1;\n    transition: 0.3s;\n  }\n  ", " {\n    width: 335px;\n  }\n"], ["\n  width: 308px;\n  opacity: ", ";\n  transition: 0.3s;\n  margin: 0 auto;\n  &:hover {\n    opacity: 1;\n    transition: 0.3s;\n  }\n  ", " {\n    width: 335px;\n  }\n"])), function (_a) {
    var live = _a.live;
    return (live ? "1" : "0.5");
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Wrap$l = styled__default['default'].div(templateObject_2$1m || (templateObject_2$1m = __makeTemplateObject(["\n  width: 278px;\n  margin: 0 auto;\n  ", " {\n    width: 308px;\n  }\n"], ["\n  width: 278px;\n  margin: 0 auto;\n  ", " {\n    width: 308px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var TopContent$2 = styled__default['default'].div(templateObject_3$14 || (templateObject_3$14 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-left: -11px;\n  margin-right: -11px;\n  ", " {\n    margin-left: 0;\n    margin-right: 0;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-left: -11px;\n  margin-right: -11px;\n  ", " {\n    margin-left: 0;\n    margin-right: 0;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var LeftContent$1 = styled__default['default'].div(templateObject_4$T || (templateObject_4$T = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 50px;\n  height: 50px;\n  background: ", ";\n  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 12px;\n  font-weight: 500;\n  font-size: 9px;\n  color: ", ";\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 50px;\n  height: 50px;\n  background: ", ";\n  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 12px;\n  font-weight: 500;\n  font-size: 9px;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return polished.transparentize(0.75, theme.colors.invertedContrast);
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
var RightContent$2 = styled__default['default'](LeftContent$1)(templateObject_5$E || (templateObject_5$E = __makeTemplateObject(["\n  font-size: 11px;\n"], ["\n  font-size: 11px;\n"])));
var Content$3 = styled__default['default'].div(templateObject_6$v || (templateObject_6$v = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 28px;\n  background: ", ";\n  border-radius: 15px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 28px;\n  background: ", ";\n  border-radius: 15px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.bgCard;
});
var UpContent = styled__default['default'].div(templateObject_7$h || (templateObject_7$h = __makeTemplateObject(["\n  display: ", ";\n  justify-content: ", ";\n  text-align: center;\n  align-items: center;\n  max-height: 50px;\n  height: 100%;\n  width: 100%;\n  padding: 18px 20px 13px;\n  background: ", ";\n  border-top-left-radius: 12px;\n  border-top-right-radius: 12px;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  font-weight: 500;\n  font-size: 15px;\n  line-height: 19px;\n  color: ", ";\n"], ["\n  display: ", ";\n  justify-content: ", ";\n  text-align: center;\n  align-items: center;\n  max-height: 50px;\n  height: 100%;\n  width: 100%;\n  padding: 18px 20px 13px;\n  background: ", ";\n  border-top-left-radius: 12px;\n  border-top-right-radius: 12px;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  font-weight: 500;\n  font-size: 15px;\n  line-height: 19px;\n  color: ", ";\n"])), function (_a) {
    var showUp = _a.showUp;
    return (showUp ? "none" : "flex");
}, function (_a) {
    var displayNone = _a.displayNone;
    return (displayNone ? "center" : "space-between");
}, function (_a) {
    var theme = _a.theme, negative = _a.negative, colorNone = _a.colorNone;
    return negative ? theme.colors.bgCard : colorNone ? "none" : theme.colors.bgCardBtc2;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
var UpContentWin = styled__default['default'].div(templateObject_8$d || (templateObject_8$d = __makeTemplateObject(["\n  position: relative;\n  display: ", ";\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n"], ["\n  position: relative;\n  display: ", ";\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n"])), function (_a) {
    var show = _a.show;
    return (show ? "flex" : "none");
});
var ButtonBnb = styled__default['default'].div(templateObject_9$9 || (templateObject_9$9 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n  & button {\n    border-top-left-radius: 12px;\n    border-top-right-radius: 12px;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n"], ["\n  position: relative;\n  width: 100%;\n  & button {\n    border-top-left-radius: 12px;\n    border-top-right-radius: 12px;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n"])));
var WinnerImg = styled__default['default'].div(templateObject_10$7 || (templateObject_10$7 = __makeTemplateObject(["\n  position: absolute;\n  top: -64px;\n  right: -37px;\n  pointer-events: none;\n  z-index: 3;\n"], ["\n  position: absolute;\n  top: -64px;\n  right: -37px;\n  pointer-events: none;\n  z-index: 3;\n"])));
var RightText$2 = styled__default['default'].div(templateObject_11$6 || (templateObject_11$6 = __makeTemplateObject(["\n  display: ", ";\n  align-items: center;\n  & div.payout {\n    margin-right: 9px;\n    font-weight: normal;\n    color: ", ";\n  }\n"], ["\n  display: ", ";\n  align-items: center;\n  & div.payout {\n    margin-right: 9px;\n    font-weight: normal;\n    color: ", ";\n  }\n"])), function (_a) {
    var displayNone = _a.displayNone;
    return (displayNone ? "none" : "flex");
}, function (_a) {
    var theme = _a.theme;
    return polished.transparentize(0.2, theme.colors.text);
});
var IconComplete$1 = styled__default['default'].div(templateObject_12$5 || (templateObject_12$5 = __makeTemplateObject(["\n  display: ", ";\n  margin-left: 7px;\n"], ["\n  display: ", ";\n  margin-left: 7px;\n"])), function (_a) {
    var showIcon = _a.showIcon;
    return (showIcon ? "flex" : "none");
});
var IconCompleteDown = styled__default['default'].div(templateObject_13$4 || (templateObject_13$4 = __makeTemplateObject(["\n  display: ", ";\n  margin-left: 7px;\n"], ["\n  display: ", ";\n  margin-left: 7px;\n"])), function (_a) {
    var showIcon = _a.showIcon;
    return (showIcon ? "flex" : "none");
});
var MainBlock$2 = styled__default['default'].div(templateObject_14$3 || (templateObject_14$3 = __makeTemplateObject(["\n  position: relative;\n  z-index: 2;\n  padding: ", ";\n  width: 308px;\n  height: 193px;\n  background: #26262d;\n  border: 2px solid\n    ", ";\n  box-sizing: border-box;\n  box-shadow: 0px 4px 22px rgba(0, 0, 0, 0.31);\n  border-radius: 15px;\n  ", " {\n    width: 335px;\n  }\n"], ["\n  position: relative;\n  z-index: 2;\n  padding: ", ";\n  width: 308px;\n  height: 193px;\n  background: #26262d;\n  border: 2px solid\n    ", ";\n  box-sizing: border-box;\n  box-shadow: 0px 4px 22px rgba(0, 0, 0, 0.31);\n  border-radius: 15px;\n  ", " {\n    width: 335px;\n  }\n"])), function (_a) {
    var loader = _a.loader;
    return (loader ? "23px 12px 25px" : "23px 35px 25px 32px");
}, function (_a) {
    var theme = _a.theme, negative = _a.negative, colorNone = _a.colorNone;
    return negative ? theme.colors.colorCardBtc : colorNone ? "none" : theme.colors.bgCardBtc2;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var DownContent = styled__default['default'].div(templateObject_15$2 || (templateObject_15$2 = __makeTemplateObject(["\n  display: flex;\n  justify-content: ", ";\n  max-height: 50px;\n  height: 100%;\n  width: 100%;\n  padding: 13px 20px 18px;\n  background: ", ";\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-left-radius: 12px;\n  border-bottom-right-radius: 12px;\n  font-weight: 500;\n  font-size: 15px;\n  line-height: 19px;\n  color: ", ";\n"], ["\n  display: flex;\n  justify-content: ", ";\n  max-height: 50px;\n  height: 100%;\n  width: 100%;\n  padding: 13px 20px 18px;\n  background: ", ";\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-left-radius: 12px;\n  border-bottom-right-radius: 12px;\n  font-weight: 500;\n  font-size: 15px;\n  line-height: 19px;\n  color: ", ";\n"])), function (_a) {
    var displayNone = _a.displayNone;
    return (displayNone ? "center" : "space-between");
}, function (_a) {
    var theme = _a.theme, negative = _a.negative;
    return (negative ? theme.colors.bgCardBtc : theme.colors.bgCard);
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
var Currency$1 = styled__default['default'].div(templateObject_16$2 || (templateObject_16$2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  color: ", ";\n  & img {\n    display: none;\n    margin-right: 10px;\n    ", " {\n      display: ", ";\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  color: ", ";\n  & img {\n    display: none;\n    margin-right: 10px;\n    ", " {\n      display: ", ";\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme, loader = _a.loader;
    return (loader ? theme.colors.greyText2 : theme.colors.text);
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var loader = _a.loader;
    return (loader ? "none" : "block");
});
var WonBlcok = styled__default['default'].div(templateObject_17$2 || (templateObject_17$2 = __makeTemplateObject(["\n  position: relative;\n  text-align: center;\n  width: 100%;\n  & img {\n    position: absolute;\n    top: -95px;\n    right: -70px;\n    z-index: 10;\n  }\n"], ["\n  position: relative;\n  text-align: center;\n  width: 100%;\n  & img {\n    position: absolute;\n    top: -95px;\n    right: -70px;\n    z-index: 10;\n  }\n"])));
var StyledCardBTC = function (_a) {
    var children = _a.children, leftContent = _a.leftContent, rightContent = _a.rightContent, payoutUp = _a.payoutUp, payoutDown = _a.payoutDown, negative = _a.negative, showBtnWinnings = _a.showBtnWinnings, hasEnteredUp = _a.hasEnteredUp, hasEnteredDown = _a.hasEnteredDown, live = _a.live, displayNone = _a.displayNone, colorNone = _a.colorNone, time = _a.time, disabledTimer = _a.disabledTimer, btnWinnings = _a.btnWinnings, btcWon = _a.btcWon, ethWon = _a.ethWon, loader = _a.loader, texts = _a.texts;
    return (React__default['default'].createElement(WrapOpacity, { live: live },
        React__default['default'].createElement(Wrap$l, null,
            React__default['default'].createElement(TopContent$2, null,
                React__default['default'].createElement(LeftContent$1, null, leftContent),
                React__default['default'].createElement(Timer$2, { time: time, color: "#fff", disabled: disabledTimer }),
                React__default['default'].createElement(RightContent$2, null, rightContent)),
            React__default['default'].createElement(Content$3, null,
                React__default['default'].createElement(UpContent, { negative: negative, showUp: showBtnWinnings, colorNone: colorNone, displayNone: displayNone }, btcWon ? (React__default['default'].createElement(WonBlcok, null,
                    (texts === null || texts === void 0 ? void 0 : texts.collection) || "Collect Winnings",
                    React__default['default'].createElement("img", { src: WIN$1, alt: "win" }))) : (React__default['default'].createElement(React__default['default'].Fragment, null,
                    React__default['default'].createElement(Currency$1, { loader: loader },
                        React__default['default'].createElement("img", { src: BTC, alt: "btc" }),
                        "BTC"),
                    React__default['default'].createElement(RightText$2, { displayNone: displayNone },
                        React__default['default'].createElement("div", { className: "payout" }, (texts === null || texts === void 0 ? void 0 : texts.payout) || "Payout"),
                        React__default['default'].createElement("div", null, payoutUp),
                        React__default['default'].createElement(IconComplete$1, { className: "completeIcon", showIcon: hasEnteredUp },
                            React__default['default'].createElement(Icon$w, { fill: "#FFB72C" })))))),
                React__default['default'].createElement(UpContentWin, { show: showBtnWinnings },
                    React__default['default'].createElement(ButtonBnb, null, btnWinnings),
                    React__default['default'].createElement(WinnerImg, null,
                        React__default['default'].createElement("img", { src: Winner }))),
                React__default['default'].createElement(MainBlock$2, { loader: loader, negative: negative, colorNone: colorNone }, children),
                React__default['default'].createElement(DownContent, { negative: negative, displayNone: displayNone }, ethWon ? (React__default['default'].createElement(WonBlcok, null,
                    (texts === null || texts === void 0 ? void 0 : texts.collection) || "Collect Winnings",
                    React__default['default'].createElement("img", { src: WIN$1, alt: "win" }))) : (React__default['default'].createElement(React__default['default'].Fragment, null,
                    React__default['default'].createElement(Currency$1, { loader: loader },
                        React__default['default'].createElement("img", { src: ETH, alt: "eth" }),
                        "ETH"),
                    React__default['default'].createElement(RightText$2, { displayNone: displayNone },
                        React__default['default'].createElement("div", { className: "payout" }, (texts === null || texts === void 0 ? void 0 : texts.payout) || "Payout"),
                        React__default['default'].createElement("div", null, payoutDown),
                        React__default['default'].createElement(IconCompleteDown, { className: "completeIcon", showIcon: hasEnteredDown },
                            React__default['default'].createElement(Icon$w, { fill: "#FFB72C" }))))))))));
};
var templateObject_1$1E, templateObject_2$1m, templateObject_3$14, templateObject_4$T, templateObject_5$E, templateObject_6$v, templateObject_7$h, templateObject_8$d, templateObject_9$9, templateObject_10$7, templateObject_11$6, templateObject_12$5, templateObject_13$4, templateObject_14$3, templateObject_15$2, templateObject_16$2, templateObject_17$2;

var CardBTC = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return React__default['default'].createElement(StyledCardBTC, __assign({}, props), children);
};

var Wrap$k = styled__default['default'].div(templateObject_1$1D || (templateObject_1$1D = __makeTemplateObject(["\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"], ["\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"])));
var Closed$1 = styled__default['default'].div(templateObject_2$1l || (templateObject_2$1l = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 13px;\n  line-height: 16px;\n  letter-spacing: 1px;\n  color: ", ";\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 13px;\n  line-height: 16px;\n  letter-spacing: 1px;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
var Middle$1 = styled__default['default'](Closed$1)(templateObject_3$13 || (templateObject_3$13 = __makeTemplateObject(["\n  font-size: 13px;\n  line-height: 16px;\n  letter-spacing: 1px;\n  color: ", ";\n"], ["\n  font-size: 13px;\n  line-height: 16px;\n  letter-spacing: 1px;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.greenText2;
});
var Locked$1 = styled__default['default'](Closed$1)(templateObject_4$S || (templateObject_4$S = __makeTemplateObject(["\n  margin-top: 8px;\n  font-size: 13px;\n  line-height: 16px;\n  letter-spacing: 0.05em;\n  color: ", ";\n"], ["\n  margin-top: 8px;\n  font-size: 13px;\n  line-height: 16px;\n  letter-spacing: 0.05em;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.greyText;
});
var Line$8 = styled__default['default'].div(templateObject_5$D || (templateObject_5$D = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n"], ["\n  display: flex;\n  align-items: center;\n"])));
var Percent$1 = styled__default['default'].div(templateObject_6$u || (templateObject_6$u = __makeTemplateObject(["\n  color: ", ";\n  background: ", ";\n  border-radius: 5px;\n  padding: 3px 7px;\n  margin-right: 9px;\n  font-weight: 500;\n  font-size: 11px;\n  line-height: 14px;\n  text-align: center;\n  letter-spacing: 0.05em;\n"], ["\n  color: ", ";\n  background: ", ";\n  border-radius: 5px;\n  padding: 3px 7px;\n  margin-right: 9px;\n  font-weight: 500;\n  font-size: 11px;\n  line-height: 14px;\n  text-align: center;\n  letter-spacing: 0.05em;\n"])), function (_a) {
    var theme = _a.theme, btcLider = _a.btcLider;
    return (btcLider ? theme.colors.green : theme.colors.redBg);
}, function (_a) {
    var theme = _a.theme, btcLider = _a.btcLider;
    return btcLider ? polished.transparentize(0.75, theme.colors.green) : polished.transparentize(0.75, theme.colors.redBg);
});
var ExpiredCardBTC = function (_a) {
    var texts = _a.texts, closedBTC = _a.closedBTC, lockedBTC = _a.lockedBTC, closedETH = _a.closedETH, lockedETH = _a.lockedETH, prize = _a.prize, btcLider = _a.btcLider, percentBTC = _a.percentBTC, percentETH = _a.percentETH;
    return (React__default['default'].createElement(Wrap$k, null,
        React__default['default'].createElement("div", null,
            React__default['default'].createElement(Closed$1, null,
                (texts === null || texts === void 0 ? void 0 : texts.closed) || "CLOSED PRICE",
                " BTC ",
                React__default['default'].createElement("p", null,
                    " ",
                    closedBTC)),
            React__default['default'].createElement(Locked$1, null,
                React__default['default'].createElement(Line$8, null,
                    React__default['default'].createElement(Percent$1, { btcLider: btcLider }, percentBTC),
                    (texts === null || texts === void 0 ? void 0 : texts.locked) || "Locked Price"),
                React__default['default'].createElement("p", null, lockedBTC))),
        React__default['default'].createElement(Middle$1, null,
            (texts === null || texts === void 0 ? void 0 : texts.prize) || "PRIZE POLL",
            React__default['default'].createElement("p", null, prize)),
        React__default['default'].createElement("div", null,
            React__default['default'].createElement(Closed$1, null,
                (texts === null || texts === void 0 ? void 0 : texts.closed) || "CLOSED PRICE",
                " ETH ",
                React__default['default'].createElement("p", null,
                    " ",
                    closedETH)),
            React__default['default'].createElement(Locked$1, null,
                React__default['default'].createElement(Line$8, null,
                    React__default['default'].createElement(Percent$1, { btcLider: !btcLider }, percentETH),
                    (texts === null || texts === void 0 ? void 0 : texts.locked) || "Locked Price"),
                React__default['default'].createElement("p", null, lockedETH)))));
};
var templateObject_1$1D, templateObject_2$1l, templateObject_3$13, templateObject_4$S, templateObject_5$D, templateObject_6$u;

var Wrap$j = styled__default['default'].div(templateObject_1$1C || (templateObject_1$1C = __makeTemplateObject(["\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"], ["\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"])));
var Closed = styled__default['default'].div(templateObject_2$1k || (templateObject_2$1k = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 13px;\n  line-height: 16px;\n  letter-spacing: 1px;\n  color: ", ";\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 13px;\n  line-height: 16px;\n  letter-spacing: 1px;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
var Middle = styled__default['default'](Closed)(templateObject_3$12 || (templateObject_3$12 = __makeTemplateObject(["\n  font-size: 13px;\n  line-height: 16px;\n  letter-spacing: 1px;\n  color: ", ";\n"], ["\n  font-size: 13px;\n  line-height: 16px;\n  letter-spacing: 1px;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.greenText2;
});
var Locked = styled__default['default'](Closed)(templateObject_4$R || (templateObject_4$R = __makeTemplateObject(["\n  margin-top: 8px;\n  font-size: 13px;\n  line-height: 16px;\n  letter-spacing: 0.05em;\n  color: ", ";\n"], ["\n  margin-top: 8px;\n  font-size: 13px;\n  line-height: 16px;\n  letter-spacing: 0.05em;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.greyText;
});
var Line$7 = styled__default['default'].div(templateObject_5$C || (templateObject_5$C = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n"], ["\n  display: flex;\n  align-items: center;\n"])));
var Percent = styled__default['default'].div(templateObject_6$t || (templateObject_6$t = __makeTemplateObject(["\n  color: ", ";\n  background: ", ";\n  border-radius: 5px;\n  padding: 3px 7px;\n  margin-right: 9px;\n  font-weight: 500;\n  font-size: 11px;\n  line-height: 14px;\n  text-align: center;\n  letter-spacing: 0.05em;\n"], ["\n  color: ", ";\n  background: ", ";\n  border-radius: 5px;\n  padding: 3px 7px;\n  margin-right: 9px;\n  font-weight: 500;\n  font-size: 11px;\n  line-height: 14px;\n  text-align: center;\n  letter-spacing: 0.05em;\n"])), function (_a) {
    var theme = _a.theme, btcLider = _a.btcLider;
    return (btcLider ? theme.colors.green : theme.colors.redBg);
}, function (_a) {
    var theme = _a.theme, btcLider = _a.btcLider;
    return btcLider ? polished.transparentize(0.75, theme.colors.green) : polished.transparentize(0.75, theme.colors.redBg);
});
var LiveCardBTC = function (_a) {
    var texts = _a.texts, closedBTC = _a.closedBTC, lockedBTC = _a.lockedBTC, closedETH = _a.closedETH, lockedETH = _a.lockedETH, prize = _a.prize, percentBTC = _a.percentBTC, percentETH = _a.percentETH, btcLider = _a.btcLider;
    return (React__default['default'].createElement(Wrap$j, null,
        React__default['default'].createElement("div", null,
            React__default['default'].createElement(Closed, null,
                (texts === null || texts === void 0 ? void 0 : texts.last) || "LAST PRICE",
                " BTC ",
                React__default['default'].createElement("p", null,
                    " ",
                    closedBTC)),
            React__default['default'].createElement(Locked, null,
                React__default['default'].createElement(Line$7, null,
                    React__default['default'].createElement(Percent, { btcLider: btcLider }, percentBTC),
                    (texts === null || texts === void 0 ? void 0 : texts.locked) || "Locked Price"),
                React__default['default'].createElement("p", null,
                    " ",
                    lockedBTC))),
        React__default['default'].createElement(Middle, null,
            (texts === null || texts === void 0 ? void 0 : texts.prize) || "PRIZE POLL",
            React__default['default'].createElement("p", null, prize)),
        React__default['default'].createElement("div", null,
            React__default['default'].createElement(Closed, null,
                (texts === null || texts === void 0 ? void 0 : texts.last) || "LAST PRICE",
                " ETH ",
                React__default['default'].createElement("p", null,
                    " ",
                    closedETH)),
            React__default['default'].createElement(Locked, null,
                React__default['default'].createElement(Line$7, null,
                    React__default['default'].createElement(Percent, { btcLider: !btcLider }, percentETH),
                    (texts === null || texts === void 0 ? void 0 : texts.locked) || "Locked Price"),
                React__default['default'].createElement("p", null,
                    " ",
                    lockedETH)))));
};
var templateObject_1$1C, templateObject_2$1k, templateObject_3$12, templateObject_4$R, templateObject_5$C, templateObject_6$t;

var Front = styled__default['default'].div(templateObject_1$1B || (templateObject_1$1B = __makeTemplateObject(["\n  height: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  position: absolute;\n  top: 0;\n  width: 100%;\n"], ["\n  height: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  position: absolute;\n  top: 0;\n  width: 100%;\n"])));
var Back = styled__default['default'](Front)(templateObject_2$1j || (templateObject_2$1j = __makeTemplateObject(["\n  transform: rotateY(180deg) translateX(50%);\n"], ["\n  transform: rotateY(180deg) translateX(50%);\n"])));
var Inner$1 = styled__default['default'].div(templateObject_3$11 || (templateObject_3$11 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  height: 100%;\n  position: relative;\n  transform: rotateY(", "deg);\n  transform-style: preserve-3d;\n  transition: transform 600ms;\n  border-radius: 15px;\n  box-sizing: border-box;\n\n  ", " {\n    z-index: ", ";\n    backface-visibility: hidden;\n    transition: 0;\n    width: 278px;\n    ", " {\n      width: 308px;\n    }\n  }\n\n  ", " {\n    z-index: ", ";\n    padding: 18px 15px 20px;\n    transition: 0;\n    background: ", ";\n    border-radius: 15px;\n    height: 100%;\n    width: 100%;\n  }\n"], ["\n  display: flex;\n  justify-content: center;\n  height: 100%;\n  position: relative;\n  transform: rotateY(", "deg);\n  transform-style: preserve-3d;\n  transition: transform 600ms;\n  border-radius: 15px;\n  box-sizing: border-box;\n\n  ", " {\n    z-index: ", ";\n    backface-visibility: hidden;\n    transition: 0;\n    width: 278px;\n    ", " {\n      width: 308px;\n    }\n  }\n\n  ", " {\n    z-index: ", ";\n    padding: 18px 15px 20px;\n    transition: 0;\n    background: ", ";\n    border-radius: 15px;\n    height: 100%;\n    width: 100%;\n  }\n"])), function (_a) {
    var isFlipped = _a.isFlipped;
    return (isFlipped ? 180 : 0);
}, Front, function (_a) {
    var isFlipped = _a.isFlipped;
    return (isFlipped ? 5 : 10);
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, Back, function (_a) {
    var isFlipped = _a.isFlipped;
    return (isFlipped ? 10 : 5);
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.cardBg;
});
var StyledCardFlip = styled__default['default'].div(templateObject_4$Q || (templateObject_4$Q = __makeTemplateObject(["\n  perspective: 1000px;\n  height: 371px;\n  width: 335px;\n  border-radius: 15px;\n"], ["\n  perspective: 1000px;\n  height: 371px;\n  width: 335px;\n  border-radius: 15px;\n"])));
var getComponents = function (children) {
    if (children.length !== 2) {
        throw new Error("CardFlip: Two children are required");
    }
    return children;
};
var CardFlipBTC = function (_a) {
    var isFlipped = _a.isFlipped, children = _a.children;
    var _b = getComponents(children), front = _b[0], back = _b[1];
    return (React__default['default'].createElement(StyledCardFlip, null,
        React__default['default'].createElement(Inner$1, { isFlipped: isFlipped },
            React__default['default'].createElement(Front, null, front),
            React__default['default'].createElement(Back, null, back))));
};
var templateObject_1$1B, templateObject_2$1j, templateObject_3$11, templateObject_4$Q;

var ButtonsBlockBTC = function (_a) {
    var _b;
    var ethButton = _a.ethButton, btcButton = _a.btcButton, pool = _a.pool, hasEnteredUp = _a.hasEnteredUp, hasEnteredDown = _a.hasEnteredDown, handleSetPosition = _a.handleSetPosition, disabledButton = _a.disabledButton, texts = _a.texts;
    return (React__default['default'].createElement(ButtonsBlockWrap$1, null,
        React__default['default'].createElement(PrizeBlock, null,
            React__default['default'].createElement("p", null, ((_b = texts === null || texts === void 0 ? void 0 : texts.prize) === null || _b === void 0 ? void 0 : _b.toUpperCase()) || "PRIZE POOL"),
            React__default['default'].createElement("p", null, pool)),
        React__default['default'].createElement(Buttons$4, null,
            React__default['default'].createElement(ButtonWrap, { style: { marginBottom: 14 }, className: hasEnteredDown ? "unCoise" : "" },
                React__default['default'].createElement(ButtonItem, { width: "100%", variant: "yellow", onClick: function () { return handleSetPosition(BetPosition.BULL); }, disabled: disabledButton },
                    React__default['default'].createElement(React__default['default'].Fragment, null,
                        React__default['default'].createElement(Currency, null,
                            React__default['default'].createElement("img", { src: BTC, alt: "btc" }),
                            "BTC"),
                        React__default['default'].createElement(ButtonRightBlock, null,
                            btcButton,
                            React__default['default'].createElement(IconComplete, { className: "completeIcon", hasEntered: hasEnteredUp },
                                React__default['default'].createElement(Icon$w, { fill: "#FFB72C" })))))),
            React__default['default'].createElement(ButtonWrap, { className: hasEnteredUp ? "unCoise" : "" },
                React__default['default'].createElement(ButtonItem, { width: "100%", variant: "gray", onClick: function () { return handleSetPosition(BetPosition.BEAR); }, disabled: disabledButton, display: "flex" },
                    React__default['default'].createElement(React__default['default'].Fragment, null,
                        React__default['default'].createElement(Currency, null,
                            React__default['default'].createElement("img", { src: ETH, alt: "btc" }),
                            "ETH"),
                        React__default['default'].createElement(ButtonRightBlock, null,
                            ethButton,
                            React__default['default'].createElement(IconComplete, { className: "completeIcon", hasEntered: hasEnteredDown },
                                React__default['default'].createElement(Icon$w, { fill: "#FFB72C" })))))))));
};
var Currency = styled__default['default'].div(templateObject_1$1A || (templateObject_1$1A = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  & img {\n    margin-right: 7px;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  & img {\n    margin-right: 7px;\n  }\n"])));
var ButtonItem = styled__default['default'](Button$9)(templateObject_2$1i || (templateObject_2$1i = __makeTemplateObject(["\n  padding: 0 18px;\n  justify-content: space-between;\n"], ["\n  padding: 0 18px;\n  justify-content: space-between;\n"])));
var ButtonsBlockWrap$1 = styled__default['default'].div(templateObject_3$10 || (templateObject_3$10 = __makeTemplateObject(["\n  height: 193px;\n  width: 335px;\n  padding-bottom: 17px;\n  background: ", ";\n  position: relative;\n  left: -5%;\n  z-index: 2;\n  padding: 0 13px;\n  top: 0px;\n  box-sizing: border-box;\n  box-shadow: ", ";\n  border-radius: 15px;\n  @media (max-width: 767px) {\n    width: 303px;\n  }\n"], ["\n  height: 193px;\n  width: 335px;\n  padding-bottom: 17px;\n  background: ", ";\n  position: relative;\n  left: -5%;\n  z-index: 2;\n  padding: 0 13px;\n  top: 0px;\n  box-sizing: border-box;\n  box-shadow: ", ";\n  border-radius: 15px;\n  @media (max-width: 767px) {\n    width: 303px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.bgGray;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.cardShadow;
});
var Buttons$4 = styled__default['default'].div(templateObject_4$P || (templateObject_4$P = __makeTemplateObject(["\n  position: relative;\n  &.unChoiced {\n    opacity: 0.25;\n  }\n"], ["\n  position: relative;\n  &.unChoiced {\n    opacity: 0.25;\n  }\n"])));
var PrizeBlock = styled__default['default'].div(templateObject_5$B || (templateObject_5$B = __makeTemplateObject(["\n  padding: 23px 18px 18px;\n  display: flex;\n  justify-content: space-between;\n  font-weight: 500;\n  font-size: 17px;\n  line-height: 22px;\n  letter-spacing: 0.5px;\n  color: ", ";\n"], ["\n  padding: 23px 18px 18px;\n  display: flex;\n  justify-content: space-between;\n  font-weight: 500;\n  font-size: 17px;\n  line-height: 22px;\n  letter-spacing: 0.5px;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
var ButtonWrap = styled__default['default'].div(templateObject_6$s || (templateObject_6$s = __makeTemplateObject(["\n  position: relative;\n  &.unCoise {\n    opacity: 0.25;\n  }\n"], ["\n  position: relative;\n  &.unCoise {\n    opacity: 0.25;\n  }\n"])));
var ButtonRightBlock = styled__default['default'].div(templateObject_7$g || (templateObject_7$g = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n"], ["\n  display: flex;\n  align-items: center;\n"])));
var IconComplete = styled__default['default'].div(templateObject_8$c || (templateObject_8$c = __makeTemplateObject(["\n  display: ", ";\n  margin-left: 7px;\n  margin-right: -5px;\n"], ["\n  display: ", ";\n  margin-left: 7px;\n  margin-right: -5px;\n"])), function (_a) {
    var hasEntered = _a.hasEntered;
    return (hasEntered ? "flex" : "none");
});
var templateObject_1$1A, templateObject_2$1i, templateObject_3$10, templateObject_4$P, templateObject_5$B, templateObject_6$s, templateObject_7$g, templateObject_8$c;

var CardNext = function (_a) {
    var roundEpoch = _a.roundEpoch, time = _a.time, payoutWin = _a.payoutWin, payoutLose = _a.payoutLose, pool = _a.pool, hasEnteredUp = _a.hasEnteredUp, hasEnteredDown = _a.hasEnteredDown, handleSetPosition = _a.handleSetPosition, disabledButton = _a.disabledButton, disabledTimer = _a.disabledTimer, textRow = _a.textRow, textsButtons = _a.textsButtons, ethButton = _a.ethButton, btcButton = _a.btcButton;
    return (React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement(TopContent$3, { rightContent: roundEpoch },
            React__default['default'].createElement(Timer$2, { color: "white", time: time, disabled: disabledTimer })),
        React__default['default'].createElement(WrapContent, null,
            React__default['default'].createElement(ValueRow, { texts: textRow, vector: "BTC", value: payoutWin }),
            React__default['default'].createElement(ButtonsBlockWrap, null,
                React__default['default'].createElement(ButtonsBlockBTC, { ethButton: ethButton, btcButton: btcButton, texts: textsButtons, pool: pool, hasEnteredUp: hasEnteredUp, hasEnteredDown: hasEnteredDown, handleSetPosition: handleSetPosition, disabledButton: disabledButton })),
            React__default['default'].createElement(ValueRow, { texts: textRow, vector: "ETH", value: payoutLose }))));
};
var WrapContent = styled__default['default'].div(templateObject_1$1z || (templateObject_1$1z = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-radius: 15px;\n  background: ", ";\n  margin-top: 28px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-radius: 15px;\n  background: ", ";\n  margin-top: 28px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.bgCard;
});
var ButtonsBlockWrap = styled__default['default'].div(templateObject_2$1h || (templateObject_2$1h = __makeTemplateObject(["\n  height: 193px;\n  width: 308px;\n  padding-bottom: 17px;\n  background: ", ";\n  position: relative;\n  z-index: 2;\n  padding: 0 13px;\n  box-sizing: border-box;\n  box-shadow: ", ";\n  border-radius: 15px;\n  ", " {\n    width: 335px;\n  }\n"], ["\n  height: 193px;\n  width: 308px;\n  padding-bottom: 17px;\n  background: ", ";\n  position: relative;\n  z-index: 2;\n  padding: 0 13px;\n  box-sizing: border-box;\n  box-shadow: ", ";\n  border-radius: 15px;\n  ", " {\n    width: 335px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.bgGray;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.cardShadow;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var templateObject_1$1z, templateObject_2$1h;

var SetPositionCardBTC = function (_a) {
    var onBack = _a.onBack, children = _a.children, inputValue = _a.inputValue, onUserInput = _a.onUserInput, showFieldWarning = _a.showFieldWarning, inputProps = _a.inputProps, handlePercentChange = _a.handlePercentChange, disabledTab = _a.disabledTab, texts = _a.texts, inputTexts = _a.inputTexts, iconBalanceInput = _a.iconBalanceInput;
    return (React__default['default'].createElement(Wrap$i, null,
        React__default['default'].createElement(ButtonBack, { onClick: onBack },
            React__default['default'].createElement(ArrowIcon$1, null)),
        React__default['default'].createElement(Title$c, null, texts || "Set Position"),
        React__default['default'].createElement(BalanceInput, { texts: inputTexts, value: inputValue, onUserInput: onUserInput, isWarning: showFieldWarning, inputProps: inputProps, icon: iconBalanceInput }),
        React__default['default'].createElement(TabsBlock, null,
            React__default['default'].createElement(TabsCard, { handlePercentChange: handlePercentChange, disabledTab: disabledTab })),
        children));
};
var Wrap$i = styled__default['default'].div(templateObject_1$1y || (templateObject_1$1y = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var ButtonBack = styled__default['default'].button(templateObject_2$1g || (templateObject_2$1g = __makeTemplateObject(["\n  height: 30px;\n  width: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  right: 0;\n  border: none;\n  background: none;\n  transform: rotateY(180deg);\n  background: ", ";\n  border-radius: 7px;\n  cursor: pointer;\n"], ["\n  height: 30px;\n  width: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  right: 0;\n  border: none;\n  background: none;\n  transform: rotateY(180deg);\n  background: ", ";\n  border-radius: 7px;\n  cursor: pointer;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.whiteRgba;
});
var Title$c = styled__default['default'].div(templateObject_3$$ || (templateObject_3$$ = __makeTemplateObject(["\n  margin-bottom: 22px;\n  font-weight: 500;\n  font-size: 21px;\n  line-height: 27px;\n  letter-spacing: 0.5px;\n  color: ", ";\n"], ["\n  margin-bottom: 22px;\n  font-weight: 500;\n  font-size: 21px;\n  line-height: 27px;\n  letter-spacing: 0.5px;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
var TabsBlock = styled__default['default'].div(templateObject_4$O || (templateObject_4$O = __makeTemplateObject(["\n  margin-top: 35px;\n  margin-bottom: 16px;\n"], ["\n  margin-top: 35px;\n  margin-bottom: 16px;\n"])));
var templateObject_1$1y, templateObject_2$1g, templateObject_3$$, templateObject_4$O;

var orangeAnimation = styled.keyframes(templateObject_1$1x || (templateObject_1$1x = __makeTemplateObject(["\n  0%, 100% { transform: translate(0, 0); }\n  25% { transform: translate(0, -20px); }\n  50% { transform: translate(20px, 0); }\n  75% { transform: translate(-20px, 0); }\n"], ["\n  0%, 100% { transform: translate(0, 0); }\n  25% { transform: translate(0, -20px); }\n  50% { transform: translate(20px, 0); }\n  75% { transform: translate(-20px, 0); }\n"])));
var redAnimation = styled.keyframes(templateObject_2$1f || (templateObject_2$1f = __makeTemplateObject(["\n  0%, 100% { transform: translate(0, 0); }\n  25% { transform: translate(0, 20px); }\n  50% { transform: translate(-20px, 0); }\n  75% { transform: translate(20px, 0); }\n"], ["\n  0%, 100% { transform: translate(0, 0); }\n  25% { transform: translate(0, 20px); }\n  50% { transform: translate(-20px, 0); }\n  75% { transform: translate(20px, 0); }\n"])));
var greenAnimation = styled.keyframes(templateObject_3$_ || (templateObject_3$_ = __makeTemplateObject(["\n  0%, 100% { transform: translate(0, 0); }\n  25% { transform: translate(20px, 0px); }\n  50% { transform: translate(0, 20px); }\n  75% { transform: translate(0, -20px); }\n"], ["\n  0%, 100% { transform: translate(0, 0); }\n  25% { transform: translate(20px, 0px); }\n  50% { transform: translate(0, 20px); }\n  75% { transform: translate(0, -20px); }\n"])));
var yellowAnimation = styled.keyframes(templateObject_4$N || (templateObject_4$N = __makeTemplateObject(["\n  0%, 100% { transform: translate(0, 0); }\n  25% { transform: translate(-20px, 0); }\n  50% { transform: translate(0, -20px); }\n  75% { transform: translate(0, 20px); }\n"], ["\n  0%, 100% { transform: translate(0, 0); }\n  25% { transform: translate(-20px, 0); }\n  50% { transform: translate(0, -20px); }\n  75% { transform: translate(0, 20px); }\n"])));
var Wrap$h = styled__default['default'].div(templateObject_5$A || (templateObject_5$A = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-top: 40px;\n  font-weight: 500;\n  color: ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-top: 40px;\n  font-weight: 500;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
var Loader = styled__default['default'].div(templateObject_6$r || (templateObject_6$r = __makeTemplateObject(["\n  position: ", ";\n  top: 50%;\n"], ["\n  position: ", ";\n  top: 50%;\n"])), function (_a) {
    var textTooltip = _a.textTooltip;
    return (textTooltip ? "static" : "absolute");
});
var OrangeCircle = styled__default['default'].div(templateObject_7$f || (templateObject_7$f = __makeTemplateObject(["\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  animation: ", " 2s linear infinite;\n  border-radius: 50%;\n  background: ", ";\n"], ["\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  animation: ", " 2s linear infinite;\n  border-radius: 50%;\n  background: ", ";\n"])), orangeAnimation, function (_a) {
    var theme = _a.theme;
    return theme.colors.orangeBg;
});
var GreenCircle = styled__default['default'].div(templateObject_8$b || (templateObject_8$b = __makeTemplateObject(["\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  animation: ", " 2s linear infinite;\n  border-radius: 50%;\n  background: ", ";\n"], ["\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  animation: ", " 2s linear infinite;\n  border-radius: 50%;\n  background: ", ";\n"])), greenAnimation, function (_a) {
    var theme = _a.theme;
    return theme.colors.greenBg;
});
var RedCircle = styled__default['default'].div(templateObject_9$8 || (templateObject_9$8 = __makeTemplateObject(["\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  animation: ", " 2s linear infinite;\n  border-radius: 50%;\n  background: ", ";\n"], ["\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  animation: ", " 2s linear infinite;\n  border-radius: 50%;\n  background: ", ";\n"])), redAnimation, function (_a) {
    var theme = _a.theme;
    return theme.colors.redBg;
});
var YellowCircle = styled__default['default'].div(templateObject_10$6 || (templateObject_10$6 = __makeTemplateObject(["\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  animation: ", " 2s linear infinite;\n  border-radius: 50%;\n  background: ", ";\n"], ["\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  animation: ", " 2s linear infinite;\n  border-radius: 50%;\n  background: ", ";\n"])), yellowAnimation, function (_a) {
    var theme = _a.theme;
    return theme.colors.yellowBg;
});
var BottomText = styled__default['default'].div(templateObject_11$5 || (templateObject_11$5 = __makeTemplateObject(["\n  margin-top: 75px;\n  text-align: center;\n  font-weight: normal;\n  font-size: 11px;\n  line-height: 14px;\n  color: ", ";\n  letter-spacing: 0.05em;\n"], ["\n  margin-top: 75px;\n  text-align: center;\n  font-weight: normal;\n  font-size: 11px;\n  line-height: 14px;\n  color: ", ";\n  letter-spacing: 0.05em;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.greyText;
});
var LoaderCardText = function (_a) {
    var textTooltip = _a.textTooltip;
    return (React__default['default'].createElement(Wrap$h, null,
        React__default['default'].createElement(Loader, { textTooltip: textTooltip },
            React__default['default'].createElement(OrangeCircle, null),
            React__default['default'].createElement(GreenCircle, null),
            React__default['default'].createElement(RedCircle, null),
            React__default['default'].createElement(YellowCircle, null)),
        React__default['default'].createElement(BottomText, null, textTooltip)));
};
var templateObject_1$1x, templateObject_2$1f, templateObject_3$_, templateObject_4$N, templateObject_5$A, templateObject_6$r, templateObject_7$f, templateObject_8$b, templateObject_9$8, templateObject_10$6, templateObject_11$5;

var BalanceBlock = function (_a) {
    var btc = _a.btc, value = _a.value;
    return (React__default['default'].createElement(Wrap$g, null,
        btc && (React__default['default'].createElement(Icon, { className: "btc" },
            React__default['default'].createElement("img", { src: BTC, alt: "btc" }))),
        React__default['default'].createElement("p", null, value),
        btc || (React__default['default'].createElement(Icon, { className: "eth" },
            React__default['default'].createElement("img", { src: ETH, alt: "eth" })))));
};
var Wrap$g = styled__default['default'].div(templateObject_1$1w || (templateObject_1$1w = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: 140px;\n  padding: 5px;\n  background: ", ";\n  border-radius: 12px;\n  & p {\n    width: 100%;\n    font-size: 12px;\n    line-height: 19px;\n    text-align: center;\n    letter-spacing: 0.05em;\n    color: ", ";\n    text-align: center;\n  }\n  ", " {\n    width: 180px;\n    & p {\n      font-size: 15px;\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  width: 140px;\n  padding: 5px;\n  background: ", ";\n  border-radius: 12px;\n  & p {\n    width: 100%;\n    font-size: 12px;\n    line-height: 19px;\n    text-align: center;\n    letter-spacing: 0.05em;\n    color: ", ";\n    text-align: center;\n  }\n  ", " {\n    width: 180px;\n    & p {\n      font-size: 15px;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.buttonBg;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Icon = styled__default['default'].div(templateObject_2$1e || (templateObject_2$1e = __makeTemplateObject(["\n  width: 38px;\n  height: 38px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 9px;\n  flex: none;\n  &.btc {\n    background: ", ";\n  }\n  &.eth {\n    background: ", ";\n  }\n"], ["\n  width: 38px;\n  height: 38px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 9px;\n  flex: none;\n  &.btc {\n    background: ", ";\n  }\n  &.eth {\n    background: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.yellowGradient;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.bgCardBtc;
});
var templateObject_1$1w, templateObject_2$1e;

var bunnyFall = styled.keyframes(templateObject_1$1v || (templateObject_1$1v = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n    transform: translate(0, -100%) rotateZ(0deg);\n  }\n\n  75% {\n    opacity: 1;\n    transform: translate(100px, 75vh) rotateZ(270deg);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translate(150px, 100vh) rotateZ(360deg);\n  }\n"], ["\n  0% {\n    opacity: 1;\n    transform: translate(0, -100%) rotateZ(0deg);\n  }\n\n  75% {\n    opacity: 1;\n    transform: translate(100px, 75vh) rotateZ(270deg);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translate(150px, 100vh) rotateZ(360deg);\n  }\n"])));
var Bunny = styled__default['default'].div(templateObject_2$1d || (templateObject_2$1d = __makeTemplateObject(["\n  display: inline-flex;\n  position: fixed;\n  top: 0;\n  left: ", ";\n  transform: translate3d(0, -100%, 0);\n  user-select: none;\n  pointer-events: none;\n  z-index: 99999;\n\n  animation-name: ", ";\n  animation-duration: ", ";\n  animation-timing-function: linear;\n  animation-iteration-count: ", ";\n  animation-play-state: running;\n\n  &:nth-child(5n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(2n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 10) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(7n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(4n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 7) {\n    animation-delay: ", ";\n  }\n"], ["\n  display: inline-flex;\n  position: fixed;\n  top: 0;\n  left: ", ";\n  transform: translate3d(0, -100%, 0);\n  user-select: none;\n  pointer-events: none;\n  z-index: 99999;\n\n  animation-name: ", ";\n  animation-duration: ", ";\n  animation-timing-function: linear;\n  animation-iteration-count: ", ";\n  animation-play-state: running;\n\n  &:nth-child(5n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(2n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 10) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(7n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(4n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 7) {\n    animation-delay: ", ";\n  }\n"])), function (_a) {
    var position = _a.position;
    return position + "vw";
}, bunnyFall, function (_a) {
    var duration = _a.duration;
    return duration + "s";
}, function (_a) {
    var iterations = _a.iterations;
    return (Number.isFinite(iterations) ? String(iterations) : "infinite");
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 1.3 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 1.5 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 1.7 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 2.7 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 3.5 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 5.5 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 8 + "s";
});
var FallingBunnies = function (_a) {
    var _b = _a.count, count = _b === void 0 ? 30 : _b; _a.size; var _d = _a.iterations, iterations = _d === void 0 ? Infinity : _d, _e = _a.duration, duration = _e === void 0 ? 10 : _e;
    var bunnies = __spreadArray([], Array(count)).map(function (_, index) { return (React__default['default'].createElement(Bunny, { key: String(index), position: Math.random() * 100, iterations: iterations, duration: duration },
        React__default['default'].createElement(Text, { color: "text" }, "Failing"))); });
    return React__default['default'].createElement("div", null, bunnies);
};
var templateObject_1$1v, templateObject_2$1d;

var animation = {
    WAVES: "waves",
    PULSE: "pulse",
};
var variant = {
    RECT: "rect",
    CIRCLE: "circle",
};

var waves = styled.keyframes(templateObject_1$1u || (templateObject_1$1u = __makeTemplateObject(["\n  from {\n    left: -150px;\n  }\n  to {\n    left: 100%;\n  }\n"], ["\n  from {\n    left: -150px;\n  }\n  to {\n    left: 100%;\n  }\n"])));
var pulse = styled.keyframes(templateObject_2$1c || (templateObject_2$1c = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"])));
var Root = styled__default['default'].div(templateObject_3$Z || (templateObject_3$Z = __makeTemplateObject(["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n  ", "\n  ", "\n"], ["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var variant$1 = _a.variant, theme = _a.theme;
    return (variant$1 === variant.CIRCLE ? theme.radii.circle : theme.radii.small);
}, styledSystem.layout, styledSystem.space);
var Pulse = styled__default['default'](Root)(templateObject_4$M || (templateObject_4$M = __makeTemplateObject(["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"])), pulse);
var Waves = styled__default['default'](Root)(templateObject_5$z || (templateObject_5$z = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"], ["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"])), waves);
var Skeleton = function (_a) {
    var _b = _a.variant, variant$1 = _b === void 0 ? variant.RECT : _b, _c = _a.animation, animation$1 = _c === void 0 ? animation.PULSE : _c, props = __rest(_a, ["variant", "animation"]);
    if (animation$1 === animation.WAVES) {
        return React__default['default'].createElement(Waves, __assign({ variant: variant$1 }, props));
    }
    return React__default['default'].createElement(Pulse, __assign({ variant: variant$1 }, props));
};
var templateObject_1$1u, templateObject_2$1c, templateObject_3$Z, templateObject_4$M, templateObject_5$z;

var Tabs$1 = function (_a) {
    var tabValue = _a.tabValue, onClick = _a.onClick, tabsList = _a.tabsList;
    return (React__default['default'].createElement(TabsWrap$3, { length: tabsList === null || tabsList === void 0 ? void 0 : tabsList.length }, tabsList === null || tabsList === void 0 ? void 0 : tabsList.map(function (item, i) { return (React__default['default'].createElement(Tab$6, { onClick: onClick, className: tabValue === i ? "active" : "", key: i, value: i }, item)); })));
};
var TabsWrap$3 = styled__default['default'].div(templateObject_1$1t || (templateObject_1$1t = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(", ", 1fr);\n  background: ", ";\n  border-radius: 12px;\n  box-shadow: ", ";\n"], ["\n  display: grid;\n  grid-template-columns: repeat(", ", 1fr);\n  background: ", ";\n  border-radius: 12px;\n  box-shadow: ", ";\n"])), function (_a) {
    var length = _a.length;
    return length || 2;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.buttonBg;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow4;
});
var Tab$6 = styled__default['default'].button(templateObject_2$1b || (templateObject_2$1b = __makeTemplateObject(["\n  padding: 15px 16px;\n  border: none;\n  background: transparent;\n  border-radius: 12px;\n  font-size: 15px;\n  line-height: 19px;\n  font-weight: 500;\n  text-align: center;\n  letter-spacing: 0.5px;\n  text-shadow: 0px 3px 4px rgba(0, 0, 0, 0.15);\n  transition: 0.3s;\n  cursor: pointer;\n  color: ", ";\n  &.active {\n    background: ", ";\n    color: ", ";\n  }\n  ", " {\n    padding: 15px 30px;\n  }\n"], ["\n  padding: 15px 16px;\n  border: none;\n  background: transparent;\n  border-radius: 12px;\n  font-size: 15px;\n  line-height: 19px;\n  font-weight: 500;\n  text-align: center;\n  letter-spacing: 0.5px;\n  text-shadow: 0px 3px 4px rgba(0, 0, 0, 0.15);\n  transition: 0.3s;\n  cursor: pointer;\n  color: ", ";\n  &.active {\n    background: ", ";\n    color: ", ";\n  }\n  ", " {\n    padding: 15px 30px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return polished.transparentize(0.3, theme.colors.text);
}, function (_a) {
    var theme = _a.theme;
    return polished.transparentize(0.85, theme.colors.text);
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var templateObject_1$1t, templateObject_2$1b;

var TabsWithMovingLine = function (_a) {
    var title = _a.title, tabsList = _a.tabsList, tabActive = _a.tabActive, handleToggleTab = _a.handleToggleTab;
    var refTab = React.useMemo(function () { return tabsList.map(function () { return React__default['default'].createRef(); }); }, []);
    var _b = React.useState([]), widthTabsActive = _b[0], setWidthTabsActive = _b[1];
    React.useLayoutEffect(function () {
        if (refTab) {
            refTab.forEach(function (el) { return setWidthTabsActive(function (prev) { var _a; return __spreadArray(__spreadArray([], prev), [((_a = el === null || el === void 0 ? void 0 : el.current) === null || _a === void 0 ? void 0 : _a.clientWidth) || 0]); }); });
        }
    }, []);
    return (React__default['default'].createElement(TopLine$1, null,
        React__default['default'].createElement(Title$b, null, title),
        React__default['default'].createElement(Tabs, null, tabsList.map(function (el, i) { return (React__default['default'].createElement(Tab$5, { active: tabActive === i, value: i, key: i, onClick: handleToggleTab, ref: refTab[i] }, el)); })),
        React__default['default'].createElement(LineTab, { widthTabActive: widthTabsActive[tabActive] || 0, right: widthTabsActive.slice(tabActive + 1, tabsList.length).reduce(function (prev, acc) { return prev + acc; }, 0) })));
};
var TopLine$1 = styled__default['default'](Flex)(templateObject_1$1s || (templateObject_1$1s = __makeTemplateObject(["\n  position: relative;\n  align-items: center;\n  padding-bottom: 15px;\n  border-bottom: 2px solid #1c1c1c;\n"], ["\n  position: relative;\n  align-items: center;\n  padding-bottom: 15px;\n  border-bottom: 2px solid #1c1c1c;\n"])));
var Title$b = styled__default['default'](Text)(templateObject_2$1a || (templateObject_2$1a = __makeTemplateObject(["\n  flex-grow: 1;\n  margin-right: 20px;\n  font-weight: 600;\n  font-size: 21px;\n  line-height: 26px;\n"], ["\n  flex-grow: 1;\n  margin-right: 20px;\n  font-weight: 600;\n  font-size: 21px;\n  line-height: 26px;\n"])));
var Tabs = styled__default['default'](Flex)(templateObject_3$Y || (templateObject_3$Y = __makeTemplateObject([""], [""])));
var Tab$5 = styled__default['default'].button(templateObject_4$L || (templateObject_4$L = __makeTemplateObject(["\n  position: relative;\n  padding: 0 10px;\n  background: none;\n  border: none;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 17px;\n  color: ", ";\n  cursor: pointer;\n  transition: 0.3s;\n"], ["\n  position: relative;\n  padding: 0 10px;\n  background: none;\n  border: none;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 17px;\n  color: ", ";\n  cursor: pointer;\n  transition: 0.3s;\n"])), function (_a) {
    var theme = _a.theme, active = _a.active;
    return (active ? theme.colors.green : theme.colors.textGray);
});
var LineTab = styled__default['default'].span(templateObject_5$y || (templateObject_5$y = __makeTemplateObject(["\n  position: absolute;\n  display: block;\n  height: 1.5px;\n  background: ", ";\n  transition: 0.3s;\n  width: ", ";\n  right: ", ";\n  bottom: -1px;\n"], ["\n  position: absolute;\n  display: block;\n  height: 1.5px;\n  background: ", ";\n  transition: 0.3s;\n  width: ", ";\n  right: ", ";\n  bottom: -1px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.green;
}, function (_a) {
    var widthTabActive = _a.widthTabActive;
    return widthTabActive + "px";
}, function (_a) {
    var right = _a.right;
    return right + "px";
});
var templateObject_1$1s, templateObject_2$1a, templateObject_3$Y, templateObject_4$L, templateObject_5$y;

var ARROWSINGL = "data:image/svg+xml,%3Csvg%20width%3D%227%22%20height%3D%2210%22%20viewBox%3D%220%200%207%2010%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M6%209L2%205L6%201%22%20stroke%3D%22white%22%20strokeWidth%3D%222%22%2F%3E%3C%2Fsvg%3E";

var ARROWDOUBLE = "data:image/svg+xml,%3Csvg%20width%3D%2213%22%20height%3D%2210%22%20viewBox%3D%220%200%2013%2010%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M6%209L2%205L6%201%22%20stroke%3D%22white%22%20strokeWidth%3D%222%22%2F%3E%3Cpath%20d%3D%22M12%209L8%205L12%201%22%20stroke%3D%22white%22%20strokeWidth%3D%222%22%2F%3E%3C%2Fsvg%3E";

var Pagination = function (_a) {
    var length = _a.length, currentPage = _a.currentPage, togglePage = _a.togglePage;
    var paginationRender = function () {
        var pagination = [];
        if (length && currentPage)
            if (length < 4) {
                for (var i = 1; i < length + 1; i++) {
                    pagination.push(i);
                }
            }
            else {
                for (var i = 1; i < length + 1; i++) {
                    if (currentPage === i + 1 || currentPage === i - 1 || currentPage === i) {
                        pagination.push(i);
                    }
                    if (i < currentPage - 1 && !pagination.includes("start") && !pagination.includes("prev")) {
                        pagination.push("start");
                        pagination.push("prev");
                    }
                    if (i > currentPage + 1 && !pagination.includes("next") && !pagination.includes("finish")) {
                        pagination.push("next");
                        pagination.push("finish");
                    }
                }
            }
        return pagination;
    };
    var itemValue = function (item) {
        if (item && currentPage)
            switch (item) {
                case "next":
                    return currentPage + 1;
                case "prev":
                    return currentPage - 1;
                case "finish":
                    return length;
                case "start":
                    return 1;
                default:
                    return item;
            }
    };
    var itemRender = function (item) {
        switch (item) {
            case "next":
                return React__default['default'].createElement("img", { className: "reverse", src: ARROWSINGL });
            case "prev":
                return React__default['default'].createElement("img", { src: ARROWSINGL });
            case "finish":
                return React__default['default'].createElement("img", { className: "reverse", src: ARROWDOUBLE });
            case "start":
                return React__default['default'].createElement("img", { src: ARROWDOUBLE });
            default:
                return item;
        }
    };
    return (React__default['default'].createElement(PaginationWrap, null, length && currentPage && length > 1
        ? paginationRender().map(function (item, i) { return (React__default['default'].createElement(PageButton, { onClick: togglePage, key: i, value: itemValue(item), className: currentPage === item ? "active" : "" }, itemRender(item))); })
        : null));
};
var PaginationWrap = styled__default['default'].div(templateObject_1$1r || (templateObject_1$1r = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto;\n  ", " {\n    margin: 0;\n  }\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto;\n  ", " {\n    margin: 0;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var PageButton = styled__default['default'].button(templateObject_2$19 || (templateObject_2$19 = __makeTemplateObject(["\n  margin-right: 12px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 30px;\n  height: 30px;\n  background: ", ";\n  border-radius: 7px;\n  font-size: 13px;\n  line-height: 16px;\n  text-align: center;\n  letter-spacing: 0.05em;\n  color: ", ";\n  text-shadow: ", ";\n  cursor: pointer;\n  border: none;\n  transition: 0.3s;\n  & img {\n    pointer-events: none;\n    &.reverse {\n      transform: rotateY(180deg);\n    }\n  }\n  &:last-child {\n    margin-right: 0;\n  }\n  &.active {\n    background: ", ";\n  }\n  &.disabled {\n    cursor: default;\n  }\n"], ["\n  margin-right: 12px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 30px;\n  height: 30px;\n  background: ", ";\n  border-radius: 7px;\n  font-size: 13px;\n  line-height: 16px;\n  text-align: center;\n  letter-spacing: 0.05em;\n  color: ", ";\n  text-shadow: ", ";\n  cursor: pointer;\n  border: none;\n  transition: 0.3s;\n  & img {\n    pointer-events: none;\n    &.reverse {\n      transform: rotateY(180deg);\n    }\n  }\n  &:last-child {\n    margin-right: 0;\n  }\n  &.active {\n    background: ", ";\n  }\n  &.disabled {\n    cursor: default;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.whiteRgba;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textShadow;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.greenGradient;
});
var templateObject_1$1r, templateObject_2$19;

var baseColors = {
    failure: "#ED4B9E",
    primary: "#1FC7D4",
    primaryBright: "#53DEE9",
    primaryDark: "#0098A1",
    secondary: "#7645D9",
    success: "#31D0AA",
    warning: "#FFB237",
    blueGradient: "linear-gradient(180deg, #0064C0 0%, #0056A5 100%)",
    dark2: "#1C1C1C",
    green: "#4BE43E",
    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    textShadow2: "0px 4px 7px rgba(0, 0, 0, 0.15)",
    textShadow3: "0px 3px 4px rgba(0, 0, 0, 0.15)",
    boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.2)",
    boxShadow2: "0px 4px 10px rgba(0, 0, 0, 0.25)",
    boxShadow6: "0px 4px 10px rgba(75, 228, 62, 0.25)",
    boxShadow8: "0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05)",
    boxShadow9: "0px 0px 20px rgba(86, 239, 75, 0.35)",
    boxShadow10: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
    filterShadow: "drop-shadow(-3px 0px 8px rgba(0, 0, 0, 0.25))",
    bgOpacity: "rgba(0, 0, 0, 0.3)",
    bgOpacity2: "rgba(0, 0, 0, 0.05)",
    bgOpacitY3: " rgba(255, 255, 255, 0.05)",
    bgBlackRgba: "rgba(43, 43, 50, .7)",
    textGray: "#A3A3A3",
    bgGray: "#26262D",
    bgGrey2: "#252525",
    greenGradient: "linear-gradient(180deg, #4CEE3E -16%, #47DA3B 100%)",
    text2: "#F3F3F3",
    darkPink: "#FF6161",
    whiteRgba: "rgba(255, 255, 255, 0.15)",
    whiteRgba2: "rgba(255, 255, 255, 0.2)",
    greenGradient2: "linear-gradient(180deg, rgba(76, 238, 62, 0.21) -16%, #47da3b 100%)",
    greenGradient3: "linear-gradient(107.51deg, #9BE43E 26.63%, #39DB2C 73.7%)",
    greenRgba: "rgba(86, 239, 75, 0.5)",
    greeanRgba2: "rgba(75, 228, 62, 0.08)",
    textGray2: "#9A9191",
    bgCard: "#404047",
    bgCard2: "#232323",
    bgCard3: "#393939",
    bgCard4: "#1C1C1C",
    cardShadow: "box-shadow: 0px 4px 22px rgba(0, 0, 0, 0.31)",
    yellow: "#FFEA2C",
    bgHeader: "#2B2B32",
    buttonBg2: "#1B1B20",
    buttonBg3: "#1C1C22",
    bgCardBtc: "linear-gradient(180deg, #8A92B2 0%, #62688F 100%)",
    colorCardBtc: "#8A92B2",
    bgCardBtc2: "#FFAC01",
    yellowGradient: "linear-gradient(180deg, #FFC700 -23.33%, #FF8A00 118.33%);",
    yellowGradient2: "linear-gradient(180deg, #FFB601 -16%, #FF9B01 100%)",
    yellowGradient3: "linear-gradient(180deg, #FFEA2C 0%, #FFB72C 100%)",
    greyRgba: "rgba(0, 0, 0, 0.15)",
    greyRgba2: "rgba(38, 38, 45, .5)",
    blur: "-webkit-filter: blur(15px);\n filter: blur(15px); \n  -ms-filter: blur(15px);",
};
var brandColors = {
    binance: "#F0B90B",
};
// export const darkColors: Colors = {
var lightColors = __assign(__assign(__assign({}, baseColors), brandColors), { background: "linear-gradient(180deg, #1B1B22 0%, #0E0E15 100%)", background2: "#17171c", overlayBg: "rgba(0, 0, 0, 0.7)", linkColor: "linear-gradient(180deg, #4CEE3E -16%, #47DA3B 100%)", buttonBg: "rgba(0, 0, 0, 0.25)", buttonShadow: "rgba(0, 0, 0, 0.2)", cardBg: "#26262D", greyText: "#A3A3A3", greyText2: "#9A9191", greyText3: "#BCBCBC", darkGreyBg: "#1d1d22", text: "#fff", greenText: "#4AE43D", orangeBg: "#FF9525", greenBg: "#69E35F", greenBg2: "#56EF4B", greyBg2: "#201e1e", redBg: "#FF6161", yellowBg: "#ECCB57", lightGreyBg: "#C0C0C0", yellowBg2: "#FFB72C", boxShadow3: "-4px -3px 8px rgba(0, 0, 0, 0.25)", boxShadow4: "inset 0px 4px 4px rgba(0, 0, 0, 0.2)", boxShadow5: "0px 3px 4px rgba(0, 0, 0, 0.15)", boxShadow7: "inset 0px 1px 8px rgba(0, 0, 0, 0.19)", blackColor: "#000", greenText2: "#47DA3B", backgroundDisabled: "#3c3742", contrast: "#FFFFFF", invertedContrast: "#000", input: "#483f5a", inputSecondary: "#66578D", primaryDark: "#0098A1", tertiary: "#353547", textDisabled: "#666171", textSubtle: "#A28BD4", borderColor: "#524B63", card: "#FFFFFF", panel: "#2E2E35", dark: "#26262D", gradients: {
        greenGradient: "linear-gradient(180deg, rgba(76, 238, 62, 0.15) -16%, rgba(71, 218, 59, 0.15) 100%)",
        bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
    } });
// export const lightColors: Colors = {
var darkColors = __assign(__assign(__assign({}, baseColors), brandColors), { background: "#FAF9FA", background2: "#17171c", overlayBg: "rgba(0, 0, 0, 0.7)", linkColor: "linear-gradient(180deg, #4CEE3E -16%, #47DA3B 100%)", buttonBg: "rgba(0, 0, 0, 0.25)", buttonShadow: "rgba(0, 0, 0, 0.2)", cardBg: "#26262D", greyText: "#A3A3A3", darkGreyBg: "#1d1d22", greyText2: "#9A9191", greyText3: "#BCBCBC", text: "#fff", greenText: "#4AE43D", orangeBg: "#FF9525", greenBg: "#69E35F", greenBg2: "#56EF4B", greyBg2: "#201e1e", redBg: "#FF6161", yellowBg: "#ECCB57", lightGreyBg: "#C0C0C0", yellowBg2: "#FFB72C", boxShadow3: "-4px -3px 8px rgba(0, 0, 0, 0.25)", boxShadow4: "inset 0px 4px 4px rgba(0, 0, 0, 0.2)", boxShadow5: "inset 0px 4px 4px rgba(0, 0, 0, 0.2)", boxShadow7: "inset 0px 1px 8px rgba(0, 0, 0, 0.19)", blackColor: "#000", greenText2: "47DA3B", backgroundDisabled: "rgba(255,255,255,.15)", contrast: "#000", invertedContrast: "#FFFFFF", input: "#eeeaf4", inputSecondary: "#d7caec", tertiary: "#EFF4F5", textDisabled: "#BDC2C4", textSubtle: "#8f80ba", borderColor: "#E9EAEB", card: "#26262D", panel: "#2E2E35", dark: "#26262D", gradients: {
        greenGradient: "linear-gradient(180deg, rgba(76, 238, 62, 0.15) -16%, rgba(71, 218, 59, 0.15) 100%)",
        bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
    } });

var ProgressSteps = function (_a) {
    var isError = _a.isError, step = _a.step, texts = _a.texts, stepsText = _a.stepsText;
    return (React__default['default'].createElement(ProgressWrap$3, null,
        React__default['default'].createElement(Title$a, null,
            React__default['default'].createElement(Text, { fontSize: "10px" }, isError ? texts.error : texts.waiting),
            React__default['default'].createElement(CheckIt, { color: isError ? baseColors.darkPink : baseColors.green, as: "button", fontSize: "10px" }, isError ? texts.checkIt : texts.confirmations)),
        React__default['default'].createElement(Steps, null, stepsText.map(function (name, i) { return (React__default['default'].createElement(Step$1, null,
            React__default['default'].createElement(Indicator$1, { complete: i < step, isError: isError }),
            React__default['default'].createElement(Text, { fontSize: "10px" }, name))); }))));
};
var ProgressWrap$3 = styled__default['default'].div(templateObject_1$1q || (templateObject_1$1q = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"])));
var Title$a = styled__default['default'].div(templateObject_2$18 || (templateObject_2$18 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n"], ["\n  display: flex;\n  justify-content: center;\n"])));
var CheckIt = styled__default['default'](Text)(templateObject_3$X || (templateObject_3$X = __makeTemplateObject(["\n  margin-left: 4px;\n  padding: 0;\n  background: none;\n  border: none;\n"], ["\n  margin-left: 4px;\n  padding: 0;\n  background: none;\n  border: none;\n"])));
var Steps = styled__default['default'].div(templateObject_4$K || (templateObject_4$K = __makeTemplateObject(["\n  margin-top: 10px;\n  display: flex;\n  align-items: center;\n"], ["\n  margin-top: 10px;\n  display: flex;\n  align-items: center;\n"])));
var Step$1 = styled__default['default'].div(templateObject_5$x || (templateObject_5$x = __makeTemplateObject(["\n  margin-right: 5px;\n  text-align: center;\n  &:last-child {\n    margin-right: 0;\n  }\n"], ["\n  margin-right: 5px;\n  text-align: center;\n  &:last-child {\n    margin-right: 0;\n  }\n"])));
var Indicator$1 = styled__default['default'].div(templateObject_6$q || (templateObject_6$q = __makeTemplateObject(["\n  position: relative;\n  width: 40px;\n  height: 12px;\n  margin-bottom: 10px;\n  background: ", ";\n  box-shadow: ", ";\n  border-radius: 3px;\n  &:after {\n    display: block;\n    content: \"\";\n    position: absolute;\n    width: calc(100% - 5px);\n    height: calc(100% - 6px);\n    top: 3px;\n    left: 2.5px;\n    border-radius: 2px;\n    background: ", ";\n  }\n"], ["\n  position: relative;\n  width: 40px;\n  height: 12px;\n  margin-bottom: 10px;\n  background: ", ";\n  box-shadow: ", ";\n  border-radius: 3px;\n  &:after {\n    display: block;\n    content: \"\";\n    position: absolute;\n    width: calc(100% - 5px);\n    height: calc(100% - 6px);\n    top: 3px;\n    left: 2.5px;\n    border-radius: 2px;\n    background: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.buttonBg;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow4;
}, function (_a) {
    var isError = _a.isError, complete = _a.complete, theme = _a.theme;
    return isError ? theme.colors.darkPink : complete ? theme.colors.greenText2 : "transparent";
});
var templateObject_1$1q, templateObject_2$18, templateObject_3$X, templateObject_4$K, templateObject_5$x, templateObject_6$q;

var ProgressRange = function (_a) {
    var texts = _a.texts, progress = _a.progress;
    return (React__default['default'].createElement(ProgressWrap$2, null,
        React__default['default'].createElement(Text, { fontSize: "10px" },
            texts.waiting,
            " ",
            texts.networkWaiting),
        React__default['default'].createElement(RangeTrack, { progress: progress }),
        React__default['default'].createElement(RangeTexts, null,
            React__default['default'].createElement(Text, { fontSize: "10px" }, texts.start),
            React__default['default'].createElement(Text, { fontSize: "10px" }, texts.final))));
};
var ProgressWrap$2 = styled__default['default'].div(templateObject_1$1p || (templateObject_1$1p = __makeTemplateObject(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"], ["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"])));
var RangeTrack = styled__default['default'].div(templateObject_2$17 || (templateObject_2$17 = __makeTemplateObject(["\n  position: relative;\n  margin: 10px 0;\n  width: 100%;\n  height: 12px;\n  background: ", ";\n  box-shadow: ", ";\n  border-radius: 3px;\n  &:after {\n    display: block;\n    content: \"\";\n    position: absolute;\n    width: ", ";\n    height: calc(100% - 6px);\n    top: 3px;\n    left: 2.5px;\n    border-radius: 2px;\n    background: ", ";\n  }\n"], ["\n  position: relative;\n  margin: 10px 0;\n  width: 100%;\n  height: 12px;\n  background: ", ";\n  box-shadow: ", ";\n  border-radius: 3px;\n  &:after {\n    display: block;\n    content: \"\";\n    position: absolute;\n    width: ", ";\n    height: calc(100% - 6px);\n    top: 3px;\n    left: 2.5px;\n    border-radius: 2px;\n    background: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.buttonBg;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow4;
}, function (_a) {
    var progress = _a.progress;
    return (progress ? progress + "%" : 0);
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.greenText2;
});
var RangeTexts = styled__default['default'].div(templateObject_3$W || (templateObject_3$W = __makeTemplateObject(["\n  width: 100%;\n  padding: 0 5px;\n  display: flex;\n  justify-content: space-between;\n"], ["\n  width: 100%;\n  padding: 0 5px;\n  display: flex;\n  justify-content: space-between;\n"])));
var templateObject_1$1p, templateObject_2$17, templateObject_3$W;

var ProgressAVAX = function (_a) {
    var blockFrom = _a.blockFrom, blockCurrent = _a.blockCurrent, blockTo = _a.blockTo, texts = _a.texts, time = _a.time, isLoad = _a.isLoad;
    var _b = React.useState(true), noteOpen = _b[0], setNoteOpen = _b[1];
    var progressHandler = function () {
        var from = blockCurrent - blockFrom;
        var to = blockTo - blockFrom;
        return Math.floor((100 * from) / to);
    };
    return (React__default['default'].createElement(Wrapper$l, null,
        React__default['default'].createElement(BlocksAndTimer, null,
            React__default['default'].createElement(Block$9, null,
                React__default['default'].createElement(Text, { size: "xs" }, blockFrom)),
            React__default['default'].createElement(Timer, null,
                React__default['default'].createElement("p", null, "\u2248"),
                React__default['default'].createElement(TimerNotSolid, { isLoad: isLoad, time: time, avax: true })),
            React__default['default'].createElement(Block$9, null,
                React__default['default'].createElement(Text, { size: "xs" }, blockTo))),
        React__default['default'].createElement(Indicator, { progress: progressHandler() },
            React__default['default'].createElement(RoundCurrentBlock, { progress: progressHandler() },
                React__default['default'].createElement(Round$1, null),
                React__default['default'].createElement(TextUnderRound, null,
                    React__default['default'].createElement(Text, { fontSize: "10px" }, texts.currentBlock),
                    React__default['default'].createElement(CurrentBlockText, { fontSize: "10px" }, blockCurrent)))),
        React__default['default'].createElement(Note, null,
            React__default['default'].createElement(UnderProgress, { open: noteOpen },
                React__default['default'].createElement(Text, { fontSize: "10px" }, texts.start),
                React__default['default'].createElement(Text, { fontSize: "10px" }, texts.end)),
            React__default['default'].createElement(NoteContent, { open: noteOpen },
                React__default['default'].createElement(Text, { fontSize: "10px" }, texts.note),
                React__default['default'].createElement(CloseButton, { onClick: function () { return setNoteOpen(!noteOpen); } },
                    React__default['default'].createElement(Icon$R, null))))));
};
var Wrapper$l = styled__default['default'].div(templateObject_1$1o || (templateObject_1$1o = __makeTemplateObject(["\n  position: relative;\n  ", " {\n    max-width: 360px;\n  }\n"], ["\n  position: relative;\n  ", " {\n    max-width: 360px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var UnderProgress = styled__default['default'].div(templateObject_2$16 || (templateObject_2$16 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  opacity: ", ";\n  transition: 0.3s;\n"], ["\n  position: absolute;\n  top: 0;\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  opacity: ", ";\n  transition: 0.3s;\n"])), function (_a) {
    var open = _a.open;
    return (open ? 0 : 1);
});
var BlocksAndTimer = styled__default['default'].div(templateObject_3$V || (templateObject_3$V = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 13px;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 13px;\n"])));
var Timer = styled__default['default'].div(templateObject_4$J || (templateObject_4$J = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  font-size: 11px;\n  line-height: 14px;\n  align-items: center;\n  letter-spacing: 0.05em;\n  color: ", ";\n  & p {\n    width: auto;\n    margin: 0 5px 0 10px;\n  }\n"], ["\n  display: flex;\n  justify-content: center;\n  font-size: 11px;\n  line-height: 14px;\n  align-items: center;\n  letter-spacing: 0.05em;\n  color: ", ";\n  & p {\n    width: auto;\n    margin: 0 5px 0 10px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
var Block$9 = styled__default['default'].div(templateObject_5$w || (templateObject_5$w = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-grow: 1;\n  height: 24px;\n  max-width: 109px;\n  background: ", ";\n  border-radius: 6px;\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-grow: 1;\n  height: 24px;\n  max-width: 109px;\n  background: ", ";\n  border-radius: 6px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.buttonBg;
});
var RoundCurrentBlock = styled__default['default'].div(templateObject_6$p || (templateObject_6$p = __makeTemplateObject(["\n  position: absolute;\n  z-index: 3;\n  top: -4px;\n  left: ", ";\n"], ["\n  position: absolute;\n  z-index: 3;\n  top: -4px;\n  left: ", ";\n"])), function (_a) {
    var progress = _a.progress;
    return (progress ? progress + "%" : 0);
});
var Round$1 = styled__default['default'].div(templateObject_7$e || (templateObject_7$e = __makeTemplateObject(["\n  position: relative;\n  margin-bottom: 5px;\n  right: 10px;\n  width: 15px;\n  height: 15px;\n  border-radius: 25px;\n  background: ", ";\n  &:before {\n    content: \"\";\n    display: block;\n    top: -5px;\n    left: -5px;\n    position: absolute;\n    border: 9px solid ", ";\n    width: 25px;\n    height: 25px;\n    border-radius: 25px;\n  }\n"], ["\n  position: relative;\n  margin-bottom: 5px;\n  right: 10px;\n  width: 15px;\n  height: 15px;\n  border-radius: 25px;\n  background: ", ";\n  &:before {\n    content: \"\";\n    display: block;\n    top: -5px;\n    left: -5px;\n    position: absolute;\n    border: 9px solid ", ";\n    width: 25px;\n    height: 25px;\n    border-radius: 25px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.greeanRgba2;
});
var Note = styled__default['default'].div(templateObject_8$a || (templateObject_8$a = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n"], ["\n  position: relative;\n  width: 100%;\n"])));
var NoteContent = styled__default['default'].div(templateObject_9$7 || (templateObject_9$7 = __makeTemplateObject(["\n  width: 100%;\n  padding: 12px 57px 12px 20px;\n  box-sizing: border-box;\n  background: ", ";\n  border-radius: 12px;\n  z-index: 4;\n  transition: 0.3s;\n  opacity: ", ";\n"], ["\n  width: 100%;\n  padding: 12px 57px 12px 20px;\n  box-sizing: border-box;\n  background: ", ";\n  border-radius: 12px;\n  z-index: 4;\n  transition: 0.3s;\n  opacity: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.buttonBg;
}, function (_a) {
    var open = _a.open;
    return (open ? 1 : 0);
});
var CloseButton = styled__default['default'].button(templateObject_10$5 || (templateObject_10$5 = __makeTemplateObject(["\n  border: none;\n  background: none;\n  padding: 0;\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  cursor: pointer;\n  transform: translateY(-50%);\n"], ["\n  border: none;\n  background: none;\n  padding: 0;\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  cursor: pointer;\n  transform: translateY(-50%);\n"])));
var TextUnderRound = styled__default['default'].div(templateObject_11$4 || (templateObject_11$4 = __makeTemplateObject(["\n  display: none;\n  position: relative;\n  white-space: nowrap;\n  opacity: 0;\n  transition: 0.3s;\n  background: ", ";\n  border-radius: 6px;\n  padding: 4px 8px;\n"], ["\n  display: none;\n  position: relative;\n  white-space: nowrap;\n  opacity: 0;\n  transition: 0.3s;\n  background: ", ";\n  border-radius: 6px;\n  padding: 4px 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.background2;
});
var CurrentBlockText = styled__default['default'](Text)(templateObject_12$4 || (templateObject_12$4 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.greyText;
});
var Indicator = styled__default['default'].div(templateObject_13$3 || (templateObject_13$3 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n  height: 8px;\n  margin-bottom: 13px;\n  background: ", ";\n  //box-shadow: ", ";\n  border-radius: 6px;\n  &:after {\n    display: block;\n    content: \"\";\n    position: absolute;\n    width: calc(100% - 5px);\n    height: 100%;\n    top: 0;\n    left: 0;\n    background: ", ";\n    border-radius: 2px;\n    width: ", ";\n    box-shadow: ", ";\n    border-radius: 6px;\n    max-width: 100%;\n  }\n  &:hover ", " {\n    left: ", ";\n    display: block;\n    opacity: 1;\n    transition: 0.3s;\n  }\n  &:hover ~ ", " > ", " {\n    opacity: 0;\n    transition: 0.3s;\n  }\n"], ["\n  position: relative;\n  width: 100%;\n  height: 8px;\n  margin-bottom: 13px;\n  background: ", ";\n  //box-shadow: ", ";\n  border-radius: 6px;\n  &:after {\n    display: block;\n    content: \"\";\n    position: absolute;\n    width: calc(100% - 5px);\n    height: 100%;\n    top: 0;\n    left: 0;\n    background: ", ";\n    border-radius: 2px;\n    width: ", ";\n    box-shadow: ", ";\n    border-radius: 6px;\n    max-width: 100%;\n  }\n  &:hover ", " {\n    left: ", ";\n    display: block;\n    opacity: 1;\n    transition: 0.3s;\n  }\n  &:hover ~ ", " > ", " {\n    opacity: 0;\n    transition: 0.3s;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.greenRgba;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow4;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.greenText2;
}, function (_a) {
    var progress = _a.progress;
    return (progress ? progress + "%" : 0);
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow9;
}, TextUnderRound, function (_a) {
    var progress = _a.progress;
    return (progress && progress > 50 ? "-100%" : 0);
}, Note, NoteContent);
var templateObject_1$1o, templateObject_2$16, templateObject_3$V, templateObject_4$J, templateObject_5$w, templateObject_6$p, templateObject_7$e, templateObject_8$a, templateObject_9$7, templateObject_10$5, templateObject_11$4, templateObject_12$4, templateObject_13$3;

var SwitchUnitsButton = styled__default['default'](IconButton)(templateObject_1$1n || (templateObject_1$1n = __makeTemplateObject(["\n  width: auto;\n"], ["\n  width: auto;\n"])));
var UnitContainer = styled__default['default'](Text)(templateObject_2$15 || (templateObject_2$15 = __makeTemplateObject(["\n  margin-right: 4px;\n  color: ", ";\n  white-space: nowrap;\n"], ["\n  margin-right: 4px;\n  color: ", ";\n  white-space: nowrap;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
var StyledBalanceInput = styled__default['default'](Box)(templateObject_3$U || (templateObject_3$U = __makeTemplateObject(["\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 12px;\n  box-shadow: ", ";\n  padding: 8px 16px;\n"], ["\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 12px;\n  box-shadow: ", ";\n  padding: 8px 16px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.bgOpacity;
}, function (_a) {
    var theme = _a.theme, isWarning = _a.isWarning;
    return theme.colors[isWarning ? "darkPink" : "bgOpacity"];
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow;
});
var StyledInput = styled__default['default'](Input$1)(templateObject_4$I || (templateObject_4$I = __makeTemplateObject(["\n  background: transparent;\n  border-radius: 0;\n  box-shadow: none;\n  padding-left: 0;\n  padding-right: 0;\n  text-align: ", ";\n  border: none;\n  ::placeholder {\n    color: ", ";\n  }\n  &:focus:not(:disabled) {\n    box-shadow: none;\n  }\n"], ["\n  background: transparent;\n  border-radius: 0;\n  box-shadow: none;\n  padding-left: 0;\n  padding-right: 0;\n  text-align: ", ";\n  border: none;\n  ::placeholder {\n    color: ", ";\n  }\n  &:focus:not(:disabled) {\n    box-shadow: none;\n  }\n"])), function (_a) {
    var _b = _a.textAlign, textAlign = _b === void 0 ? "left" : _b;
    return textAlign;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
var templateObject_1$1n, templateObject_2$15, templateObject_3$U, templateObject_4$I;

var BalanceInputInversion = function (_a) {
    var value = _a.value, _b = _a.placeholder, placeholder = _b === void 0 ? "0.0" : _b, onUserInput = _a.onUserInput, currencyValue = _a.currencyValue, inputProps = _a.inputProps, innerRef = _a.innerRef, _c = _a.isWarning, isWarning = _c === void 0 ? false : _c, _d = _a.decimals, decimals = _d === void 0 ? 18 : _d, unit = _a.unit, switchEditingUnits = _a.switchEditingUnits, props = __rest(_a, ["value", "placeholder", "onUserInput", "currencyValue", "inputProps", "innerRef", "isWarning", "decimals", "unit", "switchEditingUnits"]);
    var handleOnChange = function (e) {
        if (e.currentTarget.validity.valid) {
            onUserInput(e.currentTarget.value.replace(/,/g, "."));
        }
    };
    return (React__default['default'].createElement(StyledBalanceInput, __assign({ isWarning: isWarning }, props),
        React__default['default'].createElement(Flex, { justifyContent: "space-between" },
            React__default['default'].createElement(Box, null,
                React__default['default'].createElement(Flex, { alignItems: "center" },
                    unit && React__default['default'].createElement(UnitContainer, null, unit),
                    React__default['default'].createElement(StyledInput, __assign({ pattern: "^[0-9]*[.,]?[0-9]{0," + decimals + "}$", inputMode: "decimal", min: "0", value: value, onChange: handleOnChange, placeholder: placeholder, ref: innerRef }, inputProps))),
                currencyValue && (React__default['default'].createElement(Text, { fontSize: "13px", letterSpacing: "0.5px", color: "greyText3", mt: "22px" }, currencyValue))),
            switchEditingUnits && (React__default['default'].createElement(Flex, { alignItems: "center", pl: "12px" },
                React__default['default'].createElement(SwitchUnitsButton, { scale: "sm", variant: "text", onClick: switchEditingUnits },
                    React__default['default'].createElement(Icon$6, null)))))));
};

var Textfield = function (_a) {
    var label = _a.label, value = _a.value, placeholder = _a.placeholder, onUserInput = _a.onUserInput, inputProps = _a.inputProps, _b = _a.isWarning, isWarning = _b === void 0 ? false : _b;
    var handleOnChange = function (e) {
        onUserInput(e.target.value);
    };
    return (React__default['default'].createElement(StyledBalanceInput, { isWarning: isWarning },
        React__default['default'].createElement(Text, { fontSize: "14px" }, label),
        React__default['default'].createElement(StyledInput, __assign({ value: value, onChange: handleOnChange, placeholder: placeholder, textAlign: "left" }, inputProps))));
};

var scales$2 = {
    SM: "sm",
    MD: "md",
};

var getScale = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$2.SM:
            return "24px";
        case scales$2.MD:
        default:
            return "30px";
    }
};
var CheckboxInput = styled__default['default'].input.attrs({ type: "checkbox" })(templateObject_1$1m || (templateObject_1$1m = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  background: ", ";\n  border-radius: 7px;\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    border: 1.5px solid ", ";\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  &:checked {\n    border: 1.5px solid ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  background: ", ";\n  border-radius: 7px;\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    border: 1.5px solid ", ";\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  &:checked {\n    border: 1.5px solid ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"])), getScale, getScale, function (_a) {
    var theme = _a.theme;
    return theme.colors.whiteRgba;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.green;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.green;
});
CheckboxInput.defaultProps = {
    scale: scales$2.MD,
};
var templateObject_1$1m;

var getBackgroundColor = function (_a) {
    var color = _a.color, theme = _a.theme;
    return getThemeValue("colors." + color, color)(theme);
};
var StyledButtonMenu = styled__default['default'].div(templateObject_1$1l || (templateObject_1$1l = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 9px;\n  display: ", ";\n  width: ", ";\n  box-shadow: ", ";\n  font-weight: 400;\n  & > button,\n  & > a {\n    flex: ", ";\n  }\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n  & > button,\n  & a {\n    box-shadow: none;\n  }\n  ", "\n  ", "\n"], ["\n  background-color: ", ";\n  border-radius: 9px;\n  display: ", ";\n  width: ", ";\n  box-shadow: ", ";\n  font-weight: 400;\n  & > button,\n  & > a {\n    flex: ", ";\n  }\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n  & > button,\n  & a {\n    box-shadow: none;\n  }\n  ", "\n  ", "\n"])), getBackgroundColor, function (_a) {
    var fullWidth = _a.fullWidth;
    return (fullWidth ? "flex" : "inline-flex");
}, function (_a) {
    var fullWidth = _a.fullWidth;
    return (fullWidth ? "100%" : "auto");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow4;
}, function (_a) {
    var fullWidth = _a.fullWidth;
    return (fullWidth ? 1 : "auto");
}, function (_a) {
    var disabled = _a.disabled, theme = _a.theme, color = _a.color;
    if (disabled) {
        return "\n        opacity: 0.5;\n        & > button:disabled {\n          background-color: transparent;\n          color: " + (color ? theme.colors[color] : theme.colors.text) + ";\n        }\n    ";
    }
    return "";
}, styledSystem.space);
var ButtonMenu = function (_a) {
    var _b = _a.activeIndex, activeIndex = _b === void 0 ? 0 : _b, _c = _a.scale, scale = _c === void 0 ? scales$5.MD : _c, color = _a.color, onItemClick = _a.onItemClick, disabled = _a.disabled, children = _a.children, _d = _a.fullWidth, fullWidth = _d === void 0 ? false : _d, props = __rest(_a, ["activeIndex", "scale", "color", "onItemClick", "disabled", "children", "fullWidth"]);
    return (React__default['default'].createElement(StyledButtonMenu, __assign({ disabled: disabled, color: color, fullWidth: fullWidth }, props), React.Children.map(children, function (child, index) {
        return React.cloneElement(child, {
            isActive: activeIndex === index,
            onClick: onItemClick ? function () { return onItemClick(index); } : undefined,
            scale: scale,
            color: color,
            disabled: disabled,
        });
    })));
};
var templateObject_1$1l;

var InactiveButton = styled__default['default'](Button$9)(templateObject_1$1k || (templateObject_1$1k = __makeTemplateObject(["\n  background: transparent;\n  opacity: 0.7;\n  &:hover:not(:disabled):not(:active) {\n    background: transparent;\n  }\n"], ["\n  background: transparent;\n  opacity: 0.7;\n  &:hover:not(:disabled):not(:active) {\n    background: transparent;\n  }\n"])));
var ButtonMenuItem = function (_a) {
    var _b = _a.isActive, isActive = _b === void 0 ? false : _b, _c = _a.variant, variant = _c === void 0 ? variants$2.OPTION : _c, as = _a.as, props = __rest(_a, ["isActive", "variant", "as"]);
    if (!isActive) {
        return React__default['default'].createElement(InactiveButton, __assign({ forwardedAs: as, variant: variant }, props));
    }
    return React__default['default'].createElement(Button$9, __assign({ as: as, variant: variant }, props));
};
var templateObject_1$1k;

var variants = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    SUCCESS: "success",
    TEXTDISABLED: "textDisabled",
    TEXTSUBTLE: "textSubtle",
    BINANCE: "binance",
    FAILURE: "failure",
};
var scales$1 = {
    MD: "md",
    SM: "sm",
};

var _a$2, _b;
var scaleVariants = (_a$2 = {},
    _a$2[scales$1.MD] = {
        height: "28px",
        padding: "0 8px",
        fontSize: "14px",
    },
    _a$2[scales$1.SM] = {
        height: "24px",
        padding: "0 4px",
        fontSize: "12px",
    },
    _a$2);
var styleVariants = (_b = {},
    _b[variants.PRIMARY] = {
        backgroundColor: "primary",
    },
    _b[variants.SECONDARY] = {
        backgroundColor: "secondary",
    },
    _b[variants.SUCCESS] = {
        backgroundColor: "green",
    },
    _b[variants.TEXTDISABLED] = {
        backgroundColor: "textDisabled",
    },
    _b[variants.TEXTSUBTLE] = {
        backgroundColor: "textSubtle",
    },
    _b[variants.BINANCE] = {
        backgroundColor: "binance",
    },
    _b[variants.FAILURE] = {
        backgroundColor: "redBg",
    },
    _b);

var getOutlineStyles = function (_a) {
    var outline = _a.outline, theme = _a.theme, _b = _a.variant, variantKey = _b === void 0 ? variants.PRIMARY : _b;
    if (outline) {
        var themeColorKey = styleVariants[variantKey].backgroundColor;
        var color = theme.colors[themeColorKey];
        return "\n      color: " + color + ";\n      background: transparent;\n      border: 2px solid " + color + ";\n    ";
    }
    return "";
};
var StyledTag = styled__default['default'].div(templateObject_1$1j || (templateObject_1$1j = __makeTemplateObject(["\n  align-items: center;\n  border-radius: 16px;\n  color: #ffffff;\n  display: inline-flex;\n  font-weight: 400;\n  white-space: nowrap;\n  & > svg {\n    fill: currentColor;\n  }\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  align-items: center;\n  border-radius: 16px;\n  color: #ffffff;\n  display: inline-flex;\n  font-weight: 400;\n  white-space: nowrap;\n  & > svg {\n    fill: currentColor;\n  }\n  ", "\n  ", "\n  ", "\n  ", "\n"])), styledSystem.variant({
    prop: "scale",
    variants: scaleVariants,
}), styledSystem.variant({
    variants: styleVariants,
}), styledSystem.space, getOutlineStyles);
var templateObject_1$1j;

var Tag = function (_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, props = __rest(_a, ["startIcon", "endIcon", "children"]);
    return (React__default['default'].createElement(StyledTag, __assign({}, props),
        React__default['default'].isValidElement(startIcon) &&
            React__default['default'].cloneElement(startIcon, {
                mr: "0.5em",
            }),
        children,
        React__default['default'].isValidElement(endIcon) &&
            React__default['default'].cloneElement(endIcon, {
                ml: "0.5em",
            })));
};
Tag.defaultProps = {
    variant: "primary",
    scale: scales$1.MD,
    outline: false,
};

var tags = {
    H1: "h1",
    H2: "h2",
    H3: "h3",
    H4: "h4",
    H5: "h5",
    H6: "h6",
};
var scales = {
    MD: "md",
    LG: "lg",
    XL: "xl",
    XXL: "xxl",
};

var _a$1;
var style = (_a$1 = {},
    _a$1[scales.MD] = {
        fontSize: "20px",
        fontSizeLg: "20px",
    },
    _a$1[scales.LG] = {
        fontSize: "24px",
        fontSizeLg: "24px",
    },
    _a$1[scales.XL] = {
        fontSize: "32px",
        fontSizeLg: "40px",
    },
    _a$1[scales.XXL] = {
        fontSize: "48px",
        fontSizeLg: "64px",
    },
    _a$1);
var Heading$1 = styled__default['default'](Text).attrs({ bold: true })(templateObject_1$1i || (templateObject_1$1i = __makeTemplateObject(["\n  font-size: ", ";\n  font-weight: 600;\n  line-height: 1.1;\n  ", " {\n    font-size: ", ";\n  }\n"], ["\n  font-size: ", ";\n  font-weight: 600;\n  line-height: 1.1;\n  ", " {\n    font-size: ", ";\n  }\n"])), function (_a) {
    var scale = _a.scale;
    return style[scale || scales.MD].fontSize;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
}, function (_a) {
    var scale = _a.scale;
    return style[scale || scales.MD].fontSizeLg;
});
Heading$1.defaultProps = {
    as: tags.H2,
};
var templateObject_1$1i;

var NotificationDotRoot = styled__default['default'].span(templateObject_1$1h || (templateObject_1$1h = __makeTemplateObject(["\n  display: inline-flex;\n  position: relative;\n"], ["\n  display: inline-flex;\n  position: relative;\n"])));
var Dot = styled__default['default'].span(templateObject_2$14 || (templateObject_2$14 = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 10px;\n  height: 10px;\n  pointer-events: none;\n  border: 2px solid ", ";\n  border-radius: 50%;\n  background-color: ", ";\n"], ["\n  display: ", ";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 10px;\n  height: 10px;\n  pointer-events: none;\n  border: 2px solid ", ";\n  border-radius: 50%;\n  background-color: ", ";\n"])), function (_a) {
    var show = _a.show;
    return (show ? "inline-flex" : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.invertedContrast;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.failure;
});
var NotificationDot = function (_a) {
    var _b = _a.show, show = _b === void 0 ? false : _b, children = _a.children, props = __rest(_a, ["show", "children"]);
    return (React__default['default'].createElement(NotificationDotRoot, null,
        React.Children.map(children, function (child) { return React.cloneElement(child, props); }),
        React__default['default'].createElement(Dot, { show: show })));
};
var templateObject_1$1h, templateObject_2$14;

var TokenPairImage = function (_a) {
    var token1 = _a.token1, token2 = _a.token2, simpleFarm = _a.simpleFarm;
    return (React__default['default'].createElement(TokenPairImageWrap, null,
        React__default['default'].createElement(Image1, { simpleFarm: simpleFarm },
            React__default['default'].createElement("img", { src: token1 || YAY_TOKEN_GREEN, alt: "token1" })),
        React__default['default'].createElement(Image2, { simpleFarm: simpleFarm },
            React__default['default'].createElement("img", { src: token2 || YAY_TOKEN_GREEN, alt: "token2" }))));
};
var TokenPairImageWrap = styled__default['default'].div(templateObject_1$1g || (templateObject_1$1g = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var Image1 = styled__default['default'].div(templateObject_2$13 || (templateObject_2$13 = __makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  border-radius: 8px;\n  overflow: hidden;\n  & img {\n    width: 100%;\n    height: 100%;\n  }\n"], ["\n  width: ", ";\n  height: ", ";\n  border-radius: 8px;\n  overflow: hidden;\n  & img {\n    width: 100%;\n    height: 100%;\n  }\n"])), function (_a) {
    var simpleFarm = _a.simpleFarm;
    return (simpleFarm ? "40px" : "30px");
}, function (_a) {
    var simpleFarm = _a.simpleFarm;
    return (simpleFarm ? "40px" : "30px");
});
var Image2 = styled__default['default'](Image1)(templateObject_3$T || (templateObject_3$T = __makeTemplateObject(["\n  position: relative;\n  width: ", ";\n  height: ", ";\n  border-radius: ", ";\n  filter: ", ";\n  top: ", ";\n  right: ", ";\n"], ["\n  position: relative;\n  width: ", ";\n  height: ", ";\n  border-radius: ", ";\n  filter: ", ";\n  top: ", ";\n  right: ", ";\n"])), function (_a) {
    var simpleFarm = _a.simpleFarm;
    return (simpleFarm ? "20px" : "30px");
}, function (_a) {
    var simpleFarm = _a.simpleFarm;
    return (simpleFarm ? "20px" : "30px");
}, function (_a) {
    var simpleFarm = _a.simpleFarm;
    return (simpleFarm ? "4px" : "8px");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.filterShadow;
}, function (_a) {
    var simpleFarm = _a.simpleFarm;
    return (simpleFarm ? "-13px" : "-10px");
}, function (_a) {
    var simpleFarm = _a.simpleFarm;
    return (simpleFarm ? "-27px" : "-15px");
});
var templateObject_1$1g, templateObject_2$13, templateObject_3$T;

var breakpointMap = {
    xs: 370,
    sm: 576,
    md: 852,
    lg: 968,
    xl: 1080,
    xxl: 1300,
};
var breakpoints = Object.values(breakpointMap).map(function (breakpoint) { return breakpoint + "px"; });
var mediaQueries$1 = {
    xs: "@media screen and (min-width: " + breakpointMap.xs + "px)",
    sm: "@media screen and (min-width: " + breakpointMap.sm + "px)",
    md: "@media screen and (min-width: " + breakpointMap.md + "px)",
    lg: "@media screen and (min-width: " + breakpointMap.lg + "px)",
    xl: "@media screen and (min-width: " + breakpointMap.xl + "px)",
    xxl: "@media screen and (min-width: " + breakpointMap.xxl + "px)",
    nav: "@media screen and (min-width: " + breakpointMap.lg + "px)",
};
var shadows = {
    level1: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    active: "0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4)",
    success: "0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)",
    warning: "0px 0px 0px 1px #ED4B9E, 0px 0px 0px 4px rgba(237, 75, 158, 0.2)",
    focus: "0px 0px 0px 1px #7645D9, 0px 0px 0px 4px rgba(118, 69, 217, 0.6)",
    inset: "inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)",
};
var spacing = [0, 4, 8, 16, 24, 32, 48, 64];
var radii = {
    small: "4px",
    default: "16px",
    card: "32px",
    circle: "50%",
};
var zIndices = {
    dropdown: 10,
    modal: 100,
};
var base = {
    siteWidth: 1200,
    breakpoints: breakpoints,
    mediaQueries: mediaQueries$1,
    spacing: spacing,
    shadows: shadows,
    radii: radii,
    zIndices: zIndices,
};

/**
 * Can't use the media queries from "base.mediaQueries" because of how matchMedia works
 * In order for the listener to trigger we need have have the media query with a range, e.g.
 * (min-width: 370px) and (max-width: 576px)
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
 */
var mediaQueries = (function () {
    var prevMinWidth = 0;
    return Object.keys(breakpointMap).reduce(function (accum, size, index) {
        var _a, _b;
        // Largest size is just a min-width of second highest max-width
        if (index === Object.keys(breakpointMap).length - 1) {
            return __assign(__assign({}, accum), (_a = {}, _a[size] = "(min-width: " + prevMinWidth + "px)", _a));
        }
        var minWidth = prevMinWidth;
        var breakpoint = breakpointMap[size];
        // Min width for next iteration
        prevMinWidth = breakpoint + 1;
        return __assign(__assign({}, accum), (_b = {}, _b[size] = "(min-width: " + minWidth + "px) and (max-width: " + breakpoint + "px)", _b));
    }, {});
})();
var getKey = function (size) { return "is" + size.charAt(0).toUpperCase() + size.slice(1); };
var useMatchBreakpoints = function () {
    var _a = React.useState(function () {
        return Object.keys(mediaQueries).reduce(function (accum, size) {
            var _a;
            var key = getKey(size);
            var mql = window.matchMedia(mediaQueries[size]);
            return __assign(__assign({}, accum), (_a = {}, _a[key] = mql.matches, _a));
        }, {});
    }), state = _a[0], setState = _a[1];
    React.useEffect(function () {
        // Create listeners for each media query returning a function to unsubscribe
        var handlers = Object.keys(mediaQueries).map(function (size) {
            var mql = window.matchMedia(mediaQueries[size]);
            var handler = function (matchMediaQuery) {
                var key = getKey(size);
                setState(function (prevState) {
                    var _a;
                    return (__assign(__assign({}, prevState), (_a = {}, _a[key] = matchMediaQuery.matches, _a)));
                });
            };
            // Safari < 14 fix
            if (mql.addEventListener) {
                mql.addEventListener("change", handler);
            }
            return function () {
                // Safari < 14 fix
                if (mql.removeEventListener) {
                    mql.removeEventListener("change", handler);
                }
            };
        });
        return function () {
            handlers.forEach(function (unsubscribe) {
                unsubscribe();
            });
        };
    }, [setState]);
    return state;
};

var defaultParticleOptions = {
    size: 30,
    distance: 500,
};
var createParticle = function (x, y, imgSrc, options) {
    if (options === void 0) { options = {}; }
    var _a = __assign(__assign({}, defaultParticleOptions), options), size = _a.size, distance = _a.distance;
    var particle = document.createElement("particle");
    document.body.appendChild(particle);
    var width = Math.floor(Math.random() * size + 8);
    var height = width;
    var destinationX = (Math.random() - 0.5) * distance;
    var destinationY = (Math.random() - 0.5) * distance;
    var rotation = Math.random() * 520;
    var delay = Math.random() * 200;
    particle.style.backgroundRepeat = "no-repeat";
    particle.style.backgroundSize = "contain";
    particle.style.backgroundImage = "url(" + imgSrc + ")";
    particle.style.left = "0";
    particle.style.top = "0";
    particle.style.opacity = "0";
    particle.style.pointerEvents = "none";
    particle.style.position = "fixed";
    particle.style.width = width + "px";
    particle.style.height = height + "px";
    var animation = particle.animate([
        {
            transform: "translate(-50%, -50%) translate(" + x + "px, " + y + "px) rotate(0deg)",
            opacity: 1,
        },
        {
            transform: "translate(-50%, -50%) translate(" + (x + destinationX) + "px, " + (y + destinationY) + "px) rotate(" + rotation + "deg)",
            opacity: 0,
        },
    ], {
        duration: Math.random() * 1000 + 5000,
        easing: "cubic-bezier(0, .9, .57, 1)",
        delay: delay,
    });
    animation.onfinish = function () {
        particle.remove();
    };
};
var defaultOptions = {
    numberOfParticles: 30,
    debounceDuration: 200,
    particleOptions: {},
};
/**
 * @see https://css-tricks.com/playing-with-particles-using-the-web-animations-api/
 */
var useParticleBurst = function (options) {
    var _a = __assign(__assign({}, defaultOptions), options), selector = _a.selector, numberOfParticles = _a.numberOfParticles, debounceDuration = _a.debounceDuration, imgSrc = _a.imgSrc, disableWhen = _a.disableWhen, particleOptions = _a.particleOptions;
    var makeListener = React.useCallback(function () {
        return debounce__default['default'](function (event) {
            var isDisabled = disableWhen && disableWhen();
            if (!isDisabled) {
                var node = event.currentTarget;
                if (event.clientX === 0 && event.clientY === 0) {
                    var _a = node.getBoundingClientRect(), left = _a.left, width = _a.width, top_1 = _a.top, height = _a.height;
                    var x = left + width / 2;
                    var y = top_1 + height / 2;
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(x, y, imgSrc, particleOptions);
                    }
                }
                else {
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(event.clientX, event.clientY + window.scrollY, imgSrc, particleOptions);
                    }
                }
            }
        }, debounceDuration, { leading: true });
    }, [debounceDuration, numberOfParticles, imgSrc, disableWhen, particleOptions]);
    var listener = makeListener();
    var initialize = React.useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.addEventListener("click", listener);
            });
        }
        else {
            document.addEventListener("click", listener);
        }
    }, [selector, listener]);
    var teardown = React.useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.removeEventListener("click", listener);
            });
        }
        else {
            document.removeEventListener("click", listener);
        }
    }, [selector, listener]);
    React.useEffect(function () {
        initialize();
        return function () { return teardown(); };
    }, [initialize, teardown]);
    return { initialize: initialize, teardown: teardown };
};

var useKonamiCheatCode = function (matchedCodeHandler) {
    React.useEffect(function () {
        var pattern = [
            "ArrowUp",
            "ArrowUp",
            "ArrowDown",
            "ArrowDown",
            "ArrowLeft",
            "ArrowRight",
            "ArrowLeft",
            "ArrowRight",
        ];
        var currentIndex = 0;
        var onKeyUpHandler = function (event) {
            var key = event.key;
            // is key in correct order otherwise reset
            if (key !== pattern[currentIndex]) {
                currentIndex = 0;
                return;
            }
            currentIndex += 1;
            if (pattern.length === currentIndex) {
                currentIndex = 0;
                matchedCodeHandler();
            }
        };
        document.addEventListener("keyup", onKeyUpHandler);
        return function () { return document.removeEventListener("keyup", onKeyUpHandler); };
    }, [matchedCodeHandler]);
};

var useAccordeon = function (cards) {
    var _a = React.useState(), valueAccordeon = _a[0], setValueAccordeon = _a[1];
    var _b = React.useState(), active = _b[0], setActive = _b[1];
    var _c = React.useState(0), heightActiveBlock = _c[0], setHeightActiveBlock = _c[1];
    var refHidden = React.useRef(null);
    var _d = React.useState([]), newCards = _d[0], setNewCards = _d[1];
    var handleToggleAccordeon = function (item) {
        if (active && active.id !== item.id) {
            setActive(item);
        }
        if (valueAccordeon && valueAccordeon === item.id) {
            setValueAccordeon && setValueAccordeon(undefined);
        }
        else {
            setValueAccordeon && setValueAccordeon(item.id);
        }
    };
    React.useEffect(function () {
        setActive(cards === null || cards === void 0 ? void 0 : cards[0]);
    }, [cards.length]);
    React.useEffect(function () {
        setValueAccordeon && setValueAccordeon(undefined);
    }, []);
    React.useEffect(function () {
        var _a;
        if (refHidden === null || refHidden === void 0 ? void 0 : refHidden.current) {
            setHeightActiveBlock((_a = refHidden === null || refHidden === void 0 ? void 0 : refHidden.current) === null || _a === void 0 ? void 0 : _a.clientHeight);
        }
    }, [active, cards.length]);
    var filterCards = React.useMemo(function () { return cards === null || cards === void 0 ? void 0 : cards.filter(function (el) { return (el === null || el === void 0 ? void 0 : el.id) !== (active === null || active === void 0 ? void 0 : active.id); }); }, [active, cards]);
    var filterActiveCard = React.useMemo(function () { return cards === null || cards === void 0 ? void 0 : cards.filter(function (el) { return (el === null || el === void 0 ? void 0 : el.id) === (active === null || active === void 0 ? void 0 : active.id); }); }, [active, cards]);
    React.useEffect(function () {
        setNewCards(__spreadArray(__spreadArray([], filterActiveCard), filterCards));
    }, [active, cards.length]);
    return { valueAccordeon: valueAccordeon, setValueAccordeon: setValueAccordeon, heightActiveBlock: heightActiveBlock, handleToggleAccordeon: handleToggleAccordeon, newCards: newCards, active: active, refHidden: refHidden };
};

var light$3 = {
    background: lightColors.card,
};
var dark$3 = {
    background: darkColors.card,
};

var light$2 = {
    background: lightColors.card,
    boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
    dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};
var dark$2 = {
    background: darkColors.card,
    boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
    dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};

var light$1 = {
    handleBackground: lightColors.background,
};
var dark$1 = {
    handleBackground: darkColors.background,
};

var light = {
    background: lightColors.card,
};
var dark = {
    background: darkColors.card,
};

var darkTheme = __assign(__assign({}, base), { isDark: true, alert: dark$3, colors: darkColors, card: dark$2, toggle: dark$1, modal: dark });

var lightTheme = __assign(__assign({}, base), { isDark: false, alert: light$3, colors: lightColors, card: light$2, toggle: light$1, modal: light });

var isTouchDevice = function () {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
};

var Arrow$1 = styled__default['default'].div(templateObject_1$1f || (templateObject_1$1f = __makeTemplateObject(["\n  &,\n  &::before {\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    border-radius: 2px;\n    z-index: -1;\n  }\n  &::before {\n    content: \"\";\n    transform: rotate(45deg);\n    background: ", ";\n  }\n"], ["\n  &,\n  &::before {\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    border-radius: 2px;\n    z-index: -1;\n  }\n  &::before {\n    content: \"\";\n    transform: rotate(45deg);\n    background: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.background;
});
var StyledTooltip = styled__default['default'].div(templateObject_2$12 || (templateObject_2$12 = __makeTemplateObject(["\n  padding: 16px;\n  font-size: 16px;\n  line-height: 130%;\n  border-radius: 16px;\n  max-width: 320px;\n  z-index: 101;\n  background: ", ";\n  color: ", ";\n  box-shadow: ", ";\n  &[data-popper-placement^=\"top\"] > ", " {\n    bottom: -4px;\n  }\n  &[data-popper-placement^=\"bottom\"] > ", " {\n    top: -4px;\n  }\n  &[data-popper-placement^=\"left\"] > ", " {\n    right: -4px;\n  }\n  &[data-popper-placement^=\"right\"] > ", " {\n    left: -4px;\n  }\n"], ["\n  padding: 16px;\n  font-size: 16px;\n  line-height: 130%;\n  border-radius: 16px;\n  max-width: 320px;\n  z-index: 101;\n  background: ", ";\n  color: ", ";\n  box-shadow: ", ";\n  &[data-popper-placement^=\"top\"] > ", " {\n    bottom: -4px;\n  }\n  &[data-popper-placement^=\"bottom\"] > ", " {\n    top: -4px;\n  }\n  &[data-popper-placement^=\"left\"] > ", " {\n    right: -4px;\n  }\n  &[data-popper-placement^=\"right\"] > ", " {\n    left: -4px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow;
}, Arrow$1, Arrow$1, Arrow$1, Arrow$1);
var templateObject_1$1f, templateObject_2$12;

var invertTheme = function (currentTheme) {
    if (currentTheme.isDark) {
        return lightTheme;
    }
    return darkTheme;
};
var portalRoot = document.getElementById("portal-root");
var useTooltip = function (content, options) {
    var _a = options.placement, placement = _a === void 0 ? "auto" : _a, _b = options.trigger, trigger = _b === void 0 ? "hover" : _b, _c = options.arrowPadding, arrowPadding = _c === void 0 ? 16 : _c, _d = options.tooltipPadding, tooltipPadding = _d === void 0 ? { left: 16, right: 16 } : _d, _e = options.tooltipOffset, tooltipOffset = _e === void 0 ? [0, 10] : _e;
    var _f = React.useState(null), targetElement = _f[0], setTargetElement = _f[1];
    var _g = React.useState(null), tooltipElement = _g[0], setTooltipElement = _g[1];
    var _h = React.useState(null), arrowElement = _h[0], setArrowElement = _h[1];
    var _j = React.useState(false), visible = _j[0], setVisible = _j[1];
    var isHoveringOverTooltip = React.useRef(false);
    var hideTimeout = React.useRef();
    var hideTooltip = React.useCallback(function (e) {
        var hide = function () {
            e.stopPropagation();
            e.preventDefault();
            setVisible(false);
        };
        if (trigger === "hover") {
            if (hideTimeout.current) {
                window.clearTimeout(hideTimeout.current);
            }
            if (e.target === tooltipElement) {
                isHoveringOverTooltip.current = false;
            }
            if (!isHoveringOverTooltip.current) {
                hideTimeout.current = window.setTimeout(function () {
                    if (!isHoveringOverTooltip.current) {
                        hide();
                    }
                }, 100);
            }
        }
        else {
            hide();
        }
    }, [tooltipElement, trigger]);
    var showTooltip = React.useCallback(function (e) {
        e.stopPropagation();
        e.preventDefault();
        setVisible(true);
        if (trigger === "hover") {
            if (e.target === targetElement) {
                // If we were about to close the tooltip and got back to it
                // then prevent closing it.
                clearTimeout(hideTimeout.current);
            }
            if (e.target === tooltipElement) {
                isHoveringOverTooltip.current = true;
            }
        }
    }, [tooltipElement, targetElement, trigger]);
    var toggleTooltip = React.useCallback(function (e) {
        e.stopPropagation();
        setVisible(!visible);
    }, [visible]);
    // Trigger = hover
    React.useEffect(function () {
        if (targetElement === null || trigger !== "hover")
            return undefined;
        if (isTouchDevice()) {
            targetElement.addEventListener("touchstart", showTooltip);
            targetElement.addEventListener("touchend", hideTooltip);
        }
        else {
            targetElement.addEventListener("mouseenter", showTooltip);
            targetElement.addEventListener("mouseleave", hideTooltip);
        }
        return function () {
            targetElement.removeEventListener("touchstart", showTooltip);
            targetElement.removeEventListener("touchend", hideTooltip);
            targetElement.removeEventListener("mouseenter", showTooltip);
            targetElement.removeEventListener("mouseleave", showTooltip);
        };
    }, [trigger, targetElement, hideTooltip, showTooltip]);
    // Keep tooltip open when cursor moves from the targetElement to the tooltip
    React.useEffect(function () {
        if (tooltipElement === null || trigger !== "hover")
            return undefined;
        tooltipElement.addEventListener("mouseenter", showTooltip);
        tooltipElement.addEventListener("mouseleave", hideTooltip);
        return function () {
            tooltipElement.removeEventListener("mouseenter", showTooltip);
            tooltipElement.removeEventListener("mouseleave", hideTooltip);
        };
    }, [trigger, tooltipElement, hideTooltip, showTooltip]);
    // Trigger = click
    React.useEffect(function () {
        if (targetElement === null || trigger !== "click")
            return undefined;
        targetElement.addEventListener("click", toggleTooltip);
        return function () { return targetElement.removeEventListener("click", toggleTooltip); };
    }, [trigger, targetElement, visible, toggleTooltip]);
    // Handle click outside
    React.useEffect(function () {
        if (trigger !== "click")
            return undefined;
        var handleClickOutside = function (_a) {
            var target = _a.target;
            if (target instanceof Node) {
                if (tooltipElement != null &&
                    targetElement != null &&
                    !tooltipElement.contains(target) &&
                    !targetElement.contains(target)) {
                    setVisible(false);
                }
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return function () { return document.removeEventListener("mousedown", handleClickOutside); };
    }, [trigger, targetElement, tooltipElement]);
    // Trigger = focus
    React.useEffect(function () {
        if (targetElement === null || trigger !== "focus")
            return undefined;
        targetElement.addEventListener("focus", showTooltip);
        targetElement.addEventListener("blur", hideTooltip);
        return function () {
            targetElement.removeEventListener("focus", showTooltip);
            targetElement.removeEventListener("blur", hideTooltip);
        };
    }, [trigger, targetElement, showTooltip, hideTooltip]);
    // On small screens Popper.js tries to squeeze the tooltip to available space without overflowing beyound the edge
    // of the screen. While it works fine when the element is in the middle of the screen it does not handle well the
    // cases when the target element is very close to the edge of the screen - no margin is applied between the tooltip
    // and the screen edge.
    // preventOverflow mitigates this behaviour, default 16px paddings on left and right solve the problem for all screen sizes
    // that we support.
    // Note that in the farm page where there are tooltips very close to the edge of the screen this padding works perfectly
    // even on the iPhone 5 screen (320px wide), BUT in the storybook with the contrived example ScreenEdges example
    // iPhone 5 behaves differently overflowing beyound the edge. All paddings are identical so I have no idea why it is,
    // and fixing that seems like a very bad use of time.
    var _k = reactPopper.usePopper(targetElement, tooltipElement, {
        placement: placement,
        modifiers: [
            {
                name: "arrow",
                options: { element: arrowElement, padding: arrowPadding },
            },
            { name: "offset", options: { offset: tooltipOffset } },
            { name: "preventOverflow", options: { padding: tooltipPadding } },
        ],
    }), styles = _k.styles, attributes = _k.attributes;
    var tooltip = (React__default['default'].createElement(StyledTooltip, __assign({ ref: setTooltipElement, style: styles.popper }, attributes.popper),
        React__default['default'].createElement(styled.ThemeProvider, { theme: invertTheme }, content),
        React__default['default'].createElement(Arrow$1, { ref: setArrowElement, style: styles.arrow })));
    var tooltipInPortal = portalRoot ? reactDom.createPortal(tooltip, portalRoot) : null;
    return {
        targetRef: setTargetElement,
        tooltip: tooltipInPortal !== null && tooltipInPortal !== void 0 ? tooltipInPortal : tooltip,
        tooltipVisible: visible,
    };
};

var Wrapper$k = styled__default['default'].div(templateObject_1$1e || (templateObject_1$1e = __makeTemplateObject(["\n  width: fit-content;\n  margin: 0 auto;\n"], ["\n  width: fit-content;\n  margin: 0 auto;\n"])));
var BridgeWrapper$1 = styled__default['default'].div(templateObject_2$11 || (templateObject_2$11 = __makeTemplateObject(["\n  max-width: 404px;\n  max-height: 100vh;\n  min-width: 303px;\n  width: 100%;\n  background: ", ";\n  box-shadow: ", ";\n  border-radius: 15px;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    min-width: 360px;\n    width: 100%;\n  }\n  ", " {\n    min-width: 404px;\n    width: 100%;\n  }\n"], ["\n  max-width: 404px;\n  max-height: 100vh;\n  min-width: 303px;\n  width: 100%;\n  background: ", ";\n  box-shadow: ", ";\n  border-radius: 15px;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    min-width: 360px;\n    width: 100%;\n  }\n  ", " {\n    min-width: 404px;\n    width: 100%;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.bgGray;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow8;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xs;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var BridgeContent = styled__default['default'].div(templateObject_3$S || (templateObject_3$S = __makeTemplateObject(["\n  padding: 33px 23px 23px;\n"], ["\n  padding: 33px 23px 23px;\n"])));
var Field$1 = styled__default['default'].div(templateObject_4$H || (templateObject_4$H = __makeTemplateObject(["\n  height: 50px;\n  display: flex;\n  align-items: center;\n  margin-top: 6px;\n  position: relative;\n  padding: 10px 25px;\n  background: ", ";\n  box-shadow: inset ", ";\n  border-radius: 12px;\n  color: ", ";\n"], ["\n  height: 50px;\n  display: flex;\n  align-items: center;\n  margin-top: 6px;\n  position: relative;\n  padding: 10px 25px;\n  background: ", ";\n  box-shadow: inset ", ";\n  border-radius: 12px;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.buttonBg;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
var NameChain$1 = styled__default['default'](Text)(templateObject_5$v || (templateObject_5$v = __makeTemplateObject(["\n  letter-spacing: 0.5px;\n"], ["\n  letter-spacing: 0.5px;\n"])));
var Label$3 = styled__default['default'](Text)(templateObject_6$o || (templateObject_6$o = __makeTemplateObject([""], [""])));
var InputWrap$1 = styled__default['default'].div(templateObject_7$d || (templateObject_7$d = __makeTemplateObject(["\n  margin-top: 13px;\n  position: relative;\n"], ["\n  margin-top: 13px;\n  position: relative;\n"])));
var ButtonReverse = styled__default['default'].div(templateObject_8$9 || (templateObject_8$9 = __makeTemplateObject(["\n  width: fit-content;\n  position: absolute;\n  left: 50%;\n  transform: translate(-50%, -10px);\n"], ["\n  width: fit-content;\n  position: absolute;\n  left: 50%;\n  transform: translate(-50%, -10px);\n"])));
var MessageBox = styled__default['default'].div(templateObject_9$6 || (templateObject_9$6 = __makeTemplateObject(["\n  margin: 10px 0 0 auto;\n  width: fit-content;\n"], ["\n  margin: 10px 0 0 auto;\n  width: fit-content;\n"])));
var MessageText = styled__default['default'](Text)(templateObject_10$4 || (templateObject_10$4 = __makeTemplateObject(["\n  letter-spacing: 0.05em;\n  ", " {\n    letter-spacing: 0.13em;\n  } ;\n"], ["\n  letter-spacing: 0.05em;\n  ", " {\n    letter-spacing: 0.13em;\n  } ;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Error$1 = styled__default['default'](Text)(templateObject_11$3 || (templateObject_11$3 = __makeTemplateObject(["\n  margin: 33px 0 43px;\n  text-align: center;\n  letter-spacing: 0.5px;\n  font-weight: 400;\n  color: ", ";\n"], ["\n  margin: 33px 0 43px;\n  text-align: center;\n  letter-spacing: 0.5px;\n  font-weight: 400;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.redBg;
});
var ButtonOpenProof = styled__default['default'](Text)(templateObject_12$3 || (templateObject_12$3 = __makeTemplateObject(["\n  text-align: center;\n  margin: 32px auto 0;\n  background: none;\n  border: none;\n  cursor: pointer;\n"], ["\n  text-align: center;\n  margin: 32px auto 0;\n  background: none;\n  border: none;\n  cursor: pointer;\n"])));
var BridgeStep1 = function (_a) {
    var handleButtonToMax = _a.handleButtonToMax, texts = _a.texts, onUserInput = _a.onUserInput, value = _a.value, inputError = _a.inputError, balanceText = _a.balanceText, fromChange = _a.fromChange, switchHandler = _a.switchHandler, handleButton = _a.handleButton, iconNetwork1 = _a.iconNetwork1, iconNetwork2 = _a.iconNetwork2, iconBalanceInput = _a.iconBalanceInput, handleOpenProofOfAssets = _a.handleOpenProofOfAssets, handleOpenTransactionsHistory = _a.handleOpenTransactionsHistory, disabledInput = _a.disabledInput;
    var BlockChainName = function (_a) {
        var icon = _a.icon, name = _a.name;
        return (React__default['default'].createElement(Field$1, null,
            icon,
            React__default['default'].createElement(NameChain$1, { margin: "0 0 0 10px" }, name)));
    };
    return (React__default['default'].createElement(Wrapper$k, null,
        React__default['default'].createElement(BridgeWrapper$1, null,
            React__default['default'].createElement(BridgeContent, null,
                React__default['default'].createElement(Label$3, { size: "lg" }, texts.from),
                fromChange ? (React__default['default'].createElement(BlockChainName, { icon: iconNetwork1, name: texts.nameNetwork1 })) : (React__default['default'].createElement(BlockChainName, { icon: iconNetwork2, name: texts.nameNetwork2 })),
                React__default['default'].createElement(InputWrap$1, null,
                    React__default['default'].createElement(BalanceInput, { handleButtonToMax: handleButtonToMax, onUserInput: onUserInput, value: value, icon: iconBalanceInput, texts: { commit: texts.commit, currency: texts.currencyInput }, disabled: disabledInput }),
                    React__default['default'].createElement(ButtonReverse, null,
                        React__default['default'].createElement(SwapButton, { onClick: switchHandler })),
                    React__default['default'].createElement(MessageBox, null,
                        React__default['default'].createElement(MessageText, { color: inputError ? lightColors.redBg : lightColors.text, size: "xs" },
                            balanceText.message1,
                            " "),
                        React__default['default'].createElement(MessageText, { color: inputError ? lightColors.redBg : baseColors.green, size: "xs" },
                            " ",
                            balanceText.message2))),
                React__default['default'].createElement(Label$3, { size: "lg" }, texts.to),
                fromChange ? (React__default['default'].createElement(BlockChainName, { icon: iconNetwork2, name: texts.nameNetwork2 })) : (React__default['default'].createElement(BlockChainName, { icon: iconNetwork1, name: texts.nameNetwork1 })),
                React__default['default'].createElement(Error$1, null,
                    React__default['default'].createElement("p", { style: { minHeight: 22.5 } }, texts.error)),
                React__default['default'].createElement(Button$9, { onClick: handleButton, width: "100%", variant: "green" }, texts.button))),
        React__default['default'].createElement(ButtonOpenProof, { onClick: handleOpenProofOfAssets }, texts.buttonProofOfState),
        React__default['default'].createElement(ButtonOpenProof, { onClick: handleOpenTransactionsHistory }, texts.buttonTransactionsHistory)));
};
var templateObject_1$1e, templateObject_2$11, templateObject_3$S, templateObject_4$H, templateObject_5$v, templateObject_6$o, templateObject_7$d, templateObject_8$9, templateObject_9$6, templateObject_10$4, templateObject_11$3, templateObject_12$3;

function MyTimer(_a) {
    var expiryTimestamp = _a.expiryTimestamp, color = _a.color, height = _a.height, width = _a.width, marginPoint = _a.marginPoint, background = _a.background, borderRadius = _a.borderRadius, margin = _a.margin, widthWrapper = _a.widthWrapper, fontSize = _a.fontSize;
    var hours = Math.floor(expiryTimestamp / 3600);
    var minutes = Math.floor((expiryTimestamp - hours * 3600) / 60);
    var seconds = expiryTimestamp - hours * 3600 - minutes * 60;
    var handleDigit = function (value) {
        var leftDigit = value >= 10 ? value.toString()[0] : "0";
        var rightDigit = value >= 10 ? value.toString()[1] : value.toString();
        return { leftDigit: leftDigit, rightDigit: rightDigit };
    };
    var timeArray = [hours, minutes, seconds];
    return (React__default['default'].createElement(Wrapper$j, { widthWrapper: widthWrapper, margin: margin },
        React__default['default'].createElement(BlockWithoutBg, { fontSize: fontSize, borderRadius: borderRadius, background: background, width: width, height: height, color: color }, timeArray.map(function (item, i) { return (React__default['default'].createElement(React__default['default'].Fragment, { key: "item-" + i },
            React__default['default'].createElement(ItemWithoutBg, { fontSize: fontSize, color: color },
                handleDigit(item).leftDigit,
                handleDigit(item).rightDigit,
                " "),
            i === 2 ? null : (React__default['default'].createElement(DotsWithoutBg, { color: color, marginPoint: marginPoint }, ":")))); }))));
}
var LoadIcons = [React__default['default'].createElement(Icon$v, { spin: true, fill: "none" }), React__default['default'].createElement(Icon$v, { spin: true, fill: "none" }), React__default['default'].createElement(Icon$v, { spin: true, fill: "none" })];
var LoadingTimer = function (_a) {
    var margin = _a.margin, height = _a.height, width = _a.width, borderRadius = _a.borderRadius, background = _a.background, marginPoint = _a.marginPoint, widthWrapper = _a.widthWrapper, fontSize = _a.fontSize;
    return (React__default['default'].createElement(Wrapper$j, { margin: margin, widthWrapper: widthWrapper },
        React__default['default'].createElement(BlockWithoutBg, { fontSize: fontSize, borderRadius: borderRadius, background: background, width: width, height: height }, LoadIcons.map(function (item, i) { return (React__default['default'].createElement(React__default['default'].Fragment, { key: "item-" + i },
            React__default['default'].createElement(ItemWithoutBg, null, item),
            i === 2 ? null : React__default['default'].createElement(DotsWithoutBg, { marginPoint: marginPoint }, ":"))); }))));
};
var TimerNotSolidWithoutBg = function (_a) {
    var time = _a.time, color = _a.color, isLoad = _a.isLoad, height = _a.height, borderRadius = _a.borderRadius, width = _a.width, background = _a.background, marginPoint = _a.marginPoint, margin = _a.margin, widthWrapper = _a.widthWrapper, fontSize = _a.fontSize;
    return (React__default['default'].createElement("div", { style: { width: "" + (widthWrapper ? widthWrapper : "auto") } }, (time || time === 0) && !isLoad ? (React__default['default'].createElement(MyTimer, { marginPoint: marginPoint, borderRadius: borderRadius, width: width, background: background, height: height, expiryTimestamp: time, color: color || "text", margin: margin, widthWrapper: widthWrapper, fontSize: fontSize })) : (React__default['default'].createElement(LoadingTimer, { borderRadius: borderRadius, width: width, background: background, height: height, marginPoint: marginPoint, margin: margin, widthWrapper: widthWrapper, fontSize: fontSize }))));
};
var Wrapper$j = styled__default['default'](Wrap$p)(templateObject_1$1d || (templateObject_1$1d = __makeTemplateObject(["\n  margin: ", ";\n  width: ", ";\n"], ["\n  margin: ", ";\n  width: ", ";\n"])), function (_a) {
    var margin = _a.margin;
    return (margin ? margin : 0);
}, function (_a) {
    var widthWrapper = _a.widthWrapper;
    return (widthWrapper ? widthWrapper : "auto");
});
var BlockWithoutBg = styled__default['default'](Block$b)(templateObject_2$10 || (templateObject_2$10 = __makeTemplateObject(["\n  margin: ", ";\n  width: ", ";\n  height: ", ";\n  background: ", ";\n  border-radius: ", ";\n  font-size: ", ";\n"], ["\n  margin: ", ";\n  width: ", ";\n  height: ", ";\n  background: ", ";\n  border-radius: ", ";\n  font-size: ", ";\n"])), function (_a) {
    var margin = _a.margin;
    return (margin ? margin : "auto");
}, function (_a) {
    var width = _a.width;
    return (width ? width : "auto");
}, function (_a) {
    var height = _a.height;
    return (height ? height : "50px");
}, function (_a) {
    var background = _a.background;
    return (background ? background : "none");
}, function (_a) {
    var borderRadius = _a.borderRadius;
    return (borderRadius ? borderRadius : "none");
}, function (_a) {
    var fontSize = _a.fontSize;
    return (fontSize ? fontSize : "11px");
});
var ItemWithoutBg = styled__default['default'](Item)(templateObject_3$R || (templateObject_3$R = __makeTemplateObject(["\n  box-shadow: none;\n  background: none;\n  margin: 0;\n  height: auto;\n  width: 15px;\n  display: flex;\n  font-size: ", ";\n  color: ", ";\n"], ["\n  box-shadow: none;\n  background: none;\n  margin: 0;\n  height: auto;\n  width: 15px;\n  display: flex;\n  font-size: ", ";\n  color: ", ";\n"])), function (_a) {
    var fontSize = _a.fontSize;
    return (fontSize ? fontSize : "11px");
}, function (_a) {
    var color = _a.color;
    return (color ? color : "#fff");
});
var DotsWithoutBg = styled__default['default'](Dots)(templateObject_4$G || (templateObject_4$G = __makeTemplateObject(["\n  margin: ", ";\n  color: ", ";\n"], ["\n  margin: ", ";\n  color: ", ";\n"])), function (_a) {
    var marginPoint = _a.marginPoint;
    return (marginPoint ? marginPoint : "0 6px");
}, function (_a) {
    var color = _a.color;
    return (color ? color : "#fff");
});
var templateObject_1$1d, templateObject_2$10, templateObject_3$R, templateObject_4$G;

var BridgeStep2 = function (_a) {
    var onDismiss = _a.onDismiss, progress1 = _a.progress1, progress2 = _a.progress2, textsProgress1 = _a.textsProgress1, textsProgress2 = _a.textsProgress2, isError = _a.isError, texts = _a.texts, isLoadGasNetwork1 = _a.isLoadGasNetwork1, isLoadGasNetwork2 = _a.isLoadGasNetwork2, timer1 = _a.timer1, timer2 = _a.timer2, transferredValue = _a.transferredValue, addTokenHandler = _a.addTokenHandler, WalletIcon = _a.WalletIcon, TokenIcon = _a.TokenIcon, gasPriceTextNetwork1 = _a.gasPriceTextNetwork1, gasPriceTextNetwork2 = _a.gasPriceTextNetwork2, BlockChainFrom = _a.BlockChainFrom, BlockChainTo = _a.BlockChainTo, stepsText = _a.stepsText, isLoadTimeNetwork1 = _a.isLoadTimeNetwork1, isLoadTimeNetwork2 = _a.isLoadTimeNetwork2;
    return (React__default['default'].createElement(Wrapper$i, null,
        React__default['default'].createElement(Title$9, { size: "lg" }, texts.title),
        React__default['default'].createElement(ButtonClose$2, { onClick: onDismiss },
            React__default['default'].createElement(Icon$R, null)),
        React__default['default'].createElement(TopLineBlock, null,
            React__default['default'].createElement(TokenBlock, null,
                React__default['default'].createElement(TopLineTitle, { fontWeight: "400", textAlign: "left" }, texts.token),
                React__default['default'].createElement(Token, null, TokenIcon || (React__default['default'].createElement(React__default['default'].Fragment, null,
                    React__default['default'].createElement(TokenImg$1, null,
                        React__default['default'].createElement(Icon$7, null)),
                    React__default['default'].createElement(Text, null, "YAY"))))),
            React__default['default'].createElement(AmountTransfer, null,
                React__default['default'].createElement(TopLineTitle, { fontWeight: "400", className: "middle" }, texts.amount),
                React__default['default'].createElement(TokenValue, null, transferredValue.token),
                React__default['default'].createElement(ApproximatelyPrice, null, transferredValue.fiat)),
            React__default['default'].createElement(TokenBlock, null,
                React__default['default'].createElement(TopLineTitle, { fontWeight: "400", textAlign: "right" }, texts.addToken),
                React__default['default'].createElement(MetamaskAdd, { onClick: addTokenHandler, as: "button" },
                    React__default['default'].createElement(TokenImg$1, { className: "last" }, WalletIcon || React__default['default'].createElement("img", { src: Metamask }))))),
        React__default['default'].createElement(BodyBlock, null,
            React__default['default'].createElement(HeadLine, null,
                React__default['default'].createElement(Text, { size: "sm", fontWeight: "400", color: baseColors.textGray }, texts.network),
                React__default['default'].createElement("div", null),
                React__default['default'].createElement(Text, { textAlign: "center", fontWeight: "400", size: "sm", color: baseColors.textGray }, texts.timer),
                React__default['default'].createElement(Text, { textAlign: "center", fontWeight: "400", size: "sm", color: baseColors.textGray }, texts.coast)),
            React__default['default'].createElement(ProgressBlock, null,
                React__default['default'].createElement(TitleMobTop, null, texts.network),
                React__default['default'].createElement(Token, { className: "main" }, BlockChainFrom || (React__default['default'].createElement(React__default['default'].Fragment, null,
                    React__default['default'].createElement(Icon$M, null),
                    React__default['default'].createElement(Text, { marginLeft: "10px" }, texts.bsc)))),
                React__default['default'].createElement(Progress$1, null,
                    React__default['default'].createElement(ProgressWrapper, null,
                        React__default['default'].createElement(ProgressSteps, { stepsText: stepsText, isError: isError, texts: textsProgress1, step: progress1 }))),
                React__default['default'].createElement(TitleMob, null, texts.timer),
                React__default['default'].createElement(TimerNotSolidWithoutBg, { isLoad: isLoadTimeNetwork1, time: timer1 }),
                React__default['default'].createElement(TitleMob, { className: "last" }, texts.coast),
                React__default['default'].createElement(GasCoast, null, isLoadGasNetwork1 || !gasPriceTextNetwork1 ? (React__default['default'].createElement(LoaderWrap, null,
                    React__default['default'].createElement(Loader$1, null))) : (React__default['default'].createElement(React__default['default'].Fragment, null,
                    React__default['default'].createElement(Text, { size: "sm", paddingTop: "21px" }, gasPriceTextNetwork1 === null || gasPriceTextNetwork1 === void 0 ? void 0 : gasPriceTextNetwork1.value),
                    React__default['default'].createElement(Text, { size: "xs", color: baseColors.textGray }, gasPriceTextNetwork1 === null || gasPriceTextNetwork1 === void 0 ? void 0 : gasPriceTextNetwork1.fiat))))),
            React__default['default'].createElement(ProgressBlock, null,
                React__default['default'].createElement(TitleMobTop, { fontWeight: "400" }, texts.network),
                React__default['default'].createElement(Token, { className: "main" }, BlockChainTo || (React__default['default'].createElement(React__default['default'].Fragment, null,
                    React__default['default'].createElement(Icon$a, null),
                    React__default['default'].createElement(Text, { marginLeft: "10px" }, texts.avalanche)))),
                React__default['default'].createElement(Progress$1, null,
                    React__default['default'].createElement(ProgressWrapper, null,
                        React__default['default'].createElement(ProgressRange, { progress: progress2, texts: textsProgress2 }))),
                React__default['default'].createElement(TitleMob, { fontWeight: "400" }, texts.timer),
                React__default['default'].createElement(TimerNotSolidWithoutBg, { isLoad: isLoadTimeNetwork2, time: timer2 }),
                React__default['default'].createElement(TitleMob, { fontWeight: "400", className: "last" }, texts.coast),
                React__default['default'].createElement(GasCoast, null, isLoadGasNetwork2 || !gasPriceTextNetwork2 ? (React__default['default'].createElement(LoaderWrap, null,
                    React__default['default'].createElement(Loader$1, null))) : (React__default['default'].createElement(React__default['default'].Fragment, null,
                    React__default['default'].createElement(Text, { size: "sm", paddingTop: "21px" }, gasPriceTextNetwork2 === null || gasPriceTextNetwork2 === void 0 ? void 0 : gasPriceTextNetwork2.value),
                    React__default['default'].createElement(Text, { size: "xs", color: baseColors.textGray }, gasPriceTextNetwork2 === null || gasPriceTextNetwork2 === void 0 ? void 0 : gasPriceTextNetwork2.fiat))))))));
};
var Title$9 = styled__default['default'](Text)(templateObject_1$1c || (templateObject_1$1c = __makeTemplateObject(["\n  letter-spacing: 0.5px;\n"], ["\n  letter-spacing: 0.5px;\n"])));
var Wrapper$i = styled__default['default'].div(templateObject_2$$ || (templateObject_2$$ = __makeTemplateObject(["\n  position: relative;\n  margin: 0 auto;\n  overflow: hidden;\n  max-width: 650px;\n  padding: 33px 14px 12px;\n  box-sizing: border-box;\n  background: ", ";\n  border-radius: 10px;\n  ", " {\n    padding: 33px 23px;\n  } ;\n"], ["\n  position: relative;\n  margin: 0 auto;\n  overflow: hidden;\n  max-width: 650px;\n  padding: 33px 14px 12px;\n  box-sizing: border-box;\n  background: ", ";\n  border-radius: 10px;\n  ", " {\n    padding: 33px 23px;\n  } ;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.dark;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var TopLineBlock = styled__default['default'].div(templateObject_3$Q || (templateObject_3$Q = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  margin-top: 30px;\n  padding: 17px 21px;\n  background: ", ";\n  box-shadow: ", ";\n  border-radius: 15px;\n  ", " {\n    padding: 17px 25px;\n  } ;\n"], ["\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  margin-top: 30px;\n  padding: 17px 21px;\n  background: ", ";\n  box-shadow: ", ";\n  border-radius: 15px;\n  ", " {\n    padding: 17px 25px;\n  } ;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.buttonBg;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow4;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var TokenBlock = styled__default['default'].div(templateObject_4$F || (templateObject_4$F = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  &:first-child {\n    align-items: baseline;\n  }\n  &:last-child {\n    align-items: flex-end;\n  }\n  ", " {\n    &:first-child {\n      align-items: center;\n    }\n    &:last-child {\n      align-items: center;\n    }\n  } ;\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  &:first-child {\n    align-items: baseline;\n  }\n  &:last-child {\n    align-items: flex-end;\n  }\n  ", " {\n    &:first-child {\n      align-items: center;\n    }\n    &:last-child {\n      align-items: center;\n    }\n  } ;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var AmountTransfer = styled__default['default'].div(templateObject_5$u || (templateObject_5$u = __makeTemplateObject(["\n  text-align: center;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -45%);\n  ", " {\n    position: static;\n    transform: translate(0, 0);\n  }\n"], ["\n  text-align: center;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -45%);\n  ", " {\n    position: static;\n    transform: translate(0, 0);\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var TopLineTitle = styled__default['default'](Text)(templateObject_6$n || (templateObject_6$n = __makeTemplateObject(["\n  margin-bottom: 10px;\n  width: 100%;\n  letter-spacing: 0.05em;\n  opacity: 0.7;\n  &.middle {\n    display: none;\n  }\n  ", " {\n    margin-bottom: 18px;\n    &.middle {\n      display: block;\n    }\n  }\n"], ["\n  margin-bottom: 10px;\n  width: 100%;\n  letter-spacing: 0.05em;\n  opacity: 0.7;\n  &.middle {\n    display: none;\n  }\n  ", " {\n    margin-bottom: 18px;\n    &.middle {\n      display: block;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var TokenValue = styled__default['default'](Text)(templateObject_7$c || (templateObject_7$c = __makeTemplateObject(["\n  font-size: 11px;\n  ", " {\n    font-size: 21px;\n  } ;\n"], ["\n  font-size: 11px;\n  ", " {\n    font-size: 21px;\n  } ;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var ApproximatelyPrice = styled__default['default'](Text)(templateObject_8$8 || (templateObject_8$8 = __makeTemplateObject(["\n  letter-spacing: 0.05em;\n  color: ", ";\n  font-size: 11px;\n  ", " {\n    font-size: 15px;\n  } ;\n"], ["\n  letter-spacing: 0.05em;\n  color: ", ";\n  font-size: 11px;\n  ", " {\n    font-size: 15px;\n  } ;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textGray;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Token = styled__default['default'].div(templateObject_9$5 || (templateObject_9$5 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  &.main {\n    flex-direction: row;\n    margin-bottom: 25px;\n    & svg {\n      margin: 0 10px 0 0;\n    }\n  }\n  & div {\n    margin: 5px 0 0;\n    &:first-child {\n      margin: 0;\n    }\n  }\n  ", " {\n    flex-direction: row;\n    &.main {\n      margin-bottom: 0;\n    }\n    & div {\n      &:first-child {\n        margin: 0 10px 0 0;\n      }\n    }\n  } ;\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  &.main {\n    flex-direction: row;\n    margin-bottom: 25px;\n    & svg {\n      margin: 0 10px 0 0;\n    }\n  }\n  & div {\n    margin: 5px 0 0;\n    &:first-child {\n      margin: 0;\n    }\n  }\n  ", " {\n    flex-direction: row;\n    &.main {\n      margin-bottom: 0;\n    }\n    & div {\n      &:first-child {\n        margin: 0 10px 0 0;\n      }\n    }\n  } ;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var TokenImg$1 = styled__default['default'].div(templateObject_10$3 || (templateObject_10$3 = __makeTemplateObject(["\n  width: 38px;\n  height: 38px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: ", ";\n  border-radius: 9px;\n  margin: 0 10px 0 0;\n"], ["\n  width: 38px;\n  height: 38px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: ", ";\n  border-radius: 9px;\n  margin: 0 10px 0 0;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.bgOpacitY3;
});
var MetamaskAdd = styled__default['default'](Token)(templateObject_11$2 || (templateObject_11$2 = __makeTemplateObject(["\n  cursor: pointer;\n  padding: 0;\n  margin: 0;\n  border: none;\n  background: none;\n"], ["\n  cursor: pointer;\n  padding: 0;\n  margin: 0;\n  border: none;\n  background: none;\n"])));
var BodyBlock = styled__default['default'].div(templateObject_12$2 || (templateObject_12$2 = __makeTemplateObject(["\n  padding: 0;\n  margin-top: 30px;\n  ", " {\n    padding: 0 15px 0 25px;\n  } ;\n"], ["\n  padding: 0;\n  margin-top: 30px;\n  ", " {\n    padding: 0 15px 0 25px;\n  } ;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var HeadLine = styled__default['default'].div(templateObject_13$2 || (templateObject_13$2 = __makeTemplateObject(["\n  position: relative;\n  margin-bottom: 24px;\n  display: none;\n  grid-template-columns: 0.7fr 1.3fr 0.4fr 0.7fr;\n  grid-column-gap: 25px;\n  &:last-child {\n    margin-bottom: 0;\n    margin-top: 24px;\n    ", " {\n      margin-top: 49px;\n    }\n    &::after {\n      display: block;\n      position: absolute;\n      content: \"\";\n      width: 200%;\n      top: -25px;\n      left: -100px;\n      height: 1px;\n      background: ", ";\n    }\n  }\n  ", " {\n    display: grid;\n  } ;\n"], ["\n  position: relative;\n  margin-bottom: 24px;\n  display: none;\n  grid-template-columns: 0.7fr 1.3fr 0.4fr 0.7fr;\n  grid-column-gap: 25px;\n  &:last-child {\n    margin-bottom: 0;\n    margin-top: 24px;\n    ", " {\n      margin-top: 49px;\n    }\n    &::after {\n      display: block;\n      position: absolute;\n      content: \"\";\n      width: 200%;\n      top: -25px;\n      left: -100px;\n      height: 1px;\n      background: ", ";\n    }\n  }\n  ", " {\n    display: grid;\n  } ;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.greyRgba;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var ProgressBlock = styled__default['default'](HeadLine)(templateObject_14$2 || (templateObject_14$2 = __makeTemplateObject(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  ", " {\n    display: grid;\n  } ;\n"], ["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  ", " {\n    display: grid;\n  } ;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Progress$1 = styled__default['default'].div(templateObject_15$1 || (templateObject_15$1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: flex-end;\n"], ["\n  display: flex;\n  justify-content: flex-end;\n"])));
var GasCoast = styled__default['default'].div(templateObject_16$1 || (templateObject_16$1 = __makeTemplateObject(["\n  text-align: center;\n  display: flex;\n  //justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  height: 85px;\n  ", " {\n    height: auto;\n  }\n"], ["\n  text-align: center;\n  display: flex;\n  //justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  height: 85px;\n  ", " {\n    height: auto;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var LoaderWrap = styled__default['default'].div(templateObject_17$1 || (templateObject_17$1 = __makeTemplateObject(["\n  transform: scale(0.45);\n"], ["\n  transform: scale(0.45);\n"])));
var TitleMob = styled__default['default'](Text)(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n  display: block;\n  font-size: 13px;\n  margin: 25px 0 20px;\n  &.last {\n    margin: 25px 0 0;\n  }\n  color: ", ";\n  ", " {\n    display: none;\n  } ;\n"], ["\n  display: block;\n  font-size: 13px;\n  margin: 25px 0 20px;\n  &.last {\n    margin: 25px 0 0;\n  }\n  color: ", ";\n  ", " {\n    display: none;\n  } ;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.greyText;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var TitleMobTop = styled__default['default'](TitleMob)(templateObject_19 || (templateObject_19 = __makeTemplateObject(["\n  margin: 0 0 10px;\n  font-size: 13px;\n"], ["\n  margin: 0 0 10px;\n  font-size: 13px;\n"])));
var ProgressWrapper = styled__default['default'].div(templateObject_20 || (templateObject_20 = __makeTemplateObject(["\n  width: 173px;\n  ", " {\n    max-width: 173px;\n    width: 100%;\n  }\n"], ["\n  width: 173px;\n  ", " {\n    max-width: 173px;\n    width: 100%;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var ButtonClose$2 = styled__default['default'].button(templateObject_21 || (templateObject_21 = __makeTemplateObject(["\n  padding: 0;\n  width: 30px;\n  height: 30px;\n  position: absolute;\n  border: none;\n  background: none;\n  top: 40px;\n  right: 25px;\n  cursor: pointer;\n  & svg {\n    position: absolute;\n    top: -8px;\n    left: -8px;\n  }\n"], ["\n  padding: 0;\n  width: 30px;\n  height: 30px;\n  position: absolute;\n  border: none;\n  background: none;\n  top: 40px;\n  right: 25px;\n  cursor: pointer;\n  & svg {\n    position: absolute;\n    top: -8px;\n    left: -8px;\n  }\n"])));
var templateObject_1$1c, templateObject_2$$, templateObject_3$Q, templateObject_4$F, templateObject_5$u, templateObject_6$n, templateObject_7$c, templateObject_8$8, templateObject_9$5, templateObject_10$3, templateObject_11$2, templateObject_12$2, templateObject_13$2, templateObject_14$2, templateObject_15$1, templateObject_16$1, templateObject_17$1, templateObject_18, templateObject_19, templateObject_20, templateObject_21;

var ellipsis = function (value, count) {
    if (count === void 0) { count = 4; }
    if (value.length > 10) {
        return value.substr(0, count) + " ... " + value.substr(value.length - count, value.length);
    }
    return value;
};

var TokenInfo = function (_a) {
    var addTokenIcon = _a.addTokenIcon, textsInfo = _a.textsInfo, supple = _a.supple, textCopy = _a.textCopy, addTokenHandler = _a.addTokenHandler;
    var _b = React.useState(false), isTooltipDisplayed = _b[0], setIsTooltipDisplayed = _b[1];
    var ButtonsBlock = function (_a) {
        var type = _a.type;
        return (React__default['default'].createElement(RightColumn$1, { className: type + " " + (supple ? "supple" : "") },
            React__default['default'].createElement(Button$6, { className: supple ? "supple" : "", onClick: addTokenHandler }, addTokenIcon || React__default['default'].createElement("img", { src: Metamask })),
            React__default['default'].createElement(Button$6, { onClick: function () {
                    if (navigator.clipboard) {
                        navigator.clipboard.writeText(textsInfo.address);
                        setIsTooltipDisplayed(true);
                        setTimeout(function () {
                            setIsTooltipDisplayed(false);
                        }, 1000);
                    }
                } },
                React__default['default'].createElement(Icon$I, null)),
            React__default['default'].createElement(Button$6, { as: "a", href: textsInfo.link, className: "arrow" },
                React__default['default'].createElement(Icon$N, null))));
    };
    return (React__default['default'].createElement(WrapBlock, { supple: supple },
        React__default['default'].createElement(Text, null, textsInfo.title),
        React__default['default'].createElement(Wrapper$h, null,
            React__default['default'].createElement(LeftColumn$1, null,
                React__default['default'].createElement(Text, { marginBottom: "10px", size: "xs" }, textsInfo.token),
                React__default['default'].createElement(Text, { size: "xs" }, ellipsis(textsInfo.address, 10)),
                React__default['default'].createElement(Tooltip$2, { isTooltipDisplayed: isTooltipDisplayed }, textCopy)),
            React__default['default'].createElement(ButtonsBlock, null)),
        React__default['default'].createElement(ButtonsBlock, { type: "mob" })));
};
var WrapBlock = styled__default['default'].div(templateObject_1$1b || (templateObject_1$1b = __makeTemplateObject(["\n  margin: ", ";\n"], ["\n  margin: ", ";\n"])), function (_a) {
    var supple = _a.supple;
    return (supple ? "20px 0 0" : 0);
});
var Wrapper$h = styled__default['default'].div(templateObject_2$_ || (templateObject_2$_ = __makeTemplateObject(["\n  width: 206px;\n  margin: 7px 0 0;\n  padding: 19px 12px 19px 11px;\n  max-width: 331px;\n  min-height: 77px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: ", ";\n  border-radius: 12px;\n  &:first-child {\n    margin: 0;\n  }\n  ", " {\n    padding: 19px 22px 19px 16px;\n  }\n  ", " {\n    padding: 19px 22px 19px 16px;\n  }\n  ", " {\n    width: auto;\n  } ;\n"], ["\n  width: 206px;\n  margin: 7px 0 0;\n  padding: 19px 12px 19px 11px;\n  max-width: 331px;\n  min-height: 77px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: ", ";\n  border-radius: 12px;\n  &:first-child {\n    margin: 0;\n  }\n  ", " {\n    padding: 19px 22px 19px 16px;\n  }\n  ", " {\n    padding: 19px 22px 19px 16px;\n  }\n  ", " {\n    width: auto;\n  } ;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.whiteRgba;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xs;
});
var LeftColumn$1 = styled__default['default'].div(templateObject_3$P || (templateObject_3$P = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var RightColumn$1 = styled__default['default'].div(templateObject_4$E || (templateObject_4$E = __makeTemplateObject(["\n  display: none;\n  align-items: center;\n  justify-content: flex-end;\n  ", " {\n    display: flex;\n  }\n  &.mob {\n    display: flex;\n    margin-top: 15px;\n    justify-content: space-between;\n    &.supple {\n      justify-content: space-around;\n    }\n    ", " {\n      display: none;\n    }\n  }\n"], ["\n  display: none;\n  align-items: center;\n  justify-content: flex-end;\n  ", " {\n    display: flex;\n  }\n  &.mob {\n    display: flex;\n    margin-top: 15px;\n    justify-content: space-between;\n    &.supple {\n      justify-content: space-around;\n    }\n    ", " {\n      display: none;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xs;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xs;
});
var Button$6 = styled__default['default'].button(templateObject_5$t || (templateObject_5$t = __makeTemplateObject(["\n  cursor: pointer;\n  margin-left: 0;\n  width: 30px;\n  height: 30px;\n  background: ", ";\n  border-radius: 7px;\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  & img {\n    width: 27px;\n  }\n  &.arrow {\n    & svg {\n      transform: rotate(135deg) translate(-1px, 2px);\n    }\n  }\n  ", " {\n    margin-left: 12px;\n  }\n  &.supple {\n    display: none;\n  }\n"], ["\n  cursor: pointer;\n  margin-left: 0;\n  width: 30px;\n  height: 30px;\n  background: ", ";\n  border-radius: 7px;\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  & img {\n    width: 27px;\n  }\n  &.arrow {\n    & svg {\n      transform: rotate(135deg) translate(-1px, 2px);\n    }\n  }\n  ", " {\n    margin-left: 12px;\n  }\n  &.supple {\n    display: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.whiteRgba;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xs;
});
var Tooltip$2 = styled__default['default'].div(templateObject_6$m || (templateObject_6$m = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: ", ";\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"], ["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: ", ";\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"])), function (_a) {
    var isTooltipDisplayed = _a.isTooltipDisplayed;
    return (isTooltipDisplayed ? "block" : "none");
}, function (_a) {
    var left = _a.left;
    return left || 0;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.invertedContrast;
});
var templateObject_1$1b, templateObject_2$_, templateObject_3$P, templateObject_4$E, templateObject_5$t, templateObject_6$m;

var InfoWrapper = function (_a) {
    var tokenLogo = _a.tokenLogo, proofData = _a.proofData, wrappedData = _a.wrappedData, textCopy = _a.textCopy, addTokenHandler = _a.addTokenHandler, addTokenIcon = _a.addTokenIcon;
    return (React__default['default'].createElement(Wrapper$g, null,
        React__default['default'].createElement(TokenLogo, null, tokenLogo || (React__default['default'].createElement(React__default['default'].Fragment, null,
            React__default['default'].createElement(TokenImg, null,
                React__default['default'].createElement(Icon$7, null)),
            React__default['default'].createElement(Text, null, "YAY")))),
        React__default['default'].createElement(MainBlock$1, null,
            React__default['default'].createElement(LeftColumn, null,
                React__default['default'].createElement(TokenInfo, { addTokenIcon: addTokenIcon, textCopy: textCopy, addTokenHandler: addTokenHandler, textsInfo: proofData })),
            React__default['default'].createElement(MiddleColumn, null,
                React__default['default'].createElement(Icon$8, null)),
            React__default['default'].createElement(RightColumn, null, wrappedData.map(function (item, i) { return (React__default['default'].createElement(TokenInfo, { addTokenIcon: addTokenIcon, textCopy: textCopy, addTokenHandler: addTokenHandler, key: i, supple: i === 1, textsInfo: item })); })))));
};
var Wrapper$g = styled__default['default'].div(templateObject_1$1a || (templateObject_1$1a = __makeTemplateObject(["\n  margin-top: 60px;\n  padding: 22px 13px 27px 13px;\n  background: ", ";\n  border-radius: 12px;\n  &:first-child {\n    margin-top: 0;\n  }\n  &:last-child {\n    margin-bottom: 30px;\n  }\n  ", " {\n    padding: 22px 23px 27px 23px;\n  } ;\n"], ["\n  margin-top: 60px;\n  padding: 22px 13px 27px 13px;\n  background: ", ";\n  border-radius: 12px;\n  &:first-child {\n    margin-top: 0;\n  }\n  &:last-child {\n    margin-bottom: 30px;\n  }\n  ", " {\n    padding: 22px 23px 27px 23px;\n  } ;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.buttonBg;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var TokenLogo = styled__default['default'].div(templateObject_2$Z || (templateObject_2$Z = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n"], ["\n  display: flex;\n  align-items: center;\n"])));
var TokenImg = styled__default['default'].div(templateObject_3$O || (templateObject_3$O = __makeTemplateObject(["\n  width: 38px;\n  height: 38px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: ", ";\n  border-radius: 9px;\n  margin: 0 10px 0 0;\n"], ["\n  width: 38px;\n  height: 38px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: ", ";\n  border-radius: 9px;\n  margin: 0 10px 0 0;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.bgOpacitY3;
});
var MainBlock$1 = styled__default['default'].div(templateObject_4$D || (templateObject_4$D = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: column;\n  ", " {\n    flex-direction: row;\n    align-items: center;\n    margin-top: -38px;\n  } ;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: column;\n  ", " {\n    flex-direction: row;\n    align-items: center;\n    margin-top: -38px;\n  } ;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var LeftColumn = styled__default['default'].div(templateObject_5$s || (templateObject_5$s = __makeTemplateObject([""], [""])));
var RightColumn = styled__default['default'](LeftColumn)(templateObject_6$l || (templateObject_6$l = __makeTemplateObject([""], [""])));
var MiddleColumn = styled__default['default'].div(templateObject_7$b || (templateObject_7$b = __makeTemplateObject(["\n  position: relative;\n  top: 0;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  margin: 30px 0 20px;\n  justify-content: center;\n  align-items: center;\n  background: ", ";\n  border-radius: 7px;\n  ", " {\n    margin: 0 30px;\n  }\n  ", " {\n    margin: 0 15px;\n    top: 15px;\n  } ;\n"], ["\n  position: relative;\n  top: 0;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  margin: 30px 0 20px;\n  justify-content: center;\n  align-items: center;\n  background: ", ";\n  border-radius: 7px;\n  ", " {\n    margin: 0 30px;\n  }\n  ", " {\n    margin: 0 15px;\n    top: 15px;\n  } ;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.whiteRgba;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var templateObject_1$1a, templateObject_2$Z, templateObject_3$O, templateObject_4$D, templateObject_5$s, templateObject_6$l, templateObject_7$b;

var BridgeProof = function (_a) {
    var texts = _a.texts, ProofOfAssetsData = _a.ProofOfAssetsData, onDismiss = _a.onDismiss, textCopy = _a.textCopy, addTokenHandler = _a.addTokenHandler, addTokenIcon = _a.addTokenIcon, tokenLogo = _a.tokenLogo;
    return (React__default['default'].createElement(Wrapper$f, null,
        React__default['default'].createElement(Text, { size: "lg" }, texts.title),
        React__default['default'].createElement(Description$2, { marginTop: "10px" }, texts.description),
        React__default['default'].createElement(ButtonClose$1, { onClick: onDismiss },
            React__default['default'].createElement(Icon$R, { fill: "transparent" })),
        React__default['default'].createElement(TokenList, null, ProofOfAssetsData.map(function (item, i) { return (React__default['default'].createElement(InfoWrapper, { addTokenIcon: addTokenIcon, textCopy: textCopy, addTokenHandler: addTokenHandler, key: i, proofData: item.proofData, wrappedData: item.wrappedData, tokenLogo: tokenLogo })); }))));
};
var Wrapper$f = styled__default['default'].div(templateObject_1$19 || (templateObject_1$19 = __makeTemplateObject(["\n  position: relative;\n  max-width: 875px;\n  height: auto;\n  padding: 33px 24px 0 14px;\n  box-sizing: border-box;\n  background: ", ";\n  border-radius: 10px;\n  ", " {\n    padding: 38px 44px 0 34px;\n    width: 100%;\n  } ;\n"], ["\n  position: relative;\n  max-width: 875px;\n  height: auto;\n  padding: 33px 24px 0 14px;\n  box-sizing: border-box;\n  background: ", ";\n  border-radius: 10px;\n  ", " {\n    padding: 38px 44px 0 34px;\n    width: 100%;\n  } ;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.bgGray;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var TokenList = styled__default['default'].div(templateObject_2$Y || (templateObject_2$Y = __makeTemplateObject(["\n  margin-top: 28px;\n  height: 70vh;\n  overflow-y: auto;\n  ", " {\n    max-height: 450px;\n  } ;\n"], ["\n  margin-top: 28px;\n  height: 70vh;\n  overflow-y: auto;\n  ", " {\n    max-height: 450px;\n  } ;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var ButtonClose$1 = styled__default['default'].button(templateObject_3$N || (templateObject_3$N = __makeTemplateObject(["\n  position: absolute;\n  top: 34px;\n  right: 25px;\n  padding: 0;\n  width: 30px;\n  height: 30px;\n  border: none;\n  display: flex;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 7px;\n  cursor: pointer;\n  ", " {\n    right: 50px;\n  } ;\n"], ["\n  position: absolute;\n  top: 34px;\n  right: 25px;\n  padding: 0;\n  width: 30px;\n  height: 30px;\n  border: none;\n  display: flex;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 7px;\n  cursor: pointer;\n  ", " {\n    right: 50px;\n  } ;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Description$2 = styled__default['default'](Text)(templateObject_4$C || (templateObject_4$C = __makeTemplateObject(["\n  font-size: 11px;\n  padding-right: 70px;\n  ", " {\n    font-size: 13px;\n    padding-right: 0;\n  } ;\n"], ["\n  font-size: 11px;\n  padding-right: 70px;\n  ", " {\n    font-size: 13px;\n    padding-right: 0;\n  } ;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var templateObject_1$19, templateObject_2$Y, templateObject_3$N, templateObject_4$C;

var ModalContent = styled__default['default'].div(templateObject_1$18 || (templateObject_1$18 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var StyledModal = styled__default['default'].div(templateObject_2$X || (templateObject_2$X = __makeTemplateObject(["\n  max-width: 404px;\n  max-height: 100vh;\n  min-width: 303px;\n  width: 100%;\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border-radius: 15px;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    min-width: 360px;\n    width: 100%;\n  }\n  ", " {\n    min-width: 404px;\n    width: 100%;\n  }\n"], ["\n  max-width: 404px;\n  max-height: 100vh;\n  min-width: 303px;\n  width: 100%;\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border-radius: 15px;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    min-width: 360px;\n    width: 100%;\n  }\n  ", " {\n    min-width: 404px;\n    width: 100%;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.bgGray;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xs;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var ModalHeader = styled__default['default'].div(templateObject_3$M || (templateObject_3$M = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  padding: ", ";\n  &.welcome {\n    padding-bottom: 0;\n  }\n  ", " {\n    padding: ", ";\n    &.welcome {\n      padding-bottom: 0;\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  padding: ", ";\n  &.welcome {\n    padding-bottom: 0;\n  }\n  ", " {\n    padding: ", ";\n    &.welcome {\n      padding-bottom: 0;\n    }\n  }\n"])), function (_a) {
    var paddingTopHeader = _a.paddingTopHeader;
    return " " + (paddingTopHeader || "20px") + " 14px 24px";
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var paddingTopHeader = _a.paddingTopHeader;
    return " " + (paddingTopHeader || "27px") + " 20px 40px 27px";
});
var ModalTitle = styled__default['default'].div(templateObject_4$B || (templateObject_4$B = __makeTemplateObject(["\n  align-items: center;\n  flex: 1;\n  color: ", ";\n"], ["\n  align-items: center;\n  flex: 1;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
var Overlay = styled__default['default'].div(templateObject_5$r || (templateObject_5$r = __makeTemplateObject(["\n  pointer-events: none;\n  display: block;\n  background: ", ";\n  position: fixed;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n"], ["\n  pointer-events: none;\n  display: block;\n  background: ", ";\n  position: fixed;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.overlayBg;
});
var Heading = styled__default['default'].div(templateObject_6$k || (templateObject_6$k = __makeTemplateObject(["\n  &.welcome {\n    font-weight: 500;\n    font-size: 21px;\n    letter-spacing: 0.5px;\n  }\n"], ["\n  &.welcome {\n    font-weight: 500;\n    font-size: 21px;\n    letter-spacing: 0.5px;\n  }\n"])));
var Image = styled__default['default'].div(templateObject_7$a || (templateObject_7$a = __makeTemplateObject(["\n  position: absolute;\n  top: 17px;\n  left: 50%;\n  transform: translateX(-50%);\n"], ["\n  position: absolute;\n  top: 17px;\n  left: 50%;\n  transform: translateX(-50%);\n"])));
var Modal = function (_a) {
    var welcome = _a.welcome, title = _a.title, onDismiss = _a.onDismiss, children = _a.children, _b = _a.hideCloseButton, hideCloseButton = _b === void 0 ? false : _b, image = _a.image, paddingTopHeader = _a.paddingTopHeader;
    return (React__default['default'].createElement("div", null,
        React__default['default'].createElement(Overlay, null),
        React__default['default'].createElement(StyledModal, null,
            React__default['default'].createElement(ModalContent, null,
                React__default['default'].createElement(ModalHeader, { className: welcome ? "welcome" : "", paddingTopHeader: paddingTopHeader },
                    React__default['default'].createElement(ModalTitle, null,
                        React__default['default'].createElement(Heading, { className: welcome ? "welcome" : "" }, title)),
                    image ? (React__default['default'].createElement(Image, null,
                        React__default['default'].createElement("img", { src: Gift2, alt: "" }))) : null,
                    !hideCloseButton && (React__default['default'].createElement(IconButton, { variant: "text", onClick: onDismiss, "aria-label": "Close the dialog" },
                        React__default['default'].createElement(Icon$R, null)))),
                children))));
};
var templateObject_1$18, templateObject_2$X, templateObject_3$M, templateObject_4$B, templateObject_5$r, templateObject_6$k, templateObject_7$a;

var ModalWrapper = styled__default['default'].div(templateObject_1$17 || (templateObject_1$17 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal - 1;
});
var Context = React.createContext({
    onPresent: function () { return null; },
    onDismiss: function () { return null; },
    setCloseOnOverlayClick: function () { return true; },
});
var ModalProvider = function (_a) {
    var children = _a.children;
    var _b = React.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = React.useState(), modalNode = _c[0], setModalNode = _c[1];
    var _d = React.useState(true); _d[0]; var setCloseOnOverlayClick = _d[1];
    var handlePresent = function (node) {
        setModalNode(node);
        setIsOpen(true);
    };
    var handleDismiss = function () {
        setModalNode(undefined);
        setIsOpen(false);
    };
    return (React__default['default'].createElement(Context.Provider, { value: {
            onPresent: handlePresent,
            onDismiss: handleDismiss,
            setCloseOnOverlayClick: setCloseOnOverlayClick,
        } },
        isOpen && (React__default['default'].createElement(ModalWrapper, null, React__default['default'].isValidElement(modalNode) &&
            React__default['default'].cloneElement(modalNode, {
                onDismiss: handleDismiss,
            }))),
        children));
};
var templateObject_1$17;

var useModal = function (modal, closeOnOverlayClick) {
    if (closeOnOverlayClick === void 0) { closeOnOverlayClick = true; }
    var _a = React.useContext(Context), onPresent = _a.onPresent, onDismiss = _a.onDismiss, setCloseOnOverlayClick = _a.setCloseOnOverlayClick;
    var onPresentCallback = React.useCallback(function () {
        onPresent(modal);
    }, [modal, onPresent]);
    React.useEffect(function () {
        setCloseOnOverlayClick(closeOnOverlayClick);
    }, [closeOnOverlayClick, setCloseOnOverlayClick]);
    return [onPresentCallback, onDismiss];
};

exports.ConnectorNames = void 0;
(function (ConnectorNames) {
    ConnectorNames["Injected"] = "injected";
    ConnectorNames["WalletConnect"] = "walletconnect";
    ConnectorNames["BSC"] = "bsc";
    ConnectorNames["Coin98"] = "coin98";
})(exports.ConnectorNames || (exports.ConnectorNames = {}));

var connectorsDefault = [
    {
        title: "Metamask",
        icon: Metamask,
        connectorId: exports.ConnectorNames.Injected,
    },
    {
        title: "Coin98",
        icon: Coin98,
        connectorId: exports.ConnectorNames.Injected,
    },
    {
        title: "Trust Wallet",
        icon: TrustWallet,
        connectorId: exports.ConnectorNames.Injected,
    },
    {
        title: "MathWallet",
        icon: MathWallet,
        connectorId: exports.ConnectorNames.Injected,
    },
    {
        title: "Token Pocket",
        icon: TokenPocket,
        connectorId: exports.ConnectorNames.Injected,
    },
    {
        title: "Wallet Connect",
        icon: WalletConnect,
        connectorId: exports.ConnectorNames.WalletConnect,
    },
    {
        title: "Binance Chain Wallet",
        icon: BinanceWallet,
        connectorId: exports.ConnectorNames.BSC,
    },
    {
        title: "SafePal Wallet",
        icon: SafepackWallet,
        connectorId: exports.ConnectorNames.Injected,
    },
];
var connectorsAvalanche = [
    {
        title: "Metamask",
        icon: Metamask,
        connectorId: exports.ConnectorNames.Injected,
    },
    {
        title: "Coin98",
        icon: Coin98,
        connectorId: exports.ConnectorNames.Injected,
    },
];
var connectorLocalStorageKey = "connectorId";
var getNetwork = function (network) {
    switch (network) {
        case "56":
            return connectorsDefault;
        case "43114":
            return connectorsAvalanche;
        default:
            return connectorsDefault;
    }
};

var HelpLink = styled__default['default'](Link$2)(templateObject_1$16 || (templateObject_1$16 = __makeTemplateObject(["\n  display: block;\n  align-self: center;\n  margin: 0 auto;\n  padding: 24px 0 26px 0;\n  background: ", ";\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  font-size: 15px;\n"], ["\n  display: block;\n  align-self: center;\n  margin: 0 auto;\n  padding: 24px 0 26px 0;\n  background: ", ";\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  font-size: 15px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.linkColor;
});
var Wrap$f = styled__default['default'].div(templateObject_2$W || (templateObject_2$W = __makeTemplateObject(["\n  text-align: center;\n  padding: 0 14px;\n  min-width: 303px;\n  ", " {\n    padding: 0 20px 0 27px;\n  }\n"], ["\n  text-align: center;\n  padding: 0 14px;\n  min-width: 303px;\n  ", " {\n    padding: 0 20px 0 27px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var Button$5 = styled__default['default'].button(templateObject_3$L || (templateObject_3$L = __makeTemplateObject(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 14px;\n  padding: 6px 6px 6px 27px;\n  width: 100%;\n  background: ", ";\n  border: 0;\n  border-radius: 12px;\n  box-shadow: inset 0px 4px 4px ", ";\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 15px;\n  letter-spacing: 0.03em;\n  line-height: 19px;\n  outline: 0;\n  transition: background-color 0.2s;\n  color: ", ";\n"], ["\n  display: inline-flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 14px;\n  padding: 6px 6px 6px 27px;\n  width: 100%;\n  background: ", ";\n  border: 0;\n  border-radius: 12px;\n  box-shadow: inset 0px 4px 4px ", ";\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 15px;\n  letter-spacing: 0.03em;\n  line-height: 19px;\n  outline: 0;\n  transition: background-color 0.2s;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.buttonBg;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.buttonShadow;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
var ImgWrap = styled__default['default'].div(templateObject_4$A || (templateObject_4$A = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 38px;\n  height: 38px;\n  border-radius: 9px;\n  background: ", ";\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 38px;\n  height: 38px;\n  border-radius: 9px;\n  background: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return polished.transparentize(0.95, theme.colors.text);
});
var ConnectModal = function (_a) {
    var _b;
    var texts = _a.texts, login = _a.login, hrefLearnHow = _a.hrefLearnHow, network = _a.network, _c = _a.onDismiss, onDismiss = _c === void 0 ? function () { return null; } : _c;
    return (React__default['default'].createElement(Modal, { title: texts.title, onDismiss: onDismiss }, (_b = getNetwork(network === null || network === void 0 ? void 0 : network.chainId)) === null || _b === void 0 ? void 0 :
        _b.map(function (entry, index) { return (React__default['default'].createElement(Wrap$f, { key: index },
            React__default['default'].createElement(Button$5, { onClick: function () {
                    login(entry.connectorId);
                    window.localStorage.setItem(connectorLocalStorageKey, entry.connectorId);
                    onDismiss();
                } },
                React__default['default'].createElement(Text, { fontWeight: 500, color: "text", mr: "16px", fontSize: "15px" }, entry.title),
                React__default['default'].createElement(ImgWrap, null,
                    React__default['default'].createElement("img", { src: entry.icon }))))); }),
        React__default['default'].createElement(HelpLink, { href: hrefLearnHow, external: true }, texts.link)));
};
var templateObject_1$16, templateObject_2$W, templateObject_3$L, templateObject_4$A;

var StyleButton = styled__default['default'](Text).attrs({ role: "button" })(templateObject_1$15 || (templateObject_1$15 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.green;
});
var Tooltip$1 = styled__default['default'].div(templateObject_2$V || (templateObject_2$V = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: ", ";\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"], ["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: ", ";\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"])), function (_a) {
    var isTooltipDisplayed = _a.isTooltipDisplayed;
    return (isTooltipDisplayed ? "block" : "none");
}, function (_a) {
    var left = _a.left;
    return left || 0;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.invertedContrast;
});
var CopyToClipboard = function (_a) {
    var toCopy = _a.toCopy, textCopied = _a.textCopied, children = _a.children, icon = _a.icon, left = _a.left, props = __rest(_a, ["toCopy", "textCopied", "children", "icon", "left"]);
    var _b = React.useState(false), isTooltipDisplayed = _b[0], setIsTooltipDisplayed = _b[1];
    return (React__default['default'].createElement(StyleButton, __assign({ small: true, bold: true, onClick: function () {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(toCopy);
                setIsTooltipDisplayed(true);
                setTimeout(function () {
                    setIsTooltipDisplayed(false);
                }, 1000);
            }
        } }, props),
        children,
        icon || React__default['default'].createElement(Icon$I, { width: "20px", color: "#47DA3B", ml: "4px" }),
        React__default['default'].createElement(Tooltip$1, { isTooltipDisplayed: isTooltipDisplayed, left: left }, textCopied)));
};
var templateObject_1$15, templateObject_2$V;

var AccountModal = function (_a) {
    var texts = _a.texts, account = _a.account, logout = _a.logout, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React__default['default'].createElement(Modal, { title: texts.title, onDismiss: onDismiss },
        React__default['default'].createElement(ModalWrap$1, null,
            React__default['default'].createElement(Text, { bold: true, style: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" } },
                React__default['default'].createElement(AccountWrap$1, { as: "div" },
                    React__default['default'].createElement(AccountText$1, { fontWeight: 500, color: "text" }, account))),
            React__default['default'].createElement(Flex, { mb: "32px" },
                React__default['default'].createElement(LinkExternal, { color: "#47DA3B", small: true, href: "https://bscscan.com/address/" + account, mr: "16px" }, texts.view),
                React__default['default'].createElement(CopyText$1, { color: "#47DA3B" },
                    React__default['default'].createElement(CopyToClipboard, { toCopy: account, textCopied: texts.copied }, texts.copy))),
            React__default['default'].createElement(Flex, { justifyContent: "center" },
                React__default['default'].createElement(Button$9, { mt: "60px", scale: "md", width: "100%", variant: "green", onClick: function () {
                        logout();
                        window.localStorage.removeItem(connectorLocalStorageKey);
                        onDismiss();
                    } }, texts.button)))));
};
var ModalWrap$1 = styled__default['default'].div(templateObject_1$14 || (templateObject_1$14 = __makeTemplateObject(["\n  padding: 0 20px 20px;\n"], ["\n  padding: 0 20px 20px;\n"])));
var AccountWrap$1 = styled__default['default'](Button$5)(templateObject_2$U || (templateObject_2$U = __makeTemplateObject(["\n  padding: 17px 15px;\n  width: 100%;\n  ", " {\n    padding: 17px 20px;\n  }\n"], ["\n  padding: 17px 15px;\n  width: 100%;\n  ", " {\n    padding: 17px 20px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var CopyText$1 = styled__default['default'](Text)(templateObject_3$K || (templateObject_3$K = __makeTemplateObject(["\n  transition: none.2s;\n  &:hover {\n    text-decoration: underline;\n  }\n"], ["\n  transition: none.2s;\n  &:hover {\n    text-decoration: underline;\n  }\n"])));
var AccountText$1 = styled__default['default'](Text)(templateObject_4$z || (templateObject_4$z = __makeTemplateObject(["\n  font-size: 10px;\n  ", " {\n    font-size: 11px;\n  }\n"], ["\n  font-size: 10px;\n  ", " {\n    font-size: 11px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var templateObject_1$14, templateObject_2$U, templateObject_3$K, templateObject_4$z;

var AccountVestingModal = function (_a) {
    var texts = _a.texts, account = _a.account, logout = _a.logout, yayBalance = _a.yayBalance, dataTransactions = _a.dataTransactions, _b = _a.handleClaimed, handleClaimed = _b === void 0 ? function () { return null; } : _b, _c = _a.onDismiss, onDismiss = _c === void 0 ? function () { return null; } : _c, handleAddToken = _a.handleAddToken, minHeight = _a.minHeight, marginContent = _a.marginContent, buttonLogoutType = _a.buttonLogoutType, linkExternalWalletModal = _a.linkExternalWalletModal;
    var _d = React.useState(0), tabValue = _d[0], setTabValue = _d[1];
    var handleTab = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            setTabValue(+e.target.value);
            return [2 /*return*/];
        });
    }); };
    return (React__default['default'].createElement(Modal, { title: texts.title, onDismiss: onDismiss },
        React__default['default'].createElement(ModalWrap, { minHeight: minHeight },
            texts.tabs && React__default['default'].createElement(Tabs$1, { tabsList: texts.tabs, tabValue: tabValue, onClick: handleTab }),
            tabValue === 0 && (React__default['default'].createElement(React__default['default'].Fragment, null,
                React__default['default'].createElement(Text, { letterSpacing: "-0.02em", color: "textGray", marginBottom: "7px", fontSize: "14px", lineHeight: "24px", marginTop: marginContent || "37px", fontWeight: "400" }, texts.address),
                React__default['default'].createElement(Text, { bold: true, style: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" } },
                    React__default['default'].createElement(AccountWrap, { as: "div" },
                        React__default['default'].createElement(AccountText, { fontWeight: 500, color: "text" }, account),
                        React__default['default'].createElement(CopyText, { color: "#47DA3B" },
                            React__default['default'].createElement(CopyToClipboard, { toCopy: account, textCopied: texts.copied, icon: React__default['default'].createElement(Icon$b, null), left: "auto" })))),
                React__default['default'].createElement(Flex, { alignItems: "center", justifyContent: "space-between", mb: "30px" },
                    React__default['default'].createElement(Text, { letterSpacing: "-0.02em", color: "textGray", fontWeight: "400" }, texts.yayBalance),
                    React__default['default'].createElement(Text, { letterSpacing: "-0.02em", fontWeight: "400" }, yayBalance),
                    React__default['default'].createElement(ButtonAddToken, { onClick: handleAddToken }, texts.addToken)),
                React__default['default'].createElement(Flex, { mb: "30px" },
                    React__default['default'].createElement(LinkExternal, { color: "#47DA3B", small: true, href: linkExternalWalletModal || "https://bscscan.com/address/" + account, mr: "16px", icon: React__default['default'].createElement(Icon$c, { style: { marginLeft: 5 } }), style: { fontWeight: 400 } }, texts.view)),
                React__default['default'].createElement(Flex, { justifyContent: "center" },
                    React__default['default'].createElement(Button$9, { scale: "md", width: "100%", variant: buttonLogoutType || variants$2.SECONDARY, style: { fontWeight: 400 }, onClick: function () {
                            logout();
                            window.localStorage.removeItem(connectorLocalStorageKey);
                            onDismiss();
                        } }, texts.button)))),
            tabValue === 1 && (React__default['default'].createElement(React__default['default'].Fragment, null,
                React__default['default'].createElement(Text, { letterSpacing: "-0.02em", color: "textGray", marginBottom: "21px", fontSize: "14px", lineHeight: "24px", marginTop: "26px", fontWeight: 400 }, texts.recentTransactions),
                (dataTransactions === null || dataTransactions === void 0 ? void 0 : dataTransactions.length) ? (React__default['default'].createElement(Table$3, null, dataTransactions === null || dataTransactions === void 0 ? void 0 : dataTransactions.map(function (el, i) { return (React__default['default'].createElement(React__default['default'].Fragment, { key: el.id + "-" + i },
                    React__default['default'].createElement(StyledText$2, null, el.id),
                    React__default['default'].createElement(ButtonClaimed, { onClick: function () { return handleClaimed(el.id); } },
                        texts.claimed,
                        React__default['default'].createElement(Icon$c, { stroke: "#fff", style: { marginLeft: 5 }, width: "8px" })),
                    React__default['default'].createElement(StyledText$2, { color: "green" }, el.value))); }))) : (React__default['default'].createElement(Text, { fontSize: "13px", letterSpacing: "0.05em", textAlign: "center", padding: "16px 0" }, texts.noRecentTransactions)))))));
};
var ModalWrap = styled__default['default'].div(templateObject_1$13 || (templateObject_1$13 = __makeTemplateObject(["\n  padding: 0 20px 20px;\n  min-height: ", ";\n  margin-top: -10px;\n"], ["\n  padding: 0 20px 20px;\n  min-height: ", ";\n  margin-top: -10px;\n"])), function (_a) {
    var minHeight = _a.minHeight;
    return minHeight || "380px";
});
var AccountWrap = styled__default['default'](Button$5)(templateObject_2$T || (templateObject_2$T = __makeTemplateObject(["\n  position: relative;\n  padding: 13px 15px;\n  width: 100%;\n  ", " {\n    padding: 13px 20px;\n  }\n"], ["\n  position: relative;\n  padding: 13px 15px;\n  width: 100%;\n  ", " {\n    padding: 13px 20px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var CopyText = styled__default['default'](Text)(templateObject_3$J || (templateObject_3$J = __makeTemplateObject(["\n  padding-left: 10px;\n  margin-left: auto;\n  box-shadow: -10px 0px 10px ", ";\n"], ["\n  padding-left: 10px;\n  margin-left: auto;\n  box-shadow: -10px 0px 10px ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.darkGreyBg;
});
var AccountText = styled__default['default'](Text)(templateObject_4$y || (templateObject_4$y = __makeTemplateObject(["\n  font-size: 13px;\n  max-width: 226px;\n  overflow: hidden;\n  ", " {\n    max-width: 250px;\n  }\n  ", " {\n    max-width: 300px;\n  }\n"], ["\n  font-size: 13px;\n  max-width: 226px;\n  overflow: hidden;\n  ", " {\n    max-width: 250px;\n  }\n  ", " {\n    max-width: 300px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xs;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Table$3 = styled__default['default'].div(templateObject_5$q || (templateObject_5$q = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: 10% 35% 44%;\n  grid-gap: 32px 20px;\n  align-items: center;\n"], ["\n  display: grid;\n  grid-template-columns: 10% 35% 44%;\n  grid-gap: 32px 20px;\n  align-items: center;\n"])));
var ButtonClaimed = styled__default['default'].button(templateObject_6$j || (templateObject_6$j = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 7px 15px;\n  border-radius: 7px;\n  font-size: 13px;\n  line-height: 16px;\n  text-align: center;\n  letter-spacing: 0.5px;\n  text-shadow: 0px 3px 4px rgba(0, 0, 0, 0.15);\n  background: none;\n  border: 1px solid ", ";\n  color: ", ";\n  font-weight: 400;\n  cursor: pointer;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 7px 15px;\n  border-radius: 7px;\n  font-size: 13px;\n  line-height: 16px;\n  text-align: center;\n  letter-spacing: 0.5px;\n  text-shadow: 0px 3px 4px rgba(0, 0, 0, 0.15);\n  background: none;\n  border: 1px solid ", ";\n  color: ", ";\n  font-weight: 400;\n  cursor: pointer;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.green;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
var StyledText$2 = styled__default['default'](Text)(templateObject_7$9 || (templateObject_7$9 = __makeTemplateObject(["\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 16px;\n  letter-spacing: 0.05em;\n  ", " {\n    font-size: 15px;\n    line-height: 19px;\n  }\n"], ["\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 16px;\n  letter-spacing: 0.05em;\n  ", " {\n    font-size: 15px;\n    line-height: 19px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var ButtonAddToken = styled__default['default'](Button$9)(templateObject_8$7 || (templateObject_8$7 = __makeTemplateObject(["\n  height: auto;\n  padding: 9px 16px;\n  border: 1px solid ", ";\n  color: ", ";\n  border-radius: 10px;\n  background: none;\n  font-weight: 400;\n  cursor: pointer;\n  font-size: 15px;\n  line-height: 19px;\n  text-align: center;\n  letter-spacing: -0.02em;\n"], ["\n  height: auto;\n  padding: 9px 16px;\n  border: 1px solid ", ";\n  color: ", ";\n  border-radius: 10px;\n  background: none;\n  font-weight: 400;\n  cursor: pointer;\n  font-size: 15px;\n  line-height: 19px;\n  text-align: center;\n  letter-spacing: -0.02em;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.green;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.green;
});
var templateObject_1$13, templateObject_2$T, templateObject_3$J, templateObject_4$y, templateObject_5$q, templateObject_6$j, templateObject_7$9, templateObject_8$7;

var WalletSide = function (_a) {
    var textsBridge = _a.textsBridge, account = _a.account, handleDisconnect = _a.handleDisconnect;
    var _b = React.useState(false), isTooltipDisplayed = _b[0], setIsTooltipDisplayed = _b[1];
    return (React__default['default'].createElement(Wrapper$e, null,
        React__default['default'].createElement(Title$8, null, textsBridge === null || textsBridge === void 0 ? void 0 : textsBridge.title),
        React__default['default'].createElement(Address, null,
            React__default['default'].createElement(AddressTextWrapper, null,
                React__default['default'].createElement(AddressText, null, account)),
            React__default['default'].createElement(CopyButton, { onClick: function () {
                    if (navigator.clipboard) {
                        navigator.clipboard.writeText(account || "");
                        setIsTooltipDisplayed(true);
                        setTimeout(function () {
                            setIsTooltipDisplayed(false);
                        }, 1000);
                    }
                } },
                React__default['default'].createElement(Icon$I, null)),
            React__default['default'].createElement(Tooltip, { isTooltipDisplayed: isTooltipDisplayed }, textsBridge === null || textsBridge === void 0 ? void 0 : textsBridge.completeText)),
        React__default['default'].createElement(Line$6, null,
            React__default['default'].createElement(Key, { size: "sm" }, textsBridge === null || textsBridge === void 0 ? void 0 : textsBridge.network),
            React__default['default'].createElement(Text, { size: "sm" }, textsBridge === null || textsBridge === void 0 ? void 0 : textsBridge.newtworkName)),
        React__default['default'].createElement(Line$6, null,
            React__default['default'].createElement(Key, { size: "sm" }, textsBridge === null || textsBridge === void 0 ? void 0 : textsBridge.wallet),
            React__default['default'].createElement(Text, { size: "sm" }, textsBridge === null || textsBridge === void 0 ? void 0 : textsBridge.walletName)),
        React__default['default'].createElement(DisconnetButton, { onClick: handleDisconnect }, textsBridge === null || textsBridge === void 0 ? void 0 : textsBridge.button)));
};
var Wrapper$e = styled__default['default'].div(templateObject_1$12 || (templateObject_1$12 = __makeTemplateObject(["\n  margin-top: 37px;\n"], ["\n  margin-top: 37px;\n"])));
var Title$8 = styled__default['default'](Text)(templateObject_2$S || (templateObject_2$S = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.greyText;
});
var Key = styled__default['default'](Title$8)(templateObject_3$I || (templateObject_3$I = __makeTemplateObject([""], [""])));
var Address = styled__default['default'].div(templateObject_4$x || (templateObject_4$x = __makeTemplateObject(["\n  height: 50px;\n  position: relative;\n  margin-top: 7px;\n  padding: 17px 24px 17px 24px;\n  background: ", ";\n  box-shadow: ", ";\n  border-radius: 12px;\n  &::after {\n    position: absolute;\n    content: \"\";\n    top: 0;\n    right: 0;\n    display: block;\n    background: linear-gradient(270deg, #1d1d22 53.6%, rgba(27, 27, 32, 0) 100%);\n    height: 100%;\n    width: 76px;\n    border-radius: 0px 12px 12px 0;\n  }\n"], ["\n  height: 50px;\n  position: relative;\n  margin-top: 7px;\n  padding: 17px 24px 17px 24px;\n  background: ", ";\n  box-shadow: ", ";\n  border-radius: 12px;\n  &::after {\n    position: absolute;\n    content: \"\";\n    top: 0;\n    right: 0;\n    display: block;\n    background: linear-gradient(270deg, #1d1d22 53.6%, rgba(27, 27, 32, 0) 100%);\n    height: 100%;\n    width: 76px;\n    border-radius: 0px 12px 12px 0;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.buttonBg;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow4;
});
var AddressText = styled__default['default'](Text)(templateObject_5$p || (templateObject_5$p = __makeTemplateObject(["\n  white-space: nowrap;\n  font-size: 13px;\n  letter-spacing: 0.05em;\n  font-weight: 400;\n"], ["\n  white-space: nowrap;\n  font-size: 13px;\n  letter-spacing: 0.05em;\n  font-weight: 400;\n"])));
var Line$6 = styled__default['default'].div(templateObject_6$i || (templateObject_6$i = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 20px;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 20px;\n"])));
var DisconnetButton = styled__default['default'](Button$9)(templateObject_7$8 || (templateObject_7$8 = __makeTemplateObject(["\n  display: block;\n  margin: 50px auto 0;\n  width: 270px;\n  color: ", ";\n  border: 1px solid ", ";\n  box-sizing: border-box;\n  border-radius: 10px;\n  background: none;\n"], ["\n  display: block;\n  margin: 50px auto 0;\n  width: 270px;\n  color: ", ";\n  border: 1px solid ", ";\n  box-sizing: border-box;\n  border-radius: 10px;\n  background: none;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.greenText2;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.greenText2;
});
var CopyButton = styled__default['default'].button(templateObject_8$6 || (templateObject_8$6 = __makeTemplateObject(["\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 10px;\n  cursor: pointer;\n  margin-left: 12px;\n  width: 30px;\n  height: 30px;\n  border-radius: 7px;\n  border: none;\n  display: flex;\n  background: none;\n  align-items: center;\n  justify-content: center;\n  z-index: 2;\n  & svg {\n    fill: ", ";\n  }\n"], ["\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 10px;\n  cursor: pointer;\n  margin-left: 12px;\n  width: 30px;\n  height: 30px;\n  border-radius: 7px;\n  border: none;\n  display: flex;\n  background: none;\n  align-items: center;\n  justify-content: center;\n  z-index: 2;\n  & svg {\n    fill: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.greenText2;
});
var Tooltip = styled__default['default'].div(templateObject_9$4 || (templateObject_9$4 = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: ", ";\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"], ["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: ", ";\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"])), function (_a) {
    var isTooltipDisplayed = _a.isTooltipDisplayed;
    return (isTooltipDisplayed ? "block" : "none");
}, function (_a) {
    var left = _a.left;
    return left || 0;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.invertedContrast;
});
var AddressTextWrapper = styled__default['default'].div(templateObject_10$2 || (templateObject_10$2 = __makeTemplateObject(["\n  overflow: hidden;\n  width: 100%;\n"], ["\n  overflow: hidden;\n  width: 100%;\n"])));
var templateObject_1$12, templateObject_2$S, templateObject_3$I, templateObject_4$x, templateObject_5$p, templateObject_6$i, templateObject_7$8, templateObject_8$6, templateObject_9$4, templateObject_10$2;

var TransactionSide = function (_a) {
    var transactionsList = _a.transactionsList, transactionTitle = _a.transactionTitle, noRecentTransactions = _a.noRecentTransactions;
    return (React__default['default'].createElement(Wrapper$d, null,
        React__default['default'].createElement(Title$7, null, transactionTitle),
        React__default['default'].createElement(TransactionsBlock, null, transactionsList && transactionsList.length > 0 ? (transactionsList === null || transactionsList === void 0 ? void 0 : transactionsList.map(function (item, i) { return (React__default['default'].createElement(Transaction, { key: i },
            React__default['default'].createElement(TextBlock$1, null, item.number),
            React__default['default'].createElement(LinkBlock$1, { href: item.linkHref, as: "a", target: "_blank", status: item.status },
                React__default['default'].createElement(Text, { size: "xs" }, item.link),
                React__default['default'].createElement(Icon$N, null)),
            React__default['default'].createElement(TextBlock$1, { color: item.status ? lightColors.greenText2 : lightColors.redBg }, item.profit))); })) : (React__default['default'].createElement(Text, { fontSize: "13px", letterSpacing: "0.05em", textAlign: "center", padding: "16px 0" }, noRecentTransactions)))));
};
var Wrapper$d = styled__default['default'].div(templateObject_1$11 || (templateObject_1$11 = __makeTemplateObject(["\n  margin-top: 26px;\n"], ["\n  margin-top: 26px;\n"])));
var Title$7 = styled__default['default'](Text)(templateObject_2$R || (templateObject_2$R = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.greyText;
});
var TransactionsBlock = styled__default['default'].div(templateObject_3$H || (templateObject_3$H = __makeTemplateObject(["\n  margin-top: 21px;\n  height: 232px;\n  overflow-y: auto;\n"], ["\n  margin-top: 21px;\n  height: 232px;\n  overflow-y: auto;\n"])));
var Transaction = styled__default['default'].div(templateObject_4$w || (templateObject_4$w = __makeTemplateObject(["\n  margin-top: 27px;\n  display: grid;\n  gap: 0 15px;\n  align-items: center;\n  grid-template-columns: 1fr 3fr 2.5fr;\n  &:first-child {\n    margin-top: 0;\n  }\n"], ["\n  margin-top: 27px;\n  display: grid;\n  gap: 0 15px;\n  align-items: center;\n  grid-template-columns: 1fr 3fr 2.5fr;\n  &:first-child {\n    margin-top: 0;\n  }\n"])));
var LinkBlock$1 = styled__default['default'].div(templateObject_5$o || (templateObject_5$o = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n  width: 144px;\n  padding: 8px 15px;\n  border-radius: 7px;\n  border: none;\n  cursor: pointer;\n  background: none;\n  border: 1.5px solid ", ";\n  & svg {\n    position: absolute;\n    right: 5px;\n    top: 50%;\n    transform: translateY(-60%) rotate(225deg);\n  }\n"], ["\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n  width: 144px;\n  padding: 8px 15px;\n  border-radius: 7px;\n  border: none;\n  cursor: pointer;\n  background: none;\n  border: 1.5px solid ", ";\n  & svg {\n    position: absolute;\n    right: 5px;\n    top: 50%;\n    transform: translateY(-60%) rotate(225deg);\n  }\n"])), function (_a) {
    var status = _a.status, theme = _a.theme;
    return (status ? theme.colors.greenText2 : theme.colors.redBg);
});
var TextBlock$1 = styled__default['default'](Text)(templateObject_6$h || (templateObject_6$h = __makeTemplateObject(["\n  font-size: 11px;\n  ", " {\n    font-size: 15px;\n  } ;\n"], ["\n  font-size: 11px;\n  ", " {\n    font-size: 15px;\n  } ;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var templateObject_1$11, templateObject_2$R, templateObject_3$H, templateObject_4$w, templateObject_5$o, templateObject_6$h;

var Wrap$e = styled__default['default'].div(templateObject_1$10 || (templateObject_1$10 = __makeTemplateObject(["\n  padding: 21px 13px;\n  max-height: 100vh;\n  min-height: 410px;\n  min-width: 303px;\n  box-sizing: border-box;\n  width: 100%;\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border-radius: 15px;\n  z-index: ", ";\n  ", " {\n    min-width: 360px;\n    width: 100%;\n  }\n  ", " {\n    min-width: 404px;\n    width: 100%;\n    padding: 30px 20px 29px 27px;\n  }\n"], ["\n  padding: 21px 13px;\n  max-height: 100vh;\n  min-height: 410px;\n  min-width: 303px;\n  box-sizing: border-box;\n  width: 100%;\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border-radius: 15px;\n  z-index: ", ";\n  ", " {\n    min-width: 360px;\n    width: 100%;\n  }\n  ", " {\n    min-width: 404px;\n    width: 100%;\n    padding: 30px 20px 29px 27px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.bgGray;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xs;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var WalletHistoryModal = function (_a) {
    var account = _a.account, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b, transactionsList = _a.transactionsList, textsBridge = _a.textsBridge, logout = _a.logout;
    var _c = React.useState(0), tabValue = _c[0], setTabValue = _c[1];
    var handleTabChange = function (e) {
        setTabValue(+e.target.value);
    };
    var handleDisconnect = function () {
        logout();
        window.localStorage.removeItem(connectorLocalStorageKey);
        onDismiss();
    };
    return (React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement(Modal, { welcome: true, title: textsBridge === null || textsBridge === void 0 ? void 0 : textsBridge.titleModal, onDismiss: onDismiss },
            React__default['default'].createElement(Wrap$e, null,
                React__default['default'].createElement(Tabs$1, { tabValue: tabValue, onClick: handleTabChange, tabsList: textsBridge === null || textsBridge === void 0 ? void 0 : textsBridge.tabsList }),
                tabValue === 0 ? (React__default['default'].createElement(WalletSide, { logout: logout, handleDisconnect: handleDisconnect, account: account, textsBridge: textsBridge })) : (React__default['default'].createElement(TransactionSide, { noRecentTransactions: textsBridge === null || textsBridge === void 0 ? void 0 : textsBridge.noRecentTransactions, transactionsList: transactionsList, transactionTitle: textsBridge === null || textsBridge === void 0 ? void 0 : textsBridge.transactionTitle }))))));
};
var templateObject_1$10;

var useWalletHistoryModal = function () {
    var transactionsList = [
        {
            number: "#001",
            link: "BSC to Avalanche",
            profit: "12,000,00 $YAY",
            status: true,
            linkHref: "asdfsf",
        },
    ];
    var textsBridge = {
        titleModal: "Your wallet",
        title: "Your address",
        network: "Network",
        wallet: "Wallet",
        newtworkName: "Binance Smart Chain",
        walletName: "Metamask",
        button: "Disconnect Wallet",
        completeText: "Copied",
        noRecentTransactions: "No recent transactions",
        transactionTitle: "Recent transactions",
        tabsList: ["Wallet", "Transactions"],
    };
    var onPresentWalletHistoryModal = useModal(React__default['default'].createElement(WalletHistoryModal, { account: "hjwebfuy2438fbiu34bgouy34bfuyob34fouyb34", textsBridge: textsBridge, transactionsList: transactionsList, logout: function () { } }))[0];
    return { onPresentWalletHistoryModal: onPresentWalletHistoryModal };
};

var useWalletModal = function (login, logout, textsAccount, textsConnect, network, account, hrefLearnHow, vesting, yayBalance, dataTransactions, handleClaimed, bridge, textsBridge, transactionsList, handleAddToken, marginContent, minHeight, buttonLogoutType, linkExternalWalletModal) {
    var pageModal = function () {
        if (vesting) {
            return (React__default['default'].createElement(AccountVestingModal, { texts: textsAccount, account: account || "", logout: logout, yayBalance: yayBalance, dataTransactions: dataTransactions, handleClaimed: handleClaimed, handleAddToken: handleAddToken, marginContent: marginContent, minHeight: minHeight, buttonLogoutType: buttonLogoutType, linkExternalWalletModal: linkExternalWalletModal }));
        }
        else if (bridge) {
            return (React__default['default'].createElement(WalletHistoryModal, { account: account, textsBridge: textsBridge, logout: logout, transactionsList: transactionsList }));
        }
        else {
            return React__default['default'].createElement(AccountModal, { texts: textsAccount, account: account || "", logout: logout });
        }
    };
    var onPresentConnectModal = useModal(React__default['default'].createElement(ConnectModal, { texts: textsConnect, login: login, hrefLearnHow: hrefLearnHow, network: network }))[0];
    var onPresentAccountModal = useModal(pageModal())[0];
    return { onPresentConnectModal: onPresentConnectModal, onPresentAccountModal: onPresentAccountModal };
};

var HistoryPanel = function (_a) {
    var isHistoryPaneOpen = _a.isHistoryPaneOpen, children = _a.children, handleToggle = _a.handleToggle, valueAccordeon = _a.valueAccordeon;
    return (React__default['default'].createElement(Panel, { open: isHistoryPaneOpen },
        React__default['default'].createElement(Wrap$d, null,
            React__default['default'].createElement(ButtonToggle, { onClick: handleToggle, open: isHistoryPaneOpen, color: valueAccordeon ? "dark" : "panel" },
                React__default['default'].createElement(Icon$z, { className: "button" }),
                React__default['default'].createElement(Icon$A, { className: "arrow" })),
            children)));
};
var Panel = styled__default['default'].div(templateObject_1$$ || (templateObject_1$$ = __makeTemplateObject(["\n  position: fixed;\n  right: 0;\n  top: 0;\n  width: ", ";\n  transition: all 0.3s ease, overflow-y 0ms;\n  overflow-y: ", ";\n  z-index: 11;\n\n  ", " {\n    padding-left: 20px;\n    width: ", ";\n  }\n"], ["\n  position: fixed;\n  right: 0;\n  top: 0;\n  width: ", ";\n  transition: all 0.3s ease, overflow-y 0ms;\n  overflow-y: ", ";\n  z-index: 11;\n\n  ", " {\n    padding-left: 20px;\n    width: ", ";\n  }\n"])), function (_a) {
    var open = _a.open;
    return (open ? "100%" : "0px");
}, function (_a) {
    var open = _a.open;
    return (open ? "auto" : "hidden");
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var open = _a.open;
    return (open ? "436px" : "8px");
});
var Wrap$d = styled__default['default'].div(templateObject_2$Q || (templateObject_2$Q = __makeTemplateObject(["\n  position: relative;\n  background: ", ";\n  height: 100vh;\n  width: 100%;\n\n  ", " {\n    width: 416px;\n  }\n"], ["\n  position: relative;\n  background: ", ";\n  height: 100vh;\n  width: 100%;\n\n  ", " {\n    width: 416px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.panel;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var ButtonToggle = styled__default['default'].button(templateObject_3$G || (templateObject_3$G = __makeTemplateObject(["\n  position: absolute;\n  left: -20px;\n  top: 380px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100px;\n  padding: 10px 8px 10px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  & .arrow {\n    display: none;\n    transform: ", ";\n    transition: 0.3s;\n    margin-left: 5px;\n  }\n  & .button {\n    display: none;\n    position: absolute;\n    left: 4px;\n    & path {\n      transition: 0.3s;\n      fill: ", ";\n    }\n  }\n  ", " {\n    & .arrow {\n      display: block;\n    }\n    & .button {\n      display: block;\n    }\n  }\n"], ["\n  position: absolute;\n  left: -20px;\n  top: 380px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100px;\n  padding: 10px 8px 10px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  & .arrow {\n    display: none;\n    transform: ", ";\n    transition: 0.3s;\n    margin-left: 5px;\n  }\n  & .button {\n    display: none;\n    position: absolute;\n    left: 4px;\n    & path {\n      transition: 0.3s;\n      fill: ", ";\n    }\n  }\n  ", " {\n    & .arrow {\n      display: block;\n    }\n    & .button {\n      display: block;\n    }\n  }\n"])), function (_a) {
    var open = _a.open;
    return (open ? "scale(-1,1)" : "scale(1,1)");
}, function (_a) {
    var theme = _a.theme, color = _a.color;
    return (color === "panel" ? theme.colors.panel : theme.colors.dark);
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var templateObject_1$$, templateObject_2$Q, templateObject_3$G;

var TabsHistory = function (_a) {
    var tabValue = _a.tabValue, onClick = _a.onClick, tabsList = _a.tabsList;
    return (React__default['default'].createElement(TabsWrap$2, { length: tabsList === null || tabsList === void 0 ? void 0 : tabsList.length }, tabsList === null || tabsList === void 0 ? void 0 : tabsList.map(function (item, i) { return (React__default['default'].createElement(Tab$4, { onClick: onClick, className: tabValue === i ? "active" : "", key: i, value: i }, item)); })));
};
var TabsWrap$2 = styled__default['default'].div(templateObject_1$_ || (templateObject_1$_ = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(", ", 1fr);\n  background: ", ";\n  border-radius: 12px;\n  box-shadow: ", ";\n"], ["\n  display: grid;\n  grid-template-columns: repeat(", ", 1fr);\n  background: ", ";\n  border-radius: 12px;\n  box-shadow: ", ";\n"])), function (_a) {
    var length = _a.length;
    return length || 2;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.buttonBg;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow4;
});
var Tab$4 = styled__default['default'].button(templateObject_2$P || (templateObject_2$P = __makeTemplateObject(["\n  padding: 15px 30px;\n  border: none;\n  background: transparent;\n  border-radius: 12px;\n  font-size: 15px;\n  line-height: 19px;\n  font-weight: 500;\n  text-align: center;\n  letter-spacing: 0.5px;\n  text-shadow: 0px 3px 4px rgba(0, 0, 0, 0.15);\n  transition: 0.3s;\n  cursor: pointer;\n  color: ", ";\n  &.active {\n    background: ", ";\n    color: ", ";\n  }\n"], ["\n  padding: 15px 30px;\n  border: none;\n  background: transparent;\n  border-radius: 12px;\n  font-size: 15px;\n  line-height: 19px;\n  font-weight: 500;\n  text-align: center;\n  letter-spacing: 0.5px;\n  text-shadow: 0px 3px 4px rgba(0, 0, 0, 0.15);\n  transition: 0.3s;\n  cursor: pointer;\n  color: ", ";\n  &.active {\n    background: ", ";\n    color: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return polished.transparentize(0.3, theme.colors.text);
}, function (_a) {
    var theme = _a.theme;
    return polished.transparentize(0.85, theme.colors.text);
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
var templateObject_1$_, templateObject_2$P;

var HistoryTabs;
(function (HistoryTabs) {
    HistoryTabs[HistoryTabs["ROUNDS"] = 0] = "ROUNDS";
    HistoryTabs[HistoryTabs["PNL"] = 1] = "PNL";
})(HistoryTabs || (HistoryTabs = {}));
var HistoryFilter;
(function (HistoryFilter) {
    HistoryFilter["ALL"] = "all";
    HistoryFilter["COLLECTED"] = "collected";
    HistoryFilter["UNCOLLECTED"] = "uncollected";
})(HistoryFilter || (HistoryFilter = {}));
var HeaderHistory = function (_a) {
    var activeTab = _a.activeTab, handleClose = _a.handleClose, switchTab = _a.switchTab, handleChangeTab = _a.handleChangeTab, historyFilter = _a.historyFilter, isFetchingHistory = _a.isFetchingHistory, account = _a.account, texts = _a.texts, tabsList = _a.tabsList;
    return (React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement(ButtonClose, { onClick: handleClose },
            React__default['default'].createElement(Icon$R, null)),
        React__default['default'].createElement(Title$6, null,
            React__default['default'].createElement(Text, { size: "lg", mr: 1 }, (texts === null || texts === void 0 ? void 0 : texts.history) || "History")),
        React__default['default'].createElement(TabsBaseWrap, null,
            React__default['default'].createElement(TabsHistory, { tabsList: tabsList, tabValue: activeTab, onClick: switchTab })),
        activeTab === HistoryTabs.ROUNDS && (React__default['default'].createElement(React__default['default'].Fragment, null,
            React__default['default'].createElement(SimpleTabsWrap, null,
                React__default['default'].createElement(TabsWrap$1, null,
                    React__default['default'].createElement(Tab$3, { as: "button", onClick: handleChangeTab(HistoryFilter.ALL), className: historyFilter === HistoryFilter.ALL ? "active" : "", value: HistoryFilter.ALL, disabled: isFetchingHistory || !account }, texts.all || "All history"),
                    " ",
                    React__default['default'].createElement(Tab$3, { as: "button", onClick: handleChangeTab(HistoryFilter.COLLECTED), className: historyFilter === HistoryFilter.COLLECTED ? "active" : "", value: HistoryFilter.COLLECTED, disabled: isFetchingHistory || !account }, texts.collected || "Collected"),
                    React__default['default'].createElement(Tab$3, { as: "button", onClick: handleChangeTab(HistoryFilter.UNCOLLECTED), className: historyFilter === HistoryFilter.UNCOLLECTED ? "active" : "", value: HistoryFilter.UNCOLLECTED, disabled: isFetchingHistory || !account }, (texts === null || texts === void 0 ? void 0 : texts.uncollected) || "Uncollected")))))));
};
var SimpleTabsWrap = styled__default['default'].div(templateObject_1$Z || (templateObject_1$Z = __makeTemplateObject(["\n  margin-bottom: 33px;\n  padding: 0 20px;\n"], ["\n  margin-bottom: 33px;\n  padding: 0 20px;\n"])));
var Title$6 = styled__default['default'].div(templateObject_2$O || (templateObject_2$O = __makeTemplateObject(["\n  display: flex;\n  margin-bottom: 22px;\n  margin-top: -40px;\n  padding: 0 20px;\n\n  ", " {\n    margin-top: 0;\n  }\n"], ["\n  display: flex;\n  margin-bottom: 22px;\n  margin-top: -40px;\n  padding: 0 20px;\n\n  ", " {\n    margin-top: 0;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var TabsBaseWrap = styled__default['default'].div(templateObject_3$F || (templateObject_3$F = __makeTemplateObject(["\n  margin-bottom: 30px;\n  padding: 0 20px;\n"], ["\n  margin-bottom: 30px;\n  padding: 0 20px;\n"])));
var TabsWrap$1 = styled__default['default'].div(templateObject_4$v || (templateObject_4$v = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n"], ["\n  display: flex;\n  justify-content: space-between;\n"])));
var Tab$3 = styled__default['default'](Text)(templateObject_5$n || (templateObject_5$n = __makeTemplateObject(["\n  border: none;\n  padding-bottom: 5px;\n  background: transparent;\n  color: ", ";\n  text-shadow: ", ";\n  transition: 0.3s;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  &.active {\n    border-bottom: 2px solid ", ";\n    color: ", ";\n  }\n"], ["\n  border: none;\n  padding-bottom: 5px;\n  background: transparent;\n  color: ", ";\n  text-shadow: ", ";\n  transition: 0.3s;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  &.active {\n    border-bottom: 2px solid ", ";\n    color: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textGray;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textShadow3;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.green;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
var ButtonClose = styled__default['default'].button(templateObject_6$g || (templateObject_6$g = __makeTemplateObject(["\n  display: block;\n  margin-left: auto;\n  padding: 13px 13px 0;\n  border: none;\n  background: none;\n  cursor: pointer;\n  ", " {\n    margin-bottom: 50px;\n  }\n"], ["\n  display: block;\n  margin-left: auto;\n  padding: 13px 13px 0;\n  border: none;\n  background: none;\n  cursor: pointer;\n  ", " {\n    margin-bottom: 50px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var templateObject_1$Z, templateObject_2$O, templateObject_3$F, templateObject_4$v, templateObject_5$n, templateObject_6$g;

var NoHistory = function (_a) {
    var texts = _a.texts;
    return (React__default['default'].createElement(NoHistoryBlock, null,
        React__default['default'].createElement(Text, { mb: 15 }, (texts === null || texts === void 0 ? void 0 : texts.noPredict) || "No prediction history available"),
        React__default['default'].createElement(Text, { size: "sm", fontWeight: 400, letterSpacing: "0.05em" }, (texts === null || texts === void 0 ? void 0 : texts.ifYouSure) ||
            "If you are sure you should see history here, make sure you`re connected to the correct wallet and try again")));
};
var NoHistoryBlock = styled__default['default'].div(templateObject_1$Y || (templateObject_1$Y = __makeTemplateObject(["\n  max-width: 340px;\n  margin: 0 auto;\n  padding: 170px 20px;\n  text-align: center;\n"], ["\n  max-width: 340px;\n  margin: 0 auto;\n  padding: 170px 20px;\n  text-align: center;\n"])));
var templateObject_1$Y;

var ProgressBar$2 = function (_a) {
    var won = _a.won, lost = _a.lost, percentageWon = _a.percentageWon, result = _a.result, price = _a.price;
    return (React__default['default'].createElement("div", null,
        React__default['default'].createElement(ProgressWrap$1, null,
            React__default['default'].createElement(Progress, null,
                React__default['default'].createElement(Step, { color: "#47DA3B", width: (won * 100) / (won + lost) }),
                React__default['default'].createElement(Step, { color: "#FF6161", width: (lost * 100) / (won + lost) }))),
        React__default['default'].createElement(Counter, null,
            React__default['default'].createElement(Text, { fontSize: "21px" },
                won,
                "/",
                won + lost),
            React__default['default'].createElement(TextProfit, { textAlign: "right", fontSize: "21px" }, result),
            React__default['default'].createElement(TextPercents, null,
                percentageWon,
                "%"),
            React__default['default'].createElement(Text, { textAlign: "right" }, price))));
};
var ProgressWrap$1 = styled__default['default'].div(templateObject_1$X || (templateObject_1$X = __makeTemplateObject(["\n  padding: 6px;\n  background: ", ";\n  box-shadow: ", ";\n  border-radius: 5px;\n"], ["\n  padding: 6px;\n  background: ", ";\n  box-shadow: ", ";\n  border-radius: 5px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.buttonBg;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow;
});
var Progress = styled__default['default'].div(templateObject_2$N || (templateObject_2$N = __makeTemplateObject(["\n  display: flex;\n  width: 100%;\n  overflow: hidden;\n"], ["\n  display: flex;\n  width: 100%;\n  overflow: hidden;\n"])));
var Step = styled__default['default'].div(templateObject_3$E || (templateObject_3$E = __makeTemplateObject(["\n  height: 9px;\n  width: ", ";\n  background: ", ";\n  transition: none.3s;\n  border-radius: 3px;\n"], ["\n  height: 9px;\n  width: ", ";\n  background: ", ";\n  transition: none.3s;\n  border-radius: 3px;\n"])), function (_a) {
    var width = _a.width;
    return width + "%";
}, function (_a) {
    var color = _a.color;
    return color;
});
var Counter = styled__default['default'].div(templateObject_4$u || (templateObject_4$u = __makeTemplateObject(["\n  margin-top: 15px;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 5px;\n"], ["\n  margin-top: 15px;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 5px;\n"])));
var TextProfit = styled__default['default'](Text)(templateObject_5$m || (templateObject_5$m = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.green;
});
var TextPercents = styled__default['default'](Text)(templateObject_6$f || (templateObject_6$f = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textGray2;
});
var templateObject_1$X, templateObject_2$N, templateObject_3$E, templateObject_4$u, templateObject_5$m, templateObject_6$f;

var Statistic = function (_a) {
    var averageReturn = _a.averageReturn, averageReturnPrice = _a.averageReturnPrice, colorAverage = _a.colorAverage, bestRound = _a.bestRound, hasBestRound = _a.hasBestRound, multiplierBestRound = _a.multiplierBestRound, bnbBestRound = _a.bnbBestRound, bestRoundPrice = _a.bestRoundPrice, averagePosition = _a.averagePosition, averagePositionPrice = _a.averagePositionPrice, texts = _a.texts;
    return (React__default['default'].createElement(Wrap$c, null,
        React__default['default'].createElement(Row$4, null,
            React__default['default'].createElement(Text, null, (texts === null || texts === void 0 ? void 0 : texts.average) || "Average return / round"),
            React__default['default'].createElement("div", null,
                React__default['default'].createElement(Best, { fontSize: "13px", textAlign: "right", color: colorAverage }, averageReturn),
                React__default['default'].createElement(Text, { textAlign: "right" }, averageReturnPrice),
                " ")),
        hasBestRound && (React__default['default'].createElement(Row$4, null,
            React__default['default'].createElement(Text, null,
                (texts === null || texts === void 0 ? void 0 : texts.best) || "Best round",
                ": "),
            React__default['default'].createElement(Best, { fontSize: "13px", textAlign: "right", color: "#4BE43E" },
                React__default['default'].createElement(Text, { color: "#A3A3A3", fontSize: "13px" },
                    multiplierBestRound,
                    " \u00A0"),
                " ",
                bnbBestRound),
            React__default['default'].createElement(Text, null, bestRound),
            React__default['default'].createElement(Text, { textAlign: "right" }, bestRoundPrice))),
        React__default['default'].createElement(Row$4, null,
            React__default['default'].createElement(Text, null, (texts === null || texts === void 0 ? void 0 : texts.averagePosition) || "Average position entered / round"),
            React__default['default'].createElement("div", null,
                React__default['default'].createElement(Best, { fontSize: "13px", textAlign: "right", color: "white" }, averagePosition),
                React__default['default'].createElement(Text, { textAlign: "right" }, averagePositionPrice)))));
};
var Wrap$c = styled__default['default'].div(templateObject_1$W || (templateObject_1$W = __makeTemplateObject(["\n  margin-top: 20px;\n"], ["\n  margin-top: 20px;\n"])));
var Row$4 = styled__default['default'].div(templateObject_2$M || (templateObject_2$M = __makeTemplateObject(["\n  padding: 17px 0;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 5px;\n"], ["\n  padding: 17px 0;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 5px;\n"])));
var Best = styled__default['default'](Text)(templateObject_3$D || (templateObject_3$D = __makeTemplateObject(["\n  display: flex;\n  justify-content: flex-end;\n"], ["\n  display: flex;\n  justify-content: flex-end;\n"])));
var templateObject_1$W, templateObject_2$M, templateObject_3$D;

var RoundsLink = function (_a) {
    var texts = _a.texts, children = _a.children, href = _a.href;
    return (React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement(Wrap$b, null,
            children,
            React__default['default'].createElement("a", { href: href },
                React__default['default'].createElement(ButtonBlock, { width: "100%", variant: "green", scale: "md" },
                    texts || "View Reclaimed & Won",
                    " \u00A0",
                    React__default['default'].createElement(Icon$O, { fill: "rgba(0,0,0,0)" }))))));
};
var Wrap$b = styled__default['default'].div(templateObject_1$V || (templateObject_1$V = __makeTemplateObject(["\n  background: ", ";\n  padding-bottom: 30px;\n  position: relative;\n  z-index: 1;\n  &::before {\n    position: absolute;\n    display: block;\n    content: \"\";\n    width: calc(100% + 32px);\n    left: -16px;\n    top: 0;\n    z-index: 0;\n    height: 100%;\n    background: ", ";\n  }\n"], ["\n  background: ", ";\n  padding-bottom: 30px;\n  position: relative;\n  z-index: 1;\n  &::before {\n    position: absolute;\n    display: block;\n    content: \"\";\n    width: calc(100% + 32px);\n    left: -16px;\n    top: 0;\n    z-index: 0;\n    height: 100%;\n    background: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.cardBg;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.cardBg;
});
var ButtonBlock = styled__default['default'](Button$9)(templateObject_2$L || (templateObject_2$L = __makeTemplateObject(["\n  position: relative;\n  z-index: 2;\n"], ["\n  position: relative;\n  z-index: 2;\n"])));
var templateObject_1$V, templateObject_2$L;

var WIN = "data:image/png;base64,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";

var LOSE = "data:image/png;base64,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";

var Rounds = function (_a) {
    var texts = _a.texts, type = _a.type, rounds = _a.rounds, roundsInPercents = _a.roundsInPercents, roundValue = _a.roundValue, roundPrice = _a.roundPrice;
    var values = function () {
        switch (type) {
            case "won":
                return {
                    src: WIN,
                    colorRound: "#47DA3B",
                    colorValue: "white",
                };
            case "lost":
                return {
                    src: LOSE,
                    colorRound: "#FF6161",
                    colorValue: "white",
                };
            default:
                return {
                    src: LOSE,
                    colorRound: "white",
                    colorValue: "#A3A3A3",
                };
        }
    };
    return (React__default['default'].createElement(Wrap$a, null,
        React__default['default'].createElement(Row$3, null,
            React__default['default'].createElement(Column, null,
                React__default['default'].createElement("img", { style: { float: "left" }, src: values().src, alt: "img" }),
                React__default['default'].createElement("div", null,
                    React__default['default'].createElement(Round, { color: values().colorValue },
                        rounds,
                        " ",
                        texts || "rounds"),
                    React__default['default'].createElement(Value, { fontSize: "13px", color: values().colorRound }, roundsInPercents))),
            React__default['default'].createElement("div", null,
                React__default['default'].createElement(Round, { color: values().colorRound, textAlign: "right" }, roundValue),
                React__default['default'].createElement(Value, { fontSize: "13px", textAlign: "right", color: values().colorValue }, roundPrice)))));
};
var Wrap$a = styled__default['default'].div(templateObject_1$U || (templateObject_1$U = __makeTemplateObject(["\n  background: ", ";\n  padding-bottom: 30px;\n  position: relative;\n  z-index: 1;\n"], ["\n  background: ", ";\n  padding-bottom: 30px;\n  position: relative;\n  z-index: 1;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.cardBg;
});
var Row$3 = styled__default['default'].div(templateObject_2$K || (templateObject_2$K = __makeTemplateObject(["\n  padding: 17px 0;\n  display: flex;\n  position: relative;\n  z-index: 2;\n  justify-content: space-between;\n"], ["\n  padding: 17px 0;\n  display: flex;\n  position: relative;\n  z-index: 2;\n  justify-content: space-between;\n"])));
var Round = styled__default['default'](Text)(templateObject_3$C || (templateObject_3$C = __makeTemplateObject(["\n  margin-bottom: 5px;\n  color: ", ";\n"], ["\n  margin-bottom: 5px;\n  color: ", ";\n"])), function (_a) {
    var color = _a.color;
    return color;
});
var Value = styled__default['default'](Text)(templateObject_4$t || (templateObject_4$t = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), function (_a) {
    var color = _a.color;
    return color || "white";
});
var Column = styled__default['default'].div(templateObject_5$l || (templateObject_5$l = __makeTemplateObject(["\n  display: flex;\n  & img {\n    margin-right: 10px;\n  }\n"], ["\n  display: flex;\n  & img {\n    margin-right: 10px;\n  }\n"])));
var templateObject_1$U, templateObject_2$K, templateObject_3$C, templateObject_4$t, templateObject_5$l;

var AccordeonCard = function (_a) {
    var item = _a.item, collectOrReclaim = _a.collectOrReclaim, round = _a.round, icon = _a.icon, betLabel = _a.betLabel, detail = _a.detail, valueAccordeon = _a.valueAccordeon, heightActiveBlock = _a.heightActiveBlock, handleToggle = _a.handleToggle, active = _a.active, refHidden = _a.refHidden;
    return (React__default['default'].createElement(reactFlipToolkit.Flipped, { key: item.id, flipId: item.id, spring: "stiff" },
        React__default['default'].createElement("div", { key: item.id },
            React__default['default'].createElement(Card$4, { onClick: function () { return handleToggle(item); }, className: active && active.id === item.id && valueAccordeon ? "active" : "" },
                React__default['default'].createElement(Flex, { alignItems: "center" },
                    React__default['default'].createElement(Text, null, round)),
                React__default['default'].createElement(Flex, { alignItems: "center", justifyContent: "center" }, collectOrReclaim && collectOrReclaim),
                React__default['default'].createElement(Flex, { alignItems: "center", justifyContent: "flex-end" },
                    betLabel,
                    icon || React__default['default'].createElement(Icon$l, null))),
            React__default['default'].createElement(HiddenBlockWrap, { style: {
                    height: valueAccordeon && valueAccordeon === item.id ? heightActiveBlock : 0,
                } },
                React__default['default'].createElement(HiddenBlock, { ref: active && active.id === item.id ? refHidden : null }, detail)))));
};
var Card$4 = styled__default['default'].div(templateObject_1$T || (templateObject_1$T = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 0 10px;\n  padding: 23px 20px;\n  cursor: pointer;\n  &.active {\n    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);\n  }\n"], ["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 0 10px;\n  padding: 23px 20px;\n  cursor: pointer;\n  &.active {\n    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);\n  }\n"])));
var HiddenBlockWrap = styled__default['default'].div(templateObject_2$J || (templateObject_2$J = __makeTemplateObject(["\n  height: 0;\n  transition: 0.5s;\n  overflow: hidden;\n"], ["\n  height: 0;\n  transition: 0.5s;\n  overflow: hidden;\n"])));
var HiddenBlock = styled__default['default'].div(templateObject_3$B || (templateObject_3$B = __makeTemplateObject(["\n  background: ", ";\n"], ["\n  background: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.panel;
});
var templateObject_1$T, templateObject_2$J, templateObject_3$B;

var Accordeon = function (_a) {
    var cards = _a.cards, children = _a.children;
    return (React__default['default'].createElement(Wrap$9, null,
        React__default['default'].createElement(reactFlipToolkit.Flipper, { flipKey: cards[0] }, children)));
};
var Wrap$9 = styled__default['default'].div(templateObject_1$S || (templateObject_1$S = __makeTemplateObject(["\n  position: relative;\n  background: ", ";\n"], ["\n  position: relative;\n  background: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.panel;
});
var templateObject_1$S;

var getColorBg$1 = function (negative, roundFailed, result, theme) {
    if (roundFailed || result)
        return theme.colors.darkGreyBg;
    if (negative)
        return theme.colors.redBg;
    if (!negative)
        return theme.colors.greenGradient;
};
var PriceBlockWrap$1 = styled__default['default'].div(templateObject_1$R || (templateObject_1$R = __makeTemplateObject(["\n  padding: 1px;\n  background: ", ";\n  border-radius: 12px;\n"], ["\n  padding: 1px;\n  background: ", ";\n  border-radius: 12px;\n"])), function (_a) {
    var theme = _a.theme, negative = _a.negative, roundFailed = _a.roundFailed, result = _a.result;
    return getColorBg$1(negative, roundFailed, result, theme);
});
var PriceBlock$1 = styled__default['default'].div(templateObject_2$I || (templateObject_2$I = __makeTemplateObject(["\n  padding: 17px 13px 14px 13px;\n  border-radius: 12px;\n  background: ", ";\n  /* box-shadow: ", "; */\n  ", " {\n    padding: 17px 13px 14px 25px;\n  }\n"], ["\n  padding: 17px 13px 14px 13px;\n  border-radius: 12px;\n  background: ", ";\n  /* box-shadow: ", "; */\n  ", " {\n    padding: 17px 13px 14px 25px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.darkGreyBg;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow4;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Price$1 = styled__default['default'].div(templateObject_3$A || (templateObject_3$A = __makeTemplateObject(["\n  font-weight: 500;\n  font-size: 17px;\n  line-height: 22px;\n  background: ", ";\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n"], ["\n  font-weight: 500;\n  font-size: 17px;\n  line-height: 22px;\n  background: ", ";\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n"])), function (_a) {
    var theme = _a.theme, negative = _a.negative;
    return (negative ? theme.colors.redBg : theme.colors.linkColor);
});
var RightText$1 = styled__default['default'].div(templateObject_4$s || (templateObject_4$s = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  padding: 6px 12px;\n  background: ", ";\n  border-radius: 7px;\n  font-size: 15px;\n  line-height: 19px;\n"], ["\n  display: flex;\n  align-items: center;\n  padding: 6px 12px;\n  background: ", ";\n  border-radius: 7px;\n  font-size: 15px;\n  line-height: 19px;\n"])), function (_a) {
    var theme = _a.theme, negative = _a.negative;
    return negative ? polished.transparentize(0.85, theme.colors.redBg) : theme.colors.gradients.greenGradient;
});
var ClosedPrice = function (_a) {
    var price = _a.price, rightText = _a.rightText, result = _a.result, negative = _a.negative, roundFailed = _a.roundFailed, textPrice = _a.textPrice, textCanceled = _a.textCanceled;
    return (React__default['default'].createElement(PriceBlockWrap$1, { negative: negative || false, roundFailed: roundFailed || false, result: result || "" },
        React__default['default'].createElement(PriceBlock$1, null,
            React__default['default'].createElement(Text, { color: "text", mb: 18, fontWeight: 500, fontSize: "13px", textTransform: "uppercase" }, textPrice || (!result ? "Closed Price" : "Your Result")),
            ((!roundFailed && !result) || result) && (React__default['default'].createElement(Flex, { justifyContent: "space-between", alignItems: "center" },
                React__default['default'].createElement(Price$1, { negative: negative }, price),
                React__default['default'].createElement(Text, { fontWeight: 400, mr: "auto", ml: 9 }, result),
                React__default['default'].createElement(RightText$1, { negative: rightText === "UP" ? false : negative },
                    React__default['default'].createElement(Price$1, { negative: rightText === "UP" ? false : negative },
                        React__default['default'].createElement(Text, null, rightText))))),
            roundFailed && !result && React__default['default'].createElement(Text, { color: "greyText" }, textCanceled || "CANCELED"))));
};
var templateObject_1$R, templateObject_2$I, templateObject_3$A, templateObject_4$s;

var RoundHistory = function (props) {
    var price = props.price, priceRightText = props.priceRightText, up = props.up, down = props.down, prizePool = props.prizePool, openingBlock = props.openingBlock, closingBlock = props.closingBlock, negative = props.negative, result = props.result, lockPrice = props.lockPrice, roundFailed = props.roundFailed, texts = props.texts;
    return (React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement(Text, { mb: 17 },
            (texts === null || texts === void 0 ? void 0 : texts.rounds) || "Round History",
            " "),
        React__default['default'].createElement(ClosedPrice, { price: price, rightText: priceRightText, result: result, negative: negative, roundFailed: roundFailed, textPrice: texts === null || texts === void 0 ? void 0 : texts.textPrice, textCanceled: texts === null || texts === void 0 ? void 0 : texts.textCanceled }),
        React__default['default'].createElement(Block$8, null,
            React__default['default'].createElement(Line$5, null,
                React__default['default'].createElement(Text, { size: "sm", fontWeight: 400 }, (texts === null || texts === void 0 ? void 0 : texts.up) || "Up"),
                React__default['default'].createElement(Text, { size: "sm" }, up)),
            React__default['default'].createElement(Line$5, null,
                React__default['default'].createElement(Text, { size: "sm", fontWeight: 400 }, (texts === null || texts === void 0 ? void 0 : texts.down) || "Down"),
                React__default['default'].createElement(Text, { size: "sm" }, down)),
            lockPrice && (React__default['default'].createElement(Line$5, null,
                React__default['default'].createElement(Text, { size: "sm", fontWeight: 400 },
                    (texts === null || texts === void 0 ? void 0 : texts.locked) || "Locked Price",
                    ":"),
                React__default['default'].createElement(Text, { size: "sm" }, lockPrice))),
            React__default['default'].createElement(LineMargin$2, null,
                React__default['default'].createElement(Text, { size: "sm" },
                    (texts === null || texts === void 0 ? void 0 : texts.prize) || "Prize Pool",
                    ":"),
                React__default['default'].createElement(Text, null, prizePool)),
            React__default['default'].createElement(Line$5, null,
                React__default['default'].createElement(Text, { size: "sm", fontWeight: 400 }, (texts === null || texts === void 0 ? void 0 : texts.open) || "Opening Block"),
                React__default['default'].createElement(Text, { size: "sm", color: negative ? "redBg" : "green" }, openingBlock)),
            React__default['default'].createElement(Line$5, null,
                React__default['default'].createElement(Text, { size: "sm", fontWeight: 400 }, (texts === null || texts === void 0 ? void 0 : texts.closing) || "Closing Block"),
                React__default['default'].createElement(Text, { size: "sm", color: negative ? "redBg" : "green" }, closingBlock)))));
};
var Line$5 = styled__default['default'].div(templateObject_1$Q || (templateObject_1$Q = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n"])));
var Block$8 = styled__default['default'].div(templateObject_2$H || (templateObject_2$H = __makeTemplateObject(["\n  margin-top: 31px;\n"], ["\n  margin-top: 31px;\n"])));
var LineMargin$2 = styled__default['default'](Line$5)(templateObject_3$z || (templateObject_3$z = __makeTemplateObject(["\n  margin-bottom: 17px;\n"], ["\n  margin-bottom: 17px;\n"])));
var templateObject_1$Q, templateObject_2$H, templateObject_3$z;

var getColorBg = function (negative, roundFailed, isBTCWon, theme) {
    if (roundFailed)
        return theme.colors.darkGreyBg;
    if (!negative && !isBTCWon)
        return theme.colors.colorCardBtc;
    if (!negative && isBTCWon)
        return theme.colors.yellowGradient2;
    return theme.colors.darkGreyBg;
};
var PriceBlockWrap = styled__default['default'].div(templateObject_1$P || (templateObject_1$P = __makeTemplateObject(["\n  padding: 1px;\n  background: ", ";\n  border-radius: 12px;\n"], ["\n  padding: 1px;\n  background: ", ";\n  border-radius: 12px;\n"])), function (_a) {
    var theme = _a.theme, negative = _a.negative, roundFailed = _a.roundFailed, isBTCWon = _a.isBTCWon;
    return getColorBg(negative, roundFailed, isBTCWon, theme);
});
var PriceBlock = styled__default['default'].div(templateObject_2$G || (templateObject_2$G = __makeTemplateObject(["\n  padding: 17px 13px 14px 13px;\n  border-radius: 12px;\n  background: ", ";\n  /* box-shadow: ", "; */\n  ", " {\n    padding: 17px 13px 14px 25px;\n  }\n"], ["\n  padding: 17px 13px 14px 13px;\n  border-radius: 12px;\n  background: ", ";\n  /* box-shadow: ", "; */\n  ", " {\n    padding: 17px 13px 14px 25px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.darkGreyBg;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow4;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Price = styled__default['default'].div(templateObject_3$y || (templateObject_3$y = __makeTemplateObject(["\n  font-weight: 500;\n  font-size: 17px;\n  line-height: 22px;\n  background: ", ";\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n"], ["\n  font-weight: 500;\n  font-size: 17px;\n  line-height: 22px;\n  background: ", ";\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n"])), function (_a) {
    var theme = _a.theme, negative = _a.negative;
    return (negative ? theme.colors.redBg : theme.colors.linkColor);
});
var RightText = styled__default['default'].div(templateObject_4$r || (templateObject_4$r = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  padding: 6px 12px;\n  background: ", ";\n  border-radius: 7px;\n  font-size: 15px;\n  line-height: 19px;\n"], ["\n  display: flex;\n  align-items: center;\n  padding: 6px 12px;\n  background: ", ";\n  border-radius: 7px;\n  font-size: 15px;\n  line-height: 19px;\n"])), function (_a) {
    var theme = _a.theme, negative = _a.negative;
    return negative ? polished.transparentize(0.85, theme.colors.redBg) : theme.colors.gradients.greenGradient;
});
var ClosedPriceBTC = function (_a) {
    var price = _a.price, rightText = _a.rightText, negative = _a.negative, roundFailed = _a.roundFailed, textPrice = _a.textPrice, textLockedPrice = _a.textLockedPrice, lockedPrice = _a.lockedPrice, textTitle = _a.textTitle, isBTCWon = _a.isBTCWon, btc = _a.btc, textCanceled = _a.textCanceled;
    return (React__default['default'].createElement(PriceBlockWrap, { negative: negative || false, roundFailed: roundFailed || false, isBTCWon: isBTCWon || false },
        React__default['default'].createElement(PriceBlock, null,
            React__default['default'].createElement(Flex, { justifyContent: "space-between", alignItems: "center", marginBottom: "6px" },
                React__default['default'].createElement(Text, { color: "text", fontWeight: 500, fontSize: "13px", textTransform: "uppercase" },
                    textPrice || "Closed Price",
                    " ",
                    btc ? "BTC" : "ETH"),
                !roundFailed && React__default['default'].createElement(Text, { fontSize: "17px" }, price)),
            !roundFailed && (React__default['default'].createElement(React__default['default'].Fragment, null,
                React__default['default'].createElement(Flex, { justifyContent: "space-between", marginBottom: "10px" },
                    React__default['default'].createElement(Text, { color: "textGray", fontWeight: 500 }, textLockedPrice || "Locked Price"),
                    React__default['default'].createElement(Text, { color: "textGray", fontWeight: 500 }, lockedPrice)),
                React__default['default'].createElement(Flex, { justifyContent: "space-between", alignItems: "center" },
                    React__default['default'].createElement(Text, { color: "textGray", fontWeight: 500 }, textTitle || "Title"),
                    React__default['default'].createElement(RightText, { negative: rightText === "UP" ? false : negative },
                        React__default['default'].createElement(Price, { negative: rightText === "UP" ? false : negative }, rightText))))),
            roundFailed && (React__default['default'].createElement(Text, { color: "greyText", marginTop: "40px" }, textCanceled || "CANCELED")))));
};
var templateObject_1$P, templateObject_2$G, templateObject_3$y, templateObject_4$r;

var RoundHistoryBTC = function (props) {
    var btcPayout = props.btcPayout, ethPayout = props.ethPayout, prizePool = props.prizePool, openingBlock = props.openingBlock, closingBlock = props.closingBlock, negativeFirst = props.negativeFirst, negativeSecond = props.negativeSecond, negativeBlock = props.negativeBlock, lockPrice = props.lockPrice, roundFailed = props.roundFailed, texts = props.texts, isBTCWon = props.isBTCWon, textLockedPrice = props.textLockedPrice, textTitle = props.textTitle, closeFirstPrice = props.closeFirstPrice, lockFirstPrice = props.lockFirstPrice, closeSecondPrice = props.closeSecondPrice, lockSecondPrice = props.lockSecondPrice, changeTitleFirst = props.changeTitleFirst, changeTitleSecond = props.changeTitleSecond;
    return (React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement(Text, { mb: 17 },
            (texts === null || texts === void 0 ? void 0 : texts.rounds) || "Round History",
            " "),
        React__default['default'].createElement("div", { style: { marginBottom: 16 } },
            React__default['default'].createElement(ClosedPriceBTC, { price: closeFirstPrice, rightText: changeTitleFirst, negative: negativeFirst, roundFailed: roundFailed, textPrice: texts === null || texts === void 0 ? void 0 : texts.textPrice, isBTCWon: isBTCWon, textTitle: textTitle, textLockedPrice: textLockedPrice, btc: true, lockedPrice: lockFirstPrice, textCanceled: texts === null || texts === void 0 ? void 0 : texts.textCanceled })),
        React__default['default'].createElement(ClosedPriceBTC, { price: closeSecondPrice, rightText: changeTitleSecond, negative: negativeSecond, roundFailed: roundFailed, textPrice: texts === null || texts === void 0 ? void 0 : texts.textPrice, isBTCWon: isBTCWon, textTitle: textTitle, textLockedPrice: textLockedPrice, lockedPrice: lockSecondPrice }),
        React__default['default'].createElement(Block$7, null,
            React__default['default'].createElement(Line$4, null,
                React__default['default'].createElement(Text, { size: "sm", fontWeight: 400 }, (texts === null || texts === void 0 ? void 0 : texts.btcPayout) || "BTC Payout"),
                React__default['default'].createElement(Text, { size: "sm" }, btcPayout)),
            React__default['default'].createElement(Line$4, null,
                React__default['default'].createElement(Text, { size: "sm", fontWeight: 400 }, (texts === null || texts === void 0 ? void 0 : texts.ethPayout) || "ETH Payout"),
                React__default['default'].createElement(Text, { size: "sm" }, ethPayout)),
            lockPrice && (React__default['default'].createElement(Line$4, null,
                React__default['default'].createElement(Text, { size: "sm", fontWeight: 400 },
                    (texts === null || texts === void 0 ? void 0 : texts.locked) || "Locked Price",
                    ":"),
                React__default['default'].createElement(Text, { size: "sm" }, lockPrice))),
            React__default['default'].createElement(LineMargin$1, null,
                React__default['default'].createElement(Text, { size: "sm" },
                    (texts === null || texts === void 0 ? void 0 : texts.prize) || "Prize Pool",
                    ":"),
                React__default['default'].createElement(Text, null, prizePool)),
            React__default['default'].createElement(Line$4, null,
                React__default['default'].createElement(Text, { size: "sm", fontWeight: 400 }, (texts === null || texts === void 0 ? void 0 : texts.open) || "Opening Block"),
                React__default['default'].createElement(Text, { size: "sm", color: negativeBlock ? "redBg" : "green" }, openingBlock)),
            React__default['default'].createElement(Line$4, null,
                React__default['default'].createElement(Text, { size: "sm", fontWeight: 400 }, (texts === null || texts === void 0 ? void 0 : texts.closing) || "Closing Block"),
                React__default['default'].createElement(Text, { size: "sm", color: negativeBlock ? "redBg" : "green" }, closingBlock)))));
};
var Line$4 = styled__default['default'].div(templateObject_1$O || (templateObject_1$O = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n"])));
var Block$7 = styled__default['default'].div(templateObject_2$F || (templateObject_2$F = __makeTemplateObject(["\n  margin-top: 31px;\n"], ["\n  margin-top: 31px;\n"])));
var LineMargin$1 = styled__default['default'](Line$4)(templateObject_3$x || (templateObject_3$x = __makeTemplateObject(["\n  margin-bottom: 17px;\n"], ["\n  margin-bottom: 17px;\n"])));
var templateObject_1$O, templateObject_2$F, templateObject_3$x;

var YourHistory = function (props) {
    var texts = props.texts, price = props.price, priceRightText = props.priceRightText, yourPosition = props.yourPosition, win = props.win, negative = props.negative, result = props.result, collect = props.collect;
    return (React__default['default'].createElement(Block$6, null,
        React__default['default'].createElement(Line$3, null,
            React__default['default'].createElement(Text, { mb: 17 },
                (texts === null || texts === void 0 ? void 0 : texts.history) || "Your History",
                " "),
            React__default['default'].createElement(Line$3, null,
                win && (React__default['default'].createElement(React__default['default'].Fragment, null,
                    React__default['default'].createElement(Text, { color: "green", mr: "6px" }, (texts === null || texts === void 0 ? void 0 : texts.win) || "WIN"),
                    React__default['default'].createElement("img", { src: WIN, alt: "" }))),
                !win && (React__default['default'].createElement(React__default['default'].Fragment, null,
                    React__default['default'].createElement(Text, { color: "greyText", mr: "6px" }, (texts === null || texts === void 0 ? void 0 : texts.lose) || "LOSE"),
                    React__default['default'].createElement("img", { src: LOSE, alt: "" }))))),
        React__default['default'].createElement(ClosedPrice, { textPrice: texts === null || texts === void 0 ? void 0 : texts.textPrice, textCanceled: texts === null || texts === void 0 ? void 0 : texts.textCanceled, price: price, rightText: priceRightText, result: result, negative: negative }),
        React__default['default'].createElement(LineMargin, null,
            React__default['default'].createElement(Text, { size: "sm", fontWeight: 400 }, (texts === null || texts === void 0 ? void 0 : texts.position) || "Your Position"),
            React__default['default'].createElement(Text, { size: "sm" }, yourPosition)),
        collect));
};
var Line$3 = styled__default['default'].div(templateObject_1$N || (templateObject_1$N = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n"])));
var Block$6 = styled__default['default'].div(templateObject_2$E || (templateObject_2$E = __makeTemplateObject(["\n  margin-top: 3px;\n"], ["\n  margin-top: 3px;\n"])));
var LineMargin = styled__default['default'](Line$3)(templateObject_3$w || (templateObject_3$w = __makeTemplateObject(["\n  margin-top: 31px;\n  margin-bottom: 23px;\n"], ["\n  margin-top: 31px;\n  margin-bottom: 23px;\n"])));
var templateObject_1$N, templateObject_2$E, templateObject_3$w;

var HiddenItemAccordeonCard = function (_a) {
    var children = _a.children;
    return React__default['default'].createElement(HiddenItem, null, children);
};
var HiddenItem = styled__default['default'].div(templateObject_1$M || (templateObject_1$M = __makeTemplateObject(["\n  padding: 30px 20px;\n  background: ", ";\n"], ["\n  padding: 30px 20px;\n  background: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.dark;
});
var templateObject_1$M;

var Account = function (_a) {
    var text = _a.text, account = _a.account, login = _a.login, logout = _a.logout, textsAccount = _a.textsAccount, textsConnect = _a.textsConnect, hrefLearnHow = _a.hrefLearnHow, network = _a.network, vesting = _a.vesting, yayBalance = _a.yayBalance, dataTransactions = _a.dataTransactions, handleClaimed = _a.handleClaimed, bridge = _a.bridge, textsBridge = _a.textsBridge, transactionsList = _a.transactionsList, handleAddToken = _a.handleAddToken, marginContent = _a.marginContent, minHeight = _a.minHeight, buttonLogoutType = _a.buttonLogoutType, linkExternalWalletModal = _a.linkExternalWalletModal;
    var _b = useWalletModal(login, logout, textsAccount, textsConnect, network, account, hrefLearnHow, vesting, yayBalance, dataTransactions, handleClaimed, bridge, textsBridge, transactionsList, handleAddToken, marginContent, minHeight, buttonLogoutType, linkExternalWalletModal), onPresentConnectModal = _b.onPresentConnectModal, onPresentAccountModal = _b.onPresentAccountModal;
    return (React__default['default'].createElement(React__default['default'].Fragment, null, account ? (React__default['default'].createElement(AccountBlock, { as: "button", onClick: function () {
            onPresentAccountModal();
        } },
        ellipsis(account),
        React__default['default'].createElement(Avatar, null,
            React__default['default'].createElement("img", { src: AccountIcon })))) : (React__default['default'].createElement(AccountBlock, { as: "button", onClick: function () {
            onPresentConnectModal();
        }, className: "notAuth" },
        React__default['default'].createElement(Avatar, { className: "notAuth" }, text)))));
};
var AccountBlock = styled__default['default'](Text)(templateObject_1$L || (templateObject_1$L = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  min-height: 30px;\n  height: 100%;\n  min-width: 120px;\n  align-items: center;\n  justify-content: center;\n  margin-right: 6px;\n  font-size: 11px;\n  line-height: 14px;\n  padding: 0 26px 0 10px;\n  background: ", ";\n  border-radius: 7px;\n  box-shadow: ", ";\n  cursor: pointer;\n  border: none;\n  order: -1;\n  &.notAuth {\n    background: ", ";\n  }\n  ", " {\n    min-height: 40px;\n    min-width: 160px;\n    margin-right: 11px;\n    font-size: 15px;\n    line-height: 19px;\n    padding: 0 56px 0 20px;\n    border-radius: 12px;\n    order: 0;\n  }\n"], ["\n  position: relative;\n  display: flex;\n  min-height: 30px;\n  height: 100%;\n  min-width: 120px;\n  align-items: center;\n  justify-content: center;\n  margin-right: 6px;\n  font-size: 11px;\n  line-height: 14px;\n  padding: 0 26px 0 10px;\n  background: ", ";\n  border-radius: 7px;\n  box-shadow: ", ";\n  cursor: pointer;\n  border: none;\n  order: -1;\n  &.notAuth {\n    background: ", ";\n  }\n  ", " {\n    min-height: 40px;\n    min-width: 160px;\n    margin-right: 11px;\n    font-size: 15px;\n    line-height: 19px;\n    padding: 0 56px 0 20px;\n    border-radius: 12px;\n    order: 0;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.bgOpacity;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.green;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var Avatar = styled__default['default'].div(templateObject_2$D || (templateObject_2$D = __makeTemplateObject(["\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: 10px;\n  right: 2px;\n  top: 50%;\n  transform: translateY(-50%);\n  & img {\n    width: 26px;\n    height: 26px;\n  }\n  &.notAuth {\n    width: calc(100% - 4px);\n  }\n  ", " {\n    right: 4px;\n    & img {\n      width: 32px;\n      height: 32px;\n    }\n  }\n"], ["\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: 10px;\n  right: 2px;\n  top: 50%;\n  transform: translateY(-50%);\n  & img {\n    width: 26px;\n    height: 26px;\n  }\n  &.notAuth {\n    width: calc(100% - 4px);\n  }\n  ", " {\n    right: 4px;\n    & img {\n      width: 32px;\n      height: 32px;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var templateObject_1$L, templateObject_2$D;

var MenuLink = function (_a) {
    var name = _a.name, url = _a.url, size = _a.size, onClick = _a.onClick;
    var isHttpLink = url === null || url === void 0 ? void 0 : url.startsWith("http");
    var Link = isHttpLink ? "a" : StyledLink;
    var props = isHttpLink ? { href: url } : { to: url };
    return (React__default['default'].createElement(Link, __assign({}, props, { exact: true, onClick: onClick }),
        React__default['default'].createElement(LinkItem$1, { size: size }, name)));
};
var StyledLink = styled__default['default'](reactRouterDom.NavLink)(templateObject_1$K || (templateObject_1$K = __makeTemplateObject([""], [""])));
var LinkItem$1 = styled__default['default'](Text)(templateObject_2$C || (templateObject_2$C = __makeTemplateObject(["\n  position: relative;\n  color: ", ";\n  margin: 0 0 20px;\n  transition: 0.3s;\n  text-shadow: ", ";\n  cursor: pointer;\n  &:hover {\n    color: ", ";\n  }\n  ", " {\n    &::after {\n      display: block;\n      bottom: -30px;\n      width: 0;\n      height: 2px;\n      content: \"\";\n      position: absolute;\n      background: #4be43e;\n      transition: all.3s;\n      opacity: 0;\n    }\n    margin: 0 20px;\n    ", ".active & {\n      &::after {\n        width: 100%;\n        opacity: 1;\n      }\n    }\n  }\n  ", " {\n    margin: 0 35px;\n  }\n"], ["\n  position: relative;\n  color: ", ";\n  margin: 0 0 20px;\n  transition: 0.3s;\n  text-shadow: ", ";\n  cursor: pointer;\n  &:hover {\n    color: ", ";\n  }\n  ", " {\n    &::after {\n      display: block;\n      bottom: -30px;\n      width: 0;\n      height: 2px;\n      content: \"\";\n      position: absolute;\n      background: #4be43e;\n      transition: all.3s;\n      opacity: 0;\n    }\n    margin: 0 20px;\n    ", ".active & {\n      &::after {\n        width: 100%;\n        opacity: 1;\n      }\n    }\n  }\n  ", " {\n    margin: 0 35px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textShadow;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.green;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
}, StyledLink, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xl;
});
var templateObject_1$K, templateObject_2$C;

var Burger = function (_a) {
    var open = _a.open, onClick = _a.onClick;
    return (React__default['default'].createElement(BurgerWrap, { onClick: onClick, className: open ? "open" : "" },
        React__default['default'].createElement(RoundWrap, null,
            React__default['default'].createElement(BurgerRound1, null),
            React__default['default'].createElement(BurgerRound2, null),
            React__default['default'].createElement(BurgerRound3, null),
            React__default['default'].createElement(BurgerRound4, null))));
};
var BurgerWrap = styled__default['default'].button(templateObject_1$J || (templateObject_1$J = __makeTemplateObject(["\n  border: none;\n  padding: 0;\n  outline: none;\n  position: relative;\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  border-radius: 7px;\n  background: ", ";\n  ", " {\n    display: none;\n  }\n"], ["\n  border: none;\n  padding: 0;\n  outline: none;\n  position: relative;\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  border-radius: 7px;\n  background: ", ";\n  ", " {\n    display: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.bgOpacity;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var RoundWrap = styled__default['default'].div(templateObject_2$B || (templateObject_2$B = __makeTemplateObject(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  transition: 0.3s;\n  pointer-events: none;\n  ", ".open & {\n    transform: rotate(180deg);\n  }\n"], ["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  transition: 0.3s;\n  pointer-events: none;\n  ", ".open & {\n    transform: rotate(180deg);\n  }\n"])), BurgerWrap);
var BurgerRound1 = styled__default['default'].div(templateObject_3$v || (templateObject_3$v = __makeTemplateObject(["\n  position: absolute;\n  width: 6px;\n  height: 6px;\n  background: ", ";\n  border-radius: 50%;\n  top: calc(50% - 3px);\n  left: 6px;\n"], ["\n  position: absolute;\n  width: 6px;\n  height: 6px;\n  background: ", ";\n  border-radius: 50%;\n  top: calc(50% - 3px);\n  left: 6px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
var BurgerRound2 = styled__default['default'](BurgerRound1)(templateObject_4$q || (templateObject_4$q = __makeTemplateObject(["\n  top: 6px;\n  left: calc(50% - 3px);\n"], ["\n  top: 6px;\n  left: calc(50% - 3px);\n"])));
var BurgerRound3 = styled__default['default'](BurgerRound1)(templateObject_5$k || (templateObject_5$k = __makeTemplateObject(["\n  left: auto;\n  right: 6px;\n  top: calc(50% - 3px);\n  background: ", ";\n"], ["\n  left: auto;\n  right: 6px;\n  top: calc(50% - 3px);\n  background: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.green;
});
var BurgerRound4 = styled__default['default'](BurgerRound2)(templateObject_6$e || (templateObject_6$e = __makeTemplateObject(["\n  top: auto;\n  left: calc(50% - 3px);\n  bottom: 6px;\n"], ["\n  top: auto;\n  left: calc(50% - 3px);\n  bottom: 6px;\n"])));
var templateObject_1$J, templateObject_2$B, templateObject_3$v, templateObject_4$q, templateObject_5$k, templateObject_6$e;

var DropdownLayout = function (_a) {
    var children = _a.children, open = _a.open, setOpen = _a.setOpen, icon = _a.icon;
    var refSelect = React.useRef(null);
    var handleClickOutside = React.useCallback(function (e) {
        if (refSelect.current !== e.target && refSelect.current && !refSelect.current.contains(e.target)) {
            setOpen(false);
        }
    }, [setOpen]);
    React.useEffect(function () {
        if (document && refSelect && refSelect.current) {
            document.addEventListener("mouseup", handleClickOutside, false);
        }
        return function () {
            document.removeEventListener("mouseup", handleClickOutside, false);
        };
    }, [refSelect, handleClickOutside]);
    var handleClickOpen = function () {
        setOpen(!open);
    };
    return (React__default['default'].createElement(Block$5, { ref: refSelect },
        React__default['default'].createElement(Button$4, { onClick: handleClickOpen }, icon),
        React__default['default'].createElement(Dropdown, { className: open ? "open" : "" }, children)));
};
var Block$5 = styled__default['default'].div(templateObject_1$I || (templateObject_1$I = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var Button$4 = styled__default['default'].button(templateObject_2$A || (templateObject_2$A = __makeTemplateObject(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  background: none;\n  padding: 0;\n"], ["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  background: none;\n  padding: 0;\n"])));
var Dropdown = styled__default['default'].div(templateObject_3$u || (templateObject_3$u = __makeTemplateObject(["\n  position: absolute;\n  width: 100%;\n  margin-top: 18px;\n  border-radius: 5px;\n  transition: 0.3s;\n  z-index: -1;\n  opacity: 0;\n  overflow-y: auto;\n  pointer-events: none;\n  max-height: 260px;\n  &.open {\n    transition: 0.3s;\n    z-index: 10;\n    opacity: 1;\n    margin-top: 4px;\n    pointer-events: all;\n  }\n"], ["\n  position: absolute;\n  width: 100%;\n  margin-top: 18px;\n  border-radius: 5px;\n  transition: 0.3s;\n  z-index: -1;\n  opacity: 0;\n  overflow-y: auto;\n  pointer-events: none;\n  max-height: 260px;\n  &.open {\n    transition: 0.3s;\n    z-index: 10;\n    opacity: 1;\n    margin-top: 4px;\n    pointer-events: all;\n  }\n"])));
var templateObject_1$I, templateObject_2$A, templateObject_3$u;

var Languages = function (_a) {
    var currentLang = _a.currentLang, setLang = _a.setLang, langs = _a.langs;
    var _b = React.useState(false), open = _b[0], setOpen = _b[1];
    var handleSelect = function (lang) {
        setLang(lang);
        setOpen(false);
    };
    return (React__default['default'].createElement(Wrap$8, null,
        React__default['default'].createElement(DropdownLayout, { open: open, setOpen: setOpen, icon: React__default['default'].createElement(Button$3, { open: open },
                React__default['default'].createElement(ButtonText$1, null, currentLang === null || currentLang === void 0 ? void 0 : currentLang.toUpperCase())) },
            React__default['default'].createElement(SelectList, null, langs.map(function (lang) {
                var _a;
                return (React__default['default'].createElement(Select, { onClick: function () { return handleSelect(lang); }, key: lang.code }, (_a = lang.code) === null || _a === void 0 ? void 0 : _a.toUpperCase()));
            })))));
};
var Wrap$8 = styled__default['default'].div(templateObject_1$H || (templateObject_1$H = __makeTemplateObject(["\n  min-width: 40px;\n"], ["\n  min-width: 40px;\n"])));
var SelectList = styled__default['default'].div(templateObject_2$z || (templateObject_2$z = __makeTemplateObject(["\n  padding: 12px 0;\n  background: ", ";\n  border: none;\n  border-radius: 12px;\n  box-shadow: ", ";\n"], ["\n  padding: 12px 0;\n  background: ", ";\n  border: none;\n  border-radius: 12px;\n  box-shadow: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.bgOpacity;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow;
});
var Select = styled__default['default'].button(templateObject_3$t || (templateObject_3$t = __makeTemplateObject(["\n  width: 100%;\n  outline: none;\n  margin-bottom: 7px;\n  background: none;\n  border: none;\n  font-size: 11px;\n  line-height: 14px;\n  text-align: center;\n  letter-spacing: 0.08em;\n  color: ", ";\n  cursor: pointer;\n  &:last-child {\n    margin-bottom: 0;\n  }\n"], ["\n  width: 100%;\n  outline: none;\n  margin-bottom: 7px;\n  background: none;\n  border: none;\n  font-size: 11px;\n  line-height: 14px;\n  text-align: center;\n  letter-spacing: 0.08em;\n  color: ", ";\n  cursor: pointer;\n  &:last-child {\n    margin-bottom: 0;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
var Button$3 = styled__default['default'].div(templateObject_4$p || (templateObject_4$p = __makeTemplateObject(["\n  padding: 0;\n  background: ", ";\n  border: none;\n  border-radius: 12px;\n  box-shadow: ", ";\n  cursor: pointer;\n  width: 100%;\n"], ["\n  padding: 0;\n  background: ", ";\n  border: none;\n  border-radius: 12px;\n  box-shadow: ", ";\n  cursor: pointer;\n  width: 100%;\n"])), function (_a) {
    var theme = _a.theme, open = _a.open;
    return (open ? theme.colors.buttonBg2 : theme.colors.buttonBg);
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow;
});
var ButtonText$1 = styled__default['default'](Text)(templateObject_5$j || (templateObject_5$j = __makeTemplateObject(["\n  padding: 13px 6px;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 15px;\n  letter-spacing: 0.08em;\n  pointer-events: none; ;\n"], ["\n  padding: 13px 6px;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 15px;\n  letter-spacing: 0.08em;\n  pointer-events: none; ;\n"])));
var templateObject_1$H, templateObject_2$z, templateObject_3$t, templateObject_4$p, templateObject_5$j;

var Logo = "data:image/png;base64,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";

var Wrap$7 = styled__default['default'].div(templateObject_1$G || (templateObject_1$G = __makeTemplateObject(["\n  padding: 0 20px 26px;\n"], ["\n  padding: 0 20px 26px;\n"])));
var Button$2 = styled__default['default'].button(templateObject_2$y || (templateObject_2$y = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 9px 10px;\n  border-radius: 12px;\n  background: ", ";\n  cursor: pointer;\n  border: none;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 9px 10px;\n  border-radius: 12px;\n  background: ", ";\n  cursor: pointer;\n  border: none;\n"])), function (_a) {
    var theme = _a.theme;
    return polished.transparentize(0.85, theme.colors.contrast);
});
var Buttons$3 = styled__default['default'].div(templateObject_3$s || (templateObject_3$s = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 14px;\n  margin: 40px 0;\n"], ["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 14px;\n  margin: 40px 0;\n"])));
var TextStyled$3 = styled__default['default'](Text)(templateObject_4$o || (templateObject_4$o = __makeTemplateObject(["\n  flex-grow: 1;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n  text-align: center;\n"], ["\n  flex-grow: 1;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n  text-align: center;\n"])));
var NetworkModal = function (_a) {
    var title = _a.title, linkText = _a.linkText, linkHref = _a.linkHref, _b = _a.handleToggleNetwork, handleToggleNetwork = _b === void 0 ? function (e) { return null; } : _b, _c = _a.onDismiss, onDismiss = _c === void 0 ? function () { return null; } : _c, valuesNetworks = _a.valuesNetworks, listNetwork = _a.listNetwork;
    var handleClick = function (e) {
        handleToggleNetwork(e.currentTarget.value);
        onDismiss();
    };
    return (React__default['default'].createElement(Modal, { title: title, welcome: true, paddingTopHeader: "20px", onDismiss: onDismiss },
        React__default['default'].createElement(Wrap$7, null,
            React__default['default'].createElement(Buttons$3, null, listNetwork === null || listNetwork === void 0 ? void 0 : listNetwork.map(function (el, i) { return (React__default['default'].createElement(React__default['default'].Fragment, null,
                React__default['default'].createElement(Button$2, { value: (valuesNetworks === null || valuesNetworks === void 0 ? void 0 : valuesNetworks[i]) || el.chainId, onClick: handleClick },
                    React__default['default'].createElement(TextStyled$3, null, el.name),
                    React__default['default'].createElement("img", { src: el.icon, alt: "" })))); })),
            React__default['default'].createElement(Link$2, { href: linkHref, style: { margin: "0 auto" } }, linkText))));
};
var templateObject_1$G, templateObject_2$y, templateObject_3$s, templateObject_4$o;

var Network = function (_a) {
    var network = _a.network, handleToggleNetwork = _a.handleToggleNetwork, linkTextNetwork = _a.linkTextNetwork, linkHrefNetwork = _a.linkHrefNetwork, titleNetwork = _a.titleNetwork, valuesNetworks = _a.valuesNetworks, listNetwork = _a.listNetwork;
    var onPresentConnectModal = useModal(React__default['default'].createElement(NetworkModal, { title: titleNetwork, linkHref: linkHrefNetwork, linkText: linkTextNetwork, handleToggleNetwork: handleToggleNetwork, valuesNetworks: valuesNetworks, listNetwork: listNetwork }))[0];
    return (React__default['default'].createElement(NetworkBlock, { as: "button", onClick: function () {
            onPresentConnectModal();
        } },
        React__default['default'].createElement(TextStyled$2, null, (network === null || network === void 0 ? void 0 : network.name) || "Binance"),
        React__default['default'].createElement(AvatarNetwork, null,
            React__default['default'].createElement("img", { src: (network === null || network === void 0 ? void 0 : network.icon) || BNB2 }))));
};
var NetworkBlock = styled__default['default'].button(templateObject_1$F || (templateObject_1$F = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  min-height: 30px;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n  margin-right: 6px;\n  padding: 0 2px;\n  font-size: 11px;\n  line-height: 14px;\n  background: ", ";\n  border-radius: 7px;\n  box-shadow: ", ";\n  cursor: pointer;\n  border: 1px solid ", ";\n  &.notAuth {\n    background: ", ";\n  }\n  ", " {\n    min-height: 40px;\n    margin-right: 11px;\n    font-size: 15px;\n    line-height: 19px;\n    border-radius: 12px;\n  }\n"], ["\n  position: relative;\n  display: flex;\n  min-height: 30px;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n  margin-right: 6px;\n  padding: 0 2px;\n  font-size: 11px;\n  line-height: 14px;\n  background: ", ";\n  border-radius: 7px;\n  box-shadow: ", ";\n  cursor: pointer;\n  border: 1px solid ", ";\n  &.notAuth {\n    background: ", ";\n  }\n  ", " {\n    min-height: 40px;\n    margin-right: 11px;\n    font-size: 15px;\n    line-height: 19px;\n    border-radius: 12px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.bgOpacity;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.green;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.green;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var TextStyled$2 = styled__default['default'](Text)(templateObject_2$x || (templateObject_2$x = __makeTemplateObject(["\n  display: none;\n\n  ", " {\n    display: block;\n    padding: 0 17px;\n    flex-grow: 1;\n    text-align: center;\n  }\n"], ["\n  display: none;\n\n  ", " {\n    display: block;\n    padding: 0 17px;\n    flex-grow: 1;\n    text-align: center;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var AvatarNetwork = styled__default['default'].div(templateObject_3$r || (templateObject_3$r = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  & img {\n    width: 26px;\n    height: 26px;\n  }\n  &.notAuth {\n    width: calc(100% - 4px);\n  }\n  ", " {\n    margin-right: 2px;\n    & img {\n      width: 32px;\n      height: 32px;\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  & img {\n    width: 26px;\n    height: 26px;\n  }\n  &.notAuth {\n    width: calc(100% - 4px);\n  }\n  ", " {\n    margin-right: 2px;\n    & img {\n      width: 32px;\n      height: 32px;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var templateObject_1$F, templateObject_2$x, templateObject_3$r;

var Disclaimer = function (_a) {
    var text = _a.text;
    var _b = React.useState(true), open = _b[0], setOpen = _b[1];
    return (React__default['default'].createElement(Block$4, { open: open },
        React__default['default'].createElement(StyledText$1, null, text),
        React__default['default'].createElement(Button$1, { onClick: function () { return setOpen(false); } },
            React__default['default'].createElement(Icon$Q, { role: "button" }))));
};
var Block$4 = styled__default['default'].div(templateObject_1$E || (templateObject_1$E = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: 0.3s;\n  width: 100%;\n  padding: ", ";\n  background-color: ", ";\n  z-index: 1;\n  overflow: hidden;\n  max-height: ", ";\n  ", " {\n    padding: ", ";\n  }\n  & svg {\n    position: absolute;\n    right: 0;\n    top: 50%;\n    transform: translateY(-50%);\n    background: none;\n    border: none;\n    flex-shrink: 0;\n    cursor: pointer;\n  }\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: 0.3s;\n  width: 100%;\n  padding: ", ";\n  background-color: ", ";\n  z-index: 1;\n  overflow: hidden;\n  max-height: ", ";\n  ", " {\n    padding: ", ";\n  }\n  & svg {\n    position: absolute;\n    right: 0;\n    top: 50%;\n    transform: translateY(-50%);\n    background: none;\n    border: none;\n    flex-shrink: 0;\n    cursor: pointer;\n  }\n"])), function (_a) {
    var open = _a.open;
    return (!open ? 0 : "13px 46px 13px 23px");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.green;
}, function (_a) {
    var open = _a.open;
    return (!open ? 0 : 100);
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
}, function (_a) {
    var open = _a.open;
    return (!open ? 0 : "13px 46px");
});
var StyledText$1 = styled__default['default'](Text)(templateObject_2$w || (templateObject_2$w = __makeTemplateObject(["\n  max-width: 1200px;\n  margin: 0 auto;\n  font-weight: 500;\n  font-size: 11px;\n  line-height: 14px;\n  text-align: left;\n  & br {\n    display: block;\n  }\n  ", " {\n    text-align: center;\n    font-size: 15px;\n    color: #fff;\n    font-weight: 500;\n    line-height: 1.5;\n    & br {\n      display: none;\n    }\n  }\n"], ["\n  max-width: 1200px;\n  margin: 0 auto;\n  font-weight: 500;\n  font-size: 11px;\n  line-height: 14px;\n  text-align: left;\n  & br {\n    display: block;\n  }\n  ", " {\n    text-align: center;\n    font-size: 15px;\n    color: #fff;\n    font-weight: 500;\n    line-height: 1.5;\n    & br {\n      display: none;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var Button$1 = styled__default['default'].button(templateObject_3$q || (templateObject_3$q = __makeTemplateObject(["\n  background: none;\n  border: none;\n  padding: 0;\n"], ["\n  background: none;\n  border: none;\n  padding: 0;\n"])));
var templateObject_1$E, templateObject_2$w, templateObject_3$q;

var Header = function (_a) {
    var account = _a.account, login = _a.login, logout = _a.logout; _a.isDark; _a.toggleTheme; var langs = _a.langs, setLang = _a.setLang, currentLang = _a.currentLang, links = _a.links, textConnect = _a.textConnect, textsAccount = _a.textsAccount, textsConnect = _a.textsConnect, hrefLearnHow = _a.hrefLearnHow, linkLogo = _a.linkLogo, network = _a.network, handleToggleNetwork = _a.handleToggleNetwork, linkTextNetwork = _a.linkTextNetwork, linkHrefNetwork = _a.linkHrefNetwork, titleNetwork = _a.titleNetwork, valuesNetworks = _a.valuesNetworks, listNetwork = _a.listNetwork, vesting = _a.vesting, yayBalance = _a.yayBalance, dataTransactions = _a.dataTransactions, handleClaimed = _a.handleClaimed, bridge = _a.bridge, textsBridge = _a.textsBridge, transactionsList = _a.transactionsList, handleAddToken = _a.handleAddToken, disclaimer = _a.disclaimer, disclaimerText = _a.disclaimerText, marginContent = _a.marginContent, minHeight = _a.minHeight, buttonLogoutType = _a.buttonLogoutType, linkExternalWalletModal = _a.linkExternalWalletModal;
    var _b = React.useState(false), openMenu = _b[0], setOpenMenu = _b[1];
    var refSelect = React.useRef(null);
    var handleClickOutside = React.useCallback(function (e) {
        if (refSelect.current !== e.target && refSelect.current && !refSelect.current.contains(e.target)) {
            setOpenMenu(false);
        }
    }, [setOpenMenu]);
    React.useEffect(function () {
        if (document && refSelect && refSelect.current) {
            document.addEventListener("mousedown", handleClickOutside, false);
        }
        return function () {
            document.removeEventListener("mousedown", handleClickOutside, false);
        };
    }, [refSelect, handleClickOutside]);
    var handleLink = function () {
        setOpenMenu(false);
    };
    return (React__default['default'].createElement(HeaderWrap, { ref: refSelect },
        disclaimer ? React__default['default'].createElement(Disclaimer, { text: disclaimerText || "" }) : null,
        React__default['default'].createElement(Content$2, null,
            React__default['default'].createElement(Line$2, null,
                React__default['default'].createElement(LogoWrap, { href: linkLogo },
                    React__default['default'].createElement("img", { src: Logo, alt: "" })),
                React__default['default'].createElement(Nav, { className: openMenu ? "open" : "" },
                    links.map(function (item, i) { return (React__default['default'].createElement(MenuLink, { key: i, size: "md", name: item.name, url: item.url, onClick: handleLink })); }),
                    React__default['default'].createElement(LanguageBlockMob, null,
                        React__default['default'].createElement(Languages, { currentLang: currentLang, setLang: setLang, langs: langs }))),
                React__default['default'].createElement(RightContent$1, null,
                    network ? (React__default['default'].createElement(Network, { titleNetwork: titleNetwork, linkHrefNetwork: linkHrefNetwork, linkTextNetwork: linkTextNetwork, handleToggleNetwork: handleToggleNetwork, network: network, valuesNetworks: valuesNetworks, listNetwork: listNetwork })) : null,
                    React__default['default'].createElement(Account, { text: textConnect || "Connect", account: account, login: login, logout: logout, textsAccount: textsAccount, textsConnect: textsConnect, hrefLearnHow: hrefLearnHow, network: network, vesting: vesting, bridge: bridge, yayBalance: yayBalance, dataTransactions: dataTransactions, handleClaimed: handleClaimed, textsBridge: textsBridge, transactionsList: transactionsList, handleAddToken: handleAddToken, marginContent: marginContent, minHeight: minHeight, buttonLogoutType: buttonLogoutType, linkExternalWalletModal: linkExternalWalletModal }),
                    React__default['default'].createElement(LanguageBlockDesk, null,
                        React__default['default'].createElement(Languages, { currentLang: currentLang, setLang: setLang, langs: langs })),
                    React__default['default'].createElement(Burger, { open: openMenu, onClick: function () { return setOpenMenu(!openMenu); } }))))));
};
var HeaderWrap = styled__default['default'].div(templateObject_1$D || (templateObject_1$D = __makeTemplateObject(["\n  position: fixed;\n  width: 100%;\n  left: 0;\n  top: 0;\n  z-index: 10;\n  & svg {\n    flex-shrink: 0;\n  }\n"], ["\n  position: fixed;\n  width: 100%;\n  left: 0;\n  top: 0;\n  z-index: 10;\n  & svg {\n    flex-shrink: 0;\n  }\n"])));
var Content$2 = styled__default['default'].div(templateObject_2$v || (templateObject_2$v = __makeTemplateObject(["\n  background-color: ", ";\n  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.2);\n"], ["\n  background-color: ", ";\n  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.2);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.bgBlackRgba;
});
var Line$2 = styled__default['default'].div(templateObject_3$p || (templateObject_3$p = __makeTemplateObject(["\n  padding: 15px 15px 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 1200px;\n  ", " {\n    padding: 21px 15px 15px;\n  }\n"], ["\n  padding: 15px 15px 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 1200px;\n  ", " {\n    padding: 21px 15px 15px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var Nav = styled__default['default'].div(templateObject_4$n || (templateObject_4$n = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  justify-content: flex-start;\n  position: fixed;\n  min-height: 100vh;\n  height: 100%;\n  left: -100%;\n  padding: 20px 30px 20px;\n  top: 59px;\n  transition: 0.3s ease-in-out;\n  &.open {\n    left: 0;\n  }\n  background-color: ", ";\n  ", " {\n    flex-direction: row;\n    position: relative;\n    background: transparent;\n    padding: 0;\n    height: auto;\n    min-height: 0;\n    left: 0;\n    top: 0;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  justify-content: flex-start;\n  position: fixed;\n  min-height: 100vh;\n  height: 100%;\n  left: -100%;\n  padding: 20px 30px 20px;\n  top: 59px;\n  transition: 0.3s ease-in-out;\n  &.open {\n    left: 0;\n  }\n  background-color: ", ";\n  ", " {\n    flex-direction: row;\n    position: relative;\n    background: transparent;\n    padding: 0;\n    height: auto;\n    min-height: 0;\n    left: 0;\n    top: 0;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.bgBlackRgba;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var RightContent$1 = styled__default['default'].div(templateObject_5$i || (templateObject_5$i = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n"], ["\n  display: flex;\n  align-items: center;\n"])));
var LanguageBlockMob = styled__default['default'].div(templateObject_6$d || (templateObject_6$d = __makeTemplateObject(["\n  ", " {\n    display: none;\n  }\n"], ["\n  ", " {\n    display: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var LanguageBlockDesk = styled__default['default'].div(templateObject_7$7 || (templateObject_7$7 = __makeTemplateObject(["\n  display: none;\n  ", " {\n    display: block;\n    margin-left: 11px;\n  }\n"], ["\n  display: none;\n  ", " {\n    display: block;\n    margin-left: 11px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var LogoWrap = styled__default['default'].a(templateObject_8$5 || (templateObject_8$5 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  & img {\n    width: 79px;\n    height: 34px;\n  }\n  & svg {\n    width: 133px;\n    ", " {\n      width: 153px;\n    }\n  }\n  ", " {\n    & img {\n      width: auto;\n      height: auto;\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  & img {\n    width: 79px;\n    height: 34px;\n  }\n  & svg {\n    width: 133px;\n    ", " {\n      width: 153px;\n    }\n  }\n  ", " {\n    & img {\n      width: auto;\n      height: auto;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var templateObject_1$D, templateObject_2$v, templateObject_3$p, templateObject_4$n, templateObject_5$i, templateObject_6$d, templateObject_7$7, templateObject_8$5;

var PlayerList = function (_a) {
    var texts = _a.texts, playersList = _a.playersList;
    return (React__default['default'].createElement(Wrapper$c, null,
        React__default['default'].createElement(Title$5, null,
            texts.title,
            React__default['default'].createElement("span", null,
                "(",
                playersList.length,
                ")")),
        React__default['default'].createElement(Table$2, null,
            React__default['default'].createElement(LineHeader$1, null,
                React__default['default'].createElement("p", null, "\u2116"),
                React__default['default'].createElement("p", null),
                React__default['default'].createElement("p", { className: "middle" }, texts.playerName),
                React__default['default'].createElement("p", null, texts.games)),
            playersList.map(function (item, i) { return (React__default['default'].createElement(Line$1, { key: i },
                React__default['default'].createElement(Cell$3, null, item.position),
                React__default['default'].createElement(Cell$3, null,
                    React__default['default'].createElement("img", { src: item.token })),
                React__default['default'].createElement(Cell$3, null, ellipsis(item.name)),
                React__default['default'].createElement(Cell$3, null, item.games))); }))));
};
var Wrapper$c = styled__default['default'].div(templateObject_1$C || (templateObject_1$C = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  padding: 21px 0;\n  border-radius: 10px;\n  background: ", ";\n  ", " {\n    padding: 30px 0;\n  }\n"], ["\n  width: 100%;\n  height: 100%;\n  padding: 21px 0;\n  border-radius: 10px;\n  background: ", ";\n  ", " {\n    padding: 30px 0;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.bgGray;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var Title$5 = styled__default['default'].div(templateObject_2$u || (templateObject_2$u = __makeTemplateObject(["\n  padding-left: 20px;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 23px;\n  color: ", ";\n  text-shadow: ", ";\n  & span {\n    opacity: 0.5;\n  }\n  ", " {\n    font-size: 15px;\n    line-height: 19px;\n    padding-left: 32px;\n  }\n"], ["\n  padding-left: 20px;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 23px;\n  color: ", ";\n  text-shadow: ", ";\n  & span {\n    opacity: 0.5;\n  }\n  ", " {\n    font-size: 15px;\n    line-height: 19px;\n    padding-left: 32px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text2;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textShadow;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var Table$2 = styled__default['default'].div(templateObject_3$o || (templateObject_3$o = __makeTemplateObject(["\n  margin-top: 20px;\n"], ["\n  margin-top: 20px;\n"])));
var Line$1 = styled__default['default'].div(templateObject_4$m || (templateObject_4$m = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: 13% 12% 55% 20%;\n  transition: 0.3s;\n  font-size: 11px;\n  line-height: 14px;\n  letter-spacing: 0.05em;\n  &:hover {\n    filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.2));\n    background: #292930;\n  }\n  ", " {\n    font-size: 15px;\n    line-height: 19px;\n    grid-template-columns: 15% 10% 55% 20%;\n  }\n"], ["\n  display: grid;\n  grid-template-columns: 13% 12% 55% 20%;\n  transition: 0.3s;\n  font-size: 11px;\n  line-height: 14px;\n  letter-spacing: 0.05em;\n  &:hover {\n    filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.2));\n    background: #292930;\n  }\n  ", " {\n    font-size: 15px;\n    line-height: 19px;\n    grid-template-columns: 15% 10% 55% 20%;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var LineHeader$1 = styled__default['default'].div(templateObject_5$h || (templateObject_5$h = __makeTemplateObject(["\n  display: none;\n  ", " {\n    display: grid;\n    grid-template-columns: 15% 10% 55% 20%;\n    margin-bottom: 5px;\n    font-size: 13px;\n    line-height: 16px;\n    letter-spacing: 0.05em;\n    color: ", ";\n    text-align: center;\n  }\n"], ["\n  display: none;\n  ", " {\n    display: grid;\n    grid-template-columns: 15% 10% 55% 20%;\n    margin-bottom: 5px;\n    font-size: 13px;\n    line-height: 16px;\n    letter-spacing: 0.05em;\n    color: ", ";\n    text-align: center;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.whiteRgba;
});
var Cell$3 = styled__default['default'].div(templateObject_6$c || (templateObject_6$c = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 12px 0;\n  color: ", ";\n  transition: 0.3s;\n  ", ":hover & {\n    color: ", ";\n  }\n  & img {\n    width: 32px;\n    height: 32px;\n  }\n  ", " {\n    & img {\n      width: 36px;\n      height: 36px;\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 12px 0;\n  color: ", ";\n  transition: 0.3s;\n  ", ":hover & {\n    color: ", ";\n  }\n  & img {\n    width: 32px;\n    height: 32px;\n  }\n  ", " {\n    & img {\n      width: 36px;\n      height: 36px;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, Line$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.green;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var templateObject_1$C, templateObject_2$u, templateObject_3$o, templateObject_4$m, templateObject_5$h, templateObject_6$c;

var GamesTable = function (_a) {
    var texts = _a.texts, gamesList = _a.gamesList, handleSelectValue = _a.handleSelectValue;
    var list = [];
    for (var i = 0; i < 12; i++) {
        list.push(gamesList[i] || {});
    }
    return (React__default['default'].createElement(Wrapper$b, null,
        React__default['default'].createElement(Title$4, null,
            texts.title,
            React__default['default'].createElement("span", null,
                "(",
                gamesList.length,
                ")")),
        React__default['default'].createElement(Table$1, null, list.map(function (item, i) { return (React__default['default'].createElement(ItemGame, { className: item.img ? "" : "empty", key: i, onClick: function () { return (!item.disabled ? handleSelectValue(item.value) : function () { }); } }, item.img)); }))));
};
var Wrapper$b = styled__default['default'].div(templateObject_1$B || (templateObject_1$B = __makeTemplateObject(["\n  ", " {\n    width: 100%;\n    height: 100%;\n    padding: 30px 32px;\n    border-radius: 10px;\n    background: ", ";\n  }\n"], ["\n  ", " {\n    width: 100%;\n    height: 100%;\n    padding: 30px 32px;\n    border-radius: 10px;\n    background: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.bgGray;
});
var Title$4 = styled__default['default'].div(templateObject_2$t || (templateObject_2$t = __makeTemplateObject(["\n  display: none;\n  ", " {\n    display: block;\n    font-weight: 500;\n    font-size: 15px;\n    line-height: 19px;\n    color: ", ";\n    text-shadow: ", ";\n    & span {\n      opacity: 0.5;\n    }\n  }\n"], ["\n  display: none;\n  ", " {\n    display: block;\n    font-weight: 500;\n    font-size: 15px;\n    line-height: 19px;\n    color: ", ";\n    text-shadow: ", ";\n    & span {\n      opacity: 0.5;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.text2;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textShadow;
});
var Table$1 = styled__default['default'].div(templateObject_3$n || (templateObject_3$n = __makeTemplateObject(["\n  margin-top: 22px;\n  display: flex;\n  overflow-x: auto;\n  overflow-y: hidden;\n  &::-webkit-scrollbar {\n    height: 0px;\n  }\n  ", " {\n    margin-top: 22px;\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    gap: 10px;\n    &::-webkit-scrollbar {\n      width: 0px;\n    }\n  }\n"], ["\n  margin-top: 22px;\n  display: flex;\n  overflow-x: auto;\n  overflow-y: hidden;\n  &::-webkit-scrollbar {\n    height: 0px;\n  }\n  ", " {\n    margin-top: 22px;\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    gap: 10px;\n    &::-webkit-scrollbar {\n      width: 0px;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var ItemGame = styled__default['default'].div(templateObject_4$l || (templateObject_4$l = __makeTemplateObject(["\n  width: 100%;\n  min-height: 118px;\n  border-radius: 15px;\n  flex-shrink: 0;\n  max-width: 133px;\n  margin-right: 7px;\n  &.empty {\n    background: ", ";\n  }\n  ", " {\n    margin-right: 0;\n  }\n"], ["\n  width: 100%;\n  min-height: 118px;\n  border-radius: 15px;\n  flex-shrink: 0;\n  max-width: 133px;\n  margin-right: 7px;\n  &.empty {\n    background: ", ";\n  }\n  ", " {\n    margin-right: 0;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.bgOpacitY3;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var templateObject_1$B, templateObject_2$t, templateObject_3$n, templateObject_4$l;

var GamesList = function (_a) {
    var texts = _a.texts, gamesList = _a.gamesList, handleSelectValue = _a.handleSelectValue;
    return (React__default['default'].createElement(Wrapper$a, null,
        React__default['default'].createElement(Title$3, null,
            texts.title,
            React__default['default'].createElement("span", null,
                "(",
                gamesList.length,
                ")")),
        React__default['default'].createElement(Table, null,
            React__default['default'].createElement(LineHeader, null,
                React__default['default'].createElement("p", null, "\u2116"),
                React__default['default'].createElement("p", null),
                React__default['default'].createElement("p", { className: "middle" }, texts.gameName),
                React__default['default'].createElement("p", null, texts.playedOnce)),
            gamesList.map(function (item, i) { return (React__default['default'].createElement(Line, { key: i, disabled: item.disabled, onClick: function () { return (!item.disabled ? handleSelectValue(item.value) : function () { }); } },
                React__default['default'].createElement(Cell$2, null, item.position),
                React__default['default'].createElement(Cell$2, null,
                    React__default['default'].createElement("img", { src: item.imgSrc })),
                React__default['default'].createElement(Cell$2, null, item.value),
                React__default['default'].createElement(Cell$2, null, item.playedOnce))); }))));
};
var Wrapper$a = styled__default['default'].div(templateObject_1$A || (templateObject_1$A = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  padding: 21px 0;\n  border-radius: 10px;\n  background: ", ";\n  ", " {\n    padding: 30px 0;\n  }\n"], ["\n  width: 100%;\n  height: 100%;\n  padding: 21px 0;\n  border-radius: 10px;\n  background: ", ";\n  ", " {\n    padding: 30px 0;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.bgGray;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var Title$3 = styled__default['default'].div(templateObject_2$s || (templateObject_2$s = __makeTemplateObject(["\n  padding-left: 20px;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 23px;\n  color: ", ";\n  text-shadow: ", ";\n  & span {\n    opacity: 0.5;\n  }\n  ", " {\n    font-size: 15px;\n    line-height: 19px;\n    padding-left: 32px;\n  }\n"], ["\n  padding-left: 20px;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 23px;\n  color: ", ";\n  text-shadow: ", ";\n  & span {\n    opacity: 0.5;\n  }\n  ", " {\n    font-size: 15px;\n    line-height: 19px;\n    padding-left: 32px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text2;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textShadow;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var Table = styled__default['default'].div(templateObject_3$m || (templateObject_3$m = __makeTemplateObject(["\n  margin-top: 20px;\n"], ["\n  margin-top: 20px;\n"])));
var Line = styled__default['default'].div(templateObject_4$k || (templateObject_4$k = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: 13% 12% 55% 20%;\n  transition: 0.3s;\n  font-size: 11px;\n  line-height: 14px;\n  letter-spacing: 0.05em;\n  cursor: ", ";\n  opacity: ", ";\n  &:hover {\n    filter: ", ";\n    background: ", ";\n    & div {\n      color: ", " !important;\n    }\n  }\n  ", " {\n    font-size: 15px;\n    line-height: 19px;\n    grid-template-columns: 15% 10% 55% 20%;\n  }\n"], ["\n  display: grid;\n  grid-template-columns: 13% 12% 55% 20%;\n  transition: 0.3s;\n  font-size: 11px;\n  line-height: 14px;\n  letter-spacing: 0.05em;\n  cursor: ", ";\n  opacity: ", ";\n  &:hover {\n    filter: ", ";\n    background: ", ";\n    & div {\n      color: ", " !important;\n    }\n  }\n  ", " {\n    font-size: 15px;\n    line-height: 19px;\n    grid-template-columns: 15% 10% 55% 20%;\n  }\n"])), function (_a) {
    var disabled = _a.disabled;
    return (disabled ? "default" : "pointer");
}, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? 0.3 : 1);
}, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? "none" : "drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.2))");
}, function (_a) {
    var theme = _a.theme, disabled = _a.disabled;
    return (disabled ? theme.colors.dark : "#292930");
}, function (_a) {
    var theme = _a.theme, disabled = _a.disabled;
    return (disabled ? theme.colors.text : theme.colors.green);
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var LineHeader = styled__default['default'].div(templateObject_5$g || (templateObject_5$g = __makeTemplateObject(["\n  display: none;\n  ", " {\n    display: grid;\n    grid-template-columns: 15% 10% 55% 20%;\n    margin-bottom: 5px;\n    font-size: 13px;\n    line-height: 16px;\n    letter-spacing: 0.05em;\n    color: ", ";\n    text-align: center;\n  }\n"], ["\n  display: none;\n  ", " {\n    display: grid;\n    grid-template-columns: 15% 10% 55% 20%;\n    margin-bottom: 5px;\n    font-size: 13px;\n    line-height: 16px;\n    letter-spacing: 0.05em;\n    color: ", ";\n    text-align: center;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.whiteRgba;
});
var Cell$2 = styled__default['default'].div(templateObject_6$b || (templateObject_6$b = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 12px 0;\n  color: ", ";\n  transition: 0.3s;\n  ", ":hover & {\n    color: ", ";\n  }\n  & img {\n    width: 32px;\n    height: 32px;\n  }\n  ", " {\n    & img {\n      width: 36px;\n      height: 36px;\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 12px 0;\n  color: ", ";\n  transition: 0.3s;\n  ", ":hover & {\n    color: ", ";\n  }\n  & img {\n    width: 32px;\n    height: 32px;\n  }\n  ", " {\n    & img {\n      width: 36px;\n      height: 36px;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, Line, function (_a) {
    var theme = _a.theme;
    return theme.colors.green;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var templateObject_1$A, templateObject_2$s, templateObject_3$m, templateObject_4$k, templateObject_5$g, templateObject_6$b;

var TabsTypeList = function (_a) {
    var toggleTypeList = _a.toggleTypeList, typeTabsList = _a.typeTabsList;
    return (React__default['default'].createElement("div", null, typeTabsList === null || typeTabsList === void 0 ? void 0 : typeTabsList.map(function (item, i) { return (React__default['default'].createElement(Tab$2, { onClick: toggleTypeList, value: item, key: i }, item === "table" ? React__default['default'].createElement(Icon$m, { fill: "transparent" }) : React__default['default'].createElement(Icon$x, { fill: "transparent" }))); })));
};
var Tab$2 = styled__default['default'].button(templateObject_1$z || (templateObject_1$z = __makeTemplateObject(["\n  position: relative;\n  width: 30px;\n  height: 30px;\n  background: ", ";\n  border-radius: 7px;\n  border: none;\n  &:first-child {\n    margin-right: 15px;\n  }\n  cursor: pointer;\n  & svg {\n    pointer-events: none;\n    position: absolute;\n    top: -6px;\n    left: -6px;\n  }\n"], ["\n  position: relative;\n  width: 30px;\n  height: 30px;\n  background: ", ";\n  border-radius: 7px;\n  border: none;\n  &:first-child {\n    margin-right: 15px;\n  }\n  cursor: pointer;\n  & svg {\n    pointer-events: none;\n    position: absolute;\n    top: -6px;\n    left: -6px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.whiteRgba;
});
var templateObject_1$z;

var ListWrap = function (_a) {
    var children = _a.children, handleInput = _a.handleInput, inputValue = _a.inputValue, placeholder = _a.placeholder, players = _a.players, activeTab = _a.activeTab, toggleTab = _a.toggleTab, tabsList = _a.tabsList, toggleTypeList = _a.toggleTypeList, typeTabsList = _a.typeTabsList, texts = _a.texts, myPositionButton = _a.myPositionButton, length = _a.length, togglePage = _a.togglePage, currentPage = _a.currentPage, nameInput = _a.nameInput, handleShare = _a.handleShare;
    return (React__default['default'].createElement(Wrapper$9, null,
        React__default['default'].createElement(TopContent$1, { players: players }, players ? (React__default['default'].createElement(Tabs$1, { tabValue: activeTab, onClick: toggleTab, tabsList: tabsList })) : (React__default['default'].createElement(InputSearch, { name: nameInput, placeholder: placeholder, value: inputValue, onChange: handleInput, width: "272px" }))),
        React__default['default'].createElement(MainBlock, null, children),
        React__default['default'].createElement(BottomContent, null, players ? (React__default['default'].createElement(React__default['default'].Fragment, null,
            React__default['default'].createElement(Buttons$2, null,
                React__default['default'].createElement(ButtonPosition, { scale: "sm", variant: "option", height: "30px", onClick: myPositionButton }, texts === null || texts === void 0 ? void 0 : texts.button),
                React__default['default'].createElement(Icon$h, { role: "button", onClick: handleShare })),
            React__default['default'].createElement(Pagination, { currentPage: currentPage, length: length, togglePage: togglePage }))) : (React__default['default'].createElement(TabsTypeList, { toggleTypeList: toggleTypeList, typeTabsList: typeTabsList })))));
};
var Wrapper$9 = styled__default['default'].div(templateObject_1$y || (templateObject_1$y = __makeTemplateObject(["\n  max-width: 100%;\n  width: 100%;\n  ", " {\n    max-width: 568px;\n  }\n"], ["\n  max-width: 100%;\n  width: 100%;\n  ", " {\n    max-width: 568px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xl;
});
var MainBlock = styled__default['default'].div(templateObject_2$r || (templateObject_2$r = __makeTemplateObject(["\n  height: auto;\n  ", " {\n    height: 517px;\n  }\n"], ["\n  height: auto;\n  ", " {\n    height: 517px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xl;
});
var TopContent$1 = styled__default['default'].div(templateObject_3$l || (templateObject_3$l = __makeTemplateObject(["\n  height: 51px;\n  width: fit-content;\n  margin-left: ", ";\n  margin-right: ", ";\n  margin-bottom: 24px;\n  ", " {\n    margin-bottom: 40px;\n    width: ", ";\n    margin-right: 0;\n  }\n"], ["\n  height: 51px;\n  width: fit-content;\n  margin-left: ", ";\n  margin-right: ", ";\n  margin-bottom: 24px;\n  ", " {\n    margin-bottom: 40px;\n    width: ", ";\n    margin-right: 0;\n  }\n"])), function (_a) {
    var players = _a.players;
    return (players ? "auto" : "0");
}, function (_a) {
    var players = _a.players;
    return (players ? "auto" : "0");
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var players = _a.players;
    return (players ? "408px" : "fit-content");
});
var BottomContent = styled__default['default'].div(templateObject_4$j || (templateObject_4$j = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 35px;\n  flex-wrap: wrap;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 35px;\n  flex-wrap: wrap;\n"])));
var ButtonPosition = styled__default['default'](Button$9)(templateObject_5$f || (templateObject_5$f = __makeTemplateObject(["\n  display: block;\n  margin-right: 12px;\n  font-weight: 500;\n  width: 198px;\n  ", " {\n    width: 146px;\n  }\n"], ["\n  display: block;\n  margin-right: 12px;\n  font-weight: 500;\n  width: 198px;\n  ", " {\n    width: 146px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var Buttons$2 = styled__default['default'].div(templateObject_6$a || (templateObject_6$a = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  margin-bottom: 35px;\n  ", " {\n    width: auto;\n    justify-content: flex-start;\n    margin-bottom: 0px;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  margin-bottom: 35px;\n  ", " {\n    width: auto;\n    justify-content: flex-start;\n    margin-bottom: 0px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var templateObject_1$y, templateObject_2$r, templateObject_3$l, templateObject_4$j, templateObject_5$f, templateObject_6$a;

var Wrap$6 = styled__default['default'].div(templateObject_1$x || (templateObject_1$x = __makeTemplateObject(["\n  padding: 0 20px 26px;\n"], ["\n  padding: 0 20px 26px;\n"])));
var Ghosts$1 = styled__default['default'].div(templateObject_2$q || (templateObject_2$q = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n"], ["\n  display: flex;\n  justify-content: center;\n"])));
var Beta$1 = styled__default['default'](Text)(templateObject_3$k || (templateObject_3$k = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  letter-spacing: 0.05em;\n  text-align: center;\n"], ["\n  display: flex;\n  justify-content: center;\n  letter-spacing: 0.05em;\n  text-align: center;\n"])));
var CheckboxInputBlock$1 = styled__default['default'].div(templateObject_4$i || (templateObject_4$i = __makeTemplateObject(["\n  cursor: pointer;\n  &.top {\n    display: grid;\n    grid-template-columns: 1fr 9fr;\n    margin-top: 37px;\n  }\n  &.bottom {\n    display: grid;\n    grid-template-columns: 1fr 9fr;\n    margin: 22px 0 38px;\n  }\n"], ["\n  cursor: pointer;\n  &.top {\n    display: grid;\n    grid-template-columns: 1fr 9fr;\n    margin-top: 37px;\n  }\n  &.bottom {\n    display: grid;\n    grid-template-columns: 1fr 9fr;\n    margin: 22px 0 38px;\n  }\n"])));
var Label$2 = styled__default['default'].label(templateObject_5$e || (templateObject_5$e = __makeTemplateObject(["\n  margin-left: 22px;\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 16px;\n  letter-spacing: 0.05em;\n  color: ", ";\n  cursor: pointer;\n"], ["\n  margin-left: 22px;\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 16px;\n  letter-spacing: 0.05em;\n  color: ", ";\n  cursor: pointer;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
var WelcomeModal = function (_a) {
    var _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b, title = _a.title, textCheckbox1 = _a.textCheckbox1, textCheckbox2 = _a.textCheckbox2, continueText = _a.continueText, description = _a.description, handleConfirm = _a.handleConfirm, disabledButton = _a.disabledButton, handleChangeCheckbox1 = _a.handleChangeCheckbox1, handleChangeCheckbox2 = _a.handleChangeCheckbox2, checkedCheckbox1 = _a.checkedCheckbox1, checkedCheckbox2 = _a.checkedCheckbox2;
    return (React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement(Modal, { title: title, onDismiss: onDismiss, welcome: true },
            React__default['default'].createElement(Wrap$6, null,
                React__default['default'].createElement(Ghosts$1, null,
                    React__default['default'].createElement("img", { src: GhostsIcon })),
                React__default['default'].createElement(Beta$1, null, description),
                React__default['default'].createElement(CheckboxInputBlock$1, { className: "top" },
                    React__default['default'].createElement(CheckboxInput, { id: "top", onChange: handleChangeCheckbox1, checked: checkedCheckbox1 }),
                    React__default['default'].createElement(Label$2, { htmlFor: "top" }, textCheckbox1)),
                React__default['default'].createElement(CheckboxInputBlock$1, { className: "bottom" },
                    React__default['default'].createElement(CheckboxInput, { id: "bottom", onChange: handleChangeCheckbox2, checked: checkedCheckbox2 }),
                    React__default['default'].createElement(Label$2, { htmlFor: "bottom" }, textCheckbox2)),
                React__default['default'].createElement(Button$9, { width: "100%", variant: "green", onClick: handleConfirm, disabled: disabledButton }, continueText)))));
};
var templateObject_1$x, templateObject_2$q, templateObject_3$k, templateObject_4$i, templateObject_5$e;

var useWelcomeModal = function () {
    var onPresentWelcomeModal = useModal(React__default['default'].createElement(WelcomeModal, { title: "Welcome", textCheckbox1: "I understand that this product is still in beta. I am participating at my own risk.", textCheckbox2: "I understand that I am using this product at my own risk. Any losses incurred due to my actions are my own\n  responsibillity.", continueText: "Continue", description: "This product is in beta. Once you enter a position, you cannot cancel or adjust it." }))[0];
    return { onPresentWelcomeModal: onPresentWelcomeModal };
};

var Wrap$5 = styled__default['default'].div(templateObject_1$w || (templateObject_1$w = __makeTemplateObject(["\n  padding: 55px 20px 26px;\n"], ["\n  padding: 55px 20px 26px;\n"])));
var Title$2 = styled__default['default'](Text)(templateObject_2$p || (templateObject_2$p = __makeTemplateObject(["\n  letter-spacing: 0.05em;\n  text-align: center;\n"], ["\n  letter-spacing: 0.05em;\n  text-align: center;\n"])));
var Beta = styled__default['default'](Text)(templateObject_3$j || (templateObject_3$j = __makeTemplateObject(["\n  padding: 0 30px;\n  margin-top: 15px;\n  margin-bottom: 10px;\n  display: flex;\n  justify-content: center;\n  letter-spacing: 0.05em;\n  text-align: center;\n  font-weight: 400;\n"], ["\n  padding: 0 30px;\n  margin-top: 15px;\n  margin-bottom: 10px;\n  display: flex;\n  justify-content: center;\n  letter-spacing: 0.05em;\n  text-align: center;\n  font-weight: 400;\n"])));
var CheckboxInputBlock = styled__default['default'].div(templateObject_4$h || (templateObject_4$h = __makeTemplateObject(["\n  cursor: pointer;\n  display: grid;\n  grid-template-columns: 1fr 9fr;\n  margin-top: 30px;\n"], ["\n  cursor: pointer;\n  display: grid;\n  grid-template-columns: 1fr 9fr;\n  margin-top: 30px;\n"])));
var Label$1 = styled__default['default'].label(templateObject_5$d || (templateObject_5$d = __makeTemplateObject(["\n  margin-left: 22px;\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 16px;\n  letter-spacing: 0.05em;\n  font-weight: 400;\n  color: ", ";\n  cursor: pointer;\n"], ["\n  margin-left: 22px;\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 16px;\n  letter-spacing: 0.05em;\n  font-weight: 400;\n  color: ", ";\n  cursor: pointer;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
var InputBlock = styled__default['default'].div(templateObject_6$9 || (templateObject_6$9 = __makeTemplateObject(["\n  margin-top: 23px;\n  &:last-child {\n    margin-top: 17px;\n  }\n"], ["\n  margin-top: 23px;\n  &:last-child {\n    margin-top: 17px;\n  }\n"])));
// const LabelInput = styled(Text)`
//   margin-bottom: 12px;
// `;
var Link$1 = styled__default['default'](Text)(templateObject_7$6 || (templateObject_7$6 = __makeTemplateObject(["\n  display: block;\n  margin-top: 15px;\n  text-align: center;\n  font-weight: 400;\n"], ["\n  display: block;\n  margin-top: 15px;\n  text-align: center;\n  font-weight: 400;\n"])));
var GiftFormModal = function (_a) {
    var _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b, title = _a.title, textCheckbox = _a.textCheckbox, continueText = _a.continueText, description = _a.description, handleConfirm = _a.handleConfirm, disabledButton = _a.disabledButton, handleChangeCheckbox = _a.handleChangeCheckbox, checkedCheckbox = _a.checkedCheckbox, placeholderInput1 = _a.placeholderInput1, placeholderInput2 = _a.placeholderInput2, onChangeInput1 = _a.onChangeInput1, onChangeInput2 = _a.onChangeInput2, valueInput1 = _a.valueInput1, valueInput2 = _a.valueInput2, linkText = _a.linkText, hrefLink = _a.hrefLink, nameInput1 = _a.nameInput1, nameInput2 = _a.nameInput2, nameCheckbox = _a.nameCheckbox, image = _a.image, textError = _a.textError;
    return (React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement(Modal, { image: image, onDismiss: onDismiss, welcome: true },
            React__default['default'].createElement(Wrap$5, null,
                React__default['default'].createElement(Title$2, null, title),
                React__default['default'].createElement(Beta, null, description),
                React__default['default'].createElement(InputBlock, null,
                    React__default['default'].createElement(InputSearch, { placeholder: placeholderInput1, width: "100%", height: "50px", iconLess: true, onChange: onChangeInput1, value: valueInput1, name: nameInput1 || "email" })),
                React__default['default'].createElement(InputBlock, null,
                    React__default['default'].createElement(InputSearch, { placeholder: placeholderInput2, width: "100%", height: "50px", iconLess: true, onChange: onChangeInput2, value: valueInput2, name: nameInput2 || "wallet" })),
                React__default['default'].createElement(Link$1, { target: "_blank", color: "#47DA3B", size: "sm", as: "a", href: hrefLink }, linkText),
                React__default['default'].createElement(CheckboxInputBlock, { className: "bottom" },
                    React__default['default'].createElement(CheckboxInput, { id: "bottom", onChange: handleChangeCheckbox, checked: checkedCheckbox, name: nameCheckbox || "check" }),
                    React__default['default'].createElement(Label$1, { htmlFor: "bottom" }, textCheckbox)),
                textError ? (React__default['default'].createElement(Text, { marginTop: 20, color: "red" }, textError)) : null,
                React__default['default'].createElement(Button$9, { marginTop: "30px", width: "100%", variant: "green", onClick: handleConfirm, disabled: disabledButton }, continueText)))));
};
var templateObject_1$w, templateObject_2$p, templateObject_3$j, templateObject_4$h, templateObject_5$d, templateObject_6$9, templateObject_7$6;

var useGiftFormModal = function () {
    var onPresentWelcomeModal = useModal(React__default['default'].createElement(GiftFormModal, { hrefLink: "#", title: "You're one of the first", image: true, textCheckbox: "I givE my consent to the processing of personal data.", continueText: "Send", description: "Enter your Email and BSC address and get YAY one of the first", textError: "Error", linkText: "How to create your own BSC wallet?", placeholderInput1: "Email", placeholderInput2: "BSC wallet address" }))[0];
    return { onPresentWelcomeModal: onPresentWelcomeModal };
};

var types = {
    COLLECTION: "collection",
    SUCCESS: "success",
    WINNING: "winning",
    INFO: "info",
    ERROR: "error",
};

var _a;
var alertTypeMap = (_a = {},
    _a[types.COLLECTION] = variants$1.COLLECTION,
    _a[types.SUCCESS] = variants$1.SUCCESS,
    _a[types.WINNING] = variants$1.WINNING,
    _a[types.INFO] = variants$1.INFO,
    _a[types.ERROR] = variants$1.ERROR,
    _a);
var StyledToast = styled__default['default'].div(templateObject_1$v || (templateObject_1$v = __makeTemplateObject(["\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 600px;\n  }\n"], ["\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 600px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Toast = function (_a) {
    var toast = _a.toast, onRemove = _a.onRemove, style = _a.style, ttl = _a.ttl, props = __rest(_a, ["toast", "onRemove", "style", "ttl"]);
    var timer = React.useRef();
    var ref = React.useRef(null);
    var removeHandler = React.useRef(onRemove);
    var id = toast.id, title = toast.title, description = toast.description, type = toast.type;
    var handleRemove = React.useCallback(function () { return removeHandler.current(id); }, [id, removeHandler]);
    var handleMouseEnter = function () {
        clearTimeout(timer.current);
    };
    var handleMouseLeave = function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
    };
    React.useEffect(function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
        return function () {
            clearTimeout(timer.current);
        };
    }, [timer, ttl, handleRemove]);
    return (React__default['default'].createElement(reactTransitionGroup.CSSTransition, __assign({ nodeRef: ref, timeout: 250, style: style }, props),
        React__default['default'].createElement(StyledToast, { ref: ref, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
            React__default['default'].createElement(Alert, { title: title, variant: alertTypeMap[type], onClick: handleRemove }, description))));
};
var templateObject_1$v;

var StyledToastContainer = styled__default['default'].div(templateObject_1$u || (templateObject_1$u = __makeTemplateObject(["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"], ["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"])));
var ToastContainer = function (_a) {
    var toasts = _a.toasts, onRemove = _a.onRemove, _b = _a.ttl, ttl = _b === void 0 ? 6000 : _b; _a.stackSpacing;
    return (React__default['default'].createElement(StyledToastContainer, null,
        React__default['default'].createElement(reactTransitionGroup.TransitionGroup, null, toasts.map(function (toast, index) {
            // const zIndex = (ZINDEX - index).toString();
            // const top = TOP_POSITION + index * stackSpacing;
            return (React__default['default'].createElement(Toast, { key: toast.id, toast: toast, onRemove: onRemove, ttl: ttl, 
                // style={{ top: `${top}px`, zIndex }}
                style: { position: "static" } }));
        }))));
};
var templateObject_1$u;

var Wrap$4 = styled__default['default'].div(templateObject_1$t || (templateObject_1$t = __makeTemplateObject(["\n  padding: 0 20px 26px;\n"], ["\n  padding: 0 20px 26px;\n"])));
var Ghosts = styled__default['default'].div(templateObject_2$o || (templateObject_2$o = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n"], ["\n  display: flex;\n  justify-content: center;\n"])));
var Description$1 = styled__default['default'](Text)(templateObject_3$i || (templateObject_3$i = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  padding: 16px 26px 30px;\n  letter-spacing: 0.05em;\n  text-align: center;\n  &.errorPadding {\n    padding: 20px 43px 45px;\n  }\n"], ["\n  display: flex;\n  justify-content: center;\n  padding: 16px 26px 30px;\n  letter-spacing: 0.05em;\n  text-align: center;\n  &.errorPadding {\n    padding: 20px 43px 45px;\n  }\n"])));
var PausedErrorModals = function (_a) {
    var title = _a.title, buttonText = _a.buttonText, descriptionTop = _a.descriptionTop, descriptionBottom = _a.descriptionBottom, handleConfirm = _a.handleConfirm, disabledButton = _a.disabledButton, errorPadding = _a.errorPadding;
    return (React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement(Modal, { title: title, welcome: true, hideCloseButton: true },
            React__default['default'].createElement(Wrap$4, null,
                React__default['default'].createElement(Ghosts, null,
                    React__default['default'].createElement("img", { src: OneGhost })),
                React__default['default'].createElement(Description$1, { size: "sm", className: errorPadding ? "errorPadding" : "" },
                    descriptionTop,
                    React__default['default'].createElement("br", null),
                    React__default['default'].createElement("br", null),
                    descriptionBottom),
                React__default['default'].createElement(Button$9, { width: "100%", variant: "green", onClick: handleConfirm, disabled: disabledButton }, buttonText)))));
};
var templateObject_1$t, templateObject_2$o, templateObject_3$i;

var CollectRoundWinningsModal = function (_a) {
    var isLoading = _a.isLoading, handleClick = _a.handleClick, onDismiss = _a.onDismiss, title = _a.title, collectText = _a.collectText, bnbText = _a.bnbText, convert = _a.convert, buttonText = _a.buttonText, img = _a.img;
    return (React__default['default'].createElement(Modal, { title: title, onDismiss: onDismiss },
        React__default['default'].createElement(Box, { display: "flex", style: { justifyContent: "center" }, marginTop: "-40px", marginBottom: "-20px" },
            React__default['default'].createElement("img", { src: img || WINNER2, alt: "" })),
        React__default['default'].createElement(Box, { padding: "20px" },
            React__default['default'].createElement(Flex, { alignItems: "start", justifyContent: "space-between", mb: "24px" },
                React__default['default'].createElement(Text, null, collectText),
                React__default['default'].createElement(Box, { style: { textAlign: "right" } },
                    React__default['default'].createElement(Text, null, bnbText),
                    React__default['default'].createElement(Text, { fontSize: "12px", color: "grayText" }, convert))),
            React__default['default'].createElement(Button$9, { width: "100%", mb: "8px", onClick: handleClick, isLoading: isLoading, endIcon: isLoading ? React__default['default'].createElement(Icon$v, { spin: true, fill: "none" }) : null, variant: "green" }, buttonText))));
};

var bounceInKeyframe$1 = styled.keyframes(templateObject_1$s || (templateObject_1$s = __makeTemplateObject(["\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n\n  from {\n    opacity: 0;\n    transform: translate3d(0, 3000px, 0) scaleY(5);\n  }\n\n  60% {\n    opacity: 1;\n    transform: translate3d(0, -20px, 0) scaleY(0.9);\n  }\n\n  75% {\n    transform: translate3d(0, 10px, 0) scaleY(0.95);\n  }\n\n  90% {\n    transform: translate3d(0, -5px, 0) scaleY(0.985);\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n"], ["\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n\n  from {\n    opacity: 0;\n    transform: translate3d(0, 3000px, 0) scaleY(5);\n  }\n\n  60% {\n    opacity: 1;\n    transform: translate3d(0, -20px, 0) scaleY(0.9);\n  }\n\n  75% {\n    transform: translate3d(0, 10px, 0) scaleY(0.95);\n  }\n\n  90% {\n    transform: translate3d(0, -5px, 0) scaleY(0.985);\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n"])));
var bounceOutKeyframe$1 = styled.keyframes(templateObject_2$n || (templateObject_2$n = __makeTemplateObject(["\n  20% {\n    transform: translate3d(0, 10px, 0) scaleY(0.985);\n  }\n\n  40%,\n  45% {\n    opacity: 1;\n    transform: translate3d(0, -20px, 0) scaleY(0.9);\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, 2000px, 0) scaleY(3);\n  }\n"], ["\n  20% {\n    transform: translate3d(0, 10px, 0) scaleY(0.985);\n  }\n\n  40%,\n  45% {\n    opacity: 1;\n    transform: translate3d(0, -20px, 0) scaleY(0.9);\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, 2000px, 0) scaleY(3);\n  }\n"])));
var bounceInAnimation$1 = styled.css(templateObject_3$h || (templateObject_3$h = __makeTemplateObject(["\n  animation: ", " 1s;\n"], ["\n  animation: ", " 1s;\n"])), bounceInKeyframe$1);
var bounceOutAnimation$1 = styled.css(templateObject_4$g || (templateObject_4$g = __makeTemplateObject(["\n  animation: ", " 1s;\n"], ["\n  animation: ", " 1s;\n"])), bounceOutKeyframe$1);
var Wrapper$8 = styled__default['default'].div(templateObject_5$c || (templateObject_5$c = __makeTemplateObject(["\n  align-items: flex-start;\n  bottom: 0px;\n  color: #ffffff;\n  display: flex;\n  justify-content: flex-end;\n  right: 0;\n  z-index: 50;\n\n  &.popup-enter-active {\n    ", "\n  }\n\n  &.popup-enter-done {\n    bottom: 0px;\n  }\n\n  &.popup-exit-done {\n    bottom: -2000px;\n  }\n\n  &.popup-exit-active {\n    ", "\n  }\n"], ["\n  align-items: flex-start;\n  bottom: 0px;\n  color: #ffffff;\n  display: flex;\n  justify-content: flex-end;\n  right: 0;\n  z-index: 50;\n\n  &.popup-enter-active {\n    ", "\n  }\n\n  &.popup-enter-done {\n    bottom: 0px;\n  }\n\n  &.popup-exit-done {\n    bottom: -2000px;\n  }\n\n  &.popup-exit-active {\n    ", "\n  }\n"])), bounceInAnimation$1, bounceOutAnimation$1);
var Popup = styled__default['default'].div(templateObject_6$8 || (templateObject_6$8 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  background: ", ";\n  border-radius: 14px;\n  color: #ffffff;\n  max-width: 320px;\n  padding-right: 70px;\n  & button {\n    white-space: nowrap;\n  }\n"], ["\n  position: relative;\n  display: flex;\n  background: ", ";\n  border-radius: 14px;\n  color: #ffffff;\n  max-width: 320px;\n  padding-right: 70px;\n  & button {\n    white-space: nowrap;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.green;
});
var Img = styled__default['default'](Box)(templateObject_7$5 || (templateObject_7$5 = __makeTemplateObject(["\n  position: relative;\n  & img {\n    position: absolute;\n    max-width: none;\n    left: -67px;\n    top: -70px;\n    pointer-events: none;\n  }\n"], ["\n  position: relative;\n  & img {\n    position: absolute;\n    max-width: none;\n    left: -67px;\n    top: -70px;\n    pointer-events: none;\n  }\n"])));
var CloseBtn = styled__default['default'](IconButton)(templateObject_8$4 || (templateObject_8$4 = __makeTemplateObject(["\n  position: absolute;\n  right: 0;\n"], ["\n  position: absolute;\n  right: 0;\n"])));
var CollectWinningsPopup = function (_a) {
    var handleOpenHistory = _a.handleOpenHistory, handleClick = _a.handleClick, btnText = _a.btnText, img = _a.img, ref = _a.ref;
    return (React__default['default'].createElement(Wrapper$8, { ref: ref },
        React__default['default'].createElement(Popup, null,
            React__default['default'].createElement(Button$9, { style: { flex: 1 }, onClick: handleOpenHistory, variant: "green" }, btnText),
            " ",
            React__default['default'].createElement(Img, null,
                React__default['default'].createElement("img", { src: img || Winner, alt: "" })),
            React__default['default'].createElement(CloseBtn, { variant: "text", onClick: handleClick },
                React__default['default'].createElement(Icon$R, { fill: "none" })))));
};
var templateObject_1$s, templateObject_2$n, templateObject_3$h, templateObject_4$g, templateObject_5$c, templateObject_6$8, templateObject_7$5, templateObject_8$4;

var ChartDisclaimer = function (_a) {
    var handleConfirm = _a.handleConfirm, topText = _a.topText, bottomText = _a.bottomText, btnText = _a.btnText, href = _a.href, linkText = _a.linkText;
    return (React__default['default'].createElement(Modal, { title: "", hideCloseButton: true },
        React__default['default'].createElement(Box, { paddingRight: "40px", paddingLeft: "40px", paddingBottom: "40px" },
            React__default['default'].createElement(Text, { as: "p", mb: "16px" }, topText),
            React__default['default'].createElement(Text, { as: "p", mb: "16px" }, bottomText),
            React__default['default'].createElement(Button$9, { width: "100%", onClick: handleConfirm, mb: "16px", variant: "green" }, btnText),
            React__default['default'].createElement(Flex, { justifyContent: "center", alignItems: "center" },
                React__default['default'].createElement(LinkExternal, { href: href, external: true }, linkText)))));
};

var bounceInKeyframe = styled.keyframes(templateObject_1$r || (templateObject_1$r = __makeTemplateObject(["\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n\n  from {\n    opacity: 0;\n    transform: translate3d(0, 3000px, 0) scaleY(5);\n  }\n\n  60% {\n    opacity: 1;\n    transform: translate3d(0, -20px, 0) scaleY(0.9);\n  }\n\n  75% {\n    transform: translate3d(0, 10px, 0) scaleY(0.95);\n  }\n\n  90% {\n    transform: translate3d(0, -5px, 0) scaleY(0.985);\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n"], ["\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n\n  from {\n    opacity: 0;\n    transform: translate3d(0, 3000px, 0) scaleY(5);\n  }\n\n  60% {\n    opacity: 1;\n    transform: translate3d(0, -20px, 0) scaleY(0.9);\n  }\n\n  75% {\n    transform: translate3d(0, 10px, 0) scaleY(0.95);\n  }\n\n  90% {\n    transform: translate3d(0, -5px, 0) scaleY(0.985);\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n"])));
var bounceOutKeyframe = styled.keyframes(templateObject_2$m || (templateObject_2$m = __makeTemplateObject(["\n  20% {\n    transform: translate3d(0, 10px, 0) scaleY(0.985);\n  }\n\n  40%,\n  45% {\n    opacity: 1;\n    transform: translate3d(0, -20px, 0) scaleY(0.9);\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, 2000px, 0) scaleY(3);\n  }\n"], ["\n  20% {\n    transform: translate3d(0, 10px, 0) scaleY(0.985);\n  }\n\n  40%,\n  45% {\n    opacity: 1;\n    transform: translate3d(0, -20px, 0) scaleY(0.9);\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, 2000px, 0) scaleY(3);\n  }\n"])));
var bounceInAnimation = styled.css(templateObject_3$g || (templateObject_3$g = __makeTemplateObject(["\n  animation: ", " 1s;\n"], ["\n  animation: ", " 1s;\n"])), bounceInKeyframe);
var bounceOutAnimation = styled.css(templateObject_4$f || (templateObject_4$f = __makeTemplateObject(["\n  animation: ", " 1s;\n"], ["\n  animation: ", " 1s;\n"])), bounceOutKeyframe);
var Wrapper$7 = styled__default['default'].div(templateObject_5$b || (templateObject_5$b = __makeTemplateObject(["\n  align-items: flex-start;\n  bottom: 0px;\n  color: #ffffff;\n  display: flex;\n  justify-content: flex-end;\n  right: 0;\n  z-index: 50;\n\n  &.popup-enter-active {\n    ", "\n  }\n\n  &.popup-enter-done {\n    bottom: 0px;\n  }\n\n  &.popup-exit-done {\n    bottom: -2000px;\n  }\n\n  &.popup-exit-active {\n    ", "\n  }\n"], ["\n  align-items: flex-start;\n  bottom: 0px;\n  color: #ffffff;\n  display: flex;\n  justify-content: flex-end;\n  right: 0;\n  z-index: 50;\n\n  &.popup-enter-active {\n    ", "\n  }\n\n  &.popup-enter-done {\n    bottom: 0px;\n  }\n\n  &.popup-exit-done {\n    bottom: -2000px;\n  }\n\n  &.popup-exit-active {\n    ", "\n  }\n"])), bounceInAnimation, bounceOutAnimation);
var StyledButton$4 = styled__default['default'](Button$9)(templateObject_6$7 || (templateObject_6$7 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  justify-content: flex-start;\n  border-radius: 14px;\n  max-width: 394px;\n  width: 100%;\n  height: 92px;\n  padding: 31px;\n  white-space: nowrap;\n  background: ", ";\n  & img {\n    position: relative;\n    max-width: none;\n    margin: 0 10px 0 -16px;\n    left: 0px;\n    bottom: 16px;\n    pointer-events: none;\n  }\n"], ["\n  position: relative;\n  display: flex;\n  justify-content: flex-start;\n  border-radius: 14px;\n  max-width: 394px;\n  width: 100%;\n  height: 92px;\n  padding: 31px;\n  white-space: nowrap;\n  background: ", ";\n  & img {\n    position: relative;\n    max-width: none;\n    margin: 0 10px 0 -16px;\n    left: 0px;\n    bottom: 16px;\n    pointer-events: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.yellowGradient3;
});
var GiftPopup = function (_a) {
    var handleOpenForm = _a.handleOpenForm, btnText = _a.btnText, img = _a.img, ref = _a.ref;
    return (React__default['default'].createElement(Wrapper$7, { ref: ref },
        React__default['default'].createElement(StyledButton$4, { style: { flex: 1 }, onClick: handleOpenForm, width: "100%" },
            React__default['default'].createElement("img", { src: img || Gift, alt: "" }),
            React__default['default'].createElement(Text, { fontSize: "21px" }, btnText))));
};
var templateObject_1$r, templateObject_2$m, templateObject_3$g, templateObject_4$f, templateObject_5$b, templateObject_6$7;

var Wrap$3 = styled__default['default'].div(templateObject_1$q || (templateObject_1$q = __makeTemplateObject(["\n  padding: 0 20px 26px;\n"], ["\n  padding: 0 20px 26px;\n"])));
var GiftImg = styled__default['default'].div(templateObject_2$l || (templateObject_2$l = __makeTemplateObject(["\n  /* position: absolute;\n  left: 50%;\n  transform: translateX(-50%); */\n  margin-top: -55px;\n  top: 0;\n  display: flex;\n  justify-content: center;\n"], ["\n  /* position: absolute;\n  left: 50%;\n  transform: translateX(-50%); */\n  margin-top: -55px;\n  top: 0;\n  display: flex;\n  justify-content: center;\n"])));
var Description = styled__default['default'](Text)(templateObject_3$f || (templateObject_3$f = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  padding: 16px 26px 30px;\n  letter-spacing: 0.05em;\n  text-align: center;\n  font-weight: normal;\n"], ["\n  display: flex;\n  justify-content: center;\n  padding: 16px 26px 30px;\n  letter-spacing: 0.05em;\n  text-align: center;\n  font-weight: normal;\n"])));
var Title$1 = styled__default['default'](Text)(templateObject_4$e || (templateObject_4$e = __makeTemplateObject(["\n  text-align: center;\n  margin-top: 15px;\n"], ["\n  text-align: center;\n  margin-top: 15px;\n"])));
var LinkBlock = styled__default['default'].div(templateObject_5$a || (templateObject_5$a = __makeTemplateObject(["\n  margin-top: 28px;\n  text-align: center;\n  margin: 28px auto 0;\n"], ["\n  margin-top: 28px;\n  text-align: center;\n  margin: 28px auto 0;\n"])));
var Link = styled__default['default'](Text)(templateObject_6$6 || (templateObject_6$6 = __makeTemplateObject(["\n  cursor: pointer;\n"], ["\n  cursor: pointer;\n"])));
var CongratulateModal = function (_a) {
    var title = _a.title, buttonText = _a.buttonText, description = _a.description; _a.handleConfirm; _a.disabledButton; var onDismiss = _a.onDismiss, props = __rest(_a, ["title", "buttonText", "description", "handleConfirm", "disabledButton", "onDismiss"]);
    return (React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement(Modal, __assign({ welcome: true, onDismiss: onDismiss }, props),
            React__default['default'].createElement(Wrap$3, null,
                React__default['default'].createElement(GiftImg, null,
                    React__default['default'].createElement("img", { src: Gift3 })),
                React__default['default'].createElement(Title$1, null, title),
                React__default['default'].createElement(Description, { size: "sm" }, description),
                React__default['default'].createElement(LinkBlock, null,
                    React__default['default'].createElement(Link, { color: "#47DA3B", onClick: onDismiss }, buttonText))))));
};
var templateObject_1$q, templateObject_2$l, templateObject_3$f, templateObject_4$e, templateObject_5$a, templateObject_6$6;

var CardIndicator = function (_a) {
    var data = _a.data, canClaim = _a.canClaim, disabledTopCards = _a.disabledTopCards, id = _a.id;
    return (React__default['default'].createElement("div", { style: { position: "relative" } },
        React__default['default'].createElement(Card$3, { id: id },
            React__default['default'].createElement(Text, { color: "greyText", fontSize: "14px", lineHeight: "24px", letterSpacing: "-0.02em", marginBottom: "2px", fontWeight: "400" }, data.text),
            React__default['default'].createElement(Text, { fontSize: "24px", lineHeight: "32px", letterSpacing: "-0.02em", fontWeight: "400" }, data.value)),
        " ",
        React__default['default'].createElement(Claimed$2, { canClaim: canClaim, disabledTopCards: !!disabledTopCards, id: id })));
};
var Card$3 = styled__default['default'].div(templateObject_1$p || (templateObject_1$p = __makeTemplateObject(["\n  position: relative;\n  padding: 18px 24px;\n  background: ", ";\n  box-shadow: ", ";\n  border-radius: 20px;\n"], ["\n  position: relative;\n  padding: 18px 24px;\n  background: ", ";\n  box-shadow: ", ";\n  border-radius: 20px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.dark;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow2;
});
var Claimed$2 = styled__default['default'].div(templateObject_2$k || (templateObject_2$k = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  backdrop-filter: blur(15px);\n  background: ", ";\n  transition: 0.3s;\n  opacity: ", ";\n  pointer-events: ", ";\n  border-radius: 20px;\n  z-index: 1;\n  background-image: ", ";\n  background-repeat: no-repeat;\n  background-position: 50% 0;\n  filter: blur(10px);\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  backdrop-filter: blur(15px);\n  background: ", ";\n  transition: 0.3s;\n  opacity: ", ";\n  pointer-events: ", ";\n  border-radius: 20px;\n  z-index: 1;\n  background-image: ", ";\n  background-repeat: no-repeat;\n  background-position: 50% 0;\n  filter: blur(10px);\n"])), function (_a) {
    var theme = _a.theme;
    return polished.transparentize(0.5, theme.colors.bgGray);
}, function (_a) {
    var canClaim = _a.canClaim, disabledTopCards = _a.disabledTopCards;
    return (disabledTopCards || !canClaim ? 1 : 0);
}, function (_a) {
    var canClaim = _a.canClaim, disabledTopCards = _a.disabledTopCards;
    return (disabledTopCards || !canClaim ? "auto" : "none");
}, function (_a) {
    var id = _a.id;
    return "-moz-element(#" + id + ")";
});
var templateObject_1$p, templateObject_2$k;

var CardTimer = function (_a) {
    var data = _a.data, canClaim = _a.canClaim, disabledTopCards = _a.disabledTopCards;
    var progress = 100 - (data.timeSecond * 100) / data.totalSeconds;
    var Progress = function () { return (React__default['default'].createElement(ProgressTrack$1, null,
        React__default['default'].createElement(ProgressBar$1, { progress: progress }))); };
    return (React__default['default'].createElement("div", { style: { position: "relative" } },
        React__default['default'].createElement(Wrapper$6, { canClaim: canClaim, disabledTopCards: !!disabledTopCards, id: "CardTimer" },
            React__default['default'].createElement(Inner, { className: "card-inner" },
                React__default['default'].createElement(CardFront, { canClaim: canClaim, disabledTopCards: !!disabledTopCards },
                    React__default['default'].createElement(Text, { color: "greyText", fontSize: "14px", lineHeight: "24px", letterSpacing: "-0.02em", marginBottom: "2px", fontWeight: "400" }, data.textBack),
                    React__default['default'].createElement(Text, { fontSize: "24px", lineHeight: "32px", letterSpacing: "-0.02em", fontWeight: "400" }, data.textStage),
                    React__default['default'].createElement(Progress, null)),
                React__default['default'].createElement(CardBack, { canClaim: canClaim, disabledTopCards: !!disabledTopCards },
                    React__default['default'].createElement(Text, { color: "greyText", fontSize: "14px", lineHeight: "24px", letterSpacing: "-0.02em", marginBottom: "2px", fontWeight: "400" }, data.textFront),
                    React__default['default'].createElement(TimerSimple, { time: data.timeSecond, texts: data.textsTime }),
                    React__default['default'].createElement(Progress, null)))),
        React__default['default'].createElement(Claimed$1, { canClaim: canClaim, disabledTopCards: !!disabledTopCards })));
};
var CardFront = styled__default['default'].div(templateObject_1$o || (templateObject_1$o = __makeTemplateObject(["\n  width: 100%;\n  padding: 18px 24px 10px;\n  background: ", ";\n  box-shadow: ", ";\n  border-radius: 20px;\n  left: 50%;\n  transform: translateX(-50%);\n  position: absolute;\n  top: 0;\n  transition: 0;\n  backface-visibility: ", ";\n"], ["\n  width: 100%;\n  padding: 18px 24px 10px;\n  background: ", ";\n  box-shadow: ", ";\n  border-radius: 20px;\n  left: 50%;\n  transform: translateX(-50%);\n  position: absolute;\n  top: 0;\n  transition: 0;\n  backface-visibility: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.dark;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow2;
}, function (_a) {
    var canClaim = _a.canClaim, disabledTopCards = _a.disabledTopCards;
    return (disabledTopCards || !canClaim ? "" : "hidden");
});
var CardBack = styled__default['default'](CardFront)(templateObject_2$j || (templateObject_2$j = __makeTemplateObject(["\n  transform: rotateY(180deg) translateX(50%);\n"], ["\n  transform: rotateY(180deg) translateX(50%);\n"])));
var Wrapper$6 = styled__default['default'].div(templateObject_3$e || (templateObject_3$e = __makeTemplateObject(["\n  position: relative;\n  perspective: 1000px;\n  min-height: 97px;\n  width: 100%;\n  border-radius: 20px;\n  &:hover {\n    & .card-inner {\n      transform: ", ";\n    }\n  }\n"], ["\n  position: relative;\n  perspective: 1000px;\n  min-height: 97px;\n  width: 100%;\n  border-radius: 20px;\n  &:hover {\n    & .card-inner {\n      transform: ", ";\n    }\n  }\n"])), function (_a) {
    var canClaim = _a.canClaim, disabledTopCards = _a.disabledTopCards;
    return (disabledTopCards || !canClaim ? "none" : "rotateY(180deg)");
});
var Inner = styled__default['default'].div(templateObject_4$d || (templateObject_4$d = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  height: 100%;\n  position: relative;\n  transform-style: preserve-3d;\n  transition: transform 600ms;\n  border-radius: 15px;\n  box-sizing: border-box;\n"], ["\n  display: flex;\n  justify-content: center;\n  height: 100%;\n  position: relative;\n  transform-style: preserve-3d;\n  transition: transform 600ms;\n  border-radius: 15px;\n  box-sizing: border-box;\n"])));
var ProgressTrack$1 = styled__default['default'].div(templateObject_5$9 || (templateObject_5$9 = __makeTemplateObject(["\n  height: 2px;\n  width: 100%;\n  margin-top: 8px;\n  background: ", ";\n  box-shadow: ", ";\n  border-radius: 6px;\n"], ["\n  height: 2px;\n  width: 100%;\n  margin-top: 8px;\n  background: ", ";\n  box-shadow: ", ";\n  border-radius: 6px;\n"])), function (_a) {
    var theme = _a.theme;
    return polished.transparentize(0.9, theme.colors.greyBg2);
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow7;
});
var ProgressBar$1 = styled__default['default'].div(templateObject_6$5 || (templateObject_6$5 = __makeTemplateObject(["\n  height: 100%;\n  width: ", ";\n  background: ", ";\n  border-radius: inherit;\n"], ["\n  height: 100%;\n  width: ", ";\n  background: ", ";\n  border-radius: inherit;\n"])), function (_a) {
    var progress = _a.progress;
    return progress + "%";
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.greenBg2;
});
var Claimed$1 = styled__default['default'].div(templateObject_7$4 || (templateObject_7$4 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  backdrop-filter: blur(15px);\n  background: ", ";\n  transition: 0.3s;\n  opacity: ", ";\n  pointer-events: ", ";\n  border-radius: 20px;\n  z-index: 1;\n  background-image: ", ";\n  background-repeat: no-repeat;\n  background-position: 50% 0;\n  filter: blur(10px);\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  backdrop-filter: blur(15px);\n  background: ", ";\n  transition: 0.3s;\n  opacity: ", ";\n  pointer-events: ", ";\n  border-radius: 20px;\n  z-index: 1;\n  background-image: ", ";\n  background-repeat: no-repeat;\n  background-position: 50% 0;\n  filter: blur(10px);\n"])), function (_a) {
    var theme = _a.theme;
    return polished.transparentize(0.5, theme.colors.bgGray);
}, function (_a) {
    var canClaim = _a.canClaim, disabledTopCards = _a.disabledTopCards;
    return (disabledTopCards || !canClaim ? 1 : 0);
}, function (_a) {
    var canClaim = _a.canClaim, disabledTopCards = _a.disabledTopCards;
    return (disabledTopCards || !canClaim ? "auto" : "none");
}, "-moz-element(#CardTimer)");
var templateObject_1$o, templateObject_2$j, templateObject_3$e, templateObject_4$d, templateObject_5$9, templateObject_6$5, templateObject_7$4;

var ClaimTokens = function (_a) {
    var data = _a.data, texts = _a.texts, handleClaimTokens = _a.handleClaimTokens, disabledButton = _a.disabledButton, isLoading = _a.isLoading, endIcon = _a.endIcon, disabledCardClaimTokens = _a.disabledCardClaimTokens;
    var _b = React.useState(0), widthProgress = _b[0], setWidthProgress = _b[1];
    var numberConverter = function (string) { return +string.replace(/[^\d.]/g, ""); };
    React.useEffect(function () {
        setWidthProgress((numberConverter(data.totalRaised) * 100) / numberConverter(data.total));
    }, [data.totalRaised, data.total]);
    return (React__default['default'].createElement(Wrap$2, { style: { position: "relative" } },
        React__default['default'].createElement(Card$2, { disabledCard: disabledCardClaimTokens, id: "ClaimTokens" },
            React__default['default'].createElement(Row$2, null,
                React__default['default'].createElement(StyledTitle$2, null, texts.title),
                React__default['default'].createElement(StyledButton$3, { variant: "green", onClick: handleClaimTokens, disabled: disabledButton, isLoading: isLoading, endIcon: endIcon }, texts.button)),
            React__default['default'].createElement(ProgressWrap, null,
                React__default['default'].createElement(ProgressTrack, null,
                    React__default['default'].createElement(ProgressBar, { widthProgress: widthProgress || 0 },
                        React__default['default'].createElement(ProgressThumb, null,
                            React__default['default'].createElement(Icon$g, null)),
                        React__default['default'].createElement(TextHoverBlock, { widthProgress: widthProgress || 0 },
                            React__default['default'].createElement(StyledText, null, texts.totalRaised),
                            React__default['default'].createElement(StyledText, { color: "greyText3" }, data.totalRaised))))),
            React__default['default'].createElement(Texts, null,
                React__default['default'].createElement(TextBlock, null,
                    React__default['default'].createElement(StyledText, null,
                        texts.total,
                        " ",
                        data.total),
                    data.left && (React__default['default'].createElement(StyledText, { color: "greyText3" },
                        texts.left,
                        " ",
                        data.left))))),
        React__default['default'].createElement(Blur$1, { disabledCard: disabledCardClaimTokens })));
};
var Wrap$2 = styled__default['default'].div(templateObject_1$n || (templateObject_1$n = __makeTemplateObject(["\n  ", " {\n    grid-column: 1/3;\n  }\n"], ["\n  ", " {\n    grid-column: 1/3;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Blur$1 = styled__default['default'].div(templateObject_2$i || (templateObject_2$i = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  backdrop-filter: blur(15px);\n  background: ", ";\n  transition: 0.3s;\n  opacity: ", ";\n  pointer-events: ", ";\n  border-radius: 20px;\n  z-index: 1;\n  background-image: ", ";\n  background-repeat: no-repeat;\n  background-position: 50% 0;\n  filter: blur(10px);\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  backdrop-filter: blur(15px);\n  background: ", ";\n  transition: 0.3s;\n  opacity: ", ";\n  pointer-events: ", ";\n  border-radius: 20px;\n  z-index: 1;\n  background-image: ", ";\n  background-repeat: no-repeat;\n  background-position: 50% 0;\n  filter: blur(10px);\n"])), function (_a) {
    var theme = _a.theme;
    return polished.transparentize(0.5, theme.colors.bgGray);
}, function (_a) {
    var disabledCard = _a.disabledCard;
    return (disabledCard ? 1 : 0);
}, function (_a) {
    var disabledCard = _a.disabledCard;
    return (disabledCard ? "auto" : "none");
}, "-moz-element(#ClaimTokens)");
var Card$2 = styled__default['default'].div(templateObject_3$d || (templateObject_3$d = __makeTemplateObject(["\n  position: relative;\n  padding: 35px 25px;\n  background: ", ";\n  border-radius: 20px;\n  ", " {\n    grid-column: 1/3;\n  }\n"], ["\n  position: relative;\n  padding: 35px 25px;\n  background: ", ";\n  border-radius: 20px;\n  ", " {\n    grid-column: 1/3;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.dark;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var StyledTitle$2 = styled__default['default'](Text)(templateObject_4$c || (templateObject_4$c = __makeTemplateObject(["\n  width: 100%;\n  margin-bottom: 22px;\n  font-size: 22px;\n  line-height: 32px;\n  letter-spacing: -0.02em;\n  font-weight: 400;\n  ", " {\n    width: auto;\n    margin-bottom: 0px;\n    font-size: 24px;\n  }\n"], ["\n  width: 100%;\n  margin-bottom: 22px;\n  font-size: 22px;\n  line-height: 32px;\n  letter-spacing: -0.02em;\n  font-weight: 400;\n  ", " {\n    width: auto;\n    margin-bottom: 0px;\n    font-size: 24px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Row$2 = styled__default['default'].div(templateObject_5$8 || (templateObject_5$8 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  margin-bottom: 30px;\n  ", " {\n    flex-wrap: nowrap;\n    margin-bottom: 47px;\n  }\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  margin-bottom: 30px;\n  ", " {\n    flex-wrap: nowrap;\n    margin-bottom: 47px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var ProgressWrap = styled__default['default'].div(templateObject_6$4 || (templateObject_6$4 = __makeTemplateObject(["\n  padding: 7px 9px;\n  margin-bottom: 10px;\n  box-shadow: ", ";\n  border-radius: 10px;\n  background: ", ";\n"], ["\n  padding: 7px 9px;\n  margin-bottom: 10px;\n  box-shadow: ", ";\n  border-radius: 10px;\n  background: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow7;
}, function (_a) {
    var theme = _a.theme;
    return polished.transparentize(0.9, theme.colors.greyBg2);
});
var ProgressTrack = styled__default['default'].div(templateObject_7$3 || (templateObject_7$3 = __makeTemplateObject(["\n  width: 100%;\n  height: 16px;\n  background: ", ";\n  border-radius: 6px;\n"], ["\n  width: 100%;\n  height: 16px;\n  background: ", ";\n  border-radius: 6px;\n"])), function (_a) {
    var theme = _a.theme;
    return polished.transparentize(0.5, theme.colors.greenBg2);
});
var ProgressBar = styled__default['default'].div(templateObject_8$3 || (templateObject_8$3 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  justify-content: ", ";\n  align-items: center;\n  width: ", ";\n  height: inherit;\n  background: ", ";\n  border-radius: 6px;\n  transition: 0.3s;\n"], ["\n  position: relative;\n  display: flex;\n  justify-content: ", ";\n  align-items: center;\n  width: ", ";\n  height: inherit;\n  background: ", ";\n  border-radius: 6px;\n  transition: 0.3s;\n"])), function (_a) {
    var widthProgress = _a.widthProgress;
    return (widthProgress <= 2 ? "flex-start" : "flex-end");
}, function (_a) {
    var widthProgress = _a.widthProgress;
    return widthProgress + "%" || 0;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.greenBg2;
});
var ProgressThumb = styled__default['default'].div(templateObject_9$3 || (templateObject_9$3 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  width: 25px;\n  height: 25px;\n  background: ", ";\n  border-radius: 50%;\n  &::before {\n    content: \"\";\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 44px;\n    height: 44px;\n    background: ", ";\n    border-radius: 50%;\n  }\n"], ["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  width: 25px;\n  height: 25px;\n  background: ", ";\n  border-radius: 50%;\n  &::before {\n    content: \"\";\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 44px;\n    height: 44px;\n    background: ", ";\n    border-radius: 50%;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, function (_a) {
    var theme = _a.theme;
    return polished.transparentize(0.92, theme.colors.greenBg2);
});
var Texts = styled__default['default'].div(templateObject_10$1 || (templateObject_10$1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  text-align: right;\n"], ["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  text-align: right;\n"])));
var TextBlock = styled__default['default'].div(templateObject_11$1 || (templateObject_11$1 = __makeTemplateObject(["\n  padding: 0 10px;\n"], ["\n  padding: 0 10px;\n"])));
var TextHoverBlock = styled__default['default'].div(templateObject_12$1 || (templateObject_12$1 = __makeTemplateObject(["\n  position: absolute;\n  top: 30px;\n  right: ", ";\n  min-width: 130px;\n  padding: 3px 3px;\n  background: ", ";\n  border-radius: 10px;\n  transition: 0.3s;\n  opacity: 0;\n  text-align: ", ";\n  ", ":hover & {\n    transition: 0.3s;\n    opacity: 1;\n  }\n"], ["\n  position: absolute;\n  top: 30px;\n  right: ", ";\n  min-width: 130px;\n  padding: 3px 3px;\n  background: ", ";\n  border-radius: 10px;\n  transition: 0.3s;\n  opacity: 0;\n  text-align: ", ";\n  ", ":hover & {\n    transition: 0.3s;\n    opacity: 1;\n  }\n"])), function (_a) {
    var widthProgress = _a.widthProgress;
    return (widthProgress >= 50 ? 0 : "-130px");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.dark;
}, function (_a) {
    var widthProgress = _a.widthProgress;
    return (widthProgress >= 50 ? "right" : "left");
}, ProgressBar);
var StyledText = styled__default['default'](Text)(templateObject_13$1 || (templateObject_13$1 = __makeTemplateObject(["\n  font-size: 10px;\n  line-height: 19px;\n  letter-spacing: 0.13em;\n  text-transform: uppercase;\n  font-weight: 400;\n"], ["\n  font-size: 10px;\n  line-height: 19px;\n  letter-spacing: 0.13em;\n  text-transform: uppercase;\n  font-weight: 400;\n"])));
var StyledButton$3 = styled__default['default'](Button$9)(templateObject_14$1 || (templateObject_14$1 = __makeTemplateObject(["\n  width: 100%;\n  font-weight: 400;\n  ", " {\n    width: auto;\n    margin-left: 43px;\n  }\n  &:disabled {\n    opacity: 1;\n    background: ", ";\n  }\n"], ["\n  width: 100%;\n  font-weight: 400;\n  ", " {\n    width: auto;\n    margin-left: 43px;\n  }\n  &:disabled {\n    opacity: 1;\n    background: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return polished.transparentize(0.85, theme.colors.text);
});
var templateObject_1$n, templateObject_2$i, templateObject_3$d, templateObject_4$c, templateObject_5$8, templateObject_6$4, templateObject_7$3, templateObject_8$3, templateObject_9$3, templateObject_10$1, templateObject_11$1, templateObject_12$1, templateObject_13$1, templateObject_14$1;

var BG = "4277beef4ce8429d.png";

var MP = "e0d66030e20df009.png";

var MarketplaceLink = function (_a) {
    var link = _a.link, text = _a.text, images = _a.images;
    return (React__default['default'].createElement(Card$1, { src: (images === null || images === void 0 ? void 0 : images.bg) || BG, href: link },
        React__default['default'].createElement(StyledTitle$1, null, text),
        React__default['default'].createElement("img", { alt: "", src: (images === null || images === void 0 ? void 0 : images.mp) || MP })));
};
var Card$1 = styled__default['default'].a(templateObject_1$m || (templateObject_1$m = __makeTemplateObject(["\n  position: relative;\n  display: block;\n  min-height: 250px;\n  padding: 18px 24px;\n  background: ", ";\n  background-color: ", ";\n  border-radius: 20px;\n  & img {\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n    bottom: 0;\n    ", " {\n      right: -41px;\n      left: auto;\n      transform: none;\n    }\n  }\n"], ["\n  position: relative;\n  display: block;\n  min-height: 250px;\n  padding: 18px 24px;\n  background: ", ";\n  background-color: ", ";\n  border-radius: 20px;\n  & img {\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n    bottom: 0;\n    ", " {\n      right: -41px;\n      left: auto;\n      transform: none;\n    }\n  }\n"])), function (_a) {
    var src = _a.src;
    return "url(" + src + ") no-repeat left center /cover";
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.bgGray;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var StyledTitle$1 = styled__default['default'](Text)(templateObject_2$h || (templateObject_2$h = __makeTemplateObject(["\n  font-size: 22px;\n  line-height: 32px;\n  letter-spacing: -0.02em;\n  font-weight: 400;\n  ", " {\n    font-size: 24px;\n  }\n"], ["\n  font-size: 22px;\n  line-height: 32px;\n  letter-spacing: -0.02em;\n  font-weight: 400;\n  ", " {\n    font-size: 24px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var templateObject_1$m, templateObject_2$h;

var GIFT = "807ae577acdaa994.png";

var GIFT2 = "13c5906f9a4df20c.png";

var TakeGift = function (_a) {
    var handleTakeGift = _a.handleTakeGift, texts = _a.texts, claimedGift = _a.claimedGift, images = _a.images, giftLoader = _a.giftLoader;
    return (React__default['default'].createElement("div", { style: { position: "relative" } },
        React__default['default'].createElement(Card, { id: "TakeGift" },
            React__default['default'].createElement(StyledTitle, null, texts.title),
            React__default['default'].createElement("img", { alt: "", src: (images === null || images === void 0 ? void 0 : images.gift) || GIFT }),
            React__default['default'].createElement(StyledButton$2, { variant: "white", onClick: handleTakeGift }, texts.button)),
        React__default['default'].createElement(BlurWrapper, { claimedGift: claimedGift, giftLoader: giftLoader }),
        React__default['default'].createElement(Claimed, { giftLoader: giftLoader },
            React__default['default'].createElement(Loader$1, null)),
        React__default['default'].createElement(Claimed, { claimedGift: claimedGift },
            React__default['default'].createElement("img", { alt: "", src: (images === null || images === void 0 ? void 0 : images.gift2) || GIFT2 }),
            React__default['default'].createElement(Text, { fontSize: "24px", lineHeight: "32px", letterSpacing: "-0.02em", textAlign: "center" }, texts.claimed))));
};
var Card = styled__default['default'].div(templateObject_1$l || (templateObject_1$l = __makeTemplateObject(["\n  position: relative;\n  display: block;\n  padding: 18px 24px;\n  background: ", ";\n  border-radius: 20px;\n  & img {\n    display: block;\n    margin: 0 auto 6px;\n  }\n"], ["\n  position: relative;\n  display: block;\n  padding: 18px 24px;\n  background: ", ";\n  border-radius: 20px;\n  & img {\n    display: block;\n    margin: 0 auto 6px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.greenGradient3;
});
var StyledTitle = styled__default['default'](Text)(templateObject_2$g || (templateObject_2$g = __makeTemplateObject(["\n  margin-bottom: 7px;\n  font-size: 22px;\n  line-height: 32px;\n  letter-spacing: -0.02em;\n  font-weight: 400;\n  ", " {\n    font-size: 24px;\n  }\n"], ["\n  margin-bottom: 7px;\n  font-size: 22px;\n  line-height: 32px;\n  letter-spacing: -0.02em;\n  font-weight: 400;\n  ", " {\n    font-size: 24px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var StyledButton$2 = styled__default['default'](Button$9)(templateObject_3$c || (templateObject_3$c = __makeTemplateObject(["\n  width: 100%;\n  font-weight: 400;\n"], ["\n  width: 100%;\n  font-weight: 400;\n"])));
var Claimed = styled__default['default'].div(templateObject_4$b || (templateObject_4$b = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  background: ", ";\n  transition: 0.3s;\n  opacity: ", ";\n  pointer-events: ", ";\n  border-radius: 20px;\n  z-index: 2;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  background: ", ";\n  transition: 0.3s;\n  opacity: ", ";\n  pointer-events: ", ";\n  border-radius: 20px;\n  z-index: 2;\n"])), function (_a) {
    var theme = _a.theme;
    return polished.transparentize(0.5, theme.colors.bgGray);
}, function (_a) {
    var claimedGift = _a.claimedGift, giftLoader = _a.giftLoader;
    return (claimedGift || giftLoader ? 1 : 0);
}, function (_a) {
    var claimedGift = _a.claimedGift, giftLoader = _a.giftLoader;
    return (claimedGift || giftLoader ? "auto" : "none");
});
var BlurWrapper = styled__default['default'].div(templateObject_5$7 || (templateObject_5$7 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  backdrop-filter: blur(15px);\n  background: ", ";\n  transition: 0.3s;\n  opacity: ", ";\n  pointer-events: ", ";\n  border-radius: 20px;\n  z-index: 1;\n  background-image: ", ";\n  background-repeat: no-repeat;\n  background-position: 50% 0;\n  filter: blur(6px);\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  backdrop-filter: blur(15px);\n  background: ", ";\n  transition: 0.3s;\n  opacity: ", ";\n  pointer-events: ", ";\n  border-radius: 20px;\n  z-index: 1;\n  background-image: ", ";\n  background-repeat: no-repeat;\n  background-position: 50% 0;\n  filter: blur(6px);\n"])), function (_a) {
    var theme = _a.theme;
    return polished.transparentize(0.5, theme.colors.bgGray);
}, function (_a) {
    var claimedGift = _a.claimedGift, giftLoader = _a.giftLoader;
    return (claimedGift || giftLoader ? 1 : 0);
}, function (_a) {
    var claimedGift = _a.claimedGift, giftLoader = _a.giftLoader;
    return (claimedGift || giftLoader ? "auto" : "none");
}, "-moz-element(#TakeGift)");
var templateObject_1$l, templateObject_2$g, templateObject_3$c, templateObject_4$b, templateObject_5$7;

var TokenOnPoolz = function (_a) {
    var images = _a.images, texts = _a.texts, linkClaimTokens = _a.linkClaimTokens, disabledCardClaimTokens = _a.disabledCardClaimTokens;
    return (React__default['default'].createElement(Wrap$1, { style: { position: "relative" } },
        React__default['default'].createElement(Wrapper$5, { disabledCard: disabledCardClaimTokens, id: "TokenOnPoolz" },
            React__default['default'].createElement(CardStyle, { src: (images === null || images === void 0 ? void 0 : images.bg) || BG },
                React__default['default'].createElement(StyledTitle$2, { size: "xl" }, texts.title),
                React__default['default'].createElement(Text, { margin: "42px 0" }, texts.description),
                React__default['default'].createElement(StyledButton$1, { as: "a", margin: "0 auto", minWidth: "204px", variant: "green", href: linkClaimTokens || "#" }, texts.button))),
        React__default['default'].createElement(Blur, { disabledCard: disabledCardClaimTokens })));
};
var Wrap$1 = styled__default['default'].div(templateObject_1$k || (templateObject_1$k = __makeTemplateObject(["\n  ", " {\n    grid-column: 1/3;\n  }\n"], ["\n  ", " {\n    grid-column: 1/3;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Blur = styled__default['default'].div(templateObject_2$f || (templateObject_2$f = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  backdrop-filter: blur(15px);\n  background: ", ";\n  transition: 0.3s;\n  opacity: ", ";\n  pointer-events: ", ";\n  border-radius: 20px;\n  z-index: 1;\n  background-image: ", ";\n  background-repeat: no-repeat;\n  background-position: 50% 0;\n  filter: blur(10px);\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  backdrop-filter: blur(15px);\n  background: ", ";\n  transition: 0.3s;\n  opacity: ", ";\n  pointer-events: ", ";\n  border-radius: 20px;\n  z-index: 1;\n  background-image: ", ";\n  background-repeat: no-repeat;\n  background-position: 50% 0;\n  filter: blur(10px);\n"])), function (_a) {
    var theme = _a.theme;
    return polished.transparentize(0.5, theme.colors.bgGray);
}, function (_a) {
    var disabledCard = _a.disabledCard;
    return (disabledCard ? 1 : 0);
}, function (_a) {
    var disabledCard = _a.disabledCard;
    return (disabledCard ? "auto" : "none");
}, "-moz-element(#TokenOnPoolz)");
var CardStyle = styled__default['default'].div(templateObject_3$b || (templateObject_3$b = __makeTemplateObject(["\n  text-align: center;\n  padding: 20px 50px 21px;\n  height: 100%;\n  background: ", ";\n"], ["\n  text-align: center;\n  padding: 20px 50px 21px;\n  height: 100%;\n  background: ", ";\n"])), function (_a) {
    var src = _a.src;
    return "url(" + src + ") no-repeat left center /cover";
});
var Wrapper$5 = styled__default['default'].div(templateObject_4$a || (templateObject_4$a = __makeTemplateObject(["\n  position: relative;\n  background: ", ";\n  border-radius: 20px;\n  ", " {\n    grid-column: 1/3;\n  }\n"], ["\n  position: relative;\n  background: ", ";\n  border-radius: 20px;\n  ", " {\n    grid-column: 1/3;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.dark;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var StyledButton$1 = styled__default['default'](Button$9)(templateObject_5$6 || (templateObject_5$6 = __makeTemplateObject(["\n  display: block;\n  width: 100%;\n  padding: 14px;\n  margin: 0 auto;\n  font-weight: 400;\n  color: ", ";\n  background: ", ";\n  border-radius: 10px;\n  max-width: 204px;\n  font-size: 15px;\n  line-height: 19px;\n  text-align: center;\n  letter-spacing: 0.04em;\n"], ["\n  display: block;\n  width: 100%;\n  padding: 14px;\n  margin: 0 auto;\n  font-weight: 400;\n  color: ", ";\n  background: ", ";\n  border-radius: 10px;\n  max-width: 204px;\n  font-size: 15px;\n  line-height: 19px;\n  text-align: center;\n  letter-spacing: 0.04em;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.green;
});
var templateObject_1$k, templateObject_2$f, templateObject_3$b, templateObject_4$a, templateObject_5$6;

var VestingWidget = function (_a) {
    var dataClaimTokens = _a.dataClaimTokens, textsClaimTokens = _a.textsClaimTokens, handleClaimTokens = _a.handleClaimTokens, dataCardsIndicators = _a.dataCardsIndicators, textMarketplaceLink = _a.textMarketplaceLink, linkMarketplace = _a.linkMarketplace, textsTakeGift = _a.textsTakeGift, handleTakeGift = _a.handleTakeGift, claimedGift = _a.claimedGift, imagesGift = _a.imagesGift, imagesMarketplace = _a.imagesMarketplace, dataTimer = _a.dataTimer, canClaim = _a.canClaim, textsPoolz = _a.textsPoolz, linkClaimTokens = _a.linkClaimTokens, disabledButtonClaimTokens = _a.disabledButtonClaimTokens, isLoadingButtonClaimTokens = _a.isLoadingButtonClaimTokens, endIconButtonClaimTokens = _a.endIconButtonClaimTokens, disabledTopCards = _a.disabledTopCards, disabledCardClaimTokens = _a.disabledCardClaimTokens, giftLoader = _a.giftLoader;
    return (React__default['default'].createElement(Wrapper$4, null,
        React__default['default'].createElement(CardIndicator, { canClaim: canClaim, disabledTopCards: disabledTopCards, data: dataCardsIndicators[0], id: "CardIndicator-1" }),
        React__default['default'].createElement(CardIndicator, { canClaim: canClaim, disabledTopCards: disabledTopCards, data: dataCardsIndicators[1], id: "CardIndicator-2" }),
        React__default['default'].createElement(CardTimer, { canClaim: canClaim, disabledTopCards: disabledTopCards, data: dataTimer }),
        React__default['default'].createElement(CardIndicator, { canClaim: canClaim, disabledTopCards: disabledTopCards, data: dataCardsIndicators[2], id: "CardIndicator-3" }),
        !canClaim ? (React__default['default'].createElement(TokenOnPoolz, { texts: textsPoolz, images: imagesMarketplace, linkClaimTokens: linkClaimTokens, disabledCardClaimTokens: disabledCardClaimTokens })) : (React__default['default'].createElement(ClaimTokens, { data: dataClaimTokens, texts: textsClaimTokens, handleClaimTokens: handleClaimTokens, disabledButton: disabledButtonClaimTokens, isLoading: isLoadingButtonClaimTokens, endIcon: endIconButtonClaimTokens, disabledCardClaimTokens: disabledCardClaimTokens })),
        React__default['default'].createElement(MarketplaceLink, { text: textMarketplaceLink, link: linkMarketplace, images: imagesMarketplace }),
        React__default['default'].createElement(TakeGift, { giftLoader: giftLoader, texts: textsTakeGift, handleTakeGift: handleTakeGift, claimedGift: claimedGift, images: imagesGift })));
};
var Wrapper$4 = styled__default['default'].div(templateObject_1$j || (templateObject_1$j = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n  grid-gap: 30px 20px;\n  ", " {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  ", " {\n    grid-template-columns: repeat(4, 1fr);\n  }\n"], ["\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n  grid-gap: 30px 20px;\n  ", " {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  ", " {\n    grid-template-columns: repeat(4, 1fr);\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xl;
});
var templateObject_1$j;

var LobbyNav = function (_a) {
    var texts = _a.texts, handleJoin = _a.handleJoin, handleCreate = _a.handleCreate, imgJoin = _a.imgJoin, imgCreate = _a.imgCreate, isApprove = _a.isApprove, handleApprove = _a.handleApprove, propsWrapper = _a.propsWrapper;
    return (React__default['default'].createElement(NavBlock, __assign({}, propsWrapper),
        React__default['default'].createElement(Wrapper$3, { id: "LobbyNav" },
            React__default['default'].createElement(ButtonAdd, { onClick: handleJoin },
                React__default['default'].createElement(Text, { fontSize: "19px" }, texts.join),
                React__default['default'].createElement("img", { src: imgJoin || UNIT, alt: "avatar" })),
            React__default['default'].createElement(ButtonCreate, { onClick: handleCreate },
                React__default['default'].createElement(Text, { fontSize: "19px" }, texts.create),
                React__default['default'].createElement("img", { className: "right", src: imgCreate || CONTROLLER, alt: "avatar" }))),
        isApprove && (React__default['default'].createElement(React__default['default'].Fragment, null,
            React__default['default'].createElement(BlurBlock, null),
            React__default['default'].createElement(ButtonStyle$1, { onClick: handleApprove, variant: "green", maxWidth: "175px", width: "100%" }, texts.approve)))));
};
var NavBlock = styled__default['default'].div(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["\n  position: relative;\n  max-width: 222px;\n  overflow: hidden;\n  border-radius: 15px;\n  ", "\n  ", " {\n    max-width: 452px;\n  }\n"], ["\n  position: relative;\n  max-width: 222px;\n  overflow: hidden;\n  border-radius: 15px;\n  ", "\n  ", " {\n    max-width: 452px;\n  }\n"])), styledSystem.space, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var Wrapper$3 = styled__default['default'].div(templateObject_2$e || (templateObject_2$e = __makeTemplateObject(["\n  position: relative;\n  max-width: 222px;\n  margin: 0 auto;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  ", " {\n    max-width: 452px;\n  }\n"], ["\n  position: relative;\n  max-width: 222px;\n  margin: 0 auto;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  ", " {\n    max-width: 452px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var ButtonAdd = styled__default['default'].button(templateObject_3$a || (templateObject_3$a = __makeTemplateObject(["\n  margin: 0 0 16px;\n  max-width: 220px;\n  min-height: 220px;\n  width: 100%;\n  padding: 20px 24px;\n  background: ", ";\n  box-shadow: ", ";\n  border-radius: 15px;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  position: relative;\n  flex: none;\n  & img {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n  }\n  ", " {\n    margin: 0 12px 0 0;\n  }\n"], ["\n  margin: 0 0 16px;\n  max-width: 220px;\n  min-height: 220px;\n  width: 100%;\n  padding: 20px 24px;\n  background: ", ";\n  box-shadow: ", ";\n  border-radius: 15px;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  position: relative;\n  flex: none;\n  & img {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n  }\n  ", " {\n    margin: 0 12px 0 0;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.bgGrey2;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow2;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var ButtonCreate = styled__default['default'](ButtonAdd)(templateObject_4$9 || (templateObject_4$9 = __makeTemplateObject(["\n  margin: 0 0 16px;\n  background: ", ";\n  & img {\n    left: auto;\n    right: 0;\n  }\n  ", " {\n    margin: 0;\n  }\n"], ["\n  margin: 0 0 16px;\n  background: ", ";\n  & img {\n    left: auto;\n    right: 0;\n  }\n  ", " {\n    margin: 0;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.green;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var ButtonStyle$1 = styled__default['default'](Button$9)(templateObject_5$5 || (templateObject_5$5 = __makeTemplateObject(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 2;\n"], ["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 2;\n"])));
var BlurBlock = styled__default['default'].div(templateObject_6$3 || (templateObject_6$3 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  backdrop-filter: blur(10px);\n  background: ", ";\n  transition: 0.3s;\n  opacity: 1;\n  border-radius: 15px;\n  z-index: 1;\n  background-image: ", ";\n  background-repeat: no-repeat;\n  background-position: 50% 0;\n  filter: blur(10px);\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  backdrop-filter: blur(10px);\n  background: ", ";\n  transition: 0.3s;\n  opacity: 1;\n  border-radius: 15px;\n  z-index: 1;\n  background-image: ", ";\n  background-repeat: no-repeat;\n  background-position: 50% 0;\n  filter: blur(10px);\n"])), function (_a) {
    var theme = _a.theme;
    return polished.transparentize(0.5, theme.colors.bgGray);
}, "-moz-element(#LobbyNav)");
var templateObject_1$i, templateObject_2$e, templateObject_3$a, templateObject_4$9, templateObject_5$5, templateObject_6$3;

var LobbyListItem = function (_a) {
    _a.epoch; var creator = _a.creator, bet = _a.bet, startTime = _a.startTime; _a.status; var texts = _a.texts, handleButton = _a.handleButton;
    // {
    //   "epoch": 4,
    //   "creator": "0x049900f4204604c52BF76Ba61e72a43e04B0AA54",
    //   "bet": "10000000000000000",
    //   "startTime": null,
    //   "status": "CREATED"
    // },
    return (React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement(Wrapper$2, null,
            React__default['default'].createElement(Icons, null,
                React__default['default'].createElement(Icon1, null,
                    React__default['default'].createElement("img", { src: AVATAR_PLAYER })),
                React__default['default'].createElement(Icon2, null,
                    React__default['default'].createElement("img", { src: AVATAR_PLAYER_2 }))),
            React__default['default'].createElement(Player, null,
                React__default['default'].createElement(TextTitle, null, texts.player),
                React__default['default'].createElement(TextStyle, null, ellipsis(creator))),
            React__default['default'].createElement(Bet, null,
                React__default['default'].createElement(TextTitle, null, texts.bet),
                React__default['default'].createElement(BetValue, null, bet)),
            React__default['default'].createElement(Time, null,
                React__default['default'].createElement(TextTitle, null, texts.time),
                React__default['default'].createElement(TimerNotSolidWithoutBg, { color: !startTime || startTime < 1 ? baseColors.whiteRgba2 : lightColors.text, marginPoint: "0 18px", width: "186px", borderRadius: "7px", background: lightColors.buttonBg, height: "30px", time: 0, widthWrapper: "186px" })),
            React__default['default'].createElement(ButtonStyle, { onClick: handleButton, variant: "green" },
                React__default['default'].createElement(TextButton, null, texts.join)))));
};
var Wrapper$2 = styled__default['default'].div(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: 2.5fr 2fr 2.5fr;\n  gap: 0 20px;\n  align-items: flex-end;\n  padding: 10px 14px 14px;\n  background: ", ";\n  border-radius: 15px;\n  box-sizing: border-box;\n  margin-bottom: 15px;\n  &:last-child {\n    margin-bottom: 0;\n  }\n  ", " {\n    padding: 18px 33px 18px 38px;\n  }\n  ", " {\n    grid-template-columns: 1.5fr 1fr 2fr 2.5fr;\n    gap: 0 15px;\n    align-items: flex-start;\n    margin-bottom: 10px;\n  }\n  ", " {\n    grid-template-columns: 0.7fr 2fr 2fr 3.5fr 2.5fr;\n    gap: 0 15px;\n  } ;\n"], ["\n  display: grid;\n  grid-template-columns: 2.5fr 2fr 2.5fr;\n  gap: 0 20px;\n  align-items: flex-end;\n  padding: 10px 14px 14px;\n  background: ", ";\n  border-radius: 15px;\n  box-sizing: border-box;\n  margin-bottom: 15px;\n  &:last-child {\n    margin-bottom: 0;\n  }\n  ", " {\n    padding: 18px 33px 18px 38px;\n  }\n  ", " {\n    grid-template-columns: 1.5fr 1fr 2fr 2.5fr;\n    gap: 0 15px;\n    align-items: flex-start;\n    margin-bottom: 10px;\n  }\n  ", " {\n    grid-template-columns: 0.7fr 2fr 2fr 3.5fr 2.5fr;\n    gap: 0 15px;\n  } ;\n"])), function (_a) {
    _a.theme;
    return lightColors.cardBg;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var Icons = styled__default['default'].div(templateObject_2$d || (templateObject_2$d = __makeTemplateObject(["\n  width: 48px;\n  height: 48px;\n  position: relative;\n  display: none;\n  ", " {\n    display: block;\n  }\n"], ["\n  width: 48px;\n  height: 48px;\n  position: relative;\n  display: none;\n  ", " {\n    display: block;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var Icon1 = styled__default['default'].div(templateObject_3$9 || (templateObject_3$9 = __makeTemplateObject(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  box-shadow: ", ";\n  border-radius: 9px;\n"], ["\n  position: absolute;\n  left: 0;\n  top: 0;\n  box-shadow: ", ";\n  border-radius: 9px;\n"])), function (_a) {
    _a.theme;
    return lightColors.boxShadow3;
});
var Icon2 = styled__default['default'](Icon1)(templateObject_4$8 || (templateObject_4$8 = __makeTemplateObject(["\n  left: auto;\n  bottom: 0;\n  top: auto;\n  right: 0;\n"], ["\n  left: auto;\n  bottom: 0;\n  top: auto;\n  right: 0;\n"])));
var Player = styled__default['default'].div(templateObject_5$4 || (templateObject_5$4 = __makeTemplateObject([""], [""])));
var TextTitle = styled__default['default'](Text)(templateObject_6$2 || (templateObject_6$2 = __makeTemplateObject(["\n  font-size: 13px;\n  line-height: 16px;\n  letter-spacing: 0.05em;\n  margin-bottom: 3px;\n  color: ", ";\n"], ["\n  font-size: 13px;\n  line-height: 16px;\n  letter-spacing: 0.05em;\n  margin-bottom: 3px;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.greyText;
});
var Bet = styled__default['default'].div(templateObject_7$2 || (templateObject_7$2 = __makeTemplateObject([""], [""])));
var Time = styled__default['default'].div(templateObject_8$2 || (templateObject_8$2 = __makeTemplateObject(["\n  display: none;\n  ", " {\n    display: block;\n  } ;\n"], ["\n  display: none;\n  ", " {\n    display: block;\n  } ;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
styled__default['default'].div(templateObject_9$2 || (templateObject_9$2 = __makeTemplateObject(["\n  min-width: 120px;\n  width: 100%;\n  position: relative;\n  justify-self: end;\n  & img {\n    position: absolute;\n    top: -40px;\n    right: -30px;\n    display: ", ";\n    pointer-events: none;\n    width: 90px;\n  }\n  ", " {\n    min-width: 210px;\n    & img {\n      width: auto;\n      right: -50px;\n      top: -65px;\n    }\n  }\n"], ["\n  min-width: 120px;\n  width: 100%;\n  position: relative;\n  justify-self: end;\n  & img {\n    position: absolute;\n    top: -40px;\n    right: -30px;\n    display: ", ";\n    pointer-events: none;\n    width: 90px;\n  }\n  ", " {\n    min-width: 210px;\n    & img {\n      width: auto;\n      right: -50px;\n      top: -65px;\n    }\n  }\n"])), function (_a) {
    var win = _a.win;
    return (win ? "block" : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var ButtonStyle = styled__default['default'](Button$9)(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  padding: 8px;\n  height: 30px;\n  width: 100%;\n  ", " {\n    padding: 16px;\n    height: 50px;\n  } ;\n"], ["\n  padding: 8px;\n  height: 30px;\n  width: 100%;\n  ", " {\n    padding: 16px;\n    height: 50px;\n  } ;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var TextStyle = styled__default['default'](Text)(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  font-size: 11px;\n  ", " {\n    font-size: 15px;\n  } ;\n"], ["\n  font-size: 11px;\n  ", " {\n    font-size: 15px;\n  } ;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var BetValue = styled__default['default'](TextStyle)(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  padding: 6px;\n  width: 57px;\n  height: 30px;\n  background: ", ";\n  color: ", ";\n  border-radius: 7px;\n  text-align: center;\n"], ["\n  padding: 6px;\n  width: 57px;\n  height: 30px;\n  background: ", ";\n  color: ", ";\n  border-radius: 7px;\n  text-align: center;\n"])), function (_a) {
    _a.theme;
    return darkColors.gradients.greenGradient;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.green;
});
var TextButton = styled__default['default'](Text)(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  display: none;\n  ", " {\n    display: block;\n  } ;\n"], ["\n  display: none;\n  ", " {\n    display: block;\n  } ;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
styled__default['default'](Text)(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  display: block;\n  font-size: 11px;\n  ", " {\n    display: none;\n  } ;\n"], ["\n  display: block;\n  font-size: 11px;\n  ", " {\n    display: none;\n  } ;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
styled__default['default'].div(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n  min-width: 120px;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  flex-direction: column-reverse;\n  height: 100%;\n  flex: none;\n  ", " {\n    flex-direction: row;\n    align-items: center;\n    min-width: 210px;\n  } ;\n"], ["\n  min-width: 120px;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  flex-direction: column-reverse;\n  height: 100%;\n  flex: none;\n  ", " {\n    flex-direction: row;\n    align-items: center;\n    min-width: 210px;\n  } ;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
styled__default['default'].div(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n  width: 0;\n  margin-left: 0;\n  height: 40px;\n  transform: scale(0.4);\n  align-self: center;\n  ", " {\n    align-self: baseline;\n    margin-left: 10px;\n  }\n"], ["\n  width: 0;\n  margin-left: 0;\n  height: 40px;\n  transform: scale(0.4);\n  align-self: center;\n  ", " {\n    align-self: baseline;\n    margin-left: 10px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
styled__default['default'].div(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  display: ", ";\n  margin: 0 auto 7px;\n  ", " {\n    display: none;\n  }\n"], ["\n  display: flex;\n  justify-content: center;\n  display: ", ";\n  margin: 0 auto 7px;\n  ", " {\n    display: none;\n  }\n"])), function (_a) {
    var type = _a.type;
    return (type ? "none" : "block");
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var templateObject_1$h, templateObject_2$d, templateObject_3$9, templateObject_4$8, templateObject_5$4, templateObject_6$2, templateObject_7$2, templateObject_8$2, templateObject_9$2, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17;

var LobbyList = function (_a) {
    var data = _a.data, texts = _a.texts, handleButton = _a.handleButton;
    return (React__default['default'].createElement(Wrapper$1, null, data.map(function (item, i) { return (React__default['default'].createElement(LobbyListItem, { epoch: item.epoch, creator: item.creator, bet: item.bet, startTime: item.startTime, status: item.status, handleButton: handleButton, key: i, texts: texts })); })));
};
var Wrapper$1 = styled__default['default'].div(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n  max-width: 986px;\n"], ["\n  max-width: 986px;\n"])));
var templateObject_1$g;

var TabsSmall = function (_a) {
    var tabValue = _a.tabValue, onClick = _a.onClick, tabsList = _a.tabsList;
    return (React__default['default'].createElement(TabsWrap, { length: tabsList === null || tabsList === void 0 ? void 0 : tabsList.length }, tabsList === null || tabsList === void 0 ? void 0 : tabsList.map(function (item, i) { return (React__default['default'].createElement(Tab$1, { onClick: onClick, className: tabValue === item ? "active" : "", key: i, value: item }, item)); })));
};
var TabsWrap = styled__default['default'].div(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(", ", 1fr);\n  border-radius: 12px;\n"], ["\n  display: grid;\n  grid-template-columns: repeat(", ", 1fr);\n  border-radius: 12px;\n"])), function (_a) {
    var length = _a.length;
    return length || 2;
});
var Tab$1 = styled__default['default'].button(templateObject_2$c || (templateObject_2$c = __makeTemplateObject(["\n  padding: 6px;\n  background: ", ";\n  border-radius: 9px;\n  border: none;\n  color: ", ";\n  transition: 0.3s;\n  margin-right: 12px;\n  cursor: pointer;\n  &:last-child {\n    margin-right: 0;\n  }\n  &.active {\n    background: ", ";\n  }\n"], ["\n  padding: 6px;\n  background: ", ";\n  border-radius: 9px;\n  border: none;\n  color: ", ";\n  transition: 0.3s;\n  margin-right: 12px;\n  cursor: pointer;\n  &:last-child {\n    margin-right: 0;\n  }\n  &.active {\n    background: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.whiteRgba;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.green;
});
var templateObject_1$f, templateObject_2$c;

var LobbyCreatModal = function (_a) {
    var texts = _a.texts, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b, activeTab = _a.activeTab, toggleTab = _a.toggleTab, tabsList = _a.tabsList, handleCreate = _a.handleCreate, handleJoin = _a.handleJoin, propsCreateButton = _a.propsCreateButton;
    return (React__default['default'].createElement(Modal, { title: texts.title, onDismiss: onDismiss },
        React__default['default'].createElement(Content$1, null,
            React__default['default'].createElement(TitleTabs, null, texts.tabsTitle),
            React__default['default'].createElement(TabsSmall, { tabValue: activeTab, tabsList: tabsList, onClick: toggleTab }),
            React__default['default'].createElement(Buttons$1, null,
                React__default['default'].createElement(Button$9, { onClick: handleJoin, width: "100%", marginRight: "15px", variant: "option" },
                    React__default['default'].createElement(ButtonText, null, texts.join)),
                React__default['default'].createElement(Button$9, __assign({ onClick: handleCreate, width: "100%", variant: "green", padding: "0 10px" }, propsCreateButton),
                    React__default['default'].createElement(ButtonText, null, texts.create))))));
};
var Content$1 = styled__default['default'].div(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n  padding: 0 22px 30px 27px;\n"], ["\n  padding: 0 22px 30px 27px;\n"])));
var TitleTabs = styled__default['default'](Text)(templateObject_2$b || (templateObject_2$b = __makeTemplateObject(["\n  margin-bottom: 10px;\n  font-size: 15px;\n  line-height: 19px;\n  letter-spacing: 0.5px;\n  color: ", ";\n"], ["\n  margin-bottom: 10px;\n  font-size: 15px;\n  line-height: 19px;\n  letter-spacing: 0.5px;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textGray;
});
var Buttons$1 = styled__default['default'].div(templateObject_3$8 || (templateObject_3$8 = __makeTemplateObject(["\n  margin-top: 50px;\n  display: flex;\n  justify-content: center;\n  font-size: 11px;\n"], ["\n  margin-top: 50px;\n  display: flex;\n  justify-content: center;\n  font-size: 11px;\n"])));
var ButtonText = styled__default['default'](Text)(templateObject_4$7 || (templateObject_4$7 = __makeTemplateObject(["\n  font-size: 11px;\n  ", " {\n    font-size: 15px;\n  }\n"], ["\n  font-size: 11px;\n  ", " {\n    font-size: 15px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var templateObject_1$e, templateObject_2$b, templateObject_3$8, templateObject_4$7;

var ModalPlatform = function (_a) {
    var onDismiss = _a.onDismiss, title = _a.title, platforms = _a.platforms, linkAbout = _a.linkAbout;
    return (React__default['default'].createElement(Modal, { title: title, welcome: true, paddingTopHeader: "20px", onDismiss: onDismiss },
        React__default['default'].createElement(Wrap, null,
            React__default['default'].createElement(Buttons, null, platforms === null || platforms === void 0 ? void 0 : platforms.map(function (el, i) { return (React__default['default'].createElement(React__default['default'].Fragment, null,
                React__default['default'].createElement(Button, { target: "_blank", as: "a", href: el.link },
                    React__default['default'].createElement(TextStyled$1, null, el.name),
                    React__default['default'].createElement("img", { src: el.icon, alt: "" })))); })),
            linkAbout ? (React__default['default'].createElement(Link$2, { href: linkAbout, style: { margin: "0 auto" } }, linkAbout)) : null)));
};
var Wrap = styled__default['default'].div(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  padding: 0 20px 26px;\n"], ["\n  padding: 0 20px 26px;\n"])));
var Button = styled__default['default'].button(templateObject_2$a || (templateObject_2$a = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 9px 10px;\n  border-radius: 12px;\n  background: ", ";\n  cursor: pointer;\n  border: none;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 9px 10px;\n  border-radius: 12px;\n  background: ", ";\n  cursor: pointer;\n  border: none;\n"])), function (_a) {
    var theme = _a.theme;
    return polished.transparentize(0.85, theme.colors.contrast);
});
var Buttons = styled__default['default'].div(templateObject_3$7 || (templateObject_3$7 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 14px;\n  margin: 40px 0;\n"], ["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 14px;\n  margin: 40px 0;\n"])));
var TextStyled$1 = styled__default['default'](Text)(templateObject_4$6 || (templateObject_4$6 = __makeTemplateObject(["\n  flex-grow: 1;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n  text-align: center;\n"], ["\n  flex-grow: 1;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n  text-align: center;\n"])));
var templateObject_1$d, templateObject_2$a, templateObject_3$7, templateObject_4$6;

var Live = function (_a) {
    var dataLive = _a.dataLive, prizePoolText = _a.prizePoolText, prizePool = _a.prizePool;
    return (React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement(DataContent$1, null, dataLive.map(function (el, i) { return (React__default['default'].createElement(Row$1, { key: i },
            React__default['default'].createElement(Cell$1, null, el.icon),
            React__default['default'].createElement(Cell$1, null,
                React__default['default'].createElement(Text, { fontSize: "14px" }, el.value1)),
            React__default['default'].createElement(Cell$1, null,
                React__default['default'].createElement(Arrow, { variant: el.variant },
                    React__default['default'].createElement(Icon$n, null))),
            React__default['default'].createElement(Cell$1, null,
                React__default['default'].createElement(Text, { fontSize: "14px", color: "textGray" }, el.value2)),
            React__default['default'].createElement(Cell$1, null,
                React__default['default'].createElement(Block$3, { variant: el.variant }, el.value3)))); })),
        React__default['default'].createElement(Flex, null,
            React__default['default'].createElement(Text, { ml: "auto", color: "green", bold: true, fontSize: "14px", mr: "16px" }, prizePoolText),
            React__default['default'].createElement(Text, { color: "green", bold: true, fontSize: "14px" }, prizePool))));
};
var DataContent$1 = styled__default['default'].div(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  padding: 24px 0 16px;\n"], ["\n  padding: 24px 0 16px;\n"])));
var Row$1 = styled__default['default'].div(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"])));
var Arrow = styled__default['default'].div(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["\n  & svg {\n    width: 24px;\n    height: 24px;\n  }\n  & rect {\n    fill: ", ";\n  }\n  & path {\n    stroke: ", ";\n  }\n"], ["\n  & svg {\n    width: 24px;\n    height: 24px;\n  }\n  & rect {\n    fill: ", ";\n  }\n  & path {\n    stroke: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return variant === "win" ? polished.transparentize(0.85, theme.colors.green) : polished.transparentize(0.85, theme.colors.redBg);
}, function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return (variant === "win" ? theme.colors.green : theme.colors.redBg);
});
var Block$3 = styled__default['default'].div(templateObject_4$5 || (templateObject_4$5 = __makeTemplateObject(["\n  padding: 4px;\n  font-weight: 600;\n  font-size: 9px;\n  line-height: 11px;\n  border-radius: 4px;\n  background: ", ";\n  color: ", ";\n"], ["\n  padding: 4px;\n  font-weight: 600;\n  font-size: 9px;\n  line-height: 11px;\n  border-radius: 4px;\n  background: ", ";\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return variant === "win" ? polished.transparentize(0.85, theme.colors.green) : polished.transparentize(0.85, theme.colors.text);
}, function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return (variant === "win" ? theme.colors.green : theme.colors.text);
});
var Cell$1 = styled__default['default'].div(templateObject_5$3 || (templateObject_5$3 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  padding: 7px;\n  &:first-child {\n    padding-left: 0;\n  }\n  &:last-child {\n    padding-right: 0;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  padding: 7px;\n  &:first-child {\n    padding-left: 0;\n  }\n  &:last-child {\n    padding-right: 0;\n  }\n"])));
var templateObject_1$c, templateObject_2$9, templateObject_3$6, templateObject_4$5, templateObject_5$3;

var HistoryBlock = function (_a) {
    var handleToggleTab = _a.handleToggleTab, tabsList = _a.tabsList, tabActive = _a.tabActive, title = _a.title, dataLive = _a.dataLive, prizePoolText = _a.prizePoolText, prizePool = _a.prizePool;
    return (React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement(Block$2, null,
            React__default['default'].createElement(TabsWithMovingLine, { handleToggleTab: handleToggleTab, tabsList: tabsList, tabActive: tabActive, title: title }),
            tabActive === 0 && React__default['default'].createElement(Live, { dataLive: dataLive, prizePoolText: prizePoolText, prizePool: prizePool }))));
};
var Block$2 = styled__default['default'].div(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  width: 100%;\n  max-width: 367px;\n  min-height: 362px;\n  padding: 21px;\n  border-radius: 15px;\n  background: ", ";\n"], ["\n  width: 100%;\n  max-width: 367px;\n  min-height: 362px;\n  padding: 21px;\n  border-radius: 15px;\n  background: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.bgCard2;
});
var templateObject_1$b;

var Today = function (_a) {
    var dataToday = _a.dataToday;
    return (React__default['default'].createElement(DataContent, null,
        React__default['default'].createElement(Block$1, null),
        dataToday.map(function (el, i) { return (React__default['default'].createElement(Row, { key: i },
            React__default['default'].createElement(Cell, null,
                React__default['default'].createElement(Text, { fontSize: "14px", color: "textGray" }, i + 1)),
            React__default['default'].createElement(Cell, null, el.icon),
            React__default['default'].createElement(Cell, null,
                React__default['default'].createElement(TextStyled, { fontSize: "14px" }, el.address)),
            React__default['default'].createElement(Cell, null,
                React__default['default'].createElement(Text, { fontSize: "14px" }, el.value1)),
            React__default['default'].createElement(Cell, null,
                React__default['default'].createElement(Text, { fontSize: "14px" }, el.value2)))); })));
};
var DataContent = styled__default['default'].div(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  padding: 24px 0 16px;\n"], ["\n  padding: 24px 0 16px;\n"])));
var Row = styled__default['default'].div(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"])));
var Block$1 = styled__default['default'].div(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n  padding: 20px;\n  margin-bottom: 19px;\n  background: ", ";\n  border-radius: 10px;\n"], ["\n  padding: 20px;\n  margin-bottom: 19px;\n  background: ", ";\n  border-radius: 10px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.bgCard4;
});
var Cell = styled__default['default'].div(templateObject_4$4 || (templateObject_4$4 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  padding: 7px;\n  &:first-child {\n    padding-left: 0;\n  }\n  &:last-child {\n    padding-right: 0;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  padding: 7px;\n  &:first-child {\n    padding-left: 0;\n  }\n  &:last-child {\n    padding-right: 0;\n  }\n"])));
var TextStyled = styled__default['default'](Text)(templateObject_5$2 || (templateObject_5$2 = __makeTemplateObject(["\n  max-width: 79px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"], ["\n  max-width: 79px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"])));
var templateObject_1$a, templateObject_2$8, templateObject_3$5, templateObject_4$4, templateObject_5$2;

var WinnersBlock = function (_a) {
    var handleToggleTab = _a.handleToggleTab, tabsList = _a.tabsList, tabActive = _a.tabActive, title = _a.title, dataToday = _a.dataToday;
    return (React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement(Block, null,
            React__default['default'].createElement(TabsWithMovingLine, { handleToggleTab: handleToggleTab, tabsList: tabsList, tabActive: tabActive, title: title }),
            tabActive === 0 && React__default['default'].createElement(Today, { dataToday: dataToday }))));
};
var Block = styled__default['default'].div(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  width: 100%;\n  max-width: 367px;\n  min-height: 362px;\n  padding: 21px;\n  border-radius: 15px;\n  background: ", ";\n"], ["\n  width: 100%;\n  max-width: 367px;\n  min-height: 362px;\n  padding: 21px;\n  border-radius: 15px;\n  background: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.bgCard2;
});
var templateObject_1$9;

var PrizePoolBlock = function (_a) {
    var title = _a.title, value = _a.value, cardData1 = _a.cardData1, cardData2 = _a.cardData2, versus = _a.versus, leftContent = _a.leftContent, rightContent = _a.rightContent, time = _a.time, disabled = _a.disabled;
    var Card = function (_a) {
        var name = _a.name, coefficient = _a.coefficient, price = _a.price, priceValue = _a.priceValue, margin = _a.margin;
        return (React__default['default'].createElement(CardWrapper, { margin: margin },
            React__default['default'].createElement(Flex, { alignItems: "center", justifyContent: "space-between" },
                React__default['default'].createElement(Text, { fontSize: "14px" }, name),
                React__default['default'].createElement(Text, { fontSize: "14px" }, coefficient)),
            React__default['default'].createElement(Flex, { alignItems: "center", justifyContent: "space-between" },
                React__default['default'].createElement(Text, { fontSize: "14px" }, price),
                React__default['default'].createElement(Text, { fontSize: "14px" }, priceValue))));
    };
    return (React__default['default'].createElement(Wrapper, null,
        React__default['default'].createElement(TopContent, null,
            React__default['default'].createElement(LeftContent, null, leftContent),
            React__default['default'].createElement(TimerNotSolidWithoutBg, { marginPoint: "0 12px", fontSize: "21px", width: "100%", widthWrapper: "100%", background: "#232323", time: time, color: "#fff", disabled: disabled }),
            React__default['default'].createElement(RightContent, null, rightContent)),
        React__default['default'].createElement(BlockWrapper, null,
            React__default['default'].createElement(TopLine, null,
                React__default['default'].createElement(Text, { fontSize: "17px" }, title),
                React__default['default'].createElement(Text, { fontSize: "17px" }, value)),
            React__default['default'].createElement(Content, null,
                React__default['default'].createElement(Card, { margin: "0 5px 0 0", name: cardData1.name, coefficient: cardData1.coefficient, price: cardData1.coefficient, priceValue: cardData1.priceValue }),
                React__default['default'].createElement(Card, { margin: "0 0 0 5px", name: cardData2.name, coefficient: cardData2.coefficient, price: cardData2.coefficient, priceValue: cardData2.priceValue }),
                React__default['default'].createElement(RoundVS, null, versus || "VS")))));
};
var Wrapper = styled__default['default'].div(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  max-width: 366px;\n  width: 100%;\n"], ["\n  max-width: 366px;\n  width: 100%;\n"])));
var TopContent = styled__default['default'].div(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"])));
var LeftContent = styled__default['default'].div(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n  flex: none;\n  display: flex;\n  margin-right: 12px;\n  align-items: center;\n  justify-content: center;\n  width: 66px;\n  height: 50px;\n  border-radius: 12px;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 22px;\n  margin-right: 12px;\n  background: ", ";\n  color: ", ";\n"], ["\n  flex: none;\n  display: flex;\n  margin-right: 12px;\n  align-items: center;\n  justify-content: center;\n  width: 66px;\n  height: 50px;\n  border-radius: 12px;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 22px;\n  margin-right: 12px;\n  background: ", ";\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.bgCard2;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
var RightContent = styled__default['default'](LeftContent)(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["\n  margin-left: 12px;\n  margin-right: 0;\n  & svg rect {\n    fill: none;\n    stroke-width: 2px;\n  }\n  & svg mask rect {\n    fill: #fff;\n  }\n"], ["\n  margin-left: 12px;\n  margin-right: 0;\n  & svg rect {\n    fill: none;\n    stroke-width: 2px;\n  }\n  & svg mask rect {\n    fill: #fff;\n  }\n"])));
var BlockWrapper = styled__default['default'].div(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n  width: 100%;\n  padding: 21px 21px 27px;\n  margin-top: 15px;\n  background: ", ";\n  border-radius: 12px;\n"], ["\n  width: 100%;\n  padding: 21px 21px 27px;\n  margin-top: 15px;\n  background: ", ";\n  border-radius: 12px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.cardBg;
});
var TopLine = styled__default['default'](Flex)(templateObject_6$1 || (templateObject_6$1 = __makeTemplateObject(["\n  justify-content: space-between;\n  align-items: center;\n  ", " {\n    color: ", ";\n  }\n"], ["\n  justify-content: space-between;\n  align-items: center;\n  ", " {\n    color: ", ";\n  }\n"])), Text, function (_a) {
    var theme = _a.theme;
    return theme.colors.green;
});
var Content = styled__default['default'](Flex)(templateObject_7$1 || (templateObject_7$1 = __makeTemplateObject(["\n  position: relative;\n  margin-top: 15px;\n  width: 100%;\n"], ["\n  position: relative;\n  margin-top: 15px;\n  width: 100%;\n"])));
var CardWrapper = styled__default['default'](Flex)(templateObject_8$1 || (templateObject_8$1 = __makeTemplateObject(["\n  width: 100%;\n  min-height: 269px;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 16px 19px 14px;\n  background: ", ";\n  border-radius: 10px;\n"], ["\n  width: 100%;\n  min-height: 269px;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 16px 19px 14px;\n  background: ", ";\n  border-radius: 10px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.bgCard3;
});
var RoundVS = styled__default['default'].div(templateObject_9$1 || (templateObject_9$1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 45px;\n  height: 45px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: ", ";\n  border: 5px solid ", ";\n  border-radius: 50%;\n  box-shadow: ", ";\n  color: ", ";\n  font-size: 16px;\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 45px;\n  height: 45px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: ", ";\n  border: 5px solid ", ";\n  border-radius: 50%;\n  box-shadow: ", ";\n  color: ", ";\n  font-size: 16px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.dark2;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.bgCard3;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textShadow;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
var templateObject_1$8, templateObject_2$7, templateObject_3$4, templateObject_4$3, templateObject_5$1, templateObject_6$1, templateObject_7$1, templateObject_8$1, templateObject_9$1;

var BridgeWrapper = styled__default['default'].div(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  max-width: 404px;\n  max-height: 100vh;\n  min-width: 303px;\n  width: 100%;\n  margin: 0 auto;\n  padding: 33px 23px 23px;\n  background: ", ";\n  box-shadow: ", ";\n  border-radius: 15px;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    min-width: 360px;\n    width: 100%;\n  }\n  ", " {\n    min-width: 404px;\n    width: 100%;\n  }\n"], ["\n  max-width: 404px;\n  max-height: 100vh;\n  min-width: 303px;\n  width: 100%;\n  margin: 0 auto;\n  padding: 33px 23px 23px;\n  background: ", ";\n  box-shadow: ", ";\n  border-radius: 15px;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    min-width: 360px;\n    width: 100%;\n  }\n  ", " {\n    min-width: 404px;\n    width: 100%;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.bgGray;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow8;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xs;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Field = styled__default['default'].div(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n  min-height: 50px;\n  display: flex;\n  align-items: center;\n  margin-top: 6px;\n  position: relative;\n  padding: 10px 25px;\n  background: ", ";\n  box-shadow: ", ";\n  border-radius: 12px;\n  color: ", ";\n"], ["\n  min-height: 50px;\n  display: flex;\n  align-items: center;\n  margin-top: 6px;\n  position: relative;\n  padding: 10px 25px;\n  background: ", ";\n  box-shadow: ", ";\n  border-radius: 12px;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.buttonBg;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow10;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
var NameChain = styled__default['default'](Text)(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  letter-spacing: 0.5px;\n"], ["\n  letter-spacing: 0.5px;\n"])));
var Label = styled__default['default'](Text)(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject([""], [""])));
var InputWrap = styled__default['default'].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  margin-top: 13px;\n  margin-bottom: 15px;\n"], ["\n  margin-top: 13px;\n  margin-bottom: 15px;\n"])));
var Tab = styled__default['default'](Button$9)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  width: 31%;\n  padding: 4px 16px;\n  border-radius: 9px;\n  font-weight: 400;\n  background: ", ";\n  &:hover {\n    background: ", ";\n  }\n"], ["\n  width: 31%;\n  padding: 4px 16px;\n  border-radius: 9px;\n  font-weight: 400;\n  background: ", ";\n  &:hover {\n    background: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.whiteRgba;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.green;
});
var StyledButton = styled__default['default'](Button$9)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  width: 48%;\n  padding: 0 10px;\n  &:disabled {\n    background: ", ";\n    opacity: 1;\n  }\n"], ["\n  width: 48%;\n  padding: 0 10px;\n  &:disabled {\n    background: ", ";\n    opacity: 1;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.whiteRgba;
});
var BlockChainWrap = styled__default['default'].div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var StyledArrow = styled__default['default'].div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  top: -40px;\n  z-index: 1;\n"], ["\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  top: -40px;\n  z-index: 1;\n"])));
var BridgeWidgetStep = function (_a) {
    var texts = _a.texts, onUserInput = _a.onUserInput, tabs = _a.tabs, value = _a.value, iconNetwork1 = _a.iconNetwork1, iconNetwork2 = _a.iconNetwork2, iconBalanceInput = _a.iconBalanceInput, handleButtonLeft = _a.handleButtonLeft, handleButtonTransfer = _a.handleButtonTransfer, disabledBtnLeft = _a.disabledBtnLeft, disabledBtnTransfer = _a.disabledBtnTransfer, hiddenToBlock = _a.hiddenToBlock;
    var BlockChainName = function (_a) {
        var icon = _a.icon, name = _a.name;
        return (React__default['default'].createElement(Field, null,
            icon,
            React__default['default'].createElement(NameChain, { margin: "0 0 0 10px" }, name)));
    };
    return (React__default['default'].createElement(BridgeWrapper, null,
        React__default['default'].createElement(Label, { size: "lg" }, texts.from),
        React__default['default'].createElement(BlockChainName, { icon: iconNetwork1, name: texts.nameNetwork1 }),
        React__default['default'].createElement(InputWrap, null,
            React__default['default'].createElement(BalanceInput, { onUserInput: onUserInput, value: value, icon: iconBalanceInput, texts: { commit: texts.commit, currency: texts.currency } })),
        React__default['default'].createElement(Flex, { justifyContent: "space-between", mt: "15px", mb: !hiddenToBlock ? "36px" : "22px" }, tabs.map(function (el, i) { return (React__default['default'].createElement(Tab, { key: i, scale: "sm", variant: "green", onClick: function () { return onUserInput(el); } },
            +el / 1000,
            "K")); })),
        !hiddenToBlock && (React__default['default'].createElement(Box, { mb: "39px" },
            React__default['default'].createElement(Label, { size: "lg" }, texts.to),
            React__default['default'].createElement(BlockChainWrap, null,
                React__default['default'].createElement(StyledArrow, null,
                    React__default['default'].createElement(Icon$s, null)),
                React__default['default'].createElement(BlockChainName, { icon: iconNetwork2, name: texts.nameNetwork2 })))),
        React__default['default'].createElement(Flex, { justifyContent: "space-between" },
            React__default['default'].createElement(StyledButton, { onClick: handleButtonLeft, variant: "green", disabled: disabledBtnLeft }, texts.buttonLeft),
            React__default['default'].createElement(StyledButton, { onClick: handleButtonTransfer, variant: "green", disabled: disabledBtnTransfer }, texts.buttonTransfer))));
};
var templateObject_1$7, templateObject_2$6, templateObject_3$3, templateObject_4$2, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;

var BaseCell = styled__default['default'].div(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  color: black;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n"], ["\n  color: black;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n"])));
var CellContent = styled__default['default'](Flex)(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n  justify-content: space-between;\n  align-items: center;\n  ", " {\n    line-height: 1;\n  }\n  ", " {\n    flex-direction: column;\n    height: auto;\n    align-items: flex-start;\n  } ;\n"], ["\n  justify-content: space-between;\n  align-items: center;\n  ", " {\n    line-height: 1;\n  }\n  ", " {\n    flex-direction: column;\n    height: auto;\n    align-items: flex-start;\n  } ;\n"])), Text, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var templateObject_1$6, templateObject_2$5;

var LabelStyle$1 = styled__default['default'](Text)(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  margin-bottom: 9px;\n  font-size: 13px;\n  line-height: 16px;\n  letter-spacing: 0.05em;\n  display: none;\n  color: ", ";\n  ", " {\n    display: block;\n  }\n"], ["\n  margin-bottom: 9px;\n  font-size: 13px;\n  line-height: 16px;\n  letter-spacing: 0.05em;\n  display: none;\n  color: ", ";\n  ", " {\n    display: block;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textGray;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var StyledCell$2 = styled__default['default'](BaseCell)(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  height: 70px;\n  flex-direction: row;\n  border-radius: 6px;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 19px 2px 13px;\n  margin-bottom: 20px;\n  background: ", ";\n  text-align: center;\n  ", " {\n    height: 0;\n    padding: 0;\n    margin-bottom: 0;\n    align-items: flex-start;\n    text-align: left;\n    justify-content: flex-start;\n  }\n"], ["\n  height: 70px;\n  flex-direction: row;\n  border-radius: 6px;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 19px 2px 13px;\n  margin-bottom: 20px;\n  background: ", ";\n  text-align: center;\n  ", " {\n    height: 0;\n    padding: 0;\n    margin-bottom: 0;\n    align-items: flex-start;\n    text-align: left;\n    justify-content: flex-start;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.cardBg;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var NameWrap = styled__default['default'](Flex)(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  align-items: center;\n  margin-top: -10px;\n  ", " {\n    margin-top: 0;\n  }\n"], ["\n  align-items: center;\n  margin-top: -10px;\n  ", " {\n    margin-top: 0;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var NameCell = function (_a) {
    var token1 = _a.token1, token2 = _a.token2, title = _a.title, tokenName = _a.tokenName;
    return (React__default['default'].createElement(StyledCell$2, { role: "cell" },
        React__default['default'].createElement(TokenPairImage, { token1: token1, token2: token2, simpleFarm: true }),
        React__default['default'].createElement(CellContent, null,
            React__default['default'].createElement(NameWrap, null,
                React__default['default'].createElement(Flex, { flexDirection: "column", ml: 35 },
                    React__default['default'].createElement(LabelStyle$1, null, title),
                    React__default['default'].createElement(Text, null, tokenName))))));
};
var templateObject_1$5, templateObject_2$4, templateObject_3$2;

var StyledCell$1 = styled__default['default'](BaseCell)(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  padding: 0 9px 0 16px;\n  margin-bottom: 15px;\n  height: 15px;\n  ", " {\n    height: 40px;\n    padding: 0;\n    margin-bottom: 0;\n    text-align: center;\n  }\n"], ["\n  padding: 0 9px 0 16px;\n  margin-bottom: 15px;\n  height: 15px;\n  ", " {\n    height: 40px;\n    padding: 0;\n    margin-bottom: 0;\n    text-align: center;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var LabelStyle = styled__default['default'](Text)(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 16px;\n  letter-spacing: 0.05em;\n  color: ", ";\n  ", " {\n    margin-bottom: 9px;\n  }\n"], ["\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 16px;\n  letter-spacing: 0.05em;\n  color: ", ";\n  ", " {\n    margin-bottom: 9px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textGray;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
styled__default['default'](Text)(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  margin-bottom: 8px;\n  font-size: 13px;\n  line-height: 16px;\n  letter-spacing: 0.05em;\n  color: ", ";\n"], ["\n  margin-bottom: 8px;\n  font-size: 13px;\n  line-height: 16px;\n  letter-spacing: 0.05em;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textGray;
});
var BalanceStyle = styled__default['default'](Text)(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  font-size: 15px;\n  line-height: 19px;\n  letter-spacing: 0.05em;\n  color: ", ";\n"], ["\n  font-size: 15px;\n  line-height: 19px;\n  letter-spacing: 0.05em;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
var TotalStakedCell = function (_a) {
    var title = _a.title, balance = _a.balance;
    return (React__default['default'].createElement(StyledCell$1, { role: "cell" },
        React__default['default'].createElement(CellContent, { height: "15px" },
            React__default['default'].createElement(LabelStyle, { textAlign: "left" }, title),
            balance ? React__default['default'].createElement(BalanceStyle, null, balance) : React__default['default'].createElement(Icon$v, { spin: true, fill: "none" }))));
};
var templateObject_1$4, templateObject_2$3, templateObject_3$1, templateObject_4$1;

var ApproveCell = function (_a) {
    var textButton = _a.textButton, isLoad = _a.isLoad, textWaiting = _a.textWaiting, handleApprove = _a.handleApprove;
    return (React__default['default'].createElement(StyledCell, null, !isLoad ? (React__default['default'].createElement(Button$9, { onClick: handleApprove, width: "100%", variant: "green" }, textButton)) : (React__default['default'].createElement(Flex, { alignItems: "center" },
        React__default['default'].createElement(Text, { mr: "15px" }, textWaiting),
        React__default['default'].createElement(LoaderBlock, null,
            React__default['default'].createElement(Loader$1, null))))));
};
var LoaderBlock = styled__default['default'].div(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  margin-top: -15px;\n  height: 20px;\n  width: 20px;\n  position: relative;\n  transform: scale(0.3);\n  & div {\n    position: absolute;\n  }\n"], ["\n  margin-top: -15px;\n  height: 20px;\n  width: 20px;\n  position: relative;\n  transform: scale(0.3);\n  & div {\n    position: absolute;\n  }\n"])));
var StyledCell = styled__default['default'](BaseCell)(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  padding: 0 9px 0 16px;\n  height: 40px;\n  margin-bottom: 15px;\n  align-items: center;\n  justify-content: center;\n  ", " {\n    width: 221px;\n    padding: 0;\n    margin-bottom: 0;\n    text-align: center;\n  }\n"], ["\n  padding: 0 9px 0 16px;\n  height: 40px;\n  margin-bottom: 15px;\n  align-items: center;\n  justify-content: center;\n  ", " {\n    width: 221px;\n    padding: 0;\n    margin-bottom: 0;\n    text-align: center;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var templateObject_1$3, templateObject_2$2;

var ApproveStakingBPT = function (_a) {
    var handleAddToken = _a.handleAddToken, texts = _a.texts, isLoad = _a.isLoad, imgToken1 = _a.imgToken1, imgToken2 = _a.imgToken2, stakingBalance = _a.stakingBalance, BPTBalance = _a.BPTBalance, AVAXBalance = _a.AVAXBalance, handleApprove = _a.handleApprove, hrefSeeTokenInfo = _a.hrefSeeTokenInfo, hrefViewContract = _a.hrefViewContract;
    return (React__default['default'].createElement("div", null,
        React__default['default'].createElement(StyledRow, null,
            React__default['default'].createElement(NameCell, { title: texts.titleToken, tokenName: texts.nameToken, token1: imgToken1, token2: imgToken2 }),
            React__default['default'].createElement(TotalStakedCell, { title: texts.totalStake, balance: stakingBalance }),
            React__default['default'].createElement(TotalStakedCell, { title: texts.totalBPT, balance: BPTBalance }),
            React__default['default'].createElement(TotalStakedCell, { title: texts.totalAVAX, balance: AVAXBalance }),
            React__default['default'].createElement(ApproveCell, { handleApprove: handleApprove, textWaiting: texts.waitingApprove, isLoad: isLoad, textButton: texts.buttonApprove })),
        React__default['default'].createElement(StyledActionPanel, null,
            React__default['default'].createElement(LinkItem, { href: hrefSeeTokenInfo, bold: false, target: "_blank" }, texts.infoLink),
            React__default['default'].createElement(LinkItem, { href: hrefViewContract, bold: false, target: "_blank" }, texts.contactLink),
            React__default['default'].createElement(AddToMetamask, { as: "button", onClick: handleAddToken },
                React__default['default'].createElement(Text, null, texts.addTokenLink),
                React__default['default'].createElement(Icon$O, { ml: "4px" })))));
};
var StyledRow = styled__default['default'].div(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  background-color: transparent;\n  display: flex;\n  flex-direction: column;\n  cursor: pointer;\n  background: ", ";\n  gap: 0 20px;\n  border-radius: 15px 15px 0 0;\n  ", " {\n    padding: 19px 22px 23px 15px;\n    flex-direction: row;\n    border-radius: 15px;\n    background: ", ";\n    justify-content: space-between;\n  }\n\n  ", " {\n    padding: 19px 40px 23px 35px;\n  }\n"], ["\n  background-color: transparent;\n  display: flex;\n  flex-direction: column;\n  cursor: pointer;\n  background: ", ";\n  gap: 0 20px;\n  border-radius: 15px 15px 0 0;\n  ", " {\n    padding: 19px 22px 23px 15px;\n    flex-direction: row;\n    border-radius: 15px;\n    background: ", ";\n    justify-content: space-between;\n  }\n\n  ", " {\n    padding: 19px 40px 23px 35px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.greyRgba2;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.cardBg;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var StyledActionPanel = styled__default['default'].div(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding: 0 12px 25px;\n  border-radius: 0 0 15px 15px;\n  background: ", ";\n  ", " {\n    flex-direction: row;\n    padding: 38px 35px 25px;\n  }\n  ", " {\n    padding: 38px 35px 25px;\n    margin-top: -23px;\n    //   padding: 46px 12px 12px;\n  }\n  //   background: ", ";\n  // }\n  // ", " {\n  //   padding: 46px 32px 25px;\n  // }\n"], ["\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding: 0 12px 25px;\n  border-radius: 0 0 15px 15px;\n  background: ", ";\n  ", " {\n    flex-direction: row;\n    padding: 38px 35px 25px;\n  }\n  ", " {\n    padding: 38px 35px 25px;\n    margin-top: -23px;\n    //   padding: 46px 12px 12px;\n  }\n  //   background: ", ";\n  // }\n  // ", " {\n  //   padding: 46px 32px 25px;\n  // }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.greyRgba2;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.greyRgba2;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var LinkItem = styled__default['default'](LinkExternal)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-bottom: 10px;\n  ", " {\n    margin-bottom: 0;\n    margin-right: 56px;\n  }\n"], ["\n  margin-bottom: 10px;\n  ", " {\n    margin-bottom: 0;\n    margin-right: 56px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var AddToMetamask = styled__default['default'](LinkItem)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin-bottom: 0;\n  margin-right: 0;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  background: none;\n  border: none;\n  align-items: center;\n  cursor: pointer;\n  //color: ", ";\n  & svg path {\n    fill: ", ";\n  }\n  & div {\n    color: ", ";\n  }\n"], ["\n  margin-bottom: 0;\n  margin-right: 0;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  background: none;\n  border: none;\n  align-items: center;\n  cursor: pointer;\n  //color: ", ";\n  & svg path {\n    fill: ", ";\n  }\n  & div {\n    color: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.green;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.green;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.green;
});
var templateObject_1$2, templateObject_2$1, templateObject_3, templateObject_4;

var HeaderBridgeStaking = function (_a) {
    var margin = _a.margin, title = _a.title, children = _a.children, maxWidth = _a.maxWidth;
    return (React__default['default'].createElement(Flex, { margin: margin && margin, maxWidth: maxWidth && maxWidth, flexDirection: "column", alignItems: "center" },
        React__default['default'].createElement(Title, null, title),
        React__default['default'].createElement(SubTitle, null, children)));
};
var Title = styled__default['default'](Text)(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  font-weight: normal;\n  font-size: 42px;\n  line-height: 121.8%;\n  letter-spacing: 0.01em;\n  margin-bottom: 18px;\n"], ["\n  font-weight: normal;\n  font-size: 42px;\n  line-height: 121.8%;\n  letter-spacing: 0.01em;\n  margin-bottom: 18px;\n"])));
var SubTitle = styled__default['default'](Text)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: 15px;\n  line-height: 19px;\n  text-align: center;\n  letter-spacing: 0.17em;\n"], ["\n  font-size: 15px;\n  line-height: 19px;\n  text-align: center;\n  letter-spacing: 0.17em;\n"])));
var templateObject_1$1, templateObject_2;

var ResetCSS = styled.createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n    min-height: 100vh;\n    background: url(", ") no-repeat center center /cover;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  } \n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    background: ", "; \n    border-radius: 10px;\n  }\n\n  /* Slider */ \n  input[type=range] {\n    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n    width: 100%; /* Specific width is required for Firefox. */\n    background: transparent; /* Otherwise white in Chrome */\n  }\n  input[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n  }\n  input[type=range]:focus {\n    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */\n  }\n  input[type=range]::-ms-track {\n    width: 100%;\n    cursor: pointer;\n    /* Hides the slider so custom styles can be added */\n    background: transparent; \n    border-color: transparent;\n    color: transparent;\n  }    \n"], ["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n    min-height: 100vh;\n    background: url(", ") no-repeat center center /cover;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  } \n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    background: ", "; \n    border-radius: 10px;\n  }\n\n  /* Slider */ \n  input[type=range] {\n    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n    width: 100%; /* Specific width is required for Firefox. */\n    background: transparent; /* Otherwise white in Chrome */\n  }\n  input[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n  }\n  input[type=range]:focus {\n    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */\n  }\n  input[type=range]::-ms-track {\n    width: 100%;\n    cursor: pointer;\n    /* Hides the slider so custom styles can be added */\n    background: transparent; \n    border-color: transparent;\n    color: transparent;\n  }    \n"])), BG_IMG, function (_a) {
    var theme = _a.theme;
    return theme.colors.green;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.panel;
});
var templateObject_1;

exports.Accordeon = Accordeon;
exports.AccordeonCard = AccordeonCard;
exports.AddIcon = Icon$S;
exports.Alert = Alert;
exports.AlertBlur = AlertBlur;
exports.ApproveStakingBPT = ApproveStakingBPT;
exports.ArrowBigDownIcon = Icon$s;
exports.ArrowCardDown = Icon$r;
exports.ArrowDouble = Icon$p;
exports.ArrowDownIcon = Icon$l;
exports.ArrowDownRightIcon = Icon$c;
exports.ArrowIcon = Icon$B;
exports.ArrowLeft = Icon$N;
exports.ArrowPanel = Icon$A;
exports.ArrowRight = Icon$o;
exports.ArrowSingl = Icon$q;
exports.ArrowSlider = ArrowSlider;
exports.ArrowTopRight = Icon$n;
exports.AvalancheIcon = Icon$a;
exports.BTCIMG = BTC;
exports.BackgroundImage = BackgroundImage;
exports.BalanceBlock = BalanceBlock;
exports.BalanceInput = BalanceInput;
exports.BalanceInputInversion = BalanceInputInversion;
exports.BaseLayout = BaseLayout;
exports.BnbIcon = Icon$M;
exports.Box = Box;
exports.BridgeProof = BridgeProof;
exports.BridgeStep1 = BridgeStep1;
exports.BridgeStep2 = BridgeStep2;
exports.BridgeWidgetStep = BridgeWidgetStep;
exports.BtnPanel = Icon$z;
exports.Button = Button$9;
exports.ButtonMenu = ButtonMenu;
exports.ButtonMenuItem = ButtonMenuItem;
exports.ButtonsBlock = ButtonsBlock;
exports.ButtonsBlockBTC = ButtonsBlockBTC;
exports.CalculateIcon = Icon$5;
exports.Card = Card$5;
exports.CardBTC = CardBTC;
exports.CardFlip = CardFlip;
exports.CardFlipBTC = CardFlipBTC;
exports.CardNext = CardNext$1;
exports.CardNextBTC = CardNext;
exports.CardProduct = CardProduct;
exports.CardsBalance = CardsBalance;
exports.CardsProducts = CardsProducts;
exports.CercleIcon = Icon$v;
exports.ChartDisclaimer = ChartDisclaimer;
exports.ChartIcon = Icon$L;
exports.CheckIcon = Icon$g;
exports.CheckboxInput = CheckboxInput;
exports.ClipIcon = Icon$8;
exports.CloseIcon = Icon$R;
exports.CloseIcon2 = Icon$Q;
exports.CloseSimpleIcon = Icon$P;
exports.CollectRoundWinningsModal = CollectRoundWinningsModal;
exports.CollectWinningsPopup = CollectWinningsPopup;
exports.ComingSoon = ComingSoon;
exports.ComingSoonWithButton = ComingSoonWithButton;
exports.CompleteIcon = Icon$w;
exports.ComunityIcon = Icon$1;
exports.CongratulateModal = CongratulateModal;
exports.CopyIcon = Icon$I;
exports.CopyIcon2 = Icon$b;
exports.ETHIMG = ETH;
exports.ErrorIcon = Icon$i;
exports.ExpiredCard = ExpiredCardNA;
exports.ExpiredCardBTC = ExpiredCardBTC;
exports.EyeClose = Icon$C;
exports.EyeOpen = Icon$D;
exports.FallingBunnies = FallingBunnies;
exports.Flex = Flex;
exports.GHOST = GHOST$1;
exports.GamesList = GamesList;
exports.GamesTable = GamesTable;
exports.GhostCard = GhostCard;
exports.GiftFormModal = GiftFormModal;
exports.GiftPopup = GiftPopup;
exports.GreenArrow = Icon$J;
exports.Header = Header;
exports.HeaderBridgeStaking = HeaderBridgeStaking;
exports.HeaderHistory = HeaderHistory;
exports.Heading = Heading$1;
exports.HelpIcon = Icon$k;
exports.HiddenItemAccordeonCard = HiddenItemAccordeonCard;
exports.HistoryBlock = HistoryBlock;
exports.HistoryIcon = Icon$K;
exports.HistoryPanel = HistoryPanel;
exports.IconButton = IconButton;
exports.Image = Image$1;
exports.InfoWrapper = InfoWrapper;
exports.Input = Input$1;
exports.InputSearch = InputSearch;
exports.InstagramIcon = Icon$e;
exports.Link = Link$2;
exports.LinkExternal = LinkExternal;
exports.ListWrap = ListWrap;
exports.LiveCard = LiveCard;
exports.LiveCardBTC = LiveCardBTC;
exports.Loader = Loader$1;
exports.LoaderCard = LoaderCard;
exports.LoaderCardText = LoaderCardText;
exports.LobbyCreatModal = LobbyCreatModal;
exports.LobbyList = LobbyList;
exports.LobbyListItem = LobbyListItem;
exports.LobbyNav = LobbyNav;
exports.MenuIcon = Icon$m;
exports.MinusIcon = Icon$3;
exports.Modal = Modal;
exports.ModalPlatform = ModalPlatform;
exports.ModalProvider = ModalProvider;
exports.Network = Network;
exports.NetworkModal = NetworkModal;
exports.NoHistory = NoHistory;
exports.NotificationDot = NotificationDot;
exports.OpenNewIcon = Icon$O;
exports.Pagination = Pagination;
exports.PausedErrorModals = PausedErrorModals;
exports.PenIcon = Icon$y;
exports.PlayIcon = Icon$t;
exports.PlayerList = PlayerList;
exports.PlayingCardsIcon = Icon$j;
exports.PlusIcon = Icon$4;
exports.PrizePoolBlock = PrizePoolBlock;
exports.ProgressAVAX = ProgressAVAX;
exports.ProgressBar = ProgressBar$2;
exports.ProgressRange = ProgressRange;
exports.ProgressSteps = ProgressSteps;
exports.ResetCSS = ResetCSS;
exports.ReverseArrowsIcon = Icon$9;
exports.RoundHistory = RoundHistory;
exports.RoundHistoryBTC = RoundHistoryBTC;
exports.Rounds = Rounds;
exports.RoundsLink = RoundsLink;
exports.SearchIcon = Icon$H;
exports.SearchIcon2 = Icon$G;
exports.SetPositionCard = SetPositionCard;
exports.SetPositionCardBTC = SetPositionCardBTC;
exports.ShareIcon = Icon$h;
exports.Skeleton = Skeleton;
exports.SquaresIcon = Icon$E;
exports.Statistic = Statistic;
exports.StrikeIcon = Icon$F;
exports.StrikesWideIcon = Icon$x;
exports.StyledCardBTC = StyledCardBTC;
exports.Svg = Svg;
exports.SwapButton = SwapButton;
exports.SwapVertIcon = Icon$6;
exports.Tabs = Tabs$1;
exports.TabsCard = TabsCard;
exports.TabsWithMovingLine = TabsWithMovingLine;
exports.Tag = Tag;
exports.TelegramIcon = Icon$f;
exports.Text = Text;
exports.TextField = Textfield;
exports.Timer = Timer$2;
exports.TimerNotSolid = TimerNotSolid;
exports.TimerSimple = TimerSimple;
exports.TitleBlock = TitleBlock;
exports.ToastContainer = ToastContainer;
exports.Toggle = Toggle;
exports.TokenPairImage = TokenPairImage;
exports.TopContent = TopContent$3;
exports.TwitterIcon = Icon$d;
exports.ValueRow = ValueRow;
exports.VerifideIcon = Icon$2;
exports.VestingWidget = VestingWidget;
exports.WINIMG = WIN$1;
exports.WalletHistoryModal = WalletHistoryModal;
exports.WatchIcon = Icon$u;
exports.WelcomeModal = WelcomeModal;
exports.WinnersBlock = WinnersBlock;
exports.YAYIcon = Icon$7;
exports.YourHistory = YourHistory;
exports.alertVariants = variants$1;
exports.connectorLocalStorageKey = connectorLocalStorageKey;
exports.dark = darkTheme;
exports.darkColors = darkColors;
exports.light = lightTheme;
exports.lightColors = lightColors;
exports.toastTypes = types;
exports.useAccordeon = useAccordeon;
exports.useGiftFormModal = useGiftFormModal;
exports.useKonamiCheatCode = useKonamiCheatCode;
exports.useMatchBreakpoints = useMatchBreakpoints;
exports.useModal = useModal;
exports.useParticleBurst = useParticleBurst;
exports.useTooltip = useTooltip;
exports.useWalletHistoryModal = useWalletHistoryModal;
exports.useWalletModal = useWalletModal;
exports.useWelcomeModal = useWelcomeModal;
