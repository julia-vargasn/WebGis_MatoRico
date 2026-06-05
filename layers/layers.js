ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:31982").setExtent([353921.391162, 7256465.300000, 396934.952588, 7279930.700000]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_Sombreamento_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Sombreamento<br />\
    <img src="styles/legend/Sombreamento_3_0.png" /> 24<br />\
    <img src="styles/legend/Sombreamento_3_1.png" /> 254<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Sombreamento_3.png",
            attributions: ' ',
            projection: 'EPSG:31982',
            alwaysInRange: true,
            imageExtent: [358954.406200, 7257025.250100, 391904.406200, 7279362.750100]
        })
    });
var lyr_PerfildeCurvatura_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Perfil de Curvatura<br />\
    <img src="styles/legend/PerfildeCurvatura_4_0.png" /> Convexa <br />\
    <img src="styles/legend/PerfildeCurvatura_4_1.png" /> Retilínea <br />\
    <img src="styles/legend/PerfildeCurvatura_4_2.png" /> Côncava <br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/PerfildeCurvatura_4.png",
            attributions: ' ',
            projection: 'EPSG:31982',
            alwaysInRange: true,
            imageExtent: [358954.406200, 7257025.250100, 391904.406200, 7279362.750100]
        })
    });
var lyr_PlanodeCurvatura_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Plano de Curvatura<br />\
    <img src="styles/legend/PlanodeCurvatura_5_0.png" /> Divergente <br />\
    <img src="styles/legend/PlanodeCurvatura_5_1.png" /> Planar<br />\
    <img src="styles/legend/PlanodeCurvatura_5_2.png" /> Convergente <br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/PlanodeCurvatura_5.png",
            attributions: ' ',
            projection: 'EPSG:31982',
            alwaysInRange: true,
            imageExtent: [358954.406200, 7257025.250100, 391904.406200, 7279362.750100]
        })
    });
var lyr_Acmulodefluxo_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Acúmulo de fluxo<br />\
    <img src="styles/legend/Acmulodefluxo_6_0.png" /> <= 0,00000<br />\
    <img src="styles/legend/Acmulodefluxo_6_1.png" /> 0,00000 - 0,00000<br />\
    <img src="styles/legend/Acmulodefluxo_6_2.png" /> 0,00000 - 3,00024<br />\
    <img src="styles/legend/Acmulodefluxo_6_3.png" /> 3,00024 - 7,00055<br />\
    <img src="styles/legend/Acmulodefluxo_6_4.png" /> > 7,00055<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Acmulodefluxo_6.png",
            attributions: ' ',
            projection: 'EPSG:31982',
            alwaysInRange: true,
            imageExtent: [358954.406200, 7257025.250100, 391904.406200, 7279362.750100]
        })
    });
var lyr_Declividade_7 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Declividade<br />\
    <img src="styles/legend/Declividade_7_0.png" /> <= 5 %<br />\
    <img src="styles/legend/Declividade_7_1.png" /> 5 % - 10 %<br />\
    <img src="styles/legend/Declividade_7_2.png" /> 10 % - 15 %<br />\
    <img src="styles/legend/Declividade_7_3.png" /> 15 % - 20 %<br />\
    <img src="styles/legend/Declividade_7_4.png" /> 20 % - 25 %<br />\
    <img src="styles/legend/Declividade_7_5.png" /> 25 % - 30 %<br />\
    <img src="styles/legend/Declividade_7_6.png" /> 30 % - 35 %<br />\
    <img src="styles/legend/Declividade_7_7.png" /> > 35 %<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Declividade_7.png",
            attributions: ' ',
            projection: 'EPSG:31982',
            alwaysInRange: true,
            imageExtent: [358954.406200, 7257025.250100, 391904.406200, 7279362.750100]
        })
    });
var lyr_ndicedePosioTopogrficaIPT_8 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Índice de Posição Topográfica - IPT<br />\
    <img src="styles/legend/ndicedePosioTopogrficaIPT_8_0.png" /> Áreas planas<br />\
    <img src="styles/legend/ndicedePosioTopogrficaIPT_8_1.png" /> Pico <br />\
    <img src="styles/legend/ndicedePosioTopogrficaIPT_8_2.png" /> Crista <br />\
    <img src="styles/legend/ndicedePosioTopogrficaIPT_8_3.png" /> Ressaltos <br />\
    <img src="styles/legend/ndicedePosioTopogrficaIPT_8_4.png" /> Crista secundária<br />\
    <img src="styles/legend/ndicedePosioTopogrficaIPT_8_5.png" /> Encosta <br />\
    <img src="styles/legend/ndicedePosioTopogrficaIPT_8_6.png" /> Escavado <br />\
    <img src="styles/legend/ndicedePosioTopogrficaIPT_8_7.png" /> Base da encosta<br />\
    <img src="styles/legend/ndicedePosioTopogrficaIPT_8_8.png" /> Vale <br />\
    <img src="styles/legend/ndicedePosioTopogrficaIPT_8_9.png" /> Fosso <br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ndicedePosioTopogrficaIPT_8.png",
            attributions: ' ',
            projection: 'EPSG:31982',
            alwaysInRange: true,
            imageExtent: [358954.406200, 7257025.250100, 391904.406200, 7279362.750100]
        })
    });
var lyr_Direodavertente_9 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Direção da vertente<br />\
    <img src="styles/legend/Direodavertente_9_0.png" /> N<br />\
    <img src="styles/legend/Direodavertente_9_1.png" /> NE<br />\
    <img src="styles/legend/Direodavertente_9_2.png" /> L<br />\
    <img src="styles/legend/Direodavertente_9_3.png" /> SE<br />\
    <img src="styles/legend/Direodavertente_9_4.png" /> S<br />\
    <img src="styles/legend/Direodavertente_9_5.png" /> SO<br />\
    <img src="styles/legend/Direodavertente_9_6.png" /> O<br />\
    <img src="styles/legend/Direodavertente_9_7.png" /> NO<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Direodavertente_9.png",
            attributions: ' ',
            projection: 'EPSG:31982',
            alwaysInRange: true,
            imageExtent: [358954.406200, 7257025.250100, 391904.406200, 7279362.750100]
        })
    });
var lyr_Altitude_10 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Altitude<br />\
    <img src="styles/legend/Altitude_10_0.png" /> <= 400 m<br />\
    <img src="styles/legend/Altitude_10_1.png" /> 400 m - 500 m<br />\
    <img src="styles/legend/Altitude_10_2.png" /> 500 m - 600 m<br />\
    <img src="styles/legend/Altitude_10_3.png" /> 600 m - 700 m<br />\
    <img src="styles/legend/Altitude_10_4.png" /> 700 m - 800 m<br />\
    <img src="styles/legend/Altitude_10_5.png" /> 800 m - 900 m<br />\
    <img src="styles/legend/Altitude_10_6.png" /> 900 m - 1000 m<br />\
    <img src="styles/legend/Altitude_10_7.png" /> > 1000 m<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Altitude_10.png",
            attributions: ' ',
            projection: 'EPSG:31982',
            alwaysInRange: true,
            imageExtent: [358954.406200, 7257025.250100, 391904.406200, 7279362.750100]
        })
    });
var lyr_Curvasdenvel_11 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Curvas de nível<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Curvasdenvel_11.png",
            attributions: ' ',
            projection: 'EPSG:31982',
            alwaysInRange: true,
            imageExtent: [358954.406200, 7257025.250100, 391904.406200, 7279362.750100]
        })
    });
var format_APPRios1985_12 = new ol.format.GeoJSON();
var features_APPRios1985_12 = format_APPRios1985_12.readFeatures(json_APPRios1985_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_APPRios1985_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APPRios1985_12.addFeatures(features_APPRios1985_12);
var lyr_APPRios1985_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APPRios1985_12, 
                style: style_APPRios1985_12,
                popuplayertitle: 'APP Rios 1985',
                interactive: false,
    title: 'APP Rios 1985<br />\
    <img src="styles/legend/APPRios1985_12_0.png" /> Formação Florestal <br />\
    <img src="styles/legend/APPRios1985_12_1.png" /> Silvicultura<br />\
    <img src="styles/legend/APPRios1985_12_2.png" /> Pastagem<br />\
    <img src="styles/legend/APPRios1985_12_3.png" /> Mosaico de Usos <br />\
    <img src="styles/legend/APPRios1985_12_4.png" /> Outras Áreas não Vegetadas<br />\
    <img src="styles/legend/APPRios1985_12_5.png" /> Rio, Lago e Oceano <br />\
    <img src="styles/legend/APPRios1985_12_6.png" /> Soja<br />\
    <img src="styles/legend/APPRios1985_12_7.png" /> Outras Lavouras Temporárias<br />\
    <img src="styles/legend/APPRios1985_12_8.png" /> Café<br />\
    <img src="styles/legend/APPRios1985_12_9.png" /> Outras Lavouras Perenes<br />' });
var format_APPNascentes1985_13 = new ol.format.GeoJSON();
var features_APPNascentes1985_13 = format_APPNascentes1985_13.readFeatures(json_APPNascentes1985_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_APPNascentes1985_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APPNascentes1985_13.addFeatures(features_APPNascentes1985_13);
var lyr_APPNascentes1985_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APPNascentes1985_13, 
                style: style_APPNascentes1985_13,
                popuplayertitle: 'APP Nascentes 1985',
                interactive: false,
    title: 'APP Nascentes 1985<br />\
    <img src="styles/legend/APPNascentes1985_13_0.png" /> Formação Florestal <br />\
    <img src="styles/legend/APPNascentes1985_13_1.png" /> Silvicultura<br />\
    <img src="styles/legend/APPNascentes1985_13_2.png" /> Pastagem<br />\
    <img src="styles/legend/APPNascentes1985_13_3.png" /> Mosaico de Usos <br />\
    <img src="styles/legend/APPNascentes1985_13_4.png" /> Outras Áreas não Vegetadas<br />\
    <img src="styles/legend/APPNascentes1985_13_5.png" /> Rio, Lago e Oceano <br />\
    <img src="styles/legend/APPNascentes1985_13_6.png" /> Soja<br />\
    <img src="styles/legend/APPNascentes1985_13_7.png" /> Outras Lavouras Temporárias<br />\
    <img src="styles/legend/APPNascentes1985_13_8.png" /> Café<br />\
    <img src="styles/legend/APPNascentes1985_13_9.png" /> Outras Lavouras Perenes<br />' });
var format_APPRios2000_14 = new ol.format.GeoJSON();
var features_APPRios2000_14 = format_APPRios2000_14.readFeatures(json_APPRios2000_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_APPRios2000_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APPRios2000_14.addFeatures(features_APPRios2000_14);
var lyr_APPRios2000_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APPRios2000_14, 
                style: style_APPRios2000_14,
                popuplayertitle: 'APP Rios 2000',
                interactive: false,
    title: 'APP Rios 2000<br />\
    <img src="styles/legend/APPRios2000_14_0.png" /> Formação Florestal <br />\
    <img src="styles/legend/APPRios2000_14_1.png" /> Silvicultura<br />\
    <img src="styles/legend/APPRios2000_14_2.png" /> Pastagem<br />\
    <img src="styles/legend/APPRios2000_14_3.png" /> Mosaico de Usos <br />\
    <img src="styles/legend/APPRios2000_14_4.png" /> Outras Áreas não Vegetadas<br />\
    <img src="styles/legend/APPRios2000_14_5.png" /> Rio, Lago e Oceano <br />\
    <img src="styles/legend/APPRios2000_14_6.png" /> Soja<br />\
    <img src="styles/legend/APPRios2000_14_7.png" /> Outras Lavouras Temporárias<br />\
    <img src="styles/legend/APPRios2000_14_8.png" /> Café<br />\
    <img src="styles/legend/APPRios2000_14_9.png" /> Outras Lavouras Perenes<br />' });
var format_APPNascentes2000_15 = new ol.format.GeoJSON();
var features_APPNascentes2000_15 = format_APPNascentes2000_15.readFeatures(json_APPNascentes2000_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_APPNascentes2000_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APPNascentes2000_15.addFeatures(features_APPNascentes2000_15);
var lyr_APPNascentes2000_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APPNascentes2000_15, 
                style: style_APPNascentes2000_15,
                popuplayertitle: 'APP Nascentes 2000',
                interactive: false,
    title: 'APP Nascentes 2000<br />\
    <img src="styles/legend/APPNascentes2000_15_0.png" /> Formação Florestal <br />\
    <img src="styles/legend/APPNascentes2000_15_1.png" /> Silvicultura<br />\
    <img src="styles/legend/APPNascentes2000_15_2.png" /> Pastagem<br />\
    <img src="styles/legend/APPNascentes2000_15_3.png" /> Mosaico de Usos <br />\
    <img src="styles/legend/APPNascentes2000_15_4.png" /> Outras Áreas não Vegetadas<br />\
    <img src="styles/legend/APPNascentes2000_15_5.png" /> Rio, Lago e Oceano <br />\
    <img src="styles/legend/APPNascentes2000_15_6.png" /> Soja<br />\
    <img src="styles/legend/APPNascentes2000_15_7.png" /> Outras Lavouras Temporárias<br />\
    <img src="styles/legend/APPNascentes2000_15_8.png" /> Café<br />\
    <img src="styles/legend/APPNascentes2000_15_9.png" /> Outras Lavouras Perenes<br />' });
var format_APPRios2010_16 = new ol.format.GeoJSON();
var features_APPRios2010_16 = format_APPRios2010_16.readFeatures(json_APPRios2010_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_APPRios2010_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APPRios2010_16.addFeatures(features_APPRios2010_16);
var lyr_APPRios2010_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APPRios2010_16, 
                style: style_APPRios2010_16,
                popuplayertitle: 'APP Rios 2010',
                interactive: false,
    title: 'APP Rios 2010<br />\
    <img src="styles/legend/APPRios2010_16_0.png" /> Formação Florestal <br />\
    <img src="styles/legend/APPRios2010_16_1.png" /> Silvicultura<br />\
    <img src="styles/legend/APPRios2010_16_2.png" /> Pastagem<br />\
    <img src="styles/legend/APPRios2010_16_3.png" /> Mosaico de Usos <br />\
    <img src="styles/legend/APPRios2010_16_4.png" /> Outras Áreas não Vegetadas<br />\
    <img src="styles/legend/APPRios2010_16_5.png" /> Rio, Lago e Oceano <br />\
    <img src="styles/legend/APPRios2010_16_6.png" /> Soja<br />\
    <img src="styles/legend/APPRios2010_16_7.png" /> Outras Lavouras Temporárias<br />\
    <img src="styles/legend/APPRios2010_16_8.png" /> Café<br />\
    <img src="styles/legend/APPRios2010_16_9.png" /> Outras Lavouras Perenes<br />' });
var format_APPNascentes2010_17 = new ol.format.GeoJSON();
var features_APPNascentes2010_17 = format_APPNascentes2010_17.readFeatures(json_APPNascentes2010_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_APPNascentes2010_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APPNascentes2010_17.addFeatures(features_APPNascentes2010_17);
var lyr_APPNascentes2010_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APPNascentes2010_17, 
                style: style_APPNascentes2010_17,
                popuplayertitle: 'APP Nascentes 2010',
                interactive: false,
    title: 'APP Nascentes 2010<br />\
    <img src="styles/legend/APPNascentes2010_17_0.png" /> Formação Florestal <br />\
    <img src="styles/legend/APPNascentes2010_17_1.png" /> Silvicultura<br />\
    <img src="styles/legend/APPNascentes2010_17_2.png" /> Pastagem<br />\
    <img src="styles/legend/APPNascentes2010_17_3.png" /> Mosaico de Usos <br />\
    <img src="styles/legend/APPNascentes2010_17_4.png" /> Outras Áreas não Vegetadas<br />\
    <img src="styles/legend/APPNascentes2010_17_5.png" /> Rio, Lago e Oceano <br />\
    <img src="styles/legend/APPNascentes2010_17_6.png" /> Soja<br />\
    <img src="styles/legend/APPNascentes2010_17_7.png" /> Outras Lavouras Temporárias<br />\
    <img src="styles/legend/APPNascentes2010_17_8.png" /> Café<br />\
    <img src="styles/legend/APPNascentes2010_17_9.png" /> Outras Lavouras Perenes<br />' });
var format_APPRios2020_18 = new ol.format.GeoJSON();
var features_APPRios2020_18 = format_APPRios2020_18.readFeatures(json_APPRios2020_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_APPRios2020_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APPRios2020_18.addFeatures(features_APPRios2020_18);
var lyr_APPRios2020_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APPRios2020_18, 
                style: style_APPRios2020_18,
                popuplayertitle: 'APP Rios 2020',
                interactive: false,
    title: 'APP Rios 2020<br />\
    <img src="styles/legend/APPRios2020_18_0.png" /> Formação Florestal <br />\
    <img src="styles/legend/APPRios2020_18_1.png" /> Silvicultura<br />\
    <img src="styles/legend/APPRios2020_18_2.png" /> Pastagem<br />\
    <img src="styles/legend/APPRios2020_18_3.png" /> Mosaico de Usos <br />\
    <img src="styles/legend/APPRios2020_18_4.png" /> Outras Áreas não Vegetadas<br />\
    <img src="styles/legend/APPRios2020_18_5.png" /> Rio, Lago e Oceano <br />\
    <img src="styles/legend/APPRios2020_18_6.png" /> Soja<br />\
    <img src="styles/legend/APPRios2020_18_7.png" /> Outras Lavouras Temporárias<br />\
    <img src="styles/legend/APPRios2020_18_8.png" /> Café<br />\
    <img src="styles/legend/APPRios2020_18_9.png" /> Outras Lavouras Perenes<br />' });
var format_APPNascentes2020_19 = new ol.format.GeoJSON();
var features_APPNascentes2020_19 = format_APPNascentes2020_19.readFeatures(json_APPNascentes2020_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_APPNascentes2020_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APPNascentes2020_19.addFeatures(features_APPNascentes2020_19);
var lyr_APPNascentes2020_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APPNascentes2020_19, 
                style: style_APPNascentes2020_19,
                popuplayertitle: 'APP Nascentes 2020',
                interactive: false,
    title: 'APP Nascentes 2020<br />\
    <img src="styles/legend/APPNascentes2020_19_0.png" /> Formação Florestal <br />\
    <img src="styles/legend/APPNascentes2020_19_1.png" /> Silvicultura<br />\
    <img src="styles/legend/APPNascentes2020_19_2.png" /> Pastagem<br />\
    <img src="styles/legend/APPNascentes2020_19_3.png" /> Mosaico de Usos <br />\
    <img src="styles/legend/APPNascentes2020_19_4.png" /> Outras Áreas não Vegetadas<br />\
    <img src="styles/legend/APPNascentes2020_19_5.png" /> Rio, Lago e Oceano <br />\
    <img src="styles/legend/APPNascentes2020_19_6.png" /> Soja<br />\
    <img src="styles/legend/APPNascentes2020_19_7.png" /> Outras Lavouras Temporárias<br />\
    <img src="styles/legend/APPNascentes2020_19_8.png" /> Café<br />\
    <img src="styles/legend/APPNascentes2020_19_9.png" /> Outras Lavouras Perenes<br />' });
var format_APPRios2024_20 = new ol.format.GeoJSON();
var features_APPRios2024_20 = format_APPRios2024_20.readFeatures(json_APPRios2024_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_APPRios2024_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APPRios2024_20.addFeatures(features_APPRios2024_20);
var lyr_APPRios2024_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APPRios2024_20, 
                style: style_APPRios2024_20,
                popuplayertitle: 'APP Rios 2024',
                interactive: false,
    title: 'APP Rios 2024<br />\
    <img src="styles/legend/APPRios2024_20_0.png" /> Formação Florestal <br />\
    <img src="styles/legend/APPRios2024_20_1.png" /> Silvicultura<br />\
    <img src="styles/legend/APPRios2024_20_2.png" /> Pastagem<br />\
    <img src="styles/legend/APPRios2024_20_3.png" /> Mosaico de Usos <br />\
    <img src="styles/legend/APPRios2024_20_4.png" /> Outras Áreas não Vegetadas<br />\
    <img src="styles/legend/APPRios2024_20_5.png" /> Rio, Lago e Oceano <br />\
    <img src="styles/legend/APPRios2024_20_6.png" /> Soja<br />\
    <img src="styles/legend/APPRios2024_20_7.png" /> Outras Lavouras Temporárias<br />\
    <img src="styles/legend/APPRios2024_20_8.png" /> Café<br />\
    <img src="styles/legend/APPRios2024_20_9.png" /> Outras Lavouras Perenes<br />' });
var format_APPNascentes2024_21 = new ol.format.GeoJSON();
var features_APPNascentes2024_21 = format_APPNascentes2024_21.readFeatures(json_APPNascentes2024_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_APPNascentes2024_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APPNascentes2024_21.addFeatures(features_APPNascentes2024_21);
var lyr_APPNascentes2024_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APPNascentes2024_21, 
                style: style_APPNascentes2024_21,
                popuplayertitle: 'APP Nascentes 2024',
                interactive: false,
    title: 'APP Nascentes 2024<br />\
    <img src="styles/legend/APPNascentes2024_21_0.png" /> Formação Florestal <br />\
    <img src="styles/legend/APPNascentes2024_21_1.png" /> Silvicultura<br />\
    <img src="styles/legend/APPNascentes2024_21_2.png" /> Pastagem<br />\
    <img src="styles/legend/APPNascentes2024_21_3.png" /> Mosaico de Usos <br />\
    <img src="styles/legend/APPNascentes2024_21_4.png" /> Outras Áreas não Vegetadas<br />\
    <img src="styles/legend/APPNascentes2024_21_5.png" /> Rio, Lago e Oceano <br />\
    <img src="styles/legend/APPNascentes2024_21_6.png" /> Soja<br />\
    <img src="styles/legend/APPNascentes2024_21_7.png" /> Outras Lavouras Temporárias<br />\
    <img src="styles/legend/APPNascentes2024_21_8.png" /> Café<br />\
    <img src="styles/legend/APPNascentes2024_21_9.png" /> Outras Lavouras Perenes<br />' });
var lyr_MapBiomaUsoecoberturadaterra1985_22 = new ol.layer.Image({
        opacity: 1,
        
    title: 'MapBioma Uso e cobertura da terra 1985<br />\
    <img src="styles/legend/MapBiomaUsoecoberturadaterra1985_22_0.png" /> Formação Florestal<br />\
    <img src="styles/legend/MapBiomaUsoecoberturadaterra1985_22_1.png" /> Silvicultura<br />\
    <img src="styles/legend/MapBiomaUsoecoberturadaterra1985_22_2.png" /> Pastagem<br />\
    <img src="styles/legend/MapBiomaUsoecoberturadaterra1985_22_3.png" /> Mosaico de Usos<br />\
    <img src="styles/legend/MapBiomaUsoecoberturadaterra1985_22_4.png" /> Área Urbanizada<br />\
    <img src="styles/legend/MapBiomaUsoecoberturadaterra1985_22_5.png" /> Outras Áreas não Vegetadas<br />\
    <img src="styles/legend/MapBiomaUsoecoberturadaterra1985_22_6.png" /> Rio, Lago e Oceano<br />\
    <img src="styles/legend/MapBiomaUsoecoberturadaterra1985_22_7.png" /> Soja<br />\
    <img src="styles/legend/MapBiomaUsoecoberturadaterra1985_22_8.png" /> Outras Lavouras Temporárias<br />\
    <img src="styles/legend/MapBiomaUsoecoberturadaterra1985_22_9.png" /> Café<br />\
    <img src="styles/legend/MapBiomaUsoecoberturadaterra1985_22_10.png" /> Outras Lavouras Perenes<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/MapBiomaUsoecoberturadaterra1985_22.png",
            attributions: ' ',
            projection: 'EPSG:31982',
            alwaysInRange: true,
            imageExtent: [358957.998200, 7257042.065900, 391896.062100, 7279346.802500]
        })
    });
var lyr_MapBiomaUsoecoberturadaterra2000_23 = new ol.layer.Image({
        opacity: 1,
        
    title: 'MapBioma Uso e cobertura da terra 2000<br />\
    <img src="styles/legend/MapBiomaUsoecoberturadaterra2000_23_0.png" /> Formação Florestal<br />\
    <img src="styles/legend/MapBiomaUsoecoberturadaterra2000_23_1.png" /> Silvicultura<br />\
    <img src="styles/legend/MapBiomaUsoecoberturadaterra2000_23_2.png" /> Pastagem<br />\
    <img src="styles/legend/MapBiomaUsoecoberturadaterra2000_23_3.png" /> Mosaico de Usos<br />\
    <img src="styles/legend/MapBiomaUsoecoberturadaterra2000_23_4.png" /> Área Urbanizada<br />\
    <img src="styles/legend/MapBiomaUsoecoberturadaterra2000_23_5.png" /> Outras Áreas não Vegetadas<br />\
    <img src="styles/legend/MapBiomaUsoecoberturadaterra2000_23_6.png" /> Rio, Lago e Oceano<br />\
    <img src="styles/legend/MapBiomaUsoecoberturadaterra2000_23_7.png" /> Soja<br />\
    <img src="styles/legend/MapBiomaUsoecoberturadaterra2000_23_8.png" /> Outras Lavouras Temporárias<br />\
    <img src="styles/legend/MapBiomaUsoecoberturadaterra2000_23_9.png" /> Café<br />\
    <img src="styles/legend/MapBiomaUsoecoberturadaterra2000_23_10.png" /> Outras Lavouras Perenes<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/MapBiomaUsoecoberturadaterra2000_23.png",
            attributions: ' ',
            projection: 'EPSG:31982',
            alwaysInRange: true,
            imageExtent: [358957.998200, 7257042.065900, 391896.062100, 7279346.802500]
        })
    });
var lyr_MapBiomaUsoecoberturadaterra2010_24 = new ol.layer.Image({
        opacity: 1,
        
    title: 'MapBioma Uso e cobertura da terra 2010<br />\
    <img src="styles/legend/MapBiomaUsoecoberturadaterra2010_24_0.png" /> Formação Florestal<br />\
    <img src="styles/legend/MapBiomaUsoecoberturadaterra2010_24_1.png" /> Silvicultura<br />\
    <img src="styles/legend/MapBiomaUsoecoberturadaterra2010_24_2.png" /> Pastagem<br />\
    <img src="styles/legend/MapBiomaUsoecoberturadaterra2010_24_3.png" /> Mosaico de Usos<br />\
    <img src="styles/legend/MapBiomaUsoecoberturadaterra2010_24_4.png" /> Área Urbanizada<br />\
    <img src="styles/legend/MapBiomaUsoecoberturadaterra2010_24_5.png" /> Outras Áreas não Vegetadas<br />\
    <img src="styles/legend/MapBiomaUsoecoberturadaterra2010_24_6.png" /> Rio, Lago e Oceano<br />\
    <img src="styles/legend/MapBiomaUsoecoberturadaterra2010_24_7.png" /> Soja<br />\
    <img src="styles/legend/MapBiomaUsoecoberturadaterra2010_24_8.png" /> Outras Lavouras Temporárias<br />\
    <img src="styles/legend/MapBiomaUsoecoberturadaterra2010_24_9.png" /> Café<br />\
    <img src="styles/legend/MapBiomaUsoecoberturadaterra2010_24_10.png" /> Outras Lavouras Perenes<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/MapBiomaUsoecoberturadaterra2010_24.png",
            attributions: ' ',
            projection: 'EPSG:31982',
            alwaysInRange: true,
            imageExtent: [358957.998200, 7257042.065900, 391896.062100, 7279346.802500]
        })
    });
var lyr_MapBiomaUsoecoberturadaterra2020_25 = new ol.layer.Image({
        opacity: 1,
        
    title: 'MapBioma Uso e cobertura da terra 2020<br />\
    <img src="styles/legend/MapBiomaUsoecoberturadaterra2020_25_0.png" /> Formação Florestal<br />\
    <img src="styles/legend/MapBiomaUsoecoberturadaterra2020_25_1.png" /> Silvicultura<br />\
    <img src="styles/legend/MapBiomaUsoecoberturadaterra2020_25_2.png" /> Pastagem<br />\
    <img src="styles/legend/MapBiomaUsoecoberturadaterra2020_25_3.png" /> Mosaico de Usos<br />\
    <img src="styles/legend/MapBiomaUsoecoberturadaterra2020_25_4.png" /> Área Urbanizada<br />\
    <img src="styles/legend/MapBiomaUsoecoberturadaterra2020_25_5.png" /> Outras Áreas não Vegetadas<br />\
    <img src="styles/legend/MapBiomaUsoecoberturadaterra2020_25_6.png" /> Rio, Lago e Oceano<br />\
    <img src="styles/legend/MapBiomaUsoecoberturadaterra2020_25_7.png" /> Soja<br />\
    <img src="styles/legend/MapBiomaUsoecoberturadaterra2020_25_8.png" /> Outras Lavouras Temporárias<br />\
    <img src="styles/legend/MapBiomaUsoecoberturadaterra2020_25_9.png" /> Café<br />\
    <img src="styles/legend/MapBiomaUsoecoberturadaterra2020_25_10.png" /> Outras Lavouras Perenes<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/MapBiomaUsoecoberturadaterra2020_25.png",
            attributions: ' ',
            projection: 'EPSG:31982',
            alwaysInRange: true,
            imageExtent: [358957.998200, 7257042.065900, 391896.062100, 7279346.802500]
        })
    });
var lyr_MapBiomaUsoecoberturadaterra2024_26 = new ol.layer.Image({
        opacity: 1,
        
    title: 'MapBioma Uso e cobertura da terra 2024<br />\
    <img src="styles/legend/MapBiomaUsoecoberturadaterra2024_26_0.png" /> Formação Florestal<br />\
    <img src="styles/legend/MapBiomaUsoecoberturadaterra2024_26_1.png" /> Silvicultura<br />\
    <img src="styles/legend/MapBiomaUsoecoberturadaterra2024_26_2.png" /> Pastagem<br />\
    <img src="styles/legend/MapBiomaUsoecoberturadaterra2024_26_3.png" /> Mosaico de Usos<br />\
    <img src="styles/legend/MapBiomaUsoecoberturadaterra2024_26_4.png" /> Área Urbanizada<br />\
    <img src="styles/legend/MapBiomaUsoecoberturadaterra2024_26_5.png" /> Outras Áreas não Vegetadas<br />\
    <img src="styles/legend/MapBiomaUsoecoberturadaterra2024_26_6.png" /> Rio, Lago e Oceano<br />\
    <img src="styles/legend/MapBiomaUsoecoberturadaterra2024_26_7.png" /> Soja<br />\
    <img src="styles/legend/MapBiomaUsoecoberturadaterra2024_26_8.png" /> Outras Lavouras Temporárias<br />\
    <img src="styles/legend/MapBiomaUsoecoberturadaterra2024_26_9.png" /> Café<br />\
    <img src="styles/legend/MapBiomaUsoecoberturadaterra2024_26_10.png" /> Outras Lavouras Perenes<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/MapBiomaUsoecoberturadaterra2024_26.png",
            attributions: ' ',
            projection: 'EPSG:31982',
            alwaysInRange: true,
            imageExtent: [358957.998200, 7257042.066000, 391896.062000, 7279346.802600]
        })
    });
var format_IBGESetorescensitrios_27 = new ol.format.GeoJSON();
var features_IBGESetorescensitrios_27 = format_IBGESetorescensitrios_27.readFeatures(json_IBGESetorescensitrios_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_IBGESetorescensitrios_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IBGESetorescensitrios_27.addFeatures(features_IBGESetorescensitrios_27);
var lyr_IBGESetorescensitrios_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IBGESetorescensitrios_27, 
                style: style_IBGESetorescensitrios_27,
                popuplayertitle: 'IBGE Setores censitários',
                interactive: true,
                title: '<img src="styles/legend/IBGESetorescensitrios_27.png" /> IBGE Setores censitários'
            });
var format_IBGEDistribuiodemoradoresporcoreraaIndgenas_28 = new ol.format.GeoJSON();
var features_IBGEDistribuiodemoradoresporcoreraaIndgenas_28 = format_IBGEDistribuiodemoradoresporcoreraaIndgenas_28.readFeatures(json_IBGEDistribuiodemoradoresporcoreraaIndgenas_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_IBGEDistribuiodemoradoresporcoreraaIndgenas_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IBGEDistribuiodemoradoresporcoreraaIndgenas_28.addFeatures(features_IBGEDistribuiodemoradoresporcoreraaIndgenas_28);
var lyr_IBGEDistribuiodemoradoresporcoreraaIndgenas_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IBGEDistribuiodemoradoresporcoreraaIndgenas_28, 
                style: style_IBGEDistribuiodemoradoresporcoreraaIndgenas_28,
                popuplayertitle: 'IBGE Distribuição de moradores por cor e raça: Indígenas ',
                interactive: true,
    title: 'IBGE Distribuição de moradores por cor e raça: Indígenas <br />\
    <img src="styles/legend/IBGEDistribuiodemoradoresporcoreraaIndgenas_28_0.png" /> 0%<br />\
    <img src="styles/legend/IBGEDistribuiodemoradoresporcoreraaIndgenas_28_1.png" /> Falta de informações<br />' });
var format_IBGEDistribuiodemoradoresporcoreraaAmarelos_29 = new ol.format.GeoJSON();
var features_IBGEDistribuiodemoradoresporcoreraaAmarelos_29 = format_IBGEDistribuiodemoradoresporcoreraaAmarelos_29.readFeatures(json_IBGEDistribuiodemoradoresporcoreraaAmarelos_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_IBGEDistribuiodemoradoresporcoreraaAmarelos_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IBGEDistribuiodemoradoresporcoreraaAmarelos_29.addFeatures(features_IBGEDistribuiodemoradoresporcoreraaAmarelos_29);
var lyr_IBGEDistribuiodemoradoresporcoreraaAmarelos_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IBGEDistribuiodemoradoresporcoreraaAmarelos_29, 
                style: style_IBGEDistribuiodemoradoresporcoreraaAmarelos_29,
                popuplayertitle: 'IBGE Distribuição de moradores por cor e raça: Amarelos',
                interactive: true,
    title: 'IBGE Distribuição de moradores por cor e raça: Amarelos<br />\
    <img src="styles/legend/IBGEDistribuiodemoradoresporcoreraaAmarelos_29_0.png" /> 0%<br />\
    <img src="styles/legend/IBGEDistribuiodemoradoresporcoreraaAmarelos_29_1.png" /> Falta de informações<br />' });
var format_IBGEDistribuiodemoradoresporcoreraaPardos_30 = new ol.format.GeoJSON();
var features_IBGEDistribuiodemoradoresporcoreraaPardos_30 = format_IBGEDistribuiodemoradoresporcoreraaPardos_30.readFeatures(json_IBGEDistribuiodemoradoresporcoreraaPardos_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_IBGEDistribuiodemoradoresporcoreraaPardos_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IBGEDistribuiodemoradoresporcoreraaPardos_30.addFeatures(features_IBGEDistribuiodemoradoresporcoreraaPardos_30);
var lyr_IBGEDistribuiodemoradoresporcoreraaPardos_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IBGEDistribuiodemoradoresporcoreraaPardos_30, 
                style: style_IBGEDistribuiodemoradoresporcoreraaPardos_30,
                popuplayertitle: 'IBGE Distribuição de moradores por cor e raça: Pardos',
                interactive: true,
    title: 'IBGE Distribuição de moradores por cor e raça: Pardos<br />\
    <img src="styles/legend/IBGEDistribuiodemoradoresporcoreraaPardos_30_0.png" /> 20%<br />\
    <img src="styles/legend/IBGEDistribuiodemoradoresporcoreraaPardos_30_1.png" /> 22%<br />\
    <img src="styles/legend/IBGEDistribuiodemoradoresporcoreraaPardos_30_2.png" /> 31%<br />\
    <img src="styles/legend/IBGEDistribuiodemoradoresporcoreraaPardos_30_3.png" /> 32%<br />\
    <img src="styles/legend/IBGEDistribuiodemoradoresporcoreraaPardos_30_4.png" /> 33%<br />\
    <img src="styles/legend/IBGEDistribuiodemoradoresporcoreraaPardos_30_5.png" /> 38%<br />\
    <img src="styles/legend/IBGEDistribuiodemoradoresporcoreraaPardos_30_6.png" /> 39%<br />\
    <img src="styles/legend/IBGEDistribuiodemoradoresporcoreraaPardos_30_7.png" /> 40%<br />\
    <img src="styles/legend/IBGEDistribuiodemoradoresporcoreraaPardos_30_8.png" /> 42%<br />\
    <img src="styles/legend/IBGEDistribuiodemoradoresporcoreraaPardos_30_9.png" /> 44%<br />\
    <img src="styles/legend/IBGEDistribuiodemoradoresporcoreraaPardos_30_10.png" /> 48%<br />' });
var format_IBGEDistribuiodemoradoresporcoreraaPretos_31 = new ol.format.GeoJSON();
var features_IBGEDistribuiodemoradoresporcoreraaPretos_31 = format_IBGEDistribuiodemoradoresporcoreraaPretos_31.readFeatures(json_IBGEDistribuiodemoradoresporcoreraaPretos_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_IBGEDistribuiodemoradoresporcoreraaPretos_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IBGEDistribuiodemoradoresporcoreraaPretos_31.addFeatures(features_IBGEDistribuiodemoradoresporcoreraaPretos_31);
var lyr_IBGEDistribuiodemoradoresporcoreraaPretos_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IBGEDistribuiodemoradoresporcoreraaPretos_31, 
                style: style_IBGEDistribuiodemoradoresporcoreraaPretos_31,
                popuplayertitle: 'IBGE Distribuição de moradores por cor e raça: Pretos',
                interactive: true,
    title: 'IBGE Distribuição de moradores por cor e raça: Pretos<br />\
    <img src="styles/legend/IBGEDistribuiodemoradoresporcoreraaPretos_31_0.png" /> 1%<br />\
    <img src="styles/legend/IBGEDistribuiodemoradoresporcoreraaPretos_31_1.png" /> 2%<br />\
    <img src="styles/legend/IBGEDistribuiodemoradoresporcoreraaPretos_31_2.png" /> 3%<br />\
    <img src="styles/legend/IBGEDistribuiodemoradoresporcoreraaPretos_31_3.png" /> 4%<br />\
    <img src="styles/legend/IBGEDistribuiodemoradoresporcoreraaPretos_31_4.png" /> 5%<br />\
    <img src="styles/legend/IBGEDistribuiodemoradoresporcoreraaPretos_31_5.png" /> 6%<br />\
    <img src="styles/legend/IBGEDistribuiodemoradoresporcoreraaPretos_31_6.png" /> 10%<br />\
    <img src="styles/legend/IBGEDistribuiodemoradoresporcoreraaPretos_31_7.png" /> 12%<br />\
    <img src="styles/legend/IBGEDistribuiodemoradoresporcoreraaPretos_31_8.png" /> Falta de informações<br />' });
var format_IBGEDistribuiodemoradoresporcoreraaBrancos_32 = new ol.format.GeoJSON();
var features_IBGEDistribuiodemoradoresporcoreraaBrancos_32 = format_IBGEDistribuiodemoradoresporcoreraaBrancos_32.readFeatures(json_IBGEDistribuiodemoradoresporcoreraaBrancos_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_IBGEDistribuiodemoradoresporcoreraaBrancos_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IBGEDistribuiodemoradoresporcoreraaBrancos_32.addFeatures(features_IBGEDistribuiodemoradoresporcoreraaBrancos_32);
var lyr_IBGEDistribuiodemoradoresporcoreraaBrancos_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IBGEDistribuiodemoradoresporcoreraaBrancos_32, 
                style: style_IBGEDistribuiodemoradoresporcoreraaBrancos_32,
                popuplayertitle: 'IBGE Distribuição de moradores por cor e raça: Brancos',
                interactive: true,
    title: 'IBGE Distribuição de moradores por cor e raça: Brancos<br />\
    <img src="styles/legend/IBGEDistribuiodemoradoresporcoreraaBrancos_32_0.png" /> 49%<br />\
    <img src="styles/legend/IBGEDistribuiodemoradoresporcoreraaBrancos_32_1.png" /> 50%<br />\
    <img src="styles/legend/IBGEDistribuiodemoradoresporcoreraaBrancos_32_2.png" /> 51%<br />\
    <img src="styles/legend/IBGEDistribuiodemoradoresporcoreraaBrancos_32_3.png" /> 54%<br />\
    <img src="styles/legend/IBGEDistribuiodemoradoresporcoreraaBrancos_32_4.png" /> 58%<br />\
    <img src="styles/legend/IBGEDistribuiodemoradoresporcoreraaBrancos_32_5.png" /> 59%<br />\
    <img src="styles/legend/IBGEDistribuiodemoradoresporcoreraaBrancos_32_6.png" /> 60%<br />\
    <img src="styles/legend/IBGEDistribuiodemoradoresporcoreraaBrancos_32_7.png" /> 66%<br />\
    <img src="styles/legend/IBGEDistribuiodemoradoresporcoreraaBrancos_32_8.png" /> 67%<br />\
    <img src="styles/legend/IBGEDistribuiodemoradoresporcoreraaBrancos_32_9.png" /> 68%<br />\
    <img src="styles/legend/IBGEDistribuiodemoradoresporcoreraaBrancos_32_10.png" /> 72%<br />\
    <img src="styles/legend/IBGEDistribuiodemoradoresporcoreraaBrancos_32_11.png" /> 77%<br />' });
var format_IBGEQuantidadedemoradoresDemografia_33 = new ol.format.GeoJSON();
var features_IBGEQuantidadedemoradoresDemografia_33 = format_IBGEQuantidadedemoradoresDemografia_33.readFeatures(json_IBGEQuantidadedemoradoresDemografia_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_IBGEQuantidadedemoradoresDemografia_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IBGEQuantidadedemoradoresDemografia_33.addFeatures(features_IBGEQuantidadedemoradoresDemografia_33);
var lyr_IBGEQuantidadedemoradoresDemografia_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IBGEQuantidadedemoradoresDemografia_33, 
                style: style_IBGEQuantidadedemoradoresDemografia_33,
                popuplayertitle: 'IBGE Quantidade de moradores: Demografia',
                interactive: true,
    title: 'IBGE Quantidade de moradores: Demografia<br />\
    <img src="styles/legend/IBGEQuantidadedemoradoresDemografia_33_0.png" /> 47<br />\
    <img src="styles/legend/IBGEQuantidadedemoradoresDemografia_33_1.png" /> 76<br />\
    <img src="styles/legend/IBGEQuantidadedemoradoresDemografia_33_2.png" /> 78<br />\
    <img src="styles/legend/IBGEQuantidadedemoradoresDemografia_33_3.png" /> 168<br />\
    <img src="styles/legend/IBGEQuantidadedemoradoresDemografia_33_4.png" /> 184<br />\
    <img src="styles/legend/IBGEQuantidadedemoradoresDemografia_33_5.png" /> 193<br />\
    <img src="styles/legend/IBGEQuantidadedemoradoresDemografia_33_6.png" /> 208<br />\
    <img src="styles/legend/IBGEQuantidadedemoradoresDemografia_33_7.png" /> 224<br />\
    <img src="styles/legend/IBGEQuantidadedemoradoresDemografia_33_8.png" /> 320<br />\
    <img src="styles/legend/IBGEQuantidadedemoradoresDemografia_33_9.png" /> 391<br />\
    <img src="styles/legend/IBGEQuantidadedemoradoresDemografia_33_10.png" /> 460<br />\
    <img src="styles/legend/IBGEQuantidadedemoradoresDemografia_33_11.png" /> 527<br />' });
var format_CARreasdosImoveis_34 = new ol.format.GeoJSON();
var features_CARreasdosImoveis_34 = format_CARreasdosImoveis_34.readFeatures(json_CARreasdosImoveis_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_CARreasdosImoveis_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CARreasdosImoveis_34.addFeatures(features_CARreasdosImoveis_34);
var lyr_CARreasdosImoveis_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CARreasdosImoveis_34, 
                style: style_CARreasdosImoveis_34,
                popuplayertitle: 'CAR Áreas dos Imoveis',
                interactive: true,
                title: '<img src="styles/legend/CARreasdosImoveis_34.png" /> CAR Áreas dos Imoveis'
            });
var format_UCEstaoCant_35 = new ol.format.GeoJSON();
var features_UCEstaoCant_35 = format_UCEstaoCant_35.readFeatures(json_UCEstaoCant_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_UCEstaoCant_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UCEstaoCant_35.addFeatures(features_UCEstaoCant_35);
var lyr_UCEstaoCant_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UCEstaoCant_35, 
                style: style_UCEstaoCant_35,
                popuplayertitle: 'UC Estação Cantú',
                interactive: true,
                title: '<img src="styles/legend/UCEstaoCant_35.png" /> UC Estação Cantú'
            });
var format_LOTERPPNSITIOSOJOS_36 = new ol.format.GeoJSON();
var features_LOTERPPNSITIOSOJOS_36 = format_LOTERPPNSITIOSOJOS_36.readFeatures(json_LOTERPPNSITIOSOJOS_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_LOTERPPNSITIOSOJOS_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOTERPPNSITIOSOJOS_36.addFeatures(features_LOTERPPNSITIOSOJOS_36);
var lyr_LOTERPPNSITIOSOJOS_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOTERPPNSITIOSOJOS_36, 
                style: style_LOTERPPNSITIOSOJOS_36,
                popuplayertitle: 'LOTE RPPN SITIO SÃO JOSÉ',
                interactive: true,
                title: '<img src="styles/legend/LOTERPPNSITIOSOJOS_36.png" /> LOTE RPPN SITIO SÃO JOSÉ'
            });
var format_RPPNRECANTODAJAGUATIRICA_37 = new ol.format.GeoJSON();
var features_RPPNRECANTODAJAGUATIRICA_37 = format_RPPNRECANTODAJAGUATIRICA_37.readFeatures(json_RPPNRECANTODAJAGUATIRICA_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_RPPNRECANTODAJAGUATIRICA_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RPPNRECANTODAJAGUATIRICA_37.addFeatures(features_RPPNRECANTODAJAGUATIRICA_37);
var lyr_RPPNRECANTODAJAGUATIRICA_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RPPNRECANTODAJAGUATIRICA_37, 
                style: style_RPPNRECANTODAJAGUATIRICA_37,
                popuplayertitle: 'RPPN  RECANTO DA JAGUATIRICA',
                interactive: true,
                title: '<img src="styles/legend/RPPNRECANTODAJAGUATIRICA_37.png" /> RPPN  RECANTO DA JAGUATIRICA'
            });
var format_COLOMBONOVA_38 = new ol.format.GeoJSON();
var features_COLOMBONOVA_38 = format_COLOMBONOVA_38.readFeatures(json_COLOMBONOVA_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_COLOMBONOVA_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COLOMBONOVA_38.addFeatures(features_COLOMBONOVA_38);
var lyr_COLOMBONOVA_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COLOMBONOVA_38, 
                style: style_COLOMBONOVA_38,
                popuplayertitle: 'COLOMBO NOVA',
                interactive: true,
                title: '<img src="styles/legend/COLOMBONOVA_38.png" /> COLOMBO NOVA'
            });
var format_RPPNFozdoJuquiri_39 = new ol.format.GeoJSON();
var features_RPPNFozdoJuquiri_39 = format_RPPNFozdoJuquiri_39.readFeatures(json_RPPNFozdoJuquiri_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_RPPNFozdoJuquiri_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RPPNFozdoJuquiri_39.addFeatures(features_RPPNFozdoJuquiri_39);
var lyr_RPPNFozdoJuquiri_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RPPNFozdoJuquiri_39, 
                style: style_RPPNFozdoJuquiri_39,
                popuplayertitle: 'RPPN Foz do Juquiri',
                interactive: true,
                title: '<img src="styles/legend/RPPNFozdoJuquiri_39.png" /> RPPN Foz do Juquiri'
            });
var format_RPPNGamelo_40 = new ol.format.GeoJSON();
var features_RPPNGamelo_40 = format_RPPNGamelo_40.readFeatures(json_RPPNGamelo_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_RPPNGamelo_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RPPNGamelo_40.addFeatures(features_RPPNGamelo_40);
var lyr_RPPNGamelo_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RPPNGamelo_40, 
                style: style_RPPNGamelo_40,
                popuplayertitle: 'RPPN Gamelão',
                interactive: true,
                title: '<img src="styles/legend/RPPNGamelo_40.png" /> RPPN Gamelão'
            });
var format_RPPNValedoRioCant_41 = new ol.format.GeoJSON();
var features_RPPNValedoRioCant_41 = format_RPPNValedoRioCant_41.readFeatures(json_RPPNValedoRioCant_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_RPPNValedoRioCant_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RPPNValedoRioCant_41.addFeatures(features_RPPNValedoRioCant_41);
var lyr_RPPNValedoRioCant_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RPPNValedoRioCant_41, 
                style: style_RPPNValedoRioCant_41,
                popuplayertitle: 'RPPN Vale do Rio Cantú',
                interactive: true,
                title: '<img src="styles/legend/RPPNValedoRioCant_41.png" /> RPPN Vale do Rio Cantú'
            });
var format_UCLoteEstaoJuquiri_42 = new ol.format.GeoJSON();
var features_UCLoteEstaoJuquiri_42 = format_UCLoteEstaoJuquiri_42.readFeatures(json_UCLoteEstaoJuquiri_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_UCLoteEstaoJuquiri_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UCLoteEstaoJuquiri_42.addFeatures(features_UCLoteEstaoJuquiri_42);
var lyr_UCLoteEstaoJuquiri_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UCLoteEstaoJuquiri_42, 
                style: style_UCLoteEstaoJuquiri_42,
                popuplayertitle: 'UC Lote Estação Juquiri',
                interactive: true,
                title: '<img src="styles/legend/UCLoteEstaoJuquiri_42.png" /> UC Lote Estação Juquiri'
            });
var format_Rios_43 = new ol.format.GeoJSON();
var features_Rios_43 = format_Rios_43.readFeatures(json_Rios_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_Rios_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rios_43.addFeatures(features_Rios_43);
var lyr_Rios_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rios_43, 
                style: style_Rios_43,
                popuplayertitle: 'Rios',
                interactive: true,
                title: '<img src="styles/legend/Rios_43.png" /> Rios'
            });
var format_Nascentes_44 = new ol.format.GeoJSON();
var features_Nascentes_44 = format_Nascentes_44.readFeatures(json_Nascentes_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_Nascentes_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nascentes_44.addFeatures(features_Nascentes_44);
cluster_Nascentes_44 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Nascentes_44
});
var lyr_Nascentes_44 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Nascentes_44, 
                style: style_Nascentes_44,
                popuplayertitle: 'Nascentes',
                interactive: true,
                title: '<img src="styles/legend/Nascentes_44.png" /> Nascentes'
            });
var format_readaunidadefederativadoParan_45 = new ol.format.GeoJSON();
var features_readaunidadefederativadoParan_45 = format_readaunidadefederativadoParan_45.readFeatures(json_readaunidadefederativadoParan_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_readaunidadefederativadoParan_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_readaunidadefederativadoParan_45.addFeatures(features_readaunidadefederativadoParan_45);
var lyr_readaunidadefederativadoParan_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_readaunidadefederativadoParan_45, 
                style: style_readaunidadefederativadoParan_45,
                popuplayertitle: 'Área da unidade federativa do Paraná ',
                interactive: true,
                title: '<img src="styles/legend/readaunidadefederativadoParan_45.png" /> Área da unidade federativa do Paraná '
            });
var format_readaregiointermediriadeGuarapuava_46 = new ol.format.GeoJSON();
var features_readaregiointermediriadeGuarapuava_46 = format_readaregiointermediriadeGuarapuava_46.readFeatures(json_readaregiointermediriadeGuarapuava_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_readaregiointermediriadeGuarapuava_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_readaregiointermediriadeGuarapuava_46.addFeatures(features_readaregiointermediriadeGuarapuava_46);
var lyr_readaregiointermediriadeGuarapuava_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_readaregiointermediriadeGuarapuava_46, 
                style: style_readaregiointermediriadeGuarapuava_46,
                popuplayertitle: 'Área da região intermediária de Guarapuava',
                interactive: true,
                title: '<img src="styles/legend/readaregiointermediriadeGuarapuava_46.png" /> Área da região intermediária de Guarapuava'
            });
var format_readaregioimediatadePitanga_47 = new ol.format.GeoJSON();
var features_readaregioimediatadePitanga_47 = format_readaregioimediatadePitanga_47.readFeatures(json_readaregioimediatadePitanga_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_readaregioimediatadePitanga_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_readaregioimediatadePitanga_47.addFeatures(features_readaregioimediatadePitanga_47);
var lyr_readaregioimediatadePitanga_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_readaregioimediatadePitanga_47, 
                style: style_readaregioimediatadePitanga_47,
                popuplayertitle: 'Área da região imediata de Pitanga',
                interactive: true,
                title: '<img src="styles/legend/readaregioimediatadePitanga_47.png" /> Área da região imediata de Pitanga'
            });
var format_readomunicpiodeMatoRico_48 = new ol.format.GeoJSON();
var features_readomunicpiodeMatoRico_48 = format_readomunicpiodeMatoRico_48.readFeatures(json_readomunicpiodeMatoRico_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_readomunicpiodeMatoRico_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_readomunicpiodeMatoRico_48.addFeatures(features_readomunicpiodeMatoRico_48);
var lyr_readomunicpiodeMatoRico_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_readomunicpiodeMatoRico_48, 
                style: style_readomunicpiodeMatoRico_48,
                popuplayertitle: 'Área do município de Mato Rico',
                interactive: true,
                title: '<img src="styles/legend/readomunicpiodeMatoRico_48.png" /> Área do município de Mato Rico'
            });
var group_reas = new ol.layer.Group({
                                layers: [lyr_readaunidadefederativadoParan_45,lyr_readaregiointermediriadeGuarapuava_46,lyr_readaregioimediatadePitanga_47,lyr_readomunicpiodeMatoRico_48,],
                                fold: 'close',
                                title: 'Áreas'});
var group_Hidrologia = new ol.layer.Group({
                                layers: [lyr_Rios_43,lyr_Nascentes_44,],
                                fold: 'close',
                                title: 'Hidrologia'});
var group_UnidadesdeConservaoUC = new ol.layer.Group({
                                layers: [lyr_UCEstaoCant_35,lyr_LOTERPPNSITIOSOJOS_36,lyr_RPPNRECANTODAJAGUATIRICA_37,lyr_COLOMBONOVA_38,lyr_RPPNFozdoJuquiri_39,lyr_RPPNGamelo_40,lyr_RPPNValedoRioCant_41,lyr_UCLoteEstaoJuquiri_42,],
                                fold: 'close',
                                title: 'Unidades de Conservação (UC)'});
var group_IBGE = new ol.layer.Group({
                                layers: [lyr_IBGESetorescensitrios_27,lyr_IBGEDistribuiodemoradoresporcoreraaIndgenas_28,lyr_IBGEDistribuiodemoradoresporcoreraaAmarelos_29,lyr_IBGEDistribuiodemoradoresporcoreraaPardos_30,lyr_IBGEDistribuiodemoradoresporcoreraaPretos_31,lyr_IBGEDistribuiodemoradoresporcoreraaBrancos_32,lyr_IBGEQuantidadedemoradoresDemografia_33,],
                                fold: 'close',
                                title: 'IBGE'});
var group_MapBiomaUsoecoberturadaterra = new ol.layer.Group({
                                layers: [lyr_MapBiomaUsoecoberturadaterra1985_22,lyr_MapBiomaUsoecoberturadaterra2000_23,lyr_MapBiomaUsoecoberturadaterra2010_24,lyr_MapBiomaUsoecoberturadaterra2020_25,lyr_MapBiomaUsoecoberturadaterra2024_26,],
                                fold: 'close',
                                title: 'MapBioma Uso e cobertura da terra'});
var group_readePreservaoPermanenteAPP = new ol.layer.Group({
                                layers: [lyr_APPRios1985_12,lyr_APPNascentes1985_13,lyr_APPRios2000_14,lyr_APPNascentes2000_15,lyr_APPRios2010_16,lyr_APPNascentes2010_17,lyr_APPRios2020_18,lyr_APPNascentes2020_19,lyr_APPRios2024_20,lyr_APPNascentes2024_21,],
                                fold: 'close',
                                title: 'Área de Preservação Permanente (APP)'});
var group_Dadosmorfolgicos = new ol.layer.Group({
                                layers: [lyr_Sombreamento_3,lyr_PerfildeCurvatura_4,lyr_PlanodeCurvatura_5,lyr_Acmulodefluxo_6,lyr_Declividade_7,lyr_ndicedePosioTopogrficaIPT_8,lyr_Direodavertente_9,lyr_Altitude_10,lyr_Curvasdenvel_11,],
                                fold: 'close',
                                title: 'Dados morfológicos'});
var group_MapasBase = new ol.layer.Group({
                                layers: [lyr_OSMStandard_0,lyr_GoogleHybrid_1,lyr_GoogleSatellite_2,],
                                fold: 'close',
                                title: 'Mapas Base'});

lyr_OSMStandard_0.setVisible(false);lyr_GoogleHybrid_1.setVisible(false);lyr_GoogleSatellite_2.setVisible(true);lyr_Sombreamento_3.setVisible(false);lyr_PerfildeCurvatura_4.setVisible(false);lyr_PlanodeCurvatura_5.setVisible(false);lyr_Acmulodefluxo_6.setVisible(false);lyr_Declividade_7.setVisible(false);lyr_ndicedePosioTopogrficaIPT_8.setVisible(false);lyr_Direodavertente_9.setVisible(false);lyr_Altitude_10.setVisible(false);lyr_Curvasdenvel_11.setVisible(false);lyr_APPRios1985_12.setVisible(false);lyr_APPNascentes1985_13.setVisible(false);lyr_APPRios2000_14.setVisible(false);lyr_APPNascentes2000_15.setVisible(false);lyr_APPRios2010_16.setVisible(false);lyr_APPNascentes2010_17.setVisible(false);lyr_APPRios2020_18.setVisible(false);lyr_APPNascentes2020_19.setVisible(false);lyr_APPRios2024_20.setVisible(false);lyr_APPNascentes2024_21.setVisible(false);lyr_MapBiomaUsoecoberturadaterra1985_22.setVisible(false);lyr_MapBiomaUsoecoberturadaterra2000_23.setVisible(false);lyr_MapBiomaUsoecoberturadaterra2010_24.setVisible(false);lyr_MapBiomaUsoecoberturadaterra2020_25.setVisible(false);lyr_MapBiomaUsoecoberturadaterra2024_26.setVisible(false);lyr_IBGESetorescensitrios_27.setVisible(false);lyr_IBGEDistribuiodemoradoresporcoreraaIndgenas_28.setVisible(false);lyr_IBGEDistribuiodemoradoresporcoreraaAmarelos_29.setVisible(false);lyr_IBGEDistribuiodemoradoresporcoreraaPardos_30.setVisible(false);lyr_IBGEDistribuiodemoradoresporcoreraaPretos_31.setVisible(false);lyr_IBGEDistribuiodemoradoresporcoreraaBrancos_32.setVisible(false);lyr_IBGEQuantidadedemoradoresDemografia_33.setVisible(false);lyr_CARreasdosImoveis_34.setVisible(false);lyr_UCEstaoCant_35.setVisible(false);lyr_LOTERPPNSITIOSOJOS_36.setVisible(false);lyr_RPPNRECANTODAJAGUATIRICA_37.setVisible(false);lyr_COLOMBONOVA_38.setVisible(false);lyr_RPPNFozdoJuquiri_39.setVisible(false);lyr_RPPNGamelo_40.setVisible(false);lyr_RPPNValedoRioCant_41.setVisible(false);lyr_UCLoteEstaoJuquiri_42.setVisible(false);lyr_Rios_43.setVisible(false);lyr_Nascentes_44.setVisible(false);lyr_readaunidadefederativadoParan_45.setVisible(false);lyr_readaregiointermediriadeGuarapuava_46.setVisible(false);lyr_readaregioimediatadePitanga_47.setVisible(false);lyr_readomunicpiodeMatoRico_48.setVisible(true);
var layersList = [group_MapasBase,group_Dadosmorfolgicos,group_readePreservaoPermanenteAPP,group_MapBiomaUsoecoberturadaterra,group_IBGE,lyr_CARreasdosImoveis_34,group_UnidadesdeConservaoUC,group_Hidrologia,group_reas];
lyr_APPRios1985_12.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_APPNascentes1985_13.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_APPRios2000_14.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_APPNascentes2000_15.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_APPRios2010_16.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_APPNascentes2010_17.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_APPRios2020_18.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_APPNascentes2020_19.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_APPRios2024_20.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_APPNascentes2024_21.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_IBGESetorescensitrios_27.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'CD_SETOR': 'CD_SETOR', 'SITUACAO': 'SITUACAO', 'CD_SIT': 'CD_SIT', 'CD_TIPO': 'CD_TIPO', 'AREA_KM2': 'AREA_KM2', 'CD_REGIAO': 'CD_REGIAO', 'NM_REGIAO': 'NM_REGIAO', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_DIST': 'CD_DIST', 'NM_DIST': 'NM_DIST', 'CD_SUBDIST': 'CD_SUBDIST', 'NM_SUBDIST': 'NM_SUBDIST', 'CD_BAIRRO': 'CD_BAIRRO', 'NM_BAIRRO': 'NM_BAIRRO', 'CD_NU': 'CD_NU', 'NM_NU': 'NM_NU', 'CD_FCU': 'CD_FCU', 'NM_FCU': 'NM_FCU', 'CD_AGLOM': 'CD_AGLOM', 'NM_AGLOM': 'NM_AGLOM', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_CONCURB': 'CD_CONCURB', 'NM_CONCURB': 'NM_CONCURB', });
lyr_IBGEDistribuiodemoradoresporcoreraaIndgenas_28.set('fieldAliases', {'fid': 'fid', 'AREA_KM2': 'AREA_KM2', 'V01317': 'V01317_Cor ou raça é branca_Cor ou Raça', 'V01318': 'V01318_Cor ou raça é preta_Cor ou Raça', 'V01319': 'V01319_Cor ou raça é amarela_Cor ou Raça', 'V01320': 'V01320_Cor ou raça é parda_Cor ou Raça', 'V01321': 'V01321_Cor ou raça é indígena_Cor ou Raça', 'V0001_total hab': 'V0001_total hab', 'hab branco norm': 'hab branco norm', 'hab preta norm': 'hab preta norm', 'hab amarela norm': 'hab amarela norm', 'hab parda norm': 'hab parda norm', 'hab indigena norm': 'hab indigena norm', });
lyr_IBGEDistribuiodemoradoresporcoreraaAmarelos_29.set('fieldAliases', {'fid': 'fid', 'AREA_KM2': 'AREA_KM2', 'V01317': 'V01317_Cor ou raça é branca_Cor ou Raça', 'V01318': 'V01318_Cor ou raça é preta_Cor ou Raça', 'V01319': 'V01319_Cor ou raça é amarela_Cor ou Raça', 'V01320': 'V01320_Cor ou raça é parda_Cor ou Raça', 'V01321': 'V01321_Cor ou raça é indígena_Cor ou Raça', 'V0001_total hab': 'V0001_total hab', 'hab branco norm': 'hab branco norm', 'hab preta norm': 'hab preta norm', 'hab amarela norm': 'hab amarela norm', 'hab parda norm': 'hab parda norm', 'hab indigena norm': 'hab indigena norm', });
lyr_IBGEDistribuiodemoradoresporcoreraaPardos_30.set('fieldAliases', {'fid': 'fid', 'AREA_KM2': 'AREA_KM2', 'V01317': 'V01317_Cor ou raça é branca_Cor ou Raça', 'V01318': 'V01318_Cor ou raça é preta_Cor ou Raça', 'V01319': 'V01319_Cor ou raça é amarela_Cor ou Raça', 'V01320': 'V01320_Cor ou raça é parda_Cor ou Raça', 'V01321': 'V01321_Cor ou raça é indígena_Cor ou Raça', 'V0001_total hab': 'V0001_total hab', 'hab branco norm': 'hab branco norm', 'hab preta norm': 'hab preta norm', 'hab amarela norm': 'hab amarela norm', 'hab parda norm': 'hab parda norm', 'hab indigena norm': 'hab indigena norm', });
lyr_IBGEDistribuiodemoradoresporcoreraaPretos_31.set('fieldAliases', {'fid': 'fid', 'AREA_KM2': 'AREA_KM2', 'V01317': 'V01317_Cor ou raça é branca_Cor ou Raça', 'V01318': 'V01318_Cor ou raça é preta_Cor ou Raça', 'V01319': 'V01319_Cor ou raça é amarela_Cor ou Raça', 'V01320': 'V01320_Cor ou raça é parda_Cor ou Raça', 'V01321': 'V01321_Cor ou raça é indígena_Cor ou Raça', 'V0001_total hab': 'V0001_total hab', 'hab branco norm': 'hab branco norm', 'hab preta norm': 'hab preta norm', 'hab amarela norm': 'hab amarela norm', 'hab parda norm': 'hab parda norm', 'hab indigena norm': 'hab indigena norm', });
lyr_IBGEDistribuiodemoradoresporcoreraaBrancos_32.set('fieldAliases', {'fid': 'fid', 'AREA_KM2': 'AREA_KM2', 'V01317': 'V01317_Cor ou raça é branca_Cor ou Raça', 'V01318': 'V01318_Cor ou raça é preta_Cor ou Raça', 'V01319': 'V01319_Cor ou raça é amarela_Cor ou Raça', 'V01320': 'V01320_Cor ou raça é parda_Cor ou Raça', 'V01321': 'V01321_Cor ou raça é indígena_Cor ou Raça', 'V0001_total hab': 'V0001_total hab', 'hab branco norm': 'hab branco norm', 'hab preta norm': 'hab preta norm', 'hab amarela norm': 'hab amarela norm', 'hab parda norm': 'hab parda norm', 'hab indigena norm': 'hab indigena norm', });
lyr_IBGEQuantidadedemoradoresDemografia_33.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'AREA_KM2': 'AREA_KM2', 'V0001': 'V0001_Total de pessoas_Básico', });
lyr_CARreasdosImoveis_34.set('fieldAliases', {'fid': 'fid', 'cod_tema': 'cod_tema', 'nom_tema': 'nom_tema', 'cod_imovel': 'cod_imovel', 'mod_fiscal': 'mod_fiscal', 'num_area': 'num_area', 'ind_status': 'ind_status', 'ind_tipo': 'ind_tipo', 'des_condic': 'des_condic', 'municipio': 'municipio', 'cod_estado': 'cod_estado', 'dat_criaca': 'dat_criaca', 'dat_atuali': 'dat_atuali', });
lyr_UCEstaoCant_35.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Area (m2)': 'Area (m2)', });
lyr_LOTERPPNSITIOSOJOS_36.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Area (m2)': 'Area (m2)', });
lyr_RPPNRECANTODAJAGUATIRICA_37.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Area (m2)': 'Area (m2)', });
lyr_COLOMBONOVA_38.set('fieldAliases', {'fid': 'fid', 'NOME ': 'NOME ', 'DESCRICAO': 'DESCRICAO', });
lyr_RPPNFozdoJuquiri_39.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Area (m2)': 'Area (m2)', });
lyr_RPPNGamelo_40.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_RPPNValedoRioCant_41.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Area (m2)': 'Area (m2)', });
lyr_UCLoteEstaoJuquiri_42.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Area (m2)': 'Area (m2)', });
lyr_Rios_43.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'cod_ibge': 'cod_ibge', 'municipio': 'municipio', 'hidrografia': 'hidrografia', 'comprimento_km': 'comprimento_km', 'arquivo': 'arquivo', });
lyr_Nascentes_44.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'cod_ibge': 'cod_ibge', 'municipio': 'municipio', 'hidrografia': 'hidrografia', 'arquivo': 'arquivo', });
lyr_readaunidadefederativadoParan_45.set('fieldAliases', {'fid': 'fid', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'NM_REGIAO': 'NM_REGIAO', 'SIGLA_RG': 'SIGLA_RG', 'AREA KM2': 'AREA KM2', });
lyr_readaregiointermediriadeGuarapuava_46.set('fieldAliases', {'fid': 'fid', 'NM_RGINT': 'NM_RGINT', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'NM_REGIAO': 'NM_REGIAO', 'SIGLA_RG': 'SIGLA_RG', 'AREA KM2': 'AREA KM2', });
lyr_readaregioimediatadePitanga_47.set('fieldAliases', {'fid': 'fid', 'NM_RGI': 'NM_RGI', 'NM_RGINT': 'NM_RGINT', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'NM_REGIAO': 'NM_REGIAO', 'SIGLA_RG': 'SIGLA_RG', 'AREA KM2': 'AREA KM2', });
lyr_readomunicpiodeMatoRico_48.set('fieldAliases', {'fid': 'fid', 'NM_MUN': 'NM_MUN', 'NM_RGINT': 'NM_RGINT', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'NM_REGIAO': 'NM_REGIAO', 'SIGLA_RG': 'SIGLA_RG', 'AREA KM2': 'AREA KM2', });
lyr_APPRios1985_12.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_APPNascentes1985_13.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_APPRios2000_14.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_APPNascentes2000_15.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_APPRios2010_16.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_APPNascentes2010_17.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_APPRios2020_18.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_APPNascentes2020_19.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_APPRios2024_20.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_APPNascentes2024_21.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_IBGESetorescensitrios_27.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'CD_SETOR': 'TextEdit', 'SITUACAO': 'TextEdit', 'CD_SIT': 'TextEdit', 'CD_TIPO': 'TextEdit', 'AREA_KM2': 'TextEdit', 'CD_REGIAO': 'TextEdit', 'NM_REGIAO': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'CD_DIST': 'TextEdit', 'NM_DIST': 'TextEdit', 'CD_SUBDIST': 'TextEdit', 'NM_SUBDIST': 'TextEdit', 'CD_BAIRRO': 'TextEdit', 'NM_BAIRRO': 'TextEdit', 'CD_NU': 'TextEdit', 'NM_NU': 'TextEdit', 'CD_FCU': 'TextEdit', 'NM_FCU': 'TextEdit', 'CD_AGLOM': 'TextEdit', 'NM_AGLOM': 'TextEdit', 'CD_RGINT': 'TextEdit', 'NM_RGINT': 'TextEdit', 'CD_RGI': 'TextEdit', 'NM_RGI': 'TextEdit', 'CD_CONCURB': 'TextEdit', 'NM_CONCURB': 'TextEdit', });
lyr_IBGEDistribuiodemoradoresporcoreraaIndgenas_28.set('fieldImages', {'fid': 'TextEdit', 'AREA_KM2': 'TextEdit', 'V01317': 'TextEdit', 'V01318': 'TextEdit', 'V01319': 'TextEdit', 'V01320': 'TextEdit', 'V01321': 'TextEdit', 'V0001_total hab': 'Range', 'hab branco norm': 'Range', 'hab preta norm': 'Range', 'hab amarela norm': 'Range', 'hab parda norm': 'Range', 'hab indigena norm': 'Range', });
lyr_IBGEDistribuiodemoradoresporcoreraaAmarelos_29.set('fieldImages', {'fid': 'TextEdit', 'AREA_KM2': 'TextEdit', 'V01317': 'TextEdit', 'V01318': 'TextEdit', 'V01319': 'TextEdit', 'V01320': 'TextEdit', 'V01321': 'TextEdit', 'V0001_total hab': 'Range', 'hab branco norm': 'Range', 'hab preta norm': 'Range', 'hab amarela norm': 'Range', 'hab parda norm': 'Range', 'hab indigena norm': 'Range', });
lyr_IBGEDistribuiodemoradoresporcoreraaPardos_30.set('fieldImages', {'fid': 'TextEdit', 'AREA_KM2': 'TextEdit', 'V01317': 'TextEdit', 'V01318': 'TextEdit', 'V01319': 'TextEdit', 'V01320': 'TextEdit', 'V01321': 'TextEdit', 'V0001_total hab': 'Range', 'hab branco norm': 'Range', 'hab preta norm': 'Range', 'hab amarela norm': 'Range', 'hab parda norm': 'Range', 'hab indigena norm': 'Range', });
lyr_IBGEDistribuiodemoradoresporcoreraaPretos_31.set('fieldImages', {'fid': 'TextEdit', 'AREA_KM2': 'TextEdit', 'V01317': 'TextEdit', 'V01318': 'TextEdit', 'V01319': 'TextEdit', 'V01320': 'TextEdit', 'V01321': 'TextEdit', 'V0001_total hab': 'Range', 'hab branco norm': 'Range', 'hab preta norm': 'Range', 'hab amarela norm': 'Range', 'hab parda norm': 'Range', 'hab indigena norm': 'Range', });
lyr_IBGEDistribuiodemoradoresporcoreraaBrancos_32.set('fieldImages', {'fid': 'TextEdit', 'AREA_KM2': 'TextEdit', 'V01317': 'TextEdit', 'V01318': 'TextEdit', 'V01319': 'TextEdit', 'V01320': 'TextEdit', 'V01321': 'TextEdit', 'V0001_total hab': 'Range', 'hab branco norm': 'Range', 'hab preta norm': 'Range', 'hab amarela norm': 'Range', 'hab parda norm': 'Range', 'hab indigena norm': 'Range', });
lyr_IBGEQuantidadedemoradoresDemografia_33.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'AREA_KM2': 'TextEdit', 'V0001': 'TextEdit', });
lyr_CARreasdosImoveis_34.set('fieldImages', {'fid': 'TextEdit', 'cod_tema': 'TextEdit', 'nom_tema': 'TextEdit', 'cod_imovel': 'TextEdit', 'mod_fiscal': 'TextEdit', 'num_area': 'TextEdit', 'ind_status': 'TextEdit', 'ind_tipo': 'TextEdit', 'des_condic': 'TextEdit', 'municipio': 'TextEdit', 'cod_estado': 'TextEdit', 'dat_criaca': 'TextEdit', 'dat_atuali': 'TextEdit', });
lyr_UCEstaoCant_35.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Area (m2)': 'Range', });
lyr_LOTERPPNSITIOSOJOS_36.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Area (m2)': 'Range', });
lyr_RPPNRECANTODAJAGUATIRICA_37.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Area (m2)': 'Range', });
lyr_COLOMBONOVA_38.set('fieldImages', {'fid': 'TextEdit', 'NOME ': 'TextEdit', 'DESCRICAO': 'TextEdit', });
lyr_RPPNFozdoJuquiri_39.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Area (m2)': 'Range', });
lyr_RPPNGamelo_40.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_RPPNValedoRioCant_41.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Area (m2)': 'Range', });
lyr_UCLoteEstaoJuquiri_42.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Area (m2)': 'Range', });
lyr_Rios_43.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'cod_ibge': 'Range', 'municipio': 'TextEdit', 'hidrografia': 'TextEdit', 'comprimento_km': 'TextEdit', 'arquivo': 'TextEdit', });
lyr_Nascentes_44.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'cod_ibge': 'Range', 'municipio': 'TextEdit', 'hidrografia': 'TextEdit', 'arquivo': 'TextEdit', });
lyr_readaunidadefederativadoParan_45.set('fieldImages', {'fid': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'NM_REGIAO': 'TextEdit', 'SIGLA_RG': 'TextEdit', 'AREA KM2': '', });
lyr_readaregiointermediriadeGuarapuava_46.set('fieldImages', {'fid': 'TextEdit', 'NM_RGINT': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'NM_REGIAO': 'TextEdit', 'SIGLA_RG': 'TextEdit', 'AREA KM2': '', });
lyr_readaregioimediatadePitanga_47.set('fieldImages', {'fid': 'TextEdit', 'NM_RGI': 'TextEdit', 'NM_RGINT': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'NM_REGIAO': 'TextEdit', 'SIGLA_RG': 'TextEdit', 'AREA KM2': '', });
lyr_readomunicpiodeMatoRico_48.set('fieldImages', {'fid': 'TextEdit', 'NM_MUN': 'TextEdit', 'NM_RGINT': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'NM_REGIAO': 'TextEdit', 'SIGLA_RG': 'TextEdit', 'AREA KM2': '', });
lyr_APPRios1985_12.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_APPNascentes1985_13.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_APPRios2000_14.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_APPNascentes2000_15.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_APPRios2010_16.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_APPNascentes2010_17.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_APPRios2020_18.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', });
lyr_APPNascentes2020_19.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', });
lyr_APPRios2024_20.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', });
lyr_APPNascentes2024_21.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', });
lyr_IBGESetorescensitrios_27.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'CD_SETOR': 'hidden field', 'SITUACAO': 'inline label - always visible', 'CD_SIT': 'hidden field', 'CD_TIPO': 'hidden field', 'AREA_KM2': 'inline label - always visible', 'CD_REGIAO': 'hidden field', 'NM_REGIAO': 'hidden field', 'CD_UF': 'hidden field', 'NM_UF': 'hidden field', 'CD_MUN': 'hidden field', 'NM_MUN': 'hidden field', 'CD_DIST': 'hidden field', 'NM_DIST': 'hidden field', 'CD_SUBDIST': 'hidden field', 'NM_SUBDIST': 'hidden field', 'CD_BAIRRO': 'hidden field', 'NM_BAIRRO': 'hidden field', 'CD_NU': 'hidden field', 'NM_NU': 'hidden field', 'CD_FCU': 'hidden field', 'NM_FCU': 'hidden field', 'CD_AGLOM': 'hidden field', 'NM_AGLOM': 'hidden field', 'CD_RGINT': 'hidden field', 'NM_RGINT': 'hidden field', 'CD_RGI': 'hidden field', 'NM_RGI': 'hidden field', 'CD_CONCURB': 'hidden field', 'NM_CONCURB': 'hidden field', });
lyr_IBGEDistribuiodemoradoresporcoreraaIndgenas_28.set('fieldLabels', {'fid': 'hidden field', 'AREA_KM2': 'hidden field', 'V01317': 'inline label - always visible', 'V01318': 'hidden field', 'V01319': 'hidden field', 'V01320': 'hidden field', 'V01321': 'hidden field', 'V0001_total hab': 'hidden field', 'hab branco norm': 'hidden field', 'hab preta norm': 'hidden field', 'hab amarela norm': 'hidden field', 'hab parda norm': 'hidden field', 'hab indigena norm': 'inline label - always visible', });
lyr_IBGEDistribuiodemoradoresporcoreraaAmarelos_29.set('fieldLabels', {'fid': 'hidden field', 'AREA_KM2': 'hidden field', 'V01317': 'inline label - always visible', 'V01318': 'hidden field', 'V01319': 'hidden field', 'V01320': 'hidden field', 'V01321': 'hidden field', 'V0001_total hab': 'hidden field', 'hab branco norm': 'hidden field', 'hab preta norm': 'hidden field', 'hab amarela norm': 'inline label - always visible', 'hab parda norm': 'hidden field', 'hab indigena norm': 'hidden field', });
lyr_IBGEDistribuiodemoradoresporcoreraaPardos_30.set('fieldLabels', {'fid': 'hidden field', 'AREA_KM2': 'hidden field', 'V01317': 'inline label - always visible', 'V01318': 'hidden field', 'V01319': 'hidden field', 'V01320': 'hidden field', 'V01321': 'hidden field', 'V0001_total hab': 'hidden field', 'hab branco norm': 'hidden field', 'hab preta norm': 'hidden field', 'hab amarela norm': 'hidden field', 'hab parda norm': 'inline label - always visible', 'hab indigena norm': 'hidden field', });
lyr_IBGEDistribuiodemoradoresporcoreraaPretos_31.set('fieldLabels', {'fid': 'hidden field', 'AREA_KM2': 'hidden field', 'V01317': 'inline label - always visible', 'V01318': 'hidden field', 'V01319': 'hidden field', 'V01320': 'hidden field', 'V01321': 'hidden field', 'V0001_total hab': 'hidden field', 'hab branco norm': 'hidden field', 'hab preta norm': 'inline label - always visible', 'hab amarela norm': 'hidden field', 'hab parda norm': 'hidden field', 'hab indigena norm': 'hidden field', });
lyr_IBGEDistribuiodemoradoresporcoreraaBrancos_32.set('fieldLabels', {'fid': 'hidden field', 'AREA_KM2': 'hidden field', 'V01317': 'inline label - always visible', 'V01318': 'hidden field', 'V01319': 'hidden field', 'V01320': 'hidden field', 'V01321': 'hidden field', 'V0001_total hab': 'hidden field', 'hab branco norm': 'inline label - always visible', 'hab preta norm': 'hidden field', 'hab amarela norm': 'hidden field', 'hab parda norm': 'hidden field', 'hab indigena norm': 'hidden field', });
lyr_IBGEQuantidadedemoradoresDemografia_33.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'AREA_KM2': 'inline label - always visible', 'V0001': 'inline label - always visible', });
lyr_CARreasdosImoveis_34.set('fieldLabels', {'fid': 'hidden field', 'cod_tema': 'hidden field', 'nom_tema': 'hidden field', 'cod_imovel': 'inline label - always visible', 'mod_fiscal': 'inline label - always visible', 'num_area': 'inline label - always visible', 'ind_status': 'inline label - always visible', 'ind_tipo': 'inline label - always visible', 'des_condic': 'inline label - always visible', 'municipio': 'inline label - always visible', 'cod_estado': 'hidden field', 'dat_criaca': 'inline label - always visible', 'dat_atuali': 'inline label - always visible', });
lyr_UCEstaoCant_35.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Area (m2)': 'inline label - always visible', });
lyr_LOTERPPNSITIOSOJOS_36.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Name': 'inline label - always visible', 'description': 'inline label - always visible', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Area (m2)': 'inline label - always visible', });
lyr_RPPNRECANTODAJAGUATIRICA_37.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Area (m2)': 'inline label - always visible', });
lyr_COLOMBONOVA_38.set('fieldLabels', {'fid': 'hidden field', 'NOME ': 'hidden field', 'DESCRICAO': 'hidden field', });
lyr_RPPNFozdoJuquiri_39.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Name': 'inline label - always visible', 'description': 'inline label - always visible', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Area (m2)': 'inline label - always visible', });
lyr_RPPNGamelo_40.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_RPPNValedoRioCant_41.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Name': 'inline label - always visible', 'description': 'inline label - always visible', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Area (m2)': 'inline label - always visible', });
lyr_UCLoteEstaoJuquiri_42.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Area (m2)': 'inline label - always visible', });
lyr_Rios_43.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'inline label - always visible', 'cod_ibge': 'inline label - always visible', 'municipio': 'hidden field', 'hidrografia': 'inline label - always visible', 'comprimento_km': 'inline label - always visible', 'arquivo': 'inline label - always visible', });
lyr_Nascentes_44.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'inline label - always visible', 'cod_ibge': 'inline label - always visible', 'municipio': 'hidden field', 'hidrografia': 'inline label - always visible', 'arquivo': 'inline label - always visible', });
lyr_readaunidadefederativadoParan_45.set('fieldLabels', {'fid': 'hidden field', 'NM_UF': 'inline label - always visible', 'SIGLA_UF': 'inline label - always visible', 'NM_REGIAO': 'inline label - always visible', 'SIGLA_RG': 'inline label - always visible', 'AREA KM2': 'inline label - always visible', });
lyr_readaregiointermediriadeGuarapuava_46.set('fieldLabels', {'fid': 'hidden field', 'NM_RGINT': 'inline label - always visible', 'NM_UF': 'inline label - always visible', 'SIGLA_UF': 'inline label - always visible', 'NM_REGIAO': 'inline label - always visible', 'SIGLA_RG': 'inline label - always visible', 'AREA KM2': 'inline label - always visible', });
lyr_readaregioimediatadePitanga_47.set('fieldLabels', {'fid': 'hidden field', 'NM_RGI': 'inline label - always visible', 'NM_RGINT': 'inline label - always visible', 'NM_UF': 'inline label - always visible', 'SIGLA_UF': 'inline label - always visible', 'NM_REGIAO': 'inline label - always visible', 'SIGLA_RG': 'inline label - always visible', 'AREA KM2': 'inline label - always visible', });
lyr_readomunicpiodeMatoRico_48.set('fieldLabels', {'fid': 'hidden field', 'NM_MUN': 'inline label - always visible', 'NM_RGINT': 'inline label - always visible', 'NM_UF': 'inline label - always visible', 'SIGLA_UF': 'inline label - always visible', 'NM_REGIAO': 'inline label - always visible', 'SIGLA_RG': 'inline label - always visible', 'AREA KM2': 'inline label - always visible', });
lyr_readomunicpiodeMatoRico_48.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});