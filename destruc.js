function first(){
    ({ name, password } = { name: "masai", password: "admin@123", hostname: "masaischool", client: "chrome" })
 console.log("a", name);
 console.log("b", password) 
 }  
 
function sec() {
    var obj = {
        name: 'masai', address: { pincode: 560095 }
    };

    const { address } = obj
        //   const { pincode } = address;
        // //   console.log(pincode)
        //   const { address: { pincode } } = {name: 'masai', address: { pincode: 560095 }};
  
        const {pincode:pin}=obj.address
    console.log(pin)
    console.log(address) 
//  address["pin"]=address["pincode"];
//  delete address["pincode"] ;
//  console.log(address) 
}   

function third() {
    [a, b] = [100, 200, 500, 600];
    console.log(a);
    console.log(b)
}

function fourth() {
    let c,rest;
    [a, b] = [100, [50, 60, 70]];
    [c,...rest] = b;
    console.log("c",c)
}

function fifth() {
    [a,b]=[  1, {  
        arr: [ 1, 2, 3 ]
      }
    ] 
    var obj = b;
    const { arr } = obj;
    const [c,...rest]=arr
    console.log(rest)
}

first();
sec();
third();
fourth()
fifth()







    