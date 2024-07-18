//Thu Jul 18 2024 07:23:06 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("逛视频刷视频");
const jdCookie = require("./jdCookie"),
  notify = require("./utils/Rebels_sendJDNotify"),
  common = require("./utils/Rebels_jdCommon"),
  {
    H5st
  } = require("./utils/Rebels_H");
let taskThreads = process.env.jd_video_threads || "1";
const runInterval = process.env.jd_video__interval || "2000",
  isNotify = (process.env.jd_video_notify || process.env.jd_video_Notify) === "true",
  pinFilter = (process.env.jd_video_pinFilter || "").split("@"),
  randomApi = process.env.jd_video_signapi || "http://rsign.257999.xyz/rsign",
  maxThreads = 3;
let cookiesArr = Object.keys(jdCookie).map(_0x558873 => jdCookie[_0x558873]).filter(_0x68c92e => _0x68c92e);
!cookiesArr[0] && ($.msg($.name, "【提示】请先获取Cookie"), process.exit(1));
!(async () => {
  notify.config({
    title: $.name
  });
  await Main();
  isNotify && notify.getMessage() && (await notify.push());
})().catch(_0x1a49a1 => $.logErr(_0x1a49a1)).finally(() => $.done());
async function Main() {
  try {
    try {
      const _0x10fee8 = parseInt(taskThreads);
      _0x10fee8 > 0 && _0x10fee8 !== 1 && (taskThreads = _0x10fee8);
    } catch {
      taskThreads = 1;
    }
    taskThreads = Math.min(taskThreads, maxThreads);
    $.waitTime = null;
    if (runInterval) {
      try {
        const _0x26dba7 = parseInt(runInterval);
        _0x26dba7 >= 0 && ($.waitTime = _0x26dba7);
      } catch {
        console.log("⚠ 自定义运行间隔时长设置错误");
      }
    }
    console.log("==========" + $.name + "变量开启状态==========");
    console.log("活动入口: APP-最下面选项-逛");
    console.log("并发线程: [" + taskThreads + "]");
    console.log("SIGN服务: [" + (process.env.jd_video_signapi ? "" + process.env.jd_video_signapi : "内置SIGN服务") + "]");
    console.log("间隔时长: [" + $.waitTime / 1000 + "秒]运行间隔时长");
    console.log("代理开关: [" + common.getProxyStatus() + "]");
    console.log("通知推送: [" + (isNotify ? "开启" : "关闭") + "]");
    console.log("账号过滤: [" + pinFilter.join(", ") + "]");
    console.log("==========" + $.name + "变量状态结束==========");
    console.log("");
    if (!randomApi) {
      console.log("⚠ 请先定义SIGN环境变量后再运行脚本！");
      return;
    }
    $.needRemoveCookieIndex = [];
    await common.concTask(taskThreads, cookiesArr, taskFnc);
    $.hasPrintActInfo = false;
    $.runEnd = false;
    $.needRemoveCookieIndex.length > 0 && (cookiesArr = cookiesArr.filter((_0x473b82, _0x282d2d) => !$.needRemoveCookieIndex.includes(_0x282d2d + 1)), $.needRemoveCookieIndex = []);
    const _0x210764 = notify.getMessage();
    _0x210764 && console.log("\n📣 运行结果\n" + _0x210764.replace(/：/g, " ➜ "));
  } catch (_0x3a6488) {
    console.log("❌ 脚本运行遇到了错误\n" + _0x3a6488);
  }
}
async function taskFnc(_0x3cab07, _0x21ee59) {
  if ($.runEnd) {
    return {
      runEnd: true
    };
  }
  const _0x471354 = decodeURIComponent(common.getCookieValue(_0x3cab07, "pt_pin"));
  function _0x229746(_0x4da193, _0x43c1a2) {
    if (_0x4da193.length <= 4) {
      return _0x4da193;
    } else {
      const _0x9c657e = _0x4da193.slice(0, 2),
        _0x205d83 = _0x4da193.slice(-2),
        _0x59d0bd = Math.max(_0x43c1a2 - _0x9c657e.length - _0x205d83.length, 0),
        _0x5df921 = "*".repeat(_0x59d0bd);
      return _0x9c657e + _0x5df921 + _0x205d83;
    }
  }
  const _0x41a083 = decodeURIComponent(_0x471354),
    _0x577fee = _0x229746(_0x41a083, 6),
    _0x150f59 = "【账号" + _0x21ee59 + "】" + _0x577fee + "：",
    _0x282231 = notify.create(_0x21ee59, _0x471354);
  if (pinFilter.length > 0 && (pinFilter.includes(_0x471354) || pinFilter.includes(encodeURIComponent(_0x471354)))) {
    _0x282231.fix("已设置跳过运行当前账号");
    console.log(_0x282231.getInlineContent());
    $.needRemoveCookieIndex.push(_0x21ee59);
    return;
  }
  const _0x37b56f = await common.getLoginStatus(_0x3cab07);
  if (!_0x37b56f && typeof _0x37b56f === "boolean") {
    console.log(_0x150f59 + "账号无效");
    _0x282231.fix("账号无效");
    $.needRemoveCookieIndex.push(_0x21ee59);
    return;
  }
  const _0x40775e = common.genUA(_0x471354);
  let _0x380ccc = false,
    _0x3bcfbe = false,
    _0x5164ed = false,
    _0x18f182 = true,
    _0x108a66,
    _0x3a9084,
    _0x3f15b4,
    _0x37c026,
    _0x1397a0,
    _0x4d7111,
    _0x34fd18;
  _0x108a66 = "";
  await _0x1776c0("videoHb_newCustomerHbLayer");
  await $.wait(parseInt($.waitTime * 1 + 500, 10));
  if ($.runEnd || _0x380ccc) {
    return;
  }
  if (_0x108a66) {
    let {
      popAlertInfo: _0x1d258e
    } = _0x108a66;
    if (_0x1d258e) {
      let {
        hbAmount: _0x49d5a0,
        defaultPopAlertToast: _0x921554
      } = _0x1d258e;
      console.log("" + _0x150f59 + _0x921554 + ": " + _0x49d5a0 + "元");
    }
    if (_0x108a66?.["layerGoldCoinCapsuleInfo"]?.["taskStatus"]) {
      _0x3bcfbe = true;
      console.log(_0x150f59 + "今天已刷完视频");
    } else {
      if (!_0x3bcfbe) {
        let _0x4c6f21 = 0;
        while (_0x18f182 && _0x4c6f21 < 20 && !_0x380ccc) {
          _0x3a9084 = "";
          await $.wait(parseInt($.waitTime * 1 + 500, 10));
          await _0x1776c0("videoHbGoldCoin_done");
          await $.wait(parseInt($.waitTime * 1 + 500, 10));
          if (_0x3a9084) {
            let {
              hasNext: _0xa6531,
              rewardValue: _0xccc5f4,
              goldCoinAmount: _0x169b6d
            } = _0x3a9084;
            _0xccc5f4 ? console.log(_0x150f59 + "刷视频获得" + _0xccc5f4 + "金币: 总金币" + _0x169b6d) : console.log(_0x150f59 + "刷视频没有获得金币");
            _0x18f182 = _0xa6531;
          }
          _0x4c6f21++;
        }
      }
    }
    if (!_0x18f182) {
      await _0x1776c0("videoRedPacketHomePage_queryMoney");
      await $.wait(parseInt($.waitTime * 1 + 500, 10));
      _0x34fd18 > 1000 ? (await _0x1776c0("videoRedPacketHomePage_exchangeCash"), await $.wait(parseInt($.waitTime * 1 + 500, 10))) : console.log(_0x150f59 + "还需" + (1000 - _0x34fd18) + "个金币可以兑换现金");
      _0x3f15b4 = "";
      await _0x1776c0("videoHbCw_homePage");
      await $.wait(parseInt($.waitTime * 1 + 500, 10));
      if (_0x3f15b4) {
        _0x1397a0 = parseFloat(_0x3f15b4?.["cashBalanceFloor"]?.["amount"] || 0);
        let _0x4dbfc0 = _0x3f15b4?.["cwCardFloor"]?.["cards"] || [];
        _0x4dbfc0 = _0x4dbfc0.filter(_0x51f36c => _0x51f36c.cwStatus === 0 && parseFloat(_0x51f36c.amountStr) <= _0x1397a0).sort(function (_0xb93a16, _0x144dd0) {
          return parseFloat(_0x144dd0.amountStr) - parseFloat(_0xb93a16.amountStr);
        });
        for (let _0x3b77e6 of _0x4dbfc0) {
          if (_0x5164ed) {
            break;
          }
          _0x37c026 = _0x3b77e6;
          await _0x1776c0("videoHbCw_doCw");
          await $.wait(parseInt($.waitTime * 1 + 3500, 10));
        }
      }
    }
  }
  if ($.runEnd) {
    return {
      runEnd: true
    };
  }
  await $.wait(parseInt($.waitTime * 1 + 500, 10));
  async function _0x408468(_0xd2e734, _0x4e5fc8) {
    try {
      let _0xf03858;
      switch (_0xd2e734) {
        case "videoHb_newCustomerHbLayer":
          _0x4e5fc8.code === "0" ? _0x4e5fc8.busiCode === "0" ? _0x108a66 = _0x4e5fc8.data : (_0xf03858 = common.getErrorMsg(_0x4e5fc8), ["降级"].some(_0x35479b => _0xf03858.includes(_0x35479b)) ? console.log(_0x150f59 + "逛视频首页失败[" + _0x4e5fc8.busiCode + "]：需更换SIGN服务或使用内置SIGN服务") : console.log(_0x150f59 + "逛视频首页失败[" + _0x4e5fc8.busiCode + "]：" + _0xf03858), _0x380ccc = true) : (_0xf03858 = common.getErrorMsg(_0x4e5fc8), console.log(_0x150f59 + "逛视频首页失败[" + _0x4e5fc8.code + "]：" + _0xf03858), _0x380ccc = true);
          break;
        case "videoHb_sign":
          _0x4e5fc8.code === "0" ? _0x4e5fc8.busiCode === "0" ? (_0xf03858 = _0x4e5fc8?.["data"]?.["rewardMsg"]?.["msg"]?.["match"](/(余额到账[\d\.]+[元]*)/)?.[1] || "", console.log(_0x150f59 + "签到成功: " + _0xf03858)) : (_0xf03858 = common.getErrorMsg(_0x4e5fc8), console.log(_0x150f59 + "签到失败[" + _0x4e5fc8.busiCode + "]：" + _0xf03858)) : (_0xf03858 = common.getErrorMsg(_0x4e5fc8), console.log(_0x150f59 + "签到失败[" + _0x4e5fc8.code + "]：" + _0xf03858));
          break;
        case "videoRedPacketHomePage_exchangeCash":
          _0x4e5fc8.code === "0" ? _0x4e5fc8.busiCode === "0" ? console.log(_0x150f59 + "兑换现金成功，满足提现将会去提现") : (_0xf03858 = common.getErrorMsg(_0x4e5fc8), console.log(_0x150f59 + "兑换现金失败[" + _0x4e5fc8.busiCode + "]：" + _0xf03858)) : (_0xf03858 = common.getErrorMsg(_0x4e5fc8), console.log(_0x150f59 + "兑换现金失败失败[" + _0x4e5fc8.code + "]：" + _0xf03858));
          break;
        case "videoHbCw_homePage":
          _0x4e5fc8.code === "0" ? _0x4e5fc8.busiCode === "0" ? _0x3f15b4 = _0x4e5fc8.data : (_0xf03858 = common.getErrorMsg(_0x4e5fc8), console.log(_0x150f59 + "现金查询失败[" + _0x4e5fc8.busiCode + "]：" + _0xf03858)) : (_0xf03858 = common.getErrorMsg(_0x4e5fc8), console.log(_0x150f59 + "现金查询失败[" + _0x4e5fc8.code + "]：" + _0xf03858));
          break;
        case "videoHbGoldCoin_done":
          _0x4e5fc8.code === "0" ? _0x4e5fc8.busiCode === "0" ? _0x3a9084 = _0x4e5fc8.data : (_0xf03858 = common.getErrorMsg(_0x4e5fc8), console.log(_0x150f59 + "刷视频失败[" + _0x4e5fc8.busiCode + "]：" + _0xf03858)) : (_0xf03858 = common.getErrorMsg(_0x4e5fc8), console.log(_0x150f59 + "刷视频失败[" + _0x4e5fc8.code + "]：" + _0xf03858), _0xf03858?.["includes"]("未登录") && (_0x380ccc = true));
          break;
        case "videoHbCw_doCw":
          _0x4e5fc8.code === "0" ? _0x4e5fc8.busiCode === "0" ? (_0x1397a0 -= parseFloat(_0x4e5fc8?.["data"]?.["amount"]), console.log(_0x150f59 + "成功提现[" + _0x4e5fc8?.["data"]?.["amount"] + "元],请在APP-我的-钱包中查看")) : (_0xf03858 = common.getErrorMsg(_0x4e5fc8), console.log(_0x150f59 + "提现失败[" + _0x4e5fc8.busiCode + "]：" + _0xf03858), _0xf03858?.["includes"]("此次提现失败") && (_0x5164ed = true)) : (_0xf03858 = common.getErrorMsg(_0x4e5fc8), console.log(_0x150f59 + "提现失败[" + _0x4e5fc8.code + "]：" + _0xf03858));
          break;
        case "videoRedPacketHomePage_queryMoney":
          _0x4e5fc8.code === "0" ? _0x4e5fc8.busiCode === "0" ? (_0x4d7111 = _0x4e5fc8?.["data"]?.["cash"] || 0, _0x34fd18 = _0x4e5fc8?.["data"]?.["goldCoin"] || 0, console.log(_0x150f59 + "我的现金余额: " + _0x4d7111 + "元，金币余额: " + _0x34fd18 + "金币"), _0x282231.insert("我的现金余额: " + _0x4e5fc8?.["data"]?.["cash"] + "元，金币余额: " + _0x4e5fc8?.["data"]?.["goldCoin"] + "金币")) : (_0xf03858 = common.getErrorMsg(_0x4e5fc8), console.log(_0x150f59 + "查询余额失败[" + _0x4e5fc8.busiCode + "]：" + _0xf03858)) : (_0xf03858 = common.getErrorMsg(_0x4e5fc8), console.log(_0x150f59 + "查询余额失败[" + _0x4e5fc8.code + "]：" + _0xf03858));
          break;
      }
    } catch (_0x1feff5) {
      console.log("❌ 未能正确处理 " + _0xd2e734 + " 请求响应 " + (_0x1feff5.message || _0x1feff5));
    }
  }
  async function _0x1776c0(_0x3fbae8) {
    if ($.runEnd) {
      return;
    }
    let _0xa3537f = "",
      _0x4c1384 = null,
      _0x1c0ef3 = null,
      _0x23cbea = "POST",
      _0x55e138 = {},
      _0x32c743 = {},
      _0x32db03 = {};
    switch (_0x3fbae8) {
      case "videoHb_newCustomerHbLayer":
        _0xa3537f = "https://api.m.jd.com/client.action";
        _0x55e138 = {};
        _0x1c0ef3 = {
          functionId: "videoHb_newCustomerHbLayer"
        };
        _0x4c1384 = common.queryStringToObject(await getSign("videoHb_newCustomerHbLayer", _0x55e138));
        break;
      case "videoHb_sign":
        _0x32db03 = {
          appId: "2023f",
          functionId: "videoHb_sign",
          appid: "video-redbag-h5",
          clientVersion: common.getLatestAppVersion(),
          client: "wh5",
          body: {},
          version: "4.7",
          ua: _0x40775e,
          t: true
        };
        _0x32c743 = await H5st.getH5st(_0x32db03);
        _0xa3537f = "https://api.m.jd.com/";
        _0x4c1384 = _0x32c743.paramsData;
        break;
      case "videoRedPacketHomePage_exchangeCash":
        _0x32db03 = {
          appId: "8c80c",
          functionId: "videoRedPacketHomePage_exchangeCash",
          appid: "video-redbag-h5",
          clientVersion: common.getLatestAppVersion(),
          client: "wh5",
          body: {},
          version: "4.7",
          ua: _0x40775e,
          t: true
        };
        _0x32c743 = await H5st.getH5st(_0x32db03);
        _0xa3537f = "https://api.m.jd.com/";
        _0x4c1384 = _0x32c743.paramsData;
        break;
      case "videoHbCw_homePage":
        _0x32db03 = {
          appId: "7f9c4",
          functionId: "videoHbCw_homePage",
          appid: "video-redbag-h5",
          clientVersion: common.getLatestAppVersion(),
          client: "wh5",
          body: {},
          version: "4.7",
          ua: _0x40775e,
          t: true
        };
        _0x32c743 = await H5st.getH5st(_0x32db03);
        _0xa3537f = "https://api.m.jd.com/";
        _0x4c1384 = _0x32c743.paramsData;
        break;
      case "videoHbGoldCoin_done":
        _0xa3537f = "https://api.m.jd.com/client.action";
        _0x55e138 = {
          contentId: "371443445",
          jsLabel: "4ltgbXKkRshCe6GnSlUDvA+g9Fa0rrkBU\\/\\/B\\/yiFbd9FIKv\\/JbAtuXFz6FONLlyuK+Vw0JMqNshWaQy6Na6G4PT\\/Cvu8XWrPhFP6ibzY+UuNOZ0m6+m\\/jSeCmEe0a3mxfa6k3eupkZYmCUBGKfd1GYpVv3ztGei1Or2tWMqcBu8=",
          playType: "163"
        };
        _0x1c0ef3 = {
          functionId: "videoHbGoldCoin_done"
        };
        _0x4c1384 = common.queryStringToObject(await getSign("videoHbGoldCoin_done", _0x55e138));
        break;
      case "videoHbCw_doCw":
        _0x32db03 = {
          appId: "7f9c4",
          functionId: "videoHbCw_doCw",
          appid: "video-redbag-h5",
          clientVersion: common.getLatestAppVersion(),
          client: "wh5",
          body: {
            bizTraceId: _0x37c026.bizTraceId,
            amount: _0x37c026.amountStr
          },
          version: "4.7",
          ua: _0x40775e,
          t: true
        };
        _0x32c743 = await H5st.getH5st(_0x32db03);
        _0xa3537f = "https://api.m.jd.com/";
        _0x4c1384 = _0x32c743.paramsData;
        break;
      case "videoRedPacketHomePage_queryMoney":
        _0x32db03 = {
          appId: "a3b98",
          functionId: "videoRedPacketHomePage_queryMoney",
          appid: "video-redbag-h5",
          clientVersion: common.getLatestAppVersion(),
          client: "wh5",
          body: {
            activitySource: "1",
            realClient: "ios"
          },
          version: "4.7",
          ua: _0x40775e,
          t: true
        };
        _0x32c743 = await H5st.getH5st(_0x32db03);
        _0xa3537f = "https://api.m.jd.com/";
        _0x4c1384 = _0x32c743.paramsData;
        break;
      default:
        console.log("❌ 未知请求 " + _0x3fbae8);
        return;
    }
    const _0x59cbda = {};
    _0x4c1384 && Object.assign(_0x4c1384, _0x59cbda);
    _0x1c0ef3 && Object.assign(_0x1c0ef3, _0x59cbda);
    const _0x127be0 = {
      url: _0xa3537f,
      method: _0x23cbea,
      headers: {
        origin: "https://prodev.m.jd.com",
        Referer: "https://pro.m.jd.com/mall/active/8WYa8CGWvkB5b3EC9TcyAbAobeo/index.html",
        "User-Agent": _0x40775e,
        Cookie: _0x3cab07,
        "content-type": "application/x-www-form-urlencoded",
        accept: "application/json, text/plain, */*"
      },
      params: _0x1c0ef3,
      data: _0x4c1384,
      timeout: 30000
    };
    _0x23cbea === "GET" && (delete _0x127be0.data, delete _0x127be0.headers["Content-Type"]);
    const _0x7d3d16 = 1;
    let _0x4bdf1a = 0,
      _0x520fdd = null;
    while (_0x4bdf1a < _0x7d3d16) {
      _0x4bdf1a > 0 && (await $.wait(1000));
      const _0x330345 = await common.request(_0x127be0);
      if (!_0x330345.success) {
        _0x520fdd = "🚫 " + _0x3fbae8 + " 请求失败 ➜ " + _0x330345.error;
        _0x4bdf1a++;
        continue;
      }
      if (!_0x330345.data) {
        _0x520fdd = "🚫 " + _0x3fbae8 + " 请求失败 ➜ 无响应数据";
        _0x4bdf1a++;
        continue;
      }
      await _0x408468(_0x3fbae8, _0x330345.data);
      break;
    }
    _0x4bdf1a >= _0x7d3d16 && console.log(_0x520fdd);
  }
}
async function getSign(_0x426820, _0x5a8333) {
  const _0x175dab = await common.request({
      url: randomApi,
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        fn: _0x426820,
        body: _0x5a8333
      }),
      proxy: null,
      debug: false,
      timeout: 30000
    }),
    _0x30440d = _0x175dab.data;
  if (_0x30440d && _0x30440d.body) {
    return _0x30440d.body;
  } else {
    console.error("未获取到数据，检测网络是否正常");
  }
}
function Env(t, e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20;
        r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": o,
              Accept: "*/*"
            }
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) {
          return {};
        }
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], void 0 === r) {
        return s;
      }
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) {
          try {
            const t = JSON.parse(r);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t);
          s = this.setval(JSON.stringify(o), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status);
        e(t, s, i);
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            s && this.ckjar.setCookieSync(s, null);
            e.cookieJar = this.ckjar;
          }
        } catch (t) {
          this.logErr(t);
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body);
      }));
    }
    post(t, e = () => {}) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient.post(t, (t, s, i) => {
          !t && s && (s.body = i, s.statusCode = s.status);
          e(t, s, i);
        });
      } else {
        if (this.isQuanX()) {
          t.method = "POST";
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: r,
              body: o
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: r,
              body: o
            }, o);
          }, t => e(t));
        } else {
          if (this.isNode()) {
            this.initGotEnv(t);
            const {
              url: s,
              ...i
            } = t;
            this.got.post(s, i).then(t => {
              const {
                statusCode: s,
                statusCode: i,
                headers: r,
                body: o
              } = t;
              e(null, {
                status: s,
                statusCode: i,
                headers: r,
                body: o
              }, o);
            }, t => {
              const {
                message: s,
                response: i
              } = t;
              e(s, i, i && i.body);
            });
          }
        }
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) {
          return t;
        }
        if ("string" == typeof t) {
          return this.isLoon() ? t : this.isQuanX() ? {
            "open-url": t
          } : this.isSurge() ? {
            url: t
          } : void 0;
        }
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`);
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}