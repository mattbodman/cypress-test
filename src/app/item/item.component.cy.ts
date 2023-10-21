import { ItemComponent } from './item.component';
import { MountConfig } from 'cypress/angular';

// let config: MountConfig<ItemComponent>;
// const item = 'hello world';
describe('ItemComponent', () => {
  /*  beforeEach(() => {
    config = {
      componentProperties: {
        item,
      },
    };
  });*/
  it('mounts', () => {
    cy.mount(ItemComponent);
  });
  /*  it('displays items in upper case', () => {
    cy.mount(ItemComponent, config);
    cy.get('p').should('contain.text', item.toUpperCase());
  });*/
  /*  it('displays count in [] at end of line', () => {
    cy.mount(ItemComponent, config);
    cy.get('p').should('contain.text', `${item.toUpperCase()} [11]`);
  });*/
});
