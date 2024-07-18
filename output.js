//Thu Jul 18 2024 18:22:16 GMT+0000 (Coordinated Universal Time)
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
      ECONNABORTED: "请求被中断",
      ECONNRESET: "连接被对方重置",
      ECONNREFUSED: "服务器拒绝连接",
      ETIMEDOUT: "网络请求超时",
      ENOTFOUND: "无法解析的域名或地址",
      EPROTO: "协议错误",
      EHOSTUNREACH: "无法到达服务器主机",
      ENETUNREACH: "无法到达网络",
      EADDRINUSE: "网络地址已被使用",
      EPIPE: "向已关闭的写入流进行写入",
      ERR_BAD_OPTION_VALUE: "无效或不支持的配置选项值",
      ERR_BAD_OPTION: "无效的配置选项",
      ERR_NETWORK: "网络错误",
      ERR_FR_TOO_MANY_REDIRECTS: "请求被重定向次数过多",
      ERR_DEPRECATED: "使用了已弃用的特性或方法",
      ERR_BAD_RESPONSE: "服务器响应无效或无法解析",
      ERR_BAD_REQUEST: "请求无效或缺少必需参数",
      ERR_CANCELED: "请求被用户取消",
      ERR_NOT_SUPPORT: "当前环境不支持此特性或方法",
      ERR_INVALID_URL: "请求的 URL 无效",
      ERR_TLS_CERT_ALTNAME_INVALID: "TLS 证书的主机名无效",
      ERR_TLS_CERT_REJECTED: "TLS 证书被拒绝",
      ERR_HTTP2_STREAM_CANCEL: "HTTP2 流被取消",
      ERR_HTTP2_SESSION_ERROR: "HTTP2 会话出错",
      ERR_QUICSESSION_VERSION_NEGOTIATION: "QUIC 会话版本协商失败",
      EAI_AGAIN: "DNS 查找超时",
      ERR_CONNECTION_TIMED_OUT: "连接超时",
      ERR_INTERNET_DISCONNECTED: "互联网连接已断开",
      ERR_SSL_PROTOCOL_ERROR: "SSL 协议错误",
      ERR_ADDRESS_UNREACHABLE: "地址无法到达",
      ERR_BLOCKED_BY_CLIENT: "请求被客户端阻止",
      ERR_BLOCKED_BY_RESPONSE: "响应被阻止",
      ERR_CERT_COMMON_NAME_INVALID: "证书的通用名称无效",
      ERR_CERT_DATE_INVALID: "证书日期无效",
      ERR_CERT_AUTHORITY_INVALID: "证书颁发机构无效",
      ERR_CONTENT_LENGTH_MISMATCH: "内容长度不匹配",
      ERR_INSECURE_RESPONSE: "响应不安全",
      ERR_NAME_NOT_RESOLVED: "名称无法解析",
      ERR_NETWORK_CHANGED: "网络更改",
      ERR_NO_SUPPORTED_PROXIES: "没有支持的代理",
      ERR_PROXY_CONNECTION_FAILED: "代理连接失败",
      ERR_SSL_VERSION_OR_CIPHER_MISMATCH: "SSL 版本或密码不匹配",
      ERR_TIMED_OUT: "操作超时",
      ERR_TOO_MANY_REDIRECTS: "重定向过多",
      ERR_UNSAFE_PORT: "不安全的端口",
      ERR_SSL_OBSOLETE_VERSION: "SSL 版本过时",
      ERR_CERT_REVOKED: "证书已被吊销",
      ERR_CERT_TRANSPARENCY_REQUIRED: "需要证书透明度",
      ERR_SSL_PINNED_KEY_NOT_IN_CERT_CHAIN: "固定的 SSL 密钥不在证书链中",
      ERR_TUNNEL_CONNECTION_FAILED: "隧道连接失败"
    };
    this._latestAppVersionData = {
      build: "169427",
      version: "13.1.3"
    };
    this._latestLiteAppVersionData = {
      build: "1676",
      version: "6.26.0"
    };
    this._latestJDJRAppVersionData = {
      version: "6.9.0",
      jdPaySdkVersion: "4.01.26.00",
      stockSDK: "stocksdk-iphone_6.0.0"
    };
    this._latestIOSVersion = "17.5.1";
    this._appHttpsTlsOptions = {
      ciphers: ["TLS_AES_128_GCM_SHA256", "TLS_AES_256_GCM_SHA384", "TLS_CHACHA20_POLY1305_SHA256", "ECDHE-RSA-AES128-GCM-SHA256", "ECDHE-RSA-AES256-GCM-SHA384", "ECDHE-ECDSA-AES128-GCM-SHA256", "ECDHE-ECDSA-AES256-GCM-SHA384", "ECDHE-ECDSA-CHACHA20-POLY1305", "ECDHE-RSA-CHACHA20-POLY1305"].join(":")
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
  _initRequestConfig() {
    try {
      const _0x26817a = require.main.filename,
        _0x57b5c1 = path.basename(_0x26817a, ".js");
      this._requestNoProxyList = (process.env[_0x57b5c1 + "_no_proxy"] || process.env.RS_NO_PROXY || "").split(",").filter(_0x5a653e => _0x5a653e !== "");
      const _0x224572 = process.env[_0x57b5c1 + "_proxy_tunnrl"] || process.env.RS_PROXY_TUNNRL || "",
        _0x1ecb69 = (process.env.RS_TUNNRL_WHITRLIST || "").split("&").filter(Boolean);
      if (_0x224572 && _0x1ecb69.length > 0) {
        const _0x1a0e2f = _0x1ecb69.some(_0x52d779 => process.mainModule.filename.includes(_0x52d779));
        if (_0x1a0e2f) {
          const _0x50b387 = this._getProxyConfigWithAddress(_0x224572);
          _0x50b387 ? (this._requestAxiosProxyConfig = _0x50b387, console.log("\n====================使用代理池模式(新)===================\n"), this.proxyPoolEnabled = true, this.proxyMode = "代理池模式") : console.log("❌ 提供的代理地址无效，跳过启用全局静态代理");
        }
      }
      if (!this.proxyPoolEnabled) {
        const _0x4652b4 = process.env[_0x57b5c1 + "_proxy_api"] || process.env.RS_PROXY_API || "",
          _0x22e666 = (process.env.RS_API_WHITELIST || "").split("&").filter(Boolean);
        if (_0x4652b4 && _0x22e666.length > 0) {
          const _0x131ed7 = _0x22e666.some(_0x462878 => process.mainModule.filename.includes(_0x462878));
          if (_0x131ed7) {
            this._requestDynamicProxyConfig = {
              api: null,
              proxyConfig: null,
              useLimit: null,
              timeLimit: null,
              fetchFailContinue: null,
              extractTimestamp: null,
              lastUseTimeStamp: null,
              usedTimes: null
            };
            this._requestDynamicProxyConfig.api = _0x4652b4;
            const _0x5d542a = process.env[_0x57b5c1 + "_proxy_use_limit"] || process.env.RS_PROXY_USE_LIMIT || "0";
            try {
              this._requestDynamicProxyConfig.useLimit = parseInt(_0x5d542a);
            } catch {
              this._requestDynamicProxyConfig.useLimit = 1;
            }
            const _0x2a144d = process.env[_0x57b5c1 + "_proxy_time_limit"] || process.env.RS_PROXY_TIME_LIMIT || "20000";
            try {
              this._requestDynamicProxyConfig.timeLimit = parseInt(_0x2a144d);
            } catch {
              this._requestDynamicProxyConfig.timeLimit = 20000;
            }
            this._requestDynamicProxyConfig.fetchFailContinue = (process.env[_0x57b5c1 + "_proxy_fetch_fail_continue"] || process.env.RS_PROXY_FETCH_FAIL_CONTINUE || "true") === "true";
            this._requestDynamicProxyShowAddress = (process.env[_0x57b5c1 + "_proxy_show_address"] || process.env.RS_PROXY_HTTP_DYNAMIC_PROXY_SHOW_ADDRESS || "false") === "true";
            console.log("\n=====================使用API模式(新)=====================\n");
            this.proxyPoolEnabled = true;
            this.proxyMode = "API模式";
          }
        }
      }
      Object.assign(axios.defaults, {
        headers: {
          common: {
            "User-Agent": this._defaultUserAgent
          }
        },
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        maxRedirects: Infinity,
        timeout: 60000,
        transformResponse: [_0x4afa4b => {
          try {
            return JSON.parse(_0x4afa4b);
          } catch {}
          try {
            const _0x222a6d = /[\w$.]+\(\s*({[\s\S]*?})\s*\)\s*;?/;
            if (_0x222a6d.test(_0x4afa4b)) {
              const _0xf5bfe0 = _0x4afa4b.match(_0x222a6d)[1];
              return JSON.parse(_0xf5bfe0);
            }
          } catch {}
          return _0x4afa4b;
        }]
      });
    } catch (_0x3c8645) {
      console.log("❌ 初始化 HTTP 请求配置时遇到了错误\n" + _0x3c8645);
    }
  }
  getProxyStatus() {
    return this.proxyPoolEnabled ? this.proxyMode + "开启" : "关闭";
  }
  _initAppSignConfig() {
    const _0x2a657c = ["http://sign.257999.xyz/sign"],
      _0x421da4 = process.env.JD_SIGN_API || _0x2a657c[Math.floor(Math.random() * _0x2a657c.length)];
    this._appSignConfig = {
      requestApi: _0x421da4,
      bodyField: process.env.JD_SIGN_API_BODY_FIELD || "body",
      functionIdField: process.env.JD_SIGN_API_FUNCTIONID_FIELD || "fn",
      requestMethod: null,
      requestContentType: null,
      genSign: null
    };
    try {
      const _0xe8c9a7 = process.env.JD_SIGN_API_METHOD;
      _0xe8c9a7 && _0xe8c9a7.toUpperCase() === "GET" ? this._appSignConfig.requestMethod = "GET" : this._appSignConfig.requestMethod = "POST";
    } catch {}
    try {
      const _0x1f84f1 = process.env.JD_SIGN_API_CONTENT_TYPE;
      _0x1f84f1 && _0x1f84f1.indexOf("application/x-www-form-urlencoded") !== -1 ? this._appSignConfig.requestContentType = _0x1f84f1 : this._appSignConfig.requestContentType = "application/json; charset=utf-8";
    } catch {}
    try {
      this._appSignConfig.genSign = require(this._genSignModelPath);
    } catch {}
  }
  genRandomString(_0x84c9ff = 32, _0x4cdee1 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-") {
    const _0x24304b = _0x4cdee1.length;
    let _0x4e459b = "";
    for (let _0x496cf3 = 0; _0x496cf3 < _0x84c9ff; _0x496cf3++) {
      _0x4e459b += _0x4cdee1.charAt(Math.floor(Math.random() * _0x24304b));
    }
    return _0x4e459b;
  }
  parseUrl(_0x17e3ae) {
    try {
      return new URL(_0x17e3ae);
    } catch (_0x2ec2d1) {
      return {};
    }
  }
  parseUrlParameter(_0x51076d) {
    try {
      const _0x4e6697 = {},
        _0x29e38b = this.parseUrl(_0x51076d),
        _0x41df67 = new URLSearchParams(_0x29e38b?.["search"]);
      for (const [_0x3ebcc4, _0x202eda] of _0x41df67) {
        _0x4e6697[_0x3ebcc4] = _0x202eda;
      }
      if (_0x29e38b?.["hash"] && _0x29e38b.hash.includes("#/")) {
        const _0x3b7c83 = _0x29e38b.hash.replace("#/", ""),
          _0x26998c = _0x3b7c83.includes("?") ? new URLSearchParams(_0x3b7c83.split("?").slice(1).join("?")) : new URLSearchParams();
        for (const [_0x1b2a26, _0x339aca] of _0x26998c) {
          _0x4e6697[_0x1b2a26] = _0x339aca;
        }
      }
      return _0x4e6697;
    } catch {
      return {};
    }
  }
  getUrlParameter(_0x3b5d66, _0x505096) {
    try {
      const _0x2b5d89 = this.parseUrl(_0x3b5d66),
        _0xbb84ca = _0x2b5d89.searchParams.get(_0x505096);
      return _0xbb84ca || "";
    } catch {
      return "";
    }
  }
  objectToQueryString(_0x53791c) {
    try {
      const _0x55ac38 = [];
      for (const _0x236fb0 in _0x53791c) {
        if (_0x53791c.hasOwnProperty(_0x236fb0)) {
          const _0x34d391 = _0x53791c[_0x236fb0],
            _0x2c3b32 = encodeURIComponent(_0x236fb0),
            _0xcd60fd = _0x34d391 === null || _0x34d391 === undefined ? "" : encodeURIComponent(_0x34d391);
          _0x55ac38.push(_0x2c3b32 + "=" + _0xcd60fd);
        }
      }
      return _0x55ac38.join("&");
    } catch {
      return "";
    }
  }
  queryStringToObject(_0x21c7de) {
    try {
      const _0x2d8d6d = {},
        _0x5238d8 = _0x21c7de.split("&");
      for (const _0x3a38a8 of _0x5238d8) {
        const [_0x3107cf, _0xf35802] = _0x3a38a8.split("=");
        _0x2d8d6d[decodeURIComponent(_0x3107cf)] = _0xf35802 === undefined ? null : decodeURIComponent(_0xf35802);
      }
      return _0x2d8d6d;
    } catch {
      return {};
    }
  }
  parseResponseCookie(_0x17d497) {
    const _0x4556ac = {};
    try {
      if (typeof _0x17d497 === "object" && _0x17d497?.["headers"] && _0x17d497?.["headers"]["set-cookie"]) {
        const _0x4b445f = _0x17d497.headers["set-cookie"];
        for (const _0x5e1c2e of _0x4b445f) {
          const _0x4f8895 = _0x5e1c2e.split(";")[0];
          _0x4556ac[_0x4f8895.substring(0, _0x4f8895.indexOf("="))] = _0x4f8895.substring(_0x4f8895.indexOf("=") + 1);
        }
      }
    } catch {}
    return _0x4556ac;
  }
  getResponseCookie(_0x179ed6, _0x473efa = "") {
    let _0x3f01ef = "";
    const _0x128bc7 = this.parseResponseCookie(_0x179ed6),
      _0x42cd05 = Object.keys(_0x128bc7);
    if (_0x42cd05.length > 0) {
      _0x42cd05.forEach(_0x5d6e20 => {
        _0x3f01ef += _0x5d6e20 + "=" + _0x128bc7[_0x5d6e20] + "; ";
      });
      _0x3f01ef = _0x3f01ef.trim();
    } else {
      if (_0x473efa) {
        return _0x473efa;
      }
    }
    return _0x3f01ef;
  }
  getCookieValue(_0x377d54, _0x4951db) {
    if (!_0x377d54 || !_0x4951db) {
      return "";
    }
    const _0x58f339 = new RegExp(_0x4951db + "=([^;]*)"),
      _0x3a2133 = _0x58f339.exec(_0x377d54.trim().replace(/\s/g, ""));
    return _0x3a2133 && _0x3a2133[1] || "";
  }
  parseCookie(_0x243cda) {
    const _0x1d5b8c = {},
      _0xe73548 = _0x243cda.split(";");
    for (const _0x35d2fa of _0xe73548) {
      const [_0x2bcb7c, _0x23ffba] = _0x35d2fa.trim().split("=");
      _0x1d5b8c[_0x2bcb7c] = _0x23ffba;
    }
    return _0x1d5b8c;
  }
  filterCookieByFields(_0x3d67b0, _0x4fa13f) {
    const _0x49d110 = _0x3d67b0.split(/;\s*/),
      _0x4b52cc = _0x49d110.filter(_0x2aaf74 => {
        const _0x376e40 = _0x2aaf74.split("=")[0];
        return _0x4fa13f.includes(_0x376e40);
      });
    return _0x4b52cc.join("; ");
  }
  getLatestIOSVersion() {
    return this._latestIOSVersion || "";
  }
  formatTime(_0x292540, _0x42c360 = Date.now()) {
    const _0x47775d = new Date(_0x42c360);
    let _0x4918b9 = _0x292540;
    const _0x2535f7 = {
      YYYY: _0x47775d.getFullYear(),
      MM: String(_0x47775d.getMonth() + 1).padStart(2, "0"),
      DD: String(_0x47775d.getDate()).padStart(2, "0"),
      HH: String(_0x47775d.getHours()).padStart(2, "0"),
      mm: String(_0x47775d.getMinutes()).padStart(2, "0"),
      ss: String(_0x47775d.getSeconds()).padStart(2, "0"),
      S: String(_0x47775d.getMilliseconds()).padStart(3, "0")
    };
    Object.keys(_0x2535f7).forEach(_0x3610eb => {
      _0x4918b9 = _0x4918b9.replace(new RegExp(_0x3610eb, "g"), _0x2535f7[_0x3610eb]);
    });
    return _0x4918b9;
  }
  async request(_0x527421) {
    let _0x46d2d6 = {
        success: false,
        status: null,
        data: null,
        headers: null,
        error: null,
        connected: false
      },
      _0x461cc3 = this._requestDebugMode,
      _0x55a057 = null;
    try {
      if (!_0x527421 || !_0x527421.url) {
        console.log("❌ 调用请求方法无效，缺少必要的参数！");
        _0x46d2d6.error = "缺少必要的请求参数";
        return _0x46d2d6;
      }
      _0x527421.hasOwnProperty("debug") && (_0x461cc3 = _0x527421.debug, delete _0x527421.debug);
      const _0x2399cf = this._requestAxiosProxyConfig,
        _0x4c8801 = this._requestDynamicProxyConfig,
        _0x1a84b6 = this._requestNoProxyList;
      _0x527421.body && (_0x527421.data = _0x527421.body, delete _0x527421.body);
      for (const _0x4476f9 of ["data", "params"]) {
        !_0x527421[_0x4476f9] && delete _0x527421[_0x4476f9];
      }
      _0x527421.method = (_0x527421.method || "get").toLowerCase();
      if (_0x527421.proxy && typeof _0x527421.proxy === "string") {
        const _0x22e4aa = this._getProxyConfigWithAddress(_0x527421.proxy);
        _0x22e4aa ? _0x527421.proxy = _0x22e4aa : (console.log("❌ 代理配置无效，跳过使用代理"), delete _0x527421.proxy);
      }
      _0x527421.data && typeof _0x527421.data === "object" && (!_0x527421.headers || !_0x527421.headers["Content-Type"] || _0x527421.headers["Content-Type"].includes("application/x-www-form-urlencoded")) && (_0x527421.data = querystring.stringify(_0x527421.data));
      if (_0x527421.httpsTlsOptions && typeof _0x527421.httpsTlsOptions === "object" && _0x527421.url.includes("https://")) {
        _0x55a057 = _0x527421.httpsTlsOptions;
        Object.assign(https.globalAgent.options, _0x55a057);
        delete _0x527421.httpsTlsOptions;
      } else {
        _0x527421.hasOwnProperty("httpsTlsOptions") && delete _0x527421.httpsTlsOptions;
      }
      let _0x45ed5e = false;
      if (!["proxy", "httpAgent", "httpsAgent"].some(_0x11acb8 => _0x527421.hasOwnProperty(_0x11acb8))) {
        if (_0x2399cf || _0x4c8801) {
          let _0x5f2dfe = true;
          const _0x36caf3 = this.parseUrl(_0x527421.url).hostname || _0x527421.url;
          for (const _0x48350b of _0x1a84b6) {
            const _0x4c474d = new RegExp("^" + _0x48350b.split("*").join(".*") + "$");
            if (_0x4c474d.test(_0x36caf3.hostname)) {
              _0x5f2dfe = false;
              _0x461cc3 && console.log("ℹ️ 该代理请求命中 NO_PROXY 规则 ➜ " + _0x48350b);
              break;
            }
          }
          if (_0x5f2dfe) {
            if (_0x2399cf) {
              _0x527421.proxy = _0x2399cf;
            } else {
              if (_0x4c8801) {
                if (_0x4c8801.proxyConfig) {
                  _0x527421.proxy = _0x4c8801.proxyConfig;
                  _0x45ed5e = true;
                } else {
                  const _0x57cc98 = await this.getProxyAddressWithApi(_0x4c8801.api),
                    _0x37dade = this._getProxyConfigWithAddress(_0x57cc98);
                  if (_0x37dade) {
                    Object.assign(_0x4c8801, {
                      extractTimestamp: Date.now(),
                      usedTimes: 0,
                      proxyConfig: _0x37dade
                    });
                    _0x527421.proxy = _0x37dade;
                    _0x45ed5e = true;
                    this._requestDynamicProxyShowAddress && console.log(this._requestDynamicProxyPrintAddressFormat.replace(/<address>/g, this._getProxyAddressWithConfig(_0x527421.proxy)));
                  } else {
                    if (!_0x4c8801.fetchFailContinue) {
                      _0x46d2d6.error = "获取动态代理地址失败，已设置跳过请求";
                      return _0x46d2d6;
                    }
                  }
                }
              }
            }
          }
        }
      }
      for (const _0x27354e of ["proxy", "httpAgent", "httpsAgent"]) {
        !_0x527421[_0x27354e] && delete _0x527421[_0x27354e];
      }
      _0x527421.proxy && (this._loadModule("HttpsProxyAgent"), _0x527421.httpsAgent = this._genHttpsAgentWithProxyConfig(_0x527421.proxy), delete _0x527421.proxy);
      await axios(_0x527421).then(async _0xe84fd => {
        if (_0x45ed5e) {
          _0x4c8801.lastUseTimeStamp = Date.now();
          _0x4c8801.usedTimes++;
          const _0xbba2 = _0x4c8801.useLimit > 0 && _0x4c8801.usedTimes >= _0x4c8801.useLimit,
            _0x262426 = _0x4c8801.timeLimit > 0 && Date.now() - _0x4c8801.extractTimestamp >= _0x4c8801.timeLimit;
          (_0xbba2 || _0x262426) && Object.assign(_0x4c8801, {
            proxyConfig: null,
            lastUseTimeStamp: null,
            extractTimestamp: null,
            usedTimes: 0
          });
        }
        _0x46d2d6.success = true;
        _0x46d2d6.status = _0xe84fd.status;
        _0x46d2d6.data = _0xe84fd.data;
        _0x46d2d6.headers = _0xe84fd.headers;
        _0x46d2d6.connected = true;
        if (typeof _0x527421.onSuccess === "function") {
          try {
            await _0x527421.onSuccess(_0xe84fd.data, _0xe84fd);
          } catch (_0x49bd76) {
            console.log("❌ 调用 onSuccess 回调时遇到了错误 " + (_0x49bd76.message || _0x49bd76));
          }
        }
        _0x461cc3 && this._handleRequestDebugPrint(_0xe84fd, true);
      }).catch(async _0xa74aed => {
        if (_0x45ed5e) {
          _0x4c8801.lastUseTimeStamp = Date.now();
          _0x4c8801.usedTimes++;
          const _0x11f640 = _0x4c8801.useLimit > 0 && _0x4c8801.usedTimes >= _0x4c8801.useLimit,
            _0x32d549 = _0x4c8801.timeLimit > 0 && Date.now() - _0x4c8801.extractTimestamp >= _0x4c8801.timeLimit;
          (_0x11f640 || _0x32d549) && Object.assign(_0x4c8801, {
            proxyConfig: null,
            lastUseTimeStamp: null,
            extractTimestamp: null,
            usedTimes: 0
          });
        }
        let _0x17f290;
        if (_0xa74aed.response) {
          _0x46d2d6.connected = true;
          const _0x4d1bf1 = _0xa74aed.response?.["status"];
          _0xa74aed.response.data && (_0x46d2d6.data = _0xa74aed.response.data);
          _0xa74aed.response.headers && (_0x46d2d6.headers = _0xa74aed.response.headers);
          _0x17f290 = this._requestFailMessagesMap[_0x4d1bf1] || "请求失败 [Response code " + _0x4d1bf1 + "]";
        } else {
          _0x45ed5e && Object.assign(_0x4c8801, {
            proxyConfig: null,
            lastUseTimeStamp: null,
            extractTimestamp: null,
            usedTimes: 0
          });
          _0xa74aed.request ? _0x17f290 = (this._requestErrorMessagesMap[_0xa74aed.code] ?? "未知网络错误") + " [" + _0xa74aed.code + "]" : _0x17f290 = _0xa74aed.message || "未知错误状态";
        }
        (_0xa74aed.config?.["httpAgent"] || _0xa74aed.config?.["httpsAgent"]) && (_0x17f290 += "（🌐该请求通过代理发出）");
        _0x46d2d6.error = _0x17f290 || null;
        _0x46d2d6.status = _0xa74aed.response?.["status"] || null;
        if (typeof _0x527421.onFailOrError === "function") {
          try {
            await _0x527421.onFailOrError(_0xa74aed, _0x46d2d6.error, _0x46d2d6.connected);
          } catch (_0x22fe17) {
            console.log("❌ 调用 onFailOrError 回调时遇到了错误 " + (_0x22fe17.message || _0x22fe17));
          }
        } else {
          if (typeof _0x527421.onFail === "function" && _0x46d2d6.connected) {
            try {
              await _0x527421.onFail(_0xa74aed, _0x46d2d6.error, _0x46d2d6.status);
            } catch (_0x49ce0b) {
              console.log("❌ 调用 onFail 回调时遇到了错误 " + (_0x49ce0b.message || _0x49ce0b));
            }
          } else {
            if (typeof _0x527421.onError === "function" && !_0x46d2d6.connected) {
              try {
                await _0x527421.onError(_0xa74aed, _0x46d2d6.error);
              } catch (_0x2bf6d2) {
                console.log("❌ 调用 onError 回调时遇到了错误 " + (_0x2bf6d2.message || _0x2bf6d2));
              }
            }
          }
        }
        _0x461cc3 && (this._handleRequestDebugPrint(_0xa74aed, false), console.log("❌ 请求失败原因 ➜ " + _0x46d2d6.error));
      });
      _0x55a057 && Object.keys(_0x55a057).forEach(_0x41705a => {
        https.globalAgent.options[_0x41705a] = null;
      });
    } catch (_0x544cba) {
      _0x46d2d6.error = _0x544cba.message || _0x544cba;
      _0x461cc3 && console.log("❌ 在处理 HTTP 请求时遇到了错误 ➜ " + _0x544cba);
    }
    return _0x46d2d6;
  }
  async get(_0x323226) {
    return await this.request(Object.assign({}, _0x323226, {
      method: "get"
    }));
  }
  async post(_0x4f28d4) {
    return await this.request(Object.assign({}, _0x4f28d4, {
      method: "post"
    }));
  }
  async put(_0x2ceb87) {
    return await this.request(Object.assign({}, _0x2ceb87, {
      method: "put"
    }));
  }
  async delete(_0x1224b5) {
    return await this.request(Object.assign({}, _0x1224b5, {
      method: "delete"
    }));
  }
  _handleRequestDebugPrint(_0x67e8a7, _0x238f76 = true) {
    this._loadModule("TablePrint");
    if (!this._Table) {
      return;
    }
    const _0x2b10c6 = this._Table;
    console.log("--------------------- 🔧 HTTP REQUEST DEBUG 🔧 -------------------------");
    try {
      let _0x1fa3fb,
        _0x26d0b1 = null;
      _0x1fa3fb = new _0x2b10c6({
        columns: [{
          title: "类型",
          name: "type",
          alignment: "left"
        }, {
          title: "说明",
          name: "info",
          alignment: "left"
        }],
        charLength: {
          "🟢": 2,
          "🔴": 2,
          "❌": 2
        }
      });
      _0x1fa3fb.addRow({
        type: "请求结果",
        info: "" + (_0x238f76 ? "🟢" : _0x67e8a7?.["response"] ? "🔴" : "❌") + (_0x67e8a7?.["status"] ? " " + _0x67e8a7.status : _0x67e8a7?.["response"] ? " " + _0x67e8a7.response?.["status"] : "") + " - " + "".concat(_0x67e8a7?.["config"]?.["method"] || "未知").toUpperCase()
      });
      if (_0x67e8a7?.["config"]?.["url"]) {
        try {
          _0x26d0b1 = new URL(_0x67e8a7.config.url);
          _0x1fa3fb.addRow({
            type: "请求地址",
            info: _0x26d0b1.origin
          });
          _0x1fa3fb.addRow({
            type: "请求路径",
            info: _0x26d0b1.pathname
          });
        } catch {
          _0x1fa3fb.addRow({
            type: "请求地址",
            info: _0x67e8a7.config.url
          });
        }
      }
      _0x1fa3fb.printTable();
      if (_0x26d0b1 && _0x26d0b1?.["search"] || _0x67e8a7?.["config"]?.["params"]) {
        try {
          const _0x58995e = Object.assign({}, new URLSearchParams(_0x26d0b1?.["search"]) || {}, _0x67e8a7?.["config"]?.["params"] || {});
          if (Object.keys(_0x58995e).length > 0) {
            _0x1fa3fb = new _0x2b10c6({
              columns: [{
                title: "名称",
                name: "label",
                alignment: "left"
              }, {
                title: "值",
                name: "value",
                alignment: "left"
              }]
            });
            for (let _0x46c2de in _0x58995e) {
              _0x1fa3fb.addRow({
                label: decodeURIComponent(_0x46c2de),
                value: decodeURIComponent(_0x58995e[_0x46c2de])
              });
            }
            console.log("\n✧ 请求参数");
            _0x1fa3fb.printTable();
          }
        } catch {}
      }
      if (_0x67e8a7?.["config"]?.["httpAgent"] || _0x67e8a7?.["config"]?.["httpsAgent"]) {
        const _0x1c3881 = (_0x67e8a7.config?.["httpAgent"] || _0x67e8a7.config?.["httpsAgent"])?.["proxy"],
          _0x4495de = {
            protocol: _0x1c3881.protocol.replace(":", ""),
            hostname: _0x1c3881.hostname,
            port: _0x1c3881.port
          };
        _0x1c3881.port;
        if (_0x1c3881 instanceof URL) {
          (_0x1c3881.username || _0x1c3881.password) && (_0x4495de.username = _0x1c3881.username, _0x4495de.password = _0x1c3881.password);
        } else {
          if (_0x1c3881.auth) {
            const _0x4edca9 = _0x1c3881.auth.split(":");
            _0x4495de.username = _0x4edca9[0];
            _0x4495de.password = _0x4edca9[1];
          }
        }
        _0x1fa3fb = new _0x2b10c6({
          columns: [{
            title: "名称",
            name: "label",
            alignment: "left"
          }, {
            title: "值",
            name: "value",
            alignment: "left"
          }]
        });
        for (let _0x3cbba4 in _0x4495de) {
          let _0x38f6e3 = _0x4495de[_0x3cbba4];
          typeof _0x38f6e3 === "object" && (_0x38f6e3 = JSON.stringify(_0x38f6e3));
          _0x1fa3fb.addRow({
            label: _0x3cbba4,
            value: _0x38f6e3
          });
        }
        console.log("\n✧ HTTP 代理配置");
        _0x1fa3fb.printTable();
      }
      if (_0x67e8a7?.["config"]?.["headers"]) {
        const _0x520740 = _0x67e8a7.config.headers;
        _0x1fa3fb = new _0x2b10c6({
          columns: [{
            title: "名称",
            name: "label",
            alignment: "left"
          }, {
            title: "值",
            name: "value",
            alignment: "left",
            maxLen: 80
          }]
        });
        for (let _0x188d6a in _0x520740) {
          let _0x1b3b71 = _0x520740[_0x188d6a];
          typeof _0x1b3b71 === "object" && (_0x1b3b71 = JSON.stringify(_0x1b3b71));
          _0x1fa3fb.addRow({
            label: _0x188d6a,
            value: _0x1b3b71
          });
        }
        console.log("\n✧ 请求 Headers");
        _0x1fa3fb.printTable();
      }
      if (_0x67e8a7?.["config"]?.["data"]) {
        let _0x37b4cf = _0x67e8a7.config.data;
        if (typeof _0x37b4cf === "object") {
          _0x37b4cf = JSON.stringify(JSON.parse(_0x37b4cf));
        } else {
          if (typeof _0x37b4cf === "string") {
            try {
              const _0x1c5e85 = JSON.parse(_0x37b4cf);
              _0x37b4cf = JSON.stringify(_0x1c5e85);
            } catch {
              _0x37b4cf = JSON.stringify(_0x37b4cf).slice(1, -1);
            }
          }
        }
        console.log("\n✧ 请求 Body\n" + _0x37b4cf);
      }
      if (!_0x238f76 && !_0x67e8a7?.["response"]) {
        console.log("\n------------------------------------------------------------------------");
        return;
      }
      if (_0x67e8a7?.["headers"]) {
        const _0x1bcf04 = _0x67e8a7.headers;
        _0x1fa3fb = new _0x2b10c6({
          columns: [{
            title: "名称",
            name: "label",
            alignment: "left"
          }, {
            title: "值",
            name: "value",
            alignment: "left",
            maxLen: 80
          }]
        });
        for (let _0x1238b9 in _0x1bcf04) {
          let _0x5a0dd8 = _0x1bcf04[_0x1238b9];
          typeof _0x5a0dd8 !== "string" && (_0x5a0dd8 = JSON.stringify(_0x5a0dd8));
          _0x1fa3fb.addRow({
            label: _0x1238b9,
            value: _0x5a0dd8
          });
        }
        console.log("\n✧ 响应 Headers");
        _0x1fa3fb.printTable();
      }
      if (_0x67e8a7?.["data"]) {
        let _0x3e97bb = _0x67e8a7.data;
        if (typeof _0x3e97bb === "object") {
          _0x3e97bb = JSON.stringify(_0x3e97bb);
        } else {
          if (typeof _0x3e97bb === "string") {
            try {
              const _0x1fbfbf = JSON.parse(_0x3e97bb);
              _0x3e97bb = JSON.stringify(_0x1fbfbf);
            } catch {
              _0x3e97bb = JSON.stringify(_0x3e97bb).slice(1, -1);
            }
          }
        }
        console.log("\n✧ 响应 Body\n" + _0x3e97bb);
      }
    } catch (_0x323e07) {
      console.log("❌ 处理 REQUEST DEBUG PRINT 时遇到了错误 ➜ " + (_0x323e07.message || _0x323e07));
    }
    console.log("\n------------------------------------------------------------------------");
  }
  async getProxyAddressWithApi(_0x5c44f6) {
    let _0x266d86 = "";
    try {
      const _0x19aa16 = /\b(?:\d{1,3}\.){3}\d{1,3}:\d{1,5}\b/g,
        _0x14e21a = {
          url: _0x5c44f6,
          method: "post",
          proxy: null,
          timeout: 30000
        };
      let _0x3889e2 = 0,
        _0xce56d0 = null;
      const _0x5a41f7 = 1;
      while (_0x3889e2 < _0x5a41f7) {
        const _0x74d0f6 = await this.request(_0x14e21a);
        if (!_0x74d0f6.success) {
          _0xce56d0 = _0x74d0f6.error;
          _0x3889e2++;
          continue;
        }
        if (!_0x74d0f6.data) {
          _0xce56d0 = "无响应数据";
          _0x3889e2++;
          continue;
        }
        const _0x37a3b5 = _0x74d0f6.data;
        if (typeof _0x37a3b5 === "object") {
          if (_0x37a3b5?.["data"]) {
            let _0x3a38d0 = _0x37a3b5.data;
            if (Array.isArray(_0x3a38d0) && _0x3a38d0.length > 0) {
              _0x3a38d0 = _0x3a38d0[0];
              if (_0x3a38d0?.["ip"] && _0x3a38d0?.["port"]) {
                _0x266d86 = _0x3a38d0.ip + ":" + _0x3a38d0.port;
              } else {
                _0x3a38d0?.["IP"] && _0x3a38d0?.["Port"] && (_0x266d86 = _0x3a38d0.IP + ":" + _0x3a38d0.Port);
              }
            } else {
              if (_0x3a38d0?.["proxy_list"] && Array.isArray(_0x3a38d0.proxy_list) && _0x3a38d0.proxy_list.length > 0) {
                const _0x44be74 = _0x3a38d0.proxy_list[0];
                typeof _0x44be74 === "object" && _0x44be74?.["ip"] && _0x44be74?.["port"] ? _0x266d86 = _0x44be74.ip + ":" + _0x44be74.port : _0x266d86 = _0x44be74;
              }
            }
            _0x266d86 && !_0x19aa16.test(_0x266d86) && (_0x266d86 = "");
          }
          !_0x266d86 && (_0xce56d0 = "接口响应数据异常：" + JSON.stringify(_0x37a3b5));
        } else {
          const _0x187870 = _0x37a3b5.match(_0x19aa16);
          _0x187870 && (_0x266d86 = _0x187870[0]);
          !_0x266d86 && (_0xce56d0 = "接口响应数据异常：" + _0x37a3b5);
        }
        if (_0x266d86) {
          return _0x266d86;
        }
        _0x3889e2++;
      }
      _0x3889e2 >= _0x5a41f7 && console.log("⚠ 提取代理地址失败 ➜ " + _0xce56d0);
    } catch (_0x39a099) {
      console.log("❌ 在处理请求代理API获取代理地址时遇到了错误\n" + _0x39a099);
    }
    return _0x266d86;
  }
  _getProxyConfigWithAddress(_0x2d8ad7 = "") {
    try {
      if (!_0x2d8ad7) {
        return null;
      }
      !_0x2d8ad7.includes("://") && (_0x2d8ad7 = "http://" + _0x2d8ad7);
      const _0x92bcc2 = this.parseUrl(_0x2d8ad7);
      if (_0x92bcc2?.["hostname"]) {
        const _0x3fb9e2 = {
          protocol: _0x92bcc2.protocol.replace(":", "") === "https" ? "https" : "http",
          host: _0x92bcc2.hostname,
          port: parseInt(_0x92bcc2?.["port"] || "8080"),
          auth: {
            username: _0x92bcc2?.["username"] || "",
            password: _0x92bcc2?.["password"] || ""
          }
        };
        _0x92bcc2?.["username"] || _0x92bcc2?.["password"];
        return _0x3fb9e2;
      }
    } catch {}
    return null;
  }
  _getProxyAddressWithConfig(_0x4a3686 = null) {
    try {
      if (!_0x4a3686) {
        return null;
      }
      const _0x3127c2 = Object.assign({}, _0x4a3686);
      let _0x5d2f84 = "";
      _0x3127c2.auth && (_0x5d2f84 = (_0x3127c2.auth?.["username"] || "") + ":" + (_0x3127c2.auth?.["password"] || "") + "@");
      return _0x3127c2.protocol + "://" + _0x5d2f84 + _0x3127c2.host + ":" + _0x3127c2.port;
    } catch {
      return JSON.stringify(_0x4a3686);
    }
  }
  _genHttpsAgentWithProxyConfig(_0x138b6a) {
    try {
      if (!this._HttpsProxyAgent) {
        return null;
      }
      if (!_0x138b6a) {
        return null;
      }
      let _0x51f9d3 = (_0x138b6a?.["protocol"] || "http") + "://";
      _0x138b6a?.["auth"] && (_0x51f9d3 += (_0x138b6a.auth?.["username"] || "") + ":" + (_0x138b6a.auth?.["password"] || "") + "@");
      _0x51f9d3 += _0x138b6a?.["host"] + ":" + (_0x138b6a?.["port"] || "8080");
      return new this._HttpsProxyAgent(_0x51f9d3);
    } catch (_0x36d58a) {
      console.log("❌ 加载代理时遇到了错误 ➜ " + (_0x36d58a.message || _0x36d58a));
    }
    return null;
  }
  async concTaskNormal(_0x28ceba = "3", _0x49babe = 100, _0x2804e2) {
    let _0x225f78 = false,
      _0x5dde89 = 0,
      _0x4c7420 = 0;
    async function _0x175dba(_0x1c8dc5) {
      const _0x529405 = await _0x2804e2(_0x1c8dc5);
      if (_0x529405) {
        if (typeof _0x529405 === "boolean") {
          _0x225f78 = true;
        } else {
          typeof _0x529405 === "object" && _0x529405?.["runEnd"] && (_0x225f78 = true);
        }
      }
      _0x5dde89--;
      _0x84eaf4();
    }
    async function _0x84eaf4() {
      while (_0x5dde89 < _0x28ceba && _0x49babe > 0 && !_0x225f78) {
        _0x49babe--;
        _0x5dde89++;
        _0x4c7420++;
        await _0x175dba(_0x4c7420);
      }
      _0x225f78 && (await new Promise(_0x2689ab => {
        const _0x3a9a3d = setInterval(() => {
          _0x5dde89 === 0 && (clearInterval(_0x3a9a3d), _0x2689ab());
        }, 100);
      }));
    }
    const _0x2a98a8 = Math.min(_0x49babe, _0x28ceba),
      _0x502e08 = [];
    for (let _0x2d2129 = 0; _0x2d2129 < _0x2a98a8; _0x2d2129++) {
      _0x49babe--;
      _0x5dde89++;
      _0x4c7420++;
      _0x502e08.push(_0x175dba(_0x4c7420));
    }
    await Promise.all(_0x502e08);
    _0x84eaf4();
    await new Promise(_0x218b8b => {
      const _0x7f9cf9 = setInterval(() => {
        (_0x5dde89 === 0 || _0x225f78) && (clearInterval(_0x7f9cf9), _0x218b8b());
      }, 100);
    });
  }
  setCookie(_0x5ff21a) {
    this._Cookie = _0x5ff21a;
  }
  unsetCookie() {
    this._Cookie = "";
    this._UserAgent = "";
  }
  getCookie() {
    return this._Cookie;
  }
  getLatestAppVersion() {
    return this._latestAppVersionData.version || "";
  }
  getLatestAppBuildVersion() {
    return this._latestAppVersionData.build || "";
  }
  getLatestLiteAppVersion() {
    return this._latestLiteAppVersionData.version || "";
  }
  getLatestLiteAppBuildVersion() {
    return this._latestLiteAppVersionData.build || "";
  }
  getErrorMsg(_0x89f38e, _0x1a2fda = ["msg", "message", "errMsg", "errMessage", "errorMsg", "errorMessage", "bizMsg", "subMsg", "echo", "error", "resp_msg", "txt", "rlt", "displayMsg", "resultMsg", "desc"], _0x3a5595 = "") {
    if (!_0x89f38e) {
      return _0x3a5595;
    }
    for (let _0x119670 of _0x1a2fda) {
      if (_0x89f38e.hasOwnProperty(_0x119670)) {
        return _0x89f38e[_0x119670];
      }
    }
    return _0x3a5595;
  }
  maskUserName(_0x48bcb6 = "", _0x1cb701 = "*") {
    if (!_0x48bcb6) {
      return "";
    }
    if (_0x48bcb6.length <= 1) {
      return _0x1cb701;
    }
    if (_0x48bcb6.length < 5) {
      return _0x48bcb6.slice(0, 1) + _0x1cb701.repeat(_0x48bcb6.length - 1);
    }
    return _0x48bcb6.slice(0, 2) + _0x1cb701.repeat(_0x48bcb6.length - 4) + _0x48bcb6.slice(-2);
  }
  genUuid(_0x2f0209 = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", _0x5c5e60 = "0123456789abcdef") {
    let _0x3752f9 = "";
    for (let _0x1611f5 of _0x2f0209) {
      if (_0x1611f5 === "x") {
        _0x3752f9 += _0x5c5e60.charAt(Math.floor(Math.random() * _0x5c5e60.length));
      } else {
        _0x1611f5 === "X" ? _0x3752f9 += _0x5c5e60.charAt(Math.floor(Math.random() * _0x5c5e60.length)).toUpperCase() : _0x3752f9 += _0x1611f5;
      }
    }
    return _0x3752f9;
  }
  genUA(_0xe554f0 = "", _0xf3a35 = "jd") {
    if (_0xe554f0 && this._UserAgentMap.has(_0xe554f0)) {
      return this._UserAgentMap.get(_0xe554f0);
    }
    const _0x1df619 = _0xf3a35 === "lite" ? "lite" : _0xf3a35 === "jr" ? "jr" : "jd",
      _0x15ce74 = {
        jd: {
          app: "jdapp",
          appBuild: this._latestAppVersionData.build,
          clientVersion: this._latestAppVersionData.version
        },
        lite: {
          app: "jdltapp",
          appBuild: this._latestLiteAppVersionData.build,
          clientVersion: this._latestLiteAppVersionData.version
        },
        jr: {
          clientVersion: this._latestJDJRAppVersionData.version,
          jdPaySdkVersion: this._latestJDJRAppVersionData.jdPaySdkVersion,
          stockSDK: this._latestJDJRAppVersionData.stockSDK
        }
      },
      _0x23daee = [this._latestIOSVersion].map(_0x105839 => {
        let _0x2a5408 = _0x105839.split(".");
        return _0x2a5408.join(".");
      }),
      _0x9156f5 = _0x23daee[Math.floor(Math.random() * _0x23daee.length)],
      _0x13a12e = "iPhone; CPU iPhone OS " + _0x9156f5.replace(".", "_") + " like Mac OS X",
      {
        clientVersion: _0xe52407
      } = _0x15ce74[_0x1df619];
    let _0xcb2b93, _0x2b3802;
    switch (_0x1df619) {
      case "jr":
        const {
          stockSDK: _0x378ac6,
          jdPaySdkVersion: _0x2fda29
        } = _0x15ce74[_0x1df619];
        _0xcb2b93 = ["Mozilla/5.0 (" + _0x13a12e + ") AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148/application=JDJR-App", "clientType=ios", "iosType=iphone", "clientVersion=" + _0xe52407, "HiClVersion=" + _0xe52407, "isUpdate=0", "osVersion=" + _0x9156f5, "osName=iOS", "screen=932*430", "src=App Store", "netWork=1", "netWorkType=1", "CpayJS=UnionPay/1.0 JDJR", "stockSDK=" + _0x378ac6, "sPoint=", "jdPay=(*#@jdPaySDK*#@jdPayChannel=jdfinance", "jdPayChannelVersion=" + _0xe52407, "jdPaySdkVersion=" + _0x2fda29, "jdPayClientName=iOS*#@jdPaySDK*#@)"];
        _0x2b3802 = "&";
        break;
      case "jd":
      case "lite":
      default:
        const {
            app: _0x14ec3e,
            appBuild: _0x488899
          } = _0x15ce74[_0x1df619],
          _0x1a66f4 = !!_0xe554f0 ? JSON.stringify(this.getCipherConf({
            ud: CryptoJS.SHA1(_0xe554f0).toString(),
            sv: _0x9156f5,
            iad: ""
          }, _0x1df619)) : "";
        _0xcb2b93 = [_0x14ec3e, "iPhone", _0xe52407, "", "rn/" + this.genUuid(), "M/5.0", "appBuild/" + _0x488899, "jdSupportDarkMode/0", "ef/1", _0x1a66f4 ? "ep/" + encodeURIComponent(_0x1a66f4) : "", "Mozilla/5.0 (" + _0x13a12e + ") AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "supportJDSHWK/1", ""];
        _0x2b3802 = ";";
        break;
    }
    const _0x2a6763 = _0xcb2b93.join(_0x2b3802);
    _0xe554f0 && this._UserAgentMap.set(_0xe554f0, _0x2a6763);
    if (this._Cookie) {
      this._UserAgent = _0x2a6763;
    }
    return _0x2a6763;
  }
  genUAWithJDJR() {
    return this.genUA("", "jr");
  }
  getJEH(_0x47d98b = "") {
    !_0x47d98b && (_0x47d98b = "JD4iPhone/" + this.getLatestAppBuildVersion() + " (iPhone; iOS " + this.getLatestIOSVersion() + "; Scale/3.00)");
    return encodeURIComponent(JSON.stringify(this.getCipherConf({
      "User-Agent": encodeURIComponent(_0x47d98b)
    })));
  }
  getJEC(_0x34325b) {
    return encodeURIComponent(JSON.stringify(this.getCipherConf({
      pin: encodeURIComponent(_0x34325b)
    })));
  }
  getCipherConf(_0x384765, _0x6c706 = "jd") {
    if (_0x384765 && typeof _0x384765 === "object") {
      for (let _0x157c87 in _0x384765) {
        _0x384765[_0x157c87] = this.Base64.encode(_0x384765[_0x157c87]);
      }
    } else {
      _0x384765 && typeof _0x384765 === "string" ? _0x384765 = this.Base64.encode(_0x384765) : _0x384765 = {};
    }
    return {
      ciphertype: 5,
      cipher: _0x384765,
      ts: Math.floor(Date.now() / 1000),
      hdid: "JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw=",
      version: "1.0.3",
      appname: _0x6c706 === "lite" ? "com.jd.jdmobilelite" : "com.360buy.jdmobile",
      ridx: -1
    };
  }
  async getLoginStatus(_0x54222e = this._Cookie) {
    if (!_0x54222e) {
      console.log("🚫 getLoginStatus 请求失败 ➜ 未设置Cookie");
      return undefined;
    }
    try {
      const _0x43e30b = {
        url: "https://plogin.m.jd.com/cgi-bin/ml/islogin",
        method: "GET",
        headers: {
          Accept: "*/*",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "zh-CN,zh-Hans;q=0.9",
          Cookie: _0x54222e,
          Host: "plogin.m.jd.com",
          "User-Agent": this._UserAgent || this._defaultUserAgent
        },
        timeout: 30000,
        debug: false
      };
      let _0x38f2b2 = 0,
        _0x1381c8 = null;
      const _0x1df3f5 = 1;
      while (_0x38f2b2 < _0x1df3f5) {
        const _0x43d941 = await this.request(_0x43e30b);
        if (!_0x43d941.success) {
          _0x1381c8 = "🚫 getLoginStatus 请求失败 ➜ " + _0x43d941.error;
          _0x38f2b2++;
          continue;
        }
        if (!_0x43d941.data) {
          _0x1381c8 = "🚫 getLoginStatus 请求异常 ➜ 无响应数据";
          _0x38f2b2++;
          continue;
        }
        const _0x357ee1 = _0x43d941.data?.["islogin"];
        if (_0x357ee1 === "1") {
          return true;
        } else {
          if (_0x357ee1 === "0") {
            return false;
          }
        }
        _0x38f2b2++;
      }
      _0x38f2b2 >= _0x1df3f5 && console.log(_0x1381c8);
    } catch (_0x424d3d) {
      console.log("❌ getLoginStatus 在处理请求中遇到了错误\n" + _0x424d3d);
    }
    return undefined;
  }
  async joinShopMember(_0x1554d0, _0x5924b4 = this._Cookie, _0x44ab6e = "") {
    if (!_0x5924b4) {
      console.log("🚫 joinShopMember 请求失败 ➜ 未设置Cookie");
      return undefined;
    }
    if (!_0x1554d0) {
      return undefined;
    }
    try {
      this._loadModule("h5st");
      if (!this._H5st) {
        return undefined;
      }
      _0x1554d0 = "".concat(_0x1554d0);
      const _0x5e6b95 = {
        venderId: _0x1554d0,
        bindByVerifyCodeFlag: 1,
        registerExtend: {},
        writeChildFlag: 0,
        channel: 406,
        appid: "27004",
        needSecurity: true,
        bizId: "shopmember_m_jd_com"
      };
      !_0x44ab6e && this._shopMemberActivityIds.has(_0x1554d0) && (_0x44ab6e = this._shopMemberActivityIds.get(_0x1554d0));
      _0x44ab6e && (_0x5e6b95.activityId = _0x44ab6e);
      const _0x201081 = {
          appId: "27004",
          appid: "shopmember_m_jd_com",
          functionId: "bindWithVender",
          clientVersion: "9.2.0",
          client: "H5",
          body: _0x5e6b95,
          version: "4.7",
          t: true,
          ua: this._UserAgent || this._defaultUserAgent
        },
        _0x1c13b9 = await this._H5st.getH5st(_0x201081);
      if (!_0x1c13b9.paramsData) {
        return undefined;
      }
      const _0x3da3f6 = {
          url: "https://api.m.jd.com/client.action",
          method: "POST",
          headers: {
            Accept: "*/*",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "zh-CN,zh-Hans;q=0.9",
            Origin: "https://pages.jd.com",
            Referer: "https://pages.jd.com/",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent": this._UserAgent || this._defaultUserAgent,
            Cookie: _0x5924b4
          },
          data: Object.assign({}, _0x1c13b9.paramsData, {
            area: "",
            screen: "1290*2796",
            uuid: "88888"
          }),
          timeout: 30000
        },
        _0x176a11 = await this.request(_0x3da3f6);
      if (!_0x176a11.success) {
        console.log("🚫 joinShopMember 请求失败 ➜ " + _0x176a11.error);
        return undefined;
      }
      if (!_0x176a11.data) {
        console.log("🚫 joinShopMember 请求异常 ➜ 无响应数据");
        return undefined;
      }
      const _0x55eabb = _0x176a11.data;
      if (_0x55eabb?.["success"] === true) {
        if (_0x55eabb?.["result"] && _0x55eabb.result?.["giftInfo"]) {
          for (let _0x27ab1a of _0x55eabb.result?.["giftInfo"]?.["giftList"]) {
            console.log(" >> 入会获得：" + _0x27ab1a.discountString + _0x27ab1a.prizeName);
          }
        }
        if (_0x55eabb?.["message"] === "加入店铺会员成功") {
          return true;
        } else {
          if (_0x55eabb?.["message"] === "活动太火爆，请稍后再试") {
            console.log("🚫 加入店铺会员失败 ➜ " + _0x55eabb.message);
          } else {
            console.log("🚫 加入店铺会员失败 ➜ " + _0x55eabb?.["message"]);
            return false;
          }
        }
      } else {
        if (_0x55eabb?.["message"]) {
          console.log("🚫 加入店铺会员失败 ➜ " + _0x55eabb.message);
          return false;
        } else {
          console.log("🚫 加入店铺会员失败 ➜ " + JSON.stringify(_0x55eabb));
        }
      }
    } catch (_0x49e085) {
      console.log("❌ joinShopMember 在处理请求中遇到了错误\n" + _0x49e085);
    }
    return undefined;
  }
  async getShopMemberStatus(_0x30a25b, _0x2e3155 = this._Cookie) {
    if (!_0x2e3155) {
      console.log("🚫 getShopMemberStatus 请求失败 ➜ 未设置Cookie");
      return undefined;
    }
    if (!_0x30a25b) {
      return undefined;
    }
    try {
      this._loadModule("h5st");
      if (!this._H5st) {
        return undefined;
      }
      _0x30a25b = "".concat(_0x30a25b);
      const _0x339334 = {
          appId: "27004",
          appid: "shopmember_m_jd_com",
          functionId: "getShopOpenCardInfo",
          clientVersion: "9.2.0",
          client: "H5",
          body: {
            venderId: _0x30a25b,
            payUpShop: true,
            queryVersion: "10.5.2",
            appid: "27004",
            needSecurity: true,
            bizId: "shopmember_m_jd_com",
            channel: 406
          },
          version: "4.7",
          t: true,
          ua: this._UserAgent || this._defaultUserAgent
        },
        _0x1773ef = await this._H5st.getH5st(_0x339334);
      if (!_0x1773ef.paramsData) {
        return undefined;
      }
      const _0x1a6744 = {
          url: "https://api.m.jd.com/client.action",
          method: "POST",
          headers: {
            Accept: "*/*",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "zh-CN,zh-Hans;q=0.9",
            Origin: "https://pages.jd.com",
            Referer: "https://pages.jd.com/",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent": this._UserAgent || this._defaultUserAgent,
            Cookie: _0x2e3155
          },
          data: Object.assign({}, _0x1773ef.paramsData, {
            area: "",
            screen: "1290*2796",
            uuid: "88888"
          }),
          timeout: 30000
        },
        _0x2a7867 = await this.request(_0x1a6744);
      if (!_0x2a7867.success) {
        console.log("🚫 getShopMemberStatus 请求失败 ➜ " + _0x2a7867.error);
        return undefined;
      }
      if (!_0x2a7867.data) {
        console.log("🚫 getShopMemberStatus 请求异常 ➜ 无响应数据");
        return undefined;
      }
      const _0x3cf3ee = _0x2a7867.data;
      if (_0x3cf3ee?.["success"] === true) {
        let _0x1bd681 = _0x3cf3ee.result;
        Array.isArray(_0x1bd681) && (_0x1bd681 = _0x1bd681[0]);
        const _0x34e5f9 = _0x1bd681?.["interestsRuleList"]?.[0]?.["interestsInfo"]?.["activityId"];
        _0x34e5f9 && this._shopMemberActivityIds.set(_0x30a25b, _0x34e5f9);
        return _0x1bd681?.["userInfo"]?.["openCardStatus"] === 1;
      } else {
        _0x3cf3ee?.["message"] ? console.log("🚫 获取店铺会员状态异常 ➜ " + _0x3cf3ee.message) : console.log("🚫 获取店铺会员状态异常 ➜ " + JSON.stringify(_0x3cf3ee));
      }
    } catch (_0x24b174) {
      console.log("❌ getShopMemberStatus 在处理请求中遇到了错误\n" + _0x24b174);
    }
    return undefined;
  }
  async randomSign(_0xc72cfb, _0x4a0cf0, _0x131969, _0x1d503a = this._Cookie) {
    const _0x5c41dd = await this.request({
        url: _0x131969,
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          fn: _0xc72cfb,
          body: _0x4a0cf0
        }),
        timeout: 30000
      }),
      _0x188b84 = _0x5c41dd.data;
    if (_0x188b84 && _0x188b84.body) {
      return _0x188b84.body;
    }
  }
  async getShopDetail(_0x56665b = {
    venderId: "",
    shopId: ""
  }, _0x109c5f = this._Cookie) {
    const {
      venderId: _0x2c6431,
      shopId: _0x563141
    } = _0x56665b;
    if (!_0x2c6431 && !_0x563141) {
      return {};
    }
    try {
      const _0x245e40 = {
          url: "https://api.m.jd.com/client.action",
          method: "POST",
          headers: {
            Accept: "*/*",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7,en-GB;q=0.6",
            "Content-Type": "application/x-www-form-urlencoded",
            Origin: "https://shop.m.jd.com",
            Referer: "https://shop.m.jd.com/",
            Host: "api.m.jd.com",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "same-site",
            "User-Agent": this._defaultUserAgent,
            "X-Referer-Page": "https://shop.m.jd.com/shop/introduce",
            "X-Rp-Client": "h5_1.0.0",
            Cookie: _0x109c5f || ""
          },
          data: {
            functionId: "whx_getMShopDetail",
            body: JSON.stringify({
              shopId: "".concat(_0x563141 || ""),
              venderId: "".concat(_0x2c6431 || ""),
              source: "m-shop"
            }),
            t: Date.now().toString(),
            appid: "shop_m_jd_com",
            clientVersion: "11.0.0",
            client: "wh5",
            area: "",
            uuid: ""
          },
          timeout: 30000
        },
        _0xd2d664 = await this.request(_0x245e40);
      if (!_0xd2d664.success) {
        console.log("🚫 getShopDetail 请求失败 ➜ " + _0xd2d664.error);
        return {};
      }
      if (!_0xd2d664.data) {
        console.log("🚫 getShopDetail 请求异常 ➜ 无响应数据");
        return {};
      }
      const _0x158009 = _0xd2d664.data;
      if (_0x158009.code === "200" && _0x158009.success === true && _0x158009.data) {
        return _0x158009?.["data"] || {};
      }
    } catch (_0x4e6597) {
      console.log("❌ getShopDetail 在处理请求中遇到了错误\n" + _0x4e6597);
    }
    return {};
  }
  async getShopId(_0x47e7bf, _0x2cd0ed = this._Cookie) {
    if (!_0x47e7bf) {
      return null;
    }
    try {
      const _0x4159b3 = await this.getShopDetail({
        venderId: _0x47e7bf
      }, _0x2cd0ed);
      return _0x4159b3?.["shopBaseInfo"]?.["shopId"] || null;
    } catch (_0x342051) {
      console.log("❌ getShopId 在处理请求中遇到了错误\n" + _0x342051);
    }
    return null;
  }
  async getVenderId(_0x5854a3, _0x313e2a = this._Cookie) {
    if (!_0x5854a3) {
      return null;
    }
    try {
      const _0x840dc0 = await this.getShopDetail({
        shopId: _0x5854a3
      }, _0x313e2a);
      return _0x840dc0?.["shopBaseInfo"]?.["venderId"] || null;
    } catch (_0x265861) {
      console.log("❌ getVenderId 在处理请求中遇到了错误\n" + _0x265861);
    }
    return null;
  }
  async getShopName(_0x3c4739 = {
    venderId: "",
    shopId: ""
  }, _0x42cb5a = this._Cookie) {
    const {
      venderId: _0x1c8896,
      shopId: _0x3ff63c
    } = _0x3c4739;
    if (!_0x1c8896 && !_0x3ff63c) {
      return null;
    }
    try {
      const _0xd3cb9 = await this.getShopDetail(_0x3c4739, _0x42cb5a);
      return _0xd3cb9?.["shopBaseInfo"]?.["shopName"] || null;
    } catch (_0x5dad5d) {
      console.log("❌ getShopName 在处理请求中遇到了错误\n" + _0x5dad5d);
    }
    return null;
  }
  async followShop(_0x383cda, _0x1aea87, _0xaca812 = this._Cookie) {
    if (!_0xaca812) {
      console.log("🚫 followShop 请求失败 ➜ 未设置Cookie");
      return undefined;
    }
    if (!_0x383cda && typeof _0x383cda !== "boolean" || !_0x1aea87) {
      return undefined;
    }
    try {
      const _0x26eadc = {
          url: "https://api.m.jd.com/client.action",
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Accept-Encoding": "gzip, deflate, br",
            "Content-Type": "application/x-www-form-urlencoded",
            Origin: "https://shop.m.jd.com",
            Referer: "https://shop.m.jd.com/",
            Connection: "keep-alive",
            "Accept-Language": "zh-cn",
            Cookie: _0xaca812,
            "User-Agent": this._defaultUserAgent
          },
          data: {
            functionId: "whx_followShop",
            body: JSON.stringify({
              shopId: _0x1aea87,
              follow: _0x383cda
            }),
            t: Date.now(),
            appid: "shop_m_jd_com",
            clientVersion: "11.0.0",
            client: "wh5"
          },
          timeout: 30000
        },
        _0x2db387 = await this.request(_0x26eadc);
      if (!_0x2db387.success) {
        console.log("🚫 followShop 请求失败 ➜ " + _0x2db387.error);
        return undefined;
      }
      if (!_0x2db387.data) {
        console.log("🚫 followShop 请求异常 ➜ 无响应数据");
        return undefined;
      }
      const _0x364881 = _0x2db387.data;
      if (_0x364881?.["code"] === "0") {
        return _0x364881?.["result"]?.["code"] === "0";
      } else {
        if (_0x364881?.["msg"]) {
          return false;
        } else {
          console.log("🚫 " + (_0x383cda ? "关注" : "取关") + "店铺异常 ➜ " + JSON.stringify(_0x364881));
        }
      }
    } catch (_0x2fa726) {
      console.log("❌ followShop 在处理请求中遇到了错误\n" + _0x2fa726);
    }
    return undefined;
  }
  useAppTls(_0x34eafd = {}) {
    return Object.assign({}, this._appHttpsTlsOptions, _0x34eafd);
  }
  async concTask(_0x11f1c5 = "3", _0x2a6041, _0xa64d57) {
    const _0xa9d926 = _0x2a6041.slice();
    let _0x2ce98b = false,
      _0x1bb198 = 0,
      _0x3230eb = 0;
    async function _0xe0ce50(_0x9cc85c, _0x2d60b6) {
      const _0x4a444d = await _0xa64d57(_0x9cc85c, _0x2d60b6);
      if (_0x4a444d) {
        if (typeof _0x4a444d === "boolean") {
          _0x2ce98b = true;
        } else {
          typeof _0x4a444d === "object" && _0x4a444d?.["runEnd"] && (_0x2ce98b = true);
        }
      }
      _0x1bb198--;
      _0x2dceda();
    }
    async function _0x2dceda() {
      while (_0x1bb198 < _0x11f1c5 && _0xa9d926.length > 0 && !_0x2ce98b) {
        const _0x3c88a9 = _0xa9d926.shift();
        _0x1bb198++;
        _0x3230eb++;
        await _0xe0ce50(_0x3c88a9, _0x3230eb);
      }
      _0x2ce98b && (await new Promise(_0x4c0e19 => {
        const _0x1d1496 = setInterval(() => {
          _0x1bb198 === 0 && (clearInterval(_0x1d1496), _0x4c0e19());
        }, 100);
      }));
    }
    const _0x504eb5 = Math.min(_0xa9d926.length, _0x11f1c5),
      _0x1b17aa = [];
    for (let _0x5dfc08 = 0; _0x5dfc08 < _0x504eb5; _0x5dfc08++) {
      const _0x3738f8 = _0xa9d926.shift();
      _0x1bb198++;
      _0x3230eb++;
      _0x1b17aa.push(_0xe0ce50(_0x3738f8, _0x3230eb));
    }
    await Promise.all(_0x1b17aa);
    _0x2dceda();
    await new Promise(_0x32813f => {
      const _0x342330 = setInterval(() => {
        (_0x1bb198 === 0 || _0x2ce98b) && (clearInterval(_0x342330), _0x32813f());
      }, 100);
    });
  }
  async getSign(_0x576036, _0x46a13e) {
    !this._hasInitAppSignConfig && (this._initAppSignConfig(), this._hasInitAppSignConfig = true);
    let _0xa8689e = "";
    try {
      const _0x504375 = this._appSignConfig;
      if (_0x504375.genSign) {
        try {
          _0xa8689e = _0x504375.genSign(_0x576036, _0x46a13e);
        } catch (_0x41f2c0) {
          console.log("🚫 getSign 获取本地签名遇到了错误 ➜ " + (_0x41f2c0.message || _0x41f2c0));
        }
        if (_0xa8689e) {
          return _0xa8689e;
        } else {
          console.log("🚫 getSign 本地签名获取失败");
        }
      }
      let _0x44fd7e = {
        [_0x504375.functionIdField]: _0x576036,
        [_0x504375.bodyField]: _0x46a13e
      };
      const _0x562960 = {
        url: _0x504375.requestApi,
        method: _0x504375.requestMethod.toLowerCase(),
        headers: {
          "Content-Type": _0x504375.requestContentType
        },
        data: null,
        timeout: 60000,
        proxy: null,
        debug: false
      };
      _0x504375.requestMethod === "GET" ? (_0x504375.requestApi += "?" + this.objectToQueryString(_0x44fd7e), delete _0x562960.data, delete _0x562960.headers["Content-Type"]) : _0x504375.requestContentType.indexOf("application/x-www-form-urlencoded") !== -1 ? (typeof _0x44fd7e[_0x504375.bodyField] === "object" && (_0x44fd7e[_0x504375.bodyField] = JSON.stringify(_0x44fd7e[_0x504375.bodyField])), _0x562960.data = this.objectToQueryString(_0x44fd7e)) : _0x562960.data = JSON.stringify(_0x44fd7e);
      const _0x1036e9 = await this.request(_0x562960);
      if (!_0x1036e9.success) {
        console.log("🚫 getSign 请求失败 ➜ " + _0x1036e9.error);
        return _0xa8689e;
      }
      if (!_0x1036e9.data) {
        console.log("🚫 getSign 请求异常 ➜ 无响应数据");
        return _0xa8689e;
      }
      let _0x46b1e7 = _0x1036e9.data;
      if (typeof _0x1036e9.data === "object") {
        _0x46b1e7.data && (_0x46b1e7 = _0x46b1e7.data);
        for (const _0xc8454e of ["body", "convertUrl", "convertUrlNew"]) {
          if (_0x46b1e7?.[_0xc8454e] && this._checkSignStrFormat(_0x46b1e7[_0xc8454e])) {
            _0xa8689e = _0x46b1e7[_0xc8454e];
            break;
          }
        }
        !_0xa8689e && console.log("🚫 getSign 响应数据解析异常 ➜ " + JSON.stringify(_0x46b1e7));
      } else {
        this._checkSignStrFormat(_0x46b1e7) ? _0xa8689e = _0x46b1e7 : console.log("🚫 getSign 响应数据解析异常 ➜ " + _0x46b1e7);
      }
    } catch (_0x1cbd57) {
      console.log("🚫 getSign 在处理请求中遇到了错误\n" + _0x1cbd57);
    }
    return _0xa8689e;
  }
  _checkSignStrFormat(_0x2faa22) {
    const _0x578675 = ["body=", "st=", "sign=", "sv="];
    for (let _0x46f088 = 0; _0x46f088 < _0x578675.length; _0x46f088++) {
      if (!_0x2faa22.includes(_0x578675[_0x46f088])) {
        return false;
      }
    }
    return true;
  }
  _loadModule(_0x113e9b) {
    switch (_0x113e9b) {
      case "h5st":
        if (!this._H5st) {
          try {
            const {
              H5st: _0x319115
            } = require(this._jdCryptoModelPath);
            this._H5st = _0x319115;
          } catch (_0x5906f9) {
            console.log("❌ h5st 组件加载失败");
          }
        }
        break;
      case "TablePrint":
        if (!this._Table) {
          try {
            const {
              Table: _0x53e325
            } = require("console-table-printer");
            this._Table = _0x53e325;
          } catch (_0x154728) {
            console.log("❌ console-table-printer 表格打印模块加载失败 " + (_0x154728.message || _0x154728));
          }
        }
        break;
      case "HttpsProxyAgent":
        if (!this._HttpsProxyAgent) {
          try {
            const {
              HttpsProxyAgent: _0x55e5c1
            } = require("https-proxy-agent");
            this._HttpsProxyAgent = _0x55e5c1;
          } catch (_0x51d9d1) {
            try {
              this._HttpsProxyAgent = require("https-proxy-agent");
            } catch (_0x34c4a1) {
              console.log("❌ https-proxy-agent 代理模块加载失败 " + (_0x34c4a1.message || _0x34c4a1));
            }
          }
        }
        break;
      default:
        break;
    }
  }
}
class Base64Algorithm {
  static _utf8Encode(_0x450481) {
    _0x450481 = _0x450481.replace(/rn/g, "n");
    let _0x15b80e = "",
      _0x12b4b5;
    for (let _0x390f53 = 0; _0x390f53 < _0x450481.length; _0x390f53++) {
      _0x12b4b5 = _0x450481.charCodeAt(_0x390f53);
      if (_0x12b4b5 < 128) {
        _0x15b80e += String.fromCharCode(_0x12b4b5);
      } else {
        _0x12b4b5 > 127 && _0x12b4b5 < 2048 ? (_0x15b80e += String.fromCharCode(_0x12b4b5 >> 6 | 192), _0x15b80e += String.fromCharCode(_0x12b4b5 & 63 | 128)) : (_0x15b80e += String.fromCharCode(_0x12b4b5 >> 12 | 224), _0x15b80e += String.fromCharCode(_0x12b4b5 >> 6 & 63 | 128), _0x15b80e += String.fromCharCode(_0x12b4b5 & 63 | 128));
      }
    }
    return _0x15b80e;
  }
  static _utf8Decode(_0x44368c) {
    let _0x2bcbf2 = "",
      _0x259835,
      _0x5492fc,
      _0x595e3,
      _0x5a9dd8 = 0;
    while (_0x5a9dd8 < _0x44368c.length) {
      _0x259835 = _0x44368c.charCodeAt(_0x5a9dd8);
      if (_0x259835 < 128) {
        _0x2bcbf2 += String.fromCharCode(_0x259835);
        _0x5a9dd8++;
      } else {
        _0x259835 > 191 && _0x259835 < 224 ? (_0x5492fc = _0x44368c.charCodeAt(_0x5a9dd8 + 1), _0x2bcbf2 += String.fromCharCode((_0x259835 & 31) << 6 | _0x5492fc & 63), _0x5a9dd8 += 2) : (_0x5492fc = _0x44368c.charCodeAt(_0x5a9dd8 + 1), _0x595e3 = _0x44368c.charCodeAt(_0x5a9dd8 + 2), _0x2bcbf2 += String.fromCharCode((_0x259835 & 15) << 12 | (_0x5492fc & 63) << 6 | _0x595e3 & 63), _0x5a9dd8 += 3);
      }
    }
    return _0x2bcbf2;
  }
  static encode(_0x3b5f45, _0x1a9a3a = "KLMNOPQRSTABCDEFGHIJUVWXYZabcdopqrstuvwxefghijklmnyz0123456789+/") {
    let _0x2c02be = "",
      _0x40a48c,
      _0x459e4a,
      _0x3a521b,
      _0x15edd3,
      _0x4cbc77,
      _0x163f77,
      _0x1ccfd8,
      _0x569af9 = 0;
    _0x3b5f45 = this._utf8Encode(_0x3b5f45);
    while (_0x569af9 < _0x3b5f45.length) {
      _0x40a48c = _0x3b5f45.charCodeAt(_0x569af9++);
      _0x459e4a = _0x3b5f45.charCodeAt(_0x569af9++);
      _0x3a521b = _0x3b5f45.charCodeAt(_0x569af9++);
      _0x15edd3 = _0x40a48c >> 2;
      _0x4cbc77 = (_0x40a48c & 3) << 4 | _0x459e4a >> 4;
      _0x163f77 = (_0x459e4a & 15) << 2 | _0x3a521b >> 6;
      _0x1ccfd8 = _0x3a521b & 63;
      if (isNaN(_0x459e4a)) {
        _0x163f77 = _0x1ccfd8 = 64;
      } else {
        isNaN(_0x3a521b) && (_0x1ccfd8 = 64);
      }
      _0x2c02be = _0x2c02be + _0x1a9a3a.charAt(_0x15edd3) + _0x1a9a3a.charAt(_0x4cbc77) + _0x1a9a3a.charAt(_0x163f77) + _0x1a9a3a.charAt(_0x1ccfd8);
    }
    while (_0x2c02be.length % 4 > 1) {
      _0x2c02be += "=";
    }
    return _0x2c02be;
  }
  static decode(_0x3878cd, _0x5b28b6 = "KLMNOPQRSTABCDEFGHIJUVWXYZabcdopqrstuvwxefghijklmnyz0123456789+/") {
    let _0x31e4fa = "",
      _0x449ed4,
      _0x4d06dd,
      _0x12434d,
      _0x4c15fe,
      _0x4cd55c,
      _0x56179c,
      _0x25bcfa,
      _0x5759a9 = 0;
    while (_0x5759a9 < _0x3878cd.length) {
      _0x4c15fe = _0x5b28b6.indexOf(_0x3878cd.charAt(_0x5759a9++));
      _0x4cd55c = _0x5b28b6.indexOf(_0x3878cd.charAt(_0x5759a9++));
      _0x56179c = _0x5b28b6.indexOf(_0x3878cd.charAt(_0x5759a9++));
      _0x25bcfa = _0x5b28b6.indexOf(_0x3878cd.charAt(_0x5759a9++));
      _0x449ed4 = _0x4c15fe << 2 | _0x4cd55c >> 4;
      _0x4d06dd = (_0x4cd55c & 15) << 4 | _0x56179c >> 2;
      _0x12434d = (_0x56179c & 3) << 6 | _0x25bcfa;
      _0x31e4fa += String.fromCharCode(_0x449ed4);
      if (_0x56179c !== 64) {
        _0x31e4fa += String.fromCharCode(_0x4d06dd);
      }
      if (_0x25bcfa !== 64) {
        _0x31e4fa += String.fromCharCode(_0x12434d);
      }
    }
    _0x31e4fa = this._utf8Decode(_0x31e4fa);
    return _0x31e4fa;
  }
}
class LocalStorageCache {
  constructor(_0x116ee1 = null, _0xaedb7 = 0, _0x347a8e = null) {
    this.saveFile = _0x116ee1;
    this.defaultTTL = _0xaedb7;
    this.reloadInterval = _0x347a8e;
    this.lastLoad = 0;
    this.data = new Map();
    this.pendingWrites = false;
    this.load();
  }
  load() {
    if (this.saveFile && fs.existsSync(this.saveFile)) {
      try {
        const _0x33a97d = fs.readFileSync(this.saveFile, "utf8"),
          _0x4606d6 = JSON.parse(_0x33a97d);
        this.data = new Map(Object.entries(_0x4606d6));
      } catch (_0x127cf2) {}
    }
    this.lastLoad = this.now();
  }
  save() {
    if (this.saveFile && !this.pendingWrites) {
      this.pendingWrites = true;
      try {
        const _0x5f5b97 = JSON.stringify(Object.fromEntries(this.data));
        fs.writeFileSync(this.saveFile, _0x5f5b97, "utf8");
      } catch {}
      this.pendingWrites = false;
    }
  }
  clear() {
    this.data.clear();
  }
  _checkAndReload(_0x159b40 = this.now()) {
    if (!this.reloadInterval || !this.saveFile) {
      return;
    }
    _0x159b40 - this.lastLoad > this.reloadInterval && this.load();
  }
  now() {
    return Date.now();
  }
  put(_0x1d5525, _0x5f095b = null, _0xe5577e = 0, _0xd75203) {
    this._checkAndReload();
    _0xe5577e = _0xe5577e === 0 ? this.defaultTTL : _0xe5577e;
    const _0x90e5cb = _0xe5577e === 0 ? 0 : this.now() + _0xe5577e;
    let _0xc06f4a = null;
    this.data.has(_0x1d5525) && (_0xc06f4a = this.data.get(_0x1d5525).val);
    _0x5f095b !== null ? this.data.set(_0x1d5525, {
      expires: _0x90e5cb,
      val: _0x5f095b
    }) : this.data.delete(_0x1d5525);
    this.save();
    if (_0xd75203 && _0xc06f4a) {
      _0xd75203(_0xc06f4a);
    }
    return _0xc06f4a;
  }
  get(_0x441410, _0x35465b) {
    this._checkAndReload();
    let _0x39754b = null;
    if (this.data.has(_0x441410)) {
      const _0x1bf69f = this.data.get(_0x441410);
      _0x1bf69f.expires === 0 || this.now() < _0x1bf69f.expires ? _0x39754b = _0x1bf69f.val : (_0x39754b = null, this.nuke(_0x441410));
    }
    if (_0x35465b) {
      _0x35465b(_0x39754b);
    }
    return _0x39754b;
  }
  del(_0x56d0aa, _0x396eea) {
    this._checkAndReload();
    let _0x16df95 = null;
    this.data.has(_0x56d0aa) && (_0x16df95 = this.data.get(_0x56d0aa).val, this.data.delete(_0x56d0aa), this.save());
    if (_0x396eea) {
      _0x396eea(_0x16df95);
    }
    return _0x16df95;
  }
  nuke(_0x5ba827) {
    this._checkAndReload();
    this.data.has(_0x5ba827) && (this.data.delete(_0x5ba827), this.save());
  }
}
module.exports = new Common();