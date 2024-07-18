//Thu Jul 18 2024 18:37:55 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const CryptoJS = require("crypto-js"),
  querystring = require("querystring"),
  common = require("./Rebels_jdCommon"),
  wuxianDefense = function () {
    const i1li1i = [],
      liIiI1 = ["/wxScratchActive/start", "/wxPointDrawActivity/start", "/wxPointBlindBox/start", "/wxGashaponActive/start", "/wxDollGrabbing/start", "/wxDrawActivity/start", "/wx/completeInfoActivity/save", "/activity/daily/wx/grabGift", "/sign/wx/signUp", "/sign/sevenDay/wx/signUp", "/wxTeam/saveCaptain", "/wxTeam/saveMember"],
      lIil = [...i1li1i, ...liIiI1],
      lII1ii = ["B6dB3QqGZP1lKNICTaiAeNJSHKNepO5GGgtL6FUceqSlpFZCdx2SZ5MPPbzrgy91HeR0dnJazcMrvMgPF7bhFrfsGaApJKk4JohEEhoJ4kKJpAaGsfrFhb7FPgMvrMczaJnd0ReH19ygrzbPPM5ZS2xdCZFplSqecUF6LtgGG5OpeNKHSJNeAiaTCINKl1PZGqQ3Bd6B", "EUhzJoyKP7VydtpyBwNUGU2tqzI0QB0LIpQ10Fk3hX2ZcPoGRpACqmzcTQbKd98i3U7raFz2rMl2kys0ODgtAh22E3i57wmh38RbbR83hmw75i3E22hAtgDO0syk2lMr2zFar7U3i89dKbQTczmqCApRGoPcZ2Xh3kF01QpIL0BQ0Izqt2UGUNwByptdyV7PKyoJzhUE", "xexcHoyVwOs5TYTQVvU0iXn56ryKVdWedLTpq3KEKmbUHfwzuZjIpZOPVXMEappFhjdqwtp1bBrWaRBCfPFwCq2W8SsyvwqZ6sIGGIs6ZqwvysS8W2qCwFPfCBRaWrBb1ptwqdjhFppaEMXVPOZpIjZuzwfHUbmKEK3qpTLdeWdVKyr65nXi0UvVQTYT5sOwVyoHcxex", "2Llnegc5i4flqd4HZPFK210yh61boBxRSdnNVMeudKimx92Qi4aPuHP12HmEImbWrXjLgBGqy1bSnKvLhqMqhknyuse4nFoeLTkJJkTLeoFn4esuynkhqMqhLvKnSb1yqGBgLjXrWbmIEmH21PHuPa4iQ29xmiKdueMVNndSRxBob16hy012KFPZH4dqlf4i5cgenlL2", "dZzoMZF6xtt3voTFDbPzEZ7GeM8t7uY05d4K4xfhtdxELh96dDRB4oRYA2smET5dy1dafGkXOz2V7tNOVi0vSqfuhI99IKprVK6QQ6KVrpKI99IhufqSv0iVONt7V2zOXkGfad1yd5TEms2AYRo4BRDd69hLExdthfx4K4d50Yu7t8MeG7ZEzPbDFTov3ttx6FZMozZd", "SNYr3bWMtQulWZO2FEwuhSFp3EXPR1TujPRJwUFlxBh9Pvf2MeTEpR7a3dU6e9rNUMyBh2osDdK4Vdm4gZ0XcRCoHZPi2jiXT2dCCd2TXij2iPZHoCRcX0Zg4mdV4KdDso2hByMUNr9e6Ud3a7RpETeM2fvP9hBxlFUwJRPjuT1RPXE3pFShuwEF2OZWluQtMWb3rYNS", "4viQ2FrYHcrH44gqvPLo6KtiFu56AW1eXbDBZrBepzdLKE33Ey4TwFERnkVLnbHAXbKqAi0HFP9Eu7yg8WNlI7q2dvXGGiPaMbrBBrbMaPiGGXvd2q7IlNW8gy7uE9PFH0iAqKbXAHbnLVknREFwT4yE33EKLdzpeBrZBDbXe1WA65uFitK6oLPvqg44HrcHYrF2Qiv4", "0VIoSHBNVAW8De7NquFyEUm0o9xNnQJGn2OR1yOK9djWALhyP3a1XoQEwTnXuzypRuwsaLPUlertksOY6LYmnbQmPgdDQRXXKdKooKdKXXRQDdgPmQbnmYL6YOsktrelUPLaswuRpyzuXnTwEQoX1a3PyhLAWjd9KOy1RO2nGJQnNx9o0mUEyFuqN7eD8WAVNBHSoIV0", "fdJPBiTra9E0qg2HJrobeEC2SkOfSzbw6nG5J5ACx42GQDBsCyGfxNlHHYhl7EmkdvYaKAXUVXSKcTT1KhyYaj9Q4YtyhnOA7cLrrLc7AOnhytY4Q9jaYyhK1TTcKSXVUXAKaYvdkmE7lhYHHlNxfGyCsBDQG24xCA5J5Gn6wbzSfOkS2CEeborJH2gq0E9arTiBPJdf", "kLOA93PyUOX3QdlLuZ9JgNq1peyIITAQSnKzuLBZ2NthOSseAJMGCecvSLVKAww61Y31hJ4l7kAOcjLmtqQNJlNyJb5yu9d9vqWUUWqv9d9uy5bJyNlJNQqtmLjcOAk7l4Jh13Y16wwAKVLSvceCGMJAesSOhtN2ZBLuzKnSQATIIyep1qNgJ9ZuLldQ3XOUyP39AOLk"];
    function lII1il(Il1Ili, Ii1ii, lli1II) {
      let iiiI1 = Date.now() + parseInt(lli1II);
      if (typeof Il1Ili !== "object") {
        Il1Ili = JSON.parse(Il1Ili);
      }
      Il1Ili.nowTime = iiiI1;
      let lII1i = Ii1ii + iiiI1;
      const {
          keyBytes: lII1l,
          ivBytes: i11lll
        } = ilI(lII1i),
        il11iI = CryptoJS.AES.encrypt(JSON.stringify(Il1Ili), lII1l, {
          "iv": i11lll,
          "mode": CryptoJS.mode.ECB,
          "padding": CryptoJS.pad.Pkcs7
        });
      return il11iI.toString();
    }
    function Il1Iii(lll1I, IIIi1i, IIIi1l) {
      let l1i1li = Date.now() + parseInt(IIIi1l),
        IlIl1l = IIIi1i + l1i1li;
      const {
          keyBytes: Ili1I,
          ivBytes: I1IiII
        } = ilI(IlIl1l),
        Ili11 = CryptoJS.AES.decrypt(lll1I, Ili1I, {
          "iv": I1IiII,
          "mode": CryptoJS.mode.ECB,
          "padding": CryptoJS.pad.Pkcs7
        }),
        iiIiI = CryptoJS.enc.Utf8.stringify(Ili11).toString();
      try {
        return JSON.parse(iiIiI);
      } catch {
        return iiIiI;
      }
    }
    function Ii1iI(il1iii) {
      const i1iIl = Object.fromEntries(lIil.map(i1iIi => [i1iIi, true]));
      return i1iIl[il1iii] !== undefined;
    }
    function Il1Iil(I1i) {
      I1i = I1i.split("").reverse().join("");
      const lI1iI = new Uint8Array(12),
        liIi11 = new TextEncoder().encode(I1i);
      for (let lII11I = 0; lII11I < liIi11.length; lII11I += 2) {
        let iilIi = liIi11[lII11I] << 5 | liIi11[lII11I + 1] & 255;
        iilIi %= 63;
        lI1iI[lII11I >> 1] = iilIi;
      }
      let Ili1i = "";
      for (let ill1li = 0; ill1li < lI1iI.length; ill1li++) {
        Ili1i += (lI1iI[ill1li] + 256).toString(2).slice(1);
      }
      let ii1111 = "",
        il1ilI = "";
      for (let ililii = 0; ililii < 16; ililii++) {
        if (ililii !== 0) {
          const il1il1 = ililii * 6,
            iilIl = Ili1i.substring(il1il1, il1il1 + 6);
          let lII111 = parseInt(iilIl, 2);
          const I1liI = il1ilI.split("");
          for (let ill1ll = 0; ill1ll < I1liI.length; ill1ll++) {
            I1liI[ill1ll] === "1" && (lII111 = (lII111 >> 6 - ill1ll | lII111 << ill1ll) & 63);
          }
          il1ilI = (lII111 & 63).toString(2).padStart(6, "0");
        } else il1ilI = Ili1i.substring(0, 6);
        ii1111 += il1ilI;
      }
      for (let IlIIIl = 0; IlIIIl < 12; IlIIIl++) {
        const lI1il = IlIIIl * 8;
        lI1iI[IlIIIl] = parseInt(ii1111.substring(lI1il, lI1il + 8), 2);
      }
      return btoa(String.fromCharCode.apply(null, lI1iI));
    }
    function ilI(IlIIIi) {
      const lii1i1 = IlIIIi.substring(0, IlIIIi.length - 5);
      let lIIIiI = "";
      for (let lli11l = 0; lli11l < lii1i1.length; lli11l++) {
        let ll1iI1 = lii1i1.charCodeAt(lli11l),
          i1iII = ll1iI1 % 10,
          IiIliI = lII1ii[i1iII][lli11l];
        lIIIiI += IiIliI;
      }
      var ii111l = lIIIiI.length,
        ii111i = Math.floor(ii111l / 24),
        iilII = "";
      for (var i1iI1 = 0; i1iI1 < 24; i1iI1++) {
        var lIIIi1 = (i1iI1 + 1) * ii111i;
        i1iI1 === 23 && (lIIIi1 = ii111l);
        var IiIlil = lIIIiI.substring(i1iI1 * ii111i, lIIIi1);
        var liIi1i = [];
        for (var IiIlii = 0; IiIlii < IiIlil.length; IiIlii++) {
          liIi1i.push(IiIlil.charCodeAt(IiIlii));
        }
        var I1lii = liIi1i.reduce(function (ii11i, lIIlIl) {
          return ii11i + lIIlIl;
        }, 0);
        var I1lil = Math.floor(I1lii / liIi1i.length);
        iilII += String.fromCharCode(I1lil);
      }
      lIIIiI = iilII;
      const IlIIII = Il1Iil(lIIIiI),
        lii1iI = CryptoJS.enc.Utf8.parse(IlIIII),
        lll1Il = CryptoJS.enc.Utf8.parse("");
      return {
        "keyBytes": lii1iI,
        "ivBytes": lll1Il
      };
    }
    const iIIlI = function () {
      const iIIiIl = CryptoJS.enc.Utf8.parse("Hd5W5ONsYKmGm9QA"),
        IiIli1 = CryptoJS.enc.Utf8.parse("2JjUvJEAsA2Yog==");
      function ii1lII(I1llI) {
        typeof I1llI !== "string" && (I1llI = JSON.stringify(I1llI));
        const lI1li = CryptoJS.enc.Utf8.parse(I1llI),
          lll1I1 = CryptoJS.AES.encrypt(lI1li, iIIiIl, {
            "iv": IiIli1,
            "mode": CryptoJS.mode.CBC,
            "padding": CryptoJS.pad.Pkcs7
          });
        return CryptoJS.enc.Base64.stringify(lll1I1.ciphertext);
      }
      function IlIl1I(lIIlII) {
        const ii1lIl = CryptoJS.enc.Base64.parse(lIIlII),
          il1II = CryptoJS.enc.Base64.stringify(ii1lIl),
          ii1lIi = CryptoJS.AES.decrypt(il1II, iIIiIl, {
            "iv": IiIli1,
            "mode": CryptoJS.mode.CBC,
            "padding": CryptoJS.pad.Pkcs7
          }),
          I1lll = CryptoJS.enc.Utf8.stringify(ii1lIi).toString();
        try {
          return JSON.parse(I1lll);
        } catch {
          return I1lll;
        }
      }
      return {
        "encrypt": ii1lII,
        "decrypt": IlIl1I
      };
    }();
    return {
      "encrypt": lII1il,
      "decrypt": Il1Iii,
      "isDefenseApi": Ii1iI,
      "interactionV2": iIIlI
    };
  }();
async function jsTk(I1lli, lii1lI, l1Ii11 = {}, lliIi1 = {}) {
  let iI1II1 = {
    "eid": "",
    "jsToken": "",
    "fp": ""
  };
  function ii111(i1l11I) {
    i1l11I = JSON.stringify(i1l11I);
    i1l11I = encodeURIComponent(i1l11I);
    var IiiilI = "",
      i111 = 0;
    do {
      var i1iIIi = i1l11I.charCodeAt(i111++),
        i1iIIl = i1l11I.charCodeAt(i111++),
        I11III = i1l11I.charCodeAt(i111++),
        l1I1 = i1iIIi >> 2;
      i1iIIi = (i1iIIi & 3) << 4 | i1iIIl >> 4;
      var IiIlli = (i1iIIl & 15) << 2 | I11III >> 6,
        IiIlll = I11III & 63;
      isNaN(i1iIIl) ? IiIlli = IiIlll = 64 : isNaN(I11III) && (IiIlll = 64);
      IiiilI = IiiilI + "23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-".charAt(l1I1) + "23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-".charAt(i1iIIi) + "23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-".charAt(IiIlli) + "23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-".charAt(IiIlll);
    } while (i111 < i1l11I.length);
    return IiiilI + "/";
  }
  try {
    const lii1ii = HASH.hash128([I1lli.substring(0, 90), "zh-CN", "applewebkit_chrome", "605.1.15", "NA", "NA", 32, "932x430", -480, "sessionStorageKey", "localStorageKey", "indexedDbKey", "openDatabase", "NA", "iPhone", 10, "NA", "", null, null].join("~~~"), 31);
    iI1II1.fp = lii1ii;
    const llilIl = ii111(Object.assign({}, {
        "pin": "",
        "oid": "",
        "bizId": "jd-babelh5",
        "fc": "",
        "mode": "strict",
        "p": /^https:/.test(lii1lI) ? "s" : "h",
        "fp": lii1ii,
        "ctype": 1,
        "v": "3.2.1.1",
        "f": "3",
        "o": lii1lI.replace(/^https?:\/\//, ""),
        "qs": "",
        "jsTk": "",
        "qi": "",
        "stk": ""
      }, l1Ii11)),
      lii1il = ii111(Object.assign({}, {
        "ts": {
          "deviceTime": Date.now(),
          "deviceEndTime": Date.now() + 20
        },
        "ca": {
          "tdHash": ""
        },
        "m": {
          "compatMode": "CSS1Compat"
        },
        "fo": ["Bauhaus 93", "Chalkduster", "Impact", "Menlo", "Papyrus", "Rockwell"],
        "n": {
          "standalone": false,
          "hardwareConcurrency": 4,
          "webdriver": false,
          "maxTouchPoints": 5,
          "cookieEnabled": true,
          "appCodeName": "Mozilla",
          "appName": "Netscape",
          "appVersion": /\/(.+)/g.exec(I1lli) && /\/(.+)/g.exec(I1lli)[1] || I1lli,
          "platform": "iPhone",
          "product": "Gecko",
          "productSub": "20030107",
          "userAgent": I1lli,
          "vendor": "Apple Computer, Inc.",
          "vendorSub": "",
          "language": "zh-CN",
          "onLine": true,
          "pdfViewerEnabled": true,
          "javaEnabled": false,
          "enumerationOrder": ["sendBeacon", "standalone", "hardwareConcurrency", "clipboard", "audioSession", "credentials", "geolocation", "mediaCapabilities", "mediaSession", "mediaDevices", "permissions", "wakeLock", "locks", "webdriver", "maxTouchPoints", "userActivation", "cookieEnabled", "appCodeName", "appName", "appVersion", "platform", "product", "productSub", "userAgent", "vendor", "vendorSub", "language", "languages", "onLine", "plugins", "mimeTypes", "pdfViewerEnabled", "storage", "requestMediaKeySystemAccess", "getGamepads", "javaEnabled", "canShare", "share"]
        },
        "p": [],
        "w": {
          "devicePixelRatio": 1,
          "screenTop": 0,
          "screenLeft": 0
        },
        "s": {
          "availHeight": 844,
          "availWidth": 390,
          "colorDepth": 24,
          "height": 844,
          "width": 390,
          "pixelDepth": 24
        },
        "sc": {
          "ActiveBorder": "rgb(118, 118, 118)",
          "ActiveCaption": "rgb(0, 0, 0)",
          "AppWorkspace": "rgb(255, 255, 255)",
          "Background": "rgb(255, 255, 255)",
          "ButtonFace": "rgb(239, 239, 239)",
          "ButtonHighlight": "rgb(239, 239, 239)",
          "ButtonShadow": "rgb(239, 239, 239)",
          "ButtonText": "rgb(0, 0, 0)",
          "CaptionText": "rgb(0, 0, 0)",
          "GrayText": "rgb(128, 128, 128)",
          "Highlight": "rgba(51, 181, 229, 0.4)",
          "HighlightText": "rgb(255, 255, 255)",
          "InactiveBorder": "rgb(118, 118, 118)",
          "InactiveCaption": "rgb(255, 255, 255)",
          "InactiveCaptionText": "rgb(128, 128, 128)",
          "InfoBackground": "rgb(255, 255, 255)",
          "InfoText": "rgb(0, 0, 0)",
          "Menu": "rgb(255, 255, 255)",
          "MenuText": "rgb(0, 0, 0)",
          "Scrollbar": "rgb(255, 255, 255)",
          "ThreeDDarkShadow": "rgb(118, 118, 118)",
          "ThreeDFace": "rgb(239, 239, 239)",
          "ThreeDHighlight": "rgb(118, 118, 118)",
          "ThreeDLightShadow": "rgb(118, 118, 118)",
          "ThreeDShadow": "rgb(118, 118, 118)",
          "Window": "rgb(255, 255, 255)",
          "WindowFrame": "rgb(118, 118, 118)",
          "WindowText": "rgb(0, 0, 0)"
        },
        "ss": {
          "cookie": true,
          "localStorage": true,
          "sessionStorage": true,
          "globalStorage": false,
          "indexedDB": true
        },
        "tz": -480,
        "lil": "",
        "wil": ""
      }, lliIi1)),
      ll1iIi = {
        "url": "https://gia.jd.com/jsTk.do",
        "method": "POST",
        "headers": {
          "Accept": "*/*",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7,en-GB;q=0.6",
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
          "Connection": "keep-alive",
          "Host": "gia.jd.com",
          "Origin": common.parseUrl(lii1lI)?.["origin"] || "https://pro.m.jd.com",
          "Referer": lii1lI,
          "Sec-Fetch-Dest": "empty",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Site": "same-site",
          "User-Agent": I1lli
        },
        "params": {
          "a": llilIl
        },
        "data": {
          "d": lii1il
        },
        "proxy": null,
        "timeout": 60000,
        "debug": false
      };
    let llilIi = 0,
      IIi1ll = null;
    const ll1iIl = 1;
    while (llilIi < ll1iIl) {
      const lIIIil = await common.request(ll1iIi);
      if (!lIIIil.success) {
        IIi1ll = "❌ jsTk 请求失败 ➜ " + lIIIil.error;
        llilIi++;
        continue;
      }
      if (!lIIIil.data) {
        IIi1ll = "🚫 jsTk 请求失败 ➜ 无响应数据";
        llilIi++;
        continue;
      }
      try {
        const i1l11l = lIIIil.data;
        if (i1l11l?.["data"]?.["eid"] && i1l11l?.["data"]?.["token"]) return iI1II1.eid = i1l11l.data.eid, iI1II1.jsToken = i1l11l.data.token, iI1II1;
        IIi1ll = "🚫 jsTk 请求异常 ➜ " + JSON.stringify(i1l11l);
      } catch (ilI1) {
        IIi1ll = "❌ jsTk 在处理接口响应时遇到了错误 ➜ " + (ilI1.message || ilI1);
      }
      llilIi++;
    }
    llilIi >= ll1iIl && console.log(IIi1ll);
  } catch (IiIllI) {
    console.log("❌ 在处理 jsTk 时遇到了错误 ➜ " + (IiIllI.message || IiIllI));
  }
  return iI1II1;
}
function getJdEnvInfo(i1llI1, lii1l1) {
  function llilII() {
    try {
      for (var ill1ii = [], lllli1 = 0; 32 > lllli1; lllli1++) ill1ii[lllli1] = "0123456789abcdef".charAt(Math.floor(16 * Math.random()));
      return ill1ii[14] = "4", ill1ii[19] = "0123456789abcdef".charAt(ill1ii[19] & 3 | 8), ill1ii[8] = ill1ii[13] = ill1ii[18] = ill1ii[23], ill1ii.join("");
    } catch (i1llII) {
      return "";
    }
  }
  try {
    const lIiiII = new URL(lii1l1),
      I11l11 = lIiiII.pathname.slice(0, lIiiII.pathname.lastIndexOf("/") + 1);
    return {
      "version": "1.0.0",
      "data": common.Base64.encode(JSON.stringify({
        "userAgent": i1llI1,
        "url": lIiiII.hostname.concat(I11l11),
        "urlQStr": lIiiII.search.slice(1),
        "language": "zh-CN",
        "browser": "applewebkit_chrome",
        "browserVersion": null,
        "os": "NA",
        "osVersion": "NA",
        "screenResolution": "932x430",
        "timezoneOffset": -8,
        "sessionStorage": "true",
        "localStorage": "true",
        "indexedDb": "true",
        "openDatabase": "false",
        "hardwareConcurrency": 4,
        "doNotTrack": "NA",
        "platform": "iPhone",
        "canvasFp": llilII(),
        "webglFp": "",
        "fp": HASH.hash128([i1llI1.substring(0, 90), "zh-CN", "applewebkit_chrome", "605.1.15", "NA", "NA", 32, "932x430", -480, "sessionStorageKey", "localStorageKey", "indexedDbKey", "openDatabase", "NA", "iPhone", 10, "NA", "", null, null].join("~~~"), 31),
        "randomId": llilII()
      }), "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=")
    };
  } catch (I11l1l) {
    return null;
  }
}
class H5st {
  constructor() {
    this._defaultVersion = "4.7";
    this._supportVersions = ["3.1", "4.1", "4.2", "4.3", "4.4", "4.7"];
    this._keyCharsetMap = {
      "algo": "wm0!@w-s#ll1flo(",
      "algo4_7": "(olf1ll#s-w@!0mw",
      3.1: "wm0!@w_s#ll1flo(",
      4.1: "HL4|FW#Chc3#q?0)",
      4.2: "DNiHi703B0&17hh1",
      4.3: "&d74&yWoV.EYbWbZ",
      4.4: "r1T.6Vinpb.k+/a)",
      4.7: "X[FMV04Nfvd?Y6M_"
    };
    this._keyMap = {};
    for (const ill1i1 in this._keyCharsetMap) {
      this._keyMap[ill1i1] = CryptoJS.enc.Utf8.parse(this._keyCharsetMap[ill1i1]);
    }
    this._iv = CryptoJS.enc.Utf8.parse("0102030405060708");
    this._fvMap = {
      3.1: "v3.2.0",
      4.1: "v0.1.6",
      4.2: "h5_npm_v4.2.0",
      4.3: "h5_file_v4.3.3",
      4.4: "h5_file_v4.4.0",
      4.7: "h5_file_v4.7.4"
    };
    this._timePaddingMap = {
      3.1: "",
      4.1: "04",
      4.2: "74",
      4.3: "22",
      4.4: "88",
      4.7: "47"
    };
    this._genLocalTKCipherMap = {
      4.7: {
        "secret1": "4*iK&33Z|+6)",
        "prefix": "FX",
        "secret2": "zR>U5mz40W99&8sg"
      }
    };
    this._genAlgoSuffixStrMap = {
      4.7: "Mp(2C1"
    };
    this._useAlgoTokenCache = true;
    this._useLocalTKAlgo = false;
    this._tokenStorageMap = Object.fromEntries(this._supportVersions.map(il1iiI => [il1iiI, {}]));
    this._genAlgoMethodStorageMap = Object.fromEntries(this._supportVersions.map(lliIil => [lliIil, {}]));
    this._fpMap = new Map();
    this._latestAppVersionData = {
      "build": "169427",
      "version": "13.1.3"
    };
    this._latestIOSVersion = "17.5.1";
    this._algorithm4_7 = {
      "enc": CryptoJS.enc
    };
    const I11l1i = ["MD5", "SHA1", "SHA256", "SHA512"],
      lliIl1 = ["HmacMD5", "HmacSHA1", "HmacSHA256", "HmacSHA512"];
    let Ilii1I = "7n5<G*",
      ilII = 5;
    for (let IIi1iI of I11l1i) {
      this._algorithm4_7[IIi1iI] = function (lliIii) {
        return CryptoJS[IIi1iI](lliIii + Ilii1I);
      };
    }
    for (let il1ii1 of lliIl1) {
      this._algorithm4_7[il1ii1] = function (IIII1, iIi1) {
        return CryptoJS[il1ii1](IIII1 + Ilii1I, iIi1.slice(0, ilII).split("").map(l1i1l1 => String.fromCharCode(158 - l1i1l1.charCodeAt(0))).reverse().join("") + iIi1.slice(ilII));
      };
    }
    this._algorithm4_7.enc.Base64.encode = function (ill1iI) {
      let Il11ll = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".split("").filter(Boolean),
        Il11li = "WVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwvutsrqponmlkjihgfedcbaZYX".split("").filter(Boolean),
        i1lIi1 = Object.fromEntries(Il11ll.map((lIlil, iIi1li) => [lIlil, Il11li[iIi1li]])),
        l1i1il = ill1iI.ciphertext.toString(),
        lil1l1 = 3 - ill1iI.ciphertext.sigBytes % 3;
      for (let l11I11 of Array(lil1l1)) {
        l1i1il += "0" + lil1l1;
      }
      let I1i1ll = new Buffer.from(l1i1il, "hex").toString("Base64").split("").reverse().join("");
      return I1i1ll.split("").map(ii1II => i1lIi1[ii1II] || ii1II).join("").replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
    };
    this._algorithmMap = {
      4.7: this._algorithm4_7
    };
    this.ADLER32 = this.load_module_ADLER32();
  }
  async ["getH5st"](IIIIl) {
    let liili1 = Object.assign({}, IIIIl, {
      "h5st": "",
      "params": "",
      "paramsData": {}
    });
    try {
      if (!(typeof IIIIl === "object" && IIIIl !== null)) {
        return console.log("❌ getH5st 传入参数有误"), liili1;
      } else {
        const li1iil = ["appId", "appid", "body", "functionId"],
          i1iI1l = li1iil.filter(i1lIIi => !IIIIl[i1lIIi]);
        if (i1iI1l.length > 0) {
          return console.log("❌ getH5st 传入参数有误，缺少必要参数：" + i1iI1l.join(", ")), liili1;
        }
      }
      !this._supportVersions.includes(IIIIl?.["version"]) && (IIIIl.version = this._defaultVersion);
      const Il1lli = this._initParams(IIIIl),
        {
          appid: l11I1i,
          body: I1i1l1,
          client: ilIi11,
          clientVersion: ll1i1I,
          functionId: Il1lll
        } = IIIIl;
      let lil1iI = this._tokenStorageMap[Il1lli.version][Il1lli.appId],
        IIl11 = this._genAlgoMethodStorageMap[Il1lli.version][Il1lli.appId];
      if (!lil1iI || !IIl11) {
        let liii1 = false;
        switch (Il1lli.version) {
          case "4.7":
            liii1 = true;
            break;
        }
        if (this._useLocalTKAlgo && liii1) {
          lil1iI = this._genLocalTK(Il1lli.fp, this._genLocalTKCipherMap[Il1lli.version]);
          const lIllI = this._genAlgo,
            i1lIIl = this._genAlgoSuffixStrMap[Il1lli.version];
          IIl11 = function (...lli1) {
            return lIllI(...lli1, i1lIIl);
          };
        } else {
          const lil1il = await this._requestAlgorithm(Il1lli);
          lil1iI = lil1il.token;
          IIl11 = new Function("return ".concat(lil1il.algo))();
        }
        if (this._useAlgoTokenCache) {
          this._tokenStorageMap[Il1lli.version][Il1lli.appId] = lil1iI;
          this._genAlgoMethodStorageMap[Il1lli.version][Il1lli.appId] = IIl11;
        }
      }
      if (!lil1iI && !IIl11) return liili1;
      const iIli = {
        "appid": l11I1i,
        "body": I1i1l1,
        "client": ilIi11,
        "clientVersion": ll1i1I,
        "functionId": Il1lll
      };
      IIIIl?.["t"] && typeof IIIIl.t === "boolean" ? (IIIIl.t = Date.now(), iIli.t = IIIIl.t) : IIIIl.t = "";
      if (!iIli.client) delete iIli.client;
      if (!iIli.clientVersion) delete iIli.clientVersion;
      const l11I1l = this._makeSign(iIli, lil1iI, IIl11, Il1lli),
        Iilil1 = {
          "functionId": Il1lll,
          "body": JSON.stringify(I1i1l1),
          "t": "",
          "appid": l11I1i,
          "client": "",
          "clientVersion": "",
          "h5st": l11I1l?.["h5st"] || ""
        };
      for (const ll1i1l of ["t", "client", "clientVersion"]) {
        IIIIl[ll1i1l] ? Iilil1[ll1i1l] = IIIIl[ll1i1l] : delete Iilil1[ll1i1l];
      }
      Object.assign(liili1, {
        "h5st": l11I1l?.["h5st"] || "",
        "params": querystring.stringify(Iilil1),
        "paramsData": Iilil1
      });
    } catch (iIi1ii) {
      console.log("❌ 在生成 H5 签名时遇到了错误 " + (iIi1ii.message || iIi1ii));
    }
    return liili1;
  }
  ["_initParams"](i11i1l) {
    const llil11 = i11i1l.version,
      i11i1i = {
        "version": llil11,
        "appId": i11i1l?.["appId"] || "",
        "fv": this._fvMap[llil11],
        "fp": "",
        "ua": "",
        "sua": "",
        "av": "",
        "url": "",
        "og": "",
        "referer": i11i1l?.["referer"] || "",
        "pin": i11i1l?.["pin"] || "",
        "cookie": i11i1l?.["cookie"] || "",
        "timestamp": i11i1l?.["timestamp"] || Date.now()
      };
    if (i11i1l?.["ua"]) {
      let lIlii1 = i11i1l.ua,
        IIl1i = lIlii1.match(/^[\s\S]*?\(([\s\S]*?)\)/),
        liiil = lIlii1.match(/(?<=\/)[0-9]\.0[^'"\n]+/g);
      IIl1i?.["length"] > 0 && liiil?.["length"] > 0 && (i11i1i.ua = lIlii1, i11i1i.sua = IIl1i[1], i11i1i.av = liiil[0]);
    }
    if (!i11i1i.ua) {
      let lllIl1 = this._genUA(),
        Illi1I = lllIl1.match(/^[\s\S]*?\(([\s\S]*?)\)/),
        liiii = lllIl1.match(/(?<=\/)[0-9]\.0[^'"\n]+/g);
      if (Illi1I?.["length"] > 0 && liiii?.["length"] > 0) {
        i11i1i.ua = lllIl1;
        i11i1i.sua = Illi1I[1];
        i11i1i.av = liiii[0];
      }
    }
    i11i1i.version = llil11;
    i11i1i.fp = this._fpMap.get(i11i1i.ua) || "";
    !i11i1i.fp && (i11i1i.fp = this["" + "_makeFp".concat(i11i1i.version.replace(".", "_"))](), i11i1i.ua.startsWith("jd") && this._fpMap.set(i11i1i.ua, i11i1i.fp));
    if (i11i1l?.["url"]) {
      try {
        const iiIiii = new URL(i11i1l.url);
        i11i1i.url = iiIiii.href;
        i11i1i.og = iiIiii.origin;
      } catch {}
    }
    return i11i1i;
  }
  async ["_requestAlgorithm"](lIliiI) {
    try {
      const iiIili = this._getExpandParamsData(lIliiI);
      let II1II1;
      switch (lIliiI.version) {
        case "4.7":
          II1II1 = this._keyMap.algo4_7;
          break;
        default:
          II1II1 = this._keyMap.algo;
          break;
      }
      const llli = this._AESEncrypt(JSON.stringify(iiIili, null, 2), II1II1, lIliiI.version),
        i1ll1l = {
          "version": lIliiI.version,
          "fp": lIliiI.fp,
          "appId": lIliiI.appId,
          "timestamp": Date.now(),
          "platform": "web",
          "expandParams": llli,
          "fv": lIliiI.fv
        },
        i1ll1i = {
          "url": "https://cactus.jd.com/request_algo?g_ty=ajax",
          "method": "POST",
          "headers": {
            "Content-Type": "application/json;charset=utf-8",
            "Origin": "https://cactus.jd.com",
            "Host": "cactus.jd.com",
            "Accept": "*/*",
            "User-Agent": lIliiI?.["ua"] || "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1 Edg/122.0.0.0"
          },
          "data": i1ll1l,
          "proxy": null,
          "timeout": 60000,
          "debug": false
        };
      let lllIii = 0,
        II1III = null;
      const i1I1i1 = 1;
      while (lllIii < i1I1i1) {
        const lIlil1 = await common.request(i1ll1i);
        if (!lIlil1.success) {
          II1III = "❌ request_algo 请求失败 ➜ " + lIlil1.error;
          lllIii++;
          continue;
        }
        if (!lIlil1.data) {
          II1III = "🚫 request_algo 请求失败 ➜ 无响应数据";
          lllIii++;
          continue;
        }
        try {
          const Il1li1 = lIlil1.data;
          if (Il1li1?.["data"] && Il1li1?.["data"]?.["result"]) {
            const ili1il = Il1li1.data.result?.["algo"],
              liill1 = Il1li1.data.result?.["tk"];
            if (ili1il && liill1) {
              return {
                "token": liill1,
                "algo": ili1il
              };
            }
          }
          II1III = "🚫 request_algo 请求异常 ➜ " + JSON.stringify(Il1li1);
        } catch (Iilii1) {
          II1III = "❌ request_algo 在处理接口响应时遇到了错误 ➜ " + (Iilii1.message || Iilii1);
        }
        lllIii++;
      }
      lllIii >= i1I1i1 && console.log(II1III);
    } catch (lllIiI) {
      console.log("❌ request_algo 在处理API请求时遇到了错误 " + (lllIiI.message || lllIiI));
    }
    return {
      "token": "",
      "algo": ""
    };
  }
  ["_getExpandParamsData"](lIlilI) {
    const iiIill = 430,
      li1ili = 932,
      liillI = 430,
      li1ill = 932;
    switch (lIlilI.version) {
      case "3.1":
        return {
          "wc": 0,
          "wd": 0,
          "l": "zh-CN",
          "ls": "zh-CN,zh",
          "ml": 0,
          "pl": 0,
          "av": lIlilI.av,
          "ua": lIlilI.ua,
          "sua": lIlilI.sua,
          "pp": lIlilI.pin ? {
            "p1": lIlilI.pin,
            "p2": lIlilI.pin
          } : {},
          "pp1": "",
          "pm": {
            "ps": "prompt",
            "np": "default"
          },
          "w": iiIill,
          "h": li1ili,
          "ow": liillI,
          "oh": li1ill,
          "url": lIlilI.url,
          "og": lIlilI.og,
          "pr": 1.25,
          "re": lIlilI.referer,
          "ai": lIlilI.appId,
          "fp": lIlilI.fp
        };
      case "4.1":
        return {
          "wc": 0,
          "wd": 0,
          "l": "zh-CN",
          "ls": "zh-CN,zh",
          "ml": 0,
          "pl": 0,
          "av": lIlilI.av,
          "ua": lIlilI.ua,
          "sua": lIlilI.sua,
          "pp": {},
          "pp1": lIlilI.cookie,
          "pm": {
            "ps": "prompt",
            "np": "default"
          },
          "w": iiIill,
          "h": li1ili,
          "ow": liillI,
          "oh": li1ill,
          "url": lIlilI.url,
          "og": lIlilI.og,
          "pr": 1.25,
          "re": lIlilI.referer,
          "random": this._genRandomStr(10),
          "referer": lIlilI.referer,
          "v": lIlilI.fv,
          "ai": lIlilI.appId,
          "fp": lIlilI.fp
        };
      case "4.2":
        return {
          "wc": 0,
          "wd": 0,
          "l": "zh-CN",
          "ls": "zh-CN,zh",
          "ml": 0,
          "pl": 0,
          "av": lIlilI.av,
          "ua": lIlilI.ua,
          "sua": lIlilI.sua,
          "pp": lIlilI.pin ? {
            "p1": lIlilI.pin,
            "p2": lIlilI.pin
          } : {},
          "extend": {
            "pm": 0,
            "wd": 0,
            "l": 0,
            "ls": 2,
            "wk": 0,
            "bu1": "9.9.9"
          },
          "pp1": lIlilI.pin ? "" : lIlilI.cookie,
          "pm": {
            "ps": "prompt",
            "np": "default"
          },
          "w": iiIill,
          "h": li1ili,
          "ow": liillI,
          "oh": li1ill,
          "url": lIlilI.url,
          "og": lIlilI.og,
          "pr": 1.25,
          "re": lIlilI.referer,
          "random": this._genRandomStr(10),
          "referer": lIlilI.referer,
          "v": lIlilI.fv,
          "ai": lIlilI.appId,
          "fp": lIlilI.fp
        };
      case "4.3":
        return {
          "wc": 0,
          "wd": 0,
          "l": "zh-CN",
          "ls": "zh-CN,zh",
          "ml": 2,
          "pl": 5,
          "av": lIlilI.av,
          "ua": lIlilI.ua,
          "sua": lIlilI.sua,
          "pp": lIlilI.pin ? {
            "p1": lIlilI.pin,
            "p2": lIlilI.pin,
            "p3": lIlilI.pin
          } : {},
          "extend": {
            "wd": 0,
            "l": 0,
            "ls": 5,
            "wk": 0,
            "bu1": "0.1.9",
            "bu2": 0,
            "bu3": 100,
            "bu4": 0
          },
          "pp1": lIlilI.pin ? "" : lIlilI.cookie,
          "pm": {
            "ps": "prompt",
            "np": "default"
          },
          "w": iiIill,
          "h": li1ili,
          "ow": liillI,
          "oh": li1ill,
          "url": lIlilI.url,
          "og": lIlilI.og,
          "pr": 1,
          "re": lIlilI.referer,
          "random": this._genRandomStr(10),
          "referer": lIlilI.referer,
          "v": lIlilI.fv,
          "ai": lIlilI.appId,
          "fp": lIlilI.fp
        };
      case "4.4":
        return {
          "wc": 0,
          "wd": 0,
          "l": "zh-CN",
          "ls": "zh-CN,zh",
          "ml": 0,
          "pl": 0,
          "av": lIlilI.av,
          "ua": lIlilI.ua,
          "sua": lIlilI.sua,
          "pp": lIlilI.pin ? {
            "p1": lIlilI.pin,
            "p2": lIlilI.pin
          } : {},
          "extend": {
            "wd": 0,
            "l": 0,
            "ls": 5,
            "wk": 0,
            "bu1": "0.1.7",
            "bu2": 0,
            "bu3": 100,
            "bu4": 0
          },
          "pp1": lIlilI.pin ? "" : lIlilI.cookie,
          "w": iiIill,
          "h": li1ili,
          "ow": liillI,
          "oh": li1ill,
          "url": lIlilI.url,
          "og": lIlilI.og,
          "pr": 1,
          "re": lIlilI.referer,
          "random": this._genRandomStr(10),
          "referer": lIlilI.referer,
          "v": lIlilI.fv,
          "ai": lIlilI.appId,
          "fp": lIlilI.fp
        };
      case "4.7":
        return {
          "wc": 0,
          "wd": 0,
          "l": "zh-CN",
          "ls": "zh-CN,zh",
          "ml": 0,
          "pl": 0,
          "av": lIlilI.av,
          "ua": lIlilI.ua,
          "sua": lIlilI.sua,
          "pp": lIlilI.pin ? {
            "p1": lIlilI.pin,
            "p2": lIlilI.pin
          } : {},
          "extend": {
            "wd": 0,
            "l": 0,
            "ls": 0,
            "wk": 0,
            "bu1": "0.1.7",
            "bu2": 0,
            "bu3": 60,
            "bu4": 0,
            "bu5": 0
          },
          "pp1": lIlilI.pin ? "" : lIlilI.cookie,
          "w": iiIill,
          "h": li1ili,
          "ow": liillI,
          "oh": li1ill,
          "url": lIlilI.url,
          "og": lIlilI.og,
          "pf": "iPhone",
          "pr": 1,
          "re": lIlilI.referer,
          "random": this._genRandomStr(10),
          "referer": lIlilI.referer,
          "v": lIlilI.fv,
          "bu2": "",
          "canvas": "",
          "webglFp": "",
          "ccn": 20,
          "ai": lIlilI.appId,
          "fp": lIlilI.fp
        };
      default:
        return {};
    }
  }
  ["_makeSign"](il1I1l, il1I1i, l1iliI, l1l1lI) {
    try {
      const IilI1I = l1l1lI.version,
        l1l1l1 = new Date(l1l1lI.timestamp),
        il1I1I = "" + l1l1l1.getFullYear() + String(l1l1l1.getMonth() + 1).padStart(2, "0") + String(l1l1l1.getDate()).padStart(2, "0") + String(l1l1l1.getHours()).padStart(2, "0") + String(l1l1l1.getMinutes()).padStart(2, "0") + String(l1l1l1.getSeconds()).padStart(2, "0") + String(l1l1l1.getMilliseconds()).padStart(3, "0"),
        III = il1I1I.concat(this._timePaddingMap[IilI1I]);
      let l11iii = Object.entries(il1I1l).map(([I11l1, IliI1]) => {
        return I11l1 === "body" && (IliI1 = CryptoJS.SHA256(JSON.stringify(IliI1)).toString()), {
          "key": I11l1,
          "value": IliI1
        };
      });
      const liili = this._algorithmMap[IilI1I] || CryptoJS;
      let IiI1I1 = "",
        iIIi1I = "",
        liill = "";
      const llll = l11iii.map(IIIiII => IIIiII.key + ":" + IIIiII.value).join("&"),
        IilI1l = l1iliI(il1I1i, l1l1lI.fp, III, l1l1lI.appId, liili).toString() || "";
      switch (IilI1I) {
        case "3.1":
          IiI1I1 = liili.HmacSHA256("".concat(llll), "".concat(IilI1l)).toString();
          break;
        case "4.1":
          IiI1I1 = liili.MD5("".concat(IilI1l).concat(llll).concat(IilI1l)).toString();
          break;
        case "4.2":
          IiI1I1 = liili.SHA256("".concat(IilI1l).concat(llll).concat(IilI1l)).toString();
          break;
        case "4.3":
          IiI1I1 = liili.HmacSHA256("".concat(llll), "".concat(IilI1l)).toString();
          break;
        case "4.4":
          IiI1I1 = liili.MD5("".concat(IilI1l).concat(llll).concat(IilI1l)).toString();
          break;
        case "4.7":
          IiI1I1 = liili.MD5("".concat(IilI1l).concat(llll).concat(IilI1l)).toString();
          break;
      }
      let i1I1l1 = {};
      switch (IilI1I) {
        case "3.1":
          i1I1l1 = {
            "sua": l1l1lI.sua,
            "pp": l1l1lI.pin ? {
              "p1": l1l1lI.pin,
              "p2": l1l1lI.pin
            } : {},
            "fp": l1l1lI.fp
          };
          break;
        case "4.1":
          i1I1l1 = {
            "sua": l1l1lI.sua,
            "pp": {},
            "random": this._genRandomStr(10),
            "referer": l1l1lI.referer,
            "v": l1l1lI.fv,
            "fp": l1l1lI.fp
          };
          break;
        case "4.2":
          i1I1l1 = {
            "sua": l1l1lI.sua,
            "pp": l1l1lI.pin ? {
              "p1": l1l1lI.pin,
              "p2": l1l1lI.pin
            } : {},
            "extend": {
              "pm": 0,
              "wd": 0,
              "l": 0,
              "ls": 2,
              "wk": 0,
              "bu1": "9.9.9"
            },
            "random": this._genRandomStr(10),
            "referer": l1l1lI.referer,
            "v": l1l1lI.fv,
            "fp": l1l1lI.fp
          };
          break;
        case "4.3":
          i1I1l1 = {
            "sua": l1l1lI.sua,
            "pp": l1l1lI.pin ? {
              "p1": l1l1lI.pin,
              "p2": l1l1lI.pin,
              "p3": l1l1lI.pin
            } : {},
            "extend": {
              "wd": 0,
              "l": 0,
              "ls": 5,
              "wk": 0,
              "bu1": "0.1.8",
              "bu2": -1,
              "bu3": 100,
              "bu4": 0
            },
            "random": this._genRandomStr(10),
            "v": l1l1lI.fv,
            "fp": l1l1lI.fp
          };
          break;
        case "4.4":
          i1I1l1 = {
            "sua": l1l1lI.sua,
            "pp": l1l1lI.pin ? {
              "p1": l1l1lI.pin,
              "p2": l1l1lI.pin
            } : {},
            "extend": {
              "wd": 0,
              "l": 0,
              "ls": 5,
              "wk": 0,
              "bu1": "0.1.7",
              "bu2": -1,
              "bu3": 6,
              "bu4": 0,
              "bu5": 0
            },
            "random": this._genRandomStr(10),
            "v": l1l1lI.fv,
            "fp": l1l1lI.fp
          };
          break;
        case "4.7":
          i1I1l1 = {
            "sua": l1l1lI.sua,
            "pp": l1l1lI.pin ? {
              "p1": l1l1lI.pin,
              "p2": l1l1lI.pin
            } : {},
            "extend": {
              "wd": 0,
              "l": 0,
              "ls": 0,
              "wk": 0,
              "bu1": "0.1.7",
              "bu2": -1,
              "bu3": 60,
              "bu4": 0,
              "bu5": 0
            },
            "random": this._genRandomStr(10),
            "v": l1l1lI.fv,
            "fp": l1l1lI.fp
          };
          break;
      }
      iIIi1I = this._AESEncrypt(JSON.stringify(i1I1l1, null, 2), this._keyMap[IilI1I], IilI1I);
      switch (l1l1lI.version) {
        case "4.7":
          liill = liili.MD5("".concat(IilI1l).concat("appid:" + il1I1l.appid + "&functionId:" + il1I1l.functionId).concat(IilI1l)).toString();
          break;
      }
      const iIIi11 = ["".concat(il1I1I), "".concat(l1l1lI.fp), "".concat(l1l1lI.appId), "".concat(il1I1i), "".concat(IiI1I1), "".concat(IilI1I), "".concat(String(l1l1lI.timestamp)), "".concat(iIIi1I)];
      switch (l1l1lI.version) {
        case "4.7":
          iIIi11.push(liill);
          break;
      }
      return {
        "_stk": l11iii.map(Iii11 => Iii11.key).join(","),
        "_ste": 1,
        "h5st": iIIi11.join(";")
      };
    } catch (illlI) {
      console.log("❌ getH5st 生成签名时遇到了错误 " + (illlI.message || illlI));
    }
    return {
      "_stk": "",
      "_ste": 0,
      "h5st": ""
    };
  }
  ["_genLocalTK"](l1ili1, l1ill1) {
    const IIi = () => {
        const iiIll = ["1", "2", "3"],
          illiI = ["+", "x"],
          ii1Il1 = 2 + Math.floor(4 * Math.random());
        let lIlI11 = "";
        for (let l1I = 0; l1I < ii1Il1; l1I++) {
          lIlI11 += iiIll[Math.floor(Math.random() * 3)];
          l1I < ii1Il1 - 1 && (lIlI11 += illiI[Math.floor(Math.random() * 2)]);
        }
        lIlI11.length < 9 && (lIlI11 += this._genRandomStr().substring(0, 9 - lIlI11.length));
        const iiIli = CryptoJS.enc.Utf8.parse(lIlI11);
        return CryptoJS.enc.Base64.stringify(iiIli).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
      },
      ii1Ii1 = li1I1i => {
        function illi1(ii1Ili) {
          return ii1Ili.map(I1Ii1I => {
            var llIIl = "00" + (255 & I1Ii1I).toString(16);
            return llIIl.slice(-2);
          }).join("");
        }
        function I1i1i1(llIIi) {
          var IiI1Il = new Uint8Array(llIIi.length);
          return IiI1Il.forEach((iiIii, IiI1Ii, iiIil) => {
            iiIil[IiI1Ii] = llIIi.charCodeAt(IiI1Ii);
          }), illi1(IiI1Il);
        }
        function liI11(IilI11) {
          var iiII1 = function () {
              var i1Il = new ArrayBuffer(2);
              return new DataView(i1Il).setInt16(0, 256, !0), 256 === new Int16Array(i1Il)[0];
            }(),
            l1111I = Math.floor(IilI11 / Math.pow(2, 32)),
            llill = IilI11 % Math.pow(2, 32),
            iI1I11 = new ArrayBuffer(8),
            l11111 = new DataView(iI1I11);
          return iiII1 ? (l11111.setUint32(0, llill, iiII1), l11111.setUint32(4, l1111I, iiII1)) : (l11111.setUint32(0, l1111I, iiII1), l11111.setUint32(4, llill, iiII1)), new Uint8Array(iI1I11);
        }
        var lIlI1I = "",
          iIi1i1 = Date.now(),
          llII1 = l1ill1.secret1,
          II1l1l = function (llilI, I11I1I, il1IIl, l1111i) {
            var i1II = new Uint8Array(16);
            i1II.forEach((llI1ll, I111i, iili11) => {
              iili11[I111i] = llilI.charCodeAt(I111i);
            });
            var iI1I1I = liI11(I11I1I),
              I111I = new Uint8Array(2);
            I111I.forEach((lI1I1, I1lI1, l11lI1) => {
              l11lI1[I1lI1] = il1IIl.charCodeAt(I1lI1);
            });
            var I11I11 = new Uint8Array(12);
            I11I11.forEach((lI1II, i1Ilii, i1Ilil) => {
              i1Ilil[i1Ilii] = l1111i.charCodeAt(i1Ilii);
            });
            var il1l1I = new Uint8Array(38);
            il1l1I.set(I111I);
            il1l1I.set(I11I11, 2);
            il1l1I.set(iI1I1I, 14);
            il1l1I.set(i1II, 22);
            var i1Ili1 = IlIII1.buf(il1l1I);
            i1Ili1 >>>= 0;
            var l1111l = "00000000" + i1Ili1.toString(16);
            return l1111l.substring(l1111l.length - 8);
          }(li1I1i, iIi1i1, l1ill1.prefix, llII1);
        return lIlI1I += I1i1i1(II1l1l), lIlI1I += I1i1i1(l1ill1.prefix), lIlI1I += I1i1i1(llII1), lIlI1I += illi1(liI11(iIi1i1)), lIlI1I += I1i1i1(li1I1i), this._AESEncrypt(CryptoJS.enc.Hex.parse(lIlI1I), CryptoJS.enc.Utf8.parse(l1ill1.secret2), "4.7");
      },
      i1I1lI = llI11 => {
        const {
            magic: IlIIl1,
            version: IliiIl,
            platform: iili1i,
            expires: l11lII,
            producer: IliiIi,
            expr: I1lII,
            cipher: iili1l
          } = llI11,
          il1l1i = [IlIIl1, IliiIl, iili1i, l11lII, IliiIi, I1lII, iili1l].join("");
        let IlIIil = IlIII1.str(il1l1i);
        IlIIil >>>= 0;
        let lI1Il = "00000000" + IlIIil.toString(16);
        return lI1Il.substring(lI1Il.length - 8);
      },
      IIl = {
        "magic": "tk",
        "version": "03",
        "platform": "w",
        "expires": "41",
        "producer": "l"
      },
      IlIII1 = this.ADLER32;
    IIl.expr = IIi();
    IIl.cipher = ii1Ii1(l1ili1);
    IIl.adler32 = i1I1lI(IIl);
    const {
      magic: ii1IiI,
      version: illl1,
      platform: l11iil,
      expires: lII1Ii,
      producer: lII1Il,
      expr: I11lI,
      cipher: l1ilil,
      adler32: l1l1ll
    } = IIl;
    return [ii1IiI, illl1, l11iil, l1l1ll, lII1Ii, lII1Il, I11lI, l1ilil].join("");
  }
  ["_genAlgo"](IlIIii, lI1Ii, ilIiI1, lii1I1, il1l1l, ii1li1) {
    function i1Ill1(IiiIIl) {
      var IiiIIi = IiiIIl.length,
        iI1iiI = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        l1ii = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 62, null, null, null, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, null, null, null, 64, null, null, null, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, null, null, null, null, null, null, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51];
      if (!l1ii) {
        l1ii = [];
        for (var I11ii1 = 0; I11ii1 < iI1iiI.length; I11ii1++) l1ii[iI1iiI.charCodeAt(I11ii1)] = I11ii1;
      }
      var Iil11i = iI1iiI.charAt(64);
      if (Iil11i) {
        var i1iiiI = IiiIIl.indexOf(Iil11i);
        -1 !== i1iiiI && (IiiIIi = i1iiiI);
      }
      return function (II111l, I1Iil, i1iiii) {
        for (var i1iiil = [], I11iiI = 0, I1Iii = 0; I1Iii < I1Iil; I1Iii++) if (I1Iii % 4) {
          var I1IlI = i1iiii[II111l.charCodeAt(I1Iii - 1)] << I1Iii % 4 * 2 | i1iiii[II111l.charCodeAt(I1Iii)] >>> 6 - I1Iii % 4 * 2;
          i1iiil[I11iiI >>> 2] |= I1IlI << 24 - I11iiI % 4 * 8;
          I11iiI++;
        }
        return CryptoJS.enc.Utf8.stringify({
          "words": i1iiil,
          "sigBytes": I11iiI
        });
      }(IiiIIl, IiiIIi, l1ii);
    }
    function l11lIi(I1l1il, lii1II) {
      let ili1li;
      switch (I1l1il) {
        case "1":
          ili1li = il1l1l.MD5;
          break;
        case "2":
          ili1li = il1l1l.SHA256;
          break;
        case "3":
          ili1li = il1l1l.HmacSHA256;
          break;
      }
      return I1l1il === "3" ? ili1li(lii1II, IlIIii).toString() : ili1li(lii1II).toString();
    }
    const l11lIl = "".concat(IlIIii).concat(lI1Ii).concat(ilIiI1).concat(lii1I1).concat(ii1li1);
    let ii1liI = "";
    return i1Ill1(IlIIii.slice(16, 28)).match(new RegExp("^[123]([x+][123])+"))[0].split("").forEach((Iiil11, iIl1il, IlI1II) => {
      if (["1", "2", "3"].includes(Iiil11)) {
        if (iIl1il === 0) ii1liI = l11lIi(Iiil11, l11lIl);else {
          if (iIl1il >= 2) {
            const IillII = IlI1II[iIl1il - 1];
            if (IillII === "+") ii1liI += l11lIi(Iiil11, l11lIl);else IillII === "x" && (ii1liI = l11lIi(Iiil11, ii1liI));
          }
        }
      }
    }), ii1liI;
  }
  ["_AESEncrypt"](iiII1I, lIIIII, Iiil1i) {
    const Iiil1l = CryptoJS.enc.Utf8.parse(iiII1I),
      II1lII = CryptoJS.AES.encrypt(Iiil1l, lIIIII, {
        "iv": this._iv,
        "mode": CryptoJS.mode.CBC,
        "padding": CryptoJS.pad.Pkcs7
      });
    switch (Iiil1i) {
      case "4.7":
        return this._algorithmMap[Iiil1i].enc.Base64.encode(II1lII);
      default:
        return II1lII.ciphertext.toString();
    }
  }
  ["_genRandomStr"](i1iilI = 32, iiII11 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-") {
    const lIIII1 = iiII11.length;
    let ili1 = "";
    for (let ill1 = 0; ill1 < i1iilI; ill1++) {
      ili1 += iiII11.charAt(Math.floor(Math.random() * lIIII1));
    }
    return ili1;
  }
  ["_genUA"]() {
    let iI1lI = "",
      ll1i11 = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      lliIIl = "0123456789abcdef";
    for (let iIill1 of ll1i11) {
      if (iIill1 == "x") iI1lI += lliIIl.charAt(Math.floor(Math.random() * lliIIl.length));else iIill1 == "X" ? iI1lI += lliIIl.charAt(Math.floor(Math.random() * lliIIl.length)).toUpperCase() : iI1lI += iIill1;
    }
    const lliIIi = ["jdapp", "iPhone", this._latestAppVersionData.version, "", "rn/" + iI1lI, "M/5.0", "appBuild/" + this._latestAppVersionData.build, "jdSupportDarkMode/0", "ef/1", "ep/%7B%22ciphertype%22%3A5%2C%22cipher%22%3A%7B%22ud%22%3A%22DG%3D%3D%22%2C%22sv%22%3A%22CG%3D%3D%22%2C%22iad%22%3A%22%22%7D%2C%22ts%22%3A" + Math.floor(Date.now() / 1000) + "%2C%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22version%22%3A%221.0.3%22%2C%22appname%22%3A%22com.360buy.jdmobile%22%2C%22ridx%22%3A-1%7D", "Mozilla/5.0 (iPhone; CPU iPhone OS " + this._latestIOSVersion.replace(".", "_") + " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "supportJDSHWK/1", ""];
    return lliIIi.join(";");
  }
  ["_makeFp3_1"]() {
    function lliIII(lIlII, lI11li) {
      return lIlII + Math.floor(Math.random() * (lI11li + 1 - lIlII));
    }
    function illi(i1lii1, lI11l1) {
      for (var lIlIl = [], IilIIl = 0; IilIIl < i1lii1.length; IilIIl++) {
        var liilI1 = i1lii1[IilIIl];
        if (lliIII(0, i1lii1.length - IilIIl - 1) < lI11l1 - lIlIl.length && (lIlIl.push(liilI1), lIlIl.length == lI11l1)) break;
      }
      for (var l1IiI1 = "", IIiiI = 0; IIiiI < lIlIl.length; IIiiI += 1) {
        var II1Il1 = Math.random() * (lIlIl.length - IIiiI) | 0;
        l1IiI1 += lIlIl[II1Il1];
        lIlIl[II1Il1] = lIlIl[lIlIl.length - IIiiI - 1];
      }
      return l1IiI1;
    }
    function illl(lIlIi, lI11lI) {
      for (var IIilI = 0; IIilI < lI11lI.length; IIilI += 1) {
        var I1i1Ii = lIlIi.indexOf(lI11lI[IIilI]);
        -1 !== I1i1Ii && (lIlIi = lIlIi.replace(lI11lI[IIilI], ""));
      }
      return lIlIi;
    }
    var lll11I = "0123456789",
      iI1il1 = illi(lll11I, 3),
      il1II1 = lliIII(0, 9),
      II111I = illl(lll11I, iI1il1),
      IIii1 = {};
    IIii1.size = il1II1;
    IIii1.num = II111I;
    var lliIII = this._genRandomStr(IIii1.size, IIii1.num) + iI1il1 + this._genRandomStr(14 - (il1II1 + 3) + 1, II111I) + il1II1,
      I11iii = lliIII.split(""),
      iI1l1 = [];
    while (I11iii.length > 0) {
      iI1l1.push(9 - parseInt(I11iii.pop() || ""));
    }
    return iI1l1.join("");
  }
  ["_makeFp4_1"]() {
    return this._makeFp4("uct6d0jhqw", 6, 9, 14);
  }
  ["_makeFp4_2"]() {
    return this._makeFp4("6d0jhqw3pa", 4, 11, 14);
  }
  ["_makeFp4_3"]() {
    return this._makeFp4("kl9i1uct6d", 3, 12, 10);
  }
  ["_makeFp4_4"]() {
    return this._makeFp4("1uct6d0jhq", 4, 11, 8);
  }
  ["_makeFp4_7"]() {
    return this._makeFp4("1uct6d0jhq", 5, 10, 15);
  }
  ["_makeFp4"](IlI111, lil1I1, lliill, i1liii) {
    function lii11I(lIIii, lIliII) {
      return lIIii + Math.floor(Math.random() * (lIliII + 1 - lIIii));
    }
    function iiIII1(lllII1, iiIl1I) {
      for (var il111I = [], lliI11 = 0; lliI11 < lllII1.length; lliI11++) {
        var ilIil = lllII1[lliI11];
        if (lii11I(0, lllII1.length - lliI11 - 1) < iiIl1I - il111I.length && (il111I.push(ilIil), il111I.length == iiIl1I)) break;
      }
      for (var lllIII = "", lIii1i = 0; lIii1i < il111I.length; lIii1i += 1) {
        var iiIl11 = Math.random() * (il111I.length - lIii1i) | 0;
        lllIII += il111I[iiIl11];
        il111I[iiIl11] = il111I[il111I.length - lIii1i - 1];
      }
      return lllIII;
    }
    function li1iII(lIliIl, liilIi) {
      for (var liilIl = 0; liilIl < liilIi.length; liilIl += 1) {
        var iiIl1l = lIliIl.indexOf(liilIi[liilIl]);
        -1 !== iiIl1l && (lIliIl = lIliIl.replace(liilIi[liilIl], ""));
      }
      return lIliIl;
    }
    var lIIi1 = IlI111,
      I1i1II = iiIII1(lIIi1, lil1I1),
      l1IiIi = lii11I(0, 9),
      lil1II = li1iII(lIIi1, I1i1II),
      l1IiIl = {};
    l1IiIl.size = l1IiIi;
    l1IiIl.num = lil1II;
    var lii11I = this._genRandomStr(l1IiIl.size, l1IiIl.num) + I1i1II + this._genRandomStr(lliill - l1IiIi, lil1II) + l1IiIi,
      IIil1 = lii11I.split(""),
      iIi1II = IIil1.slice(0, i1liii),
      Iill11 = IIil1.slice(i1liii),
      lliili = [];
    while (iIi1II.length > 0) {
      lliili.push((35 - parseInt(iIi1II.pop(), 36)).toString(36));
    }
    return lliili = lliili.concat(Iill11), lliili.join("");
  }
  ["load_module_ADLER32"]() {
    let II1Ii1 = {};
    II1Ii1.version = "1.3.1";
    function IilII1(ilIiIl, IlIIi1) {
      var i1lI1l = 1,
        I1llli = 0,
        illII = ilIiIl.length,
        iil1I = 0;
      typeof IlIIi1 === "number" && (i1lI1l = IlIIi1 & 65535, I1llli = IlIIi1 >>> 16);
      for (var I1llll = 0; I1llll < illII;) {
        iil1I = Math.min(illII - I1llll, 2654) + I1llll;
        for (; I1llll < iil1I; I1llll++) {
          i1lI1l += ilIiIl.charCodeAt(I1llll) & 255;
          I1llli += i1lI1l;
        }
        i1lI1l = 15 * (i1lI1l >>> 16) + (i1lI1l & 65535);
        I1llli = 15 * (I1llli >>> 16) + (I1llli & 65535);
      }
      return I1llli % 65521 << 16 | i1lI1l % 65521;
    }
    function liiIi(IlI11l, IlI11i) {
      var Ili = 1,
        lilll1 = 0,
        Ill = IlI11l.length,
        illI1 = 0;
      typeof IlI11i === "number" && (Ili = IlI11i & 65535, lilll1 = IlI11i >>> 16 & 65535);
      for (var I1i1I1 = 0; I1i1I1 < Ill;) {
        illI1 = Math.min(Ill - I1i1I1, 2654) + I1i1I1;
        for (; I1i1I1 < illI1; I1i1I1++) {
          Ili += IlI11l[I1i1I1] & 255;
          lilll1 += Ili;
        }
        Ili = 15 * (Ili >>> 16) + (Ili & 65535);
        lilll1 = 15 * (lilll1 >>> 16) + (lilll1 & 65535);
      }
      return lilll1 % 65521 << 16 | Ili % 65521;
    }
    function Ii1(l11l1I, llI1l1) {
      var iIi1I1 = 1,
        iil11 = 0,
        Iill1i = l11l1I.length,
        l11l11 = 0,
        Iill1l = 0,
        lilllI = 0;
      typeof llI1l1 === "number" && (iIi1I1 = llI1l1 & 65535, iil11 = llI1l1 >>> 16);
      for (var i1i1I = 0; i1i1I < Iill1i;) {
        l11l11 = Math.min(Iill1i - i1i1I, 2918);
        while (l11l11 > 0) {
          Iill1l = l11l1I.charCodeAt(i1i1I++);
          if (Iill1l < 128) {
            iIi1I1 += Iill1l;
          } else {
            if (Iill1l < 2048) iIi1I1 += 192 | Iill1l >> 6 & 31, iil11 += iIi1I1, --l11l11, iIi1I1 += 128 | Iill1l & 63;else {
              if (Iill1l >= 55296 && Iill1l < 57344) {
                Iill1l = (Iill1l & 1023) + 64;
                lilllI = l11l1I.charCodeAt(i1i1I++) & 1023;
                iIi1I1 += 240 | Iill1l >> 8 & 7;
                iil11 += iIi1I1;
                --l11l11;
                iIi1I1 += 128 | Iill1l >> 2 & 63;
                iil11 += iIi1I1;
                --l11l11;
                iIi1I1 += 128 | lilllI >> 6 & 15 | (Iill1l & 3) << 4;
                iil11 += iIi1I1;
                --l11l11;
                iIi1I1 += 128 | lilllI & 63;
              } else {
                iIi1I1 += 224 | Iill1l >> 12 & 15;
                iil11 += iIi1I1;
                --l11l11;
                iIi1I1 += 128 | Iill1l >> 6 & 63;
                iil11 += iIi1I1;
                --l11l11;
                iIi1I1 += 128 | Iill1l & 63;
              }
            }
          }
          iil11 += iIi1I1;
          --l11l11;
        }
        iIi1I1 = 15 * (iIi1I1 >>> 16) + (iIi1I1 & 65535);
        iil11 = 15 * (iil11 >>> 16) + (iil11 & 65535);
      }
      return iil11 % 65521 << 16 | iIi1I1 % 65521;
    }
    return II1Ii1.bstr = IilII1, II1Ii1.buf = liiIi, II1Ii1.str = Ii1, II1Ii1;
  }
}
const HASH = function () {
  function llI1lI(I1Iilll, IIl1l1i1) {
    I1Iilll = [I1Iilll[0] >>> 16, 65535 & I1Iilll[0], I1Iilll[1] >>> 16, 65535 & I1Iilll[1]];
    IIl1l1i1 = [IIl1l1i1[0] >>> 16, 65535 & IIl1l1i1[0], IIl1l1i1[1] >>> 16, 65535 & IIl1l1i1[1]];
    var l1li1Iii = [0, 0, 0, 0];
    return l1li1Iii[3] += I1Iilll[3] + IIl1l1i1[3], l1li1Iii[2] += l1li1Iii[3] >>> 16, l1li1Iii[3] &= 65535, l1li1Iii[2] += I1Iilll[2] + IIl1l1i1[2], l1li1Iii[1] += l1li1Iii[2] >>> 16, l1li1Iii[2] &= 65535, l1li1Iii[1] += I1Iilll[1] + IIl1l1i1[1], l1li1Iii[0] += l1li1Iii[1] >>> 16, l1li1Iii[1] &= 65535, l1li1Iii[0] += I1Iilll[0] + IIl1l1i1[0], l1li1Iii[0] &= 65535, [l1li1Iii[0] << 16 | l1li1Iii[1], l1li1Iii[2] << 16 | l1li1Iii[3]];
  }
  function i1i11(IIl1l1iI, l1li1Iil) {
    IIl1l1iI = [IIl1l1iI[0] >>> 16, 65535 & IIl1l1iI[0], IIl1l1iI[1] >>> 16, 65535 & IIl1l1iI[1]];
    l1li1Iil = [l1li1Iil[0] >>> 16, 65535 & l1li1Iil[0], l1li1Iil[1] >>> 16, 65535 & l1li1Iil[1]];
    var lilII1l = [0, 0, 0, 0];
    return lilII1l[3] += IIl1l1iI[3] * l1li1Iil[3], lilII1l[2] += lilII1l[3] >>> 16, lilII1l[3] &= 65535, lilII1l[2] += IIl1l1iI[2] * l1li1Iil[3], lilII1l[1] += lilII1l[2] >>> 16, lilII1l[2] &= 65535, lilII1l[2] += IIl1l1iI[3] * l1li1Iil[2], lilII1l[1] += lilII1l[2] >>> 16, lilII1l[2] &= 65535, lilII1l[1] += IIl1l1iI[1] * l1li1Iil[3], lilII1l[0] += lilII1l[1] >>> 16, lilII1l[1] &= 65535, lilII1l[1] += IIl1l1iI[2] * l1li1Iil[2], lilII1l[0] += lilII1l[1] >>> 16, lilII1l[1] &= 65535, lilII1l[1] += IIl1l1iI[3] * l1li1Iil[1], lilII1l[0] += lilII1l[1] >>> 16, lilII1l[1] &= 65535, lilII1l[0] += IIl1l1iI[0] * l1li1Iil[3] + IIl1l1iI[1] * l1li1Iil[2] + IIl1l1iI[2] * l1li1Iil[1] + IIl1l1iI[3] * l1li1Iil[0], lilII1l[0] &= 65535, [lilII1l[0] << 16 | lilII1l[1], lilII1l[2] << 16 | lilII1l[3]];
  }
  function IiI1li(I1I1iIIi, l1i111lI) {
    return 32 === (l1i111lI %= 64) ? [I1I1iIIi[1], I1I1iIIi[0]] : l1i111lI < 32 ? [I1I1iIIi[0] << l1i111lI | I1I1iIIi[1] >>> 32 - l1i111lI, I1I1iIIi[1] << l1i111lI | I1I1iIIi[0] >>> 32 - l1i111lI] : [I1I1iIIi[1] << (l1i111lI -= 32) | I1I1iIIi[0] >>> 32 - l1i111lI, I1I1iIIi[0] << l1i111lI | I1I1iIIi[1] >>> 32 - l1i111lI];
  }
  function il11i(IiIiiiil, IlIl11l) {
    return 0 === (IlIl11l %= 64) ? IiIiiiil : IlIl11l < 32 ? [IiIiiiil[0] << IlIl11l | IiIiiiil[1] >>> 32 - IlIl11l, IiIiiiil[1] << IlIl11l] : [IiIiiiil[1] << IlIl11l - 32, 0];
  }
  function lillli(IiIiiiii, IIIl1i1l) {
    return [IiIiiiii[0] ^ IIIl1i1l[0], IiIiiiii[1] ^ IIIl1i1l[1]];
  }
  function IlIlII(l1IiIilI) {
    return l1IiIilI = lillli(l1IiIilI, [0, l1IiIilI[0] >>> 1]), l1IiIilI = lillli(l1IiIilI = i1i11(l1IiIilI, [4283543511, 3981806797]), [0, l1IiIilI[0] >>> 1]), lillli(l1IiIilI = i1i11(l1IiIilI, [3301882366, 444984403]), [0, l1IiIilI[0] >>> 1]);
  }
  return {
    "hash128": function (I11IIl11, I1I1iIIl) {
      for (var l1Ili1iI, I11IIl1I, IlI1i1I = I1I1iIIl || 0, Ilii1IIi = (I1I1iIIl = (I11IIl11 = I11IIl11 || "").length % 16, I11IIl11.length - I1I1iIIl), I1IillI = [0, IlI1i1I], IlI1i1I = [0, IlI1i1I], Ilii1IIl = [2277735313, 289559509], IIl1l1il = [1291169091, 658871167], l1I11ll1 = 0; l1I11ll1 < Ilii1IIi; l1I11ll1 += 16) l1Ili1iI = [255 & I11IIl11.charCodeAt(l1I11ll1 + 4) | (255 & I11IIl11.charCodeAt(l1I11ll1 + 5)) << 8 | (255 & I11IIl11.charCodeAt(l1I11ll1 + 6)) << 16 | (255 & I11IIl11.charCodeAt(l1I11ll1 + 7)) << 24, 255 & I11IIl11.charCodeAt(l1I11ll1) | (255 & I11IIl11.charCodeAt(l1I11ll1 + 1)) << 8 | (255 & I11IIl11.charCodeAt(l1I11ll1 + 2)) << 16 | (255 & I11IIl11.charCodeAt(l1I11ll1 + 3)) << 24], I11IIl1I = [255 & I11IIl11.charCodeAt(l1I11ll1 + 12) | (255 & I11IIl11.charCodeAt(l1I11ll1 + 13)) << 8 | (255 & I11IIl11.charCodeAt(l1I11ll1 + 14)) << 16 | (255 & I11IIl11.charCodeAt(l1I11ll1 + 15)) << 24, 255 & I11IIl11.charCodeAt(l1I11ll1 + 8) | (255 & I11IIl11.charCodeAt(l1I11ll1 + 9)) << 8 | (255 & I11IIl11.charCodeAt(l1I11ll1 + 10)) << 16 | (255 & I11IIl11.charCodeAt(l1I11ll1 + 11)) << 24], l1Ili1iI = IiI1li(l1Ili1iI = i1i11(l1Ili1iI, Ilii1IIl), 31), I1IillI = llI1lI(I1IillI = IiI1li(I1IillI = lillli(I1IillI, l1Ili1iI = i1i11(l1Ili1iI, IIl1l1il)), 27), IlI1i1I), I1IillI = llI1lI(i1i11(I1IillI, [0, 5]), [0, 1390208809]), I11IIl1I = IiI1li(I11IIl1I = i1i11(I11IIl1I, IIl1l1il), 33), IlI1i1I = llI1lI(IlI1i1I = IiI1li(IlI1i1I = lillli(IlI1i1I, I11IIl1I = i1i11(I11IIl1I, Ilii1IIl)), 31), I1IillI), IlI1i1I = llI1lI(i1i11(IlI1i1I, [0, 5]), [0, 944331445]);
      switch (l1Ili1iI = [0, 0], I11IIl1I = [0, 0], I1I1iIIl) {
        case 15:
          I11IIl1I = lillli(I11IIl1I, il11i([0, I11IIl11.charCodeAt(l1I11ll1 + 14)], 48));
        case 14:
          I11IIl1I = lillli(I11IIl1I, il11i([0, I11IIl11.charCodeAt(l1I11ll1 + 13)], 40));
        case 13:
          I11IIl1I = lillli(I11IIl1I, il11i([0, I11IIl11.charCodeAt(l1I11ll1 + 12)], 32));
        case 12:
          I11IIl1I = lillli(I11IIl1I, il11i([0, I11IIl11.charCodeAt(l1I11ll1 + 11)], 24));
        case 11:
          I11IIl1I = lillli(I11IIl1I, il11i([0, I11IIl11.charCodeAt(l1I11ll1 + 10)], 16));
        case 10:
          I11IIl1I = lillli(I11IIl1I, il11i([0, I11IIl11.charCodeAt(l1I11ll1 + 9)], 8));
        case 9:
          I11IIl1I = i1i11(I11IIl1I = lillli(I11IIl1I, [0, I11IIl11.charCodeAt(l1I11ll1 + 8)]), IIl1l1il), IlI1i1I = lillli(IlI1i1I, I11IIl1I = i1i11(I11IIl1I = IiI1li(I11IIl1I, 33), Ilii1IIl));
        case 8:
          l1Ili1iI = lillli(l1Ili1iI, il11i([0, I11IIl11.charCodeAt(l1I11ll1 + 7)], 56));
        case 7:
          l1Ili1iI = lillli(l1Ili1iI, il11i([0, I11IIl11.charCodeAt(l1I11ll1 + 6)], 48));
        case 6:
          l1Ili1iI = lillli(l1Ili1iI, il11i([0, I11IIl11.charCodeAt(l1I11ll1 + 5)], 40));
        case 5:
          l1Ili1iI = lillli(l1Ili1iI, il11i([0, I11IIl11.charCodeAt(l1I11ll1 + 4)], 32));
        case 4:
          l1Ili1iI = lillli(l1Ili1iI, il11i([0, I11IIl11.charCodeAt(l1I11ll1 + 3)], 24));
        case 3:
          l1Ili1iI = lillli(l1Ili1iI, il11i([0, I11IIl11.charCodeAt(l1I11ll1 + 2)], 16));
        case 2:
          l1Ili1iI = lillli(l1Ili1iI, il11i([0, I11IIl11.charCodeAt(l1I11ll1 + 1)], 8));
        case 1:
          l1Ili1iI = i1i11(l1Ili1iI = lillli(l1Ili1iI, [0, I11IIl11.charCodeAt(l1I11ll1)]), Ilii1IIl), I1IillI = lillli(I1IillI, l1Ili1iI = i1i11(l1Ili1iI = IiI1li(l1Ili1iI, 31), IIl1l1il));
      }
      return I1IillI = llI1lI(I1IillI = lillli(I1IillI, [0, I11IIl11.length]), IlI1i1I = lillli(IlI1i1I, [0, I11IIl11.length])), IlI1i1I = llI1lI(IlI1i1I, I1IillI), I1IillI = llI1lI(I1IillI = IlIlII(I1IillI), IlI1i1I = IlIlII(IlI1i1I)), IlI1i1I = llI1lI(IlI1i1I, I1IillI), ("00000000" + (I1IillI[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (I1IillI[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (IlI1i1I[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (IlI1i1I[1] >>> 0).toString(16)).slice(-8);
    }
  };
}();
module.exports = {
  "wuxianDefense": wuxianDefense,
  "jsTk": jsTk,
  "getJdEnvInfo": getJdEnvInfo,
  "H5st": new H5st()
};