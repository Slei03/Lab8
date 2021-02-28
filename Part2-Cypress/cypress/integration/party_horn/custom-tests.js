describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/index.html');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', ()=>{
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then(function($el){
      expect($el).to.have.value(75);
    });
  });

  it('Volume value changes when slider input changes', ()=>{
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-number').then(function($el){
      expect($el).to.have.value(33);
    });
  });

  it('Audio volume changes when slider input changes', ()=>{
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#horn-sound').then(function($el){
      expect($el).to.have.prop('volume', 0.33);
    });
  });

  it('Image and Sound src changes when Party Horn Radio Btn selected', ()=>{
    cy.get('#radio-party-horn').check();
    cy.get('#horn-sound').then(function($el){
      expect($el).to.have.attr('src', "./assets/media/audio/party-horn.mp3");
    });
    cy.get('#sound-image').then(function($el){
      expect($el).to.have.attr('src', "./assets/media/images/party-horn.svg");
    });
  });

  it('Volume image changes when increasing volume', ()=>{
    cy.get('#volume-number').clear().type('0');
    cy.get('#volume-image').then(function($el){
      expect($el).to.have.attr('src', "./assets/media/icons/volume-level-0.svg");
    });
    cy.get('#volume-number').clear().type('1');
    cy.get('#volume-image').then(function($el){
      expect($el).to.have.attr('src', "./assets/media/icons/volume-level-1.svg");
    });
    cy.get('#volume-number').clear().type('33');
    cy.get('#volume-image').then(function($el){
      expect($el).to.have.attr('src', "./assets/media/icons/volume-level-1.svg");
    });
    cy.get('#volume-number').clear().type('34');
    cy.get('#volume-image').then(function($el){
      expect($el).to.have.attr('src', "./assets/media/icons/volume-level-2.svg");
    });
    cy.get('#volume-number').clear().type('66');
    cy.get('#volume-image').then(function($el){
      expect($el).to.have.attr('src', "./assets/media/icons/volume-level-2.svg");
    });
    cy.get('#volume-number').clear().type('67');
    cy.get('#volume-image').then(function($el){
      expect($el).to.have.attr('src', "./assets/media/icons/volume-level-3.svg");
    });
  });

  it('Honk Button disabled when textbox input empty or a non-number', ()=>{
    cy.get('#volume-number').clear().type(' ');
    cy.get('#honk-btn').then(function($el){
      expect($el).to.have.prop('disabled', true);
    });
    cy.get('#volume-number').clear().type('$$$$$');
    cy.get('#honk-btn').then(function($el){
      expect($el).to.have.prop('disabled', true);
    });
  });

  it('Error shown when volume input outside given range', ()=>{
    cy.get('#volume-number').clear().type('5555');
    cy.get('#honk-btn').click();
    cy.get('#volume-number:invalid').should('have.length',1);
    cy.get('#volume-number').then(function($el){
      expect($el[0].validationMessage).to.eq("Value must be less than or equal to 100.");
    });

    cy.get('#volume-number').clear().type('-5555');
    cy.get('#honk-btn').click();
    cy.get('#volume-number:invalid').should('have.length',1);
    cy.get('#volume-number').then(function($el){
      expect($el[0].validationMessage).to.eq("Value must be greater than or equal to 0.");
    });
  });

});
