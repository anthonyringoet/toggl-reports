# toggl-reports [![Build Status](https://secure.travis-ci.org/anthonyringoet/toggl-reports.png?branch=master)](http://travis-ci.org/anthonyringoet/toggl-reports)

 Toggl Reports api wrapper

## Getting Started
Install the module with: `npm install toggl-reports`


## Documentation
See the [official Toggl API report docs](https://github.com/toggl/toggl_api_docs/blob/master/reports.md) for detailed info.

## API

### Init your api client

```
var Reports = require('toggl-reports');
var reports = new Reports('--your-api-token--');
```

### Reports.weekly(workspaceId, fn)

```
reports.weekly('--a-workspace-id--', function(err, res){
	if(err) console.log(err);

	console.log(res);
});

```

### Reports.detailed(workspaceId, since, until, page, fn)

```
reports.detailed(--a-workspace-id--, '2014-02-01', '2014-04-30', null, function(err, res){
  if(err){
    log(err);
  }
  console.log(res);
});

```

### Reports.summary(workspaceId, since, until, page, grouping, subgrouping, fn)

```
reports.summary(--a-workspace-id--, '2014-02-01', '2014-04-30', null, null, function(err, res){
  if(err){
    log(err);
  }
  console.log(res);
});

```



## License
Copyright (c) 2014 Anthony Ringoet. Licensed under the MIT license.
