function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.add('show'); // Add class to show sidebar
    sidebar.classList.remove('hide'); // Ensure hide class is removed
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.add('hide'); // Add class to hide sidebar
    sidebar.classList.remove('show'); // Ensure show class is removed
}

// Event listeners for menu button and close icon
const menuButton = document.querySelector('.menu-button');
const closeButton = document.querySelector('.close-icon'); // Assuming you have a close icon with this class

menuButton.addEventListener('click', showSidebar);
closeButton.addEventListener('click', hideSidebar);
