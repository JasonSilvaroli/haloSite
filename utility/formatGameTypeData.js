export const formatGameTypeData = (data) => {

    var gameTypeList = [
        { name: "Slayer", value: 0 },
        { name: "CTF", value: 0 },
        { name: "Assault", value: 0 },
        { name: "Terr", value: 0 },
        { name: "KOTH", value: 0 },
        {name: "Head", value: 0},
    ]

    data.forEach(element => {
        switch (element) {
            case "Slayer":
                gameTypeList[0].value++;
                break;
            case "Capture The Flag":
                gameTypeList[1].value++;
                break;
            case "Assault":
                gameTypeList[2].value++;
                break;
            case "Territories":
                gameTypeList[3].value++;
                break;
            case "King Of The Hill":
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