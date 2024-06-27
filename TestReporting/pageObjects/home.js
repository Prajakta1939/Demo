var homeCommands = {
    login: function () {
        return this.navigate()
            .waitForElementVisible('@username')
            .waitForElementVisible('@password')
            .setValue('@username', 'Admin')
            .setValue('@password', 'admin123')
            .click('@loginBtn')
    }
}

module.exports = {
    url: 'https://opensource-demo.orangehrmlive.com/',
    commands: [homeCommands],
    elements: {
        username: {
            selector: '[name="username"]'
        },
        password: {
            selector: '[name="password"]',
        },
        loginBtn: {
            selector: '[class^="oxd-button"]'
        }
    }
}