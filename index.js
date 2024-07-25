  function showContent(tabId) {
    // Hide all content divs
    var contentDivs = document.querySelectorAll('.content');
    contentDivs.forEach(function(div) {
      div.classList.remove('active');
    });

    // Activate the selected content div
    var selectedDiv = document.getElementById(tabId);
    selectedDiv.classList.add('active');

    // Optional: Update tab styles to indicate active tab
    var tabs = document.querySelectorAll('.tab');
    tabs.forEach(function(tab) {
      tab.classList.remove('active');
    });
    event.target.classList.add('active');
  }
