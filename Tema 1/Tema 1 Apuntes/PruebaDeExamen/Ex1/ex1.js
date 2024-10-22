/*let jsonObj = {
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2020,
    "secretBase": "Super tower",
    "active": true,
    "members":[
        {
            "name": "Molecule Man",
            "age": 29,
            "SecretIdentity": "Dan Jukes",
            "powers": [
                "Radiation resistance",
                "turning tiny",
                "Radiation blast"
            ]
        },
        {
            "name": "Madame Uppercut",
            "age": 39,
            "SecretIdentity": "Jane Wilson",
            "powers": [
                "Million tone punch",
                "Damage resistance",
                "Superhuman reflexes"
            ]
        },
        {
            "name": "Eternal Flame",
            "age": 1000000,
            "SecretIdentity": "Unknown",
            "powers": [
                "Inmortality",
                "Heat Inmunity",
                "Inferno",
                "Teleportation",
                "Interdimensional travel"
            ]
        }
    ]
};

function displayDetails(jsonObj) {
    console.log("------------------SUPER HERO SQUAD------------------");
    console.log(`Ciudad de origen: ${jsonObj.homeTown} // Fecha origen: ${jsonObj.formed}`);
    console.log("---------------------------------------------------");

    jsonObj.members.forEach(member => {
        console.log(`Nombre: ${member.name}`);
        console.log(`Edad: ${member.age}`);
        console.log(`Identidad secreta: ${member.SecretIdentity}`);
        console.log(`Poderes: ${member.powers.join(", ")}`);
        console.log("---------------------------------------------------");
    });
}

displayDetails(jsonObj);*/

let jsonObj = {
    squadName: "Super Hero Squad",
    homeTown: "Metro City",
    formed: 2020,
    secretBase: "Super Tower",
    active: true,
    members: [
        {
            name: "Molecule Man",
            age: 29,
            secretIdentity: "Dan Jukes",
            powers:[
                "Tadiation resistance", 
                "Turning Tiny",
                "Radiation Blast"
            ]
        },
        {
            name: "Mqdame Uppercut",
            age: 39,
            secretIdentity: "Jane Wilson",
            powers:[
                "Million tonne punch", 
                "Damage resistance",
                "Superhuman reflexes"
            ]  
        },
        {
            name: "Eternal Flame",
            age: 1000000,
            secretIdentity: "Unknown",
            powers:[
                "Immortality", 
                "Heat Immunity",
                "Inferno",
                "Teletransportation",
                "Interdimesional travel"
            ]
        }
    ]

}

console.log(jsonObj.squadName + "\n" + "ciudad de origen: " + jsonObj.homeTown + " // " + "Fecha Origen " + jsonObj.formed + "\n" + 
    "------------------------------------------------------------------------------------");
for (let i=0; i<jsonObj.members.length; i++){
    console.log("Nombre: " + jsonObj.members[i].name + "\n" + 
                "Edad: " + jsonObj.members[i].age + "\n" + 
                "Identidad Secreta: " + jsonObj.members[i].secretIdentity + "\n" + 
                "Poderes: " + jsonObj.members[i].powers.join(', ') + "\n" + 
                "------------------------------------------------------------------------------------")
}