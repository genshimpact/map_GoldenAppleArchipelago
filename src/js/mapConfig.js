/*
map_GoldenAppleArchipelago | Genshin Impact
Author: "https://github.com/andremalveira" | @andremalveira
Junho de 2021.
*/

var viewMarker = false; // true para mostrar o Marcador de Coordenadas

//cria variavel LatLng da ultima vizualização do mapa
if(localStorage.getItem('lastLocationMap')){
var lastLocationMap = localStorage.getItem('lastLocationMap').split(",");
var lasLMlat = lastLocationMap[0];
var lasLMlng = lastLocationMap[1];
}else{
var lasLMlat = 0;
var lasLMlng = 0;
}
//cria o zoom inicial
if(localStorage.getItem('lastZoomMap')){
var lastZoomMap = localStorage.getItem('lastZoomMap');
} else {
var lastZoomMap = 5;
}


var map = L.map('mapid',{
    zoomControl: false,
    zoomDelta: 0.25,
    zoomSnap: 0, 
}).setView([lasLMlat, lasLMlng], 5).setZoom(lastZoomMap);


//localizão da ultima vizualização do mapa
map.on('moveend', function(event) {
localStorage.setItem('lastLocationMap', L.latLng(map.getCenter()));

});
//ultimo zoom do mapa
map.on('zoomend', function(event) {
localStorage.setItem('lastZoomMap', map.getZoom());
});


//MARCADOR DE COORDENADAS
if(viewMarker){
    var marker = L.marker([0, 0], {draggable: true}).addTo(map);
    marker.bindPopup(L.popup({className:'pointpopup'}).setContent("Marcador")).openPopup();
    marker.on('dragend', function(e) {
    marker.getPopup().setContent(marker.getLatLng().toString()).openOn(map);
    });
}

//TILES
var tile_Layer = L.tileLayer('https://andremalveira.github.io/map_GoldenAppleArchipelago/src/img/tiles/{z}_{x}_{y}.png', {
    attribution: ' developed by <a target="_blank" href="https://github.com/andremalveira" title="Developer">andremalveira</a>',
    continuousWorld: false,
    noWrap: true,  
    minZoom: 4,
    maxZoom: 6,
    tileSize: 256,
}).addTo(map);


//ICONS
var iconTeleport = L.icon({
    iconUrl: 'src/img/iconsMap/teleport.png',
    iconSize: [50, 50],
    iconAnchor: [23, 47],
    popupAnchor: [-3, -76],
});

var iconChest = L.icon({
    iconUrl: 'src/img/iconsMap/chest.png',
    iconSize: [50, 50],
    iconAnchor: [23, 47],
    popupAnchor: [-3, -76],
});

var iconConch = L.icon({
    iconUrl: 'src/img/iconsMap/conch.png',
    iconSize: [50, 50],
    iconAnchor: [23, 47],
    popupAnchor: [-3, -76],
});

var iconMistbubble = L.icon({
    iconUrl: 'src/img/iconsMap/mistbubble.png',
    iconSize: [50, 50],
    iconAnchor: [23, 47],
    popupAnchor: [-3, -76],
});

var iconChallenge  = L.icon({
    iconUrl: 'src/img/iconsMap/challenge.png',
    iconSize: [50, 50],
    iconAnchor: [23, 47],
    popupAnchor: [-3, -76],
});

var iconWaverider  = L.icon({
    iconUrl: 'src/img/iconsMap/waverider.png',
    iconSize: [50, 50],
    iconAnchor: [23, 47],
    popupAnchor: [-3, -76],
});



//TELEPORT
    var teleport1 = L.marker([-3.228271, -10.788574], {icon: iconTeleport}),
        teleport2 = L.marker([-29.190533, -1.384277], {icon: iconTeleport}),
        teleport3 = L.marker([-20.673905, 21.379395], {icon: iconTeleport}),
        teleport4 = L.marker([9.123792, 16.435547], {icon: iconTeleport});
    var teleport = L.layerGroup([teleport1, teleport2, teleport3, teleport4]);


//CHEST COMMON
    var chestCommon = L.layerGroup([
        L.marker([3.951941, 15.600586], {icon: iconChest}), 
        L.marker([5.090944, 14.545898], {icon: iconChest}), 
        L.marker([10.660608, 15.117188], {icon: iconChest}), 
        L.marker([8.733077, 3.493652], {icon: iconChest}), 
        L.marker([-2.130856, 16.259766], {icon: iconChest}), 
        L.marker([-11.264612, 21.203613], {icon: iconChest}), 
        L.marker([-10.660608, 8.085938], {icon: iconChest}),
        L.marker([1.142502, -6.61377], {icon: iconChest}),
        L.marker([-3.688855, -11.206055], {icon: iconChest}),
        L.marker([-2.482133, -20.258789], {icon: iconChest}),
        L.marker([16.088042, -10.151367], {icon: iconChest}),
        L.marker([-20.505231, -4.092373], {icon: iconChest}),
        L.marker([-28.936617, 11.464084], {icon: iconChest}),
        L.marker([-30.334954, -0.41748], {icon: iconChest}),
        L.marker([-29.439598, -0.98877], {icon: iconChest}),
        L.marker([0.76902, -6.394043], {icon: iconChest}),
        L.marker([8.971897, 16.655273], {icon: iconChest}),
        L.marker([4.806365, 15.666504], {icon: iconChest}),
        L.marker([-32.063956, 1.098633], {icon: iconChest})
    ]);

    var conch = L.layerGroup([
        L.marker([-19.911384, 21.796875], {icon: iconConch}),
        L.marker([-21.043491, 20.148926], {icon: iconConch}),
        L.marker([3.754634, 15.666504], {icon: iconConch}),
        L.marker([9.644077, 17.512207], {icon: iconConch}),
        L.marker([0.812961, -6.394043], {icon: iconConch}),
        L.marker([-17.350638, 27.114258], {icon: iconConch}),
        L.marker([-18.875103, 31.35498], {icon: iconConch}),
        L.marker([-6.489983, 25.290527], {icon: iconConch}),
        L.marker([3.294082, 20.808105], {icon: iconConch}),
        L.marker([4.959615, 24.169922], {icon: iconConch}),
        L.marker([5.287887, 13.710938], {icon: iconConch}),
        L.marker([9.102097, 15.974121], {icon: iconConch}),
        L.marker([9.795678, 13.469238], {icon: iconConch}),
        L.marker([11.135287, 12.546387], {icon: iconConch}),
        L.marker([7.384258, 2.878418], {icon: iconConch}),
        L.marker([6.664608, 1.142578], {icon: iconConch}),
        L.marker([14.008696, -10.83252], {icon: iconConch}),
        L.marker([16.024696, -9.84375], {icon: iconConch}),
        L.marker([-2.504085, -11.777344], {icon: iconConch}),
        L.marker([2.152814, -13.601074], {icon: iconConch}),
        L.marker([-7.514981, 3.186035], {icon: iconConch}),
        L.marker([-4.28068, 4.350586], {icon: iconConch}),
        L.marker([-28.07198, -31.289063], {icon: iconConch}),
        L.marker([-31.858897, -0.769043], {icon: iconConch}),
        L.marker([-31.034108, 5.009766], {icon: iconConch}),
        L.marker([-31.615966, 6.855469], {icon: iconConch}),
        L.marker([21.779905, -27.246094], {icon: iconConch}),
        L.marker([23.160563, 26.367188], {icon: iconConch}),
    ])

    var challenge = L.layerGroup([
        L.marker([-21.207459, 6.240234], {icon: iconChallenge}),
        L.marker([-21.555284, 19.226074], {icon: iconChallenge}),
        L.marker([-22.512557, 28.586426], {icon: iconChallenge}),
        L.marker([-31.246268, 8.266853], {icon: iconChallenge}),
        L.marker([-31.27298, 1.76735], {icon: iconChallenge}),
        L.marker([6.995781, 1.954836], {icon: iconChallenge}),
        L.marker([9.006995, -2.201096], {icon: iconChallenge}),
        L.marker([2.762482, -14.825131], {icon: iconChallenge}),
        L.marker([20.672274, -16.126516], {icon: iconChallenge}),

    ])

    var waverider = L.layerGroup([
        L.marker([-2.262595, -11.381836], {icon: iconWaverider}),
        L.marker([-29.668963, -0.263672], {icon: iconWaverider}),
        L.marker([-20.591652, 20.01709], {icon: iconWaverider}),
        L.marker([5.856475, 13.908691], {icon: iconWaverider}),

    ])



    //Control.Layers
    var baseMaps = {
        "Mapa Ilha": tile_Layer
    }
    var overlayMaps  = {
        "<img src='src/img/iconsMap/teleport.png' />": teleport,
        "<img src='src/img/iconsMap/conch2.png' />": conch,
        "<img src='src/img/iconsMap/waverider.png' />": waverider,
        "<img src='src/img/iconsMap/chest.png' />": chestCommon,
        "<img src='src/img/iconsMap/challenge2.png' />": challenge,
    };

    L.control.layers(baseMaps, overlayMaps, {collapsed: false, position: 'topleft'} ).addTo(map);



















//CODE Limite do mapa

L.Map.prototype._panHardBounds = function() {
	this.panInsideBounds(this.options.maxBounds, { animate: false });
};

L.Map.prototype.addHardBounds = function() {
	this.on('drag', this._panHardBounds);
};

L.Map.prototype.removeHardBounds = function() {
	this.off('drag', this._panHardBounds);
};

map.addHardBounds();

var bounds = L.latLngBounds([[47.517201, -97.382812], [-47.872144, 97.207031]]);
map.setMaxBounds(bounds);

//INIT
activeBounds();

function activeBounds() {
  map.addHardBounds();
};

function deactivatedBounds() {
  map.removeHardBounds();
};
// final limite do mapa
