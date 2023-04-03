

$(document).ready(onReady);


let num = 0;

function onReady(){
    $('.generate-btn').on('click', handleGenerate);
    $('.container').on('click', '.turn-yellow', turnYellow);
    $('.container').on('click', '.delete-btn', deleteThis);
}

function handleGenerate(){
    num++;

    $('.container').append(`
    <div class="new-div">
        <p>${num}</p>
        <button class="turn-yellow">Yellow</button>
        <button class="delete-btn">Delete</button>
    </div>
    `);
}

function turnYellow(){
    $(this).parent().css('background-color', 'yellow');
}

function deleteThis(){
    $(this).parent().remove();
}