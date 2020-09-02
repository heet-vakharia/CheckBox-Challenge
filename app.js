const tl = new TimelineMax();
const click = document.getElementById("click");
tl.set("#background", {
  x: "-100%",
});
tl.set("#tick , .sparkle", {
  drawSVG: 0,
});
const btn = document.getElementById("btn");
const start = () => {
  const tl = new TimelineMax();
  tl.set(".sparkle", {
    drawSVG: "0%",
  });
  tl.fromTo(
    "#background",
    1,
    {
      x: "-100%",
    },
    {
      x: "0",
    }
  );
  tl.fromTo(
    "#tick",
    1,
    {
      drawSVG: "0",
    },
    {
      drawSVG: "100%",
    }
  );
  tl.add("sparkle");
  tl.fromTo(
    ".bottom",
    0.1,
    {
      transformOrigin: "bottom",
      drawSVG: "100%",
    },
    {
      transformOrigin: "bottom",
      drawSVG: "0%",
    },
    "sparkle"
  );
  tl.fromTo(
    ".top",
    0.1,
    {
      transformOrigin: "top",
      drawSVG: "100%",
    },
    {
      transformOrigin: "top",
      drawSVG: "0%",
    },
    "sparkle"
  );
  tl.fromTo(
    ".left",
    0.1,
    {
      transformOrigin: "left",
      drawSVG: "100%",
    },
    {
      transformOrigin: "left",
      drawSVG: "0%",
    },
    "sparkle"
  );
  tl.fromTo(
    ".right",
    0.1,
    {
      transformOrigin: "right",
      drawSVG: "100%",
    },
    {
      transformOrigin: "right",
      drawSVG: "0%",
    },
    "sparkle"
  );
  tl.to("#btn", 0.1, {
    opacity: 0,
    repeat: 1,
    delay: 0.5,
  });
  tl.add("end");
  tl.to(
    "#background",
    0.1,
    {
      x: "-100%",
    },
    "end"
  );
  tl.to(
    "#tick , .sparkle",
    1,
    {
      drawSVG: 0,
    },
    "end"
  );
  tl.to(
    "#btn",
    1,
    {
      opacity: 1,
    },
    "end+=1"
  );
  return tl;
};
btn.addEventListener("click", () => {
  // click.play().then(() => {
  // 	console.log("heloo");
  // });
  console.log(click);
  start();
});
