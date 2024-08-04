//Sun Aug 04 2024 07:37:53 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("玩一玩兑换");
const bdy_0x4523c5 = $.isNode() ? require("./jdCookie.js") : "",
  bdy_0x4595e1 = $.isNode() ? require("./sendNotify") : "",
  bdy_0x3bab8b = require("./function/dylans"),
  bdy_0x18aaf7 = process.env.WYW_DBNUM ? process.env.WYW_DBNUM : "10";
let bdy_0x15b2ea = [],
  bdy_0xb570f7 = "",
  bdy_0xb3131b = 0,
  bdy_0x4ef3ff = {};
if (process.env.DY_PROXY) {
  try {
    require("https-proxy-agent");
    bdy_0x4ef3ff = require("./function/proxy.js");
    $.dget = bdy_0x4ef3ff.intoRequest($.get.bind($));
    $.dpost = bdy_0x4ef3ff.intoRequest($.post.bind($));
  } catch {
    $.log("未安装https-proxy-agent依赖，无法启用代理");
    $.dget = $.get;
    $.dpost = $.post;
  }
} else {
  $.dpost = $.post;
  $.dget = $.get;
}
if ($.isNode()) {
  Object.keys(bdy_0x4523c5).forEach(_0x47b5a7 => {
    bdy_0x15b2ea.push(bdy_0x4523c5[_0x47b5a7]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
} else {
  bdy_0x15b2ea = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...jsonfomat($.getdata("CookiesJD") || "[]").map(_0x1feea7 => _0x1feea7.cookie)].filter(_0x2bd01e => !!_0x2bd01e);
}
$.helpId = [];
$.fullId = [];
let bdy_0x2c2868 = process.env.WYW_DHID || "";
!(async () => {
  if (!bdy_0x15b2ea[0]) {
    const _0x5d8b70 = {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    };
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", _0x5d8b70);
    return;
  }
  console.log("当前版本：20240702");
  console.log("问题建议：https://t.me/dylan_jdpro");
  console.log("兑换ID变量 WYW_DHID");
  for (let _0x49203a = 0; _0x49203a < bdy_0x15b2ea.length; _0x49203a++) {
    bdy_0xb570f7 = bdy_0x15b2ea[_0x49203a];
    originCookie = bdy_0x15b2ea[_0x49203a];
    if (bdy_0xb570f7) {
      $.UserName = decodeURIComponent(bdy_0xb570f7.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0xb570f7.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x49203a + 1;
      $.hotFlag = false;
      $.nickName = "";
      $.isLogin = true;
      $.outFlag = false;
      $.isban = false;
      $.hasRisk = false;
      $.nostart = false;
      $.cashList = [];
      console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");
      bdy_0x526f6f();
      if (!$.isLogin) {
        const _0xa4771f = {
          "open-url": "https://bean.m.jd.com/bean/signIndex.action"
        };
        $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", _0xa4771f);
        if ($.isNode()) {
          await bdy_0x4595e1.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie");
        }
        continue;
      }
      await bdy_0x46676a();
      bdy_0x4ef3ff.swip && (await bdy_0x4ef3ff.swip());
      if ($.outFlag || $.nostart) {
        break;
      }
    }
  }
})().catch(_0x365b18 => {
  return $.logErr(_0x365b18);
}).finally(() => {
  return $.done();
});
async function bdy_0x5b8de7() {
  for (let _0xf59f71 = 0; _0xf59f71 < bdy_0x15b2ea.length; _0xf59f71++) {
    bdy_0xb570f7 = bdy_0x15b2ea[_0xf59f71];
    if (bdy_0xb570f7) {
      $.UserName = decodeURIComponent(bdy_0xb570f7.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0xb570f7.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0xf59f71 + 1;
      console.log("\n-------开始【账号" + $.index + "】" + ($.nickName || $.UserName) + "------\n");
      bdy_0x526f6f();
      $.nonum = false;
      $.fullId.length != 0 && ($.helpId = $.helpId.filter(_0x56593a => !$.fullId.includes(_0x56593a)), $.fullId = []);
      for (let _0x2bca6e of $.helpId) {
        $.itemId = _0x2bca6e;
        console.log("去助力 --> " + $.itemId);
        await bdy_0x8645be("wanyiwan_assist");
        if ($.nonum) {
          break;
        }
        await $.wait(parseInt(Math.random() * 1000 + 2000, 10));
      }
      if ($.outFlag) {
        break;
      }
    }
  }
}
async function bdy_0x46676a() {
  try {
    await bdy_0x8645be("wanyiwan_exchange_page");
    console.log("\n账号奖票余额 " + $.score);
    bdy_0x2c2868 == "" && (console.log("\n请设置兑换ID"), process.exit());
    if (!$.isLogin) {
      console.log("账号未登录");
      return;
    }
    let _0x4b04c5 = $.moreExchanges.find(_0x166544 => _0x166544.assignmentId == bdy_0x2c2868);
    _0x4b04c5 === undefined && (console.log("没有匹配到兑换目标，请检查设置的ID是否正确！"), process.exit());
    $.assignmentId = _0x4b04c5.assignmentId;
    $.type = _0x4b04c5.rewardType;
    $.index == 1 && console.log("\n已设置兑换" + _0x4b04c5.rewardName);
    if ($.score < _0x4b04c5.exchangeScore) {
      console.log("奖票余额不足，不进行兑换!!");
    } else {
      $.type == 4 ? await bdy_0x8645be("wanyiwan_withdraw") : await bdy_0x8645be("wanyiwan_exchange");
    }
    await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
    for (let _0x40e01d = 0; _0x40e01d < 1; _0x40e01d++) {
      console.log("\n查询提现...");
      await bdy_0x8645be("superRedBagList", _0x40e01d);
      if ($.bagList.length == 0) {
        break;
      }
      for (let _0x59c8fa of $.bagList) {
        if (_0x59c8fa.prizeType == 4) {
          $.txfail = false;
          if (_0x59c8fa.state == 0 || _0x59c8fa.state == 2) {
            console.log("提现 --- " + _0x59c8fa.amount);
            await bdy_0x8645be("apCashWithDraw", _0x59c8fa);
            $.txfail && $.failtxlist.push(_0x59c8fa);
            await $.wait(2000);
          } else {
            _0x59c8fa.state == 8;
          }
        }
      }
      await $.wait(parseInt(Math.random() * 1000 + 2000, 10));
    }
    await $.wait(parseInt(Math.random() * 1000 + 2000, 10));
  } catch (_0x162db9) {
    console.log(_0x162db9);
  }
}
async function bdy_0x8645be(_0x56301c, ..._0x41f9bd) {
  if ($.outFlag || $.isban) {
    return;
  }
  let _0x5460b4 = "",
    _0x3c85ac,
    _0x253d55,
    _0x4bbedc = "post",
    _0x25b9d9 = "https://api.m.jd.com/client.action",
    _0xd29725 = "signed_wh5";
  switch (_0x56301c) {
    case "wanyiwan_sign":
      const _0x15bccc = {
        version: 1
      };
      _0x5460b4 = _0x15bccc;
      _0x3c85ac = "d12dd";
      _0x253d55 = "wanyiwan_sign";
      break;
    case "wanyiwan_exchange_page":
      const _0x113c6d = {
        version: 1
      };
      _0x5460b4 = _0x113c6d;
      _0x253d55 = "wanyiwan_exchange_page";
      break;
    case "apTaskList":
      _0x25b9d9 = "https://api.m.jd.com/api?functionId=apTaskList&body=%7B%22linkId%22%3A%22Fl1LmxG_f0poD7w1ycZqnw%22%7D&t=1715170975269&appid=activities_platform&client=android&clientVersion=6.24.0&loginType=2&loginWQBiz=wegame&h5st=null&build=22779&screen=393*873&networkType=wifi&eufv=1&cthr=1";
      _0x4bbedc = "get";
      break;
    case "wanyiwan_exchange":
      const _0x219f95 = {
        assignmentId: $.assignmentId,
        type: $.type,
        version: 1
      };
      _0x5460b4 = _0x219f95;
      _0x253d55 = "wanyiwan_exchange";
      break;
    case "wanyiwan_withdraw":
      const _0x2480c2 = {
        assignmentId: $.assignmentId,
        type: $.type,
        version: 1
      };
      _0x5460b4 = _0x2480c2;
      _0x253d55 = "wanyiwan_withdraw";
      break;
    case "endTask":
      const _0x211558 = {
        itemId: $.itemId,
        taskType: $.taskType,
        assignmentId: $.encryptAssignmentId,
        actionType: 0,
        version: 1
      };
      _0x5460b4 = _0x211558;
      _0x3c85ac = "89db2";
      _0x253d55 = "wanyiwan_do_task";
      break;
    case "award":
      const _0x368386 = {
        taskType: $.taskType,
        assignmentId: $.encryptAssignmentId,
        version: 1
      };
      _0x5460b4 = _0x368386;
      _0x253d55 = "wanyiwan_task_receive_award";
      break;
    case "wanyiwan_assist":
      const _0x2f729d = {
        inviteCode: $.itemId,
        version: 1
      };
      _0x5460b4 = _0x2f729d;
      _0x3c85ac = "ba505";
      _0x253d55 = "wanyiwan_assist";
      break;
    case "turnHappyHome":
      _0x25b9d9 = "https://api.m.jd.com/api";
      const _0x583f95 = {
        linkId: "CDv-TaCmVcD0sxAI_HE2RQ"
      };
      _0x5460b4 = _0x583f95;
      _0xd29725 = "activities_platform";
      _0x253d55 = "turnHappyHome";
      break;
    case "turnHappyDouble":
      _0x25b9d9 = "https://api.m.jd.com/api";
      _0x5460b4 = {
        linkId: "CDv-TaCmVcD0sxAI_HE2RQ",
        turnNum: parseInt(bdy_0x18aaf7)
      };
      _0x3c85ac = "614f1";
      _0xd29725 = "activities_platform";
      _0x253d55 = "turnHappyDouble";
      break;
    case "turnHappyReceive":
      _0x25b9d9 = "https://api.m.jd.com/api";
      const _0xb4dba0 = {
        linkId: "CDv-TaCmVcD0sxAI_HE2RQ"
      };
      _0x5460b4 = _0xb4dba0;
      _0x3c85ac = "25fac";
      _0xd29725 = "activities_platform";
      _0x253d55 = "turnHappyReceive";
      break;
    case "superRedBagHome":
      _0x25b9d9 = "https://api.m.jd.com/api";
      const _0x5a8e3a = {
        linkId: "aE-1vg6_no2csxgXFuv3Kg"
      };
      _0x5460b4 = _0x5a8e3a;
      _0x3c85ac = "5be1b";
      _0xd29725 = "activity_platform_se";
      _0x253d55 = "superRedBagHome";
      break;
    case "superRedBagDraw":
      _0x25b9d9 = "https://api.m.jd.com/api";
      const _0x3296a4 = {
        linkId: "aE-1vg6_no2csxgXFuv3Kg"
      };
      _0x5460b4 = _0x3296a4;
      _0x3c85ac = "89cfe";
      _0xd29725 = "activity_platform_se";
      _0x253d55 = "superRedBagDraw";
      break;
    case "apCashWithDraw":
      _0x25b9d9 = "https://api.m.jd.com/api";
      const _0x3761f4 = {
        id: _0x41f9bd[0].id,
        business: "crazyPlay",
        poolBaseId: _0x41f9bd[0].poolBaseId,
        prizeGroupId: _0x41f9bd[0].prizeGroupId,
        prizeBaseId: _0x41f9bd[0].prizeBaseId,
        prizeType: 4,
        activityId: "1999"
      };
      const _0x223052 = {
        businessSource: "NONE",
        base: _0x3761f4,
        linkId: "8u9Bktjo92LocBHib9PoHQ",
        channel: "1"
      };
      _0x5460b4 = _0x223052;
      _0x3c85ac = "73bca";
      _0xd29725 = "activities_platform";
      _0x253d55 = "apCashWithDraw";
      break;
    case "superRedBagList":
      _0x25b9d9 = "http://api.m.jd.com/api";
      const _0x4da901 = {
        pageNum: 1,
        pageSize: 20,
        linkId: "8u9Bktjo92LocBHib9PoHQ",
        associateLinkId: "",
        business: "crazyPlay"
      };
      _0x5460b4 = _0x4da901;
      _0x3c85ac = "f2b1d";
      _0xd29725 = "activities_platform";
      _0x253d55 = "superRedBagList";
      break;
    default:
      console.log("错误" + _0x56301c);
  }
  if (_0x3c85ac) {
    let _0xa2208 = {
      appId: _0x3c85ac,
      functionId: _0x253d55,
      body: _0x5460b4,
      appid: _0xd29725,
      clientVersion: $.UA.split(";")[2],
      client: "ios",
      user: $.UserName,
      t: Date.now(),
      ua: $.UA
    };
    _0x5460b4 = await bdy_0x3bab8b.getbody(_0xa2208);
    if (!_0x5460b4) {
      return;
    }
  } else {
    _0x5460b4 && (_0x5460b4 = "functionId=" + _0x253d55 + "&body=" + encodeURIComponent(JSON.stringify(_0x5460b4)) + "&t=" + Date.now() + "&appid=" + _0xd29725 + "&client=ios&" + $.UA.split(";")[2] + "&cthr=1&networkType=wifi");
  }
  let _0x177bfc = bdy_0x406fe1(_0x25b9d9, _0x5460b4);
  return new Promise(async _0x4ab658 => {
    $["d" + _0x4bbedc](_0x177bfc, async (_0xfb4151, _0x34f899, _0x186b42) => {
      try {
        if (_0xfb4151) {
          if (_0x34f899 && typeof _0x34f899.statusCode != "undefined") {
            if (_0x34f899.statusCode == 493) {
              if (bdy_0xb3131b < 6) {
                bdy_0xb3131b++;
                await bdy_0x8645be(_0x56301c);
                return;
              }
              console.log("ip可能被限制，过10分钟后再执行脚本\n");
              $.outFlag = true;
            }
          }
          console.log("" + $.toStr(_0xfb4151, _0xfb4151));
        } else {
          if (_0x186b42.includes("doctype") && bdy_0xb3131b < 6) {
            bdy_0xb3131b++;
            await bdy_0x8645be(_0x56301c);
            return;
          }
          bdy_0xb3131b = 0;
          bdy_0x3ad61f(_0x56301c, _0x186b42);
        }
      } catch (_0x3c4911) {
        console.log(_0x3c4911, _0x34f899);
      } finally {
        _0x4ab658();
      }
    });
  });
}
function bdy_0x1d0ebd(_0x1791c4) {
  let _0x17e765 = "";
  switch (type) {
    case [_0x17e765]:
      const _0x53ac58 = {
        ed: ed
      };
      _0xf1f6le = _0x53ac58;
      break;
    case [_0x17e765]:
      const _0x27e080 = {
        bd: bd
      };
      _0xf1f6lc = _0x27e080;
      break;
    case [_0x17e765]:
      const _0x73b915 = {
        ed: ed
      };
      _0xf1f6lf = _0x73b915;
      break;
    case [_0x17e765]:
      const _0x529147 = {
        ed: ed
      };
      _0xf1f6lg = _0x529147;
      break;
    case [_0x17e765]:
      const _0x1e8eb9 = {
        ed: ed
      };
      _0xf1f6lv = _0x1e8eb9;
      break;
  }
}
async function bdy_0x3ad61f(_0x34f34d, _0x592fca) {
  let _0x421fbc = "";
  try {
    _0x421fbc = JSON.parse(_0x592fca);
  } catch (_0x4689f4) {
    console.log(_0x34f34d + " 执行任务异常");
  }
  try {
    switch (_0x34f34d) {
      case "award":
        _0x421fbc.code == 0 ? _0x421fbc.data.bizCode == 0 ? console.log("任务完成，获得" + _0x421fbc.data.result.rewardCount + "奖票 🎫") : console.log(_0x421fbc.data.bizMsg) : console.log(_0x421fbc.message);
        break;
      case "wanyiwan_withdraw":
      case "wanyiwan_exchange":
        if (_0x421fbc.code == 0) {
          if (_0x421fbc.data.bizCode == 0) {
            console.log("兑换成功！");
          } else {
            console.log(_0x421fbc.data.bizMsg);
          }
        } else {
          console.log(_0x421fbc.message);
        }
        break;
      case "wanyiwan_exchange_page":
        _0x421fbc.code == 0 ? _0x421fbc.data.bizCode == 0 ? ($.isLogin = _0x421fbc.data.result.isLogin || false, $.moreExchanges = _0x421fbc.data.result.moreExchanges, $.score = _0x421fbc.data.result.score, ($.index == 1 && console.log("可兑换列表："), _0x421fbc.data.result.moreExchanges.forEach(_0x2c0f22 => {
          console.log("" + _0x2c0f22.rewardName + (_0x2c0f22.hasStock ? "(有库存)" : "(无库存)") + "|需" + _0x2c0f22.exchangeScore + "奖票|兑换ID=> " + _0x2c0f22.assignmentId);
        }))) : console.log(_0x421fbc.data.bizMsg) : console.log(_0x421fbc.message);
        break;
      case "wanyiwan_assist":
        if (_0x421fbc.code == 0) {
          if (_0x421fbc.data.bizCode == 0) {
            console.log("✔️ 助力成功");
            $.nonum = true;
          } else {
            if (_0x421fbc.data.bizMsg.includes("太多人") || _0x421fbc.data.bizMsg.includes("重复")) {
              console.log("❌", _0x421fbc.data.bizMsg);
              $.nonum = true;
            } else {
              _0x421fbc.data.bizMsg.includes("已经完成") ? (console.log("❌", _0x421fbc.data.bizMsg), $.fullId.push($.itemId)) : console.log("❌", _0x421fbc.data.bizMsg);
            }
          }
        } else {
          console.log(_0x421fbc.message);
        }
        break;
      case "wanyiwan_home":
        _0x421fbc.code == 0 ? _0x421fbc.data.bizCode == 0 ? (_0x421fbc.data.result.popWindows.length != 0 && console.log("获得新手奖励：", _0x421fbc.data.result.popWindows[0].getScore, "奖票 🎫"), console.log("当前奖票总量：" + _0x421fbc.data.result.score + " 🎫"), $.isLogin = _0x421fbc.data?.["result"]?.["isLogin"], $.taskList = _0x421fbc.data?.["result"]?.["taskBoard"] || [], $.signstatus = _0x421fbc.data?.["result"]?.["signBoard"]?.["status"] || 0) : console.log(_0x421fbc.data.bizMsg) : console.log(_0x421fbc.message);
        break;
      case "superRedBagList":
        _0x421fbc.success ? $.bagList = _0x421fbc.data.items || [] : console.log(_0x421fbc.errMsg);
        break;
      case "apCashWithDraw":
        if (_0x421fbc.code == 0) {
          if (_0x421fbc.data.message.indexOf("待发放") > -1) {
            console.log(_0x421fbc.data.message);
            $.txfail = true;
          } else {
            if (_0x421fbc.data.message.includes("上限")) {
              console.log(_0x421fbc.data.message);
              $.txfail = false;
            } else {
              if (_0x421fbc.data.message.includes("提现中")) {
                console.log("提现成功");
                $.txfail = false;
              } else {
                console.log(_0x421fbc.data.message);
              }
            }
          }
        } else {
          console.log(_0x421fbc.errMsg);
        }
        break;
      case "superRedBagHome":
        _0x421fbc.success ? ($.sceneStatus = _0x421fbc.data.sceneStatus, $.nextLeftTime = _0x421fbc.data.nextLeftTime) : console.log(_0x421fbc.errMsg);
        break;
      case "superRedBagDraw":
        if (_0x421fbc.success) {
          $.shakeLeftTime = _0x421fbc.data.shakeLeftTime;
          const {
            prizeDrawVo = ""
          } = _0x421fbc.data;
          if (prizeDrawVo) {
            switch (prizeDrawVo.prizeType) {
              case 24:
                console.log("获得：" + prizeDrawVo.amount + "票奖 🎫");
                $.sucdraw++;
                break;
              case 1:
                console.log("获得:" + prizeDrawVo.prizeConfigName);
                break;
              case 4:
                console.log("获得:" + prizeDrawVo.amount + "现金💰️");
                const _0x294da7 = {
                  id: prizeDrawVo.id,
                  poolBaseId: 41486,
                  prizeGroupId: prizeDrawVo.prizeGroupId,
                  prizeBaseId: prizeDrawVo.prizeBaseId,
                  prizeType: prizeDrawVo.prizeType,
                  amount: prizeDrawVo.amount
                };
                $.cashList.push(_0x294da7);
                break;
              case 3:
                console.log("获得:" + prizeDrawVo.amount + "京豆🥔");
                break;
              case 2:
                console.log("获得:" + prizeDrawVo.amount + "红包🧧");
                break;
              default:
                console.log(JSON.stringify(prizeDrawVo));
                break;
            }
          } else {
            console.log(_0x592fca);
          }
        } else {
          console.log(_0x421fbc.errMsg);
        }
        break;
      case "startTask":
      case "turnHappyReceive":
      case "endTask":
        break;
      default:
        console.log(_0x34f34d + " -> " + _0x592fca);
    }
    typeof _0x421fbc == "object" && _0x421fbc.errorMessage && _0x421fbc.errorMessage.indexOf("火爆") > -1 && ($.hotFlag = true);
  } catch (_0x2ab8e8) {
    console.log(_0x34f34d + " " + _0x2ab8e8);
  }
}
function bdy_0x406fe1(_0x2b3609, _0x1e07d1) {
  const _0x41cdb6 = {
    Accept: "application/json, text/plain, */*",
    "Accept-Encoding": "gzip, deflate, br",
    Origin: "https://pro.m.jd.com",
    Referer: "https://pro.m.jd.com/",
    Cookie: bdy_0xb570f7,
    "User-Agent": $.UA
  };
  const _0x491388 = {
    url: _0x2b3609,
    headers: _0x41cdb6,
    timeout: 30000,
    ...(_0x1e07d1 ? {
      body: _0x1e07d1
    } : {})
  };
  return _0x491388;
}
async function bdy_0x526f6f() {
  $.UA = "jdapp;iPhone;10.1.5;13.1.2;" + bdy_0x33ff6c(40) + ";network/wifi;model/iPhone8,1;addressid/2308460611;appBuild/167814;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1";
}
function bdy_0x33ff6c(_0x5f373c) {
  _0x5f373c = _0x5f373c || 32;
  let _0x2cc282 = "abcdef0123456789",
    _0x35353e = _0x2cc282.length,
    _0x5e3f1c = "";
  for (i = 0; i < _0x5f373c; i++) {
    _0x5e3f1c += _0x2cc282.charAt(Math.floor(Math.random() * _0x35353e));
  }
  return _0x5e3f1c;
}
function bdy_0x31b7d1(_0xe97274) {
  if (typeof _0xe97274 == "string") {
    try {
      return JSON.parse(_0xe97274);
    } catch (_0x232497) {
      console.log(_0x232497);
      $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
      return [];
    }
  }
}
async function bdy_0x34cea0() {
  if (!$.joinVenderId) {
    return;
  }
  return new Promise(async _0x4b1309 => {
    $.errorJoinShop = "活动太火爆，请稍后再试";
    $.shopactivityId = "";
    let _0x3c26aa = {
      venderId: "" + $.joinVenderId + "",
      shopId: "" + $.joinVenderId + "",
      bindByVerifyCodeFlag: 1,
      registerExtend: {},
      writeChildFlag: 0,
      channel: 406
    };
    $.shopactivityId == "" && delete _0x3c26aa.activityId;
    const _0x5a1f6f = {
      appId: "27004",
      fn: "bindWithVender",
      body: _0x3c26aa,
      apid: "shopmember_m_jd_com",
      ver: "9.2.0",
      cl: "H5",
      user: $.UserName,
      code: 0,
      ua: $.UA
    };
    _0x3c26aa = await dyy.getbody(_0x5a1f6f);
    const _0x16656c = {
      accept: "*/*",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      cookie: bdy_0xb570f7,
      origin: "https://shopmember.m.jd.com/",
      "user-agent": $.UA
    };
    const _0x4dde7c = {
      url: "https://api.m.jd.com/client.action?" + _0x3c26aa + "&uuid=88888",
      headers: _0x16656c,
      timeout: 30000
    };
    $.dget(_0x4dde7c, async (_0x30c5d2, _0x7aed2e, _0x53a685) => {
      try {
        _0x53a685 = _0x53a685 && _0x53a685.match(/jsonp_.*?\((.*?)\);/) && _0x53a685.match(/jsonp_.*?\((.*?)\);/)[1] || _0x53a685;
        let _0x2f2a25 = $.toObj(_0x53a685, _0x53a685);
        if (_0x2f2a25 && typeof _0x2f2a25 == "object") {
          if (_0x2f2a25 && _0x2f2a25.success === true) {
            console.log("    " + _0x2f2a25.message);
            $.errorJoinShop = _0x2f2a25.message;
            if (_0x2f2a25.result && _0x2f2a25.result.giftInfo) {
              for (let _0x204292 of _0x2f2a25.result.giftInfo.giftList) {
                console.log("入会获得:" + _0x204292.discountString + _0x204292.prizeName + _0x204292.secondLineDesc);
              }
            }
          } else {
            _0x2f2a25 && typeof _0x2f2a25 == "object" && _0x2f2a25.message ? ($.errorJoinShop = _0x2f2a25.message, console.log("" + (_0x2f2a25.message || ""))) : console.log(_0x53a685);
          }
        } else {
          console.log(_0x53a685);
        }
      } catch (_0x1ef65d) {
        $.logErr(_0x1ef65d, _0x7aed2e);
      } finally {
        _0x4b1309();
      }
    });
  });
}
async function bdy_0x55440a() {
  return new Promise(async _0x3d3b2c => {
    const _0x4df16f = {
      venderId: $.joinVenderId,
      payUpShop: true,
      queryVersion: "10.5.2",
      appid: "ef79a",
      needSecurity: true,
      bizId: "shop_view_app",
      channel: 406
    };
    let _0x6b74bb = _0x4df16f;
    const _0x16395e = {
      appId: "ef79a",
      fn: "getShopOpenCardInfo",
      body: _0x6b74bb,
      apid: "jd_shop_member",
      ver: "9.2.0",
      cl: "H5",
      user: $.UserName,
      code: 0,
      ua: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
    };
    _0x6b74bb = await dyy.getbody(_0x16395e);
    const _0x169130 = {
      accept: "*/*",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      cookie: bdy_0xb570f7,
      origin: "https://shopmember.m.jd.com/",
      "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
    };
    const _0x147376 = {
      url: "https://api.m.jd.com/client.action?" + _0x6b74bb + "&uuid=88888",
      headers: _0x169130,
      timeout: 60000
    };
    $.get(_0x147376, async (_0x5364bb, _0x5ba711, _0x1b620f) => {
      try {
        _0x1b620f = _0x1b620f && _0x1b620f.match(/jsonp_.*?\((.*?)\);/) && _0x1b620f.match(/jsonp_.*?\((.*?)\);/)[1] || _0x1b620f;
        let _0x27b578 = $.toObj(_0x1b620f, _0x1b620f);
        _0x27b578 && typeof _0x27b578 == "object" ? _0x27b578 && _0x27b578.success == true && (console.log("去加入 -> " + (_0x27b578.result[0].shopMemberCardInfo.venderCardName || "")), $.shopactivityId = _0x27b578.result[0].interestsRuleList && _0x27b578.result[0].interestsRuleList[0] && _0x27b578.result[0].interestsRuleList[0].interestsInfo && _0x27b578.result[0].interestsRuleList[0].interestsInfo.activityId || "") : console.log(_0x1b620f);
      } catch (_0x3fbf72) {
        $.logErr(_0x3fbf72, _0x5ba711);
      } finally {
        _0x3d3b2c();
      }
    });
  });
}
function bdy_0x575f97(_0x375fd0, _0x4c7128) {
  return Math.floor(Math.random() * (_0x4c7128 - _0x375fd0)) + _0x375fd0;
}
function bdy_0x23212d(_0x3305c0 = +new Date()) {
  var _0x40acff = new Date(_0x3305c0 + 28800000);
  return _0x40acff.toJSON().substr(0, 19).replace("T", " ").replace(/-/g, "/");
}
function bdy_0x1fa383() {
  return new Promise(_0x224286 => {
    const _0xeaab2b = {
      Cookie: bdy_0xb570f7,
      referer: "https://h5.m.jd.com/",
      "User-Agent": $.UA
    };
    const _0x3f41f7 = {
      url: "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      headers: _0xeaab2b,
      timeout: 10000
    };
    $.get(_0x3f41f7, (_0x46b6e3, _0x3ea683, _0x3ea654) => {
      try {
        if (_0x3ea654) {
          _0x3ea654 = JSON.parse(_0x3ea654);
          if (!(_0x3ea654.islogin === "1")) {
            _0x3ea654.islogin === "0" && ($.isLogin = false);
          }
        }
      } catch (_0x2534e2) {
        console.log(_0x2534e2);
      } finally {
        _0x224286();
      }
    });
  });
}
function Env(o, t) {
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
      return new Promise((r, i) => {
        s.call(this, t, (t, e, s) => {
          t ? i(t) : r(e);
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
      this.logLevels = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
      };
      this.logLevelPrefixs = {
        debug: "[DEBUG] ",
        info: "[INFO] ",
        warn: "[WARN] ",
        error: "[ERROR] "
      };
      this.logLevel = "info";
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    getEnv() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : void 0;
    }
    isNode() {
      return "Node.js" === this.getEnv();
    }
    isQuanX() {
      return "Quantumult X" === this.getEnv();
    }
    isSurge() {
      return "Surge" === this.getEnv();
    }
    isLoon() {
      return "Loon" === this.getEnv();
    }
    isShadowrocket() {
      return "Shadowrocket" === this.getEnv();
    }
    isStash() {
      return "Stash" === this.getEnv();
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null, ...s) {
      try {
        return JSON.stringify(t, ...s);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      if (this.getdata(t)) {
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
      return new Promise(r => {
        this.get({
          url: t
        }, (t, e, s) => r(s));
      });
    }
    runScript(a, o) {
      return new Promise(r => {
        let t = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        t = t && t.replace(/\n/g, "").trim();
        var e = (e = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout")) ? +e : 20,
          [s, i] = (e = o && o.timeout ? o.timeout : e, t.split("@"));
        this.post({
          url: `http://${i}/v1/scripting/evaluate`,
          body: {
            script_text: a,
            mock_type: "cron",
            timeout: e
          },
          headers: {
            "X-Key": s,
            Accept: "*/*"
          },
          timeout: e
        }, (t, e, s) => r(s));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      this.fs = this.fs || require("fs");
      this.path = this.path || require("path");
      var t = this.path.resolve(this.dataFile),
        e = this.path.resolve(process.cwd(), this.dataFile),
        s = this.fs.existsSync(t),
        r = !s && this.fs.existsSync(e);
      if (!s && !r) {
        return {};
      }
      r = s ? t : e;
      try {
        return JSON.parse(this.fs.readFileSync(r));
      } catch (t) {
        return {};
      }
    }
    writedata() {
      var t, e, s, r, i;
      this.isNode() && (this.fs = this.fs || require("fs"), this.path = this.path || require("path"), t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), r = !(s = this.fs.existsSync(t)) && this.fs.existsSync(e), i = JSON.stringify(this.data), !s && r ? this.fs.writeFileSync(e, i) : this.fs.writeFileSync(t, i));
    }
    lodash_get(t, e, s) {
      let r = t;
      for (const t of e.replace(/\[(\d+)\]/g, ".$1").split(".")) if (r = Object(r)[t], void 0 === r) {
        return s;
      }
      return r;
    }
    lodash_set(t, r, e) {
      Object(t) === t && ((r = Array.isArray(r) ? r : r.toString().match(/[^.[\]]+/g) || []).slice(0, -1).reduce((t, e, s) => Object(t[e]) === t[e] ? t[e] : t[e] = Math.abs(r[s + 1]) >> 0 == +r[s + 1] ? [] : {}, t)[r[r.length - 1]] = e);
      return t;
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        var [, s, r] = /^@(.*?)\.(.*?)$/.exec(t);
        if (s = s ? this.getval(s) : "") {
          try {
            const t = JSON.parse(s);
            e = t ? this.lodash_get(t, r, "") : e;
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
        var [, r, i] = /^@(.*?)\.(.*?)$/.exec(e),
          a = this.getval(r),
          a = r ? "null" === a ? null : a || "{}" : "{}";
        try {
          const e = JSON.parse(a);
          this.lodash_set(e, i, t);
          s = this.setval(JSON.stringify(e), r);
        } catch (e) {
          this.lodash_set(a = {}, i, t);
          s = this.setval(JSON.stringify(a), r);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(t);
        case "Quantumult X":
          return $prefs.valueForKey(t);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[t];
        default:
          return this.data && this.data[t] || null;
      }
    }
    setval(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(t, e);
        case "Quantumult X":
          return $prefs.setValueForKey(t, e);
        case "Node.js":
          this.data = this.loaddata();
          this.data[e] = t;
          this.writedata();
          return !0;
        default:
          return this.data && this.data[e] || null;
      }
    }
    initGotEnv(t) {
      this.got = this.got || require("got");
      this.cktough = this.cktough || require("tough-cookie");
      this.ckjar = this.ckjar || new this.cktough.CookieJar();
      t && (t.headers = t.headers || {}, t) && (t.headers = t.headers || {}, void 0 === t.headers.cookie) && void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar);
    }
    tmout() {
      return new Promise((t, e) => {
        this.tmoutId = setTimeout(() => {
          this.prms.cancel();
          e({
            message: "timemout",
            response: ""
          });
        }, 50000);
      });
    }
    get(t, a = () => {}) {
      switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          }));
          $httpClient.get(t, (t, e, s) => {
            !t && e && (e.body = s, e.statusCode = e.status || e.statusCode, e.status = e.statusCode);
            a(t, e, s);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            var {
              statusCode: t,
              statusCode: e,
              headers: s,
              body: r,
              bodyBytes: i
            } = t;
            a(null, {
              status: t,
              statusCode: e,
              headers: s,
              body: r,
              bodyBytes: i
            }, r, i);
          }, t => a(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          this.initGotEnv(t);
          this.prms = this.got(t).on("redirect", (t, e) => {
            try {
              var s;
              t.headers["set-cookie"] && ((s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString()) && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar);
            } catch (t) {
              this.logErr(t);
            }
          });
          Promise.race([this.prms, this.tmout()]).then(t => {
            var {
              statusCode: t,
              statusCode: e,
              headers: s,
              rawBody: r,
              body: i
            } = t;
            a(null, {
              status: t,
              statusCode: e,
              headers: s,
              rawBody: r,
              body: i
            }, i);
            clearTimeout(this.tmoutId);
          }, t => {
            var {
              message: t,
              response: e
            } = t;
            clearTimeout(this.tmoutId);
            a(t, e, e && e.body);
          });
      }
    }
    post(t, a = () => {}) {
      var e = t.method ? t.method.toLocaleLowerCase() : "post";
      switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          }));
          $httpClient[e](t, (t, e, s) => {
            !t && e && (e.body = s, e.statusCode = e.status || e.statusCode, e.status = e.statusCode);
            a(t, e, s);
          });
          break;
        case "Quantumult X":
          t.method = e;
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            var {
              statusCode: t,
              statusCode: e,
              headers: s,
              body: r,
              bodyBytes: i
            } = t;
            a(null, {
              status: t,
              statusCode: e,
              headers: s,
              body: r,
              bodyBytes: i
            }, r, i);
          }, t => a(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          this.initGotEnv(t);
          var {
            url: s,
            ...r
          } = t;
          this.prms = this.got[e](s, r);
          Promise.race([this.prms, this.tmout()]).then(t => {
            var {
              statusCode: t,
              statusCode: e,
              headers: s,
              rawBody: r,
              body: i
            } = t;
            a(null, {
              status: t,
              statusCode: e,
              headers: s,
              rawBody: r,
              body: i
            }, i);
            clearTimeout(this.tmoutId);
          }, t => {
            var {
              message: t,
              response: e
            } = t;
            clearTimeout(this.tmoutId);
            a(t, e, e && e.body);
          });
      }
    }
    time(t, e = null) {
      var s,
        r = {
          "M+": (e = e ? new Date(e) : new Date()).getMonth() + 1,
          "d+": e.getDate(),
          "H+": e.getHours(),
          "m+": e.getMinutes(),
          "s+": e.getSeconds(),
          "q+": Math.floor((e.getMonth() + 3) / 3),
          S: e.getMilliseconds()
        };
      for (s in /(y+)/.test(t) && (t = t.replace(RegExp.$1, (e.getFullYear() + "").substr(4 - RegExp.$1.length))), r) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? r[s] : ("00" + r[s]).substr(("" + r[s]).length)));
      return t;
    }
    queryStr(e) {
      let s = "";
      for (const r in e) {
        let t = e[r];
        null != t && "" !== t && ("object" == typeof t && (t = JSON.stringify(t)), s += `${r}=${t}&`);
      }
      return s = s.substring(0, s.length - 1);
    }
    msg(t = o, e = "", s = "", r = {}) {
      var i,
        a = r => {
          const {
            $open: t,
            $copy: e,
            $media: i,
            $mediaMime: a
          } = r;
          switch (typeof r) {
            case void 0:
              return r;
            case "string":
              switch (this.getEnv()) {
                case "Surge":
                case "Stash":
                default:
                  return {
                    url: r
                  };
                case "Loon":
                case "Shadowrocket":
                  return r;
                case "Quantumult X":
                  return {
                    "open-url": r
                  };
                case "Node.js":
                  return;
              }
            case "object":
              switch (this.getEnv()) {
                case "Surge":
                case "Stash":
                case "Shadowrocket":
                default:
                  var o = {},
                    s = r.openUrl || r.url || r["open-url"] || t;
                  if (s && Object.assign(o, {
                    action: "open-url",
                    url: s
                  }), (s = r["update-pasteboard"] || r.updatePasteboard || e) && Object.assign(o, {
                    action: "clipboard",
                    text: s
                  }), i) {
                    let t, e, s;
                    if (i.startsWith("http")) {
                      t = i;
                    } else {
                      if (i.startsWith("data:")) {
                        const [r] = i.split(";"),
                          [, a] = i.split(",");
                        e = a;
                        s = r.replace("data:", "");
                      } else {
                        e = i;
                        s = (t => {
                          var e,
                            s = {
                              JVBERi0: "application/pdf",
                              R0lGODdh: "image/gif",
                              R0lGODlh: "image/gif",
                              iVBORw0KGgo: "image/png",
                              "/9j/": "image/jpg"
                            };
                          for (e in s) if (0 === t.indexOf(e)) {
                            return s[e];
                          }
                          return null;
                        })(i);
                      }
                    }
                    Object.assign(o, {
                      "media-url": t,
                      "media-base64": e,
                      "media-base64-mime": a ?? s
                    });
                  }
                  Object.assign(o, {
                    "auto-dismiss": r["auto-dismiss"],
                    sound: r.sound
                  });
                  return o;
                case "Loon":
                  {
                    const e = {};
                    (s = r.openUrl || r.url || r["open-url"] || t) && Object.assign(e, {
                      openUrl: s
                    });
                    var n = r.mediaUrl || r["media-url"];
                    (n = i?.startsWith("http") ? i : n) && Object.assign(e, {
                      mediaUrl: n
                    });
                    console.log(JSON.stringify(e));
                    return e;
                  }
                case "Quantumult X":
                  {
                    const a = {};
                    (o = r["open-url"] || r.url || r.openUrl || t) && Object.assign(a, {
                      "open-url": o
                    });
                    n = r["media-url"] || r.mediaUrl;
                    (n = i?.startsWith("http") ? i : n) && Object.assign(a, {
                      "media-url": n
                    });
                    (s = r["update-pasteboard"] || r.updatePasteboard || e) && Object.assign(a, {
                      "update-pasteboard": s
                    });
                    console.log(JSON.stringify(a));
                    return a;
                  }
                case "Node.js":
                  return;
              }
            default:
              return;
          }
        };
      if (!this.isMute) {
        switch (this.getEnv()) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Shadowrocket":
          default:
            $notification.post(t, e, s, a(r));
            break;
          case "Quantumult X":
            $notify(t, e, s, a(r));
            break;
          case "Node.js":
        }
      }
      this.isMuteLog || ((i = ["", "==============📣系统通知📣=============="]).push(t), e && i.push(e), s && i.push(s), console.log(i.join("\n")), this.logs = this.logs.concat(i));
    }
    debug(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.debug && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.debug + t.map(t => t ?? String(t)).join(this.logSeparator)));
    }
    info(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.info && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.info + t.map(t => t ?? String(t)).join(this.logSeparator)));
    }
    warn(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.warn && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.warn + t.map(t => t ?? String(t)).join(this.logSeparator)));
    }
    error(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.error && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.error + t.map(t => t ?? String(t)).join(this.logSeparator)));
    }
    log(...t) {
      0 < t.length && (this.logs = [...this.logs, ...t]);
      console.log(t.map(t => t ?? String(t)).join(this.logSeparator));
    }
    logErr(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", `❗️${this.name}, 错误!`, t);
          break;
        case "Node.js":
          this.log("", `❗️${this.name}, 错误!`, void 0 !== t.message ? t.message : t);
      }
    }
    wait(e) {
      return new Promise(t => setTimeout(t, e));
    }
    done(t = {}) {
      var e = (new Date().getTime() - this.startTime) / 1000;
      switch (this.log("", `🔔${this.name}, 结束! 🕛 ${e} 秒`), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(t);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(o, t);
}