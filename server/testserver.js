var EmailAction = require("actions/email/email")

var emailAction = new EmailAction({
    to: 'mue@zeoalliance.com',
    template: './views/email/registerConfirmation.jade',
    subject: "Confirmation account",
    data: {
        confirmationId: 'test'
    }
});
emailAction.execute();