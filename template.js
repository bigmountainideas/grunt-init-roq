/*
 * grunt-init-roq-app
 * https://roq.io/
 *
 * Licensed under the MIT license.
 */

'use strict';

// Basic template description.
exports.description = 'Create a roq application.';

// Template-specific notes to be displayed before question prompts.
exports.notes = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                'Aenean venenatis, nisi ut luctus tincidunt, quam ipsum rutrum ' +
                'ipsum, fermentum iaculis nisl urna non sapien. Sed nibh massa,  ' +
                'sagittis sit amet nunc quis, semper elementum elit. Nam commodo  ' +
                'arcu purus, non viverra sem lobortis at. Quisque sed lacus dictum  ' +
                'elit pharetra bibendum ut quis nunc. Donec aliquam, nisl in  ' +
                'blandit sollicitudin, lectus tellus tempor mi, vel pharetra orci  ' +
                'nunc quis purus. Interdum et malesuada fames ac ante ipsum primis  ' +
                'in faucibus. Nunc in odio cursus tortor placerat ullamcorper eu id  ' +
                'diam. Nunc a dolor lorem. Nulla condimentum nisi ac auctor aliquet. ' +
  '\n\n'+
  'For more information, please see the following documentation:' +
  '\n\n'+
  'Roq Platform Website    http://roq.io\n' +
  'Documentation           http://roq.io/docs\n' +
  'Getting Started         http://roq.io/getting-started';

// Template-specific notes to be displayed after question prompts.
exports.after = 'Instructions after installing:' +
  '\n\n' +
  'http://roq.io/getting-started';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {

  init.process({type: 'jquery'}, [
    // Prompt for these values.
    init.prompt('domain'),
  ], function(err, props) {
    //
    props.domain = props.domain;
    
    // Files to copy (and process).
    var files = init.filesToCopy(props);


    // Actually copy (and process) files.
    init.copyAndProcess(files, props, {});


    // Generate package.json file.
    init.writePackageJSON('package.json', {
        "name": props.domain + "_roq",
        "description": props.description,
        "version": props.version,
        "private": true,
        "dependencies": {
          "roq": "0.x"
        }
      });

    // All done!
    done();
  });

};