"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(dashboard)/layout",{

/***/ "(app-pages-browser)/./app/(dashboard)/_components/org-sidebar.tsx":
/*!*****************************************************!*\
  !*** ./app/(dashboard)/_components/org-sidebar.tsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   OrgSidebar: function() { return /* binding */ OrgSidebar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _barrel_optimize_names_LayoutDashboard_Star_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=LayoutDashboard,Star!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/layout-dashboard.js\");\n/* harmony import */ var _barrel_optimize_names_LayoutDashboard_Star_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=LayoutDashboard,Star!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/star.js\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @clerk/nextjs */ \"(app-pages-browser)/./node_modules/@clerk/clerk-react/dist/index.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* __next_internal_client_entry_do_not_use__ OrgSidebar auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst OrgSidebar = ()=>{\n    _s();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useSearchParams)();\n    const favorites = searchParams.get(\"favorites\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"hidden lg:flex flex-col space-y-6 w-[206px] pl-5 pt-5 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                href: \"/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center gap-x-2\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        src: \"/logo.svg\",\n                        alt: \"Logo\",\n                        height: 196,\n                        width: 196\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mikke\\\\OneDrive\\\\Skrivebord\\\\astral\\\\app\\\\(dashboard)\\\\_components\\\\org-sidebar.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\mikke\\\\OneDrive\\\\Skrivebord\\\\astral\\\\app\\\\(dashboard)\\\\_components\\\\org-sidebar.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mikke\\\\OneDrive\\\\Skrivebord\\\\astral\\\\app\\\\(dashboard)\\\\_components\\\\org-sidebar.tsx\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_5__.OrganizationSwitcher, {\n                hidePersonal: true,\n                appearance: {\n                    elements: {\n                        rootbox: {\n                            display: \"flex\",\n                            justifyContent: \"center\",\n                            alignItems: \"center\",\n                            width: \"100%\"\n                        },\n                        organizationSwitcherTrigger: {\n                            padding: \"6px\",\n                            width: \"90%\",\n                            borderRadius: \"8px\",\n                            border: \"2px solid #474583\",\n                            justifyContent: \"space-between\",\n                            backgroundColor: \"black-100\"\n                        }\n                    }\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mikke\\\\OneDrive\\\\Skrivebord\\\\astral\\\\app\\\\(dashboard)\\\\_components\\\\org-sidebar.tsx\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"space-y-1 w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                        variant: favorites ? \"ghost\" : \"secondary\",\n                        asChild: true,\n                        size: \"lg\",\n                        className: \"font-normal justify-start px-2 w-full hover:bg-select-astral-40\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            href: \"/\",\n                            className: \"hover:text-white\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_LayoutDashboard_Star_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    className: \"h-4 w-4 mr-2\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\mikke\\\\OneDrive\\\\Skrivebord\\\\astral\\\\app\\\\(dashboard)\\\\_components\\\\org-sidebar.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 25\n                                }, undefined),\n                                \"Team boards\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\mikke\\\\OneDrive\\\\Skrivebord\\\\astral\\\\app\\\\(dashboard)\\\\_components\\\\org-sidebar.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mikke\\\\OneDrive\\\\Skrivebord\\\\astral\\\\app\\\\(dashboard)\\\\_components\\\\org-sidebar.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                        variant: favorites ? \"secondary\" : \"ghost\",\n                        asChild: true,\n                        size: \"lg\",\n                        className: \"font-normal justify-start px-2 w-full hover:bg-select-astral-40\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            href: {\n                                pathname: \"/\",\n                                query: {\n                                    favorites: true\n                                }\n                            },\n                            className: \"hover:text-white\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_LayoutDashboard_Star_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    className: \"h-4 w-4 mr-2\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\mikke\\\\OneDrive\\\\Skrivebord\\\\astral\\\\app\\\\(dashboard)\\\\_components\\\\org-sidebar.tsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 25\n                                }, undefined),\n                                \"Favorite boards\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\mikke\\\\OneDrive\\\\Skrivebord\\\\astral\\\\app\\\\(dashboard)\\\\_components\\\\org-sidebar.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mikke\\\\OneDrive\\\\Skrivebord\\\\astral\\\\app\\\\(dashboard)\\\\_components\\\\org-sidebar.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mikke\\\\OneDrive\\\\Skrivebord\\\\astral\\\\app\\\\(dashboard)\\\\_components\\\\org-sidebar.tsx\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\mikke\\\\OneDrive\\\\Skrivebord\\\\astral\\\\app\\\\(dashboard)\\\\_components\\\\org-sidebar.tsx\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, undefined);\n};\n_s(OrgSidebar, \"a+DZx9DY26Zf8FVy1bxe3vp9l1w=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useSearchParams\n    ];\n});\n_c = OrgSidebar;\nvar _c;\n$RefreshReg$(_c, \"OrgSidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oZGFzaGJvYXJkKS9fY29tcG9uZW50cy9vcmctc2lkZWJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFZTUE7QUFWdUI7QUFDRTtBQUVzQjtBQUNBO0FBQ0g7QUFHRjtBQVF6QyxNQUFNUSxhQUFhOztJQUN0QixNQUFNQyxlQUFlSCxnRUFBZUE7SUFDcEMsTUFBTUksWUFBWUQsYUFBYUUsR0FBRyxDQUFDO0lBRW5DLHFCQUVJLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ1osaURBQUlBO2dCQUFDYSxNQUFLOzBCQUNQLDRFQUFDRjtvQkFBSUMsV0FBVTs4QkFDWCw0RUFBQ1gsa0RBQUtBO3dCQUNGYSxLQUFJO3dCQUNKQyxLQUFJO3dCQUNKQyxRQUFRO3dCQUNSQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7OzBCQUluQiw4REFBQ2IsK0RBQW9CQTtnQkFDakJjLFlBQVk7Z0JBQ1pDLFlBQVk7b0JBQ1JDLFVBQVU7d0JBQ05DLFNBQVM7NEJBQ0xDLFNBQVM7NEJBQ1RDLGdCQUFnQjs0QkFDaEJDLFlBQVk7NEJBQ1pQLE9BQU87d0JBQ1g7d0JBQ0FRLDZCQUE2Qjs0QkFDekJDLFNBQVM7NEJBQ1RULE9BQU87NEJBQ1BVLGNBQWM7NEJBQ2RDLFFBQVE7NEJBQ1JMLGdCQUFnQjs0QkFDaEJNLGlCQUFpQjt3QkFDckI7b0JBQ0o7Z0JBQ0o7Ozs7OzswQkFFSiw4REFBQ2xCO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ04seURBQU1BO3dCQUNQd0IsU0FBU3JCLFlBQVksVUFBVTt3QkFDL0JzQixPQUFPO3dCQUNQQyxNQUFLO3dCQUNMcEIsV0FBVTtrQ0FFTiw0RUFBQ1osaURBQUlBOzRCQUFDYSxNQUFLOzRCQUFJRCxXQUFVOzs4Q0FDckIsOERBQUNWLGdHQUFlQTtvQ0FBQ1UsV0FBVTs7Ozs7O2dDQUFpQjs7Ozs7Ozs7Ozs7O2tDQUlwRCw4REFBQ04seURBQU1BO3dCQUNQd0IsU0FBU3JCLFlBQVksY0FBYzt3QkFDbkNzQixPQUFPO3dCQUNQQyxNQUFLO3dCQUNMcEIsV0FBVTtrQ0FFTiw0RUFBQ1osaURBQUlBOzRCQUFDYSxNQUFNO2dDQUNSb0IsVUFBVTtnQ0FDVkMsT0FBTztvQ0FBRXpCLFdBQVc7Z0NBQUk7NEJBQzVCOzRCQUFHRyxXQUFVOzs4Q0FDVCw4REFBQ1QsZ0dBQUlBO29DQUFDUyxXQUFVOzs7Ozs7Z0NBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPekQsRUFBRTtHQW5FV0w7O1FBQ1lGLDREQUFlQTs7O0tBRDNCRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvKGRhc2hib2FyZCkvX2NvbXBvbmVudHMvb3JnLXNpZGViYXIudHN4PzNjMzYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyBQb3BwaW5zIH0gZnJvbSBcIm5leHQvZm9udC9nb29nbGVcIjtcclxuaW1wb3J0IHsgTGF5b3V0RGFzaGJvYXJkLCBTdGFyIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xyXG5pbXBvcnQgeyBPcmdhbml6YXRpb25Td2l0Y2hlciB9IGZyb20gXCJAY2xlcmsvbmV4dGpzXCI7XHJcbmltcG9ydCB7IHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuXHJcbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XHJcblxyXG5jb25zdCBmb250ID0gUG9wcGlucyh7XHJcbiAgICBzdWJzZXRzOiBbXCJsYXRpblwiXSxcclxuICAgIHdlaWdodDogW1wiNjAwXCJdLFxyXG59KTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgT3JnU2lkZWJhciA9ICgpID0+IHtcclxuICAgIGNvbnN0IHNlYXJjaFBhcmFtcyA9IHVzZVNlYXJjaFBhcmFtcygpO1xyXG4gICAgY29uc3QgZmF2b3JpdGVzID0gc2VhcmNoUGFyYW1zLmdldChcImZhdm9yaXRlc1wiKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmZsZXggZmxleC1jb2wgc3BhY2UteS02IHctWzIwNnB4XSBwbC01IHB0LTUgXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC14LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9sb2dvLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkxvZ29cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezE5Nn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezE5Nn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPE9yZ2FuaXphdGlvblN3aXRjaGVyXHJcbiAgICAgICAgICAgICAgICBoaWRlUGVyc29uYWxcclxuICAgICAgICAgICAgICAgIGFwcGVhcmFuY2U9e3tcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50czoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb290Ym94OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3JnYW5pemF0aW9uU3dpdGNoZXJUcmlnZ2VyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjZweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiOTAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiOHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwiMnB4IHNvbGlkICM0NzQ1ODNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJibGFjay0xMDBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xIHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD17ZmF2b3JpdGVzID8gXCJnaG9zdFwiIDogXCJzZWNvbmRhcnlcIn1cclxuICAgICAgICAgICAgICAgIGFzQ2hpbGRcclxuICAgICAgICAgICAgICAgIHNpemU9XCJsZ1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LW5vcm1hbCBqdXN0aWZ5LXN0YXJ0IHB4LTIgdy1mdWxsIGhvdmVyOmJnLXNlbGVjdC1hc3RyYWwtNDBcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGF5b3V0RGFzaGJvYXJkIGNsYXNzTmFtZT1cImgtNCB3LTQgbXItMlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRlYW0gYm9hcmRzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PXtmYXZvcml0ZXMgPyBcInNlY29uZGFyeVwiIDogXCJnaG9zdFwifVxyXG4gICAgICAgICAgICAgICAgYXNDaGlsZFxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cImxnXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtbm9ybWFsIGp1c3RpZnktc3RhcnQgcHgtMiB3LWZ1bGwgaG92ZXI6Ymctc2VsZWN0LWFzdHJhbC00MFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogXCIvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7IGZhdm9yaXRlczogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAgfX0gY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhciBjbGFzc05hbWU9XCJoLTQgdy00IG1yLTJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBGYXZvcml0ZSBib2FyZHNcclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59OyJdLCJuYW1lcyI6WyJmb250IiwiTGluayIsIkltYWdlIiwiTGF5b3V0RGFzaGJvYXJkIiwiU3RhciIsIk9yZ2FuaXphdGlvblN3aXRjaGVyIiwidXNlU2VhcmNoUGFyYW1zIiwiQnV0dG9uIiwiT3JnU2lkZWJhciIsInNlYXJjaFBhcmFtcyIsImZhdm9yaXRlcyIsImdldCIsImRpdiIsImNsYXNzTmFtZSIsImhyZWYiLCJzcmMiLCJhbHQiLCJoZWlnaHQiLCJ3aWR0aCIsImhpZGVQZXJzb25hbCIsImFwcGVhcmFuY2UiLCJlbGVtZW50cyIsInJvb3Rib3giLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwib3JnYW5pemF0aW9uU3dpdGNoZXJUcmlnZ2VyIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsImJhY2tncm91bmRDb2xvciIsInZhcmlhbnQiLCJhc0NoaWxkIiwic2l6ZSIsInBhdGhuYW1lIiwicXVlcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(dashboard)/_components/org-sidebar.tsx\n"));

/***/ })

});