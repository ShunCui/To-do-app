function handleUserSubmit(event){
  event.preventDefault()
  const nameText = document.querySelector(".name-text")
  console.log(nameText.value)
  localStorage.setItem("name",nameText.value)
  location.reload()
}
