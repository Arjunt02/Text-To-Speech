let speech=new SpeechSynthesisUtterance()

let voices=[]

let voiceSelect=document.querySelector("select")

// the system voices are align with the dropdown
window.speechSynthesis.onvoiceschanged=()=>{
    voices=window.speechSynthesis.getVoices()
    speech.voice=voices[0]

    voices.forEach((voice,i)=>(voiceSelect.options[i]=new Option(voice.name,i)))
}

// to select the dropdown voices to speech
voiceSelect.addEventListener("change",()=>{
    speech.voice=voices[voiceSelect.value]
})


// get the input text and speech
document.querySelector("button").addEventListener("click",()=>{
    speech.text=document.querySelector("textarea").value
    window.speechSynthesis.speak(speech)
})

