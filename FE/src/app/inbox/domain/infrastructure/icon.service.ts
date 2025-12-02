// File: FE/src/app/core/icon.service.ts
import { Injectable, inject } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class IconService {
  #iconRegistry = inject(MatIconRegistry);
  #sanitizer = inject(DomSanitizer);

  // List of icons to register
  #icons: { name: string; path: string }[] = [
    { name: 'three-dots-vertical', path: 'icons/three-dots-vertical.svg' },
    { name: 'sort-arrow-down', path: 'icons/sort-arrow-down.svg' },
    { name: 'grey-chevron-down', path: 'icons/grey-chevron-down.svg' },
    { name: 'history', path: 'icons/history.svg' },
    { name: 'minimize', path: 'icons/minimize.svg' },
    { name: 'medicine', path: 'icons/medicine.svg' },
    { name: 'message', path: 'icons/message.svg' },
    { name: 'icon_labs', path: 'icons/icon_labs.svg' },
    { name: 'hourglass', path: 'icons/hourglass.svg' },
  ];

  registerIcons(): void {
    this.#icons.forEach(icon => {
      this.#iconRegistry.addSvgIcon(
        icon.name,
        this.#sanitizer.bypassSecurityTrustResourceUrl(`assets/${icon.path}`)
      );
    });
  }
}
