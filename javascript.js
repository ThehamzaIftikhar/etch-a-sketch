let sizebtn = document.querySelector('button');
let body = document.querySelector('body');
create_grid(16);

sizebtn.addEventListener('click', () => {
    let size = prompt('Enter a size between 1 and 100: ')
    if (size > 100) {
        size = 100;
    }
    if (size < 1) {
        size = 1;
    }
    let canvas = create_grid(size);
    body.appendChild(canvas)
})

function create_grid(n) {
    if (document.querySelector('.canvas') !== null) {
        document.querySelector('.canvas').remove();
    }
    let canvas = document.createElement('div');
    canvas.classList.add('canvas');
    for (let i = 0; i < n; i++) {
        let row = document.createElement('div')
        row.classList.add('row')
        canvas.appendChild(row);
        for (let j = 0; j < n; j++) {
            let box = document.createElement('div')
            box.classList.add('box')
            row.appendChild(box)
            box.addEventListener('mouseover', () => 
            {
                box.classList.add('hover');
            })
        }
    }
    body.appendChild(canvas)   
}

