# toggl-reports [![Build Status](https://secure.travis-ci.org/anthonyringoet/toggl-reports.png?branch=master)](http://travis-ci.org/anthonyringoet/toggl-reports)

 Toggl Reports api wrapper

## Getting Started
Install the module with: `npm install toggl-reports`

```
var Reports = require('toggl-reports');
var reports = new Reports('--your-api-token--');
```

## Documentation
See the [official Toggl API report docs](https://github.com/toggl/toggl_api_docs/blob/master/reports.md)

## Examples

### Weekly

```
reports.weekly('--a-workspace-id--', function(err, res){
	if(err) console.log(err);
	
	console.log(res);
});

```

### Detailed

```
TBA

```

### Summary

```
TBA

```


    
## License
Copyright (c) 2014 Anthony Ringoet. Licensed under the MIT license.
