// package metadata file for Meteor.js
// console.log(global);
var packageName = 'angularui:angular-google-maps'; // https://atmospherejs.com/angularui/angular-google-maps-refresh
var where = 'client'; // where to install: 'client' or 'server'. For both, pass nothing.
var version = Npm.require(process.env.PWD + '/package.json').version;

console.log("uigmap version to publish: " + version);

Package.describe({
  name: packageName,
  version: version,
  summary: 'angular-google-maps-refresh',
  git: 'git@github.com:keeperantoha/angular-google-maps-refresh.git',
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']);

  api.use([
    'stevezhu:lodash@3.0.0',
    'angular:angular@1.2.0',
    'nmccready:angular-simple-logger@0.0.1'
  ], where);

  api.addFiles('dist/angular-google-maps.js', where);
});
