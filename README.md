Paramount: Then and now template
=================================

[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

This project will become a new then-and-now template for Statesman. It uses the [twentytwenty](https://github.com/zurb/twentytwenty) package from Zurb.

## Requirements

* Node.js
* Bower
* Grunt

## Setup

When the template repo is made (and it isn't yet):

```
$ curl -OL https://github.com/statesman/then-and-now/archive/master.zip
$ unzip master.zip -d YOUR_PROJECT_NAME
$ cd YOUR_PROJECT_NAME
```

## Usage

`assets/`: where you put the photos you want in your slider.

`src/js/`: JavaScript files that Grunt will concatenate, Uglify and save in `dist/scripts.js`

`src/css/`: `less` files that Grunt will transpile into CSS in `dist/style.css`

`index.php`: the only page in the file to start with. There is a php array of meta tags at the top. It also utilizes files in `includes`.

`includes`: where partial files are stored for advertising and ads. The two files that need to be edited:

  * `project-metrics.inc`: where to set metrics.
  * `advertising.inc`: where to change advertising, FWIW