var Reports = require('../lib/toggl-reports.js');
var reports = new Reports('--your-token--');
var workspaceId = '--your-workspace--id';

reports.weekly(workspaceId, function(err, res){
  if(err){
    console.log(err);
  }
  console.log(res);
});

reports.detailed(workspaceId, '2014-02-01', '2014-04-30', null, function(err, res){
  if(err){
    log(err);
  }
  console.log(res);
});

reports.summary(workspaceId, '2014-02-01', '2014-04-30', null, null, function(err, res){
  if(err){
    log(err);
  }
  console.log(res);
});