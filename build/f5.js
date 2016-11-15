/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="./typings/index.d.ts"/>
	"use strict";
	var f5_1 = __webpack_require__(1);
	window.onload = function () { return new f5_1.F5(); };


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Phaser = __webpack_require__(2);
	var war_state_1 = __webpack_require__(3);
	var GAME_WIDTH = 1920;
	var GAME_HEIGHT = 1080;
	var GAME_ID = "f5-game";
	var F5 = (function () {
	    function F5() {
	        this.game = new Phaser.Game(GAME_WIDTH, GAME_HEIGHT, Phaser.AUTO, GAME_ID, {
	            create: this.create,
	        });
	    }
	    F5.prototype.create = function () {
	        this.game.state.add("war", war_state_1.WarState, false);
	        this.game.state.start("war");
	    };
	    return F5;
	}());
	exports.F5 = F5;


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = Phaser;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Phaser = __webpack_require__(2);
	var her_1 = __webpack_require__(4);
	var small_fish_1 = __webpack_require__(5);
	var SPRITESHEETS_PATH = "assets/spritesheets";
	var WarState = (function (_super) {
	    __extends(WarState, _super);
	    function WarState() {
	        _super.apply(this, arguments);
	    }
	    WarState.prototype.preload = function () {
	        this.game.load.image("her", SPRITESHEETS_PATH + "/main_char.png");
	        this.game.load.image("small_fish", SPRITESHEETS_PATH + "/small_fish.png");
	    };
	    WarState.prototype.create = function () {
	        this.her = her_1.Her.create(this.game);
	        small_fish_1.SmallFish.create(this.game);
	    };
	    WarState.prototype.update = function () {
	        if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
	            this.her.moveRight();
	        }
	        else if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
	            this.her.moveLeft();
	        }
	        else if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
	            this.her.moveUp();
	        }
	        else if (this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
	            this.her.moveDown();
	        }
	    };
	    return WarState;
	}(Phaser.State));
	exports.WarState = WarState;


/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	var VELOCITY = 10;
	var Her = (function () {
	    function Her(sprite) {
	        this.sprite = sprite;
	    }
	    Her.prototype.moveRight = function () {
	        this.sprite.x += VELOCITY;
	    };
	    Her.prototype.moveLeft = function () {
	        this.sprite.x -= VELOCITY;
	    };
	    Her.prototype.moveUp = function () {
	        this.sprite.y -= VELOCITY;
	    };
	    Her.prototype.moveDown = function () {
	        this.sprite.y += VELOCITY;
	    };
	    Her.create = function (game) {
	        var sprite = game.add.sprite(game.world.centerX, game.world.centerY, "her");
	        sprite.anchor.setTo(0.5, 0.5);
	        sprite.inputEnabled = true;
	        return new Her(sprite);
	    };
	    return Her;
	}());
	exports.Her = Her;


/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	var SmallFish = (function () {
	    function SmallFish() {
	    }
	    SmallFish.create = function (game) {
	        var sprite = game.add.sprite(game.world.centerX, game.world.centerY - 300, "small_fish");
	        sprite.anchor.setTo(0.5);
	    };
	    return SmallFish;
	}());
	exports.SmallFish = SmallFish;


/***/ }
/******/ ]);