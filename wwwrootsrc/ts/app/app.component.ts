import { Component, OnInit } from "@angular/core";


@Component({
    selector: "main",
    template: ``,
})
export class AppComponent implements OnInit {

    ngOnInit() {

        const initialState = 0;
        console.log("initial state", initialState);

        const reducer = (state: any = 0, action: any) => {
            switch(action.type) {
                case "ADD":
                    return state + action.data;
                case "SUBTRACT":
                    return state - action.data;
                default:
                    return state;
            }
        };

        function createStore(reducerFn: any, initialState: any) {
            let state = initialState;
            const subscribers: any[] = [];
            return {
                dispatch: (action: any) => {
                    state = reducerFn(state, action);
                    subscribers.forEach((fn) => fn());
                },
                getState: () => {
                    return state;
                },
                subscribe: (fn: any) => {
                    subscribers.push(fn);
                }
            };
        }

        const store = createStore(reducer, initialState);

        const actions = [
            { type: "ADD", data: 1 },
            { type: "SUBTRACT", data: 2 },
            { type: "ADD", data:3 },
            { type: "SUBTRACT", data: 4 },
            { type: "ADD", data: 5 }
        ];

        store.subscribe(() => {
            console.log("state", store.getState());
        });

        actions.forEach((action) => {
            store.dispatch(action);
        });

        const finalState = store.getState();

        console.log("final state", finalState);
    }

}
