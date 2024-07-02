import React, { useState, useRef } from 'react'

var keys = ["eng", "inf", "part", "mon", "gen", "s-missa", "l-missa", "s-mista", "l-mista", "s-mihin", "l-mihin"]
var nouns = require('./nouns.json')

function HighlyEqual(str1, str2) {
  return str1.toLowerCase() === str2.toLowerCase()
}

function BarelyEqual(str1, str2) {
  const normalize = str => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
  return normalize(str1) === normalize(str2)
}

export default function NounsWidget() {
  const [noun, setNoun] = useState(0)
  const inputs = useRef({})
  const question = 'eng'

  function onNewWord() {
    keys.forEach((form) => {
      if (form !== question) {
        inputs.current[form].value = ""
        inputs.current[form].style.color = ""
      }
    })

    setNoun(Math.floor(Math.random() * nouns.length))
  }

  function onCheckForm(form, event) {
    var value = inputs.current[form].value
    if (HighlyEqual(value, nouns[noun][form]))
      inputs.current[form].style.color = "green"
    else if (BarelyEqual(value, nouns[noun][form]))
      inputs.current[form].style.color = "brown"
    else
      inputs.current[form].style.color = "red"
  }

  const setInputRef = (key) => (element) => {
    inputs.current[key] = element;
  };

  function tableRow(form) {
    if (form === question)
      return nouns[noun][form]
    else
      return <input ref={setInputRef(form)} />
  }

  const tableRows = keys.map(form =>
    <tr>
      <td>{form}</td>
      <td>{tableRow(form)}</td>
      <td>{form === question || <button onClick={(event) => onCheckForm(form, event)}>Check</button>}</td>
    </tr>
  );

  return (
    <table>
      {tableRows}
      <tr>
        <td><button onClick={onNewWord}>New word</button></td>
      </tr>
    </table>
  )
}
