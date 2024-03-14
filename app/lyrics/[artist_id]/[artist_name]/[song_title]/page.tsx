import { musixmatchApi } from '@/utils/musixmatchApi';
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { TrackInfo } from './types';

const Lyrics = async (req: any) => {
    const session = await getServerSession();
    if (!session) {
        redirect("/");
    }

    const { artist_id, artist_name, song_title } = req.params;

    if (!artist_id || !artist_name || !song_title) {
        redirect("/");
    }
    const data = await musixmatchApi.searchTrack(song_title, artist_name, artist_id);
    const trackList: TrackInfo[] = data.message.body.track_list;
    let lyricsData;
    if (trackList?.length > 0) {
        const response = await musixmatchApi.getLyrics(trackList[0].track.track_id);
        lyricsData = response.message.body;

    }


    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col gap-10 m-10 items-center justify-center text-white font-extrabold sm:text-2xl md:text-xl xs:text-md">
                Lyrics Page
                <div className="flex flex-col h-3/4 rounded-md bg-white items-center justify-center">
                    {trackList?.length > 0 &&
                        <div>
                            <div className="flex flex-col pt-10 underline items-center justify-center text-2xl text-black space-y-8">{trackList[0].track.album_name}</div>
                            <div className="items-center p-10 sm:p-5 mx-10 text-md text-gray-600 m-auto">{lyricsData.lyrics.lyrics_body}</div>
                        </div>
                    }
                    {trackList?.length === 0 &&
                        // eslint-disable-next-line react/no-unescaped-entities
                        <div className="items-center text-md p-10 sm:p-5 text-gray-600 m-auto">We are sorry!! Couldn't find the lyrics for you.</div>
                    }
                </div>
            </div>
        </div >
    );
};

export default Lyrics;
