import { CanDeactivateFn } from '@angular/router';

export const otherGuardGuard: CanDeactivateFn<unknown> = (component: any, currentRoute, currentState, nextState) => {
  console.log(component);
  if(component.description.value == "") {
    return true
  }
  else {
    let kitxva = confirm("დაკარგავ მონაცემებს, მაინც გადიხარ?")
    if(kitxva) {
      return true
    } else {
      return false
    }
    
  }
  
 
};
