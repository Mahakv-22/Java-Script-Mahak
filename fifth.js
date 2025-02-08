let items  = [250,645,300,900,50]

let i = 0;
for(let val of items){
    console.log(`Value at intex ${i} = ${val}`);
    let offer = val / 10;
    items[i] -= offer;
    console.log(`Value at after offer at index ${i} = ${items[i]}`);
    i++;
}

console.log(items);