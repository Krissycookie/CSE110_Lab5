// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const select = document.getElementById('horn-select');
  const hornImg = document.querySelector("[alt='No image selected']");
  const button = document.querySelector("button");
  const audio = document.getElementsByClassName("hidden")[0];
  const volume = document.getElementById("volume");
  const volumeImg = document.querySelector("div img");
  const confetti = new JSConfetti();

  // Select type of horn (image and audio)
  select.addEventListener('change',(event) =>
  {
    if (event.target.value == 'air-horn')
    {
      hornImg.src = './assets/images/air-horn.svg';
      audio.src = './assets/audio/air-horn.mp3';
    }

    else if(event.target.value == 'car-horn')
    {
      hornImg.src = './assets/images/car-horn.svg';
      audio.src = './assets/audio/car-horn.mp3';
    }

    else if (event.target.value == 'party-horn')
    {
      hornImg.src = './assets/images/party-horn.svg';
      audio.src = './assets/audio/party-horn.mp3';
    }
  })

  // Adjust volume
  volume.addEventListener('input', (event) =>
  {
    // console.log(event.target.value);
    if (event.target.value == 0)
    {
      volumeImg.src = './assets/icons/volume-level-0.svg';
    }

    else if (event.target.value >= 1 && event.target.value < 33)
    {
      volumeImg.src = './assets/icons/volume-level-1.svg';
    }

    else if (event.target.value >= 33 && event.target.value < 67)
    {
      volumeImg.src = './assets/icons/volume-level-2.svg';
    }

    else if (event.target.value >= 67 && event.target.value < 100)
    {
      volumeImg.src = './assets/icons/volume-level-3.svg';
    }

    // Set audio volume based on range
    audio.volume = event.target.value/100;
  })

  button.addEventListener('click', (event) =>
  {
    audio.play();

    // Add party horn confetti
    if (select.value == "party-horn")
    {
      confetti.addConfetti();
    }
  })
}