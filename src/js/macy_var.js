var macy = Macy({
  container: '#macy',
  mobileFirst: true,
  trueOrder: true,
  waitForImages: true,
  useContainerForBreakpoints: false,
  margin: 5,
  columns: 1,
  breakAt: {
    481: 1,
    768: 5,
    1200: 5,
  },
});
