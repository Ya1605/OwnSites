

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Зупиняє стандартну поведінку форми

    // Відправка заявки тобі
    emailjs.sendForm('service_7q71vy3', 'template_j1hxkvh', this)
        .then(function(response) {
            console.log('Заявка надіслана тобі!', response);
            document.getElementById('contact-form').reset();
        }, function(error) {
            alert('Сталася помилка при відправці тобі: ' + JSON.stringify(error));
        });

    // Відправка підтвердження користувачу

    emailjs.sendForm("service_7q71vy3","template_nvyhw2c", this)
        .then(function() {
            console.log('Підтвердження надіслано користувачу!', response);
            document.getElementById('contact-form').reset();
        }, function(error) {
            alert('Сталася помилка при відправці підтвердження: ' + JSON.stringify(error));
        });
});


document.getElementById("contact-form").addEventListener("submit",
    function (event) {
        event.preventDefault(); // Запобігає відправці форми

        const phoneInput = document.getElementById("phone").value;
        const regex = /^(\+?\d{1,2}\s?)?(\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}$/; // Регулярка для номера

        const errorMessage = document.getElementById("error-message");
        const submitBtn = document.getElementById("numSubmit");

        if (regex.test(phoneInput)) {
            errorMessage.textContent = ""; // Очищає повідомлення про помилку
            submitBtn.textContent = "✓"; // Змінює текст кнопки на галочку
            submitBtn.style.backgroundColor = "green"; // Змінює колір кнопки
            alert("Номер телефону дійсний!"); // Додайте дії при успішній перевірці
        } else {
            errorMessage.textContent = "Будь ласка, введіть дійсний номер телефону."; // Повідомлення про помилку
            submitBtn.textContent = "Відправити"; // Повертає текст кнопки при помилці
            submitBtn.style.backgroundColor = ""; // Повертає початковий колір кнопки
        }
    });

const staticText = "Hello,my name is Yuliia -"
const words = ["i'm front-end developer", " i'm HTML developer", "i'm markup developer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 150;
const deletingSpeed = 100;
const pauseTime = 1000;

function typeEffect() {
    const typingElement = document.querySelector(".text");
    const currentWord = words[wordIndex];

    if (!isDeleting){
         charIndex++;
    }else {
        charIndex--;
    }

    typingElement.textContent = staticText + currentWord.slice(0, charIndex);
    let nextSpeed = isDeleting ? deletingSpeed : typingSpeed;

    if(charIndex === currentWord.length +1){
        isDeleting= true;
        nextSpeed = pauseTime;

    }
    else if (charIndex === 0 && isDeleting){
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect,nextSpeed );
}

typeEffect();






