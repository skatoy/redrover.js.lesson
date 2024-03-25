/*let example = 'тестирование – Процесс в рамках жизненного цикла разработки программного обеспечения, который оценивает качество компонента или системы, а также связанных с ними рабочих продуктов.'
let correctRussianText
let wrongRussianText = 'тестирование – Процесс в рамках жизненного цель цикла тестирования разработки программного цель обеспечения, проведения который оценивает качество компонента или системы, а также связанных с ними тестирования рабочих продуктов.'

correctRussianText = wrongRussianText.split(' ')
console.log(correctRussianText);
correctRussianText = correctRussianText.filter(word => word != 'цель' && word != 'тестирования' && word != 'проведения').join(' ')

if (correctRussianText === example) {
    console.log(correctRussianText)
}*/


let definitions = 'Functional testing evaluates the functions that a component or system should perform. The functions are “what” the test object should do. The main objective of functional testing is checking the functional completeness, functional correctness and functional appropriateness. Non-functional testing evaluates attributes other than functional characteristics of a component or system.","Non-functional testing is the testing of “how well the system behaves”. The main objective of nonfunctional testing is checking the non-functional software quality characteristics. The ISO/IEC 25010 standard provides the following classification of the non-functional software quality characteristics","Black-box testing (see section 4.2) is specification-based and derives tests from documentation external to the test object. The main objective of black-box testing is checking the system\'s behavior against its specifications.","White-box testing (see section 4.3) is structure-based and derives tests from the system\'s implementation or internal structure (e.g., code, architecture, work flows, and data flows). The main objective of white-box testing is to cover the underlying structure by the tests to the acceptable level."'
let term = definitions.split('","').filter(word => word.includes('Functional'))
console.log(term);

/*let number = 0;
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

console.log(result)*/

/*let newHomeArray;
let homeArray = [17, "test", true, [4, 5], "last"];
newHomeArray = homeArray.toSpliced(0,2);
console.log(newHomeArray);
*/

