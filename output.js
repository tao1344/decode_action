//Thu Jul 18 2024 16:55:14 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("京东资产变动");
const jdCookie = require("./jdCookie"),
  notify = require("./utils/Rebels_sendJDNotify"),
  wpnotify = require("./sendNotify"),
  common = require("./utils/Rebels_jdCommon"),
  {
    H5st
  } = require("./utils/Rebels_H"),
  cryptoJS = require("crypto-js");
let taskThreads = process.env.jd_bean_change__threads || "1";
const runInterval = process.env.jd_bean_change_interval || "1500",
  isNotify = (process.env.jd_bean_change_notify || process.env.jd_bean_change_Notify) === "true",
  prizeNotify = process.env.jd_bean_change_prizeNotify === "true",
  WP_APP_TOKEN_ONE = process.env.WP_APP_TOKEN_ONE || "",
  pinFilter = (process.env.jd_bean_change_pinFilter || "").split("@"),
  ForFarm = process.env.jd_bean_change_farm === "true",
  XinForFarm = process.env.jd_bean_change_xinfarm === "true",
  wanyiwan = process.env.jd_bean_change_wyw === "true",
  ecard = process.env.jd_bean_change_ecard === "true",
  marketCard = process.env.jd_bean_change_marketcard === "true",
  phonebill = process.env.jd_bean_change_phonebill === "true",
  Comment = process.env.jd_bean_change_comment === "true",
  myhongbao = process.env.jd_bean_change_hongbao === "true",
  jingBean = process.env.jd_bean_change_jingbean === "true",
  intPerSent = process.env.jd_bean_change_intpersent || "5",
  maxThreads = 1,
  today = new Date($.time("yyyy-MM-dd 00:00:00")).getTime(),
  yesterday = today - 86400000,
  tomorrow = today + 86400000,
  dayAfterTomorrow = today + 172800000,
  KEY_TOTAL = 0,
  KEY_TOMORROW = 1,
  KEY_DAY_AFTER_TOMORROW = 2;
let cookiesArr = Object.keys(jdCookie).map(_0x2dd25d => jdCookie[_0x2dd25d]).filter(_0x1c94dd => _0x1c94dd);
!cookiesArr[0] && ($.msg($.name, "【提示】请先获取Cookie"), process.exit(1));
!(async () => {
  notify.config({
    title: $.name
  });
  await Main();
})().catch(_0x2aaea0 => $.logErr(_0x2aaea0)).finally(() => $.done());
async function Main() {
  try {
    try {
      const _0x57b278 = parseInt(taskThreads);
      _0x57b278 > 0 && _0x57b278 !== 1 && (taskThreads = _0x57b278);
    } catch {
      taskThreads = 1;
    }
    taskThreads = Math.min(taskThreads, maxThreads);
    $.waitTime = null;
    if (runInterval) {
      try {
        const _0x212962 = parseInt(runInterval);
        _0x212962 >= 0 && ($.waitTime = _0x212962);
      } catch {
        console.log("⚠ 自定义运行间隔时长设置错误");
      }
    }
    console.log("==========" + $.name + "变量开启状态==========");
    console.log("间隔时长: [" + $.waitTime / 1000 + "秒]运行间隔时长");
    console.log("东东农场: [" + (ForFarm ? "开启" : "关闭") + "],新东东农场: [" + (XinForFarm ? "开启" : "关闭") + "]");
    console.log("话费积分: [" + (phonebill ? "开启" : "关闭") + "],超市卡余额: [" + (marketCard ? "开启" : "关闭") + "]");
    console.log("评论查询: [" + (Comment ? "开启" : "关闭") + "],礼品卡余额: [" + (ecard ? "开启" : "关闭") + "]");
    console.log("红包查询: [" + (myhongbao ? "开启" : "关闭") + "],玩一玩奖票: [" + (wanyiwan ? "开启" : "关闭") + "]");
    console.log("过期京豆: [" + (jingBean ? "开启" : "关闭") + "]");
    console.log("代理开关: [" + common.getProxyStatus() + "]");
    console.log("通知推送: [" + (isNotify ? "开启" : "关闭") + "]" + (isNotify ? ", 分段数量: [" + intPerSent + "]," : ""));
    console.log("单独推送: [" + (prizeNotify ? "开启" : "关闭") + "],一对一推送: [" + (WP_APP_TOKEN_ONE ? "开启" : "关闭") + "]");
    console.log("账号过滤: [" + pinFilter.join(", ") + "]");
    console.log("==========" + $.name + "变量状态结束==========");
    console.log("");
    await common.concTask(taskThreads, cookiesArr, taskFnc);
    $.runEnd = false;
  } catch (_0x20c016) {
    console.log("❌ 脚本运行遇到了错误\n" + _0x20c016);
  }
}
async function taskFnc(_0x10c813, _0x5866d3) {
  if ($.runEnd) {
    return {
      runEnd: true
    };
  }
  const _0x578a97 = decodeURIComponent(common.getCookieValue(_0x10c813, "pt_pin")),
    _0x5aaccc = "【账号" + _0x5866d3 + "】" + _0x578a97 + "：",
    _0x12dce2 = notify.create(_0x5866d3, _0x578a97);
  if (pinFilter.length > 0 && (pinFilter.includes(_0x578a97) || pinFilter.includes(encodeURIComponent(_0x578a97)))) {
    _0x12dce2.fix("已设置跳过运行当前账号");
    console.log(_0x12dce2.getInlineContent());
    return;
  }
  const _0x147999 = await common.getLoginStatus(_0x10c813);
  if (!_0x147999 && typeof _0x147999 === "boolean") {
    console.log(_0x5aaccc + "账号无效");
    _0x12dce2.fix("账号无效");
    return;
  }
  const _0x1d22c2 = common.genUA(_0x578a97);
  let _0x288ed2 = [],
    _0x1a1317 = {
      total: [0, 0, 0],
      common: [0, 0, 0],
      jdapp: [0, 0, 0],
      lite: [0, 0, 0],
      minip: [0, 0, 0]
    },
    _0x498cfd = 0,
    _0x542844 = {
      today_in: 0,
      today_out: 0,
      yesterday_in: 0,
      yesterday_out: 0,
      detail: {}
    };
  await _0xd4352();
  await $.wait(parseInt($.waitTime * 1 + 500, 10));
  await _0xc48c86();
  await $.wait(parseInt($.waitTime * 1 + 500, 10));
  ForFarm && (await _0x547590(), await $.wait(parseInt($.waitTime * 1 + 500, 10)));
  XinForFarm && (await _0x47ac0f(), await $.wait(parseInt($.waitTime * 1 + 500, 10)));
  ecard && (await _0x41e5bc(), await $.wait(parseInt($.waitTime * 1 + 500, 10)));
  marketCard && (await _0x1bf476(), await $.wait(parseInt($.waitTime * 1 + 500, 10)));
  wanyiwan && (await _0x5d82d6(), await $.wait(parseInt($.waitTime * 1 + 500, 10)));
  phonebill && (await _0x57b6a5(), await $.wait(parseInt($.waitTime * 1 + 500, 10)));
  Comment && (await _0x54e760(), await $.wait(parseInt($.waitTime * 1 + 500, 10)));
  myhongbao && (await _0x2ec741(), await $.wait(parseInt($.waitTime * 1 + 500, 10)));
  jingBean && (await _0x508eab(), await $.wait(parseInt($.waitTime * 1 + 500, 10)));
  _0x288ed2 && _0x288ed2.length > 0 && (console.log("" + _0x5aaccc), console.log("" + _0x288ed2.join("\n")), _0x12dce2.insert(_0x288ed2.join("\n") + "\n\n"), console.log("----------------------------------------"));
  prizeNotify && _0x288ed2 && _0x288ed2.length > 0 && (await notify.sendNotify($.name + "通知", "【京东账号】" + _0x578a97 + "\n" + _0x288ed2.join("\n")));
  if (WP_APP_TOKEN_ONE && _0x288ed2 && _0x288ed2.length > 0) {
    try {
      await wpnotify.sendNotifybyWxPucher("资产变动通知", "" + _0x288ed2.join("\n"), "" + _0x578a97);
    } catch (_0x1731f2) {
      _0x1731f2 instanceof TypeError ? console.error("请使用本库配套的sendNotify.js文件进行一对一推送设置") : console.error("请使用本库配套的sendNotify.js文件进行一对一推送设置");
    }
  }
  intPerSent > 0 && (_0x5866d3 % intPerSent == 0 || _0x5866d3 === cookiesArr.length) && isNotify && notify.getMessage() && (await notify.push(), notify.disposeAllMessage());
  if ($.runEnd) {
    return {
      runEnd: true
    };
  }
  await $.wait(parseInt($.waitTime * 1 + 500, 10));
  async function _0x27fbb9(_0x333883) {
    _0x288ed2.push(_0x333883);
  }
  async function _0xd4352() {
    const _0x130857 = {
        url: "https://me-api.jd.com/user_new/info/GetJDUserInfoUnion",
        method: "GET",
        headers: {
          Accept: "application/json, text/plain",
          "accept-encoding": "gzip, deflate, br",
          "content-type": "application/json;charset=UTF-8",
          Cookie: _0x10c813,
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36 Edg/106.0.1370.42"
        },
        timeout: 30000
      },
      _0x8a7d20 = 3;
    let _0x2d5116 = 0;
    while (_0x2d5116 < _0x8a7d20) {
      _0x2d5116 > 0 && (await $.wait(1000));
      const _0xebca34 = await common.request(_0x130857);
      if (_0xebca34.data) {
        let _0x2e436f = _0xebca34.data;
        if (_0x2e436f.retcode === "0") {
          if (_0x2e436f.data) {
            if (_0x2e436f.data && _0x2e436f.data.userInfo && _0x2e436f.data.userInfo.baseInfo) {
              let _0x31c480 = _0x2e436f.data.userInfo.baseInfo;
              _0x27fbb9("【账号名称】" + _0x31c480.nickname);
              _0x2e436f.data.userInfo.isPlusVip == 1 ? _0x27fbb9("【账号信息】PLUS会员，" + _0x31c480.levelName + "，" + _0x31c480.userLevel + "分") : _0x27fbb9("【账号信息】普通会员，" + _0x31c480.levelName + "，" + _0x31c480.userLevel + "分");
              _0x27fbb9("【当前京豆】" + _0x2e436f.data.assetInfo.beanNum + "京豆");
            }
            if (_0x2e436f.data && _0x2e436f.data.assetInfo && _0x2e436f.data.assetInfo.baitiaoInfo) {
              let _0xc03932 = _0x2e436f.data.assetInfo.baitiaoInfo;
              if (_0xc03932.baiTiaoStatus === "0") {
                let _0x382525 = parseFloat(_0xc03932.availableLimit) || 0,
                  _0x3d25d4 = parseFloat(_0xc03932.unpaidForMonth) || 0,
                  _0x5715cd = _0x382525 + _0x3d25d4;
                _0x27fbb9("【白条余额】" + _0x382525.toFixed(2) + "元,【当月待还】" + _0x3d25d4.toFixed(2) + "元,【总额度】" + _0x5715cd.toFixed(2) + "元");
              }
            }
          }
        }
      }
      break;
    }
  }
  async function _0xc48c86(_0x5c5ce3 = 1) {
    params = {
      page: _0x5c5ce3
    };
    const _0x4d9c52 = {
        url: "https://bean.m.jd.com/beanDetail/detail.json",
        method: "GET",
        headers: {
          Accept: "application/json, text/plain",
          "accept-encoding": "gzip, deflate, br",
          "content-type": "application/json;charset=UTF-8",
          Cookie: _0x10c813,
          "User-Agent": _0x1d22c2
        },
        params: params,
        timeout: 30000
      },
      _0x2e173e = 3;
    let _0x2d34b2 = 0;
    while (_0x2d34b2 < _0x2e173e) {
      _0x2d34b2 > 0 && (await $.wait(1000));
      const _0x155472 = await common.request(_0x4d9c52);
      if (_0x155472.data) {
        let _0x4d061e = _0x155472.data;
        if (_0x4d061e.code === "0" && _0x4d061e.success) {
          let _0x25dbb1 = _0x4d061e?.["jingDetailList"] || [],
            _0x5da382 = _0x25dbb1?.["length"] ? true : false;
          for (let _0x2847e4 of _0x25dbb1) {
            let _0x19f6f4 = Number(_0x2847e4.amount),
              _0x1406ca = new Date(_0x2847e4.date).getTime();
            if (_0x1406ca < yesterday) {
              _0x5da382 = false;
            } else {
              if (_0x1406ca < today) {
                _0x19f6f4 >= 0 ? _0x542844.yesterday_in += _0x19f6f4 : _0x542844.yesterday_out += _0x19f6f4;
              } else {
                if (_0x19f6f4 >= 0) {
                  let _0x1d55cd = _0x2847e4.eventMassage,
                    _0x37c208 = _0x1d55cd?.["match"](/\[(.*)\]/);
                  _0x37c208 && (_0x1d55cd = _0x37c208[1]);
                  if (_0x1d55cd?.["includes"]("退还京豆")) {
                    continue;
                  }
                  _0x542844.today_in += _0x19f6f4;
                  if (!_0x542844.detail[_0x1d55cd]) {
                    _0x542844.detail[_0x1d55cd] = 0;
                  }
                  _0x542844.detail[_0x1d55cd] += _0x19f6f4;
                } else {
                  _0x542844.today_out += _0x19f6f4;
                }
              }
            }
          }
          _0x5da382 ? await _0xc48c86(_0x5c5ce3 + 1) : (_0x27fbb9("【今日京豆】收入" + _0x542844.today_in + "京豆,支出" + _0x542844.today_out + "京豆"), _0x27fbb9("【昨日京豆】收入" + _0x542844.yesterday_in + "京豆,支出" + _0x542844.yesterday_out + "京豆"));
        }
      }
      break;
    }
  }
  async function _0x57b6a5() {
    body = await _0x1ebbdb();
    params = {
      appid: "h5-sep",
      functionId: "DATAWALLET_USER_SIGN_INFO",
      body: JSON.stringify(body),
      client: "m",
      clientVersion: "6.0.0"
    };
    const _0xce11c3 = {
        url: "https://api.m.jd.com/api?functionId=DATAWALLET_USER_SIGN_INFO",
        method: "POST",
        headers: {
          Accept: "*/*",
          Cookie: _0x10c813,
          Referer: "https://mypoint.jd.com/predeem/?sid=&un_area=4_50952_60426_0",
          Origin: "https://mypoint.jd.com",
          "User-Agent": _0x1d22c2
        },
        params: params,
        timeout: 30000
      },
      _0x4bd739 = 3;
    let _0x550093 = 0;
    while (_0x550093 < _0x4bd739) {
      _0x550093 > 0 && (await $.wait(1000));
      const _0x498db6 = await common.request(_0xce11c3);
      if (_0x498db6.data) {
        let _0x34fce3 = _0x498db6.data;
        _0x34fce3.code === 200 && _0x34fce3.data && _0x27fbb9("【话费积分】" + _0x34fce3.data.totalNum);
      }
      break;
    }
  }
  async function _0x41e5bc() {
    let _0x11e44a = {
      appId: "42e80",
      functionId: "queryGiftCardCountStatusCom",
      appid: "mygiftcard",
      clientVersion: common.getLatestAppVersion(),
      client: "h5",
      body: {
        queryList: "a"
      },
      version: "4.7",
      ua: _0x1d22c2,
      t: true
    };
    const _0x3718c5 = await H5st.getH5st(_0x11e44a);
    let _0x4ddb90 = _0x3718c5.paramsData;
    const _0xd8e0de = {
        url: "https://api.m.jd.com/api?functionId=queryGiftCardCountStatusCom",
        method: "POST",
        headers: {
          "User-Agent": _0x1d22c2,
          origin: "https://mygiftcard.jd.com",
          referer: "https://mygiftcard.jd.com/giftcardForM.html?source=JDAP",
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
          Cookie: _0x10c813
        },
        body: _0x4ddb90,
        timeout: 30000
      },
      _0xeadc18 = 3;
    let _0x3ab566 = 0;
    while (_0x3ab566 < _0xeadc18) {
      _0x3ab566 > 0 && (await $.wait(1000));
      const _0x59210d = await common.request(_0xd8e0de);
      if (_0x59210d.data) {
        let _0xc6f78f = _0x59210d.data;
        _0xc6f78f.code === "success" && _0xc6f78f.data && _0x27fbb9("【礼品卡总额】" + _0xc6f78f.data.a + "元");
      }
      break;
    }
  }
  async function _0x47ac0f() {
    let _0x13366b = {
      appId: "c57f6",
      functionId: "farm_home",
      appid: "signed_wh5",
      clientVersion: common.getLatestAppVersion(),
      client: "apple",
      body: {
        version: 3
      },
      version: "4.7",
      ua: _0x1d22c2,
      t: true
    };
    const _0x147a7 = await H5st.getH5st(_0x13366b);
    let _0x2b909e = _0x147a7.paramsData;
    const _0x342f72 = {
        url: "https://api.m.jd.com/client.action",
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "zh-cn",
          Connection: "keep-alive",
          "Content-Type": "application/x-www-form-urlencoded",
          Cookie: _0x10c813,
          Host: "api.m.jd.com",
          Referer: "https://h5.m.jd.com/",
          "X-Referer-Page": "https://h5.m.jd.com/pb/015686010/Bc9WX7MpCW7nW9QjZ5N3fFeJXMH/index.html",
          Origin: "https://h5.m.jd.com",
          "x-rp-client": "h5_1.0.0",
          "User-Agent": _0x1d22c2
        },
        body: _0x2b909e,
        timeout: 30000
      },
      _0x58a6f7 = 3;
    let _0x41c569 = 0;
    while (_0x41c569 < _0x58a6f7) {
      _0x41c569 > 0 && (await $.wait(1000));
      const _0x4b7d6c = await common.request(_0x342f72);
      if (_0x4b7d6c.data) {
        let _0x42cf39 = _0x4b7d6c.data;
        if (_0x42cf39.code === 0 && _0x42cf39.data) {
          if (_0x42cf39.data.bizCode === 0) {
            const _0x4771b2 = _0x42cf39.data?.["result"]?.["treeCurrentState"] || 0;
            if (_0x4771b2 === 0) {
              const _0x59609d = _0x42cf39.data?.["result"]?.["treeFullStage"],
                _0x373368 = _0x42cf39.data?.["result"]?.["bottleWater"],
                _0x5bd9e6 = _0x42cf39.data?.["result"]?.["waterTips"] || "",
                _0x462fcb = _0x42cf39.data?.["result"]?.["treeLevel"] || 0,
                _0x78dace = _0x42cf39.data?.["result"]?.["skuName"];
              switch (_0x59609d) {
                case 0:
                  _0x27fbb9("【新东东农场】未种植作物");
                  break;
                case 1:
                case 2:
                case 3:
                case 4:
                  let _0x4ee748 = "",
                    _0x1c1bdb = _0x5bd9e6.match(/\d+(\.\d+)?%/);
                  _0x1c1bdb && (_0x4ee748 = _0x1c1bdb[0]);
                  let _0xe4002e = "【新东东农场】[等级" + _0x462fcb + "][水滴" + _0x373368 + "]";
                  if (_0x1c1bdb) {
                    _0x4ee748 = parseFloat(_0x1c1bdb[0].replace("%", "")) / 100;
                    let _0x2aa97c = 1 - _0x4ee748;
                    _0x4ee748 = (_0x2aa97c * 100).toFixed(2) + "%";
                    _0xe4002e += ",进度[" + _0x4ee748 + "]";
                  }
                  _0x27fbb9(_0xe4002e);
                  break;
                case 5:
                  _0x27fbb9("【新东东农场】" + _0x78dace + "成熟了");
                  break;
              }
            } else {
              _0x27fbb9("【新东东农场】超过14天未浇水，果树已经枯萎了");
            }
          } else {
            _0x27fbb9("【新东东农场】活动火爆");
          }
        } else {
          _0x27fbb9("【新东东农场】活动火爆");
        }
      }
      break;
    }
  }
  async function _0x547590() {
    let _0x3540b6 = {
      appId: "8a2af",
      functionId: "initForFarm",
      appid: "signed_wh5",
      clientVersion: common.getLatestAppVersion(),
      client: "apple",
      body: {
        version: 3
      },
      version: "4.7",
      ua: _0x1d22c2,
      t: true
    };
    const _0x956877 = await H5st.getH5st(_0x3540b6);
    let _0x2b5a53 = _0x956877.paramsData;
    const _0x105c71 = {
        url: "https://api.m.jd.com/client.action",
        method: "POST",
        headers: {
          Host: "api.m.jd.com",
          Accept: "*/*",
          Origin: "https://carry.m.jd.com",
          "Accept-Encoding": "gzip,deflate,br",
          "User-Agent": _0x1d22c2,
          "Accept-Language": "zh-CN,zh-Hans;q=0.9",
          Referer: "https://carry.m.jd.com/",
          "x-requested-with": "com.jingdong.app.mall",
          Cookie: _0x10c813
        },
        body: _0x2b5a53,
        timeout: 30000
      },
      _0x3bc076 = 3;
    let _0x4e205e = 0;
    while (_0x4e205e < _0x3bc076) {
      _0x4e205e > 0 && (await $.wait(1000));
      const _0x433220 = await common.request(_0x105c71);
      if (_0x433220.data) {
        let _0x44c1f2 = _0x433220.data;
        if (_0x44c1f2.code === "0") {
          if (_0x44c1f2.farmUserPro) {
            const _0x6c6dc9 = _0x44c1f2.farmUserPro.treeState || 0;
            switch (_0x6c6dc9) {
              case 0:
                _0x27fbb9("【东东农场】未种植作物");
                break;
              case 1:
                _0x27fbb9("【东东农场】[等级" + _0x44c1f2.farmUserPro.prizeLevel + "][水滴" + _0x44c1f2.farmUserPro.totalEnergy + "],进度[" + (_0x44c1f2.farmUserPro?.["treeEnergy"] / _0x44c1f2.farmUserPro?.["treeTotalEnergy"] * 100).toFixed(2) + "%,已浇水" + _0x44c1f2.farmUserPro?.["treeEnergy"] / 10 + "次,还需" + (_0x44c1f2.farmUserPro?.["treeTotalEnergy"] - _0x44c1f2.farmUserPro?.["treeEnergy"]) / 10 + "次");
                break;
              case 2:
              case 3:
                _0x27fbb9("【东东农场】[" + _0x44c1f2.farmUserPro.name + "]成熟了");
                break;
            }
          } else {
            _0x27fbb9("【东东农场】活动火爆");
          }
        } else {
          _0x27fbb9("【东东农场】活动火爆");
        }
      }
      break;
    }
  }
  async function _0x5d82d6() {
    let _0xf2a873 = {
      appId: "c81ad",
      functionId: "wanyiwan_home",
      appid: "signed_wh5",
      clientVersion: common.getLatestAppVersion(),
      client: "apple",
      body: {
        outsite: 0,
        firstCall: 0,
        version: 1,
        lbsSwitch: false
      },
      version: "4.7",
      ua: _0x1d22c2,
      t: true,
      bu1: "lite_0.1.5",
      tokenCache: false
    };
    const _0x3e0374 = await H5st.getH5st(_0xf2a873);
    let _0x1fad6a = _0x3e0374.paramsData;
    const _0x56436a = {
        url: "https://api.m.jd.com/client.action",
        method: "POST",
        headers: {
          origin: "https://prodev.m.jd.com",
          Referer: "https://pro.m.jd.com/mall/active/3fcyrvLZALNPWCEDRvaZJVrzek8v/index.html",
          "User-Agent": _0x1d22c2,
          Cookie: _0x10c813,
          "content-type": "application/x-www-form-urlencoded",
          accept: "application/json, text/plain, */*",
          "x-rp-client": "h5_1.0.0"
        },
        body: _0x1fad6a,
        timeout: 30000
      },
      _0x150a32 = 3;
    let _0x42ee29 = 0;
    while (_0x42ee29 < _0x150a32) {
      _0x42ee29 > 0 && (await $.wait(1000));
      const _0x2677ef = await common.request(_0x56436a);
      if (_0x2677ef.data) {
        let _0x31d3a9 = _0x2677ef.data;
        if (_0x31d3a9.code === 0 && _0x31d3a9.data) {
          if (_0x31d3a9.data.bizCode === 0) {
            const _0x188168 = _0x31d3a9.data.result?.["score"] || 0;
            _0x27fbb9("【玩一玩奖票】" + _0x188168 + "奖票");
          } else {
            _0x27fbb9("【玩一玩奖票】活动火爆");
          }
        }
      }
      break;
    }
  }
  async function _0x1bf476() {
    let _0x4cb18e = {
      appId: "35fa0",
      functionId: "atop_channel_marketCard_cardInfo",
      appid: "jd-super-market",
      clientVersion: common.getLatestAppVersion(),
      client: "m",
      body: {
        babelChannel: "ttt9",
        isJdApp: "1",
        isWx: "0"
      },
      version: "4.7",
      ua: _0x1d22c2,
      t: true
    };
    const _0xcb80a1 = await H5st.getH5st(_0x4cb18e);
    let _0x187251 = _0xcb80a1.paramsData;
    const _0x15a890 = {
        url: "https://api.m.jd.com/atop_channel_marketCard_cardInfo",
        method: "POST",
        headers: {
          "User-Agent": _0x1d22c2,
          origin: "https://pro.m.jd.com",
          referer: "https://pro.m.jd.com/mall/active/3KehY4eAj3D1iLzFB7p5pb68qXkT/index.html",
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
          Cookie: _0x10c813,
          "x-rp-client": "h5_1.0.0"
        },
        body: _0x187251,
        timeout: 30000
      },
      _0x5596cd = 3;
    let _0x24dfe2 = 0;
    while (_0x24dfe2 < _0x5596cd) {
      _0x24dfe2 > 0 && (await $.wait(1000));
      const _0x306e07 = await common.request(_0x15a890);
      if (_0x306e07.data) {
        let _0x3958ab = _0x306e07.data;
        if (_0x3958ab.code === "0" && _0x3958ab.success) {
          if (_0x3958ab.data) {
            let _0x3cd277 = _0x3958ab?.["data"]?.["floorData"]?.["items"] || [];
            for (let _0x5a6e43 of _0x3cd277) {
              if (_0x5a6e43?.["marketCardVO"]) {
                let {
                    expirationGiftAmountDes = "",
                    balance: _0x1b6863
                  } = _0x5a6e43.marketCardVO,
                  _0x13aab3 = "【超市卡总额】" + _0x1b6863 + "元";
                expirationGiftAmountDes && (_0x13aab3 += "(" + expirationGiftAmountDes + ")");
                _0x27fbb9(_0x13aab3);
              }
            }
          }
        }
      }
      break;
    }
  }
  async function _0x54e760() {
    signParams = {
      pageIndex: 1,
      pageSize: "10",
      planType: "1",
      status: 1
    };
    params = {
      functionId: "getCommentWareList"
    };
    const _0x2887e0 = {
        url: "https://api.m.jd.com/client.action",
        method: "POST",
        headers: {
          Host: "api.m.jd.com",
          accept: "*/*",
          "user-agent": "okhttp/3.12.16;jdmall;android;version/12.2.2;build/168923;",
          "accept-language": "zh-Hans-JP;q=1, en-JP;q=0.9, zh-Hant-TW;q=0.8, ja-JP;q=0.7, en-US;q=0.6",
          Cookie: _0x10c813
        },
        params: params,
        data: common.queryStringToObject(await common.getSign("getCommentWareList", signParams)),
        timeout: 30000
      },
      _0x467895 = 3;
    let _0x2632e0 = 0;
    while (_0x2632e0 < _0x467895) {
      _0x2632e0 > 0 && (await $.wait(1000));
      const _0x32403d = await common.request(_0x2887e0);
      if (_0x32403d.data) {
        let _0x339b99 = _0x32403d.data;
        if (_0x339b99.code === "0") {
          let _0x47a11e = _0x339b99.commentWareListInfo,
            _0x5e55b2 = _0x47a11e.wait4CommentCount || 0,
            _0x4ec4b7 = _0x47a11e.commentFinishedCount || 0;
          _0x27fbb9("【订单评价】已评价[" + _0x4ec4b7 + "]，未评价[" + _0x5e55b2 + "]");
        }
      }
      break;
    }
  }
  async function _0x508eab() {
    signParams = {
      pageSize: "20",
      page: "1"
    };
    const _0x5bac48 = {
        url: "https://api.m.jd.com/client.action?functionId=jingBeanDetail",
        method: "POST",
        headers: {
          "User-Agent": _0x1d22c2,
          Host: "api.m.jd.com",
          "Content-Type": "application/x-www-form-urlencoded",
          Cookie: _0x10c813
        },
        body: common.queryStringToObject(await common.getSign("jingBeanDetail", signParams)),
        timeout: 30000
      },
      _0x57f7b2 = 3;
    let _0x708a13 = 0;
    while (_0x708a13 < _0x57f7b2) {
      _0x708a13 > 0 && (await $.wait(1000));
      const _0x461cb4 = await common.request(_0x5bac48);
      if (_0x461cb4.data) {
        let _0x4476bd = _0x461cb4.data;
        if (_0x4476bd.code === 0) {
          if (_0x4476bd.others && _0x4476bd.others.jingBeanExpiringInfo) {
            if (_0x4476bd.others.jingBeanExpiringInfo && Array.isArray(_0x4476bd.others.jingBeanExpiringInfo.detailList) && _0x4476bd.others.jingBeanExpiringInfo.detailList.length > 0) {
              let _0x5c3fcf = _0x4476bd.others.jingBeanExpiringInfo.detailList.reduce((_0x26094b, _0x4d7bc1) => _0x26094b + parseInt(_0x4d7bc1.amount), 0);
              _0x27fbb9("【过期京豆】(7日内过期" + _0x5c3fcf + "京豆):");
              _0x4476bd.others.jingBeanExpiringInfo.detailList.forEach(_0x41a4f0 => {
                _0x27fbb9("  " + _0x41a4f0.eventMassage + "[" + _0x41a4f0.amount + "京豆]");
              });
            }
          }
        }
      }
      break;
    }
  }
  async function _0x2ec741() {
    signParams = {
      fp: "-1",
      appToken: "apphongbao_token",
      childActivityUrl: "-1",
      country: "cn",
      openId: "-1",
      childActivityId: "-1",
      applicantErp: "-1",
      platformId: "appHongBao",
      isRvc: "-1",
      orgType: "2",
      activityType: "1",
      shshshfpb: "-1",
      platformToken: "apphongbao_token",
      organization: "JD",
      pageClickKey: "-1",
      platform: "1",
      eid: "-1",
      appId: "appHongBao",
      childActiveName: "-1",
      shshshfp: "-1",
      jda: "-1",
      extend: "-1",
      shshshfpa: "-1",
      activityArea: "-1",
      childActivityTime: "-1"
    };
    const _0x46c6f1 = {
        url: "https://api.m.jd.com/client.action?functionId=myhongbao_getUsableHongBaoList",
        method: "POST",
        headers: {
          "User-Agent": _0x1d22c2,
          Host: "api.m.jd.com",
          "Content-Type": "application/x-www-form-urlencoded",
          Cookie: _0x10c813
        },
        body: common.queryStringToObject(await common.getSign("myhongbao_getUsableHongBaoList", signParams)),
        timeout: 30000
      },
      _0xf0df11 = 3;
    let _0x2ef122 = 0;
    while (_0x2ef122 < _0xf0df11) {
      _0x2ef122 > 0 && (await $.wait(1000));
      const _0x2967e4 = await common.request(_0x46c6f1);
      if (_0x2967e4.data) {
        let _0x2e1aed = _0x2967e4.data;
        if (_0x2e1aed.resultCode === 200 && _0x2e1aed.success) {
          _0x498cfd = _0x2e1aed?.["count"] || 0;
          for (let _0x4a6e74 of _0x2e1aed?.["hongBaoList"] || []) {
            let _0x4fafd7 = parseInt(_0x4a6e74.balance * 100),
              _0x5ba1a8 = "";
            if (_0x4a6e74?.["orgLimitStr"]?.["includes"]("京东商城")) {
              _0x5ba1a8 = "jdapp";
            } else {
              if (_0x4a6e74?.["orgLimitStr"]?.["includes"]("京东购物小程序")) {
                _0x5ba1a8 = "minip";
              } else {
                _0x4a6e74?.["orgLimitStr"]?.["includes"]("京喜特价APP") && (_0x5ba1a8 = "lite");
              }
            }
            let _0xfada47 = KEY_TOTAL;
            if (_0x4a6e74.endTime < tomorrow) {
              _0xfada47 = KEY_TOMORROW;
            } else {
              _0x4a6e74.endTime < dayAfterTomorrow && (_0xfada47 = KEY_DAY_AFTER_TOMORROW);
            }
            _0x1a1317.total[KEY_TOTAL] += _0x4fafd7;
            _0x5ba1a8 ? _0x1a1317[_0x5ba1a8][KEY_TOTAL] += _0x4fafd7 : _0x1a1317.common[KEY_TOTAL] += _0x4fafd7;
            _0xfada47 > KEY_TOTAL && (_0x1a1317.total[_0xfada47] += _0x4fafd7, _0x5ba1a8 ? _0x1a1317[_0x5ba1a8][_0xfada47] += _0x4fafd7 : _0x1a1317.common[_0xfada47] += _0x4fafd7);
          }
          for (let _0x1634ec in _0x1a1317) {
            for (let _0x51f92a = 0; _0x51f92a < _0x1a1317[_0x1634ec].length; _0x51f92a++) {
              _0x1a1317[_0x1634ec][_0x51f92a] = Number(_0x1a1317[_0x1634ec][_0x51f92a] / 100).toFixed(2);
            }
          }
          await _0x61adc8();
        } else {
          console.log(_0x5aaccc + "获取红包列表失败," + _0x2e1aed.message);
        }
      }
      break;
    }
  }
  async function _0x61adc8() {
    _0x27fbb9("【总红包数量】[" + _0x1a1317.total[KEY_TOTAL] + "],【今晚过期】[" + _0x1a1317.total[KEY_TOMORROW] + "],【明晚过期】[" + _0x1a1317.total[KEY_DAY_AFTER_TOMORROW] + "]");
    _0x1a1317.common[0] && _0x27fbb9("【通用总红包】[" + _0x1a1317.common[KEY_TOTAL] + "],【今晚过期】[" + _0x1a1317.common[KEY_TOMORROW] + "],【明晚过期】[" + _0x1a1317.common[KEY_DAY_AFTER_TOMORROW] + "]");
    _0x1a1317.jdapp[0] && _0x27fbb9("【商城总红包】[" + _0x1a1317.jdapp[KEY_TOTAL] + "],【今晚过期】[" + _0x1a1317.jdapp[KEY_TOMORROW] + "],【明晚过期】[" + _0x1a1317.jdapp[KEY_DAY_AFTER_TOMORROW] + "]");
    _0x1a1317.lite[0] && _0x27fbb9("【特价版红包】[" + _0x1a1317.lite[KEY_TOTAL] + "],【今晚过期】[" + _0x1a1317.lite[KEY_TOMORROW] + "],【明晚过期】[" + _0x1a1317.lite[KEY_DAY_AFTER_TOMORROW] + "]");
    _0x1a1317.minip[0] && _0x27fbb9("【小程序红包】[" + _0x1a1317.minip[KEY_TOTAL] + "],【今晚过期】[" + _0x1a1317.minip[KEY_TOMORROW] + "],【明晚过期】[" + _0x1a1317.minip[KEY_DAY_AFTER_TOMORROW] + "]");
  }
  async function _0x1ebbdb(_0x4c565d) {
    time = new Date().getTime();
    let _0x24a273 = _0x4c565d || "";
    const _0x15ba6d = time + "e9c398ffcb2d4824b4d0a703e38yffdd";
    _0x24a273 = cryptoJS.MD5(_0x24a273 + _0x15ba6d).toString();
    return {
      t: time,
      encStr: _0x24a273
    };
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