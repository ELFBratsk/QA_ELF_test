context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://horo.mail.ru/horoscope/personal/year/')
  })

  // testing email https://horo.mail.ru/horoscope/personal/year/
 
  it('.type() - ввод email и удаление пробуем', () => {
    cy.get('input._756dee3138')
    .type('fake@email.com').should('have.value', 'fake@email.com') // нормальный email
    .type('{selectall}{backspace}').should('have.value', '')
    
    cy.get('input._756dee3138')
    .type('FAKE@EMAIL.COM').should('have.value', 'FAKE@EMAIL.COM') // верхний регистр email
    .type('{selectall}{backspace}').should('have.value', '')
    
    cy.get('input._756dee3138')
    .type('123@email.com').should('have.value', '123@email.com') // цифры в email
    .type('{selectall}{backspace}').should('have.value', '')
  
  }) 
  it('.button() - Данный email не соответствует формату', () => {
    cy.get('button._57928466cb').click()
    cy.get('.a847f0780f').should('have.text','Данный email не соответствует формату') // пустой email
    
    cy.get('input._756dee3138')
    .type('123email.com').should('have.value', '123email.com') // Отсутствие @ в email
    cy.get('button._57928466cb').click()
    cy.get('.a847f0780f').should('have.text','Данный email не соответствует формату')
    cy.get('input._756dee3138')
    .type('{selectall}{backspace}').should('have.value', '')
    
    cy.get('input._756dee3138')
    .type('vit@thelongestdomainnameintheworldandthensomeandthensomemoreandmorecom').should('have.value', 'vit@thelongestdomainnameintheworldandthensomeandthensomemoreandmorecom') // Email без точек в доменной части
    cy.get('button._57928466cb').click()
    cy.get('.a847f0780f').should('have.text','Данный email не соответствует формату')
    cy.get('input._756dee3138')
    .type('{selectall}{backspace}').should('have.value', '')

    cy.get('input._756dee3138')
    .type('vit 123@email.com').should('have.value', 'vit 123@email.com') // Email с пробелами в имени аккаунта
    cy.get('button._57928466cb').click()
    cy.get('.a847f0780f').should('have.text','Данный email не соответствует формату')
    cy.get('input._756dee3138')
    .type('{selectall}{backspace}').should('have.value', '')
    
    cy.get('input._756dee3138')
    .type('vit123@email com').should('have.value', 'vit123@email com') // Email с пробелами в доменной части
    cy.get('button._57928466cb').click()
    cy.get('.a847f0780f').should('have.text','Данный email не соответствует формату')
    cy.get('input._756dee3138')
    .type('{selectall}{backspace}').should('have.value', '')

    cy.get('input._756dee3138')
    .type('vit123@').should('have.value', 'vit123@') // Email без доменной части
    cy.get('button._57928466cb').click()
    cy.get('.a847f0780f').should('have.text','Данный email не соответствует формату')
    cy.get('input._756dee3138')
    .type('{selectall}{backspace}').should('have.value', '')
    
    cy.get('input._756dee3138')
    .type('vit123@email.c').should('have.value', 'vit123@email.c') // Некорректный домен первого уровня (допустимо 2-63 букв после точки: .ru или например .americanexpress)
    cy.get('button._57928466cb').click()
    cy.get('.a847f0780f').should('have.text','Данный email не соответствует формату')
    cy.get('input._756dee3138')
    .type('{selectall}{backspace}').should('have.value', '')

  }) 
  it('.type() - email отправляем на подписку', () => { // в случае что на данные email уже есть подписка
    cy.get('input._756dee3138')
    .type('fake@email.fake').should('have.value', 'fake@email.fake') // нормальный email
    cy.get('button._57928466cb').click()
    cy.get('._638eadd81a').should('have.text','Уже есть подписка')
  }) 
})

