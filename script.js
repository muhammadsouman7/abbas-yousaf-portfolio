(function() {
    emailjs.init("jaLnL2nv7rln2t7dg");
})();


const btn = document.getElementById('send_mail');

document.getElementById('email_form')
    .addEventListener('submit', function(event) {
        event.preventDefault();

        btn.value = 'Sending...';

        const serviceID = 'service_gbe6l53';
        const templateID = 'template_9jm6zpo';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Send Email';
                alert('Mail Sent Successfully!');
            }, (err) => {
                btn.value = 'Send Email';
                alert(JSON.stringify(err));
            });
    });