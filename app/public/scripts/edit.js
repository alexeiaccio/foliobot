function domToNode(domNode) {
  if (domNode.nodeType == domNode.TEXT_NODE) {
    return domNode.data
  }
  if (domNode.nodeType != domNode.ELEMENT_NODE) {
    return false
  }
  var nodeElement = {}
  nodeElement.tag = domNode.tagName.toLowerCase()
  for (let i = 0; i < domNode.attributes.length; i++) {
    var attr = domNode.attributes[i]
    if (attr.name == 'href' || attr.name == 'src') {
      if (!nodeElement.attrs) {
        nodeElement.attrs = {}
      }
      nodeElement.attrs[attr.name] = attr.value
    }
  }
  if (domNode.childNodes.length > 0) {
    nodeElement.children = []
    for (let i = 0; i < domNode.childNodes.length; i++) {
      var child = domNode.childNodes[i]
      nodeElement.children.push(domToNode(child))
    }
  }
  return nodeElement
}

function nodeToDom(node) {
  if (typeof node === 'string' || node instanceof String) {
    return document.createTextNode(node)
  }
  if (node.tag) {
    var domNode = document.createElement(node.tag)
    if (node.attrs) {
      for (let name in node.attrs) {
        var value = node.attrs[name]
        domNode.setAttribute(name, value)
      }
    }
  } else {
    var domNode = document.createDocumentFragment()
  }
  if (node.children) {
    for (let i = 0; i < node.children.length; i++) {
      var child = node.children[i];
      domNode.appendChild(nodeToDom(child))
    }
  }
  return domNode
}

const article = document.getElementById('article')
const title = document.getElementById('title')
const saveButton = document.getElementById('save-button')
const forwardButton = document.getElementById('forvard-button')

title.addEventListener('keypress', (e) => { if (e.keyCode == 13) { return false } })

const editorOptions = {
  theme: 'bubble',
  placeholder: 'Place text here ...',
  modules: {
    toolbar: [['bold', 'italic'], ['link', 'image'], ['code']]
  }
}

const headerOptions = {
  placeholder: 'Type new title here...'
}

function focusHandler (editor, header) {
  if (editor.hasFocus()) {
    editor.container.classList.add('focused')
  } else {
    editor.container.classList.remove('focused')
  }
  if (header.hasFocus()) {
    header.container.classList.add('focused')
  } else {
    header.container.classList.remove('focused')
  }
}

$.ajax('https://api.telegra.ph/getPage', {
  data: {
    path: thatPath,
    return_content: true
  },
  type: 'GET',
  dataType: 'json',
  success: function(data) {    
    if (data.ok == true) {
      while (article.firstChild) {
        article.removeChild(article.firstChild)
      }
      article.appendChild(nodeToDom({children: data.result.content}))
      // Quill
      let editor = new Quill(article, editorOptions)
      let header = new Quill(title, headerOptions)      
      document.addEventListener('click', () => focusHandler(editor, header))
      saveButton.classList.add('visible')
    } else {
      while (article.firstChild) {
        article.removeChild(article.firstChild)
      }
      article.appendChild(nodeToDom("Something wrong: " + data.error))
    }
  }
})


const saveHandler = (e) => {
  let el = document.getElementById('article').children[0];
  let content = domToNode(el).children;
  saveButton.textContent='Saving...'
  saveButton.classList.add('saving')
  saveButton.disabled = true
  $.ajax('https://api.telegra.ph/editPage', {
    data: {
      access_token:   accessToken,
      path:           thatPath,
      title:          title.textContent,
      content:        JSON.stringify(content),
      return_content: true
    },
    type: 'POST',
    dataType: 'json',
    success: function(data) {
      if (data.ok == true) {
        while (article.firstChild) {
          article.removeChild(article.firstChild)
        }
        article.appendChild(nodeToDom({children: data.result.content}))
        let editor = new Quill(article, editorOptions)
        saveButton.textContent='Saved'
        saveButton.classList.remove('saving')
        saveButton.classList.add('success')
        forwardButton.classList.add('visible')
        setTimeout(function() {
          saveButton.textContent='Save'
          saveButton.classList.remove('success')
          saveButton.disabled = false
        }, 2000)
      }else {
        while (article.firstChild) {
          article.removeChild(article.firstChild)
        }
        article.appendChild(nodeToDom("Something wrong: " + data.error))
      }
    }
  });
}

function forwardHandler(e) {
  forwardButton.textContent='Forwarding...'
  forwardButton.classList.add('saving')
  forwardButton.disabled = true
  $.ajax(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    data: {
      chat_id:    userId,
      text:       `<strong>Press the button to forward your page</strong>\nhttp://telegra.ph/${thatPath}`,
      parse_mode: 'html',
      disable_web_page_preview: true,
      reply_markup: JSON.stringify({
        inline_keyboard: [[{ 
          text: 'Forward page', 
          switch_inline_query: thatPath.toString() 
        }]]
      })
    },
    type: 'POST',
    dataType: 'json',
    success: function(data) {
      if (data.ok == true) {
        forwardButton.textContent='Continue in Telegram'
        forwardButton.classList.remove('saving')
        forwardButton.classList.add('continue')
        setTimeout(function() {
          forwardButton.classList.remove('continue')
          forwardButton.classList.remove('visible')
        }, 4000)
        setTimeout(function() {
          forwardButton.textContent='Forward'
          forwardButton.disabled = false
        }, 5000)
      }
    }
  })
}

saveButton.addEventListener('click', (e) => saveHandler(e))
forwardButton.addEventListener('click', (e) => forwardHandler(e))
