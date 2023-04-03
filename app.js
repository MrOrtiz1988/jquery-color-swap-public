

$(document).ready(onReady);


let num = 0;

function onReady(){
    console.log('jq working');
    $('.generate-btn').on('click', handleGenerate);
}

function handleGenerate(){
console.log('being clicked');
    num++;

    $('.container').append(`
    <div class="new-div">
        <p>${num}</p>
        <button>Yellow</button>
        <button>Delete</button>
    </div>
    `);
}