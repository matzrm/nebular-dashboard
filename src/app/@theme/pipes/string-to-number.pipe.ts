import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'stringToNumber', standalone: false}) export class StringToNumberPipe implements PipeTransform {

transform(input: string): number{ //string type
   return parseInt(input, 10);
} }