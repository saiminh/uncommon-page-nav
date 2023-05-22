
window.addEventListener('DOMContentLoaded', function() {
  const targets = document.querySelector('main').querySelectorAll('[id]');
  const nav = document.querySelector('.uncommon-page-nav');
  targets.forEach((target) => {
    const link = document.createElement('a');
    link.setAttribute('href', '#' + target.getAttribute('id'));
    link.innerHTML = target.getAttribute('id').replace(/-/g, ' ');
    nav.appendChild(link);
  })

  //create a new IntersectionObserver instance
  const observer = new IntersectionObserver(entries => {
    //callback
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      if (entry.isIntersecting) {
        document.querySelector(`.uncommon-page-nav a[href="#${id}"]`).classList.add('uncommon-page-nav--active');
      } else {
        document.querySelector(`.uncommon-page-nav a[href="#${id}"]`).classList.remove('uncommon-page-nav--active');
      }
    });
  }, {
    //options
    threshold: 0.5
  })
  //tell the observer which elements to track
  targets.forEach((target) => {
    observer.observe(target);
  })
  
})