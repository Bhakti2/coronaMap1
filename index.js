
function updateMap() {
    fetch("/data.json")
        .then(response => response.json())
        .then(rsp => {
            console.log(rsp.records);
            rsp.records.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;

                new mapboxgl.Marker({
                    draggable: true
                })
                    .setLngLat([longitude, latitude])
                    .addTo(map);

            });
        })
}

updateMap();