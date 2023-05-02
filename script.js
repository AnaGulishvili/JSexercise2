//შექმენით ფუნქცია, რომელსაც გადავცემთ n რაოდენობის მნიშვნელობას და დააბრუნოს მხოლოდ დადებითი რიცხვების ჯამს:

function sumPositiveNumbers(...n) {
    let sum = 0;
    for (let i = 0; i < n.length; i++) {
      if (n[i] > 0) {
        sum += n[i];
      }
    }
    return sum;
  }
  let result = sumPositiveNumbers(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);

  console.log(result);

  // ფუნქციის საშულებით გამოიტანეთ ყველა რიცხვის ჯამი:
  
  function allSum(...n) {
    let sum=0;
    for (let i =0; i < n.length; i++) {
        
        sum+= n[i];
  }
  return sum;
}
let result2 = allSum(10, 50, 6, 7, 8, 11, 6, 3, 9);
console.log(result2);

//ფუნქციამ უნდა დააბრუნოს სახელი და გვარი ადგილის გამოტოვებით (მაგ: 'giorgi saakadze') თუ isloggedin არის true და false თუ isloggedin ფროფერთი არის false;

let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true
  }

  function login(user) {
    if(user['isloggedin']== true) {
        return user['firstname']+ ' '+ user['lastname'];
    } 
    return 'false'; 
    
}
let result3=login(user);
console.log(result3);

//შექმენით ფუნქცია რომელსაც გადაეცემა ერთი პარამეტრი. ეს პარამეტრი უნდა იყოს რიცხვების მასივი და ფუნქციამ უნდა დააბრუნოს ამ რიცხვებიდან მაქსიმალური:

let array= [1, 14, 26, 3, 6];

function largestNumber(array) {
    let largest =array[0];
    for (let i =0; i < array.length; i++) {
        if (array[i] > largest) {
            largest=array[i];
        }
    }
    return largest;
}
let result4 = largestNumber(array);
console.log(result4);

//დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიიღებს ერთ რიცხვს და გამოთვლის გადაცემული მნიშვნელობა კენტია თუ ლუწი; თუ ლუწია დააბრუნოს - ‘this number is even; თუ კენტია დააბრუნოს - this number is odd;

function oddOrEven(number) {
    if (number % 2==0) {
        return "this number is even"
    }
    return "this number is odd"
}

let result5 =oddOrEven(6);
console.log(result5);

//for ორივე გზით და foreach-ის საშუალებით გამოიტანეთ მხოლოდ ის სიტყვებi რონლის სიმბოლოების რაოდენობდა მეტია 4 და მოიცავს ‘av’ სიმბოელობის tთანმიმდევრობას; - include უნდა გამოიყენოთ

let array6 = ['html', 'css', 'python', 'javascript', 'bootstrap'];
//for  გზა

for (let item of array6) {
    if (item.length > 4 && item.includes('av')) {
        console.log(item);
    }
}



//foreach გზა 
array6.forEach((item) => {
      if (item.length > 4 && item.includes('av')) {
        console.log(item);
      }
 });


 //for ციკლის საშუალებით მიიღეთ reverse ვერისია, ანუ 5,4,3,2,1

 let array7 = [1,2,3,4,5];



