let jsonObj = {
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

displayDetails(jsonObj);