function generateError(error:string,code:number):never {

    throw {messag:error,code:code};
    
} 

let dog = "canarino";