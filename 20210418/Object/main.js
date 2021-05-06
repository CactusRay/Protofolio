let personObj = new Object();
personObj.firstName = "A";
personObj.lastName = "B";
personObj.age = 50;
personObj.eyeColor = "blue";
personObj.smile = function(){
    document.write(">O<");
};

let personObj2 = {
    firstName :"A",
    lastName : "B",
    age : 50,
    eyeColor : "blue",
    smile : function(){
        document.write("@-@");
    }
};

function personProto(firstName, lastName, age, eyeColor){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;
    this.smile = function(){
        document.write("🤗🤗"); //Window+"."
    };
}

let newMan = new personProto("Sun","Ray","18","black");