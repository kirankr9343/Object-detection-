function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');
    const hamburger = document.getElementById('hamburger');
  
    if (sidebar.style.left === '0px') {
      sidebar.style.left = '-250px'; // Hide sidebar
      mainContent.style.marginLeft = '0';
      hamburger.style.left = '20px';
    } else {
      sidebar.style.left = '0px'; // Show sidebar
      mainContent.style.marginLeft = '250px';
      hamburger.style.left = '270px';
    }
  }