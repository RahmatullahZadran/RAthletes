import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class MapComponent implements OnInit, AfterViewInit {

  @ViewChild('mapContainer', { static: false }) gmap!: ElementRef;
  map!: google.maps.Map;

  latitude: number = 52.58213028666051; 
  longitude: number = -0.258193305099355;  // 

  mapOptions: google.maps.MapOptions = {
    center: { lat: this.latitude, lng: this.longitude },
    zoom: 18
  };


  marker!: google.maps.marker.AdvancedMarkerElement;

  constructor() { }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.loadGoogleMapsScript().then(() => {
      this.mapInitializer();
    }).catch(err => {
      console.error('Error loading Google Maps script:', err);
    });
  }

  loadGoogleMapsScript(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (typeof google !== 'undefined') {
        resolve();
        return;
      }
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAVlwBv5R6qoCI55xJujtNEGR6vggqp09w&libraries=maps&v=beta`;
      script.async = true;
      script.defer = true;
      script.onload = () => {
        resolve();
      };
      script.onerror = (error) => {
        reject(error);
      };
      document.body.appendChild(script);
    });
  }

  mapInitializer(): void {
    this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);

    this.marker = new google.maps.marker.AdvancedMarkerElement({
      position: { lat: this.latitude, lng: this.longitude },
      map: this.map,
      title: 'The Gym'
    });
  }
}
