document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.toggle-section');

  sections.forEach(section => {
    section.addEventListener('click', () => {
      const targetId = section.getAttribute('data-target');
      const content = document.getElementById(targetId);

      if (content.classList.contains('open')) {
        content.classList.remove('open');
        section.classList.remove('open');
      } else {
        document.querySelectorAll('.toggle-content.open').forEach(c => c.classList.remove('open'));
        document.querySelectorAll('.toggle-section.open').forEach(s => s.classList.remove('open'));
        content.classList.add('open');
        section.classList.add('open');
      }
    });
  });
});
