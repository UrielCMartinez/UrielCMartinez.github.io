(function(){
    const titleQuestion=[...document.querySelectorAll('.question-title')];
    
    titleQuestion.forEach(question =>{
       question.addEventListener('click', ()=>{
        let height = 0;
        let answer = question.nextElementSibling;
        let addPadding = question.parentElement.parentElement;

        addPadding.classList.toggle('question-padding--add');
        question.children[0].classList.toggle('question-arrow--rotate');

        if(answer.clientHeight===0){
            height=answer.scrollHeight;
        }
        answer.style.height= `${height}px`;

       }); 
    });

    
})();