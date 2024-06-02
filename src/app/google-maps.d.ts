declare namespace google.maps {
    export class Map {
      constructor(element: HTMLElement, opts?: MapOptions);
    }
  
    export interface MapOptions {
      center: LatLng | LatLngLiteral;
      zoom: number;
    }
  
    export namespace marker {
      export class AdvancedMarkerElement {
        constructor(opts?: AdvancedMarkerElementOptions);
      }
  
      export interface AdvancedMarkerElementOptions {
        position: LatLng | LatLngLiteral;
        map?: Map;
        title?: string;
      }
    }
  
    export interface LatLng {
      lat(): number;
      lng(): number;
    }
  
    export interface LatLngLiteral {
      lat: number;
      lng: number;
    }
  }
  