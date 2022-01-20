
// fizzBuzz solve

function fizzBuzz(value1,value2) {
    let result='';
    for(let i=1; i<=100; i++){
        text='';
        if (i%value1===0){
            text='Fizz';
        }
        if (i%value2===0){
            text+='Buzz';
        }
        result+=(text || i)+' ';
    }
    return result;     
}

// Call and use Fizz Buzz

function buzzIt(){
    let output='';
    let val1= document.getElementById('fizzValue').value;
    let val2= document.getElementById('buzzValue').value;
    output=fizzBuzz(val1,val2);
    document.getElementById('results').innerHTML = output;
}