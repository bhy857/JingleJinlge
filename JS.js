// luo kevyt lumisadeefekti — simppeli ja sujuva
document.addEventListener('DOMContentLoaded', () => {
  const count = window.innerWidth < 600 ? 18 : 36;
  const container = document.createElement('div');
  container.className = 'snow';
  document.body.appendChild(container);

  for (let i = 0; i < count; i++) {
    const f = document.createElement('span');
    f.className = 'snowflake';
    f.textContent = '❄'; // yksinkertainen lumihiutale
    const size = (Math.random() * 12 + 10).toFixed(1); // px
    const left = Math.random() * 100; // %
    const dur = (Math.random() * 12 + 8).toFixed(1); // sekuntia
    const delay = (Math.random() * -10).toFixed(1); // aloittaa eri kohdasta
    f.style.fontSize = size + 'px';
    f.style.left = left + '%';
    f.style.animationDuration = dur + 's';
    f.style.animationDelay = delay + 's';
    f.style.opacity = (0.5 + Math.random() * 0.6).toFixed(2);
    container.appendChild(f);
  }
});