

function sayHello()
{
    console.log("hello world")
}

sayHello();

function greet(name='lizi')
{
    return "hi,   "+ name
}

console.log(greet());

function sum(x,y)
{
    return x+y
}
console.log(sum(4,11));

function calculateArea(x,y)
{
    return x*y
}

console.log(calculateArea(4,8))

function maxNumber(x,y)
{
    if (x>y)
    {
        return x
    }
    else
    {
        return y
    }
}
console.log(maxNumber(5,9));

const maxNumb = function (x,y)
{
    if (x>y)
    {
        return x
    }
    else
    {
        return y
    }
}
console.log(maxNumb(70,90));

const max = (x,y)=> x > y ? x :y;
console.log(max(50,40))

function sayHello(times)
{
    for(let i = 0; i<=times; i++)
    {
        console.log("Hello World")
    }
}

sayHello(3)

function celsiusToFahrenheit(celsius)
{
    const fafrenheit = (celsius * 9/5) + 32
    console.log(fafrenheit)
}
console.log(celsiusToFahrenheit(4))

function sumDigits(numb)
{
    const digits = numb.toString().split('');
    let sum = 0;
    for (let digit of digits)
    {
        sum += parseInt(digit);
    }
    return sum;
}

console.log(sumDigits(97));

function countBs(sentence)
{
    let count = 0;
    for (let letter of sentence)
    {
        if (letter == 'B')
        {
             count++
        }
           
    }
    return count
}

console.log(countBs('BdsdBsbB'))