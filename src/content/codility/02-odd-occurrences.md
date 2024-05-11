---
title: "Odd Occurrences"
section: "Lesson 2: Arrays"
tags: ["Arrays", "Easy"]
difficulty: "Easy"
description: "Find the value that occurs in an odd number of elements"
date: 2024-04-10
---

## [100% score Javascript solution](https://app.codility.com/demo/results/training4H557K-94B/)

Find the value that occurs in an odd number of elements.

Straightforward solution - looping over the array and striking out the pairs found along the way, whatever is left over - the odd number.

```javascript
function solution(A) {
  const len = A.length;

  // return 0 for out of bounds values
  if (len < 1 || len > 1000000 || len % 2 === 0) {
    return 0;
  }

  const map = {};

  for (let i = 0; i < len; i++) {
    const val = A[i];
    // if already exists, clear it, the pair has been found
    if (map[val]) {
      delete map[val];
    } else {
      map[val] = true;
    }
  }

  const keys = Object.keys(map);
  if (keys.length === 1) {
    return parseInt(keys[0]);
  }
  return 0;
}
```
