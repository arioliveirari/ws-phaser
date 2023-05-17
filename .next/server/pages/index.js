"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Home() {\n    const [phaser, setPhaser] = react__WEBPACK_IMPORTED_MODULE_1___default().useState();\n    const [game, setGame] = react__WEBPACK_IMPORTED_MODULE_1___default().useState();\n    const [scenes, setScenes] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        // CLEAN OLD GAME IN DEVELOPMENT\n        if (game) {\n            game.destroy(true);\n            setGame(undefined);\n        }\n        // CLEAN OLD GAME IN DEVELOPMENT\n        //Load phaser async when windows is ready\n        Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! phaser */ \"phaser\", 23)).then(setPhaser);\n        //Load scenes async when windows is ready\n        __webpack_require__.e(/*! import() */ \"game_Scene1_ts\").then(__webpack_require__.bind(__webpack_require__, /*! @/game/Scene1 */ \"./game/Scene1.ts\")).then((scene1)=>setScenes([\n                scene1.default\n            ]));\n    }, []);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        // wait until phaser and scenes is ready and check for CLEAN OLD GAME IN DEVELOPMENT\n        if (phaser && scenes.length && !game) {\n            const config = {\n                type: Phaser.AUTO,\n                width: \"100%\",\n                height: \"100%\",\n                parent: \"game-container\",\n                scale: {\n                    mode: window.Phaser.Scale.FIT\n                },\n                scene: scenes[0],\n                physics: {\n                    default: \"arcade\",\n                    arcade: {\n                        overlapBias: 100,\n                        gravity: {\n                            y: 1000\n                        },\n                        debug: true\n                    }\n                }\n            };\n            const game = new phaser.Game(config);\n            setGame(game);\n        }\n    }, [\n        phaser,\n        scenes\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"game-container\",\n        style: {\n            overflow: \"hidden\"\n        }\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\arioli\\\\Documents\\\\GitHub\\\\ws-phaser\\\\pages\\\\index.tsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTBCO0FBQ1gsU0FBU0MsT0FBTztJQUM3QixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0gscURBQWM7SUFDMUMsTUFBTSxDQUFDSyxNQUFNQyxRQUFRLEdBQUdOLHFEQUFjO0lBQ3RDLE1BQU0sQ0FBQ08sUUFBUUMsVUFBVSxHQUFHUixxREFBYyxDQUF3QixFQUFFO0lBRXBFQSxzREFBZSxDQUFDLElBQU07UUFDcEIsZ0NBQWdDO1FBQ2hDLElBQUdLLE1BQU07WUFDUEEsS0FBS0ssT0FBTyxDQUFDLElBQUk7WUFDakJKLFFBQVFLO1FBQ1YsQ0FBQztRQUNELGdDQUFnQztRQUVoQyx5Q0FBeUM7UUFDekMsa0hBQWdCLENBQUNDLElBQUksQ0FBQ1Q7UUFDdEIseUNBQXlDO1FBQ3pDLG9KQUF1QixDQUFDUyxJQUFJLENBQUMsQ0FBQ0MsU0FBV0wsVUFBVTtnQkFBQ0ssT0FBT0MsT0FBTzthQUFDO0lBQ3JFLEdBQUcsRUFBRTtJQUVMZCxzREFBZSxDQUFDLElBQU07UUFDcEIsb0ZBQW9GO1FBQ3BGLElBQUlFLFVBQVVLLE9BQU9RLE1BQU0sSUFBSSxDQUFDVixNQUFNO1lBQ3BDLE1BQU1XLFNBQXVDO2dCQUMzQ0MsTUFBTUMsT0FBT0MsSUFBSTtnQkFDakJDLE9BQU87Z0JBQ1BDLFFBQVE7Z0JBQ1JDLFFBQVE7Z0JBQ1JDLE9BQU87b0JBQ0xDLE1BQU1DLE9BQU9QLE1BQU0sQ0FBQ1EsS0FBSyxDQUFDQyxHQUFHO2dCQUMvQjtnQkFDQUMsT0FBT3JCLE1BQU0sQ0FBQyxFQUFFO2dCQUNoQnNCLFNBQVM7b0JBQ1BmLFNBQVM7b0JBQ1RnQixRQUFRO3dCQUNOQyxhQUFhO3dCQUNiQyxTQUFTOzRCQUFFQyxHQUFHO3dCQUFLO3dCQUNuQkMsT0FBTyxJQUFJO29CQUNiO2dCQUNGO1lBQ0Y7WUFDQSxNQUFNN0IsT0FBTyxJQUFJSCxPQUFPaUMsSUFBSSxDQUFDbkI7WUFDN0JWLFFBQVFEO1FBQ1YsQ0FBQztJQUNILEdBQUc7UUFBQ0g7UUFBUUs7S0FBTztJQUVuQixxQkFDRSw4REFBQzZCO1FBQUlDLElBQUc7UUFBaUJDLE9BQU87WUFBRUMsVUFBVTtRQUFTOzs7Ozs7QUFFekQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dzLXBoYXNlci8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbcGhhc2VyLCBzZXRQaGFzZXJdID0gUmVhY3QudXNlU3RhdGU8dHlwZW9mIFBoYXNlciB8IHVuZGVmaW5lZD4oKVxuICBjb25zdCBbZ2FtZSwgc2V0R2FtZV0gPSBSZWFjdC51c2VTdGF0ZTxQaGFzZXIuR2FtZSB8IHVuZGVmaW5lZD4oKVxuICBjb25zdCBbc2NlbmVzLCBzZXRTY2VuZXNdID0gUmVhY3QudXNlU3RhdGU8dHlwZW9mIFBoYXNlci5TY2VuZVtdPihbXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIENMRUFOIE9MRCBHQU1FIElOIERFVkVMT1BNRU5UXG4gICAgaWYoZ2FtZSkge1xuICAgICAgZ2FtZS5kZXN0cm95KHRydWUpXG4gICAgICBzZXRHYW1lKHVuZGVmaW5lZClcbiAgICB9ICBcbiAgICAvLyBDTEVBTiBPTEQgR0FNRSBJTiBERVZFTE9QTUVOVFxuXG4gICAgLy9Mb2FkIHBoYXNlciBhc3luYyB3aGVuIHdpbmRvd3MgaXMgcmVhZHlcbiAgICBpbXBvcnQoXCJwaGFzZXJcIikudGhlbihzZXRQaGFzZXIpIFxuICAgIC8vTG9hZCBzY2VuZXMgYXN5bmMgd2hlbiB3aW5kb3dzIGlzIHJlYWR5XG4gICAgaW1wb3J0KFwiQC9nYW1lL1NjZW5lMVwiKS50aGVuKChzY2VuZTEpID0+IHNldFNjZW5lcyhbc2NlbmUxLmRlZmF1bHRdKSlcbiAgfSwgW10pXG4gXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gd2FpdCB1bnRpbCBwaGFzZXIgYW5kIHNjZW5lcyBpcyByZWFkeSBhbmQgY2hlY2sgZm9yIENMRUFOIE9MRCBHQU1FIElOIERFVkVMT1BNRU5UXG4gICAgaWYgKHBoYXNlciAmJiBzY2VuZXMubGVuZ3RoICYmICFnYW1lKSB7XG4gICAgICBjb25zdCBjb25maWc6IFBoYXNlci5UeXBlcy5Db3JlLkdhbWVDb25maWcgPSB7XG4gICAgICAgIHR5cGU6IFBoYXNlci5BVVRPLFxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgIHBhcmVudDogXCJnYW1lLWNvbnRhaW5lclwiLFxuICAgICAgICBzY2FsZToge1xuICAgICAgICAgIG1vZGU6IHdpbmRvdy5QaGFzZXIuU2NhbGUuRklUXG4gICAgICAgIH0sXG4gICAgICAgIHNjZW5lOiBzY2VuZXNbMF0sXG4gICAgICAgIHBoeXNpY3M6IHtcbiAgICAgICAgICBkZWZhdWx0OiBcImFyY2FkZVwiLFxuICAgICAgICAgIGFyY2FkZToge1xuICAgICAgICAgICAgb3ZlcmxhcEJpYXM6IDEwMCxcbiAgICAgICAgICAgIGdyYXZpdHk6IHsgeTogMTAwMCB9LFxuICAgICAgICAgICAgZGVidWc6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgICB9XG4gICAgICBjb25zdCBnYW1lID0gbmV3IHBoYXNlci5HYW1lKGNvbmZpZylcbiAgICAgIHNldEdhbWUoZ2FtZSk7XG4gICAgfSBcbiAgfSwgW3BoYXNlciwgc2NlbmVzXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9XCJnYW1lLWNvbnRhaW5lclwiIHN0eWxlPXt7IG92ZXJmbG93OiBcImhpZGRlblwiIH19IC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkhvbWUiLCJwaGFzZXIiLCJzZXRQaGFzZXIiLCJ1c2VTdGF0ZSIsImdhbWUiLCJzZXRHYW1lIiwic2NlbmVzIiwic2V0U2NlbmVzIiwidXNlRWZmZWN0IiwiZGVzdHJveSIsInVuZGVmaW5lZCIsInRoZW4iLCJzY2VuZTEiLCJkZWZhdWx0IiwibGVuZ3RoIiwiY29uZmlnIiwidHlwZSIsIlBoYXNlciIsIkFVVE8iLCJ3aWR0aCIsImhlaWdodCIsInBhcmVudCIsInNjYWxlIiwibW9kZSIsIndpbmRvdyIsIlNjYWxlIiwiRklUIiwic2NlbmUiLCJwaHlzaWNzIiwiYXJjYWRlIiwib3ZlcmxhcEJpYXMiLCJncmF2aXR5IiwieSIsImRlYnVnIiwiR2FtZSIsImRpdiIsImlkIiwic3R5bGUiLCJvdmVyZmxvdyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "phaser":
/*!*************************!*\
  !*** external "phaser" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("phaser");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();