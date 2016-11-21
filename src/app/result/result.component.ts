import { Component, OnInit } from '@angular/core';
import {MemoryService} from "../memory/memory.service";

@Component({
  selector: 'memory-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private memory: MemoryService) { }

  ngOnInit() {
  }

}
