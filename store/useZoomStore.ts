import {create} from 'zustand';

type ZoomType = {
    zoom: number;
    position: { x: number; y: number };
    setZoom: (newZoom: number) => void;
    setPosition: (newPosition: { x: number; y: number }) => void;
    resetZoom: () => void;
    };

export const useZoomStore = create<ZoomType>((set) => ({
    zoom: 8,
    position: { x: 50, y: 50 },
    setZoom: (newZoom) => set({ zoom: newZoom }),
    setPosition: (newPosition) => set({ position: newPosition }),
    resetZoom: () => set({ zoom: 1 }),
    }));

