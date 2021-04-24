import { Component, VERSION, ViewChild} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
    @ViewChild('videoPlayer', { static: false }) videoplayer: any;
  // public startedPlay:boolean = false;
  public show:boolean = true;
  public showVideo:boolean = false;
  isEnded:boolean=false;

    toggleVideo(videoplayer){
    var myVideo: any = document.getElementById("prez-KG");
    if (myVideo.paused) myVideo.play(), this.show = false, this.showVideo=true;
    else myVideo.pause(), this.show=true, this.showVideo=false;
  }
  
  videoEnd(event: any) {
    this.isEnded = false;
    this.show = true;
    this.showVideo=false;
  }

}

