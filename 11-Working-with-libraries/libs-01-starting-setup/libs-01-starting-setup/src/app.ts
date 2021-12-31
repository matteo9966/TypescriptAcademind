import { validate } from "class-validator";
import { Product } from "./classes/Product";

const newProduct = new Product("","serpentine per zanzare");
validate(newProduct).then(error=>{
    if(error){
        console.log(error);
    }
    else{
        console.log(newProduct)
    }
})
