import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatMenuModule, MatSidenavModule } from '@angular/material';

import { AppComponent } from './app.component';
import { LineChartComponent } from './01_line_chart/line-chart.component';
import { PieChartComponent } from './06_pie_chart/pie-chart.component';
import { BubbleChartComponent } from './07_bubble_chart/bubble-chart.component';

const appRoutes: Routes = [
    { path: 'line-chart', component: LineChartComponent },
    { path: 'pie-chart', component: PieChartComponent },
    { path: 'bubble-chart', component: BubbleChartComponent },
    { path: '',
        redirectTo: '/line-chart',
        pathMatch: 'full'
    },
    { path: '**', component: LineChartComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        LineChartComponent,
        PieChartComponent,
        BubbleChartComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes),
        MatMenuModule,
        MatSidenavModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
