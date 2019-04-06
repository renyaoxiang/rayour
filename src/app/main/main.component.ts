import {
  Component, SimpleChanges, OnInit, OnChanges,
  AfterViewInit, DoCheck, AfterViewChecked, AfterContentInit,
  AfterContentChecked, OnDestroy
} from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-main',
  template: '<div>main works</div>'
})
export class MainComponent implements OnInit,
  OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {

  constructor(private https: HttpClient) {
    console.log('AppComponent constructor');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('AppComponent ngOnChanges', changes);
  }
  ngDoCheck(): void {
    console.log('AppComponent ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('AppComponent ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('AppComponent ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('AppComponent ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('AppComponent ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('AppComponent ngOnDestroy');
  }
  ngOnInit(): void {
    console.log('AppComponent ngOnInit');
    this.doRequest().subscribe();
  }
  doRequest() {
    return this.https.get('/api/menu').pipe(tap(data => {
      console.log(data);
    }));
  }
}
