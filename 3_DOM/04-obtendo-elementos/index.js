function show() {
    const contactList = document.getElementById('contact-list')
    console.log(contactList)

    const listElements = document.getElementsByTagName('li')
    console.log(listElements)

    const contactInputs = document.getElementsByClassName("contact-input")
  console.log(contactInputs)

  const contact1 = document.getElementsByName("contact1")
  console.log(contact1)

  const contacts = document.querySelectorAll("#contact-list > li > label")
  console.log(contacts)

  const contact = document.querySelector("#contact-list > li > label")
  console.log(contact)
  console.log(contact.textContent)
}