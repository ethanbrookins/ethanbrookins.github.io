window.getComputedStyle||(window.getComputedStyle=function(e,t){return this.el=e,this.getPropertyValue=function(t){var a=/(\-([a-z]){1})/g;return"float"==t&&(t="styleFloat"),a.test(t)&&(t=t.replace(a,function(){return arguments[2].toUpperCase()})),e.currentStyle[t]?e.currentStyle[t]:null},this}),jQuery(document).ready(function($){var responsive_viewport=$(window).width();responsive_viewport>=768&&$(".comment img[data-gravatar]").each(function(){$(this).attr("src",$(this).attr("data-gravatar"))}),function($){"use strict";$.fn.fitVids=function(e){var t={customSelector:null},a=document.createElement("div"),i=document.getElementsByTagName("base")[0]||document.getElementsByTagName("script")[0];return a.className="fit-vids-style",a.innerHTML="&shy;<style>         		  .fluid-width-video-wrapper {        			 width: 100%;                     			 position: relative;              			 padding: 0;                      		  }                                   											  		  .fluid-width-video-wrapper iframe,  		  .fluid-width-video-wrapper object,  		  .fluid-width-video-wrapper embed {  			 position: absolute;              			 top: 0;                          			 left: 0;                         			 width: 100%;                     			 height: 100%;                    		  }                                   		</style>",i.parentNode.insertBefore(a,i),e&&$.extend(t,e),this.each(function(){var e=["iframe[src*='player.vimeo.com']","iframe[src*='www.youtube.com']","iframe[src*='www.youtube-nocookie.com']","iframe[src*='www.kickstarter.com']","object","embed"];t.customSelector&&e.push(t.customSelector);var a=$(this).find(e.join(","));a.each(function(){var e=$(this);if(!("embed"===this.tagName.toLowerCase()&&e.parent("object").length||e.parent(".fluid-width-video-wrapper").length)){var t="object"===this.tagName.toLowerCase()||e.attr("height")&&!isNaN(parseInt(e.attr("height"),10))?parseInt(e.attr("height"),10):e.height(),a=isNaN(parseInt(e.attr("width"),10))?e.width():parseInt(e.attr("width"),10),i=t/a;if(!e.attr("id")){var r="fitvid"+Math.floor(999999*Math.random());e.attr("id",r)}e.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*i+"%").css("margin-bottom","0.75em"),e.removeAttr("height").removeAttr("width")}})})}}(jQuery),$(document).ready(function(){$("#content").fitVids()}),function($){$(function(){try{"undefined"!=typeof _wpcf7&&null!==_wpcf7||(_wpcf7={}),_wpcf7=$.extend({cached:0},_wpcf7),_wpcf7.supportHtml5=$.wpcf7SupportHtml5(),$("div.wpcf7 > form").ajaxForm({beforeSubmit:function(e,t,a){return t.wpcf7ClearResponseOutput(),t.find("img.ajax-loader").css({visibility:"visible"}),!0},beforeSerialize:function(e,t){return e.find("[placeholder].placeheld").each(function(e,t){$(t).val("")}),!0},data:{_wpcf7_is_ajax_call:1},dataType:"json",success:function(data){if($.isPlainObject(data)&&!$.isEmptyObject(data)){var ro=$(data.into).find("div.wpcf7-response-output");$(data.into).wpcf7ClearResponseOutput(),$(data.into).find(".wpcf7-form-control").removeClass("wpcf7-not-valid"),$(data.into).find("form.wpcf7-form").removeClass("invalid spam sent failed"),data.captcha&&$(data.into).wpcf7RefillCaptcha(data.captcha),data.quiz&&$(data.into).wpcf7RefillQuiz(data.quiz),data.invalids?($.each(data.invalids,function(e,t){$(data.into).find(t.into).wpcf7NotValidTip(t.message),$(data.into).find(t.into).find(".wpcf7-form-control").addClass("wpcf7-not-valid")}),ro.addClass("wpcf7-validation-errors"),$(data.into).find("form.wpcf7-form").addClass("invalid"),$(data.into).trigger("invalid.wpcf7")):1==data.spam?(ro.addClass("wpcf7-spam-blocked"),$(data.into).find("form.wpcf7-form").addClass("spam"),$(data.into).trigger("spam.wpcf7")):1==data.mailSent?(ro.addClass("wpcf7-mail-sent-ok"),$(data.into).find("form.wpcf7-form").addClass("sent"),data.onSentOk&&$.each(data.onSentOk,function(i,n){eval(n)}),$(data.into).trigger("mailsent.wpcf7")):(ro.addClass("wpcf7-mail-sent-ng"),$(data.into).find("form.wpcf7-form").addClass("failed"),$(data.into).trigger("mailfailed.wpcf7")),data.onSubmit&&$.each(data.onSubmit,function(i,n){eval(n)}),$(data.into).trigger("submit.wpcf7"),1==data.mailSent&&$(data.into).find("form").resetForm().clearForm(),$(data.into).find("[placeholder].placeheld").each(function(e,t){$(t).val($(t).attr("placeholder"))}),$(data.into).wpcf7FillResponseOutput(data.message)}},error:function(e,t,a,i){var r=$('<div class="ajax-error"></div>').text(a.message);i.after(r)}}),$("div.wpcf7 > form").wpcf7InitForm()}catch(e){}}),$.fn.wpcf7InitForm=function(){return this.each(function(e,t){var a=$(t);_wpcf7.cached&&a.wpcf7OnloadRefill(),a.wpcf7ToggleSubmit(),a.find(".wpcf7-submit").wpcf7AjaxLoader(),a.find(".wpcf7-acceptance").click(function(){a.wpcf7ToggleSubmit()}),a.find(".wpcf7-exclusive-checkbox").wpcf7ExclusiveCheckbox(),a.find("[placeholder]").wpcf7Placeholder(),_wpcf7.jqueryUi&&!_wpcf7.supportHtml5.date&&a.find('input.wpcf7-date[type="date"]').each(function(){$(this).datepicker({dateFormat:"yy-mm-dd",minDate:new Date($(this).attr("min")),maxDate:new Date($(this).attr("max"))})}),_wpcf7.jqueryUi&&!_wpcf7.supportHtml5.number&&a.find('input.wpcf7-number[type="number"]').each(function(){$(this).spinner({min:$(this).attr("min"),max:$(this).attr("max"),step:$(this).attr("step")})})})},$.fn.wpcf7ExclusiveCheckbox=function(){return this.find("input:checkbox").click(function(){$(this).closest(".wpcf7-checkbox").find("input:checkbox").not(this).removeAttr("checked")})},$.fn.wpcf7Placeholder=function(){return _wpcf7.supportHtml5.placeholder?this:this.each(function(){$(this).val($(this).attr("placeholder")),$(this).addClass("placeheld"),$(this).focus(function(){$(this).hasClass("placeheld")&&$(this).val("").removeClass("placeheld")}),$(this).blur(function(){""==$(this).val()&&($(this).val($(this).attr("placeholder")),$(this).addClass("placeheld"))})})},$.fn.wpcf7AjaxLoader=function(){return this.each(function(){var e=$('<img class="ajax-loader" />').attr({src:_wpcf7.loaderUrl,alt:_wpcf7.sending}).css("visibility","hidden");$(this).after(e)})},$.fn.wpcf7ToggleSubmit=function(){return this.each(function(){var e=$(this);if("form"!=this.tagName.toLowerCase()&&(e=$(this).find("form").first()),!e.hasClass("wpcf7-acceptance-as-validation")){var t=e.find("input:submit");if(t.length){var a=e.find("input:checkbox.wpcf7-acceptance");a.length&&(t.removeAttr("disabled"),a.each(function(e,a){a=$(a),(a.hasClass("wpcf7-invert")&&a.is(":checked")||!a.hasClass("wpcf7-invert")&&!a.is(":checked"))&&t.attr("disabled","disabled")}))}}})},$.fn.wpcf7NotValidTip=function(e){return this.each(function(){var t=$(this);t.append('<span class="wpcf7-not-valid-tip">'+e+"</span>"),$("span.wpcf7-not-valid-tip").mouseover(function(){$(this).fadeOut("fast")}),t.find(":input").mouseover(function(){t.find(".wpcf7-not-valid-tip").not(":hidden").fadeOut("fast")}),t.find(":input").focus(function(){t.find(".wpcf7-not-valid-tip").not(":hidden").fadeOut("fast")})})},$.fn.wpcf7OnloadRefill=function(){return this.each(function(){var e=$(this).attr("action");0<e.indexOf("#")&&(e=e.substr(0,e.indexOf("#")));var t=$(this).find('input[name="_wpcf7"]').val(),a=$(this).find('input[name="_wpcf7_unit_tag"]').val();$.getJSON(e,{_wpcf7_is_ajax_call:1,_wpcf7:t,_wpcf7_request_ver:$.now()},function(e){e&&e.captcha&&$("#"+a).wpcf7RefillCaptcha(e.captcha),e&&e.quiz&&$("#"+a).wpcf7RefillQuiz(e.quiz)})})},$.fn.wpcf7RefillCaptcha=function(e){return this.each(function(){var t=$(this);$.each(e,function(e,a){t.find(':input[name="'+e+'"]').clearFields(),t.find("img.wpcf7-captcha-"+e).attr("src",a);var i=/([0-9]+)\.(png|gif|jpeg)$/.exec(a);t.find('input:hidden[name="_wpcf7_captcha_challenge_'+e+'"]').attr("value",i[1])})})},$.fn.wpcf7RefillQuiz=function(e){return this.each(function(){var t=$(this);$.each(e,function(e,a){t.find(':input[name="'+e+'"]').clearFields(),t.find(':input[name="'+e+'"]').siblings("span.wpcf7-quiz-label").text(a[0]),t.find('input:hidden[name="_wpcf7_quiz_answer_'+e+'"]').attr("value",a[1])})})},$.fn.wpcf7ClearResponseOutput=function(){return this.each(function(){$(this).find("div.wpcf7-response-output").hide().empty().removeClass("wpcf7-mail-sent-ok wpcf7-mail-sent-ng wpcf7-validation-errors wpcf7-spam-blocked"),$(this).find("span.wpcf7-not-valid-tip").remove(),$(this).find("img.ajax-loader").css({visibility:"hidden"})})},$.fn.wpcf7FillResponseOutput=function(e){return this.each(function(){$(this).find("div.wpcf7-response-output").append(e).slideDown("fast")})},$.wpcf7SupportHtml5=function(){var e={},t=document.createElement("input");e.placeholder="placeholder"in t;var a=["email","url","tel","number","range","date"];return $.each(a,function(a,i){t.setAttribute("type",i),e[i]="text"!==t.type}),e}}(jQuery),function(e){"use strict";function t(t){var a=t.data;t.isDefaultPrevented()||(t.preventDefault(),e(this).ajaxSubmit(a))}function a(t){var a=t.target,i=e(a);if(!i.is("[type=submit],[type=image]")){var r=i.closest("[type=submit]");if(0===r.length)return;a=r[0]}var n=this;if(n.clk=a,"image"==a.type)if(void 0!==t.offsetX)n.clk_x=t.offsetX,n.clk_y=t.offsetY;else if("function"==typeof e.fn.offset){var o=i.offset();n.clk_x=t.pageX-o.left,n.clk_y=t.pageY-o.top}else n.clk_x=t.pageX-a.offsetLeft,n.clk_y=t.pageY-a.offsetTop;setTimeout(function(){n.clk=n.clk_x=n.clk_y=null},100)}function i(){if(e.fn.ajaxSubmit.debug){var t="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(t):window.opera&&window.opera.postError&&window.opera.postError(t)}}var r={};r.fileapi=void 0!==e("<input type='file'/>").get(0).files,r.formdata=void 0!==window.FormData;var n=!!e.fn.prop;e.fn.attr2=function(){if(!n)return this.attr.apply(this,arguments);var e=this.prop.apply(this,arguments);return e&&e.jquery||"string"==typeof e?e:this.attr.apply(this,arguments)},e.fn.ajaxSubmit=function(t){function a(a){var i,r,n=e.param(a,t.traditional).split("&"),o=n.length,s=[];for(i=0;o>i;i++)n[i]=n[i].replace(/\+/g," "),r=n[i].split("="),s.push([decodeURIComponent(r[0]),decodeURIComponent(r[1])]);return s}function o(i){for(var r=new FormData,n=0;i.length>n;n++)r.append(i[n].name,i[n].value);if(t.extraData){var o=a(t.extraData);for(n=0;o.length>n;n++)o[n]&&r.append(o[n][0],o[n][1])}t.data=null;var s=e.extend(!0,{},e.ajaxSettings,t,{contentType:!1,processData:!1,cache:!1,type:l||"POST"});t.uploadProgress&&(s.xhr=function(){var a=e.ajaxSettings.xhr();return a.upload&&a.upload.addEventListener("progress",function(e){var a=0,i=e.loaded||e.position,r=e.total;e.lengthComputable&&(a=Math.ceil(100*(i/r))),t.uploadProgress(e,i,r,a)},!1),a}),s.data=null;var c=s.beforeSend;return s.beforeSend=function(e,t){t.data=r,c&&c.call(this,e,t)},e.ajax(s)}function s(a){function r(e){var t=null;try{e.contentWindow&&(t=e.contentWindow.document)}catch(a){i("cannot get iframe.contentWindow document: "+a)}if(t)return t;try{t=e.contentDocument?e.contentDocument:e.document}catch(a){i("cannot get iframe.contentDocument: "+a),t=e.document}return t}function o(){function t(){try{var e=r(b).readyState;i("state = "+e),e&&"uninitialized"==e.toLowerCase()&&setTimeout(t,50)}catch(a){i("Server abort: ",a," (",a.name,")"),s(j),A&&clearTimeout(A),A=void 0}}var a=d.attr2("target"),n=d.attr2("action");S.setAttribute("target",m),l||S.setAttribute("method","POST"),n!=f.url&&S.setAttribute("action",f.url),f.skipEncodingOverride||l&&!/post/i.test(l)||d.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),f.timeout&&(A=setTimeout(function(){x=!0,s(E)},f.timeout));var o=[];try{if(f.extraData)for(var c in f.extraData)f.extraData.hasOwnProperty(c)&&(e.isPlainObject(f.extraData[c])&&f.extraData[c].hasOwnProperty("name")&&f.extraData[c].hasOwnProperty("value")?o.push(e('<input type="hidden" name="'+f.extraData[c].name+'">').val(f.extraData[c].value).appendTo(S)[0]):o.push(e('<input type="hidden" name="'+c+'">').val(f.extraData[c]).appendTo(S)[0]));f.iframeTarget||(v.appendTo("body"),b.attachEvent?b.attachEvent("onload",s):b.addEventListener("load",s,!1)),setTimeout(t,15);try{S.submit()}catch(u){var p=document.createElement("form").submit;p.apply(S)}}finally{S.setAttribute("action",n),a?S.setAttribute("target",a):d.removeAttr("target"),e(o).remove()}}function s(t){if(!y.aborted&&!D){if(_=r(b),_||(i("cannot access response document"),t=j),t===E&&y)return y.abort("timeout"),void T.reject(y,"timeout");if(t==j&&y)return y.abort("server abort"),void T.reject(y,"error","server abort");if(_&&_.location.href!=f.iframeSrc||x){b.detachEvent?b.detachEvent("onload",s):b.removeEventListener("load",s,!1);var a,n="success";try{if(x)throw"timeout";var o="xml"==f.dataType||_.XMLDocument||e.isXMLDoc(_);if(i("isXml="+o),!o&&window.opera&&(null===_.body||!_.body.innerHTML)&&--L)return i("requeing onLoad callback, DOM not available"),void setTimeout(s,250);var l=_.body?_.body:_.documentElement;y.responseText=l?l.innerHTML:null,y.responseXML=_.XMLDocument?_.XMLDocument:_,o&&(f.dataType="xml"),y.getResponseHeader=function(e){var t={"content-type":f.dataType};return t[e.toLowerCase()]},l&&(y.status=Number(l.getAttribute("status"))||y.status,y.statusText=l.getAttribute("statusText")||y.statusText);var c=(f.dataType||"").toLowerCase(),u=/(json|script|text)/.test(c);if(u||f.textarea){var d=_.getElementsByTagName("textarea")[0];if(d)y.responseText=d.value,y.status=Number(d.getAttribute("status"))||y.status,y.statusText=d.getAttribute("statusText")||y.statusText;else if(u){var m=_.getElementsByTagName("pre")[0],h=_.getElementsByTagName("body")[0];m?y.responseText=m.textContent?m.textContent:m.innerText:h&&(y.responseText=h.textContent?h.textContent:h.innerText)}}else"xml"==c&&!y.responseXML&&y.responseText&&(y.responseXML=M(y.responseText));try{P=F(y,c,f)}catch(g){n="parsererror",y.error=a=g||n}}catch(g){i("error caught: ",g),n="error",y.error=a=g||n}y.aborted&&(i("upload aborted"),n=null),y.status&&(n=y.status>=200&&300>y.status||304===y.status?"success":"error"),"success"===n?(f.success&&f.success.call(f.context,P,"success",y),T.resolve(y.responseText,"success",y),p&&e.event.trigger("ajaxSuccess",[y,f])):n&&(void 0===a&&(a=y.statusText),f.error&&f.error.call(f.context,y,n,a),T.reject(y,"error",a),p&&e.event.trigger("ajaxError",[y,f,a])),p&&e.event.trigger("ajaxComplete",[y,f]),p&&!--e.active&&e.event.trigger("ajaxStop"),f.complete&&f.complete.call(f.context,y,n),D=!0,f.timeout&&clearTimeout(A),setTimeout(function(){f.iframeTarget||v.remove(),y.responseXML=null},100)}}}var c,u,f,p,m,v,b,y,g,w,x,A,S=d[0],T=e.Deferred();if(T.abort=function(e){y.abort(e)},a)for(u=0;h.length>u;u++)c=e(h[u]),n?c.prop("disabled",!1):c.removeAttr("disabled");if(f=e.extend(!0,{},e.ajaxSettings,t),f.context=f.context||f,m="jqFormIO"+(new Date).getTime(),f.iframeTarget?(v=e(f.iframeTarget),w=v.attr2("name"),w?m=w:v.attr2("name",m)):(v=e('<iframe name="'+m+'" src="'+f.iframeSrc+'" />'),v.css({position:"absolute",top:"-1000px",left:"-1000px"})),b=v[0],y={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(t){var a="timeout"===t?"timeout":"aborted";i("aborting upload... "+a),this.aborted=1;try{b.contentWindow.document.execCommand&&b.contentWindow.document.execCommand("Stop")}catch(r){}v.attr("src",f.iframeSrc),y.error=a,f.error&&f.error.call(f.context,y,a,t),p&&e.event.trigger("ajaxError",[y,f,a]),f.complete&&f.complete.call(f.context,y,a)}},p=f.global,p&&0===e.active++&&e.event.trigger("ajaxStart"),p&&e.event.trigger("ajaxSend",[y,f]),f.beforeSend&&f.beforeSend.call(f.context,y,f)===!1)return f.global&&e.active--,T.reject(),T;if(y.aborted)return T.reject(),T;g=S.clk,g&&(w=g.name,w&&!g.disabled&&(f.extraData=f.extraData||{},f.extraData[w]=g.value,"image"==g.type&&(f.extraData[w+".x"]=S.clk_x,f.extraData[w+".y"]=S.clk_y)));var E=1,j=2,C=e("meta[name=csrf-token]").attr("content"),k=e("meta[name=csrf-param]").attr("content");k&&C&&(f.extraData=f.extraData||{},f.extraData[k]=C),f.forceSync?o():setTimeout(o,10);var P,_,D,L=50,M=e.parseXML||function(e,t){return window.ActiveXObject?(t=new ActiveXObject("Microsoft.XMLDOM"),t.async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!=t.documentElement.nodeName?t:null},O=e.parseJSON||function(e){return window.eval("("+e+")")},F=function(t,a,i){var r=t.getResponseHeader("content-type")||"",n="xml"===a||!a&&r.indexOf("xml")>=0,o=n?t.responseXML:t.responseText;return n&&"parsererror"===o.documentElement.nodeName&&e.error&&e.error("parsererror"),i&&i.dataFilter&&(o=i.dataFilter(o,a)),"string"==typeof o&&("json"===a||!a&&r.indexOf("json")>=0?o=O(o):("script"===a||!a&&r.indexOf("javascript")>=0)&&e.globalEval(o)),o};return T}if(!this.length)return i("ajaxSubmit: skipping submit process - no element selected"),this;var l,c,u,d=this;"function"==typeof t?t={success:t}:void 0===t&&(t={}),l=t.type||this.attr2("method"),c=t.url||this.attr2("action"),u="string"==typeof c?e.trim(c):"",u=u||window.location.href||"",u&&(u=(u.match(/^([^#]+)/)||[])[1]),t=e.extend(!0,{url:u,success:e.ajaxSettings.success,type:l||e.ajaxSettings.type,iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},t);var f={};if(this.trigger("form-pre-serialize",[this,t,f]),f.veto)return i("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(t.beforeSerialize&&t.beforeSerialize(this,t)===!1)return i("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var p=t.traditional;void 0===p&&(p=e.ajaxSettings.traditional);var m,h=[],v=this.formToArray(t.semantic,h);if(t.data&&(t.extraData=t.data,m=e.param(t.data,p)),t.beforeSubmit&&t.beforeSubmit(v,this,t)===!1)return i("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[v,this,t,f]),f.veto)return i("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var b=e.param(v,p);m&&(b=b?b+"&"+m:m),"GET"==t.type.toUpperCase()?(t.url+=(t.url.indexOf("?")>=0?"&":"?")+b,t.data=null):t.data=b;var y=[];if(t.resetForm&&y.push(function(){d.resetForm()}),t.clearForm&&y.push(function(){d.clearForm(t.includeHidden)}),!t.dataType&&t.target){var g=t.success||function(){};y.push(function(a){var i=t.replaceTarget?"replaceWith":"html";e(t.target)[i](a).each(g,arguments)})}else t.success&&y.push(t.success);if(t.success=function(e,a,i){for(var r=t.context||this,n=0,o=y.length;o>n;n++)y[n].apply(r,[e,a,i||d,d])},t.error){var w=t.error;t.error=function(e,a,i){var r=t.context||this;w.apply(r,[e,a,i,d])}}if(t.complete){var x=t.complete;t.complete=function(e,a){var i=t.context||this;x.apply(i,[e,a,d])}}var A=e('input[type=file]:enabled:not([value=""])',this),S=A.length>0,T="multipart/form-data",E=d.attr("enctype")==T||d.attr("encoding")==T,j=r.fileapi&&r.formdata;i("fileAPI :"+j);var C,k=(S||E)&&!j;t.iframe!==!1&&(t.iframe||k)?t.closeKeepAlive?e.get(t.closeKeepAlive,function(){C=s(v)}):C=s(v):C=(S||E)&&j?o(v):e.ajax(t),d.removeData("jqxhr").data("jqxhr",C);for(var P=0;h.length>P;P++)h[P]=null;return this.trigger("form-submit-notify",[this,t]),this},e.fn.ajaxForm=function(r){if(r=r||{},r.delegation=r.delegation&&e.isFunction(e.fn.on),!r.delegation&&0===this.length){var n={s:this.selector,c:this.context};return!e.isReady&&n.s?(i("DOM not ready, queuing ajaxForm"),e(function(){e(n.s,n.c).ajaxForm(r)}),this):(i("terminating; zero elements found by selector"+(e.isReady?"":" (DOM not ready)")),this)}return r.delegation?(e(document).off("submit.form-plugin",this.selector,t).off("click.form-plugin",this.selector,a).on("submit.form-plugin",this.selector,r,t).on("click.form-plugin",this.selector,r,a),this):this.ajaxFormUnbind().bind("submit.form-plugin",r,t).bind("click.form-plugin",r,a)},e.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")},e.fn.formToArray=function(t,a){var i=[];if(0===this.length)return i;var n=this[0],o=t?n.getElementsByTagName("*"):n.elements;if(!o)return i;var s,l,c,u,d,f,p;for(s=0,f=o.length;f>s;s++)if(d=o[s],c=d.name,c&&!d.disabled)if(t&&n.clk&&"image"==d.type)n.clk==d&&(i.push({name:c,value:e(d).val(),type:d.type}),i.push({name:c+".x",value:n.clk_x},{name:c+".y",value:n.clk_y}));else if(u=e.fieldValue(d,!0),u&&u.constructor==Array)for(a&&a.push(d),l=0,p=u.length;p>l;l++)i.push({name:c,value:u[l]});else if(r.fileapi&&"file"==d.type){a&&a.push(d);var m=d.files;if(m.length)for(l=0;m.length>l;l++)i.push({name:c,value:m[l],type:d.type});else i.push({name:c,value:"",type:d.type})}else null!==u&&void 0!==u&&(a&&a.push(d),i.push({name:c,value:u,type:d.type,required:d.required}));if(!t&&n.clk){var h=e(n.clk),v=h[0];c=v.name,c&&!v.disabled&&"image"==v.type&&(i.push({name:c,value:h.val()}),i.push({name:c+".x",value:n.clk_x},{name:c+".y",value:n.clk_y}))}return i},e.fn.formSerialize=function(t){return e.param(this.formToArray(t))},e.fn.fieldSerialize=function(t){var a=[];return this.each(function(){var i=this.name;if(i){var r=e.fieldValue(this,t);if(r&&r.constructor==Array)for(var n=0,o=r.length;o>n;n++)a.push({name:i,value:r[n]});else null!==r&&void 0!==r&&a.push({name:this.name,value:r})}}),e.param(a)},e.fn.fieldValue=function(t){for(var a=[],i=0,r=this.length;r>i;i++){var n=this[i],o=e.fieldValue(n,t);null===o||void 0===o||o.constructor==Array&&!o.length||(o.constructor==Array?e.merge(a,o):a.push(o))}return a},e.fieldValue=function(t,a){var i=t.name,r=t.type,n=t.tagName.toLowerCase();if(void 0===a&&(a=!0),a&&(!i||t.disabled||"reset"==r||"button"==r||("checkbox"==r||"radio"==r)&&!t.checked||("submit"==r||"image"==r)&&t.form&&t.form.clk!=t||"select"==n&&-1==t.selectedIndex))return null;if("select"==n){var o=t.selectedIndex;if(0>o)return null;for(var s=[],l=t.options,c="select-one"==r,u=c?o+1:l.length,d=c?o:0;u>d;d++){var f=l[d];if(f.selected){var p=f.value;if(p||(p=f.attributes&&f.attributes.value&&!f.attributes.value.specified?f.text:f.value),c)return p;s.push(p)}}return s}return e(t).val()},e.fn.clearForm=function(t){return this.each(function(){e("input,select,textarea",this).clearFields(t)})},e.fn.clearFields=e.fn.clearInputs=function(t){var a=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var i=this.type,r=this.tagName.toLowerCase();a.test(i)||"textarea"==r?this.value="":"checkbox"==i||"radio"==i?this.checked=!1:"select"==r?this.selectedIndex=-1:"file"==i?/MSIE/.test(navigator.userAgent)?e(this).replaceWith(e(this).clone(!0)):e(this).val(""):t&&(t===!0&&/hidden/.test(i)||"string"==typeof t&&e(this).is(t))&&(this.value="")})},e.fn.resetForm=function(){return this.each(function(){("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset()})},e.fn.enable=function(e){return void 0===e&&(e=!0),this.each(function(){this.disabled=!e})},e.fn.selected=function(t){return void 0===t&&(t=!0),this.each(function(){var a=this.type;if("checkbox"==a||"radio"==a)this.checked=t;else if("option"==this.tagName.toLowerCase()){var i=e(this).parent("select");t&&i[0]&&"select-one"==i[0].type&&i.find("option").selected(!1),this.selected=t}})},e.fn.ajaxSubmit.debug=!1}("undefined"!=typeof jQuery?jQuery:window.Zepto),function(){window.embetter={};var e=window.embetter;e.debug=!0,e.curEmbeds=[],e.mobileScrollTimeout=null,e.mobileScrollSetup=!1,e.apiEnabled=!1,e.apiAutoplayCallback=null,e.defaultThumbnail="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAArwAAAGcAQMAAAABMOGrAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAADUExURQAAAKd6PdoAAAA6SURBVHja7cGBAAAAAMOg+VPf4ARVAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAN488AAGP4e1mAAAAAElFTkSuQmCC",e.utils={buildRegex:function(e){var t="(?:https?:\\/\\/)?(?:w{3}\\.)?",a="(?:\\/?|$|\\s|\\?|#)";return new RegExp(t+e+a)},stringToDomElement:function(e){var t=document.createElement("div");return t.innerHTML=e,t.firstChild},playerHTML:function(e,t,a,i){return'<div class="embetter" '+e.dataAttribute+'="'+i+'">          <a href="'+t+'" target="_blank"><img src="'+a+'"></a>        </div>'},isMobile:function(){return!!navigator.userAgent.toLowerCase().match(/iphone|ipad|ipod|android/)}(),matches:function(){var e=document.createElement("div");return e.matches||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector}(),parentSelector:function(e,t){if(this.matches.bind(e)(t))return e;for(e=e.parentNode;e&&e!==document;){if(this.matches.bind(e)(t))return e;e=e.parentNode}return!1},initMediaPlayers:function(t,a){for(var i=0;i<a.length;i++)for(var r=a[i],n=t.querySelectorAll("div["+r.dataAttribute+"]"),o=0;o<n.length;o++)e.utils.initPlayer(n[o],r);e.utils.isMobile&&0==e.mobileScrollSetup&&(window.addEventListener("scroll",e.utils.scrollListener),e.mobileScrollSetup=!0,window.scroll(window.scrollX,window.scrollY+1),window.scroll(window.scrollX,window.scrollY-1))},scrollListener:function(){null!=e.mobileScrollTimeout&&window.clearTimeout(e.mobileScrollTimeout),e.mobileScrollTimeout=setTimeout(function(){for(var t=0;t<e.curEmbeds.length;t++){var a=e.curEmbeds[t],i=a.el.getBoundingClientRect();i.top<window.innerHeight&&i.bottom>0?"codepen"!=a.getType()&&a.embedMedia(!1):a.unembedMedia()}},500)},initPlayer:function(t,a){1!=t.classList.contains("embetter-ready")&&1!=t.classList.contains("embetter-static")&&e.curEmbeds.push(new e.EmbetterPlayer(t,a))},unembedPlayers:function(t){for(var a=0;a<e.curEmbeds.length;a++)t&&t.contains(e.curEmbeds[a].el)&&e.curEmbeds[a].unembedMedia()},disposePlayers:function(){for(var t=0;t<e.curEmbeds.length;t++)e.curEmbeds[t].dispose();window.removeEventListener("scroll",e.utils.scrollListener),e.mobileScrollSetup=!1,e.curEmbeds.splice(0,e.curEmbeds.length-1)},mediaComplete:function(){if(null!=e.curPlayer){var t=e.curPlayer.el,a=this.parentSelector(t,"[data-embetter-playlist]");if(a)for(var i=a.querySelectorAll(".embetter"),r=0;r<i.length-1;r++)if(i[r].classList.contains("embetter-playing")){var n=e.utils.getPlayerFromEl(i[r+1]);n&&(n.play(),e.apiAutoplayCallback&&e.apiAutoplayCallback(n.el));break}}},getPlayerFromEl:function(t){for(var a=0;a<e.curEmbeds.length;a++)if(t==e.curEmbeds[a].el)return e.curEmbeds[a];return null},disposeDetachedPlayers:function(){for(var t=e.curEmbeds.length-1;t>=0;t--){var a=e.curEmbeds[t];0!=document.body.contains(a.el)&&null!=a.el||(a.dispose(),delete e.curEmbeds.splice(t,1))}},loadRemoteScript:function(e){var t=document.createElement("script");t.src=e;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(t,a)}},e.services={},e.services.youtube={type:"youtube",dataAttribute:"data-youtube-id",regex:/(?:.+?)?(?:youtube\.com\/v\/|watch\/|\?v=|\&v=|youtu\.be\/|\/v=|^youtu\.be\/)([a-zA-Z0-9_-]{11})+/,embed:function(e,t,a,i){var r=1==i?"&autoplay=1":"";return'<iframe class="video" enablejsapi="1" width="'+t+'" height="'+a+'" src="https://www.youtube.com/embed/'+e+"?rel=0&suggestedQuality=hd720&enablejsapi=1"+r+'" frameborder="0" scrolling="no" webkitAllowFullScreen mozallowfullscreen allowfullscreen></iframe>'},link:function(e){return"https://www.youtube.com/watch?v="+e},loadAPI:function(t){function a(){t(),i.activateCurrentPlayer()}var i=this;return"undefined"!=typeof window.onYouTubeIframeAPIReady?(t(),void i.activateCurrentPlayer()):(e.utils.loadRemoteScript("https://www.youtube.com/iframe_api"),void(window.onYouTubeIframeAPIReady=a))},activateCurrentPlayer:function(){this.currentIframe=document.querySelector(".embetter-playing[data-youtube-id] iframe"),this.currentIframe.id=document.querySelector(".embetter-playing").getAttribute("data-youtube-id"),this.currentIframe.id&&(this.apiPlayer=new YT.Player(this.currentIframe.id,{events:{onReady:function(){},onPlaybackQualityChange:function(){},onError:function(){e.utils.mediaComplete()},onStateChange:function(t){0==t.data&&e.utils.mediaComplete()}}}))}},e.services.vimeo={type:"vimeo",dataAttribute:"data-vimeo-id",regex:e.utils.buildRegex("vimeo.com/(\\S*)"),embed:function(e,t,a,i){var r=1==i?"&amp;autoplay=1":"";return'<iframe id="'+e+'" src="//player.vimeo.com/video/'+e+"?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff&amp;api=1&amp;player_id="+e+r+'" width="'+t+'" height="'+a+'" frameborder="0" scrolling="no" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'},link:function(e){return"https://vimeo.com/"+e},loadAPI:function(t){var a=this;if("undefined"!=typeof window.Froogaloop)return t(),void a.activateCurrentPlayer();e.utils.loadRemoteScript("https://f.vimeocdn.com/js/froogaloop2.min.js");var i=setInterval(function(){"undefined"!=typeof window.Froogaloop&&(window.clearInterval(i),t(),a.activateCurrentPlayer())},50)},activateCurrentPlayer:function(){if(this.currentIframe=document.querySelector(".embetter-playing[data-vimeo-id] iframe"),this.currentIframe.id=document.querySelector(".embetter-playing").getAttribute("data-vimeo-id"),this.currentIframe.id){var t=this;this.apiPlayer=$f(this.currentIframe),this.apiPlayer.addEvent("ready",function(){t.apiPlayer.addEvent("pause",function(e){}),t.apiPlayer.addEvent("finish",function(t){e.utils.mediaComplete()}),t.apiPlayer.addEvent("playProgress",function(e,t){})})}}},e.curPlayer=null,e.EmbetterPlayer=function(e,t){this.el=e,this.el.classList.add("embetter-ready"),this.serviceObj=t,this.id=this.el.getAttribute(t.dataAttribute),this.thumbnail=this.el.querySelector("img"),this.playerEl=null,this.buildPlayButton(),this.checkForBadThumbnail()},e.EmbetterPlayer.prototype.buildPlayButton=function(){this.playButton=document.createElement("div"),this.playButton.classList.add("embetter-loading"),this.el.appendChild(this.playButton),this.playButton=document.createElement("div"),this.playButton.classList.add("embetter-play-button"),this.el.appendChild(this.playButton);var e=this;this.playHandler=function(){e.play()},this.playButton.addEventListener("click",this.playHandler)},e.EmbetterPlayer.prototype.checkForBadThumbnail=function(){var e=this;this.thumbnail.onerror=function(){e.fallbackThumbnail()},setTimeout(function(){e.thumbnail.height<50&&e.fallbackThumbnail()},4e3)},e.EmbetterPlayer.prototype.fallbackThumbnail=function(){this.thumbnail.src=e.defaultThumbnail},e.EmbetterPlayer.prototype.getType=function(){return this.serviceObj.type},e.EmbetterPlayer.prototype.play=function(){null!=e.curPlayer&&(e.curPlayer.unembedMedia(),e.curPlayer=null);var t=this,a=function(){t.embedMedia(!0),e.curPlayer=t};this.serviceObj.loadAPI&&1==e.apiEnabled&&0==e.utils.isMobile?this.serviceObj.loadAPI(a):a()},e.EmbetterPlayer.prototype.unembedMedia=function(){null!=this.playerEl&&null!=this.playerEl.parentNode&&this.playerEl.parentNode.removeChild(this.playerEl),this.el.classList.remove("embetter-playing")},e.EmbetterPlayer.prototype.embedMedia=function(t){1!=this.el.classList.contains("embetter-playing")&&(null!=this.id&&(this.playerEl=e.utils.stringToDomElement(this.serviceObj.embed(this.id,this.thumbnail.width,this.thumbnail.height,t))),this.el.appendChild(this.playerEl),this.el.classList.add("embetter-playing"))},e.EmbetterPlayer.prototype.dispose=function(){this.el.classList.remove("embetter-ready"),this.unembedMedia(),this.playButton.removeEventListener("click",this.playHandler),null!=this.playButton&&null!=this.playButton.parentNode&&this.playButton.parentNode.removeChild(this.playButton)}}(),function(){var e=window.embetter;e.utils.buildPlayerFromServiceURL=function(e,t,a){for(var i=0;i<a.length;i++){var r=a[i];null!=t.match(r.regex)&&r.buildFromText(t,e)}},e.utils.playerCode=function(e){function t(e){return String(e).replace(/[<>]/g,function(e){return a[e]})}var a={"<":"&lt;",">":"&gt;"};return e=e.replace(/\>\s+\</g,"><"),'<p>Embed code:<textarea class="u-full-width">'+t(e)+"</textarea></p>"},e.utils.embedPlayerInContainer=function(t,a,i,r,n){t.appendChild(e.utils.stringToDomElement("<h3>"+a.type.toUpperCase()+"</h3>"));var o=e.utils.playerHTML(a,i,r,n),s=e.utils.stringToDomElement(o);e.utils.initPlayer(s,a,e.curEmbeds),t.appendChild(s);var l=e.utils.playerCode(o),c=e.utils.stringToDomElement(l);t.appendChild(c)},e.utils.copyPropsToObject=function(e,t){for(var a in t)e[a]=t[a]},e.utils.copyPropsToObject(e.services.youtube,{
getData:function(e){return"http://img.youtube.com/vi/"+e+"/0.jpg"},buildFromText:function(t,a){var i=t.match(this.regex)[1];if(null!=i){var r=this.link(i),n=this.getData(i);e.utils.embedPlayerInContainer(a,this,r,n,i)}}}),e.utils.copyPropsToObject(e.services.vimeo,{getData:function(e,t,a){var i=e.split("vimeo.com/")[1];return window.reqwest({url:a||"https://vimeo.com/api/v2/video/"+i+".json",type:a?"json":"jsonp",error:function(e){},success:function(e){t(e[0].thumbnail_large)}}),""},buildFromText:function(t,a,i){var r=this,n=t.match(this.regex)[1];if(null!=n){var o=this.link(n);this.getData(o,function(t){e.utils.embedPlayerInContainer(a,r,o,t,n)},i)}}})}();var embedServices=[window.embetter.services.youtube,window.embetter.services.vimeo];window.embetter.utils.initMediaPlayers(document.body,embedServices)}),function(e){function t(){n.setAttribute("content",l),c=!0}function a(){n.setAttribute("content",s),c=!1}function i(i){p=i.accelerationIncludingGravity,u=Math.abs(p.x),d=Math.abs(p.y),f=Math.abs(p.z),!e.orientation&&(u>7||(f>6&&8>d||8>f&&d>6)&&u>5)?c&&a():c||t()}if(/iPhone|iPad|iPod/.test(navigator.platform)&&navigator.userAgent.indexOf("AppleWebKit")>-1){var r=e.document;if(r.querySelector){var n=r.querySelector("meta[name=viewport]"),o=n&&n.getAttribute("content"),s=o+",maximum-scale=1",l=o+",maximum-scale=10",c=!0,u,d,f,p;n&&(e.addEventListener("orientationchange",t,!1),e.addEventListener("devicemotion",i,!1))}}}(this);