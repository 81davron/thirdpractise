// $(".tugma").on("click", function(){
//     $.ajax("https://myjson.dit.upm.es/api/bins/apdx", function(){
//       success : function name(ress) {
//           console.log(ress);
//       }
//     })
// })

$(".tugma").on("click", function(){
    $.ajax("https://myjson.dit.upm.es/api/bins/apdx",{
        beforeSend: function(){
          $(".icon").removeClass("d-none")
        },
        success: function(res){
            console.log(res);
            render(res)
        },
        complete : function(){
          $(".icon").addClass("d-none")  
          $(".list").addClass("d-none")
          $(".close").removeClass("d-none")
        }
    })
})

function render(data){
    data.forEach(element => {
        
        let card = `
            <div class="col-3">
            <div class="card img-fluid">
                <img src="${element.imgSrc}" class="img-fluid">
                <h4>${element.name}</h4>
                <span>${element.id}</span>
                
            </div>
            </div>
        `
        $(".row").append(card)
    });
}