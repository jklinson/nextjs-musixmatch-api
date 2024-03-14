import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { TopArtist, TopArtists } from "./types";
import { musixmatchApi } from "@/utils/musixmatchApi";
import User from "@/models/User";
import ArtistAlbums from "@/components/ArtistAlbums";
import Image from "next/image";


const Dashboard = async () => {
  const session = await getServerSession();
  if (!session) {
    redirect("/");
  }

  let country = 'AU';
  if (session && session.user?.email) {
    const currentUser = await User.findOne({ email: session?.user?.email });
    country = currentUser.country;
  }
  let topArtists: TopArtists = { topArtists: [] };

  try {
    const data = await musixmatchApi.getTopArtists(country);
    topArtists = { topArtists: data.message.body.artist_list };
  } catch (error) {
    console.error('Error fetching top artists:', error);

  }


  return (
    <div className="flex flex-col items-center justify-between space-y-5">
      <div className="flex flex-col gap-10 m-10 lg:ext-5xl text-white font-extrabold sm:text-2xl md:text-xl xs:text-md">Top Charting Artists</div>
      {topArtists.topArtists.map((artist: TopArtist) => (
        <div key={artist.artist.artist_id} className="flex-grow container px-10 xs:px-2 sm:px-3 md:px-5 items-center justify-between">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-8">
              <div className="uppercase tracking-wide text-lg text-black-500 font-extrabold">{artist.artist.artist_name}</div>
              <div className="block mt-1 text-sm leading-tight font-medium text-gray-600  py-2">Rating : {artist.artist.artist_rating}</div>
              <ArtistAlbums artistId={artist.artist.artist_id} artistName={artist.artist.artist_name} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
