$(document).ready(function(){
      // The video_length_round variable is video specific.
      // In this example the video is 10.88 seconds long, rounded up to 11.
      var video_length_round = 20;

      var video = document.getElementById('home_video_element');
      var mp4Source = document.getElementById('mp4Source');

      // Ensure home_video_element present on page
      if(typeof video !== 'undefined'){

        // Ensure video element has an mp4Source, if so then update video src
        if(typeof mp4Source !== 'undefined'){
          $(mp4Source).attr('src', 'Website-Intro-Video-Medium-Quality.mp4');
        }

        video.load();

        // Ensure video is fully buffered before playing
        video.addEventListener("canplay", function() {
          this.removeEventListener("canplay", arguments.callee, false);

          if(Math.round(video.buffered.end(0)) >= video_length_round){
            // Video is already loaded
            this.play();

          } else {
            // Monitor video buffer progress before playing
            video.addEventListener("progress", function() {
              if(Math.round(video.buffered.end(0)) == video_length_round){
                this.removeEventListener("progress", arguments.callee, false);
                video.play();
              }
            }, false);
          }
        }, false);
      }
    });