
export interface LayerInfo {
    id: string,
    label: string,
}

export enum Overlays {
    PopulationDensity = 0,
    Elevation = 1,
    Temperature = 2,
}

export interface MapState {
    backgroundLayers: readonly LayerInfo[],
    selectedBackgroundLayer: LayerInfo | null,
    overlays: ReadonlyArray<Overlays>
}