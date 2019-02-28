$(".addArticle").on("click",function(){
    $.ajax({url:"/addArticle",method:"post",data:this.dataset}).then(function(result){
        window.location.href = "/";
    });
})

$(".addNote").on("click",function(){
    $.ajax({url:"/addNoteForm",method:"post",data:this.dataset}).then(function(result){
        window.location.href = "/addNoteForm";
    });
})