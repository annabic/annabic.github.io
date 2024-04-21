---
title: "Frog Jump"
section: "Lesson 3: Time Complexity"
tags: ["Time Complexity", "Easy"]
difficulty: "Easy"
description: "Count a minimal number of jumps from position X to Y"
date: 2024-04-12
---

## [100% score Javascript solution](https://app.codility.com/demo/results/trainingEHKBB4-WQV/)

Count a minimal number of jumps from position X to Y.

No need to check even out of bounds according to the [task on codility](https://app.codility.com/programmers/lessons/3-time_complexity/frog_jmp/). O(1) complexity.


```javascript
function solution(X, Y, D) {
    // checking out of bounds, max values could be tested as well. 
    if (Y < X || D < 1 || X < 1 || Y < 1) {
        return -1;
    }

    const minDistance = Y - X;

    return Math.ceil(minDistance / D);
}
```