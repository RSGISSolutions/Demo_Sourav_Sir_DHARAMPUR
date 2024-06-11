ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32645").setExtent([640959.576450, 2531885.917059, 641800.704710, 2532429.958075]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_DHARAMPUR_17_SH_1_RS_1 = new ol.format.GeoJSON();
var features_DHARAMPUR_17_SH_1_RS_1 = format_DHARAMPUR_17_SH_1_RS_1.readFeatures(json_DHARAMPUR_17_SH_1_RS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32645'});
var jsonSource_DHARAMPUR_17_SH_1_RS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DHARAMPUR_17_SH_1_RS_1.addFeatures(features_DHARAMPUR_17_SH_1_RS_1);
var lyr_DHARAMPUR_17_SH_1_RS_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DHARAMPUR_17_SH_1_RS_1, 
                style: style_DHARAMPUR_17_SH_1_RS_1,
                popuplayertitle: "DHARAMPUR_17_SH_1_RS",
                interactive: true,
                    title: '<img src="styles/legend/DHARAMPUR_17_SH_1_RS_1.png" /> DHARAMPUR_17_SH_1_RS'
                });
var format_DHARAMPUR_17_SH_1_LR_2 = new ol.format.GeoJSON();
var features_DHARAMPUR_17_SH_1_LR_2 = format_DHARAMPUR_17_SH_1_LR_2.readFeatures(json_DHARAMPUR_17_SH_1_LR_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32645'});
var jsonSource_DHARAMPUR_17_SH_1_LR_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DHARAMPUR_17_SH_1_LR_2.addFeatures(features_DHARAMPUR_17_SH_1_LR_2);
var lyr_DHARAMPUR_17_SH_1_LR_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DHARAMPUR_17_SH_1_LR_2, 
                style: style_DHARAMPUR_17_SH_1_LR_2,
                popuplayertitle: "DHARAMPUR_17_SH_1_LR",
                interactive: true,
                    title: '<img src="styles/legend/DHARAMPUR_17_SH_1_LR_2.png" /> DHARAMPUR_17_SH_1_LR'
                });

lyr_GoogleSatellite_0.setVisible(true);lyr_DHARAMPUR_17_SH_1_RS_1.setVisible(true);lyr_DHARAMPUR_17_SH_1_LR_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_DHARAMPUR_17_SH_1_RS_1,lyr_DHARAMPUR_17_SH_1_LR_2];
lyr_DHARAMPUR_17_SH_1_RS_1.set('fieldAliases', {'Id': 'Id', 'RS_PLOT': 'RS_PLOT', 'AREA': 'AREA', });
lyr_DHARAMPUR_17_SH_1_LR_2.set('fieldAliases', {'Id': 'Id', 'PLOT_NO': 'PLOT_NO', 'AREA': 'AREA', });
lyr_DHARAMPUR_17_SH_1_RS_1.set('fieldImages', {'Id': 'Range', 'RS_PLOT': 'TextEdit', 'AREA': 'TextEdit', });
lyr_DHARAMPUR_17_SH_1_LR_2.set('fieldImages', {'Id': 'Range', 'PLOT_NO': 'TextEdit', 'AREA': 'TextEdit', });
lyr_DHARAMPUR_17_SH_1_RS_1.set('fieldLabels', {'Id': 'no label', 'RS_PLOT': 'inline label - always visible', 'AREA': 'inline label - always visible', });
lyr_DHARAMPUR_17_SH_1_LR_2.set('fieldLabels', {'Id': 'no label', 'PLOT_NO': 'inline label - always visible', 'AREA': 'inline label - always visible', });
lyr_DHARAMPUR_17_SH_1_LR_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});