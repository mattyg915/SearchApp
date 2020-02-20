## Install

Clone this repository down to your machine. Make sure you have yarn and node installed. The easiest way to install both on a mac is to use homebrew. Run `brew install node` and `brew install yarn` from the terminal.

To install homebrew on a mac, run `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"` from your terminal.

For PC, instructions to install node can be found at https://nodejs.org/en/download/. To install yarn, follow instructions at https://classic.yarnpkg.com/en/docs/install/#windows-stable.

Once these pre-requisites are installed, run:

### `yarn install`

... from the search-app directory to install all needed application dependencies.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn start`

Builds the app to the `build` folder.
Then launches the app in your default browser. If it does not launch automatically, the app can be reached at http://localhost:3000

## Assumptions/Limitations

- searches on string fields (including the values in arrays) will return partial matches unless surrounded by quotation marks
- you cannot have multiple tokens in a search, e.g. a search for an exact match on one term with an additional partial match term, or two exact-match terms
- all number searches (such as user and organization IDs) are exact match only
- Dates must be properly formatted (YYYY-MM-DD) to work, and are exact match only (no after/before a certain date searches currently supported)
- "Empty" fields are assumed to be either `null`, the field is present but nothing is in it, or `undefined`, the field is missing entirely for that particular object. An empty string is not handled in this case.
