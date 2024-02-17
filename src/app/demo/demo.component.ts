import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent
 {
    public name : string = " " ;

    public InfosystemEvent()
    
      {
        this.name ="Educating For Better Tomorrow clicked";
      }
    
}
