// BURGER MENU

const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__menu');
const body = document.body;

burger.addEventListener('click', () => {
  burger.classList.toggle('is-active');
  menu.classList.toggle('is-active');
  body.classList.toggle('is-locked');
});


// PRODUCTS
document.addEventListener('click', function (e) {
  const btn = e.target.closest('.js-flip');
  if (!btn) return;

  const currentCard = btn.closest('.product-card');

  // Закрываем все карточки
  document.querySelectorAll('.product-card').forEach(card => {
    if (card !== currentCard) {
      card.classList.remove('is-flipped');
    }
  });

  // Переворачиваем текущую
  currentCard.classList.toggle('is-flipped');
});


/* ==========================
ФУНКЦИОНАЛ ДЛЯ КНОПКИ И POPUP МЕНЮ
========================== */


// POPUP MENU

// const popup = document.getElementById('popup');
// const openBtn = document.getElementById('openPopup');
// const closeBtn = document.getElementById('closePopup');


// function openPopup() {
//   popup.style.display = 'flex';
//   document.body.classList.add('no-scroll');
// }

// function closePopup() {
//   popup.style.display = 'none';
//   document.body.classList.remove('no-scroll');
// }

// openBtn.addEventListener('click', openPopup);
// closeBtn.addEventListener('click', closePopup);

// popup.addEventListener('click', (e) => {
//   if (e.target === popup) closePopup();
// });

// document.addEventListener('keydown', (e) => {
//   if (e.key === 'Escape') closePopup();
// });



// // INPUT

// const input = document.getElementById('phone');

// input.addEventListener('input', () => {
//   // оставляем только цифры
//   let digits = input.value.replace(/\D/g, '');

//   // если стерли всё — возвращаем +375
//   if (!digits.startsWith('375')) {
//     digits = '375';
//   }

//   // обрезаем лишнее (375 + 9 цифр)
//   digits = digits.slice(0, 12);

//   let result = '+375';

//   if (digits.length > 3) {
//     result += ' (' + digits.slice(3, 5);
//   }
//   if (digits.length >= 5) {
//     result += ') ';
//   }
//   if (digits.length > 5) {
//     result += digits.slice(5, 8);
//   }
//   if (digits.length > 8) {
//     result += '-' + digits.slice(8, 10);
//   }
//   if (digits.length > 10) {
//     result += '-' + digits.slice(10, 12);
//   }

//   input.value = result;
// });

// // запрещаем удалять +375
// input.addEventListener('keydown', e => {
//   if (
//     input.selectionStart <= 4 &&
//     (e.key === 'Backspace' || e.key === 'Delete')
//   ) {
//     e.preventDefault();
//   }
// });



// // VALIDATION INPUT

// const inputs = document.querySelectorAll('input[data-reg]');
// const button = document.querySelector('.popup__confirm');

// function validate(input) {
//   const reg = new RegExp(input.dataset.reg);
//   const value = input.value.trim();

//   const isValid = reg.test(value);

//   input.classList.toggle('valid', isValid);
//   input.classList.toggle('invalid', value !== '' && !isValid);

//   return isValid;
// }

// function checkForm() {
//   const allValid = [...inputs].every(validate);
//   button.disabled = !allValid;
// }

// inputs.forEach(input => {
//   input.addEventListener('input', checkForm);
// });