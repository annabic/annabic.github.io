---
title: "Binary Gap"
description: "Find the longest sequence of zeros in the binary representation of an integer"
section: "Lesson 1: Iterations"
tags: ["Iterations", "Easy"]
difficulty: "Easy"
date: 2024-02-20
---

## 100% score Javascript solution

Find the longest sequence of zeros in the binary representation of an integer.

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
