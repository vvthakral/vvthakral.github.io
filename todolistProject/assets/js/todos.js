// Check off specific Todo by clicking
$("ul").on("click","li",function(){
    $(this).toggleClass("completed")
});

// Click on X to delete Todo
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        this.remove();
    });
    event.stopPropagation();
});

// Take Input
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        var todoText = $(this).val();
        $(this).val("");
        // Create a new li only if the text is not empty
        if (todoText !== ""){
            $("ul").append("<li><span><i class='fa fa-trash'></i></span> "+ todoText + "</li>");
        }
    }
});

// Add New Todo
$(".fa-plus").on("click",function(){
    $("input[type='text']").fadeToggle();
});

