var btnMenu = document.querySelector('.header .menu') ;
document.querySelector('#menu-btn').onclick = ()=>{
    btnMenu.classList.toggle('active');
}
document.querySelectorAll('.view-property .details .thumb .small-images img').
forEach(images => {
    images.onclick = ()=>{
        src = images.getAttribute('src');
        document.querySelector('.view-property .details .thumb .big-image img').src = src;
    }
});

document.querySelectorAll('.faq .box-container .box h3').
forEach(headigs => {
    headigs.onclick = () =>{
        // alert('ok');
        headigs.parentElement.classList.toggle('active');
    }
});

var btn = document.querySelector("#filter-btn");
btn.onclick = function(){
    document.querySelector('.search').classList.toggle('active');
    // document.querySelector('#listing').style.display='none';
    
}
var anuler = document.querySelector('#close-filter')
anuler.onclick = ()=>{
    document.querySelector('.search').classList.toggle('active');
    // document.querySelector('#listing').style.display='block';
}