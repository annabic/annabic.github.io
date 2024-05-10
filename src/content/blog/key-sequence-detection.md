---
title: "Key Sequence Detection: JavaScript 30 Day 12"
description: "JavaScript 30's Day 12 task solutions, inspired by the iconic Konami code"
tags: ["JavaScript 30", "konami"]
date: 2024-04-17
---

I recently started the JavaScript 30 course by Wes Bos, where I tackle a new JavaScript task every day, using only pure JavaScript - no extra libraries or frameworks required. Day 12 brought an interesting challenge: implementing key sequence detection, inspired by the Konami code used in classic video games like Contra and Gradius. The Konami code is a famous cheat code entered by players to unlock special features or advantages.
⬆️⬆️⬇️⬇️⬅️➡️⬅️➡️🅱️🅰️

## Solution

Set up an event listener to detect keypresses. With each keystroke, compare it to the corresponding character in the secret code. Upon successfully matching the entire sequence, the `cornify_add()` function should be called to add a fun element to the page.

Here's a snippet of my solution:

```javascript
let found = 0;
const secretCode = "annabic";

function matchKeyPress(e) {
  const expectedKey = secretCode[found];

  if (e.key === expectedKey) {
    found++;

    if (found === secretCode.length) {
      found = 0;
      cornify_add();
    }
  } else {
    found = 0;
  }
}

window.addEventListener("keyup", matchKeyPress);
```

Solution provided by Wes uses an array to store the recently pressed keys and checks for the presence of the secret code.

```javascript
const pressed = [];
const secretCode = "wesbos";

window.addEventListener("keyup", (e) => {
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join("").includes(secretCode)) {
    cornify_add();
  }
});
```

After seeing Wes' approach, I still wouldn't change my solution. But I like to see the possible alternative and be reminded of `splice` use-case. It's not often that you use it for array manipulations.
