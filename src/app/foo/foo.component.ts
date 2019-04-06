import {
  Component, OnInit, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit,
  AfterViewChecked, OnDestroy, SimpleChanges
} from "@angular/core";
import { DataResolver } from '../guard/DataResolver';
import { CanActiveChildGuard } from '../guard/CanActiveChildGuard';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-foo',
  template: '<div>foo works</div>'
})
export class FooComponent implements OnInit,
  OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {

  constructor(private https: HttpClient) {
    console.log('FooComponent constructor');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('FooComponent ngOnChanges', changes);
  }
  ngDoCheck(): void {
    console.log('FooComponent ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('FooComponent ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('FooComponent ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('FooComponent ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('FooComponent ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('FooComponent ngOnDestroy');
  }
  ngOnInit(): void {
    console.log('FooComponent ngOnInit');
    this.doRequest().subscribe();
  }
  doRequest() {
    return this.https.get('/api/menu').pipe(tap(data => {
      console.log(data);
    }));
  }
}
