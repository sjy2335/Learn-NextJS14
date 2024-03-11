import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info/movie-info";
import MovieVideos from "../../../../components/movie-videos/movie-videos";
import { getMovie } from "../../../../components/movie-info/movie-info";

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default function MovieDetail({
  params: { id }, // comes from dynamic routing by NextJS
}: IParams) {
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
