import styled, { keyframes, css, createGlobalStyle } from 'styled-components';
import { background, border, layout, position, space, flexbox, variant, typography } from 'styled-system';
import * as React from 'react';
import React__default, { isValidElement, cloneElement, useRef, useEffect, useState, createContext, useContext, useCallback, useMemo } from 'react';
import get from 'lodash/get';
import { useTimer } from 'react-timer-hook';
import { transparentize } from 'polished';
import { Flipper, Flipped } from 'react-flip-toolkit';

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

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var Box = styled.div(templateObject_1$F || (templateObject_1$F = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), background, border, layout, position, space);
var templateObject_1$F;

var Flex = styled(Box)(templateObject_1$E || (templateObject_1$E = __makeTemplateObject(["\n  display: flex;\n  ", "\n"], ["\n  display: flex;\n  ", "\n"])), flexbox);
var templateObject_1$E;

var getThemeValue = function (path, fallback) { return function (theme) {
    return get(theme, path, fallback);
}; };

var rotate = keyframes(templateObject_1$D || (templateObject_1$D = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var spinStyle = css(templateObject_2$o || (templateObject_2$o = __makeTemplateObject(["\n  & path{\n  animation: ", " 1.5s ease-in-out infinite;\n  transform-origin: center center;\n  }\n"], ["\n  & path{\n  animation: ", " 1.5s ease-in-out infinite;\n  transform-origin: center center;\n  }\n"])), rotate);
var Svg = styled.svg(templateObject_3$d || (templateObject_3$d = __makeTemplateObject(["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"], ["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme, color = _a.color;
    return getThemeValue("colors." + color, color)(theme);
}, function (_a) {
    var spin = _a.spin;
    return spin && spinStyle;
}, space);
Svg.defaultProps = {
    color: "text",
    width: "20px",
    xmlns: "http://www.w3.org/2000/svg",
    spin: false,
};
var templateObject_1$D, templateObject_2$o, templateObject_3$d;

var Icon$o = function (props) {
    return (React__default.createElement(Svg, __assign({ width: '42px', viewBox: "0 0 42 42" }, props),
        React__default.createElement("rect", { x: "6", y: "6", width: "30", height: "30", rx: "7", fill: props.fill || 'rgb(58,58,64)' }),
        React__default.createElement("g", { filter: "url(#filter0_d)" },
            React__default.createElement("path", { d: "M21 16V26", stroke: "white", strokeWidth: "2", strokeLinecap: "round" }),
            React__default.createElement("path", { d: "M26 21L16 21", stroke: "white", strokeWidth: "2", strokeLinecap: "round" })),
        React__default.createElement("defs", null,
            React__default.createElement("filter", { id: "filter0_d", x: "11", y: "13", width: "20", height: "20", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React__default.createElement("feOffset", { dy: "2" }),
                React__default.createElement("feGaussianBlur", { stdDeviation: "2" }),
                React__default.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React__default.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React__default.createElement("linearGradient", { id: "paint0_linear", x1: "21", y1: "1.2", x2: "21", y2: "36", gradientUnits: "userSpaceOnUse" },
                React__default.createElement("stop", { stopColor: "#4CEE3E" }),
                React__default.createElement("stop", { offset: "1", stopColor: "#47DA3B" }))),
        "    "));
};

var Icon$n = function (props) {
    return (React__default.createElement("svg", __assign({ width: 42, height: 42, viewBox: "0 0 42 42", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React__default.createElement("rect", { x: 6, y: 6, width: 30, height: 30, rx: 7, fill: props.fill || 'rgb(58,58,64)' }),
        React__default.createElement("g", { filter: "url(#prefix__filter0_d)", stroke: "#fff", strokeWidth: 2, strokeLinecap: "round" },
            React__default.createElement("path", { d: "M17.465 17.465l7.07 7.07M24.537 17.465l-7.071 7.07" })),
        React__default.createElement("defs", null,
            React__default.createElement("filter", { id: "prefix__filter0_d", x: 12.465, y: 14.464, width: 17.073, height: 17.071, filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
                React__default.createElement("feColorMatrix", { in: "SourceAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React__default.createElement("feOffset", { dy: 2 }),
                React__default.createElement("feGaussianBlur", { stdDeviation: 2 }),
                React__default.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React__default.createElement("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default.createElement("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })))));
};

var Icon$m = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" })));
};

var Icon$l = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("g", { filter: "url(#filter0_d)" },
            React__default.createElement("path", { d: "M11.5858 14.6568L5.92893 8.99998M5.92893 8.99998L11.5858 3.34312M5.92893 8.99998H20.0711", stroke: "white", strokeWidth: "2", strokeLinecap: "round" })),
        React__default.createElement("defs", null,
            React__default.createElement("filter", { id: "filter0_d", x: "0.515625", y: "0.34314", width: "24.5563", height: "21.3137", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React__default.createElement("feOffset", { dy: "2" }),
                React__default.createElement("feGaussianBlur", { stdDeviation: "2" }),
                React__default.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" }),
                React__default.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })))));
};

var Icon$k = function (props) {
    return (React__default.createElement(Svg, __assign({ width: "29", height: "29", viewBox: "0 0 29 29" }, props),
        React__default.createElement("rect", { width: "28.0333", height: "29", rx: "7", fill: "url(#paint0_linear)" }),
        React__default.createElement("path", { d: "M14.1042 6.76672L8.94336 11.6768L10.8579 13.4983L14.1042 10.4097L17.3506 13.4983L19.2651 11.6768L14.1042 6.76672Z", fill: "white" }),
        React__default.createElement("path", { d: "M14.1028 23.3718L19.2637 18.4617L17.3492 16.6402L14.1028 19.7289L10.8564 16.6402L8.94192 18.4617L14.1028 23.3718Z", fill: "white" }),
        React__default.createElement("rect", { x: "12.1797", y: "15.0173", width: "2.71084", height: "2.71084", transform: "rotate(-45 12.1797 15.0173)", fill: "white" }),
        React__default.createElement("rect", { x: "18.5605", y: "15.0173", width: "2.71084", height: "2.71084", transform: "rotate(-45 18.5605 15.0173)", fill: "white" }),
        React__default.createElement("rect", { x: "5.80078", y: "15.0173", width: "2.71084", height: "2.71084", transform: "rotate(-45 5.80078 15.0173)", fill: "white" }),
        React__default.createElement("defs", null,
            React__default.createElement("linearGradient", { id: "paint0_linear", x1: "14.0167", y1: "-6.76667", x2: "14.0167", y2: "34.3167", gradientUnits: "userSpaceOnUse" },
                React__default.createElement("stop", { stopColor: "#FFC700" }),
                React__default.createElement("stop", { offset: "1", stopColor: "#FF8A00" })))));
};

var Icon$j = function (props) {
    return (React__default.createElement(Svg, __assign({ width: "50", height: "50", viewBox: "0 0 50 50" }, props),
        React__default.createElement("rect", { width: "50", height: "50", rx: "12", fill: "white", fillOpacity: "0.15" }),
        React__default.createElement("mask", { id: "path-2-inside-1", fill: "white" },
            React__default.createElement("rect", { x: "14", y: "24", width: "6", height: "12", rx: "1" })),
        React__default.createElement("rect", { x: "14", y: "24", width: "6", height: "12", rx: "1", stroke: "#F3F3F3", strokeWidth: "4", mask: "url(#path-2-inside-1)" }),
        React__default.createElement("mask", { id: "path-3-inside-2", fill: "white" },
            React__default.createElement("rect", { x: "22", y: "14", width: "6", height: "22", rx: "1" })),
        React__default.createElement("rect", { x: "22", y: "14", width: "6", height: "22", rx: "1", stroke: "#F3F3F3", strokeWidth: "4", mask: "url(#path-3-inside-2)" }),
        React__default.createElement("mask", { id: "path-4-inside-3", fill: "white" },
            React__default.createElement("rect", { x: "30", y: "19", width: "6", height: "17", rx: "1" })),
        React__default.createElement("rect", { x: "30", y: "19", width: "6", height: "17", rx: "1", stroke: "#F3F3F3", strokeWidth: "4", mask: "url(#path-4-inside-3)" })));
};

var Icon$i = function (props) {
    return (React__default.createElement(Svg, __assign({ width: "50", height: "50", viewBox: "0 0 50 50" }, props),
        React__default.createElement("rect", { width: "50", height: "50", rx: "12", fill: "white", "fill-opacity": "0.15" }),
        React__default.createElement("g", { filter: "url(#filter0_d)" },
            React__default.createElement("path", { d: "M16 25.5C16 30.7467 20.2533 35 25.5 35C30.7467 35 35 30.7467 35 25.5C35 20.2533 30.7467 16 25.5 16C23.4503 16 21.5521 16.6492 20 17.7531", stroke: "#F3F3F3", fill: "none", strokeWidth: "2", strokeLinecap: "round" })),
        React__default.createElement("g", { filter: "url(#filter1_d)" },
            React__default.createElement("path", { d: "M23 27.5L25 24.5H29", stroke: "#F3F3F3", strokeWidth: "2", strokeLinecap: "round" })),
        React__default.createElement("defs", null,
            React__default.createElement("filter", { id: "filter0_d", x: "3", y: "4", width: "37", height: "37", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React__default.createElement("feOffset", { dx: "-4", dy: "-3" }),
                React__default.createElement("feGaussianBlur", { stdDeviation: "4" }),
                React__default.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React__default.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React__default.createElement("filter", { id: "filter1_d", x: "10", y: "12.5", width: "24.0001", height: "21.0001", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React__default.createElement("feOffset", { dx: "-4", dy: "-3" }),
                React__default.createElement("feGaussianBlur", { stdDeviation: "4" }),
                React__default.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React__default.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })))));
};

var Icon$h = function (props) {
    return (React__default.createElement(Svg, { width: "18", height: "18", viewBox: "0 0 18 18" },
        React__default.createElement("path", __assign({ d: "M7.58579 14.6571L1.92893 9.00022M1.92893 9.00022L7.58579 3.34337M1.92893 9.00022L16.0711 9.00022", stroke: "url(#paint0_linear)", strokeWidth: "2", strokeLinecap: "round" }, props)),
        React__default.createElement("defs", null,
            React__default.createElement("linearGradient", { id: "paint0_linear", x1: "4.33309", y1: "13.6671", x2: "12.5355", y2: "5.46469", gradientUnits: "userSpaceOnUse" },
                React__default.createElement("stop", { stopColor: "#4CEE3E" }),
                React__default.createElement("stop", { offset: "1", stopColor: "#47DA3B" })))));
};

var Icon$g = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M15 1H4C2.9 1 2 1.9 2 3V16C2 16.55 2.45 17 3 17C3.55 17 4 16.55 4 16V4C4 3.45 4.45 3 5 3H15C15.55 3 16 2.55 16 2C16 1.45 15.55 1 15 1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM18 21H9C8.45 21 8 20.55 8 20V8C8 7.45 8.45 7 9 7H18C18.55 7 19 7.45 19 8V20C19 20.55 18.55 21 18 21Z" })));
};

var Icon$f = function (props) {
    return (React__default.createElement(Svg, __assign({ width: '42px', viewBox: "0 0 42 42" }, props),
        React__default.createElement("rect", { x: "6", y: "6", width: "30", height: "30", rx: "7", fill: props.fill || 'rgba(0,0,0,0)' }),
        React__default.createElement("g", { filter: "url(#filter0_d111)" },
            React__default.createElement("circle", { fill: props.fill || 'rgba(0,0,0,0)', cx: "20.5", cy: "20.5", r: "4.6", stroke: props.color || 'white', strokeWidth: "1.8" }),
            React__default.createElement("path", { d: "M24 24L26 26", stroke: props.color || 'white', strokeWidth: "1.8", strokeLinecap: "round" })),
        React__default.createElement("defs", null,
            React__default.createElement("filter", { id: "filter0_d111", x: "11", y: "13", width: "19.8996", height: "19.9001", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React__default.createElement("feOffset", { dy: "2" }),
                React__default.createElement("feGaussianBlur", { stdDeviation: "2" }),
                React__default.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React__default.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React__default.createElement("linearGradient", { id: "paint0_linear111", x1: "21", y1: "1.2", x2: "21", y2: "36", gradientUnits: "userSpaceOnUse" },
                React__default.createElement("stop", { stopColor: "#4CEE3E" }),
                React__default.createElement("stop", { offset: "1", stopColor: "#47DA3B" })))));
};

var Icon$e = function (props) {
    return (React__default.createElement(Svg, __assign({ width: '42px', viewBox: "0 0 42 42" }, props),
        React__default.createElement("rect", { x: "6", y: "6", width: "30", height: "30", rx: "7", fill: props.fill || 'rgb(58,58,64)' }),
        React__default.createElement("g", { filter: "url(#filter0_d)" },
            React__default.createElement("path", { d: "M16 18H27", stroke: "white", strokeWidth: "1.8", strokeLinecap: "round" })),
        React__default.createElement("g", { filter: "url(#filter1_d)" },
            React__default.createElement("path", { d: "M18 22L25 22", stroke: "white", strokeWidth: "1.8", strokeLinecap: "round" })),
        React__default.createElement("g", { filter: "url(#filter2_d)" },
            React__default.createElement("path", { d: "M19 26H24", stroke: "white", strokeWidth: "1.8", strokeLinecap: "round" })),
        React__default.createElement("defs", null,
            React__default.createElement("filter", { id: "filter0_d", x: "11.0996", y: "15.1", width: "20.8", height: "9.8", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React__default.createElement("feOffset", { dy: "2" }),
                React__default.createElement("feGaussianBlur", { stdDeviation: "2" }),
                React__default.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React__default.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React__default.createElement("filter", { id: "filter1_d", x: "13.0996", y: "19.1001", width: "16.8", height: "9.8", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React__default.createElement("feOffset", { dy: "2" }),
                React__default.createElement("feGaussianBlur", { stdDeviation: "2" }),
                React__default.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React__default.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React__default.createElement("filter", { id: "filter2_d", x: "14.0996", y: "23.1001", width: "14.8", height: "9.8", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React__default.createElement("feOffset", { dy: "2" }),
                React__default.createElement("feGaussianBlur", { stdDeviation: "2" }),
                React__default.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React__default.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React__default.createElement("linearGradient", { id: "paint0_linear", x1: "21", y1: "1.2", x2: "21", y2: "36", gradientUnits: "userSpaceOnUse" },
                React__default.createElement("stop", { stopColor: "#4CEE3E" }),
                React__default.createElement("stop", { offset: "1", stopColor: "#47DA3B" })))));
};

var Icon$d = function (props) {
    return (React__default.createElement(Svg, __assign({ width: '42px', viewBox: "0 0 42 42" }, props),
        React__default.createElement("rect", { fill: props.fill || 'rgba(0,0,0,0)', x: "6", y: "6", width: "30", height: "30", rx: "7" }),
        React__default.createElement("g", { filter: "url(#filter0_d)" },
            React__default.createElement("mask", { id: "path-2-inside-1", fill: "white" },
                React__default.createElement("rect", { x: "15", y: "15", width: "6", height: "6", rx: "1" })),
            React__default.createElement("rect", { fill: props.fill || 'rgba(0,0,0,0)', x: "15", y: "15", width: "6", height: "6", rx: "1", stroke: "white", strokeWidth: "3.2", mask: "url(#path-2-inside-1)" })),
        React__default.createElement("g", { filter: "url(#filter12121_d)" },
            React__default.createElement("mask", { id: "path-3-inside-2", fill: "white" },
                React__default.createElement("rect", { x: "22", y: "15", width: "6", height: "6", rx: "1" })),
            React__default.createElement("rect", { fill: props.fill || 'rgba(0,0,0,0)', x: "22", y: "15", width: "6", height: "6", rx: "1", stroke: "white", strokeWidth: "3.2", mask: "url(#path-3-inside-2)" })),
        React__default.createElement("g", { filter: "url(#filter2_d)" },
            React__default.createElement("rect", { fill: props.fill || 'rgba(0,0,0,0)', x: "22.8", y: "22.8", width: "4.4", height: "4.4", rx: "2.2", stroke: "white", strokeWidth: "1.6" })),
        React__default.createElement("g", { filter: "url(#filter333_d)" },
            React__default.createElement("mask", { id: "path-5-inside-32", fill: "white" },
                React__default.createElement("rect", { x: "15", y: "22", width: "6", height: "6", rx: "1" })),
            React__default.createElement("rect", { fill: props.fill || 'rgba(0,0,0,0)', x: "15", y: "22", width: "6", height: "6", rx: "1", stroke: "white", strokeWidth: "3.2", mask: "url(#path-5-inside-32)" })),
        React__default.createElement("defs", null,
            React__default.createElement("filter", { id: "filter0_d", x: "11", y: "13", width: "14", height: "14", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React__default.createElement("feOffset", { dy: "2" }),
                React__default.createElement("feGaussianBlur", { stdDeviation: "2" }),
                React__default.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React__default.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React__default.createElement("filter", { id: "filter12121_d", x: "18", y: "13", width: "14", height: "14", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React__default.createElement("feOffset", { dy: "2" }),
                React__default.createElement("feGaussianBlur", { stdDeviation: "2" }),
                React__default.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React__default.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React__default.createElement("filter", { id: "filter2_d", x: "18", y: "20", width: "14", height: "14", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React__default.createElement("feOffset", { dy: "2" }),
                React__default.createElement("feGaussianBlur", { stdDeviation: "2" }),
                React__default.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React__default.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React__default.createElement("filter", { id: "filter333_d", x: "11", y: "20", width: "14", height: "14", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React__default.createElement("feOffset", { dy: "2" }),
                React__default.createElement("feGaussianBlur", { stdDeviation: "2" }),
                React__default.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React__default.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React__default.createElement("linearGradient", { id: "paint0_linear", x1: "21", y1: "1.2", x2: "21", y2: "36", gradientUnits: "userSpaceOnUse" },
                React__default.createElement("stop", { stopColor: "#4CEE3E" }),
                React__default.createElement("stop", { offset: "1", stopColor: "#47DA3B" })))));
};

var Icon$c = function (props) {
    return (React__default.createElement(Svg, __assign({ width: '42px', viewBox: "0 0 42 42" }, props),
        React__default.createElement("rect", { x: "6", y: "6", width: "30", height: "30", rx: "7", fill: props.fill || 'rgb(58,58,64)' }),
        React__default.createElement("g", { filter: "url(#filter0_d)" },
            React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M25.1163 23.9792C23.3638 23.7881 22 22.3033 22 20.5C22 18.6969 23.3634 17.2123 25.1155 17.0209C23.9439 16.3642 22.6032 16 21.205 16L20.7955 16C17.7282 16 14.9377 17.7528 13.6016 20.5002C14.9377 23.2476 17.7282 25.0005 20.7955 25.0005H21.205C22.6035 25.0005 23.9445 24.6361 25.1163 23.9792ZM11.5899 20.0862C11.5288 20.2206 11.4999 20.3615 11.5 20.5001C11.4999 20.6388 11.5287 20.7798 11.5899 20.9143L11.6918 21.1385C13.3145 24.7085 16.874 27.0005 20.7955 27.0005H21.205C25.1265 27.0005 28.686 24.7085 30.3087 21.1385L30.4106 20.9143C30.4717 20.7798 30.5006 20.6389 30.5005 20.5002C30.5006 20.3616 30.4717 20.2207 30.4106 20.0862L30.3087 19.862C28.686 16.292 25.1265 14 21.205 14H20.7955C16.874 14 13.3145 16.292 11.6918 19.862L11.5899 20.0862Z", fill: "white" })),
        React__default.createElement("defs", null,
            React__default.createElement("filter", { id: "filter0_d", x: "7.5", y: "12", width: "27.0005", height: "21.0005", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React__default.createElement("feOffset", { dy: "2" }),
                React__default.createElement("feGaussianBlur", { stdDeviation: "2" }),
                React__default.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" }),
                React__default.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React__default.createElement("linearGradient", { id: "paint0_linear", x1: "21", y1: "1.2", x2: "21", y2: "36", gradientUnits: "userSpaceOnUse" },
                React__default.createElement("stop", { stopColor: "#4CEE3E" }),
                React__default.createElement("stop", { offset: "1", stopColor: "#47DA3B" })))));
};

var Icon$b = function (props) {
    return (React__default.createElement(Svg, __assign({ width: '42px', viewBox: "0 0 42 42" }, props),
        React__default.createElement("rect", { x: "6", y: "6", width: "30", height: "30", rx: "7", fill: props.fill || 'rgb(58,58,64)' }),
        React__default.createElement("g", { filter: "url(#filter110_d112)" },
            React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.0864 19.5899C12.5892 19.3613 13.1821 19.5837 13.4106 20.0864L13.5125 20.3107C14.8107 23.1666 17.6583 25.0002 20.7955 25.0002H21.205C24.3422 25.0002 27.1898 23.1666 28.488 20.3107L28.5899 20.0864C28.8184 19.5837 29.4113 19.3613 29.914 19.5899C30.4168 19.8184 30.6391 20.4113 30.4106 20.914L30.3087 21.1383C28.686 24.7082 25.1265 27.0002 21.205 27.0002H20.7955C16.874 27.0002 13.3145 24.7082 11.6918 21.1383L11.5899 20.914C11.3613 20.4113 11.5837 19.8184 12.0864 19.5899Z", fill: "white" })),
        React__default.createElement("defs", null,
            React__default.createElement("filter", { id: "filter110_d112", x: "7.5", y: "17.5", width: "27.0005", height: "15.5002", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React__default.createElement("feOffset", { dy: "2" }),
                React__default.createElement("feGaussianBlur", { stdDeviation: "2" }),
                React__default.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" }),
                React__default.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React__default.createElement("linearGradient", { id: "paint0_linear112", x1: "21", y1: "1.2", x2: "21", y2: "36", gradientUnits: "userSpaceOnUse" },
                React__default.createElement("stop", { stopColor: "#4CEE3E" }),
                React__default.createElement("stop", { offset: "1", stopColor: "#47DA3B" })))));
};

var Icon$a = function (props) {
    return (React__default.createElement(Svg, __assign({ width: '42px', viewBox: "0 0 42 42" }, props),
        React__default.createElement("rect", { x: "6", y: "6", width: "30", height: "30", rx: "7", fill: props.fill || 'rgb(58,58,64)' }),
        React__default.createElement("g", { filter: "url(#filter0_d)" },
            React__default.createElement("path", { d: "M19 16H27M27 16V24M27 16L17 26", stroke: "white", strokeWidth: "2", strokeLinecap: "round" })),
        React__default.createElement("defs", null,
            React__default.createElement("filter", { id: "filter0_d", x: "12", y: "13", width: "20", height: "20", filterUnits: "userSpaceOnUse" },
                React__default.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React__default.createElement("feOffset", { dy: "2" }),
                React__default.createElement("feGaussianBlur", { stdDeviation: "2" }),
                React__default.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" }),
                React__default.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React__default.createElement("linearGradient", { id: "paint0_linear", x1: "21", y1: "1.2", x2: "21", y2: "36", gradientUnits: "userSpaceOnUse" },
                React__default.createElement("stop", { stopColor: "#4CEE3E" }),
                React__default.createElement("stop", { offset: "1", stopColor: "#47DA3B" }))),
        "   "));
};

var Icon$9 = function (props) {
    return (React__default.createElement("svg", __assign({ width: "7", height: "10", viewBox: "0 0 7 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React__default.createElement("path", { d: "M1 9L5 5L1 1", stroke: "#A3A3A3", strokeWidth: "1.8" })));
};

var Icon$8 = function (props) {
    return (React__default.createElement("svg", __assign({ width: "29", height: "82", viewBox: "0 0 20 82", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React__default.createElement("path", { d: "M3.33975 75.2265L12.9199 81.6133C13.809 82.206 15 81.5686 15 80.5V2.33333C15 0.823494 13.391 -0.141886 12.0588 0.568627L4.76471 4.45882C1.83193 6.02297 0 9.07619 0 12.4V68.9861C0 71.4938 1.25326 73.8355 3.33975 75.2265Z", fill: "#2E2E35" })));
};

var Icon$7 = function (props) {
    return (React__default.createElement(Svg, __assign({ width: '42px', viewBox: "0 0 42  42" }, props),
        React__default.createElement("rect", { x: "6", y: "6", width: "30", height: "30", rx: "7", fill: props.fill || 'rgb(58,58,64)' }),
        React__default.createElement("g", { filter: "url(#filter0_d65)" },
            React__default.createElement("path", { fill: props.fill || 'rgba(0,0,0,0)', d: "M26.3958 17.9206L26.3959 17.9204C26.5706 17.7463 26.6685 17.5097 26.6679 17.2631L26.3958 17.9206ZM26.3958 17.9206L18.7389 25.5774M26.3958 17.9206L18.7389 25.5774M18.7389 25.5774L16.7621 26.2376L17.42 24.2638L25.0797 16.6071C25.0797 16.6071 25.0797 16.6071 25.0797 16.607C25.4436 16.244 26.0329 16.2446 26.396 16.6084C26.5694 16.7822 26.6672 17.0175 26.6679 17.263L18.7389 25.5774ZM15.5906 28.0001C15.6541 28 15.7171 27.9898 15.7774 27.9699L15.0304 27.2224C14.9273 27.532 15.0947 27.8667 15.4043 27.9698C15.4644 27.9898 15.5273 28 15.5906 28.0001ZM25.7382 14.85C25.0978 14.8482 24.4834 15.1028 24.032 15.5571C24.0319 15.5571 24.0319 15.5572 24.0318 15.5573L16.2486 23.3398L16.2482 23.3402C16.1674 23.4216 16.1065 23.5206 16.07 23.6293L16.07 23.6295L14.8881 27.175L14.8881 27.175C14.7588 27.5632 14.9687 27.9828 15.357 28.1121L25.7382 14.85Z", stroke: "white", strokeWidth: "0.3" })),
        React__default.createElement("defs", null,
            React__default.createElement("filter", { id: "filter0_d65", x: "10.7002", y: "12.7", width: "21.6001", height: "21.6001", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React__default.createElement("feOffset", { dy: "2" }),
                React__default.createElement("feGaussianBlur", { stdDeviation: "2" }),
                React__default.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React__default.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" }))),
        " "));
};

var Icon$6 = function (props) {
    return (React__default.createElement(Svg, __assign({ width: '42px', viewBox: "0 0 42 42" }, props),
        React__default.createElement("rect", { x: "6", y: "6", width: "30", height: "30", rx: "7", fill: props.fill || 'rgb(58,58,64)' }),
        React__default.createElement("g", { filter: "url(#filter0_d)" },
            React__default.createElement("path", { d: "M16 17H27", stroke: "white", strokeWidth: "1.8", strokeLinecap: "round" })),
        React__default.createElement("g", { filter: "url(#filter1_d)" },
            React__default.createElement("path", { d: "M16 21L27 21", stroke: "white", strokeWidth: "1.8", strokeLinecap: "round" })),
        React__default.createElement("g", { filter: "url(#filter2_d)" },
            React__default.createElement("path", { d: "M16 25L27 25", stroke: "white", strokeWidth: "1.8", strokeLinecap: "round" })),
        React__default.createElement("defs", null,
            React__default.createElement("filter", { id: "filter0_d", x: "11.0996", y: "14.1", width: "20.8", height: "9.8", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React__default.createElement("feOffset", { dy: "2" }),
                React__default.createElement("feGaussianBlur", { stdDeviation: "2" }),
                React__default.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React__default.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React__default.createElement("filter", { id: "filter1_d", x: "11.0996", y: "18.1", width: "20.8", height: "9.8", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React__default.createElement("feOffset", { dy: "2" }),
                React__default.createElement("feGaussianBlur", { stdDeviation: "2" }),
                React__default.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React__default.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React__default.createElement("filter", { id: "filter2_d", x: "11.0996", y: "22.1001", width: "20.8", height: "9.8", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React__default.createElement("feOffset", { dy: "2" }),
                React__default.createElement("feGaussianBlur", { stdDeviation: "2" }),
                React__default.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React__default.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })))));
};

var Icon$5 = function (props) {
    return (React__default.createElement(Svg, __assign({ width: '30px', viewBox: "0 0  15" }, props),
        React__default.createElement("path", { d: "M12.3958 3.92058L12.3959 3.9204C12.5706 3.74631 12.6685 3.50968 12.6679 3.26306L12.3958 3.92058ZM12.3958 3.92058L4.73889 11.5774M12.3958 3.92058L4.73889 11.5774M4.73889 11.5774L2.76208 12.2376L3.41999 10.2638L11.0797 2.60709C11.0797 2.60707 11.0797 2.60705 11.0797 2.60703C11.4436 2.24396 12.0329 2.24457 12.396 2.6084C12.5694 2.78219 12.6672 3.01746 12.6679 3.26298L4.73889 11.5774ZM1.59063 14.0001C1.65406 14 1.71711 13.9898 1.77735 13.9699L1.03045 13.2224C0.927303 13.532 1.09471 13.8667 1.40435 13.9698C1.46442 13.9898 1.52733 14 1.59063 14.0001ZM11.7382 0.85001C11.0978 0.848164 10.4834 1.10278 10.032 1.55705C10.0319 1.55714 10.0319 1.55723 10.0318 1.55731L2.24861 9.33982L2.24821 9.34022C2.16739 9.42164 2.10645 9.52058 2.07003 9.62928L2.06996 9.6295L0.888144 13.175L0.888135 13.175C0.758808 13.5632 0.96871 13.9828 1.35696 14.1121L11.7382 0.85001Z", fill: "white", stroke: "white", strokeWidth: "0.3" })));
};

var Icon$4 = function (props) {
    return (React__default.createElement(Svg, __assign({ width: '42px', viewBox: "0 0 42 42" }, props),
        React__default.createElement("rect", { x: "6", y: "6", width: "30", height: "30", rx: "7", fill: props.fill }),
        React__default.createElement("g", { filter: "url(#filter0_d235425)" },
            React__default.createElement("path", { d: "M15 20L20 25L27 16", stroke: "white", fill: props.fill, strokeWidth: "2", strokeLinecap: "round" })),
        React__default.createElement("defs", null,
            React__default.createElement("filter", { id: "filter0_d235425", x: "10", y: "13", width: "22", height: "19.5082", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React__default.createElement("feOffset", { dy: "2" }),
                React__default.createElement("feGaussianBlur", { stdDeviation: "2" }),
                React__default.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React__default.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React__default.createElement("linearGradient", { id: "paint0_linear12", x1: "21", y1: "1.2", x2: "21", y2: "36", gradientUnits: "userSpaceOnUse" },
                React__default.createElement("stop", { stopColor: "#4CEE3E" }),
                React__default.createElement("stop", { offset: "1", stopColor: "#47DA3B" })))));
};

var Icon$3 = function (props) {
    return (React__default.createElement(Svg, __assign({ width: '42px', viewBox: "0 0 42 42" }, props),
        React__default.createElement("rect", { x: "6", y: "6", width: "30", height: "30", rx: "7", fill: props.fill || 'rgb(58,58,64)' }),
        React__default.createElement("path", { d: "M19.3102 14.0011C19.4534 14.0011 19.5934 14.0436 19.7125 14.1231C19.8316 14.2027 19.9244 14.3158 19.9792 14.4481C20.034 14.5804 20.0483 14.726 20.0204 14.8664C19.9925 15.0069 19.9235 15.1359 19.8222 15.2372C19.7209 15.3384 19.5919 15.4074 19.4514 15.4353C19.311 15.4633 19.1654 15.4489 19.0331 15.3941C18.9007 15.3393 18.7876 15.2465 18.7081 15.1275C18.6285 15.0084 18.586 14.8684 18.586 14.7252C18.586 14.5331 18.6623 14.349 18.7981 14.2132C18.9339 14.0774 19.1181 14.0011 19.3102 14.0011ZM14.2412 19.0696C14.2412 19.2129 14.2837 19.3529 14.3633 19.4719C14.4428 19.591 14.5559 19.6838 14.6882 19.7386C14.8206 19.7934 14.9662 19.8078 15.1066 19.7798C15.2471 19.7519 15.3761 19.6829 15.4774 19.5816C15.5787 19.4804 15.6476 19.3514 15.6756 19.2109C15.7035 19.0705 15.6892 18.9249 15.6344 18.7926C15.5796 18.6602 15.4867 18.5472 15.3677 18.4676C15.2486 18.388 15.1086 18.3456 14.9653 18.3456C14.7733 18.3456 14.5891 18.4219 14.4533 18.5576C14.3175 18.6934 14.2412 18.8776 14.2412 19.0696ZM15.8403 16.3242C15.8403 16.4674 15.8828 16.6074 15.9624 16.7265C16.042 16.8455 16.1551 16.9383 16.2874 16.9931C16.4197 17.0479 16.5653 17.0623 16.7058 17.0343C16.8462 17.0064 16.9753 16.9374 17.0765 16.8362C17.1778 16.7349 17.2468 16.6059 17.2747 16.4654C17.3026 16.325 17.2883 16.1794 17.2335 16.0471C17.1787 15.9148 17.0859 15.8017 16.9668 15.7221C16.8477 15.6426 16.7077 15.6001 16.5645 15.6001C16.3724 15.6001 16.1882 15.6764 16.0524 15.8122C15.9166 15.948 15.8403 16.1321 15.8403 16.3242Z", fill: "white" }),
        React__default.createElement("g", { filter: "url(#filter0_d)" },
            React__default.createElement("path", { fill: props.fill || 'rgba(0,0,0,0)', d: "M22.6237 15C25.1545 15.7532 27 18.0977 27 20.8731C27 24.2569 24.2569 27 20.8731 27C18.0977 27 15.7532 25.1545 15 22.6237", stroke: "white", strokeWidth: "1.8", strokeLinecap: "round" })),
        React__default.createElement("defs", null,
            React__default.createElement("filter", { id: "filter0_d", x: "10.0996", y: "12.0997", width: "21.8002", height: "21.8002", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React__default.createElement("feOffset", { dy: "2" }),
                React__default.createElement("feGaussianBlur", { stdDeviation: "2" }),
                React__default.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React__default.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })))));
};

var Icon$2 = function (props) {
    return (React__default.createElement("svg", { viewBox: "0 0 26 24", width: "26", height: "24", fill: "none" },
        React__default.createElement("g", { filter: "url(#filter0_d)" },
            React__default.createElement("path", { d: "M13 15.5L15 12.5H19", stroke: "#F3F3F3", strokeWidth: "2", strokeLinecap: "round" })),
        React__default.createElement("circle", { cx: "15.5", cy: "13.5", r: "9.5", stroke: "#F3F3F3", strokeWidth: "2" }),
        React__default.createElement("defs", null,
            React__default.createElement("filter", { id: "filter0_d", x: "0", y: "0.5", width: "24.0001", height: "21.0001", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React__default.createElement("feOffset", { dx: "-4", dy: "-3" }),
                React__default.createElement("feGaussianBlur", { stdDeviation: "4" }),
                React__default.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React__default.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React__default.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })))));
};

var Icon$1 = function (props) {
    return (React__default.createElement("svg", { width: "22", height: "22", viewBox: "0 0 20 22", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React__default.createElement("path", { d: "M8 13.1683V7.83167C8 7.0405 8.87525 6.56266 9.54076 6.99049L13.6915 9.65882C14.3038 10.0525 14.3038 10.9475 13.6915 11.3412L9.54076 14.0095C8.87525 14.4373 8 13.9595 8 13.1683Z", fill: "#4BE43E" }),
        React__default.createElement("circle", { cx: "10.5", cy: "10.5", r: "9.5", stroke: "#4BE43E", strokeWidth: "2" })));
};

var Icon = function (props) {
    return (React__default.createElement("svg", __assign({ width: "10", height: "7", viewBox: "0 0 10 7", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React__default.createElement("path", { d: "M1 1L5 5L9 1", stroke: "white", strokeWidth: "1.8" })));
};

var scales = {
    MD: "md",
    SM: "sm",
    XS: "xs",
};
var variants$1 = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    TERTIARY: "tertiary",
    TEXT: "text",
    DANGER: "danger",
    SUBTLE: "subtle",
    SUCCESS: "success",
    GREEN: 'green',
    PINK: "pink",
    OPTION: "option"
};

var _a$1, _b;
var scaleVariants = (_a$1 = {},
    _a$1[scales.MD] = {
        height: "50px",
        padding: "0 24px",
        fontSize: "15px",
        lineHeight: "20px",
    },
    _a$1[scales.SM] = {
        height: "32px",
        padding: "0 16px",
        fontSize: '13px',
        lineHeight: "16px",
        borderRadius: '7px'
    },
    _a$1[scales.XS] = {
        height: "20px",
        fontSize: "12px",
        padding: "0 8px",
    },
    _a$1);
var styleVariants = (_b = {},
    _b[variants$1.PRIMARY] = {
        backgroundColor: "primary",
        color: "white",
    },
    _b[variants$1.SECONDARY] = {
        backgroundColor: "transparent",
        border: "2px solid",
        borderColor: "primary",
        boxShadow: "none",
        color: "primary",
        ":disabled": {
            backgroundColor: "transparent",
        },
    },
    _b[variants$1.TERTIARY] = {
        backgroundColor: "tertiary",
        boxShadow: "none",
        color: "primary",
    },
    _b[variants$1.SUBTLE] = {
        backgroundColor: "textSubtle",
        color: "white",
    },
    _b[variants$1.DANGER] = {
        backgroundColor: "failure",
        color: "white",
    },
    _b[variants$1.SUCCESS] = {
        backgroundColor: "success",
        color: "white",
    },
    _b[variants$1.TEXT] = {
        backgroundColor: "transparent",
        color: "primary",
        boxShadow: "none",
    },
    _b[variants$1.GREEN] = {
        background: "linear-gradient(180deg, #4CEE3E -16%, #47DA3B 100%)",
        color: "#fff",
        boxShadow: "none",
    },
    _b[variants$1.PINK] = {
        backgroundColor: "#FF6161",
        color: "#fff",
        boxShadow: "none",
    },
    _b[variants$1.OPTION] = {
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        color: "#fff",
        boxShadow: "none",
    },
    _b);

var getDisabledStyles = function (_a) {
    var isLoading = _a.isLoading, theme = _a.theme;
    if (isLoading === true) {
        return "\n      &:disabled,\n      &.pancake-button--disabled {\n        cursor: not-allowed;\n      }\n    ";
    }
    // background-color: ${theme.colors.backgroundDisabled};
    // border-color: ${theme.colors.backgroundDisabled};
    return "\n    &:disabled,\n    &.pancake-button--disabled {\n      box-shadow: none;\n      opacity:.2;\n      color: " + theme.colors.text + ";\n      cursor: not-allowed;\n    }\n  ";
};
var getOpacity = function (_a) {
    var _b = _a.$isLoading, $isLoading = _b === void 0 ? false : _b;
    return $isLoading ? ".5" : "1";
};
var StyledButton = styled.button(templateObject_1$C || (templateObject_1$C = __makeTemplateObject(["\n  align-items: center;\n  border: 0;\n  border-radius: 12px;\n  box-shadow: 0px -1px 0px 0px rgba(14, 14, 44, 0.4) inset;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  letter-spacing: 0.03em;\n  line-height: 1;\n  opacity: ", ";\n  outline: 0;\n  transition:  0.2s;\n  &.withGreenBorder {\n    display: flex;\n    width: 100%;\n    border: 1.5px solid ", ";;\n    background: linear-gradient(180deg, rgba(76, 238, 62, 0.15) -16%, rgba(71, 218, 59, 0.15) 100%);\n    color: ", ";\n    text-shadow: ", ";\n  }\n  &.withRedBorder {\n    border: 1.5px solid #FF6161;\n    background: none;\n    color: ", ";\n    text-shadow: ", ";\n  }\n  &:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {\n     /* ; */\n     box-shadow: ", ";\n  }\n\n  &:active:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled) {\n    /* box-shadow: 0px 0px 29px #2CB021 */\n  }\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  align-items: center;\n  border: 0;\n  border-radius: 12px;\n  box-shadow: 0px -1px 0px 0px rgba(14, 14, 44, 0.4) inset;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  letter-spacing: 0.03em;\n  line-height: 1;\n  opacity: ", ";\n  outline: 0;\n  transition:  0.2s;\n  &.withGreenBorder {\n    display: flex;\n    width: 100%;\n    border: 1.5px solid ", ";;\n    background: linear-gradient(180deg, rgba(76, 238, 62, 0.15) -16%, rgba(71, 218, 59, 0.15) 100%);\n    color: ", ";\n    text-shadow: ", ";\n  }\n  &.withRedBorder {\n    border: 1.5px solid #FF6161;\n    background: none;\n    color: ", ";\n    text-shadow: ", ";\n  }\n  &:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {\n     /* ; */\n     box-shadow: ", ";\n  }\n\n  &:active:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled) {\n    /* box-shadow: 0px 0px 29px #2CB021 */\n  }\n\n  ", "\n  ",
    "\n  ",
    "\n  ", "\n  ", "\n"])), getOpacity, function (_a) {
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
    return variant === 'green' ? '0px 0px 29px #2CB021' : variant === 'pink' ? '0px 0px 20px rgba(255, 97, 97, 0.38)' : 'none';
}, getDisabledStyles, variant({
    prop: "scale",
    variants: scaleVariants,
}), variant({
    variants: styleVariants,
}), layout, space);
var templateObject_1$C;

var Button$2 = function (props) {
    var startIcon = props.startIcon, endIcon = props.endIcon; props.external; var className = props.className, isLoading = props.isLoading, disabled = props.disabled, children = props.children, rest = __rest(props, ["startIcon", "endIcon", "external", "className", "isLoading", "disabled", "children"]);
    var isDisabled = isLoading || disabled;
    var classNames = className ? [className] : [];
    if (isLoading) {
        classNames.push("pancake-button--loading");
    }
    if (isDisabled && !isLoading) {
        classNames.push("pancake-button--disabled");
    }
    return (React__default.createElement(StyledButton, __assign({ "$isLoading": isLoading, className: classNames.join(" "), disabled: isDisabled }, rest),
        React__default.createElement(React__default.Fragment, null,
            isValidElement(startIcon) &&
                cloneElement(startIcon, {
                    mr: "0.5rem",
                }),
            children,
            props.spin ? React__default.createElement(Icon$3, { spin: true, fill: 'rgba(0,0,0,0)' }) : null,
            isValidElement(endIcon) &&
                cloneElement(endIcon, {
                    ml: "0.5rem",
                }))));
};
Button$2.defaultProps = {
    isLoading: false,
    external: false,
    variant: variants$1.PRIMARY,
    scale: scales.MD,
    disabled: false,
};

var IconButton = styled(Button$2)(templateObject_1$B || (templateObject_1$B = __makeTemplateObject(["\n  padding: 0;\n  width: ", ";\n"], ["\n  padding: 0;\n  width: ", ";\n"])), function (_a) {
    var scale = _a.scale;
    return (scale === "sm" ? "32px" : "48px");
});
var templateObject_1$B;

var StyledCard = styled.div(templateObject_1$A || (templateObject_1$A = __makeTemplateObject(["\n  width: 404px;\n  /* height: 470px; */\n  background: ", ";\n  border-radius: 15px;\n"], ["\n  width: 404px;\n  /* height: 470px; */\n  background: ", ";\n  border-radius: 15px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.cardBg;
});
var templateObject_1$A;

var Card$1 = function (_a) {
    var children = _a.children; _a.active; var props = __rest(_a, ["children", "active"]);
    return React__default.createElement(StyledCard, __assign({}, props), children);
};

var sizes = {
    XS: 'xs',
    SM: "sm",
    MD: "md",
    LG: "lg",
    XL: "xl",
    XXL: "xxl",
};

var _a;
var style = (_a = {},
    _a[sizes.XS] = {
        fontSize: "11px",
        fontSizeLg: "14px",
    },
    _a[sizes.SM] = {
        fontSize: "13px",
        fontSizeLg: "16px",
    },
    _a[sizes.MD] = {
        fontSize: "15px",
        fontSizeLg: "19px",
    },
    _a[sizes.LG] = {
        fontSize: "21px",
        fontSizeLg: "27px",
    },
    _a[sizes.XL] = {
        fontSize: "24px",
        fontSizeLg: "30px",
    },
    _a);
var getColor$1 = function (_a) {
    var color = _a.color, theme = _a.theme;
    return getThemeValue("colors." + color, color)(theme);
};
var getFontSize = function (_a) {
    var fontSize = _a.fontSize, small = _a.small;
    return small ? "14px" : fontSize || "16px";
};
var Text = styled.div(templateObject_1$z || (templateObject_1$z = __makeTemplateObject(["\n  font-size: ", ";  \n  line-height: ", "; \n  /* color:", "; */\n  color: ", ";\n  /* font-size: ", "; */\n  ", "\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n"], ["\n  font-size: ", ";  \n  line-height: ", "; \n  /* color:", "; */\n  color: ", ";\n  /* font-size: ", "; */\n  ", "\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n"])), function (_a) {
    var size = _a.size;
    return style[size || sizes.MD].fontSize;
}, function (_a) {
    var size = _a.size;
    return style[size || sizes.MD].fontSizeLg;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, getColor$1, getFontSize, function (_a) {
    var textTransform = _a.textTransform;
    return textTransform && "text-transform: " + textTransform + ";";
}, function (_a) {
    var bold = _a.bold;
    return (bold ? 700 : 500) || 500;
}, space, typography);
Text.defaultProps = {
    color: "text",
    small: false,
};
var templateObject_1$z;

var variants = {
    COLLECTION: "collection",
    SUCCESS: "success",
    WINNING: "winning",
};

var getExternalLinkProps = function () { return ({
    target: "_blank",
    rel: "noreferrer noopener",
}); };

var StyledLink = styled(Text)(templateObject_1$y || (templateObject_1$y = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"])));
var Link = function (_a) {
    var external = _a.external, props = __rest(_a, ["external"]);
    var internalProps = external ? getExternalLinkProps() : {};
    return React__default.createElement(StyledLink, __assign({ as: "a", bold: true }, internalProps, props));
};
Link.defaultProps = {
    color: "primary",
};
var templateObject_1$y;

var LinkExternal = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React__default.createElement(Link, __assign({ external: true }, props),
        children,
        React__default.createElement(Icon$m, { ml: "4px" })));
};

var StyledAlert = styled(Flex)(templateObject_1$x || (templateObject_1$x = __makeTemplateObject(["\nwidth:fit-content;\nposition: fixed;\nz-index: 5;\ntop:100px;\nright:", ";\ntransition: .3s ease;\npadding:15px 90px 15px 23px;\nbackground: ", ";\nbox-shadow: inset ", ";\nborder-radius: 12px;\nalign-items: self-end;\njustify-content:space-between;\n"], ["\nwidth:fit-content;\nposition: fixed;\nz-index: 5;\ntop:100px;\nright:", ";\ntransition: .3s ease;\npadding:15px 90px 15px 23px;\nbackground: ", ";\nbox-shadow: inset ", ";\nborder-radius: 12px;\nalign-items: self-end;\njustify-content:space-between;\n"])), function (_a) {
    var showAlert = _a.showAlert;
    return showAlert ? '50px' : '-100%';
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.buttonBg;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textShadow;
});
var getIcon = function (variant) {
    if (variant === void 0) { variant = variants.COLLECTION; }
    switch (variant) {
        case variants.COLLECTION:
            return React__default.createElement(Icon$3, { spin: true });
        case variants.WINNING:
            return React__default.createElement(Icon$n, null);
        case variants.SUCCESS:
            return React__default.createElement(Icon$4, { fill: '#47DA3B' });
        default:
            return React__default.createElement(Icon$3, { spin: true });
    }
};
var Button$1 = styled.button(templateObject_2$n || (templateObject_2$n = __makeTemplateObject(["\n  position:absolute;\n  background:none;\n  border:none;\n  top: 4px;\n  right: 10px;\n  cursor:pointer;\n  &:disabled{\n    cursor:default;\n  }\n"], ["\n  position:absolute;\n  background:none;\n  border:none;\n  top: 4px;\n  right: 10px;\n  cursor:pointer;\n  &:disabled{\n    cursor:default;\n  }\n"])));
var SetContent = function (_a) {
    var title = _a.title, value = _a.value, variant = _a.variant, subtitle = _a.subtitle;
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(Text, { fontWeight: 400 },
            React__default.createElement("b", null, title),
            " ",
            value),
        variant === 'winning' ? React__default.createElement(React__default.Fragment, null,
            React__default.createElement(Text, { fontSize: '13px' }, subtitle),
            React__default.createElement(LinkExternal, { fontSize: '13px', color: '#47DA3B', small: true, href: "https://bscscan.com/address/", mr: "16px" }, "View on BscScan"),
            " ") : null));
};
var SetButton = function (_a) {
    var variant = _a.variant, onClick = _a.onClick;
    var Icon = getIcon(variant);
    return (React__default.createElement(Button$1, { disabled: variant !== 'winning', onClick: onClick }, Icon));
};
var Alert = function (props) {
    return (React__default.createElement(StyledAlert, { showAlert: props.showAlert },
        React__default.createElement("div", null,
            React__default.createElement(SetContent, __assign({}, props))),
        React__default.createElement(SetButton, __assign({}, props))));
};
var templateObject_1$x, templateObject_2$n;

var observerOptions = {
    root: null,
    rootMargin: "200px",
    threshold: 0,
};

var Wrapper = styled.div(templateObject_1$w || (templateObject_1$w = __makeTemplateObject(["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"], ["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"])), function (_a) {
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
}, space);
var templateObject_1$w;

var BackgroundImage = function (_a) {
    var src = _a.src, otherProps = __rest(_a, ["src"]);
    var imgRef = useRef(null);
    useEffect(function () {
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
    return React__default.createElement(Wrapper, __assign({ ref: imgRef }, otherProps));
};

var StyledImage = styled.img(templateObject_1$v || (templateObject_1$v = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"])));
var Placeholder = styled.div(templateObject_2$m || (templateObject_2$m = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"])));
var Image = function (_a) {
    var src = _a.src, alt = _a.alt, otherProps = __rest(_a, ["src", "alt"]);
    var imgRef = useRef(null);
    var _b = useState(false), isLoaded = _b[0], setIsLoaded = _b[1];
    useEffect(function () {
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
    return (React__default.createElement(Wrapper, __assign({ ref: imgRef }, otherProps), isLoaded ? React__default.createElement(StyledImage, { src: src, alt: alt }) : React__default.createElement(Placeholder, null)));
};
var templateObject_1$v, templateObject_2$m;

var ROCKET = "db1a76399105883d.png";

var MAJONG = "a2a6e7469307b667.png";

var COINS = "41c377a79b0c9f1b.png";

var CHESS = "e529146445a6e6ff.png";

var BALANCE = "6dd90f1628bb1be2.png";

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
        case "pink":
            return "#ECC2DD;";
        default:
            return "linear-gradient(180deg, #FF8383 0%, #EF5D5D 100%);";
    }
};
var CardProduct = function (_a) {
    var title = _a.title, img = _a.img, bg = _a.bg, closed = _a.closed;
    return (React__default.createElement(CardWrap$1, { closed: closed, bg: bg },
        React__default.createElement(CardTitle, { size: 'lg' }, title),
        React__default.createElement("img", { src: img, alt: "some img" })));
};
var CardWrap$1 = styled.div(templateObject_1$u || (templateObject_1$u = __makeTemplateObject(["\n  position: relative;\n  height: 100%;\n  width: 100%;\n  max-width: 220px;\n  height: 220px;\n  padding: 20px 24px;\n  background: ", ";\n  box-shadow: ", ";\n  border-radius: 15px;\n  opacity: ", ";\n  box-sizing: border-box;\n  &::after{\n    display:block;\n    content:'';\n    position: absolute;\n    width: calc(100% + 2px);\n    min-height: calc(100% + 2px);\n    border: 1.5px solid ", ";\n    box-sizing: border-box;\n    top: -1px;\n    left: -1px;\n    opacity: 0;\n    z-index: -1;\n    filter: drop-shadow(", ");\n    border-radius: 15px;\n    transition: .3s;\n  }\n  & img{\n    position:absolute;\n    bottom:0;\n    left:0;\n    width: 100%;\n  }\n  &:hover{\n    &::after{\n      opacity: ", ";\n    }\n  }\n"], ["\n  position: relative;\n  height: 100%;\n  width: 100%;\n  max-width: 220px;\n  height: 220px;\n  padding: 20px 24px;\n  background: ", ";\n  box-shadow: ", ";\n  border-radius: 15px;\n  opacity: ", ";\n  box-sizing: border-box;\n  &::after{\n    display:block;\n    content:'';\n    position: absolute;\n    width: calc(100% + 2px);\n    min-height: calc(100% + 2px);\n    border: 1.5px solid ", ";\n    box-sizing: border-box;\n    top: -1px;\n    left: -1px;\n    opacity: 0;\n    z-index: -1;\n    filter: drop-shadow(", ");\n    border-radius: 15px;\n    transition: .3s;\n  }\n  & img{\n    position:absolute;\n    bottom:0;\n    left:0;\n    width: 100%;\n  }\n  &:hover{\n    &::after{\n      opacity: ", ";\n    }\n  }\n"])), setColor, function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow2;
}, function (props) { return props.closed ? .3 : 1; }, function (_a) {
    var theme = _a.theme;
    return theme.colors.green;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow2;
}, function (props) { return props.closed ? 0 : 1; });
var CardTitle = styled(Text)(templateObject_2$l || (templateObject_2$l = __makeTemplateObject(["\n  letter-spacing: 0.02em;\n  text-shadow: ", ";\n"], ["\n  letter-spacing: 0.02em;\n  text-shadow: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textShadow2;
});
var templateObject_1$u, templateObject_2$l;

var CardProductLeft = function (_a) {
    var title = _a.title, img = _a.img, bg = _a.bg, closed = _a.closed;
    return (React__default.createElement(CardLeftWrap, { closed: closed, bg: bg },
        React__default.createElement(CardTitle, { size: 'lg' }, title),
        React__default.createElement("img", { src: img, alt: "some img" })));
};
var CardLeftWrap = styled(CardWrap$1)(templateObject_1$t || (templateObject_1$t = __makeTemplateObject(["\n  & img{\n    width:105%;\n    left: auto;\n    right: 0;\n    bottom: -15px;\n  }\n"], ["\n  & img{\n    width:105%;\n    left: auto;\n    right: 0;\n    bottom: -15px;\n  }\n"])));
var templateObject_1$t;

var CardProductRight = function (_a) {
    var title = _a.title, img = _a.img, bg = _a.bg, closed = _a.closed;
    return (React__default.createElement(CardRightWrap, { closed: closed, bg: bg },
        React__default.createElement(CardTitle, { size: 'lg' }, title),
        React__default.createElement("img", { src: img, alt: "some img" })));
};
var CardRightWrap = styled(CardWrap$1)(templateObject_1$s || (templateObject_1$s = __makeTemplateObject(["\n  & img{\n    width:110%;\n    left: auto;\n    right: -40px;\n    bottom: -15px;\n  }\n"], ["\n  & img{\n    width:110%;\n    left: auto;\n    right: -40px;\n    bottom: -15px;\n  }\n"])));
var templateObject_1$s;

var CardProductRcket = function (_a) {
    var title = _a.title, img = _a.img, bg = _a.bg, closed = _a.closed;
    return (React__default.createElement(CardRocketWrap, { closed: closed, bg: bg },
        React__default.createElement(CardTitle, { size: 'lg' }, title),
        React__default.createElement("img", { src: img, alt: "some img" })));
};
var CardRocketWrap = styled(CardWrap$1)(templateObject_1$r || (templateObject_1$r = __makeTemplateObject(["\n  & img{\n    width:120%;\n    left: auto;\n    right: -70px;\n    bottom: -35px;\n  }\n"], ["\n  & img{\n    width:120%;\n    left: auto;\n    right: -70px;\n    bottom: -35px;\n  }\n"])));
var templateObject_1$r;

var data$1 = [
    { name: "BTC vs ETH", img: BALANCE, color: 'pink' },
    { name: "UP or Down", img: COINS, color: 'green' },
    { name: "Coming soon", img: CHESS, color: 'purple' },
    { name: "Coming soon", img: ROCKET, color: 'blue' },
    { name: "Coming soon", img: MAJONG, color: 'red' },
];
var CardsProducts = function () {
    return (React__default.createElement(Cards$1, null,
        React__default.createElement(CardProduct, { title: data$1[0].name, bg: data$1[0].color, img: data$1[0].img }),
        React__default.createElement(CardProductLeft, { title: data$1[1].name, bg: data$1[1].color, img: data$1[1].img }),
        React__default.createElement(CardProductRight, { title: data$1[2].name, closed: true, bg: data$1[2].color, img: data$1[2].img }),
        React__default.createElement(CardProductRcket, { title: data$1[3].name, closed: true, bg: data$1[3].color, img: data$1[3].img }),
        React__default.createElement(CardProduct, { title: data$1[4].name, closed: true, bg: data$1[4].color, img: data$1[4].img })));
};
var Cards$1 = styled.div(templateObject_1$q || (templateObject_1$q = __makeTemplateObject(["\n  position: relative;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 0 12px;\n"], ["\n  position: relative;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 0 12px;\n"])));
CardsProducts.defaultProps = {};
var templateObject_1$q;

var CoinIcon = function (props) {
    return (React.createElement("svg", __assign({ width: 119, height: 90, viewBox: "0 0 119 90", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.532 36.223v15.863c2.104 2.438 5.092 4.978 8.906 7.544 9.297 6.252 22.395 11.906 36.88 15.92 14.487 4.013 28.627 5.906 39.816 5.33 11.189-.576 18.088-3.553 19.425-8.382l2.119-7.645c-3.773 1.196-8.395 2.029-14.053 2.32-12.366.637-27.778-1.396-43.4-5.724-15.62-4.328-29.881-10.517-40.156-17.426-3.955-2.661-7.084-5.272-9.537-7.8zM1.532 65.631a75.291 75.291 0 002.625 1.846c10.274 6.91 24.536 13.099 40.157 17.427 6.32 1.751 12.606 3.127 18.67 4.101H16.532c-8.285 0-15-6.715-15-15v-8.374zM99.3 89.005h2.271l.194-.697a42.09 42.09 0 01-2.465.697z", fill: "#2E2E35" }),
        React.createElement("path", { d: "M54.231 51.18C24.28 42.882 2.242 28.061 5.008 18.077c2.766-9.984 29.29-11.35 59.24-3.05 29.952 8.298 51.99 23.119 49.224 33.102-2.766 9.984-29.29 11.35-59.24 3.051z", fill: "#2E2E35" })));
};

function DualshockIcon(props) {
    return (React.createElement("svg", __assign({ width: 125, height: 89, viewBox: "0 0 125 89", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M124.085 31.048V73.17c0 8.285-6.716 15-15 15H79.287l-1.812-6.223-30.794-12.267-11.982 7.01c-7.623 4.46-16.936 4.22-24.304-.626C-.112 69.15-3.144 55.1 3.562 44.432L25.527 9.486c5.2-8.273 15.546-11.66 24.602-8.052l12.753 5.08a3.888 3.888 0 012.012 1.821l4.808 9.27 26.862 10.699 9.864-3.424a3.887 3.887 0 012.714.06l12.752 5.08a20.29 20.29 0 012.191 1.028zM44.442 42.37l5.234 2.085a3.888 3.888 0 002.878-7.225l-5.234-2.085 2.085-5.234a3.889 3.889 0 00-7.225-2.878l-2.085 5.235-5.233-2.085a3.889 3.889 0 00-2.878 7.224l5.233 2.085-2.084 5.234a3.888 3.888 0 007.224 2.878l2.085-5.234zm46.066 14.164c-3.014 7.567.69 16.175 8.257 19.188 7.566 3.015 16.174-.689 19.188-8.256 3.014-7.566-.69-16.174-8.256-19.188-7.567-3.014-16.175.69-19.189 8.256z", fill: "#2E2E35" })));
}

function ArrowIcon(props) {
    return (React.createElement("svg", __assign({ width: 26, height: 26, viewBox: "0 0 26 26", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("g", { filter: "url(#prefix__filter0_d)" },
            React.createElement("path", { d: "M14.485 5.272l5.656 5.657m0 0l-5.656 5.657m5.656-5.657H6", stroke: "#fff", strokeWidth: 2, strokeLinecap: "round" })),
        React.createElement("defs", null,
            React.createElement("filter", { id: "prefix__filter0_d", x: 0.586, y: 0.444, width: 24.971, height: 24.971, filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React.createElement("feOffset", { dy: 2 }),
                React.createElement("feGaussianBlur", { stdDeviation: 2 }),
                React.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" }),
                React.createElement("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React.createElement("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })))));
}

var Arrow = function (_a) {
    var center = _a.center;
    return React__default.createElement(ArrowWrap, { center: center },
        React__default.createElement(ArrowIcon, null));
};
var ArrowWrap = styled.div(templateObject_1$p || (templateObject_1$p = __makeTemplateObject(["\n  width: 45px;\n  height: 45px;\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  top:", ";\n  left:", ";\n  transform:translate", ";\n  background: ", ";\n  box-shadow: ", ";\n  border: 5px solid ", ";\n  border-radius: 50px;\n"], ["\n  width: 45px;\n  height: 45px;\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  top:", ";\n  left:", ";\n  transform:translate", ";\n  background: ", ";\n  box-shadow: ", ";\n  border: 5px solid ", ";\n  border-radius: 50px;\n"])), function (props) { return props.center ? '50%' : 'auto'; }, function (props) { return props.center ? '50%' : 'auto'; }, function (props) { return props.center ? '(-50%,-50%)' : '0'; }, function (_a) {
    var theme = _a.theme;
    return theme.colors.greenGradient;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow2;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.bgGray;
});
var templateObject_1$p;

var CardBalance = function (_a) {
    var right = _a.right, title = _a.title, children = _a.children, text = _a.text;
    return (React__default.createElement(CardWrap, { right: right },
        React__default.createElement(CardHeader, { size: 'xl' }, title),
        React__default.createElement(CardText, null, text),
        children));
};
var CardWrap = styled.div(templateObject_1$o || (templateObject_1$o = __makeTemplateObject(["\n  position: relative;\n  padding: 25px;\n  background-color: ", ";\n  box-shadow: ", ";\n  border-radius: 15px;\n  & svg{\n    position: absolute;\n    left: ", ";\n    right: ", ";\n    bottom: 0;\n  }\n"], ["\n  position: relative;\n  padding: 25px;\n  background-color: ", ";\n  box-shadow: ", ";\n  border-radius: 15px;\n  & svg{\n    position: absolute;\n    left: ", ";\n    right: ", ";\n    bottom: 0;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.bgGray;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow2;
}, function (props) { return (props.right ? 'auto' : '0'); }, function (props) { return (props.right ? '0' : 'auto'); });
var CardHeader = styled(Text)(templateObject_2$k || (templateObject_2$k = __makeTemplateObject(["\n  text-align: center;\n  letter-spacing: 0.05em;\n"], ["\n  text-align: center;\n  letter-spacing: 0.05em;\n"])));
var CardText = styled(Text)(templateObject_3$c || (templateObject_3$c = __makeTemplateObject(["\n  margin-top: 14px;\n  text-align: center;\n  letter-spacing: 0.05em;\n  color:", ";\n"], ["\n  margin-top: 14px;\n  text-align: center;\n  letter-spacing: 0.05em;\n  color:", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textGray;
});
var templateObject_1$o, templateObject_2$k, templateObject_3$c;

var CardsBalance = function (_a) {
    var text = _a.text;
    return React__default.createElement(Cards, null,
        React__default.createElement(CardBalance, { title: text.title1, text: text.text1 },
            React__default.createElement(CoinIcon, null)),
        React__default.createElement(CardBalance, { right: true, title: text.title2, text: text.text2 },
            React__default.createElement(DualshockIcon, null)),
        React__default.createElement(Arrow, { center: true }));
};
var Cards = styled.div(templateObject_1$n || (templateObject_1$n = __makeTemplateObject(["\n  position: relative;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 0 16px;\n"], ["\n  position: relative;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 0 16px;\n"])));
CardsBalance.defaultProps = {};
var templateObject_1$n;

var BaseLayoutBlock = styled.div(templateObject_1$m || (templateObject_1$m = __makeTemplateObject(["\n  width: 100%;\n  min-height: 100vh;\n  background: ", ",\n    ", ";\n"], ["\n  width: 100%;\n  min-height: 100vh;\n  background: ", ",\n    ", ";\n"])), function (_a) {
    var src = _a.src;
    return "url(" + src + ") no-repeat center top / cover";
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.background;
});
var BaseLayout = function (_a) {
    var src = _a.src, children = _a.children;
    return React__default.createElement(BaseLayoutBlock, { src: src }, children);
};
var templateObject_1$m;

var Tabs = function (_a) {
    var tabValue = _a.tabValue, tabsList = _a.tabsList, setTabValue = _a.setTabValue;
    var handleTab = function (e) {
        setTabValue(+e.target.value);
    };
    return (React__default.createElement(TabsWrap$3, null, tabsList.map(function (item, i) {
        return React__default.createElement(Tab$2, { as: 'button', onClick: handleTab, className: tabValue === i ? 'active' : '', key: i, value: i }, item);
    })));
};
Tabs.defaultProps = {
    tabsList: []
};
var TabsWrap$3 = styled.div(templateObject_1$l || (templateObject_1$l = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  background: ", ";\n  border-radius: 12px;\n"], ["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  background: ", ";\n  border-radius: 12px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.buttonBg;
});
var Tab$2 = styled(Text)(templateObject_2$j || (templateObject_2$j = __makeTemplateObject(["\n  padding: 15px 30px;\n  border: none;\n  background: transparent;\n  border-radius: 12px;\n  letter-spacing: 0.5px;\n  color: ", ";\n  text-shadow: ", ";\n  transition: .3s;\n  cursor: pointer;\n  &.active{\n    background: ", ";\n  }\n"], ["\n  padding: 15px 30px;\n  border: none;\n  background: transparent;\n  border-radius: 12px;\n  letter-spacing: 0.5px;\n  color: ", ";\n  text-shadow: ", ";\n  transition: .3s;\n  cursor: pointer;\n  &.active{\n    background: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textShadow3;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.whiteRgba;
});
var templateObject_1$l, templateObject_2$j;

var SimpleTabs = function (_a) {
    var tabValue = _a.tabValue, setTabValue = _a.setTabValue, tabsList = _a.tabsList;
    var handleTabSimple = function (e) {
        setTabValue(+e.target.value);
    };
    return (React__default.createElement(TabsWrap$2, null, tabsList.map(function (item, i) {
        return React__default.createElement(Tab$1, { as: 'button', onClick: handleTabSimple, className: tabValue === i ? 'active' : '', key: i, value: i }, item);
    })));
};
SimpleTabs.defaultProps = {
    tabsList: []
};
var TabsWrap$2 = styled.div(templateObject_1$k || (templateObject_1$k = __makeTemplateObject(["\n  display: flex;\n  justify-content:space-between;\n"], ["\n  display: flex;\n  justify-content:space-between;\n"])));
var Tab$1 = styled(Text)(templateObject_2$i || (templateObject_2$i = __makeTemplateObject(["\n  border: none;\n  padding-bottom:5px;\n  background: transparent;\n  color: ", ";\n  text-shadow: ", ";\n  transition: .3s;\n  cursor: pointer;\n  border-bottom:2px solid transparent;\n  &.active{\n    border-bottom:2px solid ", ";\n    color: ", "\n  }\n"], ["\n  border: none;\n  padding-bottom:5px;\n  background: transparent;\n  color: ", ";\n  text-shadow: ", ";\n  transition: .3s;\n  cursor: pointer;\n  border-bottom:2px solid transparent;\n  &.active{\n    border-bottom:2px solid ", ";\n    color: ", "\n  }\n"])), function (_a) {
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
var templateObject_1$k, templateObject_2$i;

var getColor = function (_a) {
    var color = _a.color, theme = _a.theme;
    return getThemeValue("colors." + color, color)(theme);
};
function MyTimer(_a) {
    var expiryTimestamp = _a.expiryTimestamp, color = _a.color;
    var _b = useTimer({
        expiryTimestamp: expiryTimestamp,
        onExpire: function () { return console.warn('onExpire called'); },
    }), seconds = _b.seconds, minutes = _b.minutes, hours = _b.hours;
    var handleDigit = function (value) {
        var leftDigit = value >= 10 ? value.toString()[0] : '0';
        var rightDigit = value >= 10 ? value.toString()[1] : value.toString();
        return { leftDigit: leftDigit, rightDigit: rightDigit };
    };
    var timeArray = [hours, minutes, seconds];
    return (React__default.createElement(Wrap$6, null, timeArray.map(function (item, i) { return (React__default.createElement(React__default.Fragment, { key: "item-" + i },
        React__default.createElement(Block$2, { color: color },
            handleDigit(item).leftDigit,
            handleDigit(item).rightDigit),
        i === 2 ? null : React__default.createElement(Dots, null, ":"))); })));
}
var Timer = function (_a) {
    var time = _a.time, color = _a.color;
    var currentTime = new Date();
    currentTime.setSeconds(currentTime.getSeconds() + time);
    return (React__default.createElement("div", null, time && React__default.createElement(MyTimer, { expiryTimestamp: currentTime, color: color || 'text' })));
};
var Wrap$6 = styled.div(templateObject_1$j || (templateObject_1$j = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n"], ["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n"])));
var Block$2 = styled.div(templateObject_2$h || (templateObject_2$h = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 48px;\n  height: 48px;\n  background: ", ";\n  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 12px;\n  color: ", ";\n  font-weight: 500;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 48px;\n  height: 48px;\n  background: ", ";\n  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 12px;\n  color: ", ";\n  font-weight: 500;\n"])), function (_a) {
    var theme = _a.theme;
    return transparentize(0.75, theme.colors.invertedContrast);
}, getColor);
var Dots = styled.div(templateObject_3$b || (templateObject_3$b = __makeTemplateObject(["\n  margin: 0 12px;\n  color: ", ";\n"], ["\n  margin: 0 12px;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
var templateObject_1$j, templateObject_2$h, templateObject_3$b;

var StyledModal = styled.div(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border-radius: 15px;\n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;  \n  ", " {\n    width: auto;\n    min-width: 404px;\n    max-width: 100%;\n  }\n"], ["\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border-radius: 15px;\n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;  \n  ", " {\n    width: auto;\n    min-width: 404px;\n    max-width: 100%;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.bgGray;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xs;
});
var ModalHeader = styled.div(templateObject_2$g || (templateObject_2$g = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  align-items: center;\n  padding: 27px 20px 40px 27px;\n"], ["\n  display: flex;\n  align-items: center;\n  align-items: center;\n  padding: 27px 20px 40px 27px;\n"])));
var ModalTitle = styled.div(templateObject_3$a || (templateObject_3$a = __makeTemplateObject(["\n  align-items: center;\n  flex: 1;\n  color: ", ";\n"], ["\n  align-items: center;\n  flex: 1;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
var Overlay = styled.div(templateObject_4$5 || (templateObject_4$5 = __makeTemplateObject(["\n  pointer-events: none;\n  display: block;\n  background: ", ";\n  position: fixed;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n"], ["\n  pointer-events: none;\n  display: block;\n  background: ", ";\n  position: fixed;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.overlayBg;
});
var Heading = styled.div(templateObject_5$4 || (templateObject_5$4 = __makeTemplateObject(["\n"], ["\n"])));
var Modal = function (_a) {
    var title = _a.title, onDismiss = _a.onDismiss; _a.onBack; var children = _a.children, _b = _a.hideCloseButton, hideCloseButton = _b === void 0 ? false : _b;
    return (React__default.createElement("div", null,
        React__default.createElement(Overlay, null),
        React__default.createElement(StyledModal, null,
            React__default.createElement(ModalHeader, null,
                React__default.createElement(ModalTitle, null,
                    React__default.createElement(Heading, null, title)),
                !hideCloseButton && (React__default.createElement(IconButton, { variant: "text", onClick: onDismiss, "aria-label": "Close the dialog" },
                    React__default.createElement(Icon$n, null)))),
            children)));
};
var templateObject_1$i, templateObject_2$g, templateObject_3$a, templateObject_4$5, templateObject_5$4;

var ModalWrapper = styled.div(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal - 1;
});
var Context = createContext({
    onPresent: function () { return null; },
    onDismiss: function () { return null; },
    setCloseOnOverlayClick: function () { return true; },
});
var ModalProvider = function (_a) {
    var children = _a.children;
    var _b = useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = useState(), modalNode = _c[0], setModalNode = _c[1];
    var _d = useState(true); _d[0]; var setCloseOnOverlayClick = _d[1];
    var handlePresent = function (node) {
        setModalNode(node);
        setIsOpen(true);
    };
    var handleDismiss = function () {
        setModalNode(undefined);
        setIsOpen(false);
    };
    return (React__default.createElement(Context.Provider, { value: {
            onPresent: handlePresent,
            onDismiss: handleDismiss,
            setCloseOnOverlayClick: setCloseOnOverlayClick,
        } },
        isOpen && (React__default.createElement(ModalWrapper, null, React__default.isValidElement(modalNode) &&
            React__default.cloneElement(modalNode, {
                onDismiss: handleDismiss,
            }))),
        children));
};
var templateObject_1$h;

var useModal = function (modal, closeOnOverlayClick) {
    if (closeOnOverlayClick === void 0) { closeOnOverlayClick = true; }
    var _a = useContext(Context), onPresent = _a.onPresent, onDismiss = _a.onDismiss, setCloseOnOverlayClick = _a.setCloseOnOverlayClick;
    var onPresentCallback = useCallback(function () {
        onPresent(modal);
    }, [modal, onPresent]);
    useEffect(function () {
        setCloseOnOverlayClick(closeOnOverlayClick);
    }, [closeOnOverlayClick, setCloseOnOverlayClick]);
    return [onPresentCallback, onDismiss];
};

var BG_IMG = "c57e1f5529884760.png";

var Metamask = "data:image/png;base64,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";

var TrustWallet = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAeCAYAAAAy2w7YAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOuSURBVHgBzZZdbBRVFMfPuTOl23YXipBStfqgaKJUHzDwYHywiYkmxESL3Qc1RnxRi1uqtsboQ60JRpMGV7spiaKxMb5su8VgNMGopAYICQGWB0hIeOgDH2n5XDo7s8zOvYcz27szpZSyZSHhn+zcO/eee373nHtmdgDuVSUydkvX704bLFJYsSURdmWsLon4NS+KINCO2mj084EXcaqS5bcEEQO6/7A3eC58gUjPzJk+QwTJOkHDA+2xqYpAnWmr2VS0smiiEJIawcS1AvEpBr3E0w+EZLjEwGME+NwsPx4B/M3Oxnn+qKfkJRMMh6OWg/HY8QDUmc6tFqZxkI0a4eah5RXh9iVWceu3bzfmEmP2OwDqE3bxOCwkpXpTHUsHhN8XBqyfF4J4lQEHuLNZRuRDQx3R3uSm5ZeRQ0ptbPhpUkafFAJe4PldbG3NC0Kx3m/MElQKl2FaYlAg7AcPTp2FukMjcXRutlmek9z86//6+vaY59asazVqzQfR8+6TgD9w6iKE5AYgRFHwk1+Cgvw/1R4bhUWqv7/N4yarf7A5nUuBYUQEcVb87fuXq860XV5gglkHd0BomDV+qxCLAaihITZdNpCgauGOiEp+lOeGEXlFmStPc6gRqFI9u6mh7FsYNSEII0ZQMYSqHqqUYxVWlvtcoHYAMsm1QzOMQpUicJvCO+NCAFqWzfoRKW3WAlUKpRE8k4hwOgDNlCae0aBHoEoZgpaX+0TeZADSIyf0Hu6HKqVQPFH2CjW1Yeq0JnS7qmeMmqAKISn9lqeLK2JLJq4HIR7WvWWudFZDFSKENaUWxIn+NizMAdG+wFCoDrhNfTg6zRAsnTO/6/aWxwNQqj16lP/ETs7sBF57fg+ZcBsqIn6mfZCUxl83gPQOftHdltYL1mBHmgxYhD4Yzb3Jzev6dvf2eN34vKBILJpkWnaGiu81CWs8sbPwKNxC3TupMTFmfceFPQwz4VwBNLfAdUHMUdcu+2Hlyn8Y9Jgecvj8hgvkbt2xccWp2bZ9ROL8iPUumtjHzlfpYalQvT/UvvTHBUG+ev+kZsfJf8+zYVEQXOTLtpydT/76VnM+kclv4GfvK66wp2fZHOEcbfLPe67PBb+CtmTy6/iVkeSzezb0BRMIeIR7r4ZjNMVjn07Kid9G4q3ufL4q+q7j/L+hiL5EXbazlnNaYZst6r/5+RWcXshHxR+QnempZsOo7+GIPvLXcRT/kcSPh+LRLNwNdWfyaxOj+ZfhXtU1k1hmPhDWXrwAAAAASUVORK5CYII=";

var MathWallet = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAATCAYAAAD4f6+NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMnSURBVHgB7ZVfSFNRHMfv3eYm1ZCZDSwoCywMoYdWMIJqajrRCPsjJoZJEFgUIkYQvgwrQtiDYb1FKf1Bn+YwnDoxhqzyIYJegsjsr9hDkJDpmrt9TtwrS2/brbfAH/z4nfO9v3N+39/vd865krQi/5nIRh1DoVCuLMvtqDWRSDR5vd6pVP6Dg4PnMeX4d5eWlj6QDIrFqKPJZGrB1IkxQd5hLvzJNxKJrJubm+tQp7tRw4RMRh2pymdtDKHJVL7z8/MxzIw6nZb+QlK2bGBgIM9sNt9h6ITQWYvFkoVNMP+KdkPsYywWO15RUfFW+A8NDTVjmsH7sH6sJx6PP8FeY74d7SgrK7ueKmbKCkGgHLMPLaBljSUlJQHOQ5D5FXSjoihum812JGlJG7oB/MzCwoIJ/1sklAehSnQLeklKIynPEJtFyVBhKBPkUTAYXCVwsB7I7mH4BQ1p/vhECOrFTlKJ1+FweO3s7OzTzMxMcQFywW9LaUS3ZcPDw+foTBGELpLpd6wdEvlUqYtNTXyrysjImCHYG+wavreDj0Wj0U632+3i+0sIh9lqF3iXqAxrc4qLi1/Q1ibGLvZt0bupuhVikxY2ES15TqY+lWQT8yxw0coG2lGn4ifAj4EX+Xw+cT7GCZovyPzKWJZrafNJhp/wk8XTgbWQxEOw+0tj654h2Dey6DKLO5NI3sR8QN9TrVYN51CLKy3epxoNg8ArURl12qbh+ChU7xTaSkK6T8Fiy0ZGRjZBpJ6N/FTlm4ZTgTBYDiQqnU7n9MTEhGy329eTYQB8HN/Tmi+VqcL4CXiDdvh5HFeLvcCvgh9kTT1te6b5870GTIFcz7IKQWYbRtyCbA0LBAJ2gu5luIO+F7pcrh/V1dUxzk2uwNCjv2UnywcwmwlySMyTEqtECyFauMS/AaxWt0JC1B4ryRgVKoDsVjLuW4IfxneK7B5rWG9vb7bD4fCAj4EvPojiPbNarftJ6q7H44mni7lM+G95KHOnZEBGR0ctkLvX39+/04g/5OrUFuqK7qGm5KJtBWRsltIIh9pGlnncvFWSAaFKYm+HtCL/KD8B1wF1hV4sChMAAAAASUVORK5CYII=";

var TokenPocket = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGvSURBVHgB7ZRNS0JBFIbfGS8lUbRpEZSClrVq16JltAv31SL6CUW7dv2E+hFqbQOhXUbRok1gECGKFATtxPyotO6cRu3q9ePqTBltfOHe+TpnnnPmnrnAQH0QU7LafAhCiNXGBNncZZ8xIdtnCLrG0exZbxgRQzjr7WTEY9ld8SZ2oCLGrkAfW4jMp51hocwCuHHbyd9IFvGZeIUCCbWsKQ/Bgzj2X9pXOfqq+vGOgVMIGynPH8Ka5IWL7/UHxuy15VBnRGtYjhl6MOq4UQ+D6vwEpgKTejDW1lGUtBfmuDUyGvMj70Dpvr4hYx4Z/WizM0FbLsrY0A6KFKIyrGA1IuXSb1MSkZk5a/DDAumWIWu0hJB9RQ/GVL4ZWcA0suJQH0atHYbuxUIp+VrBaSCnD2Ot0LaBpaLc8gBGeQkR/2ProgFlWf+9Jt4+OE/IqhUg8wn5lziii46VpAHrkAnxC4R951BU72PUvce/gtH300S1stQ4GOgWCGtxEyWtvJVCo2k3XONGlWbe5dZR5IXaQiEODTnDyLyR7+FK13TLTNxDlUtdBvedYJuVMNB/6Qu9r4QNjf96IQAAAABJRU5ErkJggg==";

var WalletConnect = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAARCAYAAAAhUad0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK6SURBVHgBlVVNSFRRFD7n3jdTyEDWImjbItu1aNPMm2IySCiKwJAiUCtsFENoahOUjgW1KDMwbd7YHy4isYUhLaUpciaDsl27VrkJKpGI9P2czlN05r15d2Y8cHnvfud733fvuT8PoUrsNahuM9gnAKEDCBIqHgFME8FYoVMbq6aJlZK6YcYBxAOW3AO1BsE3h5yTha7wnIoiVIl4xrxGgO82ZOgGwk4hxGfdsK+rKUGGhplmw76A1BuH4IWQ8jvY8ENosMW2zAYeezMiNJaL45X3STngx7UgUwfEDnRXaa1PNMsmqUJ3KB9An+Y2EjWWdgvSJgGpoagDkSB95ZrqhvWMH22ENBSe11K5frSgWhChPmo/4fG2c6XS+aTsr8iPPaTtfmzfsHVMxY9naZdSyzAP+7EEV8InYA7wzBajGasVagg9Y/Yyn6IVNouHP2Id17PWYtyw024f9xv2DQeo+DHZp2Y6N42rBHiT9bmlW6cDcRlDyjKyWQuTnvJr3SqC94WD5CkFoRzjWbQpDNOlhisS3HfxIH4sa7Wz4XjR0OVTTDi2bObXuSIIYSY+ihrWuQDDoGMELu43ZsMOJBj1EBG/aGHZJApdOB8Ki0YXKBm+xrfG45hh96gMeaN+LTdeXTN91DrPhlkoPZIIuX+/RCJ3FhfWj0xi8He9WRd5xdkDHi2AHLeDpQYO4GAhKVM8qLtcrsvgjdfcjnoGhPDWWpbNHy/iz1X/kojfXtjqbItMMHgIFEGIQ/kLsmetr2ftWzztq6D8gD5Yy1rTbA8uwvqkfZEYpogZoikgJ1GugDdnkrLXj/KP4R7nLpX7wct8p2zhHJXiZRd+rhv/OPV4hFmTPsM7QYZuzCRDKT463mMjYIr+yla/4YoSVIhYxnrOF/npmq40l2/YfbzGvOlgYgnkmU9JNIN4/wGjLRusiMlpqgAAAABJRU5ErkJggg==";

var BinanceWallet = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAcCAYAAAB2+A+pAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAM3SURBVHgB7ZZNaBNBFMffTGqb7qRN2lpKQbStghdRET1LizVtQbDiZxE8CN4EBUFslRY1ih940bM3D4qiLTbJxo9cPHhQD1qVgqWtB7XUZDehSWlN9jnTsMnutkk2KXjyfwh5k/++3755b2cDUKZmhlkTvoM1UKYolCElyLY5q+FzLCI9LBdeMliR3a2EwjAiNACQ3liE+cqBk1LM0QDbSh0wAggbzL/gU3dD8gjZCX/s5rINFttLKbzKVLqSSoPbAotKHQ54nR+aVRiTaw7U9apqEV/xHotKeU+XQRHwMb/taYu9nUiL9+30nBaDiu3l22KCUgI367zJQ4gV7cvhYuD4tI80S2WDKSX3rJUKaO3exHnxvc4bm1yCA/lmhcer1ZMFcxf60UHxICHwVY9RQ58O1SXg6XSlgE/kuDjg7py/C6VIDUo7lBFnqx4rAU9LLMS+xEPshtHHB+64EnC2ZH38+VZDbCoWki6b8snSqZ9+V2NBaDTI+lSZRTl86tfzqjZ9HcPgMvtcA9yHPOmkET77bG2N0acEXEMZH/tkhZPcnbmOcsQD0LefQERLQ0d9d+KjFUoJXs2t4BTV0l213QvjpkqDzMdz9BuWxubTpKO5Z24WwNhjhA5L3MAB+4zJxh5BJV/rAJNIi4YVJp8S9nh4Jq/Zh5uqHdp6PcqC3NrcaSQwmk3HB8nTlfQZL91yGBYrHNBnHDgxSJ6exG2jr65dVdOpqv25accUID3h8SbfQz4pMrujyNKgaS3IzojTS4/nXrImJSS9UUOScSuX2hAPVG3W44i/fp0adI3z4TwGpUqRXVeWBiTEfosDJZ8vKtfcEr6YLP0wwvk5sOKxTItABwngxUwGaOBH51vF79pt9YlBoqCdy9hIM1JHWBll20XM24Ilg3katzkEJ6nAJ8ZtF5Vaphc0IM40JW2FMhd9O4mec9NZy1UR/tmnIe3UK83dGygpxD2NXckPsBqwUOyFNIgaGSrmswu1DRaKy+yaBnABCkAX06ldTT0LEzbS2f/PVetN9HPz9XxQUaldaElgHU4oDpmh+N3u9q5aoufimeUHzbTxZfJPxF9/l2b8VRvhv2zqL9fsb+jPHrVMAAAAAElFTkSuQmCC";

var SafepackWallet = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAYAAAAVibZIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI2SURBVHgBtZW/ixNREMcnm4UQkRgVzs6TQwtttFIQ1Cs8/AEq+BeoIFf5A0QLKxsbESzksPIXgo2FWAgKyt3ZyBWKIBaHB4mih4WiEUzij+z6GX2bzD13N6dyX/jw3sx7M7tvdvIikqM4jgfgDIxDGybgGFTz4gopibYw7INZKMI5f0+r1dpcLpePM/0MNwqFwiM/SQlGYAw+xj1dhJPG/pZMGo3GJoYXZq0OV2EnhGGn05kuFouD0l8j8Bb2VCqVWW9N4w84noVkXmEWv4Ie5S5ch8M2kmPOMFxwJ8x4tlRDFDnjMewisGFKI/PQG1gDT2CdOgL7ljbh34i4NsP7xA5kAbQgSUMzr1LDYWPXvb0bWE/6esr4F7u45V0PLdWMU9Ruty95fdpVs9n0+9SqFkRR9MevSlUqlSLJEL+m3LbQljrNWHG2HuFIxt5r0ivJO+P/DmeN/WFOFK8+ZI4x5h1/m7c3Of5r8RTg/OIWb8u/KXYPmXR5pm1LLZP/U1LnAU1ac8Z6WOptjKS/9GZbybjV2TOa9JYzlph5X7muqcN+OCW9u/mO1kKbvpbSb/qhTmR9KPp7FN9quGx7FAYDLoNP7Nkr5kKYj4IgeMlwHw451w84SL5Xvz4Uk+cMG6VX326sn4w32QHjTB/CkHPri20nz8ScIByaUO/D85Ihkt1kuAfDxv0A1hI/KXkieBXspm5HbU3hqbGndE9afJjm5Kl1Bv0zWyS//zFH3ZLWUUt1Je/NfgJIntVigmdBzQAAAABJRU5ErkJggg==";

var ConnectorNames;
(function (ConnectorNames) {
    ConnectorNames["Injected"] = "injected";
    ConnectorNames["WalletConnect"] = "walletconnect";
    ConnectorNames["BSC"] = "bsc";
})(ConnectorNames || (ConnectorNames = {}));

var connectors = [
    {
        title: "Metamask",
        icon: Metamask,
        connectorId: ConnectorNames.Injected,
    },
    {
        title: "Trust Wallet",
        icon: TrustWallet,
        connectorId: ConnectorNames.Injected,
    },
    {
        title: "MathWallet",
        icon: MathWallet,
        connectorId: ConnectorNames.Injected,
    },
    {
        title: "Token Pocket",
        icon: TokenPocket,
        connectorId: ConnectorNames.Injected,
    },
    {
        title: "Wallet Connect",
        icon: WalletConnect,
        connectorId: ConnectorNames.WalletConnect,
    },
    {
        title: "Binance Chain Wallet",
        icon: BinanceWallet,
        connectorId: ConnectorNames.BSC,
    },
    {
        title: "SafePal Wallet",
        icon: SafepackWallet,
        connectorId: ConnectorNames.Injected,
    },
];
var connectorLocalStorageKey = "connectorId";

var HelpLink = styled(Link)(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin: 0 auto;\n  padding: 24px 0 26px 0;\n  background: ", ";\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  font-size: 15px;\n"], ["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin: 0 auto;\n  padding: 24px 0 26px 0;\n  background: ", ";\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  font-size: 15px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.linkColor;
});
var Wrap$5 = styled.div(templateObject_2$f || (templateObject_2$f = __makeTemplateObject(["\n  text-align: center;\n  padding: 0 20px 0 27px;\n"], ["\n  text-align: center;\n  padding: 0 20px 0 27px;\n"])));
var Button = styled.button(templateObject_3$9 || (templateObject_3$9 = __makeTemplateObject(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 14px;\n  padding: 6px 6px 6px 27px;\n  width: 100%;\n  background: ", ";\n  border: 0;\n  border-radius: 12px;\n  box-shadow: inset 0px 4px 4px ", ";\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 15px;\n  letter-spacing: 0.03em;\n  line-height: 19px;\n  outline: 0;\n  transition: background-color 0.2s;\n  color: ", ";\n"], ["\n  display: inline-flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 14px;\n  padding: 6px 6px 6px 27px;\n  width: 100%;\n  background: ", ";\n  border: 0;\n  border-radius: 12px;\n  box-shadow: inset 0px 4px 4px ", ";\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 15px;\n  letter-spacing: 0.03em;\n  line-height: 19px;\n  outline: 0;\n  transition: background-color 0.2s;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.buttonBg;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.buttonShadow;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
var ImgWrap = styled.div(templateObject_4$4 || (templateObject_4$4 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 38px;\n  height: 38px;\n  border-radius: 9px;\n  background: ", ";\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 38px;\n  height: 38px;\n  border-radius: 9px;\n  background: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return transparentize(0.95, theme.colors.text);
});
var ConnectModal = function (_a) {
    var login = _a.login, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React__default.createElement(Modal, { title: "Connect Wallet", onDismiss: onDismiss },
        connectors.map(function (entry, index) { return (React__default.createElement(Wrap$5, { key: index },
            React__default.createElement(Button, { onClick: function () {
                    login(entry.connectorId);
                    window.localStorage.setItem(connectorLocalStorageKey, entry.connectorId);
                    onDismiss();
                } },
                React__default.createElement(Text, { fontWeight: 500, color: "text", mr: "16px", fontSize: "15px" }, entry.title),
                React__default.createElement(ImgWrap, null,
                    React__default.createElement("img", { src: entry.icon }))))); }),
        React__default.createElement(HelpLink, { href: "#", external: true }, "Learn how connect")));
};
var templateObject_1$g, templateObject_2$f, templateObject_3$9, templateObject_4$4;

var StyleButton = styled(Text).attrs({ role: "button" })(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.green;
});
var Tooltip = styled.div(templateObject_2$e || (templateObject_2$e = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"], ["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"])), function (_a) {
    var isTooltipDisplayed = _a.isTooltipDisplayed;
    return (isTooltipDisplayed ? "block" : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.invertedContrast;
});
var CopyToClipboard = function (_a) {
    var toCopy = _a.toCopy, children = _a.children, props = __rest(_a, ["toCopy", "children"]);
    var _b = useState(false), isTooltipDisplayed = _b[0], setIsTooltipDisplayed = _b[1];
    return (React__default.createElement(StyleButton, __assign({ small: true, bold: true, onClick: function () {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(toCopy);
                setIsTooltipDisplayed(true);
                setTimeout(function () {
                    setIsTooltipDisplayed(false);
                }, 1000);
            }
        } }, props),
        children,
        React__default.createElement(Icon$g, { width: "20px", color: "#47DA3B", ml: "4px" }),
        React__default.createElement(Tooltip, { isTooltipDisplayed: isTooltipDisplayed }, "Copied")));
};
var templateObject_1$f, templateObject_2$e;

var AccountModal = function (_a) {
    var account = _a.account, logout = _a.logout, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React__default.createElement(Modal, { title: "Your wallet", onDismiss: onDismiss },
        React__default.createElement(ModalWrap, null,
            React__default.createElement(Text, { bold: true, style: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" } },
                React__default.createElement(AccountWrap, { as: "div" },
                    React__default.createElement(Text, { fontSize: "13px", fontWeight: 500, color: "text" }, account))),
            React__default.createElement(Flex, { mb: "32px" },
                React__default.createElement(LinkExternal, { color: "#47DA3B", small: true, href: "https://bscscan.com/address/" + account, mr: "16px" }, "View on BscScan"),
                React__default.createElement(CopyText, { color: "#47DA3B" },
                    React__default.createElement(CopyToClipboard, { toCopy: account }, "Copy"))),
            React__default.createElement(Flex, { justifyContent: "center" },
                React__default.createElement(Button$2, { mt: "60px", scale: "md", width: "100%", variant: "green", onClick: function () {
                        logout();
                        window.localStorage.removeItem(connectorLocalStorageKey);
                        onDismiss();
                    } }, "Logout")))));
};
var ModalWrap = styled.div(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n  padding: 0 20px 20px;\n"], ["\n  padding: 0 20px 20px;\n"])));
var AccountWrap = styled(Button)(templateObject_2$d || (templateObject_2$d = __makeTemplateObject(["\n  padding: 17px 20px;\n  width: 100%;\n"], ["\n  padding: 17px 20px;\n  width: 100%;\n"])));
var CopyText = styled(Text)(templateObject_3$8 || (templateObject_3$8 = __makeTemplateObject(["\n  transition: none.2s;\n  &:hover {\n    text-decoration: underline;\n  }\n"], ["\n  transition: none.2s;\n  &:hover {\n    text-decoration: underline;\n  }\n"])));
var templateObject_1$e, templateObject_2$d, templateObject_3$8;

var useWalletModal = function (login, logout, account) {
    var onPresentConnectModal = useModal(React__default.createElement(ConnectModal, { login: login }))[0];
    var onPresentAccountModal = useModal(React__default.createElement(AccountModal, { account: account || "", logout: logout }))[0];
    return { onPresentConnectModal: onPresentConnectModal, onPresentAccountModal: onPresentAccountModal };
};

var Accordeon = function (_a) {
    var value = _a.value, setValue = _a.setValue, cards = _a.cards;
    var _b = useState(cards[0]), active = _b[0], setActive = _b[1];
    var _c = useState(0), heightActiveBlock = _c[0], setHeightActiveBlock = _c[1];
    var refHidden = useRef(null);
    var _d = useState(cards), newCards = _d[0], setNewCards = _d[1];
    var handleToggle = function (item) {
        if (active && active.id !== item.id) {
            setActive(item);
        }
        if (value && value === item.id) {
            setValue && setValue(undefined);
        }
        else {
            setValue && setValue(item.id);
        }
    };
    useEffect(function () {
        setValue && setValue(undefined);
    }, []);
    useEffect(function () {
        var _a;
        if (refHidden === null || refHidden === void 0 ? void 0 : refHidden.current) {
            setHeightActiveBlock((_a = refHidden === null || refHidden === void 0 ? void 0 : refHidden.current) === null || _a === void 0 ? void 0 : _a.clientHeight);
        }
    }, [value]);
    var filterCards = useMemo(function () { return cards.filter(function (el) { return el.id !== active.id; }); }, [active]);
    var filterActiveCard = useMemo(function () { return cards.filter(function (el) { return el.id === active.id; }); }, [active]);
    useEffect(function () {
        setNewCards(__spreadArray(__spreadArray([], filterActiveCard), filterCards));
    }, [active]);
    return (React__default.createElement(Wrap$4, null,
        React__default.createElement(Flipper, { flipKey: newCards[0] }, newCards.map(function (item) { return (React__default.createElement(Flipped, { key: item.id, flipId: item.id, spring: "stiff" },
            React__default.createElement("div", { key: item.id },
                React__default.createElement(Card, { onClick: function () { return handleToggle(item); }, className: active && active.id === item.id && value ? 'active' : '' },
                    React__default.createElement(Text, null, item.number),
                    item.collect && React__default.createElement(Collect, null, "Collect"),
                    React__default.createElement(Flex, { alignItems: "center" },
                        React__default.createElement(Text, { mr: 15, color: item.color }, item.text),
                        item.icon)),
                React__default.createElement(HiddenBlockWrap, { style: {
                        height: value && value === item.id ? heightActiveBlock : 0,
                    } },
                    React__default.createElement(HiddenBlock, { ref: active && active.id === item.id ? refHidden : null }, item.content.map(function (el, i) { return (React__default.createElement(HiddenItem, { key: i }, el)); })))))); }))));
};
var Wrap$4 = styled.div(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  position: relative;\n  background: ", "; \n"], ["\n  position: relative;\n  background: ", "; \n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.panel;
});
var Collect = styled.div(templateObject_2$c || (templateObject_2$c = __makeTemplateObject(["\n  padding: 7px 21px;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 16px;\n  text-align: center;\n  letter-spacing: 0.5px;\n  border-radius: 7px;\n  border: 1px solid ", ";\n  color: ", ";\n"], ["\n  padding: 7px 21px;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 16px;\n  text-align: center;\n  letter-spacing: 0.5px;\n  border-radius: 7px;\n  border: 1px solid ", ";\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.green;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
var Card = styled.div(templateObject_3$7 || (templateObject_3$7 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 23px 20px;\n  cursor: pointer;\n  &.active {\n    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);\n  }\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 23px 20px;\n  cursor: pointer;\n  &.active {\n    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);\n  }\n"])));
var HiddenBlockWrap = styled.div(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["\n  height: 0;\n  transition: 0.5s;\n  overflow: hidden;\n"], ["\n  height: 0;\n  transition: 0.5s;\n  overflow: hidden;\n"])));
var HiddenBlock = styled.div(templateObject_5$3 || (templateObject_5$3 = __makeTemplateObject(["\n  background: ", ";\n"], ["\n  background: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.panel;
});
var HiddenItem = styled.div(templateObject_6$2 || (templateObject_6$2 = __makeTemplateObject(["\n  padding: 30px 20px;\n  background: ", ";\n"], ["\n  padding: 30px 20px;\n  background: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.dark;
});
var templateObject_1$d, templateObject_2$c, templateObject_3$7, templateObject_4$3, templateObject_5$3, templateObject_6$2;

var PriceBlock = styled.div(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  position: relative;\n  padding: 17px 13px 14px 25px;\n  border-radius: 12px;\n  background: ", ";\n  z-index: 1;\n  &::before {\n    position: absolute;\n    display: block;\n    content: '';\n    width: calc(100% - 2px);\n    height: calc(100% - 2px);\n    box-sizing: border-box;\n    top: 1px;\n    left: 1px;\n    background: ", ";\n    border-radius: 12px;\n  }\n"], ["\n  position: relative;\n  padding: 17px 13px 14px 25px;\n  border-radius: 12px;\n  background: ",
    ";\n  z-index: 1;\n  &::before {\n    position: absolute;\n    display: block;\n    content: '';\n    width: calc(100% - 2px);\n    height: calc(100% - 2px);\n    box-sizing: border-box;\n    top: 1px;\n    left: 1px;\n    background: ", ";\n    border-radius: 12px;\n  }\n"])), function (_a) {
    var theme = _a.theme, negative = _a.negative;
    return negative ? theme.colors.redBg : theme.colors.linkColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.darkGreyBg;
});
var Price = styled.div(templateObject_2$b || (templateObject_2$b = __makeTemplateObject(["\n  font-weight: 500;\n  font-size: 17px;\n  line-height: 22px;\n  background: ", ";\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n"], ["\n  font-weight: 500;\n  font-size: 17px;\n  line-height: 22px;\n  background: ",
    ";\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n"])), function (_a) {
    var theme = _a.theme, negative = _a.negative;
    return negative ? theme.colors.redBg : theme.colors.linkColor;
});
var RightText = styled.div(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["\n  padding: 6px 12px;\n  background: ", ";\n  border-radius: 7px;\n  font-size: 15px;\n  line-height: 19px;\n"], ["\n  padding: 6px 12px;\n  background: ",
    ";\n  border-radius: 7px;\n  font-size: 15px;\n  line-height: 19px;\n"])), function (_a) {
    var theme = _a.theme, negative = _a.negative;
    return negative
        ? transparentize(0.85, theme.colors.redBg)
        : theme.colors.gradients.greenGradient;
});
var ClosedPrice = function (_a) {
    var price = _a.price, rightText = _a.rightText, result = _a.result, negative = _a.negative;
    return (React__default.createElement(PriceBlock, { negative: negative },
        React__default.createElement("div", { style: { position: 'relative', zIndex: 3 } },
            React__default.createElement(Text, { color: "greyText", mb: 18, fontWeight: 400 }, !result ? 'Closed Price' : 'Your Result'),
            React__default.createElement(Flex, { justifyContent: "space-between", alignItems: "center" },
                React__default.createElement(Price, { negative: negative }, price),
                React__default.createElement(Text, { size: "sm", fontWeight: 400, mr: "auto", ml: 9 }, result),
                React__default.createElement(RightText, { negative: rightText === 'UP' ? false : negative },
                    React__default.createElement(Price, { negative: rightText === 'UP' ? false : negative }, rightText))))));
};
var templateObject_1$c, templateObject_2$b, templateObject_3$6;

var RoundHistory = function (props) {
    var price = props.price, priceRightText = props.priceRightText, up = props.up, down = props.down, prizePool = props.prizePool, openingBlock = props.openingBlock, closingBlock = props.closingBlock, negative = props.negative, result = props.result;
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(Text, { mb: 17 }, "Round History "),
        React__default.createElement(ClosedPrice, { price: price, rightText: priceRightText, result: result, negative: negative }),
        React__default.createElement(Block$1, null,
            React__default.createElement(Line$1, null,
                React__default.createElement(Text, { size: "sm", fontWeight: 400 }, "Up"),
                React__default.createElement(Text, { size: "sm" }, up)),
            React__default.createElement(Line$1, null,
                React__default.createElement(Text, { size: "sm", fontWeight: 400 }, "Down"),
                React__default.createElement(Text, { size: "sm" }, down)),
            React__default.createElement(LineMargin$1, null,
                React__default.createElement(Text, { size: "sm" }, "Prize Pool:"),
                React__default.createElement(Text, null, prizePool)),
            React__default.createElement(Line$1, null,
                React__default.createElement(Text, { size: "sm", fontWeight: 400 }, "Opening Block"),
                React__default.createElement(Text, { size: "sm", color: negative ? 'redBg' : 'green' }, openingBlock)),
            React__default.createElement(Line$1, null,
                React__default.createElement(Text, { size: "sm", fontWeight: 400 }, "Closing Block"),
                React__default.createElement(Text, { size: "sm", color: negative ? 'redBg' : 'green' }, closingBlock)))));
};
var Line$1 = styled.div(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n"])));
var Block$1 = styled.div(templateObject_2$a || (templateObject_2$a = __makeTemplateObject(["\n  margin-top: 31px;\n"], ["\n  margin-top: 31px;\n"])));
var LineMargin$1 = styled(Line$1)(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n  margin-bottom: 17px;\n"], ["\n  margin-bottom: 17px;\n"])));
var templateObject_1$b, templateObject_2$a, templateObject_3$5;

var TabsHistory = function (_a) {
    var tabValue = _a.tabValue, setTabValue = _a.setTabValue;
    var tabsList = ['Rounds', 'PNL'];
    var handleTabToggle = function (e) {
        setTabValue(+e.target.value);
    };
    return (React__default.createElement(TabsWrap$1, null, tabsList.map(function (item, i) { return (React__default.createElement(Tab, { onClick: handleTabToggle, className: tabValue === i ? 'active' : '', key: i, value: i }, item)); })));
};
var TabsWrap$1 = styled.div(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  background: ", ";\n  border-radius: 12px;\n  box-shadow: ", ";  \n"], ["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  background: ", ";\n  border-radius: 12px;\n  box-shadow: ", ";  \n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.buttonBg;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow4;
});
var Tab = styled.button(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["\n  padding: 15px 30px;\n  border: none;\n  background: transparent;\n  border-radius: 12px;\n  font-size: 15px;\n  line-height: 19px;\n  font-weight: 500;\n  text-align: center;\n  letter-spacing: 0.5px;\n  text-shadow: 0px 3px 4px rgba(0, 0, 0, 0.15);\n  transition: 0.3s;\n  cursor: pointer;\n  color: ", ";\n  &.active {\n    background: ", ";\n    color: ", ";\n  }\n"], ["\n  padding: 15px 30px;\n  border: none;\n  background: transparent;\n  border-radius: 12px;\n  font-size: 15px;\n  line-height: 19px;\n  font-weight: 500;\n  text-align: center;\n  letter-spacing: 0.5px;\n  text-shadow: 0px 3px 4px rgba(0, 0, 0, 0.15);\n  transition: 0.3s;\n  cursor: pointer;\n  color: ", ";\n  &.active {\n    background: ", ";\n    color: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return transparentize(0.30, theme.colors.text);
}, function (_a) {
    var theme = _a.theme;
    return transparentize(0.85, theme.colors.text);
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
var templateObject_1$a, templateObject_2$9;

var WIN = "data:image/png;base64,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";

var LOSE = "data:image/png;base64,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";

var YourHistory = function (props) {
    var price = props.price, priceRightText = props.priceRightText, yourPosition = props.yourPosition, win = props.win, negative = props.negative, result = props.result, collect = props.collect;
    return (React__default.createElement(Block, null,
        React__default.createElement(Line, null,
            React__default.createElement(Text, { mb: 17 }, "Your History "),
            React__default.createElement(Line, null,
                win && (React__default.createElement(React__default.Fragment, null,
                    React__default.createElement(Text, { color: "green", mr: "6px" }, "WIN"),
                    React__default.createElement("img", { src: WIN, alt: "" }))),
                !win && (React__default.createElement(React__default.Fragment, null,
                    React__default.createElement(Text, { color: "greyText", mr: "6px" }, "LOSE"),
                    React__default.createElement("img", { src: LOSE, alt: "" }))))),
        React__default.createElement(ClosedPrice, { price: price, rightText: priceRightText, result: result, negative: negative }),
        React__default.createElement(LineMargin, null,
            React__default.createElement(Text, { size: "sm", fontWeight: 400 }, "Your Position"),
            React__default.createElement(Text, { size: "sm" }, yourPosition)),
        collect && React__default.createElement(Button$2, { width: '100%', scale: 'md', variant: 'green', disabled: true }, "Collect Winnings")));
};
var Line = styled.div(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n"])));
var Block = styled.div(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n  margin-top: 3px;\n"], ["\n  margin-top: 3px;\n"])));
var LineMargin = styled(Line)(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n  margin-top: 31px;\n  margin-bottom: 23px;\n"], ["\n  margin-top: 31px;\n  margin-bottom: 23px;\n"])));
var templateObject_1$9, templateObject_2$8, templateObject_3$4;

var ProgressBar = function (_a) {
    var best = _a.best;
    var _b = useState({ count: 0, profit: 0 }), count = _b[0], setCount = _b[1];
    var countTrue = function () {
        var count = 0;
        var profit = 0;
        best.map(function (item) {
            if (item.win) {
                count++;
                profit += item.average;
            }
        });
        return { count: count, profit: profit };
    };
    useEffect(function () {
        setCount(countTrue());
    }, [best]);
    return (React__default.createElement("div", null,
        React__default.createElement(ProgressWrap, null,
            React__default.createElement(Progress, null, best.map(function (item, i) { return React__default.createElement(React__default.Fragment, { key: i },
                React__default.createElement(Step, { color: item.win ? '#47DA3B' : '#FF6161' })); }))),
        React__default.createElement(Counter, null,
            React__default.createElement(Text, { fontSize: '21px' },
                count.count,
                "/",
                best.length),
            React__default.createElement(TextProfit, { textAlign: 'right', fontSize: '21px' },
                "+",
                count.profit,
                " BNB"),
            React__default.createElement(TextPercents, null, "100%"),
            React__default.createElement(Text, { textAlign: 'right' }, "$0.177"))));
};
var ProgressWrap = styled.div(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  padding:6px;\n  background: ", ";\n  box-shadow: ", ";\n  border-radius: 5px;\n"], ["\n  padding:6px;\n  background: ", ";\n  box-shadow: ", ";\n  border-radius: 5px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.buttonBg;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow;
});
var Progress = styled.div(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n  display: flex;\n  width: 100%;\n  border-radius: 3px;\n  overflow: hidden;\n"], ["\n  display: flex;\n  width: 100%;\n  border-radius: 3px;\n  overflow: hidden;\n"])));
var Step = styled.div(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  height: 9px;\n  width: 100%;\n  background: ", ";\n  transition: none.3s;\n"], ["\n  height: 9px;\n  width: 100%;\n  background: ", ";\n  transition: none.3s;\n"])), function (_a) {
    var color = _a.color;
    return color;
});
var Counter = styled.div(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n  margin-top: 15px;\n  display:grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 5px;\n"], ["\n  margin-top: 15px;\n  display:grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 5px;\n"])));
var TextProfit = styled(Text)(templateObject_5$2 || (templateObject_5$2 = __makeTemplateObject(["\n  color:", ";\n"], ["\n  color:", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.green;
});
var TextPercents = styled(Text)(templateObject_6$1 || (templateObject_6$1 = __makeTemplateObject(["\n  color:", ";\n"], ["\n  color:", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textGray2;
});
var templateObject_1$8, templateObject_2$7, templateObject_3$3, templateObject_4$2, templateObject_5$2, templateObject_6$1;

var Rounds = function (_a) {
    var best = _a.best;
    var _b = useState({ winCount: 0, totalProfit: 0, loseCount: 0, loseProfit: 0, winProfit: 0, percentWin: 0, persentlose: 0 }), count = _b[0], setCount = _b[1];
    var winCount = function () {
        var winCount = 0;
        var winProfit = 0;
        var totalProfit = 0;
        var loseCount = 0;
        var loseProfit = 0;
        var percentWin = 0;
        var persentlose = 0;
        best.map(function (item) {
            if (item.win) {
                ++winCount;
                winProfit += item.average;
            }
            else {
                ++loseCount;
                loseProfit += item.average;
            }
        });
        totalProfit = winProfit - loseProfit;
        percentWin = +(winCount / best.length * 100).toFixed(2);
        persentlose = 100 - percentWin;
        return { winCount: winCount, totalProfit: totalProfit, loseCount: loseCount, loseProfit: loseProfit, winProfit: winProfit, persentlose: persentlose, percentWin: percentWin };
    };
    useEffect(function () {
        setCount(winCount());
    }, [best]);
    return (React__default.createElement(Wrap$3, null, best.map(function (item, i) {
        return React__default.createElement(Row$1, { key: i },
            React__default.createElement(Column, null,
                React__default.createElement("img", { style: { float: 'left' }, src: i === 0 ? WIN : LOSE, alt: 'some img' }),
                React__default.createElement("div", null,
                    React__default.createElement(Round, { i: i },
                        i === 0 ? count.winCount : i === 1 ? count.loseCount : best.length,
                        " Rounds"),
                    React__default.createElement(Value, { i: i, fontSize: '13px' }, i === 0 ? count.percentWin + " %" : i === 1 ? count.persentlose + " %" : 'Total'))),
            React__default.createElement("div", null,
                React__default.createElement(Round, { textAlign: 'right', i: i },
                    "$",
                    i === 0 ? count.winProfit : i === 1 ? count.loseProfit : count.totalProfit),
                React__default.createElement(Value, { i: i, fontSize: '13px', textAlign: 'right' }, "$ 0.56")));
    })));
};
var Wrap$3 = styled.div(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  background: ", ";\n  padding-bottom: 30px;\n  position: relative;\n  z-index:1;\n  &::before{\n    position: absolute;\n    display: block;\n    content:'';  \n    /* width: 120%; */\n    width: 408px;\n    left: -20px;\n    top:0;\n    z-index:0;\n    height: 100%;\n    background: ", ";\n  }\n"], ["\n  background: ", ";\n  padding-bottom: 30px;\n  position: relative;\n  z-index:1;\n  &::before{\n    position: absolute;\n    display: block;\n    content:'';  \n    /* width: 120%; */\n    width: 408px;\n    left: -20px;\n    top:0;\n    z-index:0;\n    height: 100%;\n    background: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.cardBg;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.cardBg;
});
var Row$1 = styled.div(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n  padding: 17px 0;\n  display: flex;\n  position:relative;\n  z-index:2;\n  justify-content: space-between;\n"], ["\n  padding: 17px 0;\n  display: flex;\n  position:relative;\n  z-index:2;\n  justify-content: space-between;\n"])));
var Round = styled(Text)(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  margin-bottom:5px;\n  color:", ";\n"], ["\n  margin-bottom:5px;\n  color:", ";\n"])), function (_a) {
    var i = _a.i;
    return i === 0 ? '#47DA3B' : i === 1 ? '#FF6161' : 'white';
});
var Value = styled(Text)(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  color:", ";\n"], ["\n  color:", ";\n"])), function (_a) {
    var i = _a.i;
    return i === 2 ? '#A3A3A3' : 'white';
});
var Column = styled.div(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n  display:flex;\n  & img{\n    margin-right: 10px;\n  }\n"], ["\n  display:flex;\n  & img{\n    margin-right: 10px;\n  }\n"])));
var templateObject_1$7, templateObject_2$6, templateObject_3$2, templateObject_4$1, templateObject_5$1;

var Statistic = function (_a) {
    var bestNumber = _a.bestNumber, best = _a.best;
    var nameRow = function (index) {
        switch (index) {
            case 0:
                return { first: 'Average', second: 'return / round' };
            case 1:
                return { first: 'Best round:', second: "#" + (bestNumber === null || bestNumber === void 0 ? void 0 : bestNumber.number) };
            case 2:
                return { first: 'Average position', second: 'enetered / round' };
            default:
                return { first: 'Average', second: 'return / round' };
        }
    };
    return (React__default.createElement(Wrap$2, null, best.map(function (item, i) {
        return React__default.createElement(Row, { key: i },
            React__default.createElement(Text, null, nameRow(i).first),
            React__default.createElement(Best, { fontSize: '13px', textAlign: 'right', color: i !== 2 ? '#4BE43E' : 'white' },
                i === 1 ? React__default.createElement(Text, { color: '#A3A3A3', fontSize: '13px' },
                    "(", bestNumber === null || bestNumber === void 0 ? void 0 :
                    bestNumber.kef,
                    "X)") : null,
                "+",
                item.average,
                "BNB"),
            React__default.createElement(Text, null, nameRow(i).second),
            React__default.createElement(Text, { textAlign: 'right' }, item.round));
    })));
};
var Wrap$2 = styled.div(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  margin-top: 20px;\n"], ["\n  margin-top: 20px;\n"])));
var Row = styled.div(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n  margin: 17px 0;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 5px;\n"], ["\n  margin: 17px 0;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 5px;\n"])));
var Best = styled(Text)(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  display:flex;\n  justify-content: flex-end;\n"], ["\n  display:flex;\n  justify-content: flex-end;\n"])));
var templateObject_1$6, templateObject_2$5, templateObject_3$1;

var data = {
    bestNumber: { number: 2653, kef: 1.55 },
    best: [
        { win: true, average: 0.12, round: 0.1231 },
        { win: false, average: 0.12, round: 0.1231 },
        { win: false, average: 0.12, round: 0.1231 },
    ],
};
var PnlHistoryPanel = function () { return (React__default.createElement(Wrap$1, null,
    React__default.createElement(ProgressBar, { best: data.best }),
    React__default.createElement(Statistic, { bestNumber: data.bestNumber, best: data.best }),
    React__default.createElement(Rounds, { best: data.best }),
    React__default.createElement(ButtonBlock, { width: "100%", variant: "green", scale: "md" },
        "View Reclaimed & Wonv",
        React__default.createElement(Icon$a, { fill: "rgba(0,0,0,0)" })))); };
var ButtonBlock = styled(Button$2)(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  position: relative;\n  top: -30px;\n  z-index: 2;\n"], ["\n  position: relative;\n  top: -30px;\n  z-index: 2;\n"])));
var Wrap$1 = styled.div(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  padding: 0 20px 20px;\n  /* height: 1000px; */\n  background: ", "; \n"], ["\n  padding: 0 20px 20px;\n  /* height: 1000px; */\n  background: ", "; \n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.panel;
});
var templateObject_1$5, templateObject_2$4;

var HistoryPanel = function (_a) {
    var setOpen = _a.setOpen, open = _a.open; _a.children;
    var handleToggle = function () {
        if (setOpen)
            setOpen(!open);
    };
    var _b = useState(0), tabValue = _b[0], setTabValue = _b[1];
    var _c = useState(), valueAccordeon = _c[0], setValueAccordeon = _c[1];
    var cardsAccordeon = [
        {
            id: 1,
            number: '#0022',
            color: 'text',
            text: 'Starting soon',
            icon: React__default.createElement(Icon$2, null),
            content: [
                React__default.createElement(RoundHistory, { price: "$ 400`597", priceRightText: "56.3%", up: "2x Playout  0,281 BNB", down: "2x Playout  0,791 BNB", prizePool: "$ 3`500" }),
            ],
        },
        {
            id: 2,
            number: '#0023',
            color: 'green',
            text: 'Live now',
            icon: React__default.createElement(Icon$1, null),
            content: [
                React__default.createElement(RoundHistory, { price: "$ 400`597", priceRightText: "56.3%", up: "2x Playout  0,281 BNB", down: "2x Playout  0,791 BNB", prizePool: "$ 3`500", openingBlock: "4542" }),
            ],
        },
        {
            id: 3,
            number: '#0024',
            color: 'redBg',
            text: '-0,001 BNB',
            icon: React__default.createElement(Icon, null),
            content: [
                React__default.createElement(RoundHistory, { price: "$ 400`597", priceRightText: "$1,57", up: "2x Playout  0,281 BNB", down: "2x Playout  0,791 BNB", prizePool: "$ 3`500", openingBlock: "483029", closingBlock: "457442", negative: true }),
                React__default.createElement(YourHistory, { price: "+0,001 BNB", priceRightText: "UP", result: "$0.391", yourPosition: "0,001 BNB", win: false, negative: true }),
            ],
        },
        {
            id: 4,
            number: '#0025',
            color: 'green',
            text: '+2,001 BNB',
            icon: React__default.createElement(Icon, null),
            collect: true,
            content: [
                React__default.createElement(RoundHistory, { price: "$ 400`597", priceRightText: "$1,57", up: "2x Playout  0,281 BNB", down: "2x Playout  0,791 BNB", prizePool: "$ 3`500", openingBlock: "483029", closingBlock: "457442" }),
                React__default.createElement(YourHistory, { price: "+0,001 BNB", priceRightText: "UP", result: "$0.391", yourPosition: "0,001 BNB", win: true, collect: true }),
            ],
        },
    ];
    var tabsListSimple = ['All history', 'Collected', 'Uncollected'];
    var _d = useState(0), tabValueSimple = _d[0], setTabValueSimple = _d[1];
    return (React__default.createElement(Panel, { open: open },
        React__default.createElement(Wrap, null,
            React__default.createElement(ButtonToggle, { onClick: handleToggle, open: open, color: valueAccordeon ? 'dark' : 'panel' },
                React__default.createElement(Icon$8, { className: "button" }),
                React__default.createElement(Icon$9, { className: "arrow" })),
            React__default.createElement(ButtonClose, { onClick: handleToggle },
                React__default.createElement(Icon$n, null)),
            React__default.createElement(Title, null,
                React__default.createElement(Text, { size: "lg", mr: 1 },
                    "History",
                    ' '),
                React__default.createElement(Text, { color: "green", size: "lg" }, "(0)")),
            React__default.createElement(TabsWrap, null,
                React__default.createElement(TabsHistory, { tabValue: tabValue, setTabValue: setTabValue })),
            tabValue === 0 && (React__default.createElement(React__default.Fragment, null,
                React__default.createElement(SimpleTabsWrap, null,
                    React__default.createElement(SimpleTabs, { tabsList: tabsListSimple, tabValue: tabValueSimple, setTabValue: setTabValueSimple })),
                tabValueSimple === 0 && (
                // <NoHistory>
                //   <Text mb={15}>No prediction history available</Text>
                //   <Text size="sm" fontWeight={400} letterSpacing="0.05em">
                //     If you are sure you should see history here, make sure you`re
                //     connected to the correct wallet and try again
                //   </Text>
                // </NoHistory>
                React__default.createElement(Accordeon, { value: valueAccordeon, setValue: setValueAccordeon, cards: cardsAccordeon })),
                tabValueSimple === 1 && (React__default.createElement(Accordeon, { value: valueAccordeon, setValue: setValueAccordeon, cards: cardsAccordeon.filter(function (el) { return el.id === 4; }) })),
                tabValueSimple === 2 && (React__default.createElement(Accordeon, { value: valueAccordeon, setValue: setValueAccordeon, cards: cardsAccordeon.filter(function (el) { return el.id === 3; }) })))),
            tabValue === 1 && React__default.createElement(PnlHistoryPanel, null))));
};
HistoryPanel.defaultProps = {
    open: true,
    setOpen: function () { },
};
var Panel = styled.div(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  position: fixed;\n  right: 0;\n  top: 0; \n  padding-left: 20px;  \n  width: ", ";\n  transition: all 0.3s ease, overflow-y 0ms;\n  overflow-y: ", ";\n"], ["\n  position: fixed;\n  right: 0;\n  top: 0; \n  padding-left: 20px;  \n  width: ", ";\n  transition: all 0.3s ease, overflow-y 0ms;\n  overflow-y: ", ";\n"])), function (_a) {
    var open = _a.open;
    return (open ? '436px' : '8px');
}, function (_a) {
    var open = _a.open;
    return (open ? 'auto' : 'none');
});
var Wrap = styled.div(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  position: relative; \n  background: ", "; \n  height: 100vh;\n  width: 416px;\n"], ["\n  position: relative; \n  background: ", "; \n  height: 100vh;\n  width: 416px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.panel;
});
var ButtonToggle = styled.button(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: absolute;\n  left: -20px;\n  top: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100px;\n  padding: 10px 8px 10px;\n  background: none;\n  transform: translateY(-50%);\n  border: none;\n  cursor: pointer;\n  & .arrow {\n    transform: ", ";\n    transition: 0.3s;\n    margin-left: 5px;\n  }\n  & .button {\n    position: absolute;\n    left: 4px;\n    & path {\n      transition: 0.3s;\n      fill: ", ";\n    }\n  }\n"], ["\n  position: absolute;\n  left: -20px;\n  top: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100px;\n  padding: 10px 8px 10px;\n  background: none;\n  transform: translateY(-50%);\n  border: none;\n  cursor: pointer;\n  & .arrow {\n    transform: ", ";\n    transition: 0.3s;\n    margin-left: 5px;\n  }\n  & .button {\n    position: absolute;\n    left: 4px;\n    & path {\n      transition: 0.3s;\n      fill: ",
    ";\n    }\n  }\n"])), function (_a) {
    var open = _a.open;
    return (open ? 'scale(-1,1)' : 'scale(1,1)');
}, function (_a) {
    var theme = _a.theme, color = _a.color;
    return color === 'panel' ? theme.colors.panel : theme.colors.dark;
});
var ButtonClose = styled.button(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: block;\n  margin-left: auto;\n  margin-bottom: 50px;\n  padding: 13px 13px 0;\n  border: none;\n  background: none;\n  cursor: pointer;\n"], ["\n  display: block;\n  margin-left: auto;\n  margin-bottom: 50px;\n  padding: 13px 13px 0;\n  border: none;\n  background: none;\n  cursor: pointer;\n"])));
var Title = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  margin-bottom: 22px;\n  padding: 0 20px;\n"], ["\n  display: flex;\n  margin-bottom: 22px;\n  padding: 0 20px;\n"])));
var TabsWrap = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  margin-bottom: 30px;\n  padding: 0 20px;\n"], ["\n  margin-bottom: 30px;\n  padding: 0 20px;\n"])));
styled.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"])));
var SimpleTabsWrap = styled.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  margin-bottom: 33px;\n  padding: 0 20px;\n"], ["\n  margin-bottom: 33px;\n  padding: 0 20px;\n"])));
styled.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  max-width: 340px;\n  margin: 0 auto;\n  padding: 170px 20px;\n  text-align: center;\n"], ["\n  max-width: 340px;\n  margin: 0 auto;\n  padding: 170px 20px;\n  text-align: center;\n"])));
var templateObject_1$4, templateObject_2$3, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;

function Logo(props) {
    return (React.createElement("svg", __assign({ width: 171, height: 51, viewBox: "0 0 171 51", fill: "none", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink" }, props),
        React.createElement("g", { filter: "url(#prefix__filter0_dd)" },
            React.createElement("path", { d: "M150.797 14.453c.703 0 1.404.091 2.084.27a8.553 8.553 0 013.074 1.386c.932.668 1.628 1.464 2.071 2.394.473.93.584 1.895.329 2.87a2.122 2.122 0 01-1.024 1.34h-.008a2.12 2.12 0 01-2.656-.419c-.301-.324-.48-.701-.486-1.124v-.01c.004-.358-.056-.61-.148-.785l-.004-.008-.004-.008a2.35 2.35 0 00-.473-.634 5.126 5.126 0 00-.86-.69c-.238-.146-.627-.297-1.191-.446a3.794 3.794 0 00-.958-.135 2.388 2.388 0 00-.646.084h-.005c-.402.109-.567.295-.628.526-.094.361-.012.713.326 1.09.398.428 1.002.908 1.831 1.437 1.62 1.06 2.72 1.853 3.258 2.366.865.83 1.459 1.645 1.735 2.447s.27 1.716.017 2.697a4.823 4.823 0 01-1.725 2.64c-.852.656-1.853 1.078-2.994 1.272a7.904 7.904 0 01-3.304-.153c-1.257-.296-2.346-.79-3.259-1.49-.913-.698-1.574-1.556-1.959-2.563-.384-1.007-.435-2.085-.146-3.195.184-.703.54-1.247 1.11-1.564.344-.21.738-.324 1.14-.33.176 0 .352.023.522.068a1.828 1.828 0 011.231.993c.241.444.303.963.176 1.451a5.695 5.695 0 00-.175.934 1.15 1.15 0 00.128.59v.004c.068.149.253.343.65.556.397.213.937.41 1.656.599.362.102.736.157 1.113.163a3.13 3.13 0 00.843-.11c.522-.147.81-.441.93-.902.047-.178-.027-.508-.567-1.039-.359-.338-1.232-.976-2.658-1.92-1.576-1.024-2.735-2.045-3.444-3.067v-.003c-.738-1.084-.91-2.34-.549-3.724.278-1.067.832-1.933 1.661-2.58a5.994 5.994 0 012.831-1.195 7.982 7.982 0 011.155-.083zm0-2.911c-.527 0-1.053.038-1.574.115H149.203a8.878 8.878 0 00-4.18 1.78c-1.339 1.044-2.243 2.438-2.687 4.142-.38 1.454-.368 2.863.028 4.163-.799.541-1.706 1.497-2.135 3.142-.448 1.715-.365 3.39.245 4.978.581 1.507 1.559 2.795 2.908 3.83 1.223.937 2.678 1.61 4.322 2.003a10.804 10.804 0 004.468.2h.024c1.616-.275 3.055-.891 4.277-1.833l.068-.05.018-.016a7.68 7.68 0 002.686-4.146c.406-1.566.381-3.04-.081-4.384a6.266 6.266 0 00-.143-.376 4.99 4.99 0 002.142-2.97c.429-1.645.245-3.336-.532-4.893-.653-1.354-1.659-2.525-2.991-3.478a11.479 11.479 0 00-4.067-1.844 11.123 11.123 0 00-2.776-.363zM77.067 15.164a8.76 8.76 0 012.229.3c1.283.339 2.455 1.002 3.49 1.978.275.223.522.478.735.76a5.8 5.8 0 01.586.827c.169.287.296.52.377.692.086.16.202.406.36.763.157.357.252.566.295.656l.004.008a1.905 1.905 0 01.04 1.48 1.83 1.83 0 01-1.002 1.058 1.918 1.918 0 01-2.53-.959l-.337-.724-.27-.62a2.324 2.324 0 00-.208-.383l-.006-.012a1.602 1.602 0 00-.264-.362l-.023-.027a3.799 3.799 0 00-.328-.37c-.93-.773-1.91-1.184-2.915-1.22a4.525 4.525 0 00-.236-.005c-.926 0-1.823.286-2.676.853-.96.609-1.662 1.425-2.088 2.42-.421.978-.507 2.045-.254 3.176.278 1.087.828 1.977 1.637 2.644.824.672 1.756 1.04 2.76 1.092.054 0 .107.003.16.003a4.103 4.103 0 002.574-.9c.455-.339.614-.549.668-.668l.008-.014.008-.017a50.764 50.764 0 00-2.318-.439 1.886 1.886 0 01-1.233-.786 1.821 1.821 0 01-.307-1.434 1.9 1.9 0 01.78-1.243 1.788 1.788 0 011.055-.344c.126 0 .252.013.376.036 1.283.237 2.746.542 4.35.897a1.888 1.888 0 011.223.87 1.831 1.831 0 01.253 1.525l-.12.537c-.07.389-.163.773-.281 1.15a6.024 6.024 0 01-.347.98l-.004.01c-.361.696-.952 1.365-1.756 1.989a8.139 8.139 0 01-3.18 1.544h-.004c-.54.118-1.09.178-1.642.18a6.913 6.913 0 01-1.612-.19 9.346 9.346 0 01-2.934-1.218 8.588 8.588 0 01-2.385-2.242 8.748 8.748 0 01-1.406-2.98 8.416 8.416 0 01-.123-3.916c.27-1.295.766-2.44 1.472-3.404a9.155 9.155 0 012.582-2.459 9.203 9.203 0 013.305-1.354 7.538 7.538 0 011.462-.141v.003zm0-2.914c-.675-.001-1.35.064-2.013.194-1.54.3-3.008.898-4.322 1.76a12.064 12.064 0 00-3.37 3.207c-.945 1.297-1.603 2.813-1.958 4.508a11.299 11.299 0 00.157 5.252c.367 1.422 1 2.762 1.866 3.948a11.484 11.484 0 003.19 3.001 12.212 12.212 0 003.823 1.591 9.843 9.843 0 002.266.263 10.693 10.693 0 002.254-.246h.01l.013-.003.017-.005a11.01 11.01 0 004.31-2.079c1.138-.883 1.997-1.875 2.553-2.947l.013-.025.012-.024.004-.009.016-.03.014-.03a8.89 8.89 0 00.506-1.402c.139-.455.252-.918.338-1.386l.099-.448a4.82 4.82 0 00.05-2.095c.43-.458.764-.997.986-1.585V23.647a4.797 4.797 0 00-.106-3.675l-.01-.024-.012-.024-.003-.008-.013-.027-.011-.024c-.006-.012-.058-.12-.248-.553a14.674 14.674 0 00-.428-.907c-.115-.238-.27-.516-.463-.849a8.78 8.78 0 00-.82-1.168 7.234 7.234 0 00-1.086-1.13c-1.368-1.28-2.94-2.156-4.665-2.61a11.697 11.697 0 00-2.971-.395l.002-.003z", fill: "#4BE43E" }),
            React.createElement("g", { filter: "url(#prefix__filter1_d)" },
                React.createElement("path", { d: "M85.145 21.071l-.004-.008c-.043-.09-.142-.31-.295-.656a11.52 11.52 0 00-.36-.762 9.065 9.065 0 00-.377-.693 5.834 5.834 0 00-.586-.826 4.312 4.312 0 00-.735-.762c-1.035-.976-2.21-1.641-3.49-1.978-1.28-.337-2.523-.391-3.694-.157a9.203 9.203 0 00-3.304 1.354 9.166 9.166 0 00-2.582 2.458 8.565 8.565 0 00-1.366 2.95 8.28 8.28 0 011.096-2.075 9.165 9.165 0 012.582-2.459 9.216 9.216 0 013.304-1.354c1.171-.231 2.415-.178 3.694.159 1.28.336 2.455 1.003 3.49 1.978.275.222.522.478.735.761.22.258.415.534.586.826.17.288.296.52.377.693.087.159.203.406.36.763.157.356.252.566.295.655l.004.008a1.9 1.9 0 01.166.905 2.014 2.014 0 00.273-1.044 1.907 1.907 0 00-.169-.736zM83.787 25.07a2.05 2.05 0 00-.369-.438 1.875 1.875 0 00-.85-.428 113.536 113.536 0 00-4.351-.897 1.808 1.808 0 00-1.434.307 1.894 1.894 0 00-.785 1.24 1.926 1.926 0 00-.03.22c.137-.23.322-.43.541-.585a1.812 1.812 0 011.431-.307c1.283.237 2.746.541 4.351.897a1.887 1.887 0 011.22.866 1.831 1.831 0 01.253 1.526l-.12.536a9.753 9.753 0 01-.198.871c.067-.183.13-.382.187-.594.118-.377.212-.761.282-1.15l.12-.538a1.832 1.832 0 00-.248-1.526z", fill: "#E6E8F2" }),
                React.createElement("path", { d: "M84.876 21.946l-.005-.008c-.043-.09-.142-.31-.295-.655a11.695 11.695 0 00-.36-.763 9.028 9.028 0 00-.376-.693 5.786 5.786 0 00-.587-.826 4.294 4.294 0 00-.735-.761c-1.035-.975-2.209-1.641-3.49-1.978-1.28-.337-2.522-.388-3.693-.159a9.215 9.215 0 00-3.305 1.354 9.165 9.165 0 00-2.582 2.459 8.281 8.281 0 00-1.096 2.075 8.415 8.415 0 00.018 4.37 8.757 8.757 0 001.405 2.975 8.594 8.594 0 002.384 2.245c.902.571 1.895.984 2.935 1.219.528.126 1.07.189 1.612.188a7.787 7.787 0 001.643-.18h.004a8.128 8.128 0 003.18-1.543c.803-.624 1.394-1.294 1.755-1.99l.005-.009c.056-.12.109-.248.16-.386.08-.287.145-.579.198-.87l.12-.537a1.833 1.833 0 00-.254-1.526 1.892 1.892 0 00-1.22-.865 122.43 122.43 0 00-4.351-.897 1.812 1.812 0 00-1.434.304c-.22.154-.403.354-.54.586-.037.432.083.863.338 1.213a1.892 1.892 0 001.24.788c1.05.18 1.828.328 2.319.439a.152.152 0 01-.01.017l-.006.014c-.055.119-.214.33-.67.667-.03.024-.06.046-.092.068-.759.576-1.695.87-2.646.83-1.008-.053-1.936-.42-2.76-1.091-.81-.669-1.359-1.558-1.637-2.645a5.286 5.286 0 01-.041-2.239c.066-.321.165-.635.295-.937.426-.995 1.127-1.809 2.088-2.42.923-.615 1.901-.9 2.912-.848 1.005.037 1.986.448 2.915 1.219.117.116.227.24.328.37l.023.027c.105.108.195.231.266.365l.007.011c.08.12.15.249.207.383l.27.62.338.724a1.91 1.91 0 001.075 1.003 1.853 1.853 0 001.454-.043c.36-.154.66-.42.858-.759a1.9 1.9 0 00-.168-.905z", fill: "#F9F8F8" })),
            React.createElement("g", { filter: "url(#prefix__filter2_d)" },
                React.createElement("path", { d: "M91.542 14.58c.224.002.446.04.658.113.446.123.84.386 1.127.75l.013.015 2.6 4.072 3.044 4.74 2.455 3.983a2.096 2.096 0 01-.064 2.347 2.089 2.089 0 01-.601.564 2.072 2.072 0 01-1.583.3h-.012a2.117 2.117 0 01-1.318-.902l-1.833-2.678c-1.6.267-3.178.581-4.733.945l-.528 3.122-.004.015a2.22 2.22 0 01-.918 1.317l-.006.005-.005.003a2.064 2.064 0 01-1.585.301h-.012a2.116 2.116 0 01-1.318-.9 1.963 1.963 0 01-.325-1.568l2.729-14.784v-.006a2.156 2.156 0 011.575-1.638c.206-.077.423-.116.642-.116h.002zm.643 9.733l1.466-.279-1.067-1.79-.395 2.069h-.004zm-.643-12.644c-.51 0-1.015.082-1.499.244a5.068 5.068 0 00-3.558 3.806v.005l-.009.043-.007.043-2.722 14.751a4.898 4.898 0 00.773 3.764 4.998 4.998 0 003.055 2.098h.003l.046.011.047.01h.006a4.989 4.989 0 003.736-.71l.007-.004.005-.003.006-.004.029-.02.029-.019.005-.003a5.124 5.124 0 002.082-3.005l.005-.018.026-.108.019-.11.202-1.184c.288-.06.576-.117.865-.172l.766 1.107a4.997 4.997 0 003.055 2.098h.008l.044.01.045.01h.007c.334.068.675.102 1.016.102a5.077 5.077 0 003.133-1.112 5.097 5.097 0 001.777-2.814 4.963 4.963 0 00-.646-3.792l-2.444-3.953-.014-.023-.014-.023-3.043-4.739v-.005l-2.598-4.062-.078-.122-.09-.114-.013-.016a5.088 5.088 0 00-2.533-1.72 4.92 4.92 0 00-1.526-.246l-.003-.001z", fill: "#4BE43E" }),
                React.createElement("g", { filter: "url(#prefix__filter3_d)" },
                    React.createElement("path", { d: "M87.136 31.89l2.727-14.781v-.006a2.152 2.152 0 011.576-1.635c.42-.152.881-.152 1.301 0 .445.123.84.383 1.127.745l.013.016 2.603 4.072 2.579 4.016-.076-.124-3.044-4.739-2.604-4.073-.013-.015a2.175 2.175 0 00-1.125-.75c-.42-.152-.88-.15-1.3.004a2.144 2.144 0 00-1.576 1.636v.007l-2.728 14.782a1.962 1.962 0 00.325 1.566c.082.122.176.236.28.339a1.924 1.924 0 01-.065-1.06z", fill: "#E6E8F2" }),
                    React.createElement("path", { d: "M101.439 28.175l-2.379-3.859-2.58-4.016-2.602-4.073-.01-.014a2.175 2.175 0 00-1.126-.75 1.905 1.905 0 00-1.3 0 2.146 2.146 0 00-1.576 1.638v.006l-2.73 14.784c-.077.352-.053.72.068 1.06.287.28.647.475 1.038.561h.012a2.07 2.07 0 001.584-.301l.006-.003.005-.004c.46-.309.787-.779.919-1.318l.004-.015.528-3.122a73.815 73.815 0 014.733-.944l1.83 2.673c.306.461.779.785 1.319.902h.012a2.07 2.07 0 001.583-.3 2.099 2.099 0 00.665-2.911l-.003.006zm-8.855-6.004l.532.89.54.9-.737.14-.728.138.393-2.068z", fill: "#F9F8F8" }))),
            React.createElement("g", { filter: "url(#prefix__filter4_d)" },
                React.createElement("path", { d: "M149.519 20.785c.397.428 1.001.908 1.83 1.438 1.621 1.06 2.72 1.852 3.258 2.37.865.828 1.459 1.643 1.735 2.446.155.459.225.943.207 1.427.126-.765.087-1.479-.135-2.13-.276-.803-.87-1.618-1.735-2.448-.54-.514-1.636-1.306-3.258-2.37-.829-.529-1.433-1.008-1.83-1.437a1.4 1.4 0 01-.327-.553.674.674 0 00-.067.168c-.098.361-.016.714.322 1.089zM144.079 24.682c.532-.311 1.093-.41 1.661-.26a1.823 1.823 0 011.232.992c.129.245.208.514.233.791l.011-.043a1.987 1.987 0 00-.176-1.452 1.832 1.832 0 00-1.231-.992c-.568-.15-1.129-.051-1.662.26-.567.318-.926.862-1.11 1.565-.108.408-.17.828-.183 1.25.029-.18.067-.363.114-.546.183-.703.543-1.248 1.111-1.565zM147.1 28.389v.007c.068.149.252.343.65.556.398.214.937.41 1.656.599.743.195 1.392.203 1.958.043.522-.145.811-.44.93-.9a.566.566 0 00-.06-.38c-.156.279-.414.468-.801.577-.565.158-1.215.152-1.958-.043-.719-.189-1.266-.39-1.655-.599-.389-.208-.582-.406-.651-.556v-.008a1.228 1.228 0 01-.121-.392 4.113 4.113 0 00-.076.506c-.01.204.034.408.128.59z", fill: "#E6E8F2" }),
                React.createElement("path", { d: "M146.736 16.361a5.993 5.993 0 012.832-1.195 8.062 8.062 0 013.237.188 8.54 8.54 0 013.076 1.387c.933.667 1.629 1.464 2.072 2.393.303.582.461 1.229.461 1.886.166-.88.033-1.748-.392-2.59-.443-.928-1.139-1.725-2.071-2.392a8.565 8.565 0 00-3.074-1.386 8.066 8.066 0 00-3.238-.188 5.991 5.991 0 00-2.834 1.194c-.829.646-1.382 1.513-1.661 2.58a5.397 5.397 0 00-.179 1.219c.028-.169.067-.339.11-.513.278-1.07.831-1.936 1.661-2.583z", fill: "#E6E8F2" }),
                React.createElement("path", { d: "M149.263 18.992c.061-.231.226-.417.628-.526h.005c.435-.123.964-.116 1.604.051.564.148.953.3 1.191.446.31.198.598.43.86.69.192.183.352.397.472.634l.004.008.004.007c.093.174.152.428.148.786v.01c.006.422.186.8.487 1.123.277.307.635.528 1.033.637a2.133 2.133 0 001.621-.218h.008a2.127 2.127 0 001.022-1.333c.024-.094.045-.188.062-.281 0-.657-.158-1.304-.46-1.886-.443-.929-1.14-1.726-2.072-2.393a8.549 8.549 0 00-3.074-1.386 8.06 8.06 0 00-3.237-.188 5.997 5.997 0 00-2.832 1.195c-.83.646-1.383 1.513-1.661 2.58a5.805 5.805 0 00-.11.512 4.16 4.16 0 00.728 2.505c.71 1.023 1.869 2.042 3.444 3.066 1.426.948 2.296 1.58 2.658 1.92.54.532.614.862.567 1.04a1.317 1.317 0 01-.129.325.56.56 0 01.06.378c-.12.46-.405.756-.929.901-.566.159-1.216.152-1.959-.043-.718-.188-1.266-.39-1.656-.599-.389-.208-.581-.406-.649-.556v-.008a1.15 1.15 0 01-.128-.59c.015-.17.04-.338.076-.505a.934.934 0 01-.007-.198c.03-.3.085-.598.164-.89a2.095 2.095 0 00-.234-.791 1.832 1.832 0 00-1.231-.993c-.568-.149-1.13-.05-1.662.26-.567.318-.927.863-1.11 1.565a5.765 5.765 0 00-.115.547 4.95 4.95 0 00.33 1.945c.388 1.006 1.047 1.861 1.959 2.564.912.702 2.002 1.194 3.259 1.49a7.912 7.912 0 003.304.152c1.141-.194 2.142-.617 2.994-1.272a4.827 4.827 0 001.725-2.637c.05-.192.09-.38.121-.566a4.002 4.002 0 00-.207-1.428c-.276-.802-.87-1.617-1.735-2.446-.54-.515-1.636-1.307-3.258-2.37-.829-.53-1.433-1.009-1.83-1.438-.338-.376-.421-.727-.327-1.089a.677.677 0 01.068-.168 1.006 1.006 0 01.006-.539z", fill: "#F9F8F8" })),
            React.createElement("path", { d: "M109.723 23.202l1.832 3.193c.033.057.068.11.106.164l-1.936-3.373-.002.016z", fill: "#F9F8F8" }),
            React.createElement("path", { d: "M113.93 22.083l-3.479-6.045a2.336 2.336 0 00-.146-.236l3.619 6.287.006-.006z", fill: "#F9F854" }),
            React.createElement("g", { filter: "url(#prefix__filter5_d)" },
                React.createElement("path", { d: "M107.733 13.911c.061 0 .123 0 .184.008.274.02.54.097.783.226a1.99 1.99 0 011.175.988l4.049 7.033a66.452 66.452 0 015.871-5.319c.227-.282.523-.5.859-.634.223-.085.46-.13.699-.129.135 0 .271.013.405.037h.004a2.064 2.064 0 011.35.87 2.022 2.022 0 01.343 1.575c-.274 1.505-.622 3.83-1.043 6.974-.419 3.13-.753 5.418-1.002 6.864v.005a2.071 2.071 0 01-.868 1.354c-.341.247-.751.38-1.172.38a2.193 2.193 0 01-1.163-.335 2.072 2.072 0 01-.588-.573 2.038 2.038 0 01-.342-1.574c.172-.948.563-3.639 1.172-8.073a81.172 81.172 0 00-3.359 3.444 2.14 2.14 0 01-1.452.682h-.079a2.061 2.061 0 01-1.552-.692 2.273 2.273 0 01-.449-.553l-2.405-4.19v.013c-.115.767-.29 1.912-.526 3.434l-.689 4.57a2.063 2.063 0 01-.842 1.39 1.99 1.99 0 01-1.209.406c-.113 0-.226-.009-.338-.026a2.098 2.098 0 01-1.384-.812l-.006-.008-.006-.008a2.108 2.108 0 01-.368-1.566l.506-3.39c.254-1.582.445-2.805.574-3.668.128-.863.273-1.936.432-3.219.138-1.136.257-2.315.358-3.54a2.071 2.071 0 01.73-1.436 2.02 2.02 0 011.351-.508h-.003zm.003-2.911a4.903 4.903 0 00-3.241 1.21 5 5 0 00-1.732 3.407 94.855 94.855 0 01-.346 3.424c-.157 1.26-.299 2.316-.422 3.138-.127.846-.318 2.07-.568 3.638v.03l-.508 3.39a5.006 5.006 0 00.864 3.67l.005.008.042.06.046.058.004.005a4.972 4.972 0 003.246 1.903 4.897 4.897 0 003.702-.917 5.01 5.01 0 001.988-3.3l.119-.835a4.92 4.92 0 002.62.745h.26c.238-.015.475-.047.709-.094-.044.277-.077.47-.102.606a5.03 5.03 0 00.809 3.749 5.004 5.004 0 003.213 2.082c.307.056.618.085.93.086a5.008 5.008 0 003.189-1.18 5.034 5.034 0 001.706-2.948l.005-.027v-.023c.254-1.476.596-3.817 1.017-6.96.413-3.08.756-5.377 1.02-6.831a5.028 5.028 0 00-.806-3.752 5.002 5.002 0 00-3.215-2.083l-.022-.005h-.019a5.213 5.213 0 00-.896-.08 4.836 4.836 0 00-3.559 1.55 65.826 65.826 0 00-3.211 2.764l-2.173-3.776a4.846 4.846 0 00-2.582-2.255 4.886 4.886 0 00-1.671-.44l-.05-.004h-.014a4.933 4.933 0 00-.359-.013h.002z", fill: "#4BE43E" }),
                React.createElement("g", { filter: "url(#prefix__filter6_d)" },
                    React.createElement("path", { d: "M104.361 30.574l.507-3.393c.253-1.583.444-2.805.573-3.668.128-.862.272-1.934.432-3.214.135-1.136.254-2.316.358-3.54a2.113 2.113 0 01.731-1.438 2.102 2.102 0 011.531-.5c.273.02.54.098.782.226.418.13.78.396 1.03.755l-.429-.745a1.989 1.989 0 00-1.175-.988 1.99 1.99 0 00-.783-.226 2.028 2.028 0 00-1.531.5 2.065 2.065 0 00-.73 1.438 94.406 94.406 0 01-.359 3.54 135.398 135.398 0 01-.431 3.215c-.129.859-.32 2.081-.574 3.667l-.506 3.39c-.089.55.043 1.114.368 1.567l.006.008.006.007c.071.092.149.178.234.259a2.167 2.167 0 01-.04-.86zM117.854 32.564c.171-.948.562-3.638 1.172-8.072-.274.264-.548.532-.822.805-.468 3.377-.776 5.472-.925 6.284a2.02 2.02 0 00.342 1.575c.077.11.164.213.26.308a2.055 2.055 0 01-.027-.9zM120.369 17.752c.226-.283.523-.503.86-.637.353-.13.735-.161 1.105-.09h.004c.413.072.794.268 1.093.563a2.14 2.14 0 00-1.667-1.544h-.007a2.059 2.059 0 00-1.106.09 2.095 2.095 0 00-.86.637 66.378 66.378 0 00-5.865 5.313l.568.988a66.47 66.47 0 015.875-5.32z", fill: "#E6E8F2" }),
                    React.createElement("path", { d: "M123.431 17.59a2.054 2.054 0 00-1.093-.564h-.004a2.058 2.058 0 00-1.105.089 2.091 2.091 0 00-.86.637 66.462 66.462 0 00-5.875 5.32l-.569-.99-.006.007-3.615-6.287a1.97 1.97 0 00-1.03-.752 1.98 1.98 0 00-.782-.226 2.101 2.101 0 00-1.531.5c-.424.363-.687.88-.731 1.438a96.607 96.607 0 01-.358 3.54c-.16 1.283-.304 2.355-.433 3.214-.128.86-.319 2.081-.572 3.665l-.508 3.39c-.044.286-.03.578.04.858a2.09 2.09 0 001.15.559 2.013 2.013 0 001.546-.379 2.067 2.067 0 00.842-1.391l.682-4.563c.236-1.519.412-2.663.526-3.433v-.014l.573.998v-.014l1.936 3.375.469.816a2.3 2.3 0 00.448.553 2.07 2.07 0 001.615.691h.014a2.145 2.145 0 001.452-.682v-.003a86.327 86.327 0 012.537-2.64c.274-.271.549-.54.823-.805-.601 4.435-.987 7.125-1.158 8.068-.058.298-.049.605.027.9.298.295.679.49 1.092.563a2.004 2.004 0 001.572-.344 2.07 2.07 0 00.868-1.354v-.004c.249-1.444.583-3.732 1.002-6.863.421-3.145.769-5.468 1.042-6.97.059-.3.05-.608-.026-.903z", fill: "#F9F8F8" }))),
            React.createElement("g", { filter: "url(#prefix__filter7_dd)" },
                React.createElement("path", { d: "M136.853 14.088a2.107 2.107 0 012.033 1.697 2.08 2.08 0 01-.316 1.557 1.936 1.936 0 01-1.318.87l-3.98.744c-1.53.274-2.728.497-3.594.67.111.782.251 1.667.42 2.655a777.22 777.22 0 016.644-1.266c.135-.026.273-.04.412-.04a2.106 2.106 0 012.034 1.697 2.111 2.111 0 01-.343 1.563 2.1 2.1 0 01-1.34.87 744.47 744.47 0 00-6.618 1.26c.264 1.293.457 2.287.581 2.983 3.051-.541 5.61-1.007 7.678-1.397a2.22 2.22 0 01.412-.039c.411 0 .812.125 1.148.362a2.078 2.078 0 01.864 2.15 2.082 2.082 0 01-1.658 1.617c-2.35.442-5.562 1.02-9.636 1.736a2.01 2.01 0 01-1.155-.121l-.013-.005-.012-.007a2.26 2.26 0 01-.832-.687 2.073 2.073 0 01-.547-1.063v-.012c-.087-.55-.512-2.782-1.279-6.713-.553-2.866-.906-5.144-1.057-6.835a2.138 2.138 0 01.043-.726c.077-.401.269-.771.552-1.065a2.052 2.052 0 011.069-.626H127.058c1.16-.235 2.726-.528 4.698-.88 1.966-.37 3.526-.671 4.679-.904h.005a2.23 2.23 0 01.413-.039v-.006zm0-2.905c-.317 0-.634.03-.945.09h-.02l-.015-.002h-.013c-1.129.228-2.686.53-4.628.894-1.977.358-3.573.658-4.746.895h-.019l-.025.005-.023.005h-.007l-.014.004-.015.003a4.97 4.97 0 00-2.531 1.478 5.045 5.045 0 00-1.266 2.424 5.024 5.024 0 00-.098 1.636c.155 1.74.495 3.976 1.04 6.83v.005l.054.278c.94 4.817 1.204 6.251 1.261 6.606v.004l.004.028v.014l.004.03.008.038a5.02 5.02 0 001.179 2.383 5.162 5.162 0 001.771 1.422l.012.005.091.046.095.039.013.005a4.915 4.915 0 002.768.292c4.06-.713 7.31-1.298 9.657-1.739a4.999 4.999 0 003.954-3.88 5.008 5.008 0 00-2.054-5.151 5.026 5.026 0 00-.822-.458 4.965 4.965 0 00-.923-5.95c.148-.17.283-.351.406-.54a4.99 4.99 0 00-1.402-6.9 4.902 4.902 0 00-2.751-.848v.009z", fill: "#4BE43E" }),
                React.createElement("g", { filter: "url(#prefix__filter8_d)" },
                    React.createElement("path", { d: "M129.294 33.477a2.074 2.074 0 01-.547-1.064V32.4c-.089-.549-.514-2.783-1.281-6.71-.553-2.867-.904-5.147-1.054-6.837a2.118 2.118 0 01.044-.728c.076-.4.268-.77.551-1.064a2.04 2.04 0 011.069-.626H128.089c1.16-.234 2.726-.528 4.698-.88 1.967-.374 3.526-.677 4.679-.908h.006c.291-.057.59-.051.878.017a2.085 2.085 0 00-.359-.294 2.016 2.016 0 00-1.553-.32h-.005c-1.153.233-2.713.534-4.68.903-1.971.354-3.538.648-4.698.88H127.042a2.046 2.046 0 00-1.068.627 2.109 2.109 0 00-.552 1.065 2.143 2.143 0 00-.044.727c.15 1.688.502 3.966 1.054 6.833.768 3.93 1.193 6.161 1.279 6.713v.011c.075.401.265.771.547 1.064.218.293.504.528.832.687l.013.006.013.005c.114.047.232.084.352.11a2.248 2.248 0 01-.174-.205z", fill: "#E6E8F2" }),
                    React.createElement("path", { d: "M137.773 21.534a2.07 2.07 0 01.878.016 2.123 2.123 0 00-.359-.294 2.014 2.014 0 00-1.553-.32c-2.609.49-5.425 1.032-6.641 1.267.041.25.084.508.13.774 1.037-.208 4.159-.806 7.545-1.443zM140.179 28.467c.286-.056.58-.052.864.013a2.12 2.12 0 00-1.084-.609 2.018 2.018 0 00-.813 0c-1.862.35-5.017.921-7.677 1.396.054.282.1.534.14.756 3.049-.54 6.502-1.165 8.57-1.556z", fill: "#E6E8F2" }),
                    React.createElement("path", { d: "M130.274 33.7a887.985 887.985 0 009.636-1.737 2.081 2.081 0 001.588-1.406 2.096 2.096 0 00-.456-2.074 2.081 2.081 0 00-.864-.013 997.17 997.17 0 01-8.571 1.557 53.793 53.793 0 00-.139-.756c-.123-.694-.317-1.688-.581-2.982 1.007-.2 3.213-.62 6.618-1.26a2.1 2.1 0 001.339-.87 2.11 2.11 0 00.343-1.563 1.994 1.994 0 00-.533-1.045 2.07 2.07 0 00-.878-.016 909.2 909.2 0 00-7.548 1.442l-.131-.774c-.362.067.239-.048 0 0a99.722 99.722 0 01-.42-2.655c.865-.173 2.063-.396 3.594-.67l3.98-.744a1.936 1.936 0 001.318-.87 2.08 2.08 0 00.316-1.557 1.976 1.976 0 00-.533-1.044 2.078 2.078 0 00-.878-.017h-.006c-1.154.232-2.715.534-4.682.905-1.971.354-3.538.647-4.698.88h-.012a2.04 2.04 0 00-1.069.626 2.105 2.105 0 00-.552 1.065 2.117 2.117 0 00-.043.727c.15 1.688.501 3.966 1.054 6.833.767 3.93 1.192 6.16 1.279 6.713v.011c.074.4.264.771.547 1.064.054.074.114.144.177.21.264.061.538.067.805.02z", fill: "#F9F8F8" })))),
        React.createElement("g", { filter: "url(#prefix__filter9_dd)" },
            React.createElement("path", { fill: "url(#prefix__pattern0)", d: "M9 11.921h49.722v24.861H9z" })),
        React.createElement("defs", null,
            React.createElement("filter", { id: "prefix__filter0_dd", x: 56.168, y: 0, width: 114.221, height: 50.063, filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React.createElement("feOffset", { dy: 4 }),
                React.createElement("feGaussianBlur", { stdDeviation: 4.5 }),
                React.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0" }),
                React.createElement("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React.createElement("feOffset", { dy: -2 }),
                React.createElement("feGaussianBlur", { stdDeviation: 4.5 }),
                React.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.17 0" }),
                React.createElement("feBlend", { in2: "effect1_dropShadow", result: "effect2_dropShadow" }),
                React.createElement("feBlend", { in: "SourceGraphic", in2: "effect2_dropShadow", result: "shape" })),
            React.createElement("filter", { id: "prefix__filter1_d", x: 63.072, y: 11.086, width: 25.243, height: 25.902, filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React.createElement("feOffset", { dx: -1 }),
                React.createElement("feGaussianBlur", { stdDeviation: 2 }),
                React.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" }),
                React.createElement("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React.createElement("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React.createElement("filter", { id: "prefix__filter2_d", x: 77.648, y: 7.669, width: 29.026, height: 32.878, filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React.createElement("feOffset", { dx: -2 }),
                React.createElement("feGaussianBlur", { stdDeviation: 2 }),
                React.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" }),
                React.createElement("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React.createElement("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React.createElement("filter", { id: "prefix__filter3_d", x: 81.551, y: 12.503, width: 23.218, height: 27.055, filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React.createElement("feOffset", { dx: -1, dy: 2 }),
                React.createElement("feGaussianBlur", { stdDeviation: 2 }),
                React.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.21 0" }),
                React.createElement("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React.createElement("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React.createElement("filter", { id: "prefix__filter4_d", x: 137.852, y: 10.38, width: 23.632, height: 26.672, filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React.createElement("feOffset", { dx: -1 }),
                React.createElement("feGaussianBlur", { stdDeviation: 2 }),
                React.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0" }),
                React.createElement("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React.createElement("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React.createElement("filter", { id: "prefix__filter5_d", x: 95.859, y: 7, width: 33.533, height: 34.063, filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React.createElement("feOffset", { dx: -1 }),
                React.createElement("feGaussianBlur", { stdDeviation: 2 }),
                React.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0" }),
                React.createElement("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React.createElement("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React.createElement("filter", { id: "prefix__filter6_d", x: 100.76, y: 12.835, width: 25.735, height: 26.232, filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React.createElement("feOffset", { dy: 2 }),
                React.createElement("feGaussianBlur", { stdDeviation: 1.5 }),
                React.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0" }),
                React.createElement("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React.createElement("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React.createElement("filter", { id: "prefix__filter7_dd", x: 115.461, y: 7.174, width: 35.045, height: 35.547, filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React.createElement("feOffset", { dx: -3, dy: 2 }),
                React.createElement("feGaussianBlur", { stdDeviation: 2 }),
                React.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
                React.createElement("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React.createElement("feOffset", { dx: 2 }),
                React.createElement("feGaussianBlur", { stdDeviation: 2 }),
                React.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" }),
                React.createElement("feBlend", { in2: "effect1_dropShadow", result: "effect2_dropShadow" }),
                React.createElement("feBlend", { in: "SourceGraphic", in2: "effect2_dropShadow", result: "shape" })),
            React.createElement("filter", { id: "prefix__filter8_d", x: 121.365, y: 12.011, width: 24.236, height: 27.721, filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React.createElement("feOffset", { dy: 2 }),
                React.createElement("feGaussianBlur", { stdDeviation: 2 }),
                React.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.17 0" }),
                React.createElement("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React.createElement("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })),
            React.createElement("filter", { id: "prefix__filter9_dd", x: 0, y: 0.921, width: 67.722, height: 48.861, filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React.createElement("feOffset", { dy: 4 }),
                React.createElement("feGaussianBlur", { stdDeviation: 4.5 }),
                React.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.17 0" }),
                React.createElement("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
                React.createElement("feOffset", { dy: -2 }),
                React.createElement("feGaussianBlur", { stdDeviation: 4.5 }),
                React.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0" }),
                React.createElement("feBlend", { in2: "effect1_dropShadow", result: "effect2_dropShadow" }),
                React.createElement("feBlend", { in: "SourceGraphic", in2: "effect2_dropShadow", result: "shape" })),
            React.createElement("pattern", { id: "prefix__pattern0", patternContentUnits: "objectBoundingBox", width: 1, height: 1 },
                React.createElement("use", { xlinkHref: "#prefix__image0", transform: "matrix(.00027 0 0 .00054 -.004 0)" })),
}

var Account = function (_a) {
    var account = _a.account, login = _a.login, logout = _a.logout;
    var _b = useWalletModal(login, logout, account), onPresentConnectModal = _b.onPresentConnectModal, onPresentAccountModal = _b.onPresentAccountModal;
    var shortName = function (name) {
        return new (Array.bind.apply(Array, __spreadArray([void 0], name)))().join("").slice(0, 4) + "..." + new (Array.bind.apply(Array, __spreadArray([void 0], name)))().reverse().join("").slice(0, 4);
    };
    return (React__default.createElement(React__default.Fragment, null, account ? (React__default.createElement(AccountBlock, { as: "button", onClick: function () {
            onPresentAccountModal();
        } },
        shortName(account),
        React__default.createElement(Avatar, null))) : (React__default.createElement(AccountBlock, { as: "button", onClick: function () {
            onPresentConnectModal();
        } },
        React__default.createElement(Avatar, { className: "notAuth", onClick: function () {
                onPresentConnectModal();
            } }, "Connect")))));
};
var AccountBlock = styled(Text)(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  min-height: 43px;\n  min-width: 160px;\n  align-items: center;\n  padding: 12px 56px 12px 20px;\n  background: ", ";\n  border-radius: 25px;\n  box-shadow: ", ";\n  text-shadow: ", ";\n  cursor: pointer;\n  border: none;\n"], ["\n  position: relative;\n  display: flex;\n  min-height: 43px;\n  min-width: 160px;\n  align-items: center;\n  padding: 12px 56px 12px 20px;\n  background: ", ";\n  border-radius: 25px;\n  box-shadow: ", ";\n  text-shadow: ", ";\n  cursor: pointer;\n  border: none;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.bgOpacity;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.boxShadow;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textShadow;
});
var Avatar = styled.div(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: 10px;\n  right: 2px;\n  height: 40px;\n  width: 40px;\n  border-radius: 20px;\n  background: ", ";\n  &.notAuth {\n    width: calc(100% - 4px);\n  }\n"], ["\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: 10px;\n  right: 2px;\n  height: 40px;\n  width: 40px;\n  border-radius: 20px;\n  background: ", ";\n  &.notAuth {\n    width: calc(100% - 4px);\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.green;
});
var templateObject_1$3, templateObject_2$2;

var MenuLink = function (_a) {
    var name = _a.name; _a.url; var size = _a.size, className = _a.className;
    return (React__default.createElement(LinkItem, { className: className, size: size },
        React__default.createElement(NavLinks
        // to={url}
        , null, name)));
};
var LinkItem = styled(Text)(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  position: relative;\n  color:", ";\n  margin: 0 35px;\n  transition:.3s;\n  text-shadow: ", ";\n  cursor: pointer;\n  &:hover{\n    color:", ";\n  };\n  &::after{\n    display: block;\n    bottom: -28px;\n    width: 0;\n    height: 2px;\n    content: '';\n    position: absolute;\n    background: #4BE43E;\n    transition: all.3s;\n  }\n  &.active::after{\n    width: 100%;\n    opacity: 1;\n  }\n"], ["\n  position: relative;\n  color:", ";\n  margin: 0 35px;\n  transition:.3s;\n  text-shadow: ", ";\n  cursor: pointer;\n  &:hover{\n    color:", ";\n  };\n  &::after{\n    display: block;\n    bottom: -28px;\n    width: 0;\n    height: 2px;\n    content: '';\n    position: absolute;\n    background: #4BE43E;\n    transition: all.3s;\n  }\n  &.active::after{\n    width: 100%;\n    opacity: 1;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textShadow;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.green;
});
var NavLinks = styled.a(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject([""], [""])));
var templateObject_1$2, templateObject_2$1;

var Header = function (_a) {
    var account = _a.account, login = _a.login, logout = _a.logout; _a.isDark; _a.toggleTheme; _a.langs; _a.setLang; _a.currentLang; var links = _a.links; _a.profile; _a.children;
    return (React__default.createElement(HeaderWrap, null,
        React__default.createElement(Logo, null),
        React__default.createElement(Nav, null, links.map(function (item, i) {
            return React__default.createElement(React__default.Fragment, { key: i },
                React__default.createElement(MenuLink, { className: i === 0 ? 'active' : '', size: 'md', name: item.name, url: item.url }));
        })),
        React__default.createElement(Account, { account: account, login: login, logout: logout })));
};
var HeaderWrap = styled.div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 144px;\n  background-color: ", ";\n  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.2);\n  & svg{\n    /* flex-grow: 0; */\n    flex-shrink: 0;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 144px;\n  background-color: ", ";\n  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.2);\n  & svg{\n    /* flex-grow: 0; */\n    flex-shrink: 0;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.bgBlackRgba;
});
var Nav = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"])));
var templateObject_1$1, templateObject_2;

var ResetCSS = createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n    min-height: 100vh;\n    background: url(", ") no-repeat center center /cover;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  } \n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n\n  /* Slider */ \n  input[type=range] {\n    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n    width: 100%; /* Specific width is required for Firefox. */\n    background: transparent; /* Otherwise white in Chrome */\n  }\n  input[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n  }\n  input[type=range]:focus {\n    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */\n  }\n  input[type=range]::-ms-track {\n    width: 100%;\n    cursor: pointer;\n    /* Hides the slider so custom styles can be added */\n    background: transparent; \n    border-color: transparent;\n    color: transparent;\n  }    \n"], ["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n    min-height: 100vh;\n    background: url(", ") no-repeat center center /cover;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  } \n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n\n  /* Slider */ \n  input[type=range] {\n    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n    width: 100%; /* Specific width is required for Firefox. */\n    background: transparent; /* Otherwise white in Chrome */\n  }\n  input[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n  }\n  input[type=range]:focus {\n    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */\n  }\n  input[type=range]::-ms-track {\n    width: 100%;\n    cursor: pointer;\n    /* Hides the slider so custom styles can be added */\n    background: transparent; \n    border-color: transparent;\n    color: transparent;\n  }    \n"])), BG_IMG, function (_a) {
    var theme = _a.theme;
    return theme.colors.green;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
});
var templateObject_1;

var baseColors = {
    failure: "#ED4B9E",
    primary: "#1FC7D4",
    primaryBright: "#53DEE9",
    primaryDark: "#0098A1",
    secondary: "#7645D9",
    success: "#31D0AA",
    warning: "#FFB237",
    green: "#4BE43E",
    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    textShadow2: "0px 4px 7px rgba(0, 0, 0, 0.15)",
    textShadow3: "0px 3px 4px rgba(0, 0, 0, 0.15)",
    boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.2)",
    boxShadow2: "0px 4px 10px rgba(0, 0, 0, 0.25)",
    bgOpacity: "rgba(0, 0, 0, 0.3)",
    bgBlackRgba: "rgba(43, 43, 50, .7)",
    textGray: "#A3A3A3",
    bgGray: "#26262D",
    greenGradient: "linear-gradient(180deg, #4CEE3E -16%, #47DA3B 100%)",
    text2: "F3F3F3",
    darkPink: "#FF6161",
    whiteRgba: "rgba(255, 255, 255, 0.15)",
    greenGradient2: "linear-gradient(180deg, rgba(76, 238, 62, 0.21) -16%, #47da3b 100%)",
    textGray2: "#9A9191",
};
var brandColors = {
    binance: "#F0B90B",
};
var darkColors = __assign(__assign(__assign({}, baseColors), brandColors), { background: "linear-gradient(180deg, #1B1B22 0%, #0E0E15 100%)", overlayBg: "rgba(0, 0, 0, 0.7)", linkColor: "linear-gradient(180deg, #4CEE3E -16%, #47DA3B 100%)", buttonBg: "rgba(0, 0, 0, 0.25)", buttonShadow: "rgba(0, 0, 0, 0.2)", cardBg: "#26262D", greyText: "#A3A3A3", greyText2: "#9A9191", darkGreyBg: "#1d1d22", text: "#fff", greenText: "#4AE43D", orangeBg: "#FF9525", greenBg: "#69E35F", redBg: "#FF6161", yellowBg: "#ECCB57", lightGreyBg: "#C0C0C0", boxShadow3: "-4px -3px 8px rgba(0, 0, 0, 0.25)", boxShadow4: "inset 0px 4px 4px rgba(0, 0, 0, 0.2)", boxShadow5: "0px 3px 4px rgba(0, 0, 0, 0.15)", blackColor: "#000", greenText2: "47DA3B", backgroundDisabled: "#3c3742", contrast: "#FFFFFF", invertedContrast: "#000", input: "#483f5a", inputSecondary: "#66578D", primaryDark: "#0098A1", tertiary: "#353547", textDisabled: "#666171", textSubtle: "#A28BD4", borderColor: "#524B63", card: "#FFFFFF", panel: "#2E2E35", dark: '#26262D', gradients: {
        greenGradient: "linear-gradient(180deg, rgba(76, 238, 62, 0.15) -16%, rgba(71, 218, 59, 0.15) 100%)",
        bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
    } });
var lightColors = __assign(__assign(__assign({}, baseColors), brandColors), { background: "#FAF9FA", overlayBg: "rgba(0, 0, 0, 0.7)", linkColor: "linear-gradient(180deg, #4CEE3E -16%, #47DA3B 100%)", buttonBg: "rgba(0, 0, 0, 0.25)", buttonShadow: "rgba(0, 0, 0, 0.2)", cardBg: "#26262D", greyText: "#A3A3A3", darkGreyBg: "#1d1d22", greyText2: "#9A9191", text: "#fff", greenText: "#4AE43D", orangeBg: "#FF9525", greenBg: "#69E35F", redBg: "#FF6161", yellowBg: "#ECCB57", lightGreyBg: "#C0C0C0", boxShadow3: "-4px -3px 8px rgba(0, 0, 0, 0.25)", boxShadow4: "inset 0px 4px 4px rgba(0, 0, 0, 0.2)", blackColor: "#000", greenText2: "47DA3B", boxShadow5: "0px 3px 4px rgba(0, 0, 0, 0.15)", backgroundDisabled: "rgba(255,255,255,.15)", contrast: "#000", invertedContrast: "#FFFFFF", input: "#eeeaf4", inputSecondary: "#d7caec", tertiary: "#EFF4F5", textDisabled: "#BDC2C4", textSubtle: "#8f80ba", borderColor: "#E9EAEB", card: "#26262D", panel: "#2E2E35", dark: '#26262D', gradients: {
        greenGradient: "linear-gradient(180deg, rgba(76, 238, 62, 0.15) -16%, rgba(71, 218, 59, 0.15) 100%)",
        bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
    } });

var breakpointMap = {
    xs: 370,
    sm: 576,
    md: 852,
    lg: 968,
    xl: 1080,
};
var breakpoints = Object.values(breakpointMap).map(function (breakpoint) { return breakpoint + "px"; });
var mediaQueries = {
    xs: "@media screen and (min-width: " + breakpointMap.xs + "px)",
    sm: "@media screen and (min-width: " + breakpointMap.sm + "px)",
    md: "@media screen and (min-width: " + breakpointMap.md + "px)",
    lg: "@media screen and (min-width: " + breakpointMap.lg + "px)",
    xl: "@media screen and (min-width: " + breakpointMap.xl + "px)",
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
    mediaQueries: mediaQueries,
    spacing: spacing,
    shadows: shadows,
    radii: radii,
    zIndices: zIndices,
};

var light$1 = {
    background: lightColors.card,
    boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
    dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};
var dark$1 = {
    background: darkColors.card,
    boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
    dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};

var light = {
    background: lightColors.card,
};
var dark = {
    background: darkColors.card,
};

var darkTheme = __assign(__assign({}, base), { isDark: true, 
    // alert: darkAlert,
    colors: darkColors, card: dark$1, 
    // toggle: darkToggle,
    // nav: darkNav,
    modal: dark });

var lightTheme = __assign(__assign({}, base), { isDark: false, 
    // alert: lightAlert,
    colors: darkColors, card: light$1, 
    // toggle: lightToggle,
    // nav: lightNav,
    modal: light });

export { Icon$o as AddIcon, Alert, Icon as ArrowDownIcon, Icon$a as ArrowIcon, Icon$l as ArrowLeft, Icon$9 as ArrowPanel, BackgroundImage, BaseLayout, Icon$k as BnbIcon, Box, Icon$8 as BtnPanel, Button$2 as Button, Card$1 as Card, CardsBalance, CardsProducts, Icon$3 as CercleIcon, Icon$j as ChartIcon, Icon$n as CloseIcon, Icon$4 as CompleteIcon, ConnectorNames, Icon$g as CopyIcon, Icon$b as EyeCloseIcon, Icon$c as EyeOpenIcon, Flex, Icon$h as GreenArrow, Header, Icon$i as HistoryIcon, HistoryPanel, IconButton, Image, Link, LinkExternal, Icon$5 as LoadIcon, Modal, ModalProvider, Icon$m as OpenNewIcon, Icon$7 as PenIcon, Icon$1 as PlayIcon, ResetCSS, Icon$f as SearchIcon, SimpleTabs, Icon$d as SquaresIcon, Icon$e as StrikeIcon, Icon$6 as StrikesWideIcon, Svg, Tabs, Text, Timer, Icon$2 as WatchIcon, variants as alertVariants, connectorLocalStorageKey, darkTheme as dark, darkColors, lightTheme as light, lightColors, useModal, useWalletModal };