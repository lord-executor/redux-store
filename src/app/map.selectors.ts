import { createFeatureSelector, createSelector } from "@ngrx/store";
import { MapState } from "./map.model";

export const backgroundLayer = createFeatureSelector<MapState>('map');

export const backgroundLayerSelector = createSelector(
    backgroundLayer,
    map => map.selectedBackgroundLayer
);

export const overlaysSelector = createSelector(
    backgroundLayer,
    map => map.overlays
);