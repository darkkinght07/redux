import { of } from 'rxjs';
import { initialAppState } from '../app.state';
export class MockAppStore {
  pipe() {
    return of(initialAppState);
  }
}
