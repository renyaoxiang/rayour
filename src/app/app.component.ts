import {
  Component, OnInit, OnDestroy, OnChanges,
  DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, SimpleChanges
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit,
  OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {

  title = 'rayour';
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
