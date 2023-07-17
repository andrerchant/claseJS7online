export class mockServer {
    ls = window.localStorage;

    saveData(itemName, value) {
        this.ls.setItem(itemName, value);
        console.log(itemName + ' saved');
    }

    getData(itemName) {
        return this.ls.getItem(itemName);
    }

    deleteData(itemName) {
        this.ls.removeItem(itemName);
        console.warn(itemName + ' was deleted');
    }
}