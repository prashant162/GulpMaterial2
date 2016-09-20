import {
  NgModule,
  ModuleWithProviders,
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Directive
} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'md-flipper',
  templateUrl: 'flipper.html',
  styleUrls: ['flipper.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdFlipper {}


@Component({
 moduleId: module.id,
 selector: 'md-front',
 templateUrl: 'front.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Front{}

@Component({
  moduleId: module.id,
  selector: 'md-back',
  templateUrl:'back.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Back{}


@NgModule({
  exports: [
    MdFlipper, Front, Back
  ],
  declarations: [
    MdFlipper, Front, Back
  ],
})
export class MdFlipperModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MdFlipperModule,
      providers: []
    };
  }
}