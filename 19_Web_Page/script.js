document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('y');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const msg = form.message.value.trim();

      if (!name || !email || !msg) {
        alert('Please fill out all fields.');
        return;
      }
      alert(`Thank you, ${name}. We will contact you at ${email}.`);
      form.reset();
    });
  }
});
