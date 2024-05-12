export class MyApp {
    public showingPresenterSlide = true;
    attached() {
        window.addEventListener('keypress', (e) => {
            if (e.key === ' ') {
                // hides the presenter slide
                this.showingPresenterSlide = false;
            }
        });
    }
}
