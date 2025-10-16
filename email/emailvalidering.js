document.getElementById('registerForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Hämta alla fält
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const age = document.getElementById('age').value;
  
  const errorDiv = document.getElementById('errorMessages');
  const errors = [];
  
  // Validera e-post
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    errors.push('Ange en giltig e-postadress');
  }
  
  // Validera lösenord (minst 8 tecken)
  if (password.length < 8) {
    errors.push('Lösenord måste vara minst 8 tecken långt');
  }
  
  // Validera ålder (minst 18 år)
  if (age < 18) {
    errors.push('Du måste vara minst 18 år gammal');
  }
  
  // Visa felmeddelanden eller bekräfta registrering
  if (errors.length > 0) {
    errorDiv.innerHTML = errors.join('<br>');
  } else {
    errorDiv.innerHTML = '';
    alert('Skickat!');
    document.getElementById('registerForm').reset();
  }
});