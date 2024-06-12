(function() {
  const callButtonSelectors = [
    '.iconWrapper_de6cd1[aria-label="Start Video Call"]',
    '.iconWrapper_de6cd1[aria-label="Start Voice Call"]'
  ];

  const hideCallButtons = () => {
    callButtonSelectors.forEach(selector => {
      const buttons = document.querySelectorAll(selector);
      buttons.forEach(button => button.style.display = 'none');
    });
  };

  const observer = new MutationObserver(hideCallButtons);
  observer.observe(document.body, { childList: true, subtree: true });
})();