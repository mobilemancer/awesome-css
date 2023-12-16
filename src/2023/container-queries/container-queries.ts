export class ContainerQueries {
    public containerWidth = 0;

    public resize = () => {
        const positionInfo = document.querySelector(".card-container")?.getBoundingClientRect();
        const width = positionInfo?.width;
        this.containerWidth = Math.floor(width);
    }

    attached() {
        window.addEventListener("resize", this.resize);
        this.resize();
    }

}