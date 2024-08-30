export class MyApp {
    public showingPresenterSlide = false;
    attached() {
        window.addEventListener('keypress', (e) => {
            if (e.key === ' ') {
                // hides the presenter slide
                this.showingPresenterSlide = false;
            }
        });
    }
}
