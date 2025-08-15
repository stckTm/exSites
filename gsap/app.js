gsap.to('.box1', {
  x: 200,
  y: 200,
  duration: 2,
  delay: 1,
  rotate: 360,
  backgroundColor: 'yellow',
  borderRadius: '50%',
  scale: 1.5,
  repeat: -1,
  yoyo: true

});
gsap.from('.box2', {
  x: 100,
  y: 100,
  duration: 3,
  delay: 2,
  rotate: 360,
  backgroundColor: 'purple',
  borderRadius: '50%',  
  scale: 2,
  repeat: -1,
  yoyo: true

});

gsap.from('h1', {
  opacity: 0,
  color: 'green',
  duration: 2,
  delay: 1,
  stagger: 1
})
