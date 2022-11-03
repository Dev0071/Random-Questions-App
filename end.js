const userName = document.getElementById('username');
const saveScoreBtn = document.getElementById('savescorebtn');
const finalScore = document.getElementById('finalscore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
finalScore.innerText = mostRecentScore;

const highScore = JSON.parse(localStorage.getItem('highScore')) || [];
const MAX_HIGH_SCORES = 5;
// console.log(highScore);

userName.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !userName.value;
   // console.log(userName.value);
})


saveHighScore = (e) => {
    // console.log('clicked the save button');
    e.preventDefault();
    const score = {
        score : mostRecentScore,
        name : userName.value,
    };
    highScore.push(score);
    highScore.sort( (a, b) => a.score - b.score);
    highScore.splice(5);

    localStorage.setItem('highScore', JSON.stringify(highScore));
    window.location.assign('/index.html');
    // console.log(highScore);

}