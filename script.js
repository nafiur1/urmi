let main1= document.querySelector('.main1')
let main= document.querySelector('.main')
let next= document.querySelector('.next')
let previous= document.querySelector('.previous')

next.addEventListener('click',function(){
    main1.style.display = 'none';
    main.style.display = 'flex';
    previous.style.display= 'inline-block';
    next.style.display= 'none';
})

previous.addEventListener('click',function(){
    main1.style.display= 'inline-block'
    main.style.display = 'none';
    previous.style.display= 'none';
    next.style.display= 'inline-block';
})


// 3rd start

