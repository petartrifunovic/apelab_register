'use strict';

//Copy Text
const copied = document.querySelector('.profile__copied-text');

function copyText(htmlElement) {
  if (!htmlElement) {
    return;
  }

  let elementText = htmlElement.innerText;
  let inputElement = document.createElement('input');
  inputElement.setAttribute('value', elementText);
  document.body.appendChild(inputElement);

  inputElement.select();
  document.execCommand('copy');
  inputElement.parentNode.removeChild(inputElement);
}

document.querySelector('.profile__address-copy-btn').onclick = function () {
  copyText(document.querySelector('#copy-text'));
  copied.style.display = 'inline-block';
};
