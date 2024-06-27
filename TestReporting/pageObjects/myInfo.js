var myInfoCommands = {
    updateMyInfo: function (firstName, lastName) {
        return this
        .waitForElementVisible('@firstName', 30000)
        .clearValue('@firstName')
        .getValue('@firstName', firstName)
        .waitForElementVisible('@lastName', 20000)
        .clearValue('@lastName')
        .setValue('@lastName', lastName)
        .click('@editSaveBtn')
    }
}

module.exports = {
    commands: [myInfoCommands],
    elements: {
        editSaveBtn: {
            selector: '[type="submit"]',
        },
        firstName: {
            selector: '[name="firstName"]'
        },
        lastName: {
            selector: '[name="lastName"]'
        },
        addButton: {
            selector: 'button[class="oxd-button oxd-button--medium oxd-button--secondary"]'
        },
        location: {
            selector: 'class="oxd-text oxd-text--p"]',
            index: 11
        }
    }
}