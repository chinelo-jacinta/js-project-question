// // traversing the dom
// const btns = document.querySelectorAll('.question-btn');
// btns.forEach(function (btn) {
//   btn.addEventListener('click', function (e) {
//     const question = e.currentTarget.parentElement.parentElement;
//     // console.log(question);
//     question.classList.toggle('show-text');
//   });
// });

// //using selectors inside the element
const questions = document.querySelectorAll('.question');
questions.forEach(function (ques) {
  const btn = ques.querySelector('.question-btn');
  btn.addEventListener('click', function () {
    questions.forEach(function (item) {
      // console.log(item);
      console.log(ques);

      if (ques !== item) {
        item.classList.remove('show-text');
      }
      // console.log(item); // all articles
      // console.log(ques); // the one you clicked on
      // that means if the article does not match the one im clickig, remove the show text from the article
    });
    ques.classList.toggle('show-text');
  });
});
