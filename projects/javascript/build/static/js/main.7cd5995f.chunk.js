(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,n){e.exports=n(26)},20:function(e,t,n){},21:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(11),i=n.n(o),l=n(5);n(20);var c=function(e){let{onSuccess:t,onError:n}=e;const[o,i]=Object(a.useState)(""),c=".... create the things you want to see ...";return Object(a.useEffect)(()=>{let e=0;const t=setInterval(()=>{e<c.length-1?(i(t=>t+c[e]),e++):clearInterval(t)},100);return()=>clearInterval(t)},[]),r.a.createElement("div",{className:"app-login"},r.a.createElement("h2",null,o),r.a.createElement(l.a,{onSuccess:t,onError:n}))};n(21);var s=function(e){let{onAccept:t,onReject:n}=e;return r.a.createElement("div",{className:"terms-card-container"},r.a.createElement("div",{className:"card terms-card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",null,"Terms and Conditions"),r.a.createElement("p",null,"Please read and accept our terms and conditions for Forest."),r.a.createElement("p",null,"1. Acceptance of Terms: By accessing or using Forest service, you agree to be bound by these Terms and Conditions."),r.a.createElement("p",null,"2. User Responsibilities: You are responsible for maintaining the confidentiality of your account and password."),r.a.createElement("p",null,"3. Intellectual Property: All content on Forest is protected by copyright and other intellectual property laws."),r.a.createElement("p",null,"4. User-Generated Content: By submitting content to Forest, you grant us a non-exclusive, royalty-free license to use, modify, and distribute your content."),r.a.createElement("p",null,"5. Prohibited Activities: Users may not engage in any illegal activities or violate any laws while using Forest."),r.a.createElement("p",null,'6. Disclaimer of Warranties: Forest is provided "as is" without any warranties, express or implied.'),r.a.createElement("p",null,"7. Limitation of Liability: Forest shall not be liable for any indirect, incidental, special, consequential, or punitive damages."),r.a.createElement("p",null,"8. Governing Law: These terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction]."),r.a.createElement("p",null,"9. Termination: We reserve the right to terminate or suspend your account and access to Forest at our sole discretion."),r.a.createElement("p",null,"10. Changes to Service: We reserve the right to withdraw or amend Forest service, and any service or material we provide, in our sole discretion without notice. We will not be liable if for any reason all or any part of the service is unavailable at any time or for any period.")),r.a.createElement("div",{className:"card-footer right-alignned-footer"},r.a.createElement("button",{className:"btn btn-primary",onClick:t},"Accept"),r.a.createElement("button",{className:"btn btn-secondary",onClick:n},"Reject"))))};var u=function(e){let{onAccept:t,onReject:n}=e;return r.a.createElement("div",{className:"app-terms"},r.a.createElement(s,{onAccept:t,onReject:n}))},m=n(28);var d=e=>{let{userInfo:t}=e;const[n,o]=Object(a.useState)([]),[i,l]=Object(a.useState)(0),[c,s]=Object(a.useState)([]),[u,d]=Object(a.useState)(!0);Object(a.useEffect)(()=>{console.log(t.username)},[]);const p=(e,t,n)=>{s(a=>{const r=a.findIndex(t=>t.questionId===e);if(r>-1){const o=[...a];return o[r]={questionId:e,answer:t,file:n},o}return[...a,{questionId:e,answer:t,file:n}]})},f=n[i];return r.a.createElement("div",{className:"user-info-page"},r.a.createElement("h2",null,"Job Application"),u?r.a.createElement("p",null,"Loading questions..."):f?r.a.createElement("form",{onSubmit:async e=>{e.preventDefault();const n=new FormData;n.append("username",t.username),c.forEach(e=>{n.append("answers[".concat(e.questionId,"][text]"),e.answer),e.file&&n.append("answers[".concat(e.questionId,"][file]"),e.file)});try{await m.a.post("/api/submit-application",n,{headers:{"Content-Type":"multipart/form-data"}}),alert("Application submitted successfully!")}catch(a){console.error("Submission failed",a),alert("Failed to submit application")}}},r.a.createElement("div",{className:"question-container"},r.a.createElement("label",null,f.text),r.a.createElement("textarea",{onChange:e=>p(f.id,e.target.value),required:!0}),r.a.createElement("input",{type:"file",onChange:e=>{var t;const n=null===(t=e.target.files)||void 0===t?void 0:t[0];var a;n&&p(f.id,(null===(a=c.find(e=>e.questionId===f.id))||void 0===a?void 0:a.answer)||"",n)}})),r.a.createElement("div",{className:"navigation-buttons"},i>0&&r.a.createElement("button",{type:"button",onClick:()=>l(e=>e-1)},"Previous"),i<n.length-1?r.a.createElement("button",{type:"button",onClick:()=>l(e=>e+1)},"Next"):r.a.createElement("button",{type:"submit"},"Submit Application"))):r.a.createElement("p",null,"No questions available."))},p=n(12);var f=function(){const[e,t]=Object(a.useState)("login"),[n,o]=Object(a.useState)(null),i=e=>{const n=Object(p.a)(e.credential);try{const e={name:n.name,email:n.email,givenName:n.givenName,familyName:n.familyName,picture:n.picture,emailVerified:n.emailVerified,domain:n.hd};console.log("User Details:",e),o(e),t("terms")}catch(a){console.error("Error processing user information:",a)}},s=e=>{console.log(e)},m=()=>{t("userInfo")},f=()=>{Object(l.c)(),o(null),t("login")};return r.a.createElement("div",{className:"app"},(()=>{switch(e){case"login":return r.a.createElement(c,{onSuccess:i,onError:s});case"terms":return r.a.createElement(u,{onAccept:m,onReject:f});case"userInfo":return r.a.createElement(d,{userInfo:n});default:return null}})())};i.a.createRoot(document.getElementById("root")).render(r.a.createElement(l.b,{clientId:"872731942146-p8188354vq1i19uaevo1g46dt6i4l79p.apps.googleusercontent.com"},r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null))))}},[[13,1,2]]]);
//# sourceMappingURL=main.7cd5995f.chunk.js.map