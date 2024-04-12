

/*var readMoreButton= document.getElementById('btn');
var moreContent = document.getElementById('moreContent');
readMoreButton.addEventListener('click', function(){
    moreContent.style.display = "block";
});

var readMoreButton = document.querySelectorAll('.btn');
document.addEventListener('click', function(event){
if(event.target.matches('.btn')){
    var button = event.target;
    var targetContentId = button.getAttribute('data-target');

    var targetContent = document.getElementById(targetContentId);
    if (targetContent){
        targetContent.style.display = 'block';
    }
}

});*/

var readMoreButton = document.querySelectorAll('.btn');
var moreContent = document.querySelectorAll('.moreContent');

readMoreButton.forEach(function(button){
    button.addEventListener('click', function(){
        moreContent.forEach(function(content){
            content.style.display ='block';
        });
    });
});