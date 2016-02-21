Promise.all([
  System.import('moment'),
  System.import('paper-spinner/paper-spinner-lite.html!'),
  System.import('my-component/my-component.html!')
]).then(function(modules) {
  var moment = modules[0];

  Polymer({
    is: 'my-component',

    properties: {
    },

    // Element Behavior
    _handleClick: function() {
      console.log('my-component: moment version: ' + moment.version);
    }
  });
});