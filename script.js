var searchBox=document.getElementById("search")
var boxes=document.querySelectorAll(".box")

searchBox.addEventListener('keyup',(e)=>{
    searchText=e.target.value.toLowerCase().trim();
    boxes.forEach((box)=>{
        const data=box.dataset.item;

    
        if(data.includes(searchText))
        {
            box.style.display="block";

        }
        else
        {
              box.style.display="none";
        }
    });
});

document.addEventListener('DOMContentLoaded',loadfood);

function loadfood(){
    loadcontent();
}

function loadcontent(){

    let btnremove=document.querySelectorAll('.cart-remove');
    btnremove.forEach((btn)=>{
        btn.addEventListener('click',removeitem);
    });
}

function removeitem(){
    this.parentElement.remove();
}
