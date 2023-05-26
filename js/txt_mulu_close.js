window.addEventListener('DOMContentLoaded', function() {
    var sidebar = document.querySelector('.sidebar');
    var collapseText = document.querySelector('.collapse-text');
    
    sidebar.addEventListener('mouseenter', function() {
      sidebar.classList.remove('sidebar-collapsed');
    });
    
    sidebar.addEventListener('mouseleave', function() {
      sidebar.classList.add('sidebar-collapsed');
    });
    
    collapseText.addEventListener('mouseenter', function() {
      sidebar.classList.remove('sidebar-collapsed');
    });
    
    collapseText.addEventListener('mouseleave', function() {
      sidebar.classList.add('sidebar-collapsed');
    });
  });
  