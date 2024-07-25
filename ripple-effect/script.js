const handleBtn = document.getElementById('rippleBtn');


handleBtn.addEventListener("mouseover" , (e) =>{
    let x = e.pageX - handleBtn.offsetLeft;
    let y = e.pageY - handleBtn.offsetTop;

    handleBtn.style.setProperty("--ripX", x + 'px' );
    handleBtn.style.setProperty("--ripY", y + 'px');
 })
