import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdinalPipe } from './ordinal.pipe';
import { MetersPipe } from './meters.pipe';
import { CanActivateChildGuard } from './guards/can-activate-child.guard';

@NgModule({
    imports: [CommonModule],
    exports: [OrdinalPipe, MetersPipe],
    declarations: [OrdinalPipe, MetersPipe],
    providers: [CanActivateChildGuard]
})
export class SharedModule { }
