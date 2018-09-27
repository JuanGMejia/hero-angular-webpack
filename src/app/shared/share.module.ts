import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdinalPipe } from './ordinal.pipe';
import { MetersPipe } from './meters.pipe';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
    imports: [CommonModule],
    exports: [OrdinalPipe, MetersPipe, LoadingComponent],
    declarations: [OrdinalPipe, MetersPipe, LoadingComponent],
    providers: []
})
export class SharedModule { }
