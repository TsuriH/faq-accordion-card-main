
const elements = document.getElementsByClassName('answer')



function showContent(img) {

    for(element of elements) {
       /*  element.classList.remove('show-answer') why it doesnt work
        element.classList.remove('chosen-question')
        element.classList.remove('invert-arrow')*/ 
    }

    document.getElementsByClassName('answer')

    let arrowNumber = img.id
    switch (arrowNumber){
        case 'arrow1':
            document.getElementById('answer1').classList.toggle('show-answer');
            document.getElementById('question1').classList.toggle('chosen-question');
            document.getElementById('arrow1').classList.toggle('invert-arrow');
            break;
        case 'arrow2':
            document.getElementById('answer2').classList.toggle('show-answer');
            document.getElementById('question2').classList.toggle('chosen-question');
            document.getElementById('arrow2').classList.toggle('invert-arrow');
            break;
        case 'arrow3':
            document.getElementById('answer3').classList.toggle('show-answer');
            document.getElementById('question3').classList.toggle('chosen-question');
            document.getElementById('arrow3').classList.toggle('invert-arrow');
            break;
        case 'arrow4':
            document.getElementById('answer4').classList.toggle('show-answer');
            document.getElementById('question4').classList.toggle('chosen-question');
            document.getElementById('arrow4').classList.toggle('invert-arrow');
            break;   
        case 'arrow5':
            document.getElementById('answer5').classList.toggle('show-answer');
            document.getElementById('question5').classList.toggle('chosen-question');
            document.getElementById('arrow5').classList.toggle('invert-arrow');
            break;   

    }
}