import { Component,Input,trigger,state,style,
  transition,animate, OnInit } from '@angular/core';

@Component({
  selector: 'app-gui-anime-sample-1',
  templateUrl: './gui-anime-sample-1.component.html',
  styleUrls: ['./gui-anime-sample-1.component.css'],
  animations: [
    trigger('buttonState', [
      state('inactive', style({
        backgroundColor: '#fff',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.5)'
      })),
      transition('inactive => active', animate('200ms ease-in-out')),
      transition('active => inactive', animate('200ms ease-in-out'))
    ])
  ]
})
export class GuiAnimeSample1Component implements OnInit {
  private state: string;
  constructor() { }

  ngOnInit() {
    this.state = 'inactive';
  }
  private onButtonClicked(){
    this.state = (this.state === 'active')? 'inactive': 'active'; 
  }
  private onAnimeDone(){
    // TODO: アニメーション完了後の処理.
  }
}
