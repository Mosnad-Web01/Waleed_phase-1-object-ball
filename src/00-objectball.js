function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
}

// Log the game object to verify
console.log(gameObject());

function getPlayerStats(playerName) {
  const game = gameObject();
  for (let team in game) {
    const playerStats = game[team].players[playerName];
    if (playerStats) {
      return playerStats;
    }
  }
  return null; // Return null if player not found
}

// Example usage
console.log(getPlayerStats("Alan Anderson"));

function logAllPlayers() {
  const game = gameObject();
  for (let team in game) {
    console.log(`${game[team].teamName} Players:`);
    for (let player in game[team].players) {
      console.log(`  ${player}:`, game[team].players[player]);
    }
  }
}

// Example usage
logAllPlayers();

function numPointsScored(playerName) {
  const playerStats = getPlayerStats(playerName);
  return playerStats ? playerStats.points : null; // Return points or null
}

function shoeSize(playerName) {
  const playerStats = getPlayerStats(playerName);
  return playerStats ? playerStats.shoe : null; // Return shoe size or null
}

function teamColors(teamName) {
  const game = gameObject();
  for (let team in game) {
    if (game[team].teamName === teamName) {
      return game[team].colors;
    }
  }
  return null; // Return null if team not found
}

function teamNames() {
  const game = gameObject();
  return Object.values(game).map((team) => team.teamName);
}

function playerNumbers(teamName) {
  const game = gameObject();
  for (let team in game) {
    if (game[team].teamName === teamName) {
      return Object.values(game[team].players).map((player) => player.number);
    }
  }
  return []; // Return empty array if team not found
}

function playerStats(playerName) {
  return getPlayerStats(playerName); // Reuse the getPlayerStats function
}

function bigShoeRebounds() {
  const game = gameObject();
  let largestShoeSize = 0;
  let rebounds = 0;

  for (let team in game) {
    for (let player in game[team].players) {
      const playerData = game[team].players[player];
      if (playerData.shoe > largestShoeSize) {
        largestShoeSize = playerData.shoe;
        rebounds = playerData.rebounds;
      }
    }
  }
  return rebounds;
}

function mostPointsScored() {
  const game = gameObject();
  let maxPoints = 0;
  let topPlayer = "";

  for (let team in game) {
    for (let player in game[team].players) {
      const points = game[team].players[player].points;
      if (points > maxPoints) {
        maxPoints = points;
        topPlayer = player;
      }
    }
  }
  return topPlayer;
}

function winningTeam() {
  const game = gameObject();
  let maxPoints = 0;
  let winningTeam = "";

  for (let team in game) {
    let teamPoints = 0;
    for (let player in game[team].players) {
      teamPoints += game[team].players[player].points;
    }
    if (teamPoints > maxPoints) {
      maxPoints = teamPoints;
      winningTeam = game[team].teamName;
    }
  }
  return winningTeam;
}

function playerWithLongestName() {
  const game = gameObject();
  let longestName = "";

  for (let team in game) {
    for (let player in game[team].players) {
      if (player.length > longestName.length) {
        longestName = player;
      }
    }
  }
  return longestName;
}

function doesLongNameStealATon() {
  const longestName = playerWithLongestName();
  const player = playerStats(longestName);
  const mostSteals = playerStats(mostPointsScored()).steals;

  return player.steals === mostSteals;
}
