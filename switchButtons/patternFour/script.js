let allcon = document.querySelectorAll('.contents');
let allbtns = document.querySelectorAll('.main-btn');

allcon.forEach((con, idx) => {
    allbtns[idx].addEventListener('click' , (e)=>{
        allcon[idx].classList.add('active');
        if(idx == 0)
        {
            allcon[1].classList.remove('active');
            allcon[2].classList.remove('active'); 
        }
        else if(idx == 1)
        {
            allcon[0].classList.remove('active');
            allcon[2].classList.remove('active');
        }
        else 
        {
            allcon[0].classList.remove('active');
            allcon[1].classList.remove('active');

        }
    })
});