import { Video } from "@/lib/types";
import { Cell } from "./Cell";

export const Grid = ({ videos }: { videos: Video[] }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            {videos.map((video) => (
                <Cell key={video.key || video.id} video={video} />
            ))}
        </div>
    );
};
