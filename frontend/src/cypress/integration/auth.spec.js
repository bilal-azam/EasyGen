describe('Authentication', () => {
    it('should sign up a user', () => {
      cy.visit('/signup');
      cy.get('input[name="email"]').type('test@test.com');
      cy.get('input[name="password"]').type('P@ssword123');
      cy.get('input[name="name"]').type('John Doe');
      cy.get('button[type="submit"]').click();
      cy.contains('Sign In');
    });
  
    it('should log in a user', () => {
      cy.visit('/signin');
      cy.get('input[name="email"]').type('test@test.com');
      cy.get('input[name="password"]').type('P@ssword123');
      cy.get('button[type="submit"]').click();
      cy.contains('Profile');
    });
  });
  