function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

function scrollToProjectSection() {
    document.querySelector('#project-section').scrollIntoView({
      behavior: 'smooth'
    });
  }