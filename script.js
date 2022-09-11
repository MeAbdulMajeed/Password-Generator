var pwElem = document.getElementById('pw');
const copyElem = document.getElementById('copy');
const lengthElem = document.getElementById('length');
const upperCaseElem = document.getElementById('upperCase');
const lowerCaseElem = document.getElementById('lowerCase');
const numberElem = document.getElementById('number');
const symbolElem = document.getElementById('symbol');
const generateElem = document.getElementById('generateId');

const upperLetter = "ABCDEFGHIJKLMNOPUVWXYZ";
const lowerLetter = "abcdefghijklmnopuvwxyz";
const nums = "1234567890";
const symb = "!@#$%^&*()_+=";

function LowerCaseFunc(){
    return lowerLetter[Math.floor(Math.random() * lowerLetter.length)];
}

function UpperCaseFunc(){
    return upperLetter[Math.floor(Math.random() * upperLetter.length)];
}

function NumbersFunc(){
    
    return nums[Math.floor(Math.random() * nums.length)];
}

function SymbolFunc(){
    return symb[Math.floor(Math.random() * symb.length)];
}

function generatePass(){
    const len = lengthElem.value;
    let password = "";

    for(let i = 0; i < len; i ++){
        const x = genereateX();
        password += x;
    }

    pwElem.innerText = password;
}

function genereateX(){
    const xs = [];

    if(upperCaseElem.checked){
        xs.push(UpperCaseFunc());
    }

    if(lowerCaseElem.checked){
        xs.push(LowerCaseFunc());
    }

    if(numberElem.checked){
        xs.push(NumbersFunc());
    }

    if(symbolElem.checked){
        xs.push(SymbolFunc());
    }

    if(xs.length === 0) return "";

    return xs[Math.floor(Math.random() * xs.length)];
}

generateElem.addEventListener('click',generatePass)


copyElem.addEventListener('click', () => {
    // copyElem.select();
    const password = pwElem.innerText;
    if ( !password ) {
                return ;
            }          
                navigator.clipboard.writeText(password).then(() =>{
                    alert("Password Copied")
                });
            })
            