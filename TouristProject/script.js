
//Реалізовуєм фунцію передачі поточних координат геолокації і передаєм їх в ф-цію для створення карти.
const getLocation = () => new Promise((resolve, reject) => {

    function success(pos) {
        resolve(pos.coords);
    };
    function error(err) {
        reject(err);
    };
    navigator.geolocation.getCurrentPosition(success, error);
});


async function myMap(data) {
    let requestData = data // requestData не змінюється, тому краще використовувати const
    const coords = await getLocation()
    let map = new google.maps.Map(document.getElementById('map'), { // const
        center: { lat: coords.latitude, lng: coords.longitude },
        zoom: 12
    });
    console.log(requestData.radius)
    function createMarker(place) {
        new google.maps.Marker({
            position: place.geometry.location,
            map: map,
        });
    }
    var request = {
        location: { lat: coords.latitude, lng: coords.longitude },
        radius: 500,
        query: requestData.establishments
    };

    service = new google.maps.places.PlacesService(map); // використання глобальних змінних без необхідності це погана практика
    service.textSearch(request, callback);

    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            // забуваємо за var
            // for... цикли використовуємо тільки за необхідостні.
            // Вчимось використовувати нативні методи мисивів. У даному випадку forEach.
            //
            // results.forEach(createMarker);
            for (var i = 0; i < results.length; i++) { 
                var place = results[i]; // ніде не використовується
                createMarker(results[i]);
            }
        }
    }

}

// myForm не переприсвоюються, тому краще викоирстовувати const
let myForm = document.querySelector('#myForm');

myForm.addEventListener('submit', async function (e) {
    // стараєтесь дотримуватись одного стилю написання коду
    // якщо ставите крапку з комою в кінці рядка, то ставте скрізь, де це можливо
    e.preventDefault();
    let urlSearch = 'http://198.199.125.240:8888/search'; // const
    let urlCsv = 'http://198.199.125.240:8888/csv' // const
    let coords = await getLocation() // const
    let elem = e.target; // const
    let sel = document.querySelector('#establishments'); // const
    let formData = { // const
        establishments: elem.querySelector('#establishments').options[sel.selectedIndex].value,
        radius: elem.querySelector('input[name="range"]:checked').value,
        respType: elem.querySelector('input[name="resp"]:checked').value
    }
    console.log(formData.establishments, formData.radius, formData.respType);

    axios({
        url: (formData.respType === 'map') ? urlSearch : urlCsv,
        method: 'POST',
        responseType: (formData.respType === 'map') ? 'json' : 'blob',
        data: {
            "query": formData.establishments,
            "radius": formData.radius,
            "lat": coords.latitude,
            "lng": coords.longitude
        }

    }).then(async function (response) {
        if (formData.respType === 'map') {
            console.log('respForMap', response.data)
            await myMap(formData)
        }
        else {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'file.csv'); //or any other extension
            document.body.appendChild(link);
            link.click();
        }

    })

})


