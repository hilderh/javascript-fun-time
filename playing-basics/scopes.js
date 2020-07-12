// Value global
var message = "hello guys"

var printNumbersglobal = () => {
    for(var i =0; i <10; i++){
        setTimeout(()=>{
            console.log(i)
        },100);
    };
    
}

// Fixing global values on loop
var printNumbersFixVarGlobal = () => {
    for(var i =0; i <10; i++){
        function printEventually(n) {
            setTimeout(()=>{
                console.log(n)
            },100)
        }
        printEventually(i)
    };
}

// Fixing with let variable
var printNumberLetScope = ()=>{
    for(let i=0;i<10; i++){
        console.log(i)
    }
}

printNumbersglobal()
printNumbersFixVarGlobal()
printNumberLetScope() 