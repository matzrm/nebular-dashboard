import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'numberToString', standalone: false

}) export class NumberToStringPipe implements PipeTransform {

transform(input: number): string{ //string type
   return input.toString();
} }