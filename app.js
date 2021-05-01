let input = document.querySelector('.input_text');
let main = document.querySelector('#name');
let temp = document.querySelector('.temp');
let info = document.querySelector('.info');
let clouds = document.querySelector('.clouds');
let button= document.querySelector('.submit');
let tempMin = document.querySelector('.tempMin');
let tempMax = document.querySelector('.tempMax');
let pressure = document.querySelector('.pressure');
let humidity = document.querySelector('.humidity');


button.addEventListener('click', () => {
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=dde4a487c55a4861de64920c1c3b2b19&units=metric')
.then(response => response.json())
.then(data => {
  let tempValue = data['main']['temp'];

  let nameValue = data['name'];
  let infoValue = data['weather'][0]['description'];

  let tempMinValue = data['main']['temp_min'];
  let tempMaxValue = data['main']['temp_max'];
  let pressureValue = data['main']['pressure'];
  let humidityValue = data['main']['humidity'];

  main.innerHTML = nameValue;
  info.innerHTML = "Info - "+infoValue;
  temp.innerHTML = "Temp - "+tempValue+' °C';
  tempMin.innerHTML = "Min temp - "+tempMinValue+' °C';
  tempMax.innerHTML = "Max temp - "+tempMaxValue+' °C';
  pressure.innerHTML = "Pressure - "+pressureValue+' mb';
  humidity.innerHTML = "Humidity - "+humidityValue+' %';

})
.catch(err => document.getElementById('name').innerHTML = 'Wrong city name...');
})
