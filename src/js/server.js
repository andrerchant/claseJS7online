const MOCKED_SERVER_TIME = 15_000;

export class mockServer {
    ls = window.localStorage;

    saveData(itemName, value) {
        this.ls.setItem(itemName, value);
        console.log(itemName + ' saved');
        return later('success');
    }

    getData(itemName) {
        const item = this.ls.getItem(itemName);
        return later(item);
    }

    deleteData(itemName) {
        this.ls.removeItem(itemName);
        console.warn(itemName + ' was deleted');
        return later('success');
    }
}

const later = (data, delay = MOCKED_SERVER_TIME) =>
    new Promise((resolve)=>{
        setTimeout(()=> resolve(data), delay)
    });