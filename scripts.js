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
  }else if (username === 'Soumyadeep_Lodh' && dateofbirth === '19.10.1999') {
    window.location.href = 'home_index1.html';
  }else if (username === 'Lokku_Chakresh_Kumar' && dateofbirth === '08.10.2005') {
    window.location.href = 'home_index2.html';
  }else if (username === 'Riya_Majumdar' && dateofbirth === '06.09.2005') {
    window.location.href = 'home_index3.html';
  }else if (username === 'Amit_Nigam_Sir' || dateofbirth === '') {
    window.location.href = 'home_index4.html';
  }else if (username === 'Dishari_Das' && dateofbirth === '01.12.2006') {
    window.location.href = 'home_index5.html';
  }else if (username === 'Biju' && dateofbirth === '06.01.2006') {
    window.location.href = '2025.html';
  }else if (username === 'Sanchita' && dateofbirth === '06.01.2006') {
    window.location.href = '2025.html';
  }else {
    alert('Invalid username or date of birth');
  }
});
