import DS from 'ember-data';

export default DS.Model.extend({
  copyright: DS.attr(),
  date: DS.attr(),
  explanation: DS.attr(),
  hdurl: DS.attr(),
  title: DS.attr(),
  url: DS.attr()
});
