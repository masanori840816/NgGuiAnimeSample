import { Component,Input,trigger,state,style,
  transition,animate,OnInit} from '@angular/core';
import { SampleButton } from '../sample-button';

@Component({
  selector: 'app-gui-anime-sample-2',
  templateUrl: './gui-anime-sample-2.component.html',
  styleUrls: ['./gui-anime-sample-2.component.css'],
  animations: [
    trigger('buttonState', [
      state('active', style({
        border: '3px solid #2196F3',
        boxShadow: '0px 5px 6px 3px #CECECE',
        transform: 'translate3d(-1px, -1px, 50px) scale(1.02)',
        zIndex: 30
      })),
      state('inactive',   style({
        border: '1px solid #CECECE',
        boxShadow: '0px 1px 3px 1px #CECECE',
        transform: 'translate3d(0px, 0px, 0px) scale(1)',
        zIndex: 10
      })),
      transition('active => inactive', animate('200ms ease-in')),
      transition('inactive => active', animate('200ms ease-out'))
    ])
  ]
})
export class GuiAnimeSample2Component implements OnInit {
  private sampleButtons: SampleButton[] = [
    {id: 0, pageTitle: 'Page1', discription: 'Page No.1', state: 'inactive'},
    {id: 1, pageTitle: 'Page2', discription: 'Page No.2', state: 'inactive'},
    {id: 2, pageTitle: 'Page3', discription: 'Page No.3', state: 'inactive'},
  ];
  constructor() { }

  ngOnInit() {
  }
  private onButtonIn(targetId: number){
    this.sampleButtons[targetId].state = "active";
  }
  private onButtonOut(targetId: number){
    this.sampleButtons[targetId].state = "inactive";
  }

}
