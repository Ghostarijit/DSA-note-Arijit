const random_no = (bound) =>{
    const result = Math.floor(Math.random()*4)
    if(result > 0 && result<= bound){
    return result;
    }
    return random_no(bound);
    }

let res = random_no(4)
console.log(res)


var a="world"

function abc() {

var a = "hello";

return function xyz() {

console.log(this.a);

}

}

  abc();
  var myObject = {
    foo: "bar",
    func: function() {
    var self = this;
    console.log("outer func: this.foo = " + this.foo);
    console.log("outer func: self.foo = " + self.foo);
    (function() {
    console.log("inner func: this.foo = " + this.foo);
    console.log("inner func: self.foo = " + self.foo);
    }());
    }
    };
    myObject.func();

    (function(){
        var a = b = 3;
       
        })();
        
        console.log("a defined? " + (typeof a));
        console.log("b defined? " + (typeof b ));
   let interval = setInterval(()=>{
         let i=0
          i +=2
          console.log(i)
       },1000)

       console.log(interval)
