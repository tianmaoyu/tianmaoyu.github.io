window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  AudioType: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "17e06s7ZTpJkK+I5pkfjplM", "AudioType");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var AudioType;
    (function(AudioType) {
      AudioType["btn"] = "btn";
      AudioType["jump"] = "jump";
      AudioType["fail"] = "fail";
    })(AudioType = exports.AudioType || (exports.AudioType = {}));
    cc._RF.pop();
  }, {} ],
  CCAsync: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5b3adAcSXlOHYvVu5U20NY/", "CCAsync");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var CCAsync = function() {
      function CCAsync() {}
      CCAsync.load = function(url) {
        return new Promise(function(resolve, reject) {
          cc.loader.load(url, function(err, texture) {
            err ? reject(err) : resolve(texture);
          });
        });
      };
      return CCAsync;
    }();
    exports.CCAsync = CCAsync;
    cc._RF.pop();
  }, {} ],
  CCExtend: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "85f63Po+3JGu7aUntbB6OxX", "CCExtend");
    cc.Node.prototype.find = function(value) {
      return cc.find(value, this);
    };
    cc.Node.prototype.find = function(path, typeOrName) {
      void 0 === typeOrName && (typeOrName = null);
      return typeOrName ? cc.find(path, this).getComponent(typeOrName) : cc.find(path, this);
    };
    cc.SpriteFrame.prototype.load = function(url, isOrigin) {
      void 0 === isOrigin && (isOrigin = false);
      var self = this;
      isOrigin ? cc.loader.load(url, function(err, texture) {
        self = new cc.SpriteFrame(texture);
      }) : cc.loader.loadRes(url, cc.SpriteFrame, function(err, spriteFrame) {
        self = spriteFrame;
      });
    };
    cc._RF.pop();
  }, {} ],
  ChangeColorPolicy: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "15db2rSpgFDKbY+a/gq5msR", "ChangeColorPolicy");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    const Model_ShadowType_1 = require("./Model.ShadowType");
    class ColorPolicy {
      static getColorType() {
        var random = Math.floor(1 + 6 * Math.random());
        if (1 == random) return Model_ShadowType_1.ColorType.yellow;
        if (2 == random) return Model_ShadowType_1.ColorType.red;
        if (3 == random) return Model_ShadowType_1.ColorType.blue;
        if (4 == random) return Model_ShadowType_1.ColorType.dyellow;
        if (5 == random) return Model_ShadowType_1.ColorType.violet;
        if (6 == random) return Model_ShadowType_1.ColorType.green;
      }
    }
    exports.ColorPolicy = ColorPolicy;
    class RingPolicy {
      static setDeafult() {
        this.colorList = this.defaultColorList;
      }
      static getAngle(colorType) {
        let index = RingPolicy.colorList.indexOf(colorType);
        let angle = RingPolicy.getAngleByIndex(index);
        let isContinue = true;
        while (isContinue) {
          let type = RingPolicy.colorList.shift();
          if (type == colorType) {
            isContinue = false;
            RingPolicy.colorList.unshift(type);
          } else RingPolicy.colorList.push(type);
        }
        return angle;
      }
      static getAngleByIndex(index) {
        if (0 == index) return 0;
        if (1 == index) return 60;
        if (2 == index) return 120;
        if (3 == index) return -180;
        if (4 == index) return -120;
        if (5 == index) return -60;
      }
      static getPositionByColorType(colorType) {
        let index = RingPolicy.defaultColorList.indexOf(colorType);
        let angle = 0;
        0 == index && (angle = -90);
        1 == index && (angle = -150);
        2 == index && (angle = 150);
        3 == index && (angle = 90);
        4 == index && (angle = 30);
        5 == index && (angle = -30);
        let y = Math.sin(angle * Math.PI / 180);
        let x = Math.cos(angle * Math.PI / 180);
        return cc.v2(x, y);
      }
    }
    RingPolicy.defaultColorList = [ Model_ShadowType_1.ColorType.violet, Model_ShadowType_1.ColorType.dyellow, Model_ShadowType_1.ColorType.blue, Model_ShadowType_1.ColorType.red, Model_ShadowType_1.ColorType.yellow, Model_ShadowType_1.ColorType.green ];
    RingPolicy.colorList = [ Model_ShadowType_1.ColorType.violet, Model_ShadowType_1.ColorType.dyellow, Model_ShadowType_1.ColorType.blue, Model_ShadowType_1.ColorType.red, Model_ShadowType_1.ColorType.yellow, Model_ShadowType_1.ColorType.green ];
    exports.RingPolicy = RingPolicy;
    cc._RF.pop();
  }, {
    "./Model.ShadowType": "Model.ShadowType"
  } ],
  CommonResult: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9b4abW/tzlE0rG5x2WkdHZM", "CommonResult");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var CommonResult = function() {
      function CommonResult() {}
      return CommonResult;
    }();
    exports.CommonResult = CommonResult;
    var CodeStauts;
    (function(CodeStauts) {
      CodeStauts[CodeStauts["SUCCESS"] = 0] = "SUCCESS";
      CodeStauts[CodeStauts["ERROR"] = 1] = "ERROR";
      CodeStauts[CodeStauts["NO_DATA"] = 2] = "NO_DATA";
      CodeStauts[CodeStauts["No_Authorize"] = 3] = "No_Authorize";
    })(CodeStauts = exports.CodeStauts || (exports.CodeStauts = {}));
    cc._RF.pop();
  }, {} ],
  "Controller.Room": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fd85810uTJLeoyCpU1fkH/R", "Controller.Room");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    class RoomController {}
    RoomController.score = 0;
    RoomController.bestScore = 120;
    exports.RoomController = RoomController;
    cc._RF.pop();
  }, {} ],
  "Data.Sprite": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fff36/gjAZHw5y4zssNMqUr", "Data.Sprite");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var DataSprite_1;
    const Model_ShadowType_1 = require("./Model.ShadowType");
    const {ccclass: ccclass, property: property} = cc._decorator;
    let DataSprite = DataSprite_1 = class DataSprite extends cc.Component {
      constructor() {
        super(...arguments);
        this.redBall = null;
        this.blueBall = null;
        this.yellowBall = null;
        this.violetBall = null;
        this.dyellowBall = null;
        this.greenBall = null;
        this.jump = null;
        this.btn = null;
        this.fail = null;
      }
      onLoad() {
        DataSprite_1.Sprites = this;
      }
      static getSpriteFrame(colorType) {
        if (colorType == Model_ShadowType_1.ColorType.blue) return this.Sprites.blueBall;
        if (colorType == Model_ShadowType_1.ColorType.dyellow) return this.Sprites.dyellowBall;
        if (colorType == Model_ShadowType_1.ColorType.green) return this.Sprites.greenBall;
        if (colorType == Model_ShadowType_1.ColorType.red) return this.Sprites.redBall;
        if (colorType == Model_ShadowType_1.ColorType.violet) return this.Sprites.violetBall;
        if (colorType == Model_ShadowType_1.ColorType.yellow) return this.Sprites.yellowBall;
      }
    };
    __decorate([ property(cc.SpriteFrame) ], DataSprite.prototype, "redBall", void 0);
    __decorate([ property(cc.SpriteFrame) ], DataSprite.prototype, "blueBall", void 0);
    __decorate([ property(cc.SpriteFrame) ], DataSprite.prototype, "yellowBall", void 0);
    __decorate([ property(cc.SpriteFrame) ], DataSprite.prototype, "violetBall", void 0);
    __decorate([ property(cc.SpriteFrame) ], DataSprite.prototype, "dyellowBall", void 0);
    __decorate([ property(cc.SpriteFrame) ], DataSprite.prototype, "greenBall", void 0);
    __decorate([ property(cc.AudioClip) ], DataSprite.prototype, "jump", void 0);
    __decorate([ property(cc.AudioClip) ], DataSprite.prototype, "btn", void 0);
    __decorate([ property(cc.AudioClip) ], DataSprite.prototype, "fail", void 0);
    DataSprite = DataSprite_1 = __decorate([ ccclass ], DataSprite);
    exports.default = DataSprite;
    cc._RF.pop();
  }, {
    "./Model.ShadowType": "Model.ShadowType"
  } ],
  EventDispatcher: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2415589mfhJGpQByiMa1rdF", "EventDispatcher");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EventCenter = function() {
      function EventCenter() {}
      EventCenter.emit = function(type) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) args[_i - 1] = arguments[_i];
        var arr = this.eventList[type];
        arr && arr.forEach(function(element) {
          element[0].apply(element[1], args);
        });
      };
      EventCenter.on = function(type, listener, thisObject) {
        var arr = this.eventList[type];
        if (arr) arr.forEach(function(element) {
          if (element[0] == listener && element[1] == thisObject) return;
        }); else {
          arr = [];
          this.eventList[type] = arr;
        }
        arr.push([ listener, thisObject ]);
      };
      EventCenter.off = function(type, listener, thisObject) {
        var arr = this.eventList[type];
        if (arr) {
          var len = arr.length;
          for (var i = len - 1; i >= 0; i--) arr[i][0] == listener && arr[i][1] == thisObject && arr.splice(i, 1);
        }
        if (arr && 0 == arr.length) {
          this.eventList[type] = null;
          delete this.eventList[type];
        }
      };
      EventCenter.offAll = function() {
        this.eventList = {};
      };
      EventCenter.eventList = {};
      return EventCenter;
    }();
    exports.EventCenter = EventCenter;
    cc._RF.pop();
  }, {} ],
  GameConfig: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a6b45ayvgpLz5bHCst3fzFj", "GameConfig");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ProtocolType;
    (function(ProtocolType) {
      ProtocolType[ProtocolType["Json"] = 1] = "Json";
      ProtocolType[ProtocolType["ByteBuffer"] = 2] = "ByteBuffer";
    })(ProtocolType = exports.ProtocolType || (exports.ProtocolType = {}));
    var EnvironmentType;
    (function(EnvironmentType) {
      EnvironmentType[EnvironmentType["Develop"] = 1] = "Develop";
      EnvironmentType[EnvironmentType["Test"] = 2] = "Test";
      EnvironmentType[EnvironmentType["Produce"] = 3] = "Produce";
    })(EnvironmentType = exports.EnvironmentType || (exports.EnvironmentType = {}));
    var PlatformType;
    (function(PlatformType) {
      PlatformType[PlatformType["WX"] = 1] = "WX";
      PlatformType[PlatformType["TT"] = 2] = "TT";
      PlatformType[PlatformType["Web"] = 3] = "Web";
    })(PlatformType = exports.PlatformType || (exports.PlatformType = {}));
    class GameConfig {
      static get_Game_WS_Url() {
        if (this.EnvironmentType == EnvironmentType.Develop) return this.game_url_develop_ws;
        if (this.EnvironmentType == EnvironmentType.Test) return this.game_url_test_ws;
        if (GameConfig.EnvironmentType == EnvironmentType.Produce) return this.game_url_produce_wss;
      }
      static get_Game_Http_Url() {
        if (this.EnvironmentType == EnvironmentType.Develop) return this.game_url_develop_http;
        if (GameConfig.EnvironmentType == EnvironmentType.Test) return this.game_url_test_http;
        if (GameConfig.EnvironmentType == EnvironmentType.Produce) return this.game_url_produce_https;
      }
      static get_Apply_Room() {
        return this.get_Game_Http_Url() + "Game/ApplyRoom?versionStr=" + this.VersionStr;
      }
    }
    GameConfig.Move_FrameInterval = .1;
    GameConfig.ProtocolType = ProtocolType.Json;
    GameConfig.PlatformType = PlatformType.Web;
    GameConfig.EnvironmentType = EnvironmentType.Test;
    GameConfig.OpenId = "test";
    GameConfig.VersionStr = "1.0.2";
    GameConfig.SpeedMax = 500;
    GameConfig.SpeedDefault = 400;
    GameConfig.Speedmin = 200;
    GameConfig.MinX = -1e3;
    GameConfig.MinY = -1e3;
    GameConfig.MaxX = 1e3;
    GameConfig.MaxY = 1e3;
    GameConfig.TopRadius = 60;
    GameConfig.game_url_develop_http = "http://127.0.0.1:8081/";
    GameConfig.game_url_test_http = "http://47.107.173.220:8081/";
    GameConfig.game_url_produce_https = "https://www.ws-go.com/";
    GameConfig.game_url_develop_ws = "ws://127.0.0.1:8082/ws?roomId=1";
    GameConfig.game_url_test_ws = "ws://47.107.173.220:8082/ws?roomId=1";
    GameConfig.game_url_produce_wss = "wss://www.ws-go.com/ws?roomId=1";
    exports.GameConfig = GameConfig;
    cc._RF.pop();
  }, {} ],
  GlobalStatic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1f23cvZpZtPhr6AJghoWEox", "GlobalStatic");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    const GameConfig_1 = require("./GameConfig");
    class PlayerSelectTop {}
    PlayerSelectTop.topSpriteIndex = 1;
    PlayerSelectTop.playerTopIndex = 1;
    PlayerSelectTop.IsPhoto = false;
    exports.PlayerSelectTop = PlayerSelectTop;
    var GenderType;
    (function(GenderType) {
      GenderType[GenderType["male"] = 1] = "male";
      GenderType[GenderType["female"] = 2] = "female";
    })(GenderType = exports.GenderType || (exports.GenderType = {}));
    class PlayerInfo {}
    exports.PlayerInfo = PlayerInfo;
    class GlobalStatic {
      static get_Defualt_PlayerInfo() {
        var info = new PlayerInfo();
        info.Name = "\u533f\u540d";
        info.Adress = "\u5317\u4eac";
        info.GenderType = GenderType.male;
        info.ID = "01";
        info.PlatformType = GameConfig_1.PlatformType.Web;
        return info;
      }
      static UserNamePolice(name) {
        if (name.length <= 6) return name;
        let _name = name[0] + name[1] + "*" + name[name.length - 2] + name[name.length - 1];
        return _name;
      }
    }
    GlobalStatic.IsExit = false;
    GlobalStatic.UserInfo = null;
    GlobalStatic.PlayerTopIndex = 1;
    GlobalStatic.IsAccelerated = false;
    exports.GlobalStatic = GlobalStatic;
    cc._RF.pop();
  }, {
    "./GameConfig": "GameConfig"
  } ],
  HoomEventCenter: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a9576GyXrZJmrr5sHYMDMb3", "HoomEventCenter");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    class HoomEventCenter {
      constructor() {}
      static emit(type, ...args) {
        let arr = this.eventList[type];
        arr && arr.forEach(element => {
          element[0].apply(element[1], args);
        });
      }
      static on(type, listener, thisObject) {
        let arr = this.eventList[type];
        if (arr) arr.forEach(element => {
          if (element[0] == listener && element[1] == thisObject) return;
        }); else {
          arr = [];
          this.eventList[type] = arr;
        }
        arr.push([ listener, thisObject ]);
      }
      static off(type, listener, thisObject) {
        var arr = this.eventList[type];
        if (arr) {
          var len = arr.length;
          for (var i = len - 1; i >= 0; i--) arr[i][0] == listener && arr[i][1] == thisObject && arr.splice(i, 1);
        }
        if (arr && 0 == arr.length) {
          this.eventList[type] = null;
          delete this.eventList[type];
        }
      }
      static offAll() {
        this.eventList = {};
      }
    }
    HoomEventCenter.eventList = {};
    exports.HoomEventCenter = HoomEventCenter;
    cc._RF.pop();
  }, {} ],
  Http: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d7099Ijz6VK6rkMEgZcEasB", "Http");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var XHR_1 = require("./Network/XHR");
    var Http = function() {
      function Http() {}
      Http.get = function(url) {
        return XHR_1.XHRCreater.createInstance().getJSON_Async(url);
      };
      Http.post = function(url, data) {
        return XHR_1.XHRCreater.createInstance().post_Async(url, data);
      };
      return Http;
    }();
    exports.Http = Http;
    cc._RF.pop();
  }, {
    "./Network/XHR": "XHR"
  } ],
  IWXAPI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "68d5cLO5eZFtan1BCK7nnLi", "IWXAPI");
    cc._RF.pop();
  }, {} ],
  LocationStorage: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5d6f7YyRs1BQJiLuO/fPh/w", "LocationStorage");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var LocationStorage = function() {
      function LocationStorage() {}
      LocationStorage.get = function(key) {
        return new Object();
      };
      LocationStorage.set = function(key, obj) {};
      return LocationStorage;
    }();
    exports.LocationStorage = LocationStorage;
    var Web_LocalStorage = function() {
      function Web_LocalStorage() {}
      Web_LocalStorage.get = function(key) {
        var obj = localStorage.getItem(key);
        if (!obj) return null;
        return JSON.parse(obj);
      };
      Web_LocalStorage.set = function(key, obj) {
        localStorage.setItem(key, JSON.stringify(obj));
      };
      return Web_LocalStorage;
    }();
    exports.Web_LocalStorage = Web_LocalStorage;
    cc._RF.pop();
  }, {} ],
  Logger: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9288eW3eLxACa2aGjkpURH2", "Logger");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GameConfig_1 = require("../Core/GameConfig");
    var Logger = function() {
      function Logger() {}
      Logger.info = function() {
        var any = [];
        for (var _i = 0; _i < arguments.length; _i++) any[_i] = arguments[_i];
        GameConfig_1.GameConfig.EnvironmentType != GameConfig_1.EnvironmentType.Produce && console.info(any);
      };
      return Logger;
    }();
    exports.Logger = Logger;
    cc._RF.pop();
  }, {
    "../Core/GameConfig": "GameConfig"
  } ],
  "Model.RoomEvent": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "578f0ndGF1IaLUokhdZLWUa", "Model.RoomEvent");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EventType;
    (function(EventType) {
      EventType["sys_ws_error"] = "ws_error";
      EventType["sys_ws_message"] = "ws_message";
      EventType["sys_ws_close"] = "ws_close";
      EventType["sys_ws_send"] = "ws_send";
      EventType["zoom"] = "onZoom";
      EventType["ballHighest"] = "ballHighest";
      EventType["ballLowest"] = "balllowest";
      EventType["createBallShadow"] = "createBallShadow";
      EventType["recycleBallShadow"] = "recycleBallShadow";
      EventType["recycleCollideShadow"] = "recycleCollideShadow";
      EventType["createCollideShadow"] = "createCollideShadow";
      EventType["ballColorChange"] = "ballColorChange";
      EventType["ringColorChage"] = "ringColorChage";
      EventType["playLeft"] = "playLeft";
      EventType["playRight"] = "playRight";
      EventType["gainScore"] = "gainScore";
      EventType["jumpFail"] = "jumpFail";
    })(EventType = exports.EventType || (exports.EventType = {}));
    cc._RF.pop();
  }, {} ],
  "Model.ShadowType": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6e872wHLv9Ifak9Q1BsfBRR", "Model.ShadowType");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ColorType;
    (function(ColorType) {
      ColorType["red"] = "red";
      ColorType["blue"] = "blue";
      ColorType["green"] = "green";
      ColorType["yellow"] = "yellow";
      ColorType["violet"] = "violet";
      ColorType["dyellow"] = "dyellow";
    })(ColorType = exports.ColorType || (exports.ColorType = {}));
    cc._RF.pop();
  }, {} ],
  NotificationCenter: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3b57fI9Kz5ElauGxMfmwtyw", "NotificationCenter");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var NotificationCenter = function() {
      function NotificationCenter() {
        this.eventTarget = new cc.EventTarget();
      }
      Object.defineProperty(NotificationCenter, "Instance", {
        get: function() {
          null == this.instance && (this.instance = new NotificationCenter());
          return this.instance;
        },
        enumerable: true,
        configurable: true
      });
      NotificationCenter.prototype.on = function(name, callback, target) {
        this.eventTarget.on(name, callback, target);
      };
      NotificationCenter.prototype.emit = function(name, arg1, arg2, arg3, arg4, arg5) {
        this.eventTarget.emit(name, arg1, arg2, arg3, arg4, arg5);
      };
      NotificationCenter.prototype.off = function(name, callback, target) {
        this.eventTarget.off(name, callback, target);
      };
      NotificationCenter.instance = null;
      return NotificationCenter;
    }();
    exports.NotificationCenter = NotificationCenter;
    cc._RF.pop();
  }, {} ],
  PlatformAuthorize: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "64e17rxrotH1YRv+VotQFoz", "PlatformAuthorize");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var PlatformAuthorize_1;
    const GlobalStatic_1 = require("./GlobalStatic");
    const GameConfig_1 = require("./GameConfig");
    const Logger_1 = require("../Util/Logger");
    const {ccclass: ccclass, property: property} = cc._decorator;
    let PlatformAuthorize = PlatformAuthorize_1 = class PlatformAuthorize extends cc.Component {
      onLoad() {
        this.getUserFromStorage();
        null == GlobalStatic_1.GlobalStatic.UserInfo ? this.initAuthorize(this.node) : this.node.destroy();
      }
      getUserFromStorage() {
        let self = this;
        if (null != GlobalStatic_1.GlobalStatic.UserInfo) return;
        GameConfig_1.GameConfig.PlatformType == GameConfig_1.PlatformType.WX && wx.getStorage({
          key: PlatformAuthorize_1.userInfoKey,
          success(res) {
            GlobalStatic_1.GlobalStatic.UserInfo = res.data;
            self.wxBtnAuthorize.destroy();
            self.node.destroy();
          }
        });
        GameConfig_1.GameConfig.PlatformType == GameConfig_1.PlatformType.TT && tt.getStorage({
          key: PlatformAuthorize_1.userInfoKey,
          success(res) {
            GlobalStatic_1.GlobalStatic.UserInfo = res.data;
            self.node.destroy();
          }
        });
      }
      setUserToStorage(userinfo) {
        GameConfig_1.GameConfig.PlatformType == GameConfig_1.PlatformType.WX && wx.setStorage({
          key: PlatformAuthorize_1.userInfoKey,
          data: userinfo,
          success(res) {}
        });
        GameConfig_1.GameConfig.PlatformType == GameConfig_1.PlatformType.TT && tt.setStorage({
          key: PlatformAuthorize_1.userInfoKey,
          data: userinfo,
          success(res) {}
        });
      }
      initAuthorize(btnNode = null) {
        this.web_get_palyerInfo();
        GameConfig_1.GameConfig.PlatformType == GameConfig_1.PlatformType.WX && this.createAuthorizeBtn(this.node);
        GameConfig_1.GameConfig.PlatformType == GameConfig_1.PlatformType.Web && this.node.destroy();
        if (GameConfig_1.GameConfig.PlatformType == GameConfig_1.PlatformType.TT) {
          this.createAuthorize_tt();
          this.node.destroy();
        }
      }
      web_get_palyerInfo() {
        GlobalStatic_1.GlobalStatic.UserInfo = GlobalStatic_1.GlobalStatic.get_Defualt_PlayerInfo();
      }
      createAuthorize_tt() {
        let self = this;
        tt.login({
          success(res) {
            tt.getSetting({
              success(res) {
                tt.getUserInfo({
                  withCredentials: true,
                  success(res) {
                    let userInfo = new GlobalStatic_1.PlayerInfo();
                    userInfo.Name = GlobalStatic_1.GlobalStatic.UserNamePolice(res.userInfo.nickName);
                    userInfo.Adress = res.userInfo.city;
                    userInfo.PlatformType = GameConfig_1.PlatformType.WX;
                    userInfo.ID = "tt\u6ca1\u6709";
                    GlobalStatic_1.GlobalStatic.UserInfo = userInfo;
                    self.setUserToStorage(userInfo);
                  },
                  fail(res) {}
                });
              }
            });
          },
          fail(res) {}
        });
      }
      createAuthorizeBtn(btnNode) {
        let self = this;
        let btnSize = cc.size(btnNode.width + 10, btnNode.height + 10);
        let frameSize = cc.view.getFrameSize();
        let winSize = cc.winSize;
        let left = (.5 * winSize.width + btnNode.x - .5 * btnSize.width) / winSize.width * frameSize.width;
        let top = (.5 * winSize.height - btnNode.y - .5 * btnSize.height) / winSize.height * frameSize.height;
        let width = btnSize.width / winSize.width * frameSize.width;
        let height = btnSize.height / winSize.height * frameSize.height;
        this.wxBtnAuthorize = wx.createUserInfoButton({
          type: "text",
          text: "",
          style: {
            left: left,
            top: top,
            width: width,
            height: height,
            lineHeight: 0,
            backgroundColor: "",
            color: "#ffffff",
            textAlign: "center",
            fontSize: 16,
            borderRadius: 4
          }
        });
        this.wxBtnAuthorize.onTap(res => {
          if (res.userInfo) {
            Logger_1.Logger.info("\u7528\u6237\u4fe1\u606f" + JSON.stringify(res.userInfo));
            let userInfo = new GlobalStatic_1.PlayerInfo();
            userInfo.Name = GlobalStatic_1.GlobalStatic.UserNamePolice(res.userInfo.nickName);
            userInfo.GenderType = res.userInfo.gender;
            userInfo.Adress = res.userInfo.city;
            userInfo.PlatformType = GameConfig_1.PlatformType.WX;
            userInfo.UserPhotoUrl = res.userInfo.avatarUrl;
            userInfo.Province = res.userInfo.province;
            userInfo.City = res.userInfo.city;
            userInfo.ID = "wx\u6ca1\u6709";
            GlobalStatic_1.GlobalStatic.UserInfo = userInfo;
            self.setUserToStorage(userInfo);
          }
          this.wxBtnAuthorize.destroy();
          this.node.destroy();
        });
      }
    };
    PlatformAuthorize.userInfoKey = "user_Info_Key";
    PlatformAuthorize = PlatformAuthorize_1 = __decorate([ ccclass ], PlatformAuthorize);
    exports.default = PlatformAuthorize;
    cc._RF.pop();
  }, {
    "../Util/Logger": "Logger",
    "./GameConfig": "GameConfig",
    "./GlobalStatic": "GlobalStatic"
  } ],
  PlatformPlayerInfo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6aa20//glVODK4w41QNR5H/", "PlatformPlayerInfo");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    const GameConfig_1 = require("./GameConfig");
    const GlobalStatic_1 = require("./GlobalStatic");
    const Logger_1 = require("../Util/Logger");
    class PlatformPlayerInfo {
      static getUserFromStorage() {
        switch (GameConfig_1.GameConfig.PlatformType) {
         case PlatformType.WX:
          wx.getStorage({
            key: this.userInfoKey,
            success(res) {
              GlobalStatic_1.GlobalStatic.UserInfo = res.data;
              Logger_1.Logger.info("\u7528\u6237\u4fe1\u606f" + JSON.stringify(res.data));
            }
          });
          break;

         case PlatformType.TT:
          tt.getStorage({
            key: this.userInfoKey,
            success(res) {
              GlobalStatic_1.GlobalStatic.UserInfo = res.data;
              Logger_1.Logger.info("\u7528\u6237\u4fe1\u606f" + JSON.stringify(res.data));
            }
          });
          break;

         default:
          GlobalStatic_1.GlobalStatic.UserInfo = GlobalStatic_1.GlobalStatic.get_Defualt_PlayerInfo();
        }
      }
      static setUserToStorage(userinfo) {
        switch (GameConfig_1.GameConfig.PlatformType) {
         case PlatformType.WX:
          wx.setStorage({
            key: this.userInfoKey,
            data: userinfo,
            success(res) {
              Logger_1.Logger.info("\u8bbe\u7f6e\u6210\u529f" + JSON.stringify(res));
            }
          });
          break;

         case PlatformType.TT:
          tt.setStorage({
            key: this.userInfoKey,
            data: userinfo,
            success(res) {
              Logger_1.Logger.info("\u8bbe\u7f6e\u6210\u529f" + JSON.stringify(res));
            }
          });
        }
      }
    }
    PlatformPlayerInfo.userInfoKey = "user_Info_Key";
    exports.PlatformPlayerInfo = PlatformPlayerInfo;
    cc._RF.pop();
  }, {
    "../Util/Logger": "Logger",
    "./GameConfig": "GameConfig",
    "./GlobalStatic": "GlobalStatic"
  } ],
  "Resource.Audio": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "69f7cdh8m5FA4V9vuck4TF1", "Resource.Audio");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    class AudioResource {
      static cacheAudioClip(clipArray) {
        for (let index = 0; index < clipArray.length; index++) {
          const clip = clipArray[index];
          this.AudioMap.set(clip.name, clip);
        }
      }
      static playByAudioType(audioType) {
        let clip = this.AudioMap.get(audioType.toString());
        let id = cc.audioEngine.play(clip, false, 1);
        this.audioPool.push(id);
        cc.audioEngine.setFinishCallback(id, this.onRemoveAudio.bind(this, id));
      }
      static playByNameKey(key) {
        let clip = this.AudioMap.get(key);
        let id = cc.audioEngine.play(clip, false, 1);
        this.audioPool.push(id);
        cc.audioEngine.setFinishCallback(id, this.onRemoveAudio.bind(this, id));
      }
      static pause(audioId) {
        cc.audioEngine.pause(audioId);
      }
      static stop(audioId) {
        cc.audioEngine.stop(audioId);
      }
      static resume(audioId) {
        cc.audioEngine.resume(audioId);
      }
      static onRemoveAudio(id) {
        var index = this.audioPool.indexOf(id);
        index > -1 && this.audioPool.splice(index, 1);
      }
      static playBgmByType(audioType) {
        let clip = this.AudioMap.get(audioType.toString());
        let id = cc.audioEngine.playMusic(clip, true);
        this.audioPool.push(id);
        cc.audioEngine.setFinishCallback(id, this.onRemoveAudio.bind(this, id));
      }
    }
    AudioResource.audioPool = new Array();
    AudioResource.AudioMap = new Map();
    exports.AudioResource = AudioResource;
    cc._RF.pop();
  }, {} ],
  "Resource.Config": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "eb1b6BQtoFEeKVT5WVhsN54", "Resource.Config");
    "use strict";
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : new P(function(resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    const CCAsync_1 = require("../Util/CCAsync");
    const TTAsync_1 = require("../Util/TTAsync");
    class ConfigController {
      static loadConfig() {
        return __awaiter(this, void 0, void 0, function*() {
          let url = cc.url.raw("resources/test.json");
          let [err, asset] = yield TTAsync_1.asyncWrap(CCAsync_1.CCAsync.load(url));
        });
      }
      test() {
        cc.loader.loadRes("fishconfig", (err, jsonAsset) => {});
      }
    }
    exports.ConfigController = ConfigController;
    cc._RF.pop();
  }, {
    "../Util/CCAsync": "CCAsync",
    "../Util/TTAsync": "TTAsync"
  } ],
  "Resource.Sprite": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5eeb9e2z9NO7aACy3snpcvo", "Resource.Sprite");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var SpriteRes = function() {
      function SpriteRes() {}
      SpriteRes.cacheSpriteFrame = function(clipArray) {
        for (var index = 0; index < clipArray.length; index++) {
          var clip = clipArray[index];
          this.SpriteFrameMap.set(clip.name, clip);
        }
      };
      SpriteRes.getByNameKey = function(key) {
        return this.SpriteFrameMap.get(key);
      };
      SpriteRes.getByType = function(type) {
        return this.SpriteFrameMap.get(type.toString());
      };
      SpriteRes.SpriteFrameMap = new Map();
      return SpriteRes;
    }();
    exports.SpriteRes = SpriteRes;
    cc._RF.pop();
  }, {} ],
  SpriteType: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0c304B4RIxP3qeBeKHAFlsU", "SpriteType");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var SpriteType;
    (function(SpriteType) {
      SpriteType["state_busy"] = "state_busy";
      SpriteType["state_defualt"] = "state_deafualt";
      SpriteType["state_disabled"] = "state_disabled";
      SpriteType["gender_female"] = "gender_female";
      SpriteType["gender_Fame"] = "gender_Fame";
    })(SpriteType = exports.SpriteType || (exports.SpriteType = {}));
    cc._RF.pop();
  }, {} ],
  TTAsync: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8c8b2Bn5RFEAJ5pzbdryyGs", "TTAsync");
    "use strict";
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : new P(function(resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var XHR_1 = require("./Network/XHR");
    function asyncWrap(promise) {
      return promise.then(function(data) {
        return [ null, data ];
      }).catch(function(err) {
        return [ err, null ];
      });
    }
    exports.asyncWrap = asyncWrap;
    function get(url) {
      return __awaiter(this, void 0, Promise, function() {
        var str, json;
        return __generator(this, function(_a) {
          switch (_a.label) {
           case 0:
            return [ 4, XHR_1.XHRCreater.createInstance().getJSON_Async(url) ];

           case 1:
            str = _a.sent();
            json = JSON.parse(str);
            return [ 2, json ];
          }
        });
      });
    }
    exports.get = get;
    function post(url, data) {
      return __awaiter(this, void 0, Promise, function() {
        var str, json;
        return __generator(this, function(_a) {
          switch (_a.label) {
           case 0:
            return [ 4, XHR_1.XHRCreater.createInstance().post_Async(url, data) ];

           case 1:
            str = _a.sent();
            json = JSON.parse(str);
            return [ 2, json ];
          }
        });
      });
    }
    exports.post = post;
    var TTAsync = function() {
      function TTAsync() {}
      TTAsync.loginAsync = function() {
        return new Promise(function(resolve, reject) {
          tt.login({
            success: function(res) {
              resolve(res);
            }
          });
        });
      };
      TTAsync.getgetSettingAsync = function() {
        return new Promise(function(resolve, reject) {
          tt.getSetting({
            success: function(res) {
              resolve(res);
            }
          });
        });
      };
      TTAsync.getUserInfoAsync = function() {
        return new Promise(function(resolve, reject) {
          tt.getUserInfo({
            withCredentials: true,
            success: function(res) {
              resolve(res);
            }
          });
        });
      };
      TTAsync.getSession = function(clientInfo) {
        return new Promise(function(resolve, reject) {
          var url = "https://developer.toutiao.com/api/apps/jscode2session?appid=" + clientInfo.appid + "&secret=" + clientInfo.secret + "&js_code=" + clientInfo.code + "&grant_type=authorization_code";
          tt.request({
            url: url,
            data: {},
            method: "GET",
            success: function(res) {
              resolve(res);
            }
          });
        });
      };
      return TTAsync;
    }();
    exports.TTAsync = TTAsync;
    cc._RF.pop();
  }, {
    "./Network/XHR": "XHR"
  } ],
  TT_WebSocket: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8591ffuYAhJNJt+xPPRWSUP", "TT_WebSocket");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var TT_WebSocket = function() {
      function TT_WebSocket() {}
      TT_WebSocket.open = function(url) {
        if (TT_WebSocket.socketCount > 0) return;
        TT_WebSocket.socketCount++;
        this.ttSocketTask = tt.connectSocket({
          url: url
        });
        this.ttSocketTask.onOpen(function(res) {
          TT_WebSocket.socketOpen = true;
          for (var i = 0; i < TT_WebSocket.socketMsgQueue.length; i++) TT_WebSocket.send(TT_WebSocket.socketMsgQueue[i]);
          TT_WebSocket.socketMsgQueue = [];
        });
        this.ttSocketTask.onClose(function(res) {
          if (TT_WebSocket.onClose) {
            TT_WebSocket.onClose(res);
            TT_WebSocket.clear();
          }
        });
        this.ttSocketTask.onError(function(error) {
          if (TT_WebSocket.onError) {
            TT_WebSocket.onError(error);
            TT_WebSocket.clear();
          }
        });
        this.ttSocketTask.onMessage(function(res) {
          TT_WebSocket.onMessage && TT_WebSocket.onMessage(res.data);
        });
      };
      TT_WebSocket.send = function(msg) {
        TT_WebSocket.socketOpen ? this.ttSocketTask.send({
          data: msg
        }) : TT_WebSocket.socketMsgQueue.push(msg);
      };
      TT_WebSocket.close = function() {
        if (TT_WebSocket.socketOpen) {
          TT_WebSocket.clear();
          this.ttSocketTask.close(null);
        }
      };
      TT_WebSocket.clear = function() {
        TT_WebSocket.socketOpen = false;
        TT_WebSocket.onClose = null;
        TT_WebSocket.onMessage = null;
        TT_WebSocket.onError = null;
        TT_WebSocket.socketMsgQueue = [];
        TT_WebSocket.socketCount = 0;
      };
      TT_WebSocket.socketOpen = false;
      TT_WebSocket.socketCount = 0;
      TT_WebSocket.socketMsgQueue = [];
      return TT_WebSocket;
    }();
    exports.TT_WebSocket = TT_WebSocket;
    cc._RF.pop();
  }, {} ],
  TT_XHR: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "08120V+s/BEy7S5VFMjcwUH", "TT_XHR");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var TT_XHR = function() {
      function TT_XHR() {}
      TT_XHR.getJSON = function(url, success, fail) {
        tt.request({
          url: url,
          method: "GET",
          responseType: "text",
          success: function(res) {
            success && success(res.data);
          },
          fail: function(res) {
            fail && fail(res);
          }
        });
      };
      TT_XHR.post = function(url, data, success, fail) {
        tt.request({
          url: url,
          method: "Post",
          responseType: "text",
          data: data,
          success: function(res) {
            success && success(res.data);
          },
          fail: function(res) {
            fail && fail(res);
          }
        });
      };
      TT_XHR.post_Async = function(url, data) {
        return new Promise(function(resolve, reject) {
          tt.request({
            url: url,
            method: "Post",
            responseType: "text",
            data: data,
            success: function(res) {
              resolve && resolve(res.data);
            },
            fail: function(res) {
              reject && reject(res);
            }
          });
        });
      };
      TT_XHR.getJSON_Async = function(url) {
        return new Promise(function(resolve, reject) {
          tt.request({
            url: url,
            method: "GET",
            responseType: "text",
            success: function(res) {
              resolve(res.data.toString());
            },
            fail: function(res) {
              reject(res);
            }
          });
        });
      };
      return TT_XHR;
    }();
    exports.TT_XHR = TT_XHR;
    cc._RF.pop();
  }, {} ],
  "View.BallShadowLayer": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "06a81BhEy9Ev5lmLQLueIaF", "View.BallShadowLayer");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    const View_BallShadow_1 = require("./View.BallShadow");
    const HoomEventCenter_1 = require("./HoomEventCenter");
    const Model_RoomEvent_1 = require("./Model.RoomEvent");
    const {ccclass: ccclass, property: property} = cc._decorator;
    let BallShadowManager = class BallShadowManager extends cc.Component {
      constructor() {
        super(...arguments);
        this.shadowNodePool = new cc.NodePool(View_BallShadow_1.default);
      }
      onLoad() {
        HoomEventCenter_1.HoomEventCenter.on(Model_RoomEvent_1.EventType.createBallShadow, this.onCreateShadow, this);
        HoomEventCenter_1.HoomEventCenter.on(Model_RoomEvent_1.EventType.recycleBallShadow, this.onRecycleShadow, this);
        this.shadowNode = this.node.find("shadow");
        this.shadowNodePool = new cc.NodePool(View_BallShadow_1.default);
      }
      onRecycleShadow(node) {
        this.shadowNodePool.put(node);
      }
      onCreateShadow(position, colorType) {
        let node;
        node = this.shadowNodePool.size() > 0 ? this.shadowNodePool.get(View_BallShadow_1.default) : cc.instantiate(this.shadowNode);
        node.getComponent(View_BallShadow_1.default).init(position, colorType);
        node.active = true;
        node.setParent(this.node);
      }
    };
    BallShadowManager = __decorate([ ccclass ], BallShadowManager);
    exports.default = BallShadowManager;
    cc._RF.pop();
  }, {
    "./HoomEventCenter": "HoomEventCenter",
    "./Model.RoomEvent": "Model.RoomEvent",
    "./View.BallShadow": "View.BallShadow"
  } ],
  "View.BallShadow": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "389ffD+sdBAl5Q7V7zW2Tw8", "View.BallShadow");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    const HoomEventCenter_1 = require("./HoomEventCenter");
    const Model_RoomEvent_1 = require("./Model.RoomEvent");
    const Data_Sprite_1 = require("./Data.Sprite");
    const {ccclass: ccclass, property: property} = cc._decorator;
    let BallShadow = class BallShadow extends cc.Component {
      init(position, color) {
        this.node.getComponent(cc.Sprite).spriteFrame = Data_Sprite_1.default.getSpriteFrame(color);
        this.node.setPosition(position);
        this.node.scale = .3 + .4 * Math.random();
        this.node.opacity = 50 + 200 * Math.random();
        let x = 50 * (Math.random() - .5);
        let y = 20 + 50 * Math.random();
        let v2 = cc.v2(x, y);
        let duration = .75 + .25 * Math.random();
        cc.tween(this.node).by(duration, {
          scale: .1,
          position: v2
        }).start();
        cc.tween(this.node).to(duration + .1, {
          opacity: 0
        }).call(dt => this.destroyShadow()).start();
      }
      destroyShadow() {
        HoomEventCenter_1.HoomEventCenter.emit(Model_RoomEvent_1.EventType.recycleBallShadow, this.node);
      }
      reuse(data) {}
      unuse(data) {}
    };
    BallShadow = __decorate([ ccclass ], BallShadow);
    exports.default = BallShadow;
    cc._RF.pop();
  }, {
    "./Data.Sprite": "Data.Sprite",
    "./HoomEventCenter": "HoomEventCenter",
    "./Model.RoomEvent": "Model.RoomEvent"
  } ],
  "View.Ball": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b1fa586LipDb6fqQ4hjLDKp", "View.Ball");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    const HoomEventCenter_1 = require("./HoomEventCenter");
    const Model_RoomEvent_1 = require("./Model.RoomEvent");
    const Model_ShadowType_1 = require("./Model.ShadowType");
    const ChangeColorPolicy_1 = require("./ChangeColorPolicy");
    const Data_Sprite_1 = require("./Data.Sprite");
    const Resource_Audio_1 = require("../Core/Resource.Audio");
    const AudioType_1 = require("../Core/AudioType");
    const {ccclass: ccclass, property: property} = cc._decorator;
    let BallView = class BallView extends cc.Component {
      constructor() {
        super(...arguments);
        this.jumpHeight = 320;
        this.jumpDuration = .75;
        this.currentColor = Model_ShadowType_1.ColorType.violet;
        this.intervalTime = 0;
      }
      onLoad() {
        this.node.runAction(this.setJumpAction());
        this.ballBgNode = this.node.find("background");
      }
      setJumpAction() {
        var jumpUpFinished = cc.callFunc(this.onHighest, this);
        var jumpUp = cc.sequence(cc.moveBy(this.jumpDuration, cc.v2(0, this.jumpHeight)).easing(cc.easeCubicActionOut()), jumpUpFinished);
        var jumpDownFinished = cc.callFunc(this.onLowest, this);
        var jumpDown = cc.sequence(cc.moveBy(this.jumpDuration, cc.v2(0, -this.jumpHeight)).easing(cc.easeCubicActionIn()), jumpDownFinished);
        return cc.repeatForever(cc.sequence(jumpUp, jumpDown));
      }
      onHighest() {
        HoomEventCenter_1.HoomEventCenter.emit(Model_RoomEvent_1.EventType.ballHighest, this.currentColor);
      }
      onLowest() {
        Resource_Audio_1.AudioResource.playByAudioType(AudioType_1.AudioType.jump);
        HoomEventCenter_1.HoomEventCenter.emit(Model_RoomEvent_1.EventType.ballLowest, this.currentColor);
        this.currentColor = ChangeColorPolicy_1.ColorPolicy.getColorType();
        HoomEventCenter_1.HoomEventCenter.emit(Model_RoomEvent_1.EventType.ballColorChange, this.currentColor);
        this.ballBgNode.getComponent(cc.Sprite).spriteFrame = Data_Sprite_1.default.getSpriteFrame(this.currentColor);
      }
      update(dt) {
        this.intervalTime += dt;
        if (this.intervalTime < .04) return;
        this.intervalTime = 0;
        HoomEventCenter_1.HoomEventCenter.emit(Model_RoomEvent_1.EventType.createBallShadow, this.node.position, this.currentColor);
      }
    };
    BallView = __decorate([ ccclass ], BallView);
    exports.default = BallView;
    cc._RF.pop();
  }, {
    "../Core/AudioType": "AudioType",
    "../Core/Resource.Audio": "Resource.Audio",
    "./ChangeColorPolicy": "ChangeColorPolicy",
    "./Data.Sprite": "Data.Sprite",
    "./HoomEventCenter": "HoomEventCenter",
    "./Model.RoomEvent": "Model.RoomEvent",
    "./Model.ShadowType": "Model.ShadowType"
  } ],
  "View.Button": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "73f0cXOiG1L4IheOs2zwXvB", "View.Button");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    const Resource_Audio_1 = require("../Core/Resource.Audio");
    const AudioType_1 = require("../Core/AudioType");
    const {ccclass: ccclass, property: property} = cc._decorator;
    let ButtonView = class ButtonView extends cc.Component {
      onLoad() {
        cc.tween(this.node).repeatForever(cc.tween().to(1, {
          scale: 1.2
        }).to(1, {
          scale: 1
        })).start();
        this.node.on("click", () => {
          Resource_Audio_1.AudioResource.playByAudioType(AudioType_1.AudioType.btn);
        }, this);
      }
    };
    ButtonView = __decorate([ ccclass ], ButtonView);
    exports.default = ButtonView;
    cc._RF.pop();
  }, {
    "../Core/AudioType": "AudioType",
    "../Core/Resource.Audio": "Resource.Audio"
  } ],
  "View.CollideShadowLayer": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9e8cekN8OFFraE1KCzWBmIJ", "View.CollideShadowLayer");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    const View_CollideShadow_1 = require("./View.CollideShadow");
    const HoomEventCenter_1 = require("./HoomEventCenter");
    const Model_RoomEvent_1 = require("./Model.RoomEvent");
    const {ccclass: ccclass, property: property} = cc._decorator;
    let CollideShadowManager = class CollideShadowManager extends cc.Component {
      constructor() {
        super(...arguments);
        this.shadowNodePool = new cc.NodePool(View_CollideShadow_1.default);
      }
      onLoad() {
        HoomEventCenter_1.HoomEventCenter.on(Model_RoomEvent_1.EventType.ballLowest, this.onCreateShadow, this);
        HoomEventCenter_1.HoomEventCenter.on(Model_RoomEvent_1.EventType.recycleCollideShadow, this.onRecycleShadow, this);
        this.shadowNode = this.node.find("shadow");
        this.shadowNodePool = new cc.NodePool(View_CollideShadow_1.default);
      }
      onRecycleShadow(node) {
        this.shadowNodePool.put(node);
      }
      onCreateShadow(colorType) {
        for (let i = 0; i < 30; i++) {
          let node;
          node = this.shadowNodePool.size() > 0 ? this.shadowNodePool.get(View_CollideShadow_1.default) : cc.instantiate(this.shadowNode);
          node.getComponent(View_CollideShadow_1.default).init(colorType);
          node.active = true;
          node.setParent(this.node);
        }
      }
    };
    CollideShadowManager = __decorate([ ccclass ], CollideShadowManager);
    exports.default = CollideShadowManager;
    cc._RF.pop();
  }, {
    "./HoomEventCenter": "HoomEventCenter",
    "./Model.RoomEvent": "Model.RoomEvent",
    "./View.CollideShadow": "View.CollideShadow"
  } ],
  "View.CollideShadow": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0df2dRKYOlBtK+4irr8xH/e", "View.CollideShadow");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    const HoomEventCenter_1 = require("./HoomEventCenter");
    const Model_RoomEvent_1 = require("./Model.RoomEvent");
    const Data_Sprite_1 = require("./Data.Sprite");
    const {ccclass: ccclass, property: property} = cc._decorator;
    let CollideShadow = class CollideShadow extends cc.Component {
      init(colorType) {
        this.node.getComponent(cc.Sprite).spriteFrame = Data_Sprite_1.default.getSpriteFrame(colorType);
        this.node.setPosition(cc.v2(0, 0));
        this.node.scale = .6 + .4 * Math.random();
        this.node.opacity = 100 + 150 * Math.random();
        let x = 250 * (Math.random() - .5);
        let y = 250 * (Math.random() - .5);
        let v2 = cc.v2(x, y);
        let duration = .75;
        cc.tween(this.node).by(duration, {
          scale: .1,
          position: v2
        }).start();
        cc.tween(this.node).to(duration + .1, {
          opacity: 0
        }).call(dt => this.destroyShadow()).start();
      }
      destroyShadow() {
        HoomEventCenter_1.HoomEventCenter.emit(Model_RoomEvent_1.EventType.recycleCollideShadow, this.node);
      }
      reuse(data) {}
      unuse(data) {}
    };
    CollideShadow = __decorate([ ccclass ], CollideShadow);
    exports.default = CollideShadow;
    cc._RF.pop();
  }, {
    "./Data.Sprite": "Data.Sprite",
    "./HoomEventCenter": "HoomEventCenter",
    "./Model.RoomEvent": "Model.RoomEvent"
  } ],
  "View.Data": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "36570RWkptPq7CgQpvu/lau", "View.Data");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    const ChangeColorPolicy_1 = require("../2.Home/ChangeColorPolicy");
    const HoomEventCenter_1 = require("../2.Home/HoomEventCenter");
    const Controller_Room_1 = require("../3.Room/Controller.Room");
    const {ccclass: ccclass, property: property} = cc._decorator;
    let DataView = class DataView extends cc.Component {
      onLoad() {
        this.homeButton = this.node.find("buttom/homeButton");
        this.homeButton.on("click", this.onGoHome, this);
        this.restartButton = this.node.find("buttom/restartButton");
        this.restartButton.on("click", this.onRestrart, this);
        this.shareButton = this.node.find("buttom/shareButton");
        this.scoreLabel = this.node.find("Content/score/label").getComponent(cc.Label);
        this.bestScoreLabel = this.node.find("Content/bestscore/label").getComponent(cc.Label);
        this.startAnim();
        this.scoreLabel.string = Controller_Room_1.RoomController.score.toString();
        this.bestScoreLabel.string = Controller_Room_1.RoomController.bestScore.toString();
      }
      onGoHome() {
        this.endAnim();
        this.scheduleOnce(() => {
          ChangeColorPolicy_1.RingPolicy.setDeafult();
          HoomEventCenter_1.HoomEventCenter.offAll();
          cc.director.loadScene("2.Home");
        }, .51);
      }
      onRestrart() {
        this.endAnim();
        this.scheduleOnce(() => {
          ChangeColorPolicy_1.RingPolicy.setDeafult();
          HoomEventCenter_1.HoomEventCenter.offAll();
          cc.director.loadScene("3.Room");
        }, .51);
      }
      startAnim() {
        let btnList = new Array();
        btnList.push(this.homeButton);
        btnList.push(this.shareButton);
        btnList.push(this.restartButton);
        for (let item of btnList) {
          let position = item.getPosition();
          item.setPosition(position.mul(10));
          cc.tween(item).to(.5, {
            position: position
          }, {
            easing: "circInOut"
          }).start();
        }
      }
      endAnim() {
        let btnList = new Array();
        btnList.push(this.homeButton);
        btnList.push(this.shareButton);
        btnList.push(this.restartButton);
        for (let item of btnList) {
          let position = item.getPosition().mulSelf(10);
          cc.tween(item).to(.5, {
            position: position
          }, {
            easing: "circInOut"
          }).start();
        }
      }
    };
    DataView = __decorate([ ccclass ], DataView);
    exports.default = DataView;
    cc._RF.pop();
  }, {
    "../2.Home/ChangeColorPolicy": "ChangeColorPolicy",
    "../2.Home/HoomEventCenter": "HoomEventCenter",
    "../3.Room/Controller.Room": "Controller.Room"
  } ],
  "View.HomeRing": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fa223OBRkRIJKHs3LbcovF7", "View.HomeRing");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    const HoomEventCenter_1 = require("./HoomEventCenter");
    const Model_RoomEvent_1 = require("./Model.RoomEvent");
    const Model_ShadowType_1 = require("./Model.ShadowType");
    const ChangeColorPolicy_1 = require("./ChangeColorPolicy");
    const {ccclass: ccclass, property: property} = cc._decorator;
    let HomeRingView = class HomeRingView extends cc.Component {
      constructor() {
        super(...arguments);
        this.currentColorType = Model_ShadowType_1.ColorType.violet;
      }
      onLoad() {
        HoomEventCenter_1.HoomEventCenter.on(Model_RoomEvent_1.EventType.ballHighest, this.onColorChange, this);
        HoomEventCenter_1.HoomEventCenter.on(Model_RoomEvent_1.EventType.ballLowest, this.onScaleRing, this);
      }
      onColorChange(nextColorType) {
        let angle = ChangeColorPolicy_1.RingPolicy.getAngle(nextColorType);
        this.currentColorType = nextColorType;
        cc.tween(this.node).by(.2, {
          angle: angle
        }, {
          easing: "easeOutBounce"
        }).delay(.175).start();
      }
      onScaleRing() {
        cc.tween(this.node).to(.075, {
          scale: 1.2
        }, {
          easing: "circInOut"
        }).to(.075, {
          scale: 1
        }, {
          easing: "circInOut"
        }).start();
      }
    };
    HomeRingView = __decorate([ ccclass ], HomeRingView);
    exports.default = HomeRingView;
    cc._RF.pop();
  }, {
    "./ChangeColorPolicy": "ChangeColorPolicy",
    "./HoomEventCenter": "HoomEventCenter",
    "./Model.RoomEvent": "Model.RoomEvent",
    "./Model.ShadowType": "Model.ShadowType"
  } ],
  "View.Home": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b0a3clrdK5LL5ZuXMvcYWFs", "View.Home");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    const HoomEventCenter_1 = require("./HoomEventCenter");
    const ChangeColorPolicy_1 = require("./ChangeColorPolicy");
    const Logger_1 = require("../Util/Logger");
    const Resource_Audio_1 = require("../Core/Resource.Audio");
    const AudioType_1 = require("../Core/AudioType");
    const {ccclass: ccclass, property: property} = cc._decorator;
    let HomeView = class HomeView extends cc.Component {
      onLoad() {
        this.sideNode = this.node.find("content/side");
        this.ringNode = this.node.find("content/ring");
        this.playBtn = this.node.find("buttom/playButton");
        this.playBtn.on("click", this.onPlay, this);
        this.loadResource();
      }
      onPlay() {
        Resource_Audio_1.AudioResource.playByAudioType(AudioType_1.AudioType.btn);
        cc.director.preloadScene("3.Room");
        this.sideNode.active = true;
        this.ringNode.active = false;
        for (let item of this.sideNode.children) {
          let newPosition = item.position.mulSelf(5);
          cc.tween(item).to(.5, {
            position: newPosition
          }, {
            easing: "circInOut"
          }).start();
        }
        cc.tween(this.playBtn).by(.5, {
          position: cc.v2(0, -400)
        }, {
          easing: "circInOut"
        }).start();
        this.scheduleOnce(dt => {
          ChangeColorPolicy_1.RingPolicy.setDeafult();
          HoomEventCenter_1.HoomEventCenter.offAll();
          cc.director.loadScene("3.Room");
        }, .55);
      }
      loadResource() {
        cc.loader.loadResDir("/audio", cc.AudioClip, this.audioProgress.bind(this), this.audioComplete.bind(this));
      }
      audioComplete(err, textures) {
        Logger_1.Logger.info(textures.name);
        Resource_Audio_1.AudioResource.cacheAudioClip(textures);
      }
      audioProgress(completeCount, totalCount, res) {
        Logger_1.Logger.info("completeCount:" + completeCount, "totalCount:" + totalCount);
      }
    };
    HomeView = __decorate([ ccclass ], HomeView);
    exports.default = HomeView;
    cc._RF.pop();
  }, {
    "../Core/AudioType": "AudioType",
    "../Core/Resource.Audio": "Resource.Audio",
    "../Util/Logger": "Logger",
    "./ChangeColorPolicy": "ChangeColorPolicy",
    "./HoomEventCenter": "HoomEventCenter"
  } ],
  "View.Index": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ef372V/RGlBOJ1PLzJ+S3kR", "View.Index");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var IndexView = function(_super) {
      __extends(IndexView, _super);
      function IndexView() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = "hello";
        return _this;
      }
      IndexView.prototype.start = function() {};
      __decorate([ property(cc.Label) ], IndexView.prototype, "label", void 0);
      __decorate([ property ], IndexView.prototype, "text", void 0);
      IndexView = __decorate([ ccclass ], IndexView);
      return IndexView;
    }(cc.Component);
    exports.default = IndexView;
    cc._RF.pop();
  }, {} ],
  "View.RoomRing": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fd1528R6MFPb6w4rEmh4sSe", "View.RoomRing");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    const Model_ShadowType_1 = require("../2.Home/Model.ShadowType");
    const HoomEventCenter_1 = require("../2.Home/HoomEventCenter");
    const Model_RoomEvent_1 = require("../2.Home/Model.RoomEvent");
    const ChangeColorPolicy_1 = require("../2.Home/ChangeColorPolicy");
    const {ccclass: ccclass, property: property} = cc._decorator;
    let RoomRingView = class RoomRingView extends cc.Component {
      constructor() {
        super(...arguments);
        this.targetAngle = 0;
        this.curentAngle = 0;
        this.angleSpeel = 0;
        this.secondSpeel = .125;
        this.ringColorType = Model_ShadowType_1.ColorType.violet;
        this.ballColorType = Model_ShadowType_1.ColorType.violet;
      }
      onLoad() {
        this.targetAngle = this.node.angle;
        this.curentAngle = this.node.angle;
        HoomEventCenter_1.HoomEventCenter.on(Model_RoomEvent_1.EventType.ballLowest, this.onBallLowest, this);
        HoomEventCenter_1.HoomEventCenter.on(Model_RoomEvent_1.EventType.playLeft, this.onPlayLeft, this);
        HoomEventCenter_1.HoomEventCenter.on(Model_RoomEvent_1.EventType.playRight, this.onPlayRight, this);
        HoomEventCenter_1.HoomEventCenter.on(Model_RoomEvent_1.EventType.ballLowest, this.onScaleRing, this);
      }
      onPlayLeft(nextColorType) {
        this.targetAngle += 60;
        let _angle = this.targetAngle - this.curentAngle;
        this.angleSpeel = _angle / this.secondSpeel;
        let index = ChangeColorPolicy_1.RingPolicy.defaultColorList.indexOf(this.ringColorType);
        index == ChangeColorPolicy_1.RingPolicy.defaultColorList.length - 1 ? this.ringColorType = ChangeColorPolicy_1.RingPolicy.defaultColorList[0] : this.ringColorType = ChangeColorPolicy_1.RingPolicy.defaultColorList[index + 1];
      }
      onPlayRight(colorType) {
        this.targetAngle -= 60;
        let _angle = this.targetAngle - this.curentAngle;
        this.angleSpeel = _angle / this.secondSpeel;
        let index = ChangeColorPolicy_1.RingPolicy.defaultColorList.indexOf(this.ringColorType);
        this.ringColorType = 0 == index ? ChangeColorPolicy_1.RingPolicy.defaultColorList[ChangeColorPolicy_1.RingPolicy.defaultColorList.length - 1] : ChangeColorPolicy_1.RingPolicy.defaultColorList[index - 1];
      }
      onBallLowest(colorType) {
        this.ballColorType = colorType;
        this.ballColorType == this.ringColorType ? HoomEventCenter_1.HoomEventCenter.emit(Model_RoomEvent_1.EventType.gainScore, 1) : HoomEventCenter_1.HoomEventCenter.emit(Model_RoomEvent_1.EventType.jumpFail);
      }
      onScaleRing() {
        cc.tween(this.node).by(.075, {
          scale: .1
        }, {
          easing: "circInOut"
        }).by(.075, {
          scale: -.1
        }, {
          easing: "circInOut"
        }).delay(.1).start();
      }
      update(dt) {
        if (0 == this.angleSpeel) return;
        let differAngle = this.targetAngle - this.curentAngle;
        let _angle = this.angleSpeel * dt;
        if (Math.abs(differAngle) < Math.abs(_angle)) {
          this.angleSpeel = 0;
          this.node.angle += differAngle;
          this.curentAngle = this.node.angle;
          return;
        }
        this.node.angle += _angle;
        this.curentAngle = this.node.angle;
      }
    };
    RoomRingView = __decorate([ ccclass ], RoomRingView);
    exports.default = RoomRingView;
    cc._RF.pop();
  }, {
    "../2.Home/ChangeColorPolicy": "ChangeColorPolicy",
    "../2.Home/HoomEventCenter": "HoomEventCenter",
    "../2.Home/Model.RoomEvent": "Model.RoomEvent",
    "../2.Home/Model.ShadowType": "Model.ShadowType"
  } ],
  "View.Room": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0e2c1Q27IlFjZo3ZVAvCr8r", "View.Room");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    const HoomEventCenter_1 = require("../2.Home/HoomEventCenter");
    const Model_RoomEvent_1 = require("../2.Home/Model.RoomEvent");
    const Logger_1 = require("../Util/Logger");
    const ChangeColorPolicy_1 = require("../2.Home/ChangeColorPolicy");
    const Controller_Room_1 = require("./Controller.Room");
    const Resource_Audio_1 = require("../Core/Resource.Audio");
    const AudioType_1 = require("../Core/AudioType");
    const {ccclass: ccclass, property: property} = cc._decorator;
    let RoomView = class RoomView extends cc.Component {
      constructor() {
        super(...arguments);
        this.currentSocore = 0;
      }
      onLoad() {
        HoomEventCenter_1.HoomEventCenter.on(Model_RoomEvent_1.EventType.gainScore, this.onGainScore, this);
        HoomEventCenter_1.HoomEventCenter.on(Model_RoomEvent_1.EventType.jumpFail, this.onJumpFail, this);
        this.sideNode = this.node.find("content/side");
        this.ringNode = this.node.find("content/ring");
        this.leftBtn = this.node.find("/bottom/leftBtn");
        this.rightBtn = this.node.find("/bottom/rightBtn");
        this.scoreLable = this.node.find("/content/score/label").getComponent(cc.Label);
        this.leftBtn.on("click", this.onPlayLeft, this);
        this.rightBtn.on("click", this.onPlayRight, this);
        this.startAnim();
      }
      onPlayLeft() {
        HoomEventCenter_1.HoomEventCenter.emit(Model_RoomEvent_1.EventType.playLeft);
      }
      onPlayRight() {
        HoomEventCenter_1.HoomEventCenter.emit(Model_RoomEvent_1.EventType.playRight);
      }
      onGainScore(scroe = 1) {
        this.currentSocore += scroe;
        this.scoreLable.string = this.currentSocore.toString();
      }
      onJumpFail() {
        Logger_1.Logger.info("onJumpFail");
        Resource_Audio_1.AudioResource.playByAudioType(AudioType_1.AudioType.fail);
        this.endAnim();
      }
      startAnim() {
        this.sideNode.active = true;
        this.ringNode.active = false;
        for (let item of this.sideNode.children) {
          let oldPosition = item.position;
          let newPosition = oldPosition.mul(5);
          item.position = newPosition;
          cc.tween(item).to(.5, {
            position: oldPosition
          }, {
            easing: "circInOut"
          }).start();
        }
        let leftPosition = this.leftBtn.getPosition();
        this.leftBtn.setPosition(leftPosition.mul(5));
        cc.tween(this.leftBtn).to(.5, {
          position: leftPosition
        }, {
          easing: "circInOut"
        }).start();
        let rightPosition = this.rightBtn.getPosition();
        this.rightBtn.setPosition(rightPosition.mul(5));
        cc.tween(this.rightBtn).to(.5, {
          position: rightPosition
        }, {
          easing: "circInOut"
        }).start();
        this.scheduleOnce(() => {
          this.sideNode.active = false;
          this.ringNode.active = true;
        }, .51);
      }
      endAnim() {
        this.ringNode.active = false;
        this.sideNode.active = true;
        for (let item of this.sideNode.children) {
          let position = item.position.mulSelf(5);
          cc.tween(item).to(.5, {
            position: position
          }, {
            easing: "circInOut"
          }).start();
        }
        let leftPosition = this.leftBtn.getPosition().mulSelf(5);
        cc.tween(this.leftBtn).to(.5, {
          position: leftPosition
        }, {
          easing: "circInOut"
        }).start();
        let rightPosition = this.rightBtn.getPosition().mulSelf(5);
        cc.tween(this.rightBtn).to(.5, {
          position: rightPosition
        }, {
          easing: "circInOut"
        }).start();
        this.scheduleOnce(() => {
          ChangeColorPolicy_1.RingPolicy.setDeafult();
          HoomEventCenter_1.HoomEventCenter.offAll();
          Controller_Room_1.RoomController.score = this.currentSocore;
          cc.director.loadScene("4.Data");
        }, .51);
      }
    };
    RoomView = __decorate([ ccclass ], RoomView);
    exports.default = RoomView;
    cc._RF.pop();
  }, {
    "../2.Home/ChangeColorPolicy": "ChangeColorPolicy",
    "../2.Home/HoomEventCenter": "HoomEventCenter",
    "../2.Home/Model.RoomEvent": "Model.RoomEvent",
    "../Core/AudioType": "AudioType",
    "../Core/Resource.Audio": "Resource.Audio",
    "../Util/Logger": "Logger",
    "./Controller.Room": "Controller.Room"
  } ],
  WS: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a29135Xd2tBuLmNV4GQsuOm", "WS");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    const WX_WebSocket_1 = require("./WebSocket/WX_WebSocket");
    const Web_WebSocket_1 = require("./WebSocket/Web_WebSocket");
    const TT_WebSocket_1 = require("./WebSocket/TT_WebSocket");
    const GameConfig_1 = require("../../Core/GameConfig");
    class WSCreater {
      static createInstance() {
        switch (GameConfig_1.GameConfig.PlatformType) {
         case GameConfig_1.PlatformType.Web:
          return Web_WebSocket_1.Web_WebSocket;

         case GameConfig_1.PlatformType.WX:
          return WX_WebSocket_1.WX_WebSocket;

         case GameConfig_1.PlatformType.TT:
          return TT_WebSocket_1.TT_WebSocket;

         default:
          return Web_WebSocket_1.Web_WebSocket;
        }
      }
    }
    exports.WSCreater = WSCreater;
    cc._RF.pop();
  }, {
    "../../Core/GameConfig": "GameConfig",
    "./WebSocket/TT_WebSocket": "TT_WebSocket",
    "./WebSocket/WX_WebSocket": "WX_WebSocket",
    "./WebSocket/Web_WebSocket": "Web_WebSocket"
  } ],
  WX_WebSocket: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b6fa3dsuvJEKbJaHzOj1/gM", "WX_WebSocket");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var WX_WebSocket = function() {
      function WX_WebSocket() {}
      WX_WebSocket.open = function(url) {
        if (this.socketCount > 0) return;
        this.socketCount++;
        wx.connectSocket({
          url: url,
          tcpNoDelay: true
        });
        wx.onSocketOpen(function(res) {
          WX_WebSocket.socketOpen = true;
          for (var i = 0; i < WX_WebSocket.socketMsgQueue.length; i++) WX_WebSocket.send(WX_WebSocket.socketMsgQueue[i]);
          WX_WebSocket.socketMsgQueue = [];
          WX_WebSocket.onOpen();
        });
        wx.onSocketClose(function(res) {
          if (WX_WebSocket.onClose) {
            WX_WebSocket.onClose(res);
            WX_WebSocket.clear();
          }
        });
        wx.onSocketError(function(res) {
          if (WX_WebSocket.onError) {
            WX_WebSocket.onError(res);
            WX_WebSocket.clear();
          }
        });
        wx.onSocketMessage(function(res) {
          WX_WebSocket.onMessage && WX_WebSocket.onMessage(res.data);
        });
      };
      WX_WebSocket.send = function(msg) {
        WX_WebSocket.socketOpen ? wx.sendSocketMessage({
          data: msg
        }) : WX_WebSocket.socketMsgQueue.push(msg);
      };
      WX_WebSocket.close = function() {
        if (WX_WebSocket.socketOpen) {
          WX_WebSocket.clear();
          wx.closeSocket();
        }
      };
      WX_WebSocket.clear = function() {
        WX_WebSocket.socketOpen = false;
        WX_WebSocket.onClose = null;
        WX_WebSocket.onMessage = null;
        WX_WebSocket.onError = null;
        WX_WebSocket.socketMsgQueue = [];
        WX_WebSocket.socketCount = 0;
      };
      WX_WebSocket.socketOpen = false;
      WX_WebSocket.socketCount = 0;
      WX_WebSocket.socketMsgQueue = [];
      return WX_WebSocket;
    }();
    exports.WX_WebSocket = WX_WebSocket;
    cc._RF.pop();
  }, {} ],
  WX_XHR: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6137a8olvtLHoqfKWSA9JjU", "WX_XHR");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var WX_XHR = function() {
      function WX_XHR() {}
      WX_XHR.getJSON = function(url, success, fail) {
        wx.request({
          url: url,
          method: "GET",
          responseType: "text",
          success: function(res) {
            success && success(res.data);
          },
          fail: function(res) {
            console.error("wx get json fail");
            fail && fail(res);
          }
        });
      };
      WX_XHR.post = function(url, data, success, fail) {
        wx.request({
          url: url,
          method: "POST",
          responseType: "text",
          data: data,
          success: function(res) {
            success && success(res.data);
          },
          fail: function(res) {
            console.error("wx get json fail");
            fail && fail(res);
          }
        });
      };
      WX_XHR.post_Async = function(url, data) {
        return new Promise(function(resolve, reject) {
          wx.request({
            url: url,
            method: "POST",
            responseType: "text",
            data: data,
            success: function(res) {
              resolve && resolve(res.data.toString());
            },
            fail: function(res) {
              console.error("wx get json fail");
              reject && reject(res);
            }
          });
        });
      };
      WX_XHR.getJSON_Async = function(url) {
        return new Promise(function(resolve, reject) {
          wx.request({
            url: url,
            method: "GET",
            responseType: "text",
            success: function(res) {
              resolve(res.data.toString());
            },
            fail: function(res) {
              console.error("wx get json fail");
              reject(res);
            }
          });
        });
      };
      return WX_XHR;
    }();
    exports.WX_XHR = WX_XHR;
    cc._RF.pop();
  }, {} ],
  Web_WebSocket: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d99b80cthRFz7ED1twKqfqE", "Web_WebSocket");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GameConfig_1 = require("../../../Core/GameConfig");
    var Web_WebSocket = function() {
      function Web_WebSocket() {}
      Web_WebSocket.open = function(url) {
        var _webSocket = new WebSocket(url);
        GameConfig_1.GameConfig.ProtocolType == GameConfig_1.ProtocolType.ByteBuffer && (_webSocket.binaryType = "arraybuffer");
        _webSocket.onopen = function(event) {
          Web_WebSocket.socketOpen = true;
          Web_WebSocket.webSocket = _webSocket;
          for (var i = 0; i < Web_WebSocket.socketMsgQueue.length; i++) Web_WebSocket.send(Web_WebSocket.socketMsgQueue[i]);
          Web_WebSocket.socketMsgQueue = [];
          Web_WebSocket.onOpen();
        };
        _webSocket.onerror = function(event) {
          Web_WebSocket.socketOpen = false;
          Web_WebSocket.onError && Web_WebSocket.onError(event);
        };
        _webSocket.onmessage = function(message) {
          Web_WebSocket.onMessage && Web_WebSocket.onMessage(message.data);
        };
        _webSocket.onclose = function(event) {
          Web_WebSocket.socketOpen = false;
          Web_WebSocket.onClose && (false === event.wasClean || 1e3 !== event.code, Web_WebSocket.onClose(event));
        };
      };
      Web_WebSocket.send = function(msg) {
        Web_WebSocket.socketOpen ? Web_WebSocket.webSocket.send(msg) : Web_WebSocket.socketMsgQueue.push(msg);
      };
      Web_WebSocket.close = function() {
        Web_WebSocket.socketOpen = false;
        Web_WebSocket.webSocket.close();
      };
      Web_WebSocket.socketOpen = false;
      Web_WebSocket.socketMsgQueue = [];
      return Web_WebSocket;
    }();
    exports.Web_WebSocket = Web_WebSocket;
    cc._RF.pop();
  }, {
    "../../../Core/GameConfig": "GameConfig"
  } ],
  Web_XHR: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1b495ZgJMJCRKbDFPrtl2Pb", "Web_XHR");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Web_XHR = function() {
      function Web_XHR() {}
      Web_XHR.getJSON = function(url, success, fail) {
        var xhr = new XMLHttpRequest();
        xhr.responseType = "json";
        xhr.open("GET", url, true);
        xhr.onload = function() {
          if (xhr.status >= 200 && xhr.status < 300) success && success(xhr.response); else {
            fail && fail(xhr.statusText);
            console.error(xhr.statusText, xhr.status);
          }
        };
        xhr.onerror = function(ev) {
          console.error("Error from HTTP request url=:" + url + " " + xhr.status + ": " + xhr.statusText);
          fail(ev);
        };
        xhr.ontimeout = function(ev) {
          console.error("Timeout from HTTP request.");
          fail(ev);
        };
        xhr.send();
      };
      Web_XHR.post = function(url, data, success, fail) {
        var xhr = new XMLHttpRequest();
        xhr.responseType = "json";
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.open("post", url, true);
        xhr.onload = function() {
          if (xhr.status >= 200 && xhr.status < 300) success && success(xhr.response); else {
            fail && fail(xhr.statusText);
            console.error(xhr.statusText, xhr.status);
          }
        };
        xhr.onerror = function(ev) {
          console.error("Error from HTTP request url=:" + url + " " + xhr.status + ": " + xhr.statusText);
          fail(ev);
        };
        xhr.ontimeout = function(ev) {
          console.error("Timeout from HTTP request.");
          fail(ev);
        };
        xhr.send(JSON.stringify(data));
      };
      Web_XHR.post_Async = function(url, data) {
        return new Promise(function(resolve, reject) {
          var xhr = new XMLHttpRequest();
          xhr.responseType = "json";
          xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
          xhr.open("post", url, true);
          xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 300) resolve && resolve(xhr.response); else {
              reject && reject(xhr.statusText);
              console.error(xhr.statusText, xhr.status);
            }
          };
          xhr.onerror = function(ev) {
            console.error("Error from HTTP request url=:" + url + " " + xhr.status + ": " + xhr.statusText);
            reject(ev);
          };
          xhr.ontimeout = function(ev) {
            console.error("Timeout from HTTP request.");
            reject(ev);
          };
          xhr.send(JSON.stringify(data));
        });
      };
      Web_XHR.getJSON_Async = function(url) {
        return new Promise(function(resolve, reject) {
          var xhr = new XMLHttpRequest();
          xhr.responseType = "text";
          xhr.open("GET", url, true);
          xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 300) resolve(xhr.responseText); else {
              console.error(xhr.statusText, xhr.status);
              reject(xhr);
            }
          };
          xhr.onerror = function() {
            console.log("Error from HTTP request. " + xhr.status + ": " + xhr.statusText);
            reject(xhr);
          };
          xhr.ontimeout = function() {
            console.log("Timeout from HTTP request.");
            reject(xhr);
          };
          xhr.send();
        });
      };
      return Web_XHR;
    }();
    exports.Web_XHR = Web_XHR;
    cc._RF.pop();
  }, {} ],
  XHR: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "338fdpvpOtLAbsJUkFk+LOP", "XHR");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    const Web_XHR_1 = require("./XHR/Web_XHR");
    const WX_XHR_1 = require("./XHR/WX_XHR");
    const TT_XHR_1 = require("./XHR/TT_XHR");
    const GameConfig_1 = require("../../Core/GameConfig");
    class XHRCreater {
      static createInstance() {
        switch (GameConfig_1.GameConfig.PlatformType) {
         case GameConfig_1.PlatformType.Web:
          return Web_XHR_1.Web_XHR;

         case GameConfig_1.PlatformType.WX:
          return WX_XHR_1.WX_XHR;

         case GameConfig_1.PlatformType.TT:
          return TT_XHR_1.TT_XHR;

         default:
          return Web_XHR_1.Web_XHR;
        }
      }
    }
    exports.XHRCreater = XHRCreater;
    cc._RF.pop();
  }, {
    "../../Core/GameConfig": "GameConfig",
    "./XHR/TT_XHR": "TT_XHR",
    "./XHR/WX_XHR": "WX_XHR",
    "./XHR/Web_XHR": "Web_XHR"
  } ]
}, {}, [ "View.Index", "ChangeColorPolicy", "Data.Sprite", "HoomEventCenter", "Model.RoomEvent", "Model.ShadowType", "View.Ball", "View.BallShadow", "View.BallShadowLayer", "View.CollideShadow", "View.CollideShadowLayer", "View.Home", "View.HomeRing", "Controller.Room", "View.Room", "View.RoomRing", "View.Button", "View.Data", "AudioType", "GameConfig", "GlobalStatic", "PlatformAuthorize", "PlatformPlayerInfo", "Resource.Audio", "Resource.Config", "Resource.Sprite", "SpriteType", "CCAsync", "CCExtend", "CommonResult", "EventDispatcher", "Http", "IWXAPI", "LocationStorage", "Logger", "WS", "TT_WebSocket", "WX_WebSocket", "Web_WebSocket", "XHR", "TT_XHR", "WX_XHR", "Web_XHR", "NotificationCenter", "TTAsync" ]);
//# sourceMappingURL=project.dev.js.map