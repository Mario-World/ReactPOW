# Audio Visualiser

A simple browser-based audio visualiser. Select an audio file and see its waveform or frequency visualisation rendered on a canvas.

## Features

- Upload and play local audio files
- Real-time visualisation using HTML5 Canvas and Web Audio API
- Uses Fast Fourier Transform (FFT) for frequency analysis
- Responsive design

## About the Web Audio API

This project uses the [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) to process and analyse audio data in real time. The API provides powerful tools for audio playback, manipulation, and analysis directly in the browser.

## FFT and `fftSize`

The Fast Fourier Transform (FFT) is an algorithm that converts time-domain audio signals into their frequency-domain representation. This allows us to visualise the different frequencies present in the audio.

- The `AnalyserNode` in the Web Audio API performs FFT on the audio data.
- The `fftSize` property determines the size of the FFT. It must be a power of two between 32 and 32768.
- A larger `fftSize` provides higher frequency resolution but requires more processing power.

Example usage:
```javascript
const analyser = audioCtx.createAnalyser();
analyser.fftSize = 2048; // Common default value
```

## Getting Started

1. Clone or download this repository.
2. Open `index.html` in your web browser.
3. Select an audio file using the file input to start visualising.

## Project Structure

- `index.html` – Main HTML file with UI and canvas
- `index.js` – JavaScript for audio processing and visualisation


## Usage

No build steps required. Just open `index.html` in your browser.

## License