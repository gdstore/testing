const signInBtn = document.querySelector('.signin-btn');
const signUpBtn = document.querySelector('.signup-btn');
const formBox = document.querySelector('.form-box');
const article = document.article;

signUpBtn.addEventListener('click', function() {
	formBox.classList.add('active');
	article.classList.add('active');
});

signInBtn.addEventListener('click', function() {
	formBox.classList.remove('active');
	article.classList.remove('active');
});