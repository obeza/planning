import { PipeTransform } from '@angular/core';
import { Moment } from 'moment';
import { CalendarDateFormatter } from './../providers/calendarDateFormatter.provider';
export declare class CalendarDate implements PipeTransform {
    private dateFormatter;
    private locale;
    constructor(dateFormatter: CalendarDateFormatter, locale: string);
    transform(date: Date | Moment, method: string, locale?: string): string;
}
