import { ItemListComponent } from './item-list.component';
import { createOutputSpy } from 'cypress/angular';
import { ItemComponent } from '../item/item.component';

describe('ItemListComponent', () => {
    const mockResponseData = ['orange', 'apple', 'banana', 'lemon', 'watermelon'];
  beforeEach(() => {
    cy.intercept(/.*/, {
      statusCode: 200,
      body: mockResponseData,
    });
  });
  it('mounts', () => {
    cy.mount(ItemListComponent);
  });
    it('displays each given item in a list', () => {
    cy.mount(ItemListComponent);
    cy.get('li').should('have.length', 5);
  });
    it('sorts ascending', () => {
    cy.mount(ItemListComponent);
    cy.get('[data-cy=li_0]').should(
      'contain.text',
      mockResponseData[1].toUpperCase(),
    );
  });
    it('emits item when clicked', () => {
    cy.mount(ItemListComponent, {
      componentProperties: {
        itemClicked: createOutputSpy('itemClickedSpy'),
      },
    });
    cy.get('li').first().click();
    cy.get('@itemClickedSpy').should(
      'have.been.calledOnceWithExactly',
      mockResponseData[1],
    );
  });
});
