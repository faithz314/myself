// Select all the tab buttons
const tabButtons = document.querySelectorAll('.tab-button');

// Select all the tab content panes
const tabPanes = document.querySelectorAll('.tab-pane');

// Add event listener to each tab button
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove the 'active' class from all tab buttons and content panes
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabPanes.forEach(pane => pane.classList.remove('active'));

        // Add 'active' class to the clicked tab and the corresponding content pane
        button.classList.add('active');
        const targetTab = button.getAttribute('data-tab');
        document.querySelector(`.${targetTab}`).classList.add('active');
    });
});
