let history = []

function calculate(e) {
  e.preventDefault()
  const form = e.target
  const height = Number(form.height.value)
  const weight = Number(form.weight.value)

  const bmi = weight / (height * height)

  const bmiResult = {
    height: height,
    weight: weight,
    bmi: bmi
  }

  const bmiResultElement = document.getElementById('bmi')
  const json = document.getElementById('json')
  const resultDialog = document.getElementById('result')
  bmiResultElement.innerHTML = `${bmi.toFixed(2)}kg/m²`
  json.innerHTML = `${JSON.stringify(bmiResult, null, 2)}`
  history.push(bmiResult)
  renderHistory()
  resultDialog.showModal()

  form.reset()
}

function resetAll() {
  const form = document.querySelector('form')
  const bmi = document.getElementById('bmi')
  const json = document.getElementById('json')
  const historyElement = document.getElementById('history')
  bmi.innerHTML = ''
  json.innerHTML = ''
  history = []
  console.log(history)
  form.reset()
  renderHistory()
  historyElement.innerHTML = '<li>Empty</li>'
}

function closeResult() {
  const resultDialog = document.getElementById('result')
  resultDialog.close()
}

function renderHistory() {
  const historyElement = document.getElementById('history')
  historyElement.innerHTML = ''
  history.forEach((item, index) => {
    const listItem = document.createElement('li')
    listItem.innerHTML = `<h6>#${index + 1}: ${item.bmi.toFixed(2)}kg/m²</h6>`
    listItem.innerHTML += `<pre>${JSON.stringify(item, null, 2)}</pre>`
    historyElement.appendChild(listItem)
  })
}