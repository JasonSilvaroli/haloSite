export const parseCareerStats = (stats, apperance) => {

    return {
        small: {
            kills: { name: "Kills", data: stats.data.multiplayer.core.summary.kills },
            deaths: { name: "Deaths", data: stats.data.multiplayer.core.summary.deaths },
            assists: { name: "Assists", data: stats.data.multiplayer.core.summary.assists },
            wins: { name: "Wins", data: stats.data.multiplayer.core.breakdowns.matches.wins },
            losses: { name: "Losses", data: stats.data.multiplayer.core.breakdowns.matches.losses },
            matchesPlayed: { name: "Total", data: stats.data.multiplayer.core.matches_played }
        },
        large: {
            winRate: { name: "Win Rate", data: (stats.data.multiplayer.core.win_rate).toFixed() + "%" },
            kdRatio: { name: "KD Ratio", data: (stats.data.multiplayer.core.kdr).toFixed(2) },
        },
        xp: {
            total: { name: "Total XP", data: stats.data.multiplayer.progression.xp.total },
            remaining: { name: "Remaining XP", data: stats.data.multiplayer.progression.xp.remaining },
            title: { name: "Title", data: stats.data.multiplayer.progression.xp.rank.title },
            tour: { name: "Tour", data: stats.data.multiplayer.progression.xp.rank.tour },
            tier: { name: "Tier", data: stats.data.multiplayer.progression.xp.rank.tier },
            threshold: { name: "Threshold", data: stats.data.multiplayer.progression.xp.rank.threshold },
            rankImageUrl: { name: "Rank URL", data: stats.data.multiplayer.progression.xp.rank.image_url }
        },
        ranks: [
            {
                xbox: [
                    {
                        name: "Halo 3 Ranked Slayer",
                        rank: stats.data.multiplayer.progression.ranks[0].playlists[0].rank,
                        rankImage: stats.data.multiplayer.progression.ranks[0].playlists[0].image_url,
                    },
                    {
                        name: "H4 Squad Battle",
                        rank: stats.data.multiplayer.progression.ranks[0].playlists[1].rank,
                        rankImage: stats.data.multiplayer.progression.ranks[0].playlists[1].image_url,
                    },
                    {
                        name: "Halo Reach Invasion",
                        rank: stats.data.multiplayer.progression.ranks[0].playlists[2].rank,
                        rankImage: stats.data.multiplayer.progression.ranks[0].playlists[2].image_url,
                    },
                    {
                        name: "Halo 2A Hardcore",
                        rank: stats.data.multiplayer.progression.ranks[0].playlists[3].rank,
                        rankImage: stats.data.multiplayer.progression.ranks[0].playlists[3].image_url,
                    },
                    {
                        name: "Halo 3 Hardcore",
                        rank: stats.data.multiplayer.progression.ranks[0].playlists[4].rank,
                        rankImage: stats.data.multiplayer.progression.ranks[0].playlists[4].image_url,
                    },
                    {
                        name: "Halo 3 Team Doubles",
                        rank: stats.data.multiplayer.progression.ranks[0].playlists[5].rank,
                        rankImage: stats.data.multiplayer.progression.ranks[0].playlists[5].image_url,
                    },
                    {
                        name: "Halo CE Doubles",
                        rank: stats.data.multiplayer.progression.ranks[0].playlists[6].rank,
                        rankImage: stats.data.multiplayer.progression.ranks[0].playlists[6].image_url,
                    },                    
                ]
            },
            {
                pc: [
                    {
                        name: "Halo 3 Ranked Slayer",
                        rank: stats.data.multiplayer.progression.ranks[1].playlists[0].rank,
                        rankImage: stats.data.multiplayer.progression.ranks[1].playlists[0].image_url,
                    },
                    {
                        name: "H4 Squad Battle",
                        rank: stats.data.multiplayer.progression.ranks[1].playlists[1].rank,
                        rankImage: stats.data.multiplayer.progression.ranks[1].playlists[1].image_url,
                    },
                    {
                        name: "Halo Reach Invasion",
                        rank: stats.data.multiplayer.progression.ranks[1].playlists[2].rank,
                        rankImage: stats.data.multiplayer.progression.ranks[1].playlists[2].image_url,
                    },
                    {
                        name: "Halo 2A Hardcore",
                        rank: stats.data.multiplayer.progression.ranks[1].playlists[3].rank,
                        rankImage: stats.data.multiplayer.progression.ranks[1].playlists[3].image_url,
                    },
                    {
                        name: "Halo 3 Hardcore",
                        rank: stats.data.multiplayer.progression.ranks[1].playlists[4].rank,
                        rankImage: stats.data.multiplayer.progression.ranks[1].playlists[4].image_url,
                    },
                    {
                        name: "Halo 3 Team Doubles",
                        rank: stats.data.multiplayer.progression.ranks[1].playlists[5].rank,
                        rankImage: stats.data.multiplayer.progression.ranks[1].playlists[5].image_url,
                    },
                    {
                        name: "Halo CE Doubles",
                        rank: stats.data.multiplayer.progression.ranks[1].playlists[6].rank,
                        rankImage: stats.data.multiplayer.progression.ranks[1].playlists[6].image_url,
                    },                    
                ]
            }
        ],
        campaign: {
            kills: { name: "Kills", data: stats.data.campaign.core.summary.kills },
            deaths: {name: "Deaths", data: stats.data.campaign.core.summary.deaths},
            missionsCompleted: {name: "Missions Completed", data: stats.data.campaign.core.missions_completed},
        },
        apperance: {
            clanTag: apperance.data.clan_tag,
            gamertag: apperance.additional.gamertag,
            avatarUrl: apperance.data.avatar_url,
            emblemUrl: apperance.data.emblem_url
        }
    }

}

export const parseGames = (gameList) => {

    const parsedGames = { data: [] }
    const parsedGameTotals = { gameVersions: [], gameModes: [], killDeath: []}
    
    gameList.data.forEach((element, index) => {
     
        if (element.details.category.name === "Unknown") {
            
            element.details.category.name = "Headhunter"

        }

        parsedGames.data.push({
            gameInfo: {
            gameType: element.details.category.name,
            gameTypeImage: element.details.category.image_url,
            mapName: element.details.map.name,
            gameVersion: element.details.game.name,
            gameVersionImage: element.details.game.image_url,
            playedAt: new Date(element.played_at).toLocaleString(),
            duration: (element.duration.human).split(" ").splice(1,2).join(" "),
            outcome: element.player.stats.outcome
            },
            playerInfo: {
                Kills: element.player.stats.core.summary.kills,
                Deaths: element.player.stats.core.summary.deaths,
                Medals: element.player.stats.core.summary.medals,
                Headshots: element.player.stats.core.breakdowns.kills.headshots,
                KDR: element.player.stats.core.kdr.toFixed(2),
                Points: element.player.stats.points,
            }
        })
        parsedGameTotals.gameVersions.push(element.details.game.name)
        parsedGameTotals.gameModes.push(element.details.category.name)
        parsedGameTotals.killDeath.push({name: index, kills: element.player.stats.core.summary.kills, deaths: element.player.stats.core.summary.deaths})
    })

    return ({
        games: parsedGames, totals: parsedGameTotals })

}