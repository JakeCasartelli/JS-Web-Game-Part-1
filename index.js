function newImage(img, mLeft,mBottom){
let char = document.createElement('img')
char.src = img
char.style.position = 'fixed'
char.style.left = mLeft +'px'
char.style.bottom = mBottom+'px'
document.body.append(char)
return char
}
function newItem(img, mLeft, mBottom){
    let object = newImage(img, mLeft, mBottom)

    object.addEventListener('dblclick', () => {
        object.remove()
    })
}



newImage('assets/green-character.gif', 100 ,100)
newImage('assets/pine-tree.png', 450, 200)

newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png',150, 200)
newImage('assets/well.png', 500, 425)

newItem('assets/sheild.png', 165 , 185)
newItem('assets/staff.png', 600 , 100)
newItem('assets/sword.png', 500, 405)




