function solution(price) {
    if(price >= 500000){ 
        return Math.floor(price * 0.80);
    } else if(price >= 300000){ 
        return Math.floor(price * 0.90);
    } else if(price >= 100000){
        return Math.floor(price * 0.95);
    } else {
        return price;
    }
}

/*function solution(price) {
    if(price >= 100000 && price < 300000){
        return price * 0.95;
    } else if(price >= 300000 && price < 500000){
        return price * 0.90;
    } else {
        return price * 0.80;
    }
}*/

/*
price > 10만원 -> price * 0.95 = result 
price > 30만원 -> price * 0.90 = result
price > 50만원 -> price * 0.80 = result
*/