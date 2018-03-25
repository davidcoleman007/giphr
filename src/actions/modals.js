export const TOGGLE_GIF_VIEWER = 'TOGGLE_GIF_VIEWER';

export const toggleGifViewer = (gif=undefined) => {
  return {
    type: TOGGLE_GIF_VIEWER,
    gif
  };
};