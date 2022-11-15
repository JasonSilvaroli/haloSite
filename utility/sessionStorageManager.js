export const setLocalStats = (parsedStats, username) => {

    window.sessionStorage.setItem(
        "smallUserStats" + username,
        JSON.stringify(parsedStats.small)
    );

    window.sessionStorage.setItem(
        "largeUserStats" + username,
        JSON.stringify(parsedStats.large)
    );

    window.sessionStorage.setItem(
        "xpUserStats" + username,
        JSON.stringify(parsedStats.xp)
    );

    window.sessionStorage.setItem(
        "ranksUserStats" + username,
        JSON.stringify(parsedStats.ranks)
    );

    window.sessionStorage.setItem(
        "campaignUserStats" + username,
        JSON.stringify(parsedStats.campaign)
    );

    window.sessionStorage.setItem(
        "apperanceUserStats" + username,
        JSON.stringify(parsedStats.apperance)
    );

    window.sessionStorage.setItem(
        "updateTime" + username,
        String(Date.now())
    );

}

export const getLocalStats = (username) => {

    var returnStats = {}

    returnStats.small = JSON.parse(window.sessionStorage.getItem(
        "smallUserStats" + username
    ));

    returnStats.large = JSON.parse(window.sessionStorage.getItem(
        "largeUserStats" + username
    ));

    returnStats.xp = JSON.parse(window.sessionStorage.getItem(
        "xpUserStats" + username
    ));

    returnStats.ranks = JSON.parse(window.sessionStorage.getItem(
        "ranksUserStats" + username
    ));

    returnStats.campaign = JSON.parse(window.sessionStorage.getItem(
        "campaignUserStats" + username
    ));

    returnStats.apperance = JSON.parse(window.sessionStorage.getItem(
        "apperanceUserStats" + username
    ));

    return returnStats;

}

export const setLocalGames = (parsedGames, username) => {

    window.sessionStorage.setItem("gameList" + username, JSON.stringify(parsedGames));

}

export const getLocalGames = (username) => {

    return JSON.parse(window.sessionStorage.getItem("gameList" + username));

}