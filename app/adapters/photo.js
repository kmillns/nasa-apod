let api_key = 'J82klYjiuappCJrceRiiVXRlnCqt2tDz2lY6R9H3';
let url = 'https://api.nasa.gov/planetary/apod';

export default DS.RESTAdapter.extend({
  // buildUrl(modelName, id, snapshot, requestType, query) {
  //
  // }
  findRecord(store, type, id, snapshot) {
    //return this.ajax(url, 'GET', { api_key: api_key, date: id });
    console.log('adapters/photo.js');
    return this.ajax(url + '?api_key=' + api_key + '&date=' + id, 'GET').then(function(payload) {
      // you must do this or it tries to map the property names to individual models
      return {
        photo: payload
      };
    });
  }
});
