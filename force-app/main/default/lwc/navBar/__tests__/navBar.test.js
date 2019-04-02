import { createElement } from 'lwc';
import NavBar from 'c/navBar';

describe('c-nav-bar', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    
    it('search redirect show alert if search string lenght is 1 char', () => {
        
        const element = createElement('c-nav-bar', {
            is: NavBar
        });
        document.body.appendChild(element);

        return Promise.resolve().then(() => {            

            //mocking alert function
            window.alert = jest.fn();
                      
            const inputFieldEl = element.shadowRoot.querySelector('input');
            inputFieldEl.value =  'a';
            inputFieldEl.dispatchEvent(new CustomEvent('change'));

            const form = element.shadowRoot.querySelector('form');
            expect(form.action).toContain('search');
           
            form.dispatchEvent(new Event('submit'));
            
        }).then(() => {
            //the alert is fired if search string is 1 char
            expect(window.alert).toHaveBeenCalled();            
            
        });        

    });

    it('search redirect don\'t show alert if search string lenght is more than 1 char', () => {
        
        const element = createElement('c-nav-bar', {
            is: NavBar
        });
        document.body.appendChild(element);

        return Promise.resolve().then(() => {            

            //mocking alert function
            window.alert = jest.fn();
                      
            const inputFieldEl = element.shadowRoot.querySelector('input');
            inputFieldEl.value =  '12';
            inputFieldEl.dispatchEvent(new CustomEvent('change'));

            const form = element.shadowRoot.querySelector('form');
            expect(form.action).toContain('search');
           
            form.dispatchEvent(new Event('submit'));
            
        }).then(() => {
            //the alert is fired if search string is 1 char so it shouldn't have been fire for this case
            expect(window.alert).not.toHaveBeenCalled();            
            
        });        

    });

});
