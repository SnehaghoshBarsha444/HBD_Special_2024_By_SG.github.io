const form = document.querySelector('form');
const usernameInput = document.querySelector('input[type="email"]');
const dobInput = document.querySelector('input[type="password"]');
const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  const username = usernameInput.value;
  const dateofbirth = dobInput.value;

  if (username === 'Ishani_Mitra' && dateofbirth === '26.09.2005') {
    window.location.href = 'home_index.html';
  } else {
    alert('Invalid username or date of birth');
  }
});