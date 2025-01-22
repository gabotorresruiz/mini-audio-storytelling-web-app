export interface FreesoundAudioFile {
  id: number
  name: string
  previews: {
    'preview-hq-mp3': string
  }
  download: string
  description: string
  images: {
    waveform_m: string
  }
}

export interface FreesoundResponse {
  results: FreesoundAudioFile[]
}
