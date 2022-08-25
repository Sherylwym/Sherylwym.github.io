const showQues = document.querySelector('.showQues');       
const testObj = [           
{Q: 'The First Question', A: 'A'},            
{Q: 'The Second Question', A: 'B'},            
{Q: 'The Third Question', A: 'C'},       
]        
const showAnswer = document.querySelector('.showAnswer');        
let arr = [];         
function getRandomIntInclusive(min, max) {           
min = Math.ceil(min);           
max = Math.floor(max);           
return Math.floor(Math.random() * (max - min + 1)) + min; //Contains maximum value, contains minimum value 
}       
function clickQues() {           
document.querySelector('.answer').innerHTML = '';           
let index = getRandomIntInclusive(0, testObj.length);           
if(arr.length >= testObj.length) {                
console.log(arr.length);                
arr = [];           
}            
if(!arr.includes(index)) {                
arr.push(index);                
console.log(index);                
document.querySelector('.question').innerHTML = testObj[index].Q;               
showAnswer.onclick = function() {                   
document.querySelector('.answer').innerHTML = testObj[index].A;                
}            
}
else                 
clickQues();            
}        
}        
showQues.onclick = function() {           
clickQues()        
}    
