var e={send:function(t){return new Promise((function(s,a){t.nocache=Math.floor(1e6*Math.random()+1),t.Action="Send";var n=JSON.stringify(t);e.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?",n,(function(e){s(e)}))}))},ajaxPost:function(t,s,a){var n=e.createCORSRequest("POST",t);n.setRequestHeader("Content-type","application/x-www-form-urlencoded"),n.onload=function(){var e=n.responseText;null!=a&&a(e)},n.send(s)},ajax:function(t,s){var a=e.createCORSRequest("GET",t);a.onload=function(){var e=a.responseText;null!=s&&s(e)},a.send()},createCORSRequest:function(e,t){var s=new XMLHttpRequest;return"withCredentials"in s?s.open(e,t,!0):"undefined"!=typeof XDomainRequest?(s=new XDomainRequest).open(e,t):s=null,s}},t=e;const s=document.querySelector(".form__send-button"),a=document.querySelector(".email__field"),n=document.querySelector(".message__field"),i=new class{addClass(e,t){const s="disable"===t?"confirm":"disable";e.classList.remove(s),e.classList.add(t)}validateEmail(){return String(this.emailField.value).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)?"confirm":"disable"}checkValidateEmail(){return this.addClass(this.emailField,this.validateEmail()),this.validateEmail()}checkMessageText(){const e=""===this.messageField.value?"disable":"confirm";return this.addClass(this.messageField,e),e}checkSendButton(){const e="confirm"===this.checkValidateEmail()&&"confirm"===this.checkMessageText()?"confirm":"disable";this.addClass(this.sendButton,e)}clearForm(){this.emailField.value="",this.messageField.value="",this.emailField.classList.remove("confirm"),this.messageField.classList.remove("confirm"),this.addClass(this.sendButton,"disable")}constructor(e,t,s){this.emailField=e,this.messageField=t,this.sendButton=s}}(a,n,s);a.addEventListener("focusout",(function(){i.checkValidateEmail(),i.checkSendButton()})),n.addEventListener("focusout",(function(){i.checkMessageText(),i.checkSendButton()})),s.addEventListener("click",(function(){t.send({SecureToken:"92442f59-f608-4cb2-a65e-15102fb1f704",To:a.value,From:"fearos@valar.ru",Subject:"Test email sending",Body:n.value}).then((e=>console.log(e))),i.clearForm()}));
//# sourceMappingURL=script.03a79456.js.map