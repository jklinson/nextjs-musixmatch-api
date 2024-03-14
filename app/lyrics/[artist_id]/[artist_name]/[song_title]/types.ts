export interface Track {
  track_id: number;
  track_name: string;
  has_lyrics: boolean;
  album_name: string;
}

export interface TrackInfo {
  track: Track;
}
