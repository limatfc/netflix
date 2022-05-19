export default function showComingSoon (title) {
const seasons = title.episodes.map(item => item.season)
 
const howManyEpisodes = {}

 for (let i=0; i<seasons.length; i++) {
    if (howManyEpisodes[seasons[i]] !== undefined) {
        howManyEpisodes[seasons[i]] = howManyEpisodes[seasons[i]] + 1
    }
     if (howManyEpisodes[seasons[i]] === undefined) {
         howManyEpisodes[seasons[i]] = 1
        }
    }
 const countingAllSeasonsEpisodes = []

for (let episodesPerSeason in howManyEpisodes) {
   const lessThan3 =  howManyEpisodes[episodesPerSeason] < 3
   countingAllSeasonsEpisodes.push(lessThan3)
}

const isComingSoon = countingAllSeasonsEpisodes.find(item => item === true)
return isComingSoon
}