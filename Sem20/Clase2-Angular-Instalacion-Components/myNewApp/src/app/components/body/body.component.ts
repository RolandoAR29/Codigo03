import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent {

    /**
     * ngIf
     */
    show = true;
    text: any = {
        title: 'Este es el título de un card',
        messagge: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eius numquam esse totam mollitia, neque voluptatum blanditiis perferendis adipisci! Delectus, corporis itaque. Repellendus vitae minus pariatur quo nam ipsa omnis.'
    }

    /**
     * ngFor
     */
    powerRangers: string[] = [
        'Dino Trueno',
        'Fuerza del tiempo',
        'Fuerza salvaje',
        'RPM'
    ];
}