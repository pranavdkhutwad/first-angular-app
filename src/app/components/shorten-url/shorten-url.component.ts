import { Component } from '@angular/core';
import {NgTinyUrlService} from 'ng-tiny-url';

@Component({
    selector: 'app-shorten-url',
    templateUrl: './shorten-url.component.html',
    styleUrls: ['./shorten-url.component.css']
})
export class ShortenUrlComponent {
    title: string = 'Shorten URL';
    url: string = '';
    shortenUrl: string = '';
    errorMsg: string = '';

    constructor(private tinyUrl: NgTinyUrlService) {

    }
    getShortenUrl() {
        if (this.url) {
            this.tinyUrl.shorten(this.url).subscribe((res: string) => {
                this.shortenUrl = res;
            });
        } else {
            this.errorMsg = 'Input field should have url value.';
        }
        
    }
}