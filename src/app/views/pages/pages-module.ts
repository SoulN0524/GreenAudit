import { NgModule } from "@angular/core";
import { CommonModule , JsonPipe , AsyncPipe } from "@angular/common";
import { IconSetService } from '@coreui/icons-angular'
import { provideNativeDateAdapter } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter , MAT_DATE_LOCALE } from '@angular/material/core';

import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
    declarations:[],
    providers:[
        IconSetService,
        provideNativeDateAdapter(),
        {
            provide: DateAdapter,
            useClass: MomentDateAdapter,
            deps: [MAT_DATE_LOCALE],
        }
    ],
    imports:[
        JsonPipe,
        AsyncPipe,
        CommonModule,
        PagesRoutingModule,
    ],
    exports:[
        
    ]
})
export class PagesModule{}