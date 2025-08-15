import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Highlight } from '../highlight';

@Component({
  selector: 'app-counter',
  imports: [FormsModule,CommonModule,Highlight ],
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter {
  @ViewChild('myBox') boxRef!: ElementRef;
  counter:number = 90;
  backgroundcolor:string ='lightgreen'
  status:boolean = true
  increment = () => {
    console.log(2323);
    
    this.counter++
  }

  decrement = () => this.counter--

  onHover = () =>{
    this.backgroundcolor = 'yellow'
   this.boxRef.nativeElement.style.backgroundColor = 'lightgreen';
  }
}
