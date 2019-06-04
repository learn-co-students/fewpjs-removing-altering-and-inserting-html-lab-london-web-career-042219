// Write your code here!

//Make sure you remove the <main> with id 'main': expected <main id="main"></main> to not exist
//let base = document.getElementsByTagName("main")[0]


let element = document.createElement('div')
document.body.appendChild(element)

var ul = document.createElement('ul')
 
for (let i = 0; i < 3; i++) {
  let li = document.createElement('li')
  li.innerHTML = (i + 1).toString()
  ul.appendChild(li)
}
 
element.appendChild(ul)

main = document.getElementById("main")
main.remove()

newHeader = document.getElementById("victory")



