// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    //this.playFirst();
  },

  playFirst: function() {
    if(this.length !== 0){
      this.at(0).play();
    }
  }



});

//set the first item in the Q. to current song
  //have an event that checks for the current song
    //that event will then play the current song