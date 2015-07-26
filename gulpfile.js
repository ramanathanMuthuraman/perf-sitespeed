'use strict';

var gulp = require('gulp');
var Sitespeed = require('sitespeed.io/lib/sitespeed');
gulp.task('default', function() {
	var sitespeed = new Sitespeed();
	var url ='http://ramanathanmuthuraman.github.io/React-Duck2Go/#/';
		var config={
		'pollResults': 2,
		'timeout': 600,
		'firstViewOnly': true,
		'private': true,
		'aftRenderingTime': true,
		'video': false,
		'runs':1
	};
	var options  = {
		url:url,
		depth: 1,
		wptHost: 'www.webpagetest.org',
		wptKey: 'A.24e77899d82f303533a6510cf22a979f',
		wptConfig: config,
		noYslow: true,
		gpsiKey:'AIzaSyBsE7XSMMMNFSso5EHQnqbrYNIFaA3Zw1U'

	};

	sitespeed.run(options, function(err, data) {
		console.log(err||data);
	});

});