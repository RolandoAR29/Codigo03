ng add @angular/localize        ->  Instalar idiomas en Angular

Añadir
    - LOCAL_ID    en   '@angular/core'
        import { NgModule, LOCALE_ID } from '@angular/core';
    - import localEs from '@angular/common/localEs/es';
    - registerLocaleData(localEs);

    {
      provide: LOCALE_ID,
      useValue: 'es'
    }
    en PROVIDERS

crear pipe
ng g p pipes/nombreDelPipe