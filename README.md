🚀 Barba.js Series – 03 Staircase Transition

This project is part of my Beginner → Advanced Barba.js Series, where each project builds step-by-step toward creating modern, production-level page transitions.

👉 In this project, I’ve recreated a real Awwwards-style transition that I’ve personally seen being used across many Awwwards-winning websites — the Staircase Animation.

📌 Overview

Instead of a single overlay, this transition uses multiple layered elements (.stair) to create a staircase-like reveal effect.

💡 This approach:

Uses multiple layers for depth and visual rhythm
Feels premium and cinematic
Matches real-world Awwwards-level UI transitions
🆕 What’s New in This Project

✨ Multi-layered staircase animation
✨ Use of async/await with Barba.js hooks
✨ Removed sync: true for better control
✨ Manual sequencing of transitions
✨ More production-ready transition architecture

⚙️ How the Transition Works

Stairs slide down → cover current page
Page switches in the background
Stairs slide out → reveal next page

👉 Creates a smooth layered staircase reveal effect

🔹 GSAP Setup (Initial State)
gsap.set(stairs, { y: "-100%" });

📍 Keeps all stairs hidden above the viewport initially

🔹 Animation Functions
▶️ Stairs In (Page Exit)
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

✔️ Brings stairs into view
✔️ Covers the entire page
✔️ Creates layered motion using stagger

▶️ Stairs Out (Page Enter)
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

✔️ Moves stairs out of view
✔️ Reveals next page
✔️ Resets for reuse

🔹 Barba.js Integration (Async Approach)
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
🧠 Why I Removed sync: true

In previous projects, sync: true was used to run animations simultaneously.

👉 But for multi-layered transitions like this, it becomes limiting.

❌ Problems with sync: true
Runs leave and enter at the same time
Breaks control over layered sequencing
Not suitable for complex animation systems
✅ Why Async/Await is Better
Gives full control over transition timing
Ensures proper sequence: leave → enter
Handles complex, layered animations smoothly
Matches how real production & Awwwards websites are built
🧱 Minimal HTML Structure
<body data-barba="wrapper">

  <div class="stairs">
    <div class="stair"></div>
    <div class="stair"></div>
    <div class="stair"></div>
    <!-- Add more layers as needed -->
  </div>

  <div class="page" data-barba="container">
    <!-- Page Content -->
  </div>

</body>
🎨 Transition CSS (Concept)
.stair {
  position: fixed;
  inset: 0;
  background: #111;
  transform: translateY(-100%);
  z-index: 9999;
}

📍 Ensures:

Full-screen layered coverage
Smooth GSAP-driven movement
Clean stacking for staircase effect
🔗 Links
🚀 GitHub + Code

(Add your repo link here)

🌐 Live Demo

(Add your live demo link here)

🧠 Key Takeaways
Multi-layer transitions create high-end visual effects
sync: true is not suitable for advanced transitions
Async hooks give precise sequencing control
GSAP + Barba.js can replicate real Awwwards transitions
This is a production-level animation pattern
✍️ Author

Nischint Singh

LinkedIn: https://www.linkedin.com/in/nischint-singh-98a329314/
