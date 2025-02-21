

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