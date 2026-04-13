# 🚀 Barba.js Series – 03 Staircase Transition

This project is part of my **Beginner → Advanced Barba.js Series**, where each project builds step-by-step toward creating modern, production-level page transitions.

👉 In this project, we move beyond overlay transitions and implement a **multi-layered staircase animation**, inspired by real Awwwards websites that use this effect in production.

---

## 📌 Overview

Instead of a single overlay, we use **multiple full-screen layers (`.stair`)** to create a staggered staircase transition.

💡 This approach:

* Adds depth and visual rhythm  
* Feels more premium and cinematic  
* Matches real-world **Awwwards-level transitions**  

---

## 🆕 What’s New in This Project

✨ Multi-layer staircase transition system  
✨ Use of **async/await with Barba.js hooks**  
✨ Removed `sync: true` for better control  
✨ Improved sequencing for complex animations  
✨ More production-ready transition logic  

---

## ⚙️ How the Transition Works

1. Stairs slide down → cover current page  
2. Page switches in the background  
3. Stairs slide out → reveal next page  

👉 Creates a smooth **layered staircase reveal effect**

---

## 🔹 GSAP Setup (Initial State)

```js
const stairs = document.querySelectorAll(".stair");
gsap.set(stairs, { y: "-100%" });
```

📍 Keeps all stairs hidden above the viewport initially  

---

## 🔹 Animation Functions

### ▶️ Stairs In (Page Exit)

```js
function stairsIn() {
  return gsap.to(stairs, {
    y: "0%",
    stagger: {
      amount: 0.7,
      from: "start"
    },
    duration: 1,
    ease: "power3.inOut"
  });
}
```

✔️ Covers the entire screen  
✔️ Creates layered motion using stagger  
✔️ Acts as transition layer  

---

### ▶️ Stairs Out (Page Enter)

```js
function stairsOut() {
  return gsap.to(stairs, {
    y: "100%",
    stagger: {
      amount: 0.7,
      from: "start",
    },
    duration: 0.8,
    ease: "power3.inOut",
    onComplete: () => {
      gsap.set(stairs, { y: "-100%" });
    }
  });
}
```

✔️ Reveals next page  
✔️ Resets stairs for reuse  
✔️ Maintains smooth flow  

---

## 🔹 Barba.js Integration

```js
barba.init({
  transitions: [{
    name: "stairs-effect",

    async leave() {
      return stairsIn();
    },

    async enter() {
      return stairsOut();
    }
  }]
});
```

---

## 🧠 Flow

* **leave()** → Stairs cover screen  
* **enter()** → Stairs reveal next page  
* **async/await** → Ensures proper sequencing  

---

## 🧠 Why Not `sync: true`?

In previous projects, `sync: true` was used to run animations simultaneously.

👉 But for **multi-layer transitions**, this approach breaks control.

### ❌ Problems

* Runs `leave` and `enter` together  
* Hard to manage layered animations  
* Not scalable for complex transitions  

---

## ✅ Why Async Hooks Are Better

* Full control over animation timing  
* Proper **leave → enter sequence**  
* Handles multi-layer effects smoothly  
* Matches real **production & Awwwards workflows**  

---

## 🧱 Minimal HTML Structure

```html
<body data-barba="wrapper">

  <div class="stairs">
    <div class="stair"></div>
    <div class="stair"></div>
    <div class="stair"></div>
  </div>

  <div class="page" data-barba="container">
    <!-- Page Content -->
  </div>

</body>
```

---

## 🎨 Transition CSS

```css
#transition-layer {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  overflow: hidden;
  pointer-events: none;
  touch-action: none;
}

.stair {
  flex: 1;
  height: 100vh;
  background: #111;
  will-change: transform;
}
```

📍 Ensures:

* Full-screen layered coverage  
* Smooth GSAP-driven animation  
* Clean stacking effect  

---


### 🌐 Live Demo  
(https://barba-js-staircase-transition-03.vercel.app/)

---

## 🧠 Key Takeaways

* Multi-layer transitions feel more premium than overlays  
* `sync: true` is not suitable for complex animations  
* Async hooks give precise sequencing control  
* GSAP + Barba.js can replicate real Awwwards transitions  
* This is a **production-level animation pattern**  

---

## ✍️ Author

**Nischint Singh**  
LinkedIn: https://www.linkedin.com/in/nischint-singh-98a329314/8a329314/
