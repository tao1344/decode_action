//Wed Aug 07 2024 06:31:59 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("新东东农场任务");
const jdCookie = require("./jdCookie"),
  notify = require("./utils/Rebels_sendJDNotify"),
  common = require("./utils/Rebels_jdCommon"),
  {
    H5st
  } = require("./utils/Rebels_H"),
  CryptoJS = require("crypto-js"),
  querystring = require("querystring"),
  autoPlant = !(process.env.jd_XinFarm_autoPlant === "false"),
  waternum = process.env.jd_XinFarm_waternum || "10",
  plantSkuId = process.env.jd_XinFarm_plantSkuId || "",
  retainWater = process.env.jd_XinFarm_retainWater === "true",
  isNotify = process.env.jd_XinFarm_Notify === "true",
  sign_linkId = "LCH-fV7hSnChB-6i5f4ayw",
  draw_linkId = "VssYBUKJOen7HZXpC8dRFA",
  award_map = {
    1: "水滴",
    2: "水滴"
  };
let cookie = "";
const cookiesArr = Object.keys(jdCookie).map(_0x89f662 => jdCookie[_0x89f662]).filter(_0x5080ac => _0x5080ac);
!cookiesArr[0] && ($.msg($.name, "【提示】请先获取Cookie"), process.exit(1));
!(async () => {
  console.log("==========" + $.name + "变量开启状态==========");
  console.log("活动入口: APP-我的-东东农场");
  console.log("默认种植模式: [" + (autoPlant ? "自动" : "手动") + "]");
  console.log("默认浇水次数: [" + waternum + "]，快速浇水: [" + (retainWater ? "开启" : "关闭") + "]");
  console.log("代理开关: [" + common.getProxyStatus() + "]");
  console.log("通知推送: [" + (isNotify ? "开启" : "关闭") + "]");
  console.log("==========" + $.name + "变量状态结束==========");
  console.log("");
  notify.config({
    title: $.name
  });
  for (let _0xff0b4c = 0; _0xff0b4c < cookiesArr.length; _0xff0b4c++) {
    $.index = _0xff0b4c + 1;
    cookie = cookiesArr[_0xff0b4c];
    common.setCookie(cookie);
    $.UserName = decodeURIComponent(common.getCookieValue(cookie, "pt_pin"));
    $.UA = common.genUA($.UserName);
    $.UUID = common.genUuid("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
    $.message = notify.create($.index, $.UserName);
    $.nickName = "";
    console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "******\n");
    await Main();
    common.unsetCookie();
    if ($.runEnd) {
      break;
    }
    await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
  }
  const _0xba8a12 = notify.getMessage();
  _0xba8a12 && (console.log("\n📣 运行结果\n" + _0xba8a12.replace(/：/g, " ➜ ")), isNotify && (notify.appendContent("\n"), await notify.push()));
})().catch(_0x22f7af => $.logErr(_0x22f7af)).finally(() => $.done());
async function Main() {
  $.canWatering = true;
  $.farmHot = false;
  $.fp = "";
  try {
    const _0x183729 = await common.getLoginStatus(cookie);
    if (!_0x183729 && typeof _0x183729 === "boolean") {
      console.log("账号无效");
      $.message.fix("账号无效");
      return;
    }
    $.farm_home = "";
    await sendRequest("farm_home");
    await $.wait(parseInt(Math.random() * 500 + 500, 10));
    if ($.farmHot) {
      return;
    }
    const _0x872672 = $.farm_home?.["result"]?.["treeCurrentState"] || 0;
    if (_0x872672 === 0) {
      const _0x327c75 = $.farm_home?.["result"]?.["treeFullStage"],
        _0x328f35 = $.farm_home?.["result"]?.["waterTips"] || "",
        _0x20a67e = $.farm_home?.["result"]?.["treeLevel"] || 0,
        _0x124723 = $.farm_home?.["result"]?.["skuName"];
      switch (_0x327c75) {
        case 0:
          await plantTree();
          await $.wait(parseInt(Math.random() * 500 + 500, 10));
          break;
        case 1:
        case 2:
        case 3:
        case 4:
          console.log("🌳 [等级" + _0x20a67e + "]" + _0x124723 + "\n🌳 当前进度：" + _0x328f35 + "\n");
          $.message.insert(_0x124723 + "[等级" + _0x20a67e + "]" + _0x328f35);
          break;
        case 5:
          console.log("🎉 种植的 “" + _0x124723 + "” 成熟了~");
          $.message.insert("种植的 “" + _0x124723 + "” 已成熟（自动收获）");
          await notify.sendNotify($.name + "成熟通知", "【京东账号" + $.index + "】" + $.UserName + "\n种植的 “" + _0x124723 + "” 已成熟可以收获了~\n\n");
          console.log("去种植新的~");
          await plantTree();
          await $.wait(parseInt(Math.random() * 500 + 500, 10));
          break;
      }
    } else {
      console.log("超过14天未浇水，果树已经枯萎了，重新种植~\n");
      await plantTree();
      await $.wait(parseInt(Math.random() * 500 + 500, 10));
    }
    if ($.farmHot) {
      return;
    }
    await dailySign();
    if ($.farmHot) {
      return;
    }
    await doTask();
    if ($.farmHot) {
      return;
    }
    await getAssistRewards();
    await limitedTimeDropletRain();
    await goWatering();
    await doTask();
    await awarddetail();
  } catch (_0x1171de) {
    console.log("❌ 脚本运行遇到了错误\n" + _0x1171de);
  }
}
async function plantTree() {
  $.farm_tree_board = "";
  await sendRequest("farm_tree_board");
  await $.wait(parseInt(Math.random() * 500 + 500, 10));
  if (!$.farm_tree_board) {
    return;
  }
  let _0x444ce0 = $.farm_tree_board?.["farmTreeLevels"] || [];
  if (!_0x444ce0.length) {
    console.log("没有可种植的作物：" + JSON.stringify($.farm_tree_board));
    return;
  }
  if (autoPlant && !plantSkuId) {
    console.log("当前尚未种植，自动随机选择最高价值的作物种植");
    const _0x86575c = _0x444ce0.reduce((_0x16fcab, _0x3ee7bb) => {
      const _0x5a9c69 = _0x3ee7bb.farmLevelTrees.reduce((_0x3f379e, _0x20b313) => {
        return parseFloat(_0x20b313.pPrice) > parseFloat(_0x3f379e.pPrice) ? _0x20b313 : _0x3f379e;
      }, _0x3ee7bb.farmLevelTrees[0]);
      return parseFloat(_0x5a9c69.pPrice) > parseFloat(_0x16fcab.pPrice) ? _0x5a9c69 : _0x16fcab;
    }, _0x444ce0[0].farmLevelTrees[0]);
    _0x86575c && ($.farmHot = true, $.plantSkuUid = _0x86575c?.["uid"], console.log("去种植商品 “" + _0x86575c?.["skuName"] + "（价值" + _0x86575c?.["pPrice"] + "元）”"), await sendRequest("farm_plant_tree"), await $.wait(parseInt(Math.random() * 2000 + 2000, 10)));
  } else {
    if (plantSkuId) {
      $.farmHot = true;
      $.plantSkuUid = plantSkuId;
      await sendRequest("farm_plant_tree");
      await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
    } else {
      let _0x4b1c63 = "";
      for (let _0x4e9b3b of _0x444ce0) {
        const _0x305dba = _0x4e9b3b.farmLevelTrees,
          _0x8a3d02 = _0x4e9b3b.needDays;
        for (let _0x4465e5 = 0; _0x4465e5 < _0x305dba.length; _0x4465e5++) {
          const _0x1e4dc3 = _0x305dba[_0x4465e5].skuName,
            _0x1d0775 = _0x305dba[_0x4465e5].uid;
          _0x4b1c63 += _0x1e4dc3 + "（最快成熟需要" + _0x8a3d02 + "天）\n种植变量ID：" + _0x1d0775 + "\n";
        }
      }
      console.log("当前尚未种植，可种植的商品如下：\n" + _0x4b1c63);
      console.log("\n\n请通过变量填写种植作物ID后再次运行~");
      $.message.insert("未填写关键变量跳过种植");
    }
  }
}
async function dailySign() {
  await sendRequest("dongDongFarmSignHome");
  const _0x355264 = $.dongDongFarmSignHome?.["signInFlag"] || 0;
  switch (_0x355264) {
    case 0:
      {
        console.log("去做任务 \"每日签到\"");
        await sendRequest("dongDongFarmSignIn");
        await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
        await sendRequest("dongDongFarmSignHome");
        await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
        break;
      }
    case 1:
      {
        break;
      }
    default:
      {
        console.log(_0x355264);
        break;
      }
  }
}
async function limitedTimeDropletRain() {
  $.farm_rain_round_icon = "";
  await sendRequest("farm_rain_round_icon");
  await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
  if (!$.farm_rain_round_icon) {
    return;
  }
  const _0x3abb32 = $.farm_rain_round_icon?.["result"]?.["roundType"] || 0;
  switch (_0x3abb32) {
    case 2:
      {
        const _0x4cbce6 = $.farm_rain_round_icon?.["result"]?.["nextRoundStartCountDown"] || 0,
          _0x404dd8 = Math.floor(_0x4cbce6 / 60000),
          _0x231c70 = (_0x4cbce6 % 60000 / 1000).toFixed(0);
        console.log("\n【限时水滴雨】任务还需" + _0x404dd8 + "分钟" + Math.floor(_0x231c70) + "秒开启");
        break;
      }
    case 3:
      {
        const _0x47a54c = $.farm_rain_round_icon?.["result"]?.["curRoundEndCountDown"] || 0,
          _0x54ba65 = Math.floor(_0x47a54c / 60000),
          _0xf6fe3a = (_0x47a54c % 60000 / 1000).toFixed(0);
        $.curRoundToken = $.farm_rain_round_icon?.["result"]?.["curRoundToken"] || "";
        console.log("\n【限时水滴雨】任务还剩" + _0x54ba65 + "分钟" + Math.floor(_0xf6fe3a) + "秒结束");
        await sendRequest("farm_rain_page");
        await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
        await sendRequest("farm_rain_reward");
        await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
        break;
      }
    case 4:
      break;
    default:
      console.log("\n【限时水滴雨】任务状态未知：" + _0x3abb32);
      break;
  }
}
async function doTask() {
  let _0x35f660 = false;
  $.farm_task_list = "";
  await sendRequest("farm_task_list");
  if (!$.farm_task_list) {
    return;
  }
  let _0x2e2394 = $.farm_task_list?.["taskList"] || [];
  for (let _0x16b81d of _0x2e2394) {
    const _0x4cf5a2 = _0x16b81d?.["taskStatus"];
    if (_0x4cf5a2 === 3) {
      continue;
    }
    const _0x42d567 = _0x16b81d?.["mainTitle"];
    $.taskId = _0x16b81d?.["taskId"];
    $.taskSourceUrl = _0x16b81d?.["taskSourceUrl"];
    $.taskType = _0x16b81d?.["taskType"];
    $.taskInsert = _0x16b81d?.["taskInsert"];
    switch (_0x4cf5a2) {
      case 1:
        {
          switch ($.taskType) {
            case "CUMULATIVE_TIMES":
            case "ORDER_MARK":
              break;
            case "FIXED_CHANNEL_DRAINAGE":
              break;
            case "RETRIEVE_LOCATION":
              _0x35f660 = true;
              console.log("去做领水滴任务 \"" + _0x42d567 + "\"");
              $.taskSourceUrl = "undefined";
              await sendRequest("farm_do_task");
              await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
              break;
            case "BROWSE_CHANNEL":
            case "BROWSE_PRODUCT":
            default:
              {
                if (_0x16b81d.taskSourceUrl) {
                  _0x35f660 = true;
                  console.log("去做领水滴任务 \"" + _0x42d567 + "\"");
                  await sendRequest("farm_do_task");
                  await $.wait(parseInt(Math.random() * 500 + 1000, 10));
                } else {
                  _0x35f660 = true;
                  await sendRequest("farm_task_detail");
                  await $.wait(parseInt(Math.random() * 500 + 1000, 10));
                  const _0x52b211 = $.farm_task_detail?.["taskDetaiList"] || [],
                    _0x5b0b51 = _0x52b211[0];
                  console.log("去做领水滴任务 \"" + _0x42d567 + "\"");
                  _0x5b0b51 ? ($.taskSourceUrl = _0x5b0b51.itemId, $.taskInsert = _0x5b0b51.taskInsert, await sendRequest("farm_do_task"), await $.wait(parseInt(Math.random() * 500 + 1000, 10))) : console.log("> 任务失败，没有获取到任务ID");
                }
                break;
              }
          }
          break;
        }
      case 2:
        {
          console.log("去领取 \"" + _0x42d567 + "\" 任务奖励");
          await sendRequest("farm_task_receive_award");
          await $.wait(parseInt(Math.random() * 500 + 1000, 10));
          break;
        }
      default:
        console.log("任务 \"" + _0x16b81d.mainTitle + "\" 状态未知：" + _0x16b81d.taskStatus);
        break;
    }
  }
  if (_0x35f660) {
    await sendRequest("farm_task_list");
    await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
    _0x2e2394 = $.farm_task_list?.["taskList"] || [];
    for (let _0x242091 of _0x2e2394) {
      const _0x352691 = _0x242091.mainTitle;
      $.taskId = _0x242091.taskId;
      $.taskType = _0x242091.taskType;
      _0x242091.taskStatus === 2 && (console.log("去领取 \"" + _0x352691 + "\" 任务奖励"), await sendRequest("farm_task_receive_award"), await $.wait(parseInt(Math.random() * 500 + 1000, 10)));
    }
    console.log("");
  }
}
async function lotterydraw() {
  $.apTaskList = "";
  await sendRequest("apTaskList");
  if (!$.apTaskList) {
    return;
  }
  if ($.apTaskList) {
    const _0x275eed = $.apTaskList || [];
    for (let _0x90182 = 0; _0x90182 < _0x275eed.length; _0x90182++) {
      $.taskId = _0x275eed[_0x90182].id;
      $.taskType = _0x275eed[_0x90182].taskType;
      $.taskSourceUrl = _0x275eed[_0x90182].taskSourceUrl;
      const _0x34e0c4 = _0x275eed[_0x90182].taskFinished,
        _0xf8e9d7 = _0x275eed[_0x90182].taskShowTitle;
      !_0x34e0c4 && $.taskType.includes("BROWSE_") && (console.log("去做幸运转盘任务 \"" + _0xf8e9d7 + "\""), await sendRequest("apsDoTask"), await $.wait(parseInt(Math.random() * 500 + 1000, 10)));
    }
  }
  await sendRequest("wheelsHome");
  await $.wait(parseInt(Math.random() * 1000 + 2000, 10));
  if ($.lotteryChances > 0) {
    $.wheelsLotteryHot = false;
    console.log("当前剩余" + ($.lotteryChances || 0) + "次抽奖机会");
    const _0x21ba2e = Math.min($.lotteryChances, 3);
    for (let _0x21daba = 0; _0x21daba < _0x21ba2e; _0x21daba++) {
      await sendRequest("wheelsLottery");
      await $.wait(parseInt(Math.random() * 2000 + 4000, 10));
      if ($.wheelsLotteryHot) {
        break;
      }
    }
  }
}
async function getAssistRewards() {
  $.farm_assist_init_info_hot = true;
  $.farm_assist_init_info = "";
  await sendRequest("farm_assist_init_info");
  if (!$.farm_assist_init_info || $.farm_assist_init_info_hot) {
    return;
  }
  await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
  const _0x271359 = $.farm_assist_init_info?.["result"]?.["assistStageList"] || [],
    _0x55794d = $.farm_assist_init_info?.["result"]?.["assistFriendList"] || [];
  let _0x5d5d51 = "";
  if (_0x55794d.length > 0) {
    for (let _0x5dc0ad = 0; _0x5dc0ad < _0x55794d.length; _0x5dc0ad++) {
      const _0x24eeb7 = _0x55794d[_0x5dc0ad],
        _0xdc5583 = _0x24eeb7.nickname;
      _0x5dc0ad !== _0x55794d.length - 1 ? _0x5d5d51 += _0xdc5583 + "、" : _0x5d5d51 += "" + _0xdc5583;
    }
    console.log("\n当前已有" + _0x55794d.length + "位好友助力：" + _0x5d5d51);
    $.message.insert("已有" + _0x55794d.length + "人助力");
  }
  _0x764d43: for (let _0x50a271 of _0x271359) {
    const _0x4b1c92 = _0x50a271?.["assistNum"],
      _0x361641 = _0x50a271?.["waterEnergy"];
    switch (_0x50a271?.["stageStaus"]) {
      case 1:
        break _0x764d43;
      case 2:
        console.log("去领取" + _0x4b1c92 + "人助力奖励【" + _0x361641 + "g水滴】");
        await sendRequest("farm_assist_receive_award");
        await $.wait(parseInt(Math.random() * 500 + 1000, 10));
        break;
      case 3:
        console.log(_0x4b1c92 + "人助力奖励【" + _0x361641 + "g水滴】已领过");
        break;
      default:
        {
          console.log("未知助力等级状态：" + _0x50a271?.["stageStaus"]);
          break;
        }
    }
  }
}
async function goWatering() {
  $.farm_home = "";
  await sendRequest("farm_home");
  $.bottleWater = $.farm_home?.["result"]?.["bottleWater"] || 0;
  $.canFastWater = $.farm_home?.["result"]?.["canFastWater"] || false;
  console.log("\n当前剩余水滴：" + ($.bottleWater || 0) + "g💧，" + ($.canFastWater ? "可以快速浇水[" + (retainWater ? "开启" : "关闭") + "]" : "不能快速浇水"));
  $.message.insert("剩余水滴" + ($.bottleWater || 0) + "g");
  if ($.bottleWater < 10 || !$.canWatering) {
    return;
  }
  if (retainWater && $.canFastWater) {
    console.log("当前已经设置快速浇水，去快速浇水~");
    for (let _0x5e9925 = 0; _0x5e9925 < 50; _0x5e9925++) {
      $.waterType = 2;
      await sendRequest("farm_water");
      await $.wait(parseInt(Math.random() * 2000 + 2000, 10));
      if (!$.canWatering) {
        break;
      }
    }
  } else {
    let _0x3585ea = Math.min(waternum, parseInt($.bottleWater / 10));
    console.log("已设置浇水" + (waternum || 0) + "次，去浇水~");
    for (let _0x470efb = 0; _0x470efb < _0x3585ea; _0x470efb++) {
      $.waterType = 1;
      await sendRequest("farm_water");
      await $.wait(parseInt(Math.random() * 2000 + 2000, 10));
      if (!$.canWatering) {
        break;
      }
    }
  }
  $.message.insert("剩余水滴" + ($.bottleWater || 0) + "g");
}
async function awarddetail() {
  $.farm_award_detail = "";
  await sendRequest("farm_award_detail");
  await $.wait(parseInt(Math.random() * 500 + 500, 10));
  $.plantAwards = $.farm_award_detail?.["plantAwards"] || [];
  let _0x82f7de = [];
  for (let _0x561b14 of $.plantAwards) {
    const _0x3b12f6 = _0x561b14.awardStatus || 0,
      _0x690c6d = _0x561b14.awardType || 0,
      _0x51fd0f = _0x690c6d === 1 ? "实物卷" : _0x690c6d === 2 ? "通用红包" : "未知",
      _0x4a56fb = _0x561b14.exchangeRemind,
      _0x3a1624 = _0x561b14.plantCompleteTip;
    switch (_0x3b12f6) {
      case 1:
        _0x82f7de.push(_0x51fd0f + "[已领取]:" + _0x4a56fb);
        $.message.insert("种植的水果奖品[已领取]:" + _0x4a56fb + ",请尽快去使用~");
        await notify.sendNotify($.name + "奖品通知", "【京东账号" + $.index + "】" + $.UserName + "\n种植的水果奖励[" + _0x51fd0f + "][已领取]:" + _0x4a56fb + ",请尽快去使用~\n\n");
        break;
      case 2:
        _0x82f7de.push(_0x51fd0f + "[已使用]:" + _0x4a56fb);
        break;
      case 3:
        _0x82f7de.push(_0x51fd0f + "[未知状态]:" + _0x4a56fb);
        break;
      case 4:
        _0x82f7de.push(_0x51fd0f + "[已过期]:" + _0x3a1624);
        break;
      default:
        {
          _0x82f7de.push("未知助力奖励状态：" + _0x3b12f6);
          break;
        }
    }
  }
  if (_0x82f7de.length > 0) {
    const _0x4e429d = _0x82f7de.slice(0, 3);
    console.log("\n最近种植成熟记录:：\n" + _0x4e429d.join("\n"));
  }
}
function getGrowthWord(_0x1f390a, _0x11010e) {
  if (_0x11010e === "100" || _0x11010e === 100) {
    switch (_0x1f390a) {
      case 1:
        return "果树发芽了";
      case 2:
        return "果树长大了";
      case 3:
        return "果树开花了";
      case 4:
        return "果树结果了";
      case 5:
        return "果树成熟了";
    }
  } else {
    const _0x3a68bc = (100 - _0x11010e).toFixed(2) + "%";
    let _0xa01a0b = 0;
    switch (_0x1f390a) {
      case 1:
        _0xa01a0b = Math.floor(parseFloat(_0x3a68bc) * 100 / 333);
        return "距离长大还有" + _0x3a68bc + "，还需浇" + _0xa01a0b + "次";
      case 2:
        _0xa01a0b = Math.ceil(parseFloat(_0x3a68bc) * 100 / 200);
        return "距离开花还有" + _0x3a68bc + "，还需浇" + _0xa01a0b + "次";
      case 3:
        _0xa01a0b = Math.ceil(parseFloat(_0x3a68bc) * 100 / 167);
        return "距离结果还有" + _0x3a68bc + "，还需浇" + _0xa01a0b + "次";
      case 4:
        _0xa01a0b = Math.floor(parseFloat(_0x3a68bc) * 1000 / 37);
        return "距离成熟还有" + _0x3a68bc + "，还需浇" + _0xa01a0b + "次";
    }
  }
}
async function handleResponse(_0x47dfae, _0x876f18) {
  try {
    switch (_0x47dfae) {
      case "farm_home":
        if (_0x876f18.code === 0 && _0x876f18.data?.["bizCode"] === 0) {
          $.farm_home = _0x876f18.data;
          $.farmHot = false;
        } else {
          if (_0x876f18.data?.["bizMsg"]) {
            $.farm_home = _0x876f18.data;
            console.log("初始化异常 ➜ " + _0x876f18.data.bizMsg + "（状态码" + _0x876f18.data?.["bizCode"] + "）");
            $.farmHot = true;
          } else {
            _0x876f18.errMsg || _0x876f18.msg ? (console.log("" + (_0x876f18.errMsg || _0x876f18.msg)), $.farmHot = true) : console.log("❓" + _0x47dfae + " " + JSON.stringify(_0x876f18));
          }
        }
        break;
      case "farm_tree_board":
        if (_0x876f18.code === 0 && _0x876f18.data?.["bizCode"] === 0) {
          $.farm_tree_board = _0x876f18.data?.["result"];
        } else {
          if (_0x876f18.data?.["bizMsg"]) {
            console.log("" + _0x876f18.data?.["bizMsg"]);
          } else {
            _0x876f18.errMsg || _0x876f18.msg ? console.log("" + (_0x876f18.errMsg || _0x876f18.msg)) : console.log("❓" + _0x47dfae + " " + JSON.stringify(_0x876f18));
          }
        }
        break;
      case "farm_plant_tree":
        if (_0x876f18.code === 0 && _0x876f18.data?.["bizCode"] === 0) {
          $.farmHot = false;
          console.log("✅ 种植成功\n");
          $.message.insert("种植新作物成功");
        } else {
          if (_0x876f18.data?.["bizMsg"]) {
            console.log("❌ 种植失败：" + _0x876f18.data?.["bizMsg"] + "\n");
            $.message.insert("种植新作物失败");
          } else {
            _0x876f18.message ? (console.log("❌ 种植失败：" + _0x876f18.message + "\n"), $.message.insert("种植新作物失败")) : console.log("❓" + _0x47dfae + " " + JSON.stringify(_0x876f18));
          }
        }
        break;
      case "farm_water":
        if (_0x876f18.code === 0 && _0x876f18.data?.["bizCode"] === 0) {
          const _0x102577 = _0x876f18.data?.["result"],
            {
              currentProcess: _0x3b3ae3,
              updateStage: _0x4e15da,
              treeFullStage: _0x5d5662,
              finished: _0x14b21d,
              waterNum: _0x2153ad,
              bottleWater: _0x483ec3,
              stagePrize = null
            } = _0x102577;
          $.bottleWater = _0x483ec3;
          let _0x4524fd = stagePrize?.["map"](_0x5aeaf2 => _0x5aeaf2.value + "水滴") || [];
          if (_0x4e15da) {
            let _0x13336e = "🚿 已浇水" + _0x2153ad + "g，" + getGrowthWord(_0x5d5662, 100);
            if (_0x4524fd.length) {
              _0x13336e += "，奖励【" + _0x4524fd.join("、") + "】";
            }
            console.log(_0x13336e);
          } else {
            console.log("🚿 已浇水" + _0x2153ad + "g，" + getGrowthWord(_0x5d5662, _0x3b3ae3));
          }
          (_0x14b21d || _0x5d5662 === 5) && ($.canWatering = false, console.log("\n🎉 果树成熟了~"), await notify.sendNotify($.name + "成熟通知", "【京东账号" + $.index + "】" + $.UserName + "\n种植的水果已成熟可以收获了~\n\n"));
        } else {
          if (_0x876f18.errMsg || _0x876f18.msg || _0x876f18.message) {
            console.log("" + (_0x876f18.errMsg || _0x876f18.msg || _0x876f18.message));
          } else {
            _0x876f18.data?.["bizMsg"] ? (console.log(_0x876f18.data?.["bizMsg"]), ["成熟", "没种树"].some(_0x4a73ec => _0x876f18.data.bizMsg.includes(_0x4a73ec)) && ($.canWatering = false)) : console.log("❓" + _0x47dfae + " " + JSON.stringify(_0x876f18));
          }
        }
        break;
      case "farm_task_list":
        if (_0x876f18.code === 0 && _0x876f18.data?.["bizCode"] === 0) {
          $.farm_task_list = _0x876f18.data?.["result"];
        } else {
          if (_0x876f18.data?.["bizMsg"]) {
            console.log("" + _0x876f18.data?.["bizMsg"]);
          } else {
            _0x876f18.errMsg || _0x876f18.msg ? console.log("" + (_0x876f18.errMsg || _0x876f18.msg)) : console.log("❓" + _0x47dfae + " " + JSON.stringify(_0x876f18));
          }
        }
        break;
      case "farm_task_detail":
        if (_0x876f18.code === 0 && _0x876f18.data?.["bizCode"] === 0) {
          $.farm_task_detail = _0x876f18.data?.["result"];
        } else {
          if (_0x876f18.data?.["bizCode"] === 6004) {
            $.farmHot = true;
            console.log("" + _0x876f18.data.bizMsg);
          } else {
            if (_0x876f18.data?.["bizMsg"]) {
              console.log("" + _0x876f18.data?.["bizMsg"]);
            } else {
              _0x876f18.errMsg || _0x876f18.msg ? console.log("" + (_0x876f18.errMsg || _0x876f18.msg)) : console.log("❓" + _0x47dfae + " " + JSON.stringify(_0x876f18));
            }
          }
        }
        break;
      case "farm_award_detail":
        if (_0x876f18.code === 0 && _0x876f18.data?.["bizCode"] === 0) {
          $.farm_award_detail = _0x876f18.data?.["result"];
        } else {
          if (_0x876f18.data?.["bizCode"] === 6004) {
            $.farmHot = true;
            console.log("" + _0x876f18.data.bizMsg);
          } else {
            if (_0x876f18.data?.["bizMsg"]) {
              console.log("" + _0x876f18.data?.["bizMsg"]);
            } else {
              _0x876f18.errMsg || _0x876f18.msg ? console.log("" + (_0x876f18.errMsg || _0x876f18.msg)) : console.log("❓" + _0x47dfae + " " + JSON.stringify(_0x876f18));
            }
          }
        }
        break;
      case "farm_assist_init_info":
        if (_0x876f18.code === 0 && _0x876f18.data?.["bizCode"] === 0) {
          $.farm_assist_init_info_hot = false;
          $.farm_assist_init_info = _0x876f18.data;
        } else {
          if (!_0x876f18.data?.["bizMsg"]) {
            _0x876f18.errMsg || _0x876f18.msg ? console.log("" + (_0x876f18.errMsg || _0x876f18.msg)) : console.log("❓" + _0x47dfae + " " + JSON.stringify(_0x876f18));
          }
        }
        break;
      case "farm_assist_receive_award":
        if (_0x876f18.code === 0 && _0x876f18.data?.["bizCode"] === 0) {
          console.log("> 领取成功");
        } else {
          if (_0x876f18.data?.["bizMsg"]) {
            console.log("" + _0x876f18.data?.["bizMsg"]);
          } else {
            _0x876f18.errMsg || _0x876f18.msg ? console.log("" + (_0x876f18.errMsg || _0x876f18.msg)) : console.log("❓" + _0x47dfae + " " + JSON.stringify(_0x876f18));
          }
        }
        break;
      case "farm_pop_window":
      case "farm_do_task":
        if (_0x876f18.code === 0 && _0x876f18.data?.["bizCode"] === 0) {
          console.log("> 任务完成");
        } else {
          if (_0x876f18.data?.["bizCode"] === 6004) {
            $.farmHot = true;
            console.log("> 任务失败 " + _0x876f18.data.bizMsg);
          } else {
            if (_0x876f18.data?.["bizMsg"]) {
              console.log("> 任务失败 " + _0x876f18.data.bizMsg);
            } else {
              _0x876f18.errMsg || _0x876f18.msg ? console.log("> 任务失败 " + (_0x876f18.errMsg || _0x876f18.msg)) : console.log("> 任务失败 " + _0x47dfae + " " + JSON.stringify(_0x876f18));
            }
          }
        }
        break;
      case "farm_task_receive_award":
        if (_0x876f18.code === 0 && _0x876f18.data?.["bizCode"] === 0) {
          let _0x48f25c = _0x876f18.data?.["result"]?.["taskAward"]?.["map"](_0x2098ef => "" + _0x2098ef.awardValue + (award_map[_0x2098ef.awardType] || "[type=" + awardType + "]"));
          console.log("> 领取成功，获得【" + _0x48f25c.join("、") + "】");
        } else {
          if (_0x876f18.errMsg || _0x876f18.msg) {
            console.log("> 领取失败 " + (_0x876f18.errMsg || _0x876f18.msg));
          } else {
            _0x876f18.data?.["bizMsg"] ? console.log("> 领取失败 " + _0x876f18.data?.["bizMsg"]) : console.log("> 领取失败 " + _0x47dfae + " " + JSON.stringify(_0x876f18));
          }
        }
        break;
      case "farm_rain_round_icon":
        if (_0x876f18.code === 0 && _0x876f18.data?.["bizCode"] === 0) {
          $.farm_rain_round_icon = _0x876f18.data;
        } else {
          if (_0x876f18.errMsg || _0x876f18.msg || _0x876f18.message) {
            console.log("" + (_0x876f18.errMsg || _0x876f18.msg || _0x876f18.message));
          } else {
            _0x876f18.data?.["bizMsg"] ? console.log(_0x876f18.data?.["bizMsg"]) : console.log("❓" + _0x47dfae + " " + JSON.stringify(_0x876f18));
          }
        }
        break;
      case "farm_rain_page":
        if (!(_0x876f18.code === 0 && _0x876f18.data?.["bizCode"] === 0)) {
          if (_0x876f18.errMsg || _0x876f18.msg || _0x876f18.message) {
            console.log("" + (_0x876f18.errMsg || _0x876f18.msg || _0x876f18.message));
          } else {
            _0x876f18.data?.["bizMsg"] ? console.log(_0x876f18.data?.["bizMsg"]) : console.log("❓" + _0x47dfae + " " + JSON.stringify(_0x876f18));
          }
        }
        break;
      case "farm_rain_reward":
        if (_0x876f18.code === 0 && _0x876f18.data?.["bizCode"] === 0) {
          let _0x5ef0b6 = _0x876f18.data?.["result"]?.["waterRainPrize"]?.["map"](_0x5760e8 => "" + _0x5760e8.value + _0x5760e8.prizeDesc);
          console.log("> 领取成功，获得【" + _0x5ef0b6.join("、") + "】");
        } else {
          if (_0x876f18.errMsg || _0x876f18.msg || _0x876f18.message) {
            console.log("" + (_0x876f18.errMsg || _0x876f18.msg || _0x876f18.message));
          } else {
            _0x876f18.data?.["bizMsg"] ? console.log(_0x876f18.data?.["bizMsg"]) : console.log("❓" + _0x47dfae + " " + JSON.stringify(_0x876f18));
          }
        }
        break;
      case "dongDongFarmSignHome":
        if (_0x876f18.code === 0 && _0x876f18.data) {
          $.dongDongFarmSignHome = _0x876f18.data;
        } else {
          if (_0x876f18.errMsg || _0x876f18.msg || _0x876f18.message) {
            console.log("" + (_0x876f18.errMsg || _0x876f18.msg || _0x876f18.message));
          } else {
            _0x876f18.data?.["bizMsg"] ? console.log(_0x876f18.data?.["bizMsg"]) : console.log("❓" + _0x47dfae + " " + JSON.stringify(_0x876f18));
          }
        }
        break;
      case "dongDongFarmSignIn":
        if (_0x876f18.code === 0 && _0x876f18.data) {
          console.log("> 签到成功，获得奖励【" + _0x876f18.data?.["prizeConfigName"] + "】");
        } else {
          if (_0x876f18.errMsg) {
            $.farmHot = true;
            console.log("> 签到失败 " + _0x876f18.errMsg);
          } else {
            _0x876f18.data?.["bizMsg"] ? console.log("> 签到失败 " + _0x876f18.data?.["bizMsg"]) : console.log("> 签到失败 " + _0x47dfae + " " + JSON.stringify(_0x876f18));
          }
        }
        break;
      case "wheelsHome":
        if (_0x876f18.code === 0 && _0x876f18.data) {
          $.lotteryChances = _0x876f18?.["data"]?.["lotteryChances"];
        } else {
          if (_0x876f18.errMsg || _0x876f18.msg || _0x876f18.message) {
            console.log("" + (_0x876f18.errMsg || _0x876f18.msg || _0x876f18.message));
          } else {
            _0x876f18.data?.["bizMsg"] ? console.log(_0x876f18.data?.["bizMsg"]) : console.log("❓" + _0x47dfae + " " + JSON.stringify(_0x876f18));
          }
        }
        break;
      case "apTaskList":
        if (_0x876f18.code === 0 && _0x876f18.data) {
          $.apTaskList = _0x876f18?.["data"];
        } else {
          if (_0x876f18.errMsg || _0x876f18.msg || _0x876f18.message) {
            console.log("" + (_0x876f18.errMsg || _0x876f18.msg || _0x876f18.message));
          } else {
            _0x876f18.data?.["bizMsg"] ? console.log(_0x876f18.data?.["bizMsg"]) : console.log("❓" + _0x47dfae + " " + JSON.stringify(_0x876f18));
          }
        }
        break;
      case "apsDoTask":
        if (_0x876f18.code === 0 && _0x876f18.data) {
          console.log("> 任务完成");
        } else {
          if (_0x876f18.errMsg || _0x876f18.msg || _0x876f18.message) {
            console.log("" + (_0x876f18.errMsg || _0x876f18.msg || _0x876f18.message));
          } else {
            _0x876f18.data?.["bizMsg"] ? console.log(_0x876f18.data?.["bizMsg"]) : console.log("❓" + _0x47dfae + " " + JSON.stringify(_0x876f18));
          }
        }
        break;
      case "wheelsLottery":
        if (_0x876f18.code === 0 && _0x876f18.data) {
          let _0x6ee2ad = _0x876f18.data?.["rewardType"];
          switch (_0x6ee2ad) {
            case 0:
            case null:
              console.log("> 抽到了空气");
              break;
            case 1:
            case 2:
              console.log("> 抽奖获得 " + _0x876f18.data?.["prizeName"]);
              break;
            case 18:
              console.log("> 抽奖获得 " + _0x876f18.data?.["prizeName"]["replace"]("水滴", "") + "💧");
              break;
            default:
              console.log("> 抽奖获得 " + _0x876f18.data?.["prizeName"]);
              return;
          }
        } else {
          if (_0x876f18.errMsg || _0x876f18.msg || _0x876f18.message) {
            console.log("" + (_0x876f18.errMsg || _0x876f18.msg || _0x876f18.message));
          } else {
            _0x876f18.data?.["bizMsg"] ? console.log(_0x876f18.data?.["bizMsg"]) : console.log("❓" + _0x47dfae + " " + JSON.stringify(_0x876f18));
          }
        }
        break;
    }
  } catch (_0x6ae601) {
    console.log("❌ 未能正确处理 " + _0x47dfae + " 请求响应 " + (_0x6ae601.message || _0x6ae601));
  }
}
async function sendRequest(_0x442a4d) {
  if ($.runEnd) {
    return;
  }
  let _0xb733e0 = "",
    _0x2df836 = null,
    _0x44d7f5 = null,
    _0x4f1912 = "POST",
    _0x523c83 = {},
    _0x5905e8 = {};
  switch (_0x442a4d) {
    case "farm_home":
      _0x5905e8 = {
        appId: "c57f6",
        functionId: "farm_home",
        appid: "signed_wh5",
        clientVersion: common.getLatestAppVersion(),
        client: "apple",
        body: {
          version: 3
        },
        version: "4.2",
        ua: $.UA,
        t: true
      };
      _0x523c83 = await H5st2.getH5st(_0x5905e8);
      _0xb733e0 = "https://api.m.jd.com/client.action";
      _0x2df836 = _0x523c83.paramsData;
      break;
    case "farm_tree_board":
      _0x5905e8 = {
        appId: "c57f6",
        functionId: "farm_tree_board",
        appid: "signed_wh5",
        clientVersion: common.getLatestAppVersion(),
        client: "apple",
        body: {
          version: 3
        },
        version: "4.2",
        ua: $.UA,
        t: true
      };
      _0x523c83 = await H5st2.getH5st(_0x5905e8);
      _0xb733e0 = "https://api.m.jd.com/client.action";
      _0x2df836 = _0x523c83.paramsData;
      break;
    case "farm_plant_tree":
      _0x5905e8 = {
        appId: "c57f6",
        functionId: "farm_plant_tree",
        appid: "signed_wh5",
        clientVersion: common.getLatestAppVersion(),
        client: "apple",
        body: {
          version: 3,
          uid: $.plantSkuUid
        },
        version: "4.2",
        ua: $.UA,
        t: true
      };
      _0x523c83 = await H5st2.getH5st(_0x5905e8);
      _0xb733e0 = "https://api.m.jd.com/client.action";
      _0x2df836 = _0x523c83.paramsData;
      break;
    case "farm_water":
      _0x5905e8 = {
        appId: "28981",
        functionId: "farm_water",
        appid: "signed_wh5",
        clientVersion: common.getLatestAppVersion(),
        client: "apple",
        body: {
          version: 3,
          waterType: $.waterType,
          babelChannel: "ttt7",
          lbsSwitch: false
        },
        version: "4.2",
        ua: $.UA,
        t: true
      };
      _0x523c83 = await H5st2.getH5st(_0x5905e8);
      _0xb733e0 = "https://api.m.jd.com/client.action";
      _0x2df836 = _0x523c83.paramsData;
      break;
    case "farm_assist_init_info":
      _0x5905e8 = {
        appId: "c57f6",
        functionId: "farm_assist_init_info",
        appid: "signed_wh5",
        clientVersion: common.getLatestAppVersion(),
        client: "apple",
        body: {
          version: 3,
          channel: 0
        },
        version: "4.2",
        ua: $.UA,
        t: true
      };
      _0x523c83 = await H5st2.getH5st(_0x5905e8);
      _0xb733e0 = "https://api.m.jd.com/client.action";
      _0x2df836 = _0x523c83.paramsData;
      break;
    case "farm_task_list":
      _0x5905e8 = {
        appId: "c57f6",
        functionId: "farm_task_list",
        appid: "signed_wh5",
        clientVersion: common.getLatestAppVersion(),
        client: "apple",
        body: {
          version: 3,
          channel: 0,
          babelChannel: "ttt7",
          lbsSwitch: false
        },
        version: "4.2",
        ua: $.UA,
        t: true
      };
      _0x523c83 = await H5st2.getH5st(_0x5905e8);
      _0xb733e0 = "https://api.m.jd.com/client.action";
      _0x2df836 = _0x523c83.paramsData;
      break;
    case "farm_pop_window":
      _0x5905e8 = {
        appId: "c57f6",
        functionId: "farm_pop_window",
        appid: "signed_wh5",
        clientVersion: common.getLatestAppVersion(),
        client: "apple",
        body: {
          version: 3
        },
        version: "4.2",
        ua: $.UA,
        t: true
      };
      _0x523c83 = await H5st2.getH5st(_0x5905e8);
      _0xb733e0 = "https://api.m.jd.com/client.action";
      _0x2df836 = _0x523c83.paramsData;
      break;
    case "farm_rain_round_icon":
      _0x5905e8 = {
        appId: "c57f6",
        functionId: "farm_rain_round_icon",
        appid: "signed_wh5",
        clientVersion: common.getLatestAppVersion(),
        client: "apple",
        body: {
          version: 3
        },
        version: "4.2",
        ua: $.UA,
        t: true
      };
      _0x523c83 = await H5st2.getH5st(_0x5905e8);
      _0xb733e0 = "https://api.m.jd.com/client.action";
      _0x2df836 = _0x523c83.paramsData;
      break;
    case "farm_task_detail":
      _0x5905e8 = {
        appId: "c57f6",
        functionId: "farm_task_detail",
        appid: "signed_wh5",
        clientVersion: common.getLatestAppVersion(),
        client: "apple",
        body: {
          version: 3,
          taskType: $.taskType,
          taskId: $.taskId,
          channel: 0
        },
        version: "4.2",
        ua: $.UA,
        t: true
      };
      _0x523c83 = await H5st2.getH5st(_0x5905e8);
      _0xb733e0 = "https://api.m.jd.com/client.action";
      _0x2df836 = _0x523c83.paramsData;
      break;
    case "farm_award_detail":
      _0x4f1912 = "GET";
      _0xb733e0 = "https://api.m.jd.com/client.action";
      _0x44d7f5 = {
        functionId: "farm_award_detail",
        body: JSON.stringify({
          version: 3,
          type: 1
        }),
        t: Date.now(),
        appid: "signed_wh5",
        client: "ios",
        clientVersion: common.getLatestAppVersion()
      };
      break;
    case "farm_do_task":
      _0x5905e8 = {
        appId: "28981",
        functionId: "farm_do_task",
        appid: "signed_wh5",
        clientVersion: common.getLatestAppVersion(),
        client: "apple",
        body: {
          version: 3,
          taskType: $.taskType,
          taskId: $.taskId,
          taskInsert: $.taskInsert,
          itemId: Buffer.from($.taskSourceUrl, "utf-8").toString("base64"),
          channel: 0
        },
        version: "4.2",
        ua: $.UA,
        t: true
      };
      _0x523c83 = await H5st2.getH5st(_0x5905e8);
      _0xb733e0 = "https://api.m.jd.com/client.action";
      _0x2df836 = _0x523c83.paramsData;
      break;
    case "farm_task_receive_award":
      _0x5905e8 = {
        appId: "33e0f",
        functionId: "farm_task_receive_award",
        appid: "signed_wh5",
        clientVersion: common.getLatestAppVersion(),
        client: "apple",
        body: {
          version: 3,
          taskType: $.taskType,
          taskId: $.taskId,
          channel: 0
        },
        version: "4.2",
        ua: $.UA,
        t: true
      };
      _0x523c83 = await H5st2.getH5st(_0x5905e8);
      _0xb733e0 = "https://api.m.jd.com/client.action";
      _0x2df836 = _0x523c83.paramsData;
      break;
    case "farm_assist_receive_award":
      _0x5905e8 = {
        appId: "c4332",
        functionId: "farm_assist_receive_award",
        appid: "signed_wh5",
        clientVersion: common.getLatestAppVersion(),
        client: "apple",
        body: {
          version: 3
        },
        version: "4.2",
        ua: $.UA,
        t: true
      };
      _0x523c83 = await H5st2.getH5st(_0x5905e8);
      _0xb733e0 = "https://api.m.jd.com/client.action";
      _0x2df836 = _0x523c83.paramsData;
      break;
    case "dongDongFarmSignHome":
      _0x5905e8 = {
        appId: "deba1",
        functionId: "dongDongFarmSignHome",
        appid: "activities_platform",
        clientVersion: common.getLatestAppVersion(),
        client: "apple",
        body: {
          linkId: sign_linkId
        },
        version: "4.7",
        ua: $.UA,
        t: true
      };
      _0x523c83 = await H5st.getH5st(_0x5905e8);
      _0xb733e0 = "https://api.m.jd.com/api";
      _0x2df836 = _0x523c83.paramsData;
      break;
    case "dongDongFarmSignIn":
      _0x5905e8 = {
        appId: "65f9d",
        functionId: "dongDongFarmSignIn",
        appid: "activities_platform",
        clientVersion: common.getLatestAppVersion(),
        client: "apple",
        body: {
          linkId: sign_linkId
        },
        version: "4.7",
        ua: $.UA,
        t: true
      };
      _0x523c83 = await H5st.getH5st(_0x5905e8);
      _0xb733e0 = "https://api.m.jd.com/api";
      _0x2df836 = _0x523c83.paramsData;
      break;
    case "farm_rain_round_icon":
      _0x5905e8 = {
        appId: "c57f6",
        functionId: "farm_rain_round_icon",
        appid: "signed_wh5",
        clientVersion: common.getLatestAppVersion(),
        client: "apple",
        body: {
          version: 3
        },
        version: "4.2",
        ua: $.UA,
        t: true
      };
      _0x523c83 = await H5st2.getH5st(_0x5905e8);
      _0xb733e0 = "https://api.m.jd.com/client.action";
      _0x2df836 = _0x523c83.paramsData;
      break;
    case "farm_rain_page":
      _0x5905e8 = {
        appId: "c57f6",
        functionId: "farm_rain_page",
        appid: "signed_wh5",
        clientVersion: common.getLatestAppVersion(),
        client: "apple",
        body: {
          version: 3,
          token: $.curRoundToken
        },
        version: "4.2",
        ua: $.UA,
        t: true
      };
      _0x523c83 = await H5st2.getH5st(_0x5905e8);
      _0xb733e0 = "https://api.m.jd.com/client.action";
      _0x2df836 = _0x523c83.paramsData;
      break;
    case "farm_rain_reward":
      _0x5905e8 = {
        appId: "c57f6",
        functionId: "farm_rain_reward",
        appid: "signed_wh5",
        clientVersion: common.getLatestAppVersion(),
        client: "apple",
        body: {
          version: 3,
          token: $.curRoundToken,
          bcc: 48,
          scc: 0
        },
        version: "4.2",
        ua: $.UA,
        t: true
      };
      _0x523c83 = await H5st2.getH5st(_0x5905e8);
      _0xb733e0 = "https://api.m.jd.com/client.action";
      _0x2df836 = _0x523c83.paramsData;
      break;
    case "wheelsHome":
      _0x5905e8 = {
        appId: "c06b7",
        functionId: "wheelsHome",
        appid: "activities_platform",
        clientVersion: common.getLatestAppVersion(),
        client: "ios",
        body: {
          linkId: draw_linkId
        },
        version: "4.7",
        ua: $.UA,
        t: true
      };
      _0x523c83 = await H5st.getH5st(_0x5905e8);
      _0xb733e0 = "http://api.m.jd.com/api";
      _0x2df836 = _0x523c83.paramsData;
      break;
    case "wheelsLottery":
      _0x5905e8 = {
        appId: "bd6c8",
        functionId: "wheelsLottery",
        appid: "activities_platform",
        clientVersion: common.getLatestAppVersion(),
        client: "ios",
        body: {
          linkId: draw_linkId
        },
        version: "4.7",
        ua: $.UA,
        t: true
      };
      _0x523c83 = await H5st.getH5st(_0x5905e8);
      _0xb733e0 = "http://api.m.jd.com/api";
      _0x2df836 = _0x523c83.paramsData;
      break;
    case "apTaskList":
      _0x4f1912 = "GET";
      _0xb733e0 = "https://api.m.jd.com/api";
      _0x44d7f5 = {
        functionId: "apTaskList",
        body: JSON.stringify({
          linkId: draw_linkId
        }),
        t: Date.now(),
        appid: "activities_platform",
        client: "ios",
        clientVersion: common.getLatestAppVersion()
      };
      break;
    case "apsDoTask":
      _0x5905e8 = {
        appId: "54ed7",
        functionId: "apsDoTask",
        appid: "activities_platform",
        clientVersion: common.getLatestAppVersion(),
        client: "ios",
        body: {
          taskType: $.taskType,
          taskId: $.taskId,
          channel: 4,
          checkVersion: true,
          linkId: draw_linkId,
          itemId: $.taskSourceUrl
        },
        version: "4.7",
        ua: $.UA,
        t: true
      };
      _0x523c83 = await H5st.getH5st(_0x5905e8);
      _0xb733e0 = "https://api.m.jd.com/api";
      _0x2df836 = _0x523c83.paramsData;
      break;
    default:
      console.log("❌ 未知请求 " + _0x442a4d);
      return;
  }
  const _0x5adbbc = {
    wqDefault: "false",
    rfs: "0000",
    cthr: "1",
    loginType: "",
    loginWQBiz: "wegame",
    openudid: $.UUID,
    uuid: $.UUID,
    build: common.getLatestAppBuildVersion(),
    screen: "430*932",
    networkType: "wifi",
    d_brand: "iPhone",
    d_model: "iPhone16,2",
    lang: "zh_CN",
    osVersion: common.getLatestIOSVersion(),
    partner: ""
  };
  _0x2df836 && Object.assign(_0x2df836, _0x5adbbc);
  _0x44d7f5 && Object.assign(_0x44d7f5, _0x5adbbc);
  const _0x1c810e = {
    url: _0xb733e0,
    method: _0x4f1912,
    headers: {
      Accept: "application/json, text/plain, */*",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "zh-cn",
      Connection: "keep-alive",
      "Content-Type": "application/x-www-form-urlencoded",
      Cookie: cookie,
      Host: "api.m.jd.com",
      Referer: "https://h5.m.jd.com/",
      "X-Referer-Page": "https://h5.m.jd.com/pb/015686010/Bc9WX7MpCW7nW9QjZ5N3fFeJXMH/index.html",
      Origin: "https://h5.m.jd.com",
      "x-rp-client": "h5_1.0.0",
      "User-Agent": $.UA
    },
    params: _0x44d7f5,
    data: _0x2df836,
    timeout: 30000,
    httpsTlsOptions: ["wheelsHome", "wheelsLottery"].includes(_0x442a4d) ? common.useAppTls() : null
  };
  ["wheelsHome", "apsDoTask", "wheelsLottery", "apTaskList"].includes(_0x442a4d) && (_0x1c810e.headers.Referer = "https://lotterydraw-new.jd.com/?id=" + draw_linkId, _0x1c810e.headers.Origin = "https://lotterydraw-new.jd.com", _0x1c810e.headers["X-Referer-Page"] = "https://lotterydraw-new.jd.com/");
  _0x4f1912 === "GET" && (delete _0x1c810e.data, delete _0x1c810e.headers["Content-Type"]);
  const _0x200570 = 1;
  let _0x22c384 = 0,
    _0x463f24 = null,
    _0x13e371 = false;
  while (_0x22c384 < _0x200570) {
    _0x22c384 > 0 && (await $.wait(1000));
    const _0x538a75 = await common.request(_0x1c810e);
    if (!_0x538a75.success) {
      _0x463f24 = "🚫 " + _0x442a4d + " 请求失败 ➜ " + _0x538a75.error;
      _0x22c384++;
      _0x538a75.status && _0x538a75.status === 403 && ["wheelsLottery"].includes(_0x442a4d) && ($.wheelsLotteryHot = true);
      continue;
    }
    if (!_0x538a75.data) {
      _0x463f24 = "🚫 " + _0x442a4d + " 请求失败 ➜ 无响应数据";
      _0x22c384++;
      continue;
    }
    await handleResponse(_0x442a4d, _0x538a75.data);
    _0x13e371 = false;
    break;
  }
  _0x22c384 >= _0x200570 && (console.log(_0x463f24), _0x13e371 && ($.outFlag = true, $.message && $.message.fix(_0x463f24)));
}
class H5st42 {
  constructor() {
    this._algoKey = CryptoJS.enc.Utf8.parse("wm0!@w-s#ll1flo(");
    this._ivKey = CryptoJS.enc.Utf8.parse("0102030405060708");
    this._tokenMaps = {
      4.2: {}
    };
    this._algoMaps = {
      4.2: {}
    };
    this._fpMaps = new Map();
    this._latestAppVersionData = {
      build: common.getLatestAppBuildVersion(),
      version: common.getLatestAppVersion()
    };
    this._latestIOSVersion = common.getLatestIOSVersion();
  }
  async getH5st(_0x280106) {
    let _0x57d3cb = Object.assign({}, _0x280106, {
      h5st: "",
      params: "",
      paramsData: {}
    });
    try {
      if (!(typeof _0x280106 === "object" && _0x280106 !== null)) {
        console.log("❌ getH5st 传入参数有误");
        return _0x57d3cb;
      } else {
        const _0x5c4060 = ["appId", "appid", "body", "functionId"],
          _0x1291c2 = _0x5c4060.filter(_0x3e7b1f => !_0x280106[_0x3e7b1f]);
        if (_0x1291c2.length > 0) {
          console.log("❌ getH5st 传入参数有误，缺少必要参数：" + _0x1291c2.join(", "));
          return _0x57d3cb;
        }
      }
      _0x280106.version = "4.2";
      const _0x242012 = this._initParams(_0x280106),
        {
          appid: _0x2d6092,
          body: _0x5b1a08,
          client: _0x3d5dc2,
          clientVersion: _0x522939,
          functionId: _0x40b216
        } = _0x280106;
      let _0x37a40e = "",
        _0x1d290d = "";
      const _0x355d86 = await this._requestAlgo(_0x242012);
      _0x37a40e = _0x355d86.token;
      _0x1d290d = _0x355d86.algo;
      if (!_0x37a40e && !_0x1d290d) {
        return _0x57d3cb;
      }
      const _0x1f6df3 = {
        appid: _0x2d6092,
        body: _0x5b1a08,
        client: _0x3d5dc2,
        clientVersion: _0x522939,
        functionId: _0x40b216,
        t: _0x280106.t
      };
      _0x280106?.["t"] && typeof _0x280106.t === "boolean" ? _0x280106.t = Date.now() : _0x280106.t = "";
      if (!_0x1f6df3.client) {
        delete _0x1f6df3.client;
      }
      if (!_0x1f6df3.clientVersion) {
        delete _0x1f6df3.clientVersion;
      }
      const _0x5946da = this._makeSign(_0x1f6df3, _0x37a40e, _0x1d290d, _0x242012),
        _0x28d06e = {
          functionId: _0x40b216,
          body: JSON.stringify(_0x5b1a08),
          t: "",
          appid: _0x2d6092,
          client: "",
          clientVersion: "",
          h5st: _0x5946da?.["h5st"] || ""
        };
      for (const _0x2b1035 of ["t", "client", "clientVersion"]) {
        _0x280106[_0x2b1035] ? _0x28d06e[_0x2b1035] = _0x280106[_0x2b1035] : delete _0x28d06e[_0x2b1035];
      }
      Object.assign(_0x57d3cb, {
        h5st: _0x5946da?.["h5st"] || "",
        params: querystring.stringify(_0x28d06e),
        paramsData: _0x28d06e
      });
    } catch (_0x5068e1) {
      console.log("❌ getH5st 遇到了错误 " + (_0x5068e1.message || _0x5068e1));
    }
    return _0x57d3cb;
  }
  _initParams(_0x494e7b) {
    const _0x16de93 = {
      version: "",
      appId: _0x494e7b?.["appId"] || "",
      fv: "",
      fp: "",
      ua: "",
      sua: "",
      av: "",
      url: "",
      og: "",
      referer: _0x494e7b?.["referer"] || "",
      pin: _0x494e7b?.["pin"] || "",
      cookie: _0x494e7b?.["cookie"] || ""
    };
    if (_0x494e7b?.["ua"]) {
      let _0x2ffb69 = _0x494e7b.ua,
        _0x56506c = _0x2ffb69.match(/^[\s\S]*?\(([\s\S]*?)\)/),
        _0x3e3489 = _0x2ffb69.match(/(?<=\/)[0-9]\.0[^'"\n]+/g);
      _0x56506c?.["length"] > 0 && _0x3e3489?.["length"] > 0 && (_0x16de93.ua = _0x2ffb69, _0x16de93.sua = _0x56506c[1], _0x16de93.av = _0x3e3489[0]);
    }
    if (!_0x16de93.ua) {
      let _0x5daa27 = this._genUA(),
        _0x1b914f = _0x5daa27.match(/^[\s\S]*?\(([\s\S]*?)\)/),
        _0x389b3b = _0x5daa27.match(/(?<=\/)[0-9]\.0[^'"\n]+/g);
      _0x1b914f?.["length"] > 0 && _0x389b3b?.["length"] > 0 && (_0x16de93.ua = _0x5daa27, _0x16de93.sua = _0x1b914f[1], _0x16de93.av = _0x389b3b[0]);
    }
    _0x16de93.version = "4.2";
    _0x16de93.fv = "h5_npm_v4.2.0";
    _0x16de93.fp = this._fpMaps.get(_0x16de93.ua) || "";
    !_0x16de93.fp && (_0x16de93.fp = this._makeFp(), _0x16de93.ua.startsWith("jd") && this._fpMaps.set(_0x16de93.ua, _0x16de93.fp));
    if (_0x494e7b?.["url"]) {
      try {
        const _0x719422 = new URL(_0x494e7b.url);
        _0x16de93.url = _0x719422.href;
        _0x16de93.og = _0x719422.origin;
      } catch {}
    }
    return _0x16de93;
  }
  async _requestAlgo(_0x1817d4) {
    try {
      const _0x141e23 = this._getExpandParamsData(_0x1817d4);
      let _0xc22fa4 = this._AESEncrypt(JSON.stringify(_0x141e23, null, 2), this._algoKey);
      const _0x575275 = {
          version: _0x1817d4.version,
          fp: _0x1817d4.fp,
          appId: _0x1817d4.appId,
          timestamp: Date.now(),
          platform: "web",
          expandParams: _0xc22fa4,
          fv: _0x1817d4.fv
        },
        _0x1c3094 = {
          url: "https://cactus.jd.com/request_algo?g_ty=ajax",
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
            Origin: "https://cactus.jd.com",
            Host: "cactus.jd.com",
            Accept: "*/*",
            "User-Agent": _0x1817d4?.["ua"] || "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1 Edg/122.0.0.0"
          },
          data: _0x575275,
          proxy: null,
          timeout: 60000,
          debug: false
        };
      let _0x14783d = 0,
        _0x1bc5e2 = null;
      const _0xcdc1b9 = 1;
      while (_0x14783d < _0xcdc1b9) {
        const _0x1a8623 = await common.request(_0x1c3094);
        if (!_0x1a8623.success) {
          _0x1bc5e2 = "❌ getH5st request_algo 请求失败 ➜ " + _0x1a8623.error;
          _0x14783d++;
          continue;
        }
        if (!_0x1a8623.data) {
          _0x1bc5e2 = "🚫 getH5st request_algo 请求失败 ➜ 无响应数据";
          _0x14783d++;
          continue;
        }
        try {
          const _0x19e92b = _0x1a8623.data;
          if (_0x19e92b?.["data"] && _0x19e92b?.["data"]?.["result"]) {
            const _0x4a0ed4 = _0x19e92b.data.result?.["algo"],
              _0x48f5ee = _0x19e92b.data.result?.["tk"];
            if (_0x4a0ed4 && _0x48f5ee) {
              return {
                token: _0x48f5ee,
                algo: _0x4a0ed4
              };
            }
          }
          _0x1bc5e2 = "🚫 getH5st request_algo 请求异常 ➜ " + JSON.stringify(_0x19e92b);
        } catch (_0x411c14) {
          _0x1bc5e2 = "❌ getH5st request_algo 在处理接口响应时遇到了错误 ➜ " + (_0x411c14.message || _0x411c14);
        }
        _0x14783d++;
      }
      _0x14783d >= _0xcdc1b9 && console.log(_0x1bc5e2);
    } catch (_0x10026c) {
      console.log("❌ getH5st request_algo 在处理API请求时遇到了错误 " + (_0x10026c.message || _0x10026c));
    }
    return {
      token: "",
      algo: ""
    };
  }
  _getExpandParamsData(_0xcda071) {
    return {
      wc: 0,
      wd: 0,
      l: "zh-CN",
      ls: "zh-CN,zh",
      ml: 0,
      pl: 0,
      av: _0xcda071.av,
      ua: _0xcda071.ua,
      sua: _0xcda071.sua,
      pp: _0xcda071.pin ? {
        p1: _0xcda071.pin,
        p2: _0xcda071.pin
      } : {},
      extend: {
        pm: 0,
        wd: 0,
        l: 0,
        ls: 2,
        wk: 0,
        bu1: "9.9.9"
      },
      pp1: _0xcda071.pin ? "" : _0xcda071.cookie,
      pm: {
        ps: "prompt",
        np: "default"
      },
      w: 400,
      h: 700,
      ow: 400,
      oh: 700,
      url: _0xcda071.url,
      og: _0xcda071.og,
      pr: 1.25,
      re: _0xcda071.referer,
      random: this._makeRandomStr(10),
      referer: _0xcda071.referer,
      v: _0xcda071.fv,
      ai: _0xcda071.appId,
      fp: _0xcda071.fp
    };
  }
  _makeSign(_0x324551, _0x435abc, _0x2bc024, _0x2d9f7c) {
    try {
      const _0x117a56 = _0x2d9f7c.version,
        _0x4f701a = Date.now(),
        _0x1a358a = new Date(_0x4f701a),
        _0x162909 = "" + _0x1a358a.getFullYear() + String(_0x1a358a.getMonth() + 1).padStart(2, "0") + String(_0x1a358a.getDate()).padStart(2, "0") + String(_0x1a358a.getHours()).padStart(2, "0") + String(_0x1a358a.getMinutes()).padStart(2, "0") + String(_0x1a358a.getSeconds()).padStart(2, "0") + String(_0x1a358a.getMilliseconds()).padStart(3, "0");
      let _0x4936a4 = Object.entries(_0x324551).map(([_0x3a970c, _0x7b7537]) => {
          _0x3a970c === "body" && (_0x7b7537 = CryptoJS.SHA256(JSON.stringify(_0x7b7537)).toString());
          return {
            key: _0x3a970c,
            value: _0x7b7537
          };
        }),
        _0x224159 = "",
        _0x3fbe18 = "";
      const _0x58b410 = _0x4936a4.map(_0xd6f67d => _0xd6f67d.key + ":" + _0xd6f67d.value).join("&"),
        _0x5e5554 = new Function("return ".concat(_0x2bc024))();
      let _0xf48e7e = _0x162909;
      _0xf48e7e += "74";
      let _0x12228a;
      _0x12228a = _0x5e5554(_0x435abc, _0x2d9f7c.fp, _0xf48e7e, _0x2d9f7c.appId, CryptoJS).toString() || "";
      _0x224159 = CryptoJS.SHA256("".concat(_0x12228a).concat(_0x58b410).concat(_0x12228a)).toString();
      let _0x5632cb = {};
      _0x5632cb = {
        sua: _0x2d9f7c.sua,
        pp: _0x2d9f7c.pin ? {
          p1: _0x2d9f7c.pin,
          p2: _0x2d9f7c.pin
        } : {},
        extend: {
          pm: 0,
          wd: 0,
          l: 0,
          ls: 2,
          wk: 0,
          bu1: "9.9.9"
        },
        random: this._makeRandomStr(10),
        referer: _0x2d9f7c.referer,
        v: _0x2d9f7c.fv,
        fp: _0x2d9f7c.fp
      };
      _0x3fbe18 = this._AESEncrypt(JSON.stringify(_0x5632cb, null, 2), CryptoJS.enc.Utf8.parse("DNiHi703B0&17hh1"));
      const _0x4159b9 = ["".concat(_0x162909), "".concat(_0x2d9f7c.fp), "".concat(_0x2d9f7c.appId), "".concat(_0x435abc), "".concat(_0x224159), "".concat(_0x117a56), "".concat(_0x4f701a), "".concat(_0x3fbe18)].join(";");
      return {
        _stk: _0x4936a4.map(_0x3978dd => _0x3978dd.key).join(","),
        _ste: 1,
        h5st: _0x4159b9
      };
    } catch (_0x53f3c0) {
      console.log("❌ getH5st 生成签名时遇到了错误 " + (_0x53f3c0.message || _0x53f3c0));
    }
    return {
      _stk: "",
      _ste: 0,
      h5st: ""
    };
  }
  _AESEncrypt(_0x3fd61f, _0x3f5f4c) {
    const _0x4155be = CryptoJS.enc.Utf8.parse(_0x3fd61f),
      _0x227fd5 = CryptoJS.AES.encrypt(_0x4155be, _0x3f5f4c, {
        iv: this._ivKey,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      });
    return CryptoJS.enc.Hex.stringify(CryptoJS.enc.Base64.parse(_0x227fd5.toString()));
  }
  _makeRandomStr(_0x73513a = 32, _0xce0e79 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-") {
    const _0x1e529f = _0xce0e79.length;
    let _0x31808e = "";
    for (let _0x252aaf = 0; _0x252aaf < _0x73513a; _0x252aaf++) {
      _0x31808e += _0xce0e79.charAt(Math.floor(Math.random() * _0x1e529f));
    }
    return _0x31808e;
  }
  _genUA() {
    function _0x18d133(_0x1dd6c = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", _0x1c2d69 = "0123456789abcdef") {
      let _0x34b74a = "";
      for (let _0x44fe1e of _0x1dd6c) {
        if (_0x44fe1e == "x") {
          _0x34b74a += _0x1c2d69.charAt(Math.floor(Math.random() * _0x1c2d69.length));
        } else {
          _0x44fe1e == "X" ? _0x34b74a += _0x1c2d69.charAt(Math.floor(Math.random() * _0x1c2d69.length)).toUpperCase() : _0x34b74a += _0x44fe1e;
        }
      }
      return _0x34b74a;
    }
    const _0x135fc4 = _0x18d133(),
      _0x28ad76 = ["jdapp", "iPhone", this._latestAppVersionData.version, "", "rn/" + _0x135fc4, "M/5.0", "appBuild/" + this._latestAppVersionData.build, "jdSupportDarkMode/0", "ef/1", "ep/%7B%22ciphertype%22%3A5%2C%22cipher%22%3A%7B%22ud%22%3A%22DG%3D%3D%22%2C%22sv%22%3A%22CG%3D%3D%22%2C%22iad%22%3A%22%22%7D%2C%22ts%22%3A" + Math.floor(Date.now() / 1000) + "%2C%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22version%22%3A%221.0.3%22%2C%22appname%22%3A%22com.360buy.jdmobile%22%2C%22ridx%22%3A-1%7D", "Mozilla/5.0 (iPhone; CPU iPhone OS " + this._latestIOSVersion.replace(".", "_") + " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "supportJDSHWK/1", ""],
      _0x18355b = _0x28ad76.join(";");
    return _0x18355b;
  }
  _makeFp() {
    function _0x12367c(_0x53ab55, _0x2e54e6) {
      return _0x53ab55 + Math.floor(Math.random() * (_0x2e54e6 + 1 - _0x53ab55));
    }
    function _0x367330(_0x15e6d7, _0x3a1b24) {
      for (var _0x42ace9 = [], _0x399b3a = 0; _0x399b3a < _0x15e6d7.length; _0x399b3a++) {
        var _0x1dadf7 = _0x15e6d7[_0x399b3a];
        if (_0x12367c(0, _0x15e6d7.length - _0x399b3a - 1) < _0x3a1b24 - _0x42ace9.length && (_0x42ace9.push(_0x1dadf7), _0x42ace9.length == _0x3a1b24)) {
          break;
        }
      }
      for (var _0x149acd = "", _0x273e5c = 0; _0x273e5c < _0x42ace9.length; _0x273e5c += 1) {
        var _0x5870d4 = Math.random() * (_0x42ace9.length - _0x273e5c) | 0;
        _0x149acd += _0x42ace9[_0x5870d4];
        _0x42ace9[_0x5870d4] = _0x42ace9[_0x42ace9.length - _0x273e5c - 1];
      }
      return _0x149acd;
    }
    function _0x6e3bc(_0x2f2e8a, _0x52793a) {
      for (var _0x2678dd = 0; _0x2678dd < _0x52793a.length; _0x2678dd += 1) {
        var _0x266f02 = _0x2f2e8a.indexOf(_0x52793a[_0x2678dd]);
        -1 !== _0x266f02 && (_0x2f2e8a = _0x2f2e8a.replace(_0x52793a[_0x2678dd], ""));
      }
      return _0x2f2e8a;
    }
    var _0x208492 = "6d0jhqw3pa",
      _0x46a823 = _0x367330(_0x208492, 4),
      _0x3ac1b1 = _0x12367c(0, 9),
      _0x13deb6 = _0x6e3bc(_0x208492, _0x46a823),
      _0x30f5a0 = {
        size: _0x3ac1b1,
        num: _0x13deb6
      };
    var _0x12367c = this._makeRandomStr(_0x30f5a0.size, _0x30f5a0.num) + _0x46a823 + this._makeRandomStr(12 - _0x3ac1b1 - 1, _0x13deb6) + _0x3ac1b1,
      _0x9f3c44 = _0x12367c.split(""),
      _0x531e40 = _0x9f3c44.slice(0, 14),
      _0x3746fe = _0x9f3c44.slice(14),
      _0x2c8b43 = [];
    while (_0x531e40.length > 0) {
      _0x2c8b43.push((35 - parseInt(_0x531e40.pop(), 36)).toString(36));
    }
    _0x2c8b43 = _0x2c8b43.concat(_0x3746fe);
    return _0x2c8b43.join("");
  }
}
const H5st2 = new H5st42();
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