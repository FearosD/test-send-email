var e={send:function(s){return new Promise((function(t,a){s.nocache=Math.floor(1e6*Math.random()+1),s.Action="Send";var i=JSON.stringify(s);e.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?",i,(function(e){t(e)}))}))},ajaxPost:function(s,t,a){var i=e.createCORSRequest("POST",s);i.setRequestHeader("Content-type","application/x-www-form-urlencoded"),i.onload=function(){var e=i.responseText;null!=a&&a(e)},i.send(t)},ajax:function(s,t){var a=e.createCORSRequest("GET",s);a.onload=function(){var e=a.responseText;null!=t&&t(e)},a.send()},createCORSRequest:function(e,s){var t=new XMLHttpRequest;return"withCredentials"in t?t.open(e,s,!0):"undefined"!=typeof XDomainRequest?(t=new XDomainRequest).open(e,s):t=null,t}},s=e;const t=document.querySelector(".form__send-button"),a=document.querySelector(".email__field"),i=document.querySelector(".message__field"),n=new class{validateEmail(){return String(this.emailField.value).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)}checkValidateEmail(){if(""===this.emailField.value)return this.emailField.classList.remove("wrong"),void this.emailField.classList.remove("confirm");this.validateEmail()?(this.emailField.classList.remove("wrong"),this.emailField.classList.add("confirm")):(this.emailField.classList.remove("confirm"),this.emailField.classList.add("wrong"))}constructor(e){this.emailField=e}}(a),o=()=>!(!a.classList.contains("confirm")||i.classList.contains("wrong")||""===i.value);a.addEventListener("focusout",(function(){n.checkValidateEmail(),o()?t.classList.remove("disable"):t.classList.add("disable")})),i.addEventListener("focusout",(function(){""===i.value?i.classList.add("wrong"):i.classList.remove("wrong"),o()?t.classList.remove("disable"):t.classList.add("disable")}));t.addEventListener("click",(function(){s.send({SecureToken:"92442f59-f608-4cb2-a65e-15102fb1f704",To:a.value,From:"fearos@valar.ru",Subject:"Test email sending",Body:i.value}).then((e=>console.log(e))),console.log("click"),i.value="",a.value="",a.classList.remove("confirm"),t.classList.add("disable")}));
//# sourceMappingURL=script.f859cc23.js.map
