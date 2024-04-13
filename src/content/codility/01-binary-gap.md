---
title: "Binary Gap"
description: "A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N."
section: "Lesson 1: Iterations"
tags: ["Iterations"]
---

### 100% score Javascript solution

A _binary gap_ within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

```javascript
function solution(N) {
  const binary = Number(N).toString(2);
  let lastPosition = -1;
  let maxCount = 0;

  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === "1") {
      if (lastPosition > -1) {
        maxCount = Math.max(maxCount, i - lastPosition - 1);
      }
      lastPosition = i;
    }
  }

  return maxCount;
}
```
