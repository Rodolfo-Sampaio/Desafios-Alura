function showDescription(descriptionId) {
   var descriptionText = document.getElementById(descriptionId).innerText;
   var descriptionContainer = document.getElementById('descriptionContainer');
   var descriptionTextElement = document.getElementById('descriptionText');

   descriptionTextElement.innerText = descriptionText;
   descriptionContainer.style.opacity = '1';
}

function hideDescription(descriptionId) {
   var descriptionContainer = document.getElementById('descriptionContainer');
   descriptionContainer.style.opacity = '0';
}
