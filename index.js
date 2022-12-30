 const navbarE1 =document.querySelector(".navbar");
 const containerE1 = document.querySelector(".container");
 const bottomE1 =document.querySelector(".bottom");
 console.log(navbarE1.offsetHeight);
 console.log(bottomE1.offsetTop); 

 window.addEventListener("scroll",()=>{
    if(window.scrollY >
        bottomE1.offsetTop -navbarE1.offsetHeight-50)
        {
  navbarE1.classList.add("active");
        }
        else{
            navbarE1.classList.remove("active");
        }
 });