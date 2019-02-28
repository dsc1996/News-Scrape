$(".addArticle").on("click",function(){
    $.ajax({url:"/addArticle",method:"post",data:this.dataset}).then(function(result){
        window.location.href = "/";
    });
})

// $(".addNote").on("click",function(){
//     $.ajax({url:"/addNoteForm/:id",method:"post",data:this.dataset}).append(".pComments").then(function(result){
//         window.location.href = "/";
//     });
// })
