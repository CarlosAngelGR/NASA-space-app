function iniciarMap(){
    var coord = {lat:19.511650  ,lng: -99.206785};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
} 

