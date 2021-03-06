import { PSketchesEnum } from './index';
import { SketchConfig, ISketch } from '../types/sketch';

const globalDefault = {
  photo: 1,
};

export const sketches: ISketch[] = [
  {
    name: 'pixelsort',
    assets: 'pixelsort\\assets',
    output: 'pixelsort\\output',
  },
  {
    name: 'pixeldrift',
    assets: 'pixeldrift\\assets',
    output: 'pixeldrift\\output',
  },
];

export const sketchesConfig: SketchConfig[] = [
  {
    name: 'pixelsort' as PSketchesEnum.pixelsort,
    parameters: ['mode'],
    values: {
      mode: {
        boundaries: [1, 2, 3],
        type: 'allowed',
      },
    },
    defaultConfig: {
      ...globalDefault,
      mode: 1,
    },
  },
  {
    name: 'pixeldrift' as PSketchesEnum.pixeldrift,
    parameters: ['channel', 'dir', 'amount'],
    values: {
      channel: {
        boundaries: [1, 2, 3],
        type: 'allowed',
      },
      dir: {
        boundaries: [1, 2],
        type: 'allowed',
      },
      amount: {
        boundaries: [0, 100],
        type: 'range',
      },
    },
    defaultConfig: {
      ...globalDefault,
      channel: 1,
      dir: 1,
      amount: 70,
    },
  },
];
