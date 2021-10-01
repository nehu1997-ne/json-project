var data ;


function template(){

    var http=new XMLHttpRequest()
    http.open("GET","data/data.json")
    http.send()
    http.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200)

        {
        var result= JSON.parse(this.response)
        console.log(result)
        BindItem(result.product)       
        }

       
       
    }

}
template()





function BindItem(arr){
    var temp=``
    arr.forEach((e)=>{

        
        temp+=`<div class="col-4">
        <div class="card">
        <div class="card-body">
            <h4 class="card-title">${e.id}</h4>
            <p class="card-text">${e.title}</p>
            <p class="card-text">${e.price}</p>
            <div class="img"><img src ="${e.image}"/></div>
            <p class="card-text">${e.description}</p>
        </div>
        </div>
    </div>`
    })

document.querySelector(".post").innerHTML=temp;
}