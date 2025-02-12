

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
