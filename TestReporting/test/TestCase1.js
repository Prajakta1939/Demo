module.exports = {
    before: function (browser) {
        //Declaring Global Timeout
        browser
            .globals.waitForConditionTimeout = 50000
    },

    'Login': function (browser) {
        var home = browser.page.home()
        home
            .login()
            .assert.urlContains('/index.php/dashboard')
    },

    'Admin Settings': function (browser) {
        var myInfo = browser.page.myInfo()
        myInfo
        .waitForElementVisible(by.linkText('Admin', 20000))
        .click(by.linkText('Admin'))
        .waitForElementVisible('@addButton', 30000)
        .click('@addButton')
        .waitForElementVisible('[placeholder="Type for hints..."]', 30000)
        .setValue('[placeholder="Type for hints..."]', 'Peter'); 
      },

    'Checking PIM': function (browser) {
        var myInfo = browser.page.myInfo()
        myInfo
        .waitForElementVisible(by.linkText('My Info', 20000))
        .click(by.linkText('My Info'));
       
    },
    'Checking Leave Info': function (browser) {
        var myInfo = browser.page.myInfo()
        myInfo
        .waitForElementVisible(by.linkText('Leave', 20000))
        .click(by.linkText('Leave'));
       
    },
    'Checking time Info': function (browser) {
        var myInfo = browser.page.myInfo()
        myInfo
        .waitForElementVisible(by.linkText('Time', 20000))
        .click(by.linkText('Time'));
       
    },
    'Check Recruitment Info': function (browser) {
        var myInfo = browser.page.myInfo()
        myInfo
        .waitForElementVisible(by.linkText('Recruitment', 20000))
        .click(by.linkText('Recruitment'));
       
    },
    'Check My Info': function (browser) {
        var myInfo = browser.page.myInfo()
        myInfo
        .waitForElementVisible(by.linkText('My Info', 20000))
        .click(by.linkText('My Info'));
       
    },
    'Check Performance Info': function (browser) {
        var myInfo = browser.page.myInfo()
        myInfo
        .waitForElementVisible(by.linkText('Performance', 20000))
        .click(by.linkText('Performance'));
       
    },

    'Dashboard Info': function (browser) {
        var myInfo = browser.page.myInfo()
        myInfo
        .waitForElementVisible(by.linkText('Dashboard', 20000))
        .click(by.linkText('Dashboard'))
         .waitForElementVisible('[class="oxd-topbar-header-breadcrumb"]', 3000)
       
    },

    'Check Directory Info': function (browser) {
        var myInfo = browser.page.myInfo()
        myInfo
        .waitForElementVisible(by.linkText('Directory', 20000))
        .click(by.linkText('Directory'))
        .setValue('[placeholder="Type for hints..."]', 'Author')
       
    },

    'Logout': function (browser) {
        var dashboard = browser.page.dashboard()
        dashboard
            .logout()
            .assert.urlContains('/index.php/auth/login')
    },
   
    after: function (browser) {
        browser.end();
    }
}