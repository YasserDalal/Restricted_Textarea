

function RestrictLength(){
  const counter = document.querySelector('.counter')
  const textarea = document.querySelector('.textarea')
  counter.innerHTML = `0/200`

  const textInput = () => {
    const textareaLength = textarea.value.length

    if(textareaLength >= 200){
      counter.classList.add('restricted-font')
      textarea.classList.add('restricted-border')
      textarea.classList.add('restricted-font')
    } else {
      counter.classList.remove('restricted-font')
      textarea.classList.remove('restricted-border')
      textarea.classList.remove('restricted-font')
    }

    counter.innerHTML = `${textareaLength}/200`
  }

  textarea.addEventListener('input', textInput)
  
}

RestrictLength()