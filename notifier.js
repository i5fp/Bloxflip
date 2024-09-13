// ==UserScript==
// @name         Rain Notifier
// @version      1.1
// @description  IDK
// @match        *://*/*
// @grant        none
// @author       i5fp
// ==/UserScript==

(function () {
    'use strict';

    let lastRainID = null; // stores last rain (NO SPAM ANYMORE)

    const webhookURL = "https://discord.com/api/webhooks/1284152019937923112/4fookgnss5WhNI2eY29VCif6b3Qo9NJQTTwU9uU9tbKzPDJoIhHqf4P3t1-Rbsf-D4z9"; // YOU CAN CHANGE THE WEBHOOK

    function fetchRainData() {
        fetch("https://api.bloxflip.com/chat/history", {
            headers: {
                "Referer": "https://bloxflip.com/",
                "Content-Type": "application/x-www-form-urlencoded",
                "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36"
            }
        })
        .then(response => response.json())
        .then(data => {
            const rain = data.rain;
            if (rain && rain.active) {
                const rainID = rain.created; // why do you read this?
                if (rainID !== lastRainID) {
                    lastRainID = rainID; // IDK NIGGA
                    notifyRain(rain);
                }
            }
        })
        .catch(error => console.error('Error fetching rain data:', error));
    }

    function notifyRain(rain) {
        const embedData = {
            username: "Rain Notifier",
            embeds: [
                {
                    title: "Active Rain Detected!",
                    description: `**Host:** ${rain.host}\n**Prize:** ${rain.prize} R$\n**Expires In:** <t:${Math.round((rain.duration + rain.created) / 1000)}:R>\n[Join Now](https://bloxflip.com/)`,
                    color: 7506394,
                    timestamp: new Date().toISOString()
                }
            ]
        };

        fetch(webhookURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(embedData)
        }).then(response => {
            if (!response.ok) {
                console.error('Failed to send webhook:', response.statusText);
            }
        }).catch(error => console.error('Error sending webhook:', error));
    }

    // Check for new rain data every 10 seconds
    setInterval(fetchRainData, 10000);

})();
