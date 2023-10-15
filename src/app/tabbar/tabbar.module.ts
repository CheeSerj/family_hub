import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabbarComponent } from './tabbar.component';
import { TabMenuModule } from 'primeng/tabmenu';

@NgModule({
  declarations: [TabbarComponent],
  exports: [TabbarComponent],
  imports: [CommonModule, TabMenuModule]
})
export class TabbarModule {}
