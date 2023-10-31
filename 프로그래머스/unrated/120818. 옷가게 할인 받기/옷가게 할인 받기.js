function solution(price) {
    let answer = price >= 500000 ? price * 0.80 : price >= 300000 ? price * 0.90 : price >= 100000 ? price * 0.95 : price
    return Math.floor(answer)
}

/*function solution(price) {
    if(price >= 500000){ 
        return Math.floor(price * 0.80);
    } else if(price >= 300000){ 
        return Math.floor(price * 0.90);
    } else if(price >= 100000){
        return Math.floor(price * 0.95);
    } else {
        return price;
    }
}*/

/*
price > 10만원 -> price * 0.95 = result 
price > 30만원 -> price * 0.90 = result
price > 50만원 -> price * 0.80 = result
*/