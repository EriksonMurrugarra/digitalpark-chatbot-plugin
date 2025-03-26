(()=>{function t(){(a=document.createElement("style")).textContent=`
            #digitalpark-chatbot-bubble {
                position: fixed;
                bottom: 20px;
                right: 20px;
                width: 60px;
                height: 60px;
                background-color: #2196F3;
                border-radius: 50%;
                cursor: pointer;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                display: flex;
                justify-content: center;
                align-items: center;
                transition: transform 0.3s ease;
                z-index: 9999;
            }
            #digitalpark-chatbot-bubble:hover {
                transform: scale(1.1);
            }
            #digitalpark-chatbot-bubble img {
                width: 35px;
                height: 35px;
            }
            #digitalpark-chat-overlay {
                display: none;
                position: fixed;
                bottom: 90px;
                right: 20px;
                width: 400px;
                height: 600px;
                background-color: white;
                border-radius: 10px;
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
                z-index: 10000;
                overflow: hidden;
            }
            #digitalpark-chat-iframe {
                width: 100%;
                height: 100%;
                border: none;
                border-radius: 10px;
            }
            #digitalpark-chat-close {
                position: absolute;
                top: 10px;
                right: 10px;
                background: none;
                border: none;
                font-size: 20px;
                cursor: pointer;
                color: #888;
                z-index: 10001;
            }
        `,document.head.appendChild(a),(a=document.createElement("div")).id="digitalpark-chatbot-bubble",a.innerHTML=`
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHBhdGggZD0iTTIxIDExLjUgYTguNjggOC42OCAwIDAgMSAwLTEuNSA1LjUgNS41IDAgMCAwLTExIDAgMTEgMTEgMCAwIDAgMi4xIDYuNWwtMiA0Ljc3YS41NS41NSAwIDAgMCAuNzUuNzVsMy40OS0xLjQ2YTExIDExIDAgMCAwIDYuNzYuNDkiPjwvcGF0aD48L3N2Zz4=" alt="Chat">
        `,(d=document.createElement("div")).id="digitalpark-chat-overlay",(o=document.createElement("button")).id="digitalpark-chat-close",o.innerHTML="×",(t=document.createElement("iframe")).id="digitalpark-chat-iframe",t.src=window.DIGITALPARK_CHATBOT_URL||"https://digitalpark.live",d.appendChild(o),d.appendChild(t),document.body.appendChild(a),document.body.appendChild(d);var e,i,t,{chatBubble:a,chatOverlay:d,closeButton:o}={chatBubble:a,chatOverlay:d,closeButton:o};i=d,t=o,(e=a).addEventListener("click",()=>{i.style.display="block"===i.style.display?"none":"block"}),t.addEventListener("click",()=>{i.style.display="none"}),document.addEventListener("click",t=>{e.contains(t.target)||i.contains(t.target)||"block"!==i.style.display||(i.style.display="none")})}"loading"===document.readyState?document.addEventListener("DOMContentLoaded",t):t()})();
