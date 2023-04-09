
const API_KEY = 'fd8ef3061871c7bcb9043693b0d65d2a';
let units = "imperial";


function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
        .then(res => {
            return res.json()
        })
        .then(function (data) {
            document.getElementById('results').innerHTML = data.message
        })

    let sZipCode = "90210";
    const sUri = `https://api.openweathermap.org/data/2.5/weather?zip=${sZipCode},us&appid=${API_KEY}&units=${units}`

    let rOutput = document.getElementById("output");
    rOutput.textContent = "Loading Data";

    fetch(sUri).then(async d => {
        let result = await d.json();
        rOutput.textContent = result.name;
    })

}

export { handleSubmit }
