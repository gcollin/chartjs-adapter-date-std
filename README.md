# chartjs-adapter-date-std

## Overview

An adaptor for the Chart.js library enabling usage of time series without dependencies to any 3rd party libraries.

Requires [Chart.js](https://github.com/chartjs/Chart.js/releases) **2.8.0** or later.

**Note:** once loaded, this adapter overrides the default date-adapter provided in Chart.js (as a side-effect).

## Installation

### npm

```bash
npm install chartjs-adapter-date-std --save
```

## Usage

You need to register the Adaptor manually once:
```javascript
import { _adapters } from 'chart.js';
import {StdDateAdapter} from 'chartjs-adapter-date-std';

_adapters._date.override( StdDateAdapter.chartJsStandardAdapter());

```

## Development

You first need to install node dependencies (requires [Node.js](https://nodejs.org/)):


```bash
> npm install
```

The following commands will then be available from the repository root:

```bash
> npm run build         // build dist files
> npm run test          // run karma tests
```

## License

`chartjs-adapter-date-std` is available under the [MIT license](LICENSE.md).
