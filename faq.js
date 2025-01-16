const questions = document.querySelectorAll('.q1, .q2, .q3');
const answers = document.querySelectorAll('.answer1, .answer2, .answer3');
answers.forEach((answer) => {
    answer.style.display = 'none';
})
questions.forEach((question, index) => {
    question.addEventListener('click', () => {
        if (answers[index].style.display === 'none') {
            answers[index].style.display = 'block';
        } else {
            answers[index].style.display = 'none';
        }
    });
})

