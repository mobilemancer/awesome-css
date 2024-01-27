export class ContainerQueries {
    public container: HTMLElement;
    public containerWidth = 0;

    attached() {
        this.observer.observe(this.container);
    }

    observer = new ResizeObserver(entries => {
        for (const entry of entries) {
            const targetElement = entry.target as HTMLElement;
            this.containerWidth = targetElement.offsetWidth;
        }
    });

}