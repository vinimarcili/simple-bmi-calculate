const history = []

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
  resultDialog.showModal()
}

function reset() {
  const form = document.getElementById('form')
  form.reset()
  const result = document.getElementById('result')
  result.innerHTML = ''
  history = []
}

function closeResult() {
  const resultDialog = document.getElementById('result')
  resultDialog.close()
}