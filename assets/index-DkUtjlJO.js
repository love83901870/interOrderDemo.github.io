import{d as V,_ as E,r as u,o as $,c as _,a as l,w as n,b as q,e as f,f as p,n as Q,g as G,h as J,i as A,j as v,t as T,F as R,k as z,l as j,m as M,p as W}from"./index-DG_04fFY.js";const X=[{code:1,type:"",disb:!1,name:"初级用户"},{code:2,type:"",disb:!1,name:"中级用户"},{code:3,type:"",disb:!1,name:"高级用户"}],Y=[{code:0,type:"",disb:!1,name:"未出库"},{code:1,type:"",disb:!1,name:"已出库"},{code:2,type:"",disb:!1,name:"丢失"}],Z=[{ins:"",props:"orderId",sortable:!0,fixed:!0,solt:"",label:"订单ID",width:"",tooltip:!1,dooptip:!1,align:"center"},{ins:"",props:"productName",sortable:!0,fixed:!1,solt:"",label:"商品名称",width:"100",tooltip:!1,dooptip:!1,align:"center"},{ins:"",props:"orderAmount",sortable:!0,fixed:!1,solt:"",label:"订单金额",width:"100",tooltip:!1,dooptip:!1,align:"center"},{ins:"",props:"orderTime ",sortable:!0,fixed:!1,solt:"",label:"下单时间",width:"150",tooltip:!1,dooptip:!1,align:"center"},{ins:"",props:"paymentTime",sortable:!0,fixed:!1,solt:"",label:"付款时间",width:"150",tooltip:!1,dooptip:!0,align:"center"},{ins:"",props:"orderingUser ",sortable:!0,fixed:!1,solt:"",label:"下单用户",width:"100",tooltip:!1,dooptip:!1,align:"center"},{ins:"",props:"customerType",sortable:!0,fixed:!1,solt:"",label:"用户类型",width:"100",tooltip:!1,dooptip:!1,align:"center"},{ins:"",props:"couponID",sortable:!0,solt:"",label:"优惠券ID",width:"100",tooltip:!1,dooptip:!1,align:"center"},{ins:"",props:"CouponType",sortable:!0,fixed:!1,solt:"",label:"优惠券类型",width:"120",tooltip:!1,dooptip:!1,align:"center"},{ins:"",props:"preDiscountAmount",sortable:!0,fixed:!1,solt:"",label:"优惠前金额",width:"120",tooltip:!1,dooptip:!1,align:"center"},{ins:"",props:"preSalesCustomerService",sortable:!0,fixed:!1,solt:"",label:"售前客服",width:"100",tooltip:!1,dooptip:!1,align:"center"},{ins:"",props:"customerServiceTeam",sortable:!0,fixed:!1,solt:"",label:"客服组",width:"100",tooltip:!1,dooptip:!1,align:"center"},{ins:"",props:"logisticsStatus",sortable:!0,fixed:!1,solt:"",label:"物流状态",width:"100",tooltip:!1,dooptip:!1,align:"center"}],x=V({name:"Seach",props:{tranSear:{type:Object,default:()=>{}}},components:{},setup(e,{attrs:t,emit:C}){function i(){e.tranSear.diff=0,c()}function y(a){e.tranSear.diff=a,c()}function c(){C("tranSearCotr")}return{ChangeScrhen:i,BtnCtrol:y,emitCotr:c}}}),ee={class:"search"};function te(e,t,C,i,y,c){const a=u("el-input"),s=u("el-col"),b=u("el-button"),g=u("el-row");return $(),_("div",ee,[l(g,{type:"flex",justify:"space-between"},{default:n(()=>[l(s,{span:19,class:"btns_bolx"},{default:n(()=>[l(s,{span:6,class:"col_mr"},{default:n(()=>[l(a,{modelValue:e.tranSear.search,"onUpdate:modelValue":t[0]||(t[0]=r=>e.tranSear.search=r),placeholder:"搜索",onChange:t[1]||(t[1]=r=>e.ChangeScrhen()),onKeyup:t[2]||(t[2]=q(r=>e.ChangeScrhen(),["enter"])),class:"inpt_wm"},null,8,["modelValue"])]),_:1})]),_:1}),l(s,{span:4,class:"btns_borx"},{default:n(()=>[l(b,{type:"primary",disabled:e.tranSear.disb,onClick:t[3]||(t[3]=r=>e.BtnCtrol(1))},{default:n(()=>t[5]||(t[5]=[f("编辑表格")])),_:1},8,["disabled"]),l(b,{type:"primary",disabled:e.tranSear.disb,onClick:t[4]||(t[4]=r=>e.BtnCtrol(2))},{default:n(()=>t[6]||(t[6]=[f("筛选")])),_:1},8,["disabled"])]),_:1})]),_:1})])}const oe=E(x,[["render",te]]),le=V({name:"Eable",props:{tranTable:{type:Object,default:()=>{}}},components:{},setup(e,{attrs:t,emit:C}){const i=p(null);function y(){Q(()=>{i==null||i.value.doLayout()})}function c(m){return m.rowIndex%2===1?"trow_class":""}function a(m){return null}function s(m){e.tranTable.diff=0,e.tranTable.start=m,o()}function b(m){e.tranTable.diff=99,e.tranTable.collation=m.order===null?"":m.order==="ascending"?"asc":"desc",e.tranTable.orderBy=m.order===null?"":m.prop,o()}function g(m){}function r(m){}function d(m){}function w(m,D,B,I,h){}function S(m,D,B,I,h){e.tranTable.diff=m,e.tranTable.isEnb=m===2?1:0,e.tranTable.items=D,e.tranTable.id=D.id,o()}function o(){C("tranTableCotr")}return{selTable:i,tableRowClassName:c,Rowkeys:a,doLayouts:y,currentChange:s,SortChange:b,HSelectionChange:g,Selections:r,SelectionChanges:d,clickRow:w,Manbtn:S,enitCotr:o}}}),ne={class:"table_part"},ae={class:"table_pagination pagination_lrs"};function se(e,t,C,i,y,c){const a=u("el-table-column"),s=u("el-button"),b=u("el-table"),g=u("el-pagination"),r=G("loading");return $(),_("div",ne,[J(($(),A(b,{border:"",size:"small",data:e.tranTable.tableDate,"row-key":e.Rowkeys,"default-sort":e.tranTable.sort,"highlight-current-row":"",style:{width:"100%"},height:400,"header-cell-style":{backgroundColor:"#f5f7fa",color:"#000"},"row-class-name":e.tableRowClassName,onSelectionChange:e.HSelectionChange,onRowClick:e.clickRow,onSelectAll:e.SelectionChanges,onSelect:e.Selections,onSortChange:e.SortChange,ref:"selTable"},{default:n(()=>[l(a,{type:"index",fixed:"",prop:"",width:"50",label:"序号",align:"center"}),($(!0),_(R,null,z(e.tranTable.tableTitle,(d,w)=>($(),A(a,{key:w+Math.ceil(Math.random()*1),fixed:d.fixed,sortable:d.sortable,prop:d.props,label:d.label,width:d.width,"show-overflow-tooltip":d.tooltip,align:d.align},{default:n(S=>[f(T(S.row[d.props]),1)]),_:2},1032,["fixed","sortable","prop","label","width","show-overflow-tooltip","align"]))),128)),l(a,{fixed:"right",label:"操作",width:"150",class:"operation",align:"center"},{default:n(d=>[v("div",null,[l(s,{link:"",type:"primary",size:"small",onClick:w=>e.Manbtn(2,d.row,d.$index)},{default:n(()=>t[2]||(t[2]=[f("查看详情")])),_:2},1032,["onClick"]),d.row.orderStatus===0?($(),A(s,{key:0,link:"",type:"primary",size:"small",onClick:w=>e.Manbtn(3,d.row)},{default:n(()=>t[3]||(t[3]=[f("标注出库")])),_:2},1032,["onClick"])):j("",!0)])]),_:1})]),_:1},8,["data","row-key","default-sort","row-class-name","onSelectionChange","onRowClick","onSelectAll","onSelect","onSortChange"])),[[r,e.tranTable.loading]]),v("div",ae,[v("span",null,"共"+T(e.tranTable.total)+"条",1),l(g,{background:"","current-page":e.tranTable.start,"onUpdate:currentPage":t[0]||(t[0]=d=>e.tranTable.start=d),"page-size":e.tranTable.length,total:e.tranTable.total,"onUpdate:total":t[1]||(t[1]=d=>e.tranTable.total=d),layout:"prev, pager, next",onCurrentChange:e.currentChange},null,8,["current-page","page-size","total","onCurrentChange"])])])}const re=E(le,[["render",se]]),ue=V({name:"Update",components:{},props:{},setup(e,{attrs:t,emit:C}){p(!1);const i=p(!1),y=p("订单详情"),c=p(""),a=p([]),s=p({});function b(d){i.value=!0,s.value=d.record}function g(){r()}function r(){i.value=!1}return{visble:i,title:y,rules:a,dogClass:c,form:s,toggleShow:b,determ:g,cancel:r}}}),ie={class:"dialog_box"},de={class:"dlog_vbox"},me={class:"dlog_fcent"},fe={slot:"footer",class:"dialog-footer"};function pe(e,t,C,i,y,c){const a=u("el-form-item"),s=u("el-form"),b=u("el-button"),g=u("el-dialog");return $(),_("div",ie,[l(g,{class:M(e.dogClass),title:e.title,modelValue:e.visble,"onUpdate:modelValue":t[2]||(t[2]=r=>e.visble=r),width:"50%",onClose:t[3]||(t[3]=r=>e.cancel())},{default:n(()=>[v("div",de,[v("div",me,[l(s,{ref:"ruleForm",model:e.form,rules:e.rules,form:e.form,class:"form_class"},{default:n(()=>[l(a,{label:"订单ID"},{default:n(()=>[f(T(e.form.orderId),1)]),_:1}),l(a,{label:"商品名称"},{default:n(()=>[f(T(e.form.productName),1)]),_:1}),l(a,{label:"订单金额"},{default:n(()=>[f(T(e.form.orderAmount),1)]),_:1}),l(a,{label:"下单时间"},{default:n(()=>[f(T(e.form.orderTime),1)]),_:1}),l(a,{label:"付款时间"},{default:n(()=>[f(T(e.form.paymentTime),1)]),_:1}),l(a,{label:"下单用户"},{default:n(()=>[f(T(e.form.orderingUser),1)]),_:1}),l(a,{label:"用户类型"},{default:n(()=>[f(T(e.form.customerType),1)]),_:1}),l(a,{label:"优惠券ID"},{default:n(()=>[f(T(e.form.couponID),1)]),_:1}),l(a,{label:"优惠券类型"},{default:n(()=>[f(T(e.form.CouponType),1)]),_:1}),l(a,{label:"优惠前金额"},{default:n(()=>[f(T(e.form.preDiscountAmount),1)]),_:1}),l(a,{label:"售前客服"},{default:n(()=>[f(T(e.form.preSalesCustomerService),1)]),_:1}),l(a,{label:"客服组"},{default:n(()=>[f(T(e.form.customerServiceTeam),1)]),_:1}),l(a,{label:"物流状态"},{default:n(()=>[f(T(e.form.logisticsStatus),1)]),_:1})]),_:1},8,["model","rules","form"])]),v("div",fe,[l(b,{onClick:t[0]||(t[0]=r=>e.cancel())},{default:n(()=>t[4]||(t[4]=[f("取 消")])),_:1}),l(b,{type:"primary",onClick:t[1]||(t[1]=r=>e.determ())},{default:n(()=>t[5]||(t[5]=[f("保存")])),_:1})])])]),_:1},8,["class","title","modelValue"])])}const ce=E(ue,[["render",pe]]),be=V({name:"Screen",components:{},props:{},setup(e,{attrs:t,emit:C}){p(!1);const i=p(!1),y=p("筛选"),c=p(""),a=p([]),s=p({minOrderAmount:"",maxOrderAmount:"",startTime:"",endTime:"",customerType:1,logisticsStatus:0}),b=p(X),g=p(Y);function r(B){i.value=!0}function d(){s.value={minOrderAmount:"",maxOrderAmount:"",startTime:"",endTime:"",customerType:1,logisticsStatus:0}}function w(B){}function S(){}function o(){m(),D()}function m(){i.value=!1}function D(){C("reshSerch",s.value)}return{visble:i,title:y,rules:a,dogClass:c,form:s,userOpts:b,optOpts:g,toggleShow:r,reset:d,changeInpt:S,timeChang:w,determ:o,cancel:m,emitCotr:D}}}),ge={class:"dialog_box"},ve={class:"dlog_vbox"},Ce={class:"dlog_fcent"},ye={slot:"footer",class:"dialog-footer"};function Se(e,t,C,i,y,c){const a=u("el-input"),s=u("el-form-item"),b=u("el-date-picker"),g=u("el-option"),r=u("el-select"),d=u("el-form"),w=u("el-button"),S=u("el-dialog");return $(),_("div",ge,[l(S,{class:M(e.dogClass),title:e.title,modelValue:e.visble,"onUpdate:modelValue":t[12]||(t[12]=o=>e.visble=o),width:"40%",onClose:t[13]||(t[13]=o=>e.cancel())},{default:n(()=>[v("div",ve,[v("div",Ce,[l(d,{ref:"ruleForm",model:e.form,rules:e.rules,form:e.form,class:"form_class2"},{default:n(()=>[l(s,{label:"订单金额"},{default:n(()=>[l(a,{modelValue:e.form.minOrderAmount,"onUpdate:modelValue":t[0]||(t[0]=o=>e.form.minOrderAmount=o),min:"0",placeholder:"订单金额",class:"inpt_wm inpt_wnm",onChange:t[1]||(t[1]=o=>e.changeInpt())},null,8,["modelValue"]),t[14]||(t[14]=f("  --  ")),l(a,{modelValue:e.form.maxOrderAmount,"onUpdate:modelValue":t[2]||(t[2]=o=>e.form.maxOrderAmount=o),min:"0",placeholder:"订单金额",class:"inpt_wm inpt_wnm",onChange:t[3]||(t[3]=o=>e.changeInpt())},null,8,["modelValue"])]),_:1}),l(s,{label:"下单时间"},{default:n(()=>[l(b,{modelValue:e.form.startTime,"onUpdate:modelValue":t[4]||(t[4]=o=>e.form.startTime=o),"value-format":"yyyy-MM-dd HH:mm:ss",type:"datetime",placeholder:"下单时间",class:"inpt_ws ipt_date",onChange:t[5]||(t[5]=o=>e.timeChang(o))},null,8,["modelValue"]),t[15]||(t[15]=f("  --  ")),l(b,{modelValue:e.form.endTime,"onUpdate:modelValue":t[6]||(t[6]=o=>e.form.endTime=o),"value-format":"yyyy-MM-dd HH:mm:ss",type:"datetime",placeholder:"下单时间",class:"inpt_ws ipt_date",onChange:t[7]||(t[7]=o=>e.timeChang(o))},null,8,["modelValue"])]),_:1}),l(s,{label:"用户类型"},{default:n(()=>[l(r,{modelValue:e.form.customerType,"onUpdate:modelValue":t[8]||(t[8]=o=>e.form.customerType=o),clearable:"",filterable:"",placeholder:"",class:"inpt_ws",onChange:e.changeInpt},{default:n(()=>[($(!0),_(R,null,z(e.userOpts,o=>($(),A(g,{key:o.code,label:o.name,value:o.code},null,8,["label","value"]))),128))]),_:1},8,["modelValue","onChange"])]),_:1}),l(s,{label:"物流状态"},{default:n(()=>[l(r,{modelValue:e.form.logisticsStatus,"onUpdate:modelValue":t[9]||(t[9]=o=>e.form.logisticsStatus=o),clearable:"",filterable:"",placeholder:"",class:"inpt_ws",onChange:e.changeInpt},{default:n(()=>[($(!0),_(R,null,z(e.optOpts,o=>($(),A(g,{key:o.code,label:o.name,value:o.code},null,8,["label","value"]))),128))]),_:1},8,["modelValue","onChange"])]),_:1})]),_:1},8,["model","rules","form"])]),v("div",ye,[l(w,{onClick:t[10]||(t[10]=o=>e.reset())},{default:n(()=>t[16]||(t[16]=[f("重置")])),_:1}),l(w,{type:"primary",onClick:t[11]||(t[11]=o=>e.determ())},{default:n(()=>t[17]||(t[17]=[f("筛选")])),_:1})])])]),_:1},8,["class","title","modelValue"])])}const Te=E(be,[["render",Se]]),we=V({name:"EditTb",components:{},props:{},setup(e,{attrs:t,emit:C}){p(!1);const i=p(!1),y=p("编辑表格"),c=p(""),a=p([]),s=p({name:""}),b=p(0),g=p(!1),r=p(""),d=p(""),w=p(["张先生看订单","老张看物流"]),S=p([{fieldName:"订单ID"},{fieldName:"商品名称"},{fieldName:"订单金额"},{fieldName:"下单时间"},{fieldName:"付款时间"},{fieldName:"下单用户"},{fieldName:"用户类型"},{fieldName:"优惠券ID"},{fieldName:"优惠券类型"},{fieldName:"优惠前金额"},{fieldName:"售前客服"},{fieldName:"客服组"},{fieldName:"物流状态"}]);function o(F){i.value=!0}function m(F,N){w.value.splice(N,1)}function D(F,N,k){let U={},O={};F===0?(U=N,O=S.value[k-1],S.value[k]=O,S.value[k-1]=U):(U=N,O=S.value[k+1],S.value[k]=O,S.value[k+1]=U)}function B(F,N,k){}function I(){h()}function h(){g.value=!0}function L(){s.value.name&&w.value.push(s.value.name),H()}function H(){g.value=!1}function K(){i.value=!1}function P(){}return{visble:i,title:y,rules:a,form:s,dogClass:c,visble2:g,title2:r,dogClass2:d,surplus:b,caseOpts:w,ttbList:S,toggleShow:o,removeCase:m,upDnBtn:D,lookBtn:B,determ:I,determ2:L,cancel:K,cancel2:H,emitCotr:P}}}),$e={class:"dialog_box"},De={class:"dlog_vbox"},he={class:"dlog_case"},_e={class:"dlog_msg"},Be={class:"dlog_fcent"},ke={slot:"footer",class:"dialog-footer"},Ae={class:"dlog_fcent2"},Fe={class:"dialog-footer"};function Ve(e,t,C,i,y,c){const a=u("el-button"),s=u("el-table-column"),b=u("el-icon"),g=u("el-table"),r=u("el-dialog"),d=u("el-input"),w=u("el-form-item"),S=u("el-form");return $(),_("div",$e,[l(r,{class:M(e.dogClass),title:e.title,modelValue:e.visble,"onUpdate:modelValue":t[1]||(t[1]=o=>e.visble=o),width:"40%",onClose:t[2]||(t[2]=o=>e.cancel())},{default:n(()=>[v("div",De,[v("div",he,[t[9]||(t[9]=v("h4",null,"已存储的表格方案",-1)),v("ul",null,[($(!0),_(R,null,z(e.caseOpts,(o,m)=>($(),_("li",{key:m},[v("em",null,T(m+1)+". "+T(o),1),t[8]||(t[8]=f("   ")),l(a,{link:"",type:"primary",size:"small",onClick:D=>e.removeCase(o,m)},{default:n(()=>t[7]||(t[7]=[f("删除")])),_:2},1032,["onClick"])]))),128))]),v("p",_e,"注意：还可"+T(e.surplus)+"两个表格方案",1)]),v("div",Be,[l(g,{border:"",data:e.ttbList,"highlight-current-row":"",style:{width:"100%"},height:400,"header-cell-style":{backgroundColor:"#f5f7fa",color:"#000"},ref:"selTable"},{default:n(()=>[l(s,{type:"index",fixed:"",prop:"",width:"80",label:"序号",align:"center"}),l(s,{prop:"fieldName",label:"字段名称",align:"center"},{default:n(o=>[f(T(o.row.fieldName),1)]),_:1}),l(s,{fixed:"right",label:"操作",width:"150",class:"operation",align:"center"},{default:n(o=>[v("div",null,[o.$index!==e.ttbList.length-1?($(),A(a,{key:0,link:"",type:"primary",size:"small",onClick:m=>e.upDnBtn(1,o.row,o.$index)},{default:n(()=>t[10]||(t[10]=[f(" 下")])),_:2},1032,["onClick"])):j("",!0),o.$index!==0?($(),A(a,{key:1,link:"",type:"primary",size:"small",onClick:m=>e.upDnBtn(0,o.row,o.$index)},{default:n(()=>t[11]||(t[11]=[f(" 上")])),_:2},1032,["onClick"])):j("",!0),l(a,{link:"",type:"primary",size:"small",onClick:m=>e.lookBtn(2,o.row,o.$index)},{default:n(()=>[l(b,{class:"View"})]),_:2},1032,["onClick"])])]),_:1})]),_:1},8,["data"])]),v("div",ke,[l(a,{type:"primary",onClick:t[0]||(t[0]=o=>e.determ())},{default:n(()=>t[12]||(t[12]=[f("保存当前表格方案")])),_:1})])])]),_:1},8,["class","title","modelValue"]),l(r,{class:M(e.dogClass2),title:e.title2,modelValue:e.visble2,"onUpdate:modelValue":t[5]||(t[5]=o=>e.visble2=o),width:"25%",onClose:t[6]||(t[6]=o=>e.cancel2())},{footer:n(()=>[v("div",Fe,[l(a,{type:"primary",onClick:t[4]||(t[4]=o=>e.determ2())},{default:n(()=>t[13]||(t[13]=[f("确认保存")])),_:1})])]),default:n(()=>[v("div",Ae,[l(S,{ref:"ruleForm",model:e.form,rules:e.rules,form:e.form,class:"form_class2"},{default:n(()=>[l(w,{label:""},{default:n(()=>[l(d,{modelValue:e.form.name,"onUpdate:modelValue":t[3]||(t[3]=o=>e.form.name=o),placeholder:"请输入表格方案名称",class:"inpt_ws inpt_wm"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules","form"])])]),_:1},8,["class","title","modelValue"])])}const Ee=E(we,[["render",Ve],["__scopeId","data-v-02b6c467"]]),Ie=V({name:"Order",components:{Seach:oe,Eable:re,Update:ce,Screen:Te,EditTb:Ee},setup(){const e=W(),t=p(null),C=p({}),i=p({}),y={start:1,length:10,total:0};let c={};b();function a(){r()}function s(h,L,H,K,P){const F=[...arguments].slice(2);console.log(h),console.log(e.refs[h]),e&&(e==null||e.refs[h][L](...F))}function b(){g(),r()}function g(){C.value={incal:0,diff:"",disb:!1,search:""},i.value={incal:0,diff:"",disb:!1,rels:"",isEnb:"",loading:!1,status:0,start:y.start,length:y.length,total:y.total,orderBy:"",collation:"",sort:{prop:"",order:null},url:"",id:"",items:{},tableDate:[],tableTitle:Z}}async function r(){c={},i.value.tableDate=[{id:1233,orderStatus:0,orderId:1233,productName:"商品名称",orderAmount:1e6,orderTime:Date.now(),paymentTime:Date.now(),orderingUser:"下单用户",customerType:"用户类型",couponID:666,CouponType:"优惠券类型",preDiscountAmount:10,preSalesCustomerService:"售前客服",customerServiceTeam:"客服组",logisticsStatus:"logisticsStatus"},{id:1233,orderStatus:0,orderId:1233,productName:"商品名称",orderAmount:1e6,orderTime:Date.now(),paymentTime:Date.now(),orderingUser:"下单用户",customerType:"用户类型",couponID:666,CouponType:"优惠券类型",preDiscountAmount:10,preSalesCustomerService:"售前客服",customerServiceTeam:"客服组",logisticsStatus:"logisticsStatus"},{id:1233,orderStatus:0,orderId:1233,productName:"商品名称",orderAmount:1e6,orderTime:Date.now(),paymentTime:Date.now(),orderingUser:"下单用户",customerType:"用户类型",couponID:666,CouponType:"优惠券类型",preDiscountAmount:10,preSalesCustomerService:"售前客服",customerServiceTeam:"客服组",logisticsStatus:"logisticsStatus"},{id:1233,orderStatus:0,orderId:1233,productName:"商品名称",orderAmount:1e6,orderTime:Date.now(),paymentTime:Date.now(),orderingUser:"下单用户",customerType:"用户类型",couponID:666,CouponType:"优惠券类型",preDiscountAmount:10,preSalesCustomerService:"售前客服",customerServiceTeam:"客服组",logisticsStatus:"logisticsStatus"},{id:1233,orderStatus:0,orderId:1233,productName:"商品名称",orderAmount:1e6,orderTime:Date.now(),paymentTime:Date.now(),orderingUser:"下单用户",customerType:"用户类型",couponID:666,CouponType:"优惠券类型",preDiscountAmount:10,preSalesCustomerService:"售前客服",customerServiceTeam:"客服组",logisticsStatus:"logisticsStatus"}],Q(()=>{d()})}async function d(){t.value&&t.value.doLayouts()}function w(h){c={search:C.value.search,...h},r()}function S(h){console.log(C.value),C.value.diff===2?D():C.value.diff===1&&m()}function o(h){i.value.diff===2?B():i.value.diff}function m(){c={},s("editTb","toggleShow",c)}function D(){c={},s("screen","toggleShow",c)}function B(){c={id:i.value.id,record:i.value.items},s("update","toggleShow",c)}function I(){}return{refTab:t,tranSear:C,tranTable:i,refresh:a,reshSerch:w,tranSearCotr:S,tranTableCotr:o,emitBtn:m,lookBtn:B,outBtn:I}}}),Ne={class:"odrer_box"},Ue={class:"seach_box"},Oe={class:"table_box"};function Re(e,t,C,i,y,c){const a=u("Seach"),s=u("Eable"),b=u("Update"),g=u("Screen"),r=u("EditTb");return $(),_("div",Ne,[t[0]||(t[0]=v("div",{class:"title_box"},[v("h3",null,"订单管理")],-1)),v("div",Ue,[l(a,{tranSear:e.tranSear,onTranSearCotr:e.tranSearCotr},null,8,["tranSear","onTranSearCotr"])]),v("div",Oe,[l(s,{tranTable:e.tranTable,onTranTableCotr:e.tranTableCotr,ref:"refTab"},null,8,["tranTable","onTranTableCotr"])]),l(b,{ref:"update",onRefresh:e.refresh},null,8,["onRefresh"]),l(g,{ref:"screen",onReshSerch:e.reshSerch,onRefresh:e.refresh},null,8,["onReshSerch","onRefresh"]),l(r,{ref:"editTb",onRefresh:e.refresh},null,8,["onRefresh"])])}const Me=E(Ie,[["render",Re]]);export{Me as default};
