<template>
  <GmapMap
    id="map"
    ref="mapRef"
    :center="center"
    :zoom="zoom"
    map-type-id="terrain"
    :options="options">

    <GmapCluster @click="changeZoom" :styles="clOptions">

      <GmapMarker
        :icon="require(`./../assets/img/icons/map.svg`)"
        :key="index"
        v-for="(m, index) in list"
        :position="m.coords"
        :clickable="true"
        :draggable="false"
        @click="$emit('show', m)" />
        
    </GmapCluster>
  </GmapMap>
</template>

<script>
export default {

  props: {
    list: { type: Array, default: [] },
    center: { type: Object, default: { lat: 49.32652050000001, lng: 25.77126499999997 }}
  },

  watch: {
    center: function() {
      this.$refs.mapRef.$mapPromise.then((map) => {
        map.setZoom(13);
      })
    }
  },

  methods: {
    changeZoom: function(e) {

      this.$refs.mapRef.$mapPromise.then((map) => {
        // map.setCenter(e.getCenter());
        // map.setZoom(e.getMaxZoom()+1);

        map.fitBounds(e.getBounds());
      })
    }
  },

  data () {
    return {
      zoom: 10,
      clOptions: [
        {
          url: require(`./../assets/img/m/m3.png`),
          width: 67,
          height: 67,
          textColor: '#ffffff'
        }
      ],
      options: {
        disableDefaultUI: true,
        gestureHandling: 'greedy',
        styles: [
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#f5f5f5"
              }
            ]
          },
          {
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#f5f5f5"
              }
            ]
          },
          {
            "featureType": "administrative.country",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "visibility": "simplified"
              }
            ]
          },
          {
            "featureType": "administrative.country",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#000000"
              }
            ]
          },
          {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#bdbdbd"
              }
            ]
          },
          {
            "featureType": "administrative.province",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#c10000"
              },
              {
                "weight": 1
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#eeeeee"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e5e5e5"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#ffffff"
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dadada"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          },
          {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e5e5e5"
              }
            ]
          },
          {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#eeeeee"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#c9c9c9"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          }
        ]
        // styles: [
        //   {
        //     featureType: "all",
        //     stylers: [
        //       {saturation: -80}
        //     ]
        //   }, {
        //     featureType: "road.arterial",
        //     elementType: "geometry",
        //     stylers: [
        //       {hue: "#00ffee"},
        //       {saturation: 50}
        //     ]
        //   }, {
        //     featureType: "poi.business",
        //     elementType: "labels",
        //     stylers: [
        //       {visibility: "off"}
        //     ]
        //   }
        // ]
      }
    }
  }
}
</script>
