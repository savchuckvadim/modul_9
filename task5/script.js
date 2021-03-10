const formText = document.querySelector('#Field');
const sbm = document.querySelector('#sbm');

const testDuplicateField = document.querySelector('#duplicateField');
//testDuplicateField.innerHTML = "content";






formText.oninput = function() {
    testDuplicateField.innerHTML = formText.value;
  };

  sbm.addEventListener('click', function(){
    console.log(formText.value);
    formText.value = "";
    testDuplicateField.innerHTML = formText.value;
  })