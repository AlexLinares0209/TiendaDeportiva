const gallery = document.querySelector('.gallery');
const filterButtons = document.querySelectorAll('.filter-buttons button');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filterValue = button.classList[1];
    const images = gallery.querySelectorAll('.producto');

    images.forEach(image => {
      if (filterValue === 'todas') {   
        image.classList.remove('hide');
        image.classList.add('show');
      } else if (image.classList.contains(filterValue)) {
        image.classList.remove('hide');
        image.classList.add('show');
      } else {
        image.classList.remove('show');
        image.classList.add('hide');
      }
    });
  });
});