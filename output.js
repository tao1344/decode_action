//Thu Aug 29 2024 04:14:04 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("大牌0825");
const _0x425eee = $.isNode() ? require("./jdCookie.js") : "",
  _0x50605c = $.isNode() ? require("./sendNotify") : "",
  _0x2983ff = require("crypto-js"),
  _0x10c073 = require("./function/dylank"),
  _0x1fedda = require("./function/dylany"),
  _0x4daae6 = require("./function/dylib.js");
let _0x197baa = [],
  _0x580136 = "",
  _0x398fee = "",
  _0x43d80d = "",
  _0x4275a1 = "3";
if (process.env.DY_PROXY) {
  const _0xd57697 = require("./function/proxy.js");
  $.get = _0xd57697.intoRequest($.get.bind($));
  $.post = _0xd57697.intoRequest($.post.bind($));
}
if ($.isNode()) {
  Object.keys(_0x425eee).forEach(_0x24c1fb => {
    _0x197baa.push(_0x425eee[_0x24c1fb]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
} else {
  _0x197baa = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...jsonfomat($.getdata("CookiesJD") || "[]").map(_0x466698 => _0x466698.cookie)].filter(_0x16d9b7 => !!_0x16d9b7);
}
let _0x2af325 = process.env.DPLH_BSHOP || "false",
  _0x304598 = process.env.DPLH_OPENCARD || "true",
  _0x109b39 = "https://jinggengjcq-isv.isvjcloud.com";
$.Url = " https://jinggengjcq-isv.isvjcloud.com/jdbeverage/pages/oC20240612dda/oC20240612dda?actId=8c153781a0b14e1caf49933b_240825";
$.bianh = $.Url.match(/oC[0-9a-z]+/)[0];
$.actId = $.Url.match(/actId=([0-9a-f]+_\d+)/)[1];
$.appkey = "94854284";
$.userId = "10299171";
$.outFlag = false;
let _0x240cd0 = ["OsiH6Sic/uTxioPBG6hh5K9AMkY4oJ31vhy6nI5LWbOiIw7XUQOP/Btn03/M1TYH"];
$.inviteNick = _0x240cd0[_0x567ece(0, _0x240cd0.length)];
$.awardId = process.env.DPLH_AWID || "";
$.bwater = false;
!(async () => {
  $.log("\n💬 有水的时候跑，浏览店铺任务每天刷新");
  $.log("💬 代理API，DY_PROXY='url'");
  $.log("💬 默认开卡，关闭DPLH_OPENCARD='false'");
  if (!_0x197baa[0]) {
    $.msg($.name, "【提示】请先获取cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/", {
      "open-url": "https://bean.m.jd.com/"
    });
    return;
  }
  for (let _0x59c46f = 0; _0x59c46f < _0x197baa.length; _0x59c46f++) {
    _0x580136 = _0x197baa[_0x59c46f];
    if (_0x580136) {
      $.UserName = decodeURIComponent(_0x580136.match(/pt_pin=([^; ]+)(?=;?)/) && _0x580136.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x59c46f + 1;
      $.bean = 0;
      $.nickName = "";
      _0x56ef41();
      console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");
      await _0x1e8613();
      await $.wait(parseInt(Math.random() * 1000 + 1500, 10));
      if ($.outFlag) {
        break;
      }
    }
  }
  if ($.outFlag) {
    let _0x659df5 = "此ip已被限制，请过10分钟后再执行脚本";
    $.msg($.name, "", "" + _0x659df5);
    if ($.isNode()) {
      await _0x50605c.sendNotify("" + $.name, "" + _0x659df5);
    }
  }
})().catch(_0x16b7e9 => $.logErr(_0x16b7e9)).finally(() => $.done());
async function _0x1e8613() {
  try {
    $.okFlag = false;
    $.endTime = 0;
    $.Token = "";
    $.Pin = "";
    $.MixNick = "";
    $.openList = [];
    if ($.outFlag) {
      console.log("此ip已被限制，请过10分钟后再执行脚本\n");
      return;
    }
    $.Token = await _0x10c073(_0x580136, _0x109b39);
    if (!$.Token) {
      console.log("❌ 获取TOKEN失败");
      return;
    }
    for (let _0x37bb72 = 0; _0x37bb72 < _0x4275a1; _0x37bb72++) {
      await _0x4fcb02("activity_load");
      if ($.okFlag) {
        break;
      }
    }
    if ($.MixNick == "") {
      return;
    }
    if ($.endTime < Date.now()) {
      $.log("活动已结束!!!");
      process.exit();
    } else {
      if ($.sTime > Date.now()) {
        $.log("活动未开始!!!");
        process.exit();
      } else {
        $.index == 1 && console.log("活动结束时间：" + _0x1b686d($.endTime));
      }
    }
    for (let _0x3aba91 = 0; _0x3aba91 < _0x4275a1; _0x3aba91++) {
      await _0x4fcb02("绑定");
      if ($.okFlag) {
        break;
      }
    }
    for (let _0x164b2d = 0; _0x164b2d < _0x4275a1; _0x164b2d++) {
      await _0x4fcb02("shopList");
      if ($.okFlag) {
        break;
      }
    }
    if ($.offList.length != 0) {
      $.log("总共" + $.openList.length + "个店铺，还需开卡" + $.offList.length + "个");
      if (_0x304598 !== "false") {
        $.log("\n去开卡...");
        for (let _0x510c7e of $.openList) {
          $.missionType = "openCard";
          if (_0x510c7e.open != true && _0x510c7e.openCardUrl) {
            $.openCard = false;
            $.joinVenderId = _0x510c7e.userId;
            for (let _0x5396b7 = 0; _0x5396b7 < _0x4275a1; _0x5396b7++) {
              await _0x4fcb02("mission");
              if ($.okFlag) {
                break;
              }
            }
            await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
            if ($.openCard == true) {
              $.errorJoinShop = "";
              await _0x41f85f();
              if ($.errorJoinShop.indexOf("您的手机号已被其他账号绑定本店会员，请先登陆原账号解绑") > -1) {
                return;
              }
              $.errorJoinShop.indexOf("活动太火爆，请稍后再试") > -1 && (console.log("😤 呜呜呜，重试开卡"), await $.wait(1000), await _0x41f85f(), await $.wait(parseInt(Math.random() * 1000 + 1000, 10)));
              if ($.errorJoinShop.indexOf("活动太火爆，请稍后再试") > -1) {
                console.log("💔 无法开卡,跳过运行");
                return;
              }
              for (let _0x5b0e51 = 0; _0x5b0e51 < _0x4275a1; _0x5b0e51++) {
                await _0x4fcb02("activity_load");
                if ($.okFlag) {
                  break;
                }
              }
              for (let _0x2994be = 0; _0x2994be < _0x4275a1; _0x2994be++) {
                await _0x4fcb02("shopList");
                if ($.okFlag) {
                  break;
                }
              }
            }
          }
        }
      } else {
        console.log("\n🔊 已设置不开卡,也无法助力哦!");
      }
    } else {
      $.log("\n🔊 已全部开卡!");
    }
    if ($.hasCollectShop === 0) {
      $.missionType = "uniteCollectShop";
      for (let _0x282410 = 0; _0x282410 < _0x4275a1; _0x282410++) {
        await _0x4fcb02("mission");
        if ($.okFlag) {
          break;
        }
      }
      await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
    } else {
      console.log("\n🔊 已完成关注任务!");
    }
    if (process.env.DPLH_ADDCAR == "true") {
      $.log("\n去一键加购...");
      if ($.hasAddCart === 0) {
        $.missionType = "uniteAddCart";
        for (let _0x48e302 = 0; _0x48e302 < _0x4275a1; _0x48e302++) {
          await _0x4fcb02("mission");
          if ($.okFlag) {
            break;
          }
        }
        await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
      } else {
        console.log("\n🔊 已完成加购任务!");
      }
    } else {
      console.log("\n🔊 默认不做加购任务，可设置变量DPLH_ADDCAR='true'开启");
    }
    await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
    if (!$.nowater || 1) {
      if (_0x2af325 == "true") {
        $.nojifen = false;
        $.nobeans = false;
        $.log("\n去浏览店铺...");
        $.missionType = "viewShop";
        if (!$.bwater) {
          let _0x1120e0 = _0x4daae6.getRandomEle($.openList, 1);
          $.goodsNumId = _0x1120e0[0].userId;
          await _0x4fcb02("mission");
          await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
          if ($.nojifen && $.nobeans) {
            console.log("可能没水,换个时间再试试");
          } else {
            for (let _0x49abbd of $.openList) {
              $.goodsNumId = _0x49abbd.userId;
              await _0x4fcb02("mission");
              await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
            }
            $.bwater = true;
          }
        } else {
          for (let _0x50b7ab of $.openList) {
            $.goodsNumId = _0x50b7ab.userId;
            await _0x4fcb02("mission");
            await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
          }
        }
      } else {
        console.log("\n默认不做浏览店铺，设置变量DPLH_BSHOP='true'");
      }
    }
    await _0x4fcb02("myAward");
    await _0x4fcb02("inviteList");
    $.index == 1 && _0x304598 !== "false" && ($.inviteNick = $.MixNick, console.log("\n车头助力作者，后面都会助力 -> " + $.UserName));
    await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
  } catch (_0x5cea6c) {
    console.log(_0x5cea6c);
  }
}
async function _0x4fcb02(_0x3ee0e7) {
  if ($.outFlag) {
    return;
  }
  let _0x102b57 = "https://jinggengjcq-isv.isvjcloud.com",
    _0x1c6b3a = "",
    _0x226d89 = "POST",
    _0x5a2c83 = "";
  switch (_0x3ee0e7) {
    case "activity_load":
      url = _0x102b57 + "/dm/front/jdJoinCardtf/activity/load?open_id=&mix_nick=" + ($.MixNick || $.MixNicks || "") + "&user_id=" + $.userId;
      const _0x3c84ce = {
        jdToken: $.Token,
        source: "01",
        ak: "",
        sk: "",
        inviteNick: $.inviteNick || ""
      };
      _0x5a2c83 = _0x3c84ce;
      if ($.joinVenderId) {
        _0x5a2c83 = {
          ..._0x5a2c83,
          shopId: "" + $.joinVenderId
        };
      }
      _0x1c6b3a = _0x5110b3("/jdJoinCardtf/activity/load", _0x5a2c83);
      break;
    case "shopList":
      url = _0x102b57 + "/dm/front/jdJoinCardtf/shop/shopList?open_id=&mix_nick=" + ($.MixNick || $.MixNicks || "");
      _0x5a2c83 = {};
      _0x1c6b3a = _0x5110b3("/jdJoinCardtf/shop/shopList", _0x5a2c83);
      break;
    case "绑定":
      url = _0x102b57 + "/dm/front/jdJoinCardtf/customer/inviteRelation?open_id=&mix_nick=" + ($.MixNick || $.MixNicks || "") + "&user_id=" + $.userId;
      const _0x1f83f1 = {
        inviterNick: $.inviteNick || ""
      };
      _0x5a2c83 = _0x1f83f1;
      _0x1c6b3a = _0x5110b3("/jdJoinCardtf/customer/inviteRelation", _0x5a2c83);
      break;
    case "mission":
      url = _0x102b57 + "/dm/front/jdJoinCardtf/mission/completeMission?open_id=&mix_nick=" + ($.MixNick || $.MixNicks || "");
      const _0x4e80b0 = {
        missionType: $.missionType
      };
      _0x5a2c83 = _0x4e80b0;
      if ($.joinVenderId) {
        _0x5a2c83 = {
          ..._0x5a2c83,
          shopId: $.joinVenderId
        };
      }
      if ($.goodsId) {
        _0x5a2c83 = {
          ..._0x5a2c83,
          goodsId: $.goodsId
        };
      }
      if ($.goodsNumId) {
        _0x5a2c83 = {
          ..._0x5a2c83,
          goodsNumId: $.goodsNumId
        };
      }
      _0x1c6b3a = _0x5110b3("/jdJoinCardtf/mission/completeMission", _0x5a2c83);
      break;
    case "抽奖":
      url = _0x102b57 + "/dm/front/jdJoinCardtf/interactive/drawPos?open_id=&mix_nick=" + ($.MixNick || $.MixNicks || "");
      const _0x333708 = {
        dataType: "draw",
        usedGameNum: "2"
      };
      _0x5a2c83 = _0x333708;
      _0x1c6b3a = _0x5110b3("/jdJoinCardtf/interactive/drawPos", _0x5a2c83);
      break;
    case "followShop":
      url = _0x102b57 + "/dm/front/jdJoinCardtf/followShop?open_id=&mix_nick=" + ($.MixNick || $.MixNicks || "");
      const _0x32e299 = {
        actId: $.actId,
        missionType: "collectShop"
      };
      _0x5a2c83 = _0x32e299;
      _0x1c6b3a = _0x5110b3("/jdJoinCardtf/followShop", _0x5a2c83);
      break;
    case "getAwardSettingList":
      url = _0x102b57 + "/dm/front/jdJoinCardtf/awards/getAwardSettingList?open_id=&mix_nick=" + ($.MixNick || $.MixNicks || "");
      const _0x551b7d = {
        dataType: "exchange"
      };
      _0x5a2c83 = _0x551b7d;
      _0x1c6b3a = _0x5110b3("/jdJoinCardtf/awards/getAwardSettingList", _0x5a2c83);
      break;
    case "exchangePost":
      url = _0x102b57 + "/dm/front/jdJoinCardtf/interactive/exchangePost?open_id=&mix_nick=" + ($.MixNick || $.MixNicks || "");
      const _0x43f863 = {
        dataType: "exchange",
        awardId: $.awardId
      };
      _0x5a2c83 = _0x43f863;
      _0x1c6b3a = _0x5110b3("/jdJoinCardtf/interactive/exchangePost", _0x5a2c83);
      break;
    case "addCart":
      url = _0x102b57 + "/dm/front/jdJoinCardtf/addCart?open_id=&mix_nick=" + ($.MixNick || $.MixNicks || "");
      const _0x16f276 = {
        actId: $.actId,
        missionType: "addCart"
      };
      _0x5a2c83 = _0x16f276;
      _0x1c6b3a = _0x5110b3("/jdJoinCardtf/addCart", _0x5a2c83);
      break;
    case "myAward":
      url = _0x102b57 + "/dm/front/jdJoinCardtf/awards/list?open_id=&mix_nick=" + ($.MixNick || $.MixNicks || "");
      const _0x5d2670 = {
        passes: "",
        pageNo: 1,
        pageSize: 9999
      };
      _0x5a2c83 = _0x5d2670;
      _0x1c6b3a = _0x5110b3("/jdJoinCardtf/awards/list", _0x5a2c83);
      break;
    case "inviteList":
      url = _0x102b57 + "/dm/front/jdJoinCardtf/customer/inviteList?open_id=&mix_nick=" + ($.MixNick || $.MixNicks || "");
      const _0x507444 = {
        missionType: "shareAct",
        pageNo: 1,
        pageSize: 10
      };
      _0x5a2c83 = _0x507444;
      _0x1c6b3a = _0x5110b3("/jdJoinCardtf/customer/inviteList", _0x5a2c83);
      break;
    default:
      console.log("错误" + _0x3ee0e7);
  }
  let _0x112bae = _0x1f75e3(url, _0x1c6b3a, _0x226d89);
  return new Promise(async _0x42fe40 => {
    $.post(_0x112bae, (_0xbd9418, _0x340fdc, _0x1f08b0) => {
      try {
        _0xbd9418 ? (_0x340fdc && _0x340fdc.statusCode && _0x340fdc.statusCode == 493 && (console.log("此ip已被限制，请过10分钟后再执行脚本\n"), $.outFlag = true), $.okFlag = false) : _0x5e4298(_0x3ee0e7, _0x1f08b0);
      } catch (_0x4835cf) {
        console.log(_0x4835cf, _0x340fdc);
      } finally {
        _0x42fe40();
      }
    });
  });
}
function _0x5116ad(_0x1e3923) {
  let _0x1cd164 = "";
  switch (_0x1e3923) {
    case "bdy_0x154ed0":
      const _0x18b3da = {
        bdy_0x154ed0: _0x18b3da
      };
      _0x1cd164 = _0x18b3da;
      break;
    case "bdy_0x2c605c":
      const _0x11a1ed = {
        bdy_0x2c605c: _0x11a1ed
      };
      _0x1cd164 = _0x11a1ed;
      break;
    case "bdy_0x5ade7a":
      const _0x2338f5 = {
        bdy_0x5ade7a: _0x2338f5
      };
      _0x1cd164 = _0x2338f5;
      break;
  }
}
async function _0x5e4298(_0x415231, _0x1949c7) {
  let _0x21897f = "";
  try {
    $.okFlag = true;
    (_0x415231 != "accessLogWithAD" || _0x415231 != "drawContent") && (_0x21897f = JSON.parse(_0x1949c7));
  } catch (_0x2ffd78) {
    console.log("🤬 " + _0x415231 + " 数据异常");
    $.runFalag = false;
  }
  try {
    switch (_0x415231) {
      case "accessLogWithAD":
      case "drawContent":
      case "绑定":
        break;
      case "shopList":
        if (_0x21897f.success === true && _0x21897f.data) {
          _0x21897f.data.status == 200 && ($.openList = _0x21897f.data.data || [], $.offList = $.openList.filter(_0x32ab02 => !_0x32ab02.open));
        }
        break;
      case "getAwardSettingList":
        if (_0x21897f.success === true && _0x21897f.data) {
          if (_0x21897f.data?.["status"] == 200) {
            _0x21897f = _0x21897f.data;
            for (let _0x2377aa of _0x21897f.data.awardSettings) {
              console.log(_0x2377aa.awardName + ": id(" + _0x2377aa.id + ")--库存(" + _0x2377aa.remainNum + ")--需积分(" + _0x2377aa.awardDes + ")--" + _0x2377aa.exchangeFlag);
            }
          } else {
            $.log("" + (_0x21897f.errorMessage || _0x21897f.data.msg));
          }
        }
        break;
      case "exchangePost":
        if (_0x21897f.success === true && _0x21897f.data) {
          _0x21897f.data?.["status"] == 200 ? (_0x21897f = _0x21897f.data, $.log("兑换成功：" + _0x21897f.data.awardSendLog.awardName), _0x21897f.data.awardSendLog.awardType == "goods" && $.log("实物请手动填地址：" + $.Url)) : $.log("" + (_0x21897f.errorMessage || _0x21897f.data.msg));
        }
        break;
      case "activity_load":
        if (_0x21897f.success === true && _0x21897f.data) {
          if (_0x21897f.data?.["status"] == 200) {
            _0x21897f = _0x21897f.data;
            if (_0x21897f.msg || _0x21897f.data.isOpenCard) {
              if ((_0x21897f.msg || _0x21897f.data.isOpenCard || "").indexOf("绑定成功") > -1) {
                $.toBind = 1;
              }
            }
            $.endTime = _0x21897f.data.cusActivity.endTime || 0;
            $.sTime = _0x21897f.data.cusActivity.startTime || 0;
            $.MixNick = _0x21897f.data.missionCustomer.buyerNick || "";
            $.usedChance = _0x21897f.data.missionCustomer.usedChance || 0;
            $.hasCollectShop = _0x21897f.data.missionCustomer.hasCollectShop || 0;
            $.hasAddCart = _0x21897f.data.missionCustomer.hasAddCart || 0;
            $.remainPoint = _0x21897f.data.missionCustomer.remainPoint || 0;
            $.totalPoint = _0x21897f.data.missionCustomer.totalPoint || 0;
            _0x21897f.data.openCardMsg && console.log("🔊 " + _0x21897f.data.openCardMsg);
          } else {
            $.log("" + (_0x21897f.errorMessage || _0x21897f.data.msg));
          }
        } else {
          console.log(_0x1949c7);
        }
        break;
      case "mission":
        if (_0x21897f.success === true && _0x21897f.data) {
          if (_0x21897f.data?.["status"] == 200) {
            _0x21897f = _0x21897f.data;
            if (_0x21897f.msg || _0x21897f.data.isOpenCard || _0x21897f.data.remark) {
              console.log("🔊 " + (_0x21897f.msg || _0x21897f.data.isOpenCard || _0x21897f.data.remark || ""));
            }
            $.openCard = _0x21897f.data.remark.includes("不是会员") ? true : false;
            $.nojifen = !_0x21897f.data.remark.includes("积分") ? true : false;
            $.nobeans = !_0x21897f.data.remark.includes("京豆") ? true : false;
          } else {
            $.log("" + (_0x21897f.errorMessage || _0x21897f.data.msg));
          }
        } else {
          console.log(_0x1949c7);
        }
        break;
      case "inviteList":
        if (_0x21897f.success === true && _0x21897f.data) {
          _0x21897f.data?.["status"] == 200 ? (_0x21897f = _0x21897f.data, _0x21897f.data.inviteNum > 0 && console.log("\n已邀请：" + _0x21897f.data.inviteNum)) : $.log("" + (_0x21897f.errorMessage || _0x21897f.data.msg));
        } else {
          console.log(_0x1949c7);
        }
        break;
      case "myAward":
        if (_0x21897f.success === true && _0x21897f.data) {
          if (_0x21897f.data?.["status"] == 200) {
            _0x21897f = _0x21897f.data;
            let _0x4ff29c = 0;
            try {
              _0x4ff29c = eval(_0x1949c7.match(/\d+个?京豆/g).map(_0x17d021 => _0x17d021.replace(/[\u4e00-\u9fa5]/g, "")).join("+"));
            } catch {}
            _0x4ff29c > 0 && console.log("\n共获得 " + _0x4ff29c + " 京豆🥔");
          } else {
            $.log("" + (_0x21897f.errorMessage || _0x21897f.data.msg));
          }
        } else {
          console.log(_0x1949c7);
        }
        break;
      default:
        console.log(_0x415231 + "-> " + _0x1949c7);
    }
    if (typeof _0x21897f == "object") {
      if (_0x21897f.errorMessage) {
        _0x21897f.errorMessage.indexOf("火爆") > -1;
      }
    }
  } catch {}
}
function _0x1f75e3(_0x267643, _0x1db732, _0x411298 = "POST") {
  const _0x152b1e = {
    Accept: "application/json",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "zh-cn",
    Connection: "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    Cookie: _0x580136,
    "User-Agent": $.UA,
    "X-Requested-With": "XMLHttpRequest"
  };
  _0x267643.indexOf("https://jinggengjcq-isv.isvjcloud.com") > -1 && (_0x152b1e.Origin = "https://jinggengjcq-isv.isvjcloud.com", _0x152b1e["Content-Type"] = "application/json; charset=utf-8", delete _0x152b1e.Cookie);
  return {
    url: _0x267643,
    method: _0x411298,
    headers: _0x152b1e,
    body: _0x1db732,
    timeout: 10000
  };
}
function _0x5110b3(_0x451f09, _0x56f0e0) {
  const _0x7e326 = {
    actId: $.actId,
    ..._0x56f0e0,
    method: _0x451f09,
    userId: $.userId,
    buyerNick: $.MixNick || ""
  };
  d = _0x7e326;
  sign2 = _0x367282(d);
  const _0x45bd9c = {
    m: "POST",
    oba: sign2.sign,
    timestamp: sign2.timeStamp,
    userId: $.userId
  };
  const _0x457088 = {
    commonParameter: _0x45bd9c,
    admJson: d
  };
  const _0x140e16 = {
    jsonRpc: "2.0",
    params: _0x457088
  };
  return $.toStr(_0x140e16, _0x140e16);
}
function _0x367282(_0x328044) {
  AppSecret = _0x43d80d || "6cc5dbd8900e434b94c4bdb0c16348ed";
  key = _0x398fee || "c1614da9ac68";
  time2 = new Date().valueOf();
  s2 = encodeURIComponent(JSON.stringify(_0x328044));
  c = new RegExp("'", "g");
  A = new RegExp("~", "g");
  s2 = s2.replace(c, "%27");
  s2 = s2.replace(A, "%7E");
  signBody = "f" + key + "D" + s2 + "c" + time2 + AppSecret;
  sign = _0x2983ff.MD5(signBody.toLowerCase()).toString();
  return {
    sign: sign,
    timeStamp: time2
  };
}
async function _0x3e9079() {
  id = _0x2983ff.MD5(Date.now()).toString().substring(0, 16);
  _0x2983ff.enc.Base64._map = "KLMNOPQRSTABCDEFGHIJUVWXYZabcdopqrstuvwxefghijklmnyz0123456789+/";
  const _0x4f05f3 = _0x2983ff.enc.Utf8.parse(id),
    _0x18ca9e = _0x2983ff.enc.Base64.stringify(_0x4f05f3);
  ep = encodeURIComponent(JSON.stringify({
    hdid: "JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw=",
    ts: new Date().getTime(),
    ridx: -1,
    cipher: {
      sv: "EG==",
      ad: _0x18ca9e,
      od: "",
      ov: "Ctq=",
      ud: _0x18ca9e
    },
    ciphertype: 5,
    version: "1.2.0",
    appname: "com.jingdong.app.mall"
  }));
  return "jdapp;android;11.0.2;;;appBuild/97565;ef/1;ep/" + ep + ";jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android 9; Note9 Build/PKQ1.181203.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 MQQBrowser/6.2 TBS/046010 Mobile Safari/537.36";
}
function _0x104ec7(_0x471ffc) {
  _0x471ffc = _0x471ffc || 32;
  let _0x42c7fc = "abcdef0123456789",
    _0x2a8f78 = _0x42c7fc.length,
    _0x512496 = "";
  for (let _0x26d568 = 0; _0x26d568 < _0x471ffc; _0x26d568++) {
    _0x512496 += _0x42c7fc.charAt(Math.floor(Math.random() * _0x2a8f78));
  }
  return _0x512496;
}
function _0x2f7bcb(_0x11d12b) {
  if (typeof _0x11d12b == "string") {
    try {
      return JSON.parse(_0x11d12b);
    } catch (_0x3cc045) {
      console.log(_0x3cc045);
      $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
      return [];
    }
  }
}
async function _0x41f85f() {
  if (!$.joinVenderId) {
    return;
  }
  return new Promise(async _0x4e1643 => {
    $.errorJoinShop = "活动太火爆，请稍后再试";
    let _0x330853 = "";
    if ($.shopactivityId) {
      _0x330853 = ",\"activityId\":" + $.shopactivityId;
    }
    const _0x25125d = "{\"venderId\":\"" + $.joinVenderId + "\",\"shopId\":\"" + $.joinVenderId + "\",\"bindByVerifyCodeFlag\":1,\"registerExtend\":{},\"writeChildFlag\":0" + _0x330853 + ",\"channel\":406}",
      _0x49ae7e = {
        appId: "27004",
        apid: "shopmember_m_jd_com",
        fn: "bindWithVender",
        ver: "9.2.0",
        cl: "H5",
        body: JSON.parse(_0x25125d),
        code: 0,
        user: $.UserName,
        ua: $.UA
      };
    for (var _0x578699 = "", _0x2810ee = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", _0x4033e6 = 0; _0x4033e6 < 16; _0x4033e6++) {
      var _0xd2e362 = Math.round(Math.random() * (_0x2810ee.length - 1));
      _0x578699 += _0x2810ee.substring(_0xd2e362, _0xd2e362 + 1);
    }
    uuid = Buffer.from(_0x578699, "utf8").toString("base64");
    ep = encodeURIComponent(JSON.stringify({
      hdid: "JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw=",
      ts: new Date().getTime(),
      ridx: -1,
      cipher: {
        screen: "CJS0CseyCtK4",
        osVersion: "CJGkEK==",
        uuid: uuid
      },
      ciphertype: 5,
      version: "1.0.3",
      appname: "com.360buy.jdmobile"
    }));
    const _0x29209b = {
      accept: "*/*",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      cookie: _0x580136,
      origin: "https://shopmember.m.jd.com/",
      "user-agent": $.UA
    };
    const _0x547eab = await _0x1fedda.getbody(_0x49ae7e),
      _0x7bd1b1 = {
        url: "https://api.m.jd.com/client.action?" + _0x547eab + "&uuid=88888",
        headers: _0x29209b
      };
    $.get(_0x7bd1b1, async (_0x272e39, _0x5ee669, _0x384ce6) => {
      try {
        if (_0x272e39) {
          _0x5ee669 && typeof _0x5ee669.statusCode != "undefined" && _0x5ee669.statusCode == 403 && console.log("此ip已无法开卡，请更换IP后再执行脚本\n");
        } else {
          _0x384ce6 = _0x384ce6 && _0x384ce6.match(/jsonp_.*?\((.*?)\);/) && _0x384ce6.match(/jsonp_.*?\((.*?)\);/)[1] || _0x384ce6;
          let _0x4fb8ea = $.toObj(_0x384ce6, _0x384ce6);
          if (_0x4fb8ea && typeof _0x4fb8ea == "object") {
            if (_0x4fb8ea && _0x4fb8ea.success === true) {
              $.errorJoinShop = _0x4fb8ea.message;
              if (_0x4fb8ea.result && _0x4fb8ea.result.giftInfo) {
                for (let _0x34d549 of _0x4fb8ea.result.giftInfo.giftList) {
                  console.log("🔊 入会获得：" + _0x34d549.discountString + _0x34d549.prizeName + _0x34d549.secondLineDesc);
                }
              }
            } else {
              _0x4fb8ea && typeof _0x4fb8ea == "object" && _0x4fb8ea.message ? ($.errorJoinShop = _0x4fb8ea.message, console.log("" + (_0x4fb8ea.message || ""))) : console.log(_0x384ce6);
            }
          } else {
            console.log(_0x384ce6);
          }
        }
      } catch (_0x3216cd) {
        $.logErr(_0x3216cd, _0x5ee669);
      } finally {
        _0x4e1643();
      }
    });
  });
}
async function _0x3a523c() {
  return new Promise(async _0x2bbac8 => {
    const _0x564b2f = "{\"venderId\":\"" + $.joinVenderId + "\",\"channel\":406,\"payUpShop\":true}",
      _0x355a97 = {
        appid: "jd_shop_member",
        functionId: "bindWithVender",
        clientVersion: "9.2.0",
        client: "H5",
        body: JSON.parse(_0x564b2f)
      };
    await $.wait(1000);
    const _0x880c39 = await _0x1fedda("8adfb", _0x355a97),
      _0x4ce8d9 = {
        url: "https://api.m.jd.com/client.action?appid=jd_shop_member&functionId=getShopOpenCardInfo&body=" + _0x564b2f + "&clientVersion=9.2.0&client=H5&uuid=88888&h5st=" + encodeURIComponent(_0x880c39),
        headers: {
          accept: "*/*",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
          cookie: _0x580136,
          origin: "https://shopmember.m.jd.com/",
          "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
        }
      };
    $.get(_0x4ce8d9, async (_0x3e674a, _0x44a7e5, _0x444c81) => {
      try {
        if (_0x3e674a) {
          _0x44a7e5 && typeof _0x44a7e5.statusCode != "undefined" && _0x44a7e5.statusCode == 403 && console.log("此ip已无法开卡，请更换IP后再执行脚本\n");
        } else {
          _0x444c81 = _0x444c81 && _0x444c81.match(/jsonp_.*?\((.*?)\);/) && _0x444c81.match(/jsonp_.*?\((.*?)\);/)[1] || _0x444c81;
          let _0x23bf87 = $.toObj(_0x444c81, _0x444c81);
          _0x23bf87 && typeof _0x23bf87 == "object" ? _0x23bf87 && _0x23bf87.success == true && (console.log("去加入：" + (_0x23bf87.result.shopMemberCardInfo.venderCardName || "") + " (" + $.joinVenderId + ")"), $.shopactivityId = _0x23bf87.result.interestsRuleList && _0x23bf87.result.interestsRuleList[0] && _0x23bf87.result.interestsRuleList[0].interestsInfo && _0x23bf87.result.interestsRuleList[0].interestsInfo.activityId || "") : console.log(_0x444c81);
        }
      } catch (_0x2fda3e) {
        $.logErr(_0x2fda3e, _0x44a7e5);
      } finally {
        _0x2bbac8();
      }
    });
  });
}
function _0x4ce4d8(_0x3855e5) {
  return new Promise(_0x324dc2 => {
    const _0x29aa63 = {
      "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/87.0.4280.88"
    };
    const _0x4dd199 = {
      url: _0x3855e5 + "?" + new Date(),
      timeout: 10000,
      headers: _0x29aa63
    };
    $.get(_0x4dd199, async (_0x4d5056, _0x11f2c2, _0x566f11) => {
      try {
        if (_0x4d5056) {
          $.getAuthorCodeListerr = false;
        } else {
          if (_0x566f11) {
            _0x566f11 = JSON.parse(_0x566f11);
          }
          $.getAuthorCodeListerr = true;
        }
      } catch (_0x1deef5) {
        $.logErr(_0x1deef5, _0x11f2c2);
        _0x566f11 = null;
      } finally {
        _0x324dc2(_0x566f11);
      }
    });
  });
}
function _0x567ece(_0x4576de, _0x9a33c9) {
  return Math.floor(Math.random() * (_0x9a33c9 - _0x4576de)) + _0x4576de;
}
async function _0x56ef41() {
  $.UA = "jdapp;iPhone;10.1.5;13.1.2;" + _0x3ac0a4(40) + ";network/wifi;model/iPhone8,1;addressid/2308460611;appBuild/167814;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1";
}
function _0x3ac0a4(_0x38c1dd) {
  _0x38c1dd = _0x38c1dd || 32;
  let _0x439236 = "abcdef0123456789",
    _0x550680 = _0x439236.length,
    _0xc3645 = "";
  for (let _0xd5f0a7 = 0; _0xd5f0a7 < _0x38c1dd; _0xd5f0a7++) {
    _0xc3645 += _0x439236.charAt(Math.floor(Math.random() * _0x550680));
  }
  return _0xc3645;
}
function _0x4c9414() {
  const _0x5d1bec = {
    url: "https://jinggengjcq-isv.isvjcloud.com/jdbeverage/static/js/index." + $.jscode + ".js",
    headers: {}
  };
  _0x5d1bec.headers["User-Agent"] = $.UA;
  return new Promise(_0x4efb09 => {
    $.get(_0x5d1bec, async (_0xc73662, _0xf977a8, _0x127275) => {
      try {
        if (_0xc73662) {
          console.log("" + JSON.stringify(_0xc73662));
          console.log("get请求失败，请检查网路重试");
        } else {
          $.bianh = "pages-" + $.bianh + "-" + $.bianh;
          let _0x32a752 = new RegExp("\"" + $.bianh + "\":\"([0-9a-f]{8})\"");
          $.bianh = $.bianh + "." + _0x127275.match(_0x32a752)[1];
          let _0x3cb9b7 = await _0x5c87f7("https://jinggengjcq-isv.isvjcloud.com/jdbeverage/static/js/" + $.bianh + ".js");
          _0x43d80d = _0x3cb9b7.match(/as:\"([0-9a-f]{32})\"/)[1];
          _0x398fee = _0x3cb9b7.match(/ak:\"([0-9a-f]{12})\"/)[1];
        }
      } catch (_0x1f9fb6) {} finally {
        _0x4efb09();
      }
    });
  });
}
function _0x3bf084(_0x59bb3f) {
  const _0x33f1de = {
    "User-Agent": $.UA
  };
  const _0x575113 = {
    url: _0x59bb3f,
    headers: _0x33f1de
  };
  return new Promise(_0x4c5861 => {
    $.get(_0x575113, async (_0x2503c1, _0x1f8bd5, _0x1c3e34) => {
      try {
        _0x2503c1 ? (console.log("" + JSON.stringify(_0x2503c1)), console.log("get请求失败，请检查网路重试")) : $.jscode = _0x1c3e34.match(/index.([0-9a-f]{8}).js/)[1];
      } catch (_0x3e7ff4) {} finally {
        _0x4c5861();
      }
    });
  });
}
function _0x1b686d(_0x35dfec = +new Date()) {
  var _0x291569 = new Date(_0x35dfec + 28800000);
  return _0x291569.toJSON().substr(0, 19).replace("T", " ").replace(/-/g, "/");
}
function _0x5c87f7(_0x54611f) {
  const _0x559f9f = {
    "User-Agent": $.UA
  };
  const _0x4a2e90 = {
    url: _0x54611f,
    headers: _0x559f9f
  };
  return new Promise(_0x5524c2 => {
    $.get(_0x4a2e90, async (_0x53f4ef, _0x8dfab4, _0x29a7e5) => {
      try {
        if (_0x53f4ef) {
          console.log("" + JSON.stringify(_0x53f4ef));
          console.log("get请求失败，请检查网路重试");
        }
      } catch (_0x468753) {} finally {
        _0x5524c2(_0x29a7e5);
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