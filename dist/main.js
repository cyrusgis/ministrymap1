var map = L.map('map', {
    center: [34.97896114027157, 15.033012362434118],
    zoom: 3,
    zoomControl: false,
    measureControl: false
});
L.control.zoom(
    { position: 'topright' }
).addTo(map);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

//add map scale
L.control.scale().addTo(map);


// L.geoJSON(data).addTo(map);
var collegiate = L.geoJSON(collegiate, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            radius: 4,
            fillColor: "red",
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        });
    },
    onEachFeature: function (feature, layer) {
        layer.bindPopup(feature.properties.Status);
    }
}).addTo(map);

var d4l = L.geoJSON(d4l, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            radius: 4,
            fillColor: "yellow",
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        });
    },
    onEachFeature: function (feature, layer) {
        layer.bindPopup(feature.properties.Status);
    }
}).addTo(map);

var encore = L.geoJSON(encore, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            radius: 4,
            fillColor: "green",
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        });
    },
    onEachFeature: function (feature, layer) {
        layer.bindPopup(feature.properties.Status);
    }
}).addTo(map);

var ism = L.geoJSON(ism, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            radius: 4,
            fillColor: "blue",
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        });
    },
    onEachFeature: function (feature, layer) {
        layer.bindPopup(feature.properties.Status);
    }
}).addTo(map);

var military = L.geoJSON(military, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            radius: 4,
            fillColor: "cyan",
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        });
    },
    onEachFeature: function (feature, layer) {
        layer.bindPopup(feature.properties.Status);
    }
}).addTo(map);

var nations = L.geoJSON(nations, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            radius: 4,
            fillColor: "purple",
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        });
    },
    onEachFeature: function (feature, layer) {
        layer.bindPopup(feature.properties.Status);
    }
}).addTo(map);




//basemaps
var Topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

var Terrain = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.{ext}', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    subdomains: 'abcd',
    minZoom: 0,
    maxZoom: 18,
    ext: 'png'
});

var StreetMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
});

var Imagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

var Positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20
}).addTo(map);

var OSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
});

//leaflet layer control
var baseMaps = {
    'Open Street Map': OSM,
    'ESRI Imagery': Imagery,
    'Carto Positron': Positron
}

var featureLayers = {
    'Collegiate Mission': collegiate,
    'D4L Mission': d4l,
    'Encore Mission': encore,
    'ISM Mission': ism,
    'Military Mission': military,
    'Nations Within Mission': nations
}

L.control.layers(baseMaps, featureLayers, { collapsed: false, position: 'topleft' }).addTo(map);

//Legend
var breaks = [17, 14, 11, 8, 5, 3, 0];
var labels = ['Legend', 'Collegiate Mission', 'D4L Mission', 'Encore Mission', 'ISM Mission', 'Military Mission', 'Nations Within Mission'];
function getColor(d) {
    return d >= breaks[0] ? '#' :
        d >= breaks[1] ? "red" :
            d >= breaks[2] ? "yellow" :
                d >= breaks[3] ? "green" :
                    d >= breaks[4] ? "blue" :
                        d >= breaks[5] ? "cyan" :
                            "purple";
}

var legend = L.control({ position: 'topleft' });

legend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend');

    // loop through items and generate legend items each
    for (var i = 0; i < breaks.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(breaks[i]) + ' "></i> ' +
            labels[i] + (breaks ? '' + '<br>' : '');
    }

    return div;
};

legend.addTo(map);

