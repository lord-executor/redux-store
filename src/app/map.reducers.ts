import { createReducer, on } from "@ngrx/store";
import { MapState, Overlays } from "./map.model";
import { setBackgroundLayerAction } from "./map.actions";
import * as MapActions from "./map.actions";

export const initialState: MapState = {
    backgroundLayers: [
        { id: "first", label: "First Layer" },
        { id: "second", label: "Second Layer" },
        { id: "third", label: "Third Layer" },
    ],
    selectedBackgroundLayer: null,
    overlays: []
};

export const mapReducer = createReducer(
    initialState,
    on(setBackgroundLayerAction, (state, props) => {
        return {
            ...state,
            selectedBackgroundLayer: state.backgroundLayers.find(l => l.id === props.layerId) || null
        };
    }),
    on(MapActions.addOverlayAction, (state, { overlay }: { overlay: Overlays }) => {
        return {
            ...state,
            overlays: [...state.overlays, overlay]
        };
    }),
    on(MapActions.clearOverlayAction, (state) => {
        return {
            ...state,
            overlays: []
        };
    })
);
