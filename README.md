# E-retailer Customization Boilerplate

[![CircleCI](https://circleci.com/gh/jgabuya/eretailer-customization-boilerplate.svg?style=svg&circle-token=3bf388e436ef481f027f9d04743f3fce18182a95)](https://circleci.com/gh/jgabuya/eretailer-customization-boilerplate)

Jump-start your frontend customization of [E-retailer](http://www.kudos.net.au/) projects

## Requirements

* [Node.js >= 8.11.2](https://nodejs.org/en)
* [yarn](https://yarnpkg.com/lang/en)

## Setting up

Run `yarn` to fetch packages

## Workflow

1. Run `yarn build` to build file while developing. By default, this is set up in `watch` mode

2. Manually upload the file `dist/app.min.js` to `/admin/site/uploadfile.aspx`

## Testing

Run `yarn test` to invoke unit tests

## Documentation

See the [docs](docs/index.md) page

## E-retailer version

This works with E-retailer version **v3.0.296**, with `Website Design > Method` set to `Responsive` in `/admin/site/sitesetup.aspx`
