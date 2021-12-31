function methoddescriptor(target:any,name:string,descriptor:PropertyDescriptor){
    console.log("TARGET",target)
    console.log("NAME",name)
    console.log("DESCRIPTOR",descriptor)

}

class User {
    @methoddescriptor
    sayHello(){
        console.log("Hello guys")
    }
}