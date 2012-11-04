Package.describe({
  summary: "jQuery minicolors for Meteor"
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.add_files('styles/jquery.minicolors.css', 'client');
  api.add_files('lib/jquery.minicolors.min.js', 'client');
  api.add_files('images/colors.png', 'client');
  api.add_files('images/trigger.png', 'client');
});