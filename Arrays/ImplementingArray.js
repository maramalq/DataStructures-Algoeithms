class Array {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        // add the new item to array
        this.data[this.length] = item;
        // increment the length
        this.length++;
        // return the new length
        return this.length;
    }

    pop() {
        // grab the last item 
        const lastItem = this.data[this.length-1];
        // delete the last item in array
        delete this.data[this.length-1];
        // decrement the length
        this.length--;
        // return the deleted item
        return lastItem;
    }

    deleteAtIndex(index) {
        // grab the item with the index that we want to delete
        const item = this.data[index];
        // after grabbing the item we should delete it and shift the items 
        this.shiftItems(index);
        return item;
    }

    shiftItems(index) {
        delete this.data[index];
        // loop throw the array starting with index
        for(let i=index ; i<this.length-1 ; i++) {
            // shift the items to left
            this.data[i] = this.data[i+1];
        }
        // delete the last item and decrement the length
        delete this.data[this.length-1];
        this.length--;
        return this.data;
    }
}

const list = new Array();

list.push("hello");
list.push("hi");
list.push("welcome");
list.push("hola")
console.log("*************** Pushing data to the array ***************");
console.log(list.data);

console.log("*************** Getting data from the array ***************");
console.log(list.get(1));

console.log("*************** Delete last item in the array ***************");
list.pop();
console.log(list.data);

console.log("*************** Delete any item in the array ***************");
list.deleteAtIndex(1);
console.log(list.data);