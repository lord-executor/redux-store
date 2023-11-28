import { createAction, props } from "@ngrx/store";
import { LayerInfo, Overlays } from "./map.model";

export const setBackgroundLayerAction = createAction('setBackgroundLayer', props<{ layerId: string }>());

export const addOverlayAction = createAction('addOverlayAction', props<{ overlay: Overlays }>());
export const clearOverlayAction = createAction('clearOverlayAction');
