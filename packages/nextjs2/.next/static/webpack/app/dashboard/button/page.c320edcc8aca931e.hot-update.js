"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/button/page",{

/***/ "(app-pages-browser)/./app/dashboard/button/page.tsx":
/*!***************************************!*\
  !*** ./app/dashboard/button/page.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NewButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"(app-pages-browser)/./node_modules/next/dist/client/components/noop-head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _AddressBook_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AddressBook.module.css */ \"(app-pages-browser)/./app/dashboard/button/AddressBook.module.css\");\n/* harmony import */ var _AddressBook_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_AddressBook_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n// import { auth, clerkClient } from \"@clerk/nextjs/server\";\nfunction NewButton() {\n    _s();\n    const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"addressBook\");\n    const handlePostRequest = async (_postData)=>{\n        console.log(_postData, \"======================_postData\");\n        try {\n            let postData = _postData;\n            // 发送 POST 请求 http://43.130.234.172:3000/permitRegister\n            console.log(\"===============================>1111111\");\n            const response = await axios.post(\"http://43.130.234.172:3000/permitRegister\", postData);\n            console.log(response, \"===============================>response\");\n        // 保存响应数据\n        //   setResponseData(response);\n        } catch (error) {\n            console.log(\"===============================>error\");\n            console.error(\"Error submitting data:\", error);\n        }\n    };\n    const renderContent = ()=>{\n        switch(activeTab){\n            case \"home\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"Home Content\"\n                }, void 0, false, {\n                    fileName: \"/Users/strong/Desktop/web3/clerk-nextjs-demo-app-router/app/dashboard/button/page.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 16\n                }, this);\n            case \"assets\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"Assets Content\"\n                }, void 0, false, {\n                    fileName: \"/Users/strong/Desktop/web3/clerk-nextjs-demo-app-router/app/dashboard/button/page.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 16\n                }, this);\n            case \"transactions\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"Transactions Content\"\n                }, void 0, false, {\n                    fileName: \"/Users/strong/Desktop/web3/clerk-nextjs-demo-app-router/app/dashboard/button/page.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 16\n                }, this);\n            case \"addressBook\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: (_AddressBook_module_css__WEBPACK_IMPORTED_MODULE_3___default().addressBook),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: \"Address book\"\n                        }, void 0, false, {\n                            fileName: \"/Users/strong/Desktop/web3/clerk-nextjs-demo-app-router/app/dashboard/button/page.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_AddressBook_module_css__WEBPACK_IMPORTED_MODULE_3___default().addressEntry),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    src: \"/address-icon.jpg\",\n                                    alt: \"Address Icon\",\n                                    width: 30,\n                                    height: 30\n                                }, void 0, false, {\n                                    fileName: \"/Users/strong/Desktop/web3/clerk-nextjs-demo-app-router/app/dashboard/button/page.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            children: \"Laudable Sepolia Safe\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/strong/Desktop/web3/clerk-nextjs-demo-app-router/app/dashboard/button/page.tsx\",\n                                            lineNumber: 54,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"sep:0x0FE96A6e1604b5afB46BCb807689674ae947554\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/strong/Desktop/web3/clerk-nextjs-demo-app-router/app/dashboard/button/page.tsx\",\n                                            lineNumber: 55,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/strong/Desktop/web3/clerk-nextjs-demo-app-router/app/dashboard/button/page.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: (_AddressBook_module_css__WEBPACK_IMPORTED_MODULE_3___default().sendButton),\n                                    children: \"Send\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/strong/Desktop/web3/clerk-nextjs-demo-app-router/app/dashboard/button/page.tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/strong/Desktop/web3/clerk-nextjs-demo-app-router/app/dashboard/button/page.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/strong/Desktop/web3/clerk-nextjs-demo-app-router/app/dashboard/button/page.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 11\n                }, this);\n            case \"apps\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"Apps Content\"\n                }, void 0, false, {\n                    fileName: \"/Users/strong/Desktop/web3/clerk-nextjs-demo-app-router/app/dashboard/button/page.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 16\n                }, this);\n            case \"settings\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"Settings Content\"\n                }, void 0, false, {\n                    fileName: \"/Users/strong/Desktop/web3/clerk-nextjs-demo-app-router/app/dashboard/button/page.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 16\n                }, this);\n            default:\n                return null;\n        }\n    };\n    // const { userId } = auth().protect();\n    //   let user:any  = null;\n    //  try {\n    //     user = await clerkClient.users.getUser(userId);\n    //   if (!user) {\n    //     return null;\n    //   } \n    //  }catch(e){\n    //   console.log(e);\n    //  }\n    //   return <div>88888</div>;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_AddressBook_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Address Book\"\n                }, void 0, false, {\n                    fileName: \"/Users/strong/Desktop/web3/clerk-nextjs-demo-app-router/app/dashboard/button/page.tsx\",\n                    lineNumber: 85,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/strong/Desktop/web3/clerk-nextjs-demo-app-router/app/dashboard/button/page.tsx\",\n                lineNumber: 84,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n                className: (_AddressBook_module_css__WEBPACK_IMPORTED_MODULE_3___default().sidebar),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_AddressBook_module_css__WEBPACK_IMPORTED_MODULE_3___default().profile),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                src: \"\",\n                                alt: \"Profile Picture\",\n                                width: 50,\n                                height: 50,\n                                className: (_AddressBook_module_css__WEBPACK_IMPORTED_MODULE_3___default().profilePic)\n                            }, void 0, false, {\n                                fileName: \"/Users/strong/Desktop/web3/clerk-nextjs-demo-app-router/app/dashboard/button/page.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \"st---g\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/strong/Desktop/web3/clerk-nextjs-demo-app-router/app/dashboard/button/page.tsx\",\n                                        lineNumber: 97,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"sep:0x0FE9...7554\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/strong/Desktop/web3/clerk-nextjs-demo-app-router/app/dashboard/button/page.tsx\",\n                                        lineNumber: 98,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"0 ETH\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/strong/Desktop/web3/clerk-nextjs-demo-app-router/app/dashboard/button/page.tsx\",\n                                        lineNumber: 99,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/strong/Desktop/web3/clerk-nextjs-demo-app-router/app/dashboard/button/page.tsx\",\n                                lineNumber: 96,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/strong/Desktop/web3/clerk-nextjs-demo-app-router/app/dashboard/button/page.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: (_AddressBook_module_css__WEBPACK_IMPORTED_MODULE_3___default().navList),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: activeTab === \"home\" ? (_AddressBook_module_css__WEBPACK_IMPORTED_MODULE_3___default().active) : \"\",\n                                    onClick: ()=>setActiveTab(\"home\"),\n                                    children: \"Home\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/strong/Desktop/web3/clerk-nextjs-demo-app-router/app/dashboard/button/page.tsx\",\n                                    lineNumber: 104,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: activeTab === \"assets\" ? (_AddressBook_module_css__WEBPACK_IMPORTED_MODULE_3___default().active) : \"\",\n                                    onClick: ()=>setActiveTab(\"assets\"),\n                                    children: \"Assets\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/strong/Desktop/web3/clerk-nextjs-demo-app-router/app/dashboard/button/page.tsx\",\n                                    lineNumber: 105,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: activeTab === \"transactions\" ? (_AddressBook_module_css__WEBPACK_IMPORTED_MODULE_3___default().active) : \"\",\n                                    onClick: ()=>setActiveTab(\"transactions\"),\n                                    children: \"Transactions\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/strong/Desktop/web3/clerk-nextjs-demo-app-router/app/dashboard/button/page.tsx\",\n                                    lineNumber: 106,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: activeTab === \"addressBook\" ? (_AddressBook_module_css__WEBPACK_IMPORTED_MODULE_3___default().active) : \"\",\n                                    onClick: ()=>setActiveTab(\"addressBook\"),\n                                    children: \"Address book\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/strong/Desktop/web3/clerk-nextjs-demo-app-router/app/dashboard/button/page.tsx\",\n                                    lineNumber: 107,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: activeTab === \"apps\" ? (_AddressBook_module_css__WEBPACK_IMPORTED_MODULE_3___default().active) : \"\",\n                                    onClick: ()=>setActiveTab(\"apps\"),\n                                    children: \"Apps\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/strong/Desktop/web3/clerk-nextjs-demo-app-router/app/dashboard/button/page.tsx\",\n                                    lineNumber: 108,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: activeTab === \"settings\" ? (_AddressBook_module_css__WEBPACK_IMPORTED_MODULE_3___default().active) : \"\",\n                                    onClick: ()=>setActiveTab(\"settings\"),\n                                    children: \"Settings\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/strong/Desktop/web3/clerk-nextjs-demo-app-router/app/dashboard/button/page.tsx\",\n                                    lineNumber: 109,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/strong/Desktop/web3/clerk-nextjs-demo-app-router/app/dashboard/button/page.tsx\",\n                            lineNumber: 103,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/strong/Desktop/web3/clerk-nextjs-demo-app-router/app/dashboard/button/page.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/strong/Desktop/web3/clerk-nextjs-demo-app-router/app/dashboard/button/page.tsx\",\n                lineNumber: 87,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_AddressBook_module_css__WEBPACK_IMPORTED_MODULE_3___default().mainContent),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                        className: (_AddressBook_module_css__WEBPACK_IMPORTED_MODULE_3___default().header),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: (_AddressBook_module_css__WEBPACK_IMPORTED_MODULE_3___default().newTransaction),\n                            children: \"New transaction\"\n                        }, void 0, false, {\n                            fileName: \"/Users/strong/Desktop/web3/clerk-nextjs-demo-app-router/app/dashboard/button/page.tsx\",\n                            lineNumber: 115,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/strong/Desktop/web3/clerk-nextjs-demo-app-router/app/dashboard/button/page.tsx\",\n                        lineNumber: 114,\n                        columnNumber: 11\n                    }, this),\n                    renderContent()\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/strong/Desktop/web3/clerk-nextjs-demo-app-router/app/dashboard/button/page.tsx\",\n                lineNumber: 113,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/strong/Desktop/web3/clerk-nextjs-demo-app-router/app/dashboard/button/page.tsx\",\n        lineNumber: 83,\n        columnNumber: 7\n    }, this);\n}\n_s(NewButton, \"gTBfqXWbpXQWZNUsRrbFznXzz/I=\");\n_c = NewButton;\nvar _c;\n$RefreshReg$(_c, \"NewButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kYXNoYm9hcmQvYnV0dG9uL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRzZCO0FBQ0U7QUFDZTtBQUNiO0FBQ2pDLDREQUE0RDtBQUU1QyxTQUFTSTs7SUFDdkIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdILCtDQUFRQSxDQUFDO0lBRTNDLE1BQU1JLG9CQUFvQixPQUFPQztRQUMvQkMsUUFBUUMsR0FBRyxDQUFDRixXQUFVO1FBRXRCLElBQUk7WUFDSixJQUFJRyxXQUFXSDtZQUNiLHVEQUF1RDtZQUN2REMsUUFBUUMsR0FBRyxDQUFDO1lBRVosTUFBTUUsV0FBVyxNQUFNQyxNQUFNQyxJQUFJLENBQUMsNkNBQTZDSDtZQUMvRUYsUUFBUUMsR0FBRyxDQUFDRSxVQUFTO1FBQ3JCLFNBQVM7UUFDWCwrQkFBK0I7UUFDL0IsRUFBRSxPQUFPRyxPQUFPO1lBQ2hCTixRQUFRQyxHQUFHLENBQUM7WUFDVkQsUUFBUU0sS0FBSyxDQUFDLDBCQUEwQkE7UUFDMUM7SUFDRjtJQUtBLE1BQU1DLGdCQUFnQjtRQUNwQixPQUFRWDtZQUNOLEtBQUs7Z0JBQ0gscUJBQU8sOERBQUNZOzhCQUFJOzs7Ozs7WUFDZCxLQUFLO2dCQUNILHFCQUFPLDhEQUFDQTs4QkFBSTs7Ozs7O1lBQ2QsS0FBSztnQkFDSCxxQkFBTyw4REFBQ0E7OEJBQUk7Ozs7OztZQUNkLEtBQUs7Z0JBQ0gscUJBQ0UsOERBQUNDO29CQUFRQyxXQUFXakIsNEVBQWtCOztzQ0FDcEMsOERBQUNtQjtzQ0FBRzs7Ozs7O3NDQUNKLDhEQUFDSjs0QkFBSUUsV0FBV2pCLDZFQUFtQjs7OENBQ2pDLDhEQUFDRCxrREFBS0E7b0NBQ0pzQixLQUFJO29DQUNKQyxLQUFJO29DQUNKQyxPQUFPO29DQUNQQyxRQUFROzs7Ozs7OENBRVYsOERBQUNUOztzREFDQyw4REFBQ1U7c0RBQUc7Ozs7OztzREFDSiw4REFBQ0M7c0RBQUU7Ozs7Ozs7Ozs7Ozs4Q0FFTCw4REFBQ0M7b0NBQU9WLFdBQVdqQiwyRUFBaUI7OENBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUk5QyxLQUFLO2dCQUNILHFCQUFPLDhEQUFDZTs4QkFBSTs7Ozs7O1lBQ2QsS0FBSztnQkFDSCxxQkFBTyw4REFBQ0E7OEJBQUk7Ozs7OztZQUNkO2dCQUNFLE9BQU87UUFDWDtJQUNGO0lBRUEsdUNBQXVDO0lBQ3ZDLDBCQUEwQjtJQUMxQixTQUFTO0lBQ1Qsc0RBQXNEO0lBQ3RELGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsT0FBTztJQUNQLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsS0FBSztJQUVILDZCQUE2QjtJQUM3QixxQkFDRSw4REFBQ0E7UUFBSUUsV0FBV2pCLDBFQUFnQjs7MEJBQzlCLDhEQUFDRixrREFBSUE7MEJBQ0gsNEVBQUNnQzs4QkFBTTs7Ozs7Ozs7Ozs7MEJBRVQsOERBQUNDO2dCQUFNZCxXQUFXakIsd0VBQWM7O2tDQUM5Qiw4REFBQ2U7d0JBQUlFLFdBQVdqQix3RUFBYzs7MENBQzVCLDhEQUFDRCxrREFBS0E7Z0NBQ0pzQixLQUFJO2dDQUNKQyxLQUFJO2dDQUNKQyxPQUFPO2dDQUNQQyxRQUFRO2dDQUNSUCxXQUFXakIsMkVBQWlCOzs7Ozs7MENBRTlCLDhEQUFDZTs7a0RBQ0MsOERBQUNvQjtrREFBRzs7Ozs7O2tEQUNKLDhEQUFDVDtrREFBRTs7Ozs7O2tEQUNILDhEQUFDQTtrREFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUdQLDhEQUFDVTtrQ0FDQyw0RUFBQ0M7NEJBQUdwQixXQUFXakIsd0VBQWM7OzhDQUMzQiw4REFBQ3VDO29DQUFHdEIsV0FBV2QsY0FBYyxTQUFTSCx1RUFBYSxHQUFHO29DQUFJeUMsU0FBUyxJQUFNckMsYUFBYTs4Q0FBUzs7Ozs7OzhDQUMvRiw4REFBQ21DO29DQUFHdEIsV0FBV2QsY0FBYyxXQUFXSCx1RUFBYSxHQUFHO29DQUFJeUMsU0FBUyxJQUFNckMsYUFBYTs4Q0FBVzs7Ozs7OzhDQUNuRyw4REFBQ21DO29DQUFHdEIsV0FBV2QsY0FBYyxpQkFBaUJILHVFQUFhLEdBQUc7b0NBQUl5QyxTQUFTLElBQU1yQyxhQUFhOzhDQUFpQjs7Ozs7OzhDQUMvRyw4REFBQ21DO29DQUFHdEIsV0FBV2QsY0FBYyxnQkFBZ0JILHVFQUFhLEdBQUc7b0NBQUl5QyxTQUFTLElBQU1yQyxhQUFhOzhDQUFnQjs7Ozs7OzhDQUM3Ryw4REFBQ21DO29DQUFHdEIsV0FBV2QsY0FBYyxTQUFTSCx1RUFBYSxHQUFHO29DQUFJeUMsU0FBUyxJQUFNckMsYUFBYTs4Q0FBUzs7Ozs7OzhDQUMvRiw4REFBQ21DO29DQUFHdEIsV0FBV2QsY0FBYyxhQUFhSCx1RUFBYSxHQUFHO29DQUFJeUMsU0FBUyxJQUFNckMsYUFBYTs4Q0FBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSTdHLDhEQUFDc0M7Z0JBQUt6QixXQUFXakIsNEVBQWtCOztrQ0FDakMsOERBQUM0Qzt3QkFBTzNCLFdBQVdqQix1RUFBYTtrQ0FDOUIsNEVBQUMyQjs0QkFBT1YsV0FBV2pCLCtFQUFxQjtzQ0FBRTs7Ozs7Ozs7Ozs7b0JBRTNDYzs7Ozs7Ozs7Ozs7OztBQUlYO0dBL0d5Qlo7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2Rhc2hib2FyZC9idXR0b24vcGFnZS50c3g/YjkzMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQWRkcmVzc0Jvb2subW9kdWxlLmNzcyc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCB7IGF1dGgsIGNsZXJrQ2xpZW50IH0gZnJvbSBcIkBjbGVyay9uZXh0anMvc2VydmVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0ICBmdW5jdGlvbiBOZXdCdXR0b24oKSB7XG4gIGNvbnN0IFthY3RpdmVUYWIsIHNldEFjdGl2ZVRhYl0gPSB1c2VTdGF0ZSgnYWRkcmVzc0Jvb2snKTtcblxuICBjb25zdCBoYW5kbGVQb3N0UmVxdWVzdCA9IGFzeW5jIChfcG9zdERhdGEgOiBhbnkpID0+IHtcbiAgICBjb25zb2xlLmxvZyhfcG9zdERhdGEsXCI9PT09PT09PT09PT09PT09PT09PT09X3Bvc3REYXRhXCIpO1xuICAgIFxuICAgIHRyeSB7XG4gICAgbGV0IHBvc3REYXRhID0gX3Bvc3REYXRhXG4gICAgICAvLyDlj5HpgIEgUE9TVCDor7fmsYIgaHR0cDovLzQzLjEzMC4yMzQuMTcyOjMwMDAvcGVybWl0UmVnaXN0ZXJcbiAgICAgIGNvbnNvbGUubG9nKFwiPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT4xMTExMTExXCIpO1xuXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly80My4xMzAuMjM0LjE3MjozMDAwL3Blcm1pdFJlZ2lzdGVyJywgcG9zdERhdGEpO1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UsXCI9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PnJlc3BvbnNlXCIpO1xuICAgICAgLy8g5L+d5a2Y5ZON5bqU5pWw5o2uXG4gICAgLy8gICBzZXRSZXNwb25zZURhdGEocmVzcG9uc2UpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coXCI9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PmVycm9yXCIpO1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igc3VibWl0dGluZyBkYXRhOicsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cblxuXG5cbiAgY29uc3QgcmVuZGVyQ29udGVudCA9ICgpID0+IHtcbiAgICBzd2l0Y2ggKGFjdGl2ZVRhYikge1xuICAgICAgY2FzZSAnaG9tZSc6XG4gICAgICAgIHJldHVybiA8ZGl2PkhvbWUgQ29udGVudDwvZGl2PjtcbiAgICAgIGNhc2UgJ2Fzc2V0cyc6XG4gICAgICAgIHJldHVybiA8ZGl2PkFzc2V0cyBDb250ZW50PC9kaXY+O1xuICAgICAgY2FzZSAndHJhbnNhY3Rpb25zJzpcbiAgICAgICAgcmV0dXJuIDxkaXY+VHJhbnNhY3Rpb25zIENvbnRlbnQ8L2Rpdj47XG4gICAgICBjYXNlICdhZGRyZXNzQm9vayc6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuYWRkcmVzc0Jvb2t9PlxuICAgICAgICAgICAgPGgxPkFkZHJlc3MgYm9vazwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkZHJlc3NFbnRyeX0+XG4gICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgIHNyYz1cIi9hZGRyZXNzLWljb24uanBnXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJBZGRyZXNzIEljb25cIlxuICAgICAgICAgICAgICAgIHdpZHRoPXszMH1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezMwfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMj5MYXVkYWJsZSBTZXBvbGlhIFNhZmU8L2gyPlxuICAgICAgICAgICAgICAgIDxwPnNlcDoweDBGRTk2QTZlMTYwNGI1YWZCNDZCQ2I4MDc2ODk2NzRhZTk0NzU1NDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuc2VuZEJ1dHRvbn0+U2VuZDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICApO1xuICAgICAgY2FzZSAnYXBwcyc6XG4gICAgICAgIHJldHVybiA8ZGl2PkFwcHMgQ29udGVudDwvZGl2PjtcbiAgICAgIGNhc2UgJ3NldHRpbmdzJzpcbiAgICAgICAgcmV0dXJuIDxkaXY+U2V0dGluZ3MgQ29udGVudDwvZGl2PjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfTtcblxuICAvLyBjb25zdCB7IHVzZXJJZCB9ID0gYXV0aCgpLnByb3RlY3QoKTtcbiAgLy8gICBsZXQgdXNlcjphbnkgID0gbnVsbDtcbiAgLy8gIHRyeSB7XG4gIC8vICAgICB1c2VyID0gYXdhaXQgY2xlcmtDbGllbnQudXNlcnMuZ2V0VXNlcih1c2VySWQpO1xuICAvLyAgIGlmICghdXNlcikge1xuICAvLyAgICAgcmV0dXJuIG51bGw7XG4gIC8vICAgfSBcbiAgLy8gIH1jYXRjaChlKXtcbiAgLy8gICBjb25zb2xlLmxvZyhlKTtcbiAgLy8gIH1cbiAgXG4gICAgLy8gICByZXR1cm4gPGRpdj44ODg4ODwvZGl2PjtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+QWRkcmVzcyBCb29rPC90aXRsZT5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8YXNpZGUgY2xhc3NOYW1lPXtzdHlsZXMuc2lkZWJhcn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlfT5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9XCJcIlxuICAgICAgICAgICAgICBhbHQ9XCJQcm9maWxlIFBpY3R1cmVcIlxuICAgICAgICAgICAgICB3aWR0aD17NTB9XG4gICAgICAgICAgICAgIGhlaWdodD17NTB9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGVQaWN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGgzPnN0LS0tZzwvaDM+XG4gICAgICAgICAgICAgIDxwPnNlcDoweDBGRTkuLi43NTU0PC9wPlxuICAgICAgICAgICAgICA8cD4wIEVUSDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxuYXY+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMubmF2TGlzdH0+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2FjdGl2ZVRhYiA9PT0gJ2hvbWUnID8gc3R5bGVzLmFjdGl2ZSA6ICcnfSBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVUYWIoJ2hvbWUnKX0+SG9tZTwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2FjdGl2ZVRhYiA9PT0gJ2Fzc2V0cycgPyBzdHlsZXMuYWN0aXZlIDogJyd9IG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYignYXNzZXRzJyl9PkFzc2V0czwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2FjdGl2ZVRhYiA9PT0gJ3RyYW5zYWN0aW9ucycgPyBzdHlsZXMuYWN0aXZlIDogJyd9IG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYigndHJhbnNhY3Rpb25zJyl9PlRyYW5zYWN0aW9uczwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2FjdGl2ZVRhYiA9PT0gJ2FkZHJlc3NCb29rJyA/IHN0eWxlcy5hY3RpdmUgOiAnJ30gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlVGFiKCdhZGRyZXNzQm9vaycpfT5BZGRyZXNzIGJvb2s8L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXthY3RpdmVUYWIgPT09ICdhcHBzJyA/IHN0eWxlcy5hY3RpdmUgOiAnJ30gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlVGFiKCdhcHBzJyl9PkFwcHM8L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXthY3RpdmVUYWIgPT09ICdzZXR0aW5ncycgPyBzdHlsZXMuYWN0aXZlIDogJyd9IG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYignc2V0dGluZ3MnKX0+U2V0dGluZ3M8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC9hc2lkZT5cbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbkNvbnRlbnR9PlxuICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMubmV3VHJhbnNhY3Rpb259Pk5ldyB0cmFuc2FjdGlvbjwvYnV0dG9uPlxuICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgIHtyZW5kZXJDb250ZW50KCl9XG4gICAgICAgIDwvbWFpbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG59Il0sIm5hbWVzIjpbIkhlYWQiLCJJbWFnZSIsInN0eWxlcyIsInVzZVN0YXRlIiwiTmV3QnV0dG9uIiwiYWN0aXZlVGFiIiwic2V0QWN0aXZlVGFiIiwiaGFuZGxlUG9zdFJlcXVlc3QiLCJfcG9zdERhdGEiLCJjb25zb2xlIiwibG9nIiwicG9zdERhdGEiLCJyZXNwb25zZSIsImF4aW9zIiwicG9zdCIsImVycm9yIiwicmVuZGVyQ29udGVudCIsImRpdiIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJhZGRyZXNzQm9vayIsImgxIiwiYWRkcmVzc0VudHJ5Iiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJoMiIsInAiLCJidXR0b24iLCJzZW5kQnV0dG9uIiwiY29udGFpbmVyIiwidGl0bGUiLCJhc2lkZSIsInNpZGViYXIiLCJwcm9maWxlIiwicHJvZmlsZVBpYyIsImgzIiwibmF2IiwidWwiLCJuYXZMaXN0IiwibGkiLCJhY3RpdmUiLCJvbkNsaWNrIiwibWFpbiIsIm1haW5Db250ZW50IiwiaGVhZGVyIiwibmV3VHJhbnNhY3Rpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/dashboard/button/page.tsx\n"));

/***/ })

});