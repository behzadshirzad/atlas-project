var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_city_1 = new ol.format.GeoJSON();
var features_city_1 = format_city_1.readFeatures(json_city_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_city_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_city_1.addFeatures(features_city_1);
var lyr_city_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_city_1, 
                style: style_city_1,
                popuplayertitle: "city",
                interactive: true,
                title: '<img src="styles/legend/city_1.png" /> city'
            });
var format_IRN_adm1_2 = new ol.format.GeoJSON();
var features_IRN_adm1_2 = format_IRN_adm1_2.readFeatures(json_IRN_adm1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IRN_adm1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IRN_adm1_2.addFeatures(features_IRN_adm1_2);
var lyr_IRN_adm1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IRN_adm1_2, 
                style: style_IRN_adm1_2,
                popuplayertitle: "IRN_adm1",
                interactive: true,
                title: 'IRN_adm1'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_city_1.setVisible(true);lyr_IRN_adm1_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_city_1,lyr_IRN_adm1_2];
lyr_city_1.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltitudeMo': 'AltitudeMo', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', });
lyr_IRN_adm1_2.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'NL_NAME_1': 'NL_NAME_1', 'VARNAME_1': 'VARNAME_1', });
lyr_city_1.set('fieldImages', {'OID_': '', 'Name': '', 'FolderPath': '', 'SymbolID': '', 'AltitudeMo': '', 'Snippet': '', 'PopupInfo': '', });
lyr_IRN_adm1_2.set('fieldImages', {'ID_0': '', 'ISO': '', 'NAME_0': '', 'ID_1': '', 'NAME_1': '', 'TYPE_1': '', 'ENGTYPE_1': '', 'NL_NAME_1': '', 'VARNAME_1': '', });
lyr_city_1.set('fieldLabels', {'OID_': 'no label', 'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltitudeMo': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', });
lyr_IRN_adm1_2.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'NL_NAME_1': 'no label', 'VARNAME_1': 'no label', });
lyr_IRN_adm1_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});