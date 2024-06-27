var dashboardCommands = {
    logout: function () {
        return this.waitForElementVisible('[class="oxd-icon bi-caret-down-fill oxd-userdropdown-icon"]')
            .click(by.linkText('[class="oxd-icon bi-caret-down-fill oxd-userdropdown-icon"]'))
            .waitForElementVisible(by.linkText('Logout', 30000))
            .click(by.linkText('Logout'))
    }
}

module.exports = {
    commands: [dashboardCommands],
    elements: {
        dashboardTab: {
            selector: 'a[href*="dashboard"]'
        },
        welcomeText: {
            selector: '#welcome',
        },
        logoutBtn: {
            selector: 'a[href*="logout"]'
        }
    }
}