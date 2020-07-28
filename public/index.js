var map = L.map('map').setView([51.505, 0], 3);
var lat = 51.5;
var long = -0.09;


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);






window.setInterval(() => {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let obj = JSON.parse(xhr.response);
            console.log(obj);
            map.setView([obj.iss_position.latitude, obj.iss_position.longitude]);
            L.circle([obj.iss_position.latitude, obj.iss_position.longitude], {
                color: 'red',
                fillColor: '#f03',
                fillOpacity: 0.5,
                radius: 100
            }).addTo(map);

        }
    }
    xhr.open('GET', 'http://api.open-notify.org/iss-now.json', true);
    xhr.send();
}, 1000);
