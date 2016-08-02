var interval;
var switchy = false;
$(document).on('keydown',function(e){
if(e.keyCode == 81){
if(switchy){
return;
}
switchy = true;
interval = setInterval(function() {
console.log('firing')
$("body").trigger($.Event("keydown", { keyCode: 87})); $("body").trigger($.Event("keyup", { keyCode: 87})); 
}, 5);
}
})

$(document).on('keyup',function(e){
if(e.keyCode == 81){
switchy = false;
clearInterval(interval);
return;
}
})
