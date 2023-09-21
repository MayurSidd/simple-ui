import { Component, OnInit } from '@angular/core';

import HighlightsCount from 'src/app/_common/data/top-highlights.data';

import { Highlights } from 'src/app/_models/top-highlights.model';

@Component({
  selector: 'app-top-highlights',
  templateUrl: './top-highlights.component.html',
  styleUrls: ['./top-highlights.component.css'],
})
export class TopHighlightsComponent implements OnInit {
  _highlightsModel: Highlights = new Highlights();

  constructor() {}

  ngOnInit(): void {
    this._highlightsModel = HighlightsCount;
  }
}
