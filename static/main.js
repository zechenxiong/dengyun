const nav = document.querySelector('.nav-wrap');
const menu = document.querySelector('.menu');
const links = document.querySelector('.nav-links');
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 20));
menu.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  menu.setAttribute('aria-expanded', open);
});
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
}), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.querySelectorAll('.filters button').forEach(button => button.addEventListener('click', () => {
  document.querySelector('.filters .active').classList.remove('active');
  button.classList.add('active');
  document.querySelectorAll('.work-card').forEach(card => {
    card.classList.toggle('hidden', button.dataset.filter !== 'all' && card.dataset.type !== button.dataset.filter);
  });
}));

document.querySelector('#contactForm').addEventListener('submit', event => {
  event.preventDefault();
  const note = event.currentTarget.querySelector('.form-note');
  note.textContent = '联系邮箱尚待补充。添加邮箱后，可将此表单接入邮件或后台服务。';
});
