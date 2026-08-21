obj = {
    name: "John",
    city: "New York",
    func:function(){
        console.log(this.name);
    }
}

obj.func();
