// IIFE
(function (){
    let color = "White";
    
    function printColor(){
        console.log(color)
    }
    
    printColor()
})();

function person(age){
    let agePerson = age;

    return {
        birthday: function(){
            agePerson++;
        },
        getage: function () {
            return agePerson;
        }
    }
}

let hilder = person(29);

hilder.birthday();
hilder.birthday();
hilder.birthday();
hilder.birthday();

let ageHilder = hilder.getage();
