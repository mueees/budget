var EmailAction = require("actions/email/email")

var emailAction = new EmailAction({
    to: 'mue.miv@gmail.com',
    template: './views/email/registerConfirmation.jade',
    subject: "Confirmation account",
    data: {
        confirmationId: 'test'
    }
});
emailAction.execute();