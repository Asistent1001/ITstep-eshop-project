document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.toggle-section');

  sections.forEach(section => {
    section.addEventListener('click', () => {
      const targetId = section.getAttribute('data-target');
      const content = document.getElementById(targetId);

      if (content.classList.contains('open')) {
        content.classList.remove('open');
      } else {
        document.querySelectorAll('.toggle-content.open').forEach(c => c.classList.remove('open'));
        content.classList.add('open');
      }
    });
  });
});
