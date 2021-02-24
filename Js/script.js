var unorderList = document.querySelector('.menu_container');
Array.from(unorderList.children).forEach(function(List){
  List.addEventListener('mouseover',function(){
      List.classList.add("hoverEffectClass");
      Array.from(List.children)[0].classList.add("addclassToUl");

  })
  List.addEventListener('mouseout',function(){
    List.classList.remove("hoverEffectClass");
    Array.from(List.children)[0].classList.remove("addclassToUl");
   
})
});
document.addEventListener('scroll',function(){
  let k = document.scrollingElement.scrollTop;
  const headertag = document.getElementById('header_content');
  const imageTag = document.querySelector('.banner_image');
  const MenuTag = document.querySelector('.menu');
  if(k>50){
    headertag.classList.add('headerAddedCss');
    imageTag.classList.add('addclassbanner_image');
    MenuTag.classList.add('menuclasseffect');
  }
  else{
    headertag.classList.remove('headerAddedCss');
    imageTag.classList.remove('addclassbanner_image');
    MenuTag.classList.remove('menuclasseffect');
  }
})
