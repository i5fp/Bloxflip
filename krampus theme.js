// ==UserScript==
// @name         Krampus Theme
// @version      1
// @description  custom theme (recommened for pc)
// @match        https://bloxflip.com/*
// @grant        GM_addStyle
// @author       i5fp
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle(`
        @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

        :root {
            --background-color: #131313;
            --primary-color: #1f1f1f;
            --highlight-color: #f39c12;
            --text-color: #e0e0e0;
            --header-height: 60px;
            --border-radius: 8px;
        }

        body, html {
            background-color: var(--background-color);
            color: var(--text-color);
            font-family: 'Roboto', sans-serif;
            margin: 0;
            padding: 0;
        }

        .header {
            background-color: var(--primary-color);
            height: var(--header-height);
            display: flex;
            align-items: center;
            padding: 0 15px;
            box-shadow: 0 3px 6px rgba(0,0,0,0.2);
        }

        .sidebar {
            background-color: var(--primary-color);
            padding: 10px;
            border-radius: var(--border-radius);
        }

        .game-container {
            background-color: var(--primary-color);
            border-radius: var(--border-radius);
            padding: 15px;
            margin: 10px;
        }

        .button {
            background-color: var(--highlight-color);
            color: var(--text-color);
            border: none;
            padding: 8px 12px;
            border-radius: var(--border-radius);
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        .button:hover {
            background-color: #e67e22;
        }

        .footer {
            background-color: var(--primary-color);
            color: var(--text-color);
            padding: 10px;
            text-align: center;
            position: fixed;
            bottom: 0;
            width: 100%;
            border-radius: var(--border-radius);
        }
    `);
})();
