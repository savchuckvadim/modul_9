



const testText = document.querySelector('#link');
testText.addEventListener('click', 
  function() {
    this.textContent = 'По мне кликнули!';
})