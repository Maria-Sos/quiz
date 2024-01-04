const btn = document.querySelector('.btn');
btn.addEventListener('click', result);

const res = document.querySelector('#result');

function result(e)  {
    e.preventDefault();
    let point = 0;
    if(document.querySelector('#ans1').checked) point++;
    if(document.querySelector('#ans2').checked) point++;
    if(document.querySelector('#ans3').checked) point++;
    if(document.querySelector('#ans4').checked) point++;
    if(document.querySelector('#ans5').checked) point++;

    if (point === 5) {
        res.textContent = `God job! ${point} correct answers! All done!`;
    } else {
        res.textContent = `Your result: ${point} correct answers`;
        document.querySelector('#try').style.display = "block";

    }
}

document.querySelector('#try').addEventListener('click', (e) => {
    e.preventDefault();
    location.reload();
})