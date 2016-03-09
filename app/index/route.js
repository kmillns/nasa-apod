import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findRecord('photo', '2015-02-01');
  }
});
