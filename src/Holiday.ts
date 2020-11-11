export class Holiday {
    sayHello() {
        const today = this.getToday();
        if (today.getMonth() === 11 && today.getDate() === 25) {
            return 'Merry Xmas'
        }

        return 'Today is not Xmas'
    }

    protected getToday() {
        return new Date();
    }
}
