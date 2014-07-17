var EmailAction = require("actions/email/email")

var emailAction = new EmailAction({
    to: 'mue@zeoalliance.com',
    template: './views/email/registerConfirmation.hbs',
    subject: "Confirmation account",
    data: {
        confirmationId: 'test'
    }
});
emailAction.execute();