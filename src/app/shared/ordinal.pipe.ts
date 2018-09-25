import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({ name: 'ordinal' })
export class OrdinalPipe implements PipeTransform {
  public transform(value: number): string {

    var j = value % 10, k = value % 100;

    if (j == 1 && k != 11) {
        return value + "st";
    }
    if (j == 2 && k != 12) {
        return value + "nd";
    }
    if (j == 3 && k != 13) {
        return value + "rd";
    }
    return value + "th";
  }
}