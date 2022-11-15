export const defaultStats = {
    small: {
        kills: { name: "Kills", data: 0 },
        deaths: { name: "Deaths", data: 0 },
        assists: { name: "Assists", data: 0 },
        wins: { name: "Wins", data: 0 },
        losses: { name: "Losses", data: 0 },
        matchesPlayed: { name: "Matches Played", data: 0 }
    },
    large: {
        winRate: { name: "Win Rate", data: "0.0%" },
        kdRatio: { name: "KD Ratio", data: 0.0 },
    },
    xp: {
        total: { name: "Total XP", data: 0 },
        remaining: { name: "Remaining XP", data: 0 },
        title: { name: "Title", data: "Rookie" },
        tour: { name: "Tour", data: 1 },
        tier: { name: "Tier", data: 1 },
        threshold: { name: "Threshold", data: 0 },
        rankImageUrl: { name: "Rank URL", data: "https://assets.halo.autocode.gg/static/mcc/images/multiplayer/ranks/tour1-rookie.png" }
    },
    ranks: [
        {
            xbox: [
                {
                    name: "Halo 3 Ranked Slayer",
                    rank: 1,
                    rankImage: "https://assets.halo.autocode.gg/static/mcc/images/multiplayer/skill-ranks/rank-1.png",
                },
                {
                    name: "H4 Squad Battle",
                    rank: 1,
                    rankImage: "https://assets.halo.autocode.gg/static/mcc/images/multiplayer/skill-ranks/rank-1.png",
                },
                {
                    name: "Halo Reach Invasion",
                    rank: 1,
                    rankImage: "https://assets.halo.autocode.gg/static/mcc/images/multiplayer/skill-ranks/rank-1.png",
                },
                {
                    name: "Halo 2A Hardcore",
                    rank: 1,
                    rankImage: "https://assets.halo.autocode.gg/static/mcc/images/multiplayer/skill-ranks/rank-1.png",
                },
                {
                    name: "Halo 3 Hardcore",
                    rank: 1,
                    rankImage: "https://assets.halo.autocode.gg/static/mcc/images/multiplayer/skill-ranks/rank-1.png",
                },
                {
                    name: "Halo 3 Team Doubles",
                    rank: 1,
                    rankImage: "https://assets.halo.autocode.gg/static/mcc/images/multiplayer/skill-ranks/rank-1.png",
                },
                {
                    name: "Halo CE Doubles",
                    rank: 1,
                    rankImage: "https://assets.halo.autocode.gg/static/mcc/images/multiplayer/skill-ranks/rank-1.png",
                },                    
            ]
        },
        {
            pc: [
                {
                    name: "Halo 3 Ranked Slayer",
                    rank: 1,
                    rankImage: "https://assets.halo.autocode.gg/static/mcc/images/multiplayer/skill-ranks/rank-1.png",
                },
                {
                    name: "H4 Squad Battle",
                    rank: 1,
                    rankImage: "https://assets.halo.autocode.gg/static/mcc/images/multiplayer/skill-ranks/rank-1.png",
                },
                {
                    name: "Halo Reach Invasion",
                    rank: 1,
                    rankImage: "https://assets.halo.autocode.gg/static/mcc/images/multiplayer/skill-ranks/rank-1.png",
                },
                {
                    name: "Halo 2A Hardcore",
                    rank: 1,
                    rankImage: "https://assets.halo.autocode.gg/static/mcc/images/multiplayer/skill-ranks/rank-1.png",
                },
                {
                    name: "Halo 3 Hardcore",
                    rank: 1,
                    rankImage: "https://assets.halo.autocode.gg/static/mcc/images/multiplayer/skill-ranks/rank-1.png",
                },
                {
                    name: "Halo 3 Team Doubles",
                    rank: 1,
                    rankImage: "https://assets.halo.autocode.gg/static/mcc/images/multiplayer/skill-ranks/rank-1.png",
                },
                {
                    name: "Halo CE Doubles",
                    rank: 1,
                    rankImage: "https://assets.halo.autocode.gg/static/mcc/images/multiplayer/skill-ranks/rank-1.png",
                },                    
            ]
        }
    ],
    campaign: {
        kills: { name: "Kills", data: 0 },
        deaths: {name: "Deaths", data: 0},
        missionsCompleted: {name: "Missions Completed", data: 0},
    },
    apperance: {
        clanTag: "Loading...",
        gamertag: "Loading...",
        avatarUrl: "https://content.halocdn.com/media/Default/games/Halo-Master-Chief-Collection/avatars/playeridavatar_040-3432424ef682464d937b74ea92b9de2e.jpg",
        emblemUrl: "https://emblems.svc.halowaypoint.com/hmcc/emblems/steel_white_spearhead-on-brick_sprocket2"
    }
}

export default defaultStats;