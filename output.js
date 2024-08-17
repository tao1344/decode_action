//Sat Aug 17 2024 17:21:33 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x254e75 = "网络异常，跳过";
const _0x24a70a = require("request");
const _0x4843d1 = require("crypto");
const _0x2881a4 = process.env.HOST || "http://api.94wan.fun";
const _0x5f2026 = process.env.SIGN_HOST || "http://api.94wan.fun";
const {
  sendNotify
} = require("./sendNotify1.js");
const _0xd97f06 = require("dns");
const _0x2a4247 = require("md5");
const _0x34090d = ["iPad;3.7.0;14.4;network/wifi;Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;10;2346663656561603-4353564623932316;network/wifi;model/ONEPLUS A5010;addressid/0;aid/2dfceea045ed292a;oaid/;osVer/29;appBuild/1436;psn/BS6Y9SAiw0IpJ4ro7rjSOkCRZTgR3z2K|10;psq/5;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/10.5;jdv/;ref/com.jd.jdlite.lib.personal.view.fragment.JDPersonalFragment;partner/oppo;apprpd/MyJD_Main;eufv/1;Mozilla/5.0 (Linux; Android 10; ONEPLUS A5010 Build/QKQ1.191014.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045140 Mobile Safari/537.36", "iPhone;3.7.0;14.1;59d6ae6e8387bd09fe046d5b8918ead51614e80a;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone12,1;hasOCPay/0;appBuild/1017;supportBestPay/0;addressid/;pv/1.26;apprpd/;ref/JDLTSubMainPageViewController;psq/0;ads/;psn/59d6ae6e8387bd09fe046d5b8918ead51614e80a|3;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;13.5;22d679c006bf9c087abf362cf1d2e0020ebb8798;network/wifi;ADID/10857A57-DDF8-4A0D-A548-7B8F43AC77EE;hasUPPay/0;pushNoticeIsOpen/1;lang/zh_CN;model/iPhone12,1;addressid/2378947694;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/15.7;apprpd/Allowance_Registered;ref/JDLTTaskCenterViewController;psq/6;ads/;psn/22d679c006bf9c087abf362cf1d2e0020ebb8798|22;jdv/0|kong|t_1000170135|tuiguang|notset|1614153044558|1614153044;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 13.5;Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;10;2616935633265383-5333463636261326;network/UNKNOWN;model/M2007J3SC;addressid/1840745247;aid/ba9e3b5853dccb1b;oaid/371d8af7dd71e8d5;osVer/29;appBuild/1436;psn/t7JmxZUXGkimd4f9Jdul2jEeuYLwxPrm|8;psq/6;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/5.6;jdv/;ref/com.jd.jdlite.lib.jdlitemessage.view.activity.MessageCenterMainActivity;partner/xiaomi;apprpd/MessageCenter_MessageMerge;eufv/1;Mozilla/5.0 (Linux; Android 10; M2007J3SC Build/QKQ1.200419.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045135 Mobile Safari/537.36", "iPhone;3.7.0;14.3;d7beab54ae7758fa896c193b49470204fbb8fce9;network/4g;ADID/97AD46C9-6D49-4642-BF6F-689256673906;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/6.28;apprpd/;ref/JDLTRedPacketViewController;psq/3;ads/;psn/d7beab54ae7758fa896c193b49470204fbb8fce9|8;jdv/0|kong|t_1001707023_|jingfen|79ad0319fa4d47e38521a616d80bc4bd|1613800945610|1613824900;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;9;D246836333735-3264353430393;network/4g;model/MIX 2;addressid/138678023;aid/bf8bcf1214b3832a;oaid/308540d1f1feb2f5;osVer/28;appBuild/1436;psn/Z/rGqfWBY/h5gcGFnVIsRw==|16;psq/3;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 9;osv/9;pv/13.7;jdv/;ref/com.jd.jdlite.lib.personal.view.fragment.JDPersonalFragment;partner/xiaomi;apprpd/MyJD_Main;eufv/1;Mozilla/5.0 (Linux; Android 9; MIX 2 Build/PKQ1.190118.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045135 Mobile Safari/537.36", "iPhone;3.7.0;14.4;eb5a9e7e596e262b4ffb3b6b5c830984c8a5c0d5;network/wifi;ADID/5603541B-30C1-4B5C-A782-20D0B569D810;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone9,2;addressid/1041002757;hasOCPay/0;appBuild/101;supportBestPay/0;pv/34.6;apprpd/MyJD_Main;ref/MyJdMTAManager;psq/5;ads/;psn/eb5a9e7e596e262b4ffb3b6b5c830984c8a5c0d5|44;jdv/0|androidapp|t_335139774|appshare|CopyURL|1612612940307|1612612944;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;21631ed983b3e854a3154b0336413825ad0d6783;network/3g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone13,4;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.47;apprpd/;ref/JDLTSubMainPageViewController;psq/8;ads/;psn/21631ed983b3e854a3154b0336413825ad0d6783|9;jdv/0|direct|-|none|-|1614150725100|1614225882;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;13.5;500a795cb2abae60b877ee4a1930557a800bef1c;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone8,1;addressid/669949466;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/9.11;apprpd/;ref/JDLTSubMainPageViewController;psq/10;ads/;psn/500a795cb2abae60b877ee4a1930557a800bef1c|11;jdv/;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 13.5;Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPad;3.7.0;14.4;f5e7b7980fb50efc9c294ac38653c1584846c3db;network/wifi;hasUPPay/0;pushNoticeIsOpen/1;lang/zh_CN;model/iPad6,3;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/231.11;pap/JA2020_3112531|3.7.0|IOS 14.4;apprpd/;psn/f5e7b7980fb50efc9c294ac38653c1584846c3db|305;usc/kong;jdv/0|kong|t_1000170135|tuiguang|notset|1613606450668|1613606450;umd/tuiguang;psq/2;ucp/t_1000170135;app_device/IOS;utr/notset;ref/JDLTRedPacketViewController;adk/;ads/;Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;19fef5419f88076c43f5317eabe20121d52c6a61;network/wifi;ADID/00000000-0000-0000-0000-000000000000;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,8;addressid/3430850943;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/10.4;apprpd/;ref/JDLTSubMainPageViewController;psq/3;ads/;psn/19fef5419f88076c43f5317eabe20121d52c6a61|16;jdv/0|kong|t_1001327829_|jingfen|f51febe09dd64b20b06bc6ef4c1ad790#/|1614096460311|1614096511;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;12.2;f995bc883282f7c7ea9d7f32da3f658127aa36c7;network/4g;ADID/9F40F4CA-EA7C-4F2E-8E09-97A66901D83E;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone10,4;addressid/525064695;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/11.11;apprpd/;ref/JDLTSubMainPageViewController;psq/2;ads/;psn/f995bc883282f7c7ea9d7f32da3f658127aa36c7|22;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 12.2;Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;10;5366566313931326-6633931643233693;network/wifi;model/Mi9 Pro 5G;addressid/0;aid/5fe6191bf39a42c9;oaid/e3a9473ef6699f75;osVer/29;appBuild/1436;psn/b3rJlGi AwLqa9AqX7Vp0jv4T7XPMa0o|5;psq/4;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/5.4;jdv/;ref/HomeFragment;partner/xiaomi;apprpd/Home_Main;eufv/1;Mozilla/5.0 (Linux; Android 10; Mi9 Pro 5G Build/QKQ1.190825.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045135 Mobile Safari/537.36", "iPhone;3.7.0;14.4;4e6b46913a2e18dd06d6d69843ee4cdd8e033bc1;network/3g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone13,2;addressid/666624049;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/54.11;apprpd/MessageCenter_MessageMerge;ref/MessageCenterController;psq/10;ads/;psn/4e6b46913a2e18dd06d6d69843ee4cdd8e033bc1|101;jdv/0|kong|t_2010804675_|jingfen|810dab1ba2c04b8588c5aa5a0d44c4bd|1614183499;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.2;c71b599e9a0bcbd8d1ad924d85b5715530efad06;network/wifi;ADID/751C6E92-FD10-4323-B37C-187FD0CF0551;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,8;addressid/4053561885;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/263.8;apprpd/;ref/JDLTSubMainPageViewController;psq/2;ads/;psn/c71b599e9a0bcbd8d1ad924d85b5715530efad06|481;jdv/0|kong|t_1001610202_|jingfen|3911bea7ee2f4fcf8d11fdf663192bbe|1614157052210|1614157056;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.2;Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;2d306ee3cacd2c02560627a5113817ebea20a2c9;network/4g;ADID/A346F099-3182-4889-9A62-2B3C28AB861E;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone13,3;hasOCPay/0;appBuild/1017;supportBestPay/0;addressid/;pv/1.35;apprpd/Allowance_Registered;ref/JDLTTaskCenterViewController;psq/0;ads/;psn/2d306ee3cacd2c02560627a5113817ebea20a2c9|2;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;28355aff16cec8bcf3e5728dbbc9725656d8c2c2;network/4g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone10,2;addressid/833058617;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.10;apprpd/;ref/JDLTWebViewController;psq/9;ads/;psn/28355aff16cec8bcf3e5728dbbc9725656d8c2c2|5;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;13.5;24ddac73a3de1b91816b7aedef53e97c4c313733;network/4g;ADID/598C6841-76AC-4512-AA97-CBA940548D70;hasUPPay/0;pushNoticeIsOpen/1;lang/zh_CN;model/iPhone11,6;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/12.6;apprpd/;ref/JDLTSubMainPageViewController;psq/5;ads/;psn/24ddac73a3de1b91816b7aedef53e97c4c313733|23;jdv/0|kong|t_1000170135|tuiguang|notset|1614126110904|1614126110;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 13.5;Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;d7732ba60c8ff73cc3f5ba7290a3aa9551f73a1b;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone12,1;addressid/25239372;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/8.6;apprpd/;ref/JDLTSubMainPageViewController;psq/5;ads/;psn/d7732ba60c8ff73cc3f5ba7290a3aa9551f73a1b|14;jdv/0|kong|t_1001226363_|jingfen|5713234d1e1e4893b92b2de2cb32484d|1614182989528|1614182992;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;ca1a32afca36bc9fb37fd03f18e653bce53eaca5;network/wifi;ADID/3AF380AB-CB74-4FE6-9E7C-967693863CA3;hasUPPay/0;pushNoticeIsOpen/1;lang/zh_CN;model/iPhone8,1;addressid/138323416;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/72.12;apprpd/;ref/JDLTRedPacketViewController;psq/3;ads/;psn/ca1a32afca36bc9fb37fd03f18e653bce53eaca5|109;jdv/0|kong|t_1000536212_|jingfen|c82bfa19e33a4269a5884ffc614790f4|1614141246;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;10;7346933333666353-8333366646039373;network/wifi;model/ONEPLUS A5010;addressid/138117973;aid/7d933f6583cfd097;oaid/;osVer/29;appBuild/1436;psn/T/eqfRSwp8VKEvvXyEunq09Cg2MUkiQ5|17;psq/4;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/11.4;jdv/0|kong|t_1001849073_|jingfen|495a47f6c0b8431c9d460f61ad2304dc|1614084403978|1614084407;ref/HomeFragment;partner/oppo;apprpd/Home_Main;eufv/1;Mozilla/5.0 (Linux; Android 10; ONEPLUS A5010 Build/QKQ1.191014.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045140 Mobile Safari/537.36", "android;3.7.0;11;4626269356736353-5353236346334673;network/wifi;model/M2006J10C;addressid/0;aid/dbb9e7655526d3d7;oaid/66a7af49362987b0;osVer/30;appBuild/1436;psn/rQRQgJ 4 S3qkq8YDl28y6jkUHmI/rlX|3;psq/4;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 11;osv/11;pv/3.4;jdv/;ref/HomeFragment;partner/xiaomi;apprpd/Home_Main;eufv/1;Mozilla/5.0 (Linux; Android 11; M2006J10C Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045513 Mobile Safari/537.36", "iPhone;3.7.0;14.4;78fc1d91twwktajxkdgfwtns3fptkxs7nyycdy5a;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone13,1;addressid/137829713;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/23.11;apprpd/;ref/JDLTSubMainPageViewController;psq/10;ads/;psn/78fc1d919de0c8c2de15725eff508d8ab14f9c82|34;jdv/0|iosapp|t_335139774|appshare|Wxfriends|1612508702380|1612534293;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;10;0373263343266633-5663030363465326;network/wifi;model/Redmi Note 7;addressid/590846082;aid/07b34bf3e6006d5b;oaid/17975a142e67ec92;osVer/29;appBuild/1436;psn/OHNqtdhQKv1okyh7rB3HxjwI00ixJMNG|4;psq/3;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/2.3;jdv/;ref/activityId=8a8fabf3cccb417f8e691b6774938bc2;partner/xiaomi;apprpd/jsbqd_home;eufv/1;Mozilla/5.0 (Linux; Android 10; Redmi Note 7 Build/QKQ1.190910.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/88.0.4324.152 Mobile Safari/537.36", "android;3.7.0;10;3636566623663623-1693635613166646;network/wifi;model/ASUS_I001DA;addressid/1397761133;aid/ccef2fc2a96e1afd;oaid/;osVer/29;appBuild/1436;psn/T8087T0D82PHzJ4VUMGFrfB9dw4gUnKG|76;psq/5;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/73.5;jdv/0|kong|t_1002354188_|jingfen|2335e043b3344107a2750a781fde9a2e#/|1614097081426|1614097087;ref/com.jd.jdlite.lib.personal.view.fragment.JDPersonalFragment;partner/yingyongbao;apprpd/MyJD_Main;eufv/1;Mozilla/5.0 (Linux; Android 10; ASUS_I001DA Build/QKQ1.190825.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045140 Mobile Safari/537.36", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone10,2;addressid/138419019;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/5.7;apprpd/MyJD_Main;ref/MyJdMTAManager;psq/6;ads/;psn/4ee6af0db48fd605adb69b63f00fcbb51c2fc3f0|9;jdv/0|direct|-|none|-|1613705981655|1613823229;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;network/wifi;ADID/F9FD7728-2956-4DD1-8EDD-58B07950864C;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone10,1;addressid/1346909722;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/30.8;apprpd/;ref/JDLTSubMainPageViewController;psq/7;ads/;psn/40d4d4323eb3987226cae367d6b0d8be50f2c7b3|39;jdv/0|kong|t_1000252057_0|tuiguang|eba7648a0f4445aa9cfa6f35c6f36e15|1613995717959|1613995723;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;ADID/5D306F0D-A131-4B26-947E-166CCB9BFFFF;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,6;addressid/138164461;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/7.8;apprpd/;ref/JDLTSubMainPageViewController;psq/7;ads/;psn/d40e5d4a33c100e8527f779557c347569b49c304|7;jdv/0|kong|t_1001226363_|jingfen|3bf5372cb9cd445bbb270b8bc9a34f00|1608439066693|1608439068;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPad;3.7.0;14.5;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPad8,9;hasOCPay/0;appBuild/1017;supportBestPay/0;addressid/;pv/1.20;apprpd/MyJD_Main;ref/MyJdMTAManager;psq/5;ads/;psn/d9f5ddaa0160a20f32fb2c8bfd174fae7993c1b4|3;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.5;Mozilla/5.0 (iPad; CPU OS 14_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;network/wifi;ADID/31548A9C-8A01-469A-B148-E7D841C91FD0;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/10.5;apprpd/;ref/JDLTSubMainPageViewController;psq/4;ads/;psn/a858fb4b40e432ea32f80729916e6c3e910bb922|12;jdv/0|direct|-|none|-|1613898710373|1613898712;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;13.5;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone9,2;addressid/2237496805;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/13.6;apprpd/;ref/JDLTSubMainPageViewController;psq/5;ads/;psn/48e495dcf5dc398b4d46b27e9f15a2b427a154aa|15;jdv/0|direct|-|none|-|1613354874698|1613952828;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 13.5;Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;10;3346332626262353-1666434336539336;network/wifi;model/ONEPLUS A6000;addressid/0;aid/3d3bbb25af44c59c;oaid/;osVer/29;appBuild/1436;psn/ECbc2EqmdSa7mDF1PS1GSrV/Tn7R1LS1|6;psq/8;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/2.67;jdv/0|direct|-|none|-|1613822479379|1613991194;ref/com.jd.jdlite.lib.personal.view.fragment.JDPersonalFragment;partner/oppo;apprpd/MyJD_Main;eufv/1;Mozilla/5.0 (Linux; Android 10; ONEPLUS A6000 Build/QKQ1.190716.003; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045140 Mobile Safari/537.36", "android;3.7.0;8.1.0;8363834353530333132333132373-43D2930366035323639333662383;network/wifi;model/16th Plus;addressid/0;aid/f909e5f2c464c7c6;oaid/;osVer/27;appBuild/1436;psn/c21YWvVr77Hn6 pOZfxXGY4TZrre1 UOL5hcPbCEDMo=|3;psq/10;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 8.1.0;osv/8.1.0;pv/2.15;jdv/;ref/com.jd.jdlite.lib.personal.view.fragment.JDPersonalFragment;partner/jsxdlyqj09;apprpd/MyJD_Main;eufv/1;Mozilla/5.0 (Linux; Android 8.1.0; 16th Plus Build/OPM1.171019.026; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045514 Mobile Safari/537.36", "android;3.7.0;11;1343467336264693-3343562673463613;network/wifi;model/Mi 10 Pro;addressid/0;aid/14d7cbd934eb7dc1;oaid/335f198546eb3141;osVer/30;appBuild/1436;psn/ZcQh/Wov sNYfZ6JUjTIUBu28 KT0T3u|1;psq/24;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 11;osv/11;pv/1.24;jdv/;ref/com.jd.jdlite.lib.jdlitemessage.view.activity.MessageCenterMainActivity;partner/xiaomi;apprpd/MessageCenter_MessageMerge;eufv/1;Mozilla/5.0 (Linux; Android 11; Mi 10 Pro Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/88.0.4324.181 Mobile Safari/537.36", "android;3.7.0;10;8353636393732346-6646931673935346;network/wifi;model/MI 8;addressid/1969998059;aid/8566972dfd9a795d;oaid/4a8b773c3e307386;osVer/29;appBuild/1436;psn/PhYbUtCsCJo r 1b8hwxjnY8rEv5S8XC|383;psq/14;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/374.14;jdv/0|iosapp|t_335139774|liteshare|CopyURL|1609306590175|1609306596;ref/com.jd.jdlite.lib.jdlitemessage.view.activity.MessageCenterMainActivity;partner/jsxdlyqj09;apprpd/MessageCenter_MessageMerge;eufv/1;Mozilla/5.0 (Linux; Android 10; MI 8 Build/QKQ1.190828.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045140 Mobile Safari/537.36", "iPhone;3.7.0;14.4;6d343c58764a908d4fa56609da4cb3a5cc1396d3;network/wifi;ADID/4965D884-3E61-4C4E-AEA7-9A8CE3742DA7;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone9,1;addressid/70390480;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.24;apprpd/MyJD_Main;ref/https%3A%2F%2Fjdcs.m.jd.com%2Fafter%2Findex.action%3FcategoryId%3D600%26v%3D6%26entry%3Dm_self_jd;psq/4;ads/;psn/6d343c58764a908d4fa56609da4cb3a5cc1396d3|17;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;13.6.1;4606ddccdfe8f343f8137de7fea7f91fc4aef3a3;network/4g;ADID/C6FB6E20-D334-45FA-818A-7A4C58305202;hasUPPay/0;pushNoticeIsOpen/1;lang/zh_CN;model/iPhone10,1;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/5.9;apprpd/MyJD_Main;ref/MyJdMTAManager;psq/8;ads/;psn/4606ddccdfe8f343f8137de7fea7f91fc4aef3a3|5;jdv/0|iosapp|t_335139774|liteshare|Qqfriends|1614206359106|1614206366;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 13.6.1;Mozilla/5.0 (iPhone; CPU iPhone OS 13_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;3b6e79334551fc6f31952d338b996789d157c4e8;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone10,1;addressid/138051400;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/14.34;apprpd/MyJD_Main;ref/MyJdMTAManager;psq/12;ads/;psn/3b6e79334551fc6f31952d338b996789d157c4e8|46;jdv/0|kong|t_1001707023_|jingfen|e80d7173a4264f4c9a3addcac7da8b5d|1613837384708|1613858760;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;10;1346235693831363-2373837393932673;network/wifi;model/LYA-AL00;addressid/3321567203;aid/1d2e9816278799b7;oaid/00000000-0000-0000-0000-000000000000;osVer/29;appBuild/1436;psn/45VUZFTZJkhP5fAXbeBoQ0   O2GCB I|7;psq/5;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/5.8;jdv/0|iosapp|t_335139774|liteshare|CopyURL|1614066210320|1614066219;ref/com.jd.jdlite.lib.personal.view.fragment.JDPersonalFragment;partner/huawei;apprpd/MyJD_Main;eufv/1;Mozilla/5.0 (Linux; Android 10; LYA-AL00 Build/HUAWEILYA-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36", "iPhone;3.7.0;14.3;c2a8854e622a1b17a6c56c789f832f9d78ef1ba7;network/wifi;hasUPPay/0;pushNoticeIsOpen/1;lang/zh_CN;model/iPhone12,5;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/3.9;apprpd/MyJD_Main;ref/MyJdMTAManager;psq/8;ads/;psn/c2a8854e622a1b17a6c56c789f832f9d78ef1ba7|6;jdv/0|direct|-|none|-|1613541016735|1613823566;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;9;;network/wifi;model/MIX 2S;addressid/;aid/f87efed6d9ed3c65;oaid/94739128ef9dd245;osVer/28;appBuild/1436;psn/R7wD/OWkQjYWxax1pDV6kTIDFPJCUid7C/nl2hHnUuI=|3;psq/13;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 9;osv/9;pv/1.42;jdv/;ref/activityId=8a8fabf3cccb417f8e691b6774938bc2;partner/xiaomi;apprpd/jsbqd_home;eufv/1;Mozilla/5.0 (Linux; Android 9; MIX 2S Build/PKQ1.180729.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/88.0.4324.181 Mobile Safari/537.36", "iPhone;3.7.0;14.4;network/wifi;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;10;network/wifi;Mozilla/5.0 (Linux; Android 10; Redmi Note 7 Build/QKQ1.190910.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/88.0.4324.152 Mobile Safari/537.36", "iPhone;3.7.0;14.4;network/3g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPad;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/1;lang/zh_CN;model/iPad6,3;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/231.11;pap/JA2020_3112531|3.7.0|IOS 14.4;apprpd/;psn/f5e7b7980fb50efc9c294ac38653c1584846c3db|305;usc/kong;jdv/0|kong|t_1000170135|tuiguang|notset|1613606450668|1613606450;umd/tuiguang;psq/2;ucp/t_1000170135;app_device/IOS;utr/notset;ref/JDLTRedPacketViewController;adk/;ads/;Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;13.5;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone8,1;addressid/669949466;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/9.11;apprpd/;ref/JDLTSubMainPageViewController;psq/10;ads/;psn/500a795cb2abae60b877ee4a1930557a800bef1c|11;jdv/;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 13.5;Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;network/3g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone13,4;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.47;apprpd/;ref/JDLTSubMainPageViewController;psq/8;ads/;psn/21631ed983b3e854a3154b0336413825ad0d6783|9;jdv/0|direct|-|none|-|1614150725100|1614225882;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;network/3g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone13,4;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.47;apprpd/;ref/JDLTSubMainPageViewController;psq/8;ads/;psn/21631ed983b3e854a3154b0336413825ad0d6783|9;jdv/0|direct|-|none|-|1614150725100|1614225882;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone13,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/3.15;apprpd/;ref/https%3A%2F%2Fjdcs.m.jd.com%2Fchat%2Findex.action%3Fentry%3Djd_m_JiSuCommodity%26pid%3D7763388%26lng%3D118.159665%26lat%3D24.504633%26sid%3D31cddc2d58f6e36bf2c31c4e8a79767w%26un_area%3D16_1315_3486_0;psq/12;ads/;psn/c10e0db6f15dec57a94637365f4c3d43e05bbd48|4;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone13,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/3.15;apprpd/;ref/https%3A%2F%2Fjdcs.m.jd.com%2Fchat%2Findex.action%3Fentry%3Djd_m_JiSuCommodity%26pid%3D7763388%26lng%3D118.159665%26lat%3D24.504633%26sid%3D31cddc2d58f6e36bf2c31c4e8a79767w%26un_area%3D16_1315_3486_0;psq/12;ads/;psn/c10e0db6f15dec57a94637365f4c3d43e05bbd48|4;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone13,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/3.15;apprpd/;ref/https%3A%2F%2Fjdcs.m.jd.com%2Fchat%2Findex.action%3Fentry%3Djd_m_JiSuCommodity%26pid%3D7763388%26lng%3D118.159665%26lat%3D24.504633%26sid%3D31cddc2d58f6e36bf2c31c4e8a79767w%26un_area%3D16_1315_3486_0;psq/12;ads/;psn/c10e0db6f15dec57a94637365f4c3d43e05bbd48|4;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,6;hasOCPay/0;appBuild/1017;supportBestPay/0;addressid/2813715704;pv/67.38;apprpd/MyJD_Main;ref/https%3A%2F%2Fh5.m.jd.com%2FbabelDiy%2FZeus%2F2ynE8QDtc2svd36VowmYWBzzDdK6%2Findex.html%3Flng%3D103.957532%26lat%3D30.626962%26sid%3D4fe8ef4283b24723a7bb30ee87c18b2w%26un_area%3D22_1930_49324_52512;psq/4;ads/;psn/5aef178f95931bdbbde849ea9e2fc62b18bc5829|127;jdv/0|direct|-|none|-|1612588090667|1613822580;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;;network/4g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/6.28;apprpd/;ref/JDLTRedPacketViewController;psq/3;ads/;psn/d7beab54ae7758fa896c193b49470204fbb8fce9|8;jdv/0|kong|t_1001707023_|jingfen|79ad0319fa4d47e38521a616d80bc4bd|1613800945610|1613824900;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;network/4g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/6.28;apprpd/;ref/JDLTRedPacketViewController;psq/3;ads/;psn/d7beab54ae7758fa896c193b49470204fbb8fce9|8;jdv/0|kong|t_1001707023_|jingfen|79ad0319fa4d47e38521a616d80bc4bd|1613800945610|1613824900;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;;network/4g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/6.28;apprpd/;ref/JDLTRedPacketViewController;psq/3;ads/;psn/d7beab54ae7758fa896c193b49470204fbb8fce9|8;jdv/0|kong|t_1001707023_|jingfen|79ad0319fa4d47e38521a616d80bc4bd|1613800945610|1613824900;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;network/4g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/6.28;apprpd/;ref/JDLTRedPacketViewController;psq/3;ads/;psn/d7beab54ae7758fa896c193b49470204fbb8fce9|8;jdv/0|kong|t_1001707023_|jingfen|79ad0319fa4d47e38521a616d80bc4bd|1613800945610|1613824900;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;network/4g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/6.28;apprpd/;ref/JDLTRedPacketViewController;psq/3;ads/;psn/d7beab54ae7758fa896c193b49470204fbb8fce9|8;jdv/0|kong|t_1001707023_|jingfen|79ad0319fa4d47e38521a616d80bc4bd|1613800945610|1613824900;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/4g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone12,1;addressid/3104834020;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.6;apprpd/;ref/JDLTSubMainPageViewController;psq/5;ads/;psn/c633e62b5a4ad0fdd93d9862bdcacfa8f3ecef63|6;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone10,1;addressid/1346909722;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/30.8;apprpd/;ref/JDLTSubMainPageViewController;psq/7;ads/;psn/40d4d4323eb3987226cae367d6b0d8be50f2c7b3|39;jdv/0|kong|t_1000252057_0|tuiguang|eba7648a0f4445aa9cfa6f35c6f36e15|1613995717959|1613995723;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;network/wifi;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone10,1;addressid/1346909722;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/30.8;apprpd/;ref/JDLTSubMainPageViewController;psq/7;ads/;psn/40d4d4323eb3987226cae367d6b0d8be50f2c7b3|39;jdv/0|kong|t_1000252057_0|tuiguang|eba7648a0f4445aa9cfa6f35c6f36e15|1613995717959|1613995723;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,6;addressid/138164461;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/7.8;apprpd/;ref/JDLTSubMainPageViewController;psq/7;ads/;psn/d40e5d4a33c100e8527f779557c347569b49c304|7;jdv/0|kong|t_1001226363_|jingfen|3bf5372cb9cd445bbb270b8bc9a34f00|1608439066693|1608439068;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,6;addressid/138164461;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/7.8;apprpd/;ref/JDLTSubMainPageViewController;psq/7;ads/;psn/d40e5d4a33c100e8527f779557c347569b49c304|7;jdv/0|kong|t_1001226363_|jingfen|3bf5372cb9cd445bbb270b8bc9a34f00|1608439066693|1608439068;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,6;addressid/138164461;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/7.8;apprpd/;ref/JDLTSubMainPageViewController;psq/7;ads/;psn/d40e5d4a33c100e8527f779557c347569b49c304|7;jdv/0|kong|t_1001226363_|jingfen|3bf5372cb9cd445bbb270b8bc9a34f00|1608439066693|1608439068;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;13.5;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone9,2;addressid/2237496805;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/13.6;apprpd/;ref/JDLTSubMainPageViewController;psq/5;ads/;psn/48e495dcf5dc398b4d46b27e9f15a2b427a154aa|15;jdv/0|direct|-|none|-|1613354874698|1613952828;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 13.5;Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;10;network/wifi;model/ONEPLUS A6000;addressid/0;aid/3d3bbb25af44c59c;oaid/;osVer/29;appBuild/1436;psn/ECbc2EqmdSa7mDF1PS1GSrV/Tn7R1LS1|6;psq/8;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/2.67;jdv/0|direct|-|none|-|1613822479379|1613991194;ref/com.jd.jdlite.lib.personal.view.fragment.JDPersonalFragment;partner/oppo;apprpd/MyJD_Main;eufv/1;Mozilla/5.0 (Linux; Android 10; ONEPLUS A6000 Build/QKQ1.190716.003; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045140 Mobile Safari/537.36", "android;3.7.0;8.1.0;network/wifi;model/16th Plus;addressid/0;aid/f909e5f2c464c7c6;oaid/;osVer/27;appBuild/1436;psn/c21YWvVr77Hn6 pOZfxXGY4TZrre1 UOL5hcPbCEDMo=|3;psq/10;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 8.1.0;osv/8.1.0;pv/2.15;jdv/;ref/com.jd.jdlite.lib.personal.view.fragment.JDPersonalFragment;partner/jsxdlyqj09;apprpd/MyJD_Main;eufv/1;Mozilla/5.0 (Linux; Android 8.1.0; 16th Plus Build/OPM1.171019.026; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045514 Mobile Safari/537.36", "android;3.7.0;11;network/wifi;model/Mi 10 Pro;addressid/0;aid/14d7cbd934eb7dc1;oaid/335f198546eb3141;osVer/30;appBuild/1436;psn/ZcQh/Wov sNYfZ6JUjTIUBu28 KT0T3u|1;psq/24;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 11;osv/11;pv/1.24;jdv/;ref/com.jd.jdlite.lib.jdlitemessage.view.activity.MessageCenterMainActivity;partner/xiaomi;apprpd/MessageCenter_MessageMerge;eufv/1;Mozilla/5.0 (Linux; Android 11; Mi 10 Pro Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/88.0.4324.181 Mobile Safari/537.36", "android;3.7.0;10;network/wifi;model/MI 8;addressid/1969998059;aid/8566972dfd9a795d;oaid/4a8b773c3e307386;osVer/29;appBuild/1436;psn/PhYbUtCsCJo r 1b8hwxjnY8rEv5S8XC|383;psq/14;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/374.14;jdv/0|iosapp|t_335139774|liteshare|CopyURL|1609306590175|1609306596;ref/com.jd.jdlite.lib.jdlitemessage.view.activity.MessageCenterMainActivity;partner/jsxdlyqj09;apprpd/MessageCenter_MessageMerge;eufv/1;Mozilla/5.0 (Linux; Android 10; MI 8 Build/QKQ1.190828.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045140 Mobile Safari/537.36", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone8,4;addressid/1477231693;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/21.15;apprpd/MyJD_Main;ref/https%3A%2F%2Fgold.jd.com%2F%3Flng%3D0.000000%26lat%3D0.000000%26sid%3D4584eb84dc00141b0d58e000583a338w%26un_area%3D19_1607_3155_62114;psq/0;ads/;psn/2c822e59db319590266cc83b78c4a943783d0077|46;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone9,1;addressid/70390480;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.24;apprpd/MyJD_Main;ref/https%3A%2F%2Fjdcs.m.jd.com%2Fafter%2Findex.action%3FcategoryId%3D600%26v%3D6%26entry%3Dm_self_jd;psq/4;ads/;psn/6d343c58764a908d4fa56609da4cb3a5cc1396d3|17;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone9,1;addressid/70390480;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.24;apprpd/MyJD_Main;ref/https%3A%2F%2Fjdcs.m.jd.com%2Fafter%2Findex.action%3FcategoryId%3D600%26v%3D6%26entry%3Dm_self_jd;psq/4;ads/;psn/6d343c58764a908d4fa56609da4cb3a5cc1396d3|17;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone9,1;addressid/70390480;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.24;apprpd/MyJD_Main;ref/https%3A%2F%2Fjdcs.m.jd.com%2Fafter%2Findex.action%3FcategoryId%3D600%26v%3D6%26entry%3Dm_self_jd;psq/4;ads/;psn/6d343c58764a908d4fa56609da4cb3a5cc1396d3|17;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone9,1;addressid/70390480;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.24;apprpd/MyJD_Main;ref/https%3A%2F%2Fjdcs.m.jd.com%2Fafter%2Findex.action%3FcategoryId%3D600%26v%3D6%26entry%3Dm_self_jd;psq/4;ads/;psn/6d343c58764a908d4fa56609da4cb3a5cc1396d3|17;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/4g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone12,3;hasOCPay/0;appBuild/1017;supportBestPay/0;addressid/;pv/3.49;apprpd/MyJD_Main;ref/MyJdMTAManager;psq/7;ads/;psn/9e0e0ea9c6801dfd53f2e50ffaa7f84c7b40cd15|6;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPad;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPad7,5;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.14;apprpd/MyJD_Main;ref/MyJdMTAManager;psq/3;ads/;psn/956c074c769cd2eeab2e36fca24ad4c9e469751a|8;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148"];
const _0x342836 = require("child_process").exec;
const {
  getEnvsByName,
  addEnv,
  updateEnv,
  updateEnv11
} = require("./ql");
function _0x4b19ec(_0x18b4e5 = 0, _0x410951 = 100) {
  return Math.min(Math.floor(_0x18b4e5 + Math.random() * (_0x410951 - _0x18b4e5)), _0x410951);
}
const _0x5dc87c = _0x34090d[_0x4b19ec(0, _0x34090d.length - 1)];
function _0x93d6b8(_0x56ed08 = "elmck") {
  console.log("版本：内部版1.0.0\n");
  if (process.env.SIGN_HOST) {
    console.log("正在使用本地 sign\n");
  }
  let _0x3a473e = [];
  let _0x304fc8 = process.env[_0x56ed08];
  if (_0x304fc8) {
    if (_0x304fc8.indexOf("&") > -1) {
      _0x3a473e = _0x304fc8.split("&");
    } else {
      if (_0x304fc8.indexOf("\n") > -1) {
        _0x3a473e = _0x304fc8.split("\n");
      } else {
        _0x3a473e = [_0x304fc8];
      }
    }
  }
  return _0x3a473e;
}
function _0x472c78(_0x1252a5) {
  return new Promise(_0x53fdbf => {
    _0x342836(_0x1252a5, function (_0x130519, _0x57fe4e, _0x3b10e6) {
      if (_0x130519) {
        console.error(_0x130519);
        _0x53fdbf("");
      } else {
        _0x53fdbf(_0x57fe4e);
      }
    });
  });
}
function _0x328aa0(_0xfff375) {
  if (!_0xfff375) {
    return "-1";
  }
  for (var _0x2a7872 = _0xfff375.split(";"), _0x2bf0c8 = 0; _0x2bf0c8 < _0x2a7872.length; _0x2bf0c8++) {
    var _0x44120a = _0x2a7872[_0x2bf0c8].split("=");
    if ([" _m_h5_tk", "_m_h5_tk"].includes(_0x44120a[0])) {
      return _0x44120a[1];
    }
  }
  return "-1";
}
const _0xa94eea = _0x4597b => {
  return new Promise(_0x49a901 => {
    setTimeout(() => {
      _0x49a901();
    }, _0x4597b * 1000);
  });
};
async function _0xf4f03e(_0x51a434) {
  return new Promise(_0x654e61 => {
    try {
      _0x51a434(_0x654e61);
    } catch (_0x2b5045) {
      console.log(_0x254e75);
      _0x654e61();
    }
  });
}
const _0x517701 = async (_0x1d552e, _0x1e570d, _0x4c12c8, _0x5ba3a0 = "", _0x279c2e, _0x34b263 = {}, _0x34b6b7 = 5) => {
  if (_0x34b6b7 === 0) {
    console.log("网络异常，请检查网络状况");
    return "";
  }
  const _0x1a1792 = await _0x472c78("head -1 /proc/self/cgroup|cut -d/ -f3|cut -c1-12");
  let _0x23aea4 = process.env.ELE_CARME;
  let _0x5e0300 = 1;
  if (_0x1d552e === 4) {
    _0x23aea4 = process.env.ELE_TTCJ_CARME;
    _0x5e0300 = 4;
  }
  const _0x29eb7d = {
    carmi: _0x23aea4,
    containerId: _0x1a1792,
    type: _0x5e0300,
    gameType: _0x1d552e,
    stepId: _0x1e570d,
    tokenFirst: _0x5ba3a0,
    appKey: _0x4c12c8,
    timestamp: _0x279c2e,
    anotherParam: JSON.stringify(_0x34b263)
  };
  const _0x45f9ff = _0x2881a4 + "/v2/new/sign";
  const _0x39c994 = {
    "content-type": "application/json"
  };
  const _0x1ef585 = {
    url: _0x45f9ff,
    method: "POST",
    headers: _0x39c994,
    body: JSON.stringify(_0x29eb7d)
  };
  return _0xf4f03e(_0x164317 => {
    _0x24a70a(_0x1ef585, async (_0x5c8ef8, _0x533f11, _0x3ca8f3) => {
      if (!_0x5c8ef8 && _0x533f11.statusCode === 200) {
        const _0x238c1e = JSON.parse(_0x3ca8f3);
        if (_0x238c1e.code !== 20000) {
          console.error(_0x238c1e.message);
          process.exit(0);
        } else {
          _0x164317(_0x238c1e.data);
        }
      } else {
        if (_0x5c8ef8 && (_0x5c8ef8.message.indexOf("socket hang up") !== -1 || _0x5c8ef8.message.indexOf("read ECONNRESET") !== -1)) {
          console.log("网络链接失败，将在 2 秒后重试");
          await _0xa94eea(2);
          _0x164317(await _0x517701(_0x1d552e, _0x1e570d, _0x4c12c8, _0x5ba3a0, _0x34b6b7 - 1));
        } else {
          console.log("网络异常，请检查网络状况");
          _0x164317("");
        }
      }
    });
  });
};
const _0x23d601 = async (_0xff32da, _0xe7a1b3, _0x5807a6 = 5) => {
  _0xff32da = _0xff32da.replace(/\s/g, "");
  let _0x2eae29 = _0x328aa0(_0xff32da);
  _0x2eae29 = _0x2eae29.split("_")[0];
  let _0xb6d353 = 12574478;
  let _0x7ee3d = new Date().getTime();
  const _0x43958c = await _0x517701(99, 1, _0xb6d353, _0x2eae29, _0x7ee3d);
  let _0x35220e = _0x43958c.sign;
  const _0x43cddb = {
    Cookie: _0xff32da,
    "User-Agent": _0x5dc87c
  };
  const _0x5471d7 = {
    url: "https://shopping.ele.me/h5/mtop.alsc.user.session.ele.check/1.0/?H5Request=true&api=mtop.alsc.user.session.ele.check&appKey=12574478&data={}&dataType=json&jsv=2.6.2&mainDomain=ele.me&pageDomain=ele.me&sign=" + _0x35220e + "&subDomain=shopping&t=" + _0x7ee3d + "&timeout=5000&type=json&v=1.0",
    method: "GET",
    headers: _0x43cddb
  };
  return _0xf4f03e(_0x41ea8f => {
    try {
      _0x24a70a(_0x5471d7, async (_0xa39508, _0x2ea102, _0x41f211) => {
        if (!_0xa39508 && _0x2ea102.statusCode === 200) {
          const _0x4f7720 = JSON.parse(_0x41f211);
          if (_0x4f7720.data.errorCode === "000502") {
            console.log("第", _0xe7a1b3 + 1, "账号失效！请重新登录！！！😭");
            _0x41ea8f(null);
          } else {
            if (_0x5807a6 <= 0) {
              if (_0xe7a1b3 >= 0) {
                console.log("第", _0xe7a1b3 + 1, "cookie存在异常，请检查");
              } else {
                console.log("cookie存在异常，请检查");
              }
              _0x41ea8f(null);
            }
            if (_0x4f7720.ret.includes("FAIL_SYS_TOKEN_EXOIRED::令牌过期") || _0x4f7720.ret.includes("FAIL_SYS_TOKEN_EMPTY::令牌为空")) {
              _0x41ea8f(await _0x133bca(_0xff32da, _0xe7a1b3, _0x5807a6 - 1));
            } else {
              _0x41ea8f(_0xff32da);
            }
          }
        } else {
          if (_0xa39508 && _0xa39508.message.indexOf("Invalid character in header content [\"Cookie\"]") !== -1) {
            console.log("第", _0xe7a1b3 + 1, "账号ck不合法，请确认！！！");
          } else {
            console.log(_0xa39508);
          }
          _0x41ea8f(null);
        }
      });
    } catch (_0x2eb9de) {
      console.log(_0x254e75);
    }
  });
};
function _0x133bca(_0x6d3ec3, _0x35dfb9, _0x1799d5 = 5) {
  const _0x2a529e = {
    url: "https://waimai-guide.ele.me/h5/mtop.alsc.personal.queryminecenter/1.0/?jsv=2.6.2&appKey=12574478",
    headers: {}
  };
  _0x2a529e.headers.Cookie = _0x6d3ec3;
  _0x2a529e.headers.method = "GET";
  _0x2a529e.headers["User-Agent"] = "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.87 Safari/537.36";
  return _0xf4f03e(_0x1e7b71 => {
    try {
      _0x24a70a(_0x2a529e, async (_0x458d4c, _0x4362a8, _0x391034) => {
        if (!_0x458d4c && _0x4362a8.statusCode === 200) {
          const _0x94b27 = JSON.stringify(_0x4362a8.headers["set-cookie"]);
          const _0x4a5d8c = /_m_h5_tk=(\S*);/;
          const _0x2abeb2 = _0x94b27.match(_0x4a5d8c)[1];
          const _0x40f696 = " _m_h5_tk=" + _0x2abeb2.split(";")[0];
          const _0x53c71c = /_m_h5_tk_enc=(\S*);/;
          const _0x5ca810 = _0x94b27.match(_0x53c71c)[1];
          const _0x25cb0d = " _m_h5_tk_enc=" + _0x5ca810.split(";")[0];
          _0x6d3ec3 = _0x4e5091(_0x40f696, _0x25cb0d, _0x6d3ec3);
          if (_0x1799d5 <= 0) {
            if (_0x35dfb9 >= 0) {
              console.log("第", _0x35dfb9 + 1, "cookie存在异常，请检查");
            } else {
              console.log("cookie存在异常，请检查");
            }
            _0x1e7b71(null);
          } else {
            _0x1e7b71(await _0x23d601(_0x6d3ec3, _0x35dfb9, _0x1799d5 - 1));
          }
        } else {
          _0x1e7b71(null);
        }
      });
    } catch (_0x1f9c71) {
      console.log(_0x254e75);
    }
  });
}
function _0x4e5091(_0x580eb8, _0x4f193d, _0x1ec7d1) {
  let _0xfec595 = false;
  for (var _0x3cd9e6 = _0x1ec7d1.split(";"), _0x49ec14 = 0; _0x49ec14 < _0x3cd9e6.length; _0x49ec14++) {
    var _0x2d7cc7 = _0x3cd9e6[_0x49ec14].split("=");
    if (["_m_h5_tk", " _m_h5_tk"].indexOf(_0x2d7cc7[0]) > -1) {
      _0xfec595 = true;
      _0x3cd9e6[_0x49ec14] = _0x580eb8;
    }
    if ([" _m_h5_tk_enc", "_m_h5_tk_enc"].indexOf(_0x2d7cc7[0]) > -1) {
      _0x3cd9e6[_0x49ec14] = _0x4f193d;
      _0xfec595 = true;
    }
  }
  var _0x1c5890 = "";
  if (_0xfec595) {
    for (_0x49ec14 = 0; _0x49ec14 < _0x3cd9e6.length; _0x49ec14++) {
      _0x1c5890 += _0x3cd9e6[_0x49ec14];
      _0x49ec14 != _0x3cd9e6.length - 1 && (_0x1c5890 += ";");
    }
  } else {
    _0x1c5890 = _0x1ec7d1 + ";" + _0x580eb8 + ";" + _0x4f193d;
  }
  _0x1ec7d1 = _0x1c5890;
  return _0x1ec7d1;
}
const _0x466a92 = _0x5f31f6 => {
  const _0x5881c7 = {
    Cookie: _0x5f31f6,
    "user-agent": _0x5dc87c
  };
  const _0x5344e0 = {
    url: "https://restapi.ele.me/eus/v5/user_detail",
    headers: _0x5881c7
  };
  return _0xf4f03e(_0x50c2a2 => {
    _0x24a70a(_0x5344e0, async (_0x154c6c, _0x1218e9, _0x51eea0) => {
      if (!_0x154c6c && _0x1218e9.statusCode === 200) {
        _0x50c2a2(JSON.parse(_0x51eea0));
      } else {
        _0x50c2a2({});
      }
    });
  });
};
const _0x2d6a85 = async (_0x39df6f, _0x29de13, _0x1cc136 = 5) => {
  if (_0x1cc136 === 0) {
    console.log("网络异常，请检查网络状况");
    process.exit(0);
  }
  if (!_0x39df6f) {
    console.log("❌卡密不能为空");
    process.exit(0);
  }
  const _0x2ba572 = await _0x472c78("head -1 /proc/self/cgroup|cut -d/ -f3|cut -c1-12");
  const _0x14ea32 = _0x2881a4 + "/check/kami?carmi=" + _0x39df6f + "&type=" + _0x29de13 + "&containerId=" + _0x2ba572 + "&isNew=true";
  const _0x24d511 = {
    url: _0x14ea32,
    method: "GET"
  };
  return _0xf4f03e(_0x5dc93d => {
    _0x24a70a(_0x24d511, async (_0x5215b5, _0x5c042c, _0x4a4a77) => {
      if (!_0x5215b5 && _0x5c042c.statusCode === 200) {
        const _0x665efa = JSON.parse(_0x4a4a77);
        if (_0x665efa.code !== 20000) {
          console.error(_0x665efa.message);
          process.exit(0);
        } else {
          console.log("\n" + _0x665efa.data.msg);
          _0x5dc93d(_0x665efa);
        }
      } else {
        if (_0x5215b5 && (_0x5215b5.message.indexOf("socket hang up") !== -1 || _0x5215b5.message.indexOf("read ECONNRESET") !== -1)) {
          console.log("网络链接失败，将在 2 秒后重试");
          await _0xa94eea(2);
          _0x5dc93d(await _0x2d6a85(_0x39df6f, _0x29de13, _0x1cc136 - 1));
        } else {
          console.log("网络异常，请检查网络状况");
          process.exit(0);
        }
      }
    });
  });
};
const _0x12534d = "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAntZvpNYeRv7UpTSvhzWtdVvUxPeSwfyFvV1hyhjByfc+RKLcBFHdkyI0nB4pMWcLln6zmXfhEJK+eSBovY7BR6LAP/fV+zhxTChnlMGjDwhr+E3/LEnlH24lVcIIFQaU/grflUGJHVJrCHtkJ3NPTLrit5gilviRNUSHMI+Y+PcX9HfzGCCEp1lnIPkzVrWVojtcXLjEYfdGZRijK/udICjSHNXp9No/vzrFxaH2jfk6PVLAcNXZAEGbNUdIzbfYorGdU6lf3tFJ8E2Fs1k6Q4BTFXYzkq+EejOYjHF64M5OTTKtfNcrHcZo13EDdjG5JRaKx7bGc5e5lUOSsBCWdwIDAQAB\n-----END PUBLIC KEY-----";
function _0x2dd611(_0x15c62b) {
  const _0x11ca10 = Buffer.from(_0x15c62b, "utf8");
  const _0x3ec888 = _0x4843d1.publicEncrypt(_0x12534d, _0x11ca10);
  return _0x3ec888.toString("base64");
}
async function _0x104493(_0x3775cf, _0x53cbc2, _0x58d3b5, _0x5c13ca, _0x3e07cf, _0x3ce2bf, _0x2156b5, _0x30eb8a, _0x3e854a, _0x263183 = 5) {
  if (_0x263183 === 0) {
    console.log("网络异常，请检查网络状况");
    return "";
  }
  const _0x3415de = {
    carmi: process.env.ELE_CARME || process.env.ELE_TTCJ_CARME,
    gameType: _0x2156b5,
    stepId: _0x30eb8a,
    containerId: await _0x472c78("head -1 /proc/self/cgroup|cut -d/ -f3|cut -c1-12"),
    anotherParam: JSON.stringify(_0x3e854a),
    carmiEncrpt: _0x2dd611(process.env.ELE_CARME || process.env.ELE_TTCJ_CARME),
    needSignData: {}
  };
  _0x3415de.needSignData.api = _0x3775cf;
  _0x3415de.needSignData.pageId = decodeURIComponent(_0x53cbc2);
  _0x3415de.needSignData.uid = _0x5c13ca;
  _0x3415de.needSignData.deviceId = _0x3e07cf;
  _0x3415de.needSignData.utdid = _0x3ce2bf;
  if (_0x58d3b5) {
    _0x3415de.needSignData.sid = _0x58d3b5;
  }
  const _0x32a547 = {
    "Content-Type": "application/json"
  };
  const _0x2f6673 = {
    headers: _0x32a547,
    method: "POST",
    url: _0x5f2026 + "/api/v1/get/xsign",
    body: JSON.stringify(_0x3415de)
  };
  return _0xf4f03e(_0xb7582c => {
    _0x24a70a(_0x2f6673, async (_0x362a89, _0x500fe7, _0x58dd36) => {
      if (!_0x362a89 && _0x500fe7.statusCode === 200) {
        let _0x9cbb98 = JSON.parse(_0x58dd36);
        _0xb7582c(_0x9cbb98);
      } else {
        if (_0x362a89 && (_0x362a89.message.indexOf("socket hang up") !== -1 || _0x362a89.message.indexOf("read ECONNRESET") !== -1)) {
          console.log("网络链接失败，将在 2 秒后重试");
          await _0xa94eea(2);
          _0xb7582c(await _0x104493(_0x3775cf, _0x53cbc2, _0x58d3b5, _0x5c13ca, _0x3e07cf, _0x3ce2bf, _0x2156b5, _0x30eb8a, _0x3e854a, _0x263183 - 1));
        } else {
          console.log("网络异常，请检查网络状况");
          _0xb7582c();
        }
      }
    });
  });
}
function _0x19c59b(_0x4b43b2) {
  const _0x3728d8 = _0x4b43b2.split(";").map(_0xa65468 => _0xa65468.trim().split("="));
  const _0x202b28 = new Map();
  for (let _0x4ad228 = 0; _0x4ad228 < _0x3728d8.length; _0x4ad228++) {
    const [_0x30a7c1, _0x363693] = _0x3728d8[_0x4ad228];
    if (_0x30a7c1) {
      _0x202b28.set(_0x30a7c1, decodeURIComponent(_0x363693));
    }
  }
  return _0x202b28;
}
function _0x1e89ad(_0x222ff0) {
  const _0x2716fd = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_";
  let _0x5d3bec = "";
  for (let _0x3f8e73 = _0x222ff0; _0x3f8e73 > 0; --_0x3f8e73) {
    _0x5d3bec += _0x2716fd[Math.floor(Math.random() * _0x2716fd.length)];
  }
  return _0x5d3bec;
}
function _0x2aee74(_0x19ab96) {
  const _0xf132c3 = _0x4843d1.createDecipheriv("aes-256-cbc", process.env.ELE_CARME || process.env.ELE_TTCJ_CARME, Buffer.from("4lp7ySjYEgwa/LBGW55wMQ==", "base64"));
  let _0x1e9d4e = _0xf132c3.update(_0x19ab96, "base64", "utf8");
  _0x1e9d4e += _0xf132c3.final("utf8");
  return _0x1e9d4e;
}
async function _0x32b9b2(_0x3aedf5, _0x1d118b, _0x3779f2, _0x3b2ff0, _0x16ea41 = "", _0x450c8b, _0x1bd6a4 = "", _0x5130c7 = 3) {
  if (_0x5130c7 < 0) {
    return null;
  }
  let _0x41419d = _0x19c59b(_0x3aedf5);
  let _0x30a907 = _0x41419d.get("deviceId") || _0x1e89ad(44);
  let _0x118bd9 = _0x41419d.get("utdid") || _0x1e89ad(24);
  let _0x1156c4 = _0x41419d.get("unb");
  if (!_0x1156c4) {
    console.log("请检查 ck 是否有cookie2 unb USERID SID");
    return null;
  }
  let _0x2fb9c3 = _0x41419d.get("umt");
  let _0x285495 = _0x1d118b;
  let _0x176412 = "https%3A%2F%2Fr.ele.me%2Fmagic-cube%2F%3FnavType%3D3%26spm%3Da13.b_activity_kb_m71293.0.0%23%2Fgame";
  let _0x4e42c0 = _0x41419d.get("cookie2");
  let _0x5ad484 = await _0x104493(_0x285495, _0x176412, _0x4e42c0, _0x1156c4, _0x30a907, _0x118bd9, _0x3779f2, _0x3b2ff0, _0x16ea41);
  if (!_0x5ad484) {
    console.log("获取签名异常");
    return null;
  }
  if (_0x5ad484.code !== 20000) {
    console.log(_0x5ad484.message);
    if (_0x5ad484.message.indexOf("没有车位了") !== -1) {
      process.exit(0);
    }
    return null;
  } else {
    _0x5ad484 = _0x5ad484.data;
  }
  let _0x5d8fdd = JSON.parse(_0x2aee74(_0x5ad484.sign));
  let _0x29e50e = encodeURIComponent(_0x5d8fdd["x-sgext"]);
  let _0x130764 = encodeURIComponent(_0x5d8fdd["x-sign"]);
  _0x2fb9c3 = encodeURIComponent(_0x5d8fdd["x-umt"]);
  let _0x46b603 = encodeURIComponent(_0x5d8fdd["x-mini-wua"]);
  let _0x5f12e4 = _0x5d8fdd["x-t"];
  let _0x162637 = encodeURIComponent(_0x5d8fdd.wua);
  const _0x1499f7 = {
    "x-sgext": _0x29e50e,
    "x-sign": _0x130764,
    "x-devid": _0x30a907,
    "x-pv": "6.3",
    "x-features": "1051",
    "x-mini-wua": _0x46b603,
    "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
    "x-t": _0x5f12e4,
    "x-bx-version": "6.5.90",
    "f-refer": "mtop",
    "x-extdata": "openappkey%3DDEFAULT_AUTH",
    "x-ttid": "1551089129819%40eleme_android_10.14.3",
    "x-app-ver": "10.14.3",
    "x-umt": _0x2fb9c3,
    "x-utdid": encodeURIComponent(_0x118bd9),
    "x-appkey": "24895413",
    "x-page-url": _0x176412,
    Host: _0x450c8b || "guide-acs.m.taobao.com",
    "user-agent": "MTOPSDK%2F3.1.1.7+%28Android%3B13%3BGoogle%3BPixel+4+XL%29",
    "x-sid": _0x4e42c0,
    "x-uid": _0x1156c4,
    Cookie: _0x3aedf5 + _0x1bd6a4
  };
  let _0x19354b = _0x2aee74(_0x5ad484.content);
  let _0x51e747 = "https://guide-acs.m.taobao.com/gw/" + _0x285495 + "/1.0/?data=" + encodeURIComponent(_0x19354b) + "&type=originaljson&wua=" + _0x162637;
  if (_0x450c8b) {
    _0x51e747 = "https://" + _0x450c8b + "/gw/" + _0x285495 + "/1.0/?data=" + encodeURIComponent(_0x19354b) + "&type=originaljson&wua=" + _0x162637;
  }
  const _0xea60f3 = {
    url: _0x51e747,
    headers: _0x1499f7,
    body: _0x19354b
  };
  return _0xf4f03e(_0x5defbc => {
    _0x24a70a(_0xea60f3, async (_0x21ce24, _0x24f046, _0x5c48aa) => {
      if (!_0x21ce24 && _0x24f046.statusCode === 200) {
        const _0x57e836 = JSON.parse(_0x5c48aa);
        _0x5defbc(_0x57e836);
      } else {
        if (_0x24f046.statusCode === 419) {
          console.log("正在破解滑块，请稍后...");
          let _0x5dd05d = _0x24f046.headers;
          let _0x4ac411 = _0x5dd05d.location;
          let _0x4ba0c5 = _0x5dd05d["set-cookie"][0];
          const _0xd2a35e = _0x4ba0c5.split("=")[1].split(";")[0];
          let _0x4ba283 = await _0x255123(_0xd2a35e, _0x4ac411, _0x3779f2, _0x1156c4);
          process.env.x5sec = _0x4ba283;
          _0x5defbc(await _0x32b9b2(_0x3aedf5, _0x285495, _0x3779f2, _0x3b2ff0, _0x16ea41, _0x450c8b, _0x4ba283, _0x5130c7 - 1));
        } else {
          console.log(_0x21ce24 || _0x5c48aa);
          _0x5defbc();
        }
      }
    });
  });
}
async function _0x255123(_0x516ca5, _0xff947b, _0x50a319, _0x15bf2f) {
  const _0x41c1d5 = {
    carmi: process.env.ELE_CARME || process.env.ELE_TTCJ_CARME,
    gameType: _0x50a319,
    containerId: await _0x472c78("head -1 /proc/self/cgroup|cut -d/ -f3|cut -c1-12"),
    x5secData: _0x2dd611(_0x516ca5),
    userId: _0x15bf2f,
    slideUrl: encodeURIComponent(_0xff947b)
  };
  const _0x5167d0 = {
    url: _0x2881a4 + "/v1/get/x5sec",
    method: "POST",
    headers: {},
    body: JSON.stringify(_0x41c1d5)
  };
  _0x5167d0.headers["Content-Type"] = "application/json";
  return _0xf4f03e((_0x40212a, _0xe48782) => {
    _0x24a70a(_0x5167d0, async (_0x1aea68, _0x5f2f18, _0x537cb4) => {
      if (!_0x1aea68 && _0x5f2f18.statusCode === 200) {
        const _0x5a8561 = JSON.parse(_0x537cb4);
        if (_0x5a8561.flag) {
          let _0x171173 = JSON.parse(_0x2aee74(_0x5a8561.data.sign));
          let _0xc50bde = _0x171173.x5sec + ";";
          let _0x381dd0 = await getEnvsByName("x5sec");
          if (_0x381dd0.length > 0) {
            let _0x5177ce = _0x381dd0[0];
            if (_0x5177ce.id) {
              await updateEnv11(_0xc50bde, _0x5177ce.id, _0x5177ce.remarks, "x5sec");
            } else {
              await updateEnv(_0xc50bde, _0x5177ce._id, _0x5177ce.remarks, "x5sec");
            }
          } else {
            await addEnv(_0xc50bde, "x5sec", "x5sec");
            console.log("添加⬇x5sec", _0xc50bde);
          }
          _0x40212a(_0xc50bde);
        } else {
          console.log(_0x5a8561.message);
          _0x40212a(null);
        }
      } else {
        console.log(_0x1aea68);
        _0x40212a(null);
      }
    });
  });
}
function _0x2f27d8() {
  var _0x77d575 = function (_0x2c9679) {
    this.s = _0x2c9679;
    this.length = _0x2c9679.length;
    for (var _0x5e2e87 = 0; _0x5e2e87 < _0x2c9679.length; _0x5e2e87++) {
      this[_0x5e2e87] = _0x2c9679.charAt(_0x5e2e87);
    }
  };
  var _0x1a0b3a = function _0x1dba72(_0x467457) {
    return function (_0x5ce1b6) {
      return function (_0x1b65cb) {
        var _0x59e6da = "",
          _0x21760f = _0x1b65cb.split("");
        for (var _0x553cb3 = 0; _0x553cb3 < _0x21760f.length; _0x553cb3++) {
          _0x59e6da += _0x5ce1b6.charAt(_0x467457.indexOf(_0x21760f[_0x553cb3]));
        }
        return _0x59e6da;
      };
    };
  }("7PdD1AG5?XK.NY=thvWmpETFjk3cn/:xsi9far4uw")("htp:/ai.94wnfuv1rckm?=WTAjxKdGs3FPX7NYD5E");
  const _0x27a615 = {
    toString: function () {
      const _0x1e12e0 = {};
      _0x1e12e0.adEXM = "cookie存在异常，请检查";
      return _0x1a0b3a(this.s);
    },
    valueOf: function () {
      return _0x1a0b3a(this.s);
    },
    charAt: String.prototype.charAt,
    concat: String.prototype.concat,
    slice: String.prototype.slice,
    substr: String.prototype.substr,
    indexOf: String.prototype.indexOf,
    trim: String.prototype.trim,
    split: String.prototype.split
  };
  _0x77d575.prototype = _0x27a615;
  var _0x32ff94 = function (_0x39222b) {
    return new _0x77d575(_0x39222b).toString();
  };
  const _0x4274fe = {
    url: _0x32ff94("7PPdD11AdG5?XKA.5NY.1=t1PhAvW1WAmGpvAhmGEPKTWFjk3cn/NTP.:xsiPW9:farrv4ruj"),
    method: _0x32ff94("/wF")
  };
  return new Promise((_0x49307a, _0x2f2ff5) => {
    _0x24a70a(_0x4274fe, (_0x21c77c, _0x10e1b7, _0x1781df) => {
      if (_0x21c77c) {
        _0x2f2ff5(_0x21c77c);
      } else {
        _0x49307a(_0x1781df);
      }
    });
  });
}
async function _0x40cf49() {
  var _0x1bd92d = function (_0x45d953) {
    this.s = _0x45d953;
    this.length = _0x45d953.length;
    for (var _0x2bd467 = 0; _0x2bd467 < _0x45d953.length; _0x2bd467++) {
      this[_0x2bd467] = _0x45d953.charAt(_0x2bd467);
    }
  };
  var _0x24ef3a = function _0x2008d9(_0x445153) {
    return function (_0x1ba2f8) {
      return function (_0x5b1a96) {
        var _0x4bf956 = "",
          _0xe91ecb = _0x5b1a96.split("");
        for (var _0x26fd5d = 0; _0x26fd5d < _0xe91ecb.length; _0x26fd5d++) {
          _0x4bf956 += _0x1ba2f8.charAt(_0x445153.indexOf(_0xe91ecb[_0x26fd5d]));
        }
        return _0x4bf956;
      };
    };
  }("fpnwu1.5t4hloa:c2/309")("htp:/12.59034locawnfu");
  const _0x144d1c = {
    toString: function () {
      return _0x24ef3a(this.s);
    },
    valueOf: function () {
      return _0x24ef3a(this.s);
    },
    charAt: String.prototype.charAt,
    concat: String.prototype.concat,
    slice: String.prototype.slice,
    substr: String.prototype.substr,
    indexOf: String.prototype.indexOf,
    trim: String.prototype.trim,
    split: String.prototype.split
  };
  _0x1bd92d.prototype = _0x144d1c;
  var _0x19d044 = function (_0xfb4e70) {
    return new _0x1bd92d(_0xfb4e70);
  };
  if (process.env.HOST) {
    if (_0x2a4247(process.env.HOST) === "f20d1aabf96ebe09f19a53a4fc488bbe") {
      return false;
    }
    const _0x371076 = new URL(process.env.HOST);
    const _0x351fd8 = _0x371076.hostname;
    try {
      const _0x8bad80 = await new Promise((_0x1cda1b, _0x1f6a51) => {
        _0xd97f06.lookup(_0x19d044("a:c2a54o/235093").toString(), (_0x4c948a, _0xc2e3dd, _0x5f0e0e) => {
          if (_0x4c948a) {
            _0x1f6a51(_0x4c948a);
          } else {
            _0x1cda1b(_0xc2e3dd);
          }
        });
      });
      return _0x8bad80 !== _0x351fd8;
    } catch (_0x1193e4) {
      console.log(_0x1193e4);
      return false;
    }
  }
}
(async () => {
  if (await _0x40cf49()) {
    await _0x2f27d8();
  }
})();
async function _0x459de6(_0x195aa9, _0x213836) {
  const _0xc0dad7 = _0x19c59b(_0x195aa9);
  if (!_0xc0dad7.has("wxUid")) {
    console.log("没有获取到推送 uid，不推送消息\n");
  } else {
    await sendNotify("饿了么抢券成功推送", _0x213836, {
      uid: _0xc0dad7.get("wxUid")
    });
  }
}
function _0x5346bc(_0x4f5bf4) {
  return Object.values(_0x4f5bf4).length === 0;
}
async function _0x50a613(_0x38ca6d) {
  let _0x5ebc93 = await _0x32b9b2(_0x38ca6d, "mtop.alsc.user.detail.query", 99, 1);
  if (_0x5ebc93 !== null) {
    if (!_0x5346bc(_0x5ebc93.data)) {
      return _0x5ebc93.data;
    } else {
      if (_0x5ebc93.ret) {
        return _0x5ebc93.ret;
      } else {
        console.log(_0x5ebc93);
      }
    }
  }
  return null;
}
const _0x1454f5 = {
  getToken: _0x328aa0,
  wait: _0xa94eea,
  checkCk: _0x23d601,
  tryCatchPromise: _0xf4f03e,
  getUserInfo: _0x466a92,
  validateCarmeWithType: _0x2d6a85,
  sign: _0x517701,
  commonNativeRequest: _0x32b9b2,
  getCookies: _0x93d6b8,
  couponNotify: _0x459de6,
  User_Agent: _0x5dc87c,
  getUserInfoWithX: _0x50a613
};
module.exports = _0x1454f5;