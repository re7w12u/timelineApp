import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { DataSet } from 'vis-data/peer';
import { Timeline } from 'vis-timeline/peer';


@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class TimelineComponent implements OnInit, AfterViewInit {
  @ViewChild('visTimeline', { static: false }) visTimeline!: ElementRef;

  private timelineInstance: any;

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    // create an array with nodes
    const nodes = new DataSet<any>([
      { id: 1, content: 'item 1', start: '2014-04-20' },
      { id: 2, content: 'item 2', start: '2014-04-14' },
      { id: 3, content: 'item 3', start: '2014-04-18' },
      { id: 4, content: 'item 4', start: '2014-04-16', end: '2014-04-19' },
      { id: 5, content: 'item 5', start: '2014-04-25' },
      { id: 6, content: 'item 6', start: '2014-04-27', type: 'point' }
    ]);

    const container = this.visTimeline;
    this.timelineInstance = new Timeline(container.nativeElement, nodes, {});
  }

}
