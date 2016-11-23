import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MemoryService} from "./memory/memory.service";

@Component({
  selector: 'memory-game',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.css']
})
export class MemoryComponent implements OnInit {
  title = 'Memory';

  constructor(private memory: MemoryService, private router:Router){

  }

  ngOnInit(){
  }

  // newGame(){
  //   this.router.navigate(['']);
  //   this.memory.newGame();
  // }

  // about(){
  //   this.router.navigate(['/about']);
  // }

}
