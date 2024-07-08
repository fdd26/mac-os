class OutsideClick {
    constructor(parentElement, isOpen, handler) {
        this.parentElement = parentElement;
        this.handler = handler
        this.isOpen = isOpen
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
        document.addEventListener('click', this.handleOutsideClick);
    }

    handleOutsideClick(event) {
        if (!this.parentElement.contains(event?.target) && this.isOpen) {
            this.handler()
            console.log('Clicked outside');
        }
    }

    destroy() {
        document.removeEventListener('click', this.handleOutsideClick);
    }
}

export default OutsideClick
