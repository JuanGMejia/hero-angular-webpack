import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdinalPipe } from './ordinal.pipe';
import { MetersPipe } from './meters.pipe';

@NgModule({
    imports: [CommonModule],
    exports: [OrdinalPipe, MetersPipe],
    declarations: [OrdinalPipe, MetersPipe],
    providers: []
})
export class SharedModule { }
