import { Component, OnChanges, Input } from '@angular/core';
@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{
    @Input() rating= 0;
    starWidth= 0;

    ngOnChanges() : void {
        this.starWidth = this.rating * 75 / 5;
    }

    onClick(): void {
        console.log(this.starWidth +' - Clicked event fired - ' + this.rating);

    }
}
