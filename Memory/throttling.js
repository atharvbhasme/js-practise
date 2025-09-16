//what is throttling? Run the function at most once every X milliseconds, no matter how many times the event fires.

//example: You’re scrolling a page. You want to check the scroll position every 200ms, not on every tiny scroll event.

window.onload = function() {
function throttle(func, interval) {
  let lastTime = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastTime >= interval) {
      lastTime = now;
      func.apply(this, args);
    }
  };
}

// Example: Log scroll position
function handleScroll() {
  console.log("Scroll position:", window.scrollY);
}

const throttledScroll = throttle(handleScroll, 200);

window.addEventListener("scroll", throttledScroll);
}