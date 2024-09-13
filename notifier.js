// ==UserScript==
// @name         Rain Notifier
// @version      1
// @description  notifies when rain :)
// @match        https://bloxflip.com/*
// @grant        GM_xmlhttpRequest
// @grant        GM_notification
// @author       i5fp
// ==/UserScript==

(function() {
    'use strict';

    const webhookURL = "webhook here :)";
    const intervalMillis = 5000;

    function notifyRain(rainDetails) {
        const message = `
            🌧️ Rain Alert! 🌧️
            Host: ${rainDetails.host}
            Prize: ${rainDetails.prize} R$
            Duration: ${Math.round(rainDetails.duration / 60)} minutes
            [Join the Fun!](https://bloxflip.com/a/ɨ5fp)
            @everyone
        `;

        GM_notification({
            title: "Rain Notification",
            text: message,
            timeout: 5000
        });

        GM_xmlhttpRequest({
            method: "POST",
            url: webhookURL,
            data: JSON.stringify({ content: message }),
            headers: { "Content-Type": "application/json" }
        });
    }

    function checkForRain() {
        GM_xmlhttpRequest({
            method: "GET",
            url: "https://api.bloxflip.com/chat/history",
            onload: function(response) {
                try {
                    const data = JSON.parse(response.responseText);
                    if (data.rain && data.rain.active) {
                        notifyRain(data.rain);
                    }
                } catch (error) {
                    console.error("Failed to fetch current data sad:", error);
                }
            }
        });
    }

    setInterval(checkForRain, intervalMillis);
})();
