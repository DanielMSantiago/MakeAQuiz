var question;
var shortOrMultiple;
var choiceOne;
var choiceTwo;
var choiceThree;
var choiceFour;




let StoreQuestions = () => {
    const questions = [];

    questions.push(question, shortOrMultiple, choiceOne, choiceTwo, choiceThree, choiceFour);
}

let GetQuestion = () => {
    question = document.forms['create-question']['Question'].value;
    shortOrMultiple = true;
    if (shortOrMultiple = true) {
        document.forms['create-question']['MultipleChoice'].value;
    } else {
        document.forms['create-question']['ShortAnswer'].value;
    }
    choiceOne = document.forms['create-question']['ChoiceOne'].value;
    choiceTwo = document.forms['create-question']['ChoiceTwo'].value;
    choiceThree = document.forms['create-question']['ChoiceThree'].value;
    choiceFour = document.forms['create-question']['ChoiceFour'].value;

    StoreQuestions();

}