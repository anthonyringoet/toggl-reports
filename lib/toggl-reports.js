/*
 * toggl-reports
 * https://github.com/anthonyringoet/toggl-reports
 *
 * Copyright (c) 2014 Anthony Ringoet
 * Licensed under the MIT license.
 */

'use strict';

var request = require('superagent');

// exports.awesome = function() {
//   return 'awesome';
// };

module.exports = Client;


function Client(key, ua) {
  if (!(this instanceof Client)) return new Client(key, ua);
  if (!key) throw new TypeError('A valid api token is required');
  this.remote = 'https://toggl.com/reports/api/v2';
  this.ua = ua || 'node-toggl-reports';
  this.key = key;
}

Client.prototype.weekly = function(workspaceId, fn){
  request
  .get(this.remote + '/weekly')
  .auth(this.key, 'api_token')
  .query({ user_agent: this.ua, workspace_id: workspaceId })
  .end(function(err, res){
    if (err) return fn(err);
    if (res.error) return fn(new Error(res.body.error));

    fn(null, res.body);
  });
}

Client.prototype.detailed = function(workspaceId, sinceDate, untilDate, page, fn){
  request
  .get(this.remote + '/details')
  .auth(this.key, 'api_token')
  .query({
    user_agent: this.ua,
    workspace_id: workspaceId,
    since: sinceDate,
    until: untilDate,
    page: page
  })
  .end(function(err, res){
    if (err) return fn(err);
    if (res.error) return fn(new Error(res.body.error));

    fn(null, res.body);
  });
}

Client.prototype.summary = function(workspaceId, sinceDate, untilDate, groupingProp, subgroupingProp, fn){
  request
  .get(this.remote + '/summary')
  .auth(this.key, 'api_token')
  .query({
    user_agent: this.ua,
    workspace_id: workspaceId,
    since: sinceDate,
    until: untilDate,
    grouping: groupingProp,
    subgrouping: subgroupingProp
  })
  .end(function(err, res){
    if (err) return fn(err);
    if (res.error) return fn(new Error(res.body.error));

    fn(null, res.body);
  });
}