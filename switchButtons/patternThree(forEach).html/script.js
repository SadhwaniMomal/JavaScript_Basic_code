// here access our content
let allContent = document.querySelectorAll(".con");

// here access our buttons
let allBtns = document.querySelectorAll("button");

allContent.forEach((con , idx)=>{

  // console.log(allContent[idx] , idx);
  allBtns[idx].addEventListener('click', (e)=>{

    allContent[idx].classList.add("active");
  
    if(idx == 0)
    {
      allContent[1].classList.remove("active");
      allContent[2].classList.remove("active");
    }
    else if(idx == 1)
    {
      allContent[0].classList.remove("active");
      allContent[2].classList.remove("active");
    }
    else
    {
      allContent[0].classList.remove("active");
      allContent[1].classList.remove("active");
    }
  })
})