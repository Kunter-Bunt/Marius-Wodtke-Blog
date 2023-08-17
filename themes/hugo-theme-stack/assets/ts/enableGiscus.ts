class EnableGiscus {
    private localStorageKey = 'EnableGiscus';
    private currentValue: boolean;

    constructor(toggleEl: HTMLElement) {
        this.currentValue = this.getSavedValue();

        if (toggleEl){
            this.bindClick(toggleEl);
            this.setToggle();
        }
    }

    private saveValue() {
        localStorage.setItem(this.localStorageKey, this.currentValue.toString());
    }

    private bindClick(toggleEl: HTMLElement) {
        toggleEl.addEventListener('click', (e) => this.handler())
    }

    private handler() {
        this.currentValue = !this.currentValue;
        this.saveValue();
        this.setToggle();
        window.location.reload();
    }

    private setToggle() {
        var left = document.getElementById("giscus-toggle").getElementsByClassName("icon-tabler-toggle-left")[0];
        var right = document.getElementById("giscus-toggle").getElementsByClassName("icon-tabler-toggle-right")[0];
        left.style.display = this.currentValue  ? "none" : "block";
        right.style.display = this.currentValue  ? "block" : "none";
    }

    private getSavedValue(): boolean {
        const savedValue = localStorage.getItem(this.localStorageKey);
        return savedValue == "true";
    }
}

export default EnableGiscus;