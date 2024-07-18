#2024-07-18 16:55:07
import random
mLwsOA=int
mLwsOW=str
mLwsOv=Exception
mLwsOc=print
mLwsOB=None
mLwsOq=len
mLwsOU=range
mLwsOl=False
mLwsOC=exit
mLwsOd=open
mLwsOa=True
mLwsOH=random.randint
import hashlib
mLwsOT=hashlib.md5
import requests
mLwsOS=requests.session
import base64
mLwsOK=base64.b64decode
import uuid
mLwsOe=uuid.uuid4
import time
mLwsOQ=time.sleep
mLwsOJ=time.strptime
mLwsOi=time.mktime
mLwsON=time.time
mLwsOF=time.localtime
mLwsOu=time.strftime
import json
mLwsOy=json.loads
import os
mLwsOE=os.environ
from datetime import datetime
mLwsOY=datetime.now
mLwspO='HFHX'
mLwspV="m.prod.app.hsbcfts.com.cn"
mLwspR="https://"+mLwspV
mLwspI="1669046480255"
mLwspk=mLwsOK("NDMuMTM4LjcxLjQz").decode()
mLwspx="2.18.1"
def mLwspX():
 mLwspH=mLwsOu('%Y-%m-%d %H:%M:%S',mLwsOF(mLwsON()))
 return mLwspH
def mLwspn():
 mLwspT=mLwsOY().strftime("%Y-%m-%d")
 return mLwsOA(mLwsOi(mLwsOJ(mLwspT,"%Y-%m-%d"))*1000)
def mLwspo():
 mLwspS=mLwsOW(mLwsOe())
 mLwspK=mLwsOT()
 mLwspK.update(mLwspS.encode())
 mLwspS=mLwsOW(mLwspK.hexdigest())
 return mLwspS[8:24]
def mLwspP(mLwspu):
 mLwspK=mLwsOT()
 mLwspK.update(mLwspu.encode())
 return mLwsOW(mLwspK.hexdigest())
def mLwspD():
 try:
  mLwspe=mLwspR+"/api/sapp/userservice/userinfo/open/login"
  mLwspu=mLwsOy(mLwsOk('hfhx_login',mLwspd,mLwspa))
  mLwspF=mLwsOI('post',mLwspe,mLwspu)
  mLwspN=mLwsOy(mLwspF)
  if mLwspN["retCode"]==10000:
   return mLwspN["data"]["token"],mLwspN["data"]["userId"]
  else:
   return '',''
 except mLwsOv as e:
  mLwsOc("error:",e)
  return '',''
def mLwspG():
 try:
  mLwspe=mLwspR+"/api/sapp/userservice/userinfo/singleuser"
  mLwspF=mLwsOI('get',mLwspe,'',mLwspj)
  mLwspN=mLwsOy(mLwspF)
  if mLwspN["retCode"]==10000:
   return mLwspN["data"]["nickName"],mLwspN["data"]["userIdStr"],mLwspN["data"]["deviceNo"]
  else:
   return '','',''
 except mLwsOv as e:
  mLwsOc("error:",e)
  return '','',''
def mLwspf():
 try:
  mLwspe=mLwspR+"/api/sapp/biz/pointscenter/notificationbar/info"
  mLwspF=mLwsOI('post',mLwspe,{},mLwspj)
  mLwspN=mLwsOy(mLwspF)
  if mLwspN["retCode"]==10000:
   mLwspi=mLwspN["data"]["nfbOfCleanUpRedEnvelope"]["clearAmount"]if mLwspN["data"]["nfbOfCleanUpRedEnvelope"]["clearAmount"]is not mLwsOB else "0"
   mLwsOc(mLwspO+" "+mLwsOW(mLwspU)+" ["+mLwspM+"]积分"+mLwsOW(mLwspN["data"]["nfbOfExpirePoints"]["expirePointsValue"])+" 红包"+mLwspi)
   return mLwsOW(mLwspN["data"]["nfbOfExpirePoints"]["expirePointsValue"]),mLwspi
  else:
   return '',''
 except mLwsOv as e:
  mLwsOc("error:",e)
  return '',''
def mLwspz():
 try:
  mLwspe=mLwspR+"/api/sapp/biz/pointscenter/signin/v3"
  mLwspJ=mLwsOy(mLwsOk('calculate','',uid=mLwsph))
  mLwspF=mLwsOI('post',mLwspe,mLwspJ,mLwspj)
  mLwspN=mLwsOy(mLwspF)
  if mLwspN["retCode"]==10000:
   mLwsOc(mLwspO+" "+mLwsOW(mLwspU)+" ["+mLwspM+"]签到成功")
  else:
   mLwsOc(mLwspO+" "+mLwsOW(mLwspU)+" ["+mLwspM+"]签到："+mLwspN["message"])
 except mLwsOv as e:
  mLwsOc("error:",e)
def mLwspb():
 try:
  mLwspe=mLwspR+"/api/sapp/biz/pointstask/querybubbletask"
  mLwspJ={"pageIndex":1,"pageSize":8}
  mLwspF=mLwsOI('post',mLwspe,mLwspJ,mLwspj)
  mLwspN=mLwsOy(mLwspF)
  if mLwspN["retCode"]==10000:
   mLwsOc(mLwspO+" "+mLwsOW(mLwspU)+" ["+mLwspM+"]查询气泡奖励列表")
   if "data" in mLwspN:
    if mLwsOq(mLwspN["data"]["pointTaskData"])>0:
     for mLwspQ in mLwspN["data"]["pointTaskData"]:
      mLwspg(mLwspQ["pointTaskName"],mLwspQ["pointTaskId"])
    else:
     mLwsOc(mLwspO+" "+mLwsOW(mLwspU)+" ["+mLwspM+"]暂无可领取的奖励")
  else:
   mLwsOc(mLwspO+" "+mLwsOW(mLwspU)+" ["+mLwspM+"]查询气泡奖励列表失败："+mLwspN["message"])
 except mLwsOv as e:
  mLwsOc("error:",e)
def mLwspg(taskname,taskid):
 try:
  mLwspe=mLwspR+"/api/sapp/biz/pointstask/collect/v2"
  mLwspJ=mLwsOy(mLwsOk('calculate',taskid,taskType="collect",uid=mLwsph))
  mLwspF=mLwsOI('post',mLwspe,mLwspJ,mLwspj)
  mLwspN=mLwsOy(mLwspF)
  if mLwspN["retCode"]==10000:
   mLwsOc(mLwspO+" "+mLwsOW(mLwspU)+" ["+mLwspM+"]"+taskname+" 积分+"+mLwsOW(mLwspN["data"]["awardTotalCount"]))
  else:
   mLwsOc(mLwspO+" "+mLwsOW(mLwspU)+" ["+mLwspM+"]"+taskname+"："+mLwspN["message"])
 except mLwsOv as e:
  mLwsOc("error:",e)
def mLwspt():
 try:
  mLwspe=mLwspR+"/api/sapp/biz/pointstask/querytasktype/v1?taskType=ADVANCED"
  mLwspJ={"taskType":"ADVANCED"}
  mLwspF=mLwsOI('post',mLwspe,mLwspJ,mLwspj)
  mLwspN=mLwsOy(mLwspF)
  if mLwspN["retCode"]==10000:
   return mLwspN
  else:
   mLwsOc(mLwspO+" "+mLwsOW(mLwspU)+" ["+mLwspM+"]获取任务类型失败"+"："+mLwspN["message"])
   return mLwsOB
 except mLwsOv as e:
  mLwsOc("error:",e)
  return mLwsOB
def mLwsOp():
 try:
  mLwspy=mLwspt()
  if mLwspy is mLwsOB:
   return
  mLwsOc(mLwspO+" "+mLwsOW(mLwspU)+" ["+mLwspM+"]获取任务列表")
  for mLwspE in mLwspy["data"]:
   mLwspe=mLwspR+"/api/sapp/biz/pointstask/query"
   mLwspJ={"taskProgressList":[1,2],"pageIndex":1,"pageSize":500,"taskType":mLwspE["taskType"]}
   mLwspF=mLwsOI('post',mLwspe,mLwspJ,mLwspj)
   mLwspN=mLwsOy(mLwspF)
   if mLwspN["retCode"]==10000:
    if "data" in mLwspN:
     if mLwsOq(mLwspN["data"]["pointTaskData"])>0:
      for mLwspQ in mLwspN["data"]["pointTaskData"]:
       mLwspY=mLwspQ["completeTaskLimits"]
       mLwspA=mLwspQ["completeTaskCount"]
       for mLwspW in mLwsOU(mLwspA,mLwspY):
        if mLwspQ["pointTaskId"]=="TASK2022061710001":
         mLwsOV(mLwspQ["pointTaskName"],mLwspQ["pointTaskId"])
         mLwsOQ(3)
        elif mLwspQ["pointTaskId"]=="TASK2022032410002":
         mLwsOV(mLwspQ["pointTaskName"],mLwspQ["pointTaskId"])
         mLwsOQ(3)
        elif mLwspQ["pointTaskId"]=="TASK202207210004":
         mLwsOV(mLwspQ["pointTaskName"],mLwspQ["pointTaskId"])
         mLwsOQ(3)
        elif mLwspQ["pointTaskId"]=="TASK202207210001":
         mLwsOR(mLwspQ["pointTaskName"])
         mLwsOQ(3)
        elif mLwspQ["pointTaskId"]=="TASK202207210002":
         mLwsOV(mLwspQ["pointTaskName"],mLwspQ["pointTaskId"])
         mLwsOQ(3)
        elif mLwspQ["pointTaskId"]=="TASK202207200004":
         mLwsOV(mLwspQ["pointTaskName"],mLwspQ["pointTaskId"])
         mLwsOQ(3)
        elif mLwspQ["pointTaskId"]=="TASK202207200005":
         mLwsOV(mLwspQ["pointTaskName"],mLwspQ["pointTaskId"])
         mLwsOQ(3)
        elif mLwspQ["pointTaskId"]=="TASK2022040610002":
         mLwsOV(mLwspQ["pointTaskName"],mLwspQ["pointTaskId"])
         mLwsOQ(3)
        elif mLwspQ["pointTaskId"]=="TASK2022041510002":
         mLwsOV(mLwspQ["pointTaskName"],mLwspQ["pointTaskId"])
         mLwsOQ(3)
      mLwsOQ(1)
     else:
      mLwsOc(mLwspO+" "+mLwsOW(mLwspU)+" ["+mLwspM+"]"+mLwspE["taskTypeName"]+"暂无可执行的任务")
   else:
    mLwsOc(mLwspO+" "+mLwsOW(mLwspU)+" ["+mLwspM+"]查询气泡奖励列表失败："+mLwspN["message"])
   mLwsOQ(1)
 except mLwsOv as e:
  mLwsOc("error:",e)
def mLwsOV(taskname,taskid):
 try:
  mLwspe=mLwspR+"/api/sapp/biz/tracebehaviorlog/addtrace"
  mLwspJ=mLwsOy(mLwsOk('calculate',taskid))
  mLwspF=mLwsOI('post',mLwspe,mLwspJ,mLwspj)
  mLwspN=mLwsOy(mLwspF)
  if mLwspN["retCode"]==10000:
   if "data" in mLwspN:
    if mLwspN["data"]["pointAmount"]==mLwsOB:
     mLwsOc(mLwspO+" "+mLwsOW(mLwspU)+" ["+mLwspM+"]"+taskname+" ok")
    else:
     mLwsOc(mLwspO+" "+mLwsOW(mLwspU)+" ["+mLwspM+"]"+taskname+" 积分+"+mLwsOW(mLwspN["data"]["pointAmount"]))
  else:
   mLwsOc(mLwspO+" "+mLwsOW(mLwspU)+" ["+mLwspM+"]"+taskname+"："+mLwspN["message"])
 except mLwsOv as e:
  mLwsOc("error:",e)
def mLwsOR(taskname):
 try:
  mLwspe=mLwspR+"/api/api/v1/fund/scheme/savemanagerscheme"
  mLwspJ={"schemeName":"我的自选方案"+mLwsOW(mLwsOH(10000,99999)),"conditionCount":23,"fundType":3,"basicTypeList":[{"reference":"","typeName":"从业年限","iconUrl":"assets/fund/manager/manager2.png","boxInfoList":[{"code":"20105","layoutPosition":5,"name":"不限(默认)"}],"isRadio":1,"parentType":2,"typeCode":201,"all":mLwsOl},{"reference":"基金经理在上一个报告期此类基金的在管总资产净值。数据来自Wind数据。","typeName":"该类别基金在管总规模","iconUrl":"assets/fund/manager/manager1.png","boxInfoList":[{"code":"20301","layoutPosition":1,"name":"1亿以下"},{"code":"20302","layoutPosition":2,"name":"1到5亿"},{"code":"20303","layoutPosition":3,"name":"5到10亿"},{"code":"20304","layoutPosition":4,"name":"10到20亿"},{"code":"20305","layoutPosition":5,"name":"20到50亿"},{"code":"20306","layoutPosition":6,"name":"50亿以上"}],"isRadio":2,"parentType":2,"typeCode":203,"all":mLwsOl}],"performanceList":[{"reference":"基金经理累计收益率采用基金经理管理基金的规模加权收益率计算。一般来说，基金经理累计收益率越高，表现越好。对于统计区间小于3年的累计收益率，不能反映该基金经理的长期收益表现，仅供参考。数据来自Wind资讯。","typeName":"累计收益率","iconUrl":"assets/selector/fund8.png","boxInfoList":[{"code":"30101","layoutPosition":1,"name":"前25%"},{"code":"30102","layoutPosition":2,"name":"前25%~50%"},{"code":"30103","layoutPosition":3,"name":"后25%~50%"},{"code":"30104","layoutPosition":4,"name":"后25%"}],"isRadio":2,"parentType":3,"typeCode":301},{"reference":"基金经理年化波动率基于基金经理管理基金的规模加权收益率计算。一般来说，基金经理年化波动率越低，表现越好。对于统计区间小于3年的年化波动率，不能反映该基金经理长期的风险水平，仅供参考。数据来自Wind资讯。","typeName":"年化波动率","iconUrl":"assets/selector/fund9.png","boxInfoList":[{"code":"30201","layoutPosition":1,"name":"前25%"},{"code":"30202","layoutPosition":2,"name":"前25%~50%"},{"code":"30203","layoutPosition":3,"name":"后25%~50%"},{"code":"30204","layoutPosition":4,"name":"后25%"}],"isRadio":2,"parentType":3,"typeCode":302},{"reference":"基金经理最大回撤基于基金经理管理基金的规模加权收益率计算。最大回撤大致反映了在该统计区间内投资该基金经理旗下基金产品可能遭受的最大损失比例。一般来说，基金最大回撤越小，表现越好。数据来自Wind资讯。","typeName":"最大回撤","iconUrl":"assets/selector/fund10.png","boxInfoList":[{"code":"30301","layoutPosition":1,"name":"前25%"},{"code":"30302","layoutPosition":2,"name":"前25%~50%"},{"code":"30303","layoutPosition":3,"name":"后25%~50%"},{"code":"30304","layoutPosition":4,"name":"后25%"}],"isRadio":2,"parentType":3,"typeCode":303},{"reference":"定义为在统计区间内（该基金经理的年化收益率-无风险收益率) / 该基金经理的年化波动率，反映了投资于该基金经理管理产品的投资者额外承受的每一单位风险所获得的额外收益。计算基于基金经理管理基金的规模加权收益率。其中无风险收益率采用wind货币基金指数收益率。数据来自wind资讯。","typeName":"夏普比率","iconUrl":"assets/selector/fund11.png","boxInfoList":[{"code":"30401","layoutPosition":1,"name":"前25%"},{"code":"30402","layoutPosition":2,"name":"前25%~50%"},{"code":"30403","layoutPosition":3,"name":"后25%~50%"},{"code":"30404","layoutPosition":4,"name":"后25%"}],"isRadio":2,"parentType":3,"typeCode":304}],"performanceRange":"502"}
  mLwspF=mLwsOI('post',mLwspe,mLwspJ,mLwspj)
  mLwspN=mLwsOy(mLwspF)
  if mLwspN["retCode"]==10000:
   mLwsOc(mLwspO+" "+mLwsOW(mLwspU)+" ["+mLwspM+"]"+taskname+" ok")
  else:
   mLwsOc(mLwspO+" "+mLwsOW(mLwspU)+" ["+mLwspM+"]"+taskname+"："+mLwspN["message"])
 except mLwsOv as e:
  mLwsOc("error:",e)
def mLwsOI(method,mLwspe,mLwspJ,token=mLwsOB):
 mLwspv={"X-HSBC-Pinnacle-SuperAPP-ClientVersion":mLwspx,"X-HSBC-Request-Correlation-Id":"APP","X-HSBC-Global-Channel-Id":"MOBILE_A","X-HSBC-Pinnacle-DeviceNo":mLwspC,"Accept":"application/json","charset":"utf-8","Content-Type":"application/json; charset=UTF-8","Host":mLwspV,"Connection":"Keep-Alive","User-Agent":"okhttp/4.9.0","ADRUM_1":"isMobile:true","ADRUM":"isAjax:true"}
 if token is not mLwsOB:
  mLwspv["X-HSBC-E2E-Trust-Token"]=token
  mLwspv["X-HSBC-Global-Tenant-Id"]="HXN"
  mLwspv["X-HSBC-Global-Region"]="CN"
 if method=='post':
  mLwspF=s.post(url=mLwspe,headers=mLwspv,json=mLwspJ).text.strip()
 elif method=='get':
  mLwspF=s.get(url=mLwspe,headers=mLwspv).text.strip()
 else:
  mLwspF=''
 return mLwspF
def mLwsOk(method,taskId,mediaContentId=mLwsOB,taskType=mLwsOB,uid=mLwsOB):
 mLwspe="http://"+mLwspk+":3394/hfhx/hfhx_api.php"
 mLwspJ={"token":mLwspc,"method":method,"userId":uid,"taskId":taskId,"taskType":taskType,"mediaContentId":mediaContentId,"version":mLwspI}
 for mLwspW in mLwsOU(1,5):
  try:
   mLwspF=s.post(url=mLwspe,json=mLwspJ).text.strip()
   mLwspN=mLwsOy(mLwspF)
   if mLwspN["code"]==200:
    mLwsOc(mLwspO+" token剩余次数:"+mLwsOW(mLwspN["num"])+"  token过期时间:"+mLwsOW(mLwspN["date"]))
    return mLwsOW(mLwspN["data"])
   else:
    mLwsOc(mLwspO+" api请求失败："+mLwspN["msg"])
    mLwsOC()
  except mLwsOv as e:
   mLwsOc(mLwspO+' api请求失败，尝试第'+mLwsOW(mLwspW+1)+'次获取！')
   mLwsOQ(5)
 mLwsOc(mLwspO+' api请求失败！不再尝试获取。')
 mLwsOC()
 return-1
def mLwsOx():
 mLwspe="http://"+mLwspk+":3394/hfhx/hfhx_api.php"
 mLwspJ={"token":mLwspc,"method":"check","version":mLwspI}
 for mLwspW in mLwsOU(1,5):
  try:
   mLwspF=s.post(url=mLwspe,json=mLwspJ).text.strip()
   mLwspN=mLwsOy(mLwspF)
   if mLwspN["code"]==200:
    mLwsOc(mLwspO+" token剩余次数:"+mLwsOW(mLwspN["num"])+"  token过期时间:"+mLwsOW(mLwspN["date"]))
    return mLwspN
   else:
    mLwsOc(mLwspO+" api请求失败："+mLwspN["msg"])
    mLwsOC()
  except mLwsOv as e:
   mLwsOc(mLwspO+' api请求失败，尝试第'+mLwsOW(mLwspW+1)+'次获取！')
   mLwsOQ(5)
 mLwsOc(mLwspO+' api请求失败！不再尝试获取。')
 mLwsOC()
 return-1
if __name__=='__main__':
 s=mLwsOS()
 mLwspc=mLwsOE.get("hfhxToken")
 try:
  if "@" in mLwsOE.get("hfhxParams"):
   mLwspB=mLwsOE["hfhxParams"].split("@")
  else:
   mLwspB=mLwsOE["hfhxParams"].split("\n")
 except:
  with mLwsOd('hfhxParams.txt','r')as f:
   mLwspB=f.read().split('\n')
 mLwsOc(mLwspO,flush=mLwsOa)
 mLwsOc('==================共找到'+mLwsOW(mLwsOq(mLwspB))+'个ck==================')
 mLwsOc('==================脚本执行- 北京时间(UTC+8)：'+mLwspX()+'=====================\n')
 mLwsOx()
 mLwspU=1
 for tk in mLwspB:
  mLwsOc(f'----- 开始【第 '+mLwsOW(mLwspU)+' 个账号】-----')
  mLwspU+=1
  mLwspl=tk.split("&")
  mLwspC=mLwspo()
  mLwspd=mLwspl[0]
  mLwspa=mLwspl[1]
  mLwspj,mLwsph=mLwspD()
  mLwsOc("当前X-Token:"+mLwspj)
  if mLwsOq(mLwspd)>1 and mLwsOq(mLwspa)>1:
   mLwspM,mLwsph,mLwspr=mLwspG()
   mLwspC=mLwspr
   if mLwsOq(mLwsph)<=0:
    continue
   mLwspf()
   mLwspz()
   mLwsOp()
   mLwspb()
 mLwsOc(f'脚本执行结束... 北京时间(UTC+8)：'+mLwspX())
