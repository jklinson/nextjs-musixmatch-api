const apiKey = process.env.MUSIX_MATCH_API_KEY;

export const musixmatchApi = {
  async getTopArtists(country: string): Promise<any> {
    try {
      const response = await fetch(
        `https://api.musixmatch.com/ws/1.1/chart.artists.get?page=1&page_size=10&country=${country}&apikey=${apiKey}`,
        { cache: "force-cache" }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching top artists:", error);
      throw error;
    }
  },

  async getArtistAlbums(artistId: string): Promise<any> {
    try {
      const response = await fetch(
        `https://api.musixmatch.com/ws/1.1/artist.albums.get?artist_id=${artistId}&s_release_date=desc&page=1&page_size=3&apikey=${apiKey}`,
        { cache: "force-cache" }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching artist albums:", error);
      throw error;
    }
  },
  async searchTrack(
    q_track: string,
    q_artist: string,
    f_artist_id: string
  ): Promise<any> {
    try {
      const queryParams = new URLSearchParams();
      queryParams.append("q_track", encodeURIComponent(q_track));
      queryParams.append("q_artist", encodeURIComponent(q_artist));
      queryParams.append("f_artist_id", encodeURIComponent(f_artist_id));
      queryParams.append("page", encodeURIComponent(1));
      queryParams.append("page_size", encodeURIComponent(1));

      const response = await fetch(
        `https://api.musixmatch.com/ws/1.1/track.search?apikey=${apiKey}&${queryParams.toString()}`,
        { cache: "force-cache" }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error searching for track:", error);
      throw error;
    }
  },

  async getLyrics(trackId: number): Promise<any> {
    try {
      const response = await fetch(
        `https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${trackId}&apikey=${apiKey}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching lyrics:", error);
      throw error;
    }
  },
};
