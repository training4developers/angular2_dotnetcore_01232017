import { Injectable } from "@angular/core";
import { createStore, Store, Action, Reducer } from "redux";

import { Observable, Observer } from "rxjs";
import "rxjs";

interface AppState {
    colors: string[];
}

const ADD_COLOR = "ADD_COLOR";

interface AddColorAction extends Action {
    color: string;
}

const addColorAction: (color: string) => AddColorAction = (color: string) => ({
    type: ADD_COLOR,
    color,
});

const reducer: Reducer<AppState> =
    (state: AppState = { colors: [] }, action: AddColorAction) => {

        switch(action.type) {
            case ADD_COLOR:
                return Object.assign({}, state, { colors: state.colors.concat(action.color) } );
            default:
                return state;
        }

    };


@Injectable()
export class AppStore {

    private appStore: Store<AppState>;

    public newState: Observable<AppState>;

    constructor() {
        this.appStore = createStore<AppState>(reducer);
        this.newState = Observable.create((observer: Observer<AppState>) => {
            this.appStore.subscribe(() => {
                observer.next(this.appStore.getState());
            });
        });
    }

    public getState() {
        return this.appStore.getState();
    }

    public addColor(newColor: string) {
        this.appStore.dispatch(addColorAction(newColor));
    }
}