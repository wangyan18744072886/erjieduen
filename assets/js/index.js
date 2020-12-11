$(function(){
  let n = 0
  let n2 = 0
  var cart = JSON.parse(window.localStorage.getItem('cart')) || []
  var complete = JSON.parse(window.localStorage.getItem('com')) || []
  bindHTML()
  Success()
  $('#title').on('keydown' , function(e){
    const value = this.value.trim()
    if (!value) return
    var code = e.keyCode || e.which
    if(code == 13){
      cart.push( $('#title').val())
      $('#title').val('')
      window.localStorage.setItem('cart' , JSON.stringify(cart))
      bindHTML()
      Success()
    }
  })
  $('#todolist').on('click' , 'li input' , function(){
    const  flag = this.checked
    const id = $(this).data('id')
    if(flag){
      complete.push(cart[id])
      cart.splice(id , 1)
      window.localStorage.setItem('cart' , JSON.stringify(cart))
      window.localStorage.setItem('com' ,JSON.stringify(complete) )
      bindHTML()
      Success()
    }
  })
  $('#todolist').on('click' , 'li  > a' , function(){
    const id = $(this).data('id')
    cart.splice(id , 1)
    window.localStorage.setItem('cart' , JSON.stringify('cart' , cart))
    bindHTML()
  })
  $('#donelist').on('click' , 'li > input' , function(){
    const flag = this.checked
    const id = $(this).cart('id')
    if(!flag){
    cart.push(complete[id])
    complete.splice(id , 1)
    }
    window.localStorage.setItem('cart' , JSON.stringify(cart))
    window.localStorage.setItem('com' , JSON.stringify(complete))
    bindHTML()
    Success()
  })
  $('#donelist').on('click' , 'li > a' , function(){
    const id = $(this).data('id')
    complete.splice(id , 1)
    window.localStorage.setItem('complete' , JSON.stringify(complete))
    Success()
  })
  $('#todolist').on('click' , 'li  > p' , function(){
    function edit(a){  
      
    }
  })
   function bindHTML(){
    let str = ``
    for(let i = 0 ; i < cart.length ; i++){
      str +=  `
      <li>
          <input type="checkbox" data-id=${i} />
          <p class="context" onclick="" data-id=${i}>${cart[i]}</p>
          
          <a data-id=${i}>-</a>
      </li>
      `
      
    }
    $('#todocount').html(cart.length)
    $('#todolist').html(str)
  }
  function Success(){
    let str = ``
    for(let i = 0 ; i < complete.length ;i++){
      str += `
      <li>
          <input type="checkbox" checked="checked" data-id = ${i}>
          <p onclick="edit(${i})">${complete[i]}</p>
          
          <a data-id="${i}">-</a>
      </li>
      `
      n2++
    }
    $('#donecount').html(complete.length)
    $('#donelist').html(str)
  }



})