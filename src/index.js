#!/bin/env node

var settings = require('../settings.json');

var Flickr = require('flickr-sdk'), flickrOptions = {
    api_key: settings.consumerKey,
    secret: settings.consumerSecret
};

Flickr.authenticate(flickrOptions, function(error, flickr){
    flickr.people.getPhotos({
        user_id : "me",
        authenticated: "true"
    }, function(err,result){
        if(err){
            print(err);
            return;
        }
        print(result);
    })
})


