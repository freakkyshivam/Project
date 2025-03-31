  
function showAllShapes() {
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach(shape => {
        shape.style.display = 'none';
    });
}

document.getElementById('shape').addEventListener('click', function() {
    showAllShapes();
});