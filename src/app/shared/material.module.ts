import { NgModule } from '@angular/core';

// Material gesture support
import 'hammerjs';

const MATERIAL_MODULES: any[] = [];

@NgModule({
  imports: [ ...MATERIAL_MODULES ],
  exports: [ ...MATERIAL_MODULES ]
})
export class MaterialModule {
}
