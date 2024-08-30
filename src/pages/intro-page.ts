export class IntroPage {

    public logo: HTMLElement;

    attached() {
        if (!this.logo) return;

        // get this components root element
        const el = document.getElementsByTagName('intro-page')[0];
        el.addEventListener('scroll', this.handleScroll);
    }

    handleScroll: (event) => void = (event) => {
        // Handle the scroll event here
        const el = document.getElementsByTagName('intro-page')[0];
        if ((el.scrollHeight - document.body.scrollHeight) === Math.ceil(el.scrollTop)) {
            // You're at the bottom of the page
            this.logo.classList.add('zoom');
        } else {
            this.logo.classList.remove('zoom');
        }
    }
}
