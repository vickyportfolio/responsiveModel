window.addEventListener('scroll', function (event) {
  this.document
    .querySelector('nav')
    .classList.toggle('window-scroll', window.scrollY > 0);
});

//show/hide faq answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach((faq) => {
  faq.addEventListener('click', () => {
    const icon = faq.querySelector('.faq_icon i');
    if (icon.className === 'uil uil-plus') {
      icon.className = 'uil uil-minus';
    } else {
      icon.className = 'uil uil-plus';
    }
    faq.classList.toggle('open');
  });
});
