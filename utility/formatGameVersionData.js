export const formatGameVersionData = (data) => {

    var gameTypeList = [
        { name: "Halo: CE", value: 0 },
        { name: "Halo 2", value: 0 },
        { name: "Halo 2A", value: 0 },
        { name: "Halo 3", value: 0 },
        { name: "Halo: Reach", value: 0 },
        {name: "Halo 4", value: 0},
    ]

    data.forEach(element => {
        switch (element) {
            case "Halo: CE":
                gameTypeList[0].value++;
                break;
            case "Halo 2":
                gameTypeList[1].value++;
                break;
            case "Halo 2: Anniversary":
                gameTypeList[2].value++;
                break;
            case "Halo 3":
                gameTypeList[3].value++;
                break;
            case "Halo: Reach":
                gameTypeList[4].value++;
                break;
            default:
                gameTypeList[5].value++;
        }
    });

    var returnList = []

    gameTypeList.forEach(element => {

        if (element.value !== 0) {

            returnList.push(element)

        }

    })

    return returnList;
    
}