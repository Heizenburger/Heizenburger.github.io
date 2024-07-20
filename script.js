function checkQualification() {
  const percentage = document.getElementById('percentage').value;
  const male = document.getElementById('male').checked;
  const female = document.getElementById('female').checked;
  const message = document.getElementById('message');

  if (percentage >= 99 && male) {
    message.textContent = 'Congratulations! You are qualified for the interview.';
  } else if (percentage >= 50 && female) {
    message.textContent = 'Congratulations! You are qualified for the interview.';
  } else {
    message.textContent = 'Unfortunately, you are not qualified for the interview at this time.';
  }
}
