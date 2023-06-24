//full screen function
var mapID = document.getElementById('map');
function fullScreenView() {
    if(document.fullscreenElement){
        document.exitFullscreen()
    }else {
    mapID.requestFullscreen();
    }
}
//browser print
L.control.browserPrint({ position: 'topright', title: 'Print' }).addTo(map);

//measure tool
// L.control.measure().addTo(map);

//geocoder
L.Control.geocoder().addTo(map);

//zoom to default extent
$('.zoom-to-default').click(function () {
    map.setView([34.97896114027157, 15.033012362434118], 3)
})
