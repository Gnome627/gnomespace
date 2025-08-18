const follower = document.querySelector('.cursor-follower');
        
document.addEventListener('mousemove', (e) => {
    const yPos = (e.clientY - follower.offsetHeight) / 5;
    const xPos = (e.clientX - follower.offsetWidth) / 10;
    follower.style.transform = `translate(${xPos}px, ${yPos}px)`;
});