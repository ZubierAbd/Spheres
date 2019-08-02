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
  public isChanged = false;

  public randomColor() {
    this.randomMargin();
    this.randomPadding();
    var x = Math.floor(Math.random() * 10 + 1);
    switch (x) {
      case 1:
        this.color = "#02c39a";
        break;
      case 2:
        this.color = "#05668d";
        break;
      case 3:
        this.color = "#028090";
        break;
      case 4:
        this.color = "#2e294e";
        break;
      case 5:
        this.color = "#8661c1";
        break;
      case 6:
        this.color = "#c84630";
        break;
      case 7:
        this.color = "#fe5e41";
        break;
      case 8:
        this.color = "#f7b32b";
        break;
      case 9:
        this.color = "#63a375";
        break;
      case 10:
        this.color = "#f72c25";
        break;
    }
  }

  public setRandomInterval() {
    var y = Math.floor(Math.random() * 15000 + 1);
    console.log(y);
    //this.randomColor();
    setTimeout(() => {
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

  public returnToNormal() {
    setTimeout(() => {
      this.color = "#331e38";
      this.padding = "20px";
      this.margin = "15px";
    }, 30000);
  }

  public onOff() {
    this.isChanged ? this.returnToNormal() : this.randomColor();
  }

  public randomPadding() {
    var x = Math.floor(Math.random() * 6 + 1);
    switch (x) {
      case 1:
        this.padding = 5 + "px";
        break;
      case 2:
        this.padding = 12 + "px";
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

  onKeyDown(event) {
    if (event.key === "Enter") {
      this.returnToNormal();
    }
  }

  constructor() {}

  ngOnInit() {
    this.setRandomInterval();
    this.returnToNormal();
  }
}
