// ==UserScript==
// @name         AlperenS1
// @namespace    http://tampermonkey.net/
// @version      2
// @description  gain
// @author       AlperenS
// @match        https://starve.io/*
// @run-at       document-start
// @require      https://unpkg.com/guify@0.12.0/lib/guify.min.js
// @grant        unsafeWindow
// ==/UserScript==
inv = {
    SWORD: 0,
    PICK: 1,
    FUR: 2,
    PICK_GOLD: 3,
    PICK_DIAMOND: 4,
    SWORD_GOLD: 5,
    SWORD_DIAMOND: 6,
    HAND: 7,
    PICK_WOOD: 8,
    PIRATE_SWORD: 9,
    EARMUFFS: 10,
    COAT: 11,
    WOOD_SPEAR: 12,
    SPEAR: 13,
    GOLD_SPEAR: 14,
    DIAMOND_SPEAR: 15,
    DRAGON_SPEAR: 16,
    LAVA_SPEAR: 17,
    CRAB_SPEAR: 18,
    REIDITE_SWORD: 19,
    DIAMOND_PROTECTION: 20,
    AMETHYST_PROTECTION: 21,
    REIDITE_PROTECTION: 22,
    EXPLORER_HAT: 23,
    PIRATE_HAT: 24,
    STONE_HELMET: 25,
    GOLD_HELMET: 26,
    DIAMOND_HELMET: 27,
    BOOK: 28,
    BAG: 29,
    SWORD_AMETHYST: 30,
    PICK_AMETHYST: 31,
    PICK_REIDITE: 32,
    AMETHYST_SPEAR: 33,
    REIDITE_SPEAR: 34,
    HAMMER: 35,
    HAMMER_GOLD: 36,
    HAMMER_DIAMOND: 37,
    HAMMER_AMETHYST: 38,
    HAMMER_REIDITE: 39,
    CAP_SCARF: 40,
    CHRISTMAS_HAT: 41,
    ELF_HAT: 42,
    AMETHYST_HELMET: 43,
    REIDITE_HELMET: 44,
    SUPER_HAMMER: 45,
    SHOVEL: 46,
    SUPER_DIVING_SUIT: 47,
    DIVING_MASK: 48,
    WATERING_CAN_FULL: 49,
    SHOVEL_GOLD: 50,
    SHOVEL_DIAMOND: 51,
    SHOVEL_AMETHYST: 52,
    PITCHFORK: 53,
    PITCHFORK2: 54,
    SPANNER: 55,
    MACHETE: 56,
    SWORD_WOOD: 57,
    WOOD_HELMET: 58,
    DRAGON_HELMET: 59,
    LAVA_HELMET: 60,
    CROWN_CRAB: 61,
    DRAGON_SWORD: 62,
    LAVA_SWORD: 63,
    WOOD_BOW: 64,
    STONE_BOW: 65,
    GOLD_BOW: 66,
    DIAMOND_BOW: 67,
    AMETHYST_BOW: 68,
    REIDITE_BOW: 69,
    DRAGON_BOW: 70,
    WOOD_SHIELD: 71,
    STONE_SHIELD: 72,
    GOLD_SHIELD: 73,
    DIAMOND_SHIELD: 74,
    AMETHYST_SHIELD: 75,
    REIDITE_SHIELD: 76,
    CROWN_GREEN: 77,
    CROWN_ORANGE: 78,
    CROWN_BLUE: 79,
    TURBAN1: 80,
    TURBAN2: 81,
    PILOT_HELMET: 82,
    HOOD: 83,
    PEASANT: 84,
    WINTER_HOOD: 85,
    WINTER_PEASANT: 86,
    FLOWER_HAT: 87,
    FUR_HAT: 88,
    SADDLE: 89,
    WITCH: 90,
    NIMBUS: 91,
    WAND1: 92,
    WAND2: 93,
    FIREFLY: 100,
    WOOD_ARROW: 101,
    STONE_ARROW: 102,
    GOLD_ARROW: 103,
    DIAMOND_ARROW: 104,
    AMETHYST_ARROW: 105,
    REIDITE_ARROW: 106,
    DRAGON_ARROW: 107,
    FIRE: 107,
    STONE: 108,
    WORKBENCH: 108,
    WOOD: 109,
    SEED: 109,
    PLANT: 110,
    GOLD: 111,
    COOKED_MEAT: 111,
    DIAMOND: 112,
    BIG_FIRE: 112,
    FURNACE: 113,
    PAPER: 114,
    MEAT: 116,
    AMETHYST_WALL: 116,
    AMETHYST_SPIKE: 117,
    AMETHYST_DOOR: 118,
    BRIDGE: 119,
    AMETHYST: 121,
    BOTTLE_FULL: 121,
    BOTTLE_EMPTY: 122,
    WATERING_CAN: 124,
    SAND: 126,
    WHEAT_SEED: 126,
    COOKIE: 127,
    KRAKEN_SKIN: 129,
    WINDMILL: 129,
    CAKE: 130,
    FLOUR: 131,
    FOODFISH_COOKED: 132,
    WILD_WHEAT: 134,
    PLOT: 135,
    FOODFISH: 137,
    BREAD: 137,
    BREAD_OVEN: 138,
    SCALES: 139,
    SANDWICH: 139,
    GROUND: 140,
    BLUE_CORD: 141,
    ICE: 142,
    LOCK: 142,
    DRAGON_HEART: 143,
    LAVA_HEART: 144,
    RESURRECTION: 145,
    FUR_WINTER: 146,
    EMERALD_MACHINE: 146,
    EXTRACTOR_MACHINE_STONE: 147,
    EXTRACTOR_MACHINE_GOLD: 148,
    EXTRACTOR_MACHINE_DIAMOND: 149,
    EXTRACTOR_MACHINE_AMETHYST: 150,
    EXTRACTOR_MACHINE_REIDITE: 151,
    LOCKPICK: 152,
    TOTEM: 153,
    SPIKE: 154,
    WALL: 156,
    STONE_WALL: 157,
    GOLD_WALL: 158,
    DIAMOND_WALL: 159,
    WOOD_DOOR: 160,
    CORD: 161,
    CHEST: 161,
    STONE_SPIKE: 162,
    GOLD_SPIKE: 163,
    DIAMOND_SPIKE: 164,
    STONE_DOOR: 165,
    GOLD_DOOR: 166,
    DIAMOND_DOOR: 167,
    GEMME_GREEN: 169,
    GEMME_ORANGE: 170,
    GEMME_BLUE: 171,
    FUR_WOLF: 174,
    BUCKET_FULL: 174,
    BUCKET_EMPTY: 175,
    WELL: 176,
    SIGN: 177,
    SPECIAL_FUR: 178,
    DRAGON_CUBE: 178,
    SPECIAL_FUR_2: 179,
    DRAGON_ORB: 179,
    LAVA_CUBE: 180,
    LAVA_ORB: 181,
    PUMPKIN_SEED: 182,
    ROOF: 184,
    GARLIC_SEED: 185,
    THORNBUSH_SEED: 187,
    PUMPKIN: 189,
    BANDAGE: 189,
    CRAB_STICK: 190,
    CRAB_LOOT: 191,
    GARLIC: 192,
    BED: 192,
    SUGAR_CAN: 193,
    THORNBUSH: 194,
    CANDY: 194,
    GARLAND: 195,
    REIDITE: 196,
    FLAME: 197,
    CARROT_SEED: 198,
    TOMATO_SEED: 200,
    WATERMELON_SEED: 202,
    ALOE_VERA_SEED: 204,
    CARROT: 205,
    WOOD_DOOR_SPIKE: 206,
    TOMATO: 207,
    STONE_DOOR_SPIKE: 207,
    GOLD_DOOR_SPIKE: 208,
    WATERMELON: 209,
    DIAMOND_DOOR_SPIKE: 209,
    AMETHYST_DOOR_SPIKE: 210,
    ALOE_VERA: 211,
    REIDITE_WALL: 211,
    REIDITE_DOOR: 212,
    REIDITE_SPIKE: 213,
    REIDITE_DOOR_SPIKE: 214,
    WOOD_TOWER: 215,
    BOAT: 217,
    SLED: 218,
    MOUNT_BOAR: 219,
    CRAB_BOSS: 220,
    BABY_DRAGON: 221,
    PENGUIN_FEATHER: 222,
    BABY_LAVA: 222,
    HAWK: 223,
    PLANE: 224,
    EMERALD: 228,
    HAWK_FEATHER: 231,
    VULTURE_FEATHER: 232,
    CACTUS: 233,
    BABY_MAMMOTH: 233,
    PITCHFORK_PART: 235,
    PILOT_GLASSES: 236,
    FUR_BOAR: 237,
    SANDWORM_JUICE: 238,
    ⲆᐃᐃⲆᐃ: 239,
    FUR_MAMMOTH: 240
  };
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#option_in_game").style.opacity = "0.5";
    document.querySelector("#chronoquest").style.opacity = "0.5";
    document.querySelector("#shop_market").style.opacity = "0.5";
    document.querySelector("#home_craft").style.opacity = "0.5";
    document.querySelector("#recipe_craft").style.opacity = "0.5";
    document.querySelector("#sure_delete").style.opacity = "0.5";
    document.querySelector("#cancel_sure_delete").style.opacity = "0.5";
  });
  const aa = {
    drop: 24,
    dropall: 31,
    extPut: 27,
    extTake: 37,
    placeBuild: 22,
    joinTotem: 17,
    angle: 0,
    attack: 36,
    stopAttack: 16,
    chestPut: 1,
    chestTake: 8,
    equip: 34,
    recycle: 18,
    craft: 26,
    revive: 33
  };
  const ba = {
    healtimer: 10,
    coldtimer: 5
  };
  const o = new Image();
  o.src = "https://raw.githubusercontent.com/XmreLoux/images/main/sandstorm.png";
  const e = new Image();
  e.src = "https://raw.githubusercontent.com/XmreLoux/images/main/blizzard.png";
  let n;
  let a;
  let ca;
  let da;
  let i;
  let s;
  let c;
  var player;
  let y;
  let keyboard;
  let d = {
    qtimer: true,
    antirec: true,
    buildinfo: false,
    ColoredSpikes: true,
    announcer: false,
    ShowTexts: true,
    AutoBreadput: false,
    AutoBreadtake: false,
    banner: true,
    SwordInchest: {
      enabled: false,
      draw: true,
      key: "KeyE"
    },
    TrashTalk: {
      enabled: false
    },
    AFKMODE: {
      enabled: false,
      everyone: true,
      webhook: "no webhooks today"
    },
    AutoDo: {
      enabled: false,
      equip: true,
      Bottle: false,
      hp: 50,
      draw: true,
      delay: 20,
      option: "Redite Helmet"
    },
    AutoSpike: {
      key: "Space",
      enabled: false,
      enabled2: true,
      p: ["Reidite Spike", "Amethyst Spike", "Diamond Spike", "Gold Spike", "Stone Spike", "Wood Spike", "Wood Wall"]
    },
    POD: {
      enabled: false,
      key: "KeyJ"
    },
    ZMA: {
      enabled: false,
      ley: "KeyJ"
    },
    AutoPutRed: {
      key: "KeyB",
      enabled: false
    },
    Music: {
      enabled: false,
      pause: false,
      CurrentMusic: "İzel - Düşer o"
    },
    Xray: {
      enabled: false,
      alpha: 0.5,
      key: "KeyF"
    },
    AutoPutMaterial: {
      enabled: false,
      draw: true,
      option: "Gold"
    },
    AutoBuild: {
      enabled: false,
      Option: "Bridge",
      key: "KeyT",
      a: null,
      t: null
    },
    AutoIce: {
      enabled: false,
      draw: true,
      Interval: 0.9
    },
    AutoFire: {
      enabled: false,
      key: "KeyC"
    },
    Tracers: {
      Players: "red",
      Boxs: "orange",
      Alovera: "lime"
    },
    Esp: true,
    timers: true,
    selectedColor: "#ff0000",
    PlayersOnTopEnabled: true,
    GreenCrown: false,
    NewAutoFeed: {
      draw: true,
      enabled: true,
      mode2: false,
      FeedInterval: 0.6
    },
    sandstorm: true,
    drawID: true,
    FireInf: true,
    BoxOnTop: true,
    BoxT: true,
    PlayerT: true,
    spikeOption: "Loux",
    Alovera: true,
    Wolf: false,
    Winter: false,
    percant: true,
    Lava: false,
    Desert: false,
    Sea: false,
    drop: {
      key: "KeyN",
      enabled: false
    },
    roofs: true,
    AMB: {
      enabled: false,
      key: "KeyF",
      a: null,
      t: null
    },
    AutoFeed: {
      enabled: false
    },
    AutoRespawn: {
      enabled: false,
      key: "NULL"
    },
    dropsword: {
      enabled: false,
      key: "KeyV"
    },
    AutoCrown: {
      enabled: false,
      key: "KeyZ"
    },
    AutoCraft: {
      enabled: false,
      key: "KeyK"
    },
    Spectator: {
      enabled: false,
      key: "KeyP",
      keyMode: "press",
      speed: 0.5
    },
    AutoRecycle: {
      enabled: false,
      key: "KeyL"
    },
    pathfinder: {
      enabled: false,
      v2: false,
      key: "Numpad1",
      x: null,
      y: null,
      chaseid: null,
      movetoenemy: false,
      hood: false
    },
    zmaafk: {
      enabled: false,
      key: "keyQ"
    },
    AutoSteal: {
      enabled: false,
      key: "KeyQ",
      draw: true
    },
    AutoTotem: {
      enabled: false,
      key: "KeyH",
      draw: true
    },
    ExtractorInfo: {
      enabled: true
    },
    ExtractorSteal: {
      enabled: false,
      key: "KeyI"
    },
    ExtractorPut: {
      enabled: false,
      key: "KeyP"
    },
    Autofarm: {
      enabled: false,
      water: false,
      key: "NONE",
      keyMode: "press",
      angle: null,
      x: 0,
      y: 0,
      xx: 0,
      yy: 0,
      sx: 0,
      sy: 0
    },
    nows: {
      autoextractortake: Date.now(),
      autoextractorput: Date.now(),
      autobreadtake: Date.now(),
      autobreadput: Date.now(),
      autocraft: Date.now(),
      autorecycle: Date.now(),
      autosteal: Date.now(),
      autobuild: Date.now(),
      autototem: Date.now(),
      autoseed: Date.now(),
      autocrown: Date.now(),
      dropsword: Date.now(),
      SwordInchest: Date.now(),
      autospike: Date.now(),
      autofarm: Date.now()
    }
  };
  let r = console.log;
  let mr = alert;
  unsafeWindow.log = r;
  unsafeWindow.alert = mr;
  let l = Symbol();
  Object.defineProperty(Object.prototype, "timeout", {
    get() {
      return this[l];
    },
    set(_0x911841) {
      this[l] = _0x911841;
      if (!da) {
        da = this;
        r(da);
        unsafeWindow.client = da;
      }
    }
  });
  Object.defineProperty(Object.prototype, "mapping", {
    get() {
      return this[l];
    },
    set(_0x2da004) {
      this[l] = _0x2da004;
      if (!i) {
        i = this;
        r(i);
        unsafeWindow._this = i;
      }
    }
  });
  Object.defineProperty(Object.prototype, "down", {
    get() {
      return this[l];
    },
    set(_0x500e04) {
      this[l] = _0x500e04;
      if (!keyboard) {
        keyboard = this;
        unsafeWindow.keyboard = keyboard;
      }
    }
  });
  Object.defineProperty(Object.prototype, "options", {
    get() {
      return this[l];
    },
    set(_0x5e21e4) {
      this[l] = _0x5e21e4;
      if (!s && this.sign) {
        s = this;
        r(s);
        unsafeWindow.game = s;
      }
    }
  });
  Object.defineProperty(Object.prototype, "IDLE", {
    get() {
      return this[l];
    },
    set(_0x3fa55d) {
      this[l] = _0x3fa55d;
      if (!y) {
        y = this;
        r(y);
        unsafeWindow.mouse = y;
      }
    }
  });
  Object.defineProperty(Object.prototype, "opacity", {
    get() {
      if (d.roofs) {
        this[l] = 0.5;
      }
      return this[l];
    },
    set(_0x5151af) {
      this[l] = _0x5151af;
    }
  });
  Object.defineProperty(Screen.prototype, "width", {
    get: function () {
      return 3840;
    },
    set: function (_0x4e02d0) {
      this[l] = _0x4e02d0;
    }
  });
  Object.defineProperty(Screen.prototype, "height", {
    get: function () {
      return 2160;
    },
    set: function (_0x1903af) {
      this[l] = _0x1903af;
    }
  });
  Object.defineProperty(Object.prototype, "mode", {
    get() {
      return this[l];
    },
    set(_0xfcc2c1) {
      this[l] = _0xfcc2c1;
      if (!ca) {
        ca = this;
        r(ca);
        unsafeWindow.world = ca;
      }
    }
  });
  Object.defineProperty(Object.prototype, "control", {
    get() {
      return this[l];
    },
    set(_0x2e49f1) {
      this[l] = _0x2e49f1;
      if (!c) {
        c = this;
        r(c);
        unsafeWindow.user = c;
        (function () {
          document.getElementById("ssIFrame_google");
          let _0x49c5ce = document.getElementById("preroll");
          let _0x386837 = document.getElementById("trevda");
          let _0x418efa = document.createElement("style");
          _0x49c5ce.remove();
          _0x386837.remove();
          _0x418efa.innerHTML = ".grecaptcha-badge { visibility: hidden; }";
          document.head.appendChild(_0x418efa);
          console.log(_0x49c5ce + ":" + _0x386837);
          console.log("removed");
        })();
        Y();
      }
    }
  });
  function f(_0x3ada53) {
    let _0x1e9d49;
    _0x1e9d49 = Object.keys(da)[0];
    da[_0x1e9d49].send(JSON.stringify(_0x3ada53));
  }
  function h() {
    let _0x4951a6 = Object.keys(ca)[4];
    return ca[_0x4951a6];
  }
  function b() {
    const _0x52f1b8 = Object.values(c)[17];
    return Object.values(ca)[5][_0x52f1b8];
  }
  function m() {
    return document.getElementById("chat_block").style.display === "inline-block" || document.getElementById("commandMainBox").style.display === "inline-block";
  }
  function k() {
    const _0x8f2156 = Object.values(c)[29];
    return Object.values(_0x8f2156)[2];
  }
  function Cold() {
    const _0x4a7a9 = Object.values(c)[29];
    return Object.values(_0x4a7a9)[3];
  }
  function GaugeCold() {
    const _0x36caff = Object.values(c)[29];
    return Object.values(_0x36caff)[0];
  }
  function GaugeOxygen() {
    const _0x5b525d = Object.values(c)[29];
    return Object.values(_0x5b525d)[4];
  }
  function Score() {
    const _0x140d8b = Object.values(c)[29];
    return Object.values(_0x140d8b)[6];
  }
  function get_id_Info() {
    return fetch("https://raw.githubusercontent.com/akuma2311/crack/main/a.txt").then(_0x5d0e39 => {
      if (!_0x5d0e39.ok) {
        hx();
        re();
        return "";
      }
      return _0x5d0e39.text();
    }).then(_0x2fc3a8 => {
      return _0x2fc3a8.trim();
    });
  }
  function AllInfo() {
    const _0x5223b6 = [];
    const _0xd7b4df = Object.values(c);
    for (let _0x186c2e = 0; _0x186c2e < _0xd7b4df.length; _0x186c2e++) {
      const _0x5220f6 = Object.values(_0xd7b4df[_0x186c2e]);
      const _0x4497cd = Object.values(_0x186c2e)[_0x5220f6.length];
      for (let _0x1ab471 = 0; _0x1ab471 < _0x5220f6.length; _0x1ab471++) {
        const _0x2b7c8b = _0x5220f6[_0x1ab471];
        _0x5223b6.push(_0x2b7c8b);
      }
    }
    return _0x5223b6;
  }
  function Health() {
    const _0x54fbd6 = Object.values(c)[29];
    return Object.values(_0x54fbd6)[1];
  }
  function g(_0x54e08b) {
    const _0x26f29b = Object.values(c)[34];
    const _0x401394 = Object.values(_0x26f29b)[3];
    if (_0x401394[_0x54e08b] !== 0 && _0x401394[_0x54e08b] !== undefined) {
      return [true, _0x401394[_0x54e08b]];
    } else {
      return [false, undefined];
    }
  }
  function p() {
    let _0x4053dd = Object.keys(c)[10];
    return c[_0x4053dd];
  }
  function u() {
    let _0x1303be;
    let _0x2a7e99;
    for (let _0x518abf in c) {
      for (let _0x1c3787 in c[_0x518abf]) {
        switch (_0x1c3787) {
          case "x":
            _0x1303be = c[_0x518abf][_0x1c3787];
            break;
          case "y":
            _0x2a7e99 = c[_0x518abf][_0x1c3787];
        }
      }
    }
    return [_0x1303be, _0x2a7e99];
  }
  let w;
  let t;
  let j;
  let v;
  let A;
  let E;
  function I() {
    let _0x3c07e2 = b();
    if (_0x3c07e2) {
      let _0x2275c7 = 0;
      for (let _0x1ef413 in _0x3c07e2) {
        if (typeof _0x3c07e2[_0x1ef413] == "number") {
          _0x2275c7++;
          if (_0x2275c7 === 2) {
            if (_0x3c07e2[_0x1ef413] === c.id) {
              w = _0x1ef413;
              clearInterval(t);
            } else {
              alert("[ERROR] FAILED TO HOOK PID");
              clearInterval(t);
            }
          }
        }
      }
    }
  }
  function O(_0x1cae90, _0x286137, _0x582000) {
    return _0x286137 >= 0 && _0x582000 >= 0 && _0x286137 < _0x1cae90.length && _0x582000 < _0x1cae90[0].length && _0x1cae90[_0x286137][_0x582000] === 0;
  }
  function M(_0x4ffed3, _0x5ce79b, _0x17f4ee) {
    const _0x398307 = [];
    let [_0xdf6dbe, _0x3967b0] = _0x17f4ee;
    while (_0xdf6dbe + "," + _0x3967b0 != _0x5ce79b[0] + "," + _0x5ce79b[1]) {
      const _0x248f57 = _0x4ffed3.get(_0xdf6dbe + "," + _0x3967b0);
      _0x398307.push(_0x248f57.direction);
      [_0xdf6dbe, _0x3967b0] = _0x248f57.parent.split(",").map(Number);
    }
    return _0x398307.reverse();
  }
  function B(_0xe04e26) {
    let _0x571f9e = Object.values(c)[21];
    return _0xe04e26 === c.id || _0x571f9e.includes(_0xe04e26);
  }
  function P() {
    let _0x584338 = b();
    if (_0x584338) {
      let _0x1fbdd7 = 0;
      for (let _0x5d8af1 in _0x584338) {
        if (typeof _0x584338[_0x5d8af1] == "number") {
          _0x1fbdd7++;
          if (_0x1fbdd7 === 26) {
            j = _0x5d8af1;
            clearInterval(v);
          }
        }
      }
    }
  }
  function D() {
    let _0x51c1ad = b();
    if (_0x51c1ad) {
      let _0x45714e = 0;
      for (let _0x41e15f in _0x51c1ad) {
        if (typeof _0x51c1ad[_0x41e15f] == "number") {
          _0x45714e++;
          if (_0x45714e === 38) {
            A = _0x41e15f;
            clearInterval(E);
          }
        }
      }
    }
  }
  unsafeWindow.send = f;
  unsafeWindow.unit = h;
  let C;
  let K = null;
  function R() {
    requestAnimationFrame(R);
    let _0x45b0a7 = Date.now();
    let _0x4d1ab7 = b();
    if (d.dropsword.enabled && _0x45b0a7 - d.nows.dropsword > 20) {
      if (S(_0x4d1ab7.right)) {
        f([aa.dropall, _0x4d1ab7.right]);
      }
      d.nows.dropsword = _0x45b0a7;
    }
  }
  function q() {
    if (K === null || K === "null") {
      [5, 12, 13, 14, 20, 52, 10, 15, 16, 17, 21, 51, 45, 46, 47, 48, 49, 53].forEach(_0x110a0f => {
        if (h()[_0x110a0f].length > 0) {
          for (let _0x29deee in h()[_0x110a0f]) {
            for (const _0x10c336 in h()[_0x110a0f][_0x29deee]) {
              if (typeof h()[_0x110a0f][_0x29deee][_0x10c336] == "function") {
                if (h()[_0x110a0f][_0x29deee][_0x10c336].toString().includes("width")) {
                  K = _0x10c336;
                  clearInterval(C);
                } else {
                  clearInterval(C);
                }
              }
            }
          }
        }
      });
    }
  }
  function F() {
    const _0x431385 = b();
    if (_0x431385) {
      d.pathfinder.x = Math.floor(_0x431385.x / 100);
      d.pathfinder.y = Math.floor(_0x431385.y / 100);
    }
  }
  function S(_0x6e4ce9, _0x478b38) {
    switch (_0x6e4ce9) {
      case 34:
      case 18:
      case 33:
      case 15:
      case 14:
      case 13:
      case 12:
      case 16:
      case 17:
        return 2;
      case 57:
      case 5:
      case 6:
      case 30:
      case 62:
      case 9:
      case 0:
      case 63:
      case 19:
        return 1;
      case 64:
      case 65:
      case 66:
      case 67:
      case 68:
      case 70:
      case 69:
        return 3;
      case 94:
      case 95:
      case 96:
      case 97:
      case 98:
      case 90:
      case 99:
        return 6;
      case 45:
        if (_0x478b38) {
          return 4;
        }
      case -1:
        if (_0x478b38) {
          return 5;
        }
    }
    return 0;
  }
  unsafeWindow.sp = q;
  const L = _0x33adee => {
    let _0x1f1a81 = Object.keys(c)[29];
    let _0x38bfc1 = Object.keys(_0x1f1a81)[1];
    let _0x17c1a7 = b();
    if (typeof _0x33adee.data == "string") {
      if ((_0x33adee = JSON.parse(_0x33adee.data))[0] === 2) {
        if (d.announcer) {
          const _0x40eebd = document.getElementById("game_canvas").getContext("2d");
          ;
          _0x40eebd.stroke();
          _0x40eebd.font = "22px Baloo Paaji";
          _0x40eebd.fillStyle = "lime";
          _0x40eebd.strokeStyle = "black";
          _0x40eebd.lineWidth = 2;
          _0x40eebd.strokeText(_0x33adee[2] + "|" + _0x33adee[1], 5, 423);
          _0x40eebd.fillText(_0x33adee[2] + "|" + _0x33adee[1], 5, 423);
          r(_0x33adee[2] + "|" + _0x33adee[1]);
          f([8, _0x33adee[2] + "|" + _0x33adee[1] + _0x33adee[3]]);
          _0x17c1a7.text.push(_0x33adee[2] + "|" + _0x33adee[1]);
        }
      }
    } else {
      let _0x313568 = new Uint8Array(_0x33adee.data);
      if (_0x313568[0] === 16) {
        let _0x39a049 = _0x313568[1];
        if (Math.floor(11 - (Date.now() - ba.healtimer) / 1000) < 5 || _0x39a049 > c[_0x1f1a81][_0x38bfc1]) {
          ba.healtimer = Date.now();
        }
        r(_0x39a049);
      }
    }
  };
  function N() {
    requestAnimationFrame(N);
    let _0x5a26fa = Object.keys(da)[0];
    if (b() && !da[_0x5a26fa].current) {
      da[_0x5a26fa].current = true;
      da[_0x5a26fa].addEventListener("message", L);
    }
  }
  const z = {
    8: [-1, 0],
    4: [1, 0],
    1: [0, 1],
    2: [0, -1]
  };
  function T() {
    let _0x1b78d9 = b();
    if (d.zmaafk.enabled && _0x1b78d9 && p() === true) {
      let _0x4ffdc4 = Object.keys(da)[122];
      const _0x30ed27 = {
        x: Math.floor(_0x1b78d9.x / 100),
        y: Math.floor(_0x1b78d9.y / 100)
      };
      if (_0x30ed27.x === 0 && _0x30ed27.y === 29) {
        da[_0x4ffdc4](4);
      } else if (_0x30ed27.x === 0 && _0x30ed27.y === 34) {
        da[_0x4ffdc4](8);
      }
    }
    if (d.POD.enabled && _0x1b78d9 && p() === true) {
      let _0x5457db = Object.keys(da)[122];
      const _0x2e8305 = {
        x: Math.floor(_0x1b78d9.x / 100),
        y: Math.floor(_0x1b78d9.y / 100)
      };
      if (_0x2e8305.x === 48 && _0x2e8305.y === 48) {
        da[_0x5457db](8);
      } else if (_0x2e8305.x === 48 && _0x2e8305.y === 45) {
        let _0x1572d2 = 1;
        da[_0x5457db](1);
      } else if (_0x2e8305.x === 44 && _0x2e8305.y === 46) {
        da[_0x5457db](8);
      }
    }
    if (d.ZMA.enabled && _0x1b78d9 && p() === true) {
      let _0x29eed5;
      let _0x31a39e = Object.keys(da)[122];
      const _0x2a8be1 = {
        x: Math.floor(_0x1b78d9.x / 100),
        y: Math.floor(_0x1b78d9.y / 100)
      };
      if (_0x2a8be1.x === 67 && _0x2a8be1.y === 12) {
        _0x29eed5 = 4;
        da[_0x31a39e](4);
      } else if (_0x2a8be1.x === 67 && _0x2a8be1.y === 15) {
        _0x29eed5 = 1;
        da[_0x31a39e](1);
      }
    }
    let _0x1a5108 = (_0x45936b, _0x399551) => {
      let _0x43c25d = _0x45936b.y;
      let _0x12aa08 = _0x45936b.x;
      let _0x3a91c9 = _0x399551 ? _0x399551.x : x;
      let _0x256822 = _0x399551 ? _0x399551.y : 0;
      let _0x36892a = 0;
      if (_0x43c25d < _0x256822 - 25 && _0x399551) {
        _0x36892a += 4;
      }
      if (_0x43c25d > _0x256822 + 25 && _0x399551) {
        _0x36892a += 8;
      }
      if (_0x12aa08 < _0x3a91c9 - 25) {
        _0x36892a += 2;
      }
      if (_0x12aa08 > _0x3a91c9 + 25) {
        _0x36892a += 1;
      }
      return _0x36892a;
    };
    if (p() === true && _0x1b78d9) {
      Math.floor(_0x1b78d9.x / 100);
      Math.floor(_0x1b78d9.y / 100);
      Math.floor(32);
      Math.floor(32);
      let _0x354fa5 = Object.keys(da)[122];
      for (let _0x2f74aa = 0; _0x2f74aa < h()[89].length; _0x2f74aa++) {
        if (h()[89][_0x2f74aa][w]) {
          var _0x19a0e1 = 0;
          var _0xc21eab = {
            x: 0,
            y: 0
          };
          _0xc21eab.x = Math.floor(h()[89][_0x2f74aa].x / 100);
          _0xc21eab.y = Math.floor(h()[89][_0x2f74aa].y / 100);
          _0x1b78d9.y;
          h()[89][_0x2f74aa].y;
          if (+(_0x1b78d9.x - h()[89][_0x2f74aa].x)) {
            _0x19a0e1 = _0x1a5108(_0x1b78d9, h()[89][_0x2f74aa]);
            r(_0x19a0e1);
            da[_0x354fa5](_0x19a0e1);
          }
        }
      }
    }
    if (d.pathfinder.movetoenemy && p() === true && _0x1b78d9) {
      Math.floor(_0x1b78d9.x / 100);
      Math.floor(_0x1b78d9.y / 100);
      Math.floor(32);
      Math.floor(32);
      let _0x4927ac = Object.keys(da)[122];
      for (let _0x4e45ba = 0; _0x4e45ba < h()[0].length; _0x4e45ba++) {
        if (h()[0][_0x4e45ba][w] == d.pathfinder.chaseid) {
          var _0x19a0e1 = 0;
          var _0xc21eab = {
            x: 0,
            y: 0
          };
          _0xc21eab.x = Math.floor(h()[0][_0x4e45ba].x / 100);
          _0xc21eab.y = Math.floor(h()[0][_0x4e45ba].y / 100);
          _0x1b78d9.y;
          h()[0][_0x4e45ba].y;
          if (+(_0x1b78d9.x - h()[0][_0x4e45ba].x)) {
            _0x19a0e1 = _0x1a5108(_0x1b78d9, h()[0][_0x4e45ba]);
            r(_0x19a0e1);
            da[_0x4927ac](_0x19a0e1);
          }
        }
      }
    }
    if (d.pathfinder.enabled && _0x1b78d9 && p() === true && d.pathfinder.x != null && d.pathfinder.y != null) {
      const _0x509569 = {
        x: Math.floor(_0x1b78d9.x / 100),
        y: Math.floor(_0x1b78d9.y / 100)
      };
      const _0x2125cc = Array.from({
        length: 6
      }, (_0x2ce6c0, _0x57c6b6) => _0x57c6b6 + 63);
      const _0x3f2576 = Array.from({
        length: 6
      }, (_0x223ba3, _0x27986b) => _0x27986b + 10);
      unsafeWindow.wrld.nw;
      let _0x10350c = unsafeWindow.wrld.nh;
      const _0x57ae49 = {
        x: Math.floor(d.pathfinder.x),
        y: Math.floor(d.pathfinder.y)
      };
      if (_0x2125cc.includes(_0x509569.x) && _0x3f2576.includes(_0x509569.y)) {
        r("hi");
      } else {
        (function (_0x19fe42, _0x40c01c, _0x205b6b) {
          const [_0x466dfe, _0x51a3a9] = _0x40c01c;
          const [_0x3e7e0d, _0x437c71] = _0x205b6b;
          if (!O(_0x19fe42, _0x466dfe, _0x51a3a9) || !O(_0x19fe42, _0x3e7e0d, _0x437c71)) {
            return [];
          }
          const _0x5cbbd0 = [[_0x466dfe, _0x51a3a9]];
          const _0x502164 = new Set([_0x466dfe + "," + _0x51a3a9]);
          const _0x3f9ee5 = new Map();
          while (_0x5cbbd0.length > 0) {
            const [_0x3fb912, _0x3c05ae] = _0x5cbbd0.shift();
            if (_0x3fb912 === _0x3e7e0d && _0x3c05ae === _0x437c71) {
              let _0x3586b5 = Object.keys(da)[122];
              const _0xc54c6d = M(_0x3f9ee5, _0x40c01c, _0x205b6b);
              _0xc54c6d.forEach(_0x527a12 => da[_0x3586b5](_0x527a12));
              return _0xc54c6d;
            }
            for (const [_0x25dfe7, [_0x4f5acd, _0x135933]] of Object.entries(z)) {
              const _0x1b5069 = _0x3fb912 + _0x4f5acd;
              const _0x5a0b31 = _0x3c05ae + _0x135933;
              if (O(_0x19fe42, _0x1b5069, _0x5a0b31) && !_0x502164.has(_0x1b5069 + "," + _0x5a0b31)) {
                _0x5cbbd0.push([_0x1b5069, _0x5a0b31]);
                _0x502164.add(_0x1b5069 + "," + _0x5a0b31);
                _0x3f9ee5.set(_0x1b5069 + "," + _0x5a0b31, {
                  parent: _0x3fb912 + "," + _0x3c05ae,
                  direction: Number(_0x25dfe7)
                });
              }
            }
          }
        })(_0x10350c, _0x509569, _0x57ae49);
      }
    }
  }
  function G() {
    requestAnimationFrame(G);
    if (d.drop.enabled) {
      f([aa.dropall, 7]);
    }
  }
  function H() {
    requestAnimationFrame(H);
    let _0x271aa1 = b();
    const _0x3d7991 = Date.now();
    function _0x3c072d(_0x423bd9, _0x3a7817) {
      return Math.sqrt((_0x3a7817.x - _0x423bd9.x) * (_0x3a7817.x - _0x423bd9.x) + (_0x3a7817.y - _0x423bd9.y) * (_0x3a7817.y - _0x423bd9.y));
    }
    if (_0x3d7991 - d.nows.SwordInchest > 80) {
      if (p() === true && m() === false && d.SwordInchest.enabled) {
        var _0x543f1b = h()[11];
        for (let _0x457a87 = 0; _0x457a87 < _0x543f1b.length; ++_0x457a87) {
          if (S(_0x271aa1.right) && _0x3c072d(_0x271aa1, _0x543f1b[_0x457a87]) <= 330) {
            f([aa.chestPut, _0x271aa1.right, 10, _0x543f1b[_0x457a87][w], _0x543f1b[_0x457a87].id]);
            f([aa.chestTake, _0x543f1b[_0x457a87][w], _0x543f1b[_0x457a87].id]);
          } else if (S(_0x271aa1.right) && g(167) && !_0x3c072d(_0x271aa1, _0x543f1b[_0x457a87]) <= 330) {
            let _0x4cabec = Math.PI * 2;
            let _0x9bc56a = Math.floor((_0x271aa1.angle + _0x4cabec) % _0x4cabec * 255 / _0x4cabec);
            f([aa.placeBuild, 167, _0x9bc56a, 0]);
            for (let _0x2faa13 = 10; _0x2faa13 < 30; _0x2faa13 += 3) {
              f([aa.placeBuild, 167, (-_0x2faa13 + _0x9bc56a) % 255, 0]);
              f([aa.placeBuild, 167, (_0x2faa13 + _0x9bc56a) % 255, 0]);
            }
          }
        }
      }
      d.nows.SwordInchest = _0x3d7991;
    }
  }
  function W() {
    requestAnimationFrame(W);
    let _0x3f6f34 = h()[0];
    let _0x14af5b = b();
    const _0x3a2a7c = document.getElementById("game_canvas").getContext("2d");
    if (d.drawID && _0x14af5b && p() === true) {
      let _0x4b7fac = Object.values(h()[0])[0];
      let _0x43774f = Object.keys(_0x4b7fac)[1];
      let _0x2816bc = u()[0];
      let _0x34666d = u()[1];
      for (let _0x3a9191 of _0x3f6f34) {
        let _0x47c9bb = _0x2816bc + _0x43774f.x;
        let _0x7a9a0d = _0x34666d + _0x43774f.y;
        const _0x3dd1f8 = Math.floor(11 - (Date.now() - ba.healtimer) / 1000) + "s";
        _0x3a2a7c.lineWidth = 7;
        _0x3a2a7c.strokeStyle = "black";
        _0x3a2a7c.font = "22px Baloo Paaji";
        _0x3a2a7c.strokeText(_0x3dd1f8, u()[0] + _0x3a9191.x, u()[1] + _0x3a9191.y + 30);
        _0x3a2a7c.fillStyle = "white";
        _0x3a2a7c.fillText(_0x3dd1f8, u()[0] + _0x3a9191.x, u()[1] + _0x3a9191.y + 30);
        _0x3a2a7c.lineWidth = 7;
        _0x3a2a7c.strokeStyle = "black";
        _0x3a2a7c.font = "22px Baloo Paaji";
        _0x3a2a7c.strokeText(_0x3a9191[_0x43774f], u()[0] + _0x3a9191.x, u()[1] + _0x3a9191.y + 50);
        _0x3a2a7c.fillStyle = "white";
        _0x3a2a7c.fillText(_0x3a9191[_0x43774f], u()[0] + _0x3a9191.x, u()[1] + _0x3a9191.y + 50);
      }
    }
  }
  function X() {
    function _0x49e893(_0x3b9fb3, _0xe5f7dc, _0x219829) {
      let _0x29fe45 = Object.keys(ca)[17];
      let _0x53ca63 = Object.values(ca[_0x29fe45])[1];
      const _0x4dcf4a = document.getElementById("game_canvas").getContext("2d");
      if (ca.transition) {
        _0x4dcf4a.globalAlpha = 1;
        _0x3b9fb3[K](_0xe5f7dc, _0x219829);
        ca.time = ca.time ? 0 : 1;
        _0x4dcf4a.globalAlpha = 1 - _0x53ca63;
        _0x3b9fb3[K](_0xe5f7dc, _0x219829);
        ca.time = ca.time ? 0 : 1;
        _0x4dcf4a.globalAlpha = 1;
      } else {
        _0x3b9fb3[K](_0xe5f7dc, _0x219829);
      }
    }
    const _0x5b3e99 = document.getElementById("game_canvas").getContext("2d");
    requestAnimationFrame(X);
    let _0x272115 = b();
    if (d.BoxOnTop && _0x272115 && p() === true) {
      let _0x2a5bd1 = h()[86];
      let _0x5dcb09 = h()[82];
      for (let _0x43a2b4 = 0; _0x43a2b4 < _0x2a5bd1.length; _0x43a2b4++) {
        let _0x54d999 = _0x2a5bd1[_0x43a2b4];
        _0x49e893(_0x54d999, 250, 729);
        _0x5b3e99.lineWidth = 7;
        _0x5b3e99.strokeStyle = "black";
        _0x5b3e99.font = "22px Baloo Paaji";
        _0x5b3e99.strokeText("DropBox", u()[0] + _0x54d999.x, u()[1] + _0x54d999.y);
        _0x5b3e99.fillStyle = "white";
        _0x5b3e99.fillText("DropBox", u()[0] + _0x54d999.x, u()[1] + _0x54d999.y);
      }
      for (let _0x4fcbdc = 0; _0x4fcbdc < _0x5dcb09.length; _0x4fcbdc++) {
        let _0x2ddde8 = _0x5dcb09[_0x4fcbdc];
        _0x49e893(_0x2ddde8, 250, 729);
        _0x5b3e99.strokeText("DeadBox", u()[0] + _0x2ddde8.x, u()[1] + _0x2ddde8.y);
        _0x5b3e99.fillStyle = "white";
        _0x5b3e99.fillText("DeadBox", u()[0] + _0x2ddde8.x, u()[1] + _0x2ddde8.y);
      }
    }
  }
  const Y = () => {
    new MutationObserver(function (_0x32c21a) {
      for (const _0x49980c of _0x32c21a) {
        for (const _0x2cea63 of _0x49980c.addedNodes) {
          if (_0x2cea63.src && (_0x2cea63.src.includes("server.cmpstar.net") || _0x2cea63.src.includes("sdk.truepush.com") || _0x2cea63.src.includes("sdki.truepush.com") || _0x2cea63.src.includes("adinplay") || _0x2cea63.src.includes("amazon-adsystem.com") || _0x2cea63.src.includes("www.google-analytics.com") || _0x2cea63.src.includes("ib.adnxs.com") || _0x2cea63.src.includes("targeting.unrulymedia.com") || _0x2cea63.src.includes("www.google-analytics.com") || _0x2cea63.src.includes("pagead2.googlesyndication.com") || _0x2cea63.src.includes("doubleclick.net") || _0x2cea63.src.includes("script.4dex.io"))) {
            _0x2cea63.src = "";
            _0x2cea63.innerHTML = "";
            _0x2cea63.textContent = "";
          }
          if (_0x2cea63.className === "wg-ad-container") {
            setTimeout(function () {
              const _0x38d651 = document.querySelector(".wg-ad-player");
              _0x38d651.currentTime = 20;
              _0x38d651.parentElement.style.display = "none";
            }, 1);
          }
        }
      }
    }).observe(document, {
      childList: true,
      attributes: true,
      subtree: true
    });
  };
  function BringHood() {
    requestAnimationFrame(BringHood);
    let _0x541d5a = b();
    if (p() === true && m() === false && d.pathfinder.hood) {
      var _0x320904 = h()[11];
      for (let _0x24d056 = 0; _0x24d056 < _0x320904.length; ++_0x24d056) {
        _0x28f398 = _0x541d5a;
        _0x25b2a7 = _0x320904[_0x24d056];
        if (Math.sqrt((_0x25b2a7.x - _0x28f398.x) * (_0x25b2a7.x - _0x28f398.x) + (_0x25b2a7.y - _0x28f398.y) * (_0x25b2a7.y - _0x28f398.y)) <= 330) {
          f([aa.chestPut, 83, 1, _0x320904[_0x24d056][w], _0x320904[_0x24d056].id]);
          f([aa.chestPut, 36, 1, _0x320904[_0x24d056][w], _0x320904[_0x24d056].id]);
          f([aa.chestPut, 3, 1, _0x320904[_0x24d056][w], _0x320904[_0x24d056].id]);
          f([aa.chestPut, 152, 1, _0x320904[_0x24d056][w], _0x320904[_0x24d056].id]);
          f([aa.chestPut, 112, 10, _0x320904[_0x24d056][w], _0x320904[_0x24d056].id]);
          f([aa.chestPut, 130, 10, _0x320904[_0x24d056][w], _0x320904[_0x24d056].id]);
          f([aa.chestPut, 109, 10, _0x320904[_0x24d056][w], _0x320904[_0x24d056].id]);
          f([aa.chestPut, 110, 10, _0x320904[_0x24d056][w], _0x320904[_0x24d056].id]);
          f([aa.chestPut, 189, 10, _0x320904[_0x24d056][w], _0x320904[_0x24d056].id]);
        }
      }
    }
    var _0x28f398;
    var _0x25b2a7;
  }
  let lastEquipTime = 0;
  function AutoDoPlayer() {
    requestAnimationFrame(AutoDoPlayer);
    let _0x10c89c = b();
    if (p() === true && _0x10c89c && d.AutoDo.enabled) {
      let _0x3722bf = Health();
      let _0x43756f = _0x3722bf * 100;
      if (d.AutoDo.equip) {
        if (_0x43756f < d.AutoDo.hp && Date.now() - lastEquipTime > d.AutoDo.delay * 1000) {
          if (d.AutoDo.option === "Gold Helmet") {
            f([aa.equip, inv.GOLD_HELMET]);
          } else if (d.AutoDo.option === "Diamond Helmet") {
            f([aa.equip, inv.DIAMOND_HELMET]);
          } else if (d.AutoDo.option === "Amethys Helmet") {
            f([aa.equip, inv.AMETHYST_HELMET]);
          } else if (d.AutoDo.option === "Redite Helmet") {
            f([aa.equip, inv.REIDITE_HELMET]);
          } else if (d.AutoDo.option === "Wood Helmet") {
            f([aa.equip, inv.WOOD_HELMET]);
          } else if (d.AutoDo.option === "Stone Helmet") {
            f([aa.equip, inv.STONE_HELMET]);
          } else if (d.AutoDo.option === "Green Crown") {
            f([aa.equip, inv.CROWN_GREEN]);
          } else if (d.AutoDo.option === "Orange Crown") {
            f([aa.equip, inv.CROWN_ORANGE]);
          } else if (d.AutoDo.option === "Blue Crown") {
            f([aa.equip, inv.CROWN_BLUE]);
          } else if (d.AutoDo.option === "Lava Helmet") {
            f([aa.equip, inv.LAVA_HELMET]);
          } else if (d.AutoDo.option === "Dragon Helmet") {
            f([aa.equip, inv.DRAGON_HELMET]);
          }
          lastEquipTime = Date.now();
        }
      }
    }
  }
  let lastEquipTimeGreen = 0;
  function AutoGreen() {
    requestAnimationFrame(AutoGreen);
    let _0x28072a = b();
    if (p() === true && _0x28072a && d.GreenCrown) {
      let _0x3acdde = Health();
      let _0x54e565 = _0x3acdde * 100;
      const _0x134f8b = Math.floor(11 - (Date.now() - ba.healtimer) / 1000);
      if (_0x134f8b === 1 && Date.now() - lastEquipTimeGreen > 9000) {
        f([aa.equip, inv.CROWN_GREEN]);
        lastEquipTimeGreen = Date.now();
      }
    }
  }
  function AutoPutMaterial() {
    requestAnimationFrame(AutoPutMaterial);
    let _0xbf8a9a = b();
    if (p() === true && m() === false && d.AutoPutMaterial.enabled) {
      var _0x3dc79e = h()[11];
      for (let _0x241bbc = 0; _0x241bbc < _0x3dc79e.length; ++_0x241bbc) {
        _0x4a3199 = _0xbf8a9a;
        _0x4c6a2d = _0x3dc79e[_0x241bbc];
        if (Math.sqrt((_0x4c6a2d.x - _0x4a3199.x) * (_0x4c6a2d.x - _0x4a3199.x) + (_0x4c6a2d.y - _0x4a3199.y) * (_0x4c6a2d.y - _0x4a3199.y)) <= 330) {
          if (d.AutoPutMaterial.option === "Redite") {
            f([aa.chestPut, 202, 10, _0x3dc79e[_0x241bbc][w], _0x3dc79e[_0x241bbc].id]);
          } else if (d.AutoPutMaterial.option === "Gold") {
            f([aa.chestPut, 111, 10, _0x3dc79e[_0x241bbc][w], _0x3dc79e[_0x241bbc].id]);
          } else if (d.AutoPutMaterial.option === "Diamond") {
            f([aa.chestPut, 112, 10, _0x3dc79e[_0x241bbc][w], _0x3dc79e[_0x241bbc].id]);
          } else if (d.AutoPutMaterial.option === "Amethys") {
            f([aa.chestPut, 121, 10, _0x3dc79e[_0x241bbc][w], _0x3dc79e[_0x241bbc].id]);
          } else if (d.AutoPutMaterial.option === "Stone") {
            f([aa.chestPut, 108, 10, _0x3dc79e[_0x241bbc][w], _0x3dc79e[_0x241bbc].id]);
          } else if (d.AutoPutMaterial.option === "Wood") {
            f([aa.chestPut, 109, 10, _0x3dc79e[_0x241bbc][w], _0x3dc79e[_0x241bbc].id]);
          }
        }
      }
    }
    var _0x4a3199;
    var _0x4c6a2d;
  }
  function J() {
    let _0x439b6e = b();
    if (p() === true && m() === false && d.AutoPutRed.enabled) {
      var _0x2aba39 = h()[11];
      for (let _0x3c2223 = 0; _0x3c2223 < _0x2aba39.length; ++_0x3c2223) {
        _0x34b738 = _0x439b6e;
        _0x170dcd = _0x2aba39[_0x3c2223];
        if (Math.sqrt((_0x170dcd.x - _0x34b738.x) * (_0x170dcd.x - _0x34b738.x) + (_0x170dcd.y - _0x34b738.y) * (_0x170dcd.y - _0x34b738.y)) <= 330) {
          f([aa.chestPut, 202, 10, _0x2aba39[_0x3c2223][w], _0x2aba39[_0x3c2223].id]);
          f([aa.chestPut, 111, 10, _0x2aba39[_0x3c2223][w], _0x2aba39[_0x3c2223].id]);
        }
      }
    }
    var _0x34b738;
    var _0x170dcd;
  }
  let U = {
    Autofarm: Date.now()
  };
  function MoveBot() {
    let _0x4063f9 = Object.keys(da)[122];
    requestAnimationFrame(MoveBot);
    let _0x445eca = b();
    if (d.pathfinder.v2 && _0x445eca) {
      let _0x2f6af7 = {
        x: _0x445eca.x - d.pathfinder.x,
        y: _0x445eca.y - d.pathfinder.y
      };
      let _0xddfbe7 = {
        x: Math.abs(_0x445eca.x - d.pathfinder.x),
        y: Math.abs(_0x445eca.y - d.pathfinder.y)
      };
      let _0x4c111c = 0;
      if (_0xddfbe7.x > 60) {
        if (_0x2f6af7.x > 50) {
          _0x4c111c += 1;
        }
        if (_0x2f6af7.x < 50) {
          _0x4c111c += 2;
        }
      }
      if (_0xddfbe7.y > 60) {
        if (_0x2f6af7.y > 50) {
          _0x4c111c += 8;
        }
        if (_0x2f6af7.y < 50) {
          _0x4c111c += 4;
        }
      }
      da[_0x4063f9](_0x4c111c);
    }
  }
  function is_left() {
    return Object.keys(keyboard)[30];
  }
  function is_right() {
    return Object.keys(keyboard)[31];
  }
  function is_top() {
    return Object.keys(keyboard)[32];
  }
  function is_bottom() {
    return Object.keys(keyboard)[33];
  }
  function SpectatorW() {
    requestAnimationFrame(SpectatorW);
    if (d.Spectator.enabled) {
      if (is_left()) {
        u()[0] += 60;
      }
      if (is_right()) {
        u()[0] -= 60;
      }
      if (is_top()) {
        u()[1] += 60;
      }
      if (is_bottom()) {
        u()[1] -= 60;
      }
    }
  }
  let isReconnecting = false;
  function Antireconnect() {
    if (d.antirec) {
      if (c.reconnect.enabled) {
        let _0x499e31 = Object.keys(i)[85];
        let _0x1fc844 = Object.keys(da)[136];
        da[_0x1fc844]();
        i[_0x499e31]();
      }
    }
  }
  function AutoOvenPut() {
    requestAnimationFrame(AutoOvenPut);
    const _0x125344 = Date.now();
    let _0x59ed13 = b();
    if (_0x125344 - d.nows.autobreadput > 100) {
      [32, 34].forEach(_0x13e293 => {
        var _0x5ba885;
        var _0x3b2ac7;
        var _0x390795 = h()[_0x13e293];
        if (p() === true && m() === false && d.AutoBreadput) {
          for (let _0x41d798 = 0; _0x41d798 < _0x390795.length; ++_0x41d798) {
            _0x5ba885 = _0x59ed13;
            _0x3b2ac7 = _0x390795[_0x41d798];
            if (Math.sqrt((_0x3b2ac7.x - _0x5ba885.x) * (_0x3b2ac7.x - _0x5ba885.x) + (_0x3b2ac7.y - _0x5ba885.y) * (_0x3b2ac7.y - _0x5ba885.y)) <= 330) {
              f([30, 10, _0x390795[_0x41d798][w], _0x390795[_0x41d798].id]);
              f([25, 10, _0x390795[_0x41d798][w], _0x390795[_0x41d798].id]);
              f([14, 10, _0x390795[_0x41d798][w], _0x390795[_0x41d798].id]);
            }
          }
        }
      });
      d.nows.autobreadput = _0x125344;
    }
  }
  function AutoOven() {
    requestAnimationFrame(AutoOven);
    const _0x175dfe = Date.now();
    let _0x387a91 = b();
    if (_0x175dfe - d.nows.autobreadtake > 100) {
      [32, 34].forEach(_0x1c1fb4 => {
        var _0x309517;
        var _0x31e993;
        var _0x324dc7 = h()[_0x1c1fb4];
        if (p() === true && m() === false && d.AutoBreadtake) {
          for (let _0x4a81af = 0; _0x4a81af < _0x324dc7.length; ++_0x4a81af) {
            _0x309517 = _0x387a91;
            _0x31e993 = _0x324dc7[_0x4a81af];
            if (Math.sqrt((_0x31e993.x - _0x309517.x) * (_0x31e993.x - _0x309517.x) + (_0x31e993.y - _0x309517.y) * (_0x31e993.y - _0x309517.y)) <= 330) {
              f([4, _0x324dc7[_0x4a81af][w], _0x324dc7[_0x4a81af].id, _0x1c1fb4]);
              f([13, _0x324dc7[_0x4a81af][w], _0x324dc7[_0x4a81af].id, _0x1c1fb4]);
            }
          }
        }
      });
      d.nows.autobreadtake = _0x175dfe;
    }
  }
  function OvenInfo() {
    requestAnimationFrame(OvenInfo);
    let _0x55881b = b();
    let _0xa1954 = h()[34];
    let _0x52d9b4 = u()[0];
    let _0x4bbd44 = u()[1];
    const _0xec0ca6 = document.querySelector("canvas").getContext("2d");
    if (_0x55881b) {
      for (let _0x5cfbad = 0; _0x5cfbad < _0xa1954.length; _0x5cfbad++) {
        let _0x13472c = _0xa1954[_0x5cfbad];
        let _0x36056d = _0x52d9b4 + _0x13472c.x - 20;
        let _0x3aca4a = _0x4bbd44 + _0x13472c.y;
        const _0x5bfea4 = "W: " + (_0x13472c.info & 31);
        const _0x5f5d99 = "F: " + ((_0x13472c.info & 992) >> 5);
        const _0x48b53f = "B: " + ((_0x13472c.info & 31744) >> 10);
        _0xec0ca6.font = "26px Baloo Paaji";
        _0xec0ca6.fillStyle = "white";
        _0xec0ca6.strokeStyle = "black";
        _0xec0ca6.lineWidth = 3;
        _0xec0ca6.strokeText(_0x5bfea4, _0x36056d, _0x3aca4a - 40);
        _0xec0ca6.fillText(_0x5bfea4, _0x36056d, _0x3aca4a - 40);
        _0xec0ca6.strokeText(_0x5f5d99, _0x36056d, _0x3aca4a - 20);
        _0xec0ca6.fillText(_0x5f5d99, _0x36056d, _0x3aca4a - 20);
        _0xec0ca6.strokeText(_0x48b53f, _0x36056d, _0x3aca4a);
        _0xec0ca6.fillText(_0x48b53f, _0x36056d, _0x3aca4a);
        _0xec0ca6.strokeText(c.reconnect.enabled, _0x36056d, _0x3aca4a + 20);
        _0xec0ca6.fillText(c.reconnect.enabled, _0x36056d, _0x3aca4a + 20);
      }
    }
  }
  function V() {
    let _0x89bcc9 = Object.keys(da)[122];
    let _0x402593 = b();
    requestAnimationFrame(V);
    if (d.Autofarm.enabled && Date.now() - U.Autofarm > 50) {
      let _0x5208d6 = {
        obj: null,
        dist: -1,
        type: 0
      };
      var _0x253353 = {
        x: d.Autofarm.x,
        y: d.Autofarm.y,
        width: d.Autofarm.xx - d.Autofarm.x,
        height: d.Autofarm.yy - d.Autofarm.y
      };
      for (var _0x1a3e8b = 0, _0x5ddb28 = [...h()[3], ...h()[31], ...h()[37], ...h()[39], ...h()[89], ...h()[40], ...h()[43], ...h()[44], ...h()[54], ...h()[55]], _0x3d3a73 = _0x5ddb28.length, _0x1bae6c = null, _0x3489da = null; _0x1a3e8b < _0x3d3a73; ++_0x1a3e8b) {
        if ((_0x1bae6c = _0x5ddb28[_0x1a3e8b]).info && _0x1bae6c.info !== 10 && (d.Autofarm.water || _0x1bae6c.info !== 16) && _0x253353.x < _0x1bae6c.x - 50 + 100 && _0x253353.x + _0x253353.width > _0x1bae6c.x - 50 && _0x253353.y < _0x1bae6c.y - 50 + 100 && _0x253353.y + _0x253353.height > _0x1bae6c.y - 50) {
          let _0x445242 = Object.keys(y)[4];
          if (d.Autofarm.enabled && d.Autofarm.angle != null) {
            y[_0x445242].x = u()[0] + _0x1bae6c.x;
            y[_0x445242].y = u()[1] + _0x1bae6c.y;
          }
          _0x3489da = (_0x402593.x - _0x1bae6c.x) ** 2 + (_0x402593.y - _0x1bae6c.y) ** 2;
          if (_0x5208d6.dist === -1 || _0x3489da < _0x5208d6.dist) {
            _0x5208d6.dist = _0x3489da;
            _0x5208d6.obj = _0x1bae6c;
          }
        }
      }
      if (_0x5208d6.obj) {
        _0x382119 = _0x402593;
        _0x321e85 = _0x5208d6.obj;
        _0x5208d6.dist = _0x382119 && _0x321e85 ? Math.sqrt((_0x382119.x - _0x321e85.x) ** 2 + (_0x382119.y - _0x321e85.y) ** 2) : null;
        switch (_0x5208d6.obj.info) {
          case 1:
          case 2:
          case 3:
            r("uwu");
            if (g(54)[0]) {
              if (_0x402593.right !== 54) {
                f([aa.equip, 54]);
              }
            } else if (g(53)[0] && _0x402593.right !== 53) {
              f([aa.equip, 53]);
            }
            _0x5208d6.type = 2;
            break;
          case 16:
          case 17:
          case 18:
          case 19:
            if (d.Autofarm.water) {
              if (g(49)[0]) {
                if (_0x402593.right !== 49) {
                  f([aa.equip, 49]);
                }
                _0x5208d6.type = 1;
              }
            } else {
              if (g(54)[0]) {
                if (_0x402593.right !== 54) {
                  f([aa.equip, 54]);
                }
              } else if (g(53)[0] && _0x402593.right !== 53) {
                f([aa.equip, 53]);
              }
              _0x5208d6.type = 2;
            }
        }
        let _0x36bdb9 = {
          x: _0x402593.x - _0x5208d6.obj.x,
          y: _0x402593.y - _0x5208d6.obj.y
        };
        let _0x34fef2 = {
          x: Math.abs(_0x402593.x - _0x5208d6.obj.x),
          y: Math.abs(_0x402593.y - _0x5208d6.obj.y)
        };
        let _0x1f1d3c = 0;
        if (_0x34fef2.x > 60) {
          if (_0x36bdb9.x > 50) {
            _0x1f1d3c += 1;
          }
          if (_0x36bdb9.x < 50) {
            _0x1f1d3c += 2;
          }
        }
        if (_0x34fef2.y > 60) {
          if (_0x36bdb9.y > 50) {
            _0x1f1d3c += 8;
          }
          if (_0x36bdb9.y < 50) {
            _0x1f1d3c += 4;
          }
        }
        da[_0x89bcc9](_0x1f1d3c);
        if (_0x34fef2.x < (_0x5208d6.type === 1 ? 120 : 300) && _0x34fef2.y < (_0x5208d6.type === 1 ? 120 : 300)) {
          d.Autofarm.angle = function (_0x2f6398, _0x521681, _0x5a06f4) {
            if (_0x2f6398 && _0x521681) {
              if (_0x5a06f4) {
                return Math.atan2(_0x521681.r.y - _0x2f6398.r.y, _0x521681.r.x - _0x2f6398.r.x);
              } else {
                return Math.atan2(_0x521681.y - _0x2f6398.y, _0x521681.x - _0x2f6398.x);
              }
            } else {
              return null;
            }
          }(_0x402593, _0x5208d6.obj, true);
          let _0x3193c7 = Math.PI * 2;
          let _0x18e2c5 = Math.floor((d.Autofarm.angle + _0x3193c7) % _0x3193c7 * 255 / _0x3193c7);
          if (d.Autofarm.angle) {
            f([aa.attack, _0x18e2c5]);
            f([aa.stopAttack]);
          }
        }
      } else {
        let _0x35d1c1 = {
          x: _0x402593.x - d.Autofarm.sx,
          y: _0x402593.y - d.Autofarm.sy
        };
        let _0x1c62c9 = {
          x: Math.abs(_0x402593.x - d.Autofarm.sx),
          y: Math.abs(_0x402593.y - d.Autofarm.sy)
        };
        let _0x487a5c = 0;
        if (_0x1c62c9.x > 60) {
          if (_0x35d1c1.x > 0) {
            _0x487a5c += 1;
          }
          if (_0x35d1c1.x < 0) {
            _0x487a5c += 2;
          }
        }
        if (_0x1c62c9.y > 60) {
          if (_0x35d1c1.y > 0) {
            _0x487a5c += 8;
          }
          if (_0x35d1c1.y < 0) {
            _0x487a5c += 4;
          }
        }
        da[_0x89bcc9](_0x487a5c);
      }
      U.Autofarm = Date.now();
    }
    var _0x382119;
    var _0x321e85;
  }
  let opy = {
    ESPD: Date.now()
  };
  function PathfindV2() {
    let _0x255eef = Object.keys(da)[122];
    let _0x4b2a0d = b();
    requestAnimationFrame(PathfindV2);
    if (d.Esp && Date.now() - opy.ESPD > 50) {
      let _0xf9433a = {
        obj: null,
        dist: -1,
        type: 0
      };
      var _0x155b65 = {
        x: d.Autofarm.x,
        y: d.Autofarm.y,
        width: d.Autofarm.xx - d.Autofarm.x,
        height: d.Autofarm.yy - d.Autofarm.y
      };
      for (var _0x471b92 = 0, _0x16fc21 = [...h()[3], ...h()[31], ...h()[37], ...h()[39], ...h()[40], ...h()[43], ...h()[44], ...h()[54], ...h()[55]], _0x4eefcc = _0x16fc21.length, _0x5013cf = null, _0x4fdf8f = null; _0x471b92 < _0x4eefcc; ++_0x471b92) {
        if ((_0x5013cf = _0x16fc21[_0x471b92]).info && _0x5013cf.info !== 10 && (d.Autofarm.water || _0x5013cf.info !== 16) && _0x155b65.x < _0x5013cf.x - 50 + 100 && _0x155b65.x + _0x155b65.width > _0x5013cf.x - 50 && _0x155b65.y < _0x5013cf.y - 50 + 100 && _0x155b65.y + _0x155b65.height > _0x5013cf.y - 50) {
          let _0x151c9c = Object.keys(y)[4];
          if (d.Esp) {
            y[_0x151c9c].x = u()[0] + _0x5013cf.x;
            y[_0x151c9c].y = u()[1] + _0x5013cf.y;
          }
          _0x4fdf8f = (_0x4b2a0d.x - _0x5013cf.x) ** 2 + (_0x4b2a0d.y - _0x5013cf.y) ** 2;
          if (_0xf9433a.dist === -1 || _0x4fdf8f < _0xf9433a.dist) {
            _0xf9433a.dist = _0x4fdf8f;
            _0xf9433a.obj = _0x5013cf;
          }
        }
      }
      if (_0xf9433a.obj) {
        _0x4f88ac = _0x4b2a0d;
        _0x1339c8 = _0xf9433a.obj;
        _0xf9433a.dist = _0x4f88ac && _0x1339c8 ? Math.sqrt((_0x4f88ac.x - _0x1339c8.x) ** 2 + (_0x4f88ac.y - _0x1339c8.y) ** 2) : null;
        switch (_0xf9433a.obj.info) {
          case 1:
          case 2:
          case 3:
            r("uwu");
            if (g(54)[0]) {
              if (_0x4b2a0d.right !== 54) {
                f([aa.equip, 54]);
              }
            } else if (g(53)[0] && _0x4b2a0d.right !== 53) {
              f([aa.equip, 53]);
            }
            _0xf9433a.type = 2;
            break;
          case 16:
          case 17:
          case 18:
          case 19:
            if (d.Autofarm.water) {
              if (g(49)[0]) {
                if (_0x4b2a0d.right !== 49) {
                  f([aa.equip, 49]);
                }
                _0xf9433a.type = 1;
              }
            } else {
              if (g(54)[0]) {
                if (_0x4b2a0d.right !== 54) {
                  f([aa.equip, 54]);
                }
              } else if (g(53)[0] && _0x4b2a0d.right !== 53) {
                f([aa.equip, 53]);
              }
              _0xf9433a.type = 2;
            }
        }
        let _0x45df1a = {
          x: _0x4b2a0d.x - _0xf9433a.obj.x,
          y: _0x4b2a0d.y - _0xf9433a.obj.y
        };
        let _0x85a9c7 = {
          x: Math.abs(_0x4b2a0d.x - _0xf9433a.obj.x),
          y: Math.abs(_0x4b2a0d.y - _0xf9433a.obj.y)
        };
        let _0x573941 = 0;
        if (_0x85a9c7.x > 60) {
          if (_0x45df1a.x > 50) {
            _0x573941 += 1;
          }
          if (_0x45df1a.x < 50) {
            _0x573941 += 2;
          }
        }
        if (_0x85a9c7.y > 60) {
          if (_0x45df1a.y > 50) {
            _0x573941 += 8;
          }
          if (_0x45df1a.y < 50) {
            _0x573941 += 4;
          }
        }
        da[_0x255eef](_0x573941);
        if (_0x85a9c7.x < (_0xf9433a.type === 1 ? 120 : 300) && _0x85a9c7.y < (_0xf9433a.type === 1 ? 120 : 300)) {
          d.Autofarm.angle = function (_0x197d2d, _0x38963d, _0x3289a9) {
            if (_0x197d2d && _0x38963d) {
              if (_0x3289a9) {
                return Math.atan2(_0x38963d.r.y - _0x197d2d.r.y, _0x38963d.r.x - _0x197d2d.r.x);
              } else {
                return Math.atan2(_0x38963d.y - _0x197d2d.y, _0x38963d.x - _0x197d2d.x);
              }
            } else {
              return null;
            }
          }(_0x4b2a0d, _0xf9433a.obj, true);
          let _0x387f46 = Math.PI * 2;
          let _0xa65fbf = Math.floor((d.Autofarm.angle + _0x387f46) % _0x387f46 * 255 / _0x387f46);
          if (d.Autofarm.angle) {
            f([aa.attack, _0xa65fbf]);
            f([aa.stopAttack]);
          }
        }
      } else {
        let _0x107d2e = {
          x: _0x4b2a0d.x - d.Autofarm.sx,
          y: _0x4b2a0d.y - d.Autofarm.sy
        };
        let _0x48b816 = {
          x: Math.abs(_0x4b2a0d.x - d.Autofarm.sx),
          y: Math.abs(_0x4b2a0d.y - d.Autofarm.sy)
        };
        let _0x3c08d1 = 0;
        if (_0x48b816.x > 60) {
          if (_0x107d2e.x > 0) {
            _0x3c08d1 += 1;
          }
          if (_0x107d2e.x < 0) {
            _0x3c08d1 += 2;
          }
        }
        if (_0x48b816.y > 60) {
          if (_0x107d2e.y > 0) {
            _0x3c08d1 += 8;
          }
          if (_0x107d2e.y < 0) {
            _0x3c08d1 += 4;
          }
        }
        da[_0x255eef](_0x3c08d1);
      }
      opy.ESPD = Date.now();
    }
    var _0x4f88ac;
    var _0x1339c8;
  }
  let lastExecutionTime = 0;
  const interval = 100;
  function Q() {
    requestAnimationFrame(Q);
    const _0x333636 = performance.now();
    if (_0x333636 - lastExecutionTime < interval) {
      return;
    }
    lastExecutionTime = _0x333636;
    let _0x3b2e19 = b();
    if (d.AMB.enabled && _0x3b2e19 && p() === true) {
      let _0x266f84;
      switch (S(_0x3b2e19.right, true)) {
        case 1:
          _0x266f84 = _0x3b2e19[j] ? 196.8 : 157.6;
          break;
        case 2:
          _0x266f84 = _0x3b2e19[j] ? 291.8 : 227.6;
          break;
        case 3:
          _0x266f84 = 620;
          break;
        case 4:
          _0x266f84 = _0x3b2e19[j] ? 140 : 125;
          break;
        case 5:
          _0x266f84 = _0x3b2e19.clothe == 85 || _0x3b2e19.clothe == 83 ? _0x3b2e19[j] ? 120.8 : 97.6 : null;
          break;
        default:
          _0x266f84 = null;
      }
      if (_0x266f84) {
        const _0x3b47cc = findClosestTarget(_0x3b2e19, h()[0], S(_0x3b2e19.right, false) === 2);
        if (_0x3b47cc) {
          const _0x5ed80b = calculateDistance(_0x3b2e19, _0x3b47cc);
          if (_0x5ed80b <= _0x266f84) {
            d.AMB.a = calculateAngle(_0x3b2e19, _0x3b47cc, true);
            d.AMB.t = _0x3b47cc;
            const _0x33fb66 = d.AMB.a;
            const _0x1378f8 = Math.floor((_0x33fb66 + Math.PI * 2) % (Math.PI * 2) * 255 / (Math.PI * 2));
            f([aa.angle, _0x1378f8]);
            if (_0x33fb66 && _0x5ed80b <= _0x266f84 - 22 && _0x3b2e19.right !== 45) {
              f([aa.attack, _0x1378f8]);
              f([aa.stopAttack]);
            }
          } else {
            d.AMB.a = null;
            d.AMB.t = null;
          }
        } else {
          d.AMB.a = null;
        }
      }
    }
  }
  function findClosestTarget(_0x1c2aaf, _0xe31c01, _0x265e0a) {
    let _0x5e677c = null;
    let _0x525536 = -1;
    for (const _0x828103 of _0xe31c01) {
      if (_0x828103[w] !== _0x1c2aaf[w] && !B(_0x828103[w]) && _0x1c2aaf[j] === _0x828103[j] && !_0x828103.ghost) {
        const _0x464160 = calculateDistance(_0x1c2aaf, _0x828103);
        if (_0x265e0a && _0x464160 < 210) {
          continue;
        }
        if (_0x525536 === -1 || _0x464160 < _0x525536) {
          _0x525536 = _0x464160;
          _0x5e677c = _0x828103;
        }
      }
    }
    if (d.AMB.enabled && d.AMB.a != null) {
      const _0x29eca9 = Object.keys(y)[4];
      y[_0x29eca9].x = u()[0] + _0x5e677c.x;
      y[_0x29eca9].y = u()[1] + _0x5e677c.y;
    }
    return _0x5e677c;
  }
  function calculateDistance(_0x502825, _0x35e94d) {
    if (_0x502825 && _0x35e94d) {
      return Math.sqrt((_0x502825.x - _0x35e94d.x) ** 2 + (_0x502825.y - _0x35e94d.y) ** 2);
    }
    return null;
  }
  function calculateAngle(_0x145632, _0x1266b9, _0x4e109f) {
    if (_0x145632 && _0x1266b9) {
      if (_0x4e109f) {
        return Math.atan2(_0x1266b9.r.y - _0x145632.r.y, _0x1266b9.r.x - _0x145632.r.x);
      } else {
        return Math.atan2(_0x1266b9.y - _0x145632.y, _0x1266b9.x - _0x145632.x);
      }
    }
    return null;
  }
  function machinei() {
    let _0x33ae93 = b();
    requestAnimationFrame(machinei);
    if (_0x33ae93 && p() === true) {
      let _0x2358ab = h()[23];
      let _0x660e98 = u()[0];
      let _0xa3946e = u()[1];
      for (let _0xe7898e = 0; _0xe7898e < _0x2358ab.length; _0xe7898e++) {
        let _0x38ff46 = _0x2358ab[_0xe7898e];
        let _0xd7ac00 = _0x660e98 + _0x38ff46.x;
        let _0x1f7f37 = _0xa3946e + _0x38ff46.y;
        let _0x2a679d = Object.entries(_0x38ff46);
        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = 6;
        ctx.fillStyle = "red";
        ctx.strokeStyle = "black";
        ctx.font = "22px Baloo Paaji";
        ctx.strokeText(_0x38ff46.ⲆΔᐃⵠ, _0xd7ac00, _0x1f7f37);
        ctx.fillText(_0x38ff46.ⲆΔᐃⵠ, _0xd7ac00, _0x1f7f37);
        ctx.restore();
      }
    }
  }
  function percanteges() {
    let _0x6771e4 = b();
    requestAnimationFrame(percanteges);
    if (_0x6771e4 && p() === true && d.percant) {
      let _0x3c5f64 = Score();
      let _0x450bf8 = Health();
      let _0x183d34 = GaugeOxygen();
      let _0x4369a1 = Cold();
      let _0x3b2858 = k();
      let _0x43edf9 = GaugeCold();
      let _0x58d842 = _0x450bf8 * 100;
      let _0x29b3ef = _0x43edf9 * 100;
      let _0x12df24 = _0x183d34 * 100;
      let _0x579049 = _0x4369a1 * 100;
      let _0x24f5e2 = _0x3b2858 * 100;
      const _0x421b8e = document.getElementById("game_canvas");
      const _0x247e11 = _0x421b8e.getContext("2d");
      _0x247e11.font = "36px Baloo Paaji";
      _0x247e11.lineWidth = 7;
      _0x247e11.fillStyle = "#69a148";
      _0x247e11.strokeStyle = "black";
      _0x247e11.lineWidth = 6;
      _0x247e11.strokeText(_0x58d842 + "%", innerWidth / 2 - 370, innerHeight - 120);
      _0x247e11.fillText(_0x58d842 + "%", innerWidth / 2 - 370, innerHeight - 120);
      if (_0x12df24 !== 100) {
        _0x247e11.fillStyle = "#af352a";
        _0x247e11.strokeStyle = "black";
        _0x247e11.strokeText(_0x12df24 + "%", innerWidth / 2 - 60, innerHeight - 180);
        _0x247e11.fillText(_0x12df24 + "%", innerWidth / 2 - 60, innerHeight - 180);
      }
      _0x247e11.fillStyle = "#669bb1";
      _0x247e11.strokeStyle = "black";
      _0x247e11.strokeText(_0x29b3ef + "%", innerWidth / 2 + 110, innerHeight - 120);
      _0x247e11.fillText(_0x29b3ef + "%", innerWidth / 2 + 110, innerHeight - 120);
      _0x247e11.fillStyle = "#074a87";
      _0x247e11.strokeStyle = "black";
      _0x247e11.strokeText( _0x579049 + "%", innerWidth / 2 + 350, innerHeight - 120);
      _0x247e11.fillText(_0x579049 + "%", innerWidth / 2 + 350, innerHeight - 120);
      _0x247e11.fillStyle = "#af352a";
      _0x247e11.strokeStyle = "black";
      _0x247e11.strokeText(_0x24f5e2 + "%", innerWidth / 2 - 130, innerHeight - 120);
      _0x247e11.fillText(_0x24f5e2 + "%", innerWidth / 2 - 130, innerHeight - 120);
      _0x247e11.restore();
    }
  }
  let lastExecutionGreen = 0;
  const debounceDelayGreen = 1000;
  let debounceActive = false;
  function Z() {
    requestAnimationFrame(Z);
    const _0x344f1 = document.getElementById("game_canvas").getContext("2d");
    let _0x5728e7 = b();
    if (_0x5728e7 && p() === true) {
      let _0x3d7945 = Object.values(c)[36];
      const _0xeac712 = Math.floor(11 - (Date.now() - ba.healtimer) / 1000);
      const _0x3c5439 = Date.now();
      const _0x2efd0f = Math.floor(11 - (Date.now() - ba.healtimer) / 1000) + "s";
      const _0x27d025 = Math.round(Math.floor(11 - (Date.now() - ba.healtimer) / 500) / 2) + "s";
      _0x344f1.save();
      _0x344f1.beginPath();
      _0x344f1.lineWidth = 7;
      _0x344f1.fillStyle = "red";
      _0x344f1.strokeStyle = "black";
      _0x344f1.font = "34px Baloo Paaji";
      _0x344f1.strokeText(_0x2efd0f, innerWidth / 2 - 245, innerHeight - 90);
      _0x344f1.fillText(_0x2efd0f, innerWidth / 2 - 245, innerHeight - 90);
      _0x344f1.restore();
      _0x344f1.save();
      _0x344f1.beginPath();
      _0x344f1.lineWidth = 7;
      _0x344f1.fillStyle = "red";
      _0x344f1.strokeStyle = "black";
      _0x344f1.font = "34px Baloo Paaji";
      _0x344f1.strokeText(_0x27d025, innerWidth / 2, innerHeight - 90);
      _0x344f1.fillText(_0x27d025, innerWidth / 2, innerHeight - 90);
      _0x344f1.restore();
    }
  }
  const XrayOn = 0;
  function Xray() {
    requestAnimationFrame(Xray);
    let _0x2512a9 = b();
    if (d.Xray.enabled && p() === true && _0x2512a9) {
      let _0x523002 = 1;
      var _0x4822cb = document.getElementById("game_canvas");
      var _0x14afc3 = _0x4822cb.getContext("2d");
      _0x14afc3.drawImage = new Proxy(_0x14afc3.drawImage, {
        apply() {
          if (d.Xray.enabled) {
            arguments[1].globalAlpha = 0.5;
          }
          return Reflect.apply(...arguments);
        }
      });
    }
  }
  function FeedMode2() {
    let _0x5cb676 = b();
    if (_0x5cb676 && p() === true && d.NewAutoFeed.mode2 && k() < d.NewAutoFeed.FeedInterval) {
      const _0xcfe2dd = [110, 117];
      for (const _0x39431f of _0xcfe2dd) {
        if (g(_0x39431f)) {
          f([aa.equip, _0x39431f]);
        }
      }
    }
  }
  function PlayzMusic() {
    requestAnimationFrame(PlayzMusic);
    if (d.Music.enabled) {}
  }
  function sendToDiscord(_0x14708c) {
    GM.xmlHttpRequest({
      method: "POST",
      url: d.AFKMODE.webhook,
      headers: {
        "Content-Type": "application/json"
      },
      data: JSON.stringify({
        content: _0x14708c
      }),
      onload: function (_0x52f734) {
        console.log("Message sent to Discord:", _0x52f734.responseText);
      }
    });
  }
  function AfkHook() {
    let _0x35bd94 = b();
    if (_0x35bd94 && d.AFKMODE.enabled && d.AFKMODE.webhook !== "none") {
      let _0x59042a = Health();
      let _0x526e17 = GaugeOxygen();
      let _0x42904f = Cold();
      let _0x4309b2 = k();
      let _0x31e144 = GaugeCold();
      let _0x45beba = _0x59042a * 100;
      let _0x406e97 = _0x31e144 * 100;
      let _0x230aa5 = _0x526e17 * 100;
      let _0x1eff50 = _0x42904f * 100;
      let _0x13eb6d = _0x4309b2 * 100;
      if (p() === true && _0x59042a < 0.8 && d.AFKMODE.everyone) {
        sendToDiscord("-------------\nAFK Mode 🤖\n-------------\n💚 HP: **" + _0x45beba + "**\n🥩 Food: **" + _0x13eb6d + "**\n🍼 Water: **" + _0x1eff50 + "**\n⛄ Cold: **" + _0x406e97 + "**\n💡 Oxygen: **" + _0x230aa5 + "** \n@everyone");
      } else if (p() === true) {
        sendToDiscord("-------------\nAFK Mode 🤖\n-------------\n💚 HP: **" + _0x45beba + "**\n🥩 Food: **" + _0x13eb6d + "**\n🍼 Water: **" + _0x1eff50 + "**\n⛄ Cold: **" + _0x406e97 + "**\n💡 Oxygen: **" + _0x230aa5 + "** ");
      } else {
        sendToDiscord("-------------\nAFK Mode Died 💀\n-------------\n💚 HP: **" + _0x45beba + "**\n🥩 Food: **" + _0x13eb6d + "**\n🍼 Water: **" + _0x1eff50 + "**\n⛄ Cold: **" + _0x406e97 + "**\n💡 Oxygen: **" + _0x230aa5 + "**\nScore " + _0x35bd94[3] + "\nScore " + _0x35bd94[4] + "\nScore " + _0x35bd94[5] + "\nScore " + _0x35bd94[6] + "\nScore " + _0x35bd94[7] + "\nScore " + _0x35bd94[8]);
      }
    }
  }
  let lastExecution = 0;
  const debounceDelay = 200;
  function TrashTalkW() {
    requestAnimationFrame(TrashTalkW);
    let _0x48f263 = b();
    if (d.TrashTalk.enabled && p() === true && _0x48f263) {
      f([15, "Dog"]);
      sleep(1000);
      f([15, "Mad cause Bad"]);
      sleep(1000);
      f(["Trashhh"]);
      sleep(1000);
    }
  }
  function $() {
    requestAnimationFrame($);
    if (d.NewAutoFeed.enabled && p() === true && k() < d.NewAutoFeed.FeedInterval && !window.AutoEatWait) {
      const _0x19615b = Date.now();
      if (_0x19615b - lastExecution > debounceDelay) {
        lastExecution = _0x19615b;
        unsafeWindow.AutoEatWait = true;
        const _0x26c636 = [110, 117];
        for (const _0x551cf7 of _0x26c636) {
          if (g(_0x551cf7)) {
            f([aa.equip, _0x551cf7]);
          }
        }
        setTimeout(() => {
          unsafeWindow.AutoEatWait = false;
        }, 500);
      }
    }
  }
  function blizzard() {
    let _0x45cc1f = Object.values(c)[36];
    let _0x217961;
    let _0xb003a4;
    let _0x5a70fc;
    let _0x10938c = 0;
    for (let _0x467383 in c) {
      _0x10938c++;
      if (_0x10938c === 37) {
        _0x45cc1f = c[_0x467383];
      }
      if (_0x10938c === 47) {
        _0xb003a4 = c[_0x467383];
      }
      if (_0x10938c === 48) {
        let _0x222e97 = 0;
        for (let _0x33b073 in c[_0x467383]) {
          _0x222e97++;
          if (_0x222e97 === 2) {
            _0x217961 = c[_0x467383];
            unsafeWindow.blizz1 = _0x217961;
            _0x5a70fc = [_0x33b073];
          }
        }
        break;
      }
    }
    requestAnimationFrame(blizzard);
    var _0x491968 = -8;
    const _0x259bf2 = document.getElementById("game_canvas");
    const _0x278105 = _0x259bf2.getContext("2d");
    _0x278105.save();

    if (d.sandstorm && _0x217961[_0x5a70fc]) {
      _0x278105.save();
      _0x278105.drawImage(e, _0x45cc1f.translate.x, _0x45cc1f.translate.y + _0x491968);
      _0x491968 += 70;
    }
    if (d.sandstorm && _0xb003a4[_0x5a70fc]) {
      _0x278105.save();
      _0x278105.drawImage(o, _0x45cc1f.translate.x, _0x45cc1f.translate.y + _0x491968);
      _0x491968 += 70;
    }
  }
  function _() {
    requestAnimationFrame(_);
    let _0x2c5c8f = Object.keys(c)[47];
    let _0x17e632 = Object.keys(c)[46];
    let _0xdaeeb0 = Object.keys(d)[1];
    let _0x11e873 = Object.values(c)[36];
    var _0x55a553 = -8;
    const _0x4a555b = document.getElementById("game_canvas").getContext("2d");
    if (p() === true && c[_0x2c5c8f][_0xdaeeb0]) {
      _0x4a555b.save();
      _0x4a555b.drawImage(e, _0xdaeeb0.translate.x, _0xdaeeb0.translate.y + _0x55a553);
      _0x55a553 += 70;
    }
    if (p() === true && c[_0x2c5c8f][_0xdaeeb0]) {
      _0x4a555b.save();
      _0x4a555b.drawImage(o, _0xdaeeb0.translate.x, _0xdaeeb0.translate.y + _0x55a553);
      _0x55a553 += 70;
    }
  }
  function ea() {
    requestAnimationFrame(ea);
    document.getElementById("game_canvas").getContext("2d");
    if (s.sign === undefined) {
      const _0x58227d = document.getElementById("game_canvas").getContext("2d");
      _0x58227d.save();
      _0x58227d.beginPath();
      _0x58227d.lineWidth = 6;
      _0x58227d.fillStyle = "red";
      _0x58227d.strokeStyle = "black";
      _0x58227d.font = "22px Baloo Paaji";
      _0x58227d.strokeText("chest infos not gona work. refresh page", 3, 500);
      _0x58227d.fillText("chest infos not gona work. refresh page", 3, 500);
      _0x58227d.restore();
    }
  }
  function fa() {
    requestAnimationFrame(fa);
    try {
      unsafeWindow.ctx = document.getElementById("game_canvas").getContext("2d");
    } catch (_0x5b850a) {
      return;
    }
    let _0x3853cc = 22.5;
    for (hack in d) {
      if (d[hack].enabled && d[hack].key) {
        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = 6;
        ctx.fillStyle = "red";
        ctx.strokeStyle = "black";
        ctx.font = "22px Baloo Paaji";
        ctx.strokeText(hack, 3, _0x3853cc);
        ctx.fillText(hack, 3, _0x3853cc);
        ctx.restore();
        _0x3853cc += 22.5;
      }
    }
  }
  const countdowns = {};
  const lastUpdateTime = {};
  let FireTime = 255;
  const FireDuration = 255;
  const DecrementRate = 0.01;
  function FireInfo() {
    const _0xe95e1f = document.getElementById("game_canvas");
    const _0x37c6f7 = _0xe95e1f.getContext("2d");
    requestAnimationFrame(FireInfo);
    if (d.FireInf && p() === true) {
      let _0x34af00 = h()[1];
      let _0xa429d2 = u()[0];
      let _0x5030ef = u()[1];
      _0x37c6f7.save();
      _0x37c6f7.beginPath();
      _0x37c6f7.lineWidth = 6;
      _0x37c6f7.fillStyle = "red";
      _0x37c6f7.strokeStyle = "black";
      _0x37c6f7.font = "22px Baloo Paaji";
      for (let _0x1df8e5 = 0; _0x1df8e5 < _0x34af00.length; _0x1df8e5++) {
        const _0x42cc01 = _0x34af00[_0x1df8e5];
        let _0x2af1ee = _0xa429d2 + _0x42cc01.x;
        let _0x3f0105 = _0x5030ef + _0x42cc01.y;
        _0x37c6f7.strokeText(_0x42cc01.ⲆΔᐃⵠ, _0x2af1ee, _0x3f0105);
        _0x37c6f7.fillText(_0x42cc01.ⲆΔᐃⵠ, _0x2af1ee, _0x3f0105);
      }
      _0x37c6f7.restore();
      if (FireTime > 0) {
        FireTime -= DecrementRate;
        FireTime = Math.max(FireTime, 0);
      }
    }
  }
  function PlayerTracers() {
    const _0x3ed2ee = document.getElementById("game_canvas");
    const _0x5731b2 = _0x3ed2ee.getContext("2d");
    requestAnimationFrame(PlayerTracers);
    let _0x28d55f = b();
    if (d.PlayerT && _0x28d55f && p() === true) {
      let _0x452aa8 = h()[0];
      let _0x5759a3 = u()[0];
      let _0x3d26ef = u()[1];
      for (let _0x221114 = 0; _0x221114 < _0x452aa8.length; _0x221114++) {
        let _0x5b882d = _0x452aa8[_0x221114];
        let _0x49aa1b = _0x5759a3 + _0x5b882d.x;
        let _0x2a175e = _0x3d26ef + _0x5b882d.y;
        _0x5731b2.beginPath();
        _0x5731b2.moveTo(_0x49aa1b, _0x2a175e);
        _0x5731b2.lineTo(_0x28d55f.x + _0x5759a3, _0x28d55f.y + _0x3d26ef);
        _0x5731b2.strokeStyle = d.Tracers.Players;
        _0x5731b2.lineWidth = 3;
        _0x5731b2.stroke();
      }
    }
  }
  function BoxTracers() {
    const _0x37fd14 = document.getElementById("game_canvas");
    const _0x3bad36 = _0x37fd14.getContext("2d");
    requestAnimationFrame(BoxTracers);
    let _0x125663 = b();
    if (d.BoxT && _0x125663 && p() === true) {
      let _0x271a8f = h()[82];
      let _0xecaa76 = h()[86];
      let _0x3d4123 = u()[0];
      let _0x7fcf66 = u()[1];
      for (let _0x36fb93 = 0; _0x36fb93 < _0x271a8f.length; _0x36fb93++) {
        let _0x10b915 = _0x271a8f[_0x36fb93];
        let _0x45e866 = _0x3d4123 + _0x10b915.x;
        let _0x331efb = _0x7fcf66 + _0x10b915.y;
        _0x3bad36.beginPath();
        _0x3bad36.moveTo(_0x45e866, _0x331efb);
        _0x3bad36.lineTo(_0x125663.x + _0x3d4123, _0x125663.y + _0x7fcf66);
        _0x3bad36.strokeStyle = d.Tracers.Boxs;
        _0x3bad36.lineWidth = 3;
        _0x3bad36.stroke();
      }
      for (let _0x156c8f = 0; _0x156c8f < _0xecaa76.length; _0x156c8f++) {
        let _0x913b35 = _0xecaa76[_0x156c8f];
        let _0x375134 = _0x3d4123 + _0x913b35.x;
        let _0x750d91 = _0x7fcf66 + _0x913b35.y;
        _0x3bad36.beginPath();
        _0x3bad36.moveTo(_0x375134, _0x750d91);
        _0x3bad36.lineTo(_0x125663.x + _0x3d4123, _0x125663.y + _0x7fcf66);
        _0x3bad36.strokeStyle = d.Tracers.Boxs;
        _0x3bad36.lineWidth = 3;
        _0x3bad36.stroke();
      }
    }
  }
  function Winter() {
    const _0x16ecbb = document.getElementById("game_canvas");
    const _0x4af46d = _0x16ecbb.getContext("2d");
    requestAnimationFrame(Winter);
    let _0x5998cc = b();
    if (d.Winter && _0x5998cc && p() === true) {
      let _0x300a42 = h()[62];
      let _0x589922 = u()[0];
      let _0x57bef2 = u()[1];
      let _0x2c0998 = h()[63];
      let _0x2e837b = h()[88];
      let _0xd6b226 = h()[72];
      for (let _0x204826 = 0; _0x204826 < _0xd6b226.length; _0x204826++) {
        let _0x53121f = _0xd6b226[_0x204826];
        let _0x53eb9c = _0x589922 + _0x53121f.x;
        let _0x7b96b = _0x57bef2 + _0x53121f.y;
        _0x4af46d.beginPath();
        _0x4af46d.moveTo(_0x53eb9c, _0x7b96b);
        _0x4af46d.lineTo(_0x5998cc.x + _0x589922, _0x5998cc.y + _0x57bef2);
        _0x4af46d.strokeStyle = "cyan";
        _0x4af46d.lineWidth = 3;
        _0x4af46d.stroke();
        if (d.ShowTexts) {
          _0x4af46d.font = "22px Baloo Paaji";
          _0x4af46d.fillStyle = "white";
          _0x4af46d.strokeStyle = "black";
          _0x4af46d.lineWidth = 2;
          _0x4af46d.strokeText("Dragon", _0x53eb9c, _0x7b96b);
          _0x4af46d.fillText("Dragon", _0x53eb9c, _0x7b96b);
        }
      }
      for (let _0x574a51 = 0; _0x574a51 < _0x2e837b.length; _0x574a51++) {
        let _0x3e75e7 = _0x2e837b[_0x574a51];
        let _0x136271 = _0x589922 + _0x3e75e7.x;
        let _0x14c565 = _0x57bef2 + _0x3e75e7.y;
        _0x4af46d.beginPath();
        _0x4af46d.moveTo(_0x136271, _0x14c565);
        _0x4af46d.lineTo(_0x5998cc.x + _0x589922, _0x5998cc.y + _0x57bef2);
        _0x4af46d.strokeStyle = "cyan";
        _0x4af46d.lineWidth = 3;
        _0x4af46d.stroke();
        if (d.ShowTexts) {
          _0x4af46d.font = "22px Baloo Paaji";
          _0x4af46d.fillStyle = "white";
          _0x4af46d.strokeStyle = "black";
          _0x4af46d.lineWidth = 2;
          _0x4af46d.strokeText("Penguin", _0x136271, _0x14c565);
          _0x4af46d.fillText("Penguin", _0x136271, _0x14c565);
        }
      }
      for (let _0x3a5cd3 = 0; _0x3a5cd3 < _0x2c0998.length; _0x3a5cd3++) {
        let _0x55b626 = _0x2c0998[_0x3a5cd3];
        let _0x1c0696 = _0x589922 + _0x55b626.x;
        let _0x3c9b16 = _0x57bef2 + _0x55b626.y;
        _0x4af46d.beginPath();
        _0x4af46d.moveTo(_0x1c0696, _0x3c9b16);
        _0x4af46d.lineTo(_0x5998cc.x + _0x589922, _0x5998cc.y + _0x57bef2);
        _0x4af46d.strokeStyle = "cyan";
        _0x4af46d.lineWidth = 3;
        _0x4af46d.stroke();
        if (d.ShowTexts) {
          _0x4af46d.font = "22px Baloo Paaji";
          _0x4af46d.fillStyle = "white";
          _0x4af46d.strokeStyle = "black";
          _0x4af46d.lineWidth = 2;
          _0x4af46d.strokeText("Bear", _0x1c0696, _0x3c9b16);
          _0x4af46d.fillText("Bear", _0x1c0696, _0x3c9b16);
        }
      }
      for (let _0x5c14d3 = 0; _0x5c14d3 < _0x300a42.length; _0x5c14d3++) {
        let _0x8f1133 = _0x300a42[_0x5c14d3];
        let _0x1e043b = _0x589922 + _0x8f1133.x;
        let _0x3c8dda = _0x57bef2 + _0x8f1133.y;
        _0x4af46d.beginPath();
        _0x4af46d.moveTo(_0x1e043b, _0x3c8dda);
        _0x4af46d.lineTo(_0x5998cc.x + _0x589922, _0x5998cc.y + _0x57bef2);
        _0x4af46d.strokeStyle = "cyan";
        _0x4af46d.lineWidth = 3;
        _0x4af46d.stroke();
        if (d.ShowTexts) {
          _0x4af46d.font = "22px Baloo Paaji";
          _0x4af46d.fillStyle = "white";
          _0x4af46d.strokeStyle = "black";
          _0x4af46d.lineWidth = 2;
          _0x4af46d.strokeText("Fox", _0x1e043b, _0x3c8dda);
          _0x4af46d.fillText("Fox", _0x1e043b, _0x3c8dda);
        }
      }
    }
  }
  function AloveraTracers() {
    const _0x3fdf44 = document.getElementById("game_canvas");
    const _0x5dc1fa = _0x3fdf44.getContext("2d");
    requestAnimationFrame(AloveraTracers);
    let _0x50f510 = b();
    if (d.Alovera && _0x50f510 && p() === true) {
      let _0x459265 = h()[89];
      let _0x1d1d51 = u()[0];
      let _0x13e556 = u()[1];
      for (let _0x389309 = 0; _0x389309 < _0x459265.length; _0x389309++) {
        let _0x5ab5de = _0x459265[_0x389309];
        let _0x2e84e = _0x1d1d51 + _0x5ab5de.x;
        let _0x25cebb = _0x13e556 + _0x5ab5de.y;
        _0x5dc1fa.beginPath();
        _0x5dc1fa.moveTo(_0x2e84e, _0x25cebb);
        _0x5dc1fa.lineTo(_0x50f510.x + _0x1d1d51, _0x50f510.y + _0x13e556);
        _0x5dc1fa.strokeStyle = d.Tracers.Alovera;
        _0x5dc1fa.lineWidth = 2;
        _0x5dc1fa.stroke();
        _0x5dc1fa.font = "22px Baloo Paaji";
        _0x5dc1fa.fillStyle = "lime";
        _0x5dc1fa.strokeStyle = "black";
        _0x5dc1fa.lineWidth = 2;
        _0x5dc1fa.strokeText("Aloevera Amount: " + _0x459265.length, 5, 423);
        _0x5dc1fa.fillText("Aloevera Amount: " + _0x459265.length, 5, 423);
      }
    }
  }
  function Sea() {
    const _0x49daa2 = document.getElementById("game_canvas");
    const _0x465aa0 = _0x49daa2.getContext("2d");
    requestAnimationFrame(Sea);
    let _0x2a4c5d = b();
    if (d.Sea && _0x2a4c5d && p() === true) {
      let _0x31e4bf = h()[66];
      let _0x1f004f = h()[65];
      let _0x22b754 = h()[81];
      let _0x51d6ac = u()[0];
      let _0x213262 = u()[1];
      for (let _0x589eae = 0; _0x589eae < _0x22b754.length; _0x589eae++) {
        let _0x2b757a = _0x22b754[_0x589eae];
        let _0x5d05d4 = _0x51d6ac + _0x2b757a.x;
        let _0x3b4af1 = _0x213262 + _0x2b757a.y;
        _0x465aa0.beginPath();
        _0x465aa0.moveTo(_0x5d05d4, _0x3b4af1);
        _0x465aa0.lineTo(_0x2a4c5d.x + _0x51d6ac, _0x2a4c5d.y + _0x213262);
        _0x465aa0.strokeStyle = "yellow";
        _0x465aa0.lineWidth = 3;
        _0x465aa0.stroke();
      }
      for (let _0x31629c = 0; _0x31629c < _0x1f004f.length; _0x31629c++) {
        let _0x55ebbb = _0x1f004f[_0x31629c];
        let _0x41b01e = _0x51d6ac + _0x55ebbb.x;
        let _0x4fce64 = _0x213262 + _0x55ebbb.y;
        _0x465aa0.beginPath();
        _0x465aa0.moveTo(_0x41b01e, _0x4fce64);
        _0x465aa0.lineTo(_0x2a4c5d.x + _0x51d6ac, _0x2a4c5d.y + _0x213262);
        _0x465aa0.strokeStyle = "black";
        _0x465aa0.lineWidth = 3;
        _0x465aa0.stroke();
      }
      for (let _0x465456 = 0; _0x465456 < _0x31e4bf.length; _0x465456++) {
        let _0x4ecd9b = _0x31e4bf[_0x465456];
        let _0x1ffe38 = _0x51d6ac + _0x4ecd9b.x;
        let _0x11d7a1 = _0x213262 + _0x4ecd9b.y;
        _0x465aa0.beginPath();
        _0x465aa0.moveTo(_0x1ffe38, _0x11d7a1);
        _0x465aa0.lineTo(_0x2a4c5d.x + _0x51d6ac, _0x2a4c5d.y + _0x213262);
        _0x465aa0.strokeStyle = "magenta";
        _0x465aa0.lineWidth = 3;
        _0x465aa0.stroke();
        if (d.ShowTexts) {
          _0x465aa0.font = "22px Baloo Paaji";
          _0x465aa0.fillStyle = "magenta";
          _0x465aa0.strokeStyle = "black";
          _0x465aa0.lineWidth = 2;
          _0x465aa0.strokeText("Kraken", _0x1ffe38, _0x11d7a1);
          _0x465aa0.fillText("Kraken", _0x1ffe38, _0x11d7a1);
        }
        _0x465aa0.strokeText("Kraken Amount: " + _0x31e4bf.length, 5, 446);
        _0x465aa0.fillText("Kraken Amount: " + _0x31e4bf.length, 5, 446);
      }
    }
  }
  function Desert() {
    const _0x490dbe = document.getElementById("game_canvas");
    const _0x1def62 = _0x490dbe.getContext("2d");
    requestAnimationFrame(Desert);
    let _0x49d282 = b();
    if (d.Desert && _0x49d282 && p() === true) {
      let _0x4bed59 = h()[76];
      let _0x11dfe1 = u()[0];
      let _0x26c05f = u()[1];
      for (let _0x1c87c5 = 0; _0x1c87c5 < _0x4bed59.length; _0x1c87c5++) {
        let _0x1e57a5 = _0x4bed59[_0x1c87c5];
        let _0x4d58c8 = _0x11dfe1 + _0x1e57a5.x;
        let _0x30af9b = _0x26c05f + _0x1e57a5.y;
        _0x1def62.beginPath();
        _0x1def62.moveTo(_0x4d58c8, _0x30af9b);
        _0x1def62.lineTo(_0x49d282.x + _0x11dfe1, _0x49d282.y + _0x26c05f);
        _0x1def62.strokeStyle = "black";
        _0x1def62.lineWidth = 3;
        _0x1def62.stroke();
        if (d.ShowTexts) {
          _0x1def62.font = "22px Baloo Paaji";
          _0x1def62.fillStyle = "white";
          _0x1def62.strokeStyle = "black";
          _0x1def62.lineWidth = 2;
          _0x1def62.strokeText("SandWorm", _0x4d58c8, _0x30af9b);
          _0x1def62.fillText("SandWorm", _0x4d58c8, _0x30af9b);
        }
        _0x1def62.strokeText("SandWorm Amount: " + _0x4bed59.length, 5, 400);
        _0x1def62.fillText("SandWorm Amount: " + _0x4bed59.length, 5, 400);
      }
    }
  }
  let lastExecution2 = 0;
  const debounceDelay2 = 200;
  function AutoIce() {
    let _0x349c32 = b();
    let _0x2a6f97 = GaugeCold();
    let _0x3530ea = _0x2a6f97 * 100;
    if (d.AutoIce.enabled && _0x2a6f97.toFixed(1) > d.AutoIce.Interval && p() === true) {
      const _0x1d4f10 = Date.now();
      if (_0x1d4f10 - lastExecution2 > debounceDelay2) {
        lastExecution2 = _0x1d4f10;
        if (g(142)[0]) {
          f([34, 142]);
        }
      }
    }
  }
  function DurabilityInfo() {
    requestAnimationFrame(DurabilityInfo);
    const _0x440688 = [12, 13, 14, 15, 16, 19, 20, 21, 23, 52];
    for (let _0x2be675 = 0; _0x2be675 < _0x440688.length; ++_0x2be675) {
      const _0x21106e = _0x440688[_0x2be675];
      const _0x43550c = h()[_0x21106e];
      if (p() === true) {
        for (let _0x507dc9 = 0; _0x507dc9 < _0x43550c.length; _0x507dc9++) {
          const _0x100285 = _0x43550c[_0x507dc9];
          c.save();
          c.lineWidth = 8;
          c.font = "26px Baloo Paaji";
          c.strokeStyle = "#000";
          c.fillStyle = (_0x100285.info & 255) > 0 ? "lime" : "white";
          c.strokeText(_0x100285.info, _0x100285.x - 20 + u()[0], _0x100285.y + u()[1]);
          c.fillText(_0x100285.info, _0x100285.x - 20 + u()[0], _0x100285.y + u()[1]);
          c.restore();
        }
        for (let _0x272046 = 0; _0x272046 < _0x43550c.length; ++_0x272046) {
          const _0x5777ab = _0x43550c[_0x272046];
          c.save();
          c.lineWidth = 8;
          c.font = "26px Baloo Paaji";
          c.strokeStyle = "#000";
          c.fillStyle = _0x5777ab.info >> 8 > 0 ? "yellow" : "white";
          c.strokeText(_0x5777ab.log, _0x5777ab.x - 20 + u()[0], _0x5777ab.y + 20 + u()[1]);
          c.fillText(_0x5777ab.log, _0x5777ab.x - 20 + u()[0], _0x5777ab.y + 20 + u()[1]);
          c.restore();
        }
      }
    }
  }
  function PlayersOnTop() {
    const _0x440b43 = document.getElementById("game_canvas");
    const _0x573f24 = _0x440b43.getContext("2d");
    requestAnimationFrame(PlayersOnTop);
    let _0x465cc4 = b();
    function _0x582f2d(_0x195492, _0x206e1e, _0x326a75) {
      let _0x5ef93b = Object.keys(ca)[14];
      let _0x7b858f = Object.values(ca[_0x5ef93b])[1];
      const _0x38f24b = document.getElementById("game_canvas").getContext("2d");
      if (ca.transition) {
        _0x38f24b.globalAlpha = 1;
        _0x195492[K](_0x206e1e, _0x326a75);
        ca.time = ca.time ? 0 : 1;
        _0x38f24b.globalAlpha = 1 - _0x7b858f;
        _0x195492[K](_0x206e1e, _0x326a75);
        ca.time = ca.time ? 0 : 1;
        _0x38f24b.globalAlpha = 1;
      } else {
        _0x195492[K](_0x206e1e, _0x326a75);
      }
    }
    if (d.PlayersOnTopEnabled) {
      let _0x3d8128 = h()[0];
      for (let _0x29564c = 0; _0x29564c < _0x3d8128.length; _0x29564c++) {
        let _0xadc080 = _0x3d8128[_0x29564c];
        _0x582f2d(_0xadc080, 100, 250);
      }
    }
  }
  function Mobs() {
    const _0x494503 = document.getElementById("game_canvas");
    const _0x136eeb = _0x494503.getContext("2d");
    requestAnimationFrame(Mobs);
    let _0x20f879 = b();
    if (d.Wolf && _0x20f879 && p() === true) {
      let _0x2fbba7 = h()[60];
      let _0x207b7b = h()[61];
      let _0x2a5311 = h()[70];
      let _0x408cea = h()[80];
      let _0xd18d12 = u()[0];
      let _0x42e174 = u()[1];
      for (let _0x16e87b = 0; _0x16e87b < _0x408cea.length; _0x16e87b++) {
        let _0x1ab0af = _0x408cea[_0x16e87b];
        let _0x9d8afb = _0xd18d12 + _0x1ab0af.x;
        let _0x4ba9a1 = _0x42e174 + _0x1ab0af.y;
        _0x136eeb.beginPath();
        _0x136eeb.moveTo(_0x9d8afb, _0x4ba9a1);
        _0x136eeb.lineTo(_0x20f879.x + _0xd18d12, _0x20f879.y + _0x42e174);
        _0x136eeb.strokeStyle = "black";
        _0x136eeb.lineWidth = 3;
        if (d.ShowTexts) {
          _0x136eeb.stroke();
          _0x136eeb.font = "22px Baloo Paaji";
          _0x136eeb.fillStyle = "white";
          _0x136eeb.strokeStyle = "black";
          _0x136eeb.lineWidth = 2;
          _0x136eeb.strokeText("Rabbit", _0x9d8afb, _0x4ba9a1);
          _0x136eeb.fillText("Rabbit", _0x9d8afb, _0x4ba9a1);
        }
      }
      for (let _0x315746 = 0; _0x315746 < _0x2a5311.length; _0x315746++) {
        let _0x5ac679 = _0x2a5311[_0x315746];
        let _0x48c965 = _0xd18d12 + _0x5ac679.x;
        let _0x3c4b80 = _0x42e174 + _0x5ac679.y;
        _0x136eeb.beginPath();
        _0x136eeb.moveTo(_0x48c965, _0x3c4b80);
        _0x136eeb.lineTo(_0x20f879.x + _0xd18d12, _0x20f879.y + _0x42e174);
        _0x136eeb.strokeStyle = "black";
        _0x136eeb.lineWidth = 3;
        if (d.ShowTexts) {
          _0x136eeb.stroke();
          _0x136eeb.font = "22px Baloo Paaji";
          _0x136eeb.fillStyle = "white";
          _0x136eeb.strokeStyle = "black";
          _0x136eeb.lineWidth = 2;
          _0x136eeb.strokeText("Boar", _0x48c965, _0x3c4b80);
          _0x136eeb.fillText("Boar", _0x48c965, _0x3c4b80);
        }
      }
      for (let _0x18ba16 = 0; _0x18ba16 < _0x2fbba7.length; _0x18ba16++) {
        let _0x38a714 = _0x2fbba7[_0x18ba16];
        let _0x1c836d = _0xd18d12 + _0x38a714.x;
        let _0x4b3019 = _0x42e174 + _0x38a714.y;
        _0x136eeb.beginPath();
        _0x136eeb.moveTo(_0x1c836d, _0x4b3019);
        _0x136eeb.lineTo(_0x20f879.x + _0xd18d12, _0x20f879.y + _0x42e174);
        _0x136eeb.strokeStyle = "black";
        _0x136eeb.lineWidth = 3;
        if (d.ShowTexts) {
          _0x136eeb.stroke();
          _0x136eeb.font = "22px Baloo Paaji";
          _0x136eeb.fillStyle = "white";
          _0x136eeb.strokeStyle = "black";
          _0x136eeb.lineWidth = 2;
          _0x136eeb.strokeText("Wolf", _0x1c836d, _0x4b3019);
          _0x136eeb.fillText("Wolf", _0x1c836d, _0x4b3019);
        }
      }
      for (let _0x5b056d = 0; _0x5b056d < _0x207b7b.length; _0x5b056d++) {
        let _0x283c1b = _0x207b7b[_0x5b056d];
        let _0x32620b = _0xd18d12 + _0x283c1b.x;
        let _0x2ee147 = _0x42e174 + _0x283c1b.y;
        _0x136eeb.beginPath();
        _0x136eeb.moveTo(_0x32620b, _0x2ee147);
        _0x136eeb.lineTo(_0x20f879.x + _0xd18d12, _0x20f879.y + _0x42e174);
        _0x136eeb.strokeStyle = "black";
        _0x136eeb.lineWidth = 3;
        _0x136eeb.stroke();
        if (d.ShowTexts) {
          _0x136eeb.font = "22px Baloo Paaji";
          _0x136eeb.fillStyle = "white";
          _0x136eeb.strokeStyle = "black";
          _0x136eeb.lineWidth = 2;
          _0x136eeb.strokeText("Spider", _0x32620b, _0x2ee147);
          _0x136eeb.fillText("Spider", _0x32620b, _0x2ee147);
        }
      }
    }
  }
  function ga() {
    requestAnimationFrame(ga);
    const _0x31e12f = Date.now();
    let _0x221433 = b();
    if (_0x31e12f - d.nows.autoextractortake > 100) {
      [24, 25, 26, 27, 28, 29].forEach(_0x188670 => {
        var _0x988469;
        var _0x589dfb;
        var _0x4cced1 = h()[_0x188670];
        if (p() === true && m() === false && d.ExtractorSteal.enabled) {
          for (let _0x429777 = 0; _0x429777 < _0x4cced1.length; ++_0x429777) {
            _0x988469 = _0x221433;
            _0x589dfb = _0x4cced1[_0x429777];
            if (Math.sqrt((_0x589dfb.x - _0x988469.x) * (_0x589dfb.x - _0x988469.x) + (_0x589dfb.y - _0x988469.y) * (_0x589dfb.y - _0x988469.y)) <= 330) {
              f([aa.extTake, _0x4cced1[_0x429777][w], _0x4cced1[_0x429777].id, _0x188670]);
            }
          }
        }
      });
      d.nows.autoextractortake = _0x31e12f;
    }
  }
  function ha() {
    requestAnimationFrame(ha);
    const _0x5aee54 = Date.now();
    let _0x5929d5 = b();
    if (_0x5aee54 - d.nows.autoextractorput > 100) {
      [24, 25, 26, 27, 28, 29].forEach(_0x1484d3 => {
        var _0x2b3eba;
        var _0x154a55;
        var _0x46afdf = h()[_0x1484d3];
        if (p() === true && m() === false && d.ExtractorPut.enabled) {
          for (let _0x4d4a84 = 0; _0x4d4a84 < _0x46afdf.length; ++_0x4d4a84) {
            _0x2b3eba = _0x5929d5;
            _0x154a55 = _0x46afdf[_0x4d4a84];
            if (Math.sqrt((_0x154a55.x - _0x2b3eba.x) * (_0x154a55.x - _0x2b3eba.x) + (_0x154a55.y - _0x2b3eba.y) * (_0x154a55.y - _0x2b3eba.y)) <= 330) {
              f([aa.extPut, 68, _0x46afdf[_0x4d4a84][w], _0x46afdf[_0x4d4a84].id, _0x1484d3]);
            }
          }
        }
      });
      d.nows.autoextractorput = _0x5aee54;
    }
  }
  function ia() {
    let _0x22b602 = b();
    if (p() === true && m() === false && d.AutoSteal.enabled) {
      var _0x2feb86 = h()[11];
      for (let _0xda4656 = 0; _0xda4656 < _0x2feb86.length; ++_0xda4656) {
        _0x4a10fc = _0x22b602;
        _0x3bd218 = _0x2feb86[_0xda4656];
        if (Math.sqrt((_0x3bd218.x - _0x4a10fc.x) * (_0x3bd218.x - _0x4a10fc.x) + (_0x3bd218.y - _0x4a10fc.y) * (_0x3bd218.y - _0x4a10fc.y)) <= 330) {
          f([aa.chestTake, _0x2feb86[_0xda4656][w], _0x2feb86[_0xda4656].id]);
        }
      }
    }
    var _0x4a10fc;
    var _0x3bd218;
  }
  function ja(_0x27654c, _0x5e0252, _0x59bd56, _0x743eae, _0xa41521, _0x19e2be, _0xd9f02f, _0x1d5831, _0x26b9ac, _0x3a9419) {
    if (_0x5e0252.tryLoad === undefined || _0x5e0252.tryLoad() === 1) {
      if (_0x3a9419 !== undefined) {
        _0x27654c.drawImage(_0x5e0252, _0x59bd56, _0x743eae, Math.max(1, _0xa41521), Math.max(1, _0x19e2be), _0xd9f02f, _0x1d5831, _0x26b9ac, _0x3a9419);
      } else if (_0x19e2be !== undefined) {
        _0x27654c.drawImage(_0x5e0252, _0x59bd56, _0x743eae, _0xa41521, _0x19e2be);
      } else {
        _0x27654c.drawImage(_0x5e0252, _0x59bd56, _0x743eae);
      }
    }
  }
  function ka() {
    requestAnimationFrame(ka);
    const _0x224091 = document.getElementById("game_canvas").getContext("2d");
    Object.keys(s)[44];
    let _0x5113d5 = h()[11];
    for (let _0x598b18 of _0x5113d5) {
      let _0x1b1178;
      let _0x3e7182;
      let _0x265a86 = Object.keys(s)[44];
      let _0xfc1ec0 = _0x598b18.action / 2 - 1;
      let _0x5c9bd4 = s[_0x265a86][_0xfc1ec0]?.info;
      if (_0x598b18.action) {
        _0x3e7182 = Object.keys(_0x5c9bd4)[2];
        _0x1b1178 = _0x5c9bd4[_0x3e7182][0];
        _0x224091.save();
        _0x224091.globalAlpha = 0.9;
        ja(_0x224091, _0x1b1178, u()[0] + _0x598b18.x - 25, u()[1] + _0x598b18.y - 25, 67, 52);
        _0x224091.globalAlpha = 1;
        _0x224091.font = "20px Baloo Paaji";
        _0x224091.strokeStyle = "black";
        _0x224091.lineWidth = 7;
        _0x224091.strokeText("x" + _0x598b18.info, u()[0] + _0x598b18.x - 12, u()[1] + _0x598b18.y + 35);
        _0x224091.fillStyle = "white";
        _0x224091.fillText("x" + _0x598b18.info, u()[0] + _0x598b18.x - 12, u()[1] + _0x598b18.y + 35);
        _0x224091.restore();
      }
    }
  }
  function la() {
    const _0x35f43a = b();
    const _0x4af181 = document.querySelector("canvas").getContext("2d");
    requestAnimationFrame(la);
    const _0x440503 = h()[29];
    if (_0x440503 !== undefined && _0x440503.length !== undefined && _0x440503.length !== 0) {
      if (p() === true && m() === false && d.AutoTotem.enabled) {
        for (let _0x84d655 = 0; _0x84d655 < _0x440503.length; ++_0x84d655) {
          _0x51fe4a = _0x35f43a;
          _0x47e85c = _0x440503[_0x84d655];
          if (Math.sqrt((_0x47e85c.x - _0x51fe4a.x) * (_0x47e85c.x - _0x51fe4a.x) + (_0x47e85c.y - _0x51fe4a.y) * (_0x47e85c.y - _0x51fe4a.y)) <= 300) {
            f([aa.joinTotem, _0x440503[_0x84d655][w], _0x440503[_0x84d655].id]);
          }
        }
      }
      var _0x51fe4a;
      var _0x47e85c;
      (function () {
        for (let _0x5c9afa = 0; _0x5c9afa < _0x440503.length; ++_0x5c9afa) {
          const {
            x: _0x42a2e5,
            y: _0x507c13,
            info: _0x1f6c8f,
            id: _0x3ead6e
          } = _0x440503[_0x5c9afa];
          let _0x143a5f = h()[29][_0x5c9afa];
          _0x4af181.save();
          _0x4af181.lineWidth = 8;
          _0x4af181.font = "26px Baloo Paaji";
          _0x4af181.strokeStyle = "#000";
          _0x4af181.fillStyle = _0x143a5f.info >= 16 ? "red" : "lime";
          _0x4af181.strokeText(_0x1f6c8f >= 16 ? "L" : "U", _0x42a2e5 - 20 + u()[0], _0x507c13 + u()[1]);
          _0x4af181.fillText(_0x1f6c8f >= 16 ? "L" : "U", _0x42a2e5 - 20 + u()[0], _0x507c13 + u()[1]);
          const _0x511be8 = _0x143a5f.info >= 16 ? +_0x143a5f.info % 16 : +_0x143a5f.info;
          _0x4af181.font = "22px Baloo Paaji";
          _0x4af181.strokeStyle = "#000";
          _0x4af181.fillStyle = "white";
          _0x4af181.strokeText(_0x511be8, _0x143a5f.x - 20 + u()[0], _0x143a5f.y + u()[1] - 30);
          _0x4af181.fillText(_0x511be8, _0x143a5f.x - 20 + u()[0], _0x143a5f.y + u()[1] - 30);
          _0x4af181.restore();
          _0x4af181.restore();
          _0x4af181.save();
          _0x4af181.lineWidth = 8;
          _0x4af181.font = "26px Baloo Paaji";
          _0x4af181.strokeStyle = "#000";
          _0x4af181.fillStyle = _0x143a5f.info >= 16 ? "red" : "lime";
          ctx.strokeText(_0x440503.ⲆΔᐃⵠ, targetX, targetY);
          ctx.fillText(_0x440503.ⲆΔᐃⵠ, targetX, targetY);
        }
      })();
    }
  }
  function ma() {
    requestAnimationFrame(ma);
    Object.keys(da)[119];
    Object.keys(da)[103];
    let _0x5b2062 = Object.keys(c)[8];
    let _0x4ff03c = b();
    if (_0x4ff03c && !c[_0x5b2062].enabled) {
      d.AutoCrown.last = _0x4ff03c.right;
    }
    if (!d.AutoCrown.enabled) {
      return;
    }
    if (!g(79)) {
      return;
    }
    if (!c[_0x5b2062].enabled) {
      return;
    }
    let _0xcad180 = h()[22];
    if (_0xcad180.length < 1) {
      return;
    }
    _0xcad180.forEach(_0x50a0be => {
      var _0x16bc61;
      var _0x26c875;
      _0x16bc61 = _0x50a0be;
      _0x26c875 = _0x4ff03c;
      if (Math.sqrt((_0x26c875.x - _0x16bc61.x) * (_0x26c875.x - _0x16bc61.x) + (_0x26c875.y - _0x16bc61.y) * (_0x26c875.y - _0x16bc61.y)) <= 400) {
        f([aa.revive, _0x50a0be[w], _0x50a0be.id]);
      }
    });
  }
  ba.healtimer = Date.now();
  ba.coldtimer = Date.now();
  let na = {
    AutoBuild: true,
    AutoSpike: true,
    SwordInChest: true,
    AutoFarm: true,
    AutoWall: true,
    AutoCraft: true
  };
  function AutoFire() {
    requestAnimationFrame(AutoFire);
    let _0x555b33 = b();
    const _0x5c84ff = Date.now();
    function _0x25e250(_0x116d8e, _0x323966) {
      return Math.sqrt((_0x323966.x - _0x116d8e.x) * (_0x323966.x - _0x116d8e.x) + (_0x323966.y - _0x116d8e.y) * (_0x323966.y - _0x116d8e.y));
    }
    if (d.AutoFire.enabled && mp && m() === false) {
      let _0x1db1f5 = Math.PI * 2;
      let _0x479876 = Math.floor((_0x555b33.angle + _0x1db1f5) % _0x1db1f5 * 255 / _0x1db1f5);
      if (g(113)[0]) {
        f([22, 113, 4, 0]);
      }
    }
  }
  function waitForElement(_0x17393e, _0x84d0f8 = 10000) {
    return new Promise((_0x42db5e, _0x10a7aa) => {
      const _0x5e7c12 = Date.now();
      function _0x47c025() {
        const _0x2cc04b = document.querySelector(_0x17393e);
        if (_0x2cc04b && _0x2cc04b.disabled === false) {
          _0x42db5e(_0x2cc04b);
        } else if (Date.now() - _0x5e7c12 >= _0x84d0f8) {
          _0x10a7aa(new Error("Element tıklanabilir hale gelmedi."));
        } else {
          setTimeout(_0x47c025, 100);
        }
      }
      _0x47c025();
    });
  }
  unsafeWindow.waitForElement = waitForElement;
  function oa() {
    requestAnimationFrame(oa);
    let _0x5f45e4 = b();
    if (m() === false) {
      _0x5f45e4 -= 60;
      let _0x2aad0e;
      let _0x37222b;
      if (g(219)[0]) {
        _0x2aad0e = 219;
      } else if (g(123)[0]) {
        _0x2aad0e = 123;
      } else if (g(170)[0]) {
        _0x2aad0e = 170;
      } else if (g(169)[0]) {
        _0x2aad0e = 169;
      } else if (g(168)[0]) {
        _0x2aad0e = 168;
      } else if (g(162)[0]) {
        _0x2aad0e = 162;
      } else if (g(113)[0]) {
        _0x2aad0e = 113;
      } else if (g(125)[0] && d.AutoBuild.enabled && d.AutoBuild.Option === "Bridge") {
        _0x37222b = 125;
      } else if (g(141)[0] && d.AutoBuild.enabled && d.AutoBuild.Option === "Plot") {
        _0x37222b = 141;
      } else if (g(190)[0] && d.AutoBuild.enabled && d.AutoBuild.Option === "Roof") {
        _0x37222b = 190;
      }
      if (d.AutoBuild.enabled && p() === true && _0x37222b !== undefined && na.AutoBuild) {
        na.AutoBuild = false;
        setTimeout(_0x2e3a73 => na.AutoBuild = true, 50);
        let _0x46d1c9 = Math.PI * 2;
        let _0x2aa612 = b();
        let _0x2f3022 = _0x2aa612.angle;
        unsafeWindow.wp = _0x2aa612;
        let _0x5af308 = Math.floor((_0x2f3022 + _0x46d1c9) % _0x46d1c9 * 255 / _0x46d1c9);
        f([aa.placeBuild, _0x37222b, _0x5af308, 0]);
        for (let _0x3203c6 = 10; _0x3203c6 < 30; _0x3203c6 += 3) {
          f([aa.placeBuild, _0x37222b, (_0x3203c6 + _0x5af308) % 255, 0]);
          f([aa.placeBuild, _0x37222b, (-_0x3203c6 + _0x5af308) % 255, 0]);
        }
      }
      if (d.AutoSpike.enabled && p() === true && _0x2aad0e !== undefined && na.AutoSpike) {
        na.AutoSpike = false;
        setTimeout(_0x5e442e => na.AutoSpike = true, 50);
        let _0x26288a = Math.PI * 2;
        let _0x5071cb = b();
        let _0x94c90f = _0x5071cb.angle;
        if (d.AMB.a && d.AMB.enabled && S(_0x5071cb.right)) {
          _0x94c90f = d.AMB.a;
        }
        unsafeWindow.wp = _0x5071cb;
        let _0x3bd9db = Math.floor((_0x94c90f + _0x26288a) % _0x26288a * 255 / _0x26288a);
        f([aa.placeBuild, _0x2aad0e, _0x3bd9db, 0]);
        for (let _0x36c615 = 10; _0x36c615 < 30; _0x36c615 += 3) {
          f([aa.placeBuild, _0x2aad0e, (_0x36c615 + _0x3bd9db) % 255, 0]);
          f([aa.placeBuild, _0x2aad0e, (-_0x36c615 + _0x3bd9db) % 255, 0]);
        }
      }
    }
  }
  const pa = {
    initUI: () => {
      let _0x2af0e7 = new guify({
        title: "can`t say about it",
        theme: {
          name: "can`t say about it",
          colors: {
            panelBackground: "#00000099",
            componentBackground: "#626363",
            componentForeground: "#262626",
            textPrimary: "#595858",
            textSecondary: "#262626",
          },
          font: {
            fontFamily: "Baloo Paaji",
            fontSize: "20px"
          }
        },
        align: "right",
        width: 550,
        barMode: "none",
        panelMode: "none",
        root: unsafeWindow.container,
        open: false
      });
      _0x2af0e7.Register({
        type: "folder",
        label: "Visuals",
        open: false
      });
      _0x2af0e7.Register({
        type: "folder",
        label: "Misc",
        open: false
      });
      _0x2af0e7.Register({
        type: "folder",
        label: "Smart & Risky",
        open: false
      });
      _0x2af0e7.Register({
        type: "folder",
        label: "AutoSpike",
        open: false
      });
      _0x2af0e7.Register({
        type: "folder",
        label: "Binds",
        open: false
      });
      _0x2af0e7.Register({
        type: "folder",
        label: "Tracers",
        open: false
      });
      _0x2af0e7.Register({
        type: "folder",
        label: "Autofarm",
        open: false
      });
      _0x2af0e7.Register({
        type: "folder",
        label: "PathFinder",
        open: false
      });
      _0x2af0e7.Register({
        type: "folder",
        label: "Others",
        open: false
      });
      _0x2af0e7.Register({
        type: "folder",
        label: "Token",
        open: false
      });
      _0x2af0e7.Register({
        type: "folder",
        label: "Music",
        open: false
      });
      _0x2af0e7.Register([{
        type: "checkbox",
        label: "ColoredSpikes",
        object: d,
        property: "ColoredSpikes",
        onChange: _0x59394b => {
          pa.saveSettings();
        }
      }, {
        type: "checkbox",
        label: "Quest Timer",
        object: d,
        property: "qtimer",
        onChange: _0x3992a9 => {
          pa.saveSettings();
        }
      }, {
        type: "checkbox",
        label: "PlayersOnTop",
        object: d,
        property: "PlayersOnTopEnabled",
        onChange: _0x38e1f2 => {
          pa.saveSettings();
        }
      }, {
        type: "checkbox",
        label: "Esp",
        object: d,
        property: "Esp",
        onChange: _0x56f882 => {
          pa.saveSettings();
        }
      }, {
        type: "checkbox",
        label: "Roofs Opacity",
        object: d,
        property: "roofs",
        onChange: _0x1dc52e => {
          pa.saveSettings();
        }
      }, {
        type: "checkbox",
        label: "Percanteges",
        object: d,
        property: "percant",
        onChange: _0x263d45 => {
          pa.saveSettings();
        }
      }, {
        type: "checkbox",
        label: "Sandstorm & Blizzard",
        object: d,
        property: "sandstorm",
        onChange: _0x4ce386 => {
          pa.saveSettings();
        }
      }, {
        type: "checkbox",
        label: "Box Info and on top",
        object: d,
        property: "BoxOnTop",
        onChange: _0x4fc9fd => {
          pa.saveSettings();
        }
      }, {
        type: "checkbox",
        label: "FireInfo",
        object: d,
        property: "FireInf",
        onChange: _0x5173c1 => {
          pa.saveSettings();
        }
      }, {
        type: "checkbox",
        label: "ShowAmounts",
        object: d,
        property: "drawID",
        onChange: _0x5bfd26 => {
          pa.saveSettings();
        }
      }, {
        type: "checkbox",
        label: "PlayerInfo",
        object: d,
        property: "drawID",
        onChange: _0x2b32fa => {
          pa.saveSettings();
        }
      }, {
        type: "checkbox",
        label: "BuildingInfo",
        object: d,
        property: "buildinfo",
        onChange: _0x12ea4e => {
          pa.saveSettings();
        }
      }, {
        type: "select",
        label: "SpikeColor",
        object: d,
        property: "spikeOption",
        options: ["Loux", "Custom"],
        onChange: _0x20ce56 => {
          pa.saveSettings();
        }
      }, {
        type: "checkbox",
        label: "Xray",
        object: d.Xray,
        property: "enabled",
        onChange: _0x198179 => {
          pa.saveSettings();
        }
      }, {
        type: "range",
        label: "Xray Alpha",
        min: 0.1,
        max: 1,
        step: 0.1,
        object: d.Xray,
        property: "alpha",
        onChange(_0x1eb9f6) {
          pa.saveSettings();
        }
      }], {
        folder: "Visuals"
      });
      _0x2af0e7.Register([{
        type: "checkbox",
        label: "ShowTexts",
        object: d,
        property: "ShowTexts",
        onChange(_0x49c408) {
          pa.saveSettings();
        }
      }, {
        type: "checkbox",
        label: "Full Bot",
        onChange(_0x143e87) {
          pa.saveSettings();
          unsafeWindow.waitForElement("#nickname_input").then(_0x3738a1 => {
            _0x3738a1.value = "test123";
            $(_0x3738a1).trigger("input");
            $(_0x3738a1).trigger($.Event("keydown", {
              key: "Enter"
            }));
          }).catch(_0x1ef380 => {
            console.error(_0x1ef380.message);
          });
        }
      }, {
        type: "checkbox",
        label: "AutoPutMaterial",
        object: d.AutoPutMaterial,
        property: "enabled",
        onChange(_0x27a123) {
          pa.saveSettings();
        }
      }, {
        type: "select",
        label: "Material",
        object: d.AutoPutMaterial,
        options: ["Redite", "Amethys", "Diamond", "Gold", "Stone", "Wood"],
        property: "option",
        onChange(_0xfab271) {
          pa.saveSettings();
        }
      }, {
        type: "checkbox",
        label: "AutoDo",
        object: d.AutoDo,
        property: "enabled",
        onChange(_0x46d336) {
          pa.saveSettings();
        }
      }, {
        type: "checkbox",
        label: "Auto Equip",
        object: d.AutoDo,
        property: "equip",
        onChange(_0x47c40d) {
          pa.saveSettings();
        }
      }, {
        type: "checkbox",
        label: "ShowBanner",
        object: d,
        property: "banner",
        onChange(_0x514b35) {
          pa.saveSettings();
        }
      }, {
        type: "checkbox",
        label: "Auto Bottle",
        object: d.AutoDo,
        property: "Bottle",
        onChange(_0xaae2a5) {
          pa.saveSettings();
        }
      }, {
        type: "select",
        label: "Equip Item",
        object: d.AutoDo,
        options: ["Lava Helmet", "Dragon Helmet", "Redite Helmet", "Amethys Helmet", "Diamond Helmet", "Gold Helmet", "Stone Helmet", "Wood Helmet", "Green Crown", "Blue Crown", "Orange Crown"],
        property: "option",
        onChange(_0x3aa35b) {
          pa.saveSettings();
        }
      }, {
        type: "range",
        label: "Hp",
        min: 1,
        max: 100,
        step: 1,
        object: d.AutoDo,
        property: "hp",
        onChange(_0x21f429) {
          pa.saveSettings();
        }
      }, {
        type: "range",
        label: "Delay",
        min: 1,
        max: 100,
        step: 1,
        object: d.AutoDo,
        property: "delay",
        onChange(_0x483802) {
          pa.saveSettings();
        }
      }, {
        type: "color",
        label: "Gui Color",
        object: d,
        property: "selectedColor",
        onChange(_0x2acfeb) {
          pa.saveSettings();
        }
      }, {
        type: "color",
        label: "Players Color",
        object: d.Tracers,
        property: "Players",
        onChange(_0xa36511) {
          pa.saveSettings();
        }
      }, {
        type: "color",
        label: "Alovera Color",
        object: d.Tracers,
        property: "Alovera",
        onChange(_0xf76d24) {
          pa.saveSettings();
        }
      }, {
        type: "color",
        label: "Box Tracer Color",
        object: d.Tracers,
        property: "Boxs",
        onChange(_0x3e8414) {
          pa.saveSettings();
        }
      }], {
        folder: "Others"
      });
      _0x2af0e7.Register([{
        type: "button",
        label: "Set AutoSpike Key",
        action: _0x2e6c18 => {
          pa.controls.setKeyBind("AutoSpike");
        }
      }, {
        type: "display",
        label: "AutoSpike Key:",
        object: d.AutoSpike,
        property: "key"
      }, {
        type: "checkbox",
        label: "AutoSpike 2",
        object: d.AutoSpike,
        property: "enabled2",
        onChange: _0x29af26 => {
          pa.saveSettings();
        }
      }, {
        type: "select",
        label: "1",
        object: d.AutoSpike.p,
        property: "0",
        options: ["Reidite Spike", "Amethyst Spike", "Diamond Spike", "Gold Spike", "Stone Spike", "Wood Spike", "Wood Wall", "Nothing"],
        onChange: _0x2764bc => {
          pa.saveSettings();
        }
      }, {
        type: "select",
        label: "2",
        object: d.AutoSpike.p,
        property: "1",
        options: ["Reidite Spike", "Amethyst Spike", "Diamond Spike", "Gold Spike", "Stone Spike", "Wood Spike", "Wood Wall", "Nothing"],
        onChange: _0x19420d => {
          pa.saveSettings();
        }
      }, {
        type: "select",
        label: "3",
        object: d.AutoSpike.p,
        property: "2",
        options: ["Reidite Spike", "Amethyst Spike", "Diamond Spike", "Gold Spike", "Stone Spike", "Wood Spike", "Wood Wall", "Nothing"],
        onChange: _0x2bcae9 => {
          pa.saveSettings();
        }
      }, {
        type: "select",
        label: "4",
        object: d.AutoSpike.p,
        property: "3",
        options: ["Reidite Spike", "Amethyst Spike", "Diamond Spike", "Gold Spike", "Stone Spike", "Wood Spike", "Wood Wall", "Nothing"],
        onChange: _0x19104a => {
          pa.saveSettings();
        }
      }, {
        type: "select",
        label: "5",
        object: d.AutoSpike.p,
        property: "4",
        options: ["Reidite Spike", "Amethyst Spike", "Diamond Spike", "Gold Spike", "Stone Spike", "Wood Spike", "Wood Wall", "Nothing"],
        onChange: _0x16f257 => {
          pa.saveSettings();
        }
      }, {
        type: "select",
        label: "6",
        object: d.AutoSpike.p,
        property: "5",
        options: ["Reidite Spike", "Amethyst Spike", "Diamond Spike", "Gold Spike", "Stone Spike", "Wood Spike", "Wood Wall", "Nothing"],
        onChange: _0x3e9adc => {
          pa.saveSettings();
        }
      }, {
        type: "select",
        label: "7",
        object: d.AutoSpike.p,
        property: "6",
        options: ["Reidite Spike", "Amethyst Spike", "Diamond Spike", "Gold Spike", "Stone Spike", "Wood Spike", "Wood Wall", "Nothing"],
        onChange: _0x1c71a3 => {
          pa.saveSettings();
        }
      }], {
        folder: "AutoSpike"
      });
      _0x2af0e7.Register([{
        type: "checkbox",
        label: "AutoExtractor Take",
        object: d.ExtractorSteal,
        property: "enabled",
        onChange: _0x86b282 => {
          pa.saveSettings();
        }
      }, {
        type: "checkbox",
        label: "AutoBread&Windmil Put",
        object: d,
        property: "AutoBreadput",
        onChange: _0x4848b1 => {
          pa.saveSettings();
        }
      }, {
        type: "checkbox",
        label: "AutoBread&Windmil Take",
        object: d,
        property: "AutoBreadtake",
        onChange: _0x43b934 => {
          pa.saveSettings();
        }
      }, {
        type: "checkbox",
        label: "AutoGreenCrown",
        object: d,
        property: "GreenCrown",
        onChange: _0x44eaae => {
          pa.saveSettings();
        }
      }, {
        type: "checkbox",
        label: "AutoRespawn",
        object: d.AutoRespawn,
        property: "enabled",
        onChange: _0x4148d8 => {
          pa.saveSettings();
        }
      }, {
        type: "checkbox",
        label: "Autocrown",
        object: d.AutoCrown,
        property: "enabled",
        onChange: _0x296f04 => {
          pa.saveSettings();
        }
      }, {
        type: "checkbox",
        label: "AutoFire",
        object: d.AutoFire,
        property: "enabled",
        onChange: _0xa67413 => {
          pa.saveSettings();
        }
      }, {
        type: "checkbox",
        label: "AutoExtractor Put",
        object: d.ExtractorPut,
        property: "enabled",
        onChange: _0x4bdbdd => {
          pa.saveSettings();
        }
      }, {
        type: "checkbox",
        label: "AutoTotem",
        object: d.AutoTotem,
        property: "enabled",
        onChange: _0x548b2d => {
          pa.saveSettings();
        }
      }, {
        type: "checkbox",
        label: "Aimbot",
        object: d.AMB,
        property: "enabled",
        onChange: _0x161f82 => {
          pa.saveSettings();
        }
      }, {
        type: "checkbox",
        label: "AutoPutRed",
        object: d.AutoPutRed,
        property: "enabled",
        onChange: _0x525b0f => {
          pa.saveSettings();
        }
      }, {
        type: "checkbox",
        label: "AutoSteal",
        object: d.AutoSteal,
        property: "enabled",
        onChange: _0x2b5ace => {
          pa.saveSettings();
        }
      }, {
        type: "checkbox",
        label: "ShowJoins",
        object: d,
        property: "announcer",
        onChange: _0x53fce2 => {
          pa.saveSettings();
        }
      }, {
        type: "checkbox",
        label: "AntiRec & Join",
        object: d,
        property: "antirec",
        onChange: _0x50de7c => {
          pa.saveSettings();
        }
      }, {
        type: "checkbox",
        label: "AutoFeed",
        object: d.NewAutoFeed,
        property: "enabled",
        onChange: _0x499341 => {
          pa.saveSettings();
        }
      }, {
        type: "checkbox",
        label: "AutoFeed 2",
        object: d.NewAutoFeed,
        property: "mode2",
        onChange: _0x470119 => {
          pa.saveSettings();
        }
      }, {
        type: "range",
        label: "AutoFeed Interval",
        min: 0.1,
        max: 1,
        step: 0.1,
        object: d.NewAutoFeed,
        property: "FeedInterval",
        onChange(_0x553f92) {
          pa.saveSettings();
        }
      }, {
        type: "checkbox",
        label: "AutoBuild",
        object: d.AutoBuild,
        property: "enabled",
        onChange: _0x2b69ef => {
          pa.saveSettings();
        }
      }, {
        type: "select",
        label: "AutoBuild Build",
        object: d.AutoBuild,
        property: "Option",
        options: ["Bridge", "Plot", "Roof"],
        onChange: _0x2b71a7 => {
          pa.saveSettings();
        }
      }, {
        type: "checkbox",
        label: "AutoIce",
        object: d.AutoIce,
        property: "enabled",
        onChange: _0x3a9c1b => {
          pa.saveSettings();
        }
      }, {
        type: "range",
        label: "AutoIce Interval",
        min: 0.1,
        max: 1,
        step: 0.1,
        object: d.AutoIce,
        property: "Interval",
        onChange(_0x2a5609) {
          pa.saveSettings();
        }
      }], {
        folder: "Misc"
      });
      _0x2af0e7.Register([{
        type: "button",
        label: "Set AutoExtractor Put k",
        action: _0x1d30b5 => {
          pa.controls.setKeyBind("ExtractorPut");
        }
      }, {
        type: "display",
        label: "AutoExtractor Put k:",
        object: d.ExtractorPut,
        property: "key"
      }, {
        type: "button",
        label: "Set AutoExtractor Take k",
        action: _0xa18251 => {
          pa.controls.setKeyBind("ExtractorSteal");
        }
      }, {
        type: "display",
        label: "AutoExtractor Take k:",
        object: d.ExtractorSteal,
        property: "key"
      }, {
        type: "button",
        label: "Set AutoTotem k",
        action: _0x3058d0 => {
          pa.controls.setKeyBind("AutoTotem");
        }
      }, {
        type: "display",
        label: "AutoTotem k:",
        object: d.AutoTotem,
        property: "key"
      }, {
        type: "button",
        label: "Set AutoSpike k",
        action: _0x169694 => {
          pa.controls.setKeyBind("AutoSpike");
        }
      }, {
        type: "display",
        label: "AutoSpike k:",
        object: d.AutoSpike,
        property: "key"
      }, {
        type: "button",
        label: "Set AutoCraft k",
        action: _0x3a8432 => {
          pa.controls.setKeyBind("AutoCraft");
        }
      }, {
        type: "display",
        label: "AutoCraft k:",
        object: d.AutoCraft,
        property: "key"
      }, {
        type: "button",
        label: "Set AutoCraft k",
        action: _0xf8e61e => {
          pa.controls.setKeyBind("AutoCraft");
        }
      }, {
        type: "display",
        label: "AutoRecycle k:",
        object: d.AutoRecycle,
        property: "key"
      }, {
        type: "button",
        label: "Set AutoRecycle k",
        action: _0x4b69af => {
          pa.controls.setKeyBind("AutoRecycle");
        }
      }, {
        type: "display",
        label: "DropSword Put k:",
        object: d.dropsword,
        property: "key"
      }, {
        type: "button",
        label: "Set DropSword k",
        action: _0x24f3c0 => {
          pa.controls.setKeyBind("dropsword");
        }
      }, {
        type: "display",
        label: "AutoFire k:",
        object: d.AutoFire,
        property: "key"
      }, {
        type: "button",
        label: "Set AutoFire k",
        action: _0x5b8db7 => {
          pa.controls.setKeyBind("AutoFire");
        }
      }, {
        type: "display",
        label: "AutoPutRed k:",
        object: d.AutoPutRed,
        property: "key"
      }, {
        type: "button",
        label: "Set AutoPutRed k",
        action: _0x22a690 => {
          pa.controls.setKeyBind("AutoPutRed");
        }
      }, {
        type: "display",
        label: "AutoSteal k:",
        object: d.AutoSteal,
        property: "key"
      }, {
        type: "button",
        label: "Set AutoSteaL k",
        action: _0x3db5ab => {
          pa.controls.setKeyBind("AutoSteal");
        }
      }], {
        folder: "Binds"
      });
      _0x2af0e7.Register([{
        type: "checkbox",
        label: "Start Autofarm",
        object: d.Autofarm,
        property: "enabled",
        onChange: _0x57d78a => {
          pa.saveSettings();
        }
      }, {
        type: "checkbox",
        label: "AutoWater",
        object: d.Autofarm,
        property: "water",
        onChange: _0x27428e => {
          pa.saveSettings();
        }
      }, {
        type: "button",
        label: "Top left of farm",
        action: _0x10fe2c => {
          let _0x392885 = b();
          if (_0x392885) {
            d.Autofarm.x = _0x392885.x;
            d.Autofarm.y = _0x392885.y;
          }
        }
      }, {
        type: "button",
        label: "Bottom right of farm",
        action: _0x28b2f2 => {
          let _0x1bcae2 = b();
          if (_0x1bcae2) {
            d.Autofarm.xx = _0x1bcae2.x;
            d.Autofarm.yy = _0x1bcae2.y;
          }
        }
      }, {
        type: "button",
        label: "Safe Point",
        action: _0xff26ec => {
          let _0xd798ad = b();
          if (_0xd798ad) {
            d.Autofarm.sx = _0xd798ad.x;
            d.Autofarm.sy = _0xd798ad.y;
          }
        }
      }, {
        type: "display",
        label: "X",
        object: d.Autofarm,
        property: "x"
      }, {
        type: "display",
        label: "Y",
        object: d.Autofarm,
        property: "y"
      }, {
        type: "display",
        label: "X1",
        object: d.Autofarm,
        property: "xx"
      }, {
        type: "display",
        label: "Y1",
        object: d.Autofarm,
        property: "yy"
      }, {
        type: "display",
        label: "SX",
        object: d.Autofarm,
        property: "sx"
      }, {
        type: "display",
        label: "SY",
        object: d.Autofarm,
        property: "sy"
      }], {
        folder: "Autofarm"
      });
      _0x2af0e7.Register([{
        type: "checkbox",
        label: "Forest Mobs",
        object: d,
        property: "Wolf",
        onChange: _0x2da720 => {
          pa.saveSettings();
        }
      }, {
        type: "checkbox",
        label: "Winter Mobs",
        object: d,
        property: "Winter",
        onChange: _0x2214e3 => {
          pa.saveSettings();
        }
      }, {
        type: "checkbox",
        label: "Lava Mobs",
        object: d,
        property: "Lava",
        onChange: _0x79003b => {
          pa.saveSettings();
        }
      }, {
        type: "checkbox",
        label: "Player Tracers",
        object: d,
        property: "PlayerT",
        onChange: _0xe71ca8 => {
          pa.saveSettings();
        }
      }, {
        type: "checkbox",
        label: "Desert Mobs",
        object: d,
        property: "Desert",
        onChange: _0x5b61f4 => {
          pa.saveSettings();
        }
      }, {
        type: "checkbox",
        label: "Box Tracers",
        object: d,
        property: "BoxT",
        onChange: _0xfed321 => {
          pa.saveSettings();
        }
      }, {
        type: "checkbox",
        label: "Aloevera Tracers",
        object: d,
        property: "Alovera",
        onChange: _0x2e4a32 => {
          pa.saveSettings();
        }
      }, {
        type: "checkbox",
        label: "Sea Mobs",
        object: d,
        property: "Sea",
        onChange: _0x5d3c5c => {
          pa.saveSettings();
        }
      }], {
        folder: "Tracers"
      });
      _0x2af0e7.Register([{
        type: "button",
        label: "Token & TokenID",
        action() {
          function _0x26f609(_0x150044) {
            const _0x3da5b1 = "; " + document.cookie;
            const _0x30fc22 = _0x3da5b1.split("; " + _0x150044 + "=");
            if (_0x30fc22.length === 2) {
              return _0x30fc22.pop().split(";").shift();
            }
          }
          let _0x176737 = _0x26f609("starve_token");
          let _0x461874 = _0x26f609("starve_token_id");
          let _0x5dd4a5 = "Token: " + (_0x176737 ? _0x176737 : "Not Found") + "\nToken ID: " + (_0x461874 ? _0x461874 : "Not Found");
          prompt("Please CTRL+C to copy token & tokenid:", _0x5dd4a5);
          pa.saveSettings();
        }
      }], {
        folder: "Token"
      });
      _0x2af0e7.Register([{
        type: "checkbox",
        label: "TrashTalk",
        object: d.TrashTalk,
        property: "enabled",
        action() {
          pa.saveSettings();
        }
      }, {
        type: "button",
        label: "Find Hs Server",
        action() {
          alert("No servours Found");
        }
      }, {
        type: "checkbox",
        label: "AFK Mode",
        object: d.AFKMODE,
        property: "enabled",
        action() {
          pa.saveSettings();
        }
      }, {
        type: "checkbox",
        label: "Mention Everyone when hp %80",
        object: d.AFKMODE,
        property: "everyone",
        action() {
          pa.saveSettings();
        }
      }, {
        type: "text",
        label: "Webhook",
        object: d.AFKMODE,
        property: "webhook",
        action() {
          pa.saveSettings();
        }
      }], {
        folder: "Smart & Risky"
      });
      var _0x5788ae;
      _0x2af0e7.Register([{
        type: "button",
        label: "Play Music",
        object: d.Music,
        property: "enabled",
        action() {
          let _0x2356e9 = d.Music.CurrentMusic;
          _0x5788ae = document.createElement("audio");
          if (d.Music.CurrentMusic === "İzel - Düşer O") {
            _0x5788ae.src = "https://github.com/iAlperenS/krypton/raw/main/mp3indirdur-Izel-Duser-O.mp3";
          } else if (d.Music.CurrentMusic === "Mustafa Sandal - Aya benzer") {
            _0x5788ae.src = "https://github.com/iAlperenS/krypton/raw/main/Mustafa-Sandal-Aya-Benzer.mp3";
          } else if (d.Music.CurrentMusic === "TPL - London View") {
            _0x5788ae.src = "https://github.com/iAlperenS/krypton/raw/main/tpl-bm-otp-london-view-pressplay.mp3";
          } else if (_0x2356e9 === "Semicenk - Düşer o aklıma") {
            _0x5788ae.src = "https://www.mp3indirdur.io/181528-indir-semicenk-duser-aklima-indir.html#";
          } else if (_0x2356e9 === "Firuze") {
            _0x5788ae.src = "https://github.com/musayar9/Music-Player/raw/main/mp3/firuze.mp3";
          } else if (_0x2356e9 === "Neyim varki Rapten Gayrı") {
            _0x5788ae.src = "https://github.com/omergzlaydn/mp3-Music-Player/raw/main/mp3/CEZA%20-%20Neyim%20Var%20ki%20feat.%20Sagopa.mp3";
          } else if (_0x2356e9 === "Aşkın Olayım") {
            _0x5788ae.src = "https://github.com/omergzlaydn/mp3-Music-Player/raw/main/mp3/Simge%20%20-%20A%C5%9Fk%C4%B1n%20Olay%C4%B1m.mp3";
          } else if (_0x2356e9 === "Lafımı olur") {
            _0x5788ae.src = "https://github.com/omergzlaydn/mp3-Music-Player/raw/main/mp3/Laf%C4%B1m%C4%B1%20Olur.mp3";
          }
          _0x5788ae.preload = "auto";
          _0x5788ae.play().then(() => {
            console.log("Playback started successfully");
          }).catch(_0x593feb => {
            console.error("Playback failed:", _0x593feb);
          });
          pa.saveSettings();
        }
      }, {
        type: "checkbox",
        label: "Pause Music",
        object: d.Music,
        property: "pause",
        action() {
          _0x5788ae.pause();
          _0x5788ae.stop();
          console.log("Playback paused");
          pa.saveSettings();
        }
      }, {
        type: "select",
        label: "Music List",
        object: d.Music,
        property: "CurrentMusic",
        options: ["İzel - Düşer O", "Mustafa Sandal - Aya benzer", "TPL - London View", "Semicenk - Düşer o aklıma", "Firuze", "Lafımı olur", "Aşkın olayım", "Neyim varki Rapten Gayrı"],
        onChange: _0xc80e41 => {
          pa.saveSettings();
        }
      }], {
        folder: "Music"
      });
      _0x2af0e7.Register([{
        type: "checkbox",
        label: "Pathfinder Enabled",
        folder: "Pathfinder",
        object: d.pathfinder,
        property: "enabled",
        onChange() {
          if (pa.saveSettings) {
            pa.saveSettings();
          }
        }
      }, {
        type: "checkbox",
        label: "PathfinderV2 (AlperenS)",
        object: d.pathfinder,
        property: "v2",
        onChange: _0x3e7c22 => {
          pa.saveSettings();
        }
      }, {
        type: "checkbox",
        label: "BringHoodKit",
        object: d.pathfinder,
        property: "hood",
        onChange: _0x13310f => {
          pa.saveSettings();
        }
      }, {
        type: "checkbox",
        label: "Chase Enemy",
        object: d.pathfinder,
        property: "movetoenemy",
        onChange: _0xedf31f => {
          pa.saveSettings();
        }
      }, {
        type: "checkbox",
        label: "POD VERIFY",
        object: d.POD,
        property: "enabled",
        onChange: _0x51afe7 => {
          pa.saveSettings();
        }
      }, {
        type: "checkbox",
        label: "ZMA VERIFY",
        object: d.ZMA,
        property: "enabled",
        onChange: _0x347d5f => {
          pa.saveSettings();
        }
      }, {
        type: "checkbox",
        label: "ZMA AFK BYP ",
        object: d.zmaafk,
        property: "enabled",
        onChange: _0x1466e0 => {
          pa.saveSettings();
        }
      }, {
        type: "range",
        label: "ChaseID",
        min: 0,
        max: 100,
        step: 1,
        object: d.pathfinder,
        property: "chaseid",
        onChange(_0x2aacf8) {
          pa.saveSettings();
        }
      }, {
        type: "display",
        label: "Pathfinder Key",
        folder: "Pathfinder",
        object: d.pathfinder,
        property: "key"
      }, {
        type: "button",
        label: "Set Pathfinder Key",
        folder: "Pathfinder",
        action() {
          pa.controls.setKeyBind("pathfinder");
        }
      }, {
        type: "display",
        label: "Pathfinder X",
        folder: "Pathfinder",
        object: d.pathfinder,
        property: "x"
      }, {
        type: "display",
        label: "Pathfinder Y",
        folder: "Pathfinder",
        object: d.pathfinder,
        property: "y"
      }, {
        type: "button",
        label: "Set Current Player Position",
        folder: "Pathfinder",
        action() {
          let _0x2ea7e9 = b();
          if (_0x2ea7e9) {
            d.pathfinder.x = _0x2ea7e9.x;
            d.pathfinder.y = _0x2ea7e9.y;
          }
        }
      }, {
        type: "button",
        label: "Join Try",
        folder: "Pathfinder",
        action() {
          let _0x8da8db = Object.keys(da)[3];
          da[_0x8da8db]();
        }
      }, {
        type: "button",
        label: "Go Back To Lobby",
        folder: "Pathfinder",
        action() {
          let _0x2d6220 = Object.keys(da)[136];
          da[_0x2d6220]();
        }
      }, {
        type: "button",
        label: "Random Token_ID",
        folder: "Pathfinder",
        action() {
          let _0x2097b8 = Object.keys(c)[14];
          c[_0x2097b8] = function (_0x52dd54) {
            const _0x5115e5 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
            let _0x4228ce = "";
            for (let _0x19ecc1 = 0; _0x19ecc1 < _0x52dd54; _0x19ecc1++) {
              _0x4228ce += _0x5115e5.charAt(Math.floor(Math.random() * 52));
            }
            return _0x4228ce;
          }(5);
        }
      }], {
        folder: "PathFinder"
      });
    },
    controls: null,
    controller: class {
      setKeyBind(_0x2873c6) {
        d[_0x2873c6].key = "Press any key";
        let _0xd62e49 = 0;
        document.addEventListener("keydown", function _0x481a0e(_0x419807) {
          _0xd62e49++;
          if (_0xd62e49 >= 1) {
            if (_0x419807.code == "Escape") {
              d[_0x2873c6].key = "NONE";
            } else {
              d[_0x2873c6].key = _0x419807.code;
            }
            document.removeEventListener("keydown", _0x481a0e);
            pa.saveSettings();
          }
        });
      }
    },
    saveSettings: () => {
      for (let _0x25bc05 in d) {
        localStorage.setItem(_0x25bc05 + "ZMX", JSON.stringify(d[_0x25bc05]));
      }
    },
    loadSettings: () => {
      for (let _0x283181 in d) {
        let _0x1c5eed = localStorage.getItem(_0x283181);
        if (_0x1c5eed) {
          d[_0x283181] = JSON.parse(_0x1c5eed);
        }
      }
    },
    LoadHack: () => {
      pa.loadSettings();
      pa.controls = new pa.controller();
      pa.initUI();
      pa.saveSettings();
    }
  };
  let qa;
  let ra;
  function sa() {
    oa();
    (function () {
      let _0x189e0b;
      function _0x1cc30a() {
        function _0x125e94(_0x58d886) {
          return new Promise(_0x1d73c7 => setTimeout(_0x1d73c7, _0x58d886));
        }
        if (n !== undefined && k() < 0.6 && !window.AutoEatWait) {
          unsafeWindow.AutoEatWait = true;
          const _0x1ab8e0 = [110, 117];
          for (const _0x5a7fb6 of _0x1ab8e0) {
            if (g(_0x5a7fb6)[0]) {
              f([aa.equip, _0x5a7fb6]);
              _0x125e94(1000);
            }
          }
          setTimeout(() => {
            unsafeWindow.AutoEatWait = false;
          }, 500);
        } else {
          f([aa.craft, n]);
        }
      }
      document.addEventListener("keydown", function (_0x3e0610) {
        if (_0x3e0610.code === d.AutoCraft.key) {
          if (d.AutoCraft.enabled == 0 && m() === false) {
            _0x1cc30a();
            _0x189e0b = setInterval(_0x1cc30a, 20);
            d.AutoCraft.enabled = true;
          } else if (d.AutoCraft.enabled == 1) {
            clearInterval(_0x189e0b);
            d.AutoCraft.enabled = false;
          }
        }
      });
    })();
    (function () {
      let _0x27b2e2 = Object.keys(da)[95];
      da[_0x27b2e2] = _0x1271a7 => {
        n = _0x1271a7;
        f([aa.equip, 28]);
        f([aa.craft, _0x1271a7]);
        return 1;
      };
    })();
    (function () {
      let _0x121b55;
      function _0x31dd82() {
        if (p() === true && a !== undefined && k() < 0.6 && !window.AutoEatWait) {
          unsafeWindow.AutoEatWait = true;
          const _0x5c7afd = [110, 117];
          for (const _0xdb46fc of _0x5c7afd) {
            if (g(_0xdb46fc)[0]) {
              f([aa.equip, _0xdb46fc]);
            }
          }
          setTimeout(() => {
            unsafeWindow.AutoEatWait = false;
          }, 500);
        } else {
          f([aa.recycle, a]);
        }
      }
      document.addEventListener("keydown", function (_0x220777) {
        if (_0x220777.code === d.AutoRecycle.key) {
          if (d.AutoRecycle.enabled == 0 && m() === false) {
            _0x31dd82();
            _0x121b55 = setInterval(_0x31dd82, 20);
            d.AutoRecycle.enabled = true;
          } else if (d.AutoRecycle.enabled == 1) {
            clearInterval(_0x121b55);
            d.AutoRecycle.enabled = false;
          }
        }
      });
    })();
    $();
    TrashTalkW();
    setInterval(FeedMode2, 5000);
    ma();
    AutoFire();
    setInterval(T, 200);
    _();
    blizzard();
    (function () {
      if (p() === true && d.ColoredSpikes) {
        unsafeWindow.ReiditeSpikeAlly = new Image();
        unsafeWindow.ReiditeSpikeAlly.src = "https://raw.githubusercontent.com/sfagasdzdgfhs/spikes/main/day-reidite-spike-ally.png";
        unsafeWindow.AmethystSpikeAlly = new Image();
        unsafeWindow.AmethystSpikeAlly.src = "https://raw.githubusercontent.com/sfagasdzdgfhs/spikes/main/day-amethyst-spike-ally.png";
        unsafeWindow.DiamondSpikeAlly = new Image();
        unsafeWindow.DiamondSpikeAlly.src = "https://raw.githubusercontent.com/sfagasdzdgfhs/spikes/main/day-diamond-spike-ally.png";
        unsafeWindow.GoldSpikeAlly = new Image();
        unsafeWindow.GoldSpikeAlly.src = "https://raw.githubusercontent.com/sfagasdzdgfhs/spikes/main/day-gold-spike-ally.png";
        unsafeWindow.StoneSpikeAlly = new Image();
        unsafeWindow.StoneSpikeAlly.src = "https://raw.githubusercontent.com/sfagasdzdgfhs/spikes/main/day-stone-spike-ally.png";
        unsafeWindow.WoodSpikeAlly = new Image();
        unsafeWindow.WoodSpikeAlly.src = "https://raw.githubusercontent.com/sfagasdzdgfhs/spikes/main/day-wood-spike-ally.png";
        unsafeWindow.ReiditeSpikeEnemy = new Image();
        unsafeWindow.ReiditeSpikeEnemy.src = "https://raw.githubusercontent.com/sfagasdzdgfhs/spikes/main/day-reidite-spike-enemy.png";
        unsafeWindow.AmethystSpikeEnemy = new Image();
        unsafeWindow.AmethystSpikeEnemy.src = "https://raw.githubusercontent.com/sfagasdzdgfhs/spikes/main/day-amethyst-spike-enemy.png";
        unsafeWindow.DiamondSpikeEnemy = new Image();
        unsafeWindow.DiamondSpikeEnemy.src = "https://raw.githubusercontent.com/sfagasdzdgfhs/spikes/main/day-diamond-spike-enemy.png";
        unsafeWindow.GoldSpikeEnemy = new Image();
        unsafeWindow.GoldSpikeEnemy.src = "https://raw.githubusercontent.com/sfagasdzdgfhs/spikes/main/day-gold-spike-enemy.png";
        unsafeWindow.GoldSpikeEnemy.opacity = "0.5";
        unsafeWindow.StoneSpikeEnemy = new Image();
        unsafeWindow.StoneSpikeEnemy.src = "https://raw.githubusercontent.com/sfagasdzdgfhs/spikes/main/day-stone-spike-enemy.png";
        unsafeWindow.WoodSpikeEnemy = new Image();
        unsafeWindow.WoodSpikeEnemy.src = "https://raw.githubusercontent.com/sfagasdzdgfhs/spikes/main/day-wood-spike-enemy.png";
        let _0x4c4e15 = unsafeWindow;
        unsafeWindow.GoldenFork = new Image();
        unsafeWindow.GoldenFork.src = "https://raw.githubusercontent.com/iAlperenS/krypton/main/greenfork2.png";
        unsafeWindow.RemoveFog = new Image();
        unsafeWindow.RemoveFog.src = "https://www.transparenttextures.com/patterns/debut-light.png";
        unsafeWindow.CursedSword = new Image();
        unsafeWindow.CursedSword.src = "https://raw.githubusercontent.com/iAlperenS/krypton/main/cursedsword.webp";
        _0x4c4e15.MainIceDrag = new Image();
        _0x4c4e15.MainIceDrag.src = "https://github.com/iAlperenS/krypton/blob/main/main-ice-drag%20(1).png?raw=true";
        _0x4c4e15.IceDragLeft = new Image();
        _0x4c4e15.IceDragLeft.src = "https://github.com/iAlperenS/krypton/blob/main/ice-wing-left.png?raw=true";
        _0x4c4e15.IceDragRight = new Image();
        _0x4c4e15.IceDragRight.src = "https://github.com/iAlperenS/krypton/blob/main/ice-wing-right.png?raw=true";
        let _0x3d2e54 = {
          DRAG_SWORD: inv.DRAGON_SWORD,
          SPIKE: 5,
          FIRE: inv.FIRE,
          GOLDFORK: inv.PITCHFORK2,
          STONE_SPIKE: 12,
          GOLD_SPIKE: 13,
          DIAMOND_SPIKE: 14,
          AMETHYST_SPIKE: 20,
          REIDITE_SPIKE: 52,
          WOOD_DOOR: 10,
          STONE_DOOR: 15,
          GOLD_DOOR: 16,
          DIAMOND_DOOR: 17,
          AMETHYST_DOOR: 21,
          REIDITE_DOOR: 51
        };
        unsafeWindow.ITEMS_TO_CHECK = {
          SPIKE: 5,
          STONE_SPIKE: 12,
          GOLD_SPIKE: 13,
          DIAMOND_SPIKE: 14,
          AMETHYST_SPIKE: 20,
          REIDITE_SPIKE: 52,
          WOOD_DOOR: 10,
          STONE_DOOR: 15,
          GOLD_DOOR: 16,
          DIAMOND_DOOR: 17,
          AMETHYST_DOOR: 21,
          REIDITE_DOOR: 51
        };
        let _0x4a4886 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMOPQRSTUVWXYZ_0123456789";
        for (let _0x7a5609 in unsafeWindow) {
          if ((!!Array.isArray(unsafeWindow[_0x7a5609]) || !_0x4a4886.includes(_0x7a5609[0])) && unsafeWindow[_0x7a5609].length > 800 && unsafeWindow[_0x7a5609].length < 1500) {
            unsafeWindow.sprite = unsafeWindow[_0x7a5609];
          }
        }
        sprite[10000] = [WoodSpikeAlly, WoodSpikeAlly];
        sprite[10001] = [WoodSpikeEnemy, WoodSpikeEnemy];
        sprite[10002] = [StoneSpikeAlly, StoneSpikeAlly];
        sprite[10003] = [StoneSpikeEnemy, StoneSpikeEnemy];
        sprite[10004] = [GoldSpikeAlly, GoldSpikeAlly];
        sprite[10005] = [GoldSpikeEnemy, GoldSpikeEnemy];
        sprite[10006] = [DiamondSpikeAlly, DiamondSpikeAlly];
        sprite[10007] = [DiamondSpikeEnemy, DiamondSpikeEnemy];
        sprite[10008] = [AmethystSpikeAlly, AmethystSpikeAlly];
        sprite[10009] = [AmethystSpikeEnemy, AmethystSpikeEnemy];
        sprite[10010] = [ReiditeSpikeAlly, ReiditeSpikeAlly];
        sprite[10011] = [ReiditeSpikeEnemy, ReiditeSpikeEnemy];
        sprite[54] = [GoldenFork, GoldenFork];
        let _0x50740b = Array.prototype.push;
        Array.prototype.push = function (_0x2d1fa7) {
          if (_0x2d1fa7) {
            let _0x46e4d9 = Object.keys(_0x2d1fa7);
            if (_0x46e4d9.length == 5 && _0x46e4d9.includes("draw") && _0x46e4d9.includes("in_button") && _0x2d1fa7.id !== 32 && _0x2d1fa7.id !== 130 && _0x2d1fa7.id !== 127 && _0x2d1fa7.id !== 4 && _0x2d1fa7.id !== 25 && _0x2d1fa7.id !== 34 && _0x2d1fa7.id !== 87) {
              unsafeWindow.inventory = this;
            }
          }
          unsafeWindow.wow = [K];
          if (_0x2d1fa7 && _0x2d1fa7.type != null && _0x2d1fa7.id != null && _0x2d1fa7.x && _0x2d1fa7.y) {
            if (_0x2d1fa7.type === 0 && w === unsafeWindow.playerID) {
              unsafeWindow.player = _0x2d1fa7;
            }
            switch (_0x2d1fa7.type) {
              case _0x3d2e54.GOLDFORK:
                {
                  _0x2d1fa7.ally = unsafeWindow.playerID === _0x2d1fa7[w] || B(_0x2d1fa7[w]);
                  let _0x2dfe2f = _0x2d1fa7[wow];
                  _0x2d1fa7[wow] = function (_0x8c3369) {
                    if (d.ColoredSpikes) {
                      if (_0x2d1fa7.ally) {
                        return _0x2dfe2f.apply(this, [54]);
                      } else {
                        return _0x2dfe2f.apply(this, [54]);
                      }
                    } else {
                      return _0x2dfe2f.apply(this, arguments);
                    }
                  };
                  break;
                }
              case _0x3d2e54.SPIKE:
                {
                  _0x2d1fa7.ally = unsafeWindow.playerID === _0x2d1fa7[w] || B(_0x2d1fa7[w]);
                  let _0x201f3c = _0x2d1fa7[wow];
                  _0x2d1fa7[wow] = function (_0x2f8e0d) {
                    if (d.ColoredSpikes) {
                      if (_0x2d1fa7.ally) {
                        return _0x201f3c.apply(this, [10000]);
                      } else {
                        return _0x201f3c.apply(this, [10001]);
                      }
                    } else {
                      return _0x201f3c.apply(this, arguments);
                    }
                  };
                  break;
                }
              case _0x3d2e54.STONE_SPIKE:
                {
                  _0x2d1fa7.ally = unsafeWindow.playerID === _0x2d1fa7[w] || B(_0x2d1fa7[w]);
                  let _0xf82f05 = _0x2d1fa7[wow];
                  _0x2d1fa7[wow] = function (_0x49c791) {
                    if (d.ColoredSpikes) {
                      if (_0x2d1fa7.ally) {
                        return _0xf82f05.apply(this, [10002]);
                      } else {
                        return _0xf82f05.apply(this, [10003]);
                      }
                    } else {
                      return _0xf82f05.apply(this, arguments);
                    }
                  };
                  break;
                }
              case _0x3d2e54.GOLD_SPIKE:
                {
                  _0x2d1fa7.ally = unsafeWindow.playerID === _0x2d1fa7[w] || B(_0x2d1fa7[w]);
                  let _0x585419 = _0x2d1fa7[wow];
                  _0x2d1fa7[wow] = function (_0x853153) {
                    if (d.ColoredSpikes) {
                      if (_0x2d1fa7.ally) {
                        return _0x585419.apply(this, [10004]);
                      } else {
                        return _0x585419.apply(this, [10005]);
                      }
                    } else {
                      return _0x585419.apply(this, arguments);
                    }
                  };
                  break;
                }
              case _0x3d2e54.DIAMOND_SPIKE:
                {
                  _0x2d1fa7.ally = unsafeWindow.playerID === _0x2d1fa7[w] || B(_0x2d1fa7[w]);
                  let _0x59afcb = _0x2d1fa7[wow];
                  _0x2d1fa7[wow] = function (_0x40bed9) {
                    if (d.ColoredSpikes) {
                      if (_0x2d1fa7.ally) {
                        return _0x59afcb.apply(this, [10006]);
                      } else {
                        return _0x59afcb.apply(this, [10007]);
                      }
                    } else {
                      return _0x59afcb.apply(this, arguments);
                    }
                  };
                  break;
                }
              case _0x3d2e54.AMETHYST_SPIKE:
                {
                  _0x2d1fa7.ally = unsafeWindow.playerID === _0x2d1fa7[w] || B(_0x2d1fa7[w]);
                  let _0xf03bc0 = _0x2d1fa7[wow];
                  _0x2d1fa7[wow] = function (_0x78f35c) {
                    if (d.ColoredSpikes) {
                      if (_0x2d1fa7.ally) {
                        return _0xf03bc0.apply(this, [10008]);
                      } else {
                        return _0xf03bc0.apply(this, [10009]);
                      }
                    } else {
                      return _0xf03bc0.apply(this, arguments);
                    }
                  };
                  break;
                }
              case _0x3d2e54.REIDITE_SPIKE:
                {
                  _0x2d1fa7.ally = unsafeWindow.playerID === _0x2d1fa7[w] || B(_0x2d1fa7[w]);
                  let _0x197f27 = _0x2d1fa7[wow];
                  _0x2d1fa7[wow] = function (_0x2d18ba) {
                    if (d.ColoredSpikes) {
                      if (_0x2d1fa7.ally) {
                        return _0x197f27.apply(this, [10010]);
                      } else {
                        return _0x197f27.apply(this, [10011]);
                      }
                    } else {
                      return _0x197f27.apply(this, arguments);
                    }
                  };
                  break;
                }
              case h()[0]:
                {
                  console.log(_0x2d1fa7);
                  let _0x479152 = _0x2d1fa7[wow];
                  console.log(_0x479152);
                }
            }
          }
          return _0x50740b.apply(this, arguments);
        };
      }
    })();
    Q();
    PlayersOnTop();
    ga();
    AutoOven();
    AutoOvenPut();
    ha();
    Mobs();
    setInterval(AfkHook, 2000);
    AutoPutMaterial();
    AutoDoPlayer();
    AutoGreen();
    DurabilityInfo();
    Xray();
    setInterval(AutoIce, 5000);
    FireInfo();
    PlayerTracers();
    BoxTracers();
    Winter();
    percanteges();
    machinei();
    Desert();
    Sea();
    SpectatorW();
    OvenInfo();
    setInterval(Antireconnect, 50);
    AloveraTracers();
    (function () {
      const _0x2a19fd = document.querySelector("canvas").getContext("2d");
      (function _0x5bcb36() {
        requestAnimationFrame(_0x5bcb36);
        b();
        (function () {
          const _0x4e4201 = [24, 25, 26, 27, 28, 32];
          for (let _0x1883ee = 0; _0x1883ee < _0x4e4201.length; ++_0x1883ee) {
            const _0x27b2b4 = _0x4e4201[_0x1883ee];
            const _0x2aa404 = h()[_0x27b2b4];
            if (p() === true) {
              for (let _0x50cfb8 = 0; _0x50cfb8 < _0x2aa404.length; _0x50cfb8++) {
                const _0x7ea267 = _0x2aa404[_0x50cfb8];
                _0x2a19fd.save();
                _0x2a19fd.lineWidth = 8;
                _0x2a19fd.font = "26px Baloo Paaji";
                _0x2a19fd.strokeStyle = "#000";
                _0x2a19fd.fillStyle = (_0x7ea267.info & 255) > 0 ? "lime" : "white";
                _0x2a19fd.strokeText("" + (_0x7ea267.info & 255), _0x7ea267.x - 20 + u()[0], _0x7ea267.y + u()[1]);
                _0x2a19fd.fillText("" + (_0x7ea267.info & 255), _0x7ea267.x - 20 + u()[0], _0x7ea267.y + u()[1]);
                _0x2a19fd.restore();
              }
              for (let _0x25a030 = 0; _0x25a030 < _0x2aa404.length; ++_0x25a030) {
                const _0x108d5a = _0x2aa404[_0x25a030];
                _0x2a19fd.save();
                _0x2a19fd.lineWidth = 8;
                _0x2a19fd.font = "26px Baloo Paaji";
                _0x2a19fd.strokeStyle = "#000";
                _0x2a19fd.fillStyle = _0x108d5a.info >> 8 > 0 ? "yellow" : "white";
                _0x2a19fd.strokeText("" + ((_0x108d5a.info & 65280) >> 8), _0x108d5a.x - 20 + u()[0], _0x108d5a.y + 20 + u()[1]);
                _0x2a19fd.fillText("" + ((_0x108d5a.info & 65280) >> 8), _0x108d5a.x - 20 + u()[0], _0x108d5a.y + 20 + u()[1]);
                _0x2a19fd.restore();
              }
            }
          }
        })();
      })();
    })();
    ka();
    H();
    (function () {
      let _0xad7e67 = Object.keys(da)[115];
      da[_0xad7e67] = _0x527001 => {
        a = _0x527001;
        f([aa.recycle, _0x527001]);
      };
    })();
    la();
    (function () {
      let _0x8cddfa = Object.keys(da)[119];
      let _0x52a2e3 = Object.keys(da)[103];
      let _0x3e0e46 = Object.keys(c)[29];
      let _0xee8863 = da[_0x8cddfa];
      let _0x1f7e74 = da[_0x52a2e3];
      c[_0x3e0e46];
      da[_0x8cddfa] = function () {
        d.AutoCrown.attack = false;
        return _0xee8863.apply(this, arguments);
      };
      da[_0x52a2e3] = function () {
        if (d.AutoCrown.enabled) {
          f([aa.equip, 79]);
          f([aa.equip, d.AutoCrown.last]);
        }
        return _0x1f7e74.apply(this, arguments);
      };
    })();
    V();
    MoveBot();
    fa();
    N();
    Z();
    (function () {
      let _0x4dc007 = Object.keys(da)[137];
      let _0x4e6577 = Object.keys(da)[136];
      let _0x985cb1 = Object.keys(i)[85];
      let _0x53d3f4 = da[_0x4dc007];
      da[_0x4dc007] = function () {
        if (d.AutoRespawn.enabled) {
          da[_0x4e6577]();
          i.waiting = false;
          i[_0x985cb1]();
        }
        return _0x53d3f4.apply(this, arguments);
      };
    })();
    ea();
    W();
    X();
    R();
    (function () {
      let _0x400eb6 = Object.values(ca)[6];
      let _0xb0c06b = Object.values(ca)[7];
      unsafeWindow.wrld = {
        nw: _0x400eb6,
        nh: _0xb0c06b
      };
    })();
    J();
    BringHood();
    G();
  }
  unsafeWindow.Utils = pa;
  document.addEventListener("keydown", _0xdce20b => {
    switch (m() === false && _0xdce20b.code) {
      case d.AutoBuild.key:
        d.AutoBuild.enabled = !d.AutoBuild.enabled;
        break;
      case d.AutoFire.key:
        d.AutoFire.enabled = true;
        break;
      case d.AutoSpike.key:
        d.AutoSpike.enabled = true;
        break;
      case d.drop.key:
        d.drop.enabled = true;
        break;
      case d.SwordInchest.key:
        d.SwordInchest.enabled = true;
        break;
      case d.AutoPutRed.key:
        if (d.AutoPutRed.enabled === false) {
          ha();
          qa = setInterval(J, 100);
        }
        d.AutoPutRed.enabled = true;
        break;
      case d.AMB.key:
        d.AMB.enabled = !d.AMB.enabled;
        break;
      case d.AutoSteal.key:
        if (d.AutoSteal.enabled === false) {
          ia();
          ra = setInterval(ia, 100);
        }
        d.AutoSteal.enabled = true;
        break;
      case d.AutoTotem.key:
        d.AutoTotem.enabled = true;
        break;
      case d.dropsword.key:
        d.dropsword.enabled = true;
    }
  });
  document.addEventListener("keyup", _0x1ac14b => {
    switch (m() === false && _0x1ac14b.code) {
      case d.AutoFire.key:
        d.AutoFire.enabled = false;
        break;
      case d.AutoSpike.key:
        d.AutoSpike.enabled = false;
        break;
      case d.drop.key:
        d.drop.enabled = false;
        break;
      case d.SwordInchest.key:
        d.SwordInchest.enabled = false;
        break;
      case d.AutoPutRed.key:
        clearInterval(qa);
        d.AutoPutRed.enabled = false;
        break;
      case d.AutoSteal.key:
        clearInterval(ra);
        d.AutoSteal.enabled = false;
        break;
      case d.AutoTotem.key:
        d.AutoTotem.enabled = false;
        break;
      case d.dropsword.key:
        d.dropsword.enabled = false;
    }
  });
  let ta = 0;
  setInterval(function () {
    try {
      if (ta === 0 && c !== undefined && ca.w !== undefined && da !== undefined) {
        C = setInterval(q, 100);
        t = setInterval(I, 100);
        v = setInterval(P, 100);
        E = setInterval(D, 100);
        pa.LoadHack();
        sa();
        unsafeWindow.mp = b();
        r("On");
        ta++;
      }
    } catch (_0xe108a3) {
      r("Off");
      r(_0xe108a3);
    }
  }, 200);