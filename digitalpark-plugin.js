// DigitalPark Chat Plugin
(function() {
    // Inject styles dynamically
    function injectStyles() {
        const styles = `
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
        `;

        const styleElement = document.createElement('style');
        styleElement.textContent = styles;
        document.head.appendChild(styleElement);
    }

    // Create chat bubble and overlay
    function createChatElements() {
        // Chat Bubble
        const chatBubble = document.createElement('div');
        chatBubble.id = 'digitalpark-chatbot-bubble';
        chatBubble.innerHTML = `
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHBhdGggZD0iTTIxIDExLjUgYTguNjggOC42OCAwIDAgMSAwLTEuNSA1LjUgNS41IDAgMCAwLTExIDAgMTEgMTEgMCAwIDAgMi4xIDYuNWwtMiA0Ljc3YS41NS41NSAwIDAgMCAuNzUuNzVsMy40OS0xLjQ2YTExIDExIDAgMCAwIDYuNzYuNDkiPjwvcGF0aD48L3N2Zz4=" alt="Chat">
        `;

        // Chat Overlay
        const chatOverlay = document.createElement('div');
        chatOverlay.id = 'digitalpark-chat-overlay';

        // Close Button
        const closeButton = document.createElement('button');
        closeButton.id = 'digitalpark-chat-close';
        closeButton.innerHTML = '×';

        // Chat Iframe
        const chatIframe = document.createElement('iframe');
        chatIframe.id = 'digitalpark-chat-iframe';

        // Configuration option for chat URL (with a default fallback)
        chatIframe.src = window.DIGITALPARK_CHATBOT_URL || 'https://digitalpark.live';

        // Append elements
        chatOverlay.appendChild(closeButton);
        chatOverlay.appendChild(chatIframe);

        document.body.appendChild(chatBubble);
        document.body.appendChild(chatOverlay);

        return { chatBubble, chatOverlay, closeButton, chatIframe };
    }

    // Setup event listeners
    function setupEventListeners(chatBubble, chatOverlay, closeButton) {
        // Toggle chat overlay
        chatBubble.addEventListener('click', () => {
            chatOverlay.style.display = chatOverlay.style.display === 'block' ? 'none' : 'block';
        });

        // Close chat overlay
        closeButton.addEventListener('click', () => {
            chatOverlay.style.display = 'none';
        });

        // Close when clicking outside
        document.addEventListener('click', (event) => {
            if (!chatBubble.contains(event.target) &&
                !chatOverlay.contains(event.target) &&
                chatOverlay.style.display === 'block') {
                chatOverlay.style.display = 'none';
            }
        });
    }

    // Initialize plugin
    function initDigitalParkChatPlugin() {
        // Inject styles
        injectStyles();

        // Create chat elements
        const { chatBubble, chatOverlay, closeButton, chatIframe } = createChatElements();

        // Setup event listeners
        setupEventListeners(chatBubble, chatOverlay, closeButton);
    }

    // Run plugin when DOM is fully loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initDigitalParkChatPlugin);
    } else {
        initDigitalParkChatPlugin();
    }
})();