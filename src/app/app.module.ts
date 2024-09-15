import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChiruComponent } from './chiru/chiru.component';
import { InterpolationBindingComponent } from './interpolation-binding/interpolation-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StructDirComponent } from './struct-dir/struct-dir.component';
import { AttrDirectiveComponent } from './attr-directive/attr-directive.component';
import { MycolorDirective } from './directives/mycolor.directive';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { TestComponent } from './test/test.component';
import { PredefinedPipesComponent } from './predefined-pipes/predefined-pipes.component';
import { MytitlecasePipe } from './pipes/mytitlecase.pipe';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { TdfComponent } from './tdf/tdf.component';
import { MdfComponent } from './mdf/mdf.component';

@NgModule({
  declarations: [
    AppComponent,
    ChiruComponent,
    InterpolationBindingComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    StructDirComponent,
    AttrDirectiveComponent,
    MycolorDirective,
    ProductsComponent,
    TestComponent,
    PredefinedPipesComponent,
    MytitlecasePipe,
    ParentComponent,
    ChildComponent,
    FirstComponent,
    SecondComponent,
    TdfComponent,
    MdfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, HttpClientModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
