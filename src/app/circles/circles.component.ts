import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-circles",
  templateUrl: "./circles.component.html",
  styleUrls: ["./circles.component.css"]
})
export class CirclesComponent implements OnInit {
  public color: string = "#331e38";
  public padding = 20 + "px";
  public margin = 15 + "px";
  public interval = 1200; 

  public randomColor() {
    this.randomMargin();
    this.randomPadding();
    var x = Math.floor(Math.random() * 6 + 1);
    switch (x) {
      case 1:
        this.color = "#02c39a";
        console.log(this.color);
        break;
      case 2:
        this.color = "#05668d";
        console.log(this.color);
        break;
      case 3:
        this.color = "#028090";
        console.log(this.color);
        break;
      case 4:
        this.color = "#2e294e";
        console.log(this.color);
        break;
      case 5:
        this.color = "#8661c1";
        console.log(this.color);
        break;
      case 6:
        this.color = "#c84630";
        console.log(this.color);
        break;
    }
  }

  public setRandomInterval(){
   var y = Math.floor(Math.random()*12000 + 1);
   console.log(y);
   //this.randomColor();
   setTimeout(()=>{
     this.randomColor();
   }, y);
  }

  public randomMargin() {
    var x = Math.floor(Math.random() * 6 + 1);
    switch (x) {
      case 1:
        this.margin = 5 + "px";
        break;
      case 2:
        this.margin = 12 + "px";
        console.log(this.color);
        break;
      case 3:
        this.margin = 24 + "px";
        console.log(this.color);
        break;
      case 4:
        this.margin = 36 + "px";
        console.log(this.color);
        break;
      case 5:
        this.margin = 48 + "px";
        console.log(this.color);
        break;
      case 6:
        this.margin = 60 + "px";
        console.log(this.color);
        break;
    }
  }

  public randomPadding() {
    var x = Math.floor(Math.random() * 6 + 1);
    switch (x) {
      case 1:
        this.padding = 5 + "px";
        break;
      case 2:
        this.padding = 12 +  "px";
        break;
      case 3:
        this.padding = 24 + "px";
        break;
      case 4:
        this.padding = 36 + "px";
        break;
      case 5:
        this.padding = 48 + "px";
        break;
      case 6:
        this.padding = 60 + "px";
        break;
    }
  }

  constructor() {}

  ngOnInit() {
    this.setRandomInterval();
  }
}
