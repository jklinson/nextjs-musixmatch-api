
import Image from 'next/image';
import { musixmatchApi } from '../utils/musixmatchApi';
import Link from 'next/link';

interface Album {
    album: {
        album_id: string;
        album_name: string;
        album_release_date: string;
    };
}

interface ArtistAlbumsProps {
    artistId: string;
    artistName: string;
}

const ArtistAlbums = async ({ artistId, artistName }: ArtistAlbumsProps) => {

    const data = await musixmatchApi.getArtistAlbums(artistId);
    const albums: Album[] = data.message.body.album_list;

    return (
        <div className="md:columns-3 xs:columns-1 sm:columns-1 space-y-5">
            {albums.map((album) => (
                <div key={album.album.album_id} className="">
                    <div className="xs:text-md text-base text-blue-700">{album.album.album_name}</div>
                    <div className="xs:text-xs text-sm text-gray-500">Released on: ${album.album.album_release_date}</div>
                    <div className="text-sm leading-6">
                        <Link
                            href={`/lyrics/${artistId}/${encodeURIComponent(artistName)}/${encodeURIComponent(album.album.album_name)}`}
                            className="text-blue-800 hover:text-sky-600 hover:underline"
                        >
                            View lyrics
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ArtistAlbums;