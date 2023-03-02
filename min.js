const data = new WeakMap();

class Bus{
    constructor(seats){
        data.set(this,{capacity:seats});
    }
    get No_of_Seats(){
        return data.get(this).capacity;
    }
    set No_of_Seats(value){
        return data.get(this).capacity =value;
    }
}
const YY = new Bus(66);

console.log(YY.capacity);
console.log(YY.No_of_Seats);