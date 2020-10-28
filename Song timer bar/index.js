const totalTime = document.querySelector('.total-time')
const currentTime = document.querySelector('.current-time')
const bar = document.querySelector('.bar-current')

const song = {
    title: 'Rockstar',
    author: 'Post Malone ft. 21 Savage',
    length: 128
}

const transformToMin = totalSeconds => {
    let minutes = Math.floor(totalSeconds / 60)
    let seconds = totalSeconds % 60
    if(seconds < 10) seconds = '0' + seconds
    return `${minutes} : ${seconds}`
}

totalTime.innerHTML = transformToMin(song.length)

let currentPassed = 0
setInterval(() => {
    if(currentPassed < song.length) {
        currentPassed += 1
        currentTime.innerHTML = transformToMin(currentPassed)
        let persentege = (currentPassed / song.length) * 100
        bar.style.width = `${persentege}%`
    }
}, 1000)