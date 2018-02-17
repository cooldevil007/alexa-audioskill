'use strict';
var Alexa = require("alexa-sdk");

// For detailed tutorial on how to making a Alexa skill,
// please visit us at http://alexa.design/build

var streamInfo = {
  title: 'Audio Stream Starter',
  subtitle: 'A starter template for an Alexa audio streaming skill',
  cardContent: "Get more details by Anand Kumar",
  //url: "https://streaming.radionomy.com/RadioXUS?lang=en-US&appName=iTunes.m3u",
  url: "<Use your any streaming url",
  image:{
    largeImageUrl: 'https://www.google.com/search?q=revolution+935&rlz=1C1CHBF_enUS781US781&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjOsuywq6XZAhXC6lMKHS0qAEoQ_AUIDCgD&biw=1920&bih=949#imgrc=RiO8VIjtLCRfvM:<>',
    smallImageUrl: 'https://www.google.com/search?q=revolution+935&rlz=1C1CHBF_enUS781US781&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjOsuywq6XZAhXC6lMKHS0qAEoQ_AUIDCgD&biw=1920&bih=949#imgrc=RiO8VIjtLCRfvM:'
  }
};


exports.handler = function(event, context, callback) => {
    var alexa = Alexa.handler(event, context, callback);
    alexa.registerHandlers(handlers, audioEventHandlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('PlayStream');
    },
    'PlayStream': function () {
        this.response.speak('Enjoy').audioPlayerPlay('REPLACE_ALL', https://www.revolution935.com/on-air/, https://www.revolution935.com/on-air/, null, 0);
        this.emit(':responseReady');
    },
    'SessionEndedRequest' : function() {
        console.log('Session ended with reason: ' + this.event.request.reason);
    },
    'AMAZON.StopIntent' : function() {
        this.response.speak('Okay. I have stopped the stream').audioPlayerStop();
        this.emit(':responseReady');
    },
    'AMAZON.HelpIntent' : function() {
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent' : function() {
        this.emit('AMAZON.StopIntent');
    },
    'Unhandled' : function() {
        this.response.speak("Sorry, Something went wrong");
        this.emit(':responseReady');
    },
    'AMAZON.NextIntent': function(){
      this.response.speak("This skill doesn't support skipping");
      this.emit(':responseReady');
    },
    'AMAZON.PreviousIntent': function(){
      this.response.speak("This skill doesn't support skipping");
      this.emit(':responseReady');
    },
    'AMAZON.PauseIntent': function(){
      this.emit('AMAZON.StopIntent');
    },
    'AMAZON.ResumeIntent': function(){
      this.emit('PlayStream');
    },
    'AMAZON.LoopOnIntent': function(){
      this.emit('AMAZON.StartOverIntent');
    },
    'AMAZON.LoopOffIntent': function(){
      this.emit('AMAZON.StartOverIntent');
    },
    'AMAZON.ShuffleOnIntent': function(){
      this.emit('AMAZON.StartOverIntent');
    },
    'AMAZON.ShuffleOffIntent': function(){
      this.emit('AMAZON.StartOverIntent');
    },
    'AMAZON.StartOverIntent': function(){
      this.response.speak("Sorry I can't do that yet");
    },
    'PlayCommandIssued': function(){
      if(this.event.request.type === 'IntentRequest'|| this.event.request.type === 'LaunchRequest'){
        var cardTitle = streamInfo.subtitle;
        var cardContent = streamInfo.cardContent;
        var cardImage = streamInfo.image;
        this.response.cardRenderer(cardTitle, cardContent, cardImage);
      }
      this.response.speak('Enjoy').audioPlayerPlay('REPLACE_ALL', https://www.revolution935.com/on-air/,https://www.revolution935.com/on-air/, null, 0);
      this.emit(':responseReady');
    },
    'PauseCommandIssued': function(){
      this.emit('AMAZON.StopIntent');
    }
};

var audioEventHandlers = {
  'PlaybackStarted' : function(){
    this.emit(':responseReady');
  },
  'PlaybackFinished': function(){
    this.emit(':responseReady');
  },
  'PlaybackStopped': function(){
    this.emit(':responseReady');
  },
  'PlaybackNearlyFinished': function(){
    this.response.audioPlayerPlay('REPLACE_ALL', https://www.revolution935.com/on-air/, https://www.revolution935.com/on-air/, null, 0);
    this.emit(':responseReady');
  },
  'PlaybackFailed': function(){
    this.response.audioPlayerClearQueue('CLEAR_ENQUEUED');
    this.emit(':responseReady');
  }
};
