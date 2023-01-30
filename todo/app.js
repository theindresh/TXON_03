let input = document.querySelector('.enter-item');
let addBtn = document.querySelector('.add-item');
let task = document.querySelector('.task');


input.addEventListener('keyup', () => {
    if(input.value.trim() != 0){
        addBtn.classList.add('active')
    } else {
        addBtn.classList.remove('active')
    }
    })



    addBtn.addEventListener('click', () => {
        if (input.value.trim() != 0){
            let newItem = document.createElement('div');
            newItem.classList.add('item');
            newItem.innerHTML = `
            <p> ${input.value} </p>
                <div class="item-btn">
                    <i class="fa-solid fa-pencil"></i>
                    <i class="fa-solid fa-xmark"></i>
                </div>
                `
                task.appendChild(newItem);
                input.value = '';
        } else {
            alert ('Enter a Task')
        }
    })


    task.addEventListener('click', (e) => {
        if (e.target.classList.contains('fa-xmark')) {
            e.target.parentElement.parentElement.remove();
        }
    } )

    task.addEventListener('click', (e) => {
        if (e.target.classList.contains('fa-pencil')) {
            e.target.parentElement.parentElement.classList.toggle('completed');
        }
    } )