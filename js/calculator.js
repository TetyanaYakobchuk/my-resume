//написала в переменную результат селектора
const technologiesSelect = document.querySelector('#calculator-form-technologies');

// -----взяла с multiselect-bollerplate.js
const technologiesMultiSelect = new Choices(technologiesSelect, { //инициализировала мультиселект
  allowSearch: false,
  silent: false,
  renderChoiceLimit: -1,
  maxItemCount: -1,
  removeItems: true,
  removeItemButton: true,
  editItems: false,
  duplicateItemsAllowed: false,
  delimiter: ",",
  paste: true,
  searchEnabled: false,
  searchChoices: true,
  searchResultLimit: -1,
  position: "auto",
  resetScrollPosition: true,
  shouldSort: true,
  shouldSortItems: false,
  placeholder: true,
  noChoicesText: "No available options",
  itemSelectText: "Click to select",
  classNames: { //добавила свои классы чтобы синхронизировать html с нужными классами, которые нужны библиотеке
    containerInner: "choices__inner tech-input-container", 
    input: "choices__input",
  },
});
//----------------------------------


calculateSum();

const calculatorForm = document.querySelector('.calculator-form');

calculatorForm.addEventListener('submit', function (event) { 
  event.preventDefault(); //чтоб не выбрасывало на верх сайта
  calculateSum();

});


function calculateSum() {
  // Селекторы
  const websiteTypeSelect = document.querySelector('#calculator-form-website-type'); //нашли выбранный тип сайта
  const websiteCart = document.querySelector('#calculator-form-input-cart input:checked'); //выбранный радиобаттон
  const websiteReseption = document.querySelector('#calculator-form-input-reseption input:checked'); //выбранный радиобаттон
  

  // Значения
  const websiteTypeValue = extractPriceFromValue(websiteTypeSelect.value); //выбранный типа сайта
  const technologiesValue = getTechnologiesSum(technologiesMultiSelect.getValue()); //собрали выбранные значения
  const websiteCartValue = convertCartOptionToPrice(websiteCart.value);//выбирает значение которое отмечено в радиобаттоне
  const websiteReseptionValue = convertReseptionOptionToPrice(websiteReseption.value); 

  const totalSum = websiteTypeValue + technologiesValue + websiteCartValue + websiteReseptionValue;
  
  renderSum(totalSum);
}


function renderSum(sum) {
  const costElement = document.querySelector('.calculator-form-total-cost');
  
  costElement.textContent = 'Calculating...';

  setTimeout(function () { //искусственная задержка
    costElement.textContent = sum + '$';
  }, 2000);

}




function convertCartOptionToPrice(option) { //значение радиобаттона shopping cart конвертируем в число
  if (option === 'yes') { 
    return 300;
  }
  return 0;
}


function convertReseptionOptionToPrice(option) { //значение радиобаттона reception конвертируем в число
  if (option === 'yes') { 
    return 500;
  }
  return 0;
}


function getTechnologiesSum(technologiesArr) {
  let totalSum = 0;

  technologiesArr.forEach(function (tech) { //перебор массива с технологиями
    totalSum = totalSum + extractPriceFromValue(tech.value) 
  })
  return totalSum;
}

function extractPriceFromValue(str) {
  const price = str.match(/:\d+/);

  if (price) {
    return Number(price[0].slice(1)) || 0;
  }

  return 0;
  }