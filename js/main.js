const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for(const placeholder of placeholders){
    placeholder.addEventListener('dragover',dragover)
    placeholder.addEventListener('dragenter',dragenter)
    placeholder.addEventListener('dragleave',dragleave)
    placeholder.addEventListener('drop',drop)
}

function dragstart(e){
    e.target.classList.add('hold')
    setTimeout(()=> e.target.classList.add('hide') , 0)
}
function dragend(e){
    e.target.classList.remove('hold' , 'hide')
}

function dragover (e){
    console.log('drag over')
}
function dragenter (e){
    console.log('drag enter')
}
function dragleave (e){
    console.log('drag leave')
}
function drop (e){
    console.log('drop')
}
