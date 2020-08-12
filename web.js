
//const pelements=document.querySelectorAll('p')
//pelements.forEach(function(p){
   /// p.textContent='Desert scorpion is the best in the world'
//})
//const para=document.createElement('p')
//para.textContent='marcos is also best in world'
//document.querySelector('body').appendChild('para')

//document.querySelector('button').addEventListener('click',(event) =>{
  //  event.target.textContent ='i was clicked'
//})
//const deck= document.querySelector("#myclass")
//deck.textContent= 'marcos is best'
//console.log(deck)

//document.querySelector('button').addEventListener('')
//alert("connected")
//function myid(){
   //
   var ul=document.getElementById("list")
    var li

   var addbutton=document.getElementById("add")
   addbutton.addEventListener("click",additem)

   function additem(){
       var input=document.getElementById("input")
       var item=input.value
       ul=document.getElementById('list')
       var textnode=document.createTextNode(item)

       if(item==='')
       {
           return false
           var h=document.createElement('p')
           var text=document.createTextNode('enter your todo')
           h.appendChild(text)
           document.querySelector('body').appendChild('p')
       }
       else{
           li=document.createElement('li')
           var checkbox=document.createElement('input')
           checkbox.type='checkbox'
           checkbox.setAttribute('id','check')

           var label=document.createElement('label')
           label.setAttribute('for','item')

           ul.appendChild(label)
           li.appendChild(checkbox)
           label.appendChild(textnode)
           li.appendChild(label)
           ul.insertBefore(li,ul.childNodes[0])
          
           setTimeout(() => {
               li.classname='visual'
           }, 2);

           input.value=''
       }
   }

   var removebutton=document.getElementById("remove")
   removebutton.addEventListener("click",removeitem)

   function removeitem(){
       li=ul.children
       
       for (let index = 0; index < li.length; index++) {
           while (li[index]&&li[index].children[0].checked) {
               ul.removeChild(li[index])
           }
           
       }
   }
