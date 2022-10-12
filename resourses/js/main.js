function openNav(e){
    // console.log(e)
    e.preventDefault();
    
    document.getElementById("menu-mobile").style.width = "350px";
}
function closeNav(e) {
    e.preventDefault()
    document.getElementById("menu-mobile").style.width = "0";
}
function openSub2(e)
{
    e.preventDefault()
    const isOpen = document.getElementById("sub2-mobile").style.opacity === '1';
    console.log({isOpen});
    document.getElementById("sub2-mobile").style.opacity = isOpen ? "0" : '1';
    
}
function openSub1(e)
{
    
    // e.preventDefault()
   var x = document.getElementById("openSub1");
   if (x.style.display == 'flex')
   {
    x.style.display = 'none';
   }
   else{
    x.style.display = 'flex';
   }
}
function openSub2(e)
{
    
    // e.preventDefault()
   var y = document.getElementById("sub2");
   if (y.style.display == 'flex')
   {
    y.style.display = 'none';
   }
   else{
    y.style.display = 'flex';
   }
}