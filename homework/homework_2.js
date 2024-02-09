/*let example = 'тестирование – Процесс в рамках жизненного цикла разработки программного обеспечения, который оценивает качество компонента или системы, а также связанных с ними рабочих продуктов.'
let correctRussianText
let wrongRussianText = 'тестирование – Процесс в рамках жизненного цель цикла тестирования разработки программного цель обеспечения, проведения который оценивает качество компонента или системы, а также связанных с ними тестирования рабочих продуктов.'

correctRussianText = wrongRussianText.split(' ')
correctRussianText = correctRussianText.filter(word => word != 'цель' && word != 'тестирования' && word != 'проведения').join(' ')

if (correctRussianText === example) {
    console.log(correctRussianText)
}*/


let number = 0;
let result;

// Найдите ошибку и дополните код, чтобы он работал правильно

if (number > 0) {
    result = "Positive";
} else if (number < 0) {
    result = "Negative";
} else {
    result = "Zero";
}

switch (number) {
    default:
        result += " is undefined";
        break;
    case 1:
    case 3:
    case 5:
    case 7:
        result += " is prime";
        break;
    case 2:
    case 4:
    case 6:
    case 8:
    case 9:
    case 10:
        result += " is even";
        break;
}

console.log(result)

