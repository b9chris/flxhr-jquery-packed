var swfobject=function(){function v(){var i,r,n;if(!c){try{i=t.getElementsByTagName("body")[0].appendChild(s("span")),i.parentNode.removeChild(i)}catch(u){return}for(c=!0,r=b.length,n=0;n<r;n++)b[n]()}}function kt(n){c?n():b[b.length]=n}function pt(n){if(typeof r.addEventListener!=i)r.addEventListener("load",n,!1);else if(typeof t.addEventListener!=i)t.addEventListener("load",n,!1);else if(typeof r.attachEvent!=i)dt(r,"onload",n);else if(typeof r.onload=="function"){var u=r.onload;r.onload=function(){u(),n()}}else r.onload=n}function ni(){vt?gt():nt()}function gt(){var o=t.getElementsByTagName("body")[0],e=s(f),r,u;e.setAttribute("type",p),r=o.appendChild(e),r?(u=0,function(){if(typeof r.GetVariable!=i){var t=r.GetVariable("$version");t&&(t=t.split(" ")[1].split(","),n.pv=[parseInt(t[0],10),parseInt(t[1],10),parseInt(t[2],10)])}else if(u<10){u++,setTimeout(arguments.callee,10);return}o.removeChild(e),r=null,nt()}()):nt()}function nt(){var y=h.length,r,t,e,c,v;if(y>0)for(r=0;r<y;r++){var o=h[r].id,s=h[r].callbackFn,f={success:!1,id:o};if(n.pv[0]>0){if(t=u(o),t)if(!g(h[r].swfVersion)||n.wk&&n.wk<312)if(h[r].expressInstall&&tt()){e={},e.data=h[r].expressInstall,e.width=t.getAttribute("width")||"0",e.height=t.getAttribute("height")||"0",t.getAttribute("class")&&(e.styleclass=t.getAttribute("class")),t.getAttribute("align")&&(e.align=t.getAttribute("align"));var p={},a=t.getElementsByTagName("param"),w=a.length;for(c=0;c<w;c++)a[c].getAttribute("name").toLowerCase()!="movie"&&(p[a[c].getAttribute("name")]=a[c].getAttribute("value"));et(e,p,o,s)}else ui(t),s&&s(f);else l(o,!0),s&&(f.success=!0,f.ref=it(o),s(f))}else l(o,!0),s&&(v=it(o),v&&typeof v.SetVariable!=i&&(f.success=!0,f.ref=v),s(f))}}function it(n){var e=null,t=u(n),r;return t&&t.nodeName=="OBJECT"&&(typeof t.SetVariable!=i?e=t:(r=t.getElementsByTagName(f)[0],r&&(e=r))),e}function tt(){return!w&&g("6.0.65")&&(n.win||n.mac)&&!(n.wk&&n.wk<312)}function et(f,e,o,h){var c,v,l,a;w=!0,ut=h||null,ct={success:!1,id:o},c=u(o),c&&(c.nodeName=="OBJECT"?(y=ft(c),d=null):(y=c,d=o),f.id=lt,(typeof f.width==i||!/%$/.test(f.width)&&parseInt(f.width,10)<310)&&(f.width="310"),(typeof f.height==i||!/%$/.test(f.height)&&parseInt(f.height,10)<137)&&(f.height="137"),t.title=t.title.slice(0,47)+" - Flash Player Installation",v=n.ie&&n.win?"ActiveX":"PlugIn",l="MMredirectURL="+r.location.toString().replace(/&/g,"%26")+"&MMplayerType="+v+"&MMdoctitle="+t.title,typeof e.flashvars!=i?e.flashvars+="&"+l:e.flashvars=l,n.ie&&n.win&&c.readyState!=4&&(a=s("div"),o+="SWFObjectNew",a.setAttribute("id",o),c.parentNode.insertBefore(a,c),c.style.display="none",function(){c.readyState==4?c.parentNode.removeChild(c):setTimeout(arguments.callee,10)}()),rt(f,e,o))}function ui(t){if(n.ie&&n.win&&t.readyState!=4){var i=s("div");t.parentNode.insertBefore(i,t),i.parentNode.replaceChild(ft(t),i),t.style.display="none",function(){t.readyState==4?t.parentNode.removeChild(t):setTimeout(arguments.callee,10)}()}else t.parentNode.replaceChild(ft(t),t)}function ft(t){var e=s("div"),u,i,o,r;if(n.win&&n.ie)e.innerHTML=t.innerHTML;else if(u=t.getElementsByTagName(f)[0],u&&(i=u.childNodes,i))for(o=i.length,r=0;r<o;r++)i[r].nodeType==1&&i[r].nodeName=="PARAM"||i[r].nodeType==8||e.appendChild(i[r].cloneNode(!0));return e}function rt(t,r,e){var v,w=u(e),y,o,b,a,c,h,l;if(n.wk&&n.wk<312)return v;if(w)if(typeof t.id==i&&(t.id=e),n.ie&&n.win){y="";for(o in t)t[o]!=Object.prototype[o]&&(o.toLowerCase()=="data"?r.movie=t[o]:o.toLowerCase()=="styleclass"?y+=' class="'+t[o]+'"':o.toLowerCase()!="classid"&&(y+=" "+o+'="'+t[o]+'"'));b="";for(a in r)r[a]!=Object.prototype[a]&&(b+='<param name="'+a+'" value="'+r[a]+'" />');w.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+y+">"+b+"</object>",k[k.length]=t.id,v=u(t.id)}else{c=s(f),c.setAttribute("type",p);for(h in t)t[h]!=Object.prototype[h]&&(h.toLowerCase()=="styleclass"?c.setAttribute("class",t[h]):h.toLowerCase()!="classid"&&c.setAttribute(h,t[h]));for(l in r)r[l]!=Object.prototype[l]&&l.toLowerCase()!="movie"&&ri(c,l,r[l]);w.parentNode.replaceChild(c,w),v=c}return v}function ri(n,t,i){var r=s("param");r.setAttribute("name",t),r.setAttribute("value",i),n.appendChild(r)}function ht(t){var i=u(t);i&&i.nodeName=="OBJECT"&&(n.ie&&n.win?(i.style.display="none",function(){i.readyState==4?ii(t):setTimeout(arguments.callee,10)}()):i.parentNode.removeChild(i))}function ii(n){var t=u(n),i;if(t){for(i in t)typeof t[i]=="function"&&(t[i]=null);t.parentNode.removeChild(t)}}function u(n){var i=null;try{i=t.getElementById(n)}catch(r){}return i}function s(n){return t.createElement(n)}function dt(n,t,i){n.attachEvent(t,i),a[a.length]=[n,t,i]}function g(t){var r=n.pv,i=t.split(".");return i[0]=parseInt(i[0],10),i[1]=parseInt(i[1],10)||0,i[2]=parseInt(i[2],10)||0,r[0]>i[0]||r[0]==i[0]&&r[1]>i[1]||r[0]==i[0]&&r[1]==i[1]&&r[2]>=i[2]?!0:!1}function wt(r,u,o,h){var a,l,c;n.ie&&n.mac||(a=t.getElementsByTagName("head")[0],a)&&(l=o&&typeof o=="string"?o:"screen",h&&(e=null,ot=null),e&&ot==l||(c=s("style"),c.setAttribute("type","text/css"),c.setAttribute("media",l),e=a.appendChild(c),n.ie&&n.win&&typeof t.styleSheets!=i&&t.styleSheets.length>0&&(e=t.styleSheets[t.styleSheets.length-1]),ot=l),n.ie&&n.win?e&&typeof e.addRule==f&&e.addRule(r,u):e&&typeof t.createTextNode!=i&&e.appendChild(t.createTextNode(r+" {"+u+"}")))}function l(n,t){if(bt){var i=t?"visible":"hidden";c&&u(n)?u(n).style.visibility=i:wt("#"+n,"visibility:"+i)}}function st(n){var r=/[\\\"<>\.;]/,t=r.exec(n)!=null;return t&&typeof encodeURIComponent!=i?encodeURIComponent(n):n}var i="undefined",f="object",at="Shockwave Flash",ti="ShockwaveFlash.ShockwaveFlash",p="application/x-shockwave-flash",lt="SWFObjectExprInst",yt="onreadystatechange",r=window,t=document,o=navigator,vt=!1,b=[ni],h=[],k=[],a=[],y,d,ut,ct,c=!1,w=!1,e,ot,bt=!0,n=function(){var a=typeof t.getElementById!=i&&typeof t.getElementsByTagName!=i&&typeof t.createElement!=i,s=o.userAgent.toLowerCase(),e=o.platform.toLowerCase(),l=e?/win/.test(e):/win/.test(s),y=e?/mac/.test(e):/mac/.test(s),v=/webkit/.test(s)?parseFloat(s.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):!1,h=!+"\v1",u=[0,0,0],n=null,c;if(typeof o.plugins!=i&&typeof o.plugins[at]==f)n=o.plugins[at].description,!n||typeof o.mimeTypes!=i&&o.mimeTypes[p]&&!o.mimeTypes[p].enabledPlugin||(vt=!0,h=!1,n=n.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),u[0]=parseInt(n.replace(/^(.*)\..*$/,"$1"),10),u[1]=parseInt(n.replace(/^.*\.(.*)\s.*$/,"$1"),10),u[2]=/[a-zA-Z]/.test(n)?parseInt(n.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0);else if(typeof r.ActiveXObject!=i)try{c=new ActiveXObject(ti),c&&(n=c.GetVariable("$version"),n&&(h=!0,n=n.split(" ")[1].split(","),u=[parseInt(n[0],10),parseInt(n[1],10),parseInt(n[2],10)]))}catch(w){}return{w3:a,pv:u,wk:v,ie:h,win:l,mac:y}}(),ei=function(){n.w3&&((typeof t.readyState!=i&&t.readyState=="complete"||typeof t.readyState==i&&(t.getElementsByTagName("body")[0]||t.body))&&v(),c||(typeof t.addEventListener!=i&&t.addEventListener("DOMContentLoaded",v,!1),n.ie&&n.win&&(t.attachEvent(yt,function(){t.readyState=="complete"&&(t.detachEvent(yt,arguments.callee),v())}),r==top&&function(){if(!c){try{t.documentElement.doScroll("left")}catch(n){setTimeout(arguments.callee,0);return}v()}}()),n.wk&&function(){if(!c){if(!/loaded|complete/.test(t.readyState)){setTimeout(arguments.callee,0);return}v()}}(),pt(v)))}(),fi=function(){n.ie&&n.win&&window.attachEvent("onunload",function(){for(var e=a.length,u,i,r,f,t=0;t<e;t++)a[t][0].detachEvent(a[t][1],a[t][2]);for(u=k.length,i=0;i<u;i++)ht(k[i]);for(r in n)n[r]=null;n=null;for(f in swfobject)swfobject[f]=null;swfobject=null})}();return{registerObject:function(t,i,r,u){if(n.w3&&t&&i){var f={};f.id=t,f.swfVersion=i,f.expressInstall=r,f.callbackFn=u,h[h.length]=f,l(t,!1)}else u&&u({success:!1,id:t})},getObjectById:function(t){if(n.w3)return it(t)},embedSWF:function(t,r,u,e,o,s,h,c,a,v){var y={success:!1,id:r};n.w3&&!(n.wk&&n.wk<312)&&t&&r&&u&&e&&o?(l(r,!1),kt(function(){var n,k,p,b,w,d;if(u+="",e+="",n={},a&&typeof a===f)for(k in a)n[k]=a[k];if(n.data=t,n.width=u,n.height=e,p={},c&&typeof c===f)for(b in c)p[b]=c[b];if(h&&typeof h===f)for(w in h)typeof p.flashvars!=i?p.flashvars+="&"+w+"="+h[w]:p.flashvars=w+"="+h[w];if(g(o))d=rt(n,p,r),n.id==r&&l(r,!0),y.success=!0,y.ref=d;else{if(s&&tt()){n.data=s,et(n,p,r,v);return}l(r,!0)}v&&v(y)})):v&&v(y)},switchOffAutoHideShow:function(){bt=!1},ua:n,getFlashPlayerVersion:function(){return{major:n.pv[0],minor:n.pv[1],release:n.pv[2]}},hasFlashPlayerVersion:g,createSWF:function(t,i,r){return n.w3?rt(t,i,r):undefined},showExpressInstall:function(t,i,r,u){n.w3&&tt()&&et(t,i,r,u)},removeSWF:function(t){n.w3&&ht(t)},createCSS:function(t,i,r,u){n.w3&&wt(t,i,r,u)},addDomLoadEvent:kt,addLoadEvent:pt,getQueryParamValue:function(n){var r=t.location.search||t.location.hash,u,i;if(r){if(/\?/.test(r)&&(r=r.split("?")[1]),n==null)return st(r);for(u=r.split("&"),i=0;i<u.length;i++)if(u[i].substring(0,u[i].indexOf("="))==n)return st(u[i].substring(u[i].indexOf("=")+1))}return""},expressInstallCallback:function(){if(w){var t=u(lt);t&&y&&(t.parentNode.replaceChild(y,t),d&&(l(d,!0),n.ie&&n.win&&(y.style.display="block")),ut&&ut(ct)),w=!1}}}}();(function(n){var e=n,p=n.document,u="undefined",v=!0,i=!1,h="",b="object",f="function",s="string",d="div",w="onunload",a="none",g=null,r=null,t=null,c=null,o=n.setTimeout,l=n.clearTimeout,k=n.setInterval,y=n.clearInterval;n.flensed={},r=n.flensed,r.checkplayer=function(g,nt,tt,it){function si(){try{pt=p.getElementsByTagName("body")[0]}catch(i){}if(typeof pt===u||pt===null){ht=o(si,25);return}try{n.swfobject.getObjectById("a"),c=n.swfobject}catch(t){ht=o(si,25);return}dt=c.hasFlashPlayerVersion(pi),yt=c.hasFlashPlayerVersion(ni),vt(),typeof at===f&&at(ut),gt=v,yt?vi():hi&&!ii&&ti()}function li(){var f,i;if(typeof e.detachEvent!==u&&e.detachEvent(w,li),t._ins=null,typeof wt!==u&&wt!==null){try{wt.updateSWFCallback=null,ci=null}catch(c){}wt=null}try{for(f in ut)if(ut[f]!==Object.prototype[f])try{ut[f]=null}catch(l){}}catch(h){}ut=null,pt=null,ai(),et=null,at=null,st=null;try{for(i in t)if(t[i]!==Object.prototype[i])try{t[i]=null}catch(o){}}catch(s){}t=null,r.checkplayer=null,r=null,n=null}function yi(n,t,i){et[et.length]={func:n,funcName:t,args:i}}function vi(){var r,t;if(!gt){ri=o(vi,25);return}r=0;try{r=et.length}catch(e){}for(t=0;t<r;t++)try{et[t].func.apply(ut,et[t].args),et[t]=i}catch(u){if(yt=i,vt(),typeof at===f)at(ut);else throw new n.Error("checkplayer::"+et[t].funcName+"() call failed.");}et=null}function ai(){var t,n;l(ht),ht=null,l(ri),ri=null;for(t in rt)rt[t]!==Object.prototype[t]&&(y(rt[t]),rt[t]=i);for(n in ot)ot[n]!==Object.prototype[n]&&(l(ot[n]),ot[n]=i)}function vt(){try{ut.playerVersionDetected=ei,ut.checkPassed=yt,ut.updateable=dt,ut.updateStatus=lt,ut.updateControlsContainer=ft}catch(n){}}function ui(n,t){var f=t?"visible":"hidden",i=r.getObjectById(n);try{if(i!==null&&typeof i.style!==u&&i.style!==null)i.style.visibility=f;else try{r.createCSS("#"+n,"visibility:"+f)}catch(s){}}catch(o){try{r.createCSS("#"+n,"visibility:"+f)}catch(e){}}}function ti(){var t=pt,n;if(typeof t===u||t===null){ot[ot.length]=o(ti,25);return}try{c.getObjectById("a")}catch(y){ot[ot.length]=o(ti,25);return}if(!ii)if(ii=v,ai(),dt){kt="CheckPlayerUpdate",ct=kt+"SWF",r.createCSS("#"+kt,"width:221px;height:145px;position:absolute;left:5px;top:5px;border:none;background-color:#000000;display:block;"),r.createCSS("#"+ct,"display:inline;position:absolute;left:1px;top:1px;"),ft=p.createElement(d),ft.id=kt,t.appendChild(ft),ui(ft.id,i),vt(),n=null;try{n=e.top.location.toString()}catch(a){n=e.location.toString()}var h={swfId:ct,MMredirectURL:n.replace(/&/g,"%26"),MMplayerType:r.ua.ie&&r.ua.win?"ActiveX":"PlugIn",MMdoctitle:p.title.slice(0,47)+" - Flash Player Installation"},s={allowScriptAccess:"always"},f={id:ct,name:ct};try{fi(r.base_path+"updateplayer.swf",{appendToId:kt},"219","143",h,s,f,{swfTimeout:3e3,swfCB:wi},v)}catch(l){bt();return}}else bt()}function bt(i){if(typeof i===u&&(i="Flash Player not detected or not updateable."),lt=t.UPDATE_FAILED,vt(),typeof st===f)st(ut);else throw new n.Error("checkplayer::UpdatePlayer(): "+i);}function wi(n){n.status===t.SWF_LOADED?(l(rt["continueUpdate_"+ct]),rt["continueUpdate_"+ct]=i,wt=n.srcElem,wt.updateSWFCallback=ci,lt=t.UPDATE_INIT,vt(),typeof st===f&&st(ut),ui(ft.id,v)):(n.status===t.SWF_FAILED||n.status===t.SWF_TIMEOUT)&&bt()}function ci(i){try{if(i===0){lt=t.UPDATE_SUCCESSFUL,ft.style.display=a;try{e.open(h,"_self",h),e.close(),n.self.opener=e,n.self.close()}catch(u){}}else if(i===1)lt=t.UPDATE_CANCELED,ft.style.display=a;else{if(i===2){ft.style.display=a,bt("The Flash Player update failed.");return}if(i===3){ft.style.display=a,bt("The Flash Player update timed out.");return}}}catch(r){}vt(),typeof st===f&&st(ut)}function fi(e,w,g,nt,tt,it,ut,ft,et){var ct,lt,ht,ot,wt,bt,dt;if(w!==null&&(typeof w===s||typeof w.replaceId===s)&&ui(typeof w===s?w:w.replaceId,i),!gt&&!et){yi(fi,"DoSWF",arguments);return}if(yt||et){if(g+=h,nt+=h,ct=typeof ut===b?ut:{},ct.data=e,ct.width=g,ct.height=nt,lt=typeof it===b?it:{},typeof tt===b)for(ht in tt)tt[ht]!==Object.prototype[ht]&&(typeof lt.flashvars!==u?lt.flashvars+="&"+ht+"="+tt[ht]:lt.flashvars=ht+"="+tt[ht]);ot=null,ot=typeof ut.id!==u?ut.id:w!==null&&(typeof w===s||typeof w.replaceId===s)?typeof w===s?w:w.replaceId:"swf_"+oi.length,wt=null,w===null||w===i||typeof w.appendToId===s?(bt=null,bt=w!==null&&w!==i&&typeof w.appendToId===s?r.getObjectById(w.appendToId):pt,dt=p.createElement(d),wt=dt.id=ot,bt.appendChild(dt)):wt=typeof w.replaceId===s?w.replaceId:w;var st=function(){},at=0,vt=h,kt=null;typeof ft!==u&&ft!==null&&(typeof ft===b?(typeof ft.swfCB!==u&&ft.swfCB!==null&&(st=ft.swfCB),typeof ft.swfTimeout!==u&&n.parseInt(ft.swfTimeout,10)>0&&(at=ft.swfTimeout),typeof ft.swfEICheck!==u&&ft.swfEICheck!==null&&ft.swfEICheck!==h&&(vt=ft.swfEICheck)):typeof ft===f&&(st=ft));try{kt=c.createSWF(ct,lt,wt)}catch(ni){}if(kt!==null)oi[oi.length]=ot,typeof st===f&&(st({status:t.SWF_INIT,srcId:ot,srcElem:kt}),rt[ot]=k(function(){var n=r.getObjectById(ot),s,e;if(typeof n!==u&&n!==null&&(n.nodeName==="OBJECT"||n.nodeName==="EMBED")){s=0;try{s=n.PercentLoaded()}catch(c){}s>0&&(at>0&&(l(rt["DoSWFtimeout_"+ot]),rt["DoSWFtimeout_"+ot]=i),s<100?o(function(){st({status:t.SWF_LOADING,srcId:ot,srcElem:n})},1):(y(rt[ot]),rt[ot]=i,o(function(){st({status:t.SWF_LOADED,srcId:ot,srcElem:n})},1),vt!==h&&(e=i,rt[ot]=k(function(){if(!e&&typeof n[vt]===f){e=v;try{n[vt](),y(rt[ot]),rt[ot]=i,st({status:t.SWF_EI_READY,srcId:ot,srcElem:n})}catch(r){}e=i}},25))))}},50),at>0&&(rt["DoSWFtimeout_"+ot]=o(function(){var n=r.getObjectById(ot),f;if(typeof n!==u&&n!==null&&(n.nodeName==="OBJECT"||n.nodeName==="EMBED")){f=0;try{f=n.PercentLoaded()}catch(e){}f<=0&&(y(rt[ot]),rt[ot]=i,r.ua.ie&&r.ua.win&&n.readyState!==4?(n.id="removeSWF_"+n.id,n.style.display=a,rt[n.id]=k(function(){n.readyState===4&&(y(rt[n.id]),rt[n.id]=i,c.removeSWF(n.id))},500)):c.removeSWF(n.id),rt[ot]=i,rt["DoSWFtimeout_"+ot]=i,st({status:t.SWF_TIMEOUT,srcId:ot,srcElem:n}))}},at)));else if(typeof st===f)st({status:t.SWF_FAILED,srcId:ot,srcElem:null});else throw new n.Error("checkplayer::DoSWF(): SWF could not be loaded.");}else if(typeof st===f)st({status:t.SWF_FAILED,srcId:ot,srcElem:null});else throw new n.Error("checkplayer::DoSWF(): Minimum Flash Version not detected.");}var ut;if(typeof t._ins!==u)return t._ins.ready()&&setTimeout(function(){nt(t._ins)},0),t._ins;var pi="6.0.65",ot=[],ri=null,ii=i,ht=null,ct=null,kt=h,gt=i,wt=null,oi=[],rt={},et=[],pt=null,ni=null,at=null,st=null,hi=i,ei=null,yt=i,dt=i,lt=i,ft=null,bi=function(){function n(){l(ht);try{e.detachEvent(w,n)}catch(t){}}ni=typeof g!==u&&g!==null&&g!==i?g+h:"0.0.0",typeof nt===f&&(at=nt),typeof tt!==u&&(hi=!!tt),typeof it===f&&(st=it);try{e.attachEvent(w,n)}catch(t){}(function(){try{r.bindEvent(e,w,li)}catch(t){ht=o(arguments.callee,25);return}n(),ei=r.ua.pv.join("."),ht=o(si,1)})()}();return ut={playerVersionDetected:ei,versionChecked:ni,checkPassed:yt,UpdatePlayer:ti,DoSWF:function(n,t,r,u,f,e,o,s){fi(n,t,r,u,f,e,o,s,i)},ready:function(){return gt},updateable:dt,updateStatus:lt,updateControlsContainer:ft},t._ins=ut,ut},t=r.checkplayer,t.UPDATE_INIT=1,t.UPDATE_SUCCESSFUL=2,t.UPDATE_CANCELED=3,t.UPDATE_FAILED=4,t.SWF_INIT=5,t.SWF_LOADING=6,t.SWF_LOADED=7,t.SWF_FAILED=8,t.SWF_TIMEOUT=9,t.SWF_EI_READY=10,t.module_ready=function(){}})(window);(function(n){var l=n,t=n.document,r="undefined",o=!0,e=!1,c="",h="object",a="string",i=null,u=null,s=null,f=n.parseInt,v=n.setTimeout;i=n.flensed,i.getObjectById=function(n){try{if(t.layers)return t.layers[n];if(t.all)return t.all[n];if(t.getElementById)return t.getElementById(n)}catch(i){}return null},i.createCSS=function(n,f,e,o){var v,l,c;i.ua.ie&&i.ua.mac||(v=t.getElementsByTagName("head")[0],v)&&(l=e&&typeof e===a?e:"screen",o&&(u=null,s=null),u&&s===l||(c=t.createElement("style"),c.setAttribute("type","text/css"),c.setAttribute("media",l),u=v.appendChild(c),i.ua.ie&&i.ua.win&&typeof t.styleSheets!==r&&t.styleSheets.length>0&&(u=t.styleSheets[t.styleSheets.length-1]),s=l),i.ua.ie&&i.ua.win?u&&typeof u.addRule===h&&u.addRule(n,f):u&&typeof t.createTextNode!==r&&u.appendChild(t.createTextNode(n+" {"+f+"}")))},i.bindEvent=function(n,t,i){t=t.toLowerCase();try{typeof n.addEventListener!==r?n.addEventListener(t.replace(/^on/,c),i,e):typeof n.attachEvent!==r&&n.attachEvent(t,i)}catch(u){}},i.unbindEvent=function(n,t,i){t=t.toLowerCase();try{typeof n.removeEventListener!==r?n.removeEventListener(t.replace(/^on/,c),i,e):typeof n.detachEvent!==r&&n.detachEvent(t,i)}catch(u){}},i.throwUnhandledError=function(t){throw new n.Error(t);},i.error=function(n,t,i,r){return{number:n,name:t,description:i,message:i,srcElement:r,toString:function(){return n+", "+t+", "+i}}},i.ua=function(){var k="Shockwave Flash",g="ShockwaveFlash.ShockwaveFlash",d="application/x-shockwave-flash",u=n.navigator,tt=typeof t.getElementById!==r&&typeof t.getElementsByTagName!==r&&typeof t.createElement!==r,c=[0,0,0],i=null,v;if(typeof u.plugins!==r&&typeof u.plugins[k]===h)i=u.plugins[k].description,!i||typeof u.mimeTypes!==r&&u.mimeTypes[d]&&!u.mimeTypes[d].enabledPlugin||(i=i.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),c[0]=f(i.replace(/^(.*)\..*$/,"$1"),10),c[1]=f(i.replace(/^.*\.(.*)\s.*$/,"$1"),10),c[2]=/r/.test(i)?f(i.replace(/^.*r(.*)$/,"$1"),10):0);else if(typeof l.ActiveXObject!==r)try{v=new n.ActiveXObject(g),v&&(i=v.GetVariable("$version"),i&&(i=i.split(" ")[1].split(","),c=[f(i[0],10),f(i[1],10),f(i[2],10)]))}catch(rt){}var s=u.userAgent.toLowerCase(),a=u.platform.toLowerCase(),nt=/webkit/.test(s)?parseFloat(s.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):e,y=e,p=0,b=a?/win/.test(a):/win/.test(s),w=a?/mac/.test(a):/mac/.test(s);/*@cc_on y=o;try{p=f(s.match(/msie (\d+)/)[1],10)}catch(it){}@if(@_win32)b=o;@elif(@_mac)w=o;@end@*/return{w3cdom:tt,pv:c,webkit:nt,ie:y,ieVer:p,win:b,mac:w}}()})(window);(function(n){var s=n,nt=n.document,t="undefined",h=!0,e=!1,u="",ot="object",ut="function",ct="string",ht="div",o="onunload",g=null,r=null,b=null,p=null,pt=0,k=[],st=null,i=null,lt="flXHR.js",yt="flensed.js",vt="checkplayer.js",at="flXHR.swf",et=n.parseInt,l=n.setTimeout,d=n.clearTimeout,wt=n.setInterval,bt=n.clearInterval,c="instanceId",tt="readyState",y="onreadystatechange",w="ontimeout",v="onerror",f="loadPolicyURL",a="noCacheHeader",it="sendTimeout",rt="appendToId",ft="swfIdPrefix";(typeof n.flensed===t&&(n.flensed={}),typeof n.flensed.flXHR===t)&&(r=n.flensed,l(function(){function it(n,i,u){for(var e,o=0;o<g;o++)if(typeof f[o].src!==t&&f[o].src.indexOf(n)>=0)break;e=nt.createElement("script"),e.setAttribute("src",r.base_path+n),typeof i!==t&&e.setAttribute("type",i),typeof u!==t&&e.setAttribute("language",u),nt.getElementsByTagName("head")[0].appendChild(e)}function w(){d(v);try{s.detachEvent(o,w)}catch(n){}}function k(){d(y);try{s.detachEvent(o,k)}catch(n){}}var tt=e,f=nt.getElementsByTagName("script"),g=f.length,a,c,v,y;try{r.base_path.toLowerCase(),tt=h}catch(et){r.base_path=u}if(typeof f!==t&&f!==null&&!tt)for(a=0,c=0;c<g;c++)if(typeof f[c].src!==t&&((a=f[c].src.indexOf(yt))>=0||(a=f[c].src.indexOf(lt))>=0)){r.base_path=f[c].src.substr(0,a);break}try{r.checkplayer.module_ready()}catch(ft){it(vt,"text/javascript")}if(v=null,function(){try{r.ua.pv.join(".")}catch(t){v=l(arguments.callee,25);return}r.bindEvent(s,o,function(){try{n.flensed.unbindEvent(s,o,arguments.callee);for(var t in i)if(i[t]!==Object.prototype[t])try{i[t]=null}catch(f){}r.flXHR=null,i=null,r=null,p=null,b=null}catch(u){}})}(),v!==null)try{s.attachEvent(o,w)}catch(rt){}y=null;try{s.attachEvent(o,k)}catch(ut){}},0),r.flXHR=function(lt){function br(){li=di===null?nt.getElementsByTagName("body")[0]:r.getObjectById(di);try{li.nodeName.toLowerCase(),r.checkplayer.module_ready(),b=r.checkplayer}catch(u){oi=l(br,25);return}if(p===null&&typeof b._ins===t)try{p=new b(i.MIN_PLAYER_VERSION,fu,e,uu)}catch(n){wt(i.DEPENDENCY_ERROR,"flXHR: checkplayer Init Failed","The initialization of the 'checkplayer' library failed to complete.");return}else p=b._ins,sr()}function sr(){var n;if(p===null||!p.checkPassed){oi=l(sr,25);return}st===null&&di===null&&(r.createCSS("."+or,"left:-1px;top:0px;width:1px;height:1px;position:absolute;"),st=h),n=nt.createElement(ht),n.id=ii,n.className=or,li.appendChild(n),li=null;var f={},e={allowScriptAccess:"always"},t={id:ii,name:ii,styleclass:or},u={swfCB:iu,swfEICheck:"reset"};try{p.DoSWF(r.base_path+at,ii,"1","1",f,e,t,u)}catch(o){wt(i.DEPENDENCY_ERROR,"flXHR: checkplayer Call Failed","A call to the 'checkplayer' library failed to complete.");return}}function iu(n){if(n.status===b.SWF_EI_READY){if(vi(),yt=r.getObjectById(ii),yt.setId(ii),gt!==u&&yt.loadPolicy(gt),yt.autoNoCacheHeader(ti),yt.doOnReadyStateChange=ki,yt.doOnError=wt,yt.sendProcessed=ar,yt.chunkResponse=wr,bt=0,kt(),ai(),typeof ni===ut)try{ni(vt)}catch(t){wt(i.HANDLER_ERROR,"flXHR::onreadystatechange(): Error","An error occurred in the handler function. ("+t.message+")");return}dr()}}function gi(){var i,r;try{n.flensed.unbindEvent(s,o,gi)}catch(v){}try{for(i=0;i<k.length;i++)k[i]===vt&&(k[i]=e)}catch(a){}try{for(r in vt)if(vt[r]!==Object.prototype[r])try{vt[r]=null}catch(y){}}catch(w){}if(vt=null,vi(),typeof yt!==t&&yt!==null){try{yt.abort()}catch(p){}try{yt.doOnReadyStateChange=null,ki=null}catch(f){}try{yt.doOnError=null,doOnError=null}catch(u){}try{yt.sendProcessed=null,ar=null}catch(h){}try{yt.chunkResponse=null,wr=null}catch(l){}yt=null;try{n.swfobject.removeSWF(ii)}catch(c){}}rr(),ni=null,ui=null,ei=null,fi=null,li=null}function wr(){typeof arguments[0]===ct&&(fi=fi!==null?fi:u,fi+=arguments[0])}function ki(){typeof arguments[0]!==t&&(bt=arguments[0]),bt===4&&(vi(),bi=fi,fi=null),typeof arguments[1]!==t&&(wi=arguments[1]),typeof arguments[2]!==t&&(pi=arguments[2]),nr(bt)}function nr(n){if(ci=n,kt(),ai(),vt[tt]=Math.max(0,n),typeof ni===ut)try{ni(vt)}catch(t){wt(i.HANDLER_ERROR,"flXHR::onreadystatechange(): Error","An error occurred in the handler function. ("+t.message+")");return}}function wt(){var n,t,u;vi(),rr(),hi=h;try{n=new r.error(arguments[0],arguments[1],arguments[2],vt)}catch(c){function o(){function t(){return i+", "+r+", "+n}this.number=0,this.name="flXHR Error: Unknown",this.description="Unknown error from 'flXHR' library.",this.message=this.description,this.srcElement=vt;var i=this.number,r=this.name,n=this.description;this.toString=t}n=new o}t=e;try{typeof ui===ut&&(ui(n),t=h)}catch(s){u=n.toString();function f(){function t(){return r+", "+f+", "+n}this.number=i.HANDLER_ERROR,this.name="flXHR::onerror(): Error",this.description="An error occured in the handler function. ("+s.message+")\nPrevious:["+u+"]",this.message=this.description,this.srcElement=vt;var r=this.number,f=this.name,n=this.description;this.toString=t}n=new f}t||l(function(){r.throwUnhandledError(n.toString())},1)}function ru(){if(fr(),hi=h,typeof ei===ut)try{ei(vt)}catch(n){wt(i.HANDLER_ERROR,"flXHR::ontimeout(): Error","An error occurred in the handler function. ("+n.message+")");return}else wt(i.TIMEOUT_ERROR,"flXHR: Operation Timed out","The requested operation timed out.")}function vi(){d(oi),oi=null,d(hr),hr=null,d(er),er=null}function ir(n,t,i){dt[dt.length]={func:n,funcName:t,args:i},ri=e}function rr(){var t,n;if(!ri){for(ri=h,t=dt.length,n=0;n<t;n++)try{dt[n]=e}catch(i){}dt=[]}}function dr(){if(bt<0){er=l(dr,25);return}if(!ri){for(var n=0;n<dt.length;n++)try{dt[n]!==e&&(dt[n].func.apply(vt,dt[n].args),dt[n]=e)}catch(t){wt(i.HANDLER_ERROR,"flXHR::"+dt[n].funcName+"(): Error","An error occurred in the "+dt[n].funcName+"() function.");return}ri=h}}function ai(){try{vt[c]=yi,vt[tt]=ci,vt.status=wi,vt.statusText=pi,vt.responseText=bi,vt[y]=ni,vt[v]=ui,vt[w]=ei,vt[f]=gt,vt[a]=ti}catch(n){}}function kt(){try{yi=vt[c],vt.timeout!==null&&(g=et(vt.timeout,10))>0&&(si=g),ni=vt[y],ui=vt[v],ei=vt[w],vt[f]!==null&&(vt[f]!==gt&&bt>=0&&yt.loadPolicy(vt[f]),gt=vt[f]),vt[a]!==null&&(vt[a]!==ti&&bt>=0&&yt.autoNoCacheHeader(vt[a]),ti=vt[a])}catch(n){}}function cr(){fr();try{yt.reset()}catch(n){}wi=null,pi=null,bi=null,fi=null,hi=e,ai(),gt=u,kt()}function fu(n){n.checkPassed?sr():vr?p.UpdatePlayer():wt(i.PLAYER_VERSION_ERROR,"flXHR: Insufficient Flash Player Version","The Flash Player was either not detected, or the detected version ("+n.playerVersionDetected+") was not at least the minimum version ("+i.MIN_PLAYER_VERSION+") needed by the 'flXHR' library.")}function uu(n){n.updateStatus===b.UPDATE_CANCELED?wt(i.PLAYER_VERSION_ERROR,"flXHR: Flash Player Update Canceled","The Flash Player was not updated."):n.updateStatus===b.UPDATE_FAILED&&wt(i.PLAYER_VERSION_ERROR,"flXHR: Flash Player Update Failed","The Flash Player was either not detected or could not be updated.")}function ar(){si!==null&&si>0&&(hr=l(ru,si))}function fr(){vi(),rr(),kt(),bt=0,ci=0;try{yt.abort()}catch(n){wt(i.CALL_ERROR,"flXHR::abort(): Failed","The abort() call failed to complete.")}ai()}function pr(){if(kt(),typeof arguments[0]===t||typeof arguments[1]===t)wt(i.CALL_ERROR,"flXHR::open(): Failed","The open() call requires 'method' and 'url' parameters.");else{(bt>0||hi)&&cr(),ci===0?ki(1):bt=1;var e=arguments[0],o=arguments[1],f=typeof arguments[2]!==t?arguments[2]:h,n=typeof arguments[3]!==t?arguments[3]:u,r=typeof arguments[4]!==t?arguments[4]:u;try{yt.autoNoCacheHeader(ti),yt.open(e,o,f,n,r)}catch(s){wt(i.CALL_ERROR,"flXHR::open(): Failed","The open() call failed to complete.")}}}function yr(){if(kt(),bt<=1&&!hi){var n=typeof arguments[0]!==t?arguments[0]:u;ci===1?ki(2):bt=2;try{yt.autoNoCacheHeader(ti),yt.send(n)}catch(r){wt(i.CALL_ERROR,"flXHR::send(): Failed","The send() call failed to complete.")}}else wt(i.CALL_ERROR,"flXHR::send(): Failed","The send() call cannot be made at this time.")}function lr(){if(kt(),typeof arguments[0]===t||typeof arguments[1]===t)wt(i.CALL_ERROR,"flXHR::setRequestHeader(): Failed","The setRequestHeader() call requires 'name' and 'value' parameters.");else if(!hi){var r=typeof arguments[0]!==t?arguments[0]:u,n=typeof arguments[1]!==t?arguments[1]:u;try{yt.setRequestHeader(r,n)}catch(f){wt(i.CALL_ERROR,"flXHR::setRequestHeader(): Failed","The setRequestHeader() call failed to complete.")}}}function nu(){return kt(),u}function tu(){return kt(),[]}var ur=e,tr;if(lt!==null&&typeof lt===ot&&typeof lt.instancePooling!==t&&(ur=!!lt.instancePooling,ur&&(tr=function(){for(var n,t=0;t<k.length;t++)if(n=k[t],n[tt]===4)return n.Reset(),n.Configure(lt),n;return null}(),tr!==null)))return tr;var kr=++pt,dt=[],oi=null,er=null,hr=null,ii=null,bt=-1,ci=0,bi=null,wi=null,pi=null,yt=null,vt=null,li=null,fi=null,ri=h,hi=e,yi="flXHR_"+kr,ti=h,vr=e,gr="flXHR_swf",or="flXHRhideSwf",di=null,si=-1,gt=u,ni=null,ui=null,ei=null,eu=function(){function n(){d(oi);try{s.detachEvent(o,n)}catch(t){}}typeof lt===ot&&lt!==null&&(typeof lt[c]!==t&&lt[c]!==null&&lt[c]!==u&&(yi=lt[c]),typeof lt[ft]!==t&&lt[ft]!==null&&lt[ft]!==u&&(gr=lt[ft]),typeof lt[rt]!==t&&lt[rt]!==null&&lt[rt]!==u&&(di=lt[rt]),typeof lt[f]!==t&&lt[f]!==null&&lt[f]!==u&&(gt=lt[f]),typeof lt[a]!==t&&(ti=!!lt[a]),typeof lt.autoUpdatePlayer!==t&&(vr=!!lt.autoUpdatePlayer),typeof lt[it]!==t&&(g=et(lt[it],10))>0&&(si=g),typeof lt[y]!==t&&lt[y]!==null&&(ni=lt[y]),typeof lt[v]!==t&&lt[v]!==null&&(ui=lt[v]),typeof lt[w]!==t&&lt[w]!==null&&(ei=lt[w])),ii=gr+"_"+kr;try{s.attachEvent(o,n)}catch(i){}(function(){try{r.bindEvent(s,o,gi)}catch(t){oi=l(arguments.callee,25);return}n(),oi=l(br,1)})()}();return vt={readyState:ci,responseText:bi,status:wi,statusText:pi,timeout:si,open:function(){if(kt(),vt[tt]===0&&nr(1),!ri||bt<0){ir(pr,"open",arguments);return}pr.apply({},arguments)},send:function(){if(kt(),vt[tt]===1&&nr(2),!ri||bt<0){ir(yr,"send",arguments);return}yr.apply({},arguments)},abort:fr,setRequestHeader:function(){if(kt(),!ri||bt<0){ir(lr,"setRequestHeader",arguments);return}lr.apply({},arguments)},getResponseHeader:nu,getAllResponseHeaders:tu,onreadystatechange:ni,ontimeout:ei,instanceId:yi,loadPolicyURL:gt,noCacheHeader:ti,onerror:ui,Configure:function(n){typeof n===ot&&n!==null&&(typeof n[c]!==t&&n[c]!==null&&n[c]!==u&&(yi=n[c]),typeof n[a]!==t&&(ti=!!n[a],bt>=0&&yt.autoNoCacheHeader(ti)),typeof n[y]!==t&&n[y]!==null&&(ni=n[y]),typeof n[v]!==t&&n[v]!==null&&(ui=n[v]),typeof n[w]!==t&&n[w]!==null&&(ei=n[w]),typeof n[it]!==t&&(g=et(n[it],10))>0&&(si=g),typeof n[f]!==t&&n[f]!==null&&n[f]!==u&&n[f]!==gt&&(gt=n[f],bt>=0&&yt.loadPolicy(gt)),ai())},Reset:cr,Destroy:gi},ur&&(k[k.length]=vt),vt},i=r.flXHR,i.HANDLER_ERROR=10,i.CALL_ERROR=11,i.TIMEOUT_ERROR=12,i.DEPENDENCY_ERROR=13,i.PLAYER_VERSION_ERROR=14,i.SECURITY_ERROR=15,i.COMMUNICATION_ERROR=16,i.MIN_PLAYER_VERSION="9.0.124",i.module_ready=function(){})})(window);(function(n){n.flxhrProxy=flensed.flXHR;var i=[],r=/^(?:post|get)$/i,t={instancePooling:!0,autoUpdatePlayer:!0};n.flxhrProxy.registerOptions=function(r,u){u=n.extend({},t,u||{}),i.push(function(n){if(n.substring(0,r.length)===r)return u})},n.ajaxPrefilter(function(n){var f,e,u;if(n.async&&r.test(n.type)){for(u=0;u<i.length;u++)(e=i[u](n.url))&&(f=e);if(f||n.flxhr)return n.flxhrOptions=f||t,"__flxhr__"}}),n.ajaxTransport("__flxhr__",function(i,r,u){if(i.dataTypes.shift(),i.async){var f;return{send:function(r,e){var h=i.flxhrOptions||t,o=u.__flXHR__=new n.flxhrProxy(h),c,s;f=function(n,t){if(f&&(t||o.readyState===4))if(f=o.onreadystatechange=o.onerror=null,t)(c=t!=="abort")||o.abort(),e(n,t);else{var r={},i=o.responseXML;i&&i.documentElement&&(r.xml=i),r.text=o.responseText,e(o.status,o.statusText,r,o.getAllResponseHeaders())}},n.isFunction(h.onerror)&&u.fail(function(){c&&h.onerror.apply(this,arguments)}),o.onreadystatechange=f,o.onerror=function(n){e(-1,n)},o.open(i.type,i.url,i.async,i.username,i.password);for(s in r)o.setRequestHeader(s,r[s]);o.send(i.hasContent&&i.data||null)},abort:function(){f&&f(0,"abort")}}}})})(jQuery)