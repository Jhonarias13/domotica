import { SwitchService } from './../services/switch.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {

  on: any;
  led: any;

  constructor(private switchService: SwitchService) { }

  ngOnInit(): void {
    this.switchService.getLED().subscribe(res => {
      this.led = res.data.led;
      console.log(this.led);
    })
}

switch () {
    this.led = this.led ? false : true;
    this.switchService.updateLED(this.led).subscribe(res => {
      console.log(res);
    })
  }

}
