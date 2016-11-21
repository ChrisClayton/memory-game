import { Component, Input, OnInit } from '@angular/core';
import {MemoryService} from "../memory/memory.service";
import {Card} from "./card";

@Component({
  selector: 'memory-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card:Card;

  constructor(private memory:MemoryService) { }

  ngOnInit() {
  }

}
