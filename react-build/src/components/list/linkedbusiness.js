

class Stack {  //LINK LIST CLASS

    constructor() {
        this.current = null;
        this.count = 0;
    }

    get() {
        return this.current;
    }

    //use code from https://www.geeksforgeeks.org/implementation-linkedlist-javascript/    use add(element code)
    insert(type, diameter, heatLevel) {
        this.count++;
        const id = 'p' + this.count;
        const cake = new Pancake(id, type, diameter, heatLevel);  //var node = new Node(element); 
        // let currentNodeX
        if (this.current) {

            cake.nextCake = this.current.nextCake;
            this.current.nextCake = cake;
            cake.nextCake.prevCake = cake;
            cake.prevCake = this.current;

            this.current = cake;
        } else {
            cake.nextCake = cake;
            cake.prevCake = cake;
            this.current = cake;
        }
        return id;
    }
    delete() {
        if (this.current) {
            if(this.current===this.current.nextCake){
                this.current=null
                console.log("first case")
                return 0
            }
            console.log("second case")
            this.current.nextCake.prevCake=this.current.prevCake
            this.current.prevCake.nextCake=this.current.nextCake
            this.current = this.current.prevCake;

        } else {
            return 0
        }
        
    }
    next() {
        if (this.current) {
            this.current = this.current.nextCake;
        }
        return this.current;
    }
    prev() {
        if (this.current) {
            this.current = this.current.prevCake;
        }
        return this.current;
    }
    // total of all nodes
    totalNodes() {// determine total inches of all pancakes laid side to side

        if (!this.current) {
            return "No Pancakes Yet";
        }

        let total = 0
        const startid = this.current.id;
        while (this.current.nextCake.id !== startid) {

            total = total + this.current.diameter

            this.next();
        }
        total = total + this.current.diameter
        this.next()
        return total + " total inches of diameter"

    }
    // 
    firstNode() {//determine first node of stack
        this.find("p1");
        return this.get()
    }

    lastNode() {//determine last node of stack
        const idlast = 'p' + this.count;
        this.find(idlast);
        return this.get()
    }

    find(id) {
        if (!this.current) {
            return false;
        }
        const startid = this.current.id;
        // console.log(this.current.id);

        while (this.current.id !== id) {
            this.next();
            // console.log(this.current.id);
            // we didn't find it
            if (startid === this.current.id) {
                return false;
            }
        }
        return true;
    }
}

class Pancake {   //NODE CLASS
    constructor(id, type, diameter, heatLevel) {
        this.id = id;
        this.type = type;
        this.diameter = diameter;
        this.heatLevel = heatLevel;
    }
}







export default { Pancake, Stack };