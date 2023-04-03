

$(document).ready(onReady);


let num = 0;

function onReady(){
    $('.generate-btn').on('click', handleGenerate);
    $('.container').on('click', '.turn-yellow', turnYellow)
}

function handleGenerate(){
    num++;

    $('.container').append(`
    <div class="new-div">
        <p>${num}</p>
        <button class="turn-yellow">Yellow</button>
        <button>Delete</button>
    </div>
    `);
}

function turnYellow(){
    $(this).parent().css('background-color', 'yellow');
}