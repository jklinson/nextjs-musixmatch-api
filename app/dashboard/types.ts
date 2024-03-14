export interface TopArtist {
  artist: {
    artist_id: string;
    artist_name: string;
    artist_rating: string;
    artist_alias_list: [];
  };
}

export interface TopArtists {
  topArtists: TopArtist[];
}
