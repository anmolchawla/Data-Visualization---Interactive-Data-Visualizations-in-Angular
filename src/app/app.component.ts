import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'World Percentage Rurual Population';

    examples = [
        {
            title: 'Line Chart',
            route: '/line-chart'
        },
        {
            title: 'Pie Chart',
            route: '/pie-chart'
        },
        {
            title: 'Bubble Chart',
            route: '/bubble-chart'
        },
    ];

}
