import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let today = new Date();
    // ISO string returns something like '1970-01-01T00:00:00.000Z'
    // Splitting on T gets us the date and time separated
    // Grabbing 0 gets us date only, in the desired format
    let todayString = today.toISOString().split('T')[0];

    return this.store.findRecord('photo', todayString);
  }
});
