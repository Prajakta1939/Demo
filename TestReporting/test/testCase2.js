describe('Nighwatch homepage', function () {
    
    it('Should have the correct title', function(browser) {
      browser
        .navigateTo('/')
        .assert.textEquals('h1', 'Introducing Nightwatch v3')
        .end()
      ;
    })
      
    it('Should lead to the installation page on click of Get Started', function (browser) {
      browser.navigateTo('/')
      browser.element.findByText('Get Started').click()
      browser.element.findByPlaceholderText('Filter by title').waitUntil('visible')
      browser.element.find('h1').getText().assert.equals('Install Nightwatch')
      browser.assert.titleEquals('Getting Started | Developer Guide | Nightwatch.js')
      browser.assert.urlContains('nightwatchjs.org/guide/quickstarts')
      browser.element.findByPlaceholderText('Filter by title')
        .getAttribute('autocomplete').assert.equals('off')
      ;
      browser.end()
    })
  
    it('Should allow search and show correct results', function (browser) {
      browser.navigateTo('/')
      browser.element.find('#docsearch').click()
      browser.element.find('.DocSearch-Modal').waitUntil('visible')
      
      const search_input = browser.element.findByPlaceholderText('Search docs') 
      search_input.sendKeys('frame')
      browser.element.find('.DocSearch-Dropdown-Container').assert.present()
      search_input.sendKeys([browser.Keys.ARROW_DOWN, browser.Keys.ENTER])
  
      browser.element.find('h1').getText().assert.contains('.frameParent')
      browser.end()
    })
  
  })