// Task 1

console.log('Task 1');

const logItems = array => {
    for(let i = 0; i < array.length;i++){
        console.log(`${i} - ${array[i]}`);
    }
}

logItems(['Mango','Poly','Ajax']);
// Task 2

console.log('Task 2');

const calculateEngravingPrice = (message, pricePerWord) => {
   return message.split(' ').length * pricePerWord;
}

console.log(calculateEngravingPrice("I have no idea what to write",10));
// Task 3

console.log('Task 3');

const findLongestWord = str => {
    const longestWord = str.split(' ').sort((a,b) => a.length - b.length);

    return longestWord[longestWord.length - 1];
}

console.log(findLongestWord('I have no idea what to write'));
// Task 4

console.log('Task 4');

const formatString = str => {
    return str.length < 40 ? str : `${str.split("").splice(0, 40).join("")}...`;
}

console.log(formatString('English texts for beginners to practice reading and comprehension online and for free. Practicing your comprehension of written English will both improve your vocabulary and understanding of grammar and word order.'))

// Task 5

console.log('Task 5');

const checkForSpam = message => {
    return message.toLowerCase().includes('sale') || message.toLowerCase().includes('spam');
}

console.log(checkForSpam('I did not get any SpaM'))

// Task 6

console.log('Task 6');

const numbers = [];

while (true) {
    let input = prompt("Введіть число: ");
    
    if (input != null) {
        numbers.push(Number(input));
    } 
    else {
        break;
    }
}


console.log(`Загальна сума чисел дорівнює ${numbers.reduce((acc,el) => acc+el,0)}`);

// Task 7

console.log('Task 7');

const isLoginValid = login => {
    return login.length >= 4 && login.length <= 16;
}

const isLoginUnique = (allLogins, login) => {
    return allLogins.includes(login);
}

const addLogin = (allLogins,login) => {
    if(isLoginValid(login)){
        if(!isLoginUnique(allLogins, login)){
            allLogins.push(login);
            console.log("Логін успішно доданий!");
        } 
        else{
            console.log("Такий логін уже використовується!");
        }
    }
    else{
        console.log("Помилка! Логін повинен бути від 4 до 16 символів");  
    } 
}

const allLogins = ['Musya','Kuku','Lubin','Dennnu'];
addLogin(allLogins,'Misha');