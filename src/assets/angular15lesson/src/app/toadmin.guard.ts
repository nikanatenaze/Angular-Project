import { CanActivateFn } from '@angular/router';

export const toadminGuard: CanActivateFn = (route, state) => {
 const adminUser = localStorage.getItem("admin")
 if(adminUser) {
  return true
 } else {
  return false;
 }
  
};
