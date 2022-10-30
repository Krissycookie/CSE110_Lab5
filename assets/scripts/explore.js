// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;
  const text = document.getElementById('text-to-speak');
  const select = document.getElementById('voice-select');
  const button = document.querySelector('button');
  const image = document.querySelector('img');

  let voices=[];

  synth.addEventListener('voiceschanged', (event) =>
  {
    voices = synth.getVoices();
    for (let i = 0; i < voices.length; i++)
    {
        const option = document.createElement('option');
        option.textContent = `${voices[i].name} (${voices[i].lang})`;

        option.setAttribute('data-lang', voices[i].lang);
        option.setAttribute('data-name', voices[i].name);

        select.appendChild(option);
    }
  })

  button.addEventListener('click', (event) =>
  {
    const utter = new SpeechSynthesisUtterance(text.value);
    const selectedOption = select.selectedOptions[0].getAttribute('data-name');

    console.log(text.value);
    for (let i = 0; i < voices.length; i++)
    {
      if (voices[i].name === selectedOption)
      {
        utter.voice = voices[i];
        console.log(utter.voice);
      }
    }

    synth.speak(utter);

    if (synth.speaking)
    {
      image.src = './assets/images/smiling-open.png';
    }

    // Change image when synth stops speaking
    utter.addEventListener('end', (event) =>
    {
      image.src = './assets/images/smiling.png';
    })
  })
}