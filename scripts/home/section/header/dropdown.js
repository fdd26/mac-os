class Dropdown {
  constructor(parentElement, dropdownContent = null, isOpen, onStateChange) {
    this.parentElement = parentElement;
    this.dropdownContent = dropdownContent;
    this.isOpen = isOpen;
    this.onStateChange = onStateChange
    this.parentElement.addEventListener('click', this.toggleDropdown.bind(this));
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
    console.log(this.isOpen)
    this.onStateChange && this.onStateChange(this.isOpen)
    if (this.isOpen) {
      this.openDropdown();
    } else {
      this.closeDropdown();
    }
  }

  openDropdown() {
    this.parentElement.appendChild(this.dropdownContent);
  }

  closeDropdown() {
    if (this.dropdownContent && this.dropdownContent.parentNode) {
      this.dropdownContent.parentNode.removeChild(this.dropdownContent);
    }
  }

  
}

export default Dropdown