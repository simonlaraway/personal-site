function showImage(imageNumber) {
    const imageContainer = document.getElementById('imageContainer');
    const buttons = document.querySelectorAll('.toggle-btn');
    
    buttons.forEach((btn, index) => {
        if (index + 1 === imageNumber) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    if (imageNumber === 2) {
        imageContainer.classList.add('show-image-2');
    } else {
        imageContainer.classList.remove('show-image-2');
    }
}