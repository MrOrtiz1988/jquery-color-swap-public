

$(document).ready(onReady);

function onReady(){
    console.log('jq working');
    $('.generate-btn').on('click', handleGenerate);
}

function handleGenerate(){
    $('.container').append(`
    <div class="new-div"></div>
    `)
}