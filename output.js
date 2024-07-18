//Thu Jul 18 2024 17:46:26 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const fs = require("fs"),
  path = require("path"),
  https = require("https"),
  axios = require("axios").default,
  CryptoJS = require("crypto-js"),
  querystring = require("querystring");
class Common {
  constructor() {
    this._Cookie = "";
    this._UserAgent = "";
    this._UserAgentMap = new Map();
    this._defaultUserAgent = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1 Edg/122.0.0.0";
    this._appSignConfig = null;
    this.proxyPoolEnabled = false;
    this.proxyMode = "";
    this._requestDebugMode = false;
    this._requestAxiosProxyConfig = null;
    this._requestDynamicProxyConfig = null;
    this._requestDynamicProxyShowAddress = false;
    this._requestDynamicProxyPrintAddressFormat = "刷新动态代理配置：<address>";
    this._requestNoProxyList = null;
    this._requestFailMessagesMap = {
      301: "永久移动 [301 · Moved Permanently]",
      302: "临时移动 [302 · Found]",
      304: "资源未修改 [304 · Not Modified]",
      307: "临时重定向 [307 · Temporary Redirect]",
      308: "永久重定向 [308 · Permanent Redirect]",
      400: "请求错误 [400 · Bad Request]",
      401: "未授权 [401 · Unauthorized]",
      403: "禁止访问 [403 · Forbidden]",
      404: "资源未找到 [404 · Not Found]",
      405: "方法不被允许 [405 · Method Not Allowed]",
      406: "不可接受 [406 · Not Acceptable]",
      408: "请求超时 [408 · Request Timeout]",
      429: "请求过多 [429 · Too Many Requests]",
      413: "请求实体过大 [413 · Payload Too Large]",
      414: "请求的 URI 过长 [414 · URI Too Long]",
      415: "不支持的媒体类型 [415 · Unsupported Media Type]",
      416: "请求范围不符合要求 [416 · Range Not Satisfiable]",
      493: "禁止访问 [493 · Forbidden]",
      500: "服务器内部错误 [500 · Internal Server Error]",
      501: "服务器不支持请求 [501 · Not Implemented]",
      502: "网关错误 [502 · Bad Gateway]",
      503: "服务不可用 [503 · Service Unavailable]",
      504: "网关超时 [504 · Gateway Timeout]",
      505: "HTTP 版本不受支持 [505 · HTTP Version Not Supported]"
    };
    this._requestErrorMessagesMap = {
      "ECONNABORTED": "请求被中断",
      "ECONNRESET": "连接被对方重置",
      "ECONNREFUSED": "服务器拒绝连接",
      "ETIMEDOUT": "网络请求超时",
      "ENOTFOUND": "无法解析的域名或地址",
      "EPROTO": "协议错误",
      "EHOSTUNREACH": "无法到达服务器主机",
      "ENETUNREACH": "无法到达网络",
      "EADDRINUSE": "网络地址已被使用",
      "EPIPE": "向已关闭的写入流进行写入",
      "ERR_BAD_OPTION_VALUE": "无效或不支持的配置选项值",
      "ERR_BAD_OPTION": "无效的配置选项",
      "ERR_NETWORK": "网络错误",
      "ERR_FR_TOO_MANY_REDIRECTS": "请求被重定向次数过多",
      "ERR_DEPRECATED": "使用了已弃用的特性或方法",
      "ERR_BAD_RESPONSE": "服务器响应无效或无法解析",
      "ERR_BAD_REQUEST": "请求无效或缺少必需参数",
      "ERR_CANCELED": "请求被用户取消",
      "ERR_NOT_SUPPORT": "当前环境不支持此特性或方法",
      "ERR_INVALID_URL": "请求的 URL 无效",
      "ERR_TLS_CERT_ALTNAME_INVALID": "TLS 证书的主机名无效",
      "ERR_TLS_CERT_REJECTED": "TLS 证书被拒绝",
      "ERR_HTTP2_STREAM_CANCEL": "HTTP2 流被取消",
      "ERR_HTTP2_SESSION_ERROR": "HTTP2 会话出错",
      "ERR_QUICSESSION_VERSION_NEGOTIATION": "QUIC 会话版本协商失败",
      "EAI_AGAIN": "DNS 查找超时",
      "ERR_CONNECTION_TIMED_OUT": "连接超时",
      "ERR_INTERNET_DISCONNECTED": "互联网连接已断开",
      "ERR_SSL_PROTOCOL_ERROR": "SSL 协议错误",
      "ERR_ADDRESS_UNREACHABLE": "地址无法到达",
      "ERR_BLOCKED_BY_CLIENT": "请求被客户端阻止",
      "ERR_BLOCKED_BY_RESPONSE": "响应被阻止",
      "ERR_CERT_COMMON_NAME_INVALID": "证书的通用名称无效",
      "ERR_CERT_DATE_INVALID": "证书日期无效",
      "ERR_CERT_AUTHORITY_INVALID": "证书颁发机构无效",
      "ERR_CONTENT_LENGTH_MISMATCH": "内容长度不匹配",
      "ERR_INSECURE_RESPONSE": "响应不安全",
      "ERR_NAME_NOT_RESOLVED": "名称无法解析",
      "ERR_NETWORK_CHANGED": "网络更改",
      "ERR_NO_SUPPORTED_PROXIES": "没有支持的代理",
      "ERR_PROXY_CONNECTION_FAILED": "代理连接失败",
      "ERR_SSL_VERSION_OR_CIPHER_MISMATCH": "SSL 版本或密码不匹配",
      "ERR_TIMED_OUT": "操作超时",
      "ERR_TOO_MANY_REDIRECTS": "重定向过多",
      "ERR_UNSAFE_PORT": "不安全的端口",
      "ERR_SSL_OBSOLETE_VERSION": "SSL 版本过时",
      "ERR_CERT_REVOKED": "证书已被吊销",
      "ERR_CERT_TRANSPARENCY_REQUIRED": "需要证书透明度",
      "ERR_SSL_PINNED_KEY_NOT_IN_CERT_CHAIN": "固定的 SSL 密钥不在证书链中",
      "ERR_TUNNEL_CONNECTION_FAILED": "隧道连接失败"
    };
    this._latestAppVersionData = {
      "build": "169427",
      "version": "13.1.3"
    };
    this._latestLiteAppVersionData = {
      "build": "1676",
      "version": "6.26.0"
    };
    this._latestJDJRAppVersionData = {
      "version": "6.9.0",
      "jdPaySdkVersion": "4.01.26.00",
      "stockSDK": "stocksdk-iphone_6.0.0"
    };
    this._latestIOSVersion = "17.5.1";
    this._appHttpsTlsOptions = {
      "ciphers": ["TLS_AES_128_GCM_SHA256", "TLS_AES_256_GCM_SHA384", "TLS_CHACHA20_POLY1305_SHA256", "ECDHE-RSA-AES128-GCM-SHA256", "ECDHE-RSA-AES256-GCM-SHA384", "ECDHE-ECDSA-AES128-GCM-SHA256", "ECDHE-ECDSA-AES256-GCM-SHA384", "ECDHE-ECDSA-CHACHA20-POLY1305", "ECDHE-RSA-CHACHA20-POLY1305"].join(":")
    };
    this.Base64 = Base64Algorithm;
    this.DataCache = LocalStorageCache;
    this._shopMemberActivityIds = new Map();
    this._H5st = null;
    this._Table = null;
    this._HttpsProxyAgent = null;
    this._genSignModelPath = __dirname + "/Rebels_Sign";
    this._jdCryptoModelPath = __dirname + "/Rebels_H";
    this._hasInitAppSignConfig = false;
    this._initRequestConfig();
  }
  ["_initRequestConfig"]() {
    try {
      const I11ili = require.main.filename,
        Ii1i1i = path.basename(I11ili, ".js");
      this._requestNoProxyList = (process.env[Ii1i1i + "_no_proxy"] || process.env.RS_NO_PROXY || "").split(",").filter(Ii1i1l => Ii1i1l !== "");
      const iIilli = process.env[Ii1i1i + "_proxy_tunnrl"] || process.env.RS_PROXY_TUNNRL || "",
        lI11i1 = (process.env.RS_TUNNRL_WHITRLIST || "").split("&").filter(Boolean);
      if (iIilli && lI11i1.length > 0) {
        const iI1li = lI11i1.some(ii11Il => process.mainModule.filename.includes(ii11Il));
        if (iI1li) {
          const iiII1l = this._getProxyConfigWithAddress(iIilli);
          iiII1l ? (this._requestAxiosProxyConfig = iiII1l, console.log("\n====================使用代理池模式(新)===================\n"), this.proxyPoolEnabled = true, this.proxyMode = "代理池模式") : console.log("❌ 提供的代理地址无效，跳过启用全局静态代理");
        }
      }
      if (!this.proxyPoolEnabled) {
        const lll11l = process.env[Ii1i1i + "_proxy_api"] || process.env.RS_PROXY_API || "",
          iI1ill = (process.env.RS_API_WHITELIST || "").split("&").filter(Boolean);
        if (lll11l && iI1ill.length > 0) {
          const i1iill = iI1ill.some(ill1 => process.mainModule.filename.includes(ill1));
          if (i1iill) {
            this._requestDynamicProxyConfig = {
              "api": null,
              "proxyConfig": null,
              "useLimit": null,
              "timeLimit": null,
              "fetchFailContinue": null,
              "extractTimestamp": null,
              "lastUseTimeStamp": null,
              "usedTimes": null
            };
            this._requestDynamicProxyConfig.api = lll11l;
            const iI1ili = process.env[Ii1i1i + "_proxy_use_limit"] || process.env.RS_PROXY_USE_LIMIT || "0";
            try {
              this._requestDynamicProxyConfig.useLimit = parseInt(iI1ili);
            } catch {
              this._requestDynamicProxyConfig.useLimit = 1;
            }
            const I1Ill = process.env[Ii1i1i + "_proxy_time_limit"] || process.env.RS_PROXY_TIME_LIMIT || "20000";
            try {
              this._requestDynamicProxyConfig.timeLimit = parseInt(I1Ill);
            } catch {
              this._requestDynamicProxyConfig.timeLimit = 20000;
            }
            this._requestDynamicProxyConfig.fetchFailContinue = (process.env[Ii1i1i + "_proxy_fetch_fail_continue"] || process.env.RS_PROXY_FETCH_FAIL_CONTINUE || "true") === "true";
            this._requestDynamicProxyShowAddress = (process.env[Ii1i1i + "_proxy_show_address"] || process.env.RS_PROXY_HTTP_DYNAMIC_PROXY_SHOW_ADDRESS || "false") === "true";
            console.log("\n=====================使用API模式(新)=====================\n");
            this.proxyPoolEnabled = true;
            this.proxyMode = "API模式";
          }
        }
      }
      Object.assign(axios.defaults, {
        "headers": {
          "common": {
            "User-Agent": this._defaultUserAgent
          }
        },
        "maxContentLength": Infinity,
        "maxBodyLength": Infinity,
        "maxRedirects": Infinity,
        "timeout": 60000,
        "transformResponse": [Ii1i1I => {
          try {
            return JSON.parse(Ii1i1I);
          } catch {}
          try {
            const iI1lI = /[\w$.]+\(\s*({[\s\S]*?})\s*\)\s*;?/;
            if (iI1lI.test(Ii1i1I)) {
              const ll1i11 = Ii1i1I.match(iI1lI)[1];
              return JSON.parse(ll1i11);
            }
          } catch {}
          return Ii1i1I;
        }]
      });
    } catch (lil1i1) {
      console.log("❌ 初始化 HTTP 请求配置时遇到了错误\n" + lil1i1);
    }
  }
  ["getProxyStatus"]() {
    return this.proxyPoolEnabled ? this.proxyMode + "开启" : "关闭";
  }
  ["_initAppSignConfig"]() {
    const l1ll = ["http://sign.257999.xyz/sign"],
      IlliiI = process.env.JD_SIGN_API || l1ll[Math.floor(Math.random() * l1ll.length)];
    this._appSignConfig = {
      "requestApi": IlliiI,
      "bodyField": process.env.JD_SIGN_API_BODY_FIELD || "body",
      "functionIdField": process.env.JD_SIGN_API_FUNCTIONID_FIELD || "fn",
      "requestMethod": null,
      "requestContentType": null,
      "genSign": null
    };
    try {
      const il1III = process.env.JD_SIGN_API_METHOD;
      if (il1III && il1III.toUpperCase() === "GET") this._appSignConfig.requestMethod = "GET";else {
        this._appSignConfig.requestMethod = "POST";
      }
    } catch {}
    try {
      const lll11I = process.env.JD_SIGN_API_CONTENT_TYPE;
      lll11I && lll11I.indexOf("application/x-www-form-urlencoded") !== -1 ? this._appSignConfig.requestContentType = lll11I : this._appSignConfig.requestContentType = "application/json; charset=utf-8";
    } catch {}
    try {
      this._appSignConfig.genSign = require(this._genSignModelPath);
    } catch {}
  }
  ["genRandomString"](IIii1 = 32, I11iii = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-") {
    const iI1l1 = I11iii.length;
    let I11iil = "";
    for (let I11ilI = 0; I11ilI < IIii1; I11ilI++) {
      I11iil += I11iii.charAt(Math.floor(Math.random() * iI1l1));
    }
    return I11iil;
  }
  ["parseUrl"](iIilii) {
    try {
      return new URL(iIilii);
    } catch (iIilil) {
      return {};
    }
  }
  ["parseUrlParameter"](lliII1) {
    try {
      const Iil111 = {},
        illI = this.parseUrl(lliII1),
        lIIl11 = new URLSearchParams(illI?.["search"]);
      for (const [Illil1, Iil11I] of lIIl11) {
        Iil111[Illil1] = Iil11I;
      }
      if (illI?.["hash"] && illI.hash.includes("#/")) {
        const I11il1 = illI.hash.replace("#/", ""),
          lIliI = I11il1.includes("?") ? new URLSearchParams(I11il1.split("?").slice(1).join("?")) : new URLSearchParams();
        for (const [I1ilil, I1l1ll] of lIliI) {
          Iil111[I1ilil] = I1l1ll;
        }
      }
      return Iil111;
    } catch {
      return {};
    }
  }
  ["getUrlParameter"](I1l1li, iI1il) {
    try {
      const IIiii = this.parseUrl(I1l1li),
        IiiI1l = IIiii.searchParams.get(iI1il);
      return IiiI1l || "";
    } catch {
      return "";
    }
  }
  ["objectToQueryString"](IiiI1i) {
    try {
      const lIlII = [];
      for (const lI11li in IiiI1i) {
        if (IiiI1i.hasOwnProperty(lI11li)) {
          const i1lii1 = IiiI1i[lI11li],
            lI11l1 = encodeURIComponent(lI11li),
            lIlIl = i1lii1 === null || i1lii1 === undefined ? "" : encodeURIComponent(i1lii1);
          lIlII.push(lI11l1 + "=" + lIlIl);
        }
      }
      return lIlII.join("&");
    } catch {
      return "";
    }
  }
  ["queryStringToObject"](liilI1) {
    try {
      const lI11lI = {},
        IIilI = liilI1.split("&");
      for (const I1i1Ii of IIilI) {
        const [lii111, I1i1Il] = I1i1Ii.split("=");
        lI11lI[decodeURIComponent(lii111)] = I1i1Il === undefined ? null : decodeURIComponent(I1i1Il);
      }
      return lI11lI;
    } catch {
      return {};
    }
  }
  ["parseResponseCookie"](lI11il) {
    const iIi1Ii = {};
    try {
      if (typeof lI11il === "object" && lI11il?.["headers"] && lI11il?.["headers"]["set-cookie"]) {
        const IlI111 = lI11il.headers["set-cookie"];
        for (const lil1I1 of IlI111) {
          const lliill = lil1I1.split(";")[0];
          iIi1Ii[lliill.substring(0, lliill.indexOf("="))] = lliill.substring(lliill.indexOf("=") + 1);
        }
      }
    } catch {}
    return iIi1Ii;
  }
  ["getResponseCookie"](i1liii, i1liil = "") {
    let iiIII1 = "";
    const li1iII = this.parseResponseCookie(i1liii),
      lIIi1 = Object.keys(li1iII);
    if (lIIi1.length > 0) lIIi1.forEach(IIil1 => {
      iiIII1 += IIil1 + "=" + li1iII[IIil1] + "; ";
    }), iiIII1 = iiIII1.trim();else {
      if (i1liil) return i1liil;
    }
    return iiIII1;
  }
  ["getCookieValue"](lliili, Iill1I) {
    if (!lliili || !Iill1I) return "";
    const II1Ill = new RegExp(Iill1I + "=([^;]*)"),
      iiIIII = II1Ill.exec(lliili.trim().replace(/\s/g, ""));
    return iiIIII && iiIIII[1] || "";
  }
  ["parseCookie"](li1iI1) {
    const i1lil1 = {},
      ilIli = li1iI1.split(";");
    for (const ilIll of ilIli) {
      const [lII, iIl1i1] = ilIll.trim().split("=");
      i1lil1[lII] = iIl1i1;
    }
    return i1lil1;
  }
  ["filterCookieByFields"](liiII, lllIIl) {
    const i1lilI = liiII.split(/;\s*/),
      iiIIIl = i1lilI.filter(iiIIIi => {
        const lIIiI = iiIIIi.split("=")[0];
        return lllIIl.includes(lIIiI);
      });
    return iiIIIl.join("; ");
  }
  ["getLatestIOSVersion"]() {
    return this._latestIOSVersion || "";
  }
  ["formatTime"](ilIlI, lIii11 = Date.now()) {
    const IIili = new Date(lIii11);
    let liiIi1 = ilIlI;
    const lIi = {
      "YYYY": IIili.getFullYear(),
      "MM": String(IIili.getMonth() + 1).padStart(2, "0"),
      "DD": String(IIili.getDate()).padStart(2, "0"),
      "HH": String(IIili.getHours()).padStart(2, "0"),
      "mm": String(IIili.getMinutes()).padStart(2, "0"),
      "ss": String(IIili.getSeconds()).padStart(2, "0"),
      "S": String(IIili.getMilliseconds()).padStart(3, "0")
    };
    return Object.keys(lIi).forEach(i1lili => {
      liiIi1 = liiIi1.replace(new RegExp(i1lili, "g"), lIi[i1lili]);
    }), liiIi1;
  }
  async ["request"](ilIl1) {
    let li1iIl = {
        "success": false,
        "status": null,
        "data": null,
        "headers": null,
        "error": null,
        "connected": false
      },
      lIii1I = this._requestDebugMode,
      lliI1l = null;
    try {
      if (!ilIl1 || !ilIl1.url) {
        return console.log("❌ 调用请求方法无效，缺少必要的参数！"), li1iIl.error = "缺少必要的请求参数", li1iIl;
      }
      ilIl1.hasOwnProperty("debug") && (lIii1I = ilIl1.debug, delete ilIl1.debug);
      const IiiI1I = this._requestAxiosProxyConfig,
        II1IiI = this._requestDynamicProxyConfig,
        IilIII = this._requestNoProxyList;
      if (ilIl1.body) {
        ilIl1.data = ilIl1.body;
        delete ilIl1.body;
      }
      for (const IIIilI of ["data", "params"]) {
        if (!ilIl1[IIIilI]) {
          delete ilIl1[IIIilI];
        }
      }
      ilIl1.method = (ilIl1.method || "get").toLowerCase();
      if (ilIl1.proxy && typeof ilIl1.proxy === "string") {
        const l11III = this._getProxyConfigWithAddress(ilIl1.proxy);
        l11III ? ilIl1.proxy = l11III : (console.log("❌ 代理配置无效，跳过使用代理"), delete ilIl1.proxy);
      }
      ilIl1.data && typeof ilIl1.data === "object" && (!ilIl1.headers || !ilIl1.headers["Content-Type"] || ilIl1.headers["Content-Type"].includes("application/x-www-form-urlencoded")) && (ilIl1.data = querystring.stringify(ilIl1.data));
      if (ilIl1.httpsTlsOptions && typeof ilIl1.httpsTlsOptions === "object" && ilIl1.url.includes("https://")) lliI1l = ilIl1.httpsTlsOptions, Object.assign(https.globalAgent.options, lliI1l), delete ilIl1.httpsTlsOptions;else ilIl1.hasOwnProperty("httpsTlsOptions") && delete ilIl1.httpsTlsOptions;
      let i1I1I1 = false;
      if (!["proxy", "httpAgent", "httpsAgent"].some(l11II1 => ilIl1.hasOwnProperty(l11II1))) {
        if (IiiI1I || II1IiI) {
          let liiIlI = true;
          const IIIil1 = this.parseUrl(ilIl1.url).hostname || ilIl1.url;
          for (const lIIli of IilIII) {
            const lilli1 = new RegExp("^" + lIIli.split("*").join(".*") + "$");
            if (lilli1.test(IIIil1.hostname)) {
              liiIlI = false;
              lIii1I && console.log("ℹ️ 该代理请求命中 NO_PROXY 规则 ➜ " + lIIli);
              break;
            }
          }
          if (liiIlI) {
            if (IiiI1I) ilIl1.proxy = IiiI1I;else {
              if (II1IiI) {
                if (II1IiI.proxyConfig) {
                  ilIl1.proxy = II1IiI.proxyConfig;
                  i1I1I1 = true;
                } else {
                  const l11IIi = await this.getProxyAddressWithApi(II1IiI.api),
                    llll1i = this._getProxyConfigWithAddress(l11IIi);
                  if (llll1i) Object.assign(II1IiI, {
                    "extractTimestamp": Date.now(),
                    "usedTimes": 0,
                    "proxyConfig": llll1i
                  }), ilIl1.proxy = llll1i, i1I1I1 = true, this._requestDynamicProxyShowAddress && console.log(this._requestDynamicProxyPrintAddressFormat.replace(/<address>/g, this._getProxyAddressWithConfig(ilIl1.proxy)));else {
                    if (!II1IiI.fetchFailContinue) {
                      return li1iIl.error = "获取动态代理地址失败，已设置跳过请求", li1iIl;
                    }
                  }
                }
              }
            }
          }
        }
      }
      for (const i1I1Ii of ["proxy", "httpAgent", "httpsAgent"]) {
        if (!ilIl1[i1I1Ii]) {
          delete ilIl1[i1I1Ii];
        }
      }
      ilIl1.proxy && (this._loadModule("HttpsProxyAgent"), ilIl1.httpsAgent = this._genHttpsAgentWithProxyConfig(ilIl1.proxy), delete ilIl1.proxy);
      await axios(ilIl1).then(async IiI1iI => {
        if (i1I1I1) {
          II1IiI.lastUseTimeStamp = Date.now();
          II1IiI.usedTimes++;
          const liiIli = II1IiI.useLimit > 0 && II1IiI.usedTimes >= II1IiI.useLimit,
            IIIiii = II1IiI.timeLimit > 0 && Date.now() - II1IiI.extractTimestamp >= II1IiI.timeLimit;
          if (liiIli || IIIiii) {
            Object.assign(II1IiI, {
              "proxyConfig": null,
              "lastUseTimeStamp": null,
              "extractTimestamp": null,
              "usedTimes": 0
            });
          }
        }
        li1iIl.success = true;
        li1iIl.status = IiI1iI.status;
        li1iIl.data = IiI1iI.data;
        li1iIl.headers = IiI1iI.headers;
        li1iIl.connected = true;
        if (typeof ilIl1.onSuccess === "function") {
          try {
            await ilIl1.onSuccess(IiI1iI.data, IiI1iI);
          } catch (IlIIiI) {
            console.log("❌ 调用 onSuccess 回调时遇到了错误 " + (IlIIiI.message || IlIIiI));
          }
        }
        lIii1I && this._handleRequestDebugPrint(IiI1iI, true);
      }).catch(async i1lI1i => {
        if (i1I1I1) {
          II1IiI.lastUseTimeStamp = Date.now();
          II1IiI.usedTimes++;
          const llll11 = II1IiI.useLimit > 0 && II1IiI.usedTimes >= II1IiI.useLimit,
            illIi = II1IiI.timeLimit > 0 && Date.now() - II1IiI.extractTimestamp >= II1IiI.timeLimit;
          (llll11 || illIi) && Object.assign(II1IiI, {
            "proxyConfig": null,
            "lastUseTimeStamp": null,
            "extractTimestamp": null,
            "usedTimes": 0
          });
        }
        let Il1;
        if (i1lI1i.response) {
          li1iIl.connected = true;
          const illIl = i1lI1i.response?.["status"];
          i1lI1i.response.data && (li1iIl.data = i1lI1i.response.data);
          i1lI1i.response.headers && (li1iIl.headers = i1lI1i.response.headers);
          Il1 = this._requestFailMessagesMap[illIl] || "请求失败 [Response code " + illIl + "]";
        } else i1I1I1 && Object.assign(II1IiI, {
          "proxyConfig": null,
          "lastUseTimeStamp": null,
          "extractTimestamp": null,
          "usedTimes": 0
        }), i1lI1i.request ? Il1 = (this._requestErrorMessagesMap[i1lI1i.code] ?? "未知网络错误") + " [" + i1lI1i.code + "]" : Il1 = i1lI1i.message || "未知错误状态";
        (i1lI1i.config?.["httpAgent"] || i1lI1i.config?.["httpsAgent"]) && (Il1 += "（🌐该请求通过代理发出）");
        li1iIl.error = Il1 || null;
        li1iIl.status = i1lI1i.response?.["status"] || null;
        if (typeof ilIl1.onFailOrError === "function") try {
          await ilIl1.onFailOrError(i1lI1i, li1iIl.error, li1iIl.connected);
        } catch (iil1i) {
          console.log("❌ 调用 onFailOrError 回调时遇到了错误 " + (iil1i.message || iil1i));
        } else {
          if (typeof ilIl1.onFail === "function" && li1iIl.connected) try {
            await ilIl1.onFail(i1lI1i, li1iIl.error, li1iIl.status);
          } catch (IliiI1) {
            console.log("❌ 调用 onFail 回调时遇到了错误 " + (IliiI1.message || IliiI1));
          } else {
            if (typeof ilIl1.onError === "function" && !li1iIl.connected) try {
              await ilIl1.onError(i1lI1i, li1iIl.error);
            } catch (III1l) {
              console.log("❌ 调用 onError 回调时遇到了错误 " + (III1l.message || III1l));
            }
          }
        }
        lIii1I && (this._handleRequestDebugPrint(i1lI1i, false), console.log("❌ 请求失败原因 ➜ " + li1iIl.error));
      });
      if (lliI1l) {
        Object.keys(lliI1l).forEach(i1lI1l => {
          https.globalAgent.options[i1lI1l] = null;
        });
      }
    } catch (I1llli) {
      li1iIl.error = I1llli.message || I1llli;
      lIii1I && console.log("❌ 在处理 HTTP 请求时遇到了错误 ➜ " + I1llli);
    }
    return li1iIl;
  }
  async ["get"](iil1I) {
    return await this.request(Object.assign({}, iil1I, {
      "method": "get"
    }));
  }
  async ["post"](IlI11l) {
    return await this.request(Object.assign({}, IlI11l, {
      "method": "post"
    }));
  }
  async ["put"](Ili) {
    return await this.request(Object.assign({}, Ili, {
      "method": "put"
    }));
  }
  async ["delete"](lilll1) {
    return await this.request(Object.assign({}, lilll1, {
      "method": "delete"
    }));
  }
  ["_handleRequestDebugPrint"](illI1, I1i1I1 = true) {
    this._loadModule("TablePrint");
    if (!this._Table) return;
    const l11l1I = this._Table;
    console.log("--------------------- 🔧 HTTP REQUEST DEBUG 🔧 -------------------------");
    try {
      let IlIlII,
        llil1 = null;
      IlIlII = new l11l1I({
        "columns": [{
          "title": "类型",
          "name": "type",
          "alignment": "left"
        }, {
          "title": "说明",
          "name": "info",
          "alignment": "left"
        }],
        "charLength": {
          "🟢": 2,
          "🔴": 2,
          "❌": 2
        }
      });
      IlIlII.addRow({
        "type": "请求结果",
        "info": "" + (I1i1I1 ? "🟢" : illI1?.["response"] ? "🔴" : "❌") + (illI1?.["status"] ? " " + illI1.status : illI1?.["response"] ? " " + illI1.response?.["status"] : "") + " - " + "".concat(illI1?.["config"]?.["method"] || "未知").toUpperCase()
      });
      if (illI1?.["config"]?.["url"]) {
        try {
          llil1 = new URL(illI1.config.url);
          IlIlII.addRow({
            "type": "请求地址",
            "info": llil1.origin
          });
          IlIlII.addRow({
            "type": "请求路径",
            "info": llil1.pathname
          });
        } catch {
          IlIlII.addRow({
            "type": "请求地址",
            "info": illI1.config.url
          });
        }
      }
      IlIlII.printTable();
      if (llil1 && llil1?.["search"] || illI1?.["config"]?.["params"]) try {
        const iiIIl = Object.assign({}, new URLSearchParams(llil1?.["search"]) || {}, illI1?.["config"]?.["params"] || {});
        if (Object.keys(iiIIl).length > 0) {
          IlIlII = new l11l1I({
            "columns": [{
              "title": "名称",
              "name": "label",
              "alignment": "left"
            }, {
              "title": "值",
              "name": "value",
              "alignment": "left"
            }]
          });
          for (let llI1iI in iiIIl) {
            IlIlII.addRow({
              "label": decodeURIComponent(llI1iI),
              "value": decodeURIComponent(iiIIl[llI1iI])
            });
          }
          console.log("\n✧ 请求参数");
          IlIlII.printTable();
        }
      } catch {}
      if (illI1?.["config"]?.["httpAgent"] || illI1?.["config"]?.["httpsAgent"]) {
        const IiI1lI = (illI1.config?.["httpAgent"] || illI1.config?.["httpsAgent"])?.["proxy"],
          il11I = {
            "protocol": IiI1lI.protocol.replace(":", ""),
            "hostname": IiI1lI.hostname
          };
        if (IiI1lI.port) {
          il11I.port = IiI1lI.port;
        }
        if (IiI1lI instanceof URL) {
          (IiI1lI.username || IiI1lI.password) && (il11I.username = IiI1lI.username, il11I.password = IiI1lI.password);
        } else {
          if (IiI1lI.auth) {
            const IIIii1 = IiI1lI.auth.split(":");
            il11I.username = IIIii1[0];
            il11I.password = IIIii1[1];
          }
        }
        IlIlII = new l11l1I({
          "columns": [{
            "title": "名称",
            "name": "label",
            "alignment": "left"
          }, {
            "title": "值",
            "name": "value",
            "alignment": "left"
          }]
        });
        for (let llI1il in il11I) {
          let IiI1l1 = il11I[llI1il];
          typeof IiI1l1 === "object" && (IiI1l1 = JSON.stringify(IiI1l1));
          IlIlII.addRow({
            "label": llI1il,
            "value": IiI1l1
          });
        }
        console.log("\n✧ HTTP 代理配置");
        IlIlII.printTable();
      }
      if (illI1?.["config"]?.["headers"]) {
        const il111 = illI1.config.headers;
        IlIlII = new l11l1I({
          "columns": [{
            "title": "名称",
            "name": "label",
            "alignment": "left"
          }, {
            "title": "值",
            "name": "value",
            "alignment": "left",
            "maxLen": 80
          }]
        });
        for (let llI1ii in il111) {
          let Ilii1II1 = il111[llI1ii];
          typeof Ilii1II1 === "object" && (Ilii1II1 = JSON.stringify(Ilii1II1));
          IlIlII.addRow({
            "label": llI1ii,
            "value": Ilii1II1
          });
        }
        console.log("\n✧ 请求 Headers");
        IlIlII.printTable();
      }
      if (illI1?.["config"]?.["data"]) {
        let IIII11il = illI1.config.data;
        if (typeof IIII11il === "object") IIII11il = JSON.stringify(JSON.parse(IIII11il));else {
          if (typeof IIII11il === "string") {
            try {
              const IIIl1i1I = JSON.parse(IIII11il);
              IIII11il = JSON.stringify(IIIl1i1I);
            } catch {
              IIII11il = JSON.stringify(IIII11il).slice(1, -1);
            }
          }
        }
        console.log("\n✧ 请求 Body\n" + IIII11il);
      }
      if (!I1i1I1 && !illI1?.["response"]) {
        console.log("\n------------------------------------------------------------------------");
        return;
      }
      if (illI1?.["headers"]) {
        const I1Iill1 = illI1.headers;
        IlIlII = new l11l1I({
          "columns": [{
            "title": "名称",
            "name": "label",
            "alignment": "left"
          }, {
            "title": "值",
            "name": "value",
            "alignment": "left",
            "maxLen": 80
          }]
        });
        for (let iIililIi in I1Iill1) {
          let IiIl11iI = I1Iill1[iIililIi];
          typeof IiIl11iI !== "string" && (IiIl11iI = JSON.stringify(IiIl11iI));
          IlIlII.addRow({
            "label": iIililIi,
            "value": IiIl11iI
          });
        }
        console.log("\n✧ 响应 Headers");
        IlIlII.printTable();
      }
      if (illI1?.["data"]) {
        let lIIilI1 = illI1.data;
        if (typeof lIIilI1 === "object") lIIilI1 = JSON.stringify(lIIilI1);else {
          if (typeof lIIilI1 === "string") try {
            const IIIl1i11 = JSON.parse(lIIilI1);
            lIIilI1 = JSON.stringify(IIIl1i11);
          } catch {
            lIIilI1 = JSON.stringify(lIIilI1).slice(1, -1);
          }
        }
        console.log("\n✧ 响应 Body\n" + lIIilI1);
      }
    } catch (IiIl11i1) {
      console.log("❌ 处理 REQUEST DEBUG PRINT 时遇到了错误 ➜ " + (IiIl11i1.message || IiIl11i1));
    }
    console.log("\n------------------------------------------------------------------------");
  }
  async ["getProxyAddressWithApi"](lIlIllil) {
    let IIII11lI = "";
    try {
      const l1i111i1 = /\b(?:\d{1,3}\.){3}\d{1,3}:\d{1,5}\b/g,
        l1Ili1ll = {
          "url": lIlIllil,
          "method": "post",
          "proxy": null,
          "timeout": 30000
        };
      let iIililII = 0,
        l1lIIIi = null;
      const I1Iili1 = 1;
      while (iIililII < I1Iili1) {
        const l1lIIIl = await this.request(l1Ili1ll);
        if (!l1lIIIl.success) {
          l1lIIIi = l1lIIIl.error;
          iIililII++;
          continue;
        }
        if (!l1lIIIl.data) {
          l1lIIIi = "无响应数据";
          iIililII++;
          continue;
        }
        const IiIl11il = l1lIIIl.data;
        if (typeof IiIl11il === "object") {
          if (IiIl11il?.["data"]) {
            let ii1IiII = IiIl11il.data;
            if (Array.isArray(ii1IiII) && ii1IiII.length > 0) {
              ii1IiII = ii1IiII[0];
              if (ii1IiII?.["ip"] && ii1IiII?.["port"]) {
                IIII11lI = ii1IiII.ip + ":" + ii1IiII.port;
              } else ii1IiII?.["IP"] && ii1IiII?.["Port"] && (IIII11lI = ii1IiII.IP + ":" + ii1IiII.Port);
            } else {
              if (ii1IiII?.["proxy_list"] && Array.isArray(ii1IiII.proxy_list) && ii1IiII.proxy_list.length > 0) {
                const IlIl11I = ii1IiII.proxy_list[0];
                if (typeof IlIl11I === "object" && IlIl11I?.["ip"] && IlIl11I?.["port"]) {
                  IIII11lI = IlIl11I.ip + ":" + IlIl11I.port;
                } else {
                  IIII11lI = IlIl11I;
                }
              }
            }
            IIII11lI && !l1i111i1.test(IIII11lI) && (IIII11lI = "");
          }
          !IIII11lI && (l1lIIIi = "接口响应数据异常：" + JSON.stringify(IiIl11il));
        } else {
          const l1Ili1ii = IiIl11il.match(l1i111i1);
          l1Ili1ii && (IIII11lI = l1Ili1ii[0]);
          if (!IIII11lI) {
            l1lIIIi = "接口响应数据异常：" + IiIl11il;
          }
        }
        if (IIII11lI) return IIII11lI;
        iIililII++;
      }
      if (iIililII >= I1Iili1) {
        console.log("⚠ 提取代理地址失败 ➜ " + l1lIIIi);
      }
    } catch (ii1IiI1) {
      console.log("❌ 在处理请求代理API获取代理地址时遇到了错误\n" + ii1IiI1);
    }
    return IIII11lI;
  }
  ["_getProxyConfigWithAddress"](l1i111ii = "") {
    try {
      if (!l1i111ii) return null;
      !l1i111ii.includes("://") && (l1i111ii = "http://" + l1i111ii);
      const iiI1iI1l = this.parseUrl(l1i111ii);
      if (iiI1iI1l?.["hostname"]) {
        const IiIl11lI = {
          "protocol": iiI1iI1l.protocol.replace(":", "") === "https" ? "https" : "http",
          "host": iiI1iI1l.hostname,
          "port": parseInt(iiI1iI1l?.["port"] || "8080")
        };
        if (iiI1iI1l?.["username"] || iiI1iI1l?.["password"]) {
          IiIl11lI.auth = {
            "username": iiI1iI1l?.["username"] || "",
            "password": iiI1iI1l?.["password"] || ""
          };
        }
        return IiIl11lI;
      }
    } catch {}
    return null;
  }
  ["_getProxyAddressWithConfig"](iliIliiI = null) {
    try {
      if (!iliIliiI) {
        return null;
      }
      const I1Iilli = Object.assign({}, iliIliiI);
      let l1Ili1i1 = "";
      if (I1Iilli.auth) {
        l1Ili1i1 = (I1Iilli.auth?.["username"] || "") + ":" + (I1Iilli.auth?.["password"] || "") + "@";
      }
      return I1Iilli.protocol + "://" + l1Ili1i1 + I1Iilli.host + ":" + I1Iilli.port;
    } catch {
      return JSON.stringify(iliIliiI);
    }
  }
  ["_genHttpsAgentWithProxyConfig"](IIII11iI) {
    try {
      if (!this._HttpsProxyAgent) return null;
      if (!IIII11iI) return null;
      let l1i111lI = (IIII11iI?.["protocol"] || "http") + "://";
      return IIII11iI?.["auth"] && (l1i111lI += (IIII11iI.auth?.["username"] || "") + ":" + (IIII11iI.auth?.["password"] || "") + "@"), l1i111lI += IIII11iI?.["host"] + ":" + (IIII11iI?.["port"] || "8080"), new this._HttpsProxyAgent(l1i111lI);
    } catch (IiIiiiii) {
      console.log("❌ 加载代理时遇到了错误 ➜ " + (IiIiiiii.message || IiIiiiii));
    }
    return null;
  }
  async ["concTaskNormal"](l1IiIilI = "3", I11IIl11 = 100, I1I1iIIl) {
    let I11IIl1I = false,
      IlI1i1I = 0,
      Ilii1IIi = 0;
    async function I1IillI(IliIIIlI) {
      const IlI11I1l = await I1I1iIIl(IliIIIlI);
      if (IlI11I1l) {
        if (typeof IlI11I1l === "boolean") I11IIl1I = true;else {
          if (typeof IlI11I1l === "object") {
            IlI11I1l?.["runEnd"] && (I11IIl1I = true);
          }
        }
      }
      IlI1i1I--;
      Ilii1IIl();
    }
    async function Ilii1IIl() {
      while (IlI1i1I < l1IiIilI && I11IIl11 > 0 && !I11IIl1I) {
        I11IIl11--;
        IlI1i1I++;
        Ilii1IIi++;
        await I1IillI(Ilii1IIi);
      }
      I11IIl1I && (await new Promise(IIl1l1lI => {
        const iililIl = setInterval(() => {
          IlI1i1I === 0 && (clearInterval(iililIl), IIl1l1lI());
        }, 100);
      }));
    }
    const IIl1l1il = Math.min(I11IIl11, l1IiIilI),
      l1I11ll1 = [];
    for (let i1l1l111 = 0; i1l1l111 < IIl1l1il; i1l1l111++) {
      I11IIl11--;
      IlI1i1I++;
      Ilii1IIi++;
      l1I11ll1.push(I1IillI(Ilii1IIi));
    }
    await Promise.all(l1I11ll1);
    Ilii1IIl();
    await new Promise(ii1i1i1I => {
      const iililIi = setInterval(() => {
        (IlI1i1I === 0 || I11IIl1I) && (clearInterval(iililIi), ii1i1i1I());
      }, 100);
    });
  }
  ["setCookie"](ii1IiIi) {
    this._Cookie = ii1IiIi;
  }
  ["unsetCookie"]() {
    this._Cookie = "";
    this._UserAgent = "";
  }
  ["getCookie"]() {
    return this._Cookie;
  }
  ["getLatestAppVersion"]() {
    return this._latestAppVersionData.version || "";
  }
  ["getLatestAppBuildVersion"]() {
    return this._latestAppVersionData.build || "";
  }
  ["getLatestLiteAppVersion"]() {
    return this._latestLiteAppVersionData.version || "";
  }
  ["getLatestLiteAppBuildVersion"]() {
    return this._latestLiteAppVersionData.build || "";
  }
  ["getErrorMsg"](l1IiIii1, ii1IiIl = ["msg", "message", "errMsg", "errMessage", "errorMsg", "errorMessage", "bizMsg", "subMsg", "echo", "error", "resp_msg", "txt", "rlt", "displayMsg", "resultMsg", "desc"], IIl1l1ll = "") {
    if (!l1IiIii1) return IIl1l1ll;
    for (let il1iIii1 of ii1IiIl) {
      if (l1IiIii1.hasOwnProperty(il1iIii1)) return l1IiIii1[il1iIii1];
    }
    return IIl1l1ll;
  }
  ["maskUserName"](IIl1l1li = "", ii1i1i1l = "*") {
    if (!IIl1l1li) return "";
    if (IIl1l1li.length <= 1) {
      return ii1i1i1l;
    }
    if (IIl1l1li.length < 5) return IIl1l1li.slice(0, 1) + ii1i1i1l.repeat(IIl1l1li.length - 1);
    return IIl1l1li.slice(0, 2) + ii1i1i1l.repeat(IIl1l1li.length - 4) + IIl1l1li.slice(-2);
  }
  ["genUuid"](liIi1III = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", iIllIii = "0123456789abcdef") {
    let il1li1iI = "";
    for (let iIllIiI of liIi1III) {
      if (iIllIiI === "x") il1li1iI += iIllIii.charAt(Math.floor(Math.random() * iIllIii.length));else {
        if (iIllIiI === "X") il1li1iI += iIllIii.charAt(Math.floor(Math.random() * iIllIii.length)).toUpperCase();else {
          il1li1iI += iIllIiI;
        }
      }
    }
    return il1li1iI;
  }
  ["genUA"](illiIIi = "", iill11i1 = "jd") {
    if (illiIIi && this._UserAgentMap.has(illiIIi)) {
      return this._UserAgentMap.get(illiIIi);
    }
    const iiiIIiIl = iill11i1 === "lite" ? "lite" : iill11i1 === "jr" ? "jr" : "jd",
      iiiIIiIi = {
        "jd": {
          "app": "jdapp",
          "appBuild": this._latestAppVersionData.build,
          "clientVersion": this._latestAppVersionData.version
        },
        "lite": {
          "app": "jdltapp",
          "appBuild": this._latestLiteAppVersionData.build,
          "clientVersion": this._latestLiteAppVersionData.version
        },
        "jr": {
          "clientVersion": this._latestJDJRAppVersionData.version,
          "jdPaySdkVersion": this._latestJDJRAppVersionData.jdPaySdkVersion,
          "stockSDK": this._latestJDJRAppVersionData.stockSDK
        }
      },
      IIlilliI = [this._latestIOSVersion].map(iill11iI => {
        let IIlillil = iill11iI.split(".");
        return IIlillil.join(".");
      }),
      IIlilll1 = IIlilliI[Math.floor(Math.random() * IIlilliI.length)],
      iIllIlI = "iPhone; CPU iPhone OS " + IIlilll1.replace(".", "_") + " like Mac OS X",
      {
        clientVersion: IliIIIl1
      } = iiiIIiIi[iiiIIiIl];
    let iIIii1II, l1I11lll;
    switch (iiiIIiIl) {
      case "jr":
        const {
          stockSDK: iIIii1Ii,
          jdPaySdkVersion: iIIii1Il
        } = iiiIIiIi[iiiIIiIl];
        iIIii1II = ["Mozilla/5.0 (" + iIllIlI + ") AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148/application=JDJR-App", "clientType=ios", "iosType=iphone", "clientVersion=" + IliIIIl1, "HiClVersion=" + IliIIIl1, "isUpdate=0", "osVersion=" + IIlilll1, "osName=iOS", "screen=932*430", "src=App Store", "netWork=1", "netWorkType=1", "CpayJS=UnionPay/1.0 JDJR", "stockSDK=" + iIIii1Ii, "sPoint=", "jdPay=(*#@jdPaySDK*#@jdPayChannel=jdfinance", "jdPayChannelVersion=" + IliIIIl1, "jdPaySdkVersion=" + iIIii1Il, "jdPayClientName=iOS*#@jdPaySDK*#@)"], l1I11lll = "&";
        break;
      case "jd":
      case "lite":
      default:
        const {
            app: l1I11llI,
            appBuild: IliIIIii
          } = iiiIIiIi[iiiIIiIl],
          iIllIl1 = !!illiIIi ? JSON.stringify(this.getCipherConf({
            "ud": CryptoJS.SHA1(illiIIi).toString(),
            "sv": IIlilll1,
            "iad": ""
          }, iiiIIiIl)) : "";
        iIIii1II = [l1I11llI, "iPhone", IliIIIl1, "", "rn/" + this.genUuid(), "M/5.0", "appBuild/" + IliIIIii, "jdSupportDarkMode/0", "ef/1", iIllIl1 ? "ep/" + encodeURIComponent(iIllIl1) : "", "Mozilla/5.0 (" + iIllIlI + ") AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "supportJDSHWK/1", ""], l1I11lll = ";";
        break;
    }
    const il1iIil1 = iIIii1II.join(l1I11lll);
    illiIIi && this._UserAgentMap.set(illiIIi, il1iIil1);
    if (this._Cookie) this._UserAgent = il1iIil1;
    return il1iIil1;
  }
  ["genUAWithJDJR"]() {
    return this.genUA("", "jr");
  }
  ["getJEH"](IliIIIil = "") {
    return !IliIIIil && (IliIIIil = "JD4iPhone/" + this.getLatestAppBuildVersion() + " (iPhone; iOS " + this.getLatestIOSVersion() + "; Scale/3.00)"), encodeURIComponent(JSON.stringify(this.getCipherConf({
      "User-Agent": encodeURIComponent(IliIIIil)
    })));
  }
  ["getJEC"](il1iIili) {
    return encodeURIComponent(JSON.stringify(this.getCipherConf({
      "pin": encodeURIComponent(il1iIili)
    })));
  }
  ["getCipherConf"](I1iiiIl1, iill11lI = "jd") {
    if (I1iiiIl1 && typeof I1iiiIl1 === "object") {
      for (let IillliII in I1iiiIl1) {
        I1iiiIl1[IillliII] = this.Base64.encode(I1iiiIl1[IillliII]);
      }
    } else I1iiiIl1 && typeof I1iiiIl1 === "string" ? I1iiiIl1 = this.Base64.encode(I1iiiIl1) : I1iiiIl1 = {};
    return {
      "ciphertype": 5,
      "cipher": I1iiiIl1,
      "ts": Math.floor(Date.now() / 1000),
      "hdid": "JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw=",
      "version": "1.0.3",
      "appname": iill11lI === "lite" ? "com.jd.jdmobilelite" : "com.360buy.jdmobile",
      "ridx": -1
    };
  }
  async ["getLoginStatus"](iIii1il = this._Cookie) {
    if (!iIii1il) {
      return console.log("🚫 getLoginStatus 请求失败 ➜ 未设置Cookie"), undefined;
    }
    try {
      const lI1iiiiI = {
        "url": "https://plogin.m.jd.com/cgi-bin/ml/islogin",
        "method": "GET",
        "headers": {
          "Accept": "*/*",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "zh-CN,zh-Hans;q=0.9",
          "Cookie": iIii1il,
          "Host": "plogin.m.jd.com",
          "User-Agent": this._UserAgent || this._defaultUserAgent
        },
        "timeout": 30000,
        "debug": false
      };
      let l11lli1l = 0,
        iiliiii1 = null;
      const l11Il1I1 = 1;
      while (l11lli1l < l11Il1I1) {
        const iiliiiiI = await this.request(lI1iiiiI);
        if (!iiliiiiI.success) {
          iiliiii1 = "🚫 getLoginStatus 请求失败 ➜ " + iiliiiiI.error;
          l11lli1l++;
          continue;
        }
        if (!iiliiiiI.data) {
          iiliiii1 = "🚫 getLoginStatus 请求异常 ➜ 无响应数据";
          l11lli1l++;
          continue;
        }
        const Ili1i1ll = iiliiiiI.data?.["islogin"];
        if (Ili1i1ll === "1") return true;else {
          if (Ili1i1ll === "0") return false;
        }
        l11lli1l++;
      }
      l11lli1l >= l11Il1I1 && console.log(iiliiii1);
    } catch (Ili1i1li) {
      console.log("❌ getLoginStatus 在处理请求中遇到了错误\n" + Ili1i1li);
    }
    return undefined;
  }
  async ["joinShopMember"](I11i1il1, llIl11II = this._Cookie, I11il1ll = "") {
    if (!llIl11II) return console.log("🚫 joinShopMember 请求失败 ➜ 未设置Cookie"), undefined;
    if (!I11i1il1) return undefined;
    try {
      this._loadModule("h5st");
      if (!this._H5st) return undefined;
      I11i1il1 = "".concat(I11i1il1);
      const iiliiiii = {
        "venderId": I11i1il1,
        "bindByVerifyCodeFlag": 1,
        "registerExtend": {},
        "writeChildFlag": 0,
        "channel": 406,
        "appid": "27004",
        "needSecurity": true,
        "bizId": "shopmember_m_jd_com"
      };
      !I11il1ll && this._shopMemberActivityIds.has(I11i1il1) && (I11il1ll = this._shopMemberActivityIds.get(I11i1il1));
      I11il1ll && (iiliiiii.activityId = I11il1ll);
      const IillliIl = {
          "appId": "27004",
          "appid": "shopmember_m_jd_com",
          "functionId": "bindWithVender",
          "clientVersion": "9.2.0",
          "client": "H5",
          "body": iiliiiii,
          "version": "4.7",
          "t": true,
          "ua": this._UserAgent || this._defaultUserAgent
        },
        lI1l11ll = await this._H5st.getH5st(IillliIl);
      if (!lI1l11ll.paramsData) return undefined;
      const I11il1il = {
          "url": "https://api.m.jd.com/client.action",
          "method": "POST",
          "headers": {
            "Accept": "*/*",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "zh-CN,zh-Hans;q=0.9",
            "Origin": "https://pages.jd.com",
            "Referer": "https://pages.jd.com/",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent": this._UserAgent || this._defaultUserAgent,
            "Cookie": llIl11II
          },
          "data": Object.assign({}, lI1l11ll.paramsData, {
            "area": "",
            "screen": "1290*2796",
            "uuid": "88888"
          }),
          "timeout": 30000
        },
        Ili1i1lI = await this.request(I11il1il);
      if (!Ili1i1lI.success) {
        return console.log("🚫 joinShopMember 请求失败 ➜ " + Ili1i1lI.error), undefined;
      }
      if (!Ili1i1lI.data) return console.log("🚫 joinShopMember 请求异常 ➜ 无响应数据"), undefined;
      const lI1l11li = Ili1i1lI.data;
      if (lI1l11li?.["success"] === true) {
        if (lI1l11li?.["result"] && lI1l11li.result?.["giftInfo"]) {
          for (let iIi1Ii1I of lI1l11li.result?.["giftInfo"]?.["giftList"]) {
            console.log(" >> 入会获得：" + iIi1Ii1I.discountString + iIi1Ii1I.prizeName);
          }
        }
        if (lI1l11li?.["message"] === "加入店铺会员成功") return true;else {
          if (lI1l11li?.["message"] === "活动太火爆，请稍后再试") console.log("🚫 加入店铺会员失败 ➜ " + lI1l11li.message);else {
            return console.log("🚫 加入店铺会员失败 ➜ " + lI1l11li?.["message"]), false;
          }
        }
      } else {
        if (lI1l11li?.["message"]) {
          return console.log("🚫 加入店铺会员失败 ➜ " + lI1l11li.message), false;
        } else console.log("🚫 加入店铺会员失败 ➜ " + JSON.stringify(lI1l11li));
      }
    } catch (IIl11iIl) {
      console.log("❌ joinShopMember 在处理请求中遇到了错误\n" + IIl11iIl);
    }
    return undefined;
  }
  async ["getShopMemberStatus"](lliI1I1l, I1iiiIi1 = this._Cookie) {
    if (!I1iiiIi1) return console.log("🚫 getShopMemberStatus 请求失败 ➜ 未设置Cookie"), undefined;
    if (!lliI1I1l) return undefined;
    try {
      this._loadModule("h5st");
      if (!this._H5st) {
        return undefined;
      }
      lliI1I1l = "".concat(lliI1I1l);
      const i1111I11 = {
          "appId": "27004",
          "appid": "shopmember_m_jd_com",
          "functionId": "getShopOpenCardInfo",
          "clientVersion": "9.2.0",
          "client": "H5",
          "body": {
            "venderId": lliI1I1l,
            "payUpShop": true,
            "queryVersion": "10.5.2",
            "appid": "27004",
            "needSecurity": true,
            "bizId": "shopmember_m_jd_com",
            "channel": 406
          },
          "version": "4.7",
          "t": true,
          "ua": this._UserAgent || this._defaultUserAgent
        },
        iiliiili = await this._H5st.getH5st(i1111I11);
      if (!iiliiili.paramsData) {
        return undefined;
      }
      const ii1il11i = {
          "url": "https://api.m.jd.com/client.action",
          "method": "POST",
          "headers": {
            "Accept": "*/*",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "zh-CN,zh-Hans;q=0.9",
            "Origin": "https://pages.jd.com",
            "Referer": "https://pages.jd.com/",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent": this._UserAgent || this._defaultUserAgent,
            "Cookie": I1iiiIi1
          },
          "data": Object.assign({}, iiliiili.paramsData, {
            "area": "",
            "screen": "1290*2796",
            "uuid": "88888"
          }),
          "timeout": 30000
        },
        ii1i1i11 = await this.request(ii1il11i);
      if (!ii1i1i11.success) return console.log("🚫 getShopMemberStatus 请求失败 ➜ " + ii1i1i11.error), undefined;
      if (!ii1i1i11.data) {
        return console.log("🚫 getShopMemberStatus 请求异常 ➜ 无响应数据"), undefined;
      }
      const l1iIiIIi = ii1i1i11.data;
      if (l1iIiIIi?.["success"] === true) {
        let IlliiIii = l1iIiIIi.result;
        if (Array.isArray(IlliiIii)) {
          IlliiIii = IlliiIii[0];
        }
        const l1iIiIIl = IlliiIii?.["interestsRuleList"]?.[0]?.["interestsInfo"]?.["activityId"];
        if (l1iIiIIl) {
          this._shopMemberActivityIds.set(lliI1I1l, l1iIiIIl);
        }
        return IlliiIii?.["userInfo"]?.["openCardStatus"] === 1;
      } else l1iIiIIi?.["message"] ? console.log("🚫 获取店铺会员状态异常 ➜ " + l1iIiIIi.message) : console.log("🚫 获取店铺会员状态异常 ➜ " + JSON.stringify(l1iIiIIi));
    } catch (ii1il11I) {
      console.log("❌ getShopMemberStatus 在处理请求中遇到了错误\n" + ii1il11I);
    }
    return undefined;
  }
  async ["randomSign"](IIiIlI1i, l1iIiIII, IIiIlI1l, IlliiIl1 = this._Cookie) {
    const I1iiiIlI = await this.request({
        "url": IIiIlI1l,
        "method": "POST",
        "headers": {
          "Content-Type": "application/json"
        },
        "body": JSON.stringify({
          "fn": IIiIlI1i,
          "body": l1iIiIII
        }),
        "timeout": 30000
      }),
      ii1il111 = I1iiiIlI.data;
    if (ii1il111 && ii1il111.body) return ii1il111.body;
  }
  async ["getShopDetail"](l1iIiII1 = {
    "venderId": "",
    "shopId": ""
  }, l1li1Ill = this._Cookie) {
    const {
      venderId: IilIl1iI,
      shopId: i111illl
    } = l1iIiII1;
    if (!IilIl1iI && !i111illl) return {};
    try {
      const IilIl1i1 = {
          "url": "https://api.m.jd.com/client.action",
          "method": "POST",
          "headers": {
            "Accept": "*/*",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7,en-GB;q=0.6",
            "Content-Type": "application/x-www-form-urlencoded",
            "Origin": "https://shop.m.jd.com",
            "Referer": "https://shop.m.jd.com/",
            "Host": "api.m.jd.com",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "same-site",
            "User-Agent": this._defaultUserAgent,
            "X-Referer-Page": "https://shop.m.jd.com/shop/introduce",
            "X-Rp-Client": "h5_1.0.0",
            "Cookie": l1li1Ill || ""
          },
          "data": {
            "functionId": "whx_getMShopDetail",
            "body": JSON.stringify({
              "shopId": "".concat(i111illl || ""),
              "venderId": "".concat(IilIl1iI || ""),
              "source": "m-shop"
            }),
            "t": Date.now().toString(),
            "appid": "shop_m_jd_com",
            "clientVersion": "11.0.0",
            "client": "wh5",
            "area": "",
            "uuid": ""
          },
          "timeout": 30000
        },
        l1li1IlI = await this.request(IilIl1i1);
      if (!l1li1IlI.success) return console.log("🚫 getShopDetail 请求失败 ➜ " + l1li1IlI.error), {};
      if (!l1li1IlI.data) return console.log("🚫 getShopDetail 请求异常 ➜ 无响应数据"), {};
      const I1I1I1i = l1li1IlI.data;
      if (I1I1I1i.code === "200" && I1I1I1i.success === true && I1I1I1i.data) return I1I1I1i?.["data"] || {};
    } catch (I1I1I1l) {
      console.log("❌ getShopDetail 在处理请求中遇到了错误\n" + I1I1I1l);
    }
    return {};
  }
  async ["getShopId"](iIllIlii, il111lI1 = this._Cookie) {
    if (!iIllIlii) return null;
    try {
      const IilIl1lI = await this.getShopDetail({
        "venderId": iIllIlii
      }, il111lI1);
      return IilIl1lI?.["shopBaseInfo"]?.["shopId"] || null;
    } catch (il111lII) {
      console.log("❌ getShopId 在处理请求中遇到了错误\n" + il111lII);
    }
    return null;
  }
  async ["getVenderId"](i111ilil, iIllIliI = this._Cookie) {
    if (!i111ilil) return null;
    try {
      const lliIilii = await this.getShopDetail({
        "shopId": i111ilil
      }, iIllIliI);
      return lliIilii?.["shopBaseInfo"]?.["venderId"] || null;
    } catch (lliIilil) {
      console.log("❌ getVenderId 在处理请求中遇到了错误\n" + lliIilil);
    }
    return null;
  }
  async ["getShopName"](llIiiiIl = {
    "venderId": "",
    "shopId": ""
  }, llIiiiIi = this._Cookie) {
    const {
      venderId: Il1Iil11,
      shopId: IilI1iil
    } = llIiiiIl;
    if (!Il1Iil11 && !IilI1iil) return null;
    try {
      const IilI1iii = await this.getShopDetail(llIiiiIl, llIiiiIi);
      return IilI1iii?.["shopBaseInfo"]?.["shopName"] || null;
    } catch (iIIllIIl) {
      console.log("❌ getShopName 在处理请求中遇到了错误\n" + iIIllIIl);
    }
    return null;
  }
  async ["followShop"](iIii1ll, lliIill1, llIiiiII = this._Cookie) {
    if (!llIiiiII) {
      return console.log("🚫 followShop 请求失败 ➜ 未设置Cookie"), undefined;
    }
    if (!iIii1ll && typeof iIii1ll !== "boolean" || !lliIill1) {
      return undefined;
    }
    try {
      const l11I1iI1 = {
          "url": "https://api.m.jd.com/client.action",
          "method": "POST",
          "headers": {
            "Accept": "application/json, text/plain, */*",
            "Accept-Encoding": "gzip, deflate, br",
            "Content-Type": "application/x-www-form-urlencoded",
            "Origin": "https://shop.m.jd.com",
            "Referer": "https://shop.m.jd.com/",
            "Connection": "keep-alive",
            "Accept-Language": "zh-cn",
            "Cookie": llIiiiII,
            "User-Agent": this._defaultUserAgent
          },
          "data": {
            "functionId": "whx_followShop",
            "body": JSON.stringify({
              "shopId": lliIill1,
              "follow": iIii1ll
            }),
            "t": Date.now(),
            "appid": "shop_m_jd_com",
            "clientVersion": "11.0.0",
            "client": "wh5"
          },
          "timeout": 30000
        },
        lIIilIl = await this.request(l11I1iI1);
      if (!lIIilIl.success) {
        return console.log("🚫 followShop 请求失败 ➜ " + lIIilIl.error), undefined;
      }
      if (!lIIilIl.data) return console.log("🚫 followShop 请求异常 ➜ 无响应数据"), undefined;
      const Il1Iil1i = lIIilIl.data;
      if (Il1Iil1i?.["code"] === "0") return Il1Iil1i?.["result"]?.["code"] === "0";else {
        if (Il1Iil1i?.["msg"]) return false;else console.log("🚫 " + (iIii1ll ? "关注" : "取关") + "店铺异常 ➜ " + JSON.stringify(Il1Iil1i));
      }
    } catch (lliIilll) {
      console.log("❌ followShop 在处理请求中遇到了错误\n" + lliIilll);
    }
    return undefined;
  }
  ["useAppTls"](l11Il1Il = {}) {
    return Object.assign({}, this._appHttpsTlsOptions, l11Il1Il);
  }
  async ["concTask"](iIllIlll = "3", lliIilli, iIllIlli) {
    const lIIilII = lliIilli.slice();
    let llliI11I = false,
      l1iiI111 = 0,
      iIii1l1 = 0;
    async function I11i1ili(Ilii1Ii1, IIII11Il) {
      const lIlIllI1 = await iIllIlli(Ilii1Ii1, IIII11Il);
      if (lIlIllI1) {
        if (typeof lIlIllI1 === "boolean") llliI11I = true;else {
          if (typeof lIlIllI1 === "object") {
            if (lIlIllI1?.["runEnd"]) {
              llliI11I = true;
            }
          }
        }
      }
      l1iiI111--;
      llliI111();
    }
    async function llliI111() {
      while (l1iiI111 < iIllIlll && lIIilII.length > 0 && !llliI11I) {
        const ii1IIiII = lIIilII.shift();
        l1iiI111++;
        iIii1l1++;
        await I11i1ili(ii1IIiII, iIii1l1);
      }
      llliI11I && (await new Promise(Ilii1IiI => {
        const I1IilII = setInterval(() => {
          l1iiI111 === 0 && (clearInterval(I1IilII), Ilii1IiI());
        }, 100);
      }));
    }
    const IilI1ill = Math.min(lIIilII.length, iIllIlll),
      I11i1ill = [];
    for (let l1lIIil = 0; l1lIIil < IilI1ill; l1lIIil++) {
      const IiIl11Il = lIIilII.shift();
      l1iiI111++;
      iIii1l1++;
      I11i1ill.push(I11i1ili(IiIl11Il, iIii1l1));
    }
    await Promise.all(I11i1ill);
    llliI111();
    await new Promise(iliIll1i => {
      const iIililii = setInterval(() => {
        (l1iiI111 === 0 || llliI11I) && (clearInterval(iIililii), iliIll1i());
      }, 100);
    });
  }
  async ["getSign"](lll111i1, iil1I1l) {
    !this._hasInitAppSignConfig && (this._initAppSignConfig(), this._hasInitAppSignConfig = true);
    let iliIll1I = "";
    try {
      const llIiii1l = this._appSignConfig;
      if (llIiii1l.genSign) {
        try {
          iliIll1I = llIiii1l.genSign(lll111i1, iil1I1l);
        } catch (l1lIIi1) {
          console.log("🚫 getSign 获取本地签名遇到了错误 ➜ " + (l1lIIi1.message || l1lIIi1));
        }
        if (iliIll1I) {
          return iliIll1I;
        } else console.log("🚫 getSign 本地签名获取失败");
      }
      let iililli = {
        [llIiii1l.functionIdField]: lll111i1,
        [llIiii1l.bodyField]: iil1I1l
      };
      const llIiii1i = {
        "url": llIiii1l.requestApi,
        "method": llIiii1l.requestMethod.toLowerCase(),
        "headers": {
          "Content-Type": llIiii1l.requestContentType
        },
        "data": null,
        "timeout": 60000,
        "proxy": null,
        "debug": false
      };
      if (llIiii1l.requestMethod === "GET") llIiii1l.requestApi += "?" + this.objectToQueryString(iililli), delete llIiii1i.data, delete llIiii1i.headers["Content-Type"];else {
        if (llIiii1l.requestContentType.indexOf("application/x-www-form-urlencoded") !== -1) {
          typeof iililli[llIiii1l.bodyField] === "object" && (iililli[llIiii1l.bodyField] = JSON.stringify(iililli[llIiii1l.bodyField]));
          llIiii1i.data = this.objectToQueryString(iililli);
        } else llIiii1i.data = JSON.stringify(iililli);
      }
      const l1Ili1II = await this.request(llIiii1i);
      if (!l1Ili1II.success) return console.log("🚫 getSign 请求失败 ➜ " + l1Ili1II.error), iliIll1I;
      if (!l1Ili1II.data) {
        return console.log("🚫 getSign 请求异常 ➜ 无响应数据"), iliIll1I;
      }
      let lliI1Il1 = l1Ili1II.data;
      if (typeof l1Ili1II.data === "object") {
        lliI1Il1.data && (lliI1Il1 = lliI1Il1.data);
        for (const l1IiIiII of ["body", "convertUrl", "convertUrlNew"]) {
          if (lliI1Il1?.[l1IiIiII] && this._checkSignStrFormat(lliI1Il1[l1IiIiII])) {
            iliIll1I = lliI1Il1[l1IiIiII];
            break;
          }
        }
        !iliIll1I && console.log("🚫 getSign 响应数据解析异常 ➜ " + JSON.stringify(lliI1Il1));
      } else this._checkSignStrFormat(lliI1Il1) ? iliIll1I = lliI1Il1 : console.log("🚫 getSign 响应数据解析异常 ➜ " + lliI1Il1);
    } catch (IIlli11i) {
      console.log("🚫 getSign 在处理请求中遇到了错误\n" + IIlli11i);
    }
    return iliIll1I;
  }
  ["_checkSignStrFormat"](llIiii11) {
    const I1IIli1i = ["body=", "st=", "sign=", "sv="];
    for (let I11IIiil = 0; I11IIiil < I1IIli1i.length; I11IIiil++) {
      if (!llIiii11.includes(I1IIli1i[I11IIiil])) return false;
    }
    return true;
  }
  ["_loadModule"](lliI1Iii) {
    switch (lliI1Iii) {
      case "h5st":
        if (!this._H5st) {
          try {
            const {
              H5st: Ilii1Ill
            } = require(this._jdCryptoModelPath);
            this._H5st = Ilii1Ill;
          } catch (lll111il) {
            console.log("❌ h5st 组件加载失败");
          }
        }
        break;
      case "TablePrint":
        if (!this._Table) try {
          const {
            Table: I1I1Illl
          } = require("console-table-printer");
          this._Table = I1I1Illl;
        } catch (I1I1Illi) {
          console.log("❌ console-table-printer 表格打印模块加载失败 " + (I1I1Illi.message || I1I1Illi));
        }
        break;
      case "HttpsProxyAgent":
        if (!this._HttpsProxyAgent) try {
          const {
            HttpsProxyAgent: Ilii1Il1
          } = require("https-proxy-agent");
          this._HttpsProxyAgent = Ilii1Il1;
        } catch (liIIIIi1) {
          try {
            this._HttpsProxyAgent = require("https-proxy-agent");
          } catch (l1IiIiIl) {
            console.log("❌ https-proxy-agent 代理模块加载失败 " + (l1IiIiIl.message || l1IiIiIl));
          }
        }
        break;
      default:
        break;
    }
  }
}
class Base64Algorithm {
  static ["_utf8Encode"](lliI1Ii1) {
    lliI1Ii1 = lliI1Ii1.replace(/rn/g, "n");
    let l1IiIiIi = "",
      I11IIil1;
    for (let Ilii1IlI = 0; Ilii1IlI < lliI1Ii1.length; Ilii1IlI++) {
      I11IIil1 = lliI1Ii1.charCodeAt(Ilii1IlI);
      if (I11IIil1 < 128) l1IiIiIi += String.fromCharCode(I11IIil1);else {
        if (I11IIil1 > 127 && I11IIil1 < 2048) {
          l1IiIiIi += String.fromCharCode(I11IIil1 >> 6 | 192);
          l1IiIiIi += String.fromCharCode(I11IIil1 & 63 | 128);
        } else l1IiIiIi += String.fromCharCode(I11IIil1 >> 12 | 224), l1IiIiIi += String.fromCharCode(I11IIil1 >> 6 & 63 | 128), l1IiIiIi += String.fromCharCode(I11IIil1 & 63 | 128);
      }
    }
    return l1IiIiIi;
  }
  static ["_utf8Decode"](IiIiiiII) {
    let I11IIili = "",
      IIiIIi1,
      lll111lI,
      il111lll,
      l1Ili1I1 = 0;
    while (l1Ili1I1 < IiIiiiII.length) {
      IIiIIi1 = IiIiiiII.charCodeAt(l1Ili1I1);
      if (IIiIIi1 < 128) I11IIili += String.fromCharCode(IIiIIi1), l1Ili1I1++;else IIiIIi1 > 191 && IIiIIi1 < 224 ? (lll111lI = IiIiiiII.charCodeAt(l1Ili1I1 + 1), I11IIili += String.fromCharCode((IIiIIi1 & 31) << 6 | lll111lI & 63), l1Ili1I1 += 2) : (lll111lI = IiIiiiII.charCodeAt(l1Ili1I1 + 1), il111lll = IiIiiiII.charCodeAt(l1Ili1I1 + 2), I11IIili += String.fromCharCode((IIiIIi1 & 15) << 12 | (lll111lI & 63) << 6 | il111lll & 63), l1Ili1I1 += 3);
    }
    return I11IIili;
  }
  static ["encode"](i11lI1Il, iililiI = "KLMNOPQRSTABCDEFGHIJUVWXYZabcdopqrstuvwxefghijklmnyz0123456789+/") {
    let I1liIIl1 = "",
      i1lillIi,
      liIiilll,
      i1lillIl,
      I1i1I1lI,
      l1lIIIii,
      ii1Iill,
      II11IlI,
      iIIii1ll = 0;
    i11lI1Il = this._utf8Encode(i11lI1Il);
    while (iIIii1ll < i11lI1Il.length) {
      i1lillIi = i11lI1Il.charCodeAt(iIIii1ll++);
      liIiilll = i11lI1Il.charCodeAt(iIIii1ll++);
      i1lillIl = i11lI1Il.charCodeAt(iIIii1ll++);
      I1i1I1lI = i1lillIi >> 2;
      l1lIIIii = (i1lillIi & 3) << 4 | liIiilll >> 4;
      ii1Iill = (liIiilll & 15) << 2 | i1lillIl >> 6;
      II11IlI = i1lillIl & 63;
      if (isNaN(liIiilll)) ii1Iill = II11IlI = 64;else isNaN(i1lillIl) && (II11IlI = 64);
      I1liIIl1 = I1liIIl1 + iililiI.charAt(I1i1I1lI) + iililiI.charAt(l1lIIIii) + iililiI.charAt(ii1Iill) + iililiI.charAt(II11IlI);
    }
    while (I1liIIl1.length % 4 > 1) I1liIIl1 += "=";
    return I1liIIl1;
  }
  static ["decode"](IIiIIli, II11Ili = "KLMNOPQRSTABCDEFGHIJUVWXYZabcdopqrstuvwxefghijklmnyz0123456789+/") {
    let l1lIIIl1 = "",
      liIiillI,
      lI1III1I,
      iilill1,
      II11Ill,
      IIiIIll,
      I1i1I1ii,
      I1i1I1il,
      iI1ili1I = 0;
    while (iI1ili1I < IIiIIli.length) {
      II11Ill = II11Ili.indexOf(IIiIIli.charAt(iI1ili1I++));
      IIiIIll = II11Ili.indexOf(IIiIIli.charAt(iI1ili1I++));
      I1i1I1ii = II11Ili.indexOf(IIiIIli.charAt(iI1ili1I++));
      I1i1I1il = II11Ili.indexOf(IIiIIli.charAt(iI1ili1I++));
      liIiillI = II11Ill << 2 | IIiIIll >> 4;
      lI1III1I = (IIiIIll & 15) << 4 | I1i1I1ii >> 2;
      iilill1 = (I1i1I1ii & 3) << 6 | I1i1I1il;
      l1lIIIl1 += String.fromCharCode(liIiillI);
      if (I1i1I1ii !== 64) l1lIIIl1 += String.fromCharCode(lI1III1I);
      if (I1i1I1il !== 64) l1lIIIl1 += String.fromCharCode(iilill1);
    }
    return l1lIIIl1 = this._utf8Decode(l1lIIIl1), l1lIIIl1;
  }
}
class LocalStorageCache {
  constructor(liIIIIl1 = null, ii1Iil1 = 0, IIl11i1i = null) {
    this.saveFile = liIIIIl1;
    this.defaultTTL = ii1Iil1;
    this.reloadInterval = IIl11i1i;
    this.lastLoad = 0;
    this.data = new Map();
    this.pendingWrites = false;
    this.load();
  }
  ["load"]() {
    if (this.saveFile && fs.existsSync(this.saveFile)) {
      try {
        const IlliiIi1 = fs.readFileSync(this.saveFile, "utf8"),
          illiIll = JSON.parse(IlliiIi1);
        this.data = new Map(Object.entries(illiIll));
      } catch (I1i1I1l1) {}
    }
    this.lastLoad = this.now();
  }
  ["save"]() {
    if (this.saveFile && !this.pendingWrites) {
      this.pendingWrites = true;
      try {
        const liIIIIlI = JSON.stringify(Object.fromEntries(this.data));
        fs.writeFileSync(this.saveFile, liIIIIlI, "utf8");
      } catch {}
      this.pendingWrites = false;
    }
  }
  ["clear"]() {
    this.data.clear();
  }
  ["_checkAndReload"](l1lIIIli = this.now()) {
    if (!this.reloadInterval || !this.saveFile) return;
    l1lIIIli - this.lastLoad > this.reloadInterval && this.load();
  }
  ["now"]() {
    return Date.now();
  }
  ["put"](I1I1iI11, iIllIII = null, illiIil = 0, Ili1i1il) {
    this._checkAndReload();
    illiIil = illiIil === 0 ? this.defaultTTL : illiIil;
    const illiIii = illiIil === 0 ? 0 : this.now() + illiIil;
    let il1lIll = null;
    this.data.has(I1I1iI11) && (il1lIll = this.data.get(I1I1iI11).val);
    iIllIII !== null ? this.data.set(I1I1iI11, {
      "expires": illiIii,
      "val": iIllIII
    }) : this.data.delete(I1I1iI11);
    this.save();
    if (Ili1i1il && il1lIll) Ili1i1il(il1lIll);
    return il1lIll;
  }
  ["get"](il1iIiII, lI1iilIi) {
    this._checkAndReload();
    let i11ilIl1 = null;
    if (this.data.has(il1iIiII)) {
      const iIIii1il = this.data.get(il1iIiII);
      iIIii1il.expires === 0 || this.now() < iIIii1il.expires ? i11ilIl1 = iIIii1il.val : (i11ilIl1 = null, this.nuke(il1iIiII));
    }
    if (lI1iilIi) lI1iilIi(i11ilIl1);
    return i11ilIl1;
  }
  ["del"](IliIIIIl, illiIi1) {
    this._checkAndReload();
    let I1I1iI1i = null;
    this.data.has(IliIIIIl) && (I1I1iI1i = this.data.get(IliIIIIl).val, this.data.delete(IliIIIIl), this.save());
    if (illiIi1) illiIi1(I1I1iI1i);
    return I1I1iI1i;
  }
  ["nuke"](I1I1iI1l) {
    this._checkAndReload();
    this.data.has(I1I1iI1l) && (this.data.delete(I1I1iI1l), this.save());
  }
}
module.exports = new Common();