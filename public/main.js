const socket = io()

const userName = ''
const listUsers = []

const loginPage = document.querySelector('#loginPage')
const pageChat = document.querySelector('#pageChat')

const loginInput = document.querySelector('#loginNameInput')
const textChatInput = document.querySelector('#chatTextInput')

loginPage.style.display = 'flex'
pageChat.style.display = 'none'