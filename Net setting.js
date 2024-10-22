const correctPassword = 'CHEMSYSU';
const submitButton = document.getElementById('submit');
const passwordInput = document.getElementById('password');
const messageDiv = document.getElementById('message');

submitButton.addEventListener('click', () => {
    const inputPassword = passwordInput.value;
    if (inputPassword === correctPassword) {
        window.location.href = 'https://ce.sysu.edu.cn/zh-hans/teacher/798'; 
    } else {
        messageDiv.textContent = '密码错误，请重试。';
        messageDiv.style.color = 'red';
    }
});
