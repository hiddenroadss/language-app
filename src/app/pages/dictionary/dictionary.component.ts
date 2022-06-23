import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'la-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DictionaryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
