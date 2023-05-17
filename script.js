const ulElement= document.querySelector('ul')



for(let index = 0; index <= 100 ; index++){
    const li = document.createElement('li');
    li.classList.add('box')
    


    if (index % 3 === 0 && index % 5 === 0){
        console.log('FizzBuzz');
        li.innerHTML='<h3>' + 'FizzBuzz' + '</h3>'
        li.classList.add('fizzbuzz')
    
    }else if (index % 3 === 0){
        console.log('Fizz');
        li.innerHTML='<h3>' + 'Fizz' + '</h3>'
        li.classList.add('fizz')
    }
    else if (index % 5 === 0){
        console.log('Buzz');
        li.innerHTML='<h3>' + 'Buzz' + '</h3>'
        li.classList.add('buzz')
    }
    else{
        li.innerHTML='<h3>' + index + '</h3>'
        console.log(index)
    }
    ulElement.append(li)
}


