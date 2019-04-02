import { LightningElement, wire, track } from 'lwc';

export default class NavBar extends LightningElement {

    @track searchKeyword = '';

    validateSearch(event){        
        if(this.searchKeyword.length <= 1){
            event.preventDefault();
            // eslint-disable-next-line no-alert
            alert('Hello World');
            return false;
        }
        return true;        
    } 

    handleKeyChange(event) {
        this.searchKeyword = event.target.value;
    }
}
