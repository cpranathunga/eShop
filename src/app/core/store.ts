import { BehaviorSubject, Observable } from 'rxjs';

export class Store<T>{
  state$!: Observable<T>;
  private _state$!: BehaviorSubject<T>;

  protected constructor(initialState: T) {
    //initialize state set to behaviour subject
    this._state$ = new BehaviorSubject<T>(initialState);
    this.state$ = this._state$.asObservable();
  }

  //sync getter for state, this gives current state of store
  get state(): T {
    return this._state$.getValue();
  }

  protected setState(nextState: T): void {
    console.log('------------------------------------');
    console.log('Previos State', this.state);

    this._state$.next(nextState);

    console.log('Current State', this.state);
    console.log('------------------------------------');
  }
}
