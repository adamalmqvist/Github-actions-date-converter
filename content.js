function convertDates() {
  const dateElements = document.querySelectorAll("relative-time");
  dateElements.forEach((element, index) => {
    element.outerHTML = element.innerHTML;
  });
}

// Use MutationObserver to watch for changes in the DOM
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.addedNodes.length) {
      convertDates();
    }
  });
});

// Start observing the document body for added nodes
observer.observe(document.body, {
  childList: true,
  subtree: true,
});

// Also run the function initially on any existing elements
convertDates();
