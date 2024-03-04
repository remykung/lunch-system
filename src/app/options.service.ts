import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OptionsService {
  private optionsSource = new BehaviorSubject<string[]>([]);
  currentOptions = this.optionsSource.asObservable();

  addOption(option:string) {
    const currentOptions = this.optionsSource.getValue();
    if (!currentOptions.includes(option)) {
      this.optionsSource.next([...currentOptions, option]);
    }
  }

  removeOption(option: string) {
    const currentOptions = this.optionsSource.getValue();
    const updatedOptions = currentOptions.filter(currentOption => currentOption !== option);
    this.optionsSource.next(updatedOptions);
  }

  constructor() { }
}
