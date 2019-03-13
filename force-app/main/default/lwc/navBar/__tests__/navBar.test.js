import { createElement } from 'lwc';
import NavBar from 'c/navBar';

describe('c-nav-bar', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('contains the right title', () => {
        const expected = 'IdeaExchange';

        const element = createElement('c-nav-bar', {
            is: NavBar
        });
        document.body.appendChild(element);

        //verify the title
        
        const card = element.shadowRoot.querySelector('lightning-card');
        expect(card.title).toBe(expected);
    });
});