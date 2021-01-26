console.log("script js");
var unorderList = document.querySelector('.menu_container');
console.log(unorderList.children);
Array.from(unorderList.children).forEach(function(List){
  List.addEventListener('mouseover',function(){
      console.log("mouse hover...");
      List.classList.add("hoverEffectClass");
      Array.from(List.children)[0].classList.add("addclassToUl");
    //   Array.from(Array.from(List.children)[0].children).forEach(function(listItem){
    //      listItem.classList.add('')
    //   });
      
  })
  List.addEventListener('mouseout',function(){
    console.log("mouse hover...");
    List.classList.remove("hoverEffectClass");
    Array.from(List.children)[0].classList.remove("addclassToUl");
   
})
})

