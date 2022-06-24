import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Word } from 'src/app/core/models';
import { DictionaryApiService } from 'src/app/core/services';

@Component({
  selector: 'la-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DictionaryComponent implements OnInit {
  words$: Observable<Word[]>

  constructor(private dictionaryService: DictionaryApiService) { 
    this.words$ = this.dictionaryService.getWords();
  }

  ngOnInit(): void {
  }

  trackBy(index: number, item: Word) {
    return item.id;
}

}
