const stairs = document.querySelectorAll(".stair");

gsap.set(stairs, { y: "-100%" });

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




