/** @format */
gsap.registerPlugin(ScrollTrigger);
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".imageBoard",
      pin: true,
      start: "top top",
      end: "+=300%",
      scrub: 1,
    },
    defaults: {
      ease: "none",
    },
  })
  .to(
    document.body,
    {
      delay: 0.3,
      backgroundColor: "#f0f0f0",
    },
    "start"
  )
  .to(
    ".upper-container h1",
    {
      scale: 5,
    },
    "start"
  )
  .to(
    ".upper-container h1",
    {
      opacity: 0,
    },
    "start"
  )
  .to(
    "#scaleableImg1",
    {
      scale: 10,
      x: -1500,
    },
    "start"
  )
  .to(
    "#scaleableImg2",
    {
      scale: 10,
      x: -2500,
    },
    "start"
  )
  .to(
    "#scaleableImg3",
    {
      scale: 10,
      x: -2000,
    },
    "start"
  )
  .to(
    "#scaleableImg4",
    {
      scale: 10,
      x: 3000,
    },
    "start"
  )
  .to(
    "#scaleableImg5",
    {
      scale: 10,
      x: 2000,
    },
    "start"
  )
  .to(
    ".cardImage",
    {
      delay: 0.1,
      scale: 5,
    },
    "start"
  )
  .to(
    ".cardImage",
    {
      delay: 0.4,
      opacity: 1,
    },
    "start"
  )
  .to(".scaleableImg", {
    opacity: 0,
  });
