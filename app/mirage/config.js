export default function() {
  this.get('/photos', function() {
    return {
      data: [{
        type: 'photo',
        id: 1,
        attributes: {
          "copyright": "CEDIC Team",
          "date": "2015-01-01",
          "explanation": "The plane of our Milky Way Galaxy runs through this complex and beautiful skyscape. At the northwestern edge of the constellation Vela (the Sails) the telescopic frame is over 10 degrees wide, centered on the brightest glowing filaments of the Vela Supernova Remnant, an expanding debris cloud from the death explosion of a massive star. Light from the supernova explosion that created the Vela remnant reached Earth about 11,000 years ago. In addition to the shocked filaments of glowing gas, the cosmic catastrophe also left behind an incredibly dense, rotating stellar core, the Vela Pulsar. Some 800 light-years distant, the Vela remnant is likely embedded in a larger and older supernova remnant, the Gum Nebula",
          "hdurl": "http://apod.nasa.gov/apod/image/1501/VelaSNR-3_bigCedic.jpg",
          "media_type": "image",
          "service_version": "v1",
          "title": "Vela Supernova Remnant",
          "url": "http://apod.nasa.gov/apod/image/1501/VelaSNR-3_bigCedic1024.jpg"
        },
        type: 'photo',
        id: 2,
        attributes: {
          "copyright": "L\u00e1szl\u00f3 Francsics",
          "date": "2015-01-02",
          "explanation": "Near the center of this sharp cosmic portrait, at the heart of the Orion Nebula, are four hot, massive stars known as the Trapezium. Tightly gathered within a region about 1.5 light-years in radius, they dominate the core of the dense Orion Nebula Star Cluster. Ultraviolet ionizing radiation from the Trapezium stars, mostly from the brightest star Theta-1 Orionis C powers the complex star forming region's entire visible glow. About three million years old, the Orion Nebula Cluster was even more compact in its younger years and a dynamical study indicates that runaway stellar collisions at an earlier age may have formed a black hole with more than 100 times the mass of the Sun. The presence of a black hole within the cluster could explain the observed high velocities of the Trapezium stars. The Orion Nebula's distance of some 1,500 light-years would make it the closest known black hole to planet Earth.",
          "hdurl": "http://apod.nasa.gov/apod/image/1501/TrapeziumCluster_Francsics_apod.jpg",
          "media_type": "image",
          "service_version": "v1",
          "title": "At the Heart of Orion",
          "url": "http://apod.nasa.gov/apod/image/1501/TrapeziumCluster_Francsics_apod1024.jpg"
        },
        type: 'photo',
        id: 1,
        attributes: {
          "date": "2015-01-03",
          "explanation": "Get out your red/blue glasses and check out this awesome stereo view of another world. The scene was recorded by Apollo 17 mission commander Eugene Cernan on December 11, 1972, one orbit before descending to land on the Moon. The stereo anaglyph was assembled from two photographs (AS17-147-22465, AS17-147-22466) captured from his vantage point on board the Lunar Module Challenger as he and Dr. Harrison Schmitt flew over Apollo 17's landing site in the Taurus-Littrow Valley. The broad, sunlit face of the mountain dubbed South Massif rises near the center of the frame, above the dark floor of Taurus-Littrow to its left. Beyond the mountains, toward the lunar limb, lies the Moon's Mare Serenitatis. Piloted by Ron Evans, the Command Module America is visible in orbit in the foreground against the South Massif's peak.",
          "hdurl": "http://apod.nasa.gov/apod/image/1501/22466-22467anaVantuyne.jpg",
          "media_type": "image",
          "service_version": "v1",
          "title": "Apollo 17: A Stereo View from Lunar Orbit",
          "url": "http://apod.nasa.gov/apod/image/1501/22466-22467anaVantuyne900.jpg"
        }
      }]
    }
  })
  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */
  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Route shorthand cheatsheet
  */
  /*
    GET shorthands

    // Collections
    this.get('/contacts');
    this.get('/contacts', 'users');
    this.get('/contacts', ['contacts', 'addresses']);

    // Single objects
    this.get('/contacts/:id');
    this.get('/contacts/:id', 'user');
    this.get('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    POST shorthands

    this.post('/contacts');
    this.post('/contacts', 'user'); // specify the type of resource to be created
  */

  /*
    PUT shorthands

    this.put('/contacts/:id');
    this.put('/contacts/:id', 'user'); // specify the type of resource to be updated
  */

  /*
    DELETE shorthands

    this.del('/contacts/:id');
    this.del('/contacts/:id', 'user'); // specify the type of resource to be deleted

    // Single object + related resources. Make sure parent resource is first.
    this.del('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    Function fallback. Manipulate data in the db via

      - db.{collection}
      - db.{collection}.find(id)
      - db.{collection}.where(query)
      - db.{collection}.update(target, attrs)
      - db.{collection}.remove(target)

    // Example: return a single object with related models
    this.get('/contacts/:id', function(db, request) {
      var contactId = +request.params.id;

      return {
        contact: db.contacts.find(contactId),
        addresses: db.addresses.where({contact_id: contactId})
      };
    });

  */
}

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
