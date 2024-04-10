import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class User {
  user: any | null;
  loginNow(username: string, password: string) {
    fetch(
      `http://localhost:3000/user?username=${username}&password=${password}`
    )
      .then((response) => response.json())
      .then((data: any) => {
        if (data.length == 0) return false;
        else {
          this.user = data[0];
          return true;
        }
      });
  }
  logout() {
    this.user = null;
  }
  get() {
    return this.user;
  }
}
